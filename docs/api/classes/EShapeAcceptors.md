[Winter Cardinal UI - v0.179.0](../index.md) / EShapeAcceptors

# Class: EShapeAcceptors

## Table of contents

### Constructors

- [constructor](EShapeAcceptors.md#constructor)

### Properties

- [\_default](EShapeAcceptors.md#_default)
- [\_typeToAcceptor](EShapeAcceptors.md#_typetoacceptor)

### Methods

- [get](EShapeAcceptors.md#get)
- [getDefault](EShapeAcceptors.md#getdefault)
- [newDefault](EShapeAcceptors.md#newdefault)
- [set](EShapeAcceptors.md#set)

## Constructors

### constructor

• **new EShapeAcceptors**()

## Properties

### \_default

▪ `Static` `Protected` `Optional` **\_default**: [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts#L12)

___

### \_typeToAcceptor

▪ `Static` `Protected` `Optional` **\_typeToAcceptor**: `Map`<`number`, [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts#L13)

## Methods

### get

▸ `Static` **get**(`type`): [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |

#### Returns

[`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts#L24)

___

### getDefault

▸ `Static` `Protected` **getDefault**(): [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Returns

[`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts#L28)

___

### newDefault

▸ `Static` `Protected` **newDefault**(): [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Returns

[`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts#L37)

___

### set

▸ `Static` **set**(`type`, `acceptor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |
| `acceptor` | [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts#L15)
