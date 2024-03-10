[Winter Cardinal UI - v0.414.0](../index.md) / DDiagramEditor

# Class: DDiagramEditor\<THEME, OPTIONS\>

A canvas container.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDiagramEditor`](../interfaces/DThemeDiagramEditor.md) = [`DThemeDiagramEditor`](../interfaces/DThemeDiagramEditor.md) |
| `OPTIONS` | extends [`DDiagramEditorOptions`](../interfaces/DDiagramEditorOptions.md)\<`THEME`\> = [`DDiagramEditorOptions`](../interfaces/DDiagramEditorOptions.md)\<`THEME`\> |

## Hierarchy

- [`DDiagramBase`](DDiagramBase.md)\<[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md), [`DDiagramEditorController`](../interfaces/DDiagramEditorController.md), `THEME`, `OPTIONS`\>

  ↳ **`DDiagramEditor`**

## Implements

- [`DControllerDocument`](../interfaces/DControllerDocument.md)\<[`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)\>

## Table of contents

### Constructors

- [constructor](DDiagramEditor.md#constructor)

### Properties

- [\_accessibleActive](DDiagramEditor.md#_accessibleactive)
- [\_accessibleDiv](DDiagramEditor.md#_accessiblediv)
- [\_auto](DDiagramEditor.md#_auto)
- [\_background](DDiagramEditor.md#_background)
- [\_border](DDiagramEditor.md#_border)
- [\_bounds](DDiagramEditor.md#_bounds)
- [\_boundsID](DDiagramEditor.md#_boundsid)
- [\_boundsRect](DDiagramEditor.md#_boundsrect)
- [\_canvas](DDiagramEditor.md#_canvas)
- [\_clearType](DDiagramEditor.md#_cleartype)
- [\_controller](DDiagramEditor.md#_controller)
- [\_corner](DDiagramEditor.md#_corner)
- [\_cursor](DDiagramEditor.md#_cursor)
- [\_destroyed](DDiagramEditor.md#_destroyed)
- [\_enabledFilters](DDiagramEditor.md#_enabledfilters)
- [\_isAmbient](DDiagramEditor.md#_isambient)
- [\_isChanged](DDiagramEditor.md#_ischanged)
- [\_lastDownPoint](DDiagramEditor.md#_lastdownpoint)
- [\_lastSortedIndex](DDiagramEditor.md#_lastsortedindex)
- [\_localBounds](DDiagramEditor.md#_localbounds)
- [\_localBoundsRect](DDiagramEditor.md#_localboundsrect)
- [\_mask](DDiagramEditor.md#_mask)
- [\_mode](DDiagramEditor.md#_mode)
- [\_options](DDiagramEditor.md#_options)
- [\_outline](DDiagramEditor.md#_outline)
- [\_overflowMask](DDiagramEditor.md#_overflowmask)
- [\_padding](DDiagramEditor.md#_padding)
- [\_reflowable](DDiagramEditor.md#_reflowable)
- [\_serialized](DDiagramEditor.md#_serialized)
- [\_shortcuts](DDiagramEditor.md#_shortcuts)
- [\_snapper](DDiagramEditor.md#_snapper)
- [\_snapshot](DDiagramEditor.md#_snapshot)
- [\_snippet](DDiagramEditor.md#_snippet)
- [\_tempDisplayObjectParent](DDiagramEditor.md#_tempdisplayobjectparent)
- [\_thumbnail](DDiagramEditor.md#_thumbnail)
- [\_tileFactory](DDiagramEditor.md#_tilefactory)
- [\_title](DDiagramEditor.md#_title)
- [\_view](DDiagramEditor.md#_view)
- [\_zIndex](DDiagramEditor.md#_zindex)
- [accessible](DDiagramEditor.md#accessible)
- [accessibleChildren](DDiagramEditor.md#accessiblechildren)
- [accessibleHint](DDiagramEditor.md#accessiblehint)
- [accessiblePointerEvents](DDiagramEditor.md#accessiblepointerevents)
- [accessibleTitle](DDiagramEditor.md#accessibletitle)
- [accessibleType](DDiagramEditor.md#accessibletype)
- [alpha](DDiagramEditor.md#alpha)
- [angle](DDiagramEditor.md#angle)
- [buttonMode](DDiagramEditor.md#buttonmode)
- [cacheAsBitmap](DDiagramEditor.md#cacheasbitmap)
- [children](DDiagramEditor.md#children)
- [cursor](DDiagramEditor.md#cursor)
- [filterArea](DDiagramEditor.md#filterarea)
- [filters](DDiagramEditor.md#filters)
- [hitArea](DDiagramEditor.md#hitarea)
- [interactive](DDiagramEditor.md#interactive)
- [interactiveChildren](DDiagramEditor.md#interactivechildren)
- [isMask](DDiagramEditor.md#ismask)
- [isSprite](DDiagramEditor.md#issprite)
- [localTransform](DDiagramEditor.md#localtransform)
- [mask](DDiagramEditor.md#mask)
- [name](DDiagramEditor.md#name)
- [parent](DDiagramEditor.md#parent)
- [pivot](DDiagramEditor.md#pivot)
- [renderable](DDiagramEditor.md#renderable)
- [rotation](DDiagramEditor.md#rotation)
- [sortDirty](DDiagramEditor.md#sortdirty)
- [sortableChildren](DDiagramEditor.md#sortablechildren)
- [transform](DDiagramEditor.md#transform)
- [visible](DDiagramEditor.md#visible)
- [worldAlpha](DDiagramEditor.md#worldalpha)
- [worldTransform](DDiagramEditor.md#worldtransform)
- [worldVisible](DDiagramEditor.md#worldvisible)
- [zIndex](DDiagramEditor.md#zindex)
- [WORK\_CONTAINS\_POINT](DDiagramEditor.md#work_contains_point)

### Accessors

- [background](DDiagramEditor.md#background)
- [border](DDiagramEditor.md#border)
- [canvas](DDiagramEditor.md#canvas)
- [controller](DDiagramEditor.md#controller)
- [corner](DDiagramEditor.md#corner)
- [height](DDiagramEditor.md#height)
- [layer](DDiagramEditor.md#layer)
- [options](DDiagramEditor.md#options)
- [outline](DDiagramEditor.md#outline)
- [padding](DDiagramEditor.md#padding)
- [position](DDiagramEditor.md#position)
- [reflowable](DDiagramEditor.md#reflowable)
- [scale](DDiagramEditor.md#scale)
- [shadow](DDiagramEditor.md#shadow)
- [skew](DDiagramEditor.md#skew)
- [snapper](DDiagramEditor.md#snapper)
- [snapshot](DDiagramEditor.md#snapshot)
- [snippet](DDiagramEditor.md#snippet)
- [state](DDiagramEditor.md#state)
- [theme](DDiagramEditor.md#theme)
- [thumbnail](DDiagramEditor.md#thumbnail)
- [title](DDiagramEditor.md#title)
- [type](DDiagramEditor.md#type)
- [unsafe](DDiagramEditor.md#unsafe)
- [view](DDiagramEditor.md#view)
- [weight](DDiagramEditor.md#weight)
- [width](DDiagramEditor.md#width)
- [x](DDiagramEditor.md#x)
- [y](DDiagramEditor.md#y)

### Methods

- [\_calculateBounds](DDiagramEditor.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DDiagramEditor.md#_recursivepostupdatetransform)
- [\_render](DDiagramEditor.md#_render)
- [addChild](DDiagramEditor.md#addchild)
- [addChildAt](DDiagramEditor.md#addchildat)
- [addListener](DDiagramEditor.md#addlistener)
- [applyTitle](DDiagramEditor.md#applytitle)
- [blur](DDiagramEditor.md#blur)
- [calculateBounds](DDiagramEditor.md#calculatebounds)
- [close](DDiagramEditor.md#close)
- [containerUpdateTransform](DDiagramEditor.md#containerupdatetransform)
- [containsGlobalPoint](DDiagramEditor.md#containsglobalpoint)
- [containsLocalPoint](DDiagramEditor.md#containslocalpoint)
- [containsPoint](DDiagramEditor.md#containspoint)
- [create](DDiagramEditor.md#create)
- [delete](DDiagramEditor.md#delete)
- [destroy](DDiagramEditor.md#destroy)
- [disableTempParent](DDiagramEditor.md#disabletempparent)
- [displayObjectUpdateTransform](DDiagramEditor.md#displayobjectupdatetransform)
- [emit](DDiagramEditor.md#emit)
- [enableTempParent](DDiagramEditor.md#enabletempparent)
- [eventNames](DDiagramEditor.md#eventnames)
- [focus](DDiagramEditor.md#focus)
- [focusOnClosest](DDiagramEditor.md#focusonclosest)
- [get](DDiagramEditor.md#get)
- [getBounds](DDiagramEditor.md#getbounds)
- [getChildAt](DDiagramEditor.md#getchildat)
- [getChildByName](DDiagramEditor.md#getchildbyname)
- [getChildIndex](DDiagramEditor.md#getchildindex)
- [getClearType](DDiagramEditor.md#getcleartype)
- [getClippingRect](DDiagramEditor.md#getclippingrect)
- [getGlobalPosition](DDiagramEditor.md#getglobalposition)
- [getHeight](DDiagramEditor.md#getheight)
- [getLocalBounds](DDiagramEditor.md#getlocalbounds)
- [getName](DDiagramEditor.md#getname)
- [getOverflowMask](DDiagramEditor.md#getoverflowmask)
- [getParentOfSize](DDiagramEditor.md#getparentofsize)
- [getThemeDefault](DDiagramEditor.md#getthemedefault)
- [getType](DDiagramEditor.md#gettype)
- [getWidth](DDiagramEditor.md#getwidth)
- [getX](DDiagramEditor.md#getx)
- [getY](DDiagramEditor.md#gety)
- [hasDirty](DDiagramEditor.md#hasdirty)
- [hasRefitableHeight](DDiagramEditor.md#hasrefitableheight)
- [hasRefitableWidth](DDiagramEditor.md#hasrefitablewidth)
- [hide](DDiagramEditor.md#hide)
- [init](DDiagramEditor.md#init)
- [initLayer](DDiagramEditor.md#initlayer)
- [initReflowable](DDiagramEditor.md#initreflowable)
- [isChanged](DDiagramEditor.md#ischanged)
- [isDirty](DDiagramEditor.md#isdirty)
- [isEventTarget](DDiagramEditor.md#iseventtarget)
- [isHidden](DDiagramEditor.md#ishidden)
- [isHierarchyDirty](DDiagramEditor.md#ishierarchydirty)
- [isNew](DDiagramEditor.md#isnew)
- [isRefitable](DDiagramEditor.md#isrefitable)
- [isShown](DDiagramEditor.md#isshown)
- [listenerCount](DDiagramEditor.md#listenercount)
- [listeners](DDiagramEditor.md#listeners)
- [newCanvas](DDiagramEditor.md#newcanvas)
- [newLayer](DDiagramEditor.md#newlayer)
- [newPadding](DDiagramEditor.md#newpadding)
- [off](DDiagramEditor.md#off)
- [on](DDiagramEditor.md#on)
- [onBlur](DDiagramEditor.md#onblur)
- [onChildBlur](DDiagramEditor.md#onchildblur)
- [onChildFocus](DDiagramEditor.md#onchildfocus)
- [onChildrenChange](DDiagramEditor.md#onchildrenchange)
- [onDblClick](DDiagramEditor.md#ondblclick)
- [onDown](DDiagramEditor.md#ondown)
- [onDownThis](DDiagramEditor.md#ondownthis)
- [onFocus](DDiagramEditor.md#onfocus)
- [onHierarchyDirty](DDiagramEditor.md#onhierarchydirty)
- [onKeyDown](DDiagramEditor.md#onkeydown)
- [onKeyUp](DDiagramEditor.md#onkeyup)
- [onMove](DDiagramEditor.md#onmove)
- [onOut](DDiagramEditor.md#onout)
- [onOver](DDiagramEditor.md#onover)
- [onParentMove](DDiagramEditor.md#onparentmove)
- [onParentResize](DDiagramEditor.md#onparentresize)
- [onRefit](DDiagramEditor.md#onrefit)
- [onReflow](DDiagramEditor.md#onreflow)
- [onResize](DDiagramEditor.md#onresize)
- [onScale](DDiagramEditor.md#onscale)
- [onSet](DDiagramEditor.md#onset)
- [onShortcut](DDiagramEditor.md#onshortcut)
- [onSkew](DDiagramEditor.md#onskew)
- [onStateChange](DDiagramEditor.md#onstatechange)
- [onUnset](DDiagramEditor.md#onunset)
- [onUp](DDiagramEditor.md#onup)
- [onUpThis](DDiagramEditor.md#onupthis)
- [onWheel](DDiagramEditor.md#onwheel)
- [once](DDiagramEditor.md#once)
- [open](DDiagramEditor.md#open)
- [reflow](DDiagramEditor.md#reflow)
- [removeAllListeners](DDiagramEditor.md#removealllisteners)
- [removeChild](DDiagramEditor.md#removechild)
- [removeChildAt](DDiagramEditor.md#removechildat)
- [removeChildren](DDiagramEditor.md#removechildren)
- [removeListener](DDiagramEditor.md#removelistener)
- [render](DDiagramEditor.md#render)
- [renderAdvanced](DDiagramEditor.md#renderadvanced)
- [resize](DDiagramEditor.md#resize)
- [save](DDiagramEditor.md#save)
- [saveAs](DDiagramEditor.md#saveas)
- [serialize](DDiagramEditor.md#serialize)
- [set](DDiagramEditor.md#set)
- [setChildIndex](DDiagramEditor.md#setchildindex)
- [setFocused](DDiagramEditor.md#setfocused)
- [setHeight](DDiagramEditor.md#setheight)
- [setParent](DDiagramEditor.md#setparent)
- [setTransform](DDiagramEditor.md#settransform)
- [setWidth](DDiagramEditor.md#setwidth)
- [setX](DDiagramEditor.md#setx)
- [setY](DDiagramEditor.md#sety)
- [show](DDiagramEditor.md#show)
- [sortChildren](DDiagramEditor.md#sortchildren)
- [swapChildren](DDiagramEditor.md#swapchildren)
- [toCanvasBaseBackgroundOptions](DDiagramEditor.md#tocanvasbasebackgroundoptions)
- [toCanvasBaseOptions](DDiagramEditor.md#tocanvasbaseoptions)
- [toCanvasOptions](DDiagramEditor.md#tocanvasoptions)
- [toCursor](DDiagramEditor.md#tocursor)
- [toDirty](DDiagramEditor.md#todirty)
- [toGlobal](DDiagramEditor.md#toglobal)
- [toHasDirty](DDiagramEditor.md#tohasdirty)
- [toHierarchyDirty](DDiagramEditor.md#tohierarchydirty)
- [toLocal](DDiagramEditor.md#tolocal)
- [toMode](DDiagramEditor.md#tomode)
- [toParentHasDirty](DDiagramEditor.md#toparenthasdirty)
- [toParentHierarchyDirty](DDiagramEditor.md#toparenthierarchydirty)
- [toParentResized](DDiagramEditor.md#toparentresized)
- [updateContentSize](DDiagramEditor.md#updatecontentsize)
- [updateTransform](DDiagramEditor.md#updatetransform)
- [mixin](DDiagramEditor.md#mixin)

## Constructors

### constructor

• **new DDiagramEditor**\<`THEME`, `OPTIONS`\>(`options?`): [`DDiagramEditor`](DDiagramEditor.md)\<`THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDiagramEditor`](../interfaces/DThemeDiagramEditor.md) = [`DThemeDiagramEditor`](../interfaces/DThemeDiagramEditor.md) |
| `OPTIONS` | extends [`DDiagramEditorOptions`](../interfaces/DDiagramEditorOptions.md)\<`THEME`, `any`\> = [`DDiagramEditorOptions`](../interfaces/DDiagramEditorOptions.md)\<`THEME`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`DDiagramEditor`](DDiagramEditor.md)\<`THEME`, `OPTIONS`\>

#### Overrides

[DDiagramBase](DDiagramBase.md).[constructor](DDiagramBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L172)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_accessibleActive](DDiagramBase.md#_accessibleactive)

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

[DDiagramBase](DDiagramBase.md).[_accessibleDiv](DDiagramBase.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_auto](DDiagramBase.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_background](DDiagramBase.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_border](DDiagramBase.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_bounds](DDiagramBase.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8681

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_boundsID](DDiagramBase.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8694

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_boundsRect](DDiagramBase.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_canvas

• `Protected` **\_canvas**: ``null`` \| [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_canvas](DDiagramBase.md#_canvas)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L79)

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_clearType](DDiagramBase.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_controller

• `Protected` `Optional` **\_controller**: [`DDiagramEditorController`](../interfaces/DDiagramEditorController.md)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_controller](DDiagramBase.md#_controller)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L103)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_corner](DDiagramBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_cursor](DDiagramBase.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_destroyed](DDiagramBase.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_enabledFilters](DDiagramBase.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_isAmbient

• `Protected` **\_isAmbient**: `boolean`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_isAmbient](DDiagramBase.md#_isambient)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L104)

___

### \_isChanged

• `Protected` **\_isChanged**: `boolean` = `false`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L168)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_lastDownPoint](DDiagramBase.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L795)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_lastSortedIndex](DDiagramBase.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8644

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_localBounds](DDiagramBase.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8687

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_localBoundsRect](DDiagramBase.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_mask](DDiagramBase.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_mode

• `Protected` **\_mode**: [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_mode](DDiagramBase.md#_mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L106)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_options](DDiagramBase.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_outline](DDiagramBase.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_overflowMask](DDiagramBase.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L80)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_padding](DDiagramBase.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_reflowable](DDiagramBase.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_serialized

• `Protected` **\_serialized**: ``null`` \| [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_serialized](DDiagramBase.md#_serialized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L101)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_shortcuts](DDiagramBase.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snapper

• `Protected` **\_snapper**: [`ESnapper`](ESnapper.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L169)

___

### \_snapshot

• `Protected` **\_snapshot**: [`DDiagramSnapshot`](DDiagramSnapshot.md)\<[`DDiagramSnapshotCanvas`](../interfaces/DDiagramSnapshotCanvas.md)\>

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_snapshot](DDiagramBase.md#_snapshot)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L105)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_snippet](DDiagramBase.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_tempDisplayObjectParent](DDiagramBase.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_thumbnail

• `Protected` **\_thumbnail**: [`DDiagramEditorThumbnail`](DDiagramEditorThumbnail.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L170)

___

### \_tileFactory

• `Protected` `Optional` **\_tileFactory**: [`DDiagramCanvasTilePyramidFactory`](../index.md#ddiagramcanvastilepyramidfactory)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_tileFactory](DDiagramBase.md#_tilefactory)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L102)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_title](DDiagramBase.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L787)

___

### \_view

• `Protected` **\_view**: [`DViewImpl`](DViewImpl.md)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_view](DDiagramBase.md#_view)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L81)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_zIndex](DDiagramBase.md#_zindex)

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

[DDiagramBase](DDiagramBase.md).[accessible](DDiagramBase.md#accessible)

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

[DDiagramBase](DDiagramBase.md).[accessibleChildren](DDiagramBase.md#accessiblechildren)

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

[DDiagramBase](DDiagramBase.md).[accessibleHint](DDiagramBase.md#accessiblehint)

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

[DDiagramBase](DDiagramBase.md).[accessiblePointerEvents](DDiagramBase.md#accessiblepointerevents)

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

[DDiagramBase](DDiagramBase.md).[accessibleTitle](DDiagramBase.md#accessibletitle)

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

[DDiagramBase](DDiagramBase.md).[accessibleType](DDiagramBase.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8574

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DDiagramBase](DDiagramBase.md).[alpha](DDiagramBase.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8605

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DDiagramBase](DDiagramBase.md).[angle](DDiagramBase.md#angle)

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

[DDiagramBase](DDiagramBase.md).[buttonMode](DDiagramBase.md#buttonmode)

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

[DDiagramBase](DDiagramBase.md).[cacheAsBitmap](DDiagramBase.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8991

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DDiagramBase](DDiagramBase.md).[children](DDiagramBase.md#children)

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

[DDiagramBase](DDiagramBase.md).[cursor](DDiagramBase.md#cursor)

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

[DDiagramBase](DDiagramBase.md).[filterArea](DDiagramBase.md#filterarea)

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

[DDiagramBase](DDiagramBase.md).[filters](DDiagramBase.md#filters)

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

[DDiagramBase](DDiagramBase.md).[hitArea](DDiagramBase.md#hitarea)

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

[DDiagramBase](DDiagramBase.md).[interactive](DDiagramBase.md#interactive)

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

[DDiagramBase](DDiagramBase.md).[interactiveChildren](DDiagramBase.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8518

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DDiagramBase](DDiagramBase.md).[isMask](DDiagramBase.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8732

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DDiagramBase](DDiagramBase.md).[isSprite](DDiagramBase.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8727

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DDiagramBase](DDiagramBase.md).[localTransform](DDiagramBase.md#localtransform)

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

[DDiagramBase](DDiagramBase.md).[mask](DDiagramBase.md#mask)

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

[DDiagramBase](DDiagramBase.md).[name](DDiagramBase.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8998

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DDiagramBase](DDiagramBase.md).[parent](DDiagramBase.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8629

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DDiagramBase](DDiagramBase.md).[pivot](DDiagramBase.md#pivot)

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

[DDiagramBase](DDiagramBase.md).[renderable](DDiagramBase.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8623

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DDiagramBase](DDiagramBase.md).[rotation](DDiagramBase.md#rotation)

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

[DDiagramBase](DDiagramBase.md).[sortDirty](DDiagramBase.md#sortdirty)

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

[DDiagramBase](DDiagramBase.md).[sortableChildren](DDiagramBase.md#sortablechildren)

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

[DDiagramBase](DDiagramBase.md).[transform](DDiagramBase.md#transform)

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

[DDiagramBase](DDiagramBase.md).[visible](DDiagramBase.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DDiagramBase](DDiagramBase.md).[worldAlpha](DDiagramBase.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DDiagramBase](DDiagramBase.md).[worldTransform](DDiagramBase.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8833

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DDiagramBase](DDiagramBase.md).[worldVisible](DDiagramBase.md#worldvisible)

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

[DDiagramBase](DDiagramBase.md).[zIndex](DDiagramBase.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[WORK_CONTAINS_POINT](DDiagramBase.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DDiagramBase.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DDiagramBase.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### canvas

• `get` **canvas**(): ``null`` \| `CANVAS`

#### Returns

``null`` \| `CANVAS`

#### Inherited from

DDiagramBase.canvas

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L112)

• `set` **canvas**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | ``null`` \| `CANVAS` |

#### Returns

`void`

#### Inherited from

DDiagramBase.canvas

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L116)

___

### controller

• `get` **controller**(): ``null`` \| `CONTROLLER`

#### Returns

``null`` \| `CONTROLLER`

#### Inherited from

DDiagramBase.controller

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L122)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DDiagramBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1390)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DDiagramBase.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1394)

___

### layer

• `get` **layer**(): ``null`` \| [`DDiagramLayer`](DDiagramLayer.md)

#### Returns

``null`` \| [`DDiagramLayer`](DDiagramLayer.md)

#### Inherited from

DDiagramBase.layer

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:257](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L257)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DDiagramBase.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DDiagramBase.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DDiagramBase.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDiagramBase.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1449](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1449)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DDiagramBase.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDiagramBase.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DDiagramBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1853](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1853)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DDiagramBase.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1857](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1857)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DDiagramBase.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### snapper

• `get` **snapper**(): [`ESnapper`](ESnapper.md)

#### Returns

[`ESnapper`](ESnapper.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L193)

___

### snapshot

• `get` **snapshot**(): [`DDiagramSnapshot`](DDiagramSnapshot.md)\<[`DDiagramSnapshotCanvas`](../interfaces/DDiagramSnapshotCanvas.md)\>

#### Returns

[`DDiagramSnapshot`](DDiagramSnapshot.md)\<[`DDiagramSnapshotCanvas`](../interfaces/DDiagramSnapshotCanvas.md)\>

#### Inherited from

DDiagramBase.snapshot

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L118)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DDiagramBase.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DDiagramBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DDiagramBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1694](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1694)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DDiagramBase.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1698)

___

### thumbnail

• `get` **thumbnail**(): [`DDiagramEditorThumbnail`](DDiagramEditorThumbnail.md)

#### Returns

[`DDiagramEditorThumbnail`](DDiagramEditorThumbnail.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L189)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DDiagramBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1487)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DDiagramBase.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1491)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DDiagramBase.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DDiagramBase.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### view

• `get` **view**(): [`DView`](../interfaces/DView.md)

#### Returns

[`DView`](../interfaces/DView.md)

#### Inherited from

DDiagramBase.view

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L158)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramBase.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

• `set` **weight**(`weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `weight` | `number` |

#### Returns

`void`

#### Inherited from

DDiagramBase.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DDiagramBase.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1251)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DDiagramBase.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1255)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DDiagramBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1291)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DDiagramBase.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1295)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_calculateBounds](DDiagramBase.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2084](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2084)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[_recursivePostUpdateTransform](DDiagramBase.md#_recursivepostupdatetransform)

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

[DDiagramBase](DDiagramBase.md).[_render](DDiagramBase.md#_render)

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

[DDiagramBase](DDiagramBase.md).[addChild](DDiagramBase.md#addchild)

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

[DDiagramBase](DDiagramBase.md).[addChildAt](DDiagramBase.md#addchildat)

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

[DDiagramBase](DDiagramBase.md).[addListener](DDiagramBase.md#addlistener)

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

[DDiagramBase](DDiagramBase.md).[addListener](DDiagramBase.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[applyTitle](DDiagramBase.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1500)

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

[DDiagramBase](DDiagramBase.md).[blur](DDiagramBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1606)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[calculateBounds](DDiagramBase.md#calculatebounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8436

___

### close

▸ **close**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L400)

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

[DDiagramBase](DDiagramBase.md).[containerUpdateTransform](DDiagramBase.md#containerupdatetransform)

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

[DDiagramBase](DDiagramBase.md).[containsGlobalPoint](DDiagramBase.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2098](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2098)

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

[DDiagramBase](DDiagramBase.md).[containsLocalPoint](DDiagramBase.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2102)

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

[DDiagramBase](DDiagramBase.md).[containsPoint](DDiagramBase.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2089](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2089)

___

### create

▸ **create**(`options`): `Promise`\<[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DDiagramEditorCreateOptions`](../interfaces/DDiagramEditorCreateOptions.md) |

#### Returns

`Promise`\<[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L331)

___

### delete

▸ **delete**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Implementation of

[DControllerDocument](../interfaces/DControllerDocument.md).[delete](../interfaces/DControllerDocument.md#delete)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:304](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L304)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[destroy](DDiagramBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L189)

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

[DDiagramBase](DDiagramBase.md).[disableTempParent](DDiagramBase.md#disabletempparent)

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

[DDiagramBase](DDiagramBase.md).[displayObjectUpdateTransform](DDiagramBase.md#displayobjectupdatetransform)

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

[DDiagramBase](DDiagramBase.md).[emit](DDiagramBase.md#emit)

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

[DDiagramBase](DDiagramBase.md).[enableTempParent](DDiagramBase.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DDiagramBase](DDiagramBase.md).[eventNames](DDiagramBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[focus](DDiagramBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1602)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[focusOnClosest](DDiagramBase.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2019](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2019)

___

### get

▸ **get**(): ``null`` \| [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Returns

``null`` \| [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Implementation of

[DControllerDocument](../interfaces/DControllerDocument.md).[get](../interfaces/DControllerDocument.md#get)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[get](DDiagramBase.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L253)

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

[DDiagramBase](DDiagramBase.md).[getBounds](DDiagramBase.md#getbounds)

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

[DDiagramBase](DDiagramBase.md).[getChildAt](DDiagramBase.md#getchildat)

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

[DDiagramBase](DDiagramBase.md).[getChildByName](DDiagramBase.md#getchildbyname)

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

[DDiagramBase](DDiagramBase.md).[getChildIndex](DDiagramBase.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8387

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[getClearType](DDiagramBase.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

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

[DDiagramBase](DDiagramBase.md).[getClippingRect](DDiagramBase.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2115)

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

[DDiagramBase](DDiagramBase.md).[getGlobalPosition](DDiagramBase.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[getHeight](DDiagramBase.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`, `skipChildrenUpdate?`): `Rectangle`

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rect?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |
| `skipChildrenUpdate?` | `boolean` | Setting to `true` will stop re-calculation of children transforms, it was default behaviour of pixi 4.0-5.2 and caused many problems to users. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

[DDiagramBase](DDiagramBase.md).[getLocalBounds](DDiagramBase.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getName

▸ **getName**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Implementation of

[DControllerDocument](../interfaces/DControllerDocument.md).[getName](../interfaces/DControllerDocument.md#getname)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:416](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L416)

___

### getOverflowMask

▸ **getOverflowMask**(): [`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Returns

[`DBaseOverflowMask`](DBaseOverflowMask.md)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[getOverflowMask](DDiagramBase.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L135)

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DDiagramBase](DDiagramBase.md).[getParentOfSize](DDiagramBase.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[getThemeDefault](DDiagramBase.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2075](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2075)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DDiagramBase](DDiagramBase.md).[getType](DDiagramBase.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:424](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L424)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[getWidth](DDiagramBase.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[getX](DDiagramBase.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1259)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[getY](DDiagramBase.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1299)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[hasDirty](DDiagramBase.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

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

[DDiagramBase](DDiagramBase.md).[hasRefitableHeight](DDiagramBase.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1831](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1831)

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

[DDiagramBase](DDiagramBase.md).[hasRefitableWidth](DDiagramBase.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[hide](DDiagramBase.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1520)

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

[DDiagramBase](DDiagramBase.md).[init](DDiagramBase.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L83)

___

### initLayer

▸ **initLayer**(`canvas`, `shapes`, `mapper?`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\> |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `mapper?` | ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper) |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>

#### Inherited from

[DDiagramBase](DDiagramBase.md).[initLayer](DDiagramBase.md#initlayer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L195)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[initReflowable](DDiagramBase.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### isChanged

▸ **isChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DControllerDocument](../interfaces/DControllerDocument.md).[isChanged](../interfaces/DControllerDocument.md#ischanged)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L404)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[isDirty](DDiagramBase.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

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

[DDiagramBase](DDiagramBase.md).[isEventTarget](DDiagramBase.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1965](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1965)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[isHidden](DDiagramBase.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1530)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[isHierarchyDirty](DDiagramBase.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1576)

___

### isNew

▸ **isNew**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DControllerDocument](../interfaces/DControllerDocument.md).[isNew](../interfaces/DControllerDocument.md#isnew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:408](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L408)

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

[DDiagramBase](DDiagramBase.md).[isRefitable](DDiagramBase.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1821](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1821)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[isShown](DDiagramBase.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1516)

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

[DDiagramBase](DDiagramBase.md).[listenerCount](DDiagramBase.md#listenercount)

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

[DDiagramBase](DDiagramBase.md).[listeners](DDiagramBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newCanvas

▸ **newCanvas**(`serialized`): [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |

#### Returns

[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>

#### Overrides

[DDiagramBase](DDiagramBase.md).[newCanvas](DDiagramBase.md#newcanvas)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L204)

___

### newLayer

▸ **newLayer**(`serialized`, `canvas`, `mode`, `pieces?`, `pieceData?`): `Promise`\<[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |
| `canvas` | [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\> |
| `mode` | [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode) |
| `pieces?` | `string`[] |
| `pieceData?` | `Map`\<`string`, ``null`` \| [`EShapeEmbeddedDatum`](EShapeEmbeddedDatum.md)\> |

#### Returns

`Promise`\<[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>\>

#### Inherited from

[DDiagramBase](DDiagramBase.md).[newLayer](DDiagramBase.md#newlayer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L168)

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

[DDiagramBase](DDiagramBase.md).[newPadding](DDiagramBase.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

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

[DDiagramBase](DDiagramBase.md).[off](DDiagramBase.md#off)

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

[DDiagramBase](DDiagramBase.md).[on](DDiagramBase.md#on)

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

[DDiagramBase](DDiagramBase.md).[on](DDiagramBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[onBlur](DDiagramBase.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1679](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1679)

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

[DDiagramBase](DDiagramBase.md).[onChildBlur](DDiagramBase.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

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

[DDiagramBase](DDiagramBase.md).[onChildFocus](DDiagramBase.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[onChildrenChange](DDiagramBase.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1128)

___

### onDblClick

▸ **onDblClick**(`e`, `interactionManager`, `skipView?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |
| `skipView?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[onDblClick](DDiagramBase.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L168)

___

### onDown

▸ **onDown**(`e`, `skipView?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |
| `skipView?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[onDown](DDiagramBase.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L182)

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

[DDiagramBase](DDiagramBase.md).[onDownThis](DDiagramBase.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1986](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1986)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[onFocus](DDiagramBase.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1665)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[onHierarchyDirty](DDiagramBase.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1580)

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

[DDiagramBase](DDiagramBase.md).[onKeyDown](DDiagramBase.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1954](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1954)

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

[DDiagramBase](DDiagramBase.md).[onKeyUp](DDiagramBase.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1959](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1959)

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

[DDiagramBase](DDiagramBase.md).[onMove](DDiagramBase.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

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

[DDiagramBase](DDiagramBase.md).[onOut](DDiagramBase.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2042](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2042)

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

[DDiagramBase](DDiagramBase.md).[onOver](DDiagramBase.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2028](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2028)

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

[DDiagramBase](DDiagramBase.md).[onParentMove](DDiagramBase.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1943](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1943)

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

[DDiagramBase](DDiagramBase.md).[onParentResize](DDiagramBase.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[onRefit](DDiagramBase.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1739)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[onReflow](DDiagramBase.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1849)

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

[DDiagramBase](DDiagramBase.md).[onResize](DDiagramBase.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L107)

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

#### Inherited from

[DDiagramBase](DDiagramBase.md).[onScale](DDiagramBase.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1236)

___

### onSet

▸ **onSet**(`serialized`, `canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |
| `canvas` | [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\> |

#### Returns

`void`

#### Overrides

[DDiagramBase](DDiagramBase.md).[onSet](DDiagramBase.md#onset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L351)

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

[DDiagramBase](DDiagramBase.md).[onShortcut](DDiagramBase.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1133)

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

[DDiagramBase](DDiagramBase.md).[onSkew](DDiagramBase.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1241)

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

[DDiagramBase](DDiagramBase.md).[onStateChange](DDiagramBase.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1629](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1629)

___

### onUnset

▸ **onUnset**(): `void`

#### Returns

`void`

#### Overrides

[DDiagramBase](DDiagramBase.md).[onUnset](DDiagramBase.md#onunset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L374)

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

[DDiagramBase](DDiagramBase.md).[onUp](DDiagramBase.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1996](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1996)

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

[DDiagramBase](DDiagramBase.md).[onUpThis](DDiagramBase.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2003](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2003)

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

[DDiagramBase](DDiagramBase.md).[onWheel](DDiagramBase.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L162)

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

[DDiagramBase](DDiagramBase.md).[once](DDiagramBase.md#once)

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

[DDiagramBase](DDiagramBase.md).[once](DDiagramBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### open

▸ **open**(`id`): `Promise`\<[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`\<[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:380](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L380)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[reflow](DDiagramBase.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1712)

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

[DDiagramBase](DDiagramBase.md).[removeAllListeners](DDiagramBase.md#removealllisteners)

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

[DDiagramBase](DDiagramBase.md).[removeAllListeners](DDiagramBase.md#removealllisteners)

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

[DDiagramBase](DDiagramBase.md).[removeChild](DDiagramBase.md#removechild)

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

[DDiagramBase](DDiagramBase.md).[removeChildAt](DDiagramBase.md#removechildat)

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

[DDiagramBase](DDiagramBase.md).[removeChildren](DDiagramBase.md#removechildren)

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

[DDiagramBase](DDiagramBase.md).[removeListener](DDiagramBase.md#removelistener)

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

[DDiagramBase](DDiagramBase.md).[removeListener](DDiagramBase.md#removelistener)

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

#### Inherited from

[DDiagramBase](DDiagramBase.md).[render](DDiagramBase.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2060](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2060)

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

[DDiagramBase](DDiagramBase.md).[renderAdvanced](DDiagramBase.md#renderadvanced)

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

[DDiagramBase](DDiagramBase.md).[resize](DDiagramBase.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1165)

___

### save

▸ **save**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

#### Implementation of

[DControllerDocument](../interfaces/DControllerDocument.md).[save](../interfaces/DControllerDocument.md#save)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L242)

___

### saveAs

▸ **saveAs**(`name`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<`unknown`\>

#### Implementation of

[DControllerDocument](../interfaces/DControllerDocument.md).[saveAs](../interfaces/DControllerDocument.md#saveas)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:270](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L270)

___

### serialize

▸ **serialize**(): ``null`` \| [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Returns

``null`` \| [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L225)

___

### set

▸ **set**(`serialized`): `Promise`\<``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | ``null`` |

#### Returns

`Promise`\<``null``\>

#### Inherited from

[DDiagramBase](DDiagramBase.md).[set](DDiagramBase.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L126)

▸ **set**(`serialized`): `Promise`\<[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |

#### Returns

`Promise`\<[`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>\>

#### Inherited from

[DDiagramBase](DDiagramBase.md).[set](DDiagramBase.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L127)

▸ **set**(`serialized`): `Promise`\<``null`` \| [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | ``null`` \| [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |

#### Returns

`Promise`\<``null`` \| [`DDiagramCanvasEditor`](DDiagramCanvasEditor.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md), [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>\>\>

#### Inherited from

[DDiagramBase](DDiagramBase.md).[set](DDiagramBase.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L128)

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

[DDiagramBase](DDiagramBase.md).[setChildIndex](DDiagramBase.md#setchildindex)

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

[DDiagramBase](DDiagramBase.md).[setFocused](DDiagramBase.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1592)

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

[DDiagramBase](DDiagramBase.md).[setHeight](DDiagramBase.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1402)

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

[DDiagramBase](DDiagramBase.md).[setParent](DDiagramBase.md#setparent)

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

[DDiagramBase](DDiagramBase.md).[setTransform](DDiagramBase.md#settransform)

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

[DDiagramBase](DDiagramBase.md).[setWidth](DDiagramBase.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

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

[DDiagramBase](DDiagramBase.md).[setX](DDiagramBase.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1268)

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

[DDiagramBase](DDiagramBase.md).[setY](DDiagramBase.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1308)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[show](DDiagramBase.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1507](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1507)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[sortChildren](DDiagramBase.md#sortchildren)

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

[DDiagramBase](DDiagramBase.md).[swapChildren](DDiagramBase.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8380

___

### toCanvasBaseBackgroundOptions

▸ **toCanvasBaseBackgroundOptions**(`serialized`, `theme`, `isAmbient`): [`DDiagramCanvasBackgroundOptions`](../interfaces/DDiagramCanvasBackgroundOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |
| `theme` | `THEME` |
| `isAmbient` | `boolean` |

#### Returns

[`DDiagramCanvasBackgroundOptions`](../interfaces/DDiagramCanvasBackgroundOptions.md)

#### Inherited from

[DDiagramBase](DDiagramBase.md).[toCanvasBaseBackgroundOptions](DDiagramBase.md#tocanvasbasebackgroundoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L230)

___

### toCanvasBaseOptions

▸ **toCanvasBaseOptions**(`serialized`): [`DDiagramCanvasBaseOptions`](../interfaces/DDiagramCanvasBaseOptions.md)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |

#### Returns

[`DDiagramCanvasBaseOptions`](../interfaces/DDiagramCanvasBaseOptions.md)\<`any`\>

#### Inherited from

[DDiagramBase](DDiagramBase.md).[toCanvasBaseOptions](DDiagramBase.md#tocanvasbaseoptions)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L207)

___

### toCanvasOptions

▸ **toCanvasOptions**(`serialized`): [`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |

#### Returns

[`DDiagramCanvasEditorOptions`](../interfaces/DDiagramCanvasEditorOptions.md)\<[`DThemeDiagramCanvasEditor`](../interfaces/DThemeDiagramCanvasEditor.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L208)

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

[DDiagramBase](DDiagramBase.md).[toCursor](DDiagramBase.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[toDirty](DDiagramBase.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1534](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1534)

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

[DDiagramBase](DDiagramBase.md).[toGlobal](DDiagramBase.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[toHasDirty](DDiagramBase.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1543](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1543)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[toHierarchyDirty](DDiagramBase.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1559)

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

[DDiagramBase](DDiagramBase.md).[toLocal](DDiagramBase.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8768

___

### toMode

▸ **toMode**(`options?`): [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `OPTIONS` |

#### Returns

[`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode)

#### Overrides

[DDiagramBase](DDiagramBase.md).[toMode](DDiagramBase.md#tomode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L197)

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[toParentHasDirty](DDiagramBase.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1552)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[toParentHierarchyDirty](DDiagramBase.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[toParentResized](DDiagramBase.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1880](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L1880)

___

### updateContentSize

▸ **updateContentSize**(`newWidth`, `newHeight`, `oldWidth`, `oldHeight`): `void`

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

[DDiagramBase](DDiagramBase.md).[updateContentSize](DDiagramBase.md#updatecontentsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L144)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[DDiagramBase](DDiagramBase.md).[updateTransform](DDiagramBase.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2069](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L2069)

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

[DDiagramBase](DDiagramBase.md).[mixin](DDiagramBase.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
