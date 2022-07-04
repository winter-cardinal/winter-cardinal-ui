[Winter Cardinal UI - v0.194.0](../index.md) / DDiagrams

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

• **new DDiagrams**()

## Methods

### newLayer

▸ `Static` **newLayer**(`serialized`, `container`, `manager`): `Promise`<[`EShape`](../interfaces/EShape.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |
| `container` | [`EShapeLayerContainer`](../interfaces/EShapeLayerContainer.md) \| [`DDiagramLayerContainer`](DDiagramLayerContainer.md) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`Promise`<[`EShape`](../interfaces/EShape.md)[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagrams.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagrams.ts#L78)

___

### toPieceData

▸ `Static` **toPieceData**(`controller`, `pieces`, `isEditMode`): `Promise`<`Map`<`string`, ``null`` \| [`EShapeEmbeddedDatum`](EShapeEmbeddedDatum.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `undefined` \| ``null`` \| [`DDiagramBaseController`](../interfaces/DDiagramBaseController.md) |
| `pieces` | `undefined` \| ``null`` \| `string`[] |
| `isEditMode` | `boolean` |

#### Returns

`Promise`<`Map`<`string`, ``null`` \| [`EShapeEmbeddedDatum`](EShapeEmbeddedDatum.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagrams.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagrams.ts#L118)

___

### toSerialized

▸ `Static` **toSerialized**(`target`): [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) \| [`DDiagramSerializedSimple`](../interfaces/DDiagramSerializedSimple.md) |

#### Returns

[`DDiagramSerialized`](../interfaces/DDiagramSerialized.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagrams.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagrams.ts#L42)

___

### toSimple

▸ `Static` **toSimple**(`serialized`): [`DDiagramSerializedSimple`](../interfaces/DDiagramSerializedSimple.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`DDiagramSerialized`](../interfaces/DDiagramSerialized.md) |

#### Returns

[`DDiagramSerializedSimple`](../interfaces/DDiagramSerializedSimple.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagrams.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagrams.ts#L21)
