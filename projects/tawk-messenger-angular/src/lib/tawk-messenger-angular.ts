import { Inject, Injectable, PLATFORM_ID, Optional, Renderer2, RendererFactory2 } from "@angular/core";
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TawkMessengerAngular {
	private renderer: Renderer2

	constructor(
		private rendererFactory: RendererFactory2,
		@Inject(PLATFORM_ID) protected platformId: Object,
		@Optional() @Inject(DOCUMENT) private document: any
	) {
		this.renderer = this.rendererFactory.createRenderer(null, null);
	}

	public init(data : any) : void {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		(<any>window).Tawk_API = (<any>window).Tawk_API || {};
		(<any>window).Tawk_LoadStart = new Date();

		this.loadScript(data);
	}

	private loadScript({ basePath = 'tawk.to', propertyId = '', widgetId = '', embedId = '' }): void {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		if (embedId && embedId.length) {
			/**
			 * If the element with embedId as id we will create a new clement
			 */
			if (!document.getElementById(embedId)) {
				const element = this.renderer.createElement('div');

				this.renderer.setProperty(element, 'id', embedId);

				// Append the created div to the body element
				this.renderer.appendChild(document.body, element);
			}

			(<any>window).Tawk_API.embedded = embedId;
		}

		const s1 = this.renderer.createElement('script');
		s1.type = 'text/javascript'
		s1.async = true;
		s1.src = `https://embed.${basePath}/${propertyId}/${widgetId}`;
		s1.charset = 'UTF-8';
		s1.setAttribute('crossorigin', '*');
		this.renderer.appendChild(this.document.head, s1);
	}

	public hideWidget(): void {
		(<any>window).Tawk_API.hideWidget();
	}

	public showWidget(): void {
		(<any>window).Tawk_API.showWidget();
	}

	public maximize(): void {
		(<any>window).Tawk_API.maximize();
	}

	public minimize(): void {
		(<any>window).Tawk_API.minimize();
	}

	public toggle(): void {
		(<any>window).Tawk_API.toggle();
	}

	public popup(): void {
		(<any>window).Tawk_API.popup();
	}

	public toggleVisibility(): void {
		(<any>window).Tawk_API.toggleVisibility();
	}

	public endChat(): void {
		(<any>window).Tawk_API.endChat();
	}

	public getWindowType(): string {
		return (<any>window).Tawk_API.getWindowType();
	}

	public getStatus(): string {
		return (<any>window).Tawk_API.getStatus();
	}

	public isChatMaximized(): boolean {
		return (<any>window).Tawk_API.isChatMaximized();
	}

	public isChatMinimized(): boolean {
		return (<any>window).Tawk_API.isChatMinimized();
	}

	public isChatHidden(): boolean {
		return (<any>window).Tawk_API.isChatHidden();
	}

	public isChatOngoing(): boolean {
		return (<any>window).Tawk_API.isChatOngoing();
	}

	public isVisitorEngaged(): boolean {
		return (<any>window).Tawk_API.isVisitorEngaged();
	}

	public onLoaded(): void {
		return (<any>window).Tawk_API.onLoaded();
	}

	public onBeforeLoaded(): void {
		return (<any>window).Tawk_API.onBeforeLoaded();
	}

	public widgetPosition(): void {
		return (<any>window).Tawk_API.widgetPosition();
	}

	public visitor(data: any) {
		return (<any>window).Tawk_API.visitor = data;
	}

	public setAttributes(attribute: object, callback: (error?: string | null) => void) {
		(<any>window).Tawk_API.setAttributes(attribute, callback);
	}

	public addEvent(event: string, metadata: Record<string, any> | null = null, callback: (error?: any | null) => void) {
		(<any>window).Tawk_API.addEvent(event, metadata, callback);
	}

	public addTags(tags: string[], callback: (error?: string | null) => void) {
		(<any>window).Tawk_API.addTags(tags, callback);
	}

	public removeTags(tags: string[], callback: (error?: string | null) => void) {
		(<any>window).Tawk_API.removeTags(tags, callback);
	}

	public customStyle(customStyle?: object | undefined) {
		if (customStyle) {
			return (<any>window).Tawk_API.customStyle = customStyle;
		}

		return;
	}

	public onLoad(callback?: any): void {
		window.addEventListener('tawkLoad', () => {
			callback();
		});
	}

	public onStatusChange(callback?: any): void {
		window.addEventListener('tawkStatusChange', (status?: any) => {
			callback(status.detail);
		});
	}

	public onBeforeLoad(callback?: any): void {
		window.addEventListener('tawkBeforeLoad', () => {
			callback();
		});
	}

	public onChatMaximized(callback?: any): void {
		window.addEventListener('tawkChatMaximized', () => {
			callback();
		});
	}

	public onChatMinimized(callback?: any): void {
		window.addEventListener('tawkChatMinimized', () => {
			callback();
		});
	}

	public onChatHidden(callback?: any): void {
		window.addEventListener('tawkChatHidden', () => {
			callback();
		});
	}

	public onChatStarted(callback?: any): void {
		window.addEventListener('tawkChatStarted', () => {
			callback();
		});
	}

	public onChatEnded(callback?: any): void {
		window.addEventListener('tawkChatEnded', () => {
			callback();
		});
	}

	public onPrechatSubmit(callback?: any): void {
		window.addEventListener('tawkPrechatSubmit', (data?: any) => {
			callback(data.detail);
		});
	}

	public onOfflineSubmit(callback?: any): void {
		window.addEventListener('tawkOfflineSubmit', (data?: any) => {
			callback(data.detail);
		});
	}

	public onChatMessageVisitor(callback?: any): void {
		window.addEventListener('tawkChatMessageVisitor', (message?: any) => {
			callback(message.detail);
		});
	}

	public onChatMessageAgent(callback?: any): void {
		window.addEventListener('tawkChatMessageAgent', (message?: any) => {
			callback(message.detail);
		});
	}

	public onChatMessageSystem(callback?: any): void {
		window.addEventListener('tawkChatMessageSystem', (message?: any) => {
			callback(message.detail);
		});
	}

	public onAgentJoinChat(callback?: any): void {
		window.addEventListener('tawkAgentJoinChat', (data?: any) => {
			callback(data.detail);
		});
	}

	public onAgentLeaveChat(callback?: any): void {
		window.addEventListener('tawkAgentLeaveChat', (data?: any) => {
			callback(data.detail);
		});
	}

	public onChatSatisfaction(callback?: any): void {
		window.addEventListener('tawkChatSatisfaction', (satisfaction?: any) => {
			callback(satisfaction.detail);
		});
	}

	public onVisitorNameChanged(callback?: any): void {
		window.addEventListener('tawkVisitorNameChanged', (visitorName?: any) => {
			callback(visitorName.detail);
		});
	}

	public onFileUpload(callback?: any): void {
		window.addEventListener('tawkFileUpload', (link?: any) => {
			callback(link.detail);
		});
	}

	public onTagsUpdated(callback?: any): void {
		window.addEventListener('tawkTagsUpdated', (data?: any) => {
			callback(data.detail);
		});
	}

	public onUnreadCountChanged(callback?: any): void {
		window.addEventListener('tawkUnreadCountChanged', (data?: any) => {
			callback(data.detail);
		});
	}
}
