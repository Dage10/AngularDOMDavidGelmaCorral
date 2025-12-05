import {Component, OnInit} from '@angular/core';
import {TextServei} from '../../text-servei';

@Component({
  selector: 'app-segon-component',
  imports: [],
  templateUrl: './segon-component.html',
  styleUrl: './segon-component.css',
})
export class SegonComponent implements OnInit{
  textPerMostrar= ""
  constructor(private textServei: TextServei) {
  }
  ngOnInit() {
    this.textPerMostrar = this.textServei.getText()
  }
}
