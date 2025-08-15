[Winter Cardinal UI - v0.457.0](../index.md) / EShapeAcceptor

# Interface: EShapeAcceptor

## Implemented by

- [`EShapeAcceptorImpl`](../classes/EShapeAcceptorImpl.md)

## Table of contents

### Methods

- [each](EShapeAcceptor.md#each)
- [get](EShapeAcceptor.md#get)

## Methods

### each

▸ **each**(`shape`, `iteratee`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `iteratee` | (`edge`: [`EShapeAcceptorEdge`](EShapeAcceptorEdge.md), `id`: `string`) => `void` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L11)

___

### get

▸ **get**(`shape`, `id`): ``null`` \| [`EShapeAcceptorEdge`](EShapeAcceptorEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `id` | `string` |

#### Returns

``null`` \| [`EShapeAcceptorEdge`](EShapeAcceptorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L10)
