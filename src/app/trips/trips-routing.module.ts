import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TripComponent } from './trip/trip.component'
import { TripsComponent } from './trips.component'

const routes: Routes = [
  {
    path: '',
    component: TripsComponent,
  },
  {
    path: ':id',
    component: TripComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripsRoutingModule {}
