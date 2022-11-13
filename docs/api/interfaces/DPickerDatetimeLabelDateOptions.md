[Winter Cardinal UI - v0.227.0](../index.md) / DPickerDatetimeLabelDateOptions

# Interface: DPickerDatetimeLabelDateOptions<VALUE, THEME\>

[DTextBase](../classes/DTextBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemePickerDatetimeLabelDate`](DThemePickerDatetimeLabelDate.md)<`VALUE`\> = [`DThemePickerDatetimeLabelDate`](DThemePickerDatetimeLabelDate.md)<`VALUE`\> |

## Hierarchy

- [`DTextOptions`](DTextOptions.md)<`VALUE`, `THEME`\>

  ↳ **`DPickerDatetimeLabelDateOptions`**

## Table of contents

### Properties

- [background](DPickerDatetimeLabelDateOptions.md#background)
- [border](DPickerDatetimeLabelDateOptions.md#border)
- [children](DPickerDatetimeLabelDateOptions.md#children)
- [clear](DPickerDatetimeLabelDateOptions.md#clear)
- [corner](DPickerDatetimeLabelDateOptions.md#corner)
- [cursor](DPickerDatetimeLabelDateOptions.md#cursor)
- [height](DPickerDatetimeLabelDateOptions.md#height)
- [interactive](DPickerDatetimeLabelDateOptions.md#interactive)
- [mask](DPickerDatetimeLabelDateOptions.md#mask)
- [name](DPickerDatetimeLabelDateOptions.md#name)
- [on](DPickerDatetimeLabelDateOptions.md#on)
- [outline](DPickerDatetimeLabelDateOptions.md#outline)
- [padding](DPickerDatetimeLabelDateOptions.md#padding)
- [parent](DPickerDatetimeLabelDateOptions.md#parent)
- [shadow](DPickerDatetimeLabelDateOptions.md#shadow)
- [shortcut](DPickerDatetimeLabelDateOptions.md#shortcut)
- [shortcuts](DPickerDatetimeLabelDateOptions.md#shortcuts)
- [state](DPickerDatetimeLabelDateOptions.md#state)
- [text](DPickerDatetimeLabelDateOptions.md#text)
- [theme](DPickerDatetimeLabelDateOptions.md#theme)
- [title](DPickerDatetimeLabelDateOptions.md#title)
- [visible](DPickerDatetimeLabelDateOptions.md#visible)
- [weight](DPickerDatetimeLabelDateOptions.md#weight)
- [width](DPickerDatetimeLabelDateOptions.md#width)
- [x](DPickerDatetimeLabelDateOptions.md#x)
- [y](DPickerDatetimeLabelDateOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DTextOptions](DTextOptions.md).[background](DTextOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DTextOptions](DTextOptions.md).[border](DTextOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DTextOptions](DTextOptions.md).[children](DTextOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L374)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTextOptions](DTextOptions.md).[clear](DTextOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DTextOptions](DTextOptions.md).[corner](DTextOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:437](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L437)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DTextOptions](DTextOptions.md).[cursor](DTextOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:477](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L477)

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

[DTextOptions](DTextOptions.md).[height](DTextOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DTextOptions](DTextOptions.md).[interactive](DTextOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DTextOptions](DTextOptions.md).[mask](DTextOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DTextOptions](DTextOptions.md).[name](DTextOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L377)

___

### on

• `Optional` **on**: [`DTextBaseOnOptions`](DTextBaseOnOptions.md)<`VALUE`, `any`\>

Mappings of event names and event handlers.

#### Inherited from

[DTextOptions](DTextOptions.md).[on](DTextOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L63)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DTextOptions](DTextOptions.md).[outline](DTextOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DTextOptions](DTextOptions.md).[padding](DTextOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:434](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L434)

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

[DTextOptions](DTextOptions.md).[parent](DTextOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L371)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DTextOptions](DTextOptions.md).[shadow](DTextOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DTextOptions](DTextOptions.md).[shortcut](DTextOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:456](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L456)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DTextOptions](DTextOptions.md).[shortcuts](DTextOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DTextOptions](DTextOptions.md).[state](DTextOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L428)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<`VALUE`\>

#### Inherited from

[DTextOptions](DTextOptions.md).[text](DTextOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DTextOptions](DTextOptions.md).[theme](DTextOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L440)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DTextOptions](DTextOptions.md).[title](DTextOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L453)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DTextOptions](DTextOptions.md).[visible](DTextOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:425](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L425)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTextOptions](DTextOptions.md).[weight](DTextOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

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

[DTextOptions](DTextOptions.md).[width](DTextOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:407](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L407)

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

[DTextOptions](DTextOptions.md).[x](DTextOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:387](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L387)

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

[DTextOptions](DTextOptions.md).[y](DTextOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L397)
