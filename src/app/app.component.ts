import { Component, OnInit } from '@angular/core';

import { TawkMessengerAngular, TawkMessengerAngularModule } from 'tawk-messenger-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [TawkMessengerAngular]
})
export class AppComponent implements OnInit {
	title = 'tawk-messenger-angular';

	gw = '';

	constructor(
		public TawkMessengerAngular: TawkMessengerAngular
	) { }

	ngOnInit(): void {
		this.TawkMessengerAngular.init({
			propertyId: '5f30f1a6d1b59c4448ec4d90',
			widgetId: 'default'
		});
	}

	onLoad() {
		console.log('hello');
	}
}
