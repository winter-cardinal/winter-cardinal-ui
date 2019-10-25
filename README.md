### About

A WebGL-based UI library.

### Installing

```
npm i @wcardinal/wcardinal-ui
```

Please note that this package has no default exports.

```javascript
import { loadAll, DApplication, DButtonCheck } from '@wcardinal/wcardinal-ui';

// Loads all the optional modules and the default theme.
// This is required for the tree shaking.
loadAll();

// Make a new application
const application = new DApplication();

// Make a new check button
new DButtonCheck({
	parent: application.stage,
	text: {
		value: "Check"
	}
});
```

### Tree shaking

The NPM package `@wcardinal/wcardinal-ui` is large in its size
because all the UI classes and their themes are included.
This is why the tree shaking is important for this library.

The `loadAll` loads all the optional modules (e.g., `DMenuItemCheck`) and the default theme (e.g., `DThemeWhite`).
To remove the unnecessary modules, pick `load*` functions you need.

```javascript
import { loadThemeWhiteAll } from '@wcardinal/wcardinal-ui';

// Loads the white theme only.
// `DMenuItemCheck` will not be in your compiled package.
loadThemeWhiteAll();
```

### UI Elements

* Board
* Button
	* Ambient button
	* Check button (Left / right)
	* Gradient color button
	* Color button
	* Danger button
	* Date button
	* Datetime button
	* File button
	* Group button
	* Primary button
	* Radio button (Left / right)
	* Redo button
	* Secondary button
	* Time button
	* Undo button
* Canvas container and Canvas
* chart
	* Line chart (In progress)
* Diagram with tile server support
* Dialog
	* Gradient color dialog
	* Color dialog
	* Confirm dialog
		* For deleting
		* For discarding
	* Date dialog
	* Datetime dialog
	* Text input dialog
	* Message dialog
	* Processing dialog
	* Save-as dialog
	* Select dialog
	* Time dialog
* Input
	* Integer input
	* Real number input
	* Text input
* Layout
	* Horizontal layout
	* Vertical layout
* List
* Menu
* Side menu
* Menu bar
* Pane
* Picker
	* Gradient color picker
	* Color picker
	* Date picker
	* Datetime picker
	* Time picker
* Scroll bar
	* Horizontal scroll bar
	* Vertical scroll bar
* Slider (In progress)
* Table
* Tree (In progress)

### Requirements

* WebGL 1.0 support
* Promise support
* Base64-encoded SVG support for textures
	* IE11 does not support this.
	* Not required if your theme doesn't use it
* Stencil support

### License

Apache License Version 2.0.

The default theme uses Material Design icons by Google
licensed under Apache license version 2.0.\
https://github.com/google/material-design-icons

