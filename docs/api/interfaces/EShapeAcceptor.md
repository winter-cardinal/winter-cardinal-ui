[Winter Cardinal UI - v0.155.0](../index.md) / EShapeAcceptor

# Interface: EShapeAcceptor

## Implemented by

- [`EShapeAcceptorImpl`](../classes/EShapeAcceptorImpl.md)

## Table of contents

### Methods

- [add](EShapeAcceptor.md#add)
- [clear](EShapeAcceptor.md#clear)
- [contains](EShapeAcceptor.md#contains)
- [each](EShapeAcceptor.md#each)
- [get](EShapeAcceptor.md#get)
- [remove](EShapeAcceptor.md#remove)
- [size](EShapeAcceptor.md#size)

## Methods

### add

▸ **add**(`id`, `type`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | [`EShapeAcceptorType`](../index.md#eshapeacceptortype) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L16)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L21)

___

### contains

▸ **contains**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L20)

___

### each

▸ **each**(`iteratee`): [`EShapeAcceptor`](EShapeAcceptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`edge`: [`EShapeAcceptorEdge`](EShapeAcceptorEdge.md), `id`: `string`) => `void` |

#### Returns

[`EShapeAcceptor`](EShapeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L19)

___

### get

▸ **get**(`id`): ``null`` \| [`EShapeAcceptorEdge`](EShapeAcceptorEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`EShapeAcceptorEdge`](EShapeAcceptorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L18)

___

### remove

▸ **remove**(`id`): ``null`` \| [`EShapeAcceptorEdge`](EShapeAcceptorEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`EShapeAcceptorEdge`](EShapeAcceptorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L17)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L15)