import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

  currentFeature: string = "recipe";

  ngOnInit()
  {
    firebase.initializeApp({
      apiKey: "AIzaSyC_WGBEsP2ScaYkOBA1w4nAqkzQq80ec18",
      authDomain: "ng-recipe-book-829ac.firebaseapp.com"
    })
  }
}
