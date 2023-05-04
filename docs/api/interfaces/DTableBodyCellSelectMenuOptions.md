[Winter Cardinal UI - v0.310.1](../index.md) / DTableBodyCellSelectMenuOptions

# Interface: DTableBodyCellSelectMenuOptions<ROW, VALUE, THEME\>

[DSelect](../classes/DSelect.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellSelectMenu`](DThemeTableBodyCellSelectMenu.md)<`VALUE`\> = [`DThemeTableBodyCellSelectMenu`](DThemeTableBodyCellSelectMenu.md)<`VALUE`\> |

## Hierarchy

- [`DSelectOptions`](DSelectOptions.md)<`VALUE`, `THEME`\>

  ↳ **`DTableBodyCellSelectMenuOptions`**

## Table of contents

### Properties

- [background](DTableBodyCellSelectMenuOptions.md#background)
- [border](DTableBodyCellSelectMenuOptions.md#border)
- [children](DTableBodyCellSelectMenuOptions.md#children)
- [clear](DTableBodyCellSelectMenuOptions.md#clear)
- [corner](DTableBodyCellSelectMenuOptions.md#corner)
- [cursor](DTableBodyCellSelectMenuOptions.md#cursor)
- [group](DTableBodyCellSelectMenuOptions.md#group)
- [height](DTableBodyCellSelectMenuOptions.md#height)
- [image](DTableBodyCellSelectMenuOptions.md#image)
- [interactive](DTableBodyCellSelectMenuOptions.md#interactive)
- [mask](DTableBodyCellSelectMenuOptions.md#mask)
- [menu](DTableBodyCellSelectMenuOptions.md#menu)
- [name](DTableBodyCellSelectMenuOptions.md#name)
- [on](DTableBodyCellSelectMenuOptions.md#on)
- [outline](DTableBodyCellSelectMenuOptions.md#outline)
- [padding](DTableBodyCellSelectMenuOptions.md#padding)
- [parent](DTableBodyCellSelectMenuOptions.md#parent)
- [renderable](DTableBodyCellSelectMenuOptions.md#renderable)
- [shadow](DTableBodyCellSelectMenuOptions.md#shadow)
- [shortcut](DTableBodyCellSelectMenuOptions.md#shortcut)
- [shortcuts](DTableBodyCellSelectMenuOptions.md#shortcuts)
- [state](DTableBodyCellSelectMenuOptions.md#state)
- [text](DTableBodyCellSelectMenuOptions.md#text)
- [theme](DTableBodyCellSelectMenuOptions.md#theme)
- [title](DTableBodyCellSelectMenuOptions.md#title)
- [toggle](DTableBodyCellSelectMenuOptions.md#toggle)
- [value](DTableBodyCellSelectMenuOptions.md#value)
- [visible](DTableBodyCellSelectMenuOptions.md#visible)
- [weight](DTableBodyCellSelectMenuOptions.md#weight)
- [when](DTableBodyCellSelectMenuOptions.md#when)
- [width](DTableBodyCellSelectMenuOptions.md#width)
- [x](DTableBodyCellSelectMenuOptions.md#x)
- [y](DTableBodyCellSelectMenuOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[background](DSelectOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L497)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[border](DSelectOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L500)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[children](DSelectOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L400)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DSelectOptions](DSelectOptions.md).[clear](DSelectOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:509](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L509)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[corner](DSelectOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L472)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[cursor](DSelectOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L512)

___

### group

• `Optional` **group**: [`DButtonGroup`](../classes/DButtonGroup.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, [`DButtonGroupOptions`](DButtonGroupOptions.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, `any`\>\>

A button group.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[group](DSelectOptions.md#group)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L73)

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

[DSelectOptions](DSelectOptions.md).[height](DSelectOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L443)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DSelectOptions](DSelectOptions.md).[image](DSelectOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[interactive](DSelectOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:466](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L466)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DSelectOptions](DSelectOptions.md).[mask](DSelectOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### menu

• `Optional` **menu**: [`DMenuOptions`](DMenuOptions.md)<`VALUE`, [`DThemeMenu`](DThemeMenu.md)\> \| [`DMenu`](../classes/DMenu.md)<`VALUE`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)<`VALUE`, [`DThemeMenu`](DThemeMenu.md)\>\>

Menu options.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[menu](DSelectOptions.md#menu)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L57)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[name](DSelectOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### on

• `Optional` **on**: [`DSelectOnOptions`](DSelectOnOptions.md)<`VALUE`, `any`\>

Mappings of event names and handlers.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[on](DSelectOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-select.ts#L58)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[outline](DSelectOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L503)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[padding](DSelectOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:469](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L469)

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

[DSelectOptions](DSelectOptions.md).[parent](DSelectOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L397)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DTableBodyCellSelectMenuOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[renderable](DSelectOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[shadow](DSelectOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:506](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L506)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[shortcut](DSelectOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L491)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[shortcuts](DSelectOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:494](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L494)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[state](DSelectOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<``null`` \| [`DMenuItem`](../classes/DMenuItem.md)<`VALUE`, [`DThemeMenuItem`](DThemeMenuItem.md), [`DMenuItemOptions`](DMenuItemOptions.md)<`VALUE`, [`DThemeMenuItem`](DThemeMenuItem.md)\>\>\>

#### Inherited from

[DSelectOptions](DSelectOptions.md).[text](DSelectOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[theme](DSelectOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L475)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[title](DSelectOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L488)

___

### toggle

• `Optional` **toggle**: `boolean`

True to turn a toggle mode on.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[toggle](DSelectOptions.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L68)

___

### value

• `Optional` **value**: ``null`` \| `VALUE`

A default value.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[value](DSelectOptions.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-select.ts#L56)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[visible](DSelectOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DSelectOptions](DSelectOptions.md).[weight](DSelectOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:485](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L485)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen-1)

An option when to activate a button.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[when](DSelectOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-base.ts#L78)

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

[DSelectOptions](DSelectOptions.md).[width](DSelectOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:433](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L433)

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

[DSelectOptions](DSelectOptions.md).[x](DSelectOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:413](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L413)

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

[DSelectOptions](DSelectOptions.md).[y](DSelectOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L423)
