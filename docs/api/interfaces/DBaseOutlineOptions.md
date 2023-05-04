[Winter Cardinal UI - v0.310.1](../index.md) / DBaseOutlineOptions

# Interface: DBaseOutlineOptions

[DBase](../classes/DBase.md) outline optons.

## Table of contents

### Properties

- [align](DBaseOutlineOptions.md#align)
- [alpha](DBaseOutlineOptions.md#alpha)
- [color](DBaseOutlineOptions.md#color)
- [mask](DBaseOutlineOptions.md#mask)
- [offset](DBaseOutlineOptions.md#offset)
- [width](DBaseOutlineOptions.md#width)

## Properties

### align

• `Optional` **align**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

An align or a function returning an align.
If a computed value is undefined, falls back to an outline align of a theme.
If an align is 0, an outline is rendered completely inside.
If an align is 1, an outline is rendered completely outside.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L351)

___

### alpha

• `Optional` **alpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

An alpha or a function returning an alpha.
If a computed value is undefined, falls back to an outline alpha of a theme.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:330](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L330)

___

### color

• `Optional` **color**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

A color code or a function returning a color code.
If a computed value is undefined, falls back to the theme color.
If a computed value is null, a background is not rendered.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:324](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L324)

___

### mask

• `Optional` **mask**: ``"NONE"`` \| ``"ALL"`` \| ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| ``"TOP_LEFT"`` \| ``"TOP_RIGHT"`` \| ``"BOTTOM_LEFT"`` \| ``"RIGHT_BOTTOM"`` \| [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\> \| ``"TOP_BOTTOM"`` \| ``"RIGHT_LEFT"`` \| ``"NOT_TOP"`` \| ``"NOT_RIGHT"`` \| ``"NOT_BOTTOM"`` \| ``"NOT_LEFT"``

Masked outlines get removed.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L354)

___

### offset

• `Optional` **offset**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

An offset or a function returning an offset.
If a computed value is undefined, falls back to an outline align of a theme.
A outline moves to outside when an offset gets larger.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L343)

___

### width

• `Optional` **width**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

A width or a function returning a width.
If a computed value is undefined, falls back to an outline width of a theme.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:336](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base.ts#L336)
