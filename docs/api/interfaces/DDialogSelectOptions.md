[Winter Cardinal UI - v0.414.0](../index.md) / DDialogSelectOptions

# Interface: DDialogSelectOptions\<VALUE, CATEGORY_ID, THEME, EMITTER\>

[DDialogSelect](../classes/DDialogSelect.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `VALUE` |
| `CATEGORY_ID` | `unknown` |
| `THEME` | extends [`DThemeDialogSelect`](DThemeDialogSelect.md)\<`VALUE`, `CATEGORY_ID`\> = [`DThemeDialogSelect`](DThemeDialogSelect.md)\<`VALUE`, `CATEGORY_ID`\> |
| `EMITTER` | `any` |

## Hierarchy

- [`DDialogLayeredOptions`](DDialogLayeredOptions.md)\<`VALUE`, `THEME`\>

  ↳ **`DDialogSelectOptions`**

## Table of contents

### Properties

- [align](DDialogSelectOptions.md#align)
- [animation](DDialogSelectOptions.md#animation)
- [background](DDialogSelectOptions.md#background)
- [border](DDialogSelectOptions.md#border)
- [category](DDialogSelectOptions.md#category)
- [children](DDialogSelectOptions.md#children)
- [clear](DDialogSelectOptions.md#clear)
- [closeOn](DDialogSelectOptions.md#closeon)
- [content](DDialogSelectOptions.md#content)
- [controller](DDialogSelectOptions.md#controller)
- [corner](DDialogSelectOptions.md#corner)
- [cursor](DDialogSelectOptions.md#cursor)
- [dismiss](DDialogSelectOptions.md#dismiss)
- [footer](DDialogSelectOptions.md#footer)
- [gesture](DDialogSelectOptions.md#gesture)
- [header](DDialogSelectOptions.md#header)
- [height](DDialogSelectOptions.md#height)
- [input](DDialogSelectOptions.md#input)
- [interactive](DDialogSelectOptions.md#interactive)
- [layout](DDialogSelectOptions.md#layout)
- [list](DDialogSelectOptions.md#list)
- [mode](DDialogSelectOptions.md#mode)
- [name](DDialogSelectOptions.md#name)
- [note](DDialogSelectOptions.md#note)
- [on](DDialogSelectOptions.md#on)
- [outline](DDialogSelectOptions.md#outline)
- [padding](DDialogSelectOptions.md#padding)
- [parent](DDialogSelectOptions.md#parent)
- [renderable](DDialogSelectOptions.md#renderable)
- [shadow](DDialogSelectOptions.md#shadow)
- [shortcut](DDialogSelectOptions.md#shortcut)
- [shortcuts](DDialogSelectOptions.md#shortcuts)
- [state](DDialogSelectOptions.md#state)
- [sticky](DDialogSelectOptions.md#sticky)
- [theme](DDialogSelectOptions.md#theme)
- [title](DDialogSelectOptions.md#title)
- [visible](DDialogSelectOptions.md#visible)
- [weight](DDialogSelectOptions.md#weight)
- [width](DDialogSelectOptions.md#width)
- [x](DDialogSelectOptions.md#x)
- [y](DDialogSelectOptions.md#y)

## Properties

### align

• `Optional` **align**: ``null`` \| ``"NONE"`` \| ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| ``"TOP_RIGHT"`` \| ``"TOP_LEFT"`` \| ``"RIGHT_BOTTOM"`` \| ``"BOTTOM_LEFT"`` \| ``"BOTTOM_RIGHT"`` \| ``"TOP_CENTER"`` \| ``"LEFT_TOP"`` \| ``"LEFT_MIDDLE"`` \| ``"LEFT_BOTTOM"`` \| ``"RIGHT_TOP"`` \| ``"RIGHT_MIDDLE"`` \| ``"BOTTOM_CENTER"`` \| ``"OVER"`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[align](DDialogLayeredOptions.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L73)

___

### animation

• `Optional` **animation**: [`DAnimation`](DAnimation.md)\<[`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[animation](DDialogLayeredOptions.md#animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L62)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[background](DDialogLayeredOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[border](DDialogLayeredOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### category

• `Optional` **category**: [`DDialogSelectCategoryOptions`](DDialogSelectCategoryOptions.md)\<`VALUE`, `CATEGORY_ID`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L112)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[children](DDialogLayeredOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[clear](DDialogLayeredOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### closeOn

• `Optional` **closeOn**: `number` \| ``"NONE"`` \| ``"ESC"`` \| ``"CLICK_OUTSIDE"`` \| (``"NONE"`` \| ``"ESC"`` \| ``"CLICK_OUTSIDE"``)[]

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[closeOn](DDialogLayeredOptions.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L60)

___

### content

• `Optional` **content**: [`DDialogLayeredContentOptions`](DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](DThemeDialogLayeredContent.md)\>

Content options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[content](DDialogLayeredOptions.md#content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L64)

___

### controller

• `Optional` **controller**: [`DDialogSelectController`](DDialogSelectController.md)\<`VALUE`, `CATEGORY_ID`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L111)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[corner](DDialogLayeredOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[cursor](DDialogLayeredOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### dismiss

• `Optional` **dismiss**: [`DDialogSelectDismissableOptions`](DDialogSelectDismissableOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L113)

___

### footer

• `Optional` **footer**: ``null`` \| [`DDialogLayeredFooterOptions`](DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](DThemeDialogLayeredFooter.md)\>

A footer options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[footer](DDialogLayeredOptions.md#footer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L69)

___

### gesture

• `Optional` **gesture**: `boolean` \| [`DDialogGestureOptions`](DDialogGestureOptions.md)

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[gesture](DDialogLayeredOptions.md#gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L71)

___

### header

• `Optional` **header**: ``null`` \| [`DDialogLayeredHeaderOptions`](DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](DThemeDialogLayeredHeader.md)\>

A header options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[header](DDialogLayeredOptions.md#header)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L59)

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

[DDialogLayeredOptions](DDialogLayeredOptions.md).[height](DDialogLayeredOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### input

• `Optional` **input**: [`DDialogSelectInputOpitons`](DDialogSelectInputOpitons.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L114)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[interactive](DDialogLayeredOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### layout

• `Optional` **layout**: [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](DThemeLayoutVertical.md)\>

A layout options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[layout](DDialogLayeredOptions.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L54)

___

### list

• `Optional` **list**: [`DListOptions`](DListOptions.md)\<`VALUE`, [`DListData`](DListData.md)\<`VALUE`\>, [`DThemeList`](DThemeList.md), [`DContentOptions`](DContentOptions.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L115)

___

### mode

• `Optional` **mode**: ``"MODAL"`` \| ``"MODELESS"`` \| ``"MENU"`` \| [`DDialogMode`](../index.md#ddialogmode)

A dialog mode.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[mode](DDialogLayeredOptions.md#mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L67)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[name](DDialogLayeredOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### note

• `Optional` **note**: [`DDialogSelectNoteOptions`](DDialogSelectNoteOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L116)

___

### on

• `Optional` **on**: [`DDialogSelectOnOptions`](DDialogSelectOnOptions.md)\<`VALUE`, `EMITTER`\>

Mappings of event names and handlers.

#### Overrides

[DDialogLayeredOptions](DDialogLayeredOptions.md).[on](DDialogLayeredOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L117)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[outline](DDialogLayeredOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[padding](DDialogLayeredOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

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

[DDialogLayeredOptions](DDialogLayeredOptions.md).[parent](DDialogLayeredOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:396](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L396)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DBaseOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[renderable](DDialogLayeredOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[shadow](DDialogLayeredOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[shortcut](DDialogLayeredOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[shortcuts](DDialogLayeredOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[state](DDialogLayeredOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### sticky

• `Optional` **sticky**: `boolean`

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[sticky](DDialogLayeredOptions.md#sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L69)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[theme](DDialogLayeredOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[title](DDialogLayeredOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[visible](DDialogLayeredOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogLayeredOptions](DDialogLayeredOptions.md).[weight](DDialogLayeredOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L484)

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

[DDialogLayeredOptions](DDialogLayeredOptions.md).[width](DDialogLayeredOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L432)

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

[DDialogLayeredOptions](DDialogLayeredOptions.md).[x](DDialogLayeredOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:412](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L412)

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

[DDialogLayeredOptions](DDialogLayeredOptions.md).[y](DDialogLayeredOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
