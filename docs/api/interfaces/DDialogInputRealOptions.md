[Winter Cardinal UI - v0.179.0](../index.md) / DDialogInputRealOptions

# Interface: DDialogInputRealOptions<THEME\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogInputReal`](DThemeDialogInputReal.md) |

## Hierarchy

- [`DDialogInputOptions`](DDialogInputOptions.md)<`number`, [`DInputRealOptions`](DInputRealOptions.md), `THEME`\>

  ↳ **`DDialogInputRealOptions`**

## Table of contents

### Properties

- [align](DDialogInputRealOptions.md#align)
- [animation](DDialogInputRealOptions.md#animation)
- [background](DDialogInputRealOptions.md#background)
- [border](DDialogInputRealOptions.md#border)
- [cancel](DDialogInputRealOptions.md#cancel)
- [children](DDialogInputRealOptions.md#children)
- [clear](DDialogInputRealOptions.md#clear)
- [closeOn](DDialogInputRealOptions.md#closeon)
- [corner](DDialogInputRealOptions.md#corner)
- [cursor](DDialogInputRealOptions.md#cursor)
- [gesture](DDialogInputRealOptions.md#gesture)
- [height](DDialogInputRealOptions.md#height)
- [input](DDialogInputRealOptions.md#input)
- [interactive](DDialogInputRealOptions.md#interactive)
- [label](DDialogInputRealOptions.md#label)
- [layout](DDialogInputRealOptions.md#layout)
- [margin](DDialogInputRealOptions.md#margin)
- [mode](DDialogInputRealOptions.md#mode)
- [name](DDialogInputRealOptions.md#name)
- [ok](DDialogInputRealOptions.md#ok)
- [on](DDialogInputRealOptions.md#on)
- [outline](DDialogInputRealOptions.md#outline)
- [padding](DDialogInputRealOptions.md#padding)
- [parent](DDialogInputRealOptions.md#parent)
- [shadow](DDialogInputRealOptions.md#shadow)
- [shortcut](DDialogInputRealOptions.md#shortcut)
- [shortcuts](DDialogInputRealOptions.md#shortcuts)
- [state](DDialogInputRealOptions.md#state)
- [sticky](DDialogInputRealOptions.md#sticky)
- [theme](DDialogInputRealOptions.md#theme)
- [title](DDialogInputRealOptions.md#title)
- [visible](DDialogInputRealOptions.md#visible)
- [weight](DDialogInputRealOptions.md#weight)
- [width](DDialogInputRealOptions.md#width)
- [x](DDialogInputRealOptions.md#x)
- [y](DDialogInputRealOptions.md#y)

## Properties

### align

• `Optional` **align**: ``null`` \| ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| ``"TOP_LEFT"`` \| ``"TOP_CENTER"`` \| ``"TOP_RIGHT"`` \| ``"BOTTOM_LEFT"`` \| ``"BOTTOM_CENTER"`` \| ``"BOTTOM_RIGHT"`` \| ``"LEFT_TOP"`` \| ``"LEFT_MIDDLE"`` \| ``"LEFT_BOTTOM"`` \| ``"RIGHT_TOP"`` \| ``"RIGHT_MIDDLE"`` \| ``"RIGHT_BOTTOM"`` \| ``"OVER"`` \| [`UtilAttachAlign`](../index.md#utilattachalign)

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[align](DDialogInputOptions.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L72)

___

### animation

• `Optional` **animation**: [`DAnimation`](DAnimation.md)<[`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\>\>

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[animation](DDialogInputOptions.md#animation)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L61)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[background](DDialogInputOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[border](DDialogInputOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### cancel

• `Optional` **cancel**: `string`

A cancel button label.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[cancel](DDialogInputOptions.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L60)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[children](DDialogInputOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[clear](DDialogInputOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### closeOn

• `Optional` **closeOn**: `number` \| ``"NONE"`` \| ``"ESC"`` \| ``"CLICK_OUTSIDE"`` \| (``"NONE"`` \| ``"ESC"`` \| ``"CLICK_OUTSIDE"``)[]

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[closeOn](DDialogInputOptions.md#closeon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L59)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[corner](DDialogInputOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[cursor](DDialogInputOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### gesture

• `Optional` **gesture**: `boolean` \| [`DDialogGestureOptions`](DDialogGestureOptions.md)

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[gesture](DDialogInputOptions.md#gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L70)

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

[DDialogInputOptions](DDialogInputOptions.md).[height](DDialogInputOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### input

• `Optional` **input**: [`DInputRealOptions`](DInputRealOptions.md)<[`DThemeInputReal`](DThemeInputReal.md)\>

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[input](DDialogInputOptions.md#input)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L29)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[interactive](DDialogInputOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### label

• `Optional` **label**: `string` \| [`DTextOptions`](DTextOptions.md)<`string`, [`DThemeText`](DThemeText.md)<`string`\>\>

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[label](DDialogInputOptions.md#label)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L28)

___

### layout

• `Optional` **layout**: [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)<[`DThemeLayoutVertical`](DThemeLayoutVertical.md)\>

Layout options.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[layout](DDialogInputOptions.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L70)

___

### margin

• `Optional` **margin**: `number` \| [`DDialogInputMarginOptions`](DDialogInputMarginOptions.md)

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[margin](DDialogInputOptions.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-input.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog-input.ts#L30)

___

### mode

• `Optional` **mode**: ``"MODAL"`` \| ``"MODELESS"`` \| ``"MENU"`` \| [`DDialogMode`](../index.md#ddialogmode)

A dialog mode.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[mode](DDialogInputOptions.md#mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L66)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[name](DDialogInputOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### ok

• `Optional` **ok**: `string`

A ok button label.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[ok](DDialogInputOptions.md#ok)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L55)

___

### on

• `Optional` **on**: [`DDialogCommandOnOptions`](DDialogCommandOnOptions.md)<`number`, `any`\>

Mappings of event names and handlers.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[on](DDialogInputOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-command.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog-command.ts#L65)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[outline](DDialogInputOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[padding](DDialogInputOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DDialogInputOptions](DDialogInputOptions.md).[parent](DDialogInputOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[shadow](DDialogInputOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[shortcut](DDialogInputOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[shortcuts](DDialogInputOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[state](DDialogInputOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### sticky

• `Optional` **sticky**: `boolean`

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[sticky](DDialogInputOptions.md#sticky)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog.ts#L68)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[theme](DDialogInputOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[title](DDialogInputOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[visible](DDialogInputOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogInputOptions](DDialogInputOptions.md).[weight](DDialogInputOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

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

[DDialogInputOptions](DDialogInputOptions.md).[width](DDialogInputOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[DDialogInputOptions](DDialogInputOptions.md).[x](DDialogInputOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[DDialogInputOptions](DDialogInputOptions.md).[y](DDialogInputOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
