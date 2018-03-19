import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared/shared.service'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';



export const firebaseConfig = {
  apiKey: "AIzaSyBdA7sfuErWcOKwmtI-8lnLpr07N6f5Yug",
  authDomain: "subbu-work1.firebaseapp.com",
  databaseURL: "https://subbu-work1.firebaseio.com",
  projectId: "subbu-work1",
  storageBucket: "gs://subbu-work1.appspot.com",
  messagingSenderId: "461016956415"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, // for database
    AngularFireAuthModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
