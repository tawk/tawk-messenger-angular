import { NgModule } from '@angular/core';

// Directives
import { TawkMaximizeDirective } from './directives/maximize.directive';
import { TawkMinimizeDirective } from './directives/minimize.directive';
import { TawkToggleDirective } from './directives/toggle.directive';
import { TawkShowWidgetDirective } from './directives/showWidget.directive';
import { TawkPopupDirective } from './directives/popup.directive';
import { TawkHideWidgetDirective } from './directives/hideWidget.directive';
import { TawkToggleVisibilityDirective } from './directives/toggleVisibility.directive';
import { TawkEndChatDirective } from './directives/endChat.directive';

import { TawkMessengerAngular } from './tawk-messenger-angular';

@NgModule({
	imports: [
	],
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
})
export class TawkMessengerAngularModule { }
