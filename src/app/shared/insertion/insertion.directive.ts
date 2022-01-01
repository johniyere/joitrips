import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[joiInsertion]',
})
export class InsertionDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
