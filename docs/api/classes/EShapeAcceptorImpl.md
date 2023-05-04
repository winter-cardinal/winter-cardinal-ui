[Winter Cardinal UI - v0.310.1](../index.md) / EShapeAcceptorImpl

# Class: EShapeAcceptorImpl

## Implements

- [`EShapeAcceptor`](../interfaces/EShapeAcceptor.md)

## Table of contents

### Constructors

- [constructor](EShapeAcceptorImpl.md#constructor)

### Properties

- [\_edges](EShapeAcceptorImpl.md#_edges)

### Methods

- [add](EShapeAcceptorImpl.md#add)
- [clear](EShapeAcceptorImpl.md#clear)
- [contains](EShapeAcceptorImpl.md#contains)
- [each](EShapeAcceptorImpl.md#each)
- [get](EShapeAcceptorImpl.md#get)
- [remove](EShapeAcceptorImpl.md#remove)
- [size](EShapeAcceptorImpl.md#size)
- [toNormal](EShapeAcceptorImpl.md#tonormal)

## Constructors

### constructor

• **new EShapeAcceptorImpl**()

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L13)

## Properties

### \_edges

• `Protected` **\_edges**: `Map`<`string`, [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L11)

## Methods

### add

▸ **add**(`id`, `type`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | [`EShapeAcceptorType`](../index.md#eshapeacceptortype-1) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L17)

▸ **add**(`id`, `type`, `x`, `y`, `nx`, `ny`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | [`EShapeAcceptorType`](../index.md#eshapeacceptortype-1) |
| `x` | `number` |
| `y` | `number` |
| `nx` | `number` |
| `ny` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L18)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L93)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L89)

___

### each

▸ **each**(`shape`, `iteratee`): [`EShapeAcceptorImpl`](EShapeAcceptorImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `iteratee` | (`edge`: [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md), `id`: `string`) => `void` |

#### Returns

[`EShapeAcceptorImpl`](EShapeAcceptorImpl.md)

#### Implementation of

[EShapeAcceptor](../interfaces/EShapeAcceptor.md).[each](../interfaces/EShapeAcceptor.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L84)

___

### get

▸ **get**(`shape`, `id`): ``null`` \| [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `id` | `string` |

#### Returns

``null`` \| [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)

#### Implementation of

[EShapeAcceptor](../interfaces/EShapeAcceptor.md).[get](../interfaces/EShapeAcceptor.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L80)

___

### remove

▸ **remove**(`id`): ``null`` \| [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L66)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L76)

___

### toNormal

▸ `Protected` **toNormal**(`x`, `y`, `nx?`, `ny?`): [`EShapeAcceptorEdgeNormal`](../interfaces/EShapeAcceptorEdgeNormal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `nx?` | `number` |
| `ny?` | `number` |

#### Returns

[`EShapeAcceptorEdgeNormal`](../interfaces/EShapeAcceptorEdgeNormal.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L43)
