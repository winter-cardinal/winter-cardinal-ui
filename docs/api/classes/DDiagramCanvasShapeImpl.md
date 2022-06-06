[Winter Cardinal UI - v0.179.0](../index.md) / DDiagramCanvasShapeImpl

# Class: DDiagramCanvasShapeImpl

## Implements

- [`DDiagramCanvasShape`](../interfaces/DDiagramCanvasShape.md)

## Table of contents

### Constructors

- [constructor](DDiagramCanvasShapeImpl.md#constructor)

### Properties

- [\_data](DDiagramCanvasShapeImpl.md#_data)

### Methods

- [add](DDiagramCanvasShapeImpl.md#add)
- [get](DDiagramCanvasShapeImpl.md#get)
- [getAll](DDiagramCanvasShapeImpl.md#getall)

## Constructors

### constructor

• **new DDiagramCanvasShapeImpl**()

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts#L12)

## Properties

### \_data

• `Protected` **\_data**: `Map`<`string`, [`EShape`](../interfaces/EShape.md)[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts#L10)

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

#### Implementation of

[DDiagramCanvasShape](../interfaces/DDiagramCanvasShape.md).[add](../interfaces/DDiagramCanvasShape.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts#L16)

___

### get

▸ **get**(`id`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Implementation of

[DDiagramCanvasShape](../interfaces/DDiagramCanvasShape.md).[get](../interfaces/DDiagramCanvasShape.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts#L26)

___

### getAll

▸ **getAll**(`id`): [`EShape`](../interfaces/EShape.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`EShape`](../interfaces/EShape.md)[]

#### Implementation of

[DDiagramCanvasShape](../interfaces/DDiagramCanvasShape.md).[getAll](../interfaces/DDiagramCanvasShape.md#getall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-shape-impl.ts#L34)
