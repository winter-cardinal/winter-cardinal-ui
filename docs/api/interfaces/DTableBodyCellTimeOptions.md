[Winter Cardinal UI - v0.414.0](../index.md) / DTableBodyCellTimeOptions

# Interface: DTableBodyCellTimeOptions\<ROW, THEME\>

[DButtonTime](../classes/DButtonTime.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellTime`](DThemeTableBodyCellTime.md) = [`DThemeTableBodyCellTime`](DThemeTableBodyCellTime.md) |

## Hierarchy

- [`DButtonTimeOptions`](DButtonTimeOptions.md)\<`THEME`\>

  ↳ **`DTableBodyCellTimeOptions`**

## Table of contents

### Properties

- [background](DTableBodyCellTimeOptions.md#background)
- [border](DTableBodyCellTimeOptions.md#border)
- [children](DTableBodyCellTimeOptions.md#children)
- [clear](DTableBodyCellTimeOptions.md#clear)
- [corner](DTableBodyCellTimeOptions.md#corner)
- [cursor](DTableBodyCellTimeOptions.md#cursor)
- [dialog](DTableBodyCellTimeOptions.md#dialog)
- [group](DTableBodyCellTimeOptions.md#group)
- [height](DTableBodyCellTimeOptions.md#height)
- [image](DTableBodyCellTimeOptions.md#image)
- [images](DTableBodyCellTimeOptions.md#images)
- [interactive](DTableBodyCellTimeOptions.md#interactive)
- [mask](DTableBodyCellTimeOptions.md#mask)
- [name](DTableBodyCellTimeOptions.md#name)
- [on](DTableBodyCellTimeOptions.md#on)
- [outline](DTableBodyCellTimeOptions.md#outline)
- [padding](DTableBodyCellTimeOptions.md#padding)
- [parent](DTableBodyCellTimeOptions.md#parent)
- [renderable](DTableBodyCellTimeOptions.md#renderable)
- [shadow](DTableBodyCellTimeOptions.md#shadow)
- [shortcut](DTableBodyCellTimeOptions.md#shortcut)
- [shortcuts](DTableBodyCellTimeOptions.md#shortcuts)
- [state](DTableBodyCellTimeOptions.md#state)
- [text](DTableBodyCellTimeOptions.md#text)
- [theme](DTableBodyCellTimeOptions.md#theme)
- [title](DTableBodyCellTimeOptions.md#title)
- [toggle](DTableBodyCellTimeOptions.md#toggle)
- [visible](DTableBodyCellTimeOptions.md#visible)
- [weight](DTableBodyCellTimeOptions.md#weight)
- [when](DTableBodyCellTimeOptions.md#when)
- [width](DTableBodyCellTimeOptions.md#width)
- [x](DTableBodyCellTimeOptions.md#x)
- [y](DTableBodyCellTimeOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[background](DButtonTimeOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[border](DButtonTimeOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[children](DButtonTimeOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[clear](DButtonTimeOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[corner](DButtonTimeOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[cursor](DButtonTimeOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### dialog

• `Optional` **dialog**: [`DDialogTimeOptions`](DDialogTimeOptions.md)\<[`DThemeDialogTime`](DThemeDialogTime.md)\>

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[dialog](DButtonTimeOptions.md#dialog)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-time.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-time.ts#L39)

___

### group

• `Optional` **group**: [`DButtonGroup`](../classes/DButtonGroup.md)\<[`DButtonBase`](../classes/DButtonBase.md)\<`any`, `any`, `any`\>, [`DButtonGroupOptions`](DButtonGroupOptions.md)\<[`DButtonBase`](../classes/DButtonBase.md)\<`any`, `any`, `any`\>, `any`\>\>

A button group.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[group](DButtonTimeOptions.md#group)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L73)

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

[DButtonTimeOptions](DButtonTimeOptions.md).[height](DButtonTimeOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[image](DButtonTimeOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L38)

___

### images

• `Optional` **images**: [`DImagePieceOptions`](DImagePieceOptions.md)[]

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[images](DButtonTimeOptions.md#images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L39)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[interactive](DButtonTimeOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[mask](DButtonTimeOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L37)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[name](DButtonTimeOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DButtonTimeOnOptions`](DButtonTimeOnOptions.md)\<`any`\>

Mappings of event names and handlers.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[on](DButtonTimeOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-time.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-time.ts#L40)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[outline](DButtonTimeOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[padding](DButtonTimeOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

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

[DButtonTimeOptions](DButtonTimeOptions.md).[parent](DButtonTimeOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:396](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L396)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DBaseOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[renderable](DButtonTimeOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[shadow](DButtonTimeOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[shortcut](DButtonTimeOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[shortcuts](DButtonTimeOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[state](DButtonTimeOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### text

• `Optional` **text**: [`DTextPieceOptions`](DTextPieceOptions.md)\<`Date`\>

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[text](DButtonTimeOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L36)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[theme](DButtonTimeOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[title](DButtonTimeOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### toggle

• `Optional` **toggle**: `boolean`

True to turn a toggle mode on.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[toggle](DButtonTimeOptions.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L68)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[visible](DButtonTimeOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[weight](DButtonTimeOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L484)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

An option when to activate a button.

#### Inherited from

[DButtonTimeOptions](DButtonTimeOptions.md).[when](DButtonTimeOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L78)

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

[DButtonTimeOptions](DButtonTimeOptions.md).[width](DButtonTimeOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L432)

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

[DButtonTimeOptions](DButtonTimeOptions.md).[x](DButtonTimeOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:412](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L412)

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

[DButtonTimeOptions](DButtonTimeOptions.md).[y](DButtonTimeOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
