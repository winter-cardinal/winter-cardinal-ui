[Winter Cardinal UI - v0.205.1](../index.md) / DTreeItemButtonOptions

# Interface: DTreeItemButtonOptions<NODE, THEME, EMITTER\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](DTreeNode.md) |
| `THEME` | extends [`DThemeTreeItemButton`](DThemeTreeItemButton.md) = [`DThemeTreeItemButton`](DThemeTreeItemButton.md) |
| `EMITTER` | `any` |

## Hierarchy

- [`DTreeItemTextOptions`](DTreeItemTextOptions.md)<`NODE`, `THEME`, `EMITTER`\>

  ↳ **`DTreeItemButtonOptions`**

  ↳↳ [`DTreeItemNonEditableOptions`](DTreeItemNonEditableOptions.md)

## Table of contents

### Properties

- [background](DTreeItemButtonOptions.md#background)
- [border](DTreeItemButtonOptions.md#border)
- [children](DTreeItemButtonOptions.md#children)
- [clear](DTreeItemButtonOptions.md#clear)
- [corner](DTreeItemButtonOptions.md#corner)
- [cursor](DTreeItemButtonOptions.md#cursor)
- [height](DTreeItemButtonOptions.md#height)
- [image](DTreeItemButtonOptions.md#image)
- [interactive](DTreeItemButtonOptions.md#interactive)
- [mask](DTreeItemButtonOptions.md#mask)
- [name](DTreeItemButtonOptions.md#name)
- [on](DTreeItemButtonOptions.md#on)
- [outline](DTreeItemButtonOptions.md#outline)
- [padding](DTreeItemButtonOptions.md#padding)
- [parent](DTreeItemButtonOptions.md#parent)
- [shadow](DTreeItemButtonOptions.md#shadow)
- [shortcut](DTreeItemButtonOptions.md#shortcut)
- [shortcuts](DTreeItemButtonOptions.md#shortcuts)
- [state](DTreeItemButtonOptions.md#state)
- [text](DTreeItemButtonOptions.md#text)
- [theme](DTreeItemButtonOptions.md#theme)
- [title](DTreeItemButtonOptions.md#title)
- [visible](DTreeItemButtonOptions.md#visible)
- [weight](DTreeItemButtonOptions.md#weight)
- [when](DTreeItemButtonOptions.md#when)
- [width](DTreeItemButtonOptions.md#width)
- [x](DTreeItemButtonOptions.md#x)
- [y](DTreeItemButtonOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[background](DTreeItemTextOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[border](DTreeItemTextOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[children](DTreeItemTextOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[clear](DTreeItemTextOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[corner](DTreeItemTextOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[cursor](DTreeItemTextOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L463)

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

[DTreeItemTextOptions](DTreeItemTextOptions.md).[height](DTreeItemTextOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[image](DTreeItemTextOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[interactive](DTreeItemTextOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[mask](DTreeItemTextOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[name](DTreeItemTextOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DTreeItemTextOnOptions`](DTreeItemTextOnOptions.md)<`NODE`, `EMITTER`\>

Mappings of event names and event handlers.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[on](DTreeItemTextOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-text.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-tree-item-text.ts#L56)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[outline](DTreeItemTextOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[padding](DTreeItemTextOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DTreeItemTextOptions](DTreeItemTextOptions.md).[parent](DTreeItemTextOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[shadow](DTreeItemTextOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[shortcut](DTreeItemTextOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[shortcuts](DTreeItemTextOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[state](DTreeItemTextOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<`string`\>

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[text](DTreeItemTextOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[theme](DTreeItemTextOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[title](DTreeItemTextOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[visible](DTreeItemTextOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DTreeItemTextOptions](DTreeItemTextOptions.md).[weight](DTreeItemTextOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L436)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-item-button.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-tree-item-button.ts#L20)

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

[DTreeItemTextOptions](DTreeItemTextOptions.md).[width](DTreeItemTextOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[DTreeItemTextOptions](DTreeItemTextOptions.md).[x](DTreeItemTextOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[DTreeItemTextOptions](DTreeItemTextOptions.md).[y](DTreeItemTextOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-base.ts#L383)
