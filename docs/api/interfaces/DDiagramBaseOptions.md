[Winter Cardinal UI - v0.164.0](../index.md) / DDiagramBaseOptions

# Interface: DDiagramBaseOptions<CANVAS, CANVAS_OPTIONS, CONTROLLER, THEME, EMITTER\>

[DDiagramBase](../classes/DDiagramBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CANVAS` | extends [`DDiagramCanvasBase`](../classes/DDiagramCanvasBase.md) = [`DDiagramCanvasBase`](../classes/DDiagramCanvasBase.md) |
| `CANVAS_OPTIONS` | extends [`DDiagramCanvasBaseOptions`](DDiagramCanvasBaseOptions.md) = [`DDiagramCanvasBaseOptions`](DDiagramCanvasBaseOptions.md) |
| `CONTROLLER` | extends [`DDiagramBaseController`](DDiagramBaseController.md) = [`DDiagramBaseController`](DDiagramBaseController.md) |
| `THEME` | extends [`DThemeDiagramBase`](DThemeDiagramBase.md) = [`DThemeDiagramBase`](DThemeDiagramBase.md) |
| `EMITTER` | `any` |

## Hierarchy

- [`DCanvasContainerOptions`](DCanvasContainerOptions.md)<`CANVAS`, `CANVAS_OPTIONS`, `THEME`\>

  ↳ **`DDiagramBaseOptions`**

  ↳↳ [`DDiagramEditorOptions`](DDiagramEditorOptions.md)

  ↳↳ [`DDiagramOptions`](DDiagramOptions.md)

## Table of contents

### Properties

- [ambient](DDiagramBaseOptions.md#ambient)
- [background](DDiagramBaseOptions.md#background)
- [border](DDiagramBaseOptions.md#border)
- [canvas](DDiagramBaseOptions.md#canvas)
- [children](DDiagramBaseOptions.md#children)
- [clear](DDiagramBaseOptions.md#clear)
- [controller](DDiagramBaseOptions.md#controller)
- [corner](DDiagramBaseOptions.md#corner)
- [cursor](DDiagramBaseOptions.md#cursor)
- [height](DDiagramBaseOptions.md#height)
- [interactive](DDiagramBaseOptions.md#interactive)
- [mask](DDiagramBaseOptions.md#mask)
- [name](DDiagramBaseOptions.md#name)
- [on](DDiagramBaseOptions.md#on)
- [outline](DDiagramBaseOptions.md#outline)
- [padding](DDiagramBaseOptions.md#padding)
- [parent](DDiagramBaseOptions.md#parent)
- [shadow](DDiagramBaseOptions.md#shadow)
- [shortcut](DDiagramBaseOptions.md#shortcut)
- [shortcuts](DDiagramBaseOptions.md#shortcuts)
- [snapshot](DDiagramBaseOptions.md#snapshot)
- [state](DDiagramBaseOptions.md#state)
- [theme](DDiagramBaseOptions.md#theme)
- [tile](DDiagramBaseOptions.md#tile)
- [title](DDiagramBaseOptions.md#title)
- [view](DDiagramBaseOptions.md#view)
- [visible](DDiagramBaseOptions.md#visible)
- [weight](DDiagramBaseOptions.md#weight)
- [width](DDiagramBaseOptions.md#width)
- [x](DDiagramBaseOptions.md#x)
- [y](DDiagramBaseOptions.md#y)

## Properties

### ambient

• `Optional` **ambient**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L81)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[background](DCanvasContainerOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[border](DCanvasContainerOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### canvas

• `Optional` **canvas**: `CANVAS`

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[canvas](DCanvasContainerOptions.md#canvas)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L55)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[children](DCanvasContainerOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[clear](DCanvasContainerOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### controller

• `Optional` **controller**: `CONTROLLER`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L74)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[corner](DCanvasContainerOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[cursor](DCanvasContainerOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

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

[DCanvasContainerOptions](DCanvasContainerOptions.md).[height](DCanvasContainerOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[interactive](DCanvasContainerOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[mask](DCanvasContainerOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L53)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[name](DCanvasContainerOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DDiagramBaseOnOptions`](DDiagramBaseOnOptions.md)<`CANVAS`, `EMITTER`\>

Mappings of event names and event handlers.

#### Overrides

[DCanvasContainerOptions](DCanvasContainerOptions.md).[on](DCanvasContainerOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L88)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[outline](DCanvasContainerOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[padding](DCanvasContainerOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DCanvasContainerOptions](DCanvasContainerOptions.md).[parent](DCanvasContainerOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[shadow](DCanvasContainerOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[shortcut](DCanvasContainerOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[shortcuts](DCanvasContainerOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### snapshot

• `Optional` **snapshot**: [`DDiagramSnapshotOptions`](DDiagramSnapshotOptions.md)<`CANVAS`, `any`\>

Snapshot options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L86)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[state](DCanvasContainerOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[theme](DCanvasContainerOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### tile

• `Optional` **tile**: [`DDiagramCanvasTilePyramidFactory`](../index.md#ddiagramcanvastilepyramidfactory)

A tile pyramid factory.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L79)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[title](DCanvasContainerOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### view

• `Optional` **view**: [`DViewOptions`](DViewOptions.md)

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[view](DCanvasContainerOptions.md#view)

#### Defined in

[src/main/typescript/wcardinal/ui/d-canvas-container.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-canvas-container.ts#L54)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[visible](DCanvasContainerOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DCanvasContainerOptions](DCanvasContainerOptions.md).[weight](DCanvasContainerOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

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

[DCanvasContainerOptions](DCanvasContainerOptions.md).[width](DCanvasContainerOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[DCanvasContainerOptions](DCanvasContainerOptions.md).[x](DCanvasContainerOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[DCanvasContainerOptions](DCanvasContainerOptions.md).[y](DCanvasContainerOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
