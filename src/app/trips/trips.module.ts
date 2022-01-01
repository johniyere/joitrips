import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TripsRoutingModule } from './trips-routing.module'
import { TripsComponent } from './trips.component'
import { TripComponent } from './trip/trip.component'
import { SharedModule } from '../shared/shared.module';
import { MapComponent } from './trip/map/map.component';
import { NewTripComponent } from './new-trip/new-trip.component'

@NgModule({
  declarations: [TripsComponent, TripComponent, MapComponent, NewTripComponent],
  imports: [CommonModule, TripsRoutingModule, SharedModule],
})
export class TripsModule {}
