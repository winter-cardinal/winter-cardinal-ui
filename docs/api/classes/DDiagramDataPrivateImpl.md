[Winter Cardinal UI - v0.442.0](../index.md) / DDiagramDataPrivateImpl

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

• **new DDiagramDataPrivateImpl**(`diagram`): [`DDiagramDataPrivateImpl`](DDiagramDataPrivateImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `diagram` | [`DDiagramDataDiagram`](../interfaces/DDiagramDataDiagram.md) |

#### Returns

[`DDiagramDataPrivateImpl`](DDiagramDataPrivateImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L13)

## Properties

### \_diagram

• `Protected` **\_diagram**: [`DDiagramDataDiagram`](../interfaces/DDiagramDataDiagram.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L11)

## Accessors

### ids

• `get` **ids**(): `string`[]

#### Returns

`string`[]

#### Implementation of

[DDiagramDataScoped](../interfaces/DDiagramDataScoped.md).[ids](../interfaces/DDiagramDataScoped.md#ids)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L17)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L48)

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

[DDiagramDataScoped](../interfaces/DDiagramDataScoped.md).[set](../interfaces/DDiagramDataScoped.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L25)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L40)
