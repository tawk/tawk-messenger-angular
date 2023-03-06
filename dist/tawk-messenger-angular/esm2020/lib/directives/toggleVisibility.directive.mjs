import { Directive, HostListener } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../tawk-messenger-angular";
/* tslint:disable:directive-selector */
export class TawkToggleVisibilityDirective {
    constructor(TawkMessengerAngular) {
        this.TawkMessengerAngular = TawkMessengerAngular;
    }
    onClick() {
        this.TawkMessengerAngular.toggleVisibility();
    }
}
TawkToggleVisibilityDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkToggleVisibilityDirective, deps: [{ token: i1.TawkMessengerAngular }], target: i0.ɵɵFactoryTarget.Directive });
TawkToggleVisibilityDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: TawkToggleVisibilityDirective, selector: "[tawkToggleVisibility]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TawkToggleVisibilityDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tawkToggleVisibility]'
                }]
        }], ctorParameters: function () { return [{ type: i1.TawkMessengerAngular }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlVmlzaWJpbGl0eS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YXdrLW1lc3Nlbmdlci1hbmd1bGFyL3NyYy9saWIvZGlyZWN0aXZlcy90b2dnbGVWaXNpYmlsaXR5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSXhELHVDQUF1QztBQUl2QyxNQUFNLE9BQU8sNkJBQTZCO0lBQ3pDLFlBQ1Msb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDaEQsQ0FBQztJQUdHLE9BQU87UUFDYixJQUFJLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzswSEFSVyw2QkFBNkI7OEdBQTdCLDZCQUE2QjsyRkFBN0IsNkJBQTZCO2tCQUh6QyxTQUFTO21CQUFDO29CQUNWLFFBQVEsRUFBRSx3QkFBd0I7aUJBQ2xDOzJHQU9PLE9BQU87c0JBRGIsWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUYXdrTWVzc2VuZ2VyQW5ndWxhciB9IGZyb20gXCIuLi90YXdrLW1lc3Nlbmdlci1hbmd1bGFyXCI7XG5cbi8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW3Rhd2tUb2dnbGVWaXNpYmlsaXR5XSdcbn0pXG5leHBvcnQgY2xhc3MgVGF3a1RvZ2dsZVZpc2liaWxpdHlEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIFRhd2tNZXNzZW5nZXJBbmd1bGFyOiBUYXdrTWVzc2VuZ2VyQW5ndWxhclxuXHQpIHt9XG5cblx0QEhvc3RMaXN0ZW5lcignY2xpY2snKVxuXHRwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcblx0XHR0aGlzLlRhd2tNZXNzZW5nZXJBbmd1bGFyLnRvZ2dsZVZpc2liaWxpdHkoKTtcblx0fVxufVxuIl19