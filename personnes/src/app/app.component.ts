import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDLbynop7KtWXkII1_Iu9hdC-AM1DBzzbc",
      authDomain: "bookshelves-691df.firebaseapp.com",
      databaseURL: "https://bookshelves-691df.firebaseio.com",
      projectId: "bookshelves-691df",
      storageBucket: "bookshelves-691df.appspot.com",
      messagingSenderId: "366192701292",
      appId: "1:366192701292:web:3b9bb087fc045b4a1acd49",
      measurementId: "G-CXZEGCM4J8"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
