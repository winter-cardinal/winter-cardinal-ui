[Winter Cardinal UI - v0.200.0](../index.md) / DDiagramCanvasBackgroundOptions

# Interface: DDiagramCanvasBackgroundOptions

## Hierarchy

- [`DBaseBackgroundOptions`](DBaseBackgroundOptions.md)

  ↳ **`DDiagramCanvasBackgroundOptions`**

## Table of contents

### Properties

- [alpha](DDiagramCanvasBackgroundOptions.md#alpha)
- [base](DDiagramCanvasBackgroundOptions.md#base)
- [color](DDiagramCanvasBackgroundOptions.md#color)

## Properties

### alpha

• `Optional` **alpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

An alpha or a function returning an alpha.
If a computed value is undefined, falls back to an background alpha of a theme.

#### Inherited from

[DBaseBackgroundOptions](DBaseBackgroundOptions.md).[alpha](DBaseBackgroundOptions.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:262](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L262)

___

### base

• `Optional` **base**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base.ts#L16)

___

### color

• `Optional` **color**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

A color code or a function returning a color code.
If a computed value is undefined, falls back to the theme color.
If a computed value is null, a background is not rendered.

#### Inherited from

[DBaseBackgroundOptions](DBaseBackgroundOptions.md).[color](DBaseBackgroundOptions.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base.ts:256](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-base.ts#L256)
