import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
//@ts-ignore
import {changeSize, yellowSubmarine} from './scripts/funcions.js'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('AngularDOMDavidGelmaCorral');

  ngOnInit() {
    let element = document.getElementById('text');
    element!.innerHTML = element!.innerHTML.toUpperCase()

    let url = document.getElementById('url')
    url!.innerHTML = document.URL

    yellowSubmarine("titol")
    changeSize("taula","50px","50px")
  }
}
