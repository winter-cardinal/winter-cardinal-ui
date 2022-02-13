[Winter Cardinal UI - v0.155.0](../index.md) / DDialogColorGradientOptions

# Interface: DDialogColorGradientOptions<THEME\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogColorGradient`](DThemeDialogColorGradient.md) = [`DThemeDialogColorGradient`](DThemeDialogColorGradient.md) |

## Hierarchy

- [`DDialogCommandOptions`](DDialogCommandOptions.md)<[`DColorGradient`](DColorGradient.md), `THEME`\>

  ↳ **`DDialogColorGradientOptions`**

## Table of contents

### Properties

- [align](DDialogColorGradientOptions.md#align)
- [animation](DDialogColorGradientOptions.md#animation)
- [background](DDialogColorGradientOptions.md#background)
- [border](DDialogColorGradientOptions.md#border)
- [cancel](DDialogColorGradientOptions.md#cancel)
- [children](DDialogColorGradientOptions.md#children)
- [clear](DDialogColorGradientOptions.md#clear)
- [closeOn](DDialogColorGradientOptions.md#closeon)
- [corner](DDialogColorGradientOptions.md#corner)
- [cursor](DDialogColorGradientOptions.md#cursor)
- [height](DDialogColorGradientOptions.md#height)
- [interactive](DDialogColorGradientOptions.md#interactive)
- [layout](DDialogColorGradientOptions.md#layout)
- [mode](DDialogColorGradientOptions.md#mode)
- [name](DDialogColorGradientOptions.md#name)
- [ok](DDialogColorGradientOptions.md#ok)
- [on](DDialogColorGradientOptions.md#on)
- [outline](DDialogColorGradientOptions.md#outline)
- [padding](DDialogColorGradientOptions.md#padding)
- [parent](DDialogColorGradientOptions.md#parent)
- [picker](DDialogColorGradientOptions.md#picker)
- [shadow](DDialogColorGradientOptions.md#shadow)
- [shortcut](DDialogColorGradientOptions.md#shortcut)
- [shortcuts](DDialogColorGradientOptions.md#shortcuts)
- [state](DDialogColorGradientOptions.md#state)
- [sticky](DDialogColorGradientOptions.md#sticky)
- [theme](DDialogColorGradientOptions.md#theme)
- [title](DDialogColorGradientOptions.md#title)
- [visible](DDialogColorGradientOptions.md#visible)
- [weight](DDialogColorGradientOptions.md#weight)
- [width](DDialogColorGradientOptions.md#width)
- [x](DDialogColorGradientOptions.md#x)
- [y](DDialogColorGradientOptions.md#y)

## Properties

### align

• `Optional` **align**: [`UtilAttachAlign`](../index.md#utilattachalign)

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[align](DDialogCommandOptions.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L62)

___

### animation

• `Optional` **animation**: [`DAnimation`](DAnimation.md)<[`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[animation](DDialogCommandOptions.md#animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L53)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[background](DDialogCommandOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[border](DDialogCommandOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### cancel

• `Optional` **cancel**: `string`

A cancel button label.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[cancel](DDialogCommandOptions.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L60)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[children](DDialogCommandOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[clear](DDialogCommandOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### closeOn

• `Optional` **closeOn**: `number`

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[closeOn](DDialogCommandOptions.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L52)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[corner](DDialogCommandOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[cursor](DDialogCommandOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

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

[DDialogCommandOptions](DDialogCommandOptions.md).[height](DDialogCommandOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[interactive](DDialogCommandOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### layout

• `Optional` **layout**: [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](DThemeLayoutVertical.md)\>

Layout options.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[layout](DDialogCommandOptions.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L70)

___

### mode

• `Optional` **mode**: ``"MODAL"`` \| ``"MODELESS"`` \| ``"MENU"`` \| [`DDialogMode`](../index.md#ddialogmode)

A dialog mode.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[mode](DDialogCommandOptions.md#mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L58)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[name](DDialogCommandOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### ok

• `Optional` **ok**: `string`

A ok button label.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[ok](DDialogCommandOptions.md#ok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L55)

___

### on

• `Optional` **on**: [`DDialogCommandOnOptions`](DDialogCommandOnOptions.md)<[`DColorGradient`](DColorGradient.md), `any`\>

Mappings of event names and handlers.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[on](DDialogCommandOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L65)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[outline](DDialogCommandOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[padding](DDialogCommandOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DDialogCommandOptions](DDialogCommandOptions.md).[parent](DDialogCommandOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### picker

• `Optional` **picker**: [`DPickerColorGradientOptions`](DPickerColorGradientOptions.md)<[`DThemePickerColorGradient`](DThemePickerColorGradient.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-color-gradient.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog-color-gradient.ts#L16)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[shadow](DDialogCommandOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[shortcut](DDialogCommandOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[shortcuts](DDialogCommandOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[state](DDialogCommandOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### sticky

• `Optional` **sticky**: `boolean`

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[sticky](DDialogCommandOptions.md#sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L60)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[theme](DDialogCommandOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[title](DDialogCommandOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[visible](DDialogCommandOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogCommandOptions](DDialogCommandOptions.md).[weight](DDialogCommandOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

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

[DDialogCommandOptions](DDialogCommandOptions.md).[width](DDialogCommandOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[DDialogCommandOptions](DDialogCommandOptions.md).[x](DDialogCommandOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[DDialogCommandOptions](DDialogCommandOptions.md).[y](DDialogCommandOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
