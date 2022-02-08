import { Inject, Injectable, PLATFORM_ID, Optional, Renderer2, RendererFactory2, Output, HostListener, EventEmitter } from "@angular/core";
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

		this.mapCallbacks();
	}

	public hideWidget(): void {
		return (<any>window).Tawk_API.hideWidget();
	}

	public showWidget(): void {
		return (<any>window).Tawk_API.showWidget();
	}

	public maximize(): void {
		return (<any>window).Tawk_API.maximize();
	}

	public minimize(): void {
		return (<any>window).Tawk_API.minimize();
	}

	public toggle(): void {
		return (<any>window).Tawk_API.toggle();
	}

	public popup(): void {
		return (<any>window).Tawk_API.popup();
	}

	public toggleVisibility(): void {
		return (<any>window).Tawk_API.toggleVisibility();
	}

	public endChat(): void {
		return (<any>window).Tawk_API.endChat();
	}

	public getWindowType(): void {
		return (<any>window).Tawk_API.getWindowType();
	}

	public getStatus(): void {
		return (<any>window).Tawk_API.getStatus();
	}

	public isChatMaximized(): void {
		return (<any>window).Tawk_API.isChatMaximized();
	}

	public isChatMinimized(): void {
		return (<any>window).Tawk_API.isChatMinimized();
	}

	public isChatHidden(): void {
		return (<any>window).Tawk_API.isChatHidden();
	}

	public isChatOngoing(): void {
		return (<any>window).Tawk_API.isChatOngoing();
	}

	public isVisitorEngaged(): void {
		return (<any>window).Tawk_API.isVisitorEngaged();
	}

	public onLoaded(): void {
		return (<any>window).Tawk_API.onLoaded();
	}

	public visitor(data: string) {
		return (<any>window).Tawk_API.visitor = data;
	}

	public setAttributes(attribute: string, callback: (ev: Event) => any) {
		return (<any>window).Tawk_API.setAttributes(attribute, callback);
	}

	public addEvent(event: string, metadata: any, callback: (ev: Event) => any) {
		return (<any>window).Tawk_API.setAttributes(event, metadata, callback);
	}

	public addTags(tags: any, callback: (ev: Event) => any) {
		return (<any>window).Tawk_API.addTags(tags, callback);
	}

	public removeTags(tags: any, callback: (ev: Event) => any) {
		return (<any>window).Tawk_API.removeTags(tags, callback);
	}

	@Output() onLoad: EventEmitter<any> = new EventEmitter();
	@Output() onStatusChange: EventEmitter<any> = new EventEmitter();
	@Output() onBeforeLoad: EventEmitter<any> = new EventEmitter();
	@Output() onChatMaximized: EventEmitter<any> = new EventEmitter();
	@Output() onChatMinimized: EventEmitter<any> = new EventEmitter();
	@Output() onChatHidden: EventEmitter<any> = new EventEmitter();
	@Output() onChatStarted: EventEmitter<any> = new EventEmitter();
	@Output() onChatEnded: EventEmitter<any> = new EventEmitter();
	@Output() onPrechatSubmit: EventEmitter<any> = new EventEmitter();
	@Output() onOfflineSubmit: EventEmitter<any> = new EventEmitter();
	@Output() onChatMessageVisitor: EventEmitter<any> = new EventEmitter();
	@Output() onChatMessageAgent: EventEmitter<any> = new EventEmitter();
	@Output() onChatMessageSystem: EventEmitter<any> = new EventEmitter();
	@Output() onAgentJoinChat: EventEmitter<any> = new EventEmitter();
	@Output() onAgentLeaveChat: EventEmitter<any> = new EventEmitter();
	@Output() onChatSatisfaction: EventEmitter<any> = new EventEmitter();
	@Output() onVisitorNameChanged: EventEmitter<any> = new EventEmitter();
	@Output() onFileUpload: EventEmitter<any> = new EventEmitter();
	@Output() onTagsUpdated: EventEmitter<any> = new EventEmitter();

	private mapCallbacks(): void {
		window.addEventListener('tawkLoad', () => {
			this.onLoad.emit(null);
		});

		window.addEventListener('tawkStatusChange', (status?: any) => {
			this.onStatusChange.emit(status.detail);
		});

		window.addEventListener('tawkBeforeLoad', () => {
			this.onBeforeLoad.emit(null);
		});

		window.addEventListener('tawkChatMaximized', () => {
			this.onChatMaximized.emit(null);
		});

		window.addEventListener('tawkChatMinimized', () => {
			this.onChatMinimized.emit(null);
		});

		window.addEventListener('tawkChatHidden', () => {
			this.onChatHidden.emit(null);
		});

		window.addEventListener('tawkChatStarted', () => {
			this.onChatStarted.emit(null);
		});

		window.addEventListener('tawkChatEnded', () => {
			this.onChatEnded.emit(null);
		});

		window.addEventListener('tawkPrechatSubmit', (data?: any) => {
			this.onPrechatSubmit.emit(data.detail);
		});

		window.addEventListener('tawkOfflineSubmit', (data?: any) => {
			this.onOfflineSubmit.emit(data.detail);
		});

		window.addEventListener('tawkChatMessageVisitor', (message?: any) => {
			this.onChatMessageVisitor.emit(message.detail);
		});

		window.addEventListener('tawkChatMessageAgent', (message?: any) => {
			this.onChatMessageAgent.emit(message.detail);
		});

		window.addEventListener('tawkChatMessageSystem', (message?: any) => {
			this.onChatMessageSystem.emit(message.detail);
		});

		window.addEventListener('tawkAgentJoinChat', (data?: any) => {
			this.onAgentJoinChat.emit(data.detail);
		});

		window.addEventListener('tawkAgentLeaveChat', (data?: any) => {
			this.onAgentLeaveChat.emit(data.detail);
		});

		window.addEventListener('tawkChatSatisfaction', (satisfaction?: any) => {
			this.onChatSatisfaction.emit(satisfaction.detail);
		});

		window.addEventListener('tawkVisitorNameChanged', (visitorName?: any) => {
			this.onVisitorNameChanged.emit(visitorName.detail);
		});

		window.addEventListener('tawkFileUpload', (link?: any) => {
			this.onFileUpload.emit(link.detail);
		});

		window.addEventListener('tawkTagsUpdated', (data?: any) => {
			this.onTagsUpdated.emit(data.detail);
		});

		return;
	}
}
