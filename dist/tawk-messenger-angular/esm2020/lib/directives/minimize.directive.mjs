import { Directive, HostListener } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../tawk-messenger-angular";
/* tslint:disable:directive-selector */
export class TawkMinimizeDirective {
    constructor(TawkMessengerAngular) {
        this.TawkMessengerAngular = TawkMessengerAngular;
    }
    onClick() {
        this.TawkMessengerAngular.minimize();
    }
}
TawkMinimizeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: TawkMinimizeDirective, deps: [{ token: i1.TawkMessengerAngular }], target: i0.ɵɵFactoryTarget.Directive });
TawkMinimizeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.2", type: TawkMinimizeDirective, selector: "[tawkMinimize]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: TawkMinimizeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tawkMinimize]'
                }]
        }], ctorParameters: function () { return [{ type: i1.TawkMessengerAngular }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaW1pemUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGF3ay1tZXNzZW5nZXItYW5ndWxhci9zcmMvbGliL2RpcmVjdGl2ZXMvbWluaW1pemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFJeEQsdUNBQXVDO0FBSXZDLE1BQU0sT0FBTyxxQkFBcUI7SUFDakMsWUFDUyxvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNoRCxDQUFDO0lBR0csT0FBTztRQUNiLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QyxDQUFDOztrSEFSVyxxQkFBcUI7c0dBQXJCLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQUhqQyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzFCOzJHQU9PLE9BQU87c0JBRGIsWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUYXdrTWVzc2VuZ2VyQW5ndWxhciB9IGZyb20gXCIuLi90YXdrLW1lc3Nlbmdlci1hbmd1bGFyXCI7XG5cbi8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW3Rhd2tNaW5pbWl6ZV0nXG59KVxuZXhwb3J0IGNsYXNzIFRhd2tNaW5pbWl6ZURpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgVGF3a01lc3NlbmdlckFuZ3VsYXI6IFRhd2tNZXNzZW5nZXJBbmd1bGFyXG5cdCkge31cblxuXHRASG9zdExpc3RlbmVyKCdjbGljaycpXG5cdHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuXHRcdHRoaXMuVGF3a01lc3NlbmdlckFuZ3VsYXIubWluaW1pemUoKTtcblx0fVxufVxuIl19