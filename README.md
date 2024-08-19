### WinterCardinal UI

A WebGL-based UI library.

### Installation

#### NPM

```
npm i @wcardinal/wcardinal-ui
```

Please note that this package has no default exports.

```javascript
import { loadAll, loadThemeWhiteAll, DApplication, DButtonCheck } from "@wcardinal/wcardinal-ui";

// Loads all the optional modules and the white theme.
// This is required for the tree shaking as explained later.
loadAll();
loadThemeWhiteAll();

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

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/pixi.js/dist/pixi.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@wcardinal/wcardinal-ui/dist/wcardinal-ui.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@wcardinal/wcardinal-ui/dist/wcardinal-ui-theme-white.min.js"></script>
<script>
(function(){
	'use strict';

	// Make a new application
	var application = new wcardinal.ui.DApplication();

	// Make a new check button
	new wcardinal.ui.DButtonCheck({
		parent: application.stage,
		text: {
			value: 'Check'
		}
	});
}());
</script>
```

All the classes are in `wcardinal.ui`.
Please note that `loadAll` and `loadThemeWhiteALl` is not required in this case.
Prebuild files `wcardinal-ui.min.js` and `wcardinal-ui-theme-white.min.js` call `loadAll` and `loadThemeWhiteAll` for you.

See [sample/cdn](https://winter-cardinal.github.io/winter-cardinal-ui/sample/white/other/cdn.html) for a complete example.

### Tree shaking

The NPM package `@wcardinal/wcardinal-ui` is large in its size
because all the UI classes and their themes are included.
This is why the tree shaking is important for this library.

`loadAll` loads all the optional modules (e.g., `DMenuItemCheck`).
And `loadThemeWhiteAll` loads the white theme (e.g., `DThemeWhite`).
To remove unnecessary modules from your build, pick `load*` functions you need.

```javascript
import { loadThemeWhiteAll } from '@wcardinal/wcardinal-ui';

// Loads the white theme only.
// `DMenuItemCheck` will not be in your compiled package, for instance.
loadThemeWhiteAll();
```

### Documentation

* [API document](https://winter-cardinal.github.io/winter-cardinal-ui/api/)
* Samples
	* [White theme](https://winter-cardinal.github.io/winter-cardinal-ui/sample/white/)
	* [Dark theme](https://winter-cardinal.github.io/winter-cardinal-ui/sample/dark/)
* [Starter](https://github.com/winter-cardinal/winter-cardinal-starter)

### Requirements

* WebGL 1.0 support
* Promise support
* Base64-encoded SVG support for textures
	* IE11 does not support this.
	* Not required if your theme doesn't use it
* Stencil support

### How to build

The following commands are for building `@wcardinal/wcardinal-ui` itself.

#### JS for release

```shell
npm run build
```

#### JS for development

```shell
npm run watch:ts
```

and then in an another terminal

```shell
npm run watch:rollup
```

#### Development server

```shell
npm start
```

#### API document

Update `gitRevision` in `typedoc.json` and then do

```shell
npm run build:api
```

#### Sample index page

```shell
npm run build:sample:index
```

#### Dark Samples

```shell
npm run build:sample:index
npm run build:sample:dark
```

#### Samples for GitHub pages

```shell
npm run build
npm run build:sample:dark
npm run build:sample
```

#### Linting

```shell
npm run lint
```

To fix all the auto-fixable lint errors, do the following:

```shell
npm run lint:fix
```

### License

Apache License Version 2.0.

The default theme uses Material design icons developed by Google and licensed under Apache license version 2.0.\
https://github.com/google/material-design-icons

