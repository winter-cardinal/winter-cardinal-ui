## Basics

Almost of all the UI classes including [DButton](../api/classes/ui.dbutton.html) inherits [DBase](../api/classes/ui.dbase.html).
Therefore, the `DBase` constructor options, properties and methods are also available in them.
This section gives basics of UI classes.
Namely, how to use the `DBase`.

Please note that the `DBase` inherits the PixiJS's container class ([PIXI.Container](http://pixijs.download/release/docs/PIXI.Container.html)).
PixiJS's [samples](https://pixijs.io/examples/) and [documentations](http://pixijs.download/release/docs/index.html) may help you.

### Initializing a position with numbers

```javascript
const application = new DApplication();

new DBase({
	parent: application.stage,
	x: 100,
	y: 100,
	background: {
		color: 0x3388ff
	}
});
```

With this setting, the `DBase` moves to (100, 100) of a parent.

### Initializing a position with keywords

```javascript
new DBase({
	parent: application.stage,
	x: "center",
	y: "center",
	background: {
		color: 0x3388ff
	}
});
```

The keyword `center` moves the `DBase` to a center of a parent.
Available keywords for positions are:

* `center`: Moves to a center of a parent,
* `padding`: Moves to a padding position of a parent.

Note that the `DBase` position is adjusted when a parent size is changed automatically.

Please refer to [sample/basics-position-keyword.html](../sample/basics-position-keyword.html).

### Initializing a position with expressions

```javascript
new DBase({
	parent: application.stage,
	x: "50%-50s",
	y: "50%-50s",
	background: {
		color: 0x3388ff
	}
});
```

`50%` is a 50% of a parent width / height.
`50s` is a 50% of a self width / height.
Thus, the expression `50%-50s` moves the `DBase` to a center of a parent.

Note that expressions are reevaluated and the position is adjusted when a parent size is changed automatically.

Please refer to [ui.DScalarExpression](../api/classes/ui.dscalarexpression.html) for more details.

### Initializing a position with functions

```javascript
new DBase({
	parent: application.stage,
	x: ( parent, self ) => (parent - self) * 0.5,
	y: ( parent, self ) => (parent - self) * 0.5,
	background: {
		color: 0x3388ff
	}
});
```

The first argument `parent` is a parent width / height.
The second argument `self` is a self width / height.
Thus, the expression `(parent - self) * 0.5` moves the `DBase` to a center of a parent.

`x` and `y` accept any functions compatible with [ui.DScalarFunction](../api/modules/ui.html#dscalarfunction).
Please refer to [ui.DScalarFunction](../api/modules/ui.html#dscalarfunction) the more details.

Note that functions are reevaluated and the position is adjusted when a parent size is changed automatically.

### Initializing a size with numbers

```javascript
new DBase({
	parent: application.stage,
	width: 100,
	height: 100,
	background: {
		color: 0x3388ff
	}
});
```

With this setting, the `DBase` size is changed to (100, 100).

### Initializing a size with keywords

```javascript
new DBase({
	parent: application.stage,
	x: "padding",
	y: "padding",
	width: "padding",
	height: "padding",
	background: {
		color: 0x3388ff
	}
});
```

* `auto`: Fits to children.
* `padding`: Expands so as to fit into a parent space excluding a parent padding space.
* `maximized`: Expands so as to fit into a parent.

Note that the size is adjusted when a parent size is changed automatically.

Please refer to [sample/basics-size-keyword.html](../sample/basics-size-keyword.html).

### Initializing a size with expressions

```javascript
new DBase({
	parent: application.stage,
	width: "100%-100p",
	height: "100%-100p",
	background: {
		color: 0x3388ff
	}
});
```

`100%` is a 100% of a parent width / height.
`100p` is a 100% of a parent padding width / height.
Thus, `100%-100p` expands the `DBase` so as to fit into a parent space excluding a parent padding space.

Note that expressions are reevaluated and the size is adjusted when a parent size is changed automatically.

Please refer to [ui.DScalarExpression](../api/classes/ui.dscalarexpression.html) for more details.

### Initializing a size with functions

```javascript
new DBase({
	parent: application.stage,
	width: ( parent, _, padding ) => parent - padding,
	height: ( parent, _, padding ) => parent - padding,
	background: {
		color: 0x3388ff
	}
});
```

The first argument `parent` is a parent width / height.
The third argument `padding` is a parent padding width / height.
Thus, the expression `parent - padding` expands the `DBase` so as to fit into a parent space excluding a parent padding space.

`width` and `height` accept any functions compatible with [ui.DScalarFunction](../api/modules/ui.html#dscalarfunction).
Please refer to [ui.DScalarFunction](../api/modules/ui.html#dscalarfunction) the more details.

Note that functions are reevaluated and the size is adjusted when a parent size is changed automatically.
