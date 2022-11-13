[Winter Cardinal UI - v0.227.0](../index.md) / DMenuItemOptions

# Interface: DMenuItemOptions<VALUE, THEME\>

[DImageBase](../classes/DImageBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeMenuItem`](DThemeMenuItem.md) = [`DThemeMenuItem`](DThemeMenuItem.md) |

## Hierarchy

- [`DMenuItemBaseOptions`](DMenuItemBaseOptions.md)<`VALUE`, `THEME`\>

  ↳ **`DMenuItemOptions`**

  ↳↳ [`DMenuItemMenuOptions`](DMenuItemMenuOptions.md)

  ↳↳ [`DMenuItemTextOptions`](DMenuItemTextOptions.md)

## Table of contents

### Properties

- [background](DMenuItemOptions.md#background)
- [border](DMenuItemOptions.md#border)
- [children](DMenuItemOptions.md#children)
- [clear](DMenuItemOptions.md#clear)
- [corner](DMenuItemOptions.md#corner)
- [cursor](DMenuItemOptions.md#cursor)
- [height](DMenuItemOptions.md#height)
- [image](DMenuItemOptions.md#image)
- [interactive](DMenuItemOptions.md#interactive)
- [mask](DMenuItemOptions.md#mask)
- [name](DMenuItemOptions.md#name)
- [on](DMenuItemOptions.md#on)
- [outline](DMenuItemOptions.md#outline)
- [padding](DMenuItemOptions.md#padding)
- [parent](DMenuItemOptions.md#parent)
- [shadow](DMenuItemOptions.md#shadow)
- [shortcut](DMenuItemOptions.md#shortcut)
- [shortcuts](DMenuItemOptions.md#shortcuts)
- [state](DMenuItemOptions.md#state)
- [text](DMenuItemOptions.md#text)
- [theme](DMenuItemOptions.md#theme)
- [title](DMenuItemOptions.md#title)
- [value](DMenuItemOptions.md#value)
- [visible](DMenuItemOptions.md#visible)
- [weight](DMenuItemOptions.md#weight)
- [width](DMenuItemOptions.md#width)
- [x](DMenuItemOptions.md#x)
- [y](DMenuItemOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[background](DMenuItemBaseOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[border](DMenuItemBaseOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[children](DMenuItemBaseOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L374)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[clear](DMenuItemBaseOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[corner](DMenuItemBaseOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:437](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L437)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[cursor](DMenuItemBaseOptions.md#cursor)

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

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[height](DMenuItemBaseOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[image](DMenuItemBaseOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[interactive](DMenuItemBaseOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[mask](DMenuItemBaseOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[name](DMenuItemBaseOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L377)

___

### on

• `Optional` **on**: [`DImageBaseOnOptions`](DImageBaseOnOptions.md)<`string`, `any`\>

Mappings of event names and event handlers.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[on](DMenuItemBaseOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L47)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[outline](DMenuItemBaseOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[padding](DMenuItemBaseOptions.md#padding)

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

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[parent](DMenuItemBaseOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L371)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[shadow](DMenuItemBaseOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[shortcut](DMenuItemBaseOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:456](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L456)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[shortcuts](DMenuItemBaseOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[state](DMenuItemBaseOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L428)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<`string`\>

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[text](DMenuItemBaseOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[theme](DMenuItemBaseOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L440)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[title](DMenuItemBaseOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L453)

___

### value

• `Optional` **value**: `VALUE`

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[value](DMenuItemBaseOptions.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L16)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[visible](DMenuItemBaseOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:425](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L425)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[weight](DMenuItemBaseOptions.md#weight)

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

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[width](DMenuItemBaseOptions.md#width)

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

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[x](DMenuItemBaseOptions.md#x)

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

[DMenuItemBaseOptions](DMenuItemBaseOptions.md).[y](DMenuItemBaseOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L397)
