import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joi-form-field',
  template: ` <ng-content></ng-content> `,
  host: {
    class: 'block w-100',
  },
})
export class FormFieldComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
