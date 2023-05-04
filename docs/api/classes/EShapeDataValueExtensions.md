[Winter Cardinal UI - v0.310.1](../index.md) / EShapeDataValueExtensions

# Class: EShapeDataValueExtensions

## Table of contents

### Constructors

- [constructor](EShapeDataValueExtensions.md#constructor)

### Properties

- [\_data](EShapeDataValueExtensions.md#_data)
- [\_idToDatum](EShapeDataValueExtensions.md#_idtodatum)
- [\_typeToDatum](EShapeDataValueExtensions.md#_typetodatum)

### Methods

- [add](EShapeDataValueExtensions.md#add)
- [each](EShapeDataValueExtensions.md#each)
- [get](EShapeDataValueExtensions.md#get)
- [getById](EShapeDataValueExtensions.md#getbyid)

## Constructors

### constructor

• **new EShapeDataValueExtensions**()

## Properties

### \_data

▪ `Static` `Protected` `Optional` **\_data**: [`EShapeDataValueExtension`](../interfaces/EShapeDataValueExtension.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts#L9)

___

### \_idToDatum

▪ `Static` `Protected` `Optional` **\_idToDatum**: `Map`<`string`, [`EShapeDataValueExtension`](../interfaces/EShapeDataValueExtension.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts#L11)

___

### \_typeToDatum

▪ `Static` `Protected` `Optional` **\_typeToDatum**: `Map`<`number`, [`EShapeDataValueExtension`](../interfaces/EShapeDataValueExtension.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts#L10)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts#L13)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts#L39)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts#L25)

___

### getById

▸ `Static` **getById**(`id`): `undefined` \| [`EShapeDataValueExtension`](../interfaces/EShapeDataValueExtension.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`EShapeDataValueExtension`](../interfaces/EShapeDataValueExtension.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-extensions.ts#L32)
