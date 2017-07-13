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
  private disciplinas;
  curso : string;
  private items : any;
  
  constructor(public navCtrl: NavController,
    public disciplinaService:DisciplinaService,
    public navParams:NavParams) {
     
    
    this.curso = this.navParams.get('curso');
     

     this.disciplinaService.getConfiguration(this.curso).subscribe((data) =>{
       this.disciplinas = data;
       this.initializeItems();
      
     });
    
   
  }
  initializeItems(){
     this.items = this.disciplinas;
  }

  
   getItems(ev) {

    // Reset items back to all of the items
    this.initializeItems()

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.disciplina.toLowerCase().includes(val.toLowerCase()));
      })
    }
  }
  itemSelected(disciplina) {
    this.navCtrl.push(Detalhe,{
        disciplina: disciplina
    });
  }

}
