[Winter Cardinal UI - v0.199.0](../index.md) / DMenuItemLinkOptions

# Interface: DMenuItemLinkOptions<VALUE, THEME\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeMenuItemLink`](DThemeMenuItemLink.md) = [`DThemeMenuItemLink`](DThemeMenuItemLink.md) |

## Hierarchy

- [`DMenuItemTextOptions`](DMenuItemTextOptions.md)<`VALUE`, `THEME`\>

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
- [interactive](DMenuItemLinkOptions.md#interactive)
- [mask](DMenuItemLinkOptions.md#mask)
- [menu](DMenuItemLinkOptions.md#menu)
- [name](DMenuItemLinkOptions.md#name)
- [on](DMenuItemLinkOptions.md#on)
- [outline](DMenuItemLinkOptions.md#outline)
- [padding](DMenuItemLinkOptions.md#padding)
- [parent](DMenuItemLinkOptions.md#parent)
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

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[border](DMenuItemTextOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### checker

• `Optional` **checker**: [`DMenuItemLinkChecker`](../index.md#dmenuitemlinkchecker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-link.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-menu-item-link.ts#L24)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[children](DMenuItemTextOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[clear](DMenuItemTextOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[corner](DMenuItemTextOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[cursor](DMenuItemTextOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

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

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[image](DMenuItemTextOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[interactive](DMenuItemTextOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[mask](DMenuItemTextOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### menu

• `Optional` **menu**: [`DMenuOptions`](DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](DThemeMenu.md)\> \| [`DMenu`](../classes/DMenu.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-link.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-menu-item-link.ts#L25)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[name](DMenuItemTextOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DImageBaseOnOptions`](DImageBaseOnOptions.md)<`string`, `any`\>

Mappings of event names and event handlers.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[on](DMenuItemTextOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L47)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[outline](DMenuItemTextOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[padding](DMenuItemTextOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[shadow](DMenuItemTextOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[shortcut](DMenuItemTextOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[shortcuts](DMenuItemTextOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[state](DMenuItemTextOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### target

• `Optional` **target**: ``"AUTO"`` \| ``"NEW_WINDOW"`` \| ``"THIS_WINDOW"`` \| [`DLinkTarget`](../index.md#dlinktarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-link.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-menu-item-link.ts#L23)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<`string`\>

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[text](DMenuItemTextOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[theme](DMenuItemTextOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[title](DMenuItemTextOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### url

• `Optional` **url**: `string` \| [`DMenuItemLinkUrlMaker`](../index.md#dmenuitemlinkurlmaker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-link.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-menu-item-link.ts#L22)

___

### value

• `Optional` **value**: `VALUE`

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[value](DMenuItemTextOptions.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-menu-item-base.ts#L16)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[visible](DMenuItemTextOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DMenuItemTextOptions](DMenuItemTextOptions.md).[weight](DMenuItemTextOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

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

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
