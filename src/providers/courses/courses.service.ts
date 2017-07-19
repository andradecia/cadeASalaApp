import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import {Course} from '../../model/course'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


/*
  Generated class for the CoursesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CoursesService {

 cursos:Course[] = [
    
 
  ];
  

  courses:Course[] = [];
  //url:string = "http://54.208.105.99/api/v1/locations/1/courses";
  url:string = "https://ab9la9wbm9.execute-api.us-east-1.amazonaws.com/v1/locations/1/courses"
  constructor(public http: Http) {
    
  }
  
  public getCourses(location:number) : Promise<Course[]> {
   return this.http.get(this.url)
    .toPromise()
    .then(response => response.json().Items.sort((a,b) =>{
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
    return 0;
    }) as Course[] )
    
  }
  
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
