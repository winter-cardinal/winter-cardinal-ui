[Winter Cardinal UI - v0.414.0](../index.md) / EShapeUuidMappingImpl

# Class: EShapeUuidMappingImpl

## Implements

- [`EShapeUuidMapping`](../interfaces/EShapeUuidMapping.md)

## Table of contents

### Constructors

- [constructor](EShapeUuidMappingImpl.md#constructor)

### Properties

- [\_shapes](EShapeUuidMappingImpl.md#_shapes)
- [\_uuidToShape](EShapeUuidMappingImpl.md#_uuidtoshape)

### Methods

- [fillUuidToShape](EShapeUuidMappingImpl.md#filluuidtoshape)
- [find](EShapeUuidMappingImpl.md#find)
- [getUuidToShape](EShapeUuidMappingImpl.md#getuuidtoshape)
- [newUuidToShape](EShapeUuidMappingImpl.md#newuuidtoshape)

## Constructors

### constructor

• **new EShapeUuidMappingImpl**(`shapes`): [`EShapeUuidMappingImpl`](EShapeUuidMappingImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |

#### Returns

[`EShapeUuidMappingImpl`](EShapeUuidMappingImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts#L14)

## Properties

### \_shapes

• `Protected` **\_shapes**: [`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts#L11)

___

### \_uuidToShape

• `Protected` `Optional` **\_uuidToShape**: `Map`\<`number`, [`EShape`](../interfaces/EShape.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts#L12)

## Methods

### fillUuidToShape

▸ **fillUuidToShape**(`shapes`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `result` | `Map`\<`number`, [`EShape`](../interfaces/EShape.md)\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts#L37)

___

### find

▸ **find**(`uuid`): `undefined` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `number` |

#### Returns

`undefined` \| [`EShape`](../interfaces/EShape.md)

#### Implementation of

[EShapeUuidMapping](../interfaces/EShapeUuidMapping.md).[find](../interfaces/EShapeUuidMapping.md#find)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts#L18)

___

### getUuidToShape

▸ **getUuidToShape**(): `Map`\<`number`, [`EShape`](../interfaces/EShape.md)\>

#### Returns

`Map`\<`number`, [`EShape`](../interfaces/EShape.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts#L22)

___

### newUuidToShape

▸ **newUuidToShape**(): `Map`\<`number`, [`EShape`](../interfaces/EShape.md)\>

#### Returns

`Map`\<`number`, [`EShape`](../interfaces/EShape.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts#L31)
