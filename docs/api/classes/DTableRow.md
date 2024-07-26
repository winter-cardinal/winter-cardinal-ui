[Winter Cardinal UI - v0.442.0](../index.md) / DTableRow

# Class: DTableRow\<ROW, COLUMN, THEME, OPTIONS\>

A base class for UI classes.
See [DBaseEvents](../interfaces/DBaseEvents.md) for event details.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `ROW` |
| `COLUMN` | extends [`DTableRowColumn`](../interfaces/DTableRowColumn.md) |
| `THEME` | extends [`DThemeTableRow`](../interfaces/DThemeTableRow.md) = [`DThemeTableRow`](../interfaces/DThemeTableRow.md) |
| `OPTIONS` | extends [`DTableRowOptions`](../interfaces/DTableRowOptions.md)\<`THEME`\> = [`DTableRowOptions`](../interfaces/DTableRowOptions.md)\<`THEME`\> |

## Hierarchy

- [`DLayoutHorizontal`](DLayoutHorizontal.md)\<`THEME`, `OPTIONS`\>

  ↳ **`DTableRow`**

  ↳↳ [`DTableBodyRow`](DTableBodyRow.md)

  ↳↳ [`DTableCategory`](DTableCategory.md)

  ↳↳ [`DTableHeader`](DTableHeader.md)

## Table of contents

### Constructors

- [constructor](DTableRow.md#constructor)

### Properties

- [\_accessibleActive](DTableRow.md#_accessibleactive)
- [\_accessibleDiv](DTableRow.md#_accessiblediv)
- [\_auto](DTableRow.md#_auto)
- [\_background](DTableRow.md#_background)
- [\_border](DTableRow.md#_border)
- [\_bounds](DTableRow.md#_bounds)
- [\_boundsID](DTableRow.md#_boundsid)
- [\_boundsRect](DTableRow.md#_boundsrect)
- [\_clearType](DTableRow.md#_cleartype)
- [\_columns](DTableRow.md#_columns)
- [\_corner](DTableRow.md#_corner)
- [\_cornerAdjust](DTableRow.md#_corneradjust)
- [\_cursor](DTableRow.md#_cursor)
- [\_destroyed](DTableRow.md#_destroyed)
- [\_direction](DTableRow.md#_direction)
- [\_enabledFilters](DTableRow.md#_enabledfilters)
- [\_frozen](DTableRow.md#_frozen)
- [\_lastDownPoint](DTableRow.md#_lastdownpoint)
- [\_lastSortedIndex](DTableRow.md#_lastsortedindex)
- [\_localBounds](DTableRow.md#_localbounds)
- [\_localBoundsRect](DTableRow.md#_localboundsrect)
- [\_margin](DTableRow.md#_margin)
- [\_mask](DTableRow.md#_mask)
- [\_multiplicity](DTableRow.md#_multiplicity)
- [\_options](DTableRow.md#_options)
- [\_outline](DTableRow.md#_outline)
- [\_padding](DTableRow.md#_padding)
- [\_reflowable](DTableRow.md#_reflowable)
- [\_reverse](DTableRow.md#_reverse)
- [\_shortcuts](DTableRow.md#_shortcuts)
- [\_snippet](DTableRow.md#_snippet)
- [\_tempDisplayObjectParent](DTableRow.md#_tempdisplayobjectparent)
- [\_title](DTableRow.md#_title)
- [\_zIndex](DTableRow.md#_zindex)
- [accessible](DTableRow.md#accessible)
- [accessibleChildren](DTableRow.md#accessiblechildren)
- [accessibleHint](DTableRow.md#accessiblehint)
- [accessiblePointerEvents](DTableRow.md#accessiblepointerevents)
- [accessibleTitle](DTableRow.md#accessibletitle)
- [accessibleType](DTableRow.md#accessibletype)
- [alpha](DTableRow.md#alpha)
- [angle](DTableRow.md#angle)
- [buttonMode](DTableRow.md#buttonmode)
- [cacheAsBitmap](DTableRow.md#cacheasbitmap)
- [children](DTableRow.md#children)
- [cursor](DTableRow.md#cursor)
- [filterArea](DTableRow.md#filterarea)
- [filters](DTableRow.md#filters)
- [hitArea](DTableRow.md#hitarea)
- [interactive](DTableRow.md#interactive)
- [interactiveChildren](DTableRow.md#interactivechildren)
- [isMask](DTableRow.md#ismask)
- [isSprite](DTableRow.md#issprite)
- [localTransform](DTableRow.md#localtransform)
- [mask](DTableRow.md#mask)
- [name](DTableRow.md#name)
- [parent](DTableRow.md#parent)
- [pivot](DTableRow.md#pivot)
- [renderable](DTableRow.md#renderable)
- [rotation](DTableRow.md#rotation)
- [sortDirty](DTableRow.md#sortdirty)
- [sortableChildren](DTableRow.md#sortablechildren)
- [transform](DTableRow.md#transform)
- [visible](DTableRow.md#visible)
- [worldAlpha](DTableRow.md#worldalpha)
- [worldTransform](DTableRow.md#worldtransform)
- [worldVisible](DTableRow.md#worldvisible)
- [zIndex](DTableRow.md#zindex)
- [CORNER\_ADJUST\_WORK](DTableRow.md#corner_adjust_work)
- [WORK\_CONTAINS\_POINT](DTableRow.md#work_contains_point)

### Accessors

- [background](DTableRow.md#background)
- [border](DTableRow.md#border)
- [corner](DTableRow.md#corner)
- [height](DTableRow.md#height)
- [margin](DTableRow.md#margin)
- [multiplicity](DTableRow.md#multiplicity)
- [options](DTableRow.md#options)
- [outline](DTableRow.md#outline)
- [padding](DTableRow.md#padding)
- [position](DTableRow.md#position)
- [reflowable](DTableRow.md#reflowable)
- [scale](DTableRow.md#scale)
- [shadow](DTableRow.md#shadow)
- [skew](DTableRow.md#skew)
- [snippet](DTableRow.md#snippet)
- [state](DTableRow.md#state)
- [theme](DTableRow.md#theme)
- [title](DTableRow.md#title)
- [type](DTableRow.md#type)
- [unsafe](DTableRow.md#unsafe)
- [weight](DTableRow.md#weight)
- [width](DTableRow.md#width)
- [x](DTableRow.md#x)
- [y](DTableRow.md#y)

### Methods

- [\_calculateBounds](DTableRow.md#_calculatebounds)
- [\_recursivePostUpdateTransform](DTableRow.md#_recursivepostupdatetransform)
- [\_render](DTableRow.md#_render)
- [addChild](DTableRow.md#addchild)
- [addChildAt](DTableRow.md#addchildat)
- [addListener](DTableRow.md#addlistener)
- [addSpace](DTableRow.md#addspace)
- [applyTitle](DTableRow.md#applytitle)
- [blur](DTableRow.md#blur)
- [calcSpaceLeft](DTableRow.md#calcspaceleft)
- [calculateBounds](DTableRow.md#calculatebounds)
- [containerUpdateTransform](DTableRow.md#containerupdatetransform)
- [containsGlobalPoint](DTableRow.md#containsglobalpoint)
- [containsLocalPoint](DTableRow.md#containslocalpoint)
- [containsPoint](DTableRow.md#containspoint)
- [countColumn](DTableRow.md#countcolumn)
- [countRow](DTableRow.md#countrow)
- [destroy](DTableRow.md#destroy)
- [disableTempParent](DTableRow.md#disabletempparent)
- [displayObjectUpdateTransform](DTableRow.md#displayobjectupdatetransform)
- [emit](DTableRow.md#emit)
- [enableTempParent](DTableRow.md#enabletempparent)
- [eventNames](DTableRow.md#eventnames)
- [findColumnIndexNext](DTableRow.md#findcolumnindexnext)
- [findColumnIndexPrevious](DTableRow.md#findcolumnindexprevious)
- [findRowIndexNext](DTableRow.md#findrowindexnext)
- [findRowIndexPrevious](DTableRow.md#findrowindexprevious)
- [focus](DTableRow.md#focus)
- [focusOnClosest](DTableRow.md#focusonclosest)
- [getBounds](DTableRow.md#getbounds)
- [getChildAt](DTableRow.md#getchildat)
- [getChildByName](DTableRow.md#getchildbyname)
- [getChildIndex](DTableRow.md#getchildindex)
- [getClearType](DTableRow.md#getcleartype)
- [getClippingRect](DTableRow.md#getclippingrect)
- [getContentPositionX](DTableRow.md#getcontentpositionx)
- [getGlobalPosition](DTableRow.md#getglobalposition)
- [getHeight](DTableRow.md#getheight)
- [getLocalBounds](DTableRow.md#getlocalbounds)
- [getParentOfSize](DTableRow.md#getparentofsize)
- [getSpaceLeft](DTableRow.md#getspaceleft)
- [getThemeDefault](DTableRow.md#getthemedefault)
- [getType](DTableRow.md#gettype)
- [getWeightTotal](DTableRow.md#getweighttotal)
- [getWidth](DTableRow.md#getwidth)
- [getX](DTableRow.md#getx)
- [getY](DTableRow.md#gety)
- [hasClearType](DTableRow.md#hascleartype)
- [hasClearTypeAfter](DTableRow.md#hascleartypeafter)
- [hasClearTypeBefore](DTableRow.md#hascleartypebefore)
- [hasDirty](DTableRow.md#hasdirty)
- [hasRefitableHeight](DTableRow.md#hasrefitableheight)
- [hasRefitableWidth](DTableRow.md#hasrefitablewidth)
- [hide](DTableRow.md#hide)
- [init](DTableRow.md#init)
- [initCells](DTableRow.md#initcells)
- [initReflowable](DTableRow.md#initreflowable)
- [isDirty](DTableRow.md#isdirty)
- [isEventTarget](DTableRow.md#iseventtarget)
- [isHidden](DTableRow.md#ishidden)
- [isHierarchyDirty](DTableRow.md#ishierarchydirty)
- [isRefitable](DTableRow.md#isrefitable)
- [isShown](DTableRow.md#isshown)
- [listenerCount](DTableRow.md#listenercount)
- [listeners](DTableRow.md#listeners)
- [newCell](DTableRow.md#newcell)
- [newPadding](DTableRow.md#newpadding)
- [off](DTableRow.md#off)
- [on](DTableRow.md#on)
- [onBlur](DTableRow.md#onblur)
- [onChildBlur](DTableRow.md#onchildblur)
- [onChildFocus](DTableRow.md#onchildfocus)
- [onChildrenChange](DTableRow.md#onchildrenchange)
- [onDblClick](DTableRow.md#ondblclick)
- [onDown](DTableRow.md#ondown)
- [onDownThis](DTableRow.md#ondownthis)
- [onFocus](DTableRow.md#onfocus)
- [onHierarchyDirty](DTableRow.md#onhierarchydirty)
- [onKeyDown](DTableRow.md#onkeydown)
- [onKeyUp](DTableRow.md#onkeyup)
- [onMove](DTableRow.md#onmove)
- [onOut](DTableRow.md#onout)
- [onOver](DTableRow.md#onover)
- [onParentMove](DTableRow.md#onparentmove)
- [onParentResize](DTableRow.md#onparentresize)
- [onRefit](DTableRow.md#onrefit)
- [onReflow](DTableRow.md#onreflow)
- [onResize](DTableRow.md#onresize)
- [onScale](DTableRow.md#onscale)
- [onShortcut](DTableRow.md#onshortcut)
- [onSkew](DTableRow.md#onskew)
- [onStateChange](DTableRow.md#onstatechange)
- [onUp](DTableRow.md#onup)
- [onUpThis](DTableRow.md#onupthis)
- [onWheel](DTableRow.md#onwheel)
- [once](DTableRow.md#once)
- [reflow](DTableRow.md#reflow)
- [removeAllListeners](DTableRow.md#removealllisteners)
- [removeChild](DTableRow.md#removechild)
- [removeChildAt](DTableRow.md#removechildat)
- [removeChildren](DTableRow.md#removechildren)
- [removeListener](DTableRow.md#removelistener)
- [render](DTableRow.md#render)
- [renderAdvanced](DTableRow.md#renderadvanced)
- [resetFrozenCellPosition](DTableRow.md#resetfrozencellposition)
- [resize](DTableRow.md#resize)
- [setChildIndex](DTableRow.md#setchildindex)
- [setFocused](DTableRow.md#setfocused)
- [setHeight](DTableRow.md#setheight)
- [setParent](DTableRow.md#setparent)
- [setTransform](DTableRow.md#settransform)
- [setWidth](DTableRow.md#setwidth)
- [setX](DTableRow.md#setx)
- [setY](DTableRow.md#sety)
- [show](DTableRow.md#show)
- [sortChildren](DTableRow.md#sortchildren)
- [swapChildren](DTableRow.md#swapchildren)
- [toCornerMaskColumn](DTableRow.md#tocornermaskcolumn)
- [toCornerMaskRow](DTableRow.md#tocornermaskrow)
- [toCursor](DTableRow.md#tocursor)
- [toDirty](DTableRow.md#todirty)
- [toGlobal](DTableRow.md#toglobal)
- [toHasDirty](DTableRow.md#tohasdirty)
- [toHierarchyDirty](DTableRow.md#tohierarchydirty)
- [toIndexEnd](DTableRow.md#toindexend)
- [toLocal](DTableRow.md#tolocal)
- [toParentHasDirty](DTableRow.md#toparenthasdirty)
- [toParentHierarchyDirty](DTableRow.md#toparenthierarchydirty)
- [toParentResized](DTableRow.md#toparentresized)
- [updateFrozenCellPosition](DTableRow.md#updatefrozencellposition)
- [updateTransform](DTableRow.md#updatetransform)
- [mixin](DTableRow.md#mixin)

## Constructors

### constructor

• **new DTableRow**\<`ROW`, `COLUMN`, `THEME`, `OPTIONS`\>(`columns`, `frozen`, `options?`): [`DTableRow`](DTableRow.md)\<`ROW`, `COLUMN`, `THEME`, `OPTIONS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `ROW` |
| `COLUMN` | extends [`DTableRowColumn`](../interfaces/DTableRowColumn.md) |
| `THEME` | extends [`DThemeTableRow`](../interfaces/DThemeTableRow.md) = [`DThemeTableRow`](../interfaces/DThemeTableRow.md) |
| `OPTIONS` | extends [`DTableRowOptions`](../interfaces/DTableRowOptions.md)\<`THEME`\> = [`DTableRowOptions`](../interfaces/DTableRowOptions.md)\<`THEME`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `columns` | `COLUMN`[] |
| `frozen` | `number` |
| `options?` | `OPTIONS` |

#### Returns

[`DTableRow`](DTableRow.md)\<`ROW`, `COLUMN`, `THEME`, `OPTIONS`\>

#### Overrides

[DLayoutHorizontal](DLayoutHorizontal.md).[constructor](DLayoutHorizontal.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L36)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_accessibleActive](DLayoutHorizontal.md#_accessibleactive)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[_accessibleDiv](DLayoutHorizontal.md#_accessiblediv)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8565

___

### \_auto

• `Protected` **\_auto**: [`DBaseAutoSet`](DBaseAutoSet.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_auto](DLayoutHorizontal.md#_auto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L777)

___

### \_background

• `Protected` **\_background**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_background](DLayoutHorizontal.md#_background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L788)

___

### \_border

• `Protected` **\_border**: [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_border](DLayoutHorizontal.md#_border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:789](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L789)

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_bounds](DLayoutHorizontal.md#_bounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8681

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_boundsID](DLayoutHorizontal.md#_boundsid)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8694

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_boundsRect](DLayoutHorizontal.md#_boundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8701

___

### \_clearType

• `Protected` **\_clearType**: `number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_clearType](DLayoutHorizontal.md#_cleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:791](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L791)

___

### \_columns

• `Protected` **\_columns**: `COLUMN`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L33)

___

### \_corner

• `Protected` **\_corner**: [`DCorner`](../interfaces/DCorner.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_corner](DLayoutHorizontal.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:775](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L775)

___

### \_cornerAdjust

• `Protected` **\_cornerAdjust**: `boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_cornerAdjust](DLayoutHorizontal.md#_corneradjust)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L126)

___

### \_cursor

• `Protected` `Optional` **\_cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_cursor](DLayoutHorizontal.md#_cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L796)

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_destroyed](DLayoutHorizontal.md#_destroyed)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8722

___

### \_direction

• `Protected` **\_direction**: [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_direction](DLayoutHorizontal.md#_direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L128)

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_enabledFilters](DLayoutHorizontal.md#_enabledfilters)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8675

___

### \_frozen

• `Protected` **\_frozen**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L34)

___

### \_lastDownPoint

• `Protected` `Optional` **\_lastDownPoint**: `Point`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_lastDownPoint](DLayoutHorizontal.md#_lastdownpoint)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[_lastSortedIndex](DLayoutHorizontal.md#_lastsortedindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8644

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_localBounds](DLayoutHorizontal.md#_localbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8687

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_localBoundsRect](DLayoutHorizontal.md#_localboundsrect)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8708

___

### \_margin

• `Protected` **\_margin**: [`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_margin](DLayoutHorizontal.md#_margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L125)

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_mask](DLayoutHorizontal.md#_mask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8715

___

### \_multiplicity

• `Protected` **\_multiplicity**: `number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_multiplicity](DLayoutHorizontal.md#_multiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L127)

___

### \_options

• `Protected` **\_options**: `undefined` \| `OPTIONS`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_options](DLayoutHorizontal.md#_options)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L771)

___

### \_outline

• `Protected` **\_outline**: [`DOutline`](../interfaces/DOutline.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_outline](DLayoutHorizontal.md#_outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L790)

___

### \_padding

• `Protected` **\_padding**: [`DPadding`](../interfaces/DPadding.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_padding](DLayoutHorizontal.md#_padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:774](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L774)

___

### \_reflowable

• `Protected` **\_reflowable**: [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_reflowable](DLayoutHorizontal.md#_reflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:794](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L794)

___

### \_reverse

• `Protected` **\_reverse**: `boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_reverse](DLayoutHorizontal.md#_reverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L129)

___

### \_shortcuts

• `Protected` `Optional` **\_shortcuts**: [`UtilKeyboardEventShortcut`](../interfaces/UtilKeyboardEventShortcut.md)[]

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_shortcuts](DLayoutHorizontal.md#_shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L792)

___

### \_snippet

• `Protected` **\_snippet**: [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_snippet](DLayoutHorizontal.md#_snippet)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L793)

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_tempDisplayObjectParent](DLayoutHorizontal.md#_tempdisplayobjectparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8795

___

### \_title

• `Protected` **\_title**: `string`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_title](DLayoutHorizontal.md#_title)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[_zIndex](DLayoutHorizontal.md#_zindex)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessible](DLayoutHorizontal.md#accessible)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessibleChildren](DLayoutHorizontal.md#accessiblechildren)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessibleHint](DLayoutHorizontal.md#accessiblehint)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessiblePointerEvents](DLayoutHorizontal.md#accessiblepointerevents)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessibleTitle](DLayoutHorizontal.md#accessibletitle)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[accessibleType](DLayoutHorizontal.md#accessibletype)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8574

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[alpha](DLayoutHorizontal.md#alpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8605

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[angle](DLayoutHorizontal.md#angle)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[buttonMode](DLayoutHorizontal.md#buttonmode)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[cacheAsBitmap](DLayoutHorizontal.md#cacheasbitmap)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8991

___

### children

• `Readonly` **children**: `DisplayObject`[]

The array of children of this container.

**`Member`**

PIXI.Container#children

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[children](DLayoutHorizontal.md#children)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[cursor](DLayoutHorizontal.md#cursor)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[filterArea](DLayoutHorizontal.md#filterarea)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[filters](DLayoutHorizontal.md#filters)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[hitArea](DLayoutHorizontal.md#hitarea)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[interactive](DLayoutHorizontal.md#interactive)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[interactiveChildren](DLayoutHorizontal.md#interactivechildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8518

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isMask](DLayoutHorizontal.md#ismask)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8732

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isSprite](DLayoutHorizontal.md#issprite)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8727

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[localTransform](DLayoutHorizontal.md#localtransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[mask](DLayoutHorizontal.md#mask)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[name](DLayoutHorizontal.md#name)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8998

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[parent](DLayoutHorizontal.md#parent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8629

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[pivot](DLayoutHorizontal.md#pivot)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[renderable](DLayoutHorizontal.md#renderable)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8623

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[rotation](DLayoutHorizontal.md#rotation)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[sortDirty](DLayoutHorizontal.md#sortdirty)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[sortableChildren](DLayoutHorizontal.md#sortablechildren)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[transform](DLayoutHorizontal.md#transform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[visible](DLayoutHorizontal.md#visible)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8614

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[worldAlpha](DLayoutHorizontal.md#worldalpha)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8636

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[worldTransform](DLayoutHorizontal.md#worldtransform)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8833

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[worldVisible](DLayoutHorizontal.md#worldvisible)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[zIndex](DLayoutHorizontal.md#zindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8891

___

### CORNER\_ADJUST\_WORK

▪ `Static` **CORNER\_ADJUST\_WORK**: ``null`` \| `Float32Array` = `null`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[CORNER_ADJUST_WORK](DLayoutHorizontal.md#corner_adjust_work)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L123)

___

### WORK\_CONTAINS\_POINT

▪ `Static` `Protected` **WORK\_CONTAINS\_POINT**: `Point`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[WORK_CONTAINS_POINT](DLayoutHorizontal.md#work_contains_point)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L767)

## Accessors

### background

• `get` **background**(): [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Returns

[`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Inherited from

DLayoutHorizontal.background

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1471)

___

### border

• `get` **border**(): [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Returns

[`DBorderStateAware`](../interfaces/DBorderStateAware.md)

#### Inherited from

DLayoutHorizontal.border

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1475)

___

### corner

• `get` **corner**(): [`DCorner`](../interfaces/DCorner.md)

#### Returns

[`DCorner`](../interfaces/DCorner.md)

#### Inherited from

DLayoutHorizontal.corner

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1467](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1467)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.height

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

DLayoutHorizontal.height

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1394)

___

### margin

• `get` **margin**(): [`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Returns

[`DLayoutMargin`](../interfaces/DLayoutMargin.md)

#### Inherited from

DLayoutHorizontal.margin

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L142)

___

### multiplicity

• `get` **multiplicity**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.multiplicity

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L146)

___

### options

• `get` **options**(): `undefined` \| `OPTIONS`

#### Returns

`undefined` \| `OPTIONS`

#### Inherited from

DLayoutHorizontal.options

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1690)

___

### outline

• `get` **outline**(): [`DOutline`](../interfaces/DOutline.md)

#### Returns

[`DOutline`](../interfaces/DOutline.md)

#### Inherited from

DLayoutHorizontal.outline

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1479)

___

### padding

• `get` **padding**(): [`DPadding`](../interfaces/DPadding.md)

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Inherited from

DLayoutHorizontal.padding

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1463)

___

### position

• `get` **position**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DLayoutHorizontal.position

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1449](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1449)

___

### reflowable

• `get` **reflowable**(): [`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Returns

[`DBaseReflowableContainer`](DBaseReflowableContainer.md)

#### Inherited from

DLayoutHorizontal.reflowable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1120)

___

### scale

• `get` **scale**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DLayoutHorizontal.scale

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1454)

___

### shadow

• `get` **shadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Inherited from

DLayoutHorizontal.shadow

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

DLayoutHorizontal.shadow

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1857](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1857)

___

### skew

• `get` **skew**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Inherited from

DLayoutHorizontal.skew

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1459)

___

### snippet

• `get` **snippet**(): [`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Returns

[`DBaseSnippetContainer`](DBaseSnippetContainer.md)

#### Inherited from

DLayoutHorizontal.snippet

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1116)

___

### state

• `get` **state**(): [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

[`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DLayoutHorizontal.state

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1686)

___

### theme

• `get` **theme**(): `THEME`

#### Returns

`THEME`

#### Inherited from

DLayoutHorizontal.theme

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

DLayoutHorizontal.theme

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1698)

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

DLayoutHorizontal.title

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

DLayoutHorizontal.title

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1491)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

DLayoutHorizontal.type

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1246)

___

### unsafe

• `get` **unsafe**(): `Transform`

#### Returns

`Transform`

#### Inherited from

DLayoutHorizontal.unsafe

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1483](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1483)

___

### weight

• `get` **weight**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.weight

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

DLayoutHorizontal.weight

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1145)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.width

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

DLayoutHorizontal.width

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1335)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.x

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

DLayoutHorizontal.x

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1255)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

DLayoutHorizontal.y

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

DLayoutHorizontal.y

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1295)

## Methods

### \_calculateBounds

▸ **_calculateBounds**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[_calculateBounds](DLayoutHorizontal.md#_calculatebounds)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[_recursivePostUpdateTransform](DLayoutHorizontal.md#_recursivepostupdatetransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[_render](DLayoutHorizontal.md#_render)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[addChild](DLayoutHorizontal.md#addchild)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[addChildAt](DLayoutHorizontal.md#addchildat)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[addListener](DLayoutHorizontal.md#addlistener)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[addListener](DLayoutHorizontal.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

___

### addSpace

▸ **addSpace**(`options?`): [`DLayoutSpace`](DLayoutSpace.md)\<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md), [`DLayoutSpaceOptions`](../interfaces/DLayoutSpaceOptions.md)\<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DLayoutSpaceOptions`](../interfaces/DLayoutSpaceOptions.md)\<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)\> |

#### Returns

[`DLayoutSpace`](DLayoutSpace.md)\<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md), [`DLayoutSpaceOptions`](../interfaces/DLayoutSpaceOptions.md)\<[`DThemeLayoutSpace`](../interfaces/DThemeLayoutSpace.md)\>\>

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[addSpace](DLayoutHorizontal.md#addspace)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L804)

___

### applyTitle

▸ **applyTitle**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[applyTitle](DLayoutHorizontal.md#applytitle)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[blur](DLayoutHorizontal.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1606)

___

### calcSpaceLeft

▸ **calcSpaceLeft**(`isOn`, `size`, `padding`, `margin`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isOn` | `boolean` |
| `size` | `number` |
| `padding` | `number` |
| `margin` | `number` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[calcSpaceLeft](DLayoutHorizontal.md#calcspaceleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:261](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L261)

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the container.

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[calculateBounds](DLayoutHorizontal.md#calculatebounds)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[containerUpdateTransform](DLayoutHorizontal.md#containerupdatetransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[containsGlobalPoint](DLayoutHorizontal.md#containsglobalpoint)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[containsLocalPoint](DLayoutHorizontal.md#containslocalpoint)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[containsPoint](DLayoutHorizontal.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2089](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2089)

___

### countColumn

▸ **countColumn**(`istart`, `irow`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `irow` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[countColumn](DLayoutHorizontal.md#countcolumn)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L760)

___

### countRow

▸ **countRow**(`istart`, `icolumn`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `icolumn` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[countRow](DLayoutHorizontal.md#countrow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:718](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L718)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[destroy](DLayoutHorizontal.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2122)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[disableTempParent](DLayoutHorizontal.md#disabletempparent)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[displayObjectUpdateTransform](DLayoutHorizontal.md#displayobjectupdatetransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[emit](DLayoutHorizontal.md#emit)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[enableTempParent](DLayoutHorizontal.md#enabletempparent)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8807

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[eventNames](DLayoutHorizontal.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### findColumnIndexNext

▸ **findColumnIndexNext**(`istart`, `icolumn`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `icolumn` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[findColumnIndexNext](DLayoutHorizontal.md#findcolumnindexnext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:699](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L699)

___

### findColumnIndexPrevious

▸ **findColumnIndexPrevious**(`istart`, `icolumn`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `icolumn` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[findColumnIndexPrevious](DLayoutHorizontal.md#findcolumnindexprevious)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L686)

___

### findRowIndexNext

▸ **findRowIndexNext**(`istart`, `irow`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `irow` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[findRowIndexNext](DLayoutHorizontal.md#findrowindexnext)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:741](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L741)

___

### findRowIndexPrevious

▸ **findRowIndexPrevious**(`istart`, `irow`, `cornerAdjustWork`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `istart` | `number` |
| `irow` | `number` |
| `cornerAdjustWork` | `Float32Array` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[findRowIndexPrevious](DLayoutHorizontal.md#findrowindexprevious)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L728)

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[focus](DLayoutHorizontal.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1602)

___

### focusOnClosest

▸ **focusOnClosest**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[focusOnClosest](DLayoutHorizontal.md#focusonclosest)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getBounds](DLayoutHorizontal.md#getbounds)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getChildAt](DLayoutHorizontal.md#getchildat)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getChildByName](DLayoutHorizontal.md#getchildbyname)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getChildIndex](DLayoutHorizontal.md#getchildindex)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8387

___

### getClearType

▸ **getClearType**(): `number`

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getClearType](DLayoutHorizontal.md#getcleartype)

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

#### Overrides

[DLayoutHorizontal](DLayoutHorizontal.md).[getClippingRect](DLayoutHorizontal.md#getclippingrect)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L114)

___

### getContentPositionX

▸ **getContentPositionX**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L112)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getGlobalPosition](DLayoutHorizontal.md#getglobalposition)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getHeight](DLayoutHorizontal.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1398)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[getLocalBounds](DLayoutHorizontal.md#getlocalbounds)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8445

___

### getParentOfSize

▸ **getParentOfSize**(): ``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Returns

``null`` \| \{ `height`: `number` ; `padding`: [`DPadding`](../interfaces/DPadding.md) ; `width`: `number`  }

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getParentOfSize](DLayoutHorizontal.md#getparentofsize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1887](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1887)

___

### getSpaceLeft

▸ **getSpaceLeft**(`baseSize`, `margin`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseSize` | `number` |
| `margin` | `number` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getSpaceLeft](DLayoutHorizontal.md#getspaceleft)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L184)

___

### getThemeDefault

▸ **getThemeDefault**(): `THEME`

#### Returns

`THEME`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getThemeDefault](DLayoutHorizontal.md#getthemedefault)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2075](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2075)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Overrides

[DLayoutHorizontal](DLayoutHorizontal.md).[getType](DLayoutHorizontal.md#gettype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L143)

___

### getWeightTotal

▸ **getWeightTotal**(): `number`

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getWeightTotal](DLayoutHorizontal.md#getweighttotal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L150)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getWidth](DLayoutHorizontal.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1339)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getX](DLayoutHorizontal.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1259)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[getY](DLayoutHorizontal.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1299)

___

### hasClearType

▸ **hasClearType**(`children`, `index`, `clearType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `DisplayObject`[] |
| `index` | `number` |
| `clearType` | `number` |

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[hasClearType](DLayoutHorizontal.md#hascleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:669](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L669)

___

### hasClearTypeAfter

▸ **hasClearTypeAfter**(`children`, `index`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `DisplayObject`[] |
| `index` | `number` |

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[hasClearTypeAfter](DLayoutHorizontal.md#hascleartypeafter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L665)

___

### hasClearTypeBefore

▸ **hasClearTypeBefore**(`children`, `index`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | `DisplayObject`[] |
| `index` | `number` |

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[hasClearTypeBefore](DLayoutHorizontal.md#hascleartypebefore)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L661)

___

### hasDirty

▸ **hasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[hasDirty](DLayoutHorizontal.md#hasdirty)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[hasRefitableHeight](DLayoutHorizontal.md#hasrefitableheight)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[hasRefitableWidth](DLayoutHorizontal.md#hasrefitablewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1843)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[hide](DLayoutHorizontal.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1520)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[init](DLayoutHorizontal.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L131)

___

### initCells

▸ **initCells**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L44)

___

### initReflowable

▸ **initReflowable**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[initReflowable](DLayoutHorizontal.md#initreflowable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1124)

___

### isDirty

▸ **isDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isDirty](DLayoutHorizontal.md#isdirty)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[isEventTarget](DLayoutHorizontal.md#iseventtarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1965](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1965)

___

### isHidden

▸ **isHidden**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isHidden](DLayoutHorizontal.md#ishidden)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1530)

___

### isHierarchyDirty

▸ **isHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isHierarchyDirty](DLayoutHorizontal.md#ishierarchydirty)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[isRefitable](DLayoutHorizontal.md#isrefitable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1821](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1821)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[isShown](DLayoutHorizontal.md#isshown)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[listenerCount](DLayoutHorizontal.md#listenercount)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[listeners](DLayoutHorizontal.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newCell

▸ **newCell**(`columnIndex`, `column`, `columns`, `options?`): [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |
| `column` | `COLUMN` |
| `columns` | `COLUMN`[] |
| `options?` | `OPTIONS` |

#### Returns

[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L136)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[newPadding](DLayoutHorizontal.md#newpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1095](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1095)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[off](DLayoutHorizontal.md#off)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[on](DLayoutHorizontal.md#on)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[on](DLayoutHorizontal.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25532

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onBlur](DLayoutHorizontal.md#onblur)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onChildBlur](DLayoutHorizontal.md#onchildblur)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onChildFocus](DLayoutHorizontal.md#onchildfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1658)

___

### onChildrenChange

▸ **onChildrenChange**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onChildrenChange](DLayoutHorizontal.md#onchildrenchange)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onDblClick](DLayoutHorizontal.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2051](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2051)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onDown](DLayoutHorizontal.md#ondown)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onDownThis](DLayoutHorizontal.md#ondownthis)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1986](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1986)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onFocus](DLayoutHorizontal.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1665)

___

### onHierarchyDirty

▸ **onHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onHierarchyDirty](DLayoutHorizontal.md#onhierarchydirty)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onKeyDown](DLayoutHorizontal.md#onkeydown)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onKeyUp](DLayoutHorizontal.md#onkeyup)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onMove](DLayoutHorizontal.md#onmove)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onOut](DLayoutHorizontal.md#onout)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onOver](DLayoutHorizontal.md#onover)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onParentMove](DLayoutHorizontal.md#onparentmove)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onParentResize](DLayoutHorizontal.md#onparentresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1902](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1902)

___

### onRefit

▸ **onRefit**(): `void`

#### Returns

`void`

#### Overrides

[DLayoutHorizontal](DLayoutHorizontal.md).[onRefit](DLayoutHorizontal.md#onrefit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L81)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onReflow](DLayoutHorizontal.md#onreflow)

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

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[onResize](DLayoutHorizontal.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1219)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onScale](DLayoutHorizontal.md#onscale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1236)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onShortcut](DLayoutHorizontal.md#onshortcut)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onSkew](DLayoutHorizontal.md#onskew)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onStateChange](DLayoutHorizontal.md#onstatechange)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onUp](DLayoutHorizontal.md#onup)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onUpThis](DLayoutHorizontal.md#onupthis)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[onWheel](DLayoutHorizontal.md#onwheel)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[once](DLayoutHorizontal.md#once)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[once](DLayoutHorizontal.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25529

___

### reflow

▸ **reflow**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[reflow](DLayoutHorizontal.md#reflow)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[removeAllListeners](DLayoutHorizontal.md#removealllisteners)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[removeAllListeners](DLayoutHorizontal.md#removealllisteners)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[removeChild](DLayoutHorizontal.md#removechild)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[removeChildAt](DLayoutHorizontal.md#removechildat)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[removeChildren](DLayoutHorizontal.md#removechildren)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[removeListener](DLayoutHorizontal.md#removelistener)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[removeListener](DLayoutHorizontal.md#removelistener)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[render](DLayoutHorizontal.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:2060](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L2060)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[renderAdvanced](DLayoutHorizontal.md#renderadvanced)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8465

___

### resetFrozenCellPosition

▸ **resetFrozenCellPosition**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L98)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[resize](DLayoutHorizontal.md#resize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1165)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setChildIndex](DLayoutHorizontal.md#setchildindex)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setFocused](DLayoutHorizontal.md#setfocused)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setHeight](DLayoutHorizontal.md#setheight)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setParent](DLayoutHorizontal.md#setparent)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setTransform](DLayoutHorizontal.md#settransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setWidth](DLayoutHorizontal.md#setwidth)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setX](DLayoutHorizontal.md#setx)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[setY](DLayoutHorizontal.md#sety)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1308)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[show](DLayoutHorizontal.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1507](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1507)

___

### sortChildren

▸ **sortChildren**(): `void`

Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[sortChildren](DLayoutHorizontal.md#sortchildren)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[swapChildren](DLayoutHorizontal.md#swapchildren)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8380

___

### toCornerMaskColumn

▸ **toCornerMaskColumn**(`i0`, `i1`, `i2`, `n`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i0` | `number` |
| `i1` | `number` |
| `i2` | `number` |
| `n` | `number` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toCornerMaskColumn](DLayoutHorizontal.md#tocornermaskcolumn)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:770](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L770)

___

### toCornerMaskRow

▸ **toCornerMaskRow**(`i0`, `i1`, `i2`, `n`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i0` | `number` |
| `i1` | `number` |
| `i2` | `number` |
| `n` | `number` |

#### Returns

`number`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toCornerMaskRow](DLayoutHorizontal.md#tocornermaskrow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-layout.ts#L787)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[toCursor](DLayoutHorizontal.md#tocursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1099](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1099)

___

### toDirty

▸ **toDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toDirty](DLayoutHorizontal.md#todirty)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[toGlobal](DLayoutHorizontal.md#toglobal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8757

___

### toHasDirty

▸ **toHasDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toHasDirty](DLayoutHorizontal.md#tohasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1543](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1543)

___

### toHierarchyDirty

▸ **toHierarchyDirty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toHierarchyDirty](DLayoutHorizontal.md#tohierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1559](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1559)

___

### toIndexEnd

▸ **toIndexEnd**(`columns`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columns` | `COLUMN`[] |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L70)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[toLocal](DLayoutHorizontal.md#tolocal)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8768

___

### toParentHasDirty

▸ **toParentHasDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toParentHasDirty](DLayoutHorizontal.md#toparenthasdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1552)

___

### toParentHierarchyDirty

▸ **toParentHierarchyDirty**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toParentHierarchyDirty](DLayoutHorizontal.md#toparenthierarchydirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1569)

___

### toParentResized

▸ **toParentResized**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[toParentResized](DLayoutHorizontal.md#toparentresized)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:1880](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L1880)

___

### updateFrozenCellPosition

▸ **updateFrozenCellPosition**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L86)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[DLayoutHorizontal](DLayoutHorizontal.md).[updateTransform](DLayoutHorizontal.md#updatetransform)

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

[DLayoutHorizontal](DLayoutHorizontal.md).[mixin](DLayoutHorizontal.md#mixin)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9230
