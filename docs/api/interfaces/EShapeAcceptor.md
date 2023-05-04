[Winter Cardinal UI - v0.310.1](../index.md) / EShapeAcceptor

# Interface: EShapeAcceptor

## Implemented by

- [`EShapeAcceptorImpl`](../classes/EShapeAcceptorImpl.md)

## Table of contents

### Methods

- [each](EShapeAcceptor.md#each)
- [get](EShapeAcceptor.md#get)

## Methods

### each

▸ **each**(`shape`, `iteratee`): [`EShapeAcceptor`](EShapeAcceptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |
| `iteratee` | (`edge`: [`EShapeAcceptorEdge`](EShapeAcceptorEdge.md), `id`: `string`) => `void` |

#### Returns

[`EShapeAcceptor`](EShapeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L23)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L22)
