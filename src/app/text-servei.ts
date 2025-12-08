import { Injectable } from '@angular/core';
import {Llibre} from './llibre.model';

@Injectable({
  providedIn: 'root',
})
export class TextServei {

  private text: string = "";
  private llibre!: Llibre;

  setText(valor: string) {
    this.text = valor;
  }

  getText(): string {
    return this.text;
  }

  setLlibre(llibre: Llibre) {
    this.llibre = llibre;
  }

  getLlibre(): Llibre {
    return this.llibre;
  }

}
