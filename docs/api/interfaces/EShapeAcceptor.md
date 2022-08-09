[Winter Cardinal UI - v0.205.1](../index.md) / EShapeAcceptor

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L22)

▸ **add**(`id`, `type`, `x`, `y`, `nx`, `ny`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | [`EShapeAcceptorType`](../index.md#eshapeacceptortype) |
| `x` | `number` |
| `y` | `number` |
| `nx` | `number` |
| `ny` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L23)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L35)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L34)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L33)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L32)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L31)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor.ts#L21)
