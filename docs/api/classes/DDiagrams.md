[Winter Cardinal UI - v0.374.0](../index.md) / DDiagrams

# Class: DDiagrams

## Table of contents

### Constructors

- [constructor](DDiagrams.md#constructor)

### Methods

- [newLayer](DDiagrams.md#newlayer)
- [toPieceData](DDiagrams.md#topiecedata)
- [toSerialized](DDiagrams.md#toserialized)
- [toSimple](DDiagrams.md#tosimple)

## Constructors

### constructor

• **new DDiagrams**(): [`DDiagrams`](DDiagrams.md)

#### Returns

[`DDiagrams`](DDiagrams.md)

## Methods

### newLayer

▸ **newLayer**(`serialized`, `container`, `manager`): `Promise`\<[`EShape`](../interfaces/EShape.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |
| `container` | [`EShapeLayerContainer`](../interfaces/EShapeLayerContainer.md) \| [`DDiagramLayerContainer`](DDiagramLayerContainer.md) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`Promise`\<[`EShape`](../interfaces/EShape.md)[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagrams.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagrams.ts#L87)

___

### toPieceData

▸ **toPieceData**(`controller`, `pieces`, `mode`): `Promise`\<`Map`\<`string`, ``null`` \| [`EShapeEmbeddedDatum`](EShapeEmbeddedDatum.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `undefined` \| ``null`` \| [`DDiagramBaseController`](../interfaces/DDiagramBaseController.md) |
| `pieces` | `undefined` \| ``null`` \| `string`[] |
| `mode` | [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1) |

#### Returns

`Promise`\<`Map`\<`string`, ``null`` \| [`EShapeEmbeddedDatum`](EShapeEmbeddedDatum.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagrams.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagrams.ts#L127)

___

### toSerialized

▸ **toSerialized**(`target`): [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DDiagramSerializedSimple`](../interfaces/DDiagramSerializedSimple.md) \| [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |

#### Returns

[`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagrams.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagrams.ts#L47)

___

### toSimple

▸ **toSimple**(`serialized`): [`DDiagramSerializedSimple`](../interfaces/DDiagramSerializedSimple.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |

#### Returns

[`DDiagramSerializedSimple`](../interfaces/DDiagramSerializedSimple.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagrams.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagrams.ts#L22)
