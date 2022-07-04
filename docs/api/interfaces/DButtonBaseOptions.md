[Winter Cardinal UI - v0.194.0](../index.md) / DButtonBaseOptions

# Interface: DButtonBaseOptions<VALUE, THEME, EMITTER\>

[DButtonBase](../classes/DButtonBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeButtonBase`](DThemeButtonBase.md)<`VALUE`\> = [`DThemeButtonBase`](DThemeButtonBase.md)<`VALUE`\> |
| `EMITTER` | `any` |

## Hierarchy

- [`DImageBaseOptions`](DImageBaseOptions.md)<`VALUE`, `THEME`, `EMITTER`\>

  ↳ **`DButtonBaseOptions`**

  ↳↳ [`DButtonCheckOptions`](DButtonCheckOptions.md)

  ↳↳ [`DButtonLinkOptions`](DButtonLinkOptions.md)

  ↳↳ [`DButtonRadioOptions`](DButtonRadioOptions.md)

  ↳↳ [`DButtonOptions`](DButtonOptions.md)

  ↳↳ [`DDropdownBaseOptions`](DDropdownBaseOptions.md)

  ↳↳ [`DTableBodyCellInputTreeMarkerOptions`](DTableBodyCellInputTreeMarkerOptions.md)

## Table of contents

### Properties

- [background](DButtonBaseOptions.md#background)
- [border](DButtonBaseOptions.md#border)
- [children](DButtonBaseOptions.md#children)
- [clear](DButtonBaseOptions.md#clear)
- [corner](DButtonBaseOptions.md#corner)
- [cursor](DButtonBaseOptions.md#cursor)
- [group](DButtonBaseOptions.md#group)
- [height](DButtonBaseOptions.md#height)
- [image](DButtonBaseOptions.md#image)
- [interactive](DButtonBaseOptions.md#interactive)
- [mask](DButtonBaseOptions.md#mask)
- [name](DButtonBaseOptions.md#name)
- [on](DButtonBaseOptions.md#on)
- [outline](DButtonBaseOptions.md#outline)
- [padding](DButtonBaseOptions.md#padding)
- [parent](DButtonBaseOptions.md#parent)
- [shadow](DButtonBaseOptions.md#shadow)
- [shortcut](DButtonBaseOptions.md#shortcut)
- [shortcuts](DButtonBaseOptions.md#shortcuts)
- [state](DButtonBaseOptions.md#state)
- [text](DButtonBaseOptions.md#text)
- [theme](DButtonBaseOptions.md#theme)
- [title](DButtonBaseOptions.md#title)
- [toggle](DButtonBaseOptions.md#toggle)
- [visible](DButtonBaseOptions.md#visible)
- [weight](DButtonBaseOptions.md#weight)
- [when](DButtonBaseOptions.md#when)
- [width](DButtonBaseOptions.md#width)
- [x](DButtonBaseOptions.md#x)
- [y](DButtonBaseOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[background](DImageBaseOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[border](DImageBaseOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[children](DImageBaseOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[clear](DImageBaseOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[corner](DImageBaseOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[cursor](DImageBaseOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### group

• `Optional` **group**: [`DButtonGroup`](../classes/DButtonGroup.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, [`DButtonGroupOptions`](DButtonGroupOptions.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, `any`\>\>

A button group.

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

[DImageBaseOptions](DImageBaseOptions.md).[height](DImageBaseOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[image](DImageBaseOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[interactive](DImageBaseOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[mask](DImageBaseOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[name](DImageBaseOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DButtonBaseOnOptions`](DButtonBaseOnOptions.md)<`VALUE`, `EMITTER`\>

Mappings of event names and handlers.

#### Overrides

[DImageBaseOptions](DImageBaseOptions.md).[on](DImageBaseOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L68)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[outline](DImageBaseOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[padding](DImageBaseOptions.md#padding)

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

[DImageBaseOptions](DImageBaseOptions.md).[parent](DImageBaseOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[shadow](DImageBaseOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[shortcut](DImageBaseOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[shortcuts](DImageBaseOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[state](DImageBaseOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<`VALUE`\>

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[text](DImageBaseOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[theme](DImageBaseOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[title](DImageBaseOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### toggle

• `Optional` **toggle**: `boolean`

True to turn a toggle mode on.

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L53)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[visible](DImageBaseOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DImageBaseOptions](DImageBaseOptions.md).[weight](DImageBaseOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

An option when to activate a button.

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

[DImageBaseOptions](DImageBaseOptions.md).[width](DImageBaseOptions.md#width)

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

[DImageBaseOptions](DImageBaseOptions.md).[x](DImageBaseOptions.md#x)

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

[DImageBaseOptions](DImageBaseOptions.md).[y](DImageBaseOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
