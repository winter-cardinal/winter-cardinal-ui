[Winter Cardinal UI - v0.414.0](../index.md) / DTableBodyCellColorOptions

# Interface: DTableBodyCellColorOptions\<ROW, THEME\>

[DButtonColor](../classes/DButtonColor.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellColor`](DThemeTableBodyCellColor.md) = [`DThemeTableBodyCellColor`](DThemeTableBodyCellColor.md) |

## Hierarchy

- [`DButtonColorOptions`](DButtonColorOptions.md)\<`THEME`\>

  ↳ **`DTableBodyCellColorOptions`**

## Table of contents

### Properties

- [background](DTableBodyCellColorOptions.md#background)
- [border](DTableBodyCellColorOptions.md#border)
- [children](DTableBodyCellColorOptions.md#children)
- [clear](DTableBodyCellColorOptions.md#clear)
- [corner](DTableBodyCellColorOptions.md#corner)
- [cursor](DTableBodyCellColorOptions.md#cursor)
- [dialog](DTableBodyCellColorOptions.md#dialog)
- [group](DTableBodyCellColorOptions.md#group)
- [height](DTableBodyCellColorOptions.md#height)
- [image](DTableBodyCellColorOptions.md#image)
- [images](DTableBodyCellColorOptions.md#images)
- [interactive](DTableBodyCellColorOptions.md#interactive)
- [mask](DTableBodyCellColorOptions.md#mask)
- [name](DTableBodyCellColorOptions.md#name)
- [on](DTableBodyCellColorOptions.md#on)
- [outline](DTableBodyCellColorOptions.md#outline)
- [padding](DTableBodyCellColorOptions.md#padding)
- [parent](DTableBodyCellColorOptions.md#parent)
- [renderable](DTableBodyCellColorOptions.md#renderable)
- [shadow](DTableBodyCellColorOptions.md#shadow)
- [shortcut](DTableBodyCellColorOptions.md#shortcut)
- [shortcuts](DTableBodyCellColorOptions.md#shortcuts)
- [state](DTableBodyCellColorOptions.md#state)
- [text](DTableBodyCellColorOptions.md#text)
- [theme](DTableBodyCellColorOptions.md#theme)
- [title](DTableBodyCellColorOptions.md#title)
- [toggle](DTableBodyCellColorOptions.md#toggle)
- [visible](DTableBodyCellColorOptions.md#visible)
- [weight](DTableBodyCellColorOptions.md#weight)
- [when](DTableBodyCellColorOptions.md#when)
- [width](DTableBodyCellColorOptions.md#width)
- [x](DTableBodyCellColorOptions.md#x)
- [y](DTableBodyCellColorOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[background](DButtonColorOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[border](DButtonColorOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[children](DButtonColorOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[clear](DButtonColorOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[corner](DButtonColorOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[cursor](DButtonColorOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### dialog

• `Optional` **dialog**: [`DDialogColorOptions`](DDialogColorOptions.md)\<[`DThemeDialogColor`](DThemeDialogColor.md)\>

A dialog to pick a color.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[dialog](DButtonColorOptions.md#dialog)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L44)

___

### group

• `Optional` **group**: [`DButtonGroup`](../classes/DButtonGroup.md)\<[`DButtonBase`](../classes/DButtonBase.md)\<`any`, `any`, `any`\>, [`DButtonGroupOptions`](DButtonGroupOptions.md)\<[`DButtonBase`](../classes/DButtonBase.md)\<`any`, `any`, `any`\>, `any`\>\>

A button group.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[group](DButtonColorOptions.md#group)

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

[DButtonColorOptions](DButtonColorOptions.md).[height](DButtonColorOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[image](DButtonColorOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L38)

___

### images

• `Optional` **images**: [`DImagePieceOptions`](DImagePieceOptions.md)[]

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[images](DButtonColorOptions.md#images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L39)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[interactive](DButtonColorOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[mask](DButtonColorOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L37)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[name](DButtonColorOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DButtonColorOnOptions`](DButtonColorOnOptions.md)\<`any`\>

Mappings of event names and handlers.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[on](DButtonColorOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-color.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-button-color.ts#L46)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[outline](DButtonColorOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[padding](DButtonColorOptions.md#padding)

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

[DButtonColorOptions](DButtonColorOptions.md).[parent](DButtonColorOptions.md#parent)

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

[DButtonColorOptions](DButtonColorOptions.md).[renderable](DButtonColorOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[shadow](DButtonColorOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[shortcut](DButtonColorOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[shortcuts](DButtonColorOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[state](DButtonColorOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### text

• `Optional` **text**: [`DTextPieceOptions`](DTextPieceOptions.md)\<[`DColorAndAlpha`](DColorAndAlpha.md)\>

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[text](DButtonColorOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L36)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[theme](DButtonColorOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[title](DButtonColorOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### toggle

• `Optional` **toggle**: `boolean`

True to turn a toggle mode on.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[toggle](DButtonColorOptions.md#toggle)

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

[DButtonColorOptions](DButtonColorOptions.md).[visible](DButtonColorOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[weight](DButtonColorOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L484)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

An option when to activate a button.

#### Inherited from

[DButtonColorOptions](DButtonColorOptions.md).[when](DButtonColorOptions.md#when)

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

[DButtonColorOptions](DButtonColorOptions.md).[width](DButtonColorOptions.md#width)

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

[DButtonColorOptions](DButtonColorOptions.md).[x](DButtonColorOptions.md#x)

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

[DButtonColorOptions](DButtonColorOptions.md).[y](DButtonColorOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
