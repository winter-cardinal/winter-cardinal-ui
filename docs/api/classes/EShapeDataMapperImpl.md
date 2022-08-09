[Winter Cardinal UI - v0.205.1](../index.md) / EShapeDataMapperImpl

# Class: EShapeDataMapperImpl

## Implements

- [`EShapeDataMapper`](../interfaces/EShapeDataMapper.md)

## Table of contents

### Constructors

- [constructor](EShapeDataMapperImpl.md#constructor)

### Properties

- [\_sourceIndices](EShapeDataMapperImpl.md#_sourceindices)
- [\_sources](EShapeDataMapperImpl.md#_sources)
- [\_targetIndices](EShapeDataMapperImpl.md#_targetindices)
- [\_targetIndicesLength](EShapeDataMapperImpl.md#_targetindiceslength)
- [SEPARATOR](EShapeDataMapperImpl.md#separator)
- [WILDCARD](EShapeDataMapperImpl.md#wildcard)

### Methods

- [calcTargetIndices](EShapeDataMapperImpl.md#calctargetindices)
- [map](EShapeDataMapperImpl.md#map)
- [newSourceIndices](EShapeDataMapperImpl.md#newsourceindices)
- [newSources](EShapeDataMapperImpl.md#newsources)
- [newValueId](EShapeDataMapperImpl.md#newvalueid)
- [split](EShapeDataMapperImpl.md#split)

## Constructors

### constructor

• **new EShapeDataMapperImpl**(`source?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source?` | ``null`` \| `string` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L18)

## Properties

### \_sourceIndices

• `Protected` **\_sourceIndices**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L14)

___

### \_sources

• `Protected` **\_sources**: ``null`` \| `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L13)

___

### \_targetIndices

• `Protected` **\_targetIndices**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L15)

___

### \_targetIndicesLength

• `Protected` **\_targetIndicesLength**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L16)

___

### SEPARATOR

▪ `Static` `Protected` **SEPARATOR**: `string` = `"."`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L10)

___

### WILDCARD

▪ `Static` `Protected` **WILDCARD**: `string` = `"*"`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L11)

## Methods

### calcTargetIndices

▸ `Protected` **calcTargetIndices**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L106)

___

### map

▸ **map**(`value`, `destinations`, `initial`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |
| `destinations` | ``null`` \| `string`[] |
| `initial` | `string` |

#### Returns

`void`

#### Implementation of

[EShapeDataMapper](../interfaces/EShapeDataMapper.md).[map](../interfaces/EShapeDataMapper.md#map)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L26)

___

### newSourceIndices

▸ `Protected` **newSourceIndices**(`sources`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | ``null`` \| `string`[] |

#### Returns

`number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L122)

___

### newSources

▸ `Protected` **newSources**(`source?`): ``null`` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `source?` | ``null`` \| `string` |

#### Returns

``null`` \| `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L67)

___

### newValueId

▸ `Protected` **newValueId**(`destinations`, `target`, `targetIndices`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinations` | `string`[] |
| `target` | `string` |
| `targetIndices` | `number`[] |

#### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L74)

___

### split

▸ `Static` **split**(`target?`): ``null`` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | ``null`` \| `string` |

#### Returns

``null`` \| `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-mapper-impl.ts#L136)
