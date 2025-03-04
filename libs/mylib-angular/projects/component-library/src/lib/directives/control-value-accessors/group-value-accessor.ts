import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { groupValueComponents } from './constants';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: groupValueComponents,
  host: {
    '(selectionChanged)': 'handleChangeEvent($event?.detail?.selectedItems)',
    '(valueChange)': 'handleChangeEvent($event?.detail?.value)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: GroupValueAccessor,
      multi: true
    }
  ]
})
export class GroupValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
}
