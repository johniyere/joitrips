import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'joi-map',
  template: ` <div class="map" id="map"></div>`,
  styles: [
    `
      #map {
        width: 100%;
        height: 100%;
        position: absolute;
      }
    `,
  ],
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 37.75;
  lng = -122.41;
  message = 'Hello World!';

  constructor() {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }

  ngOnInit(): void {
    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat],
    });
  }
}
