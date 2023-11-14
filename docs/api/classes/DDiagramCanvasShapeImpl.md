[Winter Cardinal UI - v0.374.0](../index.md) / DDiagramCanvasShapeImpl

# Class: DDiagramCanvasShapeImpl

## Hierarchy

- [`DDiagramCanvasBaseShapeImpl`](DDiagramCanvasBaseShapeImpl.md)

  ↳ **`DDiagramCanvasShapeImpl`**

## Table of contents

### Constructors

- [constructor](DDiagramCanvasShapeImpl.md#constructor)

### Properties

- [\_canvas](DDiagramCanvasShapeImpl.md#_canvas)
- [\_data](DDiagramCanvasShapeImpl.md#_data)

### Methods

- [add](DDiagramCanvasShapeImpl.md#add)
- [each](DDiagramCanvasShapeImpl.md#each)
- [each\_](DDiagramCanvasShapeImpl.md#each_)
- [get](DDiagramCanvasShapeImpl.md#get)
- [getAll](DDiagramCanvasShapeImpl.md#getall)

## Constructors

### constructor

• **new DDiagramCanvasShapeImpl**(`canvas`): [`DDiagramCanvasShapeImpl`](DDiagramCanvasShapeImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`DDiagramCanvasBaseShapeCanvas`](../interfaces/DDiagramCanvasBaseShapeCanvas.md) |

#### Returns

[`DDiagramCanvasShapeImpl`](DDiagramCanvasShapeImpl.md)

#### Overrides

[DDiagramCanvasBaseShapeImpl](DDiagramCanvasBaseShapeImpl.md).[constructor](DDiagramCanvasBaseShapeImpl.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts#L13)

## Properties

### \_canvas

• `Protected` **\_canvas**: [`DDiagramCanvasBaseShapeCanvas`](../interfaces/DDiagramCanvasBaseShapeCanvas.md)

#### Inherited from

[DDiagramCanvasBaseShapeImpl](DDiagramCanvasBaseShapeImpl.md).[_canvas](DDiagramCanvasBaseShapeImpl.md#_canvas)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts#L15)

___

### \_data

• `Protected` **\_data**: `Map`\<`string`, [`EShape`](../interfaces/EShape.md)[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts#L11)

## Methods

### add

▸ **add**(`id`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts#L18)

___

### each

▸ **each**(`iteratee`, `ignoreCapability?`): [`DDiagramCanvasShapeImpl`](DDiagramCanvasShapeImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`shape`: [`EShape`](../interfaces/EShape.md)) => `boolean` \| `void` |
| `ignoreCapability?` | `boolean` |

#### Returns

[`DDiagramCanvasShapeImpl`](DDiagramCanvasShapeImpl.md)

#### Inherited from

[DDiagramCanvasBaseShapeImpl](DDiagramCanvasBaseShapeImpl.md).[each](DDiagramCanvasBaseShapeImpl.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-base-shape-impl.ts#L21)

___

### each\_

▸ **each_**(`shapes`, `iteratee`, `ignoreCapability?`): `undefined` \| `boolean`

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

___

### get

▸ **get**(`id`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts#L28)

___

### getAll

▸ **getAll**(`id`): [`EShape`](../interfaces/EShape.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts#L36)
