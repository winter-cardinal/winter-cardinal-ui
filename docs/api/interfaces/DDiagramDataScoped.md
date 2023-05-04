[Winter Cardinal UI - v0.310.1](../index.md) / DDiagramDataScoped

# Interface: DDiagramDataScoped

## Implemented by

- [`DDiagramDataPrivateImpl`](../classes/DDiagramDataPrivateImpl.md)

## Table of contents

### Properties

- [ids](DDiagramDataScoped.md#ids)

### Methods

- [each](DDiagramDataScoped.md#each)
- [set](DDiagramDataScoped.md#set)
- [toDirty](DDiagramDataScoped.md#todirty)

## Properties

### ids

• `Readonly` **ids**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-scoped.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-data-scoped.ts#L9)

## Methods

### each

▸ **each**(`iteratee`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`id`: `string`) => `boolean` \| `void` |

#### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-scoped.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-data-scoped.ts#L20)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-scoped.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-data-scoped.ts#L11)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-scoped.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-data-scoped.ts#L19)
