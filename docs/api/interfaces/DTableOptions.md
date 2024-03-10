[Winter Cardinal UI - v0.414.0](../index.md) / DTableOptions

# Interface: DTableOptions\<ROW, DATA, THEME, CONTENT_OPTIONS\>

[DPane](../classes/DPane.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW` | `ROW` |
| `DATA` | extends [`DTableData`](DTableData.md)\<`ROW`\> = [`DTableDataList`](../classes/DTableDataList.md)\<`ROW`\> |
| `THEME` | extends [`DThemeTable`](DThemeTable.md) = [`DThemeTable`](DThemeTable.md) |
| `CONTENT_OPTIONS` | extends [`DBaseOptions`](DBaseOptions.md) = [`DContentOptions`](DContentOptions.md) |

## Hierarchy

- [`DPaneOptions`](DPaneOptions.md)\<`THEME`, `CONTENT_OPTIONS`\>

  ↳ **`DTableOptions`**

## Table of contents

### Properties

- [background](DTableOptions.md#background)
- [body](DTableOptions.md#body)
- [border](DTableOptions.md#border)
- [category](DTableOptions.md#category)
- [children](DTableOptions.md#children)
- [clear](DTableOptions.md#clear)
- [columns](DTableOptions.md#columns)
- [content](DTableOptions.md#content)
- [corner](DTableOptions.md#corner)
- [cursor](DTableOptions.md#cursor)
- [data](DTableOptions.md#data)
- [gesture](DTableOptions.md#gesture)
- [header](DTableOptions.md#header)
- [height](DTableOptions.md#height)
- [interactive](DTableOptions.md#interactive)
- [mask](DTableOptions.md#mask)
- [name](DTableOptions.md#name)
- [on](DTableOptions.md#on)
- [outline](DTableOptions.md#outline)
- [padding](DTableOptions.md#padding)
- [parent](DTableOptions.md#parent)
- [renderable](DTableOptions.md#renderable)
- [scrollbar](DTableOptions.md#scrollbar)
- [shadow](DTableOptions.md#shadow)
- [shortcut](DTableOptions.md#shortcut)
- [shortcuts](DTableOptions.md#shortcuts)
- [state](DTableOptions.md#state)
- [theme](DTableOptions.md#theme)
- [title](DTableOptions.md#title)
- [visible](DTableOptions.md#visible)
- [weight](DTableOptions.md#weight)
- [width](DTableOptions.md#width)
- [x](DTableOptions.md#x)
- [y](DTableOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[background](DPaneOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### body

• `Optional` **body**: [`DTableBodyOptions`](DTableBodyOptions.md)\<`ROW`, `DATA`, [`DThemeTableBody`](DThemeTableBody.md), `any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table.ts#L39)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[border](DPaneOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### category

• `Optional` **category**: [`DTableCategoryOptions`](DTableCategoryOptions.md)\<[`DThemeTableCategory`](DThemeTableCategory.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table.ts#L37)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[children](DPaneOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DPaneOptions](DPaneOptions.md).[clear](DPaneOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### columns

• **columns**: [`DTableColumnOptions`](DTableColumnOptions.md)\<`ROW`, `any`, `any`, `any`\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table.ts#L36)

___

### content

• `Optional` **content**: [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> \| `CONTENT_OPTIONS`

Content options or a content.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[content](DPaneOptions.md#content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-pane.ts#L40)

___

### corner

• `Optional` **corner**: `number` \| [`DBaseCornerOptions`](DBaseCornerOptions.md)

A corner options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[corner](DPaneOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L471)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[cursor](DPaneOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### data

• `Optional` **data**: `DATA` \| [`DTableDataListOptions`](DTableDataListOptions.md)\<`ROW`\> \| `ROW`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table.ts#L40)

___

### gesture

• `Optional` **gesture**: [`DPaneGestureOptions`](DPaneGestureOptions.md)

Gesture options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[gesture](DPaneOptions.md#gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-pane.ts#L50)

___

### header

• `Optional` **header**: [`DTableHeaderOptions`](DTableHeaderOptions.md)\<`ROW`, [`DThemeTableHeader`](DThemeTableHeader.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table.ts#L38)

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

[DPaneOptions](DPaneOptions.md).[height](DPaneOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[interactive](DPaneOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### mask

• `Optional` **mask**: `boolean`

True to enable an overflow mask.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[mask](DPaneOptions.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-pane.ts#L35)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[name](DPaneOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)\<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[on](DPaneOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L479)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[outline](DPaneOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[padding](DPaneOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

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

[DPaneOptions](DPaneOptions.md).[parent](DPaneOptions.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:396](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L396)

___

### renderable

• `Optional` **renderable**: `boolean`

A renderability.
Unlike [visible](DBaseOptions.md#visible), non-renderable element occupies a space.
Set to true to make [DBase](../classes/DBase.md) renderable.
Set to false to make [DBase](../classes/DBase.md) not renderable.
The default value is true.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[renderable](DPaneOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### scrollbar

• `Optional` **scrollbar**: [`DPaneScrollBarOptions`](DPaneScrollBarOptions.md)

Scroll bar options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[scrollbar](DPaneOptions.md#scrollbar)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-pane.ts#L45)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[shadow](DPaneOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[shortcut](DPaneOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[shortcuts](DPaneOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[state](DPaneOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[theme](DPaneOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[title](DPaneOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DPaneOptions](DPaneOptions.md).[visible](DPaneOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DPaneOptions](DPaneOptions.md).[weight](DPaneOptions.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L484)

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

[DPaneOptions](DPaneOptions.md).[width](DPaneOptions.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:432](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L432)

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

[DPaneOptions](DPaneOptions.md).[x](DPaneOptions.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:412](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L412)

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

[DPaneOptions](DPaneOptions.md).[y](DPaneOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
