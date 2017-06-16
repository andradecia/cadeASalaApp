import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Disciplinas} from '../../components/disciplinas/disciplinas'
import {DisciplinaService} from '../../providers/disciplina.service' 
import {AwsUtil} from '../../providers/aws.service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 cursos = [
    'Geografia',
    'Pedagogia',
    'Tecnologia em Gestão de Turísmo',
    'Tecnologia em Sistemas de Computação',
    'Tecnólogo em Segurança Pública e Social'
  ];
  constructor(public navCtrl: NavController,
    public awsUtil : AwsUtil) {

      
      
  }
 
  itemSelected(curso: string) {
    console.log(curso)
    this.navCtrl.push(Disciplinas,{
      curso : curso
    });
  }

}
