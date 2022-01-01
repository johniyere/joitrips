import { Component, OnInit } from '@angular/core';
import { FeatureCollection } from 'geojson';
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

      .marker {
        /* background-image: url('mapbox-icon.png'); */
        background-size: cover;
        width: 50px;
        height: 50px;
        background-color: red;
        border-radius: 50%;
        cursor: pointer;
      }
    `,
  ],
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 37.8;
  lng = -96;
  message = 'Hello World!';

  geojson: FeatureCollection = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.032, 38.913],
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-122.414, 37.776],
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California',
        },
      },
    ],
  };

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
      zoom: 3,
      center: [this.lng, this.lat],
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([this.lng, this.lat])
      .addTo(this.map);

    console.log(marker);

    this.map.on('click', (e) => {
      console.log(`A click event has occurred at ${e.lngLat}`);
      new mapboxgl.Marker()
        .setLngLat([e.lngLat.lng, e.lngLat.lat])
        .addTo(this.map as any);
    });
  }
}
