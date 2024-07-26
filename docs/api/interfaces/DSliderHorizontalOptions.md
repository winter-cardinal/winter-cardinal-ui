[Winter Cardinal UI - v0.442.0](../index.md) / DSliderHorizontalOptions

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

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[border](DSliderOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[children](DSliderOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DSliderOptions](DSliderOptions.md).[clear](DSliderOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[corner](DSliderOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[cursor](DSliderOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

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

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[interactive](DSliderOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### max

• `Optional` **max**: [`DSliderLabelOptions`](DSliderLabelOptions.md)\<`unknown`, [`DThemeSliderLabel`](DThemeSliderLabel.md)\<`unknown`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[max](DSliderOptions.md#max)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-slider.ts#L41)

___

### min

• `Optional` **min**: [`DSliderLabelOptions`](DSliderLabelOptions.md)\<`unknown`, [`DThemeSliderLabel`](DThemeSliderLabel.md)\<`unknown`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[min](DSliderOptions.md#min)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-slider.ts#L40)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[name](DSliderOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DSliderOnOptions`](DSliderOnOptions.md)\<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[on](DSliderOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-slider.ts#L45)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[outline](DSliderOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[padding](DSliderOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

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

[src/main/typescript/wcardinal/ui/d-base.ts:396](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L396)

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

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[shadow](DSliderOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[shortcut](DSliderOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[shortcuts](DSliderOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[state](DSliderOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[theme](DSliderOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### thumb

• `Optional` **thumb**: [`DSliderThumbOptions`](DSliderThumbOptions.md)\<`unknown`, [`DThemeSliderThumb`](DThemeSliderThumb.md)\<`unknown`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[thumb](DSliderOptions.md#thumb)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-slider.ts#L44)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DSliderOptions](DSliderOptions.md).[title](DSliderOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### track

• `Optional` **track**: [`DSliderTrackOptions`](DSliderTrackOptions.md)\<`unknown`, [`DThemeSliderTrack`](DThemeSliderTrack.md)\<`unknown`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[track](DSliderOptions.md#track)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-slider.ts#L43)

___

### value

• `Optional` **value**: [`DSliderValueOptions`](DSliderValueOptions.md)\<`number`, [`DThemeSliderValue`](DThemeSliderValue.md)\<`number`\>\>

#### Inherited from

[DSliderOptions](DSliderOptions.md).[value](DSliderOptions.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-slider.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-slider.ts#L42)

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

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DSliderOptions](DSliderOptions.md).[weight](DSliderOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L484)

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

[src/main/typescript/wcardinal/ui/d-base.ts:432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L432)

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

[src/main/typescript/wcardinal/ui/d-base.ts:412](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L412)

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

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
