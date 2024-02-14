[Winter Cardinal UI - v0.407.0](../index.md) / EShapeDataScopedImpl

# Class: EShapeDataScopedImpl

## Implements

- [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

## Table of contents

### Constructors

- [constructor](EShapeDataScopedImpl.md#constructor)

### Properties

- [\_data](EShapeDataScopedImpl.md#_data)

### Accessors

- [ids](EShapeDataScopedImpl.md#ids)

### Methods

- [add](EShapeDataScopedImpl.md#add)
- [each](EShapeDataScopedImpl.md#each)
- [set](EShapeDataScopedImpl.md#set)
- [toDirty](EShapeDataScopedImpl.md#todirty)

## Constructors

### constructor

• **new EShapeDataScopedImpl**(): [`EShapeDataScopedImpl`](EShapeDataScopedImpl.md)

#### Returns

[`EShapeDataScopedImpl`](EShapeDataScopedImpl.md)

## Properties

### \_data

• `Protected` `Optional` **\_data**: `Map`\<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L6)

## Accessors

### ids

• `get` **ids**(): `string`[]

#### Returns

`string`[]

#### Implementation of

[EShapeDataScoped](../interfaces/EShapeDataScoped.md).[ids](../interfaces/EShapeDataScoped.md#ids)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L8)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L20)

___

### each

▸ **each**(`iteratee`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`id`: `string`) => `boolean` \| `void` |

#### Returns

``null`` \| `string`

#### Implementation of

[EShapeDataScoped](../interfaces/EShapeDataScoped.md).[each](../interfaces/EShapeDataScoped.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L92)

___

### set

▸ **set**(`id`, `value`, `time?`, `state?`, `from?`, `to?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `unknown` |
| `time?` | `number` |
| `state?` | `number` |
| `from?` | ``null`` \| `number` |
| `to?` | ``null`` \| `number` |

#### Returns

`boolean`

#### Implementation of

[EShapeDataScoped](../interfaces/EShapeDataScoped.md).[set](../interfaces/EShapeDataScoped.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L30)

___

### toDirty

▸ **toDirty**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Implementation of

[EShapeDataScoped](../interfaces/EShapeDataScoped.md).[toDirty](../interfaces/EShapeDataScoped.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L73)
