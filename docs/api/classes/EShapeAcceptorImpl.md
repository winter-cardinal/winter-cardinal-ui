[Winter Cardinal UI - v0.205.1](../index.md) / EShapeAcceptorImpl

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L12)

## Properties

### \_edges

• `Protected` **\_edges**: `Map`<`string`, [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L10)

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

#### Implementation of

[EShapeAcceptor](../interfaces/EShapeAcceptor.md).[add](../interfaces/EShapeAcceptor.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L16)

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

#### Implementation of

[EShapeAcceptor](../interfaces/EShapeAcceptor.md).[add](../interfaces/EShapeAcceptor.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L17)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeAcceptor](../interfaces/EShapeAcceptor.md).[clear](../interfaces/EShapeAcceptor.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L92)

___

### contains

▸ **contains**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Implementation of

[EShapeAcceptor](../interfaces/EShapeAcceptor.md).[contains](../interfaces/EShapeAcceptor.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L88)

___

### each

▸ **each**(`iteratee`): [`EShapeAcceptorImpl`](EShapeAcceptorImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`edge`: [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md), `id`: `string`) => `void` |

#### Returns

[`EShapeAcceptorImpl`](EShapeAcceptorImpl.md)

#### Implementation of

[EShapeAcceptor](../interfaces/EShapeAcceptor.md).[each](../interfaces/EShapeAcceptor.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L83)

___

### get

▸ **get**(`id`): ``null`` \| [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)

#### Implementation of

[EShapeAcceptor](../interfaces/EShapeAcceptor.md).[get](../interfaces/EShapeAcceptor.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L79)

___

### remove

▸ **remove**(`id`): ``null`` \| [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)

#### Implementation of

[EShapeAcceptor](../interfaces/EShapeAcceptor.md).[remove](../interfaces/EShapeAcceptor.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L65)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeAcceptor](../interfaces/EShapeAcceptor.md).[size](../interfaces/EShapeAcceptor.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L75)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L42)
