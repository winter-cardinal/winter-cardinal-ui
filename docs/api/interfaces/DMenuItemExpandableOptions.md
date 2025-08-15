[Winter Cardinal UI - v0.457.0](../index.md) / DMenuItemExpandableOptions

# Interface: DMenuItemExpandableOptions\<VALUE, THEME\>

[DBase](../classes/DBase.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `THEME` | extends [`DThemeMenuItemExpandable`](DThemeMenuItemExpandable.md) = [`DThemeMenuItemExpandable`](DThemeMenuItemExpandable.md) |

## Hierarchy

- [`DLayoutVerticalOptions`](DLayoutVerticalOptions.md)\<`THEME`\>

  ↳ **`DMenuItemExpandableOptions`**

## Table of contents

### Properties

- [background](DMenuItemExpandableOptions.md#background)
- [body](DMenuItemExpandableOptions.md#body)
- [border](DMenuItemExpandableOptions.md#border)
- [children](DMenuItemExpandableOptions.md#children)
- [clear](DMenuItemExpandableOptions.md#clear)
- [column](DMenuItemExpandableOptions.md#column)
- [corner](DMenuItemExpandableOptions.md#corner)
- [cursor](DMenuItemExpandableOptions.md#cursor)
- [direction](DMenuItemExpandableOptions.md#direction)
- [header](DMenuItemExpandableOptions.md#header)
- [height](DMenuItemExpandableOptions.md#height)
- [interactive](DMenuItemExpandableOptions.md#interactive)
- [items](DMenuItemExpandableOptions.md#items)
- [margin](DMenuItemExpandableOptions.md#margin)
- [name](DMenuItemExpandableOptions.md#name)
- [on](DMenuItemExpandableOptions.md#on)
- [outline](DMenuItemExpandableOptions.md#outline)
- [padding](DMenuItemExpandableOptions.md#padding)
- [parent](DMenuItemExpandableOptions.md#parent)
- [renderable](DMenuItemExpandableOptions.md#renderable)
- [reverse](DMenuItemExpandableOptions.md#reverse)
- [row](DMenuItemExpandableOptions.md#row)
- [shadow](DMenuItemExpandableOptions.md#shadow)
- [shortcut](DMenuItemExpandableOptions.md#shortcut)
- [shortcuts](DMenuItemExpandableOptions.md#shortcuts)
- [state](DMenuItemExpandableOptions.md#state)
- [sticky](DMenuItemExpandableOptions.md#sticky)
- [theme](DMenuItemExpandableOptions.md#theme)
- [title](DMenuItemExpandableOptions.md#title)
- [visible](DMenuItemExpandableOptions.md#visible)
- [weight](DMenuItemExpandableOptions.md#weight)
- [width](DMenuItemExpandableOptions.md#width)
- [x](DMenuItemExpandableOptions.md#x)
- [y](DMenuItemExpandableOptions.md#y)

## Properties

### background

• `Optional` **background**: [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

A background options.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[background](DLayoutVerticalOptions.md#background)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L496)

___

### body

• `Optional` **body**: `Container` \| [`DMenuItemExpandableBodyOptions`](DMenuItemExpandableBodyOptions.md)\<[`DThemeMenuItemExpandableBody`](DThemeMenuItemExpandableBody.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L27)

___

### border

• `Optional` **border**: [`DBaseBorderOptions`](DBaseBorderOptions.md)

A border options.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[border](DLayoutVerticalOptions.md#border)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:499](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L499)

___

### children

• `Optional` **children**: (``null`` \| `DisplayObject`)[]

Children.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[children](DLayoutVerticalOptions.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L399)

___

### clear

• `Optional` **clear**: `number` \| ``"NONE"`` \| ``"BOTH"`` \| ``"BEFORE"`` \| ``"AFTER"``

A clear type used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[clear](DLayoutVerticalOptions.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L508)

___

### column

• `Optional` **column**: `number`

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[column](DLayoutVerticalOptions.md#column)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-layout.ts#L34)

___

### corner

• `Optional` **corner**: `number` \| [`DLayoutCornerOptions`](DLayoutCornerOptions.md)

A corner options.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[corner](DLayoutVerticalOptions.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-layout.ts#L32)

___

### cursor

• `Optional` **cursor**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`string`\>

A cursor shape.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[cursor](DLayoutVerticalOptions.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:511](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L511)

___

### direction

• `Optional` **direction**: ``"VERTICAL"`` \| ``"HORIZONTAL"`` \| [`DLayoutDirection`](../index.md#dlayoutdirection)

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[direction](DLayoutVerticalOptions.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-layout.ts#L35)

___

### header

• **header**: `DisplayObject` \| [`DMenuItemExpandableHeaderOptions`](DMenuItemExpandableHeaderOptions.md)\<`VALUE`, [`DThemeMenuItemExpandableHeader`](DThemeMenuItemExpandableHeader.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L26)

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

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[height](DLayoutVerticalOptions.md#height)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L442)

___

### interactive

• `Optional` **interactive**: `number` \| ``"NONE"`` \| ``"SELF"`` \| ``"CHILDREN"`` \| ``"BOTH"``

An interactivity option.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[interactive](DLayoutVerticalOptions.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:465](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L465)

___

### items

• `Optional` **items**: (`DisplayObject` \| [`DMenuItemOptionsUnion`](../index.md#dmenuitemoptionsunion)\<`VALUE`\>)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L28)

___

### margin

• `Optional` **margin**: `number` \| [`DLayoutMarginOptions`](DLayoutMarginOptions.md)

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[margin](DLayoutVerticalOptions.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-layout.ts#L31)

___

### name

• `Optional` **name**: `string`

A name.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[name](DLayoutVerticalOptions.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L402)

___

### on

• `Optional` **on**: [`DBaseOnOptions`](DBaseOnOptions.md)\<`any`\>

Mappings of event names and event handlers.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[on](DLayoutVerticalOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:479](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L479)

___

### outline

• `Optional` **outline**: [`DBaseOutlineOptions`](DBaseOutlineOptions.md)

An outline options.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[outline](DLayoutVerticalOptions.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L502)

___

### padding

• `Optional` **padding**: `number` \| [`DBasePaddingOptions`](DBasePaddingOptions.md)

A padding options.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[padding](DLayoutVerticalOptions.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:468](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L468)

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

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[parent](DLayoutVerticalOptions.md#parent)

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

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[renderable](DLayoutVerticalOptions.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L459)

___

### reverse

• `Optional` **reverse**: `boolean`

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[reverse](DLayoutVerticalOptions.md#reverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-layout.ts#L36)

___

### row

• `Optional` **row**: `number`

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[row](DLayoutVerticalOptions.md#row)

#### Defined in

[src/main/typescript/wcardinal/ui/d-layout.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-layout.ts#L33)

___

### shadow

• `Optional` **shadow**: ``null`` \| [`DBaseShadow`](../index.md#dbaseshadow)

A shadow.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[shadow](DLayoutVerticalOptions.md#shadow)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L505)

___

### shortcut

• `Optional` **shortcut**: `string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md)

A shortcut option.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[shortcut](DLayoutVerticalOptions.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L490)

___

### shortcuts

• `Optional` **shortcuts**: (`string` \| [`UtilKeyboardEventShortcut`](UtilKeyboardEventShortcut.md))[]

A shortcut options.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[shortcuts](DLayoutVerticalOptions.md#shortcuts)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:493](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L493)

___

### state

• `Optional` **state**: `string` \| `string`[] \| [`DBaseStateOptions`](DBaseStateOptions.md)

A default state.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[state](DLayoutVerticalOptions.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L462)

___

### sticky

• `Optional` **sticky**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-menu-item-expandable.ts#L29)

___

### theme

• `Optional` **theme**: `string` \| `THEME`

A theme or a theme name.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[theme](DLayoutVerticalOptions.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L474)

___

### title

• `Optional` **title**: `string`

A tooltip text.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[title](DLayoutVerticalOptions.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:487](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L487)

___

### visible

• `Optional` **visible**: `boolean`

A visibility.
Set to true to make [DBase](../classes/DBase.md) visible.
Set to false to make [DBase](../classes/DBase.md) invisible.
The default value is true.

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[visible](DLayoutVerticalOptions.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L450)

___

### weight

• `Optional` **weight**: `number`

A weight used by [DLayoutVertical](../classes/DLayoutVertical.md) and [DLayoutHorizontal](../classes/DLayoutHorizontal.md).

#### Inherited from

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[weight](DLayoutVerticalOptions.md#weight)

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

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[width](DLayoutVerticalOptions.md#width)

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

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[x](DLayoutVerticalOptions.md#x)

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

[DLayoutVerticalOptions](DLayoutVerticalOptions.md).[y](DLayoutVerticalOptions.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L422)
