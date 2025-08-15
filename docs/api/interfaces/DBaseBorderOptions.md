[Winter Cardinal UI - v0.457.0](../index.md) / DBaseBorderOptions

# Interface: DBaseBorderOptions

[DBase](../classes/DBase.md) border options.

## Table of contents

### Properties

- [align](DBaseBorderOptions.md#align)
- [alpha](DBaseBorderOptions.md#alpha)
- [color](DBaseBorderOptions.md#color)
- [mask](DBaseBorderOptions.md#mask)
- [width](DBaseBorderOptions.md#width)

## Properties

### align

• `Optional` **align**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

An align or a function returning an align.
If a computed value is undefined, falls back to a border align of a theme.
If an align is 0, a border is rendered completely inside of a [DBase](../classes/DBase.md).
If an align is 1, a border is rendered completely outside of a [DBase](../classes/DBase.md).

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L308)

___

### alpha

• `Optional` **alpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

An alpha or a function returning an alpha.
If a computed value is undefined, falls back to a border alpha of a theme.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L294)

___

### color

• `Optional` **color**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `number`\>

A color code or a function returning a color code.
If a computed value is undefined, falls back to the theme color.
If a computed value is null, a background is not rendered.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L288)

___

### mask

• `Optional` **mask**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\> \| ``"NONE"`` \| ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| ``"TOP_RIGHT"`` \| ``"TOP_BOTTOM"`` \| ``"TOP_LEFT"`` \| ``"RIGHT_BOTTOM"`` \| ``"RIGHT_LEFT"`` \| ``"BOTTOM_LEFT"`` \| ``"NOT_TOP"`` \| ``"NOT_RIGHT"`` \| ``"NOT_BOTTOM"`` \| ``"NOT_LEFT"`` \| ``"ALL"``

Masked borders get removed.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L311)

___

### width

• `Optional` **width**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

A width or a function returning a width.
If a computed value is undefined, falls back to a border width of a theme.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-base.ts#L300)
