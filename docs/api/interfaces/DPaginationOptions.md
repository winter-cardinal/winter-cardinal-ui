[Winter Cardinal UI - v0.457.0](../index.md) / DPaginationOptions

# Interface: DPaginationOptions\<THEME\>

[DBase](../classes/DBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `THEME` | extends [`DThemePagination`](DThemePagination.md) |

## Hierarchy

- [`DLayoutHorizontalOptions`](DLayoutHorizontalOptions.md)\<`THEME`\>

  ↳ **`DPaginationOptions`**

## Table of contents

### Properties

- [background](DPaginationOptions.md#background)
- [border](DPaginationOptions.md#border)
- [button](DPaginationOptions.md#button)
- [children](DPaginationOptions.md#children)
- [clear](DPaginationOptions.md#clear)
- [column](DPaginationOptions.md#column)
- [corner](DPaginationOptions.md#corner)
- [cursor](DPaginationOptions.md#cursor)
- [direction](DPaginationOptions.md#direction)
- [height](DPaginationOptions.md#height)
- [interactive](DPaginationOptions.md#interactive)
- [margin](DPaginationOptions.md#margin)
- [name](DPaginationOptions.md#name)
- [on](DPaginationOptions.md#on)
- [outline](DPaginationOptions.md#outline)
- [padding](DPaginationOptions.md#padding)
- [page](DPaginationOptions.md#page)
- [parent](DPaginationOptions.md#parent)
- [renderable](DPaginationOptions.md#renderable)
- [reverse](DPaginationOptions.md#reverse)
- [row](DPaginationOptions.md#row)
- [selected](DPaginationOptions.md#selected)
- [shadow](DPaginationOptions.md#shadow)
- [shortcut](DPaginationOptions.md#shortcut)
- [shortcuts](DPaginationOptions.md#shortcuts)
- [size](DPaginationOptions.md#size)
- [state](DPaginationOptions.md#state)
- [theme](DPaginationOptions.md#theme)
- [title](DPaginationOptions.md#title)
- [total](DPaginationOptions.md#total)
- [value](DPaginationOptions.md#value)
- [visible](DPaginationOptions.md#visible)
- [weight](DPaginationOptions.md#weight)
- [width](DPaginationOptions.md#width)
- [x](DPaginationOptions.md#x)
- [y](DPaginationOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[background](DLayoutHorizontalOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[border](DLayoutHorizontalOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### button

• `Optional` **button**: [`DPaginationButtonOptions`](DPaginationButtonOptions.md)

[DPagination](../classes/DPagination.md) button options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L88)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[children](DLayoutHorizontalOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[clear](DLayoutHorizontalOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### column

• `Optional` **column**: `number`

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[column](DLayoutHorizontalOptions.md#column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-layout.ts#L34)

___

### corner

• `Optional` **corner**: `number` \| [`DLayoutCornerOptions`](DLayoutCornerOptions.md)

A corner options.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[corner](DLayoutHorizontalOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-layout.ts#L32)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[cursor](DLayoutHorizontalOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### direction

• `Optional` **direction**: ``"VERTICAL"`` \| ``"HORIZONTAL"`` \| [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[direction](DLayoutHorizontalOptions.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-layout.ts#L35)

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

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[height](DLayoutHorizontalOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[interactive](DLayoutHorizontalOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### margin

• `Optional` **margin**: `number` \| [`DLayoutMarginOptions`](DLayoutMarginOptions.md)

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[margin](DLayoutHorizontalOptions.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-layout.ts#L31)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[name](DLayoutHorizontalOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)\<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[on](DLayoutHorizontalOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L479)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[outline](DLayoutHorizontalOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[padding](DLayoutHorizontalOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

___

### page

• `Optional` **page**: [`DPaginationPageOptions`](DPaginationPageOptions.md)\<[`DThemePaginationPage`](DThemePaginationPage.md)\>

[DPagination](../classes/DPagination.md) page options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L93)

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

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[parent](DLayoutHorizontalOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:396](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L396)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DBaseOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[renderable](DLayoutHorizontalOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### reverse

• `Optional` **reverse**: `boolean`

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[reverse](DLayoutHorizontalOptions.md#reverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-layout.ts#L36)

___

### row

• `Optional` **row**: `number`

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[row](DLayoutHorizontalOptions.md#row)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-layout.ts#L33)

___

### selected

• `Optional` **selected**: `number`

An index number of a selected page.

**`Deprecated`**

in favor of [value](DPaginationOptions.md#value).

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L71)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[shadow](DLayoutHorizontalOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[shortcut](DLayoutHorizontalOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[shortcuts](DLayoutHorizontalOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### size

• `Optional` **size**: `number`

A total number of pages.

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L76)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[state](DLayoutHorizontalOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[theme](DLayoutHorizontalOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[title](DLayoutHorizontalOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### total

• `Optional` **total**: `number`

A total number of pages.

**`Deprecated`**

in favor of [size](DPaginationOptions.md#size);

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L83)

___

### value

• `Optional` **value**: `number`

An index number of a selected page.

#### Defined in

[src/main/typescript/wcardinal/ui/d-pagination.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-pagination.ts#L64)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[visible](DLayoutHorizontalOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[weight](DLayoutHorizontalOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L484)

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

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[width](DLayoutHorizontalOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L432)

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

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[x](DLayoutHorizontalOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:412](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L412)

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

[DLayoutHorizontalOptions](DLayoutHorizontalOptions.md).[y](DLayoutHorizontalOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
