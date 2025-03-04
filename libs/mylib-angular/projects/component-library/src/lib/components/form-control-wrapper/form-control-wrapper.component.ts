import { Component, AfterContentInit, Input, forwardRef, AfterViewInit, ElementRef } from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR, FormControl, ControlContainer } from '@angular/forms';

@Component({
  selector: 'mylib-form-control-wrapper',
  template: `<ng-content></ng-content>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MylibFormControlWrapper),
      multi: true,
    },
  ],
})
export class MylibFormControlWrapper implements ControlValueAccessor, AfterContentInit, AfterViewInit {
  @Input() formControlName?: string;
  @Input() formControl?: FormControl;
  @Input() bindPropertyName = 'value';
  @Input() bindEventName = 'valueChanged';
  @Input() valueChangedHandler = (e: CustomEvent<any>) => e?.detail?.value;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: any = () => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: any = () => {};

  constructor(private controlContainer: ControlContainer, private el: ElementRef) {}

  ngAfterContentInit() {
    if (this.formControlName && this.controlContainer instanceof FormGroupDirective) {
      const parentForm = (this.controlContainer.formDirective as FormGroupDirective)?.form;
      if (parentForm) {
        this.formControl = parentForm.get(this.formControlName) as FormControl;
      }
    }

    if (!this.formControl) {
      throw new Error(`[mylib-form-control-wrapper] The formControlName or formControl input is required.`);
    }
  }

  ngAfterViewInit() {
    const contentElement = this.el.nativeElement.childNodes[0];

    if (contentElement) {
      contentElement.addEventListener(this.bindEventName, (event: CustomEvent<any>) => {
        const val = this.valueChangedHandler(event);
        if (event?.detail?.type !== 'attribute') {
          this.formControl?.setValue(val);
        }
        contentElement.setAttribute(this.bindPropertyName, val);
        this.onTouched();
      });

      if (this.formControl) {
        contentElement.setAttribute(this.bindPropertyName, this.formControl.value);
      }
    }
  }

 writeValue(value: any): void {
  const contentElement = this.el.nativeElement.childNodes[0];
  if (contentElement) {
    contentElement.setAttribute(this.bindPropertyName, value);
  }
 }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      const contentElement = this.el.nativeElement.childNodes[0];
      if (contentElement) {
        contentElement.setAttribute('disabled', true);
      }
    } else {
      const contentElement = this.el.nativeElement.childNodes[0];
      if (contentElement) {
        contentElement.removeAttribute('disabled');
      }
    }
  }
}
