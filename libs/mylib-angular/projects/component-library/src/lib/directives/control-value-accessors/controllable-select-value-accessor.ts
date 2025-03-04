import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { controllableSelectValueComponents } from './constants';

import { ControllableValueAccessor } from './controllable-value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: controllableSelectValueComponents,
  host: {
    '(valueChange)': 'handleChangeEvent($event)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ControllableSelectValueAccessor,
      multi: true
    }
  ]
})
export class ControllableSelectValueAccessor extends ControllableValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
}
