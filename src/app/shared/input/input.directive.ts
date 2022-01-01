import { Directive } from '@angular/core';

@Directive({
  selector: '[joiInput]',
  host: {
    class: 'border-2 rounded-lg hover:border-ultramarine-500 w-full',
  },
})
export class InputDirective {
  constructor() {}
}
