[Winter Cardinal UI - v0.194.0](../index.md) / DInputNumberOptions

# Interface: DInputNumberOptions<THEME\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeInputNumber`](DThemeInputNumber.md) = [`DThemeInputNumber`](DThemeInputNumber.md) |

## Hierarchy

- [`DInputInputOptions`](DInputInputOptions.md)<`number`, `THEME`\>

- [`UtilInputNumberOptions`](UtilInputNumberOptions.md)

  ↳ **`DInputNumberOptions`**

  ↳↳ [`DInputIntegerOptions`](DInputIntegerOptions.md)

  ↳↳ [`DInputRealOptions`](DInputRealOptions.md)

## Table of contents

### Properties

- [after](DInputNumberOptions.md#after)
- [background](DInputNumberOptions.md#background)
- [before](DInputNumberOptions.md#before)
- [border](DInputNumberOptions.md#border)
- [children](DInputNumberOptions.md#children)
- [clear](DInputNumberOptions.md#clear)
- [clipper](DInputNumberOptions.md#clipper)
- [corner](DInputNumberOptions.md#corner)
- [cursor](DInputNumberOptions.md#cursor)
- [description](DInputNumberOptions.md#description)
- [editing](DInputNumberOptions.md#editing)
- [element](DInputNumberOptions.md#element)
- [height](DInputNumberOptions.md#height)
- [image](DInputNumberOptions.md#image)
- [interactive](DInputNumberOptions.md#interactive)
- [mask](DInputNumberOptions.md#mask)
- [max](DInputNumberOptions.md#max)
- [min](DInputNumberOptions.md#min)
- [name](DInputNumberOptions.md#name)
- [on](DInputNumberOptions.md#on)
- [outline](DInputNumberOptions.md#outline)
- [padding](DInputNumberOptions.md#padding)
- [parent](DInputNumberOptions.md#parent)
- [select](DInputNumberOptions.md#select)
- [shadow](DInputNumberOptions.md#shadow)
- [shortcut](DInputNumberOptions.md#shortcut)
- [shortcuts](DInputNumberOptions.md#shortcuts)
- [state](DInputNumberOptions.md#state)
- [step](DInputNumberOptions.md#step)
- [text](DInputNumberOptions.md#text)
- [theme](DInputNumberOptions.md#theme)
- [title](DInputNumberOptions.md#title)
- [visible](DInputNumberOptions.md#visible)
- [weight](DInputNumberOptions.md#weight)
- [when](DInputNumberOptions.md#when)
- [width](DInputNumberOptions.md#width)
- [x](DInputNumberOptions.md#x)
- [y](DInputNumberOptions.md#y)

## Properties

### after

• `Optional` **after**: [`UtilHtmlElementAfterOptions`](UtilHtmlElementAfterOptions.md)

#### Inherited from

[UtilInputNumberOptions](UtilInputNumberOptions.md).[after](UtilInputNumberOptions.md#after)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L77)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[background](DInputInputOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### before

• `Optional` **before**: [`UtilHtmlElementBeforeOptions`](UtilHtmlElementBeforeOptions.md)

#### Inherited from

[UtilInputNumberOptions](UtilInputNumberOptions.md).[before](UtilInputNumberOptions.md#before)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L76)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[border](DInputInputOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[children](DInputInputOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[clear](DInputInputOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### clipper

• `Optional` **clipper**: [`UtilHtmlElementClipperOptions`](UtilHtmlElementClipperOptions.md)

#### Inherited from

[UtilInputNumberOptions](UtilInputNumberOptions.md).[clipper](UtilInputNumberOptions.md#clipper)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L75)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[corner](DInputInputOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[cursor](DInputInputOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[UtilInputNumberOptions](UtilInputNumberOptions.md).[description](UtilInputNumberOptions.md#description)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L37)

___

### editing

• `Optional` **editing**: [`UtilInputEditingOptions`](UtilInputEditingOptions.md)<`number`\>

#### Inherited from

[UtilInputNumberOptions](UtilInputNumberOptions.md).[editing](UtilInputNumberOptions.md#editing)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L38)

___

### element

• `Optional` **element**: [`UtilHtmlElementElementOptions`](UtilHtmlElementElementOptions.md)<`HTMLInputElement`\>

#### Inherited from

[UtilInputNumberOptions](UtilInputNumberOptions.md).[element](UtilInputNumberOptions.md#element)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L74)

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

[DInputInputOptions](DInputInputOptions.md).[height](DInputInputOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[image](DInputInputOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[interactive](DInputInputOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[mask](DInputInputOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### max

• `Optional` **max**: ``null`` \| `number`

#### Inherited from

[UtilInputNumberOptions](UtilInputNumberOptions.md).[max](UtilInputNumberOptions.md#max)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L21)

___

### min

• `Optional` **min**: ``null`` \| `number`

#### Inherited from

[UtilInputNumberOptions](UtilInputNumberOptions.md).[min](UtilInputNumberOptions.md#min)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L20)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[name](DInputInputOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DImageBaseOnOptions`](DImageBaseOnOptions.md)<`number`, `any`\>

Mappings of event names and event handlers.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[on](DInputInputOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L47)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[outline](DInputInputOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[padding](DInputInputOptions.md#padding)

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

[DInputInputOptions](DInputInputOptions.md).[parent](DInputInputOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### select

• `Optional` **select**: `boolean`

#### Inherited from

[UtilInputNumberOptions](UtilInputNumberOptions.md).[select](UtilInputNumberOptions.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L79)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[shadow](DInputInputOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[shortcut](DInputInputOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[shortcuts](DInputInputOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[state](DInputInputOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### step

• `Optional` **step**: ``null`` \| `number`

#### Inherited from

[UtilInputNumberOptions](UtilInputNumberOptions.md).[step](UtilInputNumberOptions.md#step)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L19)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<`number`\>

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[text](DInputInputOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[theme](DInputInputOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[title](DInputInputOptions.md#title)

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

[DInputInputOptions](DInputInputOptions.md).[visible](DInputInputOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[weight](DInputInputOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| ``"FOCUSED"`` \| ``"ALWAYS"`` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Inherited from

[UtilInputNumberOptions](UtilInputNumberOptions.md).[when](UtilInputNumberOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L78)

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

[DInputInputOptions](DInputInputOptions.md).[width](DInputInputOptions.md#width)

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

[DInputInputOptions](DInputInputOptions.md).[x](DInputInputOptions.md#x)

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

[DInputInputOptions](DInputInputOptions.md).[y](DInputInputOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
