import { Directive, HostListener } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../tawk-messenger-angular";
/* tslint:disable:directive-selector */
export class TawkEndChatDirective {
    constructor(TawkMessengerAngular) {
        this.TawkMessengerAngular = TawkMessengerAngular;
    }
    onClick() {
        this.TawkMessengerAngular.endChat();
    }
}
TawkEndChatDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: TawkEndChatDirective, deps: [{ token: i1.TawkMessengerAngular }], target: i0.ɵɵFactoryTarget.Directive });
TawkEndChatDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.2", type: TawkEndChatDirective, selector: "[tawkEndChat]", host: { listeners: { "click": "onClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: TawkEndChatDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tawkEndChat]'
                }]
        }], ctorParameters: function () { return [{ type: i1.TawkMessengerAngular }]; }, propDecorators: { onClick: [{
                type: HostListener,
                args: ['click']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kQ2hhdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YXdrLW1lc3Nlbmdlci1hbmd1bGFyL3NyYy9saWIvZGlyZWN0aXZlcy9lbmRDaGF0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSXhELHVDQUF1QztBQUl2QyxNQUFNLE9BQU8sb0JBQW9CO0lBQ2hDLFlBQ1Msb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDaEQsQ0FBQztJQUdHLE9BQU87UUFDYixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckMsQ0FBQzs7aUhBUlcsb0JBQW9CO3FHQUFwQixvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFIaEMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUsZUFBZTtpQkFDekI7MkdBT08sT0FBTztzQkFEYixZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRhd2tNZXNzZW5nZXJBbmd1bGFyIH0gZnJvbSBcIi4uL3Rhd2stbWVzc2VuZ2VyLWFuZ3VsYXJcIjtcblxuLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbdGF3a0VuZENoYXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBUYXdrRW5kQ2hhdERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgVGF3a01lc3NlbmdlckFuZ3VsYXI6IFRhd2tNZXNzZW5nZXJBbmd1bGFyXG5cdCkge31cblxuXHRASG9zdExpc3RlbmVyKCdjbGljaycpXG5cdHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuXHRcdHRoaXMuVGF3a01lc3NlbmdlckFuZ3VsYXIuZW5kQ2hhdCgpO1xuXHR9XG59XG4iXX0=