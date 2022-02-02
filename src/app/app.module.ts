import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { TawkMessengerAngular, TawkMessengerAngularModule } from 'tawk-messenger-angular';

@NgModule({
	declarations: [
    	AppComponent
  	],
  	imports: [
    	BrowserModule,
		TawkMessengerAngularModule
  	],
  	providers: [
		  TawkMessengerAngular
	],
  	bootstrap: [AppComponent]
})

export class AppModule { }
