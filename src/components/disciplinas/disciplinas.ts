import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Detalhe } from '../detalhe/detalhe'

/**
 * Generated class for the Disciplinas component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'disciplinas',
  templateUrl: 'disciplinas.html'
})
export class Disciplinas {

  text: string;
  disciplinas= [
    'Biogeografia',
    'Cartografia Básica'
  ]
  constructor(public navCtrl: NavController) {
   
  }
  itemSelected(curso: string) {
    this.navCtrl.push(Detalhe);
  }

}
