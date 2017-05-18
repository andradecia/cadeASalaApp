import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Disciplinas} from '../../components/disciplinas/disciplinas'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 cursos = [
    'Geografia',
    'Pedagogia',
    'Tecnólogo em Segurança Pública e Social',
    'Tecnologia em Gestão de Turísmo',
    'Tecnologia em Sistemas de Computação'
  ];
  constructor(public navCtrl: NavController) {

  }
  itemSelected(curso: string) {
    this.navCtrl.push(Disciplinas);
  }

}
