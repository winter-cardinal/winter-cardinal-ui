[Winter Cardinal UI - v0.194.0](../index.md) / DDialogFittedContentOptions

# Interface: DDialogFittedContentOptions<THEME\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeDialogFittedContent`](DThemeDialogFittedContent.md) = [`DThemeDialogFittedContent`](DThemeDialogFittedContent.md) |

## Hierarchy

- [`DDialogLayeredContentOptions`](DDialogLayeredContentOptions.md)<`THEME`\>

  ↳ **`DDialogFittedContentOptions`**

## Table of contents

### Properties

- [background](DDialogFittedContentOptions.md#background)
- [border](DDialogFittedContentOptions.md#border)
- [children](DDialogFittedContentOptions.md#children)
- [clear](DDialogFittedContentOptions.md#clear)
- [column](DDialogFittedContentOptions.md#column)
- [corner](DDialogFittedContentOptions.md#corner)
- [cursor](DDialogFittedContentOptions.md#cursor)
- [direction](DDialogFittedContentOptions.md#direction)
- [height](DDialogFittedContentOptions.md#height)
- [interactive](DDialogFittedContentOptions.md#interactive)
- [margin](DDialogFittedContentOptions.md#margin)
- [name](DDialogFittedContentOptions.md#name)
- [on](DDialogFittedContentOptions.md#on)
- [outline](DDialogFittedContentOptions.md#outline)
- [padding](DDialogFittedContentOptions.md#padding)
- [parent](DDialogFittedContentOptions.md#parent)
- [reverse](DDialogFittedContentOptions.md#reverse)
- [row](DDialogFittedContentOptions.md#row)
- [shadow](DDialogFittedContentOptions.md#shadow)
- [shortcut](DDialogFittedContentOptions.md#shortcut)
- [shortcuts](DDialogFittedContentOptions.md#shortcuts)
- [state](DDialogFittedContentOptions.md#state)
- [theme](DDialogFittedContentOptions.md#theme)
- [title](DDialogFittedContentOptions.md#title)
- [visible](DDialogFittedContentOptions.md#visible)
- [weight](DDialogFittedContentOptions.md#weight)
- [width](DDialogFittedContentOptions.md#width)
- [x](DDialogFittedContentOptions.md#x)
- [y](DDialogFittedContentOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[background](DDialogLayeredContentOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[border](DDialogLayeredContentOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[children](DDialogLayeredContentOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[clear](DDialogLayeredContentOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### column

• `Optional` **column**: `number`

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[column](DDialogLayeredContentOptions.md#column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L34)

___

### corner

• `Optional` **corner**: `number` \| [`DLayoutCornerOptions`](DLayoutCornerOptions.md)

A corner options.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[corner](DDialogLayeredContentOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L32)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[cursor](DDialogLayeredContentOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### direction

• `Optional` **direction**: ``"HORIZONTAL"`` \| ``"VERTICAL"`` \| [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[direction](DDialogLayeredContentOptions.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L35)

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

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[height](DDialogLayeredContentOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[interactive](DDialogLayeredContentOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### margin

• `Optional` **margin**: `number` \| [`DLayoutMarginOptions`](DLayoutMarginOptions.md)

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[margin](DDialogLayeredContentOptions.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L31)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[name](DDialogLayeredContentOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[on](DDialogLayeredContentOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[outline](DDialogLayeredContentOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[padding](DDialogLayeredContentOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[parent](DDialogLayeredContentOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### reverse

• `Optional` **reverse**: `boolean`

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[reverse](DDialogLayeredContentOptions.md#reverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L36)

___

### row

• `Optional` **row**: `number`

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[row](DDialogLayeredContentOptions.md#row)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-layout.ts#L33)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[shadow](DDialogLayeredContentOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[shortcut](DDialogLayeredContentOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[shortcuts](DDialogLayeredContentOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[state](DDialogLayeredContentOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[theme](DDialogLayeredContentOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[title](DDialogLayeredContentOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[visible](DDialogLayeredContentOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[weight](DDialogLayeredContentOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

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

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[width](DDialogLayeredContentOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[x](DDialogLayeredContentOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[DDialogLayeredContentOptions](DDialogLayeredContentOptions.md).[y](DDialogLayeredContentOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
