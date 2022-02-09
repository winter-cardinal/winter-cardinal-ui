[Winter Cardinal UI](../README.md) / DTableBodyCellButtonOptions

# Interface: DTableBodyCellButtonOptions<ROW, VALUE, THEME\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `ROW` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellButton`](DThemeTableBodyCellButton.md)<`VALUE`\> = [`DThemeTableBodyCellButton`](DThemeTableBodyCellButton.md)<`VALUE`\> |

## Hierarchy

- [`DTableBodyCellTextOptions`](DTableBodyCellTextOptions.md)<`ROW`, `VALUE` \| ``null``, `THEME`\>

  ↳ **`DTableBodyCellButtonOptions`**

  ↳↳ [`DTableBodyCellLinkOptions`](DTableBodyCellLinkOptions.md)

  ↳↳ [`DTableBodyCellTreeOptions`](DTableBodyCellTreeOptions.md)

## Table of contents

### Properties

- [background](DTableBodyCellButtonOptions.md#background)
- [border](DTableBodyCellButtonOptions.md#border)
- [children](DTableBodyCellButtonOptions.md#children)
- [clear](DTableBodyCellButtonOptions.md#clear)
- [corner](DTableBodyCellButtonOptions.md#corner)
- [cursor](DTableBodyCellButtonOptions.md#cursor)
- [height](DTableBodyCellButtonOptions.md#height)
- [image](DTableBodyCellButtonOptions.md#image)
- [interactive](DTableBodyCellButtonOptions.md#interactive)
- [mask](DTableBodyCellButtonOptions.md#mask)
- [name](DTableBodyCellButtonOptions.md#name)
- [on](DTableBodyCellButtonOptions.md#on)
- [outline](DTableBodyCellButtonOptions.md#outline)
- [padding](DTableBodyCellButtonOptions.md#padding)
- [parent](DTableBodyCellButtonOptions.md#parent)
- [shadow](DTableBodyCellButtonOptions.md#shadow)
- [shortcut](DTableBodyCellButtonOptions.md#shortcut)
- [shortcuts](DTableBodyCellButtonOptions.md#shortcuts)
- [state](DTableBodyCellButtonOptions.md#state)
- [text](DTableBodyCellButtonOptions.md#text)
- [theme](DTableBodyCellButtonOptions.md#theme)
- [title](DTableBodyCellButtonOptions.md#title)
- [visible](DTableBodyCellButtonOptions.md#visible)
- [weight](DTableBodyCellButtonOptions.md#weight)
- [when](DTableBodyCellButtonOptions.md#when)
- [width](DTableBodyCellButtonOptions.md#width)
- [x](DTableBodyCellButtonOptions.md#x)
- [y](DTableBodyCellButtonOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[background](DTableBodyCellTextOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[border](DTableBodyCellTextOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[children](DTableBodyCellTextOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[clear](DTableBodyCellTextOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[corner](DTableBodyCellTextOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[cursor](DTableBodyCellTextOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### height

• `Optional` **height**: [`DCoordinateSize`](../README.md#dcoordinatesize)

One of the followings:
* A height
* A size keyword
* A size expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a hight ([DScalarFunction](../README.md#dscalarfunction))
* An object returning a hight ([DScalar](DScalar.md))

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[height](DTableBodyCellTextOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[image](DTableBodyCellTextOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L45)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[interactive](DTableBodyCellTextOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[mask](DTableBodyCellTextOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[name](DTableBodyCellTextOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DImageBaseOnOptions`](DImageBaseOnOptions.md)<``null`` \| `VALUE`, `any`\>

Mappings of event names and event handlers.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[on](DTableBodyCellTextOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[outline](DTableBodyCellTextOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[padding](DTableBodyCellTextOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[parent](DTableBodyCellTextOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../README.md#dbaseshadow)

A shadow.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[shadow](DTableBodyCellTextOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[shortcut](DTableBodyCellTextOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[shortcuts](DTableBodyCellTextOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[state](DTableBodyCellTextOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<``null`` \| `VALUE`\>

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[text](DTableBodyCellTextOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[theme](DTableBodyCellTextOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[title](DTableBodyCellTextOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[visible](DTableBodyCellTextOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[weight](DTableBodyCellTextOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../README.md#dbuttonbasewhen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-table-body-cell-button.ts#L24)

___

### width

• `Optional` **width**: [`DCoordinateSize`](../README.md#dcoordinatesize)

One of the followings:
* A width
* A size keyword
* A size expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a width ([DScalarFunction](../README.md#dscalarfunction))
* An object returning a width ([DScalar](DScalar.md))

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[width](DTableBodyCellTextOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

___

### x

• `Optional` **x**: [`DCoordinatePosition`](../README.md#dcoordinateposition)

One of the followings:
* A X position
* A position keyword
* A position expression (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a X position ([DScalarFunction](../README.md#dscalarfunction))
* An object returning a X position ([DScalar](DScalar.md))

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[x](DTableBodyCellTextOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

___

### y

• `Optional` **y**: [`DCoordinatePosition`](../README.md#dcoordinateposition)

One of the followings:
* A Y position
* A position keyword
* A position expresion (Parsed by [DScalarExpression](../classes/DScalarExpression.md))
* A function returning a Y position ([DScalarFunction](../README.md#dscalarfunction))
* An object returning a Y position ([DScalar](DScalar.md))

#### Inherited from

[DTableBodyCellTextOptions](DTableBodyCellTextOptions.md).[y](DTableBodyCellTextOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
