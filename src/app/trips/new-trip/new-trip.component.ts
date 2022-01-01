import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'joi-new-trip',
  template: `
    <joi-modal-header>
      <h2 joiModalTitle>Create a new trip</h2>
    </joi-modal-header>
    <joi-modal-body>
      <form>
        <joi-form-field>
          <label joiLabel for="tripName">Trip name</label>
          <input joiInput type="text" id="tripName" />
        </joi-form-field>
      </form>
    </joi-modal-body>
    <joi-modal-footer>
      <button joi-button color="white" (click)="closeModal()">Cancel</button>
      <button joi-button color="ultramarine">Save</button>
    </joi-modal-footer>
  `,
  styles: [],
})
export class NewTripComponent {
  constructor(private modalService: ModalService) {}

  closeModal() {
    this.modalService.close();
  }
}
