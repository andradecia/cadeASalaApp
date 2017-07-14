import { Component ,OnInit } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { Detalhe } from '../detalhe/detalhe';
import {Disciplina} from '../../model/disciplina'
import {Course} from '../../model/course'
import {DisciplinaService} from '../../providers/disciplina.service';
import { Storage } from '@ionic/storage';

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
export class Disciplinas implements OnInit {

  text: string;
  private disciplinas:Disciplina[];
  curso : Course ;
  private items : any;

  
  
  constructor(public navCtrl: NavController,
    public disciplinaService:DisciplinaService,
    public navParams:NavParams,
    private storage : Storage,
    private loadingController: LoadingController
    ) {
      
  }
   ngOnInit() {

  let loading = this.loadingController.create({
    content: 'Aguarde baixando dados...'
  });
loading.present();

      this.curso = this.navParams.get('curso');

       this.storage.get("disciplines"+ "_" + this.curso.id).then((val) =>{
         this.disciplinas = val
         if(this.disciplinas == null || this.disciplinas.length == 0){
            console.log("fui na api")
            this.disciplinaService.getDisciplines(this.curso.id).then((data) =>{
            this.disciplinas = data;
           // console.log(this.disciplinas)
            this.initializeItems();
             this.storage.set("disciplines"+ "_" + this.curso.id,this.items);

          });

         }else{
           this.initializeItems()
         }
       });
       loading.dismiss();
   }


  initializeItems(){
     this.items = this.disciplinas;
  }

   doRefresh(refresher) {
    console.log("fui na api")
     this.disciplinaService.getDisciplines(this.curso.id).then((data) =>{
            this.disciplinas = data;
           // console.log(this.disciplinas)
            this.initializeItems();
            this.storage.remove('"disciplines"+ "_" + this.curso.id')
            this.storage.set('"disciplines"+ "_" + this.curso.id',this.items);
            refresher.complete();

          });    
    
  }

   getItems(ev) {

    // Reset items back to all of the items
    this.initializeItems()

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.discipline_name.toLowerCase().includes(val.toLowerCase()));
      })
    }
  }
  itemSelected(disciplina) {
    this.navCtrl.push(Detalhe,{
        disciplina: disciplina
    });
  }

}
