import {Component, OnInit} from '@angular/core';
import {TextServei} from '../../text-servei';
import {Llibre} from '../../llibre.model';

@Component({
  selector: 'app-primer-component',
  imports: [],
  templateUrl: './primer-component.html',
  styleUrl: './primer-component.css',
})
export class PrimerComponent implements OnInit{

  constructor(private textServei: TextServei) {}

  ngOnInit() {
    const div = document.getElementById("text-comp1")
    this.textServei.setText(div!.innerText)

    const nouLlibre = new Llibre ("Garfield",["Comedia","Aventura","Infantil"])
    this.textServei.setLlibre(nouLlibre)
  }
}
