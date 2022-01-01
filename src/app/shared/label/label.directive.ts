import { Directive } from '@angular/core';

@Directive({
  selector: '[joiLabel]',
  host: {
    class: 'inline-block mb-2',
  },
})
export class LabelDirective {
  constructor() {}
}
