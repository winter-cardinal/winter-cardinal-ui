[Winter Cardinal UI - v0.155.0](../index.md) / EShapeAcceptorImpl

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

## Constructors

### constructor

• **new EShapeAcceptorImpl**()

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L12)

## Properties

### \_edges

• `Protected` **\_edges**: `Map`<`string`, [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L10)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L16)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeAcceptor](../interfaces/EShapeAcceptor.md).[clear](../interfaces/EShapeAcceptor.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L52)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L48)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L43)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L39)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L25)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeAcceptor](../interfaces/EShapeAcceptor.md).[size](../interfaces/EShapeAcceptor.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L35)
