[Winter Cardinal UI - v0.160.0](../index.md) / DTableCategoryOptions

# Interface: DTableCategoryOptions<THEME\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeTableCategory`](DThemeTableCategory.md) = [`DThemeTableCategory`](DThemeTableCategory.md) |

## Hierarchy

- [`DTableRowOptions`](DTableRowOptions.md)<`unknown`, [`DTableCategoryColumn`](DTableCategoryColumn.md), `THEME`\>

  ↳ **`DTableCategoryOptions`**

## Table of contents

### Properties

- [background](DTableCategoryOptions.md#background)
- [border](DTableCategoryOptions.md#border)
- [cell](DTableCategoryOptions.md#cell)
- [children](DTableCategoryOptions.md#children)
- [clear](DTableCategoryOptions.md#clear)
- [column](DTableCategoryOptions.md#column)
- [columns](DTableCategoryOptions.md#columns)
- [corner](DTableCategoryOptions.md#corner)
- [cursor](DTableCategoryOptions.md#cursor)
- [direction](DTableCategoryOptions.md#direction)
- [frozen](DTableCategoryOptions.md#frozen)
- [height](DTableCategoryOptions.md#height)
- [interactive](DTableCategoryOptions.md#interactive)
- [margin](DTableCategoryOptions.md#margin)
- [name](DTableCategoryOptions.md#name)
- [offset](DTableCategoryOptions.md#offset)
- [on](DTableCategoryOptions.md#on)
- [outline](DTableCategoryOptions.md#outline)
- [padding](DTableCategoryOptions.md#padding)
- [parent](DTableCategoryOptions.md#parent)
- [reverse](DTableCategoryOptions.md#reverse)
- [row](DTableCategoryOptions.md#row)
- [shadow](DTableCategoryOptions.md#shadow)
- [shortcut](DTableCategoryOptions.md#shortcut)
- [shortcuts](DTableCategoryOptions.md#shortcuts)
- [state](DTableCategoryOptions.md#state)
- [theme](DTableCategoryOptions.md#theme)
- [title](DTableCategoryOptions.md#title)
- [visible](DTableCategoryOptions.md#visible)
- [weight](DTableCategoryOptions.md#weight)
- [width](DTableCategoryOptions.md#width)
- [x](DTableCategoryOptions.md#x)
- [y](DTableCategoryOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[background](DTableRowOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[border](DTableRowOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### cell

• `Optional` **cell**: [`DTableCategoryCellOptions`](DTableCategoryCellOptions.md)<[`DThemeTableCategoryCell`](DThemeTableCategoryCell.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-table-category.ts#L20)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[children](DTableRowOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[clear](DTableRowOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### column

• `Optional` **column**: `number`

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[column](DTableRowOptions.md#column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-layout.ts#L34)

___

### columns

• `Optional` **columns**: [`DTableCategoryColumn`](DTableCategoryColumn.md)[]

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[columns](DTableRowOptions.md#columns)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L17)

___

### corner

• `Optional` **corner**: `number` \| [`DLayoutCornerOptions`](DLayoutCornerOptions.md)

A corner options.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[corner](DTableRowOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-layout.ts#L32)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[cursor](DTableRowOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### direction

• `Optional` **direction**: ``"HORIZONTAL"`` \| ``"VERTICAL"`` \| [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[direction](DTableRowOptions.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-layout.ts#L35)

___

### frozen

• `Optional` **frozen**: `number`

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[frozen](DTableRowOptions.md#frozen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-row.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-table-row.ts#L18)

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

[DTableRowOptions](DTableRowOptions.md).[height](DTableRowOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[interactive](DTableRowOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### margin

• `Optional` **margin**: `number` \| [`DLayoutMarginOptions`](DLayoutMarginOptions.md)

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[margin](DTableRowOptions.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-layout.ts#L31)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[name](DTableRowOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### offset

• `Optional` **offset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-table-category.ts#L19)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[on](DTableRowOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[outline](DTableRowOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[padding](DTableRowOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DTableRowOptions](DTableRowOptions.md).[parent](DTableRowOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### reverse

• `Optional` **reverse**: `boolean`

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[reverse](DTableRowOptions.md#reverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-layout.ts#L36)

___

### row

• `Optional` **row**: `number`

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[row](DTableRowOptions.md#row)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-layout.ts#L33)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[shadow](DTableRowOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[shortcut](DTableRowOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[shortcuts](DTableRowOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[state](DTableRowOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[theme](DTableRowOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[title](DTableRowOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[visible](DTableRowOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTableRowOptions](DTableRowOptions.md).[weight](DTableRowOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

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

[DTableRowOptions](DTableRowOptions.md).[width](DTableRowOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[DTableRowOptions](DTableRowOptions.md).[x](DTableRowOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[DTableRowOptions](DTableRowOptions.md).[y](DTableRowOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
