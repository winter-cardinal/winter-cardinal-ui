[Winter Cardinal UI - v0.160.0](../index.md) / EShapeUuidMappingImpl

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

• **new EShapeUuidMappingImpl**(`shapes`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts#L13)

## Properties

### \_shapes

• `Protected` **\_shapes**: [`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts#L10)

___

### \_uuidToShape

• `Protected` `Optional` **\_uuidToShape**: `Map`<`number`, [`EShape`](../interfaces/EShape.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts#L11)

## Methods

### fillUuidToShape

▸ `Protected` **fillUuidToShape**(`shapes`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |
| `result` | `Map`<`number`, [`EShape`](../interfaces/EShape.md)\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts#L36)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts#L17)

___

### getUuidToShape

▸ `Protected` **getUuidToShape**(): `Map`<`number`, [`EShape`](../interfaces/EShape.md)\>

#### Returns

`Map`<`number`, [`EShape`](../interfaces/EShape.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts#L21)

___

### newUuidToShape

▸ `Protected` **newUuidToShape**(): `Map`<`number`, [`EShape`](../interfaces/EShape.md)\>

#### Returns

`Map`<`number`, [`EShape`](../interfaces/EShape.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-uuid-mapping-impl.ts#L30)
