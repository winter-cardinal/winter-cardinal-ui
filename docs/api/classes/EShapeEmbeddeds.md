[Winter Cardinal UI - v0.310.1](../index.md) / EShapeEmbeddeds

# Class: EShapeEmbeddeds

## Table of contents

### Constructors

- [constructor](EShapeEmbeddeds.md#constructor)

### Methods

- [create](EShapeEmbeddeds.md#create)
- [from](EShapeEmbeddeds.md#from)

## Constructors

### constructor

• **new EShapeEmbeddeds**()

## Methods

### create

▸ `Static` **create**(`name`, `width`, `height`, `container`, `mode`, `depth`): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `width` | `number` |
| `height` | `number` |
| `container` | [`EShapeLayerContainer`](../interfaces/EShapeLayerContainer.md) |
| `mode` | [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1) |
| `depth` | `number` |

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embeddeds.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embeddeds.ts#L50)

___

### from

▸ `Static` **from**(`serializedOrSimple`, `controller`, `mode`): `Promise`<[`EShapeEmbedded`](EShapeEmbedded.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedOrSimple` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) \| [`DDiagramSerializedSimple`](../interfaces/DDiagramSerializedSimple.md) |
| `controller` | `undefined` \| ``null`` \| [`DDiagramBaseController`](../interfaces/DDiagramBaseController.md) |
| `mode` | [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1) |

#### Returns

`Promise`<[`EShapeEmbedded`](EShapeEmbedded.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embeddeds.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embeddeds.ts#L17)
