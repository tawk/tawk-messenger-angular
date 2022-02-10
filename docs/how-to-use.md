# How to Use

```js
import TawkMessenger from 'tawk-messenger';
```

## Add the plugin
Add this code in your main file, the **propertyId** and **widgetId** will be found on your tawk dashboard **Administration > Chat Widget**.

```js
export class AppComponent implements OnInit {
	title = 'tawk-messenger-angular';

	constructor(
		public TawkMessenger: TawkMessenger
	) { }

	ngOnInit(): void {
		// Place your code here
	}
}
```


## Link plugin
Run this code on your terminal root folder.

```bash
npm run package && npm run link:tawk
```
