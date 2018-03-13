import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {GoogleMap, GoogleMapOptions, GoogleMaps, GoogleMapsEvent, Marker, MarkerOptions} from "@ionic-native/google-maps";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private mapOptions: GoogleMapOptions;
  private map: GoogleMap;

  constructor(public navCtrl: NavController, private platform: Platform) {
    this.createMap();
  }

  ionViewDidEnter(): void {
    if(this.map)  this.map.setVisible(true);
  }

  private createMap(): void {

    this.mapOptions = {
      controls: {
        myLocationButton: true,
      },
      gestures: {
        rotate: false,
        tilt: false
      },
      camera: {
        target: {
          lat: 20,
          lng: 20
        },
        zoom: 10
      }
    };

    this.platform.ready().then(() => {
      this.map = GoogleMaps.create('mapdiv', this.mapOptions);


      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        console.log('map ready');
      }, err => {
        console.log(err);
      });
    }, err => {
      console.log(err);
    });
  }

}
