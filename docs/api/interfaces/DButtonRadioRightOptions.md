[Winter Cardinal UI - v0.310.1](../index.md) / DButtonRadioRightOptions

# Interface: DButtonRadioRightOptions<VALUE, THEME\>

[DButtonBase](../classes/DButtonBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeButtonRadioRight`](DThemeButtonRadioRight.md)<`VALUE`\> = [`DThemeButtonRadioRight`](DThemeButtonRadioRight.md)<`VALUE`\> |

## Hierarchy

- [`DButtonRadioOptions`](DButtonRadioOptions.md)<`VALUE`, `THEME`\>

  ↳ **`DButtonRadioRightOptions`**

## Table of contents

### Properties

- [background](DButtonRadioRightOptions.md#background)
- [border](DButtonRadioRightOptions.md#border)
- [children](DButtonRadioRightOptions.md#children)
- [clear](DButtonRadioRightOptions.md#clear)
- [corner](DButtonRadioRightOptions.md#corner)
- [cursor](DButtonRadioRightOptions.md#cursor)
- [group](DButtonRadioRightOptions.md#group)
- [height](DButtonRadioRightOptions.md#height)
- [image](DButtonRadioRightOptions.md#image)
- [interactive](DButtonRadioRightOptions.md#interactive)
- [mask](DButtonRadioRightOptions.md#mask)
- [name](DButtonRadioRightOptions.md#name)
- [on](DButtonRadioRightOptions.md#on)
- [outline](DButtonRadioRightOptions.md#outline)
- [padding](DButtonRadioRightOptions.md#padding)
- [parent](DButtonRadioRightOptions.md#parent)
- [renderable](DButtonRadioRightOptions.md#renderable)
- [shadow](DButtonRadioRightOptions.md#shadow)
- [shortcut](DButtonRadioRightOptions.md#shortcut)
- [shortcuts](DButtonRadioRightOptions.md#shortcuts)
- [state](DButtonRadioRightOptions.md#state)
- [text](DButtonRadioRightOptions.md#text)
- [theme](DButtonRadioRightOptions.md#theme)
- [title](DButtonRadioRightOptions.md#title)
- [toggle](DButtonRadioRightOptions.md#toggle)
- [visible](DButtonRadioRightOptions.md#visible)
- [weight](DButtonRadioRightOptions.md#weight)
- [when](DButtonRadioRightOptions.md#when)
- [width](DButtonRadioRightOptions.md#width)
- [x](DButtonRadioRightOptions.md#x)
- [y](DButtonRadioRightOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[background](DButtonRadioOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L497)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[border](DButtonRadioOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L500)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[children](DButtonRadioOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L400)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[clear](DButtonRadioOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:509](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L509)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[corner](DButtonRadioOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L472)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[cursor](DButtonRadioOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L512)

___

### group

• `Optional` **group**: [`DButtonGroup`](../classes/DButtonGroup.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, [`DButtonGroupOptions`](DButtonGroupOptions.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, `any`\>\>

A button group.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[group](DButtonRadioOptions.md#group)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L73)

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

[DButtonRadioOptions](DButtonRadioOptions.md).[height](DButtonRadioOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L443)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[image](DButtonRadioOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[interactive](DButtonRadioOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:466](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L466)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[mask](DButtonRadioOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[name](DButtonRadioOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### on

• `Optional` **on**: [`DButtonBaseOnOptions`](DButtonBaseOnOptions.md)<`VALUE`, `any`\>

Mappings of event names and handlers.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[on](DButtonRadioOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L83)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[outline](DButtonRadioOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L503)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[padding](DButtonRadioOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:469](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L469)

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

[DButtonRadioOptions](DButtonRadioOptions.md).[parent](DButtonRadioOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L397)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DButtonRadioRightOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[renderable](DButtonRadioOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[shadow](DButtonRadioOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:506](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L506)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[shortcut](DButtonRadioOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L491)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[shortcuts](DButtonRadioOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:494](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L494)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[state](DButtonRadioOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<`VALUE`\>

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[text](DButtonRadioOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[theme](DButtonRadioOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L475)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[title](DButtonRadioOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L488)

___

### toggle

• `Optional` **toggle**: `boolean`

True to turn a toggle mode on.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[toggle](DButtonRadioOptions.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L68)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[visible](DButtonRadioOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[weight](DButtonRadioOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:485](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L485)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen-1)

An option when to activate a button.

#### Inherited from

[DButtonRadioOptions](DButtonRadioOptions.md).[when](DButtonRadioOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L78)

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

[DButtonRadioOptions](DButtonRadioOptions.md).[width](DButtonRadioOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:433](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L433)

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

[DButtonRadioOptions](DButtonRadioOptions.md).[x](DButtonRadioOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:413](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L413)

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

[DButtonRadioOptions](DButtonRadioOptions.md).[y](DButtonRadioOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L423)
