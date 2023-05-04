[Winter Cardinal UI - v0.310.1](../index.md) / DDiagramCanvasOptions

# Interface: DDiagramCanvasOptions<THEME\>

[DBase](../classes/DBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDiagramCanvas`](DThemeDiagramCanvas.md) = [`DThemeDiagramCanvas`](DThemeDiagramCanvas.md) |

## Hierarchy

- [`DDiagramCanvasBaseOptions`](DDiagramCanvasBaseOptions.md)<`THEME`\>

  ↳ **`DDiagramCanvasOptions`**

## Table of contents

### Properties

- [ambient](DDiagramCanvasOptions.md#ambient)
- [background](DDiagramCanvasOptions.md#background)
- [border](DDiagramCanvasOptions.md#border)
- [children](DDiagramCanvasOptions.md#children)
- [clear](DDiagramCanvasOptions.md#clear)
- [corner](DDiagramCanvasOptions.md#corner)
- [cursor](DDiagramCanvasOptions.md#cursor)
- [height](DDiagramCanvasOptions.md#height)
- [interactive](DDiagramCanvasOptions.md#interactive)
- [name](DDiagramCanvasOptions.md#name)
- [on](DDiagramCanvasOptions.md#on)
- [outline](DDiagramCanvasOptions.md#outline)
- [padding](DDiagramCanvasOptions.md#padding)
- [parent](DDiagramCanvasOptions.md#parent)
- [renderable](DDiagramCanvasOptions.md#renderable)
- [shadow](DDiagramCanvasOptions.md#shadow)
- [shortcut](DDiagramCanvasOptions.md#shortcut)
- [shortcuts](DDiagramCanvasOptions.md#shortcuts)
- [state](DDiagramCanvasOptions.md#state)
- [theme](DDiagramCanvasOptions.md#theme)
- [tile](DDiagramCanvasOptions.md#tile)
- [title](DDiagramCanvasOptions.md#title)
- [visible](DDiagramCanvasOptions.md#visible)
- [weight](DDiagramCanvasOptions.md#weight)
- [width](DDiagramCanvasOptions.md#width)
- [x](DDiagramCanvasOptions.md#x)
- [y](DDiagramCanvasOptions.md#y)

## Properties

### ambient

• `Optional` **ambient**: `boolean`

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[ambient](DDiagramCanvasBaseOptions.md#ambient)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L24)

___

### background

• `Optional` **background**: [`DDiagramCanvasBackgroundOptions`](DDiagramCanvasBackgroundOptions.md)

A background options.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[background](DDiagramCanvasBaseOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L23)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[border](DDiagramCanvasBaseOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L500)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[children](DDiagramCanvasBaseOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L400)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[clear](DDiagramCanvasBaseOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:509](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L509)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[corner](DDiagramCanvasBaseOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L472)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[cursor](DDiagramCanvasBaseOptions.md#cursor)

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

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[height](DDiagramCanvasBaseOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L443)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[interactive](DDiagramCanvasBaseOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:466](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L466)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[name](DDiagramCanvasBaseOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[on](DDiagramCanvasBaseOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:480](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L480)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[outline](DDiagramCanvasBaseOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L503)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[padding](DDiagramCanvasBaseOptions.md#padding)

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

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[parent](DDiagramCanvasBaseOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L397)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DDiagramCanvasOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[renderable](DDiagramCanvasBaseOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[shadow](DDiagramCanvasBaseOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:506](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L506)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[shortcut](DDiagramCanvasBaseOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L491)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[shortcuts](DDiagramCanvasBaseOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:494](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L494)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[state](DDiagramCanvasBaseOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[theme](DDiagramCanvasBaseOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L475)

___

### tile

• `Optional` **tile**: [`DDiagramCanvasTileOptions`](DDiagramCanvasTileOptions.md)

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[tile](DDiagramCanvasBaseOptions.md#tile)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L22)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[title](DDiagramCanvasBaseOptions.md#title)

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

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[visible](DDiagramCanvasBaseOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[weight](DDiagramCanvasBaseOptions.md#weight)

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

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[width](DDiagramCanvasBaseOptions.md#width)

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

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[x](DDiagramCanvasBaseOptions.md#x)

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

[DDiagramCanvasBaseOptions](DDiagramCanvasBaseOptions.md).[y](DDiagramCanvasBaseOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L423)
