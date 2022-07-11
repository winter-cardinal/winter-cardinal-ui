[Winter Cardinal UI - v0.199.0](../index.md) / DSliderVerticalOptions

# Interface: DSliderVerticalOptions<THEME\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeSliderVertical`](DThemeSliderVertical.md) = [`DThemeSliderVertical`](DThemeSliderVertical.md) |

## Hierarchy

- [`DSliderOptions`](DSliderOptions.md)<`THEME`\>

  ↳ **`DSliderVerticalOptions`**

## Table of contents

### Properties

- [background](DSliderVerticalOptions.md#background)
- [border](DSliderVerticalOptions.md#border)
- [children](DSliderVerticalOptions.md#children)
- [clear](DSliderVerticalOptions.md#clear)
- [corner](DSliderVerticalOptions.md#corner)
- [cursor](DSliderVerticalOptions.md#cursor)
- [height](DSliderVerticalOptions.md#height)
- [interactive](DSliderVerticalOptions.md#interactive)
- [max](DSliderVerticalOptions.md#max)
- [min](DSliderVerticalOptions.md#min)
- [name](DSliderVerticalOptions.md#name)
- [on](DSliderVerticalOptions.md#on)
- [outline](DSliderVerticalOptions.md#outline)
- [padding](DSliderVerticalOptions.md#padding)
- [parent](DSliderVerticalOptions.md#parent)
- [shadow](DSliderVerticalOptions.md#shadow)
- [shortcut](DSliderVerticalOptions.md#shortcut)
- [shortcuts](DSliderVerticalOptions.md#shortcuts)
- [state](DSliderVerticalOptions.md#state)
- [theme](DSliderVerticalOptions.md#theme)
- [thumb](DSliderVerticalOptions.md#thumb)
- [title](DSliderVerticalOptions.md#title)
- [track](DSliderVerticalOptions.md#track)
- [value](DSliderVerticalOptions.md#value)
- [visible](DSliderVerticalOptions.md#visible)
- [weight](DSliderVerticalOptions.md#weight)
- [width](DSliderVerticalOptions.md#width)
- [x](DSliderVerticalOptions.md#x)
- [y](DSliderVerticalOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[background](DSliderOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[border](DSliderOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[children](DSliderOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DSliderOptions](DSliderOptions.md).[clear](DSliderOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[corner](DSliderOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[cursor](DSliderOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

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

[DSliderOptions](DSliderOptions.md).[height](DSliderOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[interactive](DSliderOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### max

• `Optional` **max**: [`DSliderLabelOptions`](DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](DThemeSliderLabel.md)<`unknown`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[max](DSliderOptions.md#max)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-slider.ts#L43)

___

### min

• `Optional` **min**: [`DSliderLabelOptions`](DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](DThemeSliderLabel.md)<`unknown`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[min](DSliderOptions.md#min)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-slider.ts#L42)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[name](DSliderOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DSliderOnOptions`](DSliderOnOptions.md)<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[on](DSliderOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-slider.ts#L47)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[outline](DSliderOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[padding](DSliderOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DSliderOptions](DSliderOptions.md).[parent](DSliderOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[shadow](DSliderOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[shortcut](DSliderOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[shortcuts](DSliderOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[state](DSliderOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[theme](DSliderOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### thumb

• `Optional` **thumb**: [`DSliderThumbOptions`](DSliderThumbOptions.md)<`unknown`, [`DThemeSliderThumb`](DThemeSliderThumb.md)<`unknown`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[thumb](DSliderOptions.md#thumb)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-slider.ts#L46)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[title](DSliderOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### track

• `Optional` **track**: [`DSliderTrackOptions`](DSliderTrackOptions.md)<`unknown`, [`DThemeSliderTrack`](DThemeSliderTrack.md)<`unknown`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[track](DSliderOptions.md#track)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-slider.ts#L45)

___

### value

• `Optional` **value**: [`DSliderValueOptions`](DSliderValueOptions.md)<`number`, [`DThemeSliderValue`](DThemeSliderValue.md)<`number`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[value](DSliderOptions.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-slider.ts#L44)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[visible](DSliderOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DSliderOptions](DSliderOptions.md).[weight](DSliderOptions.md#weight)

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

[DSliderOptions](DSliderOptions.md).[width](DSliderOptions.md#width)

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

[DSliderOptions](DSliderOptions.md).[x](DSliderOptions.md#x)

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

[DSliderOptions](DSliderOptions.md).[y](DSliderOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
