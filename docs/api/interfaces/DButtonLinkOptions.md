[Winter Cardinal UI - v0.194.0](../index.md) / DButtonLinkOptions

# Interface: DButtonLinkOptions<VALUE, THEME\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeButtonLink`](DThemeButtonLink.md)<`VALUE`\> = [`DThemeButtonLink`](DThemeButtonLink.md)<`VALUE`\> |

## Hierarchy

- [`DButtonBaseOptions`](DButtonBaseOptions.md)<`VALUE`, `THEME`\>

- [`DLinkOptions`](DLinkOptions.md)

  ↳ **`DButtonLinkOptions`**

## Table of contents

### Properties

- [background](DButtonLinkOptions.md#background)
- [border](DButtonLinkOptions.md#border)
- [checker](DButtonLinkOptions.md#checker)
- [children](DButtonLinkOptions.md#children)
- [clear](DButtonLinkOptions.md#clear)
- [corner](DButtonLinkOptions.md#corner)
- [cursor](DButtonLinkOptions.md#cursor)
- [group](DButtonLinkOptions.md#group)
- [height](DButtonLinkOptions.md#height)
- [image](DButtonLinkOptions.md#image)
- [interactive](DButtonLinkOptions.md#interactive)
- [mask](DButtonLinkOptions.md#mask)
- [menu](DButtonLinkOptions.md#menu)
- [name](DButtonLinkOptions.md#name)
- [on](DButtonLinkOptions.md#on)
- [outline](DButtonLinkOptions.md#outline)
- [padding](DButtonLinkOptions.md#padding)
- [parent](DButtonLinkOptions.md#parent)
- [shadow](DButtonLinkOptions.md#shadow)
- [shortcut](DButtonLinkOptions.md#shortcut)
- [shortcuts](DButtonLinkOptions.md#shortcuts)
- [state](DButtonLinkOptions.md#state)
- [target](DButtonLinkOptions.md#target)
- [text](DButtonLinkOptions.md#text)
- [theme](DButtonLinkOptions.md#theme)
- [title](DButtonLinkOptions.md#title)
- [toggle](DButtonLinkOptions.md#toggle)
- [url](DButtonLinkOptions.md#url)
- [visible](DButtonLinkOptions.md#visible)
- [weight](DButtonLinkOptions.md#weight)
- [when](DButtonLinkOptions.md#when)
- [width](DButtonLinkOptions.md#width)
- [x](DButtonLinkOptions.md#x)
- [y](DButtonLinkOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[background](DButtonBaseOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[border](DButtonBaseOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### checker

• `Optional` **checker**: [`DLinkChecker`](../index.md#dlinkchecker)

#### Inherited from

[DLinkOptions](DLinkOptions.md).[checker](DLinkOptions.md#checker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-link.ts#L32)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[children](DButtonBaseOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[clear](DButtonBaseOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[corner](DButtonBaseOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[cursor](DButtonBaseOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### group

• `Optional` **group**: [`DButtonGroup`](../classes/DButtonGroup.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, [`DButtonGroupOptions`](DButtonGroupOptions.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, `any`\>\>

A button group.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[group](DButtonBaseOptions.md#group)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L58)

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

[DButtonBaseOptions](DButtonBaseOptions.md).[height](DButtonBaseOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[image](DButtonBaseOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[interactive](DButtonBaseOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[mask](DButtonBaseOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### menu

• `Optional` **menu**: [`DMenuOptions`](DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](DThemeMenu.md)\> \| [`DMenu`](../classes/DMenu.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](DThemeMenu.md)\>\>

#### Inherited from

[DLinkOptions](DLinkOptions.md).[menu](DLinkOptions.md#menu)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-link.ts#L33)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[name](DButtonBaseOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DButtonBaseOnOptions`](DButtonBaseOnOptions.md)<`VALUE`, `any`\>

Mappings of event names and handlers.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[on](DButtonBaseOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L68)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[outline](DButtonBaseOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[padding](DButtonBaseOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DButtonBaseOptions](DButtonBaseOptions.md).[parent](DButtonBaseOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[shadow](DButtonBaseOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[shortcut](DButtonBaseOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[shortcuts](DButtonBaseOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[state](DButtonBaseOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### target

• `Optional` **target**: [`DLinkTargetValue`](../index.md#dlinktargetvalue)

#### Inherited from

[DLinkOptions](DLinkOptions.md).[target](DLinkOptions.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-link.ts#L31)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<`VALUE`\>

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[text](DButtonBaseOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[theme](DButtonBaseOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[title](DButtonBaseOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### toggle

• `Optional` **toggle**: `boolean`

True to turn a toggle mode on.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[toggle](DButtonBaseOptions.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L53)

___

### url

• `Optional` **url**: [`DLinkUrlValue`](../index.md#dlinkurlvalue) \| [`DLinkUrlMaker`](../index.md#dlinkurlmaker)

#### Inherited from

[DLinkOptions](DLinkOptions.md).[url](DLinkOptions.md#url)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-link.ts#L30)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[visible](DButtonBaseOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[weight](DButtonBaseOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

An option when to activate a button.

#### Inherited from

[DButtonBaseOptions](DButtonBaseOptions.md).[when](DButtonBaseOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L63)

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

[DButtonBaseOptions](DButtonBaseOptions.md).[width](DButtonBaseOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[DButtonBaseOptions](DButtonBaseOptions.md).[x](DButtonBaseOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[DButtonBaseOptions](DButtonBaseOptions.md).[y](DButtonBaseOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
