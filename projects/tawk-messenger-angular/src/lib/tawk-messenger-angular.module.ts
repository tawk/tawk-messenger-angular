import { NgModule } from '@angular/core';
import { TawkMessengerAngularComponent } from './tawk-messenger-angular.component';
import { TawkMessengerAngular } from './tawk-messenger-angular';

@NgModule({
	declarations: [
    	TawkMessengerAngularComponent
  	],
  	imports: [
  	],
  	exports: [
    	TawkMessengerAngularComponent
  	],
  	providers: [
	  	TawkMessengerAngular
  	]
})
export class TawkMessengerAngularModule { }
