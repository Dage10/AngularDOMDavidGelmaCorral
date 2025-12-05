import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
//@ts-ignore
import {augmentaPrimeraLletra, changeSize, countWords, yellowSubmarine} from './scripts/funcions.js'
import {PrimerComponent} from './Components/primer-component/primer-component';
import {SegonComponent} from './Components/segon-component/segon-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimerComponent,SegonComponent],
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
    augmentaPrimeraLletra("primera-lletra-gran")
    countWords("lorem-ipsum","resultat")

    const imatge = document.getElementById('imatge-contenidor');
    imatge!.innerHTML = '<img src="https://play-lh.googleusercontent.com/NN8G4Xc03GSv2_Tu-icuoeOwSo1xoZ4ouzUl24fVlwm5OeIAo7gV0zS1dVRWgCay-BU">'
  }
}
