[Winter Cardinal UI - v0.414.0](../index.md) / DDiagrams

# Class: DDiagrams

## Table of contents

### Constructors

- [constructor](DDiagrams.md#constructor)

### Methods

- [newLayer](DDiagrams.md#newlayer)
- [parse](DDiagrams.md#parse)
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

[src/main/typescript/wcardinal/ui/d-diagrams.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagrams.ts#L113)

___

### parse

▸ **parse**(`target`): ``null`` \| [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |

#### Returns

``null`` \| [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagrams.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagrams.ts#L25)

___

### toPieceData

▸ **toPieceData**(`controller`, `pieces`, `mode`): `Promise`\<`Map`\<`string`, ``null`` \| [`EShapeEmbeddedDatum`](EShapeEmbeddedDatum.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `undefined` \| ``null`` \| [`DDiagramBaseController`](../interfaces/DDiagramBaseController.md) |
| `pieces` | `undefined` \| ``null`` \| `string`[] |
| `mode` | [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode) |

#### Returns

`Promise`\<`Map`\<`string`, ``null`` \| [`EShapeEmbeddedDatum`](EShapeEmbeddedDatum.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagrams.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagrams.ts#L153)

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

[src/main/typescript/wcardinal/ui/d-diagrams.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagrams.ts#L73)

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

[src/main/typescript/wcardinal/ui/d-diagrams.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-diagrams.ts#L48)
