[Winter Cardinal UI - v0.442.0](../index.md) / DTableBodyCellInputTextAreaOptions

# Interface: DTableBodyCellInputTextAreaOptions\<ROW, THEME\>

[DImageBase](../classes/DImageBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `unknown` |
| `THEME` | extends [`DThemeTableBodyCellInputTextArea`](DThemeTableBodyCellInputTextArea.md) = [`DThemeTableBodyCellInputTextArea`](DThemeTableBodyCellInputTextArea.md) |

## Hierarchy

- [`DInputTextAreaOptions`](DInputTextAreaOptions.md)\<`THEME`\>

  ↳ **`DTableBodyCellInputTextAreaOptions`**

## Table of contents

### Properties

- [after](DTableBodyCellInputTextAreaOptions.md#after)
- [background](DTableBodyCellInputTextAreaOptions.md#background)
- [before](DTableBodyCellInputTextAreaOptions.md#before)
- [border](DTableBodyCellInputTextAreaOptions.md#border)
- [children](DTableBodyCellInputTextAreaOptions.md#children)
- [clear](DTableBodyCellInputTextAreaOptions.md#clear)
- [clipper](DTableBodyCellInputTextAreaOptions.md#clipper)
- [corner](DTableBodyCellInputTextAreaOptions.md#corner)
- [cursor](DTableBodyCellInputTextAreaOptions.md#cursor)
- [description](DTableBodyCellInputTextAreaOptions.md#description)
- [editing](DTableBodyCellInputTextAreaOptions.md#editing)
- [element](DTableBodyCellInputTextAreaOptions.md#element)
- [height](DTableBodyCellInputTextAreaOptions.md#height)
- [image](DTableBodyCellInputTextAreaOptions.md#image)
- [images](DTableBodyCellInputTextAreaOptions.md#images)
- [interactive](DTableBodyCellInputTextAreaOptions.md#interactive)
- [mask](DTableBodyCellInputTextAreaOptions.md#mask)
- [name](DTableBodyCellInputTextAreaOptions.md#name)
- [on](DTableBodyCellInputTextAreaOptions.md#on)
- [outline](DTableBodyCellInputTextAreaOptions.md#outline)
- [padding](DTableBodyCellInputTextAreaOptions.md#padding)
- [parent](DTableBodyCellInputTextAreaOptions.md#parent)
- [renderable](DTableBodyCellInputTextAreaOptions.md#renderable)
- [select](DTableBodyCellInputTextAreaOptions.md#select)
- [shadow](DTableBodyCellInputTextAreaOptions.md#shadow)
- [shortcut](DTableBodyCellInputTextAreaOptions.md#shortcut)
- [shortcuts](DTableBodyCellInputTextAreaOptions.md#shortcuts)
- [state](DTableBodyCellInputTextAreaOptions.md#state)
- [text](DTableBodyCellInputTextAreaOptions.md#text)
- [theme](DTableBodyCellInputTextAreaOptions.md#theme)
- [title](DTableBodyCellInputTextAreaOptions.md#title)
- [visible](DTableBodyCellInputTextAreaOptions.md#visible)
- [weight](DTableBodyCellInputTextAreaOptions.md#weight)
- [when](DTableBodyCellInputTextAreaOptions.md#when)
- [width](DTableBodyCellInputTextAreaOptions.md#width)
- [x](DTableBodyCellInputTextAreaOptions.md#x)
- [y](DTableBodyCellInputTextAreaOptions.md#y)

## Properties

### after

• `Optional` **after**: [`UtilHtmlElementAfterOptions`](UtilHtmlElementAfterOptions.md)

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[after](DInputTextAreaOptions.md#after)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L77)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[background](DInputTextAreaOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### before

• `Optional` **before**: [`UtilHtmlElementBeforeOptions`](UtilHtmlElementBeforeOptions.md)

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[before](DInputTextAreaOptions.md#before)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L76)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[border](DInputTextAreaOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[children](DInputTextAreaOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[clear](DInputTextAreaOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### clipper

• `Optional` **clipper**: [`UtilHtmlElementClipperOptions`](UtilHtmlElementClipperOptions.md)

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[clipper](DInputTextAreaOptions.md#clipper)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L75)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[corner](DInputTextAreaOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[cursor](DInputTextAreaOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[description](DInputTextAreaOptions.md#description)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L37)

___

### editing

• `Optional` **editing**: [`UtilInputEditingOptions`](UtilInputEditingOptions.md)\<`string`\>

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[editing](DInputTextAreaOptions.md#editing)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L38)

___

### element

• `Optional` **element**: [`UtilHtmlElementElementOptions`](UtilHtmlElementElementOptions.md)\<`HTMLTextAreaElement`\>

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[element](DInputTextAreaOptions.md#element)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L74)

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

[DInputTextAreaOptions](DInputTextAreaOptions.md).[height](DInputTextAreaOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[image](DInputTextAreaOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L38)

___

### images

• `Optional` **images**: [`DImagePieceOptions`](DImagePieceOptions.md)[]

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[images](DInputTextAreaOptions.md#images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L39)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[interactive](DInputTextAreaOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[mask](DInputTextAreaOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L37)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[name](DInputTextAreaOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DImageBaseOnOptions`](DImageBaseOnOptions.md)\<`string`, `any`\>

Mappings of event names and event handlers.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[on](DInputTextAreaOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L40)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[outline](DInputTextAreaOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[padding](DInputTextAreaOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

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

[DInputTextAreaOptions](DInputTextAreaOptions.md).[parent](DInputTextAreaOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:396](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L396)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DBaseOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[renderable](DInputTextAreaOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### select

• `Optional` **select**: `boolean`

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[select](DInputTextAreaOptions.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L79)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[shadow](DInputTextAreaOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[shortcut](DInputTextAreaOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[shortcuts](DInputTextAreaOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[state](DInputTextAreaOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### text

• `Optional` **text**: [`DTextPieceOptions`](DTextPieceOptions.md)\<`string`\>

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[text](DInputTextAreaOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L36)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[theme](DInputTextAreaOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[title](DInputTextAreaOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[visible](DInputTextAreaOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[weight](DInputTextAreaOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L484)

___

### when

• `Optional` **when**: ``"FOCUSED"`` \| ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| ``"ALWAYS"`` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Inherited from

[DInputTextAreaOptions](DInputTextAreaOptions.md).[when](DInputTextAreaOptions.md#when)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L78)

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

[DInputTextAreaOptions](DInputTextAreaOptions.md).[width](DInputTextAreaOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L432)

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

[DInputTextAreaOptions](DInputTextAreaOptions.md).[x](DInputTextAreaOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:412](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L412)

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

[DInputTextAreaOptions](DInputTextAreaOptions.md).[y](DInputTextAreaOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
