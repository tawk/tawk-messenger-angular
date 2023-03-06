# How to Use

```js
import TawkMessengerAngular from '@tawk/tawk-messenger-angular';
```

## Add the plugin
Add this code in your main file, the **propertyId** and **widgetId** will be found on your tawk dashboard **Administration > Chat Widget**.

```js
export class AppComponent implements OnInit {
	title = '';

	constructor(
		public TawkMessengerAngular: TawkMessengerAngular
	) { }

	ngOnInit(): void {
		// Place your code here
		this.TawkMessengerAngular.init({
			propertyId : '<propertyId>',
			widgetId : '<widgetId>'
		});
	}
}
```


## Link plugin
Run this code on your terminal root folder.

```bash
npm run package && npm run link:tawk
```

On your project folder add code to angular.json <code>"preserveSymlinks" : true</code>


```json
{
	"projects" : {
    	"architect": {
			"build": {
				"options": {
					"preserveSymlinks" : true
				}
			}
		}
	}
}
```
