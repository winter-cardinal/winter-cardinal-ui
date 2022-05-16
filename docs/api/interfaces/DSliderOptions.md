[Winter Cardinal UI - v0.167.0](../index.md) / DSliderOptions

# Interface: DSliderOptions<THEME, EMITTER\>

[DSlider](../classes/DSlider.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeSlider`](DThemeSlider.md) = [`DThemeSlider`](DThemeSlider.md) |
| `EMITTER` | `any` |

## Hierarchy

- [`DBaseOptions`](DBaseOptions.md)<`THEME`, `EMITTER`\>

  ↳ **`DSliderOptions`**

  ↳↳ [`DSliderHorizontalOptions`](DSliderHorizontalOptions.md)

  ↳↳ [`DSliderVerticalOptions`](DSliderVerticalOptions.md)

## Table of contents

### Properties

- [background](DSliderOptions.md#background)
- [border](DSliderOptions.md#border)
- [children](DSliderOptions.md#children)
- [clear](DSliderOptions.md#clear)
- [corner](DSliderOptions.md#corner)
- [cursor](DSliderOptions.md#cursor)
- [height](DSliderOptions.md#height)
- [interactive](DSliderOptions.md#interactive)
- [max](DSliderOptions.md#max)
- [min](DSliderOptions.md#min)
- [name](DSliderOptions.md#name)
- [on](DSliderOptions.md#on)
- [outline](DSliderOptions.md#outline)
- [padding](DSliderOptions.md#padding)
- [parent](DSliderOptions.md#parent)
- [shadow](DSliderOptions.md#shadow)
- [shortcut](DSliderOptions.md#shortcut)
- [shortcuts](DSliderOptions.md#shortcuts)
- [state](DSliderOptions.md#state)
- [theme](DSliderOptions.md#theme)
- [thumb](DSliderOptions.md#thumb)
- [title](DSliderOptions.md#title)
- [track](DSliderOptions.md#track)
- [value](DSliderOptions.md#value)
- [visible](DSliderOptions.md#visible)
- [weight](DSliderOptions.md#weight)
- [width](DSliderOptions.md#width)
- [x](DSliderOptions.md#x)
- [y](DSliderOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[background](DBaseOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[border](DBaseOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[children](DBaseOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DBaseOptions](DBaseOptions.md).[clear](DBaseOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[corner](DBaseOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[cursor](DBaseOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

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

[DBaseOptions](DBaseOptions.md).[height](DBaseOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[interactive](DBaseOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### max

• `Optional` **max**: [`DSliderLabelOptions`](DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](DThemeSliderLabel.md)<`unknown`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L43)

___

### min

• `Optional` **min**: [`DSliderLabelOptions`](DSliderLabelOptions.md)<`unknown`, [`DThemeSliderLabel`](DThemeSliderLabel.md)<`unknown`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L42)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[name](DBaseOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DSliderOnOptions`](DSliderOnOptions.md)<`EMITTER`\>

Mappings of event names and event handlers.

#### Overrides

[DBaseOptions](DBaseOptions.md).[on](DBaseOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L47)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[outline](DBaseOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[padding](DBaseOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DBaseOptions](DBaseOptions.md).[parent](DBaseOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[shadow](DBaseOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[shortcut](DBaseOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[shortcuts](DBaseOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[state](DBaseOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[theme](DBaseOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### thumb

• `Optional` **thumb**: [`DSliderThumbOptions`](DSliderThumbOptions.md)<`unknown`, [`DThemeSliderThumb`](DThemeSliderThumb.md)<`unknown`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L46)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[title](DBaseOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### track

• `Optional` **track**: [`DSliderTrackOptions`](DSliderTrackOptions.md)<`unknown`, [`DThemeSliderTrack`](DThemeSliderTrack.md)<`unknown`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L45)

___

### value

• `Optional` **value**: [`DSliderValueOptions`](DSliderValueOptions.md)<`number`, [`DThemeSliderValue`](DThemeSliderValue.md)<`number`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-slider.ts#L44)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DBaseOptions](DBaseOptions.md).[visible](DBaseOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DBaseOptions](DBaseOptions.md).[weight](DBaseOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

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

[DBaseOptions](DBaseOptions.md).[width](DBaseOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[DBaseOptions](DBaseOptions.md).[x](DBaseOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[DBaseOptions](DBaseOptions.md).[y](DBaseOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
