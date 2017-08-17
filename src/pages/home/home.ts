import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Disciplinas} from '../../components/disciplinas/disciplinas'
import {DisciplinaService} from '../../providers/disciplina.service' 
import {CoursesService} from '../../providers/courses/courses.service'
import {Course} from '../../model/course'
import { Storage } from '@ionic/storage';

import {AwsUtil} from '../../providers/aws.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  cursos:Course[];
  constructor(public navCtrl: NavController,
              private coursesService: CoursesService,
              private storage : Storage,
              public awsUtil : AwsUtil) {



  }
  ngOnInit() {
    this.storage.get("courses").then((val) =>{
     this.cursos = val
     if(this.cursos == null || this.cursos.length == 0){
        this.coursesService.getCourses(1).then(cursos => {
            this.cursos = cursos
            this.storage.set('courses',this.cursos);
          })
      }
    })
  }
  itemSelected(curso: string) {
    this.navCtrl.push(Disciplinas,{
      curso : curso
    });
  }

}
