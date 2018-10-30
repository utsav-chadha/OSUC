import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Options } from 'selenium-webdriver/safari';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';




  ngOnInit() {

    // firebase.initializeApp(
    //   {
    //     apiKey: 'AIzaSyBf_XeH09SKHNZJDROyPJewWSkw0jeShjk',
    //     authDomain: 'edbud-a35c8.firebaseapp.com',
    //     databaseURL: 'https://edbud-a35c8.firebaseio.com',
    //     projectId: 'edbud-a35c8',
    //     storageBucket: 'edbud-a35c8.appspot.com',
    //     messagingSenderId: '1089352206049'
    //   }

    // );
  }
}
