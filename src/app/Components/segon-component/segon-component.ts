import {Component, OnInit} from '@angular/core';
import {TextServei} from '../../text-servei';
import {Llibre} from '../../llibre.model';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-segon-component',
  imports: [NgFor],
  templateUrl: './segon-component.html',
  styleUrl: './segon-component.css',
})
export class SegonComponent implements OnInit{
  textPerMostrar= ""
  llibre!: Llibre;

  constructor(private textServei: TextServei) {
  }
  ngOnInit() {
    this.textPerMostrar = this.textServei.getText()
    this.llibre = this.textServei.getLlibre()
  }
}
