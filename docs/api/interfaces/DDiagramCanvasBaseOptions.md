[Winter Cardinal UI - v0.414.0](../index.md) / DDiagramCanvasBaseOptions

# Interface: DDiagramCanvasBaseOptions\<THEME\>

[DBase](../classes/DBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDiagramCanvasBase`](DThemeDiagramCanvasBase.md) = [`DThemeDiagramCanvasBase`](DThemeDiagramCanvasBase.md) |

## Hierarchy

- [`DCanvasOptions`](DCanvasOptions.md)\<`THEME`\>

  ↳ **`DDiagramCanvasBaseOptions`**

  ↳↳ [`DDiagramCanvasEditorOptions`](DDiagramCanvasEditorOptions.md)

  ↳↳ [`DDiagramCanvasOptions`](DDiagramCanvasOptions.md)

## Table of contents

### Properties

- [ambient](DDiagramCanvasBaseOptions.md#ambient)
- [background](DDiagramCanvasBaseOptions.md#background)
- [border](DDiagramCanvasBaseOptions.md#border)
- [category](DDiagramCanvasBaseOptions.md#category)
- [children](DDiagramCanvasBaseOptions.md#children)
- [clear](DDiagramCanvasBaseOptions.md#clear)
- [corner](DDiagramCanvasBaseOptions.md#corner)
- [cursor](DDiagramCanvasBaseOptions.md#cursor)
- [description](DDiagramCanvasBaseOptions.md#description)
- [height](DDiagramCanvasBaseOptions.md#height)
- [interactive](DDiagramCanvasBaseOptions.md#interactive)
- [label](DDiagramCanvasBaseOptions.md#label)
- [name](DDiagramCanvasBaseOptions.md#name)
- [on](DDiagramCanvasBaseOptions.md#on)
- [outline](DDiagramCanvasBaseOptions.md#outline)
- [padding](DDiagramCanvasBaseOptions.md#padding)
- [parent](DDiagramCanvasBaseOptions.md#parent)
- [renderable](DDiagramCanvasBaseOptions.md#renderable)
- [shadow](DDiagramCanvasBaseOptions.md#shadow)
- [shortcut](DDiagramCanvasBaseOptions.md#shortcut)
- [shortcuts](DDiagramCanvasBaseOptions.md#shortcuts)
- [state](DDiagramCanvasBaseOptions.md#state)
- [summary](DDiagramCanvasBaseOptions.md#summary)
- [theme](DDiagramCanvasBaseOptions.md#theme)
- [tile](DDiagramCanvasBaseOptions.md#tile)
- [title](DDiagramCanvasBaseOptions.md#title)
- [visible](DDiagramCanvasBaseOptions.md#visible)
- [weight](DDiagramCanvasBaseOptions.md#weight)
- [width](DDiagramCanvasBaseOptions.md#width)
- [x](DDiagramCanvasBaseOptions.md#x)
- [y](DDiagramCanvasBaseOptions.md#y)

## Properties

### ambient

• `Optional` **ambient**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L28)

___

### background

• `Optional` **background**: [`DDiagramCanvasBackgroundOptions`](DDiagramCanvasBackgroundOptions.md)

A background options.

#### Overrides

[DCanvasOptions](DCanvasOptions.md).[background](DCanvasOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L27)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[border](DCanvasOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### category

• `Optional` **category**: ``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L23)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[children](DCanvasOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[clear](DCanvasOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[corner](DCanvasOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[cursor](DCanvasOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L25)

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

[DCanvasOptions](DCanvasOptions.md).[height](DCanvasOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[interactive](DCanvasOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### label

• `Optional` **label**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L22)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[name](DCanvasOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)\<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[on](DCanvasOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L479)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[outline](DCanvasOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[padding](DCanvasOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

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

[DCanvasOptions](DCanvasOptions.md).[parent](DCanvasOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:396](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L396)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DBaseOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[renderable](DCanvasOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[shadow](DCanvasOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[shortcut](DCanvasOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[shortcuts](DCanvasOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[state](DCanvasOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### summary

• `Optional` **summary**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L24)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[theme](DCanvasOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### tile

• `Optional` **tile**: [`DDiagramCanvasTileOptions`](DDiagramCanvasTileOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L26)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[title](DCanvasOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[visible](DCanvasOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DCanvasOptions](DCanvasOptions.md).[weight](DCanvasOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L484)

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

[DCanvasOptions](DCanvasOptions.md).[width](DCanvasOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L432)

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

[DCanvasOptions](DCanvasOptions.md).[x](DCanvasOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:412](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L412)

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

[DCanvasOptions](DCanvasOptions.md).[y](DCanvasOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
