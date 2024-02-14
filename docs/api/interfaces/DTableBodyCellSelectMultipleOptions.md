[Winter Cardinal UI - v0.407.0](../index.md) / DTableBodyCellSelectMultipleOptions

# Interface: DTableBodyCellSelectMultipleOptions\<ROW, VALUE, THEME\>

[DSelectMultiple](../classes/DSelectMultiple.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellSelectMultiple`](DThemeTableBodyCellSelectMultiple.md)\<`VALUE`\> = [`DThemeTableBodyCellSelectMultiple`](DThemeTableBodyCellSelectMultiple.md)\<`VALUE`\> |

## Hierarchy

- [`DSelectMultipleOptions`](DSelectMultipleOptions.md)\<`VALUE`, `THEME`\>

  ↳ **`DTableBodyCellSelectMultipleOptions`**

## Table of contents

### Properties

- [background](DTableBodyCellSelectMultipleOptions.md#background)
- [border](DTableBodyCellSelectMultipleOptions.md#border)
- [children](DTableBodyCellSelectMultipleOptions.md#children)
- [clear](DTableBodyCellSelectMultipleOptions.md#clear)
- [corner](DTableBodyCellSelectMultipleOptions.md#corner)
- [cursor](DTableBodyCellSelectMultipleOptions.md#cursor)
- [group](DTableBodyCellSelectMultipleOptions.md#group)
- [height](DTableBodyCellSelectMultipleOptions.md#height)
- [image](DTableBodyCellSelectMultipleOptions.md#image)
- [images](DTableBodyCellSelectMultipleOptions.md#images)
- [interactive](DTableBodyCellSelectMultipleOptions.md#interactive)
- [mask](DTableBodyCellSelectMultipleOptions.md#mask)
- [menu](DTableBodyCellSelectMultipleOptions.md#menu)
- [name](DTableBodyCellSelectMultipleOptions.md#name)
- [on](DTableBodyCellSelectMultipleOptions.md#on)
- [outline](DTableBodyCellSelectMultipleOptions.md#outline)
- [padding](DTableBodyCellSelectMultipleOptions.md#padding)
- [parent](DTableBodyCellSelectMultipleOptions.md#parent)
- [renderable](DTableBodyCellSelectMultipleOptions.md#renderable)
- [shadow](DTableBodyCellSelectMultipleOptions.md#shadow)
- [shortcut](DTableBodyCellSelectMultipleOptions.md#shortcut)
- [shortcuts](DTableBodyCellSelectMultipleOptions.md#shortcuts)
- [state](DTableBodyCellSelectMultipleOptions.md#state)
- [text](DTableBodyCellSelectMultipleOptions.md#text)
- [theme](DTableBodyCellSelectMultipleOptions.md#theme)
- [title](DTableBodyCellSelectMultipleOptions.md#title)
- [toggle](DTableBodyCellSelectMultipleOptions.md#toggle)
- [values](DTableBodyCellSelectMultipleOptions.md#values)
- [visible](DTableBodyCellSelectMultipleOptions.md#visible)
- [weight](DTableBodyCellSelectMultipleOptions.md#weight)
- [when](DTableBodyCellSelectMultipleOptions.md#when)
- [width](DTableBodyCellSelectMultipleOptions.md#width)
- [x](DTableBodyCellSelectMultipleOptions.md#x)
- [y](DTableBodyCellSelectMultipleOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[background](DSelectMultipleOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[border](DSelectMultipleOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[children](DSelectMultipleOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[clear](DSelectMultipleOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[corner](DSelectMultipleOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[cursor](DSelectMultipleOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### group

• `Optional` **group**: [`DButtonGroup`](../classes/DButtonGroup.md)\<[`DButtonBase`](../classes/DButtonBase.md)\<`any`, `any`, `any`\>, [`DButtonGroupOptions`](DButtonGroupOptions.md)\<[`DButtonBase`](../classes/DButtonBase.md)\<`any`, `any`, `any`\>, `any`\>\>

A button group.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[group](DSelectMultipleOptions.md#group)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L73)

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

[DSelectMultipleOptions](DSelectMultipleOptions.md).[height](DSelectMultipleOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[image](DSelectMultipleOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L38)

___

### images

• `Optional` **images**: [`DImagePieceOptions`](DImagePieceOptions.md)[]

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[images](DSelectMultipleOptions.md#images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L39)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[interactive](DSelectMultipleOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[mask](DSelectMultipleOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L37)

___

### menu

• `Optional` **menu**: [`DMenuOptions`](DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](DThemeMenu.md)\> \| [`DMenu`](../classes/DMenu.md)\<`VALUE`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](DThemeMenu.md)\>\>

Menu options.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[menu](DSelectMultipleOptions.md#menu)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L57)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[name](DSelectMultipleOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DSelectMultipleOnOptions`](DSelectMultipleOnOptions.md)\<`VALUE`, `any`\>

Mappings of event names and handlers.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[on](DSelectMultipleOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select-multiple.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-select-multiple.ts#L59)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[outline](DSelectMultipleOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[padding](DSelectMultipleOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

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

[DSelectMultipleOptions](DSelectMultipleOptions.md).[parent](DSelectMultipleOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:396](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L396)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DBaseOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[renderable](DSelectMultipleOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[shadow](DSelectMultipleOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[shortcut](DSelectMultipleOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[shortcuts](DSelectMultipleOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[state](DSelectMultipleOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### text

• `Optional` **text**: [`DTextPieceOptions`](DTextPieceOptions.md)\<[`DMenuItem`](../classes/DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](DThemeMenuItem.md), [`DMenuItemOptions`](DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](DThemeMenuItem.md)\>\>[]\>

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[text](DSelectMultipleOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L36)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[theme](DSelectMultipleOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[title](DSelectMultipleOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### toggle

• `Optional` **toggle**: `boolean`

True to turn a toggle mode on.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[toggle](DSelectMultipleOptions.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L68)

___

### values

• `Optional` **values**: `VALUE`[]

A default values.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[values](DSelectMultipleOptions.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select-multiple.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-select-multiple.ts#L57)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[visible](DSelectMultipleOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[weight](DSelectMultipleOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L484)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen-1)

An option when to activate a button.

#### Inherited from

[DSelectMultipleOptions](DSelectMultipleOptions.md).[when](DSelectMultipleOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L78)

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

[DSelectMultipleOptions](DSelectMultipleOptions.md).[width](DSelectMultipleOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L432)

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

[DSelectMultipleOptions](DSelectMultipleOptions.md).[x](DSelectMultipleOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:412](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L412)

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

[DSelectMultipleOptions](DSelectMultipleOptions.md).[y](DSelectMultipleOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
