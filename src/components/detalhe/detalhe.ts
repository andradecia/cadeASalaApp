import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello Detalhe Component');
    this.text = 'Hello World';
  }

}
