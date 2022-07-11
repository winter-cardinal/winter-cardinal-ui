[Winter Cardinal UI - v0.200.0](../index.md) / DSelectMultipleOptions

# Interface: DSelectMultipleOptions<VALUE, THEME, EMITTER\>

[DSelectMultiple](../classes/DSelectMultiple.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeSelectMultiple`](DThemeSelectMultiple.md)<`VALUE`\> = [`DThemeSelectMultiple`](DThemeSelectMultiple.md)<`VALUE`\> |
| `EMITTER` | `any` |

## Hierarchy

- [`DDropdownBaseOptions`](DDropdownBaseOptions.md)<`VALUE`, [`DMenuItem`](../classes/DMenuItem.md)<`VALUE`\>[], `THEME`, `EMITTER`\>

  ↳ **`DSelectMultipleOptions`**

  ↳↳ [`DTableBodyCellSelectMultipleOptions`](DTableBodyCellSelectMultipleOptions.md)

## Table of contents

### Properties

- [background](DSelectMultipleOptions.md#background)
- [border](DSelectMultipleOptions.md#border)
- [children](DSelectMultipleOptions.md#children)
- [clear](DSelectMultipleOptions.md#clear)
- [corner](DSelectMultipleOptions.md#corner)
- [cursor](DSelectMultipleOptions.md#cursor)
- [group](DSelectMultipleOptions.md#group)
- [height](DSelectMultipleOptions.md#height)
- [image](DSelectMultipleOptions.md#image)
- [interactive](DSelectMultipleOptions.md#interactive)
- [mask](DSelectMultipleOptions.md#mask)
- [menu](DSelectMultipleOptions.md#menu)
- [name](DSelectMultipleOptions.md#name)
- [on](DSelectMultipleOptions.md#on)
- [outline](DSelectMultipleOptions.md#outline)
- [padding](DSelectMultipleOptions.md#padding)
- [parent](DSelectMultipleOptions.md#parent)
- [shadow](DSelectMultipleOptions.md#shadow)
- [shortcut](DSelectMultipleOptions.md#shortcut)
- [shortcuts](DSelectMultipleOptions.md#shortcuts)
- [state](DSelectMultipleOptions.md#state)
- [text](DSelectMultipleOptions.md#text)
- [theme](DSelectMultipleOptions.md#theme)
- [title](DSelectMultipleOptions.md#title)
- [toggle](DSelectMultipleOptions.md#toggle)
- [values](DSelectMultipleOptions.md#values)
- [visible](DSelectMultipleOptions.md#visible)
- [weight](DSelectMultipleOptions.md#weight)
- [when](DSelectMultipleOptions.md#when)
- [width](DSelectMultipleOptions.md#width)
- [x](DSelectMultipleOptions.md#x)
- [y](DSelectMultipleOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[background](DDropdownBaseOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[border](DDropdownBaseOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[children](DDropdownBaseOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[clear](DDropdownBaseOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[corner](DDropdownBaseOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[cursor](DDropdownBaseOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### group

• `Optional` **group**: [`DButtonGroup`](../classes/DButtonGroup.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, [`DButtonGroupOptions`](DButtonGroupOptions.md)<[`DButtonBase`](../classes/DButtonBase.md)<`any`, `any`, `any`\>, `any`\>\>

A button group.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[group](DDropdownBaseOptions.md#group)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L58)

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

[DDropdownBaseOptions](DDropdownBaseOptions.md).[height](DDropdownBaseOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[image](DDropdownBaseOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[interactive](DDropdownBaseOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[mask](DDropdownBaseOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### menu

• `Optional` **menu**: [`DMenuOptions`](DMenuOptions.md)<`VALUE`, [`DThemeMenu`](DThemeMenu.md)\> \| [`DMenu`](../classes/DMenu.md)<`VALUE`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)<`VALUE`, [`DThemeMenu`](DThemeMenu.md)\>\>

Menu options.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[menu](DDropdownBaseOptions.md#menu)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L52)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[name](DDropdownBaseOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DSelectMultipleOnOptions`](DSelectMultipleOnOptions.md)<`VALUE`, `EMITTER`\>

Mappings of event names and handlers.

#### Overrides

[DDropdownBaseOptions](DDropdownBaseOptions.md).[on](DDropdownBaseOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select-multiple.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-select-multiple.ts#L59)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[outline](DDropdownBaseOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[padding](DDropdownBaseOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DDropdownBaseOptions](DDropdownBaseOptions.md).[parent](DDropdownBaseOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[shadow](DDropdownBaseOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[shortcut](DDropdownBaseOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[shortcuts](DDropdownBaseOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[state](DDropdownBaseOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<[`DMenuItem`](../classes/DMenuItem.md)<`VALUE`, [`DThemeMenuItem`](DThemeMenuItem.md), [`DMenuItemOptions`](DMenuItemOptions.md)<`VALUE`, [`DThemeMenuItem`](DThemeMenuItem.md)\>\>[]\>

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[text](DDropdownBaseOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[theme](DDropdownBaseOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[title](DDropdownBaseOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### toggle

• `Optional` **toggle**: `boolean`

True to turn a toggle mode on.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[toggle](DDropdownBaseOptions.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L53)

___

### values

• `Optional` **values**: `VALUE`[]

A default values.

#### Defined in

[src/main/typescript/wcardinal/ui/d-select-multiple.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-select-multiple.ts#L57)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[visible](DDropdownBaseOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[weight](DDropdownBaseOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

An option when to activate a button.

#### Inherited from

[DDropdownBaseOptions](DDropdownBaseOptions.md).[when](DDropdownBaseOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L63)

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

[DDropdownBaseOptions](DDropdownBaseOptions.md).[width](DDropdownBaseOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[DDropdownBaseOptions](DDropdownBaseOptions.md).[x](DDropdownBaseOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[DDropdownBaseOptions](DDropdownBaseOptions.md).[y](DDropdownBaseOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
