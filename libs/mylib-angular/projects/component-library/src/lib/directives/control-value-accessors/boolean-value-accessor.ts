import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { booleanValueComponents } from './constants';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: booleanValueComponents,
  host: {
    '(checkChanged)': 'handleChangeEvent($event.target.checked)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BooleanValueAccessor,
      multi: true
    }
  ]
})
export class BooleanValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }

  override writeValue(value: any) {
    this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
  }
}
