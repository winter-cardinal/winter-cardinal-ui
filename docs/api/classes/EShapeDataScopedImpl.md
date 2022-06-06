[Winter Cardinal UI - v0.179.0](../index.md) / EShapeDataScopedImpl

# Class: EShapeDataScopedImpl

## Implements

- [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

## Table of contents

### Constructors

- [constructor](EShapeDataScopedImpl.md#constructor)

### Properties

- [\_data](EShapeDataScopedImpl.md#_data)

### Methods

- [add](EShapeDataScopedImpl.md#add)
- [set](EShapeDataScopedImpl.md#set)

## Constructors

### constructor

• **new EShapeDataScopedImpl**()

## Properties

### \_data

• `Protected` `Optional` **\_data**: `Map`<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:5](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L5)

## Methods

### add

▸ **add**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |

#### Returns

`void`

#### Implementation of

[EShapeDataScoped](../interfaces/EShapeDataScoped.md).[add](../interfaces/EShapeDataScoped.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L7)

___

### set

▸ **set**(`id`, `value`, `time?`, `from?`, `to?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `unknown` |
| `time?` | `number` |
| `from?` | ``null`` \| `number` |
| `to?` | ``null`` \| `number` |

#### Returns

`boolean`

#### Implementation of

[EShapeDataScoped](../interfaces/EShapeDataScoped.md).[set](../interfaces/EShapeDataScoped.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L17)
