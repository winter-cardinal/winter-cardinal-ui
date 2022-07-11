[Winter Cardinal UI - v0.200.0](../index.md) / DDiagramDataPrivateImpl

# Class: DDiagramDataPrivateImpl

## Implements

- [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

## Table of contents

### Constructors

- [constructor](DDiagramDataPrivateImpl.md#constructor)

### Properties

- [\_diagram](DDiagramDataPrivateImpl.md#_diagram)

### Accessors

- [ids](DDiagramDataPrivateImpl.md#ids)

### Methods

- [each](DDiagramDataPrivateImpl.md#each)
- [set](DDiagramDataPrivateImpl.md#set)
- [toDirty](DDiagramDataPrivateImpl.md#todirty)

## Constructors

### constructor

• **new DDiagramDataPrivateImpl**(`diagram`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `diagram` | [`DDiagramDataDiagram`](../interfaces/DDiagramDataDiagram.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L12)

## Properties

### \_diagram

• `Protected` **\_diagram**: [`DDiagramDataDiagram`](../interfaces/DDiagramDataDiagram.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L10)

## Accessors

### ids

• `get` **ids**(): `string`[]

#### Returns

`string`[]

#### Implementation of

[DDiagramDataScoped](../interfaces/DDiagramDataScoped.md).[ids](../interfaces/DDiagramDataScoped.md#ids)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L16)

## Methods

### each

▸ **each**(`iteratee`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`id`: `string`) => `boolean` \| `void` |

#### Returns

``null`` \| `string`

#### Implementation of

[DDiagramDataScoped](../interfaces/DDiagramDataScoped.md).[each](../interfaces/DDiagramDataScoped.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L46)

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

[DDiagramDataScoped](../interfaces/DDiagramDataScoped.md).[set](../interfaces/DDiagramDataScoped.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L24)

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

[DDiagramDataScoped](../interfaces/DDiagramDataScoped.md).[toDirty](../interfaces/DDiagramDataScoped.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L38)
