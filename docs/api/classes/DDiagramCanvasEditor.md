[Winter Cardinal UI](../README.md) / DDiagramCanvasEditor

# Class: DDiagramCanvasEditor<THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md) = [`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md) |
| `OPTIONS` | extends [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)<`THEME`\> = [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)<`THEME`\> |

## Hierarchy

- [`DDiagramCanvasBase`](DDiagramCanvasBase.md)<`THEME`, `OPTIONS`\>

  ↳ **`DDiagramCanvasEditor`**

## Table of contents

### Constructors

- [constructor](DDiagramCanvasEditor.md#constructor)

### Properties

- [\_accessibleActive](DDiagramCanvasEditor.md#_accessibleactive)
- [\_accessibleDiv](DDiagramCanvasEditor.md#_accessiblediv)
- [\_auto](DDiagramCanvasEditor.md#_auto)
- [\_background](DDiagramCanvasEditor.md#_background)
- [\_border](DDiagramCanvasEditor.md#_border)
- [\_bounds](DDiagramCanvasEditor.md#_bounds)
- [\_clearType](DDiagramCanvasEditor.md#_cleartype)
- [\_corner](DDiagramCanvasEditor.md#_corner)
- [\_cursor](DDiagramCanvasEditor.md#_cursor)
- [\_destroyed](DDiagramCanvasEditor.md#_destroyed)
- [\_isChildrenDirty](DDiagramCanvasEditor.md#_ischildrendirty)
- [\_lastDownPoint](DDiagramCanvasEditor.md#_lastdownpoint)
- [\_lastSortedIndex](DDiagramCanvasEditor.md#_lastsortedindex)
- [\_layer](DDiagramCanvasEditor.md#_layer)
- [\_mask](DDiagramCanvasEditor.md#_mask)
- [\_options](DDiagramCanvasEditor.md#_options)
- [\_outline](DDiagramCanvasEditor.md#_outline)
- [\_padding](DDiagramCanvasEditor.md#_padding)
- [\_reflowable](DDiagramCanvasEditor.md#_reflowable)
- [\_shortcuts](DDiagramCanvasEditor.md#_shortcuts)
- [\_snap](DDiagramCanvasEditor.md#_snap)
- [\_snippet](DDiagramCanvasEditor.md#_snippet)
- [\_tempDisplayObjectParent](DDiagramCanvasEditor.md#_tempdisplayobjectparent)
- [\_tile](DDiagramCanvasEditor.md#_tile)
- [\_title](DDiagramCanvasEditor.md#_title)
- [\_zIndex](DDiagramCanvasEditor.md#_zindex)
- [accessible](DDiagramCanvasEditor.md#accessible)
- [accessibleChildren](DDiagramCanvasEditor.md#accessiblechildren)
- [accessibleHint](DDiagramCanvasEditor.md#accessiblehint)
- [accessiblePointerEvents](DDiagramCanvasEditor.md#accessiblepointerevents)
- [accessibleTitle](DDiagramCanvasEditor.md#accessibletitle)
- [accessibleType](DDiagramCanvasEditor.md#accessibletype)
- [alpha](DDiagramCanvasEditor.md#alpha)
- [angle](DDiagramCanvasEditor.md#angle)
- [buttonMode](DDiagramCanvasEditor.md#buttonmode)
- [cacheAsBitmap](DDiagramCanvasEditor.md#cacheasbitmap)
- [children](DDiagramCanvasEditor.md#children)
- [cursor](DDiagramCanvasEditor.md#cursor)
- [filterArea](DDiagramCanvasEditor.md#filterarea)
- [filters](DDiagramCanvasEditor.md#filters)
- [hitArea](DDiagramCanvasEditor.md#hitarea)
- [interactive](DDiagramCanvasEditor.md#interactive)
- [interactiveChildren](DDiagramCanvasEditor.md#interactivechildren)
- [isMask](DDiagramCanvasEditor.md#ismask)
- [isSprite](DDiagramCanvasEditor.md#issprite)
- [localTransform](DDiagramCanvasEditor.md#localtransform)
- [mask](DDiagramCanvasEditor.md#mask)
- [name](DDiagramCanvasEditor.md#name)
- [parent](DDiagramCanvasEditor.md#parent)
- [pivot](DDiagramCanvasEditor.md#pivot)
- [renderable](DDiagramCanvasEditor.md#renderable)
- [rotation](DDiagramCanvasEditor.md#rotation)
- [sortDirty](DDiagramCanvasEditor.md#sortdirty)
- [sortableChildren](DDiagramCanvasEditor.md#sortablechildren)
- [transform](DDiagramCanvasEditor.md#transform)
- [visible](DDiagramCanvasEditor.md#visible)
- [worldAlpha](DDiagramCanvasEditor.md#worldalpha)
- [worldTransform](DDiagramCanvasEditor.md#worldtransform)
- [worldVisible](DDiagramCanvasEditor.md#worldvisible)
- [zIndex](DDiagramCanvasEditor.md#zindex)
- [WORK\_CONTAINS\_POINT](DDiagramCanvasEditor.md#work_contains_point)

### Accessors

- [background](DDiagramCanvasEditor.md#background)
- [border](DDiagramCanvasEditor.md#border)
- [corner](DDiagramCanvasEditor.md#corner)
- [height](DDiagramCanvasEditor.md#height)
- [layer](DDiagramCanvasEditor.md#layer)
- [outline](DDiagramCanvasEditor.md#outline)
- [padding](DDiagramCanvasEditor.md#padding)
- [position](DDiagramCanvasEditor.md#position)
- [reflowable](DDiagramCanvasEditor.md#reflowable)
- [scale](DDiagramCanvasEditor.md#scale)
- [shadow](DDiagramCanvasEditor.md#shadow)
- [skew](DDiagramCanvasEditor.md#skew)
- [snap](DDiagramCanvasEditor.md#snap)
- [snippet](DDiagramCanvasEditor.md#snippet)
- [state](DDiagramCanvasEditor.md#state)
- [theme](DDiagramCanvasEditor.md#theme)
- [tile](DDiagramCanvasEditor.md#tile)
- [title](DDiagramCanvasEditor.md#title)
- [type](DDiagramCanvasEditor.md#type)
- [unsafe](DDiagramCanvasEditor.md#unsafe)
- [weight](DDiagramCanvasEditor.md#weight)
- [width](DDiagramCanvasEditor.md#width)
- [x](DDiagramCanvasEditor.md#x)
- [y](DDiagramCanvasEditor.md#y)

### Methods

- [\_calculateBounds](DDiagramCanvasEditor.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDiagramCanvasEditor.md#_recursivepostupdatetransform)
- [\_render](DDiagramCanvasEditor.md#_render)
- [addChild](DDiagramCanvasEditor.md#addchild)
- [addChildAt](DDiagramCanvasEditor.md#addchildat)
- [addListener](DDiagramCanvasEditor.md#addlistener)
- [applyTitle](DDiagramCanvasEditor.md#applytitle)
- [blur](DDiagramCanvasEditor.md#blur)
- [calculateBounds](DDiagramCanvasEditor.md#calculatebounds)
- [containsGlobalPoint](DDiagramCanvasEditor.md#containsglobalpoint)
- [containsLocalPoint](DDiagramCanvasEditor.md#containslocalpoint)
- [containsPoint](DDiagramCanvasEditor.md#containspoint)
- [destroy](DDiagramCanvasEditor.md#destroy)
- [displayObjectUpdateTransform](DDiagramCanvasEditor.md#displayobjectupdatetransform)
- [emit](DDiagramCanvasEditor.md#emit)
- [eventNames](DDiagramCanvasEditor.md#eventnames)
- [focus](DDiagramCanvasEditor.md#focus)
- [focusOnClosest](DDiagramCanvasEditor.md#focusonclosest)
- [getBounds](DDiagramCanvasEditor.md#getbounds)
- [getChildAt](DDiagramCanvasEditor.md#getchildat)
- [getChildByName](DDiagramCanvasEditor.md#getchildbyname)
- [getChildIndex](DDiagramCanvasEditor.md#getchildindex)
- [getClearType](DDiagramCanvasEditor.md#getcleartype)
- [getClippingRect](DDiagramCanvasEditor.md#getclippingrect)
- [getGlobalPosition](DDiagramCanvasEditor.md#getglobalposition)
- [getHeight](DDiagramCanvasEditor.md#getheight)
- [getLocalBounds](DDiagramCanvasEditor.md#getlocalbounds)
- [getParentOfSize](DDiagramCanvasEditor.md#getparentofsize)
- [getThemeDefault](DDiagramCanvasEditor.md#getthemedefault)
- [getType](DDiagramCanvasEditor.md#gettype)
- [getWidth](DDiagramCanvasEditor.md#getwidth)
- [getX](DDiagramCanvasEditor.md#getx)
- [getY](DDiagramCanvasEditor.md#gety)
- [hasDirty](DDiagramCanvasEditor.md#hasdirty)
- [hasRefitableHeight](DDiagramCanvasEditor.md#hasrefitableheight)
- [hasRefitableWidth](DDiagramCanvasEditor.md#hasrefitablewidth)
- [hide](DDiagramCanvasEditor.md#hide)
- [hitTest](DDiagramCanvasEditor.md#hittest)
- [init](DDiagramCanvasEditor.md#init)
- [initReflowable](DDiagramCanvasEditor.md#initreflowable)
- [initialize](DDiagramCanvasEditor.md#initialize)
- [isAmbient](DDiagramCanvasEditor.md#isambient)
- [isChildrenDirty](DDiagramCanvasEditor.md#ischildrendirty)
- [isDirty](DDiagramCanvasEditor.md#isdirty)
- [isEventTarget](DDiagramCanvasEditor.md#iseventtarget)
- [isHidden](DDiagramCanvasEditor.md#ishidden)
- [isRefitable](DDiagramCanvasEditor.md#isrefitable)
- [isShown](DDiagramCanvasEditor.md#isshown)
- [listenerCount](DDiagramCanvasEditor.md#listenercount)
- [listeners](DDiagramCanvasEditor.md#listeners)
- [off](DDiagramCanvasEditor.md#off)
- [on](DDiagramCanvasEditor.md#on)
- [onBlur](DDiagramCanvasEditor.md#onblur)
- [onChildBlur](DDiagramCanvasEditor.md#onchildblur)
- [onChildFocus](DDiagramCanvasEditor.md#onchildfocus)
- [onChildrenChange](DDiagramCanvasEditor.md#onchildrenchange)
- [onChildrenDirty](DDiagramCanvasEditor.md#onchildrendirty)
- [onDblClick](DDiagramCanvasEditor.md#ondblclick)
- [onDown](DDiagramCanvasEditor.md#ondown)
- [onDownThis](DDiagramCanvasEditor.md#ondownthis)
- [onFocus](DDiagramCanvasEditor.md#onfocus)
- [onKeyDown](DDiagramCanvasEditor.md#onkeydown)
- [onKeyUp](DDiagramCanvasEditor.md#onkeyup)
- [onMove](DDiagramCanvasEditor.md#onmove)
- [onOut](DDiagramCanvasEditor.md#onout)
- [onOver](DDiagramCanvasEditor.md#onover)
- [onParentMove](DDiagramCanvasEditor.md#onparentmove)
- [onParentResize](DDiagramCanvasEditor.md#onparentresize)
- [onRefit](DDiagramCanvasEditor.md#onrefit)
- [onReflow](DDiagramCanvasEditor.md#onreflow)
- [onResize](DDiagramCanvasEditor.md#onresize)
- [onScale](DDiagramCanvasEditor.md#onscale)
- [onShortcut](DDiagramCanvasEditor.md#onshortcut)
- [onSkew](DDiagramCanvasEditor.md#onskew)
- [onStateChange](DDiagramCanvasEditor.md#onstatechange)
- [onUp](DDiagramCanvasEditor.md#onup)
- [onUpThis](DDiagramCanvasEditor.md#onupthis)
- [onWheel](DDiagramCanvasEditor.md#onwheel)
- [once](DDiagramCanvasEditor.md#once)
- [refit](DDiagramCanvasEditor.md#refit)
- [reflow](DDiagramCanvasEditor.md#reflow)
- [removeAllListeners](DDiagramCanvasEditor.md#removealllisteners)
- [removeChild](DDiagramCanvasEditor.md#removechild)
- [removeChildAt](DDiagramCanvasEditor.md#removechildat)
- [removeChildren](DDiagramCanvasEditor.md#removechildren)
- [removeListener](DDiagramCanvasEditor.md#removelistener)
- [render](DDiagramCanvasEditor.md#render)
- [renderAdvanced](DDiagramCanvasEditor.md#renderadvanced)
- [resize](DDiagramCanvasEditor.md#resize)
- [serialize](DDiagramCanvasEditor.md#serialize)
- [setChildIndex](DDiagramCanvasEditor.md#setchildindex)
- [setFocused](DDiagramCanvasEditor.md#setfocused)
- [setHeight](DDiagramCanvasEditor.md#setheight)
- [setParent](DDiagramCanvasEditor.md#setparent)
- [setTransform](DDiagramCanvasEditor.md#settransform)
- [setWidth](DDiagramCanvasEditor.md#setwidth)
- [setX](DDiagramCanvasEditor.md#setx)
- [setY](DDiagramCanvasEditor.md#sety)
- [show](DDiagramCanvasEditor.md#show)
- [sortChildren](DDiagramCanvasEditor.md#sortchildren)
- [swapChildren](DDiagramCanvasEditor.md#swapchildren)
- [toBackgroundBase](DDiagramCanvasEditor.md#tobackgroundbase)
- [toChildrenDirty](DDiagramCanvasEditor.md#tochildrendirty)
- [toCursor](DDiagramCanvasEditor.md#tocursor)
- [toDirty](DDiagramCanvasEditor.md#todirty)
- [toGlobal](DDiagramCanvasEditor.md#toglobal)
- [toHasDirty](DDiagramCanvasEditor.md#tohasdirty)
- [toLocal](DDiagramCanvasEditor.md#tolocal)
- [toParentChildrenDirty](DDiagramCanvasEditor.md#toparentchildrendirty)
- [toParentHasDirty](DDiagramCanvasEditor.md#toparenthasdirty)
- [toParentResized](DDiagramCanvasEditor.md#toparentresized)
- [toSnap](DDiagramCanvasEditor.md#tosnap)
- [updateTransform](DDiagramCanvasEditor.md#updatetransform)
- [mixin](DDiagramCanvasEditor.md#mixin)

## Constructors

### constructor

• **new DDiagramCanvasEditor**<`THEME`, `OPTIONS`\>(`options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md) = [`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md) |
| `OPTIONS` | extends [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)<`THEME`, `OPTIONS`\> = [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `OPTIONS` |

#### Overrides

[DDiagramCanvasBase](DDiagramCanvasBase.md).[constructor](DDiagramCanvasBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L44)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_accessibleActive](DDiagramCanvasBase.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8489

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_accessibleDiv](DDiagramCanvasBase.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8495

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_auto](DDiagramCanvasBase.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L729)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_background](DDiagramCanvasBase.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L740)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_border](DDiagramCanvasBase.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L741)

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_bounds](DDiagramCanvasBase.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8607

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_clearType](DDiagramCanvasBase.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L743)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_corner](DDiagramCanvasBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:727](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L727)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`string`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_cursor](DDiagramCanvasBase.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L748)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_destroyed](DDiagramCanvasBase.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8621

___

### \_isChildrenDirty

• `Protected` **\_isChildrenDirty**: `boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_isChildrenDirty](DDiagramCanvasBase.md#_ischildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:732](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L732)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_lastDownPoint](DDiagramCanvasBase.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:747](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L747)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_lastSortedIndex](DDiagramCanvasBase.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8575

___

### \_layer

• `Protected` **\_layer**: [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_layer](DDiagramCanvasBase.md#_layer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L35)

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_mask](DDiagramCanvasBase.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_options](DDiagramCanvasBase.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L723)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_outline](DDiagramCanvasBase.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:742](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L742)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_padding](DDiagramCanvasBase.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L726)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_reflowable](DDiagramCanvasBase.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:746](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L746)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_shortcuts](DDiagramCanvasBase.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L744)

___

### \_snap

• `Protected` **\_snap**: ``null`` \| [`DDiagramCanvasEditorSnap`](DDiagramCanvasEditorSnap.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L42)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_snippet](DDiagramCanvasBase.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:745](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L745)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_tempDisplayObjectParent](DDiagramCanvasBase.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### \_tile

• `Protected` **\_tile**: [`DDiagramCanvasTile`](DDiagramCanvasTile.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_tile](DDiagramCanvasBase.md#_tile)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L36)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_title](DDiagramCanvasBase.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L739)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_zIndex](DDiagramCanvasBase.md#_zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8583

___

### accessible

• **accessible**: `boolean`

 Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessible](DDiagramCanvasBase.md#accessible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8468

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`default`** true

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessibleChildren](DDiagramCanvasBase.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8522

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessibleHint](DDiagramCanvasBase.md#accessiblehint)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8483

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'auto'

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessiblePointerEvents](DDiagramCanvasBase.md#accessiblepointerevents)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8513

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`member`** {?string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessibleTitle](DDiagramCanvasBase.md#accessibletitle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8476

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'button'

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessibleType](DDiagramCanvasBase.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8504

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[alpha](DDiagramCanvasBase.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8535

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[angle](DDiagramCanvasBase.md#angle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8771

___

### buttonMode

• **buttonMode**: `boolean`

If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
Setting this changes the 'cursor' property to `'pointer'`.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.buttonMode = true;

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[buttonMode](DDiagramCanvasBase.md#buttonmode)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8853

___

### cacheAsBitmap

• **cacheAsBitmap**: `boolean`

Set this to true if you want this display object to be cached as a bitmap.
This basically takes a snap shot of the display object as it is at that moment. It can
provide a performance benefit for complex static displayObjects.
To remove simply set this property to `false`

IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[cacheAsBitmap](DDiagramCanvasBase.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8880

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`member`** {PIXI.DisplayObject[]} PIXI.Container#children

**`readonly`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[children](DDiagramCanvasBase.md#children)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8277

___

### cursor

• **cursor**: `string`

This defines what cursor mode is used when the mouse cursor
is hovered over the displayObject.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.cursor = 'wait';

**`see`** https://developer.mozilla.org/en/docs/Web/CSS/cursor

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[cursor](DDiagramCanvasBase.md#cursor)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8867

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`member`** {?PIXI.Rectangle} PIXI.DisplayObject#filterArea

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[filterArea](DDiagramCanvasBase.md#filterarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8592

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`member`** {?PIXI.Filter[]} PIXI.DisplayObject#filters

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[filters](DDiagramCanvasBase.md#filters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8600

___

### hitArea

• **hitArea**: `IHitArea`

Interaction shape. Children will be hit first, then this shape will be checked.
Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);

**`member`** {PIXI.IHitArea}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hitArea](DDiagramCanvasBase.md#hitarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8841

___

### interactive

• **interactive**: `boolean`

Enable interaction events for the DisplayObject. Touch, pointer and mouse
events will not be emitted unless `interactive` is set to `true`.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.on('tap', (event) => {
   //handle event
});

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[interactive](DDiagramCanvasBase.md#interactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8829

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`member`** {boolean}

**`memberof`** PIXI.Container#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[interactiveChildren](DDiagramCanvasBase.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8451

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isMask](DDiagramCanvasBase.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8631

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isSprite](DDiagramCanvasBase.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8626

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[localTransform](DDiagramCanvasBase.md#localtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8729

___

### mask

• **mask**: `Container` \| `MaskData`

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it. In PixiJS a regular mask must be a
{@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
utilities shape clipping. To remove a mask, set this property to `null`.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

**`example`**
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFF3300);
graphics.drawRect(50, 250, 100, 100);
graphics.endFill();

const sprite = new PIXI.Sprite(texture);
sprite.mask = graphics;

**`todo`** At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.

**`member`** {PIXI.Container|PIXI.MaskData}

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[mask](DDiagramCanvasBase.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[name](DDiagramCanvasBase.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8887

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[parent](DDiagramCanvasBase.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8560

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[pivot](DDiagramCanvasBase.md#pivot)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8750

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`member`** {boolean} PIXI.DisplayObject#renderable

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[renderable](DDiagramCanvasBase.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[rotation](DDiagramCanvasBase.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8764

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`member`** {boolean} PIXI.Container#sortDirty

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[sortDirty](DDiagramCanvasBase.md#sortdirty)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8300

___

### sortableChildren

• **sortableChildren**: `boolean`

If set to true, the container will sort its children by zIndex value
when updateTransform() is called, or manually if sortChildren() is called.

This actually changes the order of elements in the array, so should be treated
as a basic solution that is not performant compared to other solutions,
such as @link https://github.com/pixijs/pixi-display

Also be aware of that this may not work nicely with the addChildAt() function,
as the zIndex sorting may cause the child to automatically sorted to another position.

**`see`** PIXI.settings.SORTABLE_CHILDREN

**`member`** {boolean} PIXI.Container#sortableChildren

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[sortableChildren](DDiagramCanvasBase.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8293

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[transform](DDiagramCanvasBase.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8529

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`member`** {boolean} PIXI.DisplayObject#visible

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[visible](DDiagramCanvasBase.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8544

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[worldAlpha](DDiagramCanvasBase.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8567

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[worldTransform](DDiagramCanvasBase.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[worldVisible](DDiagramCanvasBase.md#worldvisible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8787

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`member`** {number}

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[zIndex](DDiagramCanvasBase.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8780

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[WORK_CONTAINS_POINT](DDiagramCanvasBase.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L719)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DDiagramCanvasBase.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1323)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DDiagramCanvasBase.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1327)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DDiagramCanvasBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1319)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1250](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1250)

___

### layer

• `get` **layer**(): [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Returns

[`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

DDiagramCanvasBase.layer

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L73)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DDiagramCanvasBase.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DDiagramCanvasBase.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1315](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1315)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDiagramCanvasBase.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1301)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DDiagramCanvasBase.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1012](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1012)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDiagramCanvasBase.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1306)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DDiagramCanvasBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1653](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1653)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1657](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1657)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDiagramCanvasBase.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1311)

___

### snap

• `get` **snap**(): ``null`` \| [`DDiagramCanvasEditorSnap`](DDiagramCanvasEditorSnap.md)

#### Returns

``null`` \| [`DDiagramCanvasEditorSnap`](DDiagramCanvasEditorSnap.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L59)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DDiagramCanvasBase.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1008](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1008)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DDiagramCanvasBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1533](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1533)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DDiagramCanvasBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1537)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1541](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1541)

___

### tile

• `get` **tile**(): [`DDiagramCanvasTile`](DDiagramCanvasTile.md)

#### Returns

[`DDiagramCanvasTile`](DDiagramCanvasTile.md)

#### Inherited from

DDiagramCanvasBase.tile

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L69)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DDiagramCanvasBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DDiagramCanvasBase.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1129)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DDiagramCanvasBase.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1033](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1033)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1196)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1200)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1134)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1138)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1165)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1169)

## Methods

### \_calculateBounds

▸ `Protected` **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_calculateBounds](DDiagramCanvasBase.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1877](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1877)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_recursivePostUpdateTransform](DDiagramCanvasBase.md#_recursivepostupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8641

___

### \_render

▸ `Protected` **_render**(`renderer`): `void`

To be overridden by the subclasses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_render](DDiagramCanvasBase.md#_render)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8413

___

### addChild

▸ **addChild**<`TChildren`\>(...`child`): `TChildren`[``0``]

Adds one or more children to the container.

Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...child` | `TChildren` | The DisplayObject(s) to add to the container |

#### Returns

`TChildren`[``0``]

The first child that was added.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[addChild](DDiagramCanvasBase.md#addchild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8315

___

### addChildAt

▸ **addChildAt**<`T`\>(`child`, `index`): `T`

Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DisplayObject`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `T` | The child to add |
| `index` | `number` | The index to place the child in |

#### Returns

`T`

The child that was added.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[addChildAt](DDiagramCanvasBase.md#addchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8323

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[addListener](DDiagramCanvasBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[addListener](DDiagramCanvasBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### applyTitle

▸ `Protected` **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[applyTitle](DDiagramCanvasBase.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1352)

___

### blur

▸ **blur**(`recursively?`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[blur](DDiagramCanvasBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1458](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1458)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[calculateBounds](DDiagramCanvasBase.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8386

___

### containsGlobalPoint

▸ `Protected` **containsGlobalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[containsGlobalPoint](DDiagramCanvasBase.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

___

### containsLocalPoint

▸ `Protected` **containsLocalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[containsLocalPoint](DDiagramCanvasBase.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1906](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1906)

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[containsPoint](DDiagramCanvasBase.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1893](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1893)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[destroy](DDiagramCanvasBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L81)

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

**`memberof`** PIXI.DisplayObject#

**`function`** displayObjectUpdateTransform

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[displayObjectUpdateTransform](DDiagramCanvasBase.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8815

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `...args` | `any`[] | Arguments that are passed to registered listeners |

#### Returns

`boolean`

`true` if the event had listeners, else `false`.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[emit](DDiagramCanvasBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[eventNames](DDiagramCanvasBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[focus](DDiagramCanvasBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### focusOnClosest

▸ `Protected` **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[focusOnClosest](DDiagramCanvasBase.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1820](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1820)

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `rect?`): `Rectangle`

Retrieves the bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate?` | `boolean` |
| `rect?` | `Rectangle` |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getBounds](DDiagramCanvasBase.md#getbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8651

___

### getChildAt

▸ **getChildAt**(`index`): `DisplayObject`

Returns the child at the specified index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to get the child at |

#### Returns

`DisplayObject`

The child at the given index, if any.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getChildAt](DDiagramCanvasBase.md#getchildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8351

___

### getChildByName

▸ **getChildByName**(`name`): `DisplayObject`

Returns the display object in the container.

**`method`** getChildByName

**`memberof`** PIXI.Container#

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Instance name. |

#### Returns

`DisplayObject`

The child with the specified name.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getChildByName](DDiagramCanvasBase.md#getchildbyname)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8460

___

### getChildIndex

▸ **getChildIndex**(`child`): `number`

Returns the index position of a child DisplayObject instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | The DisplayObject instance to identify |

#### Returns

`number`

The index position of the child display object to identify

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getChildIndex](DDiagramCanvasBase.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8337

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getClearType](DDiagramCanvasBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1098](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1098)

___

### getClippingRect

▸ **getClippingRect**(`target`, `result`): `void`

Returns a clipping rect.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `unknown` | - |
| `result` | `Rectangle` | a clipping rect |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getClippingRect](DDiagramCanvasBase.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1919](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1919)

___

### getGlobalPosition

▸ **getGlobalPosition**(`point?`, `skipUpdate?`): `Point`

Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.

**`method`** getGlobalPosition

**`memberof`** PIXI.DisplayObject#

#### Parameters

| Name | Type |
| :------ | :------ |
| `point?` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

The updated point.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getGlobalPosition](DDiagramCanvasBase.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8899

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../README.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../README.md#dcoordinatesize)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getHeight](DDiagramCanvasBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1274)

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`): `Rectangle`

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect?` | `Rectangle` |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getLocalBounds](DDiagramCanvasBase.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8658

___

### getParentOfSize

▸ `Protected` **getParentOfSize**(): ``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| { `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getParentOfSize](DDiagramCanvasBase.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1687)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getThemeDefault](DDiagramCanvasBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1868)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Overrides

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getType](DDiagramCanvasBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L95)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../README.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../README.md#dcoordinatesize)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getWidth](DDiagramCanvasBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../README.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../README.md#dcoordinateposition)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getX](DDiagramCanvasBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1142)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../README.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../README.md#dcoordinateposition)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getY](DDiagramCanvasBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1173)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hasDirty](DDiagramCanvasBase.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1440)

___

### hasRefitableHeight

▸ `Protected` **hasRefitableHeight**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hasRefitableHeight](DDiagramCanvasBase.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1619](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1619)

___

### hasRefitableWidth

▸ `Protected` **hasRefitableWidth**(`target`): target is DBase<any, any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DBase<any, any\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hasRefitableWidth](DDiagramCanvasBase.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1625](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1625)

___

### hide

▸ **hide**(): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hide](DDiagramCanvasBase.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1372](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1372)

___

### hitTest

▸ **hitTest**(`global`, `onHit?`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `global` | `IPoint` |
| `onHit?` | (`shape`: [`EShape`](../interfaces/EShape.md)) => `boolean` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hitTest](DDiagramCanvasBase.md#hittest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L89)

___

### init

▸ `Protected` **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[init](DDiagramCanvasBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1029](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1029)

___

### initReflowable

▸ `Protected` **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[initReflowable](DDiagramCanvasBase.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1016](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1016)

___

### initialize

▸ **initialize**(`shapes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[initialize](DDiagramCanvasBase.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L77)

___

### isAmbient

▸ `Protected` **isAmbient**(`theme`, `options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isAmbient](DDiagramCanvasBase.md#isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L61)

___

### isChildrenDirty

▸ **isChildrenDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isChildrenDirty](DDiagramCanvasBase.md#ischildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1428)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isDirty](DDiagramCanvasBase.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1436)

___

### isEventTarget

▸ `Protected` **isEventTarget**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isEventTarget](DDiagramCanvasBase.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1765](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1765)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isHidden](DDiagramCanvasBase.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1382](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1382)

___

### isRefitable

▸ `Protected` **isRefitable**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isRefitable](DDiagramCanvasBase.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1615](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1615)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isShown](DDiagramCanvasBase.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1368](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1368)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`number`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[listenerCount](DDiagramCanvasBase.md#listenercount)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24013

___

### listeners

▸ **listeners**(`event`): `Function`[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`Function`[]

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[listeners](DDiagramCanvasBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[off](DDiagramCanvasBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24116

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[on](DDiagramCanvasBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24112

▸ **on**(`event`, `fn`, `context?`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[on](DDiagramCanvasBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24114

___

### onBlur

▸ `Protected` **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onBlur](DDiagramCanvasBase.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1526)

___

### onChildBlur

▸ `Protected` **onChildBlur**(`blured`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blured` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onChildBlur](DDiagramCanvasBase.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1519](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1519)

___

### onChildFocus

▸ `Protected` **onChildFocus**(`focused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onChildFocus](DDiagramCanvasBase.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1505)

___

### onChildrenChange

▸ `Protected` **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onChildrenChange](DDiagramCanvasBase.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1020](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1020)

___

### onChildrenDirty

▸ `Protected` **onChildrenDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onChildrenDirty](DDiagramCanvasBase.md#onchildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1432)

___

### onDblClick

▸ **onDblClick**(`e`, `interactionManager`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onDblClick](DDiagramCanvasBase.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1852)

___

### onDown

▸ `Protected` **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onDown](DDiagramCanvasBase.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1779](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1779)

___

### onDownThis

▸ `Protected` **onDownThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onDownThis](DDiagramCanvasBase.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1786](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1786)

___

### onFocus

▸ `Protected` **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onFocus](DDiagramCanvasBase.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1512)

___

### onKeyDown

▸ **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onKeyDown](DDiagramCanvasBase.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1754](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1754)

___

### onKeyUp

▸ **onKeyUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onKeyUp](DDiagramCanvasBase.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1759)

___

### onMove

▸ `Protected` **onMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onMove](DDiagramCanvasBase.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1037](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1037)

___

### onOut

▸ `Protected` **onOut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onOut](DDiagramCanvasBase.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

___

### onOver

▸ `Protected` **onOver**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onOver](DDiagramCanvasBase.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1829](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1829)

___

### onParentMove

▸ `Protected` **onParentMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

Called when a parent moved.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newX` | `number` | a new parent's local x position |
| `newY` | `number` | a new parent's local y position |
| `oldX` | `number` | an old parent's local x position |
| `oldY` | `number` | an old parent's local y position |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onParentMove](DDiagramCanvasBase.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1743](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1743)

___

### onParentResize

▸ **onParentResize**(`parentWidth`, `parentHeight`, `parentPadding`): `void`

Called when a parent resized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parentWidth` | `number` | a parent's local width |
| `parentHeight` | `number` | a parent's local height |
| `parentPadding` | [`DPadding`](../interfaces/DPadding.md) | - |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onParentResize](DDiagramCanvasBase.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1702](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1702)

___

### onRefit

▸ `Protected` **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onRefit](DDiagramCanvasBase.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1571](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1571)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Overrides

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onReflow](DDiagramCanvasBase.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L90)

___

### onResize

▸ **onResize**(`newWidth`, `newHeight`, `oldWidth`, `oldHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newWidth` | `number` |
| `newHeight` | `number` |
| `oldWidth` | `number` |
| `oldHeight` | `number` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onResize](DDiagramCanvasBase.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1102)

___

### onScale

▸ `Protected` **onScale**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onScale](DDiagramCanvasBase.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1119)

___

### onShortcut

▸ `Protected` **onShortcut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onShortcut](DDiagramCanvasBase.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1025](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1025)

___

### onSkew

▸ `Protected` **onSkew**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onSkew](DDiagramCanvasBase.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### onStateChange

▸ `Protected` **onStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onStateChange](DDiagramCanvasBase.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1481](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1481)

___

### onUp

▸ `Protected` **onUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onUp](DDiagramCanvasBase.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1797)

___

### onUpThis

▸ `Protected` **onUpThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onUpThis](DDiagramCanvasBase.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1804)

___

### onWheel

▸ **onWheel**(`e`, `deltas`, `global`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `WheelEvent` |
| `deltas` | [`UtilWheelEventDeltas`](../interfaces/UtilWheelEventDeltas.md) |
| `global` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onWheel](DDiagramCanvasBase.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1748)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"added"`` \| ``"removed"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[once](DDiagramCanvasBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24109

▸ **once**(`event`, `fn`, `context?`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[once](DDiagramCanvasBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24111

___

### refit

▸ **refit**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[refit](DDiagramCanvasBase.md#refit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1555](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1555)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[reflow](DDiagramCanvasBase.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1631](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1631)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeAllListeners](DDiagramCanvasBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeAllListeners](DDiagramCanvasBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24099

___

### removeChild

▸ **removeChild**<`TChildren`\>(...`child`): `TChildren`[``0``]

Removes one or more children from the container.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...child` | `TChildren` | The DisplayObject(s) to remove |

#### Returns

`TChildren`[``0``]

The first child that was removed.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeChild](DDiagramCanvasBase.md#removechild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8358

___

### removeChildAt

▸ **removeChildAt**(`index`): `DisplayObject`

Removes a child from the specified index position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index to get the child from |

#### Returns

`DisplayObject`

The child that was removed.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeChildAt](DDiagramCanvasBase.md#removechildat)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8365

___

### removeChildren

▸ **removeChildren**(`beginIndex?`, `endIndex?`): `DisplayObject`[]

Removes all children from this container that are within the begin and end indexes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `beginIndex?` | `number` |
| `endIndex?` | `number` |

#### Returns

`DisplayObject`[]

List of removed children

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeChildren](DDiagramCanvasBase.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8373

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeListener](DDiagramCanvasBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeListener](DDiagramCanvasBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24097

___

### render

▸ **render**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[render](DDiagramCanvasBase.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1858](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1858)

___

### renderAdvanced

▸ `Protected` **renderAdvanced**(`renderer`): `void`

Render the object using the WebGL renderer and advanced features.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[renderAdvanced](DDiagramCanvasBase.md#renderadvanced)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8406

___

### resize

▸ **resize**(`width`, `height`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[resize](DDiagramCanvasBase.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1049](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1049)

___

### serialize

▸ **serialize**(`id?`, `thumbnail?`): [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `number` |
| `thumbnail?` | [`DDiagramCanvasEditorThumbnail`](../interfaces/DDiagramCanvasEditorThumbnail.md) |

#### Returns

[`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L63)

___

### setChildIndex

▸ **setChildIndex**(`child`, `index`): `void`

Changes the position of an existing child in the display object container

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | The child DisplayObject instance for which you want to change the index number |
| `index` | `number` | The resulting index number for the child display object |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setChildIndex](DDiagramCanvasBase.md#setchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8344

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setFocused](DDiagramCanvasBase.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1444](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1444)

___

### setHeight

▸ **setHeight**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../README.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setHeight](DDiagramCanvasBase.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1278)

___

### setParent

▸ **setParent**(`container`): `Container`

Set the parent Container of this DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `Container` | The Container to add this DisplayObject to. |

#### Returns

`Container`

The Container that this DisplayObject was added to.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setParent](DDiagramCanvasBase.md#setparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8686

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): `DisplayObject`

Convenience function to set the position, scale, skew and pivot at once.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |
| `scaleX?` | `number` |
| `scaleY?` | `number` |
| `rotation?` | `number` |
| `skewX?` | `number` |
| `skewY?` | `number` |
| `pivotX?` | `number` |
| `pivotY?` | `number` |

#### Returns

`DisplayObject`

The DisplayObject instance

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setTransform](DDiagramCanvasBase.md#settransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### setWidth

▸ **setWidth**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../README.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setWidth](DDiagramCanvasBase.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1223)

___

### setX

▸ **setX**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../README.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setX](DDiagramCanvasBase.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1151)

___

### setY

▸ **setY**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../README.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setY](DDiagramCanvasBase.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1182)

___

### show

▸ **show**(): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)<`THEME`, `OPTIONS`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[show](DDiagramCanvasBase.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1359)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[sortChildren](DDiagramCanvasBase.md#sortchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8377

___

### swapChildren

▸ **swapChildren**(`child`, `child2`): `void`

Swaps the position of 2 Display Objects within this container.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `DisplayObject` | First display object to swap |
| `child2` | `DisplayObject` | Second display object to swap |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[swapChildren](DDiagramCanvasBase.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8330

___

### toBackgroundBase

▸ `Protected` **toBackgroundBase**(`theme`, `options?`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

``null`` \| `number`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toBackgroundBase](DDiagramCanvasBase.md#tobackgroundbase)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L65)

___

### toChildrenDirty

▸ **toChildrenDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toChildrenDirty](DDiagramCanvasBase.md#tochildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1411)

___

### toCursor

▸ `Protected` **toCursor**(`cursor`, `state`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`string`\> |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toCursor](DDiagramCanvasBase.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:991](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L991)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toDirty](DDiagramCanvasBase.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1386)

___

### toGlobal

▸ **toGlobal**(`position`, `point?`, `skipUpdate?`): `IPoint`

Calculates the global position of the display object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `point?` | `IPoint` | - |
| `skipUpdate?` | `boolean` | - |

#### Returns

`IPoint`

A point object representing the position of this object.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toGlobal](DDiagramCanvasBase.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8668

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toHasDirty](DDiagramCanvasBase.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1395](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1395)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `IPoint`

Calculates the local position of the display object relative to another point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `from?` | `DisplayObject` | - |
| `point?` | `IPoint` | - |
| `skipUpdate?` | `boolean` | - |

#### Returns

`IPoint`

A point object representing the position of this object

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toLocal](DDiagramCanvasBase.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8679

___

### toParentChildrenDirty

▸ **toParentChildrenDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toParentChildrenDirty](DDiagramCanvasBase.md#toparentchildrendirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1421](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1421)

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toParentHasDirty](DDiagramCanvasBase.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1404)

___

### toParentResized

▸ `Protected` **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toParentResized](DDiagramCanvasBase.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1680](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L1680)

___

### toSnap

▸ `Protected` **toSnap**(`theme`, `options?`): ``null`` \| [`DDiagramCanvasEditorSnap`](DDiagramCanvasEditorSnap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | [`DDiagramCanvasEditorSnapOptions`](../interfaces/DDiagramCanvasEditorSnapOptions.md) |

#### Returns

``null`` \| [`DDiagramCanvasEditorSnap`](DDiagramCanvasEditorSnap.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L49)

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the transform on all children of this container for rendering

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[updateTransform](DDiagramCanvasBase.md#updatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8381

___

### mixin

▸ `Static` **mixin**(`source`): `void`

Mixes all enumerable properties and methods from a source object to DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `any` | The source of properties and methods to mix in. |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[mixin](DDiagramCanvasBase.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8979
