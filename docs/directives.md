# Directives

## Quickstart
Import the **tawk-messenger-angular.module** in your **app.module.ts**

```js
import { TawkMessengerAngular, TawkMessengerAngularModule } from '@tawk/tawk-messenger-angular';

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

### maximize
Maximizes the chat widget.

```html
<button tawkMaximize></button>
```

### minimize
Minimizes the chat widget.

```html
<button tawkMinimize></button>
```

### toggle
Minimizes or Maximizes the chat widget based on the current state.

```html
<button tawkToggle></button>
```

### popup
Opens the chat widget as a pop out.

```html
<button tawkPopup></button>
```

### showWidget
Shows the chat widget.

```html
<button tawkShowWidget></button>
```

### hideWidget
Hides the chat widget.

```html
<button tawkHideWidget></button>
```

### toggleVisibility
Hides or Shows the chat widget based on the current visibility state.

```html
<button tawkToggleVisibility></button>
```

### endChat
Ends the current ongoing chat.

```html
<button tawkEndChat></button>
```

<br />

## customstyle
Object used to update the widget styling. Currently only supports zIndex style. Do not place this object in a function, as the values need to be available before the widget script is downloaded. Setting or changing the values after the widget script has been downloaded will not update the widget’s style.


### zIndex
```js
// zindex
this.TawkMessengerAngular.customStyle({
	zIndex : 1000
});

this.TawkMessengerAngular.customStyle({
	zIndex : '1000'
});

this.TawkMessengerAngular.customStyle({
	zIndex : '1000 !important'
});
```

### Visibility
```js
this.TawkMessengerAngular.customStyle({
	visibility : {
		dekstop : {
			xOffset : '15',
			yOffset : '15',
			position : 'cr'
		},

		mobile : {
			xOffset : 15,
			yOffset : 15,
			position : 'bl'
		}
	}
})
```
