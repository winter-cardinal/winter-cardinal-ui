[Winter Cardinal UI - v0.200.0](../index.md) / EShapeDataScopedImpl

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

• **new EShapeDataScopedImpl**()

## Properties

### \_data

• `Protected` `Optional` **\_data**: `Map`<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:5](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L5)

## Accessors

### ids

• `get` **ids**(): `string`[]

#### Returns

`string`[]

#### Implementation of

[EShapeDataScoped](../interfaces/EShapeDataScoped.md).[ids](../interfaces/EShapeDataScoped.md#ids)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L7)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L19)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L85)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L29)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped-impl.ts#L66)
