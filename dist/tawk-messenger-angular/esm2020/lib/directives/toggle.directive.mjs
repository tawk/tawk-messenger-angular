import { Directive, HostListener } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../tawk-messenger-angular";
/* tslint:disable:directive-selector */
export class TawkToggleDirective {
    constructor(TawkMessengerAngular) {
        this.TawkMessengerAngular = TawkMessengerAngular;
    }
    onClick() {
        this.TawkMessengerAngular.toggle();
    }
}
TawkToggleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: TawkToggleDirective, deps: [{ token: i1.TawkMessengerAngular }], target: i0.ɵɵFactoryTarget.Directive });
TawkToggleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.2", type: TawkToggleDirective, selector: "[tawkToggle]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: TawkToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tawkToggle]'
                }]
        }], ctorParameters: function () { return [{ type: i1.TawkMessengerAngular }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Rhd2stbWVzc2VuZ2VyLWFuZ3VsYXIvc3JjL2xpYi9kaXJlY3RpdmVzL3RvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUl4RCx1Q0FBdUM7QUFJdkMsTUFBTSxPQUFPLG1CQUFtQjtJQUMvQixZQUNTLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ2hELENBQUM7SUFHRyxPQUFPO1FBQ2IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BDLENBQUM7O2dIQVJXLG1CQUFtQjtvR0FBbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBSC9CLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLGNBQWM7aUJBQ3hCOzJHQU9PLE9BQU87c0JBRGIsWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUYXdrTWVzc2VuZ2VyQW5ndWxhciB9IGZyb20gXCIuLi90YXdrLW1lc3Nlbmdlci1hbmd1bGFyXCI7XG5cbi8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW3Rhd2tUb2dnbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBUYXdrVG9nZ2xlRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBUYXdrTWVzc2VuZ2VyQW5ndWxhcjogVGF3a01lc3NlbmdlckFuZ3VsYXJcblx0KSB7fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcblx0cHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG5cdFx0dGhpcy5UYXdrTWVzc2VuZ2VyQW5ndWxhci50b2dnbGUoKTtcblx0fVxufVxuIl19