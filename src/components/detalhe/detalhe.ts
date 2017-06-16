import { Component } from '@angular/core';
import {Disciplina} from '../../model/disciplina'
import { NavController, NavParams } from 'ionic-angular';
import {DisciplinaService} from '../../providers/disciplina.service';

/**
 * Generated class for the Detalhe component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'detalhe',
  templateUrl: 'detalhe.html'
})
export class Detalhe {

 text: string;
 disciplina
  constructor(public navCtrl: NavController,
    public disciplinaService:DisciplinaService,
    public navParams:NavParams) { 
    
   
  
  }
   ngOnInit() {
        this.disciplina = this.navParams.get('disciplina');
        console.log(this.disciplina.disciplina)
   }

}
