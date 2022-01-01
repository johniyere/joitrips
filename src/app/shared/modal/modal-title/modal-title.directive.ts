import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[joiModalTitle]',
  host: {
    class: 'font-display text-xl',
  },
})
export class ModalTitleDirective {
  constructor() {}
}
