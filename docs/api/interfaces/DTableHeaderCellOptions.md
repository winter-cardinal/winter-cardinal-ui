[Winter Cardinal UI - v0.407.0](../index.md) / DTableHeaderCellOptions

# Interface: DTableHeaderCellOptions\<ROW, THEME\>

[DImageBase](../classes/DImageBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `ROW` |
| `THEME` | extends [`DThemeTableHeaderCell`](DThemeTableHeaderCell.md) = [`DThemeTableHeaderCell`](DThemeTableHeaderCell.md) |

## Hierarchy

- [`DImageOptions`](DImageOptions.md)\<`string` \| ``null``, `THEME`\>

  ↳ **`DTableHeaderCellOptions`**

## Table of contents

### Properties

- [background](DTableHeaderCellOptions.md#background)
- [border](DTableHeaderCellOptions.md#border)
- [check](DTableHeaderCellOptions.md#check)
- [children](DTableHeaderCellOptions.md#children)
- [clear](DTableHeaderCellOptions.md#clear)
- [column](DTableHeaderCellOptions.md#column)
- [columnIndex](DTableHeaderCellOptions.md#columnindex)
- [corner](DTableHeaderCellOptions.md#corner)
- [cursor](DTableHeaderCellOptions.md#cursor)
- [header](DTableHeaderCellOptions.md#header)
- [height](DTableHeaderCellOptions.md#height)
- [image](DTableHeaderCellOptions.md#image)
- [images](DTableHeaderCellOptions.md#images)
- [interactive](DTableHeaderCellOptions.md#interactive)
- [mask](DTableHeaderCellOptions.md#mask)
- [name](DTableHeaderCellOptions.md#name)
- [on](DTableHeaderCellOptions.md#on)
- [outline](DTableHeaderCellOptions.md#outline)
- [padding](DTableHeaderCellOptions.md#padding)
- [parent](DTableHeaderCellOptions.md#parent)
- [renderable](DTableHeaderCellOptions.md#renderable)
- [shadow](DTableHeaderCellOptions.md#shadow)
- [shortcut](DTableHeaderCellOptions.md#shortcut)
- [shortcuts](DTableHeaderCellOptions.md#shortcuts)
- [state](DTableHeaderCellOptions.md#state)
- [text](DTableHeaderCellOptions.md#text)
- [theme](DTableHeaderCellOptions.md#theme)
- [title](DTableHeaderCellOptions.md#title)
- [visible](DTableHeaderCellOptions.md#visible)
- [weight](DTableHeaderCellOptions.md#weight)
- [width](DTableHeaderCellOptions.md#width)
- [x](DTableHeaderCellOptions.md#x)
- [y](DTableHeaderCellOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DImageOptions](DImageOptions.md).[background](DImageOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DImageOptions](DImageOptions.md).[border](DImageOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### check

• `Optional` **check**: [`DTableHeaderCellCheckOptions`](DTableHeaderCellCheckOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-header-cell.ts#L27)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DImageOptions](DImageOptions.md).[children](DImageOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DImageOptions](DImageOptions.md).[clear](DImageOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### column

• `Optional` **column**: [`DTableColumn`](DTableColumn.md)\<`ROW`, `unknown`, `unknown`, [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)\<`unknown`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-header-cell.ts#L25)

___

### columnIndex

• `Optional` **columnIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-header-cell.ts#L26)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DImageOptions](DImageOptions.md).[corner](DImageOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DImageOptions](DImageOptions.md).[cursor](DImageOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### header

• `Optional` **header**: [`DTableHeaderCellHeader`](DTableHeaderCellHeader.md)\<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-table-header-cell.ts#L24)

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

[DImageOptions](DImageOptions.md).[height](DImageOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DImageOptions](DImageOptions.md).[image](DImageOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L38)

___

### images

• `Optional` **images**: [`DImagePieceOptions`](DImagePieceOptions.md)[]

#### Inherited from

[DImageOptions](DImageOptions.md).[images](DImageOptions.md#images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L39)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DImageOptions](DImageOptions.md).[interactive](DImageOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DImageOptions](DImageOptions.md).[mask](DImageOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L37)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DImageOptions](DImageOptions.md).[name](DImageOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DImageBaseOnOptions`](DImageBaseOnOptions.md)\<``null`` \| `string`, `any`\>

Mappings of event names and event handlers.

#### Inherited from

[DImageOptions](DImageOptions.md).[on](DImageOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L40)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DImageOptions](DImageOptions.md).[outline](DImageOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DImageOptions](DImageOptions.md).[padding](DImageOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

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

[DImageOptions](DImageOptions.md).[parent](DImageOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:396](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L396)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DBaseOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DImageOptions](DImageOptions.md).[renderable](DImageOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DImageOptions](DImageOptions.md).[shadow](DImageOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DImageOptions](DImageOptions.md).[shortcut](DImageOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DImageOptions](DImageOptions.md).[shortcuts](DImageOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DImageOptions](DImageOptions.md).[state](DImageOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### text

• `Optional` **text**: [`DTextPieceOptions`](DTextPieceOptions.md)\<``null`` \| `string`\>

#### Inherited from

[DImageOptions](DImageOptions.md).[text](DImageOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L36)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DImageOptions](DImageOptions.md).[theme](DImageOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DImageOptions](DImageOptions.md).[title](DImageOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DImageOptions](DImageOptions.md).[visible](DImageOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DImageOptions](DImageOptions.md).[weight](DImageOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L484)

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

[DImageOptions](DImageOptions.md).[width](DImageOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L432)

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

[DImageOptions](DImageOptions.md).[x](DImageOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:412](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L412)

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

[DImageOptions](DImageOptions.md).[y](DImageOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
