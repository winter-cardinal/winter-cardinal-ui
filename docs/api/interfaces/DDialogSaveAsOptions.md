[Winter Cardinal UI - v0.414.0](../index.md) / DDialogSaveAsOptions

# Interface: DDialogSaveAsOptions\<THEME\>

[DDialogLayered](../classes/DDialogLayered.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogSaveAs`](DThemeDialogSaveAs.md) |

## Hierarchy

- [`DDialogInputTextOptions`](DDialogInputTextOptions.md)\<`THEME`\>

  ↳ **`DDialogSaveAsOptions`**

## Table of contents

### Properties

- [align](DDialogSaveAsOptions.md#align)
- [animation](DDialogSaveAsOptions.md#animation)
- [background](DDialogSaveAsOptions.md#background)
- [border](DDialogSaveAsOptions.md#border)
- [children](DDialogSaveAsOptions.md#children)
- [clear](DDialogSaveAsOptions.md#clear)
- [closeOn](DDialogSaveAsOptions.md#closeon)
- [content](DDialogSaveAsOptions.md#content)
- [corner](DDialogSaveAsOptions.md#corner)
- [cursor](DDialogSaveAsOptions.md#cursor)
- [footer](DDialogSaveAsOptions.md#footer)
- [gesture](DDialogSaveAsOptions.md#gesture)
- [header](DDialogSaveAsOptions.md#header)
- [height](DDialogSaveAsOptions.md#height)
- [input](DDialogSaveAsOptions.md#input)
- [interactive](DDialogSaveAsOptions.md#interactive)
- [layout](DDialogSaveAsOptions.md#layout)
- [mode](DDialogSaveAsOptions.md#mode)
- [name](DDialogSaveAsOptions.md#name)
- [on](DDialogSaveAsOptions.md#on)
- [outline](DDialogSaveAsOptions.md#outline)
- [padding](DDialogSaveAsOptions.md#padding)
- [parent](DDialogSaveAsOptions.md#parent)
- [renderable](DDialogSaveAsOptions.md#renderable)
- [shadow](DDialogSaveAsOptions.md#shadow)
- [shortcut](DDialogSaveAsOptions.md#shortcut)
- [shortcuts](DDialogSaveAsOptions.md#shortcuts)
- [state](DDialogSaveAsOptions.md#state)
- [sticky](DDialogSaveAsOptions.md#sticky)
- [theme](DDialogSaveAsOptions.md#theme)
- [title](DDialogSaveAsOptions.md#title)
- [visible](DDialogSaveAsOptions.md#visible)
- [weight](DDialogSaveAsOptions.md#weight)
- [width](DDialogSaveAsOptions.md#width)
- [x](DDialogSaveAsOptions.md#x)
- [y](DDialogSaveAsOptions.md#y)

## Properties

### align

• `Optional` **align**: ``null`` \| ``"NONE"`` \| ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| ``"TOP_RIGHT"`` \| ``"TOP_LEFT"`` \| ``"RIGHT_BOTTOM"`` \| ``"BOTTOM_LEFT"`` \| ``"BOTTOM_RIGHT"`` \| ``"TOP_CENTER"`` \| ``"LEFT_TOP"`` \| ``"LEFT_MIDDLE"`` \| ``"LEFT_BOTTOM"`` \| ``"RIGHT_TOP"`` \| ``"RIGHT_MIDDLE"`` \| ``"BOTTOM_CENTER"`` \| ``"OVER"`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[align](DDialogInputTextOptions.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L73)

___

### animation

• `Optional` **animation**: [`DAnimation`](DAnimation.md)\<[`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[animation](DDialogInputTextOptions.md#animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L62)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[background](DDialogInputTextOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[border](DDialogInputTextOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[children](DDialogInputTextOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[clear](DDialogInputTextOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### closeOn

• `Optional` **closeOn**: `number` \| ``"NONE"`` \| ``"ESC"`` \| ``"CLICK_OUTSIDE"`` \| (``"NONE"`` \| ``"ESC"`` \| ``"CLICK_OUTSIDE"``)[]

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[closeOn](DDialogInputTextOptions.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L60)

___

### content

• `Optional` **content**: [`DDialogLayeredContentOptions`](DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](DThemeDialogLayeredContent.md)\>

Content options.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[content](DDialogInputTextOptions.md#content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L64)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[corner](DDialogInputTextOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[cursor](DDialogInputTextOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### footer

• `Optional` **footer**: ``null`` \| [`DDialogLayeredFooterOptions`](DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](DThemeDialogLayeredFooter.md)\>

A footer options.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[footer](DDialogInputTextOptions.md#footer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L69)

___

### gesture

• `Optional` **gesture**: `boolean` \| [`DDialogGestureOptions`](DDialogGestureOptions.md)

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[gesture](DDialogInputTextOptions.md#gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L71)

___

### header

• `Optional` **header**: ``null`` \| [`DDialogLayeredHeaderOptions`](DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](DThemeDialogLayeredHeader.md)\>

A header options.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[header](DDialogInputTextOptions.md#header)

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

[DDialogInputTextOptions](DDialogInputTextOptions.md).[height](DDialogInputTextOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### input

• `Optional` **input**: [`DDialogInputTextInputOptions`](DDialogInputTextInputOptions.md)

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[input](DDialogInputTextOptions.md#input)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L21)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[interactive](DDialogInputTextOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### layout

• `Optional` **layout**: [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](DThemeLayoutVertical.md)\>

A layout options.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[layout](DDialogInputTextOptions.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L54)

___

### mode

• `Optional` **mode**: ``"MODAL"`` \| ``"MODELESS"`` \| ``"MENU"`` \| [`DDialogMode`](../index.md#ddialogmode)

A dialog mode.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[mode](DDialogInputTextOptions.md#mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L67)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[name](DDialogInputTextOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DDialogLayeredOnOptions`](DDialogLayeredOnOptions.md)\<`string`, `any`\>

Mappings of event names and handlers.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[on](DDialogInputTextOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L74)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[outline](DDialogInputTextOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[padding](DDialogInputTextOptions.md#padding)

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

[DDialogInputTextOptions](DDialogInputTextOptions.md).[parent](DDialogInputTextOptions.md#parent)

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

[DDialogInputTextOptions](DDialogInputTextOptions.md).[renderable](DDialogInputTextOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[shadow](DDialogInputTextOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[shortcut](DDialogInputTextOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[shortcuts](DDialogInputTextOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[state](DDialogInputTextOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### sticky

• `Optional` **sticky**: `boolean`

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[sticky](DDialogInputTextOptions.md#sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L69)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[theme](DDialogInputTextOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[title](DDialogInputTextOptions.md#title)

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

[DDialogInputTextOptions](DDialogInputTextOptions.md).[visible](DDialogInputTextOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogInputTextOptions](DDialogInputTextOptions.md).[weight](DDialogInputTextOptions.md#weight)

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

[DDialogInputTextOptions](DDialogInputTextOptions.md).[width](DDialogInputTextOptions.md#width)

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

[DDialogInputTextOptions](DDialogInputTextOptions.md).[x](DDialogInputTextOptions.md#x)

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

[DDialogInputTextOptions](DDialogInputTextOptions.md).[y](DDialogInputTextOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
