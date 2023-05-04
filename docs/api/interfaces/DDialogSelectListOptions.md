[Winter Cardinal UI - v0.310.1](../index.md) / DDialogSelectListOptions

# Interface: DDialogSelectListOptions<VALUE, DATA, THEME, CONTENT_OPTIONS\>

[DPane](../classes/DPane.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `DATA` | extends [`DListData`](DListData.md)<`VALUE`\> = [`DListData`](DListData.md)<`VALUE`\> |
| `THEME` | extends [`DThemeDialogSelecList`](DThemeDialogSelecList.md) = [`DThemeDialogSelecList`](DThemeDialogSelecList.md) |
| `CONTENT_OPTIONS` | extends [`DBaseOptions`](DBaseOptions.md) = [`DContentOptions`](DContentOptions.md) |

## Hierarchy

- [`DListOptions`](DListOptions.md)<`VALUE`, `DATA`, `THEME`, `CONTENT_OPTIONS`\>

  ↳ **`DDialogSelectListOptions`**

## Table of contents

### Properties

- [background](DDialogSelectListOptions.md#background)
- [border](DDialogSelectListOptions.md#border)
- [children](DDialogSelectListOptions.md#children)
- [clear](DDialogSelectListOptions.md#clear)
- [content](DDialogSelectListOptions.md#content)
- [corner](DDialogSelectListOptions.md#corner)
- [cursor](DDialogSelectListOptions.md#cursor)
- [data](DDialogSelectListOptions.md#data)
- [gesture](DDialogSelectListOptions.md#gesture)
- [height](DDialogSelectListOptions.md#height)
- [interactive](DDialogSelectListOptions.md#interactive)
- [items](DDialogSelectListOptions.md#items)
- [mask](DDialogSelectListOptions.md#mask)
- [name](DDialogSelectListOptions.md#name)
- [on](DDialogSelectListOptions.md#on)
- [outline](DDialogSelectListOptions.md#outline)
- [padding](DDialogSelectListOptions.md#padding)
- [parent](DDialogSelectListOptions.md#parent)
- [renderable](DDialogSelectListOptions.md#renderable)
- [scrollbar](DDialogSelectListOptions.md#scrollbar)
- [selection](DDialogSelectListOptions.md#selection)
- [shadow](DDialogSelectListOptions.md#shadow)
- [shortcut](DDialogSelectListOptions.md#shortcut)
- [shortcuts](DDialogSelectListOptions.md#shortcuts)
- [state](DDialogSelectListOptions.md#state)
- [theme](DDialogSelectListOptions.md#theme)
- [title](DDialogSelectListOptions.md#title)
- [updater](DDialogSelectListOptions.md#updater)
- [visible](DDialogSelectListOptions.md#visible)
- [weight](DDialogSelectListOptions.md#weight)
- [width](DDialogSelectListOptions.md#width)
- [x](DDialogSelectListOptions.md#x)
- [y](DDialogSelectListOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DListOptions](DListOptions.md).[background](DListOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L497)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DListOptions](DListOptions.md).[border](DListOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L500)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DListOptions](DListOptions.md).[children](DListOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L400)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DListOptions](DListOptions.md).[clear](DListOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:509](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L509)

___

### content

• `Optional` **content**: [`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\> \| `CONTENT_OPTIONS`

Content options or a content.

#### Inherited from

[DListOptions](DListOptions.md).[content](DListOptions.md#content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L40)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DListOptions](DListOptions.md).[corner](DListOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L472)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DListOptions](DListOptions.md).[cursor](DListOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L512)

___

### data

• `Optional` **data**: `DATA` \| `VALUE`[] \| [`DListDataOptions`](DListDataOptions.md)<`VALUE`\>

#### Inherited from

[DListOptions](DListOptions.md).[data](DListOptions.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-list.ts#L22)

___

### gesture

• `Optional` **gesture**: [`DPaneGestureOptions`](DPaneGestureOptions.md)

Gesture options.

#### Inherited from

[DListOptions](DListOptions.md).[gesture](DListOptions.md#gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L50)

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

[DListOptions](DListOptions.md).[height](DListOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L443)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DListOptions](DListOptions.md).[interactive](DListOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:466](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L466)

___

### items

• `Optional` **items**: `VALUE`[]

#### Inherited from

[DListOptions](DListOptions.md).[items](DListOptions.md#items)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-list.ts#L21)

___

### mask

• `Optional` **mask**: `boolean`

True to enable an overflow mask.

#### Inherited from

[DListOptions](DListOptions.md).[mask](DListOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L35)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DListOptions](DListOptions.md).[name](DListOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DListOptions](DListOptions.md).[on](DListOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:480](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L480)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DListOptions](DListOptions.md).[outline](DListOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L503)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DListOptions](DListOptions.md).[padding](DListOptions.md#padding)

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

[DListOptions](DListOptions.md).[parent](DListOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L397)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DDialogSelectListOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DListOptions](DListOptions.md).[renderable](DListOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### scrollbar

• `Optional` **scrollbar**: [`DPaneScrollBarOptions`](DPaneScrollBarOptions.md)

Scroll bar options.

#### Inherited from

[DListOptions](DListOptions.md).[scrollbar](DListOptions.md#scrollbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane.ts#L45)

___

### selection

• `Optional` **selection**: [`DListDataSelectionOptions`](DListDataSelectionOptions.md)<`VALUE`, `any`\>

#### Inherited from

[DListOptions](DListOptions.md).[selection](DListOptions.md#selection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-list.ts#L23)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DListOptions](DListOptions.md).[shadow](DListOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:506](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L506)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DListOptions](DListOptions.md).[shortcut](DListOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:491](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L491)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DListOptions](DListOptions.md).[shortcuts](DListOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:494](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L494)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DListOptions](DListOptions.md).[state](DListOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DListOptions](DListOptions.md).[theme](DListOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:475](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L475)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DListOptions](DListOptions.md).[title](DListOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L488)

___

### updater

• `Optional` **updater**: [`DListItemUpdaterOptions`](DListItemUpdaterOptions.md)<`VALUE`\>

#### Inherited from

[DListOptions](DListOptions.md).[updater](DListOptions.md#updater)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-list.ts#L24)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DListOptions](DListOptions.md).[visible](DListOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DListOptions](DListOptions.md).[weight](DListOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:485](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L485)

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

[DListOptions](DListOptions.md).[width](DListOptions.md#width)

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

[DListOptions](DListOptions.md).[x](DListOptions.md#x)

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

[DListOptions](DListOptions.md).[y](DListOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L423)
