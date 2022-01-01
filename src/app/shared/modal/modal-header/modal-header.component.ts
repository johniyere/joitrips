import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'joi-modal-header',
  template: `<ng-content></ng-content>
    <i
      class="fa-solid fa-xmark fa-xl cursor-pointer"
      (click)="closeModal()"
    ></i>`,
  host: {
    class:
      'flex justify-between items-center bg-gray-300 py-4 px-6 rounded-t-xl',
  },
})
export class ModalHeaderComponent {
  constructor(private modalService: ModalService) {}

  closeModal() {
    this.modalService.close();
  }
}
