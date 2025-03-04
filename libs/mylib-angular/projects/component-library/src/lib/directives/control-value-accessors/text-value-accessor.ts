import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { textValueComponents } from './constants';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: textValueComponents,
  host: {
    '(valueChanged)': 'handleChangeEvent($event.target.value)',
    '(changeInput)': 'handleChangeEvent($event.target.value)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessor,
      multi: true
    }
  ]
})
export class TextValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
}
