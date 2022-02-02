import { Directive, HostListener, Input } from "@angular/core";

import { TawkMessengerAngular } from "../tawk-messenger-angular";

/* tslint:disable:directive-selector */
@Directive({
	selector: '[tawkEndChat]'
})
export class TawkEndChatDirective {
	constructor(
		private TawkMessengerAngular: TawkMessengerAngular
	) {}

	@HostListener('click')
	public onClick(): void {
		this.TawkMessengerAngular.endChat();
	}
}
