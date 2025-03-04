import { Component } from '@angular/core';

@Component({
  selector: 'mylib-sample-web-components-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sample-angular';
  items = JSON.stringify([
    {
      value: 'item-1',
      key: 'item-1',
      label: 'Item 1',
      disabled: false,
      dirty: false,
      checked: false,
    },
    {
      value: 'item-2',
      key: 'item-2',
      label: 'Item 2',
      disabled: false,
      dirty: false,
      checked: true,
    },
    {
      value: 'item-3',
      key: 'item-3',
      label: 'Item 3',
      disabled: false,
      dirty: false,
      checked: false,
    },
    {
      value: 'item-4',
      key: 'item-4',
      label: 'Item 4',
      disabled: false,
      dirty: false,
      checked: false,
    },
    {
      value: 'item-5',
      key: 'item-5',
      label: 'Item 5',
      disabled: false,
      dirty: false,
      checked: false,
    },
    {
      value: 'item-6',
      key: 'item-6',
      label: 'Item 6',
      disabled: false,
      dirty: false,
      checked: false,
    },
    {
      value: 'item-7',
      key: 'item-7',
      label: 'Item 7',
      disabled: false,
      dirty: false,
      checked: false,
    },
    {
      value: 'item-8',
      key: 'item-8',
      label: 'Item 8',
      disabled: false,
      dirty: false,
      checked: false,
    },
    {
      value: 'item-9',
      key: 'item-9',
      label: 'Item 9',
      disabled: false,
      dirty: false,
      checked: false,
    },
  ]);
  disabled = false;

  selectionChanged(e: any) {
    console.log(e, '----e');
  }

}
