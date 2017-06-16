import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class DisciplinaService{
    disciplinas;
    constructor(public http:Http){

    }
    getDisciplinas(){
      
        return this.http.get('assets/disciplinas.json').map(res =>{
              res.json()
             
        });       
    }
  getConfiguration = (curso : string): Observable<Response> => {
    return this.http.get('assets/disciplinas.json').map(res => res.json().filter(obj => obj.curso === curso));             
    
  }
      
    
    
}

