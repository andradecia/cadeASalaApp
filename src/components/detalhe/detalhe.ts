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
 tutor:string;
 disciplina
  constructor(public navCtrl: NavController,
    public disciplinaService:DisciplinaService,
    public navParams:NavParams) { 
      this.tutor = "Leonardo"
    
   
  
  }
   ngOnInit() {
        this.disciplina = this.navParams.get('disciplina');
       
   }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    
    setTimeout(() => {
      console.log('Async operation has ended');
      this.tutor = "Elberth"
      refresher.complete();
    }, 2000);
  }
    
}
