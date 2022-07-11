[Winter Cardinal UI - v0.200.0](../index.md) / EShapeDataValueExtensions

# Class: EShapeDataValueExtensions

## Table of contents

### Constructors

- [constructor](EShapeDataValueExtensions.md#constructor)

### Properties

- [\_data](EShapeDataValueExtensions.md#_data)
- [\_typeToDatum](EShapeDataValueExtensions.md#_typetodatum)

### Methods

- [add](EShapeDataValueExtensions.md#add)
- [each](EShapeDataValueExtensions.md#each)
- [get](EShapeDataValueExtensions.md#get)

## Constructors

### constructor

• **new EShapeDataValueExtensions**()

## Properties

### \_data

▪ `Static` `Protected` `Optional` **\_data**: [`EShapeDataValueExtension`](../interfaces/EShapeDataValueExtension.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts#L9)

___

### \_typeToDatum

▪ `Static` `Protected` `Optional` **\_typeToDatum**: `Map`<`number`, [`EShapeDataValueExtension`](../interfaces/EShapeDataValueExtension.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts#L10)

## Methods

### add

▸ `Static` **add**(`extension`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extension` | [`EShapeDataValueExtension`](../interfaces/EShapeDataValueExtension.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts#L12)

___

### each

▸ `Static` **each**(`iteratee`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`extension`: [`EShapeDataValueExtension`](../interfaces/EShapeDataValueExtension.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts#L27)

___

### get

▸ `Static` **get**(`type`): `undefined` \| [`EShapeDataValueExtension`](../interfaces/EShapeDataValueExtension.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |

#### Returns

`undefined` \| [`EShapeDataValueExtension`](../interfaces/EShapeDataValueExtension.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts#L20)
