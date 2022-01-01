import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joi-modal-footer',
  template: ` <ng-content></ng-content> `,
  host: {
    class: 'flex items-center justify-end w-100 px-6 py-4 gap-3',
  },
})
export class ModalFooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
