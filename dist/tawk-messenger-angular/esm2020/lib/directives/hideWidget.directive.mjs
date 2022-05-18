import { Directive, HostListener } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../tawk-messenger-angular";
/* tslint:disable:directive-selector */
export class TawkHideWidgetDirective {
    constructor(TawkMessengerAngular) {
        this.TawkMessengerAngular = TawkMessengerAngular;
    }
    onClick() {
        this.TawkMessengerAngular.hideWidget();
    }
}
TawkHideWidgetDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: TawkHideWidgetDirective, deps: [{ token: i1.TawkMessengerAngular }], target: i0.ɵɵFactoryTarget.Directive });
TawkHideWidgetDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.2", type: TawkHideWidgetDirective, selector: "[tawkHideWidget]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: TawkHideWidgetDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tawkHideWidget]'
                }]
        }], ctorParameters: function () { return [{ type: i1.TawkMessengerAngular }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZVdpZGdldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YXdrLW1lc3Nlbmdlci1hbmd1bGFyL3NyYy9saWIvZGlyZWN0aXZlcy9oaWRlV2lkZ2V0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSXhELHVDQUF1QztBQUl2QyxNQUFNLE9BQU8sdUJBQXVCO0lBQ25DLFlBQ1Msb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDaEQsQ0FBQztJQUdHLE9BQU87UUFDYixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7b0hBUlcsdUJBQXVCO3dHQUF2Qix1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFIbkMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO2lCQUM1QjsyR0FPTyxPQUFPO3NCQURiLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVGF3a01lc3NlbmdlckFuZ3VsYXIgfSBmcm9tIFwiLi4vdGF3ay1tZXNzZW5nZXItYW5ndWxhclwiO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1t0YXdrSGlkZVdpZGdldF0nXG59KVxuZXhwb3J0IGNsYXNzIFRhd2tIaWRlV2lkZ2V0RGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBUYXdrTWVzc2VuZ2VyQW5ndWxhcjogVGF3a01lc3NlbmdlckFuZ3VsYXJcblx0KSB7fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcblx0cHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG5cdFx0dGhpcy5UYXdrTWVzc2VuZ2VyQW5ndWxhci5oaWRlV2lkZ2V0KCk7XG5cdH1cbn1cbiJdfQ==