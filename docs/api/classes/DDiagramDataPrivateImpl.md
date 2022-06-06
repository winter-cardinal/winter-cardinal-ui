[Winter Cardinal UI - v0.179.0](../index.md) / DDiagramDataPrivateImpl

# Class: DDiagramDataPrivateImpl

## Implements

- [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

## Table of contents

### Constructors

- [constructor](DDiagramDataPrivateImpl.md#constructor)

### Properties

- [\_diagram](DDiagramDataPrivateImpl.md#_diagram)

### Methods

- [set](DDiagramDataPrivateImpl.md#set)

## Constructors

### constructor

• **new DDiagramDataPrivateImpl**(`diagram`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `diagram` | [`DDiagramDataDiagram`](../interfaces/DDiagramDataDiagram.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L12)

## Properties

### \_diagram

• `Protected` **\_diagram**: [`DDiagramDataDiagram`](../interfaces/DDiagramDataDiagram.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L10)

## Methods

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

[src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-private-impl.ts#L16)
