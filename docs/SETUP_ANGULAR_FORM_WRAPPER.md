# MylibFormControlWrapper Component Documentation

The `MylibFormControlWrapper` component is a custom Angular component designed to simplify the integration of stencil components with Angular's reactive forms. It serves as a bridge between stencil components and Angular's form controls, making it easier to manage and synchronize form data.

## Installation

To use the `MylibFormControlWrapper` component, follow these steps:

1. Make sure you have Angular and the required dependencies installed in your project.

2. Import the necessary MylibModule from (./SETUP__ANGULAR.md) into your Angular application.

## Usage

To use the `MylibFormControlWrapper` component, follow these steps:

1. Add the MylibFormControlWrapper component to your Angular template, wrapping your stencil component inside it. You can use either the formControlName or formControl input to bind it to an Angular form control.

<mylib-form-control-wrapper [formControlName]="yourFormControlName">
  <!-- Your stencil component goes here -->
</mylib-form-control-wrapper>

2. Customize the bindPropertyName, bindEventName, and valueChangedHandler inputs to match your specific requirements.

<mylib-form-control-wrapper
  [formControlName]="yourFormControlName"
  [bindPropertyName]="yourCustomProperty"
  [bindEventName]="customEventName"
  [valueChangedHandler]="yourCustomHandler"
>
  <!-- Your stencil component goes here -->
</mylib-form-control-wrapper>

## Inputs and Configuration

The `MylibFormControlWrapper` component supports the following inputs:

- `formControlName` (optional): The name of the Angular form control to bind to.
- `formControl` (optional): A reference to the Angular form control to bind to.
- `bindPropertyName` (optional, default: 'value'): The property name to bind the stencil component's value to.
- `bindEventName` (optional, default: 'valueChanged'): The name of the event to listen to for changes in the stencil component.
- `valueChangedHandler` (optional): A custom function to handle value changes from the stencil component.

Example usage:

<mylib-form-control-wrapper
  [formControlName]="yourFormControlName"
  [bindPropertyName]="yourCustomProperty"
  [bindEventName]="customEventName"
  [valueChangedHandler]="yourCustomHandler"
>
  <!-- Your stencil component goes here -->
</mylib-form-control-wrapper>


