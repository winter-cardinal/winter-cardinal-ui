[Winter Cardinal UI - v0.374.0](../index.md) / DInputIntegerAndLabelOptions

# Interface: DInputIntegerAndLabelOptions\<THEME\>

[DBase](../classes/DBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeInputAndLabel`](DThemeInputAndLabel.md) = [`DThemeInputAndLabel`](DThemeInputAndLabel.md) |

## Hierarchy

- [`DInputAndLabelOptions`](DInputAndLabelOptions.md)\<[`DInputIntegerOptions`](DInputIntegerOptions.md), `THEME`\>

  ↳ **`DInputIntegerAndLabelOptions`**

## Table of contents

### Properties

- [background](DInputIntegerAndLabelOptions.md#background)
- [border](DInputIntegerAndLabelOptions.md#border)
- [children](DInputIntegerAndLabelOptions.md#children)
- [clear](DInputIntegerAndLabelOptions.md#clear)
- [column](DInputIntegerAndLabelOptions.md#column)
- [corner](DInputIntegerAndLabelOptions.md#corner)
- [cursor](DInputIntegerAndLabelOptions.md#cursor)
- [direction](DInputIntegerAndLabelOptions.md#direction)
- [height](DInputIntegerAndLabelOptions.md#height)
- [input](DInputIntegerAndLabelOptions.md#input)
- [interactive](DInputIntegerAndLabelOptions.md#interactive)
- [label](DInputIntegerAndLabelOptions.md#label)
- [margin](DInputIntegerAndLabelOptions.md#margin)
- [name](DInputIntegerAndLabelOptions.md#name)
- [on](DInputIntegerAndLabelOptions.md#on)
- [outline](DInputIntegerAndLabelOptions.md#outline)
- [padding](DInputIntegerAndLabelOptions.md#padding)
- [parent](DInputIntegerAndLabelOptions.md#parent)
- [renderable](DInputIntegerAndLabelOptions.md#renderable)
- [reverse](DInputIntegerAndLabelOptions.md#reverse)
- [row](DInputIntegerAndLabelOptions.md#row)
- [shadow](DInputIntegerAndLabelOptions.md#shadow)
- [shortcut](DInputIntegerAndLabelOptions.md#shortcut)
- [shortcuts](DInputIntegerAndLabelOptions.md#shortcuts)
- [space](DInputIntegerAndLabelOptions.md#space)
- [state](DInputIntegerAndLabelOptions.md#state)
- [theme](DInputIntegerAndLabelOptions.md#theme)
- [title](DInputIntegerAndLabelOptions.md#title)
- [visible](DInputIntegerAndLabelOptions.md#visible)
- [weight](DInputIntegerAndLabelOptions.md#weight)
- [width](DInputIntegerAndLabelOptions.md#width)
- [x](DInputIntegerAndLabelOptions.md#x)
- [y](DInputIntegerAndLabelOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[background](DInputAndLabelOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L497)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[border](DInputAndLabelOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L500)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[children](DInputAndLabelOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L400)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[clear](DInputAndLabelOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:509](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L509)

___

### column

• `Optional` **column**: `number`

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[column](DInputAndLabelOptions.md#column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-layout.ts#L34)

___

### corner

• `Optional` **corner**: `number` \| [`DLayoutCornerOptions`](DLayoutCornerOptions.md)

A corner options.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[corner](DInputAndLabelOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-layout.ts#L32)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[cursor](DInputAndLabelOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L512)

___

### direction

• `Optional` **direction**: ``"VERTICAL"`` \| ``"HORIZONTAL"`` \| [`DLayoutDirection`](../index.md#dlayoutdirection-1)

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[direction](DInputAndLabelOptions.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-layout.ts#L35)

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

[DInputAndLabelOptions](DInputAndLabelOptions.md).[height](DInputAndLabelOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L443)

___

### input

• `Optional` **input**: [`DInputIntegerOptions`](DInputIntegerOptions.md)\<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[input](DInputAndLabelOptions.md#input)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-and-label.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-input-and-label.ts#L24)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[interactive](DInputAndLabelOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:466](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L466)

___

### label

• `Optional` **label**: [`DInputLabelOptions`](DInputLabelOptions.md)\<`unknown`, [`DThemeText`](DThemeText.md)\<`unknown`\>\>

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[label](DInputAndLabelOptions.md#label)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-and-label.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-input-and-label.ts#L25)

___

### margin

• `Optional` **margin**: `number` \| [`DLayoutMarginOptions`](DLayoutMarginOptions.md)

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[margin](DInputAndLabelOptions.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-layout.ts#L31)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[name](DInputAndLabelOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)\<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[on](DInputAndLabelOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:480](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L480)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[outline](DInputAndLabelOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L503)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[padding](DInputAndLabelOptions.md#padding)

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

[DInputAndLabelOptions](DInputAndLabelOptions.md).[parent](DInputAndLabelOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L397)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DBaseOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[renderable](DInputAndLabelOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### reverse

• `Optional` **reverse**: `boolean`

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[reverse](DInputAndLabelOptions.md#reverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-layout.ts#L36)

___

### row

• `Optional` **row**: `number`

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[row](DInputAndLabelOptions.md#row)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-layout.ts#L33)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[shadow](DInputAndLabelOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:506](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L506)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[shortcut](DInputAndLabelOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L491)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[shortcuts](DInputAndLabelOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:494](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L494)

___

### space

• `Optional` **space**: [`DLayoutSpaceOptions`](DLayoutSpaceOptions.md)\<[`DThemeLayoutSpace`](DThemeLayoutSpace.md)\>

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[space](DInputAndLabelOptions.md#space)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-and-label.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-input-and-label.ts#L26)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[state](DInputAndLabelOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[theme](DInputAndLabelOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L475)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[title](DInputAndLabelOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L488)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[visible](DInputAndLabelOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[weight](DInputAndLabelOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:485](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L485)

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

[DInputAndLabelOptions](DInputAndLabelOptions.md).[width](DInputAndLabelOptions.md#width)

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

[DInputAndLabelOptions](DInputAndLabelOptions.md).[x](DInputAndLabelOptions.md#x)

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

[DInputAndLabelOptions](DInputAndLabelOptions.md).[y](DInputAndLabelOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L423)
