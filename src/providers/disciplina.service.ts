import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Disciplina} from '../model/disciplina';

import 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class DisciplinaService{
    disciplinas;
    //url:string = 'http://54.208.105.99/api/v1/locations/1/courses/'
    url:string = "https://ab9la9wbm9.execute-api.us-east-1.amazonaws.com/v1/locations/1/courses/"


    urlSufix:string = '/course_disciplines'
    constructor(public http:Http){

    }

  public getDisciplines(courseId:number) : Promise<Disciplina[]> {
   var urlFinal = this.url + courseId + this.urlSufix
   
   return this.http.get(urlFinal)
    .toPromise()
    .then(response => response.json().Items.sort((a,b) =>{
      if(a.discipline_name < b.discipline_name) return -1;
      if(a.discipline_name > b.discipline_name) return 1;
    return 0;
    })  )
    
  }

    
}

