# Directives

## Quickstart
Import the **tawk-messenger-angular.module** in your **app.module.ts**

```js
import { TawkMessengerAngular, TawkMessengerAngularModule } from 'tawk-messenger-angular';

@NgModule({
  	imports: [
    	BrowserModule,
		TawkMessengerAngularModule
  	],
  	providers: [
		  TawkMessengerAngular
	],
})
```

### [tawkMaximize](../projects/tawk-messenger-angular/src/lib/directives/maximize.directive.ts)
Maximizes the chat widget. [link](https://developer.tawk.to/jsapi/#maximize)

```html
<button tawkMaximize></button>
```

### [tawkMinimize](../projects/tawk-messenger-angular/src/lib/directives/minimize.directive.ts)
Minimizes the chat widget. [link](https://developer.tawk.to/jsapi/#minimize)

```html
<button tawkMinimize></button>
```

### [tawkToggle](../projects/tawk-messenger-angular/src/lib/directives/toggle.directive.ts)
Minimizes or Maximizes the chat widget based on the current state. [link](https://developer.tawk.to/jsapi/#toggle)

```html
<button tawkToggle></button>
```

### [tawkPopup](../projects/tawk-messenger-angular/src/lib/directives/popup.directive.ts)
Opens the chat widget as a pop out. [link](https://developer.tawk.to/jsapi/#popup)

```html
<button tawkPopup></button>
```

### [tawkShowWidget](../projects/tawk-messenger-angular/src/lib/directives/showWidget.directive.ts)
Shows the chat widget. [link](https://developer.tawk.to/jsapi/#showWidget)

```html
<button tawkShowWidget></button>
```

### [tawkHideWidget](../projects/tawk-messenger-angular/src/lib/directives/hideWidget.directive.ts)
Hides the chat widget. [link](https://developer.tawk.to/jsapi/#hideWidget)

```html
<button tawkHideWidget></button>
```

### [tawkToggleVisibility](../projects/tawk-messenger-angular/src/lib/directives/toggleVisibility.directive.ts)
Hides or Shows the chat widget based on the current visibility state. [link](https://developer.tawk.to/jsapi/#toggleVisibility)

```html
<button tawkToggleVisibility></button>
```

### [tawkEndChat](../projects/tawk-messenger-angular/src/lib/directives/endchat.directive.ts)
Ends the current ongoing chat. [link](https://developer.tawk.to/jsapi/#endChat)

```html
<button tawkEndChat></button>
```
