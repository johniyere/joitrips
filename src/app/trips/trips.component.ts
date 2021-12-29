import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'joi-trips',
  template: `
    <p>trips works!</p>

    <a href="trips/1">Trip 1</a>
  `,
  styles: [],
})
export class TripsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
