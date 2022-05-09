[Winter Cardinal UI - v0.164.0](../index.md) / DInputTextAreaOptions

# Interface: DInputTextAreaOptions<THEME\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeInputTextArea`](DThemeInputTextArea.md) = [`DThemeInputTextArea`](DThemeInputTextArea.md) |

## Hierarchy

- [`DInputOptions`](DInputOptions.md)<`string`, `HTMLTextAreaElement`, `THEME`\>

- [`UtilInputTextAreaOptions`](UtilInputTextAreaOptions.md)

  ↳ **`DInputTextAreaOptions`**

## Table of contents

### Properties

- [after](DInputTextAreaOptions.md#after)
- [background](DInputTextAreaOptions.md#background)
- [before](DInputTextAreaOptions.md#before)
- [border](DInputTextAreaOptions.md#border)
- [children](DInputTextAreaOptions.md#children)
- [clear](DInputTextAreaOptions.md#clear)
- [clipper](DInputTextAreaOptions.md#clipper)
- [corner](DInputTextAreaOptions.md#corner)
- [cursor](DInputTextAreaOptions.md#cursor)
- [description](DInputTextAreaOptions.md#description)
- [editing](DInputTextAreaOptions.md#editing)
- [element](DInputTextAreaOptions.md#element)
- [height](DInputTextAreaOptions.md#height)
- [image](DInputTextAreaOptions.md#image)
- [interactive](DInputTextAreaOptions.md#interactive)
- [mask](DInputTextAreaOptions.md#mask)
- [name](DInputTextAreaOptions.md#name)
- [on](DInputTextAreaOptions.md#on)
- [outline](DInputTextAreaOptions.md#outline)
- [padding](DInputTextAreaOptions.md#padding)
- [parent](DInputTextAreaOptions.md#parent)
- [select](DInputTextAreaOptions.md#select)
- [shadow](DInputTextAreaOptions.md#shadow)
- [shortcut](DInputTextAreaOptions.md#shortcut)
- [shortcuts](DInputTextAreaOptions.md#shortcuts)
- [state](DInputTextAreaOptions.md#state)
- [text](DInputTextAreaOptions.md#text)
- [theme](DInputTextAreaOptions.md#theme)
- [title](DInputTextAreaOptions.md#title)
- [visible](DInputTextAreaOptions.md#visible)
- [weight](DInputTextAreaOptions.md#weight)
- [when](DInputTextAreaOptions.md#when)
- [width](DInputTextAreaOptions.md#width)
- [x](DInputTextAreaOptions.md#x)
- [y](DInputTextAreaOptions.md#y)

## Properties

### after

• `Optional` **after**: [`UtilHtmlElementAfterOptions`](UtilHtmlElementAfterOptions.md)

#### Inherited from

[UtilInputTextAreaOptions](UtilInputTextAreaOptions.md).[after](UtilInputTextAreaOptions.md#after)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L71)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DInputOptions](DInputOptions.md).[background](DInputOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L448)

___

### before

• `Optional` **before**: [`UtilHtmlElementBeforeOptions`](UtilHtmlElementBeforeOptions.md)

#### Inherited from

[UtilInputTextAreaOptions](UtilInputTextAreaOptions.md).[before](UtilInputTextAreaOptions.md#before)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L70)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DInputOptions](DInputOptions.md).[border](DInputOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L451)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DInputOptions](DInputOptions.md).[children](DInputOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L360)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DInputOptions](DInputOptions.md).[clear](DInputOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L460)

___

### clipper

• `Optional` **clipper**: [`UtilHtmlElementClipperOptions`](UtilHtmlElementClipperOptions.md)

#### Inherited from

[UtilInputTextAreaOptions](UtilInputTextAreaOptions.md).[clipper](UtilInputTextAreaOptions.md#clipper)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L69)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DInputOptions](DInputOptions.md).[corner](DInputOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L423)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DInputOptions](DInputOptions.md).[cursor](DInputOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L463)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[UtilInputTextAreaOptions](UtilInputTextAreaOptions.md).[description](UtilInputTextAreaOptions.md#description)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L37)

___

### editing

• `Optional` **editing**: [`UtilInputEditingOptions`](UtilInputEditingOptions.md)<`string`\>

#### Inherited from

[UtilInputTextAreaOptions](UtilInputTextAreaOptions.md).[editing](UtilInputTextAreaOptions.md#editing)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L38)

___

### element

• `Optional` **element**: [`UtilHtmlElementElementOptions`](UtilHtmlElementElementOptions.md)<`HTMLTextAreaElement`\>

#### Inherited from

[UtilInputTextAreaOptions](UtilInputTextAreaOptions.md).[element](UtilInputTextAreaOptions.md#element)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L68)

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

[DInputOptions](DInputOptions.md).[height](DInputOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L403)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DInputOptions](DInputOptions.md).[image](DInputOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DInputOptions](DInputOptions.md).[interactive](DInputOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DInputOptions](DInputOptions.md).[mask](DInputOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DInputOptions](DInputOptions.md).[name](DInputOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L363)

___

### on

• `Optional` **on**: [`DImageBaseOnOptions`](DImageBaseOnOptions.md)<`string`, `any`\>

Mappings of event names and event handlers.

#### Inherited from

[DInputOptions](DInputOptions.md).[on](DInputOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L47)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DInputOptions](DInputOptions.md).[outline](DInputOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L454)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DInputOptions](DInputOptions.md).[padding](DInputOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L420)

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

[DInputOptions](DInputOptions.md).[parent](DInputOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L357)

___

### select

• `Optional` **select**: `boolean`

#### Inherited from

[UtilInputTextAreaOptions](UtilInputTextAreaOptions.md).[select](UtilInputTextAreaOptions.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L73)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DInputOptions](DInputOptions.md).[shadow](DInputOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:457](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L457)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DInputOptions](DInputOptions.md).[shortcut](DInputOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DInputOptions](DInputOptions.md).[shortcuts](DInputOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L445)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DInputOptions](DInputOptions.md).[state](DInputOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L414)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<`string`\>

#### Inherited from

[DInputOptions](DInputOptions.md).[text](DInputOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DInputOptions](DInputOptions.md).[theme](DInputOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L426)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DInputOptions](DInputOptions.md).[title](DInputOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L439)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DInputOptions](DInputOptions.md).[visible](DInputOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L411)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DInputOptions](DInputOptions.md).[weight](DInputOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:436](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L436)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| ``"FOCUSED"`` \| ``"ALWAYS"`` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Inherited from

[UtilInputTextAreaOptions](UtilInputTextAreaOptions.md).[when](UtilInputTextAreaOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L72)

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

[DInputOptions](DInputOptions.md).[width](DInputOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L393)

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

[DInputOptions](DInputOptions.md).[x](DInputOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L373)

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

[DInputOptions](DInputOptions.md).[y](DInputOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-base.ts#L383)
