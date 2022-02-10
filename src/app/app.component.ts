import { Component, OnInit } from '@angular/core';

import { TawkMessengerAngular } from 'tawk-messenger-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
	title = 'tawk-messenger-angular-workspace';

	constructor(
		public TawkMessengerAngular: TawkMessengerAngular
	) { }

	ngOnInit(): void {
		// this.TawkMessengerAngular.init({
		// 	propertyId: '<propertyId>',
		// 	widgetId: '<widgetId>'
		// });
	}
}
