[Winter Cardinal UI - v0.199.0](../index.md) / DPaginationOptions

# Interface: DPaginationOptions<THEME\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemePagination`](DThemePagination.md) |

## Hierarchy

- [`DLayoutHorizontalOptions`](DLayoutHorizontalOptions.md)<`THEME`\>

  ↳ **`DPaginationOptions`**

## Table of contents

### Properties

- [background](DPaginationOptions.md#background)
- [border](DPaginationOptions.md#border)
- [button](DPaginationOptions.md#button)
- [children](DPaginationOptions.md#children)
- [clear](DPaginationOptions.md#clear)
- [column](DPaginationOptions.md#column)
- [corner](DPaginationOptions.md#corner)
- [cursor](DPaginationOptions.md#cursor)
- [direction](DPaginationOptions.md#direction)
- [height](DPaginationOptions.md#height)
- [interactive](DPaginationOptions.md#interactive)
- [margin](DPaginationOptions.md#margin)
- [name](DPaginationOptions.md#name)
- [on](DPaginationOptions.md#on)
- [outline](DPaginationOptions.md#outline)
- [padding](DPaginationOptions.md#padding)
- [page](DPaginationOptions.md#page)
- [parent](DPaginationOptions.md#parent)
- [reverse](DPaginationOptions.md#reverse)
- [row](DPaginationOptions.md#row)
- [selected](DPaginationOptions.md#selected)
- [shadow](DPaginationOptions.md#shadow)
- [shortcut](DPaginationOptions.md#shortcut)
- [shortcuts](DPaginationOptions.md#shortcuts)
- [size](DPaginationOptions.md#size)
- [state](DPaginationOptions.md#state)
- [theme](DPaginationOptions.md#theme)
- [title](DPaginationOptions.md#title)
- [total](DPaginationOptions.md#total)
- [value](DPaginationOptions.md#value)
- [visible](DPaginationOptions.md#visible)
- [weight](DPaginationOptions.md#weight)
- [width](DPaginationOptions.md#width)
- [x](DPaginationOptions.md#x)
- [y](DPaginationOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[background](DLayoutHorizontalOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[border](DLayoutHorizontalOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### button

• `Optional` **button**: [`DPaginationButtonOptions`](DPaginationButtonOptions.md)

[DPagination](../classes/DPagination.md) button options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L86)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[children](DLayoutHorizontalOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[clear](DLayoutHorizontalOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### column

• `Optional` **column**: `number`

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[column](DLayoutHorizontalOptions.md#column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-layout.ts#L34)

___

### corner

• `Optional` **corner**: `number` \| [`DLayoutCornerOptions`](DLayoutCornerOptions.md)

A corner options.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[corner](DLayoutHorizontalOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-layout.ts#L32)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[cursor](DLayoutHorizontalOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### direction

• `Optional` **direction**: ``"HORIZONTAL"`` \| ``"VERTICAL"`` \| [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[direction](DLayoutHorizontalOptions.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-layout.ts#L35)

___

### height

• `Optional` **height**: [`DCoordinateSize`](../index.md#dcoordinatesize)

One of the followings:
* A height
* A size keyword
* A size expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a hight ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a hight ([DScalar](DScalar.md))

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[height](DLayoutHorizontalOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[interactive](DLayoutHorizontalOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### margin

• `Optional` **margin**: `number` \| [`DLayoutMarginOptions`](DLayoutMarginOptions.md)

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[margin](DLayoutHorizontalOptions.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-layout.ts#L31)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[name](DLayoutHorizontalOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[on](DLayoutHorizontalOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[outline](DLayoutHorizontalOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[padding](DLayoutHorizontalOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

___

### page

• `Optional` **page**: [`DPaginationPageOptions`](DPaginationPageOptions.md)<[`DThemePaginationPage`](DThemePaginationPage.md)\>

[DPagination](../classes/DPagination.md) page options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L91)

___

### parent

• `Optional` **parent**: `Container`

A parent.

In the case of UI classes which pop up (e.g., [DDialog](../classes/DDialog.md) and [DMenu](../classes/DMenu.md)),
if multiple application instances are there, better to set
this to an `application.stage` so that they pick a right application.
By default, they assume the last created application is
the one they belong to at the time when they are created.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[parent](DLayoutHorizontalOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### reverse

• `Optional` **reverse**: `boolean`

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[reverse](DLayoutHorizontalOptions.md#reverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-layout.ts#L36)

___

### row

• `Optional` **row**: `number`

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[row](DLayoutHorizontalOptions.md#row)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-layout.ts#L33)

___

### selected

• `Optional` **selected**: `number`

An index number of a selected page.

**`deprecated`** in favor of [value](DPaginationOptions.md#value).

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L69)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[shadow](DLayoutHorizontalOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[shortcut](DLayoutHorizontalOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[shortcuts](DLayoutHorizontalOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### size

• `Optional` **size**: `number`

A total number of pages.

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L74)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[state](DLayoutHorizontalOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[theme](DLayoutHorizontalOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[title](DLayoutHorizontalOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### total

• `Optional` **total**: `number`

A total number of pages.

**`deprecated`** in favor of [size](DPaginationOptions.md#size);

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L81)

___

### value

• `Optional` **value**: `number`

An index number of a selected page.

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L62)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[visible](DLayoutHorizontalOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[weight](DLayoutHorizontalOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

___

### width

• `Optional` **width**: [`DCoordinateSize`](../index.md#dcoordinatesize)

One of the followings:
* A width
* A size keyword
* A size expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a width ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a width ([DScalar](DScalar.md))

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[width](DLayoutHorizontalOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

___

### x

• `Optional` **x**: [`DCoordinatePosition`](../index.md#dcoordinateposition)

One of the followings:
* A X position
* A position keyword
* A position expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a X position ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a X position ([DScalar](DScalar.md))

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[x](DLayoutHorizontalOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

___

### y

• `Optional` **y**: [`DCoordinatePosition`](../index.md#dcoordinateposition)

One of the followings:
* A Y position
* A position keyword
* A position expresion (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a Y position ([DScalarFunction](../index.md#dscalarfunction))
* An object returning a Y position ([DScalar](DScalar.md))

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[y](DLayoutHorizontalOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
