import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from '@my-lib-org/mylib/loader';
import { MylibFormControlWrapper } from './components';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  BooleanValueAccessor,
  TextValueAccessor,
  ControllableTextValueAccessor,
  ControllableSelectValueAccessor,
  GroupValueAccessor
} from './directives/control-value-accessors';

const DECLARATIONS = [
  // generated proxies
  ...DIRECTIVES,

  // Custom Components
  MylibFormControlWrapper,

  // ngModel accessors
  BooleanValueAccessor,
  TextValueAccessor,
  ControllableTextValueAccessor,
  ControllableSelectValueAccessor,
  GroupValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    },
  ]
})
export class MylibModule { }
