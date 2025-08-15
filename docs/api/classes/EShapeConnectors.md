[Winter Cardinal UI - v0.457.0](../index.md) / EShapeConnectors

# Class: EShapeConnectors

## Table of contents

### Constructors

- [constructor](EShapeConnectors.md#constructor)

### Properties

- [\_MAPPING](EShapeConnectors.md#_mapping)

### Methods

- [isConnector](EShapeConnectors.md#isconnector)
- [move](EShapeConnectors.md#move)
- [moveAll](EShapeConnectors.md#moveall)
- [newMapping](EShapeConnectors.md#newmapping)

## Constructors

### constructor

• **new EShapeConnectors**(): [`EShapeConnectors`](EShapeConnectors.md)

#### Returns

[`EShapeConnectors`](EShapeConnectors.md)

## Properties

### \_MAPPING

▪ `Static` `Protected` `Optional` **\_MAPPING**: `Map`\<[`EShape`](../interfaces/EShape.md), [`EShape`](../interfaces/EShape.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connectors.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-connectors.ts#L11)

## Methods

### isConnector

▸ **isConnector**(`target`): target is EShapeConnector

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| [`EShape`](../interfaces/EShape.md) |

#### Returns

target is EShapeConnector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connectors.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-connectors.ts#L13)

___

### move

▸ **move**(`from`, `to`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`EShape`](../interfaces/EShape.md) |
| `to` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connectors.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-connectors.ts#L95)

___

### moveAll

▸ **moveAll**(`rootSources`, `rootDestinations`, `sources`, `destinations`, `mapping?`): `undefined` \| `Map`\<[`EShape`](../interfaces/EShape.md), [`EShape`](../interfaces/EShape.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootSources` | [`EShape`](../interfaces/EShape.md)[] |
| `rootDestinations` | [`EShape`](../interfaces/EShape.md)[] |
| `sources` | [`EShape`](../interfaces/EShape.md)[] |
| `destinations` | [`EShape`](../interfaces/EShape.md)[] |
| `mapping?` | `Map`\<[`EShape`](../interfaces/EShape.md), [`EShape`](../interfaces/EShape.md)\> |

#### Returns

`undefined` \| `Map`\<[`EShape`](../interfaces/EShape.md), [`EShape`](../interfaces/EShape.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connectors.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-connectors.ts#L35)

___

### newMapping

▸ **newMapping**(`sources`, `destinations`, `result?`): `Map`\<[`EShape`](../interfaces/EShape.md), [`EShape`](../interfaces/EShape.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | [`EShape`](../interfaces/EShape.md)[] |
| `destinations` | [`EShape`](../interfaces/EShape.md)[] |
| `result?` | `Map`\<[`EShape`](../interfaces/EShape.md), [`EShape`](../interfaces/EShape.md)\> |

#### Returns

`Map`\<[`EShape`](../interfaces/EShape.md), [`EShape`](../interfaces/EShape.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connectors.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-connectors.ts#L17)
