[Winter Cardinal UI - v0.179.0](../index.md) / DInputRealAndLabelOptions

# Interface: DInputRealAndLabelOptions<THEME\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeInputAndLabel`](DThemeInputAndLabel.md) = [`DThemeInputAndLabel`](DThemeInputAndLabel.md) |

## Hierarchy

- [`DInputAndLabelOptions`](DInputAndLabelOptions.md)<[`DInputRealOptions`](DInputRealOptions.md), `THEME`\>

  ↳ **`DInputRealAndLabelOptions`**

## Table of contents

### Properties

- [background](DInputRealAndLabelOptions.md#background)
- [border](DInputRealAndLabelOptions.md#border)
- [children](DInputRealAndLabelOptions.md#children)
- [clear](DInputRealAndLabelOptions.md#clear)
- [column](DInputRealAndLabelOptions.md#column)
- [corner](DInputRealAndLabelOptions.md#corner)
- [cursor](DInputRealAndLabelOptions.md#cursor)
- [direction](DInputRealAndLabelOptions.md#direction)
- [height](DInputRealAndLabelOptions.md#height)
- [input](DInputRealAndLabelOptions.md#input)
- [interactive](DInputRealAndLabelOptions.md#interactive)
- [label](DInputRealAndLabelOptions.md#label)
- [margin](DInputRealAndLabelOptions.md#margin)
- [name](DInputRealAndLabelOptions.md#name)
- [on](DInputRealAndLabelOptions.md#on)
- [outline](DInputRealAndLabelOptions.md#outline)
- [padding](DInputRealAndLabelOptions.md#padding)
- [parent](DInputRealAndLabelOptions.md#parent)
- [reverse](DInputRealAndLabelOptions.md#reverse)
- [row](DInputRealAndLabelOptions.md#row)
- [shadow](DInputRealAndLabelOptions.md#shadow)
- [shortcut](DInputRealAndLabelOptions.md#shortcut)
- [shortcuts](DInputRealAndLabelOptions.md#shortcuts)
- [space](DInputRealAndLabelOptions.md#space)
- [state](DInputRealAndLabelOptions.md#state)
- [theme](DInputRealAndLabelOptions.md#theme)
- [title](DInputRealAndLabelOptions.md#title)
- [visible](DInputRealAndLabelOptions.md#visible)
- [weight](DInputRealAndLabelOptions.md#weight)
- [width](DInputRealAndLabelOptions.md#width)
- [x](DInputRealAndLabelOptions.md#x)
- [y](DInputRealAndLabelOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[background](DInputAndLabelOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[border](DInputAndLabelOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[children](DInputAndLabelOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[clear](DInputAndLabelOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### column

• `Optional` **column**: `number`

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[column](DInputAndLabelOptions.md#column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-layout.ts#L34)

___

### corner

• `Optional` **corner**: `number` \| [`DLayoutCornerOptions`](DLayoutCornerOptions.md)

A corner options.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[corner](DInputAndLabelOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-layout.ts#L32)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[cursor](DInputAndLabelOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### direction

• `Optional` **direction**: ``"HORIZONTAL"`` \| ``"VERTICAL"`` \| [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[direction](DInputAndLabelOptions.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-layout.ts#L35)

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

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### input

• `Optional` **input**: [`DInputRealOptions`](DInputRealOptions.md)<[`DThemeInputReal`](DThemeInputReal.md)\>

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[input](DInputAndLabelOptions.md#input)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-and-label.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-input-and-label.ts#L24)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[interactive](DInputAndLabelOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### label

• `Optional` **label**: [`DInputLabelOptions`](DInputLabelOptions.md)<`unknown`, [`DThemeText`](DThemeText.md)<`unknown`\>\>

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[label](DInputAndLabelOptions.md#label)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-and-label.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-input-and-label.ts#L25)

___

### margin

• `Optional` **margin**: `number` \| [`DLayoutMarginOptions`](DLayoutMarginOptions.md)

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[margin](DInputAndLabelOptions.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-layout.ts#L31)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[name](DInputAndLabelOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[on](DInputAndLabelOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[outline](DInputAndLabelOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[padding](DInputAndLabelOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### reverse

• `Optional` **reverse**: `boolean`

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[reverse](DInputAndLabelOptions.md#reverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-layout.ts#L36)

___

### row

• `Optional` **row**: `number`

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[row](DInputAndLabelOptions.md#row)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-layout.ts#L33)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[shadow](DInputAndLabelOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[shortcut](DInputAndLabelOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[shortcuts](DInputAndLabelOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### space

• `Optional` **space**: [`DLayoutSpaceOptions`](DLayoutSpaceOptions.md)<[`DThemeLayoutSpace`](DThemeLayoutSpace.md)\>

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[space](DInputAndLabelOptions.md#space)

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-and-label.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-input-and-label.ts#L26)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[state](DInputAndLabelOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[theme](DInputAndLabelOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[title](DInputAndLabelOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[visible](DInputAndLabelOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DInputAndLabelOptions](DInputAndLabelOptions.md).[weight](DInputAndLabelOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

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

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
