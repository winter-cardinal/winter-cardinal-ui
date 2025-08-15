[Winter Cardinal UI - v0.457.0](../index.md) / EShapeAcceptors

# Class: EShapeAcceptors

## Table of contents

### Constructors

- [constructor](EShapeAcceptors.md#constructor)

### Properties

- [\_acceptors](EShapeAcceptors.md#_acceptors)
- [\_defaults](EShapeAcceptors.md#_defaults)

### Methods

- [get](EShapeAcceptors.md#get)
- [initDefault](EShapeAcceptors.md#initdefault)
- [newDefaultEmbedded](EShapeAcceptors.md#newdefaultembedded)
- [newDefaultEmbeddedAcceptorEdge](EShapeAcceptors.md#newdefaultembeddedacceptoredge)
- [newDefaultOther](EShapeAcceptors.md#newdefaultother)
- [set](EShapeAcceptors.md#set)

## Constructors

### constructor

• **new EShapeAcceptors**(): [`EShapeAcceptors`](EShapeAcceptors.md)

#### Returns

[`EShapeAcceptors`](EShapeAcceptors.md)

## Properties

### \_acceptors

▪ `Static` `Protected` `Optional` **\_acceptors**: `Map`\<`number`, [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts#L14)

___

### \_defaults

▪ `Static` `Protected` `Optional` **\_defaults**: `Map`\<``null`` \| `number`, [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts#L13)

## Methods

### get

▸ **get**(`type`): [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |

#### Returns

[`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts#L25)

___

### initDefault

▸ **initDefault**(`result`): [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`EShapeAcceptorImpl`](EShapeAcceptorImpl.md) |

#### Returns

[`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts#L73)

___

### newDefaultEmbedded

▸ **newDefaultEmbedded**(): [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Returns

[`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts#L59)

___

### newDefaultEmbeddedAcceptorEdge

▸ **newDefaultEmbeddedAcceptorEdge**(): [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Returns

[`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts#L63)

___

### newDefaultOther

▸ **newDefaultOther**(): [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Returns

[`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts#L69)

___

### set

▸ **set**(`type`, `acceptor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |
| `acceptor` | [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptors.ts#L16)
