[Winter Cardinal UI - v0.457.0](../index.md) / DDialogSelectCategoryOptions

# Interface: DDialogSelectCategoryOptions\<VALUE, CATEGORY_ID\>

[DDialogSelect](../classes/DDialogSelect.md) category options.

## Type parameters

| Name |
| :------ |
| `VALUE` |
| `CATEGORY_ID` |

## Hierarchy

- [`DSelectOptions`](DSelectOptions.md)\<`CATEGORY_ID` \| ``null``\>

  ↳ **`DDialogSelectCategoryOptions`**

## Table of contents

### Properties

- [background](DDialogSelectCategoryOptions.md#background)
- [border](DDialogSelectCategoryOptions.md#border)
- [children](DDialogSelectCategoryOptions.md#children)
- [clear](DDialogSelectCategoryOptions.md#clear)
- [corner](DDialogSelectCategoryOptions.md#corner)
- [cursor](DDialogSelectCategoryOptions.md#cursor)
- [dismiss](DDialogSelectCategoryOptions.md#dismiss)
- [group](DDialogSelectCategoryOptions.md#group)
- [height](DDialogSelectCategoryOptions.md#height)
- [image](DDialogSelectCategoryOptions.md#image)
- [images](DDialogSelectCategoryOptions.md#images)
- [interactive](DDialogSelectCategoryOptions.md#interactive)
- [items](DDialogSelectCategoryOptions.md#items)
- [mask](DDialogSelectCategoryOptions.md#mask)
- [menu](DDialogSelectCategoryOptions.md#menu)
- [name](DDialogSelectCategoryOptions.md#name)
- [on](DDialogSelectCategoryOptions.md#on)
- [outline](DDialogSelectCategoryOptions.md#outline)
- [padding](DDialogSelectCategoryOptions.md#padding)
- [parent](DDialogSelectCategoryOptions.md#parent)
- [renderable](DDialogSelectCategoryOptions.md#renderable)
- [shadow](DDialogSelectCategoryOptions.md#shadow)
- [shortcut](DDialogSelectCategoryOptions.md#shortcut)
- [shortcuts](DDialogSelectCategoryOptions.md#shortcuts)
- [state](DDialogSelectCategoryOptions.md#state)
- [text](DDialogSelectCategoryOptions.md#text)
- [theme](DDialogSelectCategoryOptions.md#theme)
- [title](DDialogSelectCategoryOptions.md#title)
- [toggle](DDialogSelectCategoryOptions.md#toggle)
- [value](DDialogSelectCategoryOptions.md#value)
- [visible](DDialogSelectCategoryOptions.md#visible)
- [weight](DDialogSelectCategoryOptions.md#weight)
- [when](DDialogSelectCategoryOptions.md#when)
- [width](DDialogSelectCategoryOptions.md#width)
- [x](DDialogSelectCategoryOptions.md#x)
- [y](DDialogSelectCategoryOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[background](DSelectOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[border](DSelectOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[children](DSelectOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DSelectOptions](DSelectOptions.md).[clear](DSelectOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[corner](DSelectOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[cursor](DSelectOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### dismiss

• `Optional` **dismiss**: [`DDialogSelectCategoryDismissOptions`](DDialogSelectCategoryDismissOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L84)

___

### group

• `Optional` **group**: [`DButtonGroup`](../classes/DButtonGroup.md)\<[`DButtonBase`](../classes/DButtonBase.md)\<`any`, `any`, `any`\>, [`DButtonGroupOptions`](DButtonGroupOptions.md)\<[`DButtonBase`](../classes/DButtonBase.md)\<`any`, `any`, `any`\>, `any`\>\>

A button group.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[group](DSelectOptions.md#group)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L73)

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

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DSelectOptions](DSelectOptions.md).[image](DSelectOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L38)

___

### images

• `Optional` **images**: [`DImagePieceOptions`](DImagePieceOptions.md)[]

#### Inherited from

[DSelectOptions](DSelectOptions.md).[images](DSelectOptions.md#images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L39)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[interactive](DSelectOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### items

• `Optional` **items**: [`DDialogSelectCategory`](DDialogSelectCategory.md)\<`CATEGORY_ID`\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L85)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DSelectOptions](DSelectOptions.md).[mask](DSelectOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L37)

___

### menu

• `Optional` **menu**: [`DMenuOptions`](DMenuOptions.md)\<``null`` \| `CATEGORY_ID`, [`DThemeMenu`](DThemeMenu.md)\> \| [`DMenu`](../classes/DMenu.md)\<``null`` \| `CATEGORY_ID`, [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)\<``null`` \| `CATEGORY_ID`, [`DThemeMenu`](DThemeMenu.md)\>\>

Menu options.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[menu](DSelectOptions.md#menu)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dropdown-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-dropdown-base.ts#L57)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[name](DSelectOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DSelectOnOptions`](DSelectOnOptions.md)\<``null`` \| `CATEGORY_ID`, `any`\>

Mappings of event names and handlers.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[on](DSelectOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-select.ts#L58)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[outline](DSelectOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[padding](DSelectOptions.md#padding)

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

[DSelectOptions](DSelectOptions.md).[parent](DSelectOptions.md#parent)

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

[DSelectOptions](DSelectOptions.md).[renderable](DSelectOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[shadow](DSelectOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[shortcut](DSelectOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[shortcuts](DSelectOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[state](DSelectOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### text

• `Optional` **text**: [`DTextPieceOptions`](DTextPieceOptions.md)\<``null`` \| [`DMenuItem`](../classes/DMenuItem.md)\<``null`` \| `CATEGORY_ID`, [`DThemeMenuItem`](DThemeMenuItem.md), [`DMenuItemOptions`](DMenuItemOptions.md)\<``null`` \| `CATEGORY_ID`, [`DThemeMenuItem`](DThemeMenuItem.md)\>\>\>

#### Inherited from

[DSelectOptions](DSelectOptions.md).[text](DSelectOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L36)

___

### theme

• `Optional` **theme**: `string` \| [`DThemeSelect`](DThemeSelect.md)\<``null`` \| `CATEGORY_ID`\>

A theme or a theme name.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[theme](DSelectOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[title](DSelectOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### toggle

• `Optional` **toggle**: `boolean`

True to turn a toggle mode on.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[toggle](DSelectOptions.md#toggle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L68)

___

### value

• `Optional` **value**: ``null`` \| `CATEGORY_ID`

A default value.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[value](DSelectOptions.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-select.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-select.ts#L56)

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

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DSelectOptions](DSelectOptions.md).[weight](DSelectOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L484)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| [`DButtonBaseWhen`](../index.md#dbuttonbasewhen)

An option when to activate a button.

#### Inherited from

[DSelectOptions](DSelectOptions.md).[when](DSelectOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-button-base.ts#L78)

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

[DSelectOptions](DSelectOptions.md).[x](DSelectOptions.md#x)

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

[DSelectOptions](DSelectOptions.md).[y](DSelectOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
