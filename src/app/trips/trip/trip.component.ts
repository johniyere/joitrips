import { Component } from '@angular/core';

@Component({
  selector: 'joi-trip',
  template: `
    <div
      class="bg-white w-80 h-screen fixed top-0 left-0 bottom-0 z-10 p-6 border-r-2 border-x-neutral-900"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <a joi-icon-button [routerLink]="'/trips'">
            <i class="fa-solid fa-arrow-left"></i>
          </a>

          <h1 class="font-bold">Trip title</h1>
        </div>

        <button joi-icon-button>
          <i class="fa-solid fa-ellipsis cursor-pointer"></i>
        </button>
      </div>
    </div>
    <joi-map></joi-map>
  `,
  styles: [``],
})
export class TripComponent {}
