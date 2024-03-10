[Winter Cardinal UI - v0.414.0](../index.md) / DBaseBackgroundOptions

# Interface: DBaseBackgroundOptions

[DBase](../classes/DBase.md) background options.

## Hierarchy

- **`DBaseBackgroundOptions`**

  ↳ [`DDiagramCanvasBackgroundOptions`](DDiagramCanvasBackgroundOptions.md)

## Table of contents

### Properties

- [alpha](DBaseBackgroundOptions.md#alpha)
- [color](DBaseBackgroundOptions.md#color)

## Properties

### alpha

• `Optional` **alpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

An alpha or a function returning an alpha.
If a computed value is undefined, falls back to an background alpha of a theme.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L276)

___

### color

• `Optional` **color**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `number`\>

A color code or a function returning a color code.
If a computed value is undefined, falls back to the theme color.
If a computed value is null, a background is not rendered.

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:270](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base.ts#L270)
