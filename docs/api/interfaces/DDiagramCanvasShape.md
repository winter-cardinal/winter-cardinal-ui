[Winter Cardinal UI - v0.374.0](../index.md) / DDiagramCanvasShape

# Interface: DDiagramCanvasShape

## Hierarchy

- [`DDiagramCanvasBaseShape`](DDiagramCanvasBaseShape.md)

  ↳ **`DDiagramCanvasShape`**

## Table of contents

### Methods

- [add](DDiagramCanvasShape.md#add)
- [each](DDiagramCanvasShape.md#each)
- [get](DDiagramCanvasShape.md#get)
- [getAll](DDiagramCanvasShape.md#getall)

## Methods

### add

▸ **add**(`id`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `shape` | [`EShape`](EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-shape.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-shape.ts#L10)

___

### each

▸ **each**(`iteratee`, `ignoreCapability?`): [`DDiagramCanvasShape`](DDiagramCanvasShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`shape`: [`EShape`](EShape.md)) => `boolean` |
| `ignoreCapability?` | `boolean` |

#### Returns

[`DDiagramCanvasShape`](DDiagramCanvasShape.md)

#### Inherited from

[DDiagramCanvasBaseShape](DDiagramCanvasBaseShape.md).[each](DDiagramCanvasBaseShape.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape.ts#L21)

___

### get

▸ **get**(`id`): ``null`` \| [`EShape`](EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`EShape`](EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-shape.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-shape.ts#L11)

___

### getAll

▸ **getAll**(`id`): [`EShape`](EShape.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`EShape`](EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-shape.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-shape.ts#L12)
