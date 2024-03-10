[Winter Cardinal UI - v0.414.0](../index.md) / EShapeDataScoped

# Interface: EShapeDataScoped

## Implemented by

- [`EShapeDataScopedImpl`](../classes/EShapeDataScopedImpl.md)

## Table of contents

### Properties

- [ids](EShapeDataScoped.md#ids)

### Methods

- [add](EShapeDataScoped.md#add)
- [each](EShapeDataScoped.md#each)
- [set](EShapeDataScoped.md#set)
- [toDirty](EShapeDataScoped.md#todirty)

## Properties

### ids

• `Readonly` **ids**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped.ts:5](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped.ts#L5)

## Methods

### add

▸ **add**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | [`EShapeDataValue`](EShapeDataValue.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped.ts#L7)

___

### each

▸ **each**(`iteratee`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`id`: `string`) => `boolean` \| `void` |

#### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped.ts#L17)

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped.ts#L8)

___

### toDirty

▸ **toDirty**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-scoped.ts#L16)
