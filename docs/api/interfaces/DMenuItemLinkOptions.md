[Winter Cardinal UI - v0.457.0](../index.md) / DMenuItemLinkOptions

# Interface: DMenuItemLinkOptions\<VALUE, THEME\>

[DImageBase](../classes/DImageBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeMenuItemLink`](DThemeMenuItemLink.md) = [`DThemeMenuItemLink`](DThemeMenuItemLink.md) |

## Hierarchy

- [`DMenuItemTextOptions`](DMenuItemTextOptions.md)\<`VALUE`, `THEME`\>

  ↳ **`DMenuItemLinkOptions`**

## Table of contents

### Properties

- [background](DMenuItemLinkOptions.md#background)
- [border](DMenuItemLinkOptions.md#border)
- [checker](DMenuItemLinkOptions.md#checker)
- [children](DMenuItemLinkOptions.md#children)
- [clear](DMenuItemLinkOptions.md#clear)
- [corner](DMenuItemLinkOptions.md#corner)
- [cursor](DMenuItemLinkOptions.md#cursor)
- [height](DMenuItemLinkOptions.md#height)
- [image](DMenuItemLinkOptions.md#image)
- [images](DMenuItemLinkOptions.md#images)
- [interactive](DMenuItemLinkOptions.md#interactive)
- [mask](DMenuItemLinkOptions.md#mask)
- [menu](DMenuItemLinkOptions.md#menu)
- [name](DMenuItemLinkOptions.md#name)
- [on](DMenuItemLinkOptions.md#on)
- [outline](DMenuItemLinkOptions.md#outline)
- [padding](DMenuItemLinkOptions.md#padding)
- [parent](DMenuItemLinkOptions.md#parent)
- [renderable](DMenuItemLinkOptions.md#renderable)
- [shadow](DMenuItemLinkOptions.md#shadow)
- [shortcut](DMenuItemLinkOptions.md#shortcut)
- [shortcuts](DMenuItemLinkOptions.md#shortcuts)
- [state](DMenuItemLinkOptions.md#state)
- [target](DMenuItemLinkOptions.md#target)
- [text](DMenuItemLinkOptions.md#text)
- [theme](DMenuItemLinkOptions.md#theme)
- [title](DMenuItemLinkOptions.md#title)
- [url](DMenuItemLinkOptions.md#url)
- [value](DMenuItemLinkOptions.md#value)
- [visible](DMenuItemLinkOptions.md#visible)
- [weight](DMenuItemLinkOptions.md#weight)
- [width](DMenuItemLinkOptions.md#width)
- [x](DMenuItemLinkOptions.md#x)
- [y](DMenuItemLinkOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[background](DMenuItemTextOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[border](DMenuItemTextOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### checker

• `Optional` **checker**: [`DMenuItemLinkChecker`](../index.md#dmenuitemlinkchecker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-link.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-menu-item-link.ts#L24)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[children](DMenuItemTextOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[clear](DMenuItemTextOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[corner](DMenuItemTextOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[cursor](DMenuItemTextOptions.md#cursor)

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

[DMenuItemTextOptions](DMenuItemTextOptions.md).[height](DMenuItemTextOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[image](DMenuItemTextOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L38)

___

### images

• `Optional` **images**: [`DImagePieceOptions`](DImagePieceOptions.md)[]

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[images](DMenuItemTextOptions.md#images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L39)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[interactive](DMenuItemTextOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[mask](DMenuItemTextOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L37)

___

### menu

• `Optional` **menu**: [`DMenuOptions`](DMenuOptions.md)\<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](DThemeMenu.md)\> \| [`DMenu`](../classes/DMenu.md)\<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)\<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-link.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-menu-item-link.ts#L25)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[name](DMenuItemTextOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DImageBaseOnOptions`](DImageBaseOnOptions.md)\<`string`, `any`\>

Mappings of event names and event handlers.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[on](DMenuItemTextOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L40)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[outline](DMenuItemTextOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[padding](DMenuItemTextOptions.md#padding)

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

[DMenuItemTextOptions](DMenuItemTextOptions.md).[parent](DMenuItemTextOptions.md#parent)

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

[DMenuItemTextOptions](DMenuItemTextOptions.md).[renderable](DMenuItemTextOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[shadow](DMenuItemTextOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[shortcut](DMenuItemTextOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[shortcuts](DMenuItemTextOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[state](DMenuItemTextOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### target

• `Optional` **target**: ``"NEW_WINDOW"`` \| ``"AUTO"`` \| ``"THIS_WINDOW"`` \| [`DLinkTarget`](../index.md#dlinktarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-link.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-menu-item-link.ts#L23)

___

### text

• `Optional` **text**: [`DTextPieceOptions`](DTextPieceOptions.md)\<`string`\>

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[text](DMenuItemTextOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L36)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[theme](DMenuItemTextOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[title](DMenuItemTextOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### url

• `Optional` **url**: `string` \| [`DMenuItemLinkUrlMaker`](../index.md#dmenuitemlinkurlmaker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-link.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-menu-item-link.ts#L22)

___

### value

• `Optional` **value**: `VALUE`

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[value](DMenuItemTextOptions.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L16)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[visible](DMenuItemTextOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[weight](DMenuItemTextOptions.md#weight)

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

[DMenuItemTextOptions](DMenuItemTextOptions.md).[width](DMenuItemTextOptions.md#width)

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

[DMenuItemTextOptions](DMenuItemTextOptions.md).[x](DMenuItemTextOptions.md#x)

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

[DMenuItemTextOptions](DMenuItemTextOptions.md).[y](DMenuItemTextOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
