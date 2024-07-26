[Winter Cardinal UI - v0.442.0](../index.md) / DPickerDatetimeOptions

# Interface: DPickerDatetimeOptions\<THEME\>

[DBase](../classes/DBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemePickerDatetime`](DThemePickerDatetime.md) = [`DThemePickerDatetime`](DThemePickerDatetime.md) |

## Hierarchy

- [`DPickerTimeOptions`](DPickerTimeOptions.md)\<`THEME`\>

  ↳ **`DPickerDatetimeOptions`**

  ↳↳ [`DPickerDateOptions`](DPickerDateOptions.md)

## Table of contents

### Properties

- [back](DPickerDatetimeOptions.md#back)
- [background](DPickerDatetimeOptions.md#background)
- [border](DPickerDatetimeOptions.md#border)
- [bounds](DPickerDatetimeOptions.md#bounds)
- [children](DPickerDatetimeOptions.md#children)
- [clear](DPickerDatetimeOptions.md#clear)
- [corner](DPickerDatetimeOptions.md#corner)
- [cursor](DPickerDatetimeOptions.md#cursor)
- [date](DPickerDatetimeOptions.md#date)
- [day](DPickerDatetimeOptions.md#day)
- [height](DPickerDatetimeOptions.md#height)
- [hours](DPickerDatetimeOptions.md#hours)
- [interactive](DPickerDatetimeOptions.md#interactive)
- [label](DPickerDatetimeOptions.md#label)
- [margin](DPickerDatetimeOptions.md#margin)
- [mask](DPickerDatetimeOptions.md#mask)
- [minutes](DPickerDatetimeOptions.md#minutes)
- [name](DPickerDatetimeOptions.md#name)
- [next](DPickerDatetimeOptions.md#next)
- [on](DPickerDatetimeOptions.md#on)
- [outline](DPickerDatetimeOptions.md#outline)
- [padding](DPickerDatetimeOptions.md#padding)
- [parent](DPickerDatetimeOptions.md#parent)
- [renderable](DPickerDatetimeOptions.md#renderable)
- [seconds](DPickerDatetimeOptions.md#seconds)
- [shadow](DPickerDatetimeOptions.md#shadow)
- [shortcut](DPickerDatetimeOptions.md#shortcut)
- [shortcuts](DPickerDatetimeOptions.md#shortcuts)
- [state](DPickerDatetimeOptions.md#state)
- [theme](DPickerDatetimeOptions.md#theme)
- [title](DPickerDatetimeOptions.md#title)
- [visible](DPickerDatetimeOptions.md#visible)
- [weight](DPickerDatetimeOptions.md#weight)
- [width](DPickerDatetimeOptions.md#width)
- [x](DPickerDatetimeOptions.md#x)
- [y](DPickerDatetimeOptions.md#y)

## Properties

### back

• `Optional` **back**: ``null`` \| [`DPickerDatetimeButtonBackOptions`](DPickerDatetimeButtonBackOptions.md)\<`unknown`, [`DThemePickerDatetimeButtonBack`](DThemePickerDatetimeButtonBack.md)\<`unknown`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L40)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[background](DPickerTimeOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[border](DPickerTimeOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### bounds

• `Optional` **bounds**: [`DPickerTimeBoundsOptions`](DPickerTimeBoundsOptions.md)

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[bounds](DPickerTimeOptions.md#bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L28)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[children](DPickerTimeOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[clear](DPickerTimeOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[corner](DPickerTimeOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[cursor](DPickerTimeOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### date

• `Optional` **date**: [`DPickerDatetimeDateOptions`](DPickerDatetimeDateOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L44)

___

### day

• `Optional` **day**: [`DPickerDatetimeDayOptions`](DPickerDatetimeDayOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L42)

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

[DPickerTimeOptions](DPickerTimeOptions.md).[height](DPickerTimeOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### hours

• `Optional` **hours**: [`DInputIntegerOptions`](DInputIntegerOptions.md)\<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[hours](DPickerTimeOptions.md#hours)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L21)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[interactive](DPickerTimeOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### label

• `Optional` **label**: [`DPickerDatetimeLabelOptions`](DPickerDatetimeLabelOptions.md)\<[`DThemePickerDatetimeLabel`](DThemePickerDatetimeLabel.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L43)

___

### margin

• `Optional` **margin**: `number`

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[margin](DPickerTimeOptions.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L20)

___

### mask

• `Optional` **mask**: `number` \| ``"NONE"`` \| ``"ALL"`` \| ``"DATE"`` \| ``"HOURS"`` \| ``"MINUTES"`` \| ``"SECONDS"`` \| ``"TIME"`` \| (``"NONE"`` \| ``"ALL"`` \| ``"DATE"`` \| ``"HOURS"`` \| ``"MINUTES"`` \| ``"SECONDS"`` \| ``"TIME"``)[]

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[mask](DPickerTimeOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L24)

___

### minutes

• `Optional` **minutes**: [`DInputIntegerOptions`](DInputIntegerOptions.md)\<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[minutes](DPickerTimeOptions.md#minutes)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L22)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[name](DPickerTimeOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### next

• `Optional` **next**: ``null`` \| [`DPickerDatetimeButtonNextOptions`](DPickerDatetimeButtonNextOptions.md)\<`unknown`, [`DThemePickerDatetimeButtonNext`](DThemePickerDatetimeButtonNext.md)\<`unknown`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-datetime.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-picker-datetime.ts#L41)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)\<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[on](DPickerTimeOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L479)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[outline](DPickerTimeOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[padding](DPickerTimeOptions.md#padding)

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

[DPickerTimeOptions](DPickerTimeOptions.md).[parent](DPickerTimeOptions.md#parent)

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

[DPickerTimeOptions](DPickerTimeOptions.md).[renderable](DPickerTimeOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### seconds

• `Optional` **seconds**: [`DInputIntegerOptions`](DInputIntegerOptions.md)\<[`DThemeInputInteger`](DThemeInputInteger.md)\>

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[seconds](DPickerTimeOptions.md#seconds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-picker-time.ts#L23)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[shadow](DPickerTimeOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[shortcut](DPickerTimeOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[shortcuts](DPickerTimeOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[state](DPickerTimeOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[theme](DPickerTimeOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[title](DPickerTimeOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[visible](DPickerTimeOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DPickerTimeOptions](DPickerTimeOptions.md).[weight](DPickerTimeOptions.md#weight)

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

[DPickerTimeOptions](DPickerTimeOptions.md).[width](DPickerTimeOptions.md#width)

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

[DPickerTimeOptions](DPickerTimeOptions.md).[x](DPickerTimeOptions.md#x)

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

[DPickerTimeOptions](DPickerTimeOptions.md).[y](DPickerTimeOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
