[Winter Cardinal UI - v0.442.0](../index.md) / DDiagramCanvasEditor

# Class: DDiagramCanvasEditor\<THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md) = [`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md) |
| `OPTIONS` | extends [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<`THEME`\> = [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<`THEME`\> |

## Hierarchy

- [`DDiagramCanvasBase`](DDiagramCanvasBase.md)\<`THEME`, `OPTIONS`\>

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
- [\_boundsID](DDiagramCanvasEditor.md#_boundsid)
- [\_boundsRect](DDiagramCanvasEditor.md#_boundsrect)
- [\_category](DDiagramCanvasEditor.md#_category)
- [\_clearType](DDiagramCanvasEditor.md#_cleartype)
- [\_corner](DDiagramCanvasEditor.md#_corner)
- [\_cursor](DDiagramCanvasEditor.md#_cursor)
- [\_description](DDiagramCanvasEditor.md#_description)
- [\_destroyed](DDiagramCanvasEditor.md#_destroyed)
- [\_enabledFilters](DDiagramCanvasEditor.md#_enabledfilters)
- [\_label](DDiagramCanvasEditor.md#_label)
- [\_lastDownPoint](DDiagramCanvasEditor.md#_lastdownpoint)
- [\_lastSortedIndex](DDiagramCanvasEditor.md#_lastsortedindex)
- [\_layer](DDiagramCanvasEditor.md#_layer)
- [\_localBounds](DDiagramCanvasEditor.md#_localbounds)
- [\_localBoundsLimit](DDiagramCanvasEditor.md#_localboundslimit)
- [\_localBoundsRect](DDiagramCanvasEditor.md#_localboundsrect)
- [\_mask](DDiagramCanvasEditor.md#_mask)
- [\_options](DDiagramCanvasEditor.md#_options)
- [\_outline](DDiagramCanvasEditor.md#_outline)
- [\_padding](DDiagramCanvasEditor.md#_padding)
- [\_reflowable](DDiagramCanvasEditor.md#_reflowable)
- [\_shape](DDiagramCanvasEditor.md#_shape)
- [\_shortcuts](DDiagramCanvasEditor.md#_shortcuts)
- [\_snap](DDiagramCanvasEditor.md#_snap)
- [\_snippet](DDiagramCanvasEditor.md#_snippet)
- [\_summary](DDiagramCanvasEditor.md#_summary)
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
- [WORK\_LOCAL\_BOUNDS](DDiagramCanvasEditor.md#work_local_bounds)

### Accessors

- [background](DDiagramCanvasEditor.md#background)
- [border](DDiagramCanvasEditor.md#border)
- [category](DDiagramCanvasEditor.md#category)
- [corner](DDiagramCanvasEditor.md#corner)
- [description](DDiagramCanvasEditor.md#description)
- [height](DDiagramCanvasEditor.md#height)
- [label](DDiagramCanvasEditor.md#label)
- [layer](DDiagramCanvasEditor.md#layer)
- [options](DDiagramCanvasEditor.md#options)
- [outline](DDiagramCanvasEditor.md#outline)
- [padding](DDiagramCanvasEditor.md#padding)
- [position](DDiagramCanvasEditor.md#position)
- [reflowable](DDiagramCanvasEditor.md#reflowable)
- [scale](DDiagramCanvasEditor.md#scale)
- [shadow](DDiagramCanvasEditor.md#shadow)
- [shape](DDiagramCanvasEditor.md#shape)
- [skew](DDiagramCanvasEditor.md#skew)
- [snap](DDiagramCanvasEditor.md#snap)
- [snippet](DDiagramCanvasEditor.md#snippet)
- [state](DDiagramCanvasEditor.md#state)
- [summary](DDiagramCanvasEditor.md#summary)
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
- [containerUpdateTransform](DDiagramCanvasEditor.md#containerupdatetransform)
- [containsGlobalPoint](DDiagramCanvasEditor.md#containsglobalpoint)
- [containsLocalPoint](DDiagramCanvasEditor.md#containslocalpoint)
- [containsPoint](DDiagramCanvasEditor.md#containspoint)
- [destroy](DDiagramCanvasEditor.md#destroy)
- [disableTempParent](DDiagramCanvasEditor.md#disabletempparent)
- [displayObjectUpdateTransform](DDiagramCanvasEditor.md#displayobjectupdatetransform)
- [emit](DDiagramCanvasEditor.md#emit)
- [enableTempParent](DDiagramCanvasEditor.md#enabletempparent)
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
- [isDirty](DDiagramCanvasEditor.md#isdirty)
- [isEventTarget](DDiagramCanvasEditor.md#iseventtarget)
- [isHidden](DDiagramCanvasEditor.md#ishidden)
- [isHierarchyDirty](DDiagramCanvasEditor.md#ishierarchydirty)
- [isRefitable](DDiagramCanvasEditor.md#isrefitable)
- [isShown](DDiagramCanvasEditor.md#isshown)
- [listenerCount](DDiagramCanvasEditor.md#listenercount)
- [listeners](DDiagramCanvasEditor.md#listeners)
- [newPadding](DDiagramCanvasEditor.md#newpadding)
- [newShape](DDiagramCanvasEditor.md#newshape)
- [off](DDiagramCanvasEditor.md#off)
- [on](DDiagramCanvasEditor.md#on)
- [onBlur](DDiagramCanvasEditor.md#onblur)
- [onChildBlur](DDiagramCanvasEditor.md#onchildblur)
- [onChildFocus](DDiagramCanvasEditor.md#onchildfocus)
- [onChildrenChange](DDiagramCanvasEditor.md#onchildrenchange)
- [onDblClick](DDiagramCanvasEditor.md#ondblclick)
- [onDestroy](DDiagramCanvasEditor.md#ondestroy)
- [onDown](DDiagramCanvasEditor.md#ondown)
- [onDownThis](DDiagramCanvasEditor.md#ondownthis)
- [onFocus](DDiagramCanvasEditor.md#onfocus)
- [onHierarchyDirty](DDiagramCanvasEditor.md#onhierarchydirty)
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
- [toCursor](DDiagramCanvasEditor.md#tocursor)
- [toDirty](DDiagramCanvasEditor.md#todirty)
- [toGlobal](DDiagramCanvasEditor.md#toglobal)
- [toHasDirty](DDiagramCanvasEditor.md#tohasdirty)
- [toHierarchyDirty](DDiagramCanvasEditor.md#tohierarchydirty)
- [toLocal](DDiagramCanvasEditor.md#tolocal)
- [toParentHasDirty](DDiagramCanvasEditor.md#toparenthasdirty)
- [toParentHierarchyDirty](DDiagramCanvasEditor.md#toparenthierarchydirty)
- [toParentResized](DDiagramCanvasEditor.md#toparentresized)
- [toSnap](DDiagramCanvasEditor.md#tosnap)
- [updateTransform](DDiagramCanvasEditor.md#updatetransform)
- [mixin](DDiagramCanvasEditor.md#mixin)

## Constructors

### constructor

• **new DDiagramCanvasEditor**\<`THEME`, `OPTIONS`\>(`options`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<`THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md) = [`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md) |
| `OPTIONS` | extends [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<`THEME`\> = [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `OPTIONS` |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<`THEME`, `OPTIONS`\>

#### Overrides

[DDiagramCanvasBase](DDiagramCanvasBase.md).[constructor](DDiagramCanvasBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L47)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_accessibleActive](DDiagramCanvasBase.md#_accessibleactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8559

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_accessibleDiv](DDiagramCanvasBase.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_auto](DDiagramCanvasBase.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_background](DDiagramCanvasBase.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_border](DDiagramCanvasBase.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_bounds](DDiagramCanvasBase.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8681

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_boundsID](DDiagramCanvasBase.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8694

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_boundsRect](DDiagramCanvasBase.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_category

• `Protected` **\_category**: ``null`` \| `string`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_category](DDiagramCanvasBase.md#_category)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L45)

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_clearType](DDiagramCanvasBase.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_corner](DDiagramCanvasBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_cursor](DDiagramCanvasBase.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_description

• `Protected` **\_description**: `string`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_description](DDiagramCanvasBase.md#_description)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L47)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_destroyed](DDiagramCanvasBase.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_enabledFilters](DDiagramCanvasBase.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_label

• `Protected` **\_label**: `string`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_label](DDiagramCanvasBase.md#_label)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L44)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_lastDownPoint](DDiagramCanvasBase.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L795)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_lastSortedIndex](DDiagramCanvasBase.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8644

___

### \_layer

• `Protected` **\_layer**: [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_layer](DDiagramCanvasBase.md#_layer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L43)

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_localBounds](DDiagramCanvasBase.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8687

___

### \_localBoundsLimit

• `Protected` **\_localBoundsLimit**: `number`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_localBoundsLimit](DDiagramCanvasBase.md#_localboundslimit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L49)

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_localBoundsRect](DDiagramCanvasBase.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_mask](DDiagramCanvasBase.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_options](DDiagramCanvasBase.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_outline](DDiagramCanvasBase.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_padding](DDiagramCanvasBase.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_reflowable](DDiagramCanvasBase.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_shape

• `Protected` `Optional` **\_shape**: [`DDiagramCanvasEditorShape`](../interfaces/DDiagramCanvasEditorShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L44)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_shortcuts](DDiagramCanvasBase.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snap

• `Protected` **\_snap**: ``null`` \| [`DDiagramCanvasEditorSnap`](DDiagramCanvasEditorSnap.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L45)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_snippet](DDiagramCanvasBase.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_summary

• `Protected` **\_summary**: `string`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_summary](DDiagramCanvasBase.md#_summary)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L46)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_tempDisplayObjectParent](DDiagramCanvasBase.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_tile

• `Protected` **\_tile**: [`DDiagramCanvasTile`](DDiagramCanvasTile.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_tile](DDiagramCanvasBase.md#_tile)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L48)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_title](DDiagramCanvasBase.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L787)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_zIndex](DDiagramCanvasBase.md#_zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8652

___

### accessible

• **accessible**: `boolean`

Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessible](DDiagramCanvasBase.md#accessible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8538

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

```ts
true
```

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessibleChildren](DDiagramCanvasBase.md#accessiblechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8592

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessibleHint](DDiagramCanvasBase.md#accessiblehint)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8553

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

```ts
'auto'
```

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessiblePointerEvents](DDiagramCanvasBase.md#accessiblepointerevents)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8583

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessibleTitle](DDiagramCanvasBase.md#accessibletitle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8546

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

```ts
'button'
```

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[accessibleType](DDiagramCanvasBase.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8574

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[alpha](DDiagramCanvasBase.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8605

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[angle](DDiagramCanvasBase.md#angle)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8882

___

### buttonMode

• **buttonMode**: `boolean`

If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
Setting this changes the 'cursor' property to `'pointer'`.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.buttonMode = true;
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[buttonMode](DDiagramCanvasBase.md#buttonmode)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8964

___

### cacheAsBitmap

• **cacheAsBitmap**: `boolean`

Set this to true if you want this display object to be cached as a bitmap.
This basically takes a snap shot of the display object as it is at that moment. It can
provide a performance benefit for complex static displayObjects.
To remove simply set this property to `false`

IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[cacheAsBitmap](DDiagramCanvasBase.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8991

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[children](DDiagramCanvasBase.md#children)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8327

___

### cursor

• **cursor**: `string`

This defines what cursor mode is used when the mouse cursor
is hovered over the displayObject.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.cursor = 'wait';
```

**`See`**

https://developer.mozilla.org/en/docs/Web/CSS/cursor

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[cursor](DDiagramCanvasBase.md#cursor)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8978

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`Member`**

PIXI.DisplayObject#filterArea

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[filterArea](DDiagramCanvasBase.md#filterarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8661

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`Member`**

PIXI.DisplayObject#filters

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[filters](DDiagramCanvasBase.md#filters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8669

___

### hitArea

• **hitArea**: `IHitArea`

Interaction shape. Children will be hit first, then this shape will be checked.
Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hitArea](DDiagramCanvasBase.md#hitarea)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8952

___

### interactive

• **interactive**: `boolean`

Enable interaction events for the DisplayObject. Touch, pointer and mouse
events will not be emitted unless `interactive` is set to `true`.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.on('tap', (event) => {
   //handle event
});
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[interactive](DDiagramCanvasBase.md#interactive)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8940

___

### interactiveChildren

• **interactiveChildren**: `boolean`

Determines if the children to the displayObject can be clicked/touched
Setting this to false allows PixiJS to bypass a recursive `hitTest` function

**`Member`**

**`Memberof`**

PIXI.Container#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[interactiveChildren](DDiagramCanvasBase.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8518

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isMask](DDiagramCanvasBase.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8732

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isSprite](DDiagramCanvasBase.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8727

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[localTransform](DDiagramCanvasBase.md#localtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8840

___

### mask

• **mask**: ``null`` \| `Container` \| `MaskData`

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it. In PixiJS a regular mask must be a
PIXI.Graphics or a PIXI.Sprite object. This allows for much faster masking in canvas as it
utilities shape clipping. To remove a mask, set this property to `null`.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

**`Example`**

```ts
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFF3300);
graphics.drawRect(50, 250, 100, 100);
graphics.endFill();

const sprite = new PIXI.Sprite(texture);
sprite.mask = graphics;
```

**`Todo`**

At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[mask](DDiagramCanvasBase.md#mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8918

___

### name

• **name**: `string`

The instance name of the object.

**`Memberof`**

PIXI.DisplayObject#

**`Member`**

name

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[name](DDiagramCanvasBase.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8998

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[parent](DDiagramCanvasBase.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8629

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[pivot](DDiagramCanvasBase.md#pivot)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8861

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`Member`**

PIXI.DisplayObject#renderable

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[renderable](DDiagramCanvasBase.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8623

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[rotation](DDiagramCanvasBase.md#rotation)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8875

___

### sortDirty

• **sortDirty**: `boolean`

Should children be sorted by zIndex at the next updateTransform call.
Will get automatically set to true if a new child is added, or if a child's zIndex changes.

**`Member`**

PIXI.Container#sortDirty

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[sortDirty](DDiagramCanvasBase.md#sortdirty)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8350

___

### sortableChildren

• **sortableChildren**: `boolean`

If set to true, the container will sort its children by zIndex value
when updateTransform() is called, or manually if sortChildren() is called.

This actually changes the order of elements in the array, so should be treated
as a basic solution that is not performant compared to other solutions,
such as

**`Link`**

https://github.com/pixijs/pixi-display

Also be aware of that this may not work nicely with the addChildAt() function,
as the zIndex sorting may cause the child to automatically sorted to another position.

**`See`**

PIXI.settings.SORTABLE_CHILDREN

**`Member`**

PIXI.Container#sortableChildren

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[sortableChildren](DDiagramCanvasBase.md#sortablechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8343

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`Member`**

PIXI.DisplayObject#transform

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[transform](DDiagramCanvasBase.md#transform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8599

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`Member`**

PIXI.DisplayObject#visible

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[visible](DDiagramCanvasBase.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[worldAlpha](DDiagramCanvasBase.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[worldTransform](DDiagramCanvasBase.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8833

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[worldVisible](DDiagramCanvasBase.md#worldvisible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8898

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`Member`**

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[zIndex](DDiagramCanvasBase.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[WORK_CONTAINS_POINT](DDiagramCanvasBase.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

___

### WORK\_LOCAL\_BOUNDS

▪ `Static` `Protected` `Optional` **WORK\_LOCAL\_BOUNDS**: `Rectangle`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[WORK_LOCAL_BOUNDS](DDiagramCanvasBase.md#work_local_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L41)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DDiagramCanvasBase.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DDiagramCanvasBase.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### category

• `get` **category**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

DDiagramCanvasBase.category

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L106)

• `set` **category**(`category`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `category` | ``null`` \| `string` |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.category

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L110)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DDiagramCanvasBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Inherited from

DDiagramCanvasBase.description

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L122)

• `set` **description**(`description`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.description

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L126)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1390)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1394)

___

### label

• `get` **label**(): `string`

#### Returns

`string`

#### Inherited from

DDiagramCanvasBase.label

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L98)

• `set` **label**(`label`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.label

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L102)

___

### layer

• `get` **layer**(): [`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Returns

[`DDiagramLayerContainer`](DDiagramLayerContainer.md)

#### Inherited from

DDiagramCanvasBase.layer

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L134)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DDiagramCanvasBase.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DDiagramCanvasBase.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DDiagramCanvasBase.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDiagramCanvasBase.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1449](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1449)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DDiagramCanvasBase.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDiagramCanvasBase.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DDiagramCanvasBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1853](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1853)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1857](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1857)

___

### shape

• `get` **shape**(): [`DDiagramCanvasEditorShape`](../interfaces/DDiagramCanvasEditorShape.md)

#### Returns

[`DDiagramCanvasEditorShape`](../interfaces/DDiagramCanvasEditorShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L66)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDiagramCanvasBase.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### snap

• `get` **snap**(): ``null`` \| [`DDiagramCanvasEditorSnap`](DDiagramCanvasEditorSnap.md)

#### Returns

``null`` \| [`DDiagramCanvasEditorSnap`](DDiagramCanvasEditorSnap.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L62)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DDiagramCanvasBase.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DDiagramCanvasBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### summary

• `get` **summary**(): `string`

#### Returns

`string`

#### Inherited from

DDiagramCanvasBase.summary

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L114)

• `set` **summary**(`summary`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `summary` | `string` |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.summary

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L118)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DDiagramCanvasBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1694](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1694)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1698)

___

### tile

• `get` **tile**(): [`DDiagramCanvasTile`](DDiagramCanvasTile.md)

#### Returns

[`DDiagramCanvasTile`](DDiagramCanvasTile.md)

#### Inherited from

DDiagramCanvasBase.tile

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L130)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DDiagramCanvasBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1487)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1491)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DDiagramCanvasBase.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DDiagramCanvasBase.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

• `set` **weight**(`weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `weight` | `number` |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1251)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1255)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramCanvasBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1291)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DDiagramCanvasBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1295)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[_calculateBounds](DDiagramCanvasBase.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2084](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2084)

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

node_modules/pixi.js/pixi.js.d.ts:8737

___

### \_render

▸ **_render**(`renderer`): `void`

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

node_modules/pixi.js/pixi.js.d.ts:8472

___

### addChild

▸ **addChild**\<`TChildren`\>(`...children`): `TChildren`[``0``]

Adds one or more children to the container.

Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...children` | `TChildren` | The DisplayObject(s) to add to the container |

#### Returns

`TChildren`[``0``]

The first child that was added.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[addChild](DDiagramCanvasBase.md#addchild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8365

___

### addChildAt

▸ **addChildAt**\<`T`\>(`child`, `index`): `T`

Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `DisplayObject` |

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

node_modules/pixi.js/pixi.js.d.ts:8373

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[addListener](DDiagramCanvasBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25521

▸ **addListener**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[addListener](DDiagramCanvasBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[applyTitle](DDiagramCanvasBase.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

___

### blur

▸ **blur**(`recursively?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[blur](DDiagramCanvasBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1606)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[calculateBounds](DDiagramCanvasBase.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8436

___

### containerUpdateTransform

▸ **containerUpdateTransform**(): `void`

Container default updateTransform, does update children of container.
Will crash if there's no parent element.

#### Returns

`void`

**`Memberof`**

PIXI.Container#

**`Function`**

containerUpdateTransform

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[containerUpdateTransform](DDiagramCanvasBase.md#containerupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8510

___

### containsGlobalPoint

▸ **containsGlobalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[containsGlobalPoint](DDiagramCanvasBase.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2098](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2098)

___

### containsLocalPoint

▸ **containsLocalPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[containsLocalPoint](DDiagramCanvasBase.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2102)

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

[src/main/typescript/wcardinal/ui/d-base.ts:2089](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2089)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[destroy](DDiagramCanvasBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L142)

___

### disableTempParent

▸ **disableTempParent**(`cacheParent`): `void`

Pair method for `enableTempParent`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheParent` | `DisplayObject` | actual parent of element |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[disableTempParent](DDiagramCanvasBase.md#disabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8812

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

#### Returns

`void`

**`Memberof`**

PIXI.DisplayObject#

**`Function`**

displayObjectUpdateTransform

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[displayObjectUpdateTransform](DDiagramCanvasBase.md#displayobjectupdatetransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8926

___

### emit

▸ **emit**(`event`, `...args`): `boolean`

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

node_modules/pixi.js/pixi.js.d.ts:25441

___

### enableTempParent

▸ **enableTempParent**(): `DisplayObject`

Used in Renderer, cacheAsBitmap and other places where you call an `updateTransform` on root

```
const cacheParent = elem.enableTempParent();
elem.updateTransform();
elem.disableTempParent(cacheParent);
```

#### Returns

`DisplayObject`

current parent

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[enableTempParent](DDiagramCanvasBase.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[eventNames](DDiagramCanvasBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[focus](DDiagramCanvasBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1602)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[focusOnClosest](DDiagramCanvasBase.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2019](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2019)

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `rect?`): `Rectangle`

Retrieves the bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skipUpdate?` | `boolean` | Setting to `true` will stop the transforms of the scene graph from being updated. This means the calculation returned MAY be out of date BUT will give you a nice performance boost. |
| `rect?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getBounds](DDiagramCanvasBase.md#getbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8747

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

node_modules/pixi.js/pixi.js.d.ts:8401

___

### getChildByName

▸ **getChildByName**(`name`, `deep?`): `DisplayObject`

Returns the display object in the container.

Recursive searches are done in a preorder traversal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Instance name. |
| `deep?` | `boolean` | Whether to search recursively |

#### Returns

`DisplayObject`

The child with the specified name.

**`Method`**

getChildByName

**`Memberof`**

PIXI.Container#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getChildByName](DDiagramCanvasBase.md#getchildbyname)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8530

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

node_modules/pixi.js/pixi.js.d.ts:8387

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getClearType](DDiagramCanvasBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

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

[src/main/typescript/wcardinal/ui/d-base.ts:2115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2115)

___

### getGlobalPosition

▸ **getGlobalPosition**(`point?`, `skipUpdate?`): `Point`

Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point?` | `Point` | The point to write the global value to. |
| `skipUpdate?` | `boolean` | Setting to true will stop the transforms of the scene graph from being updated. This means the calculation returned MAY be out of date BUT will give you a nice performance boost. |

#### Returns

`Point`

The updated point.

**`Method`**

getGlobalPosition

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getGlobalPosition](DDiagramCanvasBase.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getHeight](DDiagramCanvasBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

___

### getLocalBounds

▸ **getLocalBounds**(`result?`): `Rectangle`

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getLocalBounds](DDiagramCanvasBase.md#getlocalbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L168)

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getParentOfSize](DDiagramCanvasBase.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getThemeDefault](DDiagramCanvasBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2075](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2075)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getType](DDiagramCanvasBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L134)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getWidth](DDiagramCanvasBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getX](DDiagramCanvasBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1259)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[getY](DDiagramCanvasBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1299)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hasDirty](DDiagramCanvasBase.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

___

### hasRefitableHeight

▸ **hasRefitableHeight**(`target`): target is DRefitable

Returns true if the given target has a height that doesn't depend on its parent height.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `any` | a target |

#### Returns

target is DRefitable

true if the given target has a height that doesn't depend on its parent height.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hasRefitableHeight](DDiagramCanvasBase.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1831](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1831)

___

### hasRefitableWidth

▸ **hasRefitableWidth**(`target`): target is DRefitable

Returns true if the given target has a width that doesn't depend on its parent width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `any` | a target |

#### Returns

target is DRefitable

true if the given target has a width that doesn't depend on its parent width.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hasRefitableWidth](DDiagramCanvasBase.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[hide](DDiagramCanvasBase.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1520)

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

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L154)

___

### init

▸ **init**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[init](DDiagramCanvasBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1137)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[initReflowable](DDiagramCanvasBase.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### initialize

▸ **initialize**(`shapes`, `mapper?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `mapper?` | ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper) |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[initialize](DDiagramCanvasBase.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L138)

___

### isAmbient

▸ **isAmbient**(`theme`, `options?`): `boolean`

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

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L90)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isDirty](DDiagramCanvasBase.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

___

### isEventTarget

▸ **isEventTarget**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isEventTarget](DDiagramCanvasBase.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1965](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1965)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isHidden](DDiagramCanvasBase.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1530)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isHierarchyDirty](DDiagramCanvasBase.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1576)

___

### isRefitable

▸ **isRefitable**(`target`): target is DRefitable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DRefitable

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isRefitable](DDiagramCanvasBase.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1821](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1821)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[isShown](DDiagramCanvasBase.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1516)

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

node_modules/pixi.js/pixi.js.d.ts:25432

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

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newPadding

▸ **newPadding**(`theme`, `options?`, `callback?`): [`DBasePadding`](DBasePadding.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |
| `callback?` | () => `void` |

#### Returns

[`DBasePadding`](DBasePadding.md)

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[newPadding](DDiagramCanvasBase.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### newShape

▸ **newShape**(): [`DDiagramCanvasEditorShape`](../interfaces/DDiagramCanvasEditorShape.md)

#### Returns

[`DDiagramCanvasEditorShape`](../interfaces/DDiagramCanvasEditorShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L70)

___

### off

▸ **off**(`event`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[off](DDiagramCanvasBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25534

___

### on

▸ **on**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[on](DDiagramCanvasBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25530

▸ **on**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[on](DDiagramCanvasBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onBlur](DDiagramCanvasBase.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1679](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1679)

___

### onChildBlur

▸ **onChildBlur**(`blured`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blured` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onChildBlur](DDiagramCanvasBase.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

___

### onChildFocus

▸ **onChildFocus**(`focused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `focused` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onChildFocus](DDiagramCanvasBase.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onChildrenChange](DDiagramCanvasBase.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1128)

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

[src/main/typescript/wcardinal/ui/d-base.ts:2051](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2051)

___

### onDestroy

▸ **onDestroy**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onDestroy](DDiagramCanvasBase.md#ondestroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L149)

___

### onDown

▸ **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onDown](DDiagramCanvasBase.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1979](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1979)

___

### onDownThis

▸ **onDownThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onDownThis](DDiagramCanvasBase.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1986](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1986)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onFocus](DDiagramCanvasBase.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1665)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onHierarchyDirty](DDiagramCanvasBase.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1580)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1954](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1954)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1959](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1959)

___

### onMove

▸ **onMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

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

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

___

### onOut

▸ **onOut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onOut](DDiagramCanvasBase.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2042](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2042)

___

### onOver

▸ **onOver**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onOver](DDiagramCanvasBase.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2028](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2028)

___

### onParentMove

▸ **onParentMove**(`newX`, `newY`, `oldX`, `oldY`): `void`

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

[src/main/typescript/wcardinal/ui/d-base.ts:1943](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1943)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onRefit](DDiagramCanvasBase.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1739)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onReflow](DDiagramCanvasBase.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1849)

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

#### Overrides

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onResize](DDiagramCanvasBase.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L105)

___

### onScale

▸ **onScale**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Overrides

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onScale](DDiagramCanvasBase.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L118)

___

### onShortcut

▸ **onShortcut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onShortcut](DDiagramCanvasBase.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1133)

___

### onSkew

▸ **onSkew**(`newX`, `newY`, `oldX`, `oldY`): `void`

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

[src/main/typescript/wcardinal/ui/d-base.ts:1241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1241)

___

### onStateChange

▸ **onStateChange**(`newState`, `oldState`): `void`

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

[src/main/typescript/wcardinal/ui/d-base.ts:1629](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1629)

___

### onUp

▸ **onUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onUp](DDiagramCanvasBase.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1996](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1996)

___

### onUpThis

▸ **onUpThis**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[onUpThis](DDiagramCanvasBase.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2003](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2003)

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

[src/main/typescript/wcardinal/ui/d-base.ts:1948](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1948)

___

### once

▸ **once**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"removed"`` \| ``"added"`` |
| `fn` | (`displayObject`: `DisplayObject`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[once](DDiagramCanvasBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25527

▸ **once**(`event`, `fn`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[once](DDiagramCanvasBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[reflow](DDiagramCanvasBase.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1712)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeAllListeners](DDiagramCanvasBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25516

▸ **removeAllListeners**(`event?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeAllListeners](DDiagramCanvasBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25517

___

### removeChild

▸ **removeChild**\<`TChildren`\>(`...children`): `TChildren`[``0``]

Removes one or more children from the container.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TChildren` | extends `DisplayObject`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...children` | `TChildren` | The DisplayObject(s) to remove |

#### Returns

`TChildren`[``0``]

The first child that was removed.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeChild](DDiagramCanvasBase.md#removechild)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8408

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

node_modules/pixi.js/pixi.js.d.ts:8415

___

### removeChildren

▸ **removeChildren**(`beginIndex?`, `endIndex?`): `DisplayObject`[]

Removes all children from this container that are within the begin and end indexes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `beginIndex?` | `number` | The beginning position. |
| `endIndex?` | `number` | The ending position. Default value is size of the container. |

#### Returns

`DisplayObject`[]

List of removed children

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeChildren](DDiagramCanvasBase.md#removechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8423

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeListener](DDiagramCanvasBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25513

▸ **removeListener**(`event`, `fn?`, `context?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[removeListener](DDiagramCanvasBase.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25515

___

### render

▸ **render**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Overrides

[DDiagramCanvasBase](DDiagramCanvasBase.md).[render](DDiagramCanvasBase.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L126)

___

### renderAdvanced

▸ **renderAdvanced**(`renderer`): `void`

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

node_modules/pixi.js/pixi.js.d.ts:8465

___

### resize

▸ **resize**(`width?`, `height?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[resize](DDiagramCanvasBase.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1165)

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

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L74)

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

node_modules/pixi.js/pixi.js.d.ts:8394

___

### setFocused

▸ **setFocused**(`isFocused`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setFocused](DDiagramCanvasBase.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1592)

___

### setHeight

▸ **setHeight**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setHeight](DDiagramCanvasBase.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1402)

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

node_modules/pixi.js/pixi.js.d.ts:8775

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): `DisplayObject`

Convenience function to set the position, scale, skew and pivot at once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The X position |
| `y?` | `number` | The Y position |
| `scaleX?` | `number` | The X scale value |
| `scaleY?` | `number` | The Y scale value |
| `rotation?` | `number` | The rotation |
| `skewX?` | `number` | The X skew value |
| `skewY?` | `number` | The Y skew value |
| `pivotX?` | `number` | The X pivot value |
| `pivotY?` | `number` | The Y pivot value |

#### Returns

`DisplayObject`

The DisplayObject instance

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setTransform](DDiagramCanvasBase.md#settransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8790

___

### setWidth

▸ **setWidth**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setWidth](DDiagramCanvasBase.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

___

### setX

▸ **setX**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setX](DDiagramCanvasBase.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1268)

___

### setY

▸ **setY**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[setY](DDiagramCanvasBase.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1308)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[show](DDiagramCanvasBase.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1507](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1507)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[sortChildren](DDiagramCanvasBase.md#sortchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8427

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

node_modules/pixi.js/pixi.js.d.ts:8380

___

### toBackgroundBase

▸ **toBackgroundBase**(`theme`, `options?`): ``null`` \| `number`

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

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L94)

___

### toCursor

▸ **toCursor**(`cursor`, `state`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\> |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`string`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toCursor](DDiagramCanvasBase.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toDirty](DDiagramCanvasBase.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1534](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1534)

___

### toGlobal

▸ **toGlobal**(`position`, `point?`, `skipUpdate?`): `Point`

Calculates the global position of the display object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPointData` | The world origin to calculate from. |
| `point?` | `Point` | A Point object in which to store the value, optional (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform. |

#### Returns

`Point`

A point object representing the position of this object.

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toGlobal](DDiagramCanvasBase.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toHasDirty](DDiagramCanvasBase.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1543](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1543)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toHierarchyDirty](DDiagramCanvasBase.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1559)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `Point`

Calculates the local position of the display object relative to another point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPointData` | The world origin to calculate from. |
| `from?` | `DisplayObject` | The DisplayObject to calculate the global position from. |
| `point?` | `Point` | A Point object in which to store the value, optional (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform |

#### Returns

`Point`

A point object representing the position of this object

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toLocal](DDiagramCanvasBase.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8768

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toParentHasDirty](DDiagramCanvasBase.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1552)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toParentHierarchyDirty](DDiagramCanvasBase.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[toParentResized](DDiagramCanvasBase.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1880](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1880)

___

### toSnap

▸ **toSnap**(`theme`, `options?`): ``null`` \| [`DDiagramCanvasEditorSnap`](DDiagramCanvasEditorSnap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | [`DDiagramCanvasEditorSnapOptions`](../interfaces/DDiagramCanvasEditorSnapOptions.md) |

#### Returns

``null`` \| [`DDiagramCanvasEditorSnap`](DDiagramCanvasEditorSnap.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor.ts#L52)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramCanvasBase](DDiagramCanvasBase.md).[updateTransform](DDiagramCanvasBase.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2069](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2069)

___

### mixin

▸ **mixin**(`source`): `void`

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

node_modules/pixi.js/pixi.js.d.ts:9230
