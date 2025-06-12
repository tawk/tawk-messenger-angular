import * as i0 from '@angular/core';
import { PLATFORM_ID, Injectable, Inject, Optional, Directive, HostListener, NgModule } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

class TawkMessengerAngular {
    constructor(rendererFactory, platformId, document) {
        this.rendererFactory = rendererFactory;
        this.platformId = platformId;
        this.document = document;
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }
    init(data) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();
        this.loadScript(data);
    }
    loadScript({ basePath = 'tawk.to', propertyId = '', widgetId = '', embedId = '', autoStart = true }) {
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
            window.Tawk_API.embedded = embedId;
        }
        if (!autoStart) {
            window.window.Tawk_API.autoStart = autoStart;
        }
        const s1 = this.renderer.createElement('script');
        s1.type = 'text/javascript';
        s1.async = true;
        s1.src = `https://embed.${basePath}/${propertyId}/${widgetId}`;
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        this.renderer.appendChild(this.document.head, s1);
    }
    start() {
        window.Tawk_API.start();
    }
    shutdown() {
        window.Tawk_API.shutdown();
    }
    hideWidget() {
        window.Tawk_API.hideWidget();
    }
    showWidget() {
        window.Tawk_API.showWidget();
    }
    maximize() {
        window.Tawk_API.maximize();
    }
    minimize() {
        window.Tawk_API.minimize();
    }
    toggle() {
        window.Tawk_API.toggle();
    }
    popup() {
        window.Tawk_API.popup();
    }
    toggleVisibility() {
        window.Tawk_API.toggleVisibility();
    }
    endChat() {
        window.Tawk_API.endChat();
    }
    getWindowType() {
        return window.Tawk_API.getWindowType();
    }
    getStatus() {
        return window.Tawk_API.getStatus();
    }
    isChatMaximized() {
        return window.Tawk_API.isChatMaximized();
    }
    isChatMinimized() {
        return window.Tawk_API.isChatMinimized();
    }
    isChatHidden() {
        return window.Tawk_API.isChatHidden();
    }
    isChatOngoing() {
        return window.Tawk_API.isChatOngoing();
    }
    isVisitorEngaged() {
        return window.Tawk_API.isVisitorEngaged();
    }
    onLoaded() {
        return window.Tawk_API.onLoaded();
    }
    onBeforeLoaded() {
        return window.Tawk_API.onBeforeLoaded();
    }
    widgetPosition() {
        return window.Tawk_API.widgetPosition();
    }
    visitor(data) {
        return window.Tawk_API.visitor = data;
    }
    setAttributes(attribute, callback) {
        window.Tawk_API.setAttributes(attribute, callback);
    }
    addEvent(event, metadata, callback) {
        window.Tawk_API.setAttributes(event, metadata, callback);
    }
    addTags(tags, callback) {
        window.Tawk_API.addTags(tags, callback);
    }
    removeTags(tags, callback) {
        window.Tawk_API.removeTags(tags, callback);
    }
    switchWidget(data, callback) {
        window.Tawk_API.switchWidget(data, callback);
    }
    customStyle(customStyle) {
        if (customStyle) {
            return window.Tawk_API.customStyle = customStyle;
        }
        return;
    }
    onLoad(callback) {
        window.addEventListener('tawkLoad', () => {
            callback();
        });
    }
    onStatusChange(callback) {
        window.addEventListener('tawkStatusChange', (status) => {
            callback(status.detail);
        });
    }
    onBeforeLoad(callback) {
        window.addEventListener('tawkBeforeLoad', () => {
            callback();
        });
    }
    onChatMaximized(callback) {
        window.addEventListener('tawkChatMaximized', () => {
            callback();
        });
    }
    onChatMinimized(callback) {
        window.addEventListener('tawkChatMinimized', () => {
            callback();
        });
    }
    onChatHidden(callback) {
        window.addEventListener('tawkChatHidden', () => {
            callback();
        });
    }
    onChatStarted(callback) {
        window.addEventListener('tawkChatStarted', () => {
            callback();
        });
    }
    onChatEnded(callback) {
        window.addEventListener('tawkChatEnded', () => {
            callback();
        });
    }
    onPrechatSubmit(callback) {
        window.addEventListener('tawkPrechatSubmit', (data) => {
            callback(data.detail);
        });
    }
    onOfflineSubmit(callback) {
        window.addEventListener('tawkOfflineSubmit', (data) => {
            callback(data.detail);
        });
    }
    onChatMessageVisitor(callback) {
        window.addEventListener('tawkChatMessageVisitor', (message) => {
            callback(message.detail);
        });
    }
    onChatMessageAgent(callback) {
        window.addEventListener('tawkChatMessageAgent', (message) => {
            callback(message.detail);
        });
    }
    onChatMessageSystem(callback) {
        window.addEventListener('tawkChatMessageSystem', (message) => {
            callback(message.detail);
        });
    }
    onAgentJoinChat(callback) {
        window.addEventListener('tawkAgentJoinChat', (data) => {
            callback(data.detail);
        });
    }
    onAgentLeaveChat(callback) {
        window.addEventListener('tawkAgentLeaveChat', (data) => {
            callback(data.detail);
        });
    }
    onChatSatisfaction(callback) {
        window.addEventListener('tawkChatSatisfaction', (satisfaction) => {
            callback(satisfaction.detail);
        });
    }
    onVisitorNameChanged(callback) {
        window.addEventListener('tawkVisitorNameChanged', (visitorName) => {
            callback(visitorName.detail);
        });
    }
    onFileUpload(callback) {
        window.addEventListener('tawkFileUpload', (link) => {
            callback(link.detail);
        });
    }
    onTagsUpdated(callback) {
        window.addEventListener('tawkTagsUpdated', (data) => {
            callback(data.detail);
        });
    }
    onUnreadCountChanged(callback) {
        window.addEventListener('tawkUnreadCountChanged', (data) => {
            callback(data.detail);
        });
    }
}
TawkMessengerAngular.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkMessengerAngular, deps: [{ token: i0.RendererFactory2 }, { token: PLATFORM_ID }, { token: DOCUMENT, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
TawkMessengerAngular.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkMessengerAngular, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkMessengerAngular, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.RendererFactory2 }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });

/* tslint:disable:directive-selector */
class TawkMaximizeDirective {
    constructor(TawkMessengerAngular) {
        this.TawkMessengerAngular = TawkMessengerAngular;
    }
    onClick() {
        this.TawkMessengerAngular.maximize();
    }
}
TawkMaximizeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkMaximizeDirective, deps: [{ token: TawkMessengerAngular }], target: i0.ɵɵFactoryTarget.Directive });
TawkMaximizeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TawkMaximizeDirective, selector: "[tawkMaximize]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkMaximizeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tawkMaximize]'
                }]
        }], ctorParameters: function () { return [{ type: TawkMessengerAngular }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });

/* tslint:disable:directive-selector */
class TawkMinimizeDirective {
    constructor(TawkMessengerAngular) {
        this.TawkMessengerAngular = TawkMessengerAngular;
    }
    onClick() {
        this.TawkMessengerAngular.minimize();
    }
}
TawkMinimizeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkMinimizeDirective, deps: [{ token: TawkMessengerAngular }], target: i0.ɵɵFactoryTarget.Directive });
TawkMinimizeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TawkMinimizeDirective, selector: "[tawkMinimize]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkMinimizeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tawkMinimize]'
                }]
        }], ctorParameters: function () { return [{ type: TawkMessengerAngular }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });

/* tslint:disable:directive-selector */
class TawkToggleDirective {
    constructor(TawkMessengerAngular) {
        this.TawkMessengerAngular = TawkMessengerAngular;
    }
    onClick() {
        this.TawkMessengerAngular.toggle();
    }
}
TawkToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkToggleDirective, deps: [{ token: TawkMessengerAngular }], target: i0.ɵɵFactoryTarget.Directive });
TawkToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TawkToggleDirective, selector: "[tawkToggle]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tawkToggle]'
                }]
        }], ctorParameters: function () { return [{ type: TawkMessengerAngular }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });

/* tslint:disable:directive-selector */
class TawkShowWidgetDirective {
    constructor(TawkMessengerAngular) {
        this.TawkMessengerAngular = TawkMessengerAngular;
    }
    onClick() {
        this.TawkMessengerAngular.showWidget();
    }
}
TawkShowWidgetDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkShowWidgetDirective, deps: [{ token: TawkMessengerAngular }], target: i0.ɵɵFactoryTarget.Directive });
TawkShowWidgetDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TawkShowWidgetDirective, selector: "[tawkShowWidget]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkShowWidgetDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tawkShowWidget]'
                }]
        }], ctorParameters: function () { return [{ type: TawkMessengerAngular }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });

/* tslint:disable:directive-selector */
class TawkPopupDirective {
    constructor(TawkMessengerAngular) {
        this.TawkMessengerAngular = TawkMessengerAngular;
    }
    onClick() {
        this.TawkMessengerAngular.popup();
    }
}
TawkPopupDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkPopupDirective, deps: [{ token: TawkMessengerAngular }], target: i0.ɵɵFactoryTarget.Directive });
TawkPopupDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TawkPopupDirective, selector: "[tawkPopup]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkPopupDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tawkPopup]'
                }]
        }], ctorParameters: function () { return [{ type: TawkMessengerAngular }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });

/* tslint:disable:directive-selector */
class TawkHideWidgetDirective {
    constructor(TawkMessengerAngular) {
        this.TawkMessengerAngular = TawkMessengerAngular;
    }
    onClick() {
        this.TawkMessengerAngular.hideWidget();
    }
}
TawkHideWidgetDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkHideWidgetDirective, deps: [{ token: TawkMessengerAngular }], target: i0.ɵɵFactoryTarget.Directive });
TawkHideWidgetDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TawkHideWidgetDirective, selector: "[tawkHideWidget]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkHideWidgetDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tawkHideWidget]'
                }]
        }], ctorParameters: function () { return [{ type: TawkMessengerAngular }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });

/* tslint:disable:directive-selector */
class TawkToggleVisibilityDirective {
    constructor(TawkMessengerAngular) {
        this.TawkMessengerAngular = TawkMessengerAngular;
    }
    onClick() {
        this.TawkMessengerAngular.toggleVisibility();
    }
}
TawkToggleVisibilityDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkToggleVisibilityDirective, deps: [{ token: TawkMessengerAngular }], target: i0.ɵɵFactoryTarget.Directive });
TawkToggleVisibilityDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TawkToggleVisibilityDirective, selector: "[tawkToggleVisibility]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkToggleVisibilityDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tawkToggleVisibility]'
                }]
        }], ctorParameters: function () { return [{ type: TawkMessengerAngular }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });

/* tslint:disable:directive-selector */
class TawkEndChatDirective {
    constructor(TawkMessengerAngular) {
        this.TawkMessengerAngular = TawkMessengerAngular;
    }
    onClick() {
        this.TawkMessengerAngular.endChat();
    }
}
TawkEndChatDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkEndChatDirective, deps: [{ token: TawkMessengerAngular }], target: i0.ɵɵFactoryTarget.Directive });
TawkEndChatDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TawkEndChatDirective, selector: "[tawkEndChat]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkEndChatDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tawkEndChat]'
                }]
        }], ctorParameters: function () { return [{ type: TawkMessengerAngular }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });

class TawkMessengerAngularModule {
}
TawkMessengerAngularModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkMessengerAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TawkMessengerAngularModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkMessengerAngularModule, declarations: [TawkMaximizeDirective,
        TawkMinimizeDirective,
        TawkToggleDirective,
        TawkPopupDirective,
        TawkShowWidgetDirective,
        TawkHideWidgetDirective,
        TawkToggleVisibilityDirective,
        TawkEndChatDirective], exports: [TawkMaximizeDirective,
        TawkMinimizeDirective,
        TawkToggleDirective,
        TawkPopupDirective,
        TawkShowWidgetDirective,
        TawkHideWidgetDirective,
        TawkToggleVisibilityDirective,
        TawkEndChatDirective] });
TawkMessengerAngularModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkMessengerAngularModule, providers: [
        TawkMessengerAngular
    ], imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkMessengerAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [
                        TawkMaximizeDirective,
                        TawkMinimizeDirective,
                        TawkToggleDirective,
                        TawkPopupDirective,
                        TawkShowWidgetDirective,
                        TawkHideWidgetDirective,
                        TawkToggleVisibilityDirective,
                        TawkEndChatDirective
                    ],
                    exports: [
                        TawkMaximizeDirective,
                        TawkMinimizeDirective,
                        TawkToggleDirective,
                        TawkPopupDirective,
                        TawkShowWidgetDirective,
                        TawkHideWidgetDirective,
                        TawkToggleVisibilityDirective,
                        TawkEndChatDirective
                    ],
                    providers: [
                        TawkMessengerAngular
                    ]
                }]
        }] });

/*
 * Public API Surface of tawk-messenger-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TawkEndChatDirective, TawkHideWidgetDirective, TawkMaximizeDirective, TawkMessengerAngular, TawkMessengerAngularModule, TawkMinimizeDirective, TawkPopupDirective, TawkShowWidgetDirective, TawkToggleDirective, TawkToggleVisibilityDirective };
//# sourceMappingURL=tawk.to-tawk-messenger-angular.mjs.map
