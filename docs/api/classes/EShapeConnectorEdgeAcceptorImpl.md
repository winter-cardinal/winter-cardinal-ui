[Winter Cardinal UI - v0.227.0](../index.md) / EShapeConnectorEdgeAcceptorImpl

# Class: EShapeConnectorEdgeAcceptorImpl

## Implements

- [`EShapeConnectorEdgeAcceptor`](../interfaces/EShapeConnectorEdgeAcceptor.md)

## Table of contents

### Constructors

- [constructor](EShapeConnectorEdgeAcceptorImpl.md#constructor)

### Properties

- [\_edge](EShapeConnectorEdgeAcceptorImpl.md#_edge)
- [\_parent](EShapeConnectorEdgeAcceptorImpl.md#_parent)
- [\_shape](EShapeConnectorEdgeAcceptorImpl.md#_shape)

### Accessors

- [edge](EShapeConnectorEdgeAcceptorImpl.md#edge)
- [shape](EShapeConnectorEdgeAcceptorImpl.md#shape)

### Methods

- [copy](EShapeConnectorEdgeAcceptorImpl.md#copy)
- [set](EShapeConnectorEdgeAcceptorImpl.md#set)

## Constructors

### constructor

• **new EShapeConnectorEdgeAcceptorImpl**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeConnectorEdgeAcceptorImplParent`](../interfaces/EShapeConnectorEdgeAcceptorImplParent.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts#L18)

## Properties

### \_edge

• `Protected` **\_edge**: ``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts#L16)

___

### \_parent

• `Protected` **\_parent**: [`EShapeConnectorEdgeAcceptorImplParent`](../interfaces/EShapeConnectorEdgeAcceptorImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts#L14)

___

### \_shape

• `Protected` **\_shape**: ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts#L15)

## Accessors

### edge

• `get` **edge**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Implementation of

[EShapeConnectorEdgeAcceptor](../interfaces/EShapeConnectorEdgeAcceptor.md).[edge](../interfaces/EShapeConnectorEdgeAcceptor.md#edge)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts#L32)

• `set` **edge**(`edge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | ``null`` \| `string` |

#### Returns

`void`

#### Implementation of

[EShapeConnectorEdgeAcceptor](../interfaces/EShapeConnectorEdgeAcceptor.md).[edge](../interfaces/EShapeConnectorEdgeAcceptor.md#edge)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts#L36)

___

### shape

• `get` **shape**(): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Implementation of

[EShapeConnectorEdgeAcceptor](../interfaces/EShapeConnectorEdgeAcceptor.md).[shape](../interfaces/EShapeConnectorEdgeAcceptor.md#shape)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts#L24)

• `set` **shape**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | ``null`` \| [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Implementation of

[EShapeConnectorEdgeAcceptor](../interfaces/EShapeConnectorEdgeAcceptor.md).[shape](../interfaces/EShapeConnectorEdgeAcceptor.md#shape)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts#L28)

## Methods

### copy

▸ **copy**(`source`): [`EShapeConnectorEdgeAcceptorImpl`](EShapeConnectorEdgeAcceptorImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapeConnectorEdgeAcceptor`](../interfaces/EShapeConnectorEdgeAcceptor.md) |

#### Returns

[`EShapeConnectorEdgeAcceptorImpl`](EShapeConnectorEdgeAcceptorImpl.md)

#### Implementation of

[EShapeConnectorEdgeAcceptor](../interfaces/EShapeConnectorEdgeAcceptor.md).[copy](../interfaces/EShapeConnectorEdgeAcceptor.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts#L40)

___

### set

▸ **set**(`shape?`, `edge?`): [`EShapeConnectorEdgeAcceptorImpl`](EShapeConnectorEdgeAcceptorImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape?` | ``null`` \| [`EShape`](../interfaces/EShape.md) |
| `edge?` | ``null`` \| `string` |

#### Returns

[`EShapeConnectorEdgeAcceptorImpl`](EShapeConnectorEdgeAcceptorImpl.md)

#### Implementation of

[EShapeConnectorEdgeAcceptor](../interfaces/EShapeConnectorEdgeAcceptor.md).[set](../interfaces/EShapeConnectorEdgeAcceptor.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-acceptor-impl.ts#L44)
