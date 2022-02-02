import { Inject, Injectable, PLATFORM_ID, Optional, Renderer2, RendererFactory2, ViewEncapsulation, HostListener, Input } from "@angular/core";
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TawkMessengerAngular {
	private renderer: Renderer2

	constructor(
		private rendererFactory: RendererFactory2,
		@Inject(PLATFORM_ID) protected platformId: Object,
		@Optional() @Inject(DOCUMENT) private document: any,
	) {
		this.renderer = this.rendererFactory.createRenderer(null, null);
	}

	public init(data: any) {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		(<any>window).Tawk_API = (<any>window).Tawk_API || {};
		(<any>window).Tawk_LoadStart = new Date();

		this.loadScript(data);
	}

	private loadScript(data: { propertyId: string, widgetId: string, embedId: string}): void {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		if (data.embedId && data.embedId.length) {
			/**
			 * If the element with embedId as id we will create a new clement
			 */
			if (!document.getElementById(data.embedId)) {
				const element = this.renderer.createElement('div');

				this.renderer.setProperty(element, 'id', data.embedId);

				// Append the created div to the body element
				this.renderer.appendChild(document.body, element);
			}

			(<any>window).Tawk_API.embedded = data.embedId;
		}

		const s1 = this.renderer.createElement('script');
		s1.type = 'text/javascript'
		s1.async = true;
		s1.src = `https://embed.talk.lv/${data.propertyId}/${data.widgetId}`;
		s1.charset = 'UTF-8';
		s1.setAttribute('crossorigin', '*');
		this.renderer.appendChild(this.document.head, s1);
	}
}
