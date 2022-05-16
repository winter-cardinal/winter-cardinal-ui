[Winter Cardinal UI - v0.165.0](../index.md) / DDiagramOptions

# Interface: DDiagramOptions<THEME, EMITTER\>

[DDiagram](../classes/DDiagram.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDiagram`](DThemeDiagram.md) = [`DThemeDiagram`](DThemeDiagram.md) |
| `EMITTER` | `any` |

## Hierarchy

- [`DDiagramBaseOptions`](DDiagramBaseOptions.md)<[`DDiagramCanvas`](../classes/DDiagramCanvas.md), [`DDiagramCanvasOptions`](DDiagramCanvasOptions.md), [`DDiagramController`](DDiagramController.md), `THEME`, `EMITTER`\>

  ↳ **`DDiagramOptions`**

## Table of contents

### Properties

- [ambient](DDiagramOptions.md#ambient)
- [background](DDiagramOptions.md#background)
- [border](DDiagramOptions.md#border)
- [canvas](DDiagramOptions.md#canvas)
- [children](DDiagramOptions.md#children)
- [clear](DDiagramOptions.md#clear)
- [controller](DDiagramOptions.md#controller)
- [corner](DDiagramOptions.md#corner)
- [cursor](DDiagramOptions.md#cursor)
- [data](DDiagramOptions.md#data)
- [height](DDiagramOptions.md#height)
- [interactive](DDiagramOptions.md#interactive)
- [mask](DDiagramOptions.md#mask)
- [name](DDiagramOptions.md#name)
- [on](DDiagramOptions.md#on)
- [outline](DDiagramOptions.md#outline)
- [padding](DDiagramOptions.md#padding)
- [parent](DDiagramOptions.md#parent)
- [shadow](DDiagramOptions.md#shadow)
- [shortcut](DDiagramOptions.md#shortcut)
- [shortcuts](DDiagramOptions.md#shortcuts)
- [snapshot](DDiagramOptions.md#snapshot)
- [state](DDiagramOptions.md#state)
- [tag](DDiagramOptions.md#tag)
- [theme](DDiagramOptions.md#theme)
- [tile](DDiagramOptions.md#tile)
- [title](DDiagramOptions.md#title)
- [view](DDiagramOptions.md#view)
- [visible](DDiagramOptions.md#visible)
- [weight](DDiagramOptions.md#weight)
- [width](DDiagramOptions.md#width)
- [x](DDiagramOptions.md#x)
- [y](DDiagramOptions.md#y)

## Properties

### ambient

• `Optional` **ambient**: `boolean`

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[ambient](DDiagramBaseOptions.md#ambient)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L81)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[background](DDiagramBaseOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[border](DDiagramBaseOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### canvas

• `Optional` **canvas**: [`DDiagramCanvas`](../classes/DDiagramCanvas.md)<[`DThemeDiagramCanvas`](DThemeDiagramCanvas.md), [`DDiagramCanvasOptions`](DDiagramCanvasOptions.md)<[`DThemeDiagramCanvas`](DThemeDiagramCanvas.md)\>\>

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[canvas](DDiagramBaseOptions.md#canvas)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L55)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[children](DDiagramBaseOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[clear](DDiagramBaseOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### controller

• `Optional` **controller**: [`DDiagramController`](DDiagramController.md)

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[controller](DDiagramBaseOptions.md#controller)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L74)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[corner](DDiagramBaseOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[cursor](DDiagramBaseOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### data

• `Optional` **data**: [`DDiagramDataOptions`](DDiagramDataOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-diagram.ts#L50)

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

[DDiagramBaseOptions](DDiagramBaseOptions.md).[height](DDiagramBaseOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[interactive](DDiagramBaseOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[mask](DDiagramBaseOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L53)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[name](DDiagramBaseOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DDiagramBaseOnOptions`](DDiagramBaseOnOptions.md)<[`DDiagramCanvas`](../classes/DDiagramCanvas.md)<[`DThemeDiagramCanvas`](DThemeDiagramCanvas.md), [`DDiagramCanvasOptions`](DDiagramCanvasOptions.md)<[`DThemeDiagramCanvas`](DThemeDiagramCanvas.md)\>\>, `EMITTER`\>

Mappings of event names and event handlers.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[on](DDiagramBaseOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L88)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[outline](DDiagramBaseOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[padding](DDiagramBaseOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DDiagramBaseOptions](DDiagramBaseOptions.md).[parent](DDiagramBaseOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[shadow](DDiagramBaseOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[shortcut](DDiagramBaseOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[shortcuts](DDiagramBaseOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### snapshot

• `Optional` **snapshot**: [`DDiagramSnapshotOptions`](DDiagramSnapshotOptions.md)<[`DDiagramCanvas`](../classes/DDiagramCanvas.md)<[`DThemeDiagramCanvas`](DThemeDiagramCanvas.md), [`DDiagramCanvasOptions`](DDiagramCanvasOptions.md)<[`DThemeDiagramCanvas`](DThemeDiagramCanvas.md)\>\>, `any`\>

Snapshot options.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[snapshot](DDiagramBaseOptions.md#snapshot)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L86)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[state](DDiagramBaseOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### tag

• `Optional` **tag**: [`DDiagramDataOptions`](DDiagramDataOptions.md)

**`deprecated`** in favor of [data](DDiagramOptions.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-diagram.ts#L49)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[theme](DDiagramBaseOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### tile

• `Optional` **tile**: [`DDiagramCanvasTilePyramidFactory`](../index.md#ddiagramcanvastilepyramidfactory)

A tile pyramid factory.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[tile](DDiagramBaseOptions.md#tile)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L79)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[title](DDiagramBaseOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### view

• `Optional` **view**: [`DViewOptions`](DViewOptions.md)

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[view](DDiagramBaseOptions.md#view)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L54)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[visible](DDiagramBaseOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDiagramBaseOptions](DDiagramBaseOptions.md).[weight](DDiagramBaseOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

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

[DDiagramBaseOptions](DDiagramBaseOptions.md).[width](DDiagramBaseOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[DDiagramBaseOptions](DDiagramBaseOptions.md).[x](DDiagramBaseOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[DDiagramBaseOptions](DDiagramBaseOptions.md).[y](DDiagramBaseOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
