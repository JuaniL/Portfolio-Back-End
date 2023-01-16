import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})
export class AppComponent implements OnInit{


  constructor(){


  }

  ngOnInit(): void {
    firebase.initializeApp({

      apiKey: "AIzaSyDV-PNsJ4NeEf1kCE3P9M7rnt2AvlfFW-A",
      authDomain: "portfolio-81a04.firebaseapp.com",
    })
  }

}

