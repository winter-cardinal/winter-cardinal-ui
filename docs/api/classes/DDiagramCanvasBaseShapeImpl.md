[Winter Cardinal UI - v0.227.0](../index.md) / DDiagramCanvasBaseShapeImpl

# Class: DDiagramCanvasBaseShapeImpl

## Hierarchy

- **`DDiagramCanvasBaseShapeImpl`**

  ↳ [`DDiagramCanvasEditorShapeImpl`](DDiagramCanvasEditorShapeImpl.md)

  ↳ [`DDiagramCanvasShapeImpl`](DDiagramCanvasShapeImpl.md)

## Implements

- [`DDiagramCanvasBaseShape`](../interfaces/DDiagramCanvasBaseShape.md)

## Table of contents

### Constructors

- [constructor](DDiagramCanvasBaseShapeImpl.md#constructor)

### Properties

- [\_canvas](DDiagramCanvasBaseShapeImpl.md#_canvas)

### Methods

- [each](DDiagramCanvasBaseShapeImpl.md#each)
- [each\_](DDiagramCanvasBaseShapeImpl.md#each_)

## Constructors

### constructor

• **new DDiagramCanvasBaseShapeImpl**(`canvas`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`DDiagramCanvasBaseShapeCanvas`](../interfaces/DDiagramCanvasBaseShapeCanvas.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts#L17)

## Properties

### \_canvas

• `Protected` **\_canvas**: [`DDiagramCanvasBaseShapeCanvas`](../interfaces/DDiagramCanvasBaseShapeCanvas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts#L15)

## Methods

### each

▸ **each**(`iteratee`, `ignoreCapability?`): [`DDiagramCanvasBaseShapeImpl`](DDiagramCanvasBaseShapeImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`shape`: [`EShape`](../interfaces/EShape.md)) => `boolean` \| `void` |
| `ignoreCapability?` | `boolean` |

#### Returns

[`DDiagramCanvasBaseShapeImpl`](DDiagramCanvasBaseShapeImpl.md)

#### Implementation of

[DDiagramCanvasBaseShape](../interfaces/DDiagramCanvasBaseShape.md).[each](../interfaces/DDiagramCanvasBaseShape.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts#L21)

___

### each\_

▸ `Protected` **each_**(`shapes`, `iteratee`, `ignoreCapability?`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `iteratee` | (`shape`: [`EShape`](../interfaces/EShape.md)) => `boolean` \| `void` |
| `ignoreCapability?` | `boolean` |

#### Returns

`undefined` \| `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts#L32)
