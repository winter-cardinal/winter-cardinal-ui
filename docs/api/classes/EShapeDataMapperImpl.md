[Winter Cardinal UI - v0.457.0](../index.md) / EShapeDataMapperImpl

# Class: EShapeDataMapperImpl

An EShape data mapper.

## Implements

- [`EShapeDataMapper`](../interfaces/EShapeDataMapper.md)

## Table of contents

### Constructors

- [constructor](EShapeDataMapperImpl.md#constructor)

### Properties

- [\_sources](EShapeDataMapperImpl.md#_sources)
- [SPANS](EShapeDataMapperImpl.md#spans)
- [WILDCARD](EShapeDataMapperImpl.md#wildcard)

### Methods

- [map](EShapeDataMapperImpl.md#map)
- [newSources](EShapeDataMapperImpl.md#newsources)
- [split](EShapeDataMapperImpl.md#split)

## Constructors

### constructor

• **new EShapeDataMapperImpl**(`source?`): [`EShapeDataMapperImpl`](EShapeDataMapperImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source?` | ``null`` \| `string` |

#### Returns

[`EShapeDataMapperImpl`](EShapeDataMapperImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L14)

## Properties

### \_sources

• `Protected` **\_sources**: ``null`` \| `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L12)

___

### SPANS

▪ `Static` `Protected` **SPANS**: `number`[] = `[]`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L11)

___

### WILDCARD

▪ `Static` `Protected` **WILDCARD**: `string` = `"*"`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L10)

## Methods

### map

▸ **map**(`value`, `destinations`, `initial`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |
| `destinations` | ``null`` \| `string`[] |
| `initial` | `string` |

#### Returns

`boolean`

#### Implementation of

[EShapeDataMapper](../interfaces/EShapeDataMapper.md).[map](../interfaces/EShapeDataMapper.md#map)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L18)

___

### newSources

▸ **newSources**(`source?`): ``null`` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `source?` | ``null`` \| `string` |

#### Returns

``null`` \| `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L80)

___

### split

▸ **split**(`target?`): ``null`` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | ``null`` \| `string` |

#### Returns

``null`` \| `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L91)
