import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Detalhe } from '../detalhe/detalhe';
import {DisciplinaService} from '../../providers/disciplina.service';

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
  disciplinas;
   
  
  constructor(public navCtrl: NavController,
  public disciplinaService:DisciplinaService,
  public navParams:NavParams) {
   
  }
  ngOnInit() {
    var curso = this.navParams.get('curso');
     this.disciplinaService.getConfiguration(curso).subscribe((data) =>{
       this.disciplinas = data;
      
     });
     console.log(this.disciplinas)
    
  }
  itemSelected(disciplina) {
    this.navCtrl.push(Detalhe,{
        disciplina: disciplina
    });
  }

}
