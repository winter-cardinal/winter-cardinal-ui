[Winter Cardinal UI - v0.310.1](../index.md) / DDiagramCanvasEditorShapeImpl

# Class: DDiagramCanvasEditorShapeImpl

## Hierarchy

- [`DDiagramCanvasBaseShapeImpl`](DDiagramCanvasBaseShapeImpl.md)

  ↳ **`DDiagramCanvasEditorShapeImpl`**

## Table of contents

### Constructors

- [constructor](DDiagramCanvasEditorShapeImpl.md#constructor)

### Properties

- [\_canvas](DDiagramCanvasEditorShapeImpl.md#_canvas)

### Methods

- [each](DDiagramCanvasEditorShapeImpl.md#each)
- [each\_](DDiagramCanvasEditorShapeImpl.md#each_)

## Constructors

### constructor

• **new DDiagramCanvasEditorShapeImpl**(`canvas`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`DDiagramCanvasBaseShapeCanvas`](../interfaces/DDiagramCanvasBaseShapeCanvas.md) |

#### Inherited from

[DDiagramCanvasBaseShapeImpl](DDiagramCanvasBaseShapeImpl.md).[constructor](DDiagramCanvasBaseShapeImpl.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts#L17)

## Properties

### \_canvas

• `Protected` **\_canvas**: [`DDiagramCanvasBaseShapeCanvas`](../interfaces/DDiagramCanvasBaseShapeCanvas.md)

#### Inherited from

[DDiagramCanvasBaseShapeImpl](DDiagramCanvasBaseShapeImpl.md).[_canvas](DDiagramCanvasBaseShapeImpl.md#_canvas)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts#L15)

## Methods

### each

▸ **each**(`iteratee`, `ignoreCapability?`): [`DDiagramCanvasEditorShapeImpl`](DDiagramCanvasEditorShapeImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`shape`: [`EShape`](../interfaces/EShape.md)) => `boolean` \| `void` |
| `ignoreCapability?` | `boolean` |

#### Returns

[`DDiagramCanvasEditorShapeImpl`](DDiagramCanvasEditorShapeImpl.md)

#### Inherited from

[DDiagramCanvasBaseShapeImpl](DDiagramCanvasBaseShapeImpl.md).[each](DDiagramCanvasBaseShapeImpl.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts#L21)

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

#### Inherited from

[DDiagramCanvasBaseShapeImpl](DDiagramCanvasBaseShapeImpl.md).[each_](DDiagramCanvasBaseShapeImpl.md#each_)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts#L32)
