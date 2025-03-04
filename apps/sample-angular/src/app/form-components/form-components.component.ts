import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mylib-sample-web-form-components',
  templateUrl: './form-components.component.html',
})
export class FormComponentsComponent implements OnInit {
  myForm!: FormGroup;
  dropdownFormControl!: FormControl;

  dropdownItems = [
    {
      label: "CSV",
      desc: "Comma-separated values file.",
      value: "Item-1"
    },
    {
      icon: "cmdCloseFile16",
      label: "PDF",
      desc: "Files that cannot be modified.",
      value: "Item-2"
    },
    {
      icon: "cmdImage16",
      label: "PNG",
      desc: "Lossless data compression. ",
      value: "Item-3"
    },
    {
      label: "EWI",
      desc: "Only with appropriate software. Only with appropriate software. Only with appropriate software. Only with appropriate software. Only with appropriate software. Only with appropriate software. Only with appropriate software. Only with appropriate software. Only with appropriate software. Only with appropriate software. Only with appropriate software. Only with appropriate software. Only with appropriate software. ",
      value: "Item-4"
    },
    {
      icon: "cmdCloudConsole32",
      label: "SVG",
      desc: "Two-dimensional file format. Two-dimensional file format. Two-dimensional file format. Two-dimensional file format. Two-dimensional file format. ",
      value: "Item-5"
    }
  ];

  checkboxGroupItems = JSON.stringify([
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

  valueChangedHandler = (e: any) => e?.detail?.newValue;
  checkChangedHandler = (e: any) => e?.detail?.checked;
  checkGroupChangedHandler = (e: any) => JSON.parse(e?.detail?.selectedItems);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      mylibInputField: [''],
      mylibCheckbox: [true],
      mylibCheckboxGroup: [''],
      mylibRadioGroup: [''],
      mylibTextarea: [''],
      mylibDatepicker: [''],
      mylibTimepicker: [''],
    });

    this.dropdownFormControl = new FormControl(['Item-1', 'Item-2']);

    this.myForm.valueChanges.subscribe((value) => {
      console.log('Form Value Changed:', value);
    });

    this.dropdownFormControl.valueChanges.subscribe((value) => {
        console.log('Dropdown Form Control Value Changed:', value);
    });
  }

  dropdownValueChanged(e: any) {
    this.dropdownFormControl?.setValue(e?.detail?.value);
  }

}
