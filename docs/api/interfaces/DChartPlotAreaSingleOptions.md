[Winter Cardinal UI - v0.457.0](../index.md) / DChartPlotAreaSingleOptions

# Interface: DChartPlotAreaSingleOptions\<CHART, THEME\>

[DBase](../classes/DBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](../classes/DBase.md) = [`DBase`](../classes/DBase.md) |
| `THEME` | extends [`DThemeChartPlotArea`](DThemeChartPlotArea.md) = [`DThemeChartPlotArea`](DThemeChartPlotArea.md) |

## Hierarchy

- [`DChartPlotAreaOptions`](DChartPlotAreaOptions.md)\<`CHART`, `THEME`\>

  ↳ **`DChartPlotAreaSingleOptions`**

## Table of contents

### Properties

- [axis](DChartPlotAreaSingleOptions.md#axis)
- [background](DChartPlotAreaSingleOptions.md#background)
- [border](DChartPlotAreaSingleOptions.md#border)
- [children](DChartPlotAreaSingleOptions.md#children)
- [clear](DChartPlotAreaSingleOptions.md#clear)
- [coordinate](DChartPlotAreaSingleOptions.md#coordinate)
- [corner](DChartPlotAreaSingleOptions.md#corner)
- [cursor](DChartPlotAreaSingleOptions.md#cursor)
- [height](DChartPlotAreaSingleOptions.md#height)
- [interactive](DChartPlotAreaSingleOptions.md#interactive)
- [mask](DChartPlotAreaSingleOptions.md#mask)
- [name](DChartPlotAreaSingleOptions.md#name)
- [on](DChartPlotAreaSingleOptions.md#on)
- [outline](DChartPlotAreaSingleOptions.md#outline)
- [padding](DChartPlotAreaSingleOptions.md#padding)
- [parent](DChartPlotAreaSingleOptions.md#parent)
- [renderable](DChartPlotAreaSingleOptions.md#renderable)
- [series](DChartPlotAreaSingleOptions.md#series)
- [shadow](DChartPlotAreaSingleOptions.md#shadow)
- [shortcut](DChartPlotAreaSingleOptions.md#shortcut)
- [shortcuts](DChartPlotAreaSingleOptions.md#shortcuts)
- [state](DChartPlotAreaSingleOptions.md#state)
- [theme](DChartPlotAreaSingleOptions.md#theme)
- [title](DChartPlotAreaSingleOptions.md#title)
- [view](DChartPlotAreaSingleOptions.md#view)
- [visible](DChartPlotAreaSingleOptions.md#visible)
- [weight](DChartPlotAreaSingleOptions.md#weight)
- [width](DChartPlotAreaSingleOptions.md#width)
- [x](DChartPlotAreaSingleOptions.md#x)
- [y](DChartPlotAreaSingleOptions.md#y)

## Properties

### axis

• `Optional` **axis**: [`DChartAxisContainerOptions`](DChartAxisContainerOptions.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L39)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[background](DChartPlotAreaOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[border](DChartPlotAreaOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[children](DChartPlotAreaOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[clear](DChartPlotAreaOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### coordinate

• `Optional` **coordinate**: [`DChartCoordinateContainerOptions`](DChartCoordinateContainerOptions.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L38)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[corner](DChartPlotAreaOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[cursor](DChartPlotAreaOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

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

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[height](DChartPlotAreaOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[interactive](DChartPlotAreaOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[mask](DChartPlotAreaOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L17)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[name](DChartPlotAreaOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)\<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[on](DChartPlotAreaOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L479)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[outline](DChartPlotAreaOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[padding](DChartPlotAreaOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

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

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[parent](DChartPlotAreaOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:396](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L396)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DBaseOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[renderable](DChartPlotAreaOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### series

• `Optional` **series**: [`DChartPlotAreaSingleSeriesContainerOptions`](DChartPlotAreaSingleSeriesContainerOptions.md)\<`CHART`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area-onefold.ts#L37)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[shadow](DChartPlotAreaOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[shortcut](DChartPlotAreaOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[shortcuts](DChartPlotAreaOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[state](DChartPlotAreaOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[theme](DChartPlotAreaOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[title](DChartPlotAreaOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### view

• `Optional` **view**: [`DViewOptions`](DViewOptions.md)

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[view](DChartPlotAreaOptions.md#view)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-plot-area.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-chart-plot-area.ts#L18)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[visible](DChartPlotAreaOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[weight](DChartPlotAreaOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L484)

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

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[width](DChartPlotAreaOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L432)

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

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[x](DChartPlotAreaOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:412](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L412)

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

[DChartPlotAreaOptions](DChartPlotAreaOptions.md).[y](DChartPlotAreaOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
