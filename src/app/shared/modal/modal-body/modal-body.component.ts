import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joi-modal-body',
  template: ` <ng-content></ng-content>`,
  host: {
    class: 'block py-3 px-6 h-full',
  },
})
export class ModalBodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
