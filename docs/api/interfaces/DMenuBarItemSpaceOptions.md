[Winter Cardinal UI - v0.227.0](../index.md) / DMenuBarItemSpaceOptions

# Interface: DMenuBarItemSpaceOptions<THEME\>

[DBase](../classes/DBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeMenuBarItemSpace`](DThemeMenuBarItemSpace.md) = [`DThemeMenuBarItemSpace`](DThemeMenuBarItemSpace.md) |

## Hierarchy

- [`DLayoutSpaceOptions`](DLayoutSpaceOptions.md)<`THEME`\>

  ↳ **`DMenuBarItemSpaceOptions`**

## Table of contents

### Properties

- [background](DMenuBarItemSpaceOptions.md#background)
- [border](DMenuBarItemSpaceOptions.md#border)
- [children](DMenuBarItemSpaceOptions.md#children)
- [clear](DMenuBarItemSpaceOptions.md#clear)
- [corner](DMenuBarItemSpaceOptions.md#corner)
- [cursor](DMenuBarItemSpaceOptions.md#cursor)
- [height](DMenuBarItemSpaceOptions.md#height)
- [interactive](DMenuBarItemSpaceOptions.md#interactive)
- [name](DMenuBarItemSpaceOptions.md#name)
- [on](DMenuBarItemSpaceOptions.md#on)
- [outline](DMenuBarItemSpaceOptions.md#outline)
- [padding](DMenuBarItemSpaceOptions.md#padding)
- [parent](DMenuBarItemSpaceOptions.md#parent)
- [shadow](DMenuBarItemSpaceOptions.md#shadow)
- [shortcut](DMenuBarItemSpaceOptions.md#shortcut)
- [shortcuts](DMenuBarItemSpaceOptions.md#shortcuts)
- [space](DMenuBarItemSpaceOptions.md#space)
- [state](DMenuBarItemSpaceOptions.md#state)
- [theme](DMenuBarItemSpaceOptions.md#theme)
- [title](DMenuBarItemSpaceOptions.md#title)
- [visible](DMenuBarItemSpaceOptions.md#visible)
- [weight](DMenuBarItemSpaceOptions.md#weight)
- [width](DMenuBarItemSpaceOptions.md#width)
- [x](DMenuBarItemSpaceOptions.md#x)
- [y](DMenuBarItemSpaceOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[background](DLayoutSpaceOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[border](DLayoutSpaceOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[children](DLayoutSpaceOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L374)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[clear](DLayoutSpaceOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[corner](DLayoutSpaceOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:437](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L437)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[cursor](DLayoutSpaceOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:477](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L477)

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

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[height](DLayoutSpaceOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[interactive](DLayoutSpaceOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[name](DLayoutSpaceOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L377)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[on](DLayoutSpaceOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[outline](DLayoutSpaceOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[padding](DLayoutSpaceOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:434](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L434)

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

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[parent](DLayoutSpaceOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L371)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[shadow](DLayoutSpaceOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[shortcut](DLayoutSpaceOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:456](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L456)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[shortcuts](DLayoutSpaceOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### space

• **space**: ``true``

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-bar.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-bar.ts#L19)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[state](DLayoutSpaceOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L428)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[theme](DLayoutSpaceOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L440)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[title](DLayoutSpaceOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L453)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[visible](DLayoutSpaceOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:425](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L425)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[weight](DLayoutSpaceOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

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

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[width](DLayoutSpaceOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:407](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L407)

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

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[x](DLayoutSpaceOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:387](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L387)

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

[DLayoutSpaceOptions](DLayoutSpaceOptions.md).[y](DLayoutSpaceOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L397)
