import { Directive, HostListener } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../tawk-messenger-angular";
/* tslint:disable:directive-selector */
export class TawkPopupDirective {
    constructor(TawkMessengerAngular) {
        this.TawkMessengerAngular = TawkMessengerAngular;
    }
    onClick() {
        this.TawkMessengerAngular.popup();
    }
}
TawkPopupDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkPopupDirective, deps: [{ token: i1.TawkMessengerAngular }], target: i0.ɵɵFactoryTarget.Directive });
TawkPopupDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TawkPopupDirective, selector: "[tawkPopup]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkPopupDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tawkPopup]'
                }]
        }], ctorParameters: function () { return [{ type: i1.TawkMessengerAngular }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGF3ay1tZXNzZW5nZXItYW5ndWxhci9zcmMvbGliL2RpcmVjdGl2ZXMvcG9wdXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFJeEQsdUNBQXVDO0FBSXZDLE1BQU0sT0FBTyxrQkFBa0I7SUFDOUIsWUFDUyxvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNoRCxDQUFDO0lBR0csT0FBTztRQUNiLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzsrR0FSVyxrQkFBa0I7bUdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxhQUFhO2lCQUN2QjsyR0FPTyxPQUFPO3NCQURiLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVGF3a01lc3NlbmdlckFuZ3VsYXIgfSBmcm9tIFwiLi4vdGF3ay1tZXNzZW5nZXItYW5ndWxhclwiO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1t0YXdrUG9wdXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBUYXdrUG9wdXBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIFRhd2tNZXNzZW5nZXJBbmd1bGFyOiBUYXdrTWVzc2VuZ2VyQW5ndWxhclxuXHQpIHt9XG5cblx0QEhvc3RMaXN0ZW5lcignY2xpY2snKVxuXHRwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcblx0XHR0aGlzLlRhd2tNZXNzZW5nZXJBbmd1bGFyLnBvcHVwKCk7XG5cdH1cbn1cbiJdfQ==