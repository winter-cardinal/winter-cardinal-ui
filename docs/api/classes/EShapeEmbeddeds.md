[Winter Cardinal UI - v0.164.0](../index.md) / EShapeEmbeddeds

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

▸ `Static` **create**(`name`, `width`, `height`, `container`, `manager`): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `width` | `number` |
| `height` | `number` |
| `container` | [`EShapeLayerContainer`](../interfaces/EShapeLayerContainer.md) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embeddeds.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embeddeds.ts#L43)

___

### from

▸ `Static` **from**(`serializedOrSimple`, `controller`, `isEditMode`): `Promise`<[`EShapeEmbedded`](EShapeEmbedded.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedOrSimple` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) \| [`DDiagramSerializedSimple`](../interfaces/DDiagramSerializedSimple.md) |
| `controller` | `undefined` \| ``null`` \| [`DDiagramBaseController`](../interfaces/DDiagramBaseController.md) |
| `isEditMode` | `boolean` |

#### Returns

`Promise`<[`EShapeEmbedded`](EShapeEmbedded.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embeddeds.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embeddeds.ts#L11)
