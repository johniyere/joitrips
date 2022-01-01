import { Directive } from '@angular/core';

@Directive({
  selector: '[joi-icon-button]',
  host: {
    class: 'hover:text-ultramarine-500',
  },
})
export class IconButtonDirective {
  constructor() {}
}
