import { Component, OnInit } from '@angular/core';
import { ModalService } from '../shared/modal/modal.service';
import { NewTripComponent } from './new-trip/new-trip.component';

@Component({
  selector: 'joi-trips',
  template: `
    <div class="container mx-auto mt-8">
      <div class="flex flex-row justify-between items-center">
        <h1 class="font-display text-7xl">My trips</h1>

        <button joi-button (click)="openNewTripModal()">
          <i class="fa-solid fa-plus"></i>
          NEW TRIP
        </button>
      </div>
    </div>

    <a href="trips/1">Trip 1</a>
  `,
  styles: [],
})
export class TripsComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  openNewTripModal() {
    this.modalService.open(NewTripComponent);
  }
}
