import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { controllableTextValueComponents } from './constants';

import { ControllableValueAccessor } from './controllable-value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: controllableTextValueComponents,
  host: {
    '(valueChange)': 'handleChangeEvent($event)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ControllableTextValueAccessor,
      multi: true
    }
  ]
})
export class ControllableTextValueAccessor extends ControllableValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
}
