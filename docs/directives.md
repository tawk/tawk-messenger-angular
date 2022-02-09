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
