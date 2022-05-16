[Winter Cardinal UI - v0.167.0](../index.md) / DBaseBorderOptions

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

• `Optional` **align**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

An align or a function returning an align.
If a computed value is undefined, falls back to a border align of a theme.
If an align is 0, a border is rendered completely inside of a [DBase](../classes/DBase.md).
If an align is 1, a border is rendered completely outside of a [DBase](../classes/DBase.md).

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L294)

___

### alpha

• `Optional` **alpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

An alpha or a function returning an alpha.
If a computed value is undefined, falls back to a border alpha of a theme.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:280](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L280)

___

### color

• `Optional` **color**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

A color code or a function returning a color code.
If a computed value is undefined, falls back to the theme color.
If a computed value is null, a background is not rendered.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L274)

___

### mask

• `Optional` **mask**: ``"NONE"`` \| ``"ALL"`` \| ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| ``"TOP_LEFT"`` \| ``"TOP_RIGHT"`` \| ``"BOTTOM_LEFT"`` \| ``"RIGHT_BOTTOM"`` \| [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\> \| ``"TOP_BOTTOM"`` \| ``"RIGHT_LEFT"`` \| ``"NOT_TOP"`` \| ``"NOT_RIGHT"`` \| ``"NOT_BOTTOM"`` \| ``"NOT_LEFT"``

Masked borders get removed.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:297](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L297)

___

### width

• `Optional` **width**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

A width or a function returning a width.
If a computed value is undefined, falls back to a border width of a theme.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base.ts#L286)
