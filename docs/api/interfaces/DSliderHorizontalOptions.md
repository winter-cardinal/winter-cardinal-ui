[Winter Cardinal UI - v0.374.0](../index.md) / DSliderHorizontalOptions

# Interface: DSliderHorizontalOptions\<THEME\>

[DSlider](../classes/DSlider.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeSliderHorizontal`](DThemeSliderHorizontal.md) |

## Hierarchy

- [`DSliderOptions`](DSliderOptions.md)\<`THEME`\>

  ↳ **`DSliderHorizontalOptions`**

## Table of contents

### Properties

- [background](DSliderHorizontalOptions.md#background)
- [border](DSliderHorizontalOptions.md#border)
- [children](DSliderHorizontalOptions.md#children)
- [clear](DSliderHorizontalOptions.md#clear)
- [corner](DSliderHorizontalOptions.md#corner)
- [cursor](DSliderHorizontalOptions.md#cursor)
- [height](DSliderHorizontalOptions.md#height)
- [interactive](DSliderHorizontalOptions.md#interactive)
- [max](DSliderHorizontalOptions.md#max)
- [min](DSliderHorizontalOptions.md#min)
- [name](DSliderHorizontalOptions.md#name)
- [on](DSliderHorizontalOptions.md#on)
- [outline](DSliderHorizontalOptions.md#outline)
- [padding](DSliderHorizontalOptions.md#padding)
- [parent](DSliderHorizontalOptions.md#parent)
- [renderable](DSliderHorizontalOptions.md#renderable)
- [shadow](DSliderHorizontalOptions.md#shadow)
- [shortcut](DSliderHorizontalOptions.md#shortcut)
- [shortcuts](DSliderHorizontalOptions.md#shortcuts)
- [state](DSliderHorizontalOptions.md#state)
- [theme](DSliderHorizontalOptions.md#theme)
- [thumb](DSliderHorizontalOptions.md#thumb)
- [title](DSliderHorizontalOptions.md#title)
- [track](DSliderHorizontalOptions.md#track)
- [value](DSliderHorizontalOptions.md#value)
- [visible](DSliderHorizontalOptions.md#visible)
- [weight](DSliderHorizontalOptions.md#weight)
- [width](DSliderHorizontalOptions.md#width)
- [x](DSliderHorizontalOptions.md#x)
- [y](DSliderHorizontalOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[background](DSliderOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L497)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[border](DSliderOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L500)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[children](DSliderOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L400)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DSliderOptions](DSliderOptions.md).[clear](DSliderOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:509](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L509)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[corner](DSliderOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L472)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[cursor](DSliderOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L512)

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

[src/main/typescript/wcardinal/ui/d-base.ts:443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L443)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[interactive](DSliderOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:466](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L466)

___

### max

• `Optional` **max**: [`DSliderLabelOptions`](DSliderLabelOptions.md)\<`unknown`, [`DThemeSliderLabel`](DThemeSliderLabel.md)\<`unknown`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[max](DSliderOptions.md#max)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-slider.ts#L43)

___

### min

• `Optional` **min**: [`DSliderLabelOptions`](DSliderLabelOptions.md)\<`unknown`, [`DThemeSliderLabel`](DThemeSliderLabel.md)\<`unknown`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[min](DSliderOptions.md#min)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-slider.ts#L42)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[name](DSliderOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### on

• `Optional` **on**: [`DSliderOnOptions`](DSliderOnOptions.md)\<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[on](DSliderOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-slider.ts#L47)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[outline](DSliderOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L503)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[padding](DSliderOptions.md#padding)

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

[DSliderOptions](DSliderOptions.md).[parent](DSliderOptions.md#parent)

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

[DSliderOptions](DSliderOptions.md).[renderable](DSliderOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[shadow](DSliderOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:506](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L506)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[shortcut](DSliderOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L491)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[shortcuts](DSliderOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:494](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L494)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[state](DSliderOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[theme](DSliderOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L475)

___

### thumb

• `Optional` **thumb**: [`DSliderThumbOptions`](DSliderThumbOptions.md)\<`unknown`, [`DThemeSliderThumb`](DThemeSliderThumb.md)\<`unknown`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[thumb](DSliderOptions.md#thumb)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-slider.ts#L46)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[title](DSliderOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L488)

___

### track

• `Optional` **track**: [`DSliderTrackOptions`](DSliderTrackOptions.md)\<`unknown`, [`DThemeSliderTrack`](DThemeSliderTrack.md)\<`unknown`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[track](DSliderOptions.md#track)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-slider.ts#L45)

___

### value

• `Optional` **value**: [`DSliderValueOptions`](DSliderValueOptions.md)\<`number`, [`DThemeSliderValue`](DThemeSliderValue.md)\<`number`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[value](DSliderOptions.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-slider.ts#L44)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[visible](DSliderOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DSliderOptions](DSliderOptions.md).[weight](DSliderOptions.md#weight)

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

[DSliderOptions](DSliderOptions.md).[width](DSliderOptions.md#width)

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

[DSliderOptions](DSliderOptions.md).[x](DSliderOptions.md#x)

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

[DSliderOptions](DSliderOptions.md).[y](DSliderOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L423)
