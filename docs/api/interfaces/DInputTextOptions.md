[Winter Cardinal UI - v0.442.0](../index.md) / DInputTextOptions

# Interface: DInputTextOptions\<THEME\>

[DImageBase](../classes/DImageBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemeInputText`](DThemeInputText.md) = [`DThemeInputText`](DThemeInputText.md) |

## Hierarchy

- [`DInputInputOptions`](DInputInputOptions.md)\<`string`, `THEME`\>

- [`UtilInputTextOptions`](UtilInputTextOptions.md)

  ↳ **`DInputTextOptions`**

  ↳↳ [`DDialogInputTextInputOptions`](DDialogInputTextInputOptions.md)

  ↳↳ [`DInputSearchOptions`](DInputSearchOptions.md)

  ↳↳ [`DTableBodyCellInputTextOptions`](DTableBodyCellInputTextOptions.md)

  ↳↳ [`DTableBodyCellInputTreeInputOptions`](DTableBodyCellInputTreeInputOptions.md)

## Table of contents

### Properties

- [after](DInputTextOptions.md#after)
- [background](DInputTextOptions.md#background)
- [before](DInputTextOptions.md#before)
- [border](DInputTextOptions.md#border)
- [children](DInputTextOptions.md#children)
- [clear](DInputTextOptions.md#clear)
- [clipper](DInputTextOptions.md#clipper)
- [corner](DInputTextOptions.md#corner)
- [cursor](DInputTextOptions.md#cursor)
- [description](DInputTextOptions.md#description)
- [editing](DInputTextOptions.md#editing)
- [element](DInputTextOptions.md#element)
- [height](DInputTextOptions.md#height)
- [image](DInputTextOptions.md#image)
- [images](DInputTextOptions.md#images)
- [interactive](DInputTextOptions.md#interactive)
- [mask](DInputTextOptions.md#mask)
- [name](DInputTextOptions.md#name)
- [on](DInputTextOptions.md#on)
- [outline](DInputTextOptions.md#outline)
- [padding](DInputTextOptions.md#padding)
- [parent](DInputTextOptions.md#parent)
- [renderable](DInputTextOptions.md#renderable)
- [select](DInputTextOptions.md#select)
- [shadow](DInputTextOptions.md#shadow)
- [shortcut](DInputTextOptions.md#shortcut)
- [shortcuts](DInputTextOptions.md#shortcuts)
- [state](DInputTextOptions.md#state)
- [text](DInputTextOptions.md#text)
- [theme](DInputTextOptions.md#theme)
- [title](DInputTextOptions.md#title)
- [visible](DInputTextOptions.md#visible)
- [weight](DInputTextOptions.md#weight)
- [when](DInputTextOptions.md#when)
- [width](DInputTextOptions.md#width)
- [x](DInputTextOptions.md#x)
- [y](DInputTextOptions.md#y)

## Properties

### after

• `Optional` **after**: [`UtilHtmlElementAfterOptions`](UtilHtmlElementAfterOptions.md)

#### Inherited from

[UtilInputTextOptions](UtilInputTextOptions.md).[after](UtilInputTextOptions.md#after)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L77)

___

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[background](DInputInputOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### before

• `Optional` **before**: [`UtilHtmlElementBeforeOptions`](UtilHtmlElementBeforeOptions.md)

#### Inherited from

[UtilInputTextOptions](UtilInputTextOptions.md).[before](UtilInputTextOptions.md#before)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L76)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[border](DInputInputOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[children](DInputInputOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[clear](DInputInputOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### clipper

• `Optional` **clipper**: [`UtilHtmlElementClipperOptions`](UtilHtmlElementClipperOptions.md)

#### Inherited from

[UtilInputTextOptions](UtilInputTextOptions.md).[clipper](UtilInputTextOptions.md#clipper)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L75)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[corner](DInputInputOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[cursor](DInputInputOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[UtilInputTextOptions](UtilInputTextOptions.md).[description](UtilInputTextOptions.md#description)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L37)

___

### editing

• `Optional` **editing**: [`UtilInputEditingOptions`](UtilInputEditingOptions.md)\<`string`\>

#### Inherited from

[UtilInputTextOptions](UtilInputTextOptions.md).[editing](UtilInputTextOptions.md#editing)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L38)

___

### element

• `Optional` **element**: [`UtilHtmlElementElementOptions`](UtilHtmlElementElementOptions.md)\<`HTMLInputElement`\>

#### Inherited from

[UtilInputTextOptions](UtilInputTextOptions.md).[element](UtilInputTextOptions.md#element)

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

[DInputInputOptions](DInputInputOptions.md).[height](DInputInputOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### image

• `Optional` **image**: [`DImagePieceOptions`](DImagePieceOptions.md)

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[image](DInputInputOptions.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L38)

___

### images

• `Optional` **images**: [`DImagePieceOptions`](DImagePieceOptions.md)[]

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[images](DInputInputOptions.md#images)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L39)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[interactive](DInputInputOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### mask

• `Optional` **mask**: `boolean`

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[mask](DInputInputOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L37)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[name](DInputInputOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DImageBaseOnOptions`](DImageBaseOnOptions.md)\<`string`, `any`\>

Mappings of event names and event handlers.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[on](DInputInputOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-image-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-image-base.ts#L40)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[outline](DInputInputOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[padding](DInputInputOptions.md#padding)

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

[DInputInputOptions](DInputInputOptions.md).[parent](DInputInputOptions.md#parent)

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

[DInputInputOptions](DInputInputOptions.md).[renderable](DInputInputOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### select

• `Optional` **select**: `boolean`

#### Inherited from

[UtilInputTextOptions](UtilInputTextOptions.md).[select](UtilInputTextOptions.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L79)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[shadow](DInputInputOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[shortcut](DInputInputOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[shortcuts](DInputInputOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[state](DInputInputOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### text

• `Optional` **text**: [`DTextPieceOptions`](DTextPieceOptions.md)\<`string`\>

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[text](DInputInputOptions.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L36)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[theme](DInputInputOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[title](DInputInputOptions.md#title)

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

[DInputInputOptions](DInputInputOptions.md).[visible](DInputInputOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DInputInputOptions](DInputInputOptions.md).[weight](DInputInputOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L484)

___

### when

• `Optional` **when**: ``"FOCUSED"`` \| ``"CLICKED"`` \| ``"DOUBLE_CLICKED"`` \| ``"ALWAYS"`` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Inherited from

[UtilInputTextOptions](UtilInputTextOptions.md).[when](UtilInputTextOptions.md#when)

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

[DInputInputOptions](DInputInputOptions.md).[width](DInputInputOptions.md#width)

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

[DInputInputOptions](DInputInputOptions.md).[x](DInputInputOptions.md#x)

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

[DInputInputOptions](DInputInputOptions.md).[y](DInputInputOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
