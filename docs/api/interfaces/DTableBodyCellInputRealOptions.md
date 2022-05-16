[Winter Cardinal UI - v0.165.0](../index.md) / DTableBodyCellInputRealOptions

# Interface: DTableBodyCellInputRealOptions<ROW, THEME\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellInputReal`](DThemeTableBodyCellInputReal.md) = [`DThemeTableBodyCellInputReal`](DThemeTableBodyCellInputReal.md) |

## Hierarchy

- [`DInputRealOptions`](DInputRealOptions.md)<`THEME`\>

  ↳ **`DTableBodyCellInputRealOptions`**

## Table of contents

### Properties

- [after](DTableBodyCellInputRealOptions.md#after)
- [background](DTableBodyCellInputRealOptions.md#background)
- [before](DTableBodyCellInputRealOptions.md#before)
- [border](DTableBodyCellInputRealOptions.md#border)
- [children](DTableBodyCellInputRealOptions.md#children)
- [clear](DTableBodyCellInputRealOptions.md#clear)
- [clipper](DTableBodyCellInputRealOptions.md#clipper)
- [corner](DTableBodyCellInputRealOptions.md#corner)
- [cursor](DTableBodyCellInputRealOptions.md#cursor)
- [description](DTableBodyCellInputRealOptions.md#description)
- [editing](DTableBodyCellInputRealOptions.md#editing)
- [element](DTableBodyCellInputRealOptions.md#element)
- [height](DTableBodyCellInputRealOptions.md#height)
- [image](DTableBodyCellInputRealOptions.md#image)
- [interactive](DTableBodyCellInputRealOptions.md#interactive)
- [mask](DTableBodyCellInputRealOptions.md#mask)
- [max](DTableBodyCellInputRealOptions.md#max)
- [min](DTableBodyCellInputRealOptions.md#min)
- [name](DTableBodyCellInputRealOptions.md#name)
- [on](DTableBodyCellInputRealOptions.md#on)
- [outline](DTableBodyCellInputRealOptions.md#outline)
- [padding](DTableBodyCellInputRealOptions.md#padding)
- [parent](DTableBodyCellInputRealOptions.md#parent)
- [select](DTableBodyCellInputRealOptions.md#select)
- [shadow](DTableBodyCellInputRealOptions.md#shadow)
- [shortcut](DTableBodyCellInputRealOptions.md#shortcut)
- [shortcuts](DTableBodyCellInputRealOptions.md#shortcuts)
- [state](DTableBodyCellInputRealOptions.md#state)
- [step](DTableBodyCellInputRealOptions.md#step)
- [text](DTableBodyCellInputRealOptions.md#text)
- [theme](DTableBodyCellInputRealOptions.md#theme)
- [title](DTableBodyCellInputRealOptions.md#title)
- [visible](DTableBodyCellInputRealOptions.md#visible)
- [weight](DTableBodyCellInputRealOptions.md#weight)
- [when](DTableBodyCellInputRealOptions.md#when)
- [width](DTableBodyCellInputRealOptions.md#width)
- [x](DTableBodyCellInputRealOptions.md#x)
- [y](DTableBodyCellInputRealOptions.md#y)

## Properties

### after

• `Optional` **after**: [`UtilHtmlElementAfterOptions`](UtilHtmlElementAfterOptions.md)

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[after](DInputRealOptions.md#after)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L71)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[background](DInputRealOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### before

• `Optional` **before**: [`UtilHtmlElementBeforeOptions`](UtilHtmlElementBeforeOptions.md)

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[before](DInputRealOptions.md#before)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L70)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[border](DInputRealOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[children](DInputRealOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[clear](DInputRealOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### clipper

• `Optional` **clipper**: [`UtilHtmlElementClipperOptions`](UtilHtmlElementClipperOptions.md)

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[clipper](DInputRealOptions.md#clipper)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L69)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[corner](DInputRealOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[cursor](DInputRealOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[description](DInputRealOptions.md#description)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L37)

___

### editing

• `Optional` **editing**: [`UtilInputEditingOptions`](UtilInputEditingOptions.md)<`number`\>

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[editing](DInputRealOptions.md#editing)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L38)

___

### element

• `Optional` **element**: [`UtilHtmlElementElementOptions`](UtilHtmlElementElementOptions.md)<`HTMLInputElement`\>

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[element](DInputRealOptions.md#element)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L68)

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

[DInputRealOptions](DInputRealOptions.md).[height](DInputRealOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[image](DInputRealOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[interactive](DInputRealOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[mask](DInputRealOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### max

• `Optional` **max**: ``null`` \| `number`

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[max](DInputRealOptions.md#max)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L21)

___

### min

• `Optional` **min**: ``null`` \| `number`

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[min](DInputRealOptions.md#min)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L20)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[name](DInputRealOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DImageBaseOnOptions`](DImageBaseOnOptions.md)<`number`, `any`\>

Mappings of event names and event handlers.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[on](DInputRealOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L47)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[outline](DInputRealOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[padding](DInputRealOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DInputRealOptions](DInputRealOptions.md).[parent](DInputRealOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### select

• `Optional` **select**: `boolean`

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[select](DInputRealOptions.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L73)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[shadow](DInputRealOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[shortcut](DInputRealOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[shortcuts](DInputRealOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[state](DInputRealOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### step

• `Optional` **step**: ``null`` \| `number`

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[step](DInputRealOptions.md#step)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L19)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<`number`\>

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[text](DInputRealOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[theme](DInputRealOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[title](DInputRealOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[visible](DInputRealOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[weight](DInputRealOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| ``"FOCUSED"`` \| ``"ALWAYS"`` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Inherited from

[DInputRealOptions](DInputRealOptions.md).[when](DInputRealOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L72)

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

[DInputRealOptions](DInputRealOptions.md).[width](DInputRealOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[DInputRealOptions](DInputRealOptions.md).[x](DInputRealOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[DInputRealOptions](DInputRealOptions.md).[y](DInputRealOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
