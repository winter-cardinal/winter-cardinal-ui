[Winter Cardinal UI - v0.457.0](../index.md) / DTableBodyCellLink

# Class: DTableBodyCellLink\<ROW, VALUE, THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `ROW` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellLink`](../interfaces/DThemeTableBodyCellLink.md)\<`VALUE`\> = [`DThemeTableBodyCellLink`](../interfaces/DThemeTableBodyCellLink.md)\<`VALUE`\> |
| `OPTIONS` | extends [`DTableBodyCellLinkOptions`](../interfaces/DTableBodyCellLinkOptions.md)\<`ROW`, `VALUE`, `THEME`\> = [`DTableBodyCellLinkOptions`](../interfaces/DTableBodyCellLinkOptions.md)\<`ROW`, `VALUE`, `THEME`\> |

## Hierarchy

- [`DTableBodyCellButton`](DTableBodyCellButton.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

  ↳ **`DTableBodyCellLink`**

## Table of contents

### Constructors

- [constructor](DTableBodyCellLink.md#constructor)

### Properties

- [\_accessibleActive](DTableBodyCellLink.md#_accessibleactive)
- [\_accessibleDiv](DTableBodyCellLink.md#_accessiblediv)
- [\_auto](DTableBodyCellLink.md#_auto)
- [\_background](DTableBodyCellLink.md#_background)
- [\_border](DTableBodyCellLink.md#_border)
- [\_bounds](DTableBodyCellLink.md#_bounds)
- [\_boundsID](DTableBodyCellLink.md#_boundsid)
- [\_boundsRect](DTableBodyCellLink.md#_boundsrect)
- [\_clearType](DTableBodyCellLink.md#_cleartype)
- [\_column](DTableBodyCellLink.md#_column)
- [\_columnIndex](DTableBodyCellLink.md#_columnindex)
- [\_corner](DTableBodyCellLink.md#_corner)
- [\_cursor](DTableBodyCellLink.md#_cursor)
- [\_destroyed](DTableBodyCellLink.md#_destroyed)
- [\_enabledFilters](DTableBodyCellLink.md#_enabledfilters)
- [\_forcibly](DTableBodyCellLink.md#_forcibly)
- [\_image](DTableBodyCellLink.md#_image)
- [\_lastDownPoint](DTableBodyCellLink.md#_lastdownpoint)
- [\_lastSortedIndex](DTableBodyCellLink.md#_lastsortedindex)
- [\_link](DTableBodyCellLink.md#_link)
- [\_localBounds](DTableBodyCellLink.md#_localbounds)
- [\_localBoundsRect](DTableBodyCellLink.md#_localboundsrect)
- [\_mask](DTableBodyCellLink.md#_mask)
- [\_onChange](DTableBodyCellLink.md#_onchange)
- [\_options](DTableBodyCellLink.md#_options)
- [\_outline](DTableBodyCellLink.md#_outline)
- [\_overflowMask](DTableBodyCellLink.md#_overflowmask)
- [\_padding](DTableBodyCellLink.md#_padding)
- [\_reflowable](DTableBodyCellLink.md#_reflowable)
- [\_row](DTableBodyCellLink.md#_row)
- [\_rowIndex](DTableBodyCellLink.md#_rowindex)
- [\_shortcuts](DTableBodyCellLink.md#_shortcuts)
- [\_snippet](DTableBodyCellLink.md#_snippet)
- [\_tempDisplayObjectParent](DTableBodyCellLink.md#_tempdisplayobjectparent)
- [\_text](DTableBodyCellLink.md#_text)
- [\_title](DTableBodyCellLink.md#_title)
- [\_when](DTableBodyCellLink.md#_when)
- [\_zIndex](DTableBodyCellLink.md#_zindex)
- [accessible](DTableBodyCellLink.md#accessible)
- [accessibleChildren](DTableBodyCellLink.md#accessiblechildren)
- [accessibleHint](DTableBodyCellLink.md#accessiblehint)
- [accessiblePointerEvents](DTableBodyCellLink.md#accessiblepointerevents)
- [accessibleTitle](DTableBodyCellLink.md#accessibletitle)
- [accessibleType](DTableBodyCellLink.md#accessibletype)
- [alpha](DTableBodyCellLink.md#alpha)
- [angle](DTableBodyCellLink.md#angle)
- [buttonMode](DTableBodyCellLink.md#buttonmode)
- [cacheAsBitmap](DTableBodyCellLink.md#cacheasbitmap)
- [children](DTableBodyCellLink.md#children)
- [cursor](DTableBodyCellLink.md#cursor)
- [filterArea](DTableBodyCellLink.md#filterarea)
- [filters](DTableBodyCellLink.md#filters)
- [hitArea](DTableBodyCellLink.md#hitarea)
- [interactive](DTableBodyCellLink.md#interactive)
- [interactiveChildren](DTableBodyCellLink.md#interactivechildren)
- [isMask](DTableBodyCellLink.md#ismask)
- [isSprite](DTableBodyCellLink.md#issprite)
- [localTransform](DTableBodyCellLink.md#localtransform)
- [mask](DTableBodyCellLink.md#mask)
- [name](DTableBodyCellLink.md#name)
- [parent](DTableBodyCellLink.md#parent)
- [pivot](DTableBodyCellLink.md#pivot)
- [renderable](DTableBodyCellLink.md#renderable)
- [rotation](DTableBodyCellLink.md#rotation)
- [sortDirty](DTableBodyCellLink.md#sortdirty)
- [sortableChildren](DTableBodyCellLink.md#sortablechildren)
- [transform](DTableBodyCellLink.md#transform)
- [visible](DTableBodyCellLink.md#visible)
- [worldAlpha](DTableBodyCellLink.md#worldalpha)
- [worldTransform](DTableBodyCellLink.md#worldtransform)
- [worldVisible](DTableBodyCellLink.md#worldvisible)
- [zIndex](DTableBodyCellLink.md#zindex)
- [LAYOUTER](DTableBodyCellLink.md#layouter)
- [WORK\_CONTAINS\_POINT](DTableBodyCellLink.md#work_contains_point)

### Accessors

- [background](DTableBodyCellLink.md#background)
- [border](DTableBodyCellLink.md#border)
- [column](DTableBodyCellLink.md#column)
- [columnIndex](DTableBodyCellLink.md#columnindex)
- [corner](DTableBodyCellLink.md#corner)
- [height](DTableBodyCellLink.md#height)
- [image](DTableBodyCellLink.md#image)
- [link](DTableBodyCellLink.md#link)
- [options](DTableBodyCellLink.md#options)
- [outline](DTableBodyCellLink.md#outline)
- [padding](DTableBodyCellLink.md#padding)
- [position](DTableBodyCellLink.md#position)
- [reflowable](DTableBodyCellLink.md#reflowable)
- [row](DTableBodyCellLink.md#row)
- [rowIndex](DTableBodyCellLink.md#rowindex)
- [scale](DTableBodyCellLink.md#scale)
- [shadow](DTableBodyCellLink.md#shadow)
- [skew](DTableBodyCellLink.md#skew)
- [snippet](DTableBodyCellLink.md#snippet)
- [state](DTableBodyCellLink.md#state)
- [text](DTableBodyCellLink.md#text)
- [theme](DTableBodyCellLink.md#theme)
- [title](DTableBodyCellLink.md#title)
- [type](DTableBodyCellLink.md#type)
- [unsafe](DTableBodyCellLink.md#unsafe)
- [weight](DTableBodyCellLink.md#weight)
- [width](DTableBodyCellLink.md#width)
- [x](DTableBodyCellLink.md#x)
- [y](DTableBodyCellLink.md#y)

### Methods

- [\_calculateBounds](DTableBodyCellLink.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DTableBodyCellLink.md#_recursivepostupdatetransform)
- [\_render](DTableBodyCellLink.md#_render)
- [activate](DTableBodyCellLink.md#activate)
- [addChild](DTableBodyCellLink.md#addchild)
- [addChildAt](DTableBodyCellLink.md#addchildat)
- [addListener](DTableBodyCellLink.md#addlistener)
- [applyTitle](DTableBodyCellLink.md#applytitle)
- [blur](DTableBodyCellLink.md#blur)
- [calculateBounds](DTableBodyCellLink.md#calculatebounds)
- [containerUpdateTransform](DTableBodyCellLink.md#containerupdatetransform)
- [containsGlobalPoint](DTableBodyCellLink.md#containsglobalpoint)
- [containsLocalPoint](DTableBodyCellLink.md#containslocalpoint)
- [containsPoint](DTableBodyCellLink.md#containspoint)
- [destroy](DTableBodyCellLink.md#destroy)
- [disableTempParent](DTableBodyCellLink.md#disabletempparent)
- [displayObjectUpdateTransform](DTableBodyCellLink.md#displayobjectupdatetransform)
- [emit](DTableBodyCellLink.md#emit)
- [enableTempParent](DTableBodyCellLink.md#enabletempparent)
- [eventNames](DTableBodyCellLink.md#eventnames)
- [focus](DTableBodyCellLink.md#focus)
- [focusOnClosest](DTableBodyCellLink.md#focusonclosest)
- [getBounds](DTableBodyCellLink.md#getbounds)
- [getChildAt](DTableBodyCellLink.md#getchildat)
- [getChildByName](DTableBodyCellLink.md#getchildbyname)
- [getChildIndex](DTableBodyCellLink.md#getchildindex)
- [getClearType](DTableBodyCellLink.md#getcleartype)
- [getClippingRect](DTableBodyCellLink.md#getclippingrect)
- [getGlobalPosition](DTableBodyCellLink.md#getglobalposition)
- [getHeight](DTableBodyCellLink.md#getheight)
- [getImage](DTableBodyCellLink.md#getimage)
- [getLayouter](DTableBodyCellLink.md#getlayouter)
- [getLocalBounds](DTableBodyCellLink.md#getlocalbounds)
- [getOverflowMask](DTableBodyCellLink.md#getoverflowmask)
- [getParentOfSize](DTableBodyCellLink.md#getparentofsize)
- [getText](DTableBodyCellLink.md#gettext)
- [getThemeDefault](DTableBodyCellLink.md#getthemedefault)
- [getType](DTableBodyCellLink.md#gettype)
- [getWidth](DTableBodyCellLink.md#getwidth)
- [getX](DTableBodyCellLink.md#getx)
- [getY](DTableBodyCellLink.md#gety)
- [hasDirty](DTableBodyCellLink.md#hasdirty)
- [hasRefitableHeight](DTableBodyCellLink.md#hasrefitableheight)
- [hasRefitableWidth](DTableBodyCellLink.md#hasrefitablewidth)
- [hide](DTableBodyCellLink.md#hide)
- [init](DTableBodyCellLink.md#init)
- [initReflowable](DTableBodyCellLink.md#initreflowable)
- [isDirty](DTableBodyCellLink.md#isdirty)
- [isEventTarget](DTableBodyCellLink.md#iseventtarget)
- [isHidden](DTableBodyCellLink.md#ishidden)
- [isHierarchyDirty](DTableBodyCellLink.md#ishierarchydirty)
- [isRefitable](DTableBodyCellLink.md#isrefitable)
- [isShown](DTableBodyCellLink.md#isshown)
- [listenerCount](DTableBodyCellLink.md#listenercount)
- [listeners](DTableBodyCellLink.md#listeners)
- [newImage](DTableBodyCellLink.md#newimage)
- [newOverflowMask](DTableBodyCellLink.md#newoverflowmask)
- [newPadding](DTableBodyCellLink.md#newpadding)
- [newText](DTableBodyCellLink.md#newtext)
- [off](DTableBodyCellLink.md#off)
- [on](DTableBodyCellLink.md#on)
- [onActivate](DTableBodyCellLink.md#onactivate)
- [onActivateKeyDown](DTableBodyCellLink.md#onactivatekeydown)
- [onActivateKeyUp](DTableBodyCellLink.md#onactivatekeyup)
- [onBlur](DTableBodyCellLink.md#onblur)
- [onChildBlur](DTableBodyCellLink.md#onchildblur)
- [onChildFocus](DTableBodyCellLink.md#onchildfocus)
- [onChildrenChange](DTableBodyCellLink.md#onchildrenchange)
- [onClick](DTableBodyCellLink.md#onclick)
- [onDblClick](DTableBodyCellLink.md#ondblclick)
- [onDown](DTableBodyCellLink.md#ondown)
- [onDownThis](DTableBodyCellLink.md#ondownthis)
- [onFocus](DTableBodyCellLink.md#onfocus)
- [onHierarchyDirty](DTableBodyCellLink.md#onhierarchydirty)
- [onKeyDown](DTableBodyCellLink.md#onkeydown)
- [onKeyUp](DTableBodyCellLink.md#onkeyup)
- [onMove](DTableBodyCellLink.md#onmove)
- [onOut](DTableBodyCellLink.md#onout)
- [onOver](DTableBodyCellLink.md#onover)
- [onParentMove](DTableBodyCellLink.md#onparentmove)
- [onParentResize](DTableBodyCellLink.md#onparentresize)
- [onRefit](DTableBodyCellLink.md#onrefit)
- [onReflow](DTableBodyCellLink.md#onreflow)
- [onReflowTextAndImage](DTableBodyCellLink.md#onreflowtextandimage)
- [onResize](DTableBodyCellLink.md#onresize)
- [onScale](DTableBodyCellLink.md#onscale)
- [onShortcut](DTableBodyCellLink.md#onshortcut)
- [onSkew](DTableBodyCellLink.md#onskew)
- [onStateChange](DTableBodyCellLink.md#onstatechange)
- [onUp](DTableBodyCellLink.md#onup)
- [onUpThis](DTableBodyCellLink.md#onupthis)
- [onWheel](DTableBodyCellLink.md#onwheel)
- [once](DTableBodyCellLink.md#once)
- [open](DTableBodyCellLink.md#open)
- [reflow](DTableBodyCellLink.md#reflow)
- [removeAllListeners](DTableBodyCellLink.md#removealllisteners)
- [removeChild](DTableBodyCellLink.md#removechild)
- [removeChildAt](DTableBodyCellLink.md#removechildat)
- [removeChildren](DTableBodyCellLink.md#removechildren)
- [removeListener](DTableBodyCellLink.md#removelistener)
- [render](DTableBodyCellLink.md#render)
- [renderAdvanced](DTableBodyCellLink.md#renderadvanced)
- [resize](DTableBodyCellLink.md#resize)
- [set](DTableBodyCellLink.md#set)
- [setChildIndex](DTableBodyCellLink.md#setchildindex)
- [setFocused](DTableBodyCellLink.md#setfocused)
- [setHeight](DTableBodyCellLink.md#setheight)
- [setParent](DTableBodyCellLink.md#setparent)
- [setTransform](DTableBodyCellLink.md#settransform)
- [setWidth](DTableBodyCellLink.md#setwidth)
- [setX](DTableBodyCellLink.md#setx)
- [setY](DTableBodyCellLink.md#sety)
- [show](DTableBodyCellLink.md#show)
- [sortChildren](DTableBodyCellLink.md#sortchildren)
- [swapChildren](DTableBodyCellLink.md#swapchildren)
- [toCursor](DTableBodyCellLink.md#tocursor)
- [toDirty](DTableBodyCellLink.md#todirty)
- [toGlobal](DTableBodyCellLink.md#toglobal)
- [toHasDirty](DTableBodyCellLink.md#tohasdirty)
- [toHierarchyDirty](DTableBodyCellLink.md#tohierarchydirty)
- [toLocal](DTableBodyCellLink.md#tolocal)
- [toParentHasDirty](DTableBodyCellLink.md#toparenthasdirty)
- [toParentHierarchyDirty](DTableBodyCellLink.md#toparenthierarchydirty)
- [toParentResized](DTableBodyCellLink.md#toparentresized)
- [unset](DTableBodyCellLink.md#unset)
- [updateTransform](DTableBodyCellLink.md#updatetransform)
- [mixin](DTableBodyCellLink.md#mixin)

## Constructors

### constructor

• **new DTableBodyCellLink**\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>(`columnIndex`, `column`, `onChange`, `options`): [`DTableBodyCellLink`](DTableBodyCellLink.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `ROW` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellLink`](../interfaces/DThemeTableBodyCellLink.md)\<`VALUE`\> = [`DThemeTableBodyCellLink`](../interfaces/DThemeTableBodyCellLink.md)\<`VALUE`\> |
| `OPTIONS` | extends [`DTableBodyCellLinkOptions`](../interfaces/DTableBodyCellLinkOptions.md)\<`ROW`, `VALUE`, `THEME`\> = [`DTableBodyCellLinkOptions`](../interfaces/DTableBodyCellLinkOptions.md)\<`ROW`, `VALUE`, `THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, ``null`` \| `VALUE`, ``null`` \| `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<``null`` \| `VALUE`\>\> |
| `onChange` | [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)\<`ROW`, ``null`` \| `VALUE`\> |
| `options` | `OPTIONS` |

#### Returns

[`DTableBodyCellLink`](DTableBodyCellLink.md)\<`ROW`, `VALUE`, `THEME`, `OPTIONS`\>

#### Overrides

[DTableBodyCellButton](DTableBodyCellButton.md).[constructor](DTableBodyCellButton.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts#L113)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_accessibleActive](DTableBodyCellButton.md#_accessibleactive)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[_accessibleDiv](DTableBodyCellButton.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_auto](DTableBodyCellButton.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_background](DTableBodyCellButton.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_border](DTableBodyCellButton.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_bounds](DTableBodyCellButton.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8681

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_boundsID](DTableBodyCellButton.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8694

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_boundsRect](DTableBodyCellButton.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_clearType](DTableBodyCellButton.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_column

• `Protected` **\_column**: [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, ``null`` \| `VALUE`, ``null`` \| `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<``null`` \| `VALUE`\>\>

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_column](DTableBodyCellButton.md#_column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L36)

___

### \_columnIndex

• `Protected` **\_columnIndex**: `number`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_columnIndex](DTableBodyCellButton.md#_columnindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L35)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_corner](DTableBodyCellButton.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_cursor](DTableBodyCellButton.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_destroyed](DTableBodyCellButton.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_enabledFilters](DTableBodyCellButton.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_forcibly

• `Protected` `Optional` **\_forcibly**: `boolean`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_forcibly](DTableBodyCellButton.md#_forcibly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L38)

___

### \_image

• `Protected` `Optional` **\_image**: [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_image](DTableBodyCellButton.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L61)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_lastDownPoint](DTableBodyCellButton.md#_lastdownpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:795](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L795)

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_lastSortedIndex](DTableBodyCellButton.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8644

___

### \_link

• `Protected` `Optional` **\_link**: [`DLink`](DLink.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts#L111)

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_localBounds](DTableBodyCellButton.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8687

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_localBoundsRect](DTableBodyCellButton.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_mask](DTableBodyCellButton.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_onChange

• `Protected` **\_onChange**: [`DTableBodyCellOnChange`](../index.md#dtablebodycellonchange)\<`ROW`, ``null`` \| `VALUE`\>

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_onChange](DTableBodyCellButton.md#_onchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L37)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_options](DTableBodyCellButton.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_outline](DTableBodyCellButton.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_overflowMask

• `Protected` `Optional` **\_overflowMask**: ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_overflowMask](DTableBodyCellButton.md#_overflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L57)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_padding](DTableBodyCellButton.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_reflowable](DTableBodyCellButton.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_row

• `Protected` `Optional` **\_row**: `ROW`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_row](DTableBodyCellButton.md#_row)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L33)

___

### \_rowIndex

• `Protected` **\_rowIndex**: `number`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_rowIndex](DTableBodyCellButton.md#_rowindex)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L34)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_shortcuts](DTableBodyCellButton.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_snippet](DTableBodyCellButton.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_tempDisplayObjectParent](DTableBodyCellButton.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_text

• `Protected` `Optional` **\_text**: [`DTextPieceImpl`](DTextPieceImpl.md)\<``null`` \| `VALUE`\>

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_text](DTableBodyCellButton.md#_text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L56)

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_title](DTableBodyCellButton.md#_title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L787)

___

### \_when

• `Protected` **\_when**: [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_when](DTableBodyCellButton.md#_when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts#L40)

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_zIndex](DTableBodyCellButton.md#_zindex)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[accessible](DTableBodyCellButton.md#accessible)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[accessibleChildren](DTableBodyCellButton.md#accessiblechildren)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[accessibleHint](DTableBodyCellButton.md#accessiblehint)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[accessiblePointerEvents](DTableBodyCellButton.md#accessiblepointerevents)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[accessibleTitle](DTableBodyCellButton.md#accessibletitle)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[accessibleType](DTableBodyCellButton.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8574

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[alpha](DTableBodyCellButton.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8605

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[angle](DTableBodyCellButton.md#angle)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[buttonMode](DTableBodyCellButton.md#buttonmode)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[cacheAsBitmap](DTableBodyCellButton.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8991

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[children](DTableBodyCellButton.md#children)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[cursor](DTableBodyCellButton.md#cursor)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[filterArea](DTableBodyCellButton.md#filterarea)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[filters](DTableBodyCellButton.md#filters)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[hitArea](DTableBodyCellButton.md#hitarea)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[interactive](DTableBodyCellButton.md#interactive)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[interactiveChildren](DTableBodyCellButton.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8518

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[isMask](DTableBodyCellButton.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8732

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[isSprite](DTableBodyCellButton.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8727

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[localTransform](DTableBodyCellButton.md#localtransform)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[mask](DTableBodyCellButton.md#mask)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[name](DTableBodyCellButton.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8998

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[parent](DTableBodyCellButton.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8629

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[pivot](DTableBodyCellButton.md#pivot)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[renderable](DTableBodyCellButton.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8623

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[rotation](DTableBodyCellButton.md#rotation)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[sortDirty](DTableBodyCellButton.md#sortdirty)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[sortableChildren](DTableBodyCellButton.md#sortablechildren)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[transform](DTableBodyCellButton.md#transform)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[visible](DTableBodyCellButton.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[worldAlpha](DTableBodyCellButton.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[worldTransform](DTableBodyCellButton.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8833

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[worldVisible](DTableBodyCellButton.md#worldvisible)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[zIndex](DTableBodyCellButton.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### LAYOUTER

▪ `Static` `Protected` `Optional` **LAYOUTER**: [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[LAYOUTER](DTableBodyCellButton.md#layouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L55)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[WORK_CONTAINS_POINT](DTableBodyCellButton.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DTableBodyCellButton.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DTableBodyCellButton.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### column

• `get` **column**(): [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, `VALUE`, `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`VALUE`\>\>

A column.

#### Returns

[`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW`, `VALUE`, `VALUE`, [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`VALUE`\>\>

#### Inherited from

DTableBodyCellButton.column

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L66)

___

### columnIndex

• `get` **columnIndex**(): `number`

A column index.

#### Returns

`number`

#### Inherited from

DTableBodyCellButton.columnIndex

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L62)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DTableBodyCellButton.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellButton.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1390)

• `set` **height**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DTableBodyCellButton.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1394)

___

### image

• `get` **image**(): [`DImagePieceContainer`](../interfaces/DImagePieceContainer.md)

#### Returns

[`DImagePieceContainer`](../interfaces/DImagePieceContainer.md)

#### Inherited from

DTableBodyCellButton.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L68)

• `set` **image**(`imageSource`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageSource` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\> |

#### Returns

`void`

#### Inherited from

DTableBodyCellButton.image

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L80)

___

### link

• `get` **link**(): [`DLink`](DLink.md)

#### Returns

[`DLink`](DLink.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts#L128)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DTableBodyCellButton.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DTableBodyCellButton.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DTableBodyCellButton.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTableBodyCellButton.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1449](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1449)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DTableBodyCellButton.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### row

• `get` **row**(): `undefined` \| `ROW`

A row data if exists.
Otherwise, Undefined.

#### Returns

`undefined` \| `ROW`

a row data or undefined.

#### Inherited from

DTableBodyCellButton.row

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L54)

___

### rowIndex

• `get` **rowIndex**(): `number`

A row index if a row data exists.
Otherise, -1.

#### Returns

`number`

a row index or -1.

#### Inherited from

DTableBodyCellButton.rowIndex

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L58)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTableBodyCellButton.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DTableBodyCellButton.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1853](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1853)

• `set` **shadow**(`shadow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadow` | ``null`` \| [`DShadow`](../interfaces/DShadow.md) |

#### Returns

`void`

#### Inherited from

DTableBodyCellButton.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1857](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1857)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DTableBodyCellButton.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DTableBodyCellButton.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DTableBodyCellButton.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### text

• `get` **text**(): [`DTextPiece`](../interfaces/DTextPiece.md)\<`VALUE`\>

#### Returns

[`DTextPiece`](../interfaces/DTextPiece.md)\<`VALUE`\>

#### Inherited from

DTableBodyCellButton.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L84)

• `set` **text**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\> |

#### Returns

`void`

#### Inherited from

DTableBodyCellButton.text

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L96)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DTableBodyCellButton.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1694](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1694)

• `set` **theme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`void`

#### Inherited from

DTableBodyCellButton.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1698)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DTableBodyCellButton.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1487)

• `set` **title**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`void`

#### Inherited from

DTableBodyCellButton.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1491)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DTableBodyCellButton.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DTableBodyCellButton.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellButton.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1141)

• `set` **weight**(`weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `weight` | `number` |

#### Returns

`void`

#### Inherited from

DTableBodyCellButton.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellButton.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1331)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

`void`

#### Inherited from

DTableBodyCellButton.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellButton.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1251)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DTableBodyCellButton.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1255)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DTableBodyCellButton.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1291)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`DCoordinatePosition`](../index.md#dcoordinateposition) |

#### Returns

`void`

#### Inherited from

DTableBodyCellButton.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1295)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_calculateBounds](DTableBodyCellButton.md#_calculatebounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2084](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2084)

___

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[_recursivePostUpdateTransform](DTableBodyCellButton.md#_recursivepostupdatetransform)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[_render](DTableBodyCellButton.md#_render)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8472

___

### activate

▸ **activate**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `MouseEvent` \| `KeyboardEvent` \| `TouchEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[activate](DTableBodyCellButton.md#activate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts#L69)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[addChild](DTableBodyCellButton.md#addchild)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[addChildAt](DTableBodyCellButton.md#addchildat)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[addListener](DTableBodyCellButton.md#addlistener)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[addListener](DTableBodyCellButton.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[applyTitle](DTableBodyCellButton.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L136)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[blur](DTableBodyCellButton.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1606)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[calculateBounds](DTableBodyCellButton.md#calculatebounds)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[containerUpdateTransform](DTableBodyCellButton.md#containerupdatetransform)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[containsGlobalPoint](DTableBodyCellButton.md#containsglobalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2098](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2098)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[containsLocalPoint](DTableBodyCellButton.md#containslocalpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2102)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[containsPoint](DTableBodyCellButton.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2089](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2089)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[destroy](DTableBodyCellButton.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L121)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[disableTempParent](DTableBodyCellButton.md#disabletempparent)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[displayObjectUpdateTransform](DTableBodyCellButton.md#displayobjectupdatetransform)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[emit](DTableBodyCellButton.md#emit)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[enableTempParent](DTableBodyCellButton.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[eventNames](DTableBodyCellButton.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[focus](DTableBodyCellButton.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1602)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[focusOnClosest](DTableBodyCellButton.md#focusonclosest)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2019](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2019)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[getBounds](DTableBodyCellButton.md#getbounds)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[getChildAt](DTableBodyCellButton.md#getchildat)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[getChildByName](DTableBodyCellButton.md#getchildbyname)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[getChildIndex](DTableBodyCellButton.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8387

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[getClearType](DTableBodyCellButton.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1215)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[getClippingRect](DTableBodyCellButton.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2115)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[getGlobalPosition](DTableBodyCellButton.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[getHeight](DTableBodyCellButton.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

___

### getImage

▸ **getImage**(): [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Returns

[`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[getImage](DTableBodyCellButton.md#getimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L72)

___

### getLayouter

▸ **getLayouter**(): [`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Returns

[`DImagePieceLayouter`](DImagePieceLayouter.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[getLayouter](DTableBodyCellButton.md#getlayouter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L105)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[getLocalBounds](DTableBodyCellButton.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getOverflowMask

▸ **getOverflowMask**(): ``null`` \| `Graphics`

#### Returns

``null`` \| `Graphics`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[getOverflowMask](DTableBodyCellButton.md#getoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L64)

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[getParentOfSize](DTableBodyCellButton.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

___

### getText

▸ **getText**(): [`DTextPieceImpl`](DTextPieceImpl.md)\<``null`` \| `VALUE`\>

#### Returns

[`DTextPieceImpl`](DTextPieceImpl.md)\<``null`` \| `VALUE`\>

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[getText](DTableBodyCellButton.md#gettext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L88)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[getThemeDefault](DTableBodyCellButton.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2075](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2075)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DTableBodyCellButton](DTableBodyCellButton.md).[getType](DTableBodyCellButton.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts#L137)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[getWidth](DTableBodyCellButton.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[getX](DTableBodyCellButton.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1259)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[getY](DTableBodyCellButton.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1299)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[hasDirty](DTableBodyCellButton.md#hasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1588)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[hasRefitableHeight](DTableBodyCellButton.md#hasrefitableheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1831](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1831)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[hasRefitableWidth](DTableBodyCellButton.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[hide](DTableBodyCellButton.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1520)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[init](DTableBodyCellButton.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L63)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[initReflowable](DTableBodyCellButton.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[isDirty](DTableBodyCellButton.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1584)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[isEventTarget](DTableBodyCellButton.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1965](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1965)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[isHidden](DTableBodyCellButton.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1530)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[isHierarchyDirty](DTableBodyCellButton.md#ishierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1576)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[isRefitable](DTableBodyCellButton.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L107)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[isShown](DTableBodyCellButton.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1516)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[listenerCount](DTableBodyCellButton.md#listenercount)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[listeners](DTableBodyCellButton.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newImage

▸ **newImage**(): [`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Returns

[`DImagePieceContainerImpl`](DImagePieceContainerImpl.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[newImage](DTableBodyCellButton.md#newimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L76)

___

### newOverflowMask

▸ **newOverflowMask**(): ``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Returns

``null`` \| [`DBaseOverflowMaskSimple`](DBaseOverflowMaskSimple.md)

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[newOverflowMask](DTableBodyCellButton.md#newoverflowmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L73)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[newPadding](DTableBodyCellButton.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

___

### newText

▸ **newText**(): [`DTextPieceImpl`](DTextPieceImpl.md)\<``null`` \| `VALUE`\>

#### Returns

[`DTextPieceImpl`](DTextPieceImpl.md)\<``null`` \| `VALUE`\>

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[newText](DTableBodyCellButton.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L92)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[off](DTableBodyCellButton.md#off)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[on](DTableBodyCellButton.md#on)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[on](DTableBodyCellButton.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

___

### onActivate

▸ **onActivate**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `MouseEvent` \| `KeyboardEvent` \| `TouchEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Overrides

[DTableBodyCellButton](DTableBodyCellButton.md).[onActivate](DTableBodyCellButton.md#onactivate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts#L141)

___

### onActivateKeyDown

▸ **onActivateKeyDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[onActivateKeyDown](DTableBodyCellButton.md#onactivatekeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts#L85)

___

### onActivateKeyUp

▸ **onActivateKeyUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[onActivateKeyUp](DTableBodyCellButton.md#onactivatekeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts#L91)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[onBlur](DTableBodyCellButton.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1679](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1679)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onChildBlur](DTableBodyCellButton.md#onchildblur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1672)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onChildFocus](DTableBodyCellButton.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[onChildrenChange](DTableBodyCellButton.md#onchildrenchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1128)

___

### onClick

▸ **onClick**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Overrides

[DTableBodyCellButton](DTableBodyCellButton.md).[onClick](DTableBodyCellButton.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts#L122)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onDblClick](DTableBodyCellButton.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts#L62)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onDown](DTableBodyCellButton.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1979](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1979)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onDownThis](DTableBodyCellButton.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1986](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1986)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[onFocus](DTableBodyCellButton.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1665)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[onHierarchyDirty](DTableBodyCellButton.md#onhierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1580)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onKeyDown](DTableBodyCellButton.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts#L100)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onKeyUp](DTableBodyCellButton.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts#L108)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onMove](DTableBodyCellButton.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1153)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onOut](DTableBodyCellButton.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2042](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2042)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onOver](DTableBodyCellButton.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2028](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2028)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onParentMove](DTableBodyCellButton.md#onparentmove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1943](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1943)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onParentResize](DTableBodyCellButton.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[onRefit](DTableBodyCellButton.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1739](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1739)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[onReflow](DTableBodyCellButton.md#onreflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L100)

___

### onReflowTextAndImage

▸ **onReflowTextAndImage**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[onReflowTextAndImage](DTableBodyCellButton.md#onreflowtextandimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L92)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onResize](DTableBodyCellButton.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onScale](DTableBodyCellButton.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1236)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onShortcut](DTableBodyCellButton.md#onshortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1133)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onSkew](DTableBodyCellButton.md#onskew)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1241)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onStateChange](DTableBodyCellButton.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L87)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onUp](DTableBodyCellButton.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1996](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1996)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onUpThis](DTableBodyCellButton.md#onupthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2003](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2003)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[onWheel](DTableBodyCellButton.md#onwheel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1948](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1948)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[once](DTableBodyCellButton.md#once)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[once](DTableBodyCellButton.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### open

▸ **open**(`inNewWindow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inNewWindow` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts#L146)

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[reflow](DTableBodyCellButton.md#reflow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1712)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[removeAllListeners](DTableBodyCellButton.md#removealllisteners)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[removeAllListeners](DTableBodyCellButton.md#removealllisteners)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[removeChild](DTableBodyCellButton.md#removechild)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[removeChildAt](DTableBodyCellButton.md#removechildat)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[removeChildren](DTableBodyCellButton.md#removechildren)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[removeListener](DTableBodyCellButton.md#removelistener)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[removeListener](DTableBodyCellButton.md#removelistener)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[render](DTableBodyCellButton.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2060](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2060)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[renderAdvanced](DTableBodyCellButton.md#renderadvanced)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[resize](DTableBodyCellButton.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1165)

___

### set

▸ **set**(`value`, `row`, `supplimental`, `rowIndex`, `columnIndex`, `forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `row` | `ROW` |
| `supplimental` | ``null`` \| `number` |
| `rowIndex` | `number` |
| `columnIndex` | `number` |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[set](DTableBodyCellButton.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L70)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[setChildIndex](DTableBodyCellButton.md#setchildindex)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[setFocused](DTableBodyCellButton.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1592)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[setHeight](DTableBodyCellButton.md#setheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1402)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[setParent](DTableBodyCellButton.md#setparent)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[setTransform](DTableBodyCellButton.md#settransform)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[setWidth](DTableBodyCellButton.md#setwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1343)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[setX](DTableBodyCellButton.md#setx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1268)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[setY](DTableBodyCellButton.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1308)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[show](DTableBodyCellButton.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1507](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1507)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[sortChildren](DTableBodyCellButton.md#sortchildren)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[swapChildren](DTableBodyCellButton.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8380

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

[DTableBodyCellButton](DTableBodyCellButton.md).[toCursor](DTableBodyCellButton.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[toDirty](DTableBodyCellButton.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1534](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1534)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[toGlobal](DTableBodyCellButton.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[toHasDirty](DTableBodyCellButton.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1543](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1543)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[toHierarchyDirty](DTableBodyCellButton.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1559)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[toLocal](DTableBodyCellButton.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8768

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[toParentHasDirty](DTableBodyCellButton.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1552)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[toParentHierarchyDirty](DTableBodyCellButton.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[toParentResized](DTableBodyCellButton.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1880](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L1880)

___

### unset

▸ **unset**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[unset](DTableBodyCellButton.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-body-cell-text.ts#L86)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[DTableBodyCellButton](DTableBodyCellButton.md).[updateTransform](DTableBodyCellButton.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2069](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L2069)

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

[DTableBodyCellButton](DTableBodyCellButton.md).[mixin](DTableBodyCellButton.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
