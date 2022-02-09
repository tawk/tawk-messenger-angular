# API Reference
Welcome to the [tawk.to](https://www.tawk.to) JavaScript API documentation.

The API provides a flexible set of methods that can be used in your web projects. To invoke one of the methods below, please be sure to call a method after the embed code on your page.

Use the JavaScript API to manipulate the chat widget displayed on your website.

## Table of contents
- [onLoad](#onload)
- [onStatusChange](#onstatuschange)
- [onBeforeLoad](#onbeforeload)
- [onChatMaximized](#onchatmaximized)
- [onChatMinimized](#onchatminimized)
- [onChatHidden](#onchathidden)
- [onChatStarted](#onchatstarted)
- [onChatEnded](#onchatended)
- [onPrechatSubmit](#onprechatsubmit)
- [onOfflineSubmit](#onofflinesubmit)
- [onChatMessageVisitor](#onchatmessagevisitor)
- [onChatMessageAgent](#onchatmessageagent)
- [onChatMessageSystem](#onchatmessagesystem)
- [onAgentJoinChat](#onagentjoinchat)
- [onAgentLeaveChat](#onagentleavechat)
- [onChatSatisfaction](#onchatsatisfaction)
- [onVisitorNameChanged](#onvisitornamechanged)
- [onFileUpload](#onfileupload)
- [onTagsUpdated](#ontagsupdated)
- [onUnreadCountChanged](#onunreadcountchanged)
- [visitor](#visitor)
- [maximize](#maximize)
- [minimize](#minimize)
- [toggle](#toggle)
- [popup](#popup)
- [getWindowType](#getwindowtype)
- [showWidget](#showwidget)
- [hideWidget](#hidewidget)
- [toggleVisibility](#togglevisibility)
- [getStatus](#getstatus)
- [isChatMaximized](#ischatmaximized)
- [isChatMinimized](#ischatminimized)
- [isChatHidden](#ischathidden)
- [isChatOngoing](#ischatongoing)
- [isVisitorEngaged](#isvisitorengaged)
- [onLoaded](#onloaded)
- [onBeforeLoaded](#onbeforeloaded)
- [widgetPosition](#widgetPosition)
- [endChat](#endchat)
- [setAttributes](#setattributes)
- [addEvent](#addevent)
- [addTags](#addtags)
- [removeTags](#removetags)
- [secureMode](#securemode)
- [customStyle](#customstyle)

<br/>

## onLoad
Callback function invoked right after the widget is rendered. This callback is not supported in
pop out chat window.

```js
this.TawkMessengerAngular.onLoad(() => {
	// place your code here
});
```
<br/>

## onStatusChange
Callback function invoked when the page status changes. The function will receive the changed
status which will be either online, away or offline. This callback is not supported in pop out
chat window.

```js
this.TawkMessengerAngular.onStatusChange((status?: string) => {
	// place your code here
});
```
<br/>

## onBeforeLoad
Callback function invoked right when Tawk_API is ready to be used and before the widget is rendered.
This callback is not supported in pop out chat window.

```js
this.TawkMessengerAngular.onBeforeLoad(() => {
	// place your code here
});
```

<br/>

## onChatMaximized
Callback function invoked when the widget is maximized. This callback is not supported in pop out
chat window.

```js
this.TawkMessengerAngular.onChatMaximized(() => {
	// place your code here
});
```

<br/>

## onChatMinimized
Callback function invoked when the widget is minimized. This callback is not supported in pop out
chat window.

```js
this.TawkMessengerAngular.onChatMinimized(() => {
	// place your code here
});
```

## onChatHidden
Callback function invoked when the widget is hidden. This callback is not supported in pop out chat
window.

```js
this.TawkMessengerAngular.onChatHidden(() => {
	// place your code here
});
```

<br/>
## onChatStarted
Callback function invoked when the widget is started.

```js
this.TawkMessengerAngular.onChatStarted(() => {
	// place your code here
});
```

<br/>
## onChatEnded
Callback function invoked when the widget is ended. This callback is not supported in pop out chat
window.

```js
this.TawkMessengerAngular.onChatEnded(() => {
	// place your code here
});
```

<br/>

## onPrechatSubmit
Callback function invoked when the Pre-Chat Form is submitted. The submitted form data is passed to
the function. This callback is not supported in pop out chat window.

```js
this.TawkMessengerAngular.onPrechatSubmit((data?: any) => {
	// place your code here
});
```

<br/>

## onOfflineSubmit
Callback function invoked when the Offline form is submitted. The submitted form data is passed to
the function. Form data will contain {name : ”, email : ”, message : ”, questions : []}. This
callback is not supported in pop out chat window.

```js
this.TawkMessengerAngular.onOfflineSubmit((data?: any) => {
	// place your code here
});
```

<br/>

## onChatMessageVisitor
Callback function invoked when message is sent by the visitor. The message is passed to the
function. This callback is not supported in pop out chat window.

```js
this.TawkMessengerAngular.onChatMessageVisitor((message?: any) => {
	// place your code here
});
```

<br/>


## onChatMessageAgent
Callback function invoked when message is sent by the agent. The message is passed to the function.
This callback is not supported in pop out chat window.

```js
this.TawkMessengerAngular.onChatMessageAgent((message?: any) => {
	// place your code here
});
```

<br/>

## onChatMessageSystem
Callback function invoked when message is sent by the system. The message is passed to the function.
This callback is not supported in pop out chat window.

```js
this.TawkMessengerAngular.onChatMessageSystem((message?: any) => {
	// place your code here
});
```

<br/>

## onAgentJoinChat
Callback function invoked when an agent joins the chat. The data is passed to the function. Will
contain {name : ”, position : ”, image : ”, id : ”}. This callback is not supported in pop out chat
window.

```js
this.TawkMessengerAngular.onAgentJoinChat((data?: any) => {
	// place your code here
});
```

<br/>

## onAgentLeaveChat
Callback function invoked when an agent leaves the chat. The data is passed to the function. Will
contain {name : ”, id : ”}. This callback is not supported in pop out chat window.

```js
this.TawkMessengerAngular.onAgentLeaveChat((data?: any) => {
	// place your code here
});
```

<br/>

## onChatSatisfaction
Callback function invoked when an agent leaves the chat. The satisfaction is passed to the function.
-1 = dislike | 0 = neutral | 1 = like. This callback is not supported in pop out chat window.

```js
this.TawkMessengerAngular.onChatSatisfaction((satisfaction?: any) => {
	// place your code here
});
```

<br/>

## onVisitorNameChanged
Callback function invoked when the visitor manually changes his name. The visitorName is passed to
the function. This callback is not supported in pop out chat window.

```js
this.TawkMessengerAngular.onVisitorNameChanged((visitorName?: any) => {
	// place your code here
});
```

<br/>

## onFileUpload
Callback function invoked when a file is uploaded. The link to the uploaded file is passed to the
function. This callback is not supported in pop out chat window.

```js
this.TawkMessengerAngular.onFileUpload((link?: any) => {
	// place your code here
});
```

<br/>

## onTagsUpdated
Callback function invoked when a tag is updated.

```js
this.TawkMessengerAngular.onTagsUpdated((data?: any) => {
	// place your code here
});
```

<br/>

## onUnreadCountChanged
Callback function invoked when active conversation unread count changed.

```js
this.TawkMessengerAngular.onUnreadCountChanged();
```

<br/>


## onLoaded
Returns a value (true or undefined) indicating when the plugin is ready.

```js
this.TawkMessengerAngular.onLoaded();
```

<br/>

## widgetPosition
Returns a string for current position of the widget.

```js
this.TawkMessengerAngular.widgetPosition();
```

<br/>

## visitor
Object used to set the visitor name and email. Do not place this object in a function, as the
values need to be available before the widget script is downloaded.

Setting or changing the values after the widget script has been downloaded will not send the
values to the dashboard.

If the name and email will not be available on load time (eg single page app, ajax login), then
use the [setAttributes](#setAttributes) function instead.

```js
this.TawkMessengerAngular.visitor({
	name : 'name',
	email : 'email@email.com'
});
```

<br/>

## maximize
Maximizes the chat widget.

```html
<button [tawkMaximize]></button>
```
or

```js
this.TawkMessengerAngular.maximize();
```

<br/>


## minimize
Minimizes the chat widget.

```html
<button [tawkMinimize]></button>
```
or

```js
this.TawkMessengerAngular.minimize();
```

<br/>

## toggle
Minimizes or Maximizes the chat widget based on the current state.

```html
<button [tawkToggle]></button>
```
or

```js
this.TawkMessengerAngular.toggle();
```

## popup
Opens the chat widget as a pop out.

```html
<button [tawkPopup]></button>
```
or

```js
this.TawkMessengerAngular.popup();
```

<br/>


## getWindowType
Returns the current widget type whether it’s inline or embed.

```js
this.TawkMessengerAngular.getWindowType();
```

## showWidget
Shows the chat widget.

```html
<button [tawkShowWidget]></button>
```
or

```js
this.TawkMessengerAngular.showWidget();
```

<br/>

## hideWidget
Hide the chat widget.

```html
<button [tawkHideWidget]></button>
```
or

```js
this.TawkMessengerAngular.hideWidget();
```

<br />

## toggleVisibility
Hides or Shows the chat widget based on the current visibility state.

```html
<button [tawkHideWidget]></button>
```
or

```js
this.TawkMessengerAngular.toggeVisibility();
```

<br/>


## getStatus
Returns the current page status (online, away or offline).

```js
this.TawkMessengerAngular.getStatus();
```

<br/>


## isChatMaximized
Returns a boolean value (true or false) indicating whether the chat widget is maximized.

```js
this.TawkMessengerAngular.isChatMaximized();
```

<br/>


## isChatMinimized
Returns a boolean value (true or false) indicating whether the chat widget is minimized.

```js
this.TawkMessengerAngular.isChatMinimized();
```

<br/>


## isChatHidden
Returns a boolean value (true or false) indicating whether the chat widget is hidden.

```js
this.TawkMessengerAngular.isChatHidden();
```

<br/>


## isChatOngoing
Returns a boolean value (true or false) indicating whether currently there is an ongoing chat.

```js
this.TawkMessengerAngular.isChatOngoing();
```

<br/>


## isVisitorEngaged
Returns a boolean value (true or false) indicating whether the visitor is currently chatting or has
requested a chat.

```js
this.TawkMessengerAngular.isVisitorEngaged();
```

<br/>

## endChat
Ends the current ongoing chat.

```js
this.TawkMessengerAngular.endChat();
```

<br/>

## setAttributes
Set custom metadata regarding this chat/visitor.

This function takes in two values: attribute and callback.

The attribute value is of the object data type, which is a key value pair.

The key is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash).

You can also use this function to set the visitor name and email. However, you will need to enable
the secure mode first and also supply the calculated hash value in this function.

Refer to the secure mode section below on how to do this.

The reason it needs to be in [secure mode](#securemode) is to ensure data integrity — to ensure the
value sent from the widget to the dashboard is true and has not been tampered with.

The callback, which is a function, will be invoked to notify whether the save failed.

Error messages returned:

1. INVALID_ATTRIBUTES: No attributes were sent
1. SESSION_EXPIRED: The visitor’s current session has expired
1. SERVER_ERROR: Internal server error
1. ACCESS_ERROR: Error in accessing the page
1. ATTRIBUTE_LIMIT_EXCEEDED: Total custom attributes (excluding name, email and hash) is 50
1. CONTAINS_INVALID_KEY: Custom key is not alphanumeric or dash (keys will be lower case)
1. CONTAINS_INVALID_VALUE: Custom value is empty or the total length is more than 255 characters

```js
this.TawkMessengerAngular.setAttributes(attribute, callback);

// Example

this.TawkMessengerAngular.setAttributes({
	id : '<id>',
	store : '<store>'
}, function(error) {
    // do something if error
});

this.TawkMessengerAngular.setAttributes({
	id : '<id>',
	store : '<store>'
	hash : '<hash value>'
}, function(error) {
    // do something if error
});
```

<br />

## addEvent
Set a custom event to chat.
This function takes in 3 values: event name, optional metadata and callback.

The event name is of the string data type and can contain only alphanumeric characters and ‘-‘ (dash)

The callback which is a function will be invoked to notify whether the save failed.

INVALID_EVENT_NAME, INVALID_ATTRIBUTES, ATTRIBUTE_LIMIT_EXCEEDED, CONTAINS_INVALID_KEY,
CONTAINS_INVALID_VALUE, SESSION_EXPIRED, SERVER_ERROR

```js
this.TawkMessengerAngular.addEvent(eventName, metaData, callback);

// Example

this.TawkMessengerAngular.addEvent(
	'requested-quotation',
	'',
	function(error) {
		// do something if error
	}
);

this.TawkMessengerAngular.addEvent(
	'requested-quotation',
	{
		sku : 'A0012',
		name : 'Jeans',
		price : '50'
	},
	function(error) {
		// do something if error
	}
);
```

<br/>

## addTags
Add tags to the chat.
This function takes in two values; tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The total number of tags is 10.
The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, VERSION_CONFLICT, SESSION_EXPIRED, SERVER_ERROR

```js
this.TawkMessengerAngular.addTags(tags, callback);

// Example

this.TawkMessengerAngular.addTags(
[
	'hello',
	'world'
], function(error) {
	// do something if error
});
```

<br/>

## removeTags
Remove tags from the chat.
This function takes in two values: tags and callback.
This is of the array data type.
The content of the tags should be of the string data type.

The callback, which is a function, will be invoked to notify whether the save failed.

INVALID_TAGS, TAG_LIMIT_EXCEEDED, SESSION_EXPIRED, SERVER_ERROR

```js
this.TawkMessengerAngular.removeTags(tags, callback);

// Example

this.TawkMessengerAngular.removeTags(
[
	'hello',
	'world'
],
function(error) {
	// do something if error
});
```

<br/>

## secureMode
Secure method is to ensure the data you are sending is actually from you.

To enable secure mode, embed following code on your page.

The hash is server side generated HMAC using SHA256, the user’s email and your site’s API key.

You can get your API key from **Admin>Property Settings**.

```js
this.TawkMessengerAngular.visitor({
    name : 'name',
    email : 'email@email.com'
    hash : '<calculate-hash>'
});
```

<br/>


## customstyle
Object used to update the widget styling. Currently only supports zIndex style. Do not place this
object in a function, as the values need to be available before the widget script is downloaded.
Setting or changing the values after the widget script has been downloaded will not update the
widget’s style.
