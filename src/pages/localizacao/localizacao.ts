import { Component,  ViewChild, ElementRef  } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google;

@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html'
})
export class LocalizacaoPage {
   @ViewChild('map') mapElement: ElementRef;
    map: any;

  constructor(public navCtrl: NavController) {

  }
   ngOnInit(){
    this.loadMap();
    let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });
  }
   loadMap(){
 
    let latLng = new google.maps.LatLng(-22.882866,-43.082429);
 
    let mapOptions = {
      center: latLng,
      maxZoom: 20,
      minZoom:10,
      zoom: 15,
      streetViewControl: false,

      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }


}
