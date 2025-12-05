import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextServei {

  private text: string = "";

  setText(valor: string) {
    this.text = valor;
  }

  getText(): string {
    return this.text;
  }

}
