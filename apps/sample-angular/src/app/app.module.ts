import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MylibModule } from '@my-lib-org/mylib-angular';

import { AppComponent } from './app.component';

import { NgModelComponent } from './form-components/ng-model.component';
import { FormComponentsComponent } from './form-components/form-components.component';

@NgModule({
  declarations: [AppComponent, FormComponentsComponent, NgModelComponent],
  imports: [BrowserModule, MylibModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
