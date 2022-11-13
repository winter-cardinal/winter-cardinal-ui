[Winter Cardinal UI - v0.227.0](../index.md) / DInputOptions

# Interface: DInputOptions<VALUE, ELEMENT, THEME\>

[DImageBase](../classes/DImageBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `ELEMENT` | extends `HTMLInputElement` \| `HTMLTextAreaElement` = `HTMLInputElement` \| `HTMLTextAreaElement` |
| `THEME` | extends [`DThemeInput`](DThemeInput.md)<`VALUE`, `ELEMENT`\> = [`DThemeInput`](DThemeInput.md)<`VALUE`, `ELEMENT`\> |

## Hierarchy

- [`DHtmlElementOptions`](DHtmlElementOptions.md)<`VALUE`, `ELEMENT`, `THEME`\>

- [`UtilInputOptions`](UtilInputOptions.md)<`VALUE`, `ELEMENT`\>

  ↳ **`DInputOptions`**

  ↳↳ [`DInputInputOptions`](DInputInputOptions.md)

  ↳↳ [`DInputTextAreaOptions`](DInputTextAreaOptions.md)

## Table of contents

### Properties

- [after](DInputOptions.md#after)
- [background](DInputOptions.md#background)
- [before](DInputOptions.md#before)
- [border](DInputOptions.md#border)
- [children](DInputOptions.md#children)
- [clear](DInputOptions.md#clear)
- [clipper](DInputOptions.md#clipper)
- [corner](DInputOptions.md#corner)
- [cursor](DInputOptions.md#cursor)
- [description](DInputOptions.md#description)
- [editing](DInputOptions.md#editing)
- [element](DInputOptions.md#element)
- [height](DInputOptions.md#height)
- [image](DInputOptions.md#image)
- [interactive](DInputOptions.md#interactive)
- [mask](DInputOptions.md#mask)
- [name](DInputOptions.md#name)
- [on](DInputOptions.md#on)
- [outline](DInputOptions.md#outline)
- [padding](DInputOptions.md#padding)
- [parent](DInputOptions.md#parent)
- [select](DInputOptions.md#select)
- [shadow](DInputOptions.md#shadow)
- [shortcut](DInputOptions.md#shortcut)
- [shortcuts](DInputOptions.md#shortcuts)
- [state](DInputOptions.md#state)
- [text](DInputOptions.md#text)
- [theme](DInputOptions.md#theme)
- [title](DInputOptions.md#title)
- [visible](DInputOptions.md#visible)
- [weight](DInputOptions.md#weight)
- [when](DInputOptions.md#when)
- [width](DInputOptions.md#width)
- [x](DInputOptions.md#x)
- [y](DInputOptions.md#y)

## Properties

### after

• `Optional` **after**: [`UtilHtmlElementAfterOptions`](UtilHtmlElementAfterOptions.md)

#### Inherited from

[UtilInputOptions](UtilInputOptions.md).[after](UtilInputOptions.md#after)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L77)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[background](DHtmlElementOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### before

• `Optional` **before**: [`UtilHtmlElementBeforeOptions`](UtilHtmlElementBeforeOptions.md)

#### Inherited from

[UtilInputOptions](UtilInputOptions.md).[before](UtilInputOptions.md#before)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L76)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[border](DHtmlElementOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[children](DHtmlElementOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L374)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[clear](DHtmlElementOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### clipper

• `Optional` **clipper**: [`UtilHtmlElementClipperOptions`](UtilHtmlElementClipperOptions.md)

#### Inherited from

[UtilInputOptions](UtilInputOptions.md).[clipper](UtilInputOptions.md#clipper)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L75)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[corner](DHtmlElementOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:437](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L437)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`string`\>

A cursor shape.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[cursor](DHtmlElementOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:477](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L477)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[UtilInputOptions](UtilInputOptions.md).[description](UtilInputOptions.md#description)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L37)

___

### editing

• `Optional` **editing**: [`UtilInputEditingOptions`](UtilInputEditingOptions.md)<`VALUE`\>

#### Inherited from

[UtilInputOptions](UtilInputOptions.md).[editing](UtilInputOptions.md#editing)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L38)

___

### element

• `Optional` **element**: [`UtilHtmlElementElementOptions`](UtilHtmlElementElementOptions.md)<`ELEMENT`\>

#### Inherited from

[UtilInputOptions](UtilInputOptions.md).[element](UtilInputOptions.md#element)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L74)

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

[DHtmlElementOptions](DHtmlElementOptions.md).[height](DHtmlElementOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:417](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L417)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[image](DHtmlElementOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L46)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"CHILDREN"`` \| ``"SELF"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[interactive](DHtmlElementOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:431](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L431)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[mask](DHtmlElementOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L62)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[name](DHtmlElementOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L377)

___

### on

• `Optional` **on**: [`DImageBaseOnOptions`](DImageBaseOnOptions.md)<`VALUE`, `any`\>

Mappings of event names and event handlers.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[on](DHtmlElementOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L47)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[outline](DHtmlElementOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[padding](DHtmlElementOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:434](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L434)

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

[DHtmlElementOptions](DHtmlElementOptions.md).[parent](DHtmlElementOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L371)

___

### select

• `Optional` **select**: `boolean`

#### Inherited from

[UtilInputOptions](UtilInputOptions.md).[select](UtilInputOptions.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L79)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[shadow](DHtmlElementOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[shortcut](DHtmlElementOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:456](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L456)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[shortcuts](DHtmlElementOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### state

• `Optional` **state**: `string` \| `string`[]

A default state.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[state](DHtmlElementOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L428)

___

### text

• `Optional` **text**: [`DTextBaseTextOptions`](DTextBaseTextOptions.md)<`VALUE`\>

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[text](DHtmlElementOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L61)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[theme](DHtmlElementOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L440)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[title](DHtmlElementOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L453)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default values is true.

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[visible](DHtmlElementOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:425](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L425)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DHtmlElementOptions](DHtmlElementOptions.md).[weight](DHtmlElementOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### when

• `Optional` **when**: ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| ``"FOCUSED"`` \| ``"ALWAYS"`` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen-1)

#### Inherited from

[UtilInputOptions](UtilInputOptions.md).[when](UtilInputOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L78)

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

[DHtmlElementOptions](DHtmlElementOptions.md).[width](DHtmlElementOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:407](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L407)

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

[DHtmlElementOptions](DHtmlElementOptions.md).[x](DHtmlElementOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:387](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L387)

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

[DHtmlElementOptions](DHtmlElementOptions.md).[y](DHtmlElementOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:397](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-base.ts#L397)
