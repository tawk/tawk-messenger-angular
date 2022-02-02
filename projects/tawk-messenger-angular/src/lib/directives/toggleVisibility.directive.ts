import { Directive, HostListener } from "@angular/core";

import { TawkMessengerAngular } from "../tawk-messenger-angular";

/* tslint:disable:directive-selector */
@Directive({
	selector: '[tawkToggleVisibility]'
})
export class TawkToggleVisibilityDirective {
	constructor(
		private TawkMessengerAngular: TawkMessengerAngular
	) {}

	@HostListener('click')
	public onClick(): void {
		this.TawkMessengerAngular.toggleVisibility();
	}
}
