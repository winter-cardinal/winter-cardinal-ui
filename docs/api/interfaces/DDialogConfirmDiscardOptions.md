[Winter Cardinal UI - v0.407.0](../index.md) / DDialogConfirmDiscardOptions

# Interface: DDialogConfirmDiscardOptions\<THEME\>

[DDialogLayered](../classes/DDialogLayered.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogConfirm`](DThemeDialogConfirm.md) |

## Hierarchy

- [`DDialogConfirmOptions`](DDialogConfirmOptions.md)\<`THEME`\>

  ↳ **`DDialogConfirmDiscardOptions`**

## Table of contents

### Properties

- [align](DDialogConfirmDiscardOptions.md#align)
- [animation](DDialogConfirmDiscardOptions.md#animation)
- [background](DDialogConfirmDiscardOptions.md#background)
- [border](DDialogConfirmDiscardOptions.md#border)
- [children](DDialogConfirmDiscardOptions.md#children)
- [clear](DDialogConfirmDiscardOptions.md#clear)
- [closeOn](DDialogConfirmDiscardOptions.md#closeon)
- [content](DDialogConfirmDiscardOptions.md#content)
- [corner](DDialogConfirmDiscardOptions.md#corner)
- [cursor](DDialogConfirmDiscardOptions.md#cursor)
- [footer](DDialogConfirmDiscardOptions.md#footer)
- [gesture](DDialogConfirmDiscardOptions.md#gesture)
- [header](DDialogConfirmDiscardOptions.md#header)
- [height](DDialogConfirmDiscardOptions.md#height)
- [interactive](DDialogConfirmDiscardOptions.md#interactive)
- [layout](DDialogConfirmDiscardOptions.md#layout)
- [message](DDialogConfirmDiscardOptions.md#message)
- [mode](DDialogConfirmDiscardOptions.md#mode)
- [name](DDialogConfirmDiscardOptions.md#name)
- [on](DDialogConfirmDiscardOptions.md#on)
- [outline](DDialogConfirmDiscardOptions.md#outline)
- [padding](DDialogConfirmDiscardOptions.md#padding)
- [parent](DDialogConfirmDiscardOptions.md#parent)
- [renderable](DDialogConfirmDiscardOptions.md#renderable)
- [shadow](DDialogConfirmDiscardOptions.md#shadow)
- [shortcut](DDialogConfirmDiscardOptions.md#shortcut)
- [shortcuts](DDialogConfirmDiscardOptions.md#shortcuts)
- [state](DDialogConfirmDiscardOptions.md#state)
- [sticky](DDialogConfirmDiscardOptions.md#sticky)
- [theme](DDialogConfirmDiscardOptions.md#theme)
- [title](DDialogConfirmDiscardOptions.md#title)
- [visible](DDialogConfirmDiscardOptions.md#visible)
- [weight](DDialogConfirmDiscardOptions.md#weight)
- [width](DDialogConfirmDiscardOptions.md#width)
- [x](DDialogConfirmDiscardOptions.md#x)
- [y](DDialogConfirmDiscardOptions.md#y)

## Properties

### align

• `Optional` **align**: ``null`` \| ``"NONE"`` \| ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| ``"TOP_RIGHT"`` \| ``"TOP_LEFT"`` \| ``"RIGHT_BOTTOM"`` \| ``"BOTTOM_LEFT"`` \| ``"BOTTOM_RIGHT"`` \| ``"TOP_CENTER"`` \| ``"LEFT_TOP"`` \| ``"LEFT_MIDDLE"`` \| ``"LEFT_BOTTOM"`` \| ``"RIGHT_TOP"`` \| ``"RIGHT_MIDDLE"`` \| ``"BOTTOM_CENTER"`` \| ``"OVER"`` \| [`UtilAttachAlign`](../index.md#utilattachalign-1)

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[align](DDialogConfirmOptions.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L73)

___

### animation

• `Optional` **animation**: [`DAnimation`](DAnimation.md)\<[`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[animation](DDialogConfirmOptions.md#animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L62)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[background](DDialogConfirmOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[border](DDialogConfirmOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[children](DDialogConfirmOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[clear](DDialogConfirmOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### closeOn

• `Optional` **closeOn**: `number` \| ``"NONE"`` \| ``"ESC"`` \| ``"CLICK_OUTSIDE"`` \| (``"NONE"`` \| ``"ESC"`` \| ``"CLICK_OUTSIDE"``)[]

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[closeOn](DDialogConfirmOptions.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L60)

___

### content

• `Optional` **content**: [`DDialogLayeredContentOptions`](DDialogLayeredContentOptions.md)\<[`DThemeDialogLayeredContent`](DThemeDialogLayeredContent.md)\>

Content options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[content](DDialogConfirmOptions.md#content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L64)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[corner](DDialogConfirmOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[cursor](DDialogConfirmOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### footer

• `Optional` **footer**: ``null`` \| [`DDialogLayeredFooterOptions`](DDialogLayeredFooterOptions.md)\<[`DThemeDialogLayeredFooter`](DThemeDialogLayeredFooter.md)\>

A footer options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[footer](DDialogConfirmOptions.md#footer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L69)

___

### gesture

• `Optional` **gesture**: `boolean` \| [`DDialogGestureOptions`](DDialogGestureOptions.md)

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[gesture](DDialogConfirmOptions.md#gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L71)

___

### header

• `Optional` **header**: ``null`` \| [`DDialogLayeredHeaderOptions`](DDialogLayeredHeaderOptions.md)\<[`DThemeDialogLayeredHeader`](DThemeDialogLayeredHeader.md)\>

A header options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[header](DDialogConfirmOptions.md#header)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L59)

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

[DDialogConfirmOptions](DDialogConfirmOptions.md).[height](DDialogConfirmOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[interactive](DDialogConfirmOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### layout

• `Optional` **layout**: [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)\<[`DThemeLayoutVertical`](DThemeLayoutVertical.md)\>

A layout options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[layout](DDialogConfirmOptions.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L54)

___

### message

• `Optional` **message**: [`DStateAwareOrValue`](../index.md#dstateawareorvalue)\<`string`\> \| [`DDialogConfirmMessageOptions`](DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](DThemeDialogConfirmMessage.md)\> \| [`DDialogConfirmMessage`](../classes/DDialogConfirmMessage.md)\<[`DThemeDialogConfirmMessage`](DThemeDialogConfirmMessage.md), [`DDialogConfirmMessageOptions`](DDialogConfirmMessageOptions.md)\<[`DThemeDialogConfirmMessage`](DThemeDialogConfirmMessage.md)\>\>

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[message](DDialogConfirmOptions.md#message)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-confirm.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-confirm.ts#L16)

___

### mode

• `Optional` **mode**: ``"MODAL"`` \| ``"MODELESS"`` \| ``"MENU"`` \| [`DDialogMode`](../index.md#ddialogmode-1)

A dialog mode.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[mode](DDialogConfirmOptions.md#mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L67)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[name](DDialogConfirmOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DDialogLayeredOnOptions`](DDialogLayeredOnOptions.md)\<`void`, `any`\>

Mappings of event names and handlers.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[on](DDialogConfirmOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-layered.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog-layered.ts#L74)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[outline](DDialogConfirmOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[padding](DDialogConfirmOptions.md#padding)

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

[DDialogConfirmOptions](DDialogConfirmOptions.md).[parent](DDialogConfirmOptions.md#parent)

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

[DDialogConfirmOptions](DDialogConfirmOptions.md).[renderable](DDialogConfirmOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[shadow](DDialogConfirmOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[shortcut](DDialogConfirmOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[shortcuts](DDialogConfirmOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[state](DDialogConfirmOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### sticky

• `Optional` **sticky**: `boolean`

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[sticky](DDialogConfirmOptions.md#sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L69)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[theme](DDialogConfirmOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[title](DDialogConfirmOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[visible](DDialogConfirmOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogConfirmOptions](DDialogConfirmOptions.md).[weight](DDialogConfirmOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L484)

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

[DDialogConfirmOptions](DDialogConfirmOptions.md).[width](DDialogConfirmOptions.md#width)

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

[DDialogConfirmOptions](DDialogConfirmOptions.md).[x](DDialogConfirmOptions.md#x)

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

[DDialogConfirmOptions](DDialogConfirmOptions.md).[y](DDialogConfirmOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
