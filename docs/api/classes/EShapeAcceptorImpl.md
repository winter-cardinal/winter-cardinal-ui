[Winter Cardinal UI - v0.407.0](../index.md) / EShapeAcceptorImpl

# Class: EShapeAcceptorImpl

## Hierarchy

- **`EShapeAcceptorImpl`**

  ↳ [`EShapeEmbeddedAcceptor`](EShapeEmbeddedAcceptor.md)

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
- [toSide](EShapeAcceptorImpl.md#toside)

## Constructors

### constructor

• **new EShapeAcceptorImpl**(): [`EShapeAcceptorImpl`](EShapeAcceptorImpl.md)

#### Returns

[`EShapeAcceptorImpl`](EShapeAcceptorImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L19)

## Properties

### \_edges

• `Protected` **\_edges**: `Map`\<`string`, [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L17)

## Methods

### add

▸ **add**(`id`, `type`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | ``"ALL"`` \| ``"TAIL"`` \| ``"HEAD"`` \| [`EShapeAcceptorEdgeType`](../index.md#eshapeacceptoredgetype-1) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L23)

▸ **add**(`id`, `type`, `x`, `y`, `nx`, `ny`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | ``"ALL"`` \| ``"TAIL"`` \| ``"HEAD"`` \| [`EShapeAcceptorEdgeType`](../index.md#eshapeacceptoredgetype-1) |
| `x` | `number` |
| `y` | `number` |
| `nx` | `number` |
| `ny` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L29)

▸ **add**(`id`, `type`, `x`, `y`, `nx`, `ny`, `sx`, `sy`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | ``"ALL"`` \| ``"TAIL"`` \| ``"HEAD"`` \| [`EShapeAcceptorEdgeType`](../index.md#eshapeacceptoredgetype-1) |
| `x` | `number` |
| `y` | `number` |
| `nx` | `number` |
| `ny` | `number` |
| `sx` | `number` |
| `sy` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L37)

▸ **add**(`id`, `type`, `x`, `y`, `nx`, `ny`, `sx`, `sy`, `side`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | ``"ALL"`` \| ``"TAIL"`` \| ``"HEAD"`` \| [`EShapeAcceptorEdgeType`](../index.md#eshapeacceptoredgetype-1) |
| `x` | `number` |
| `y` | `number` |
| `nx` | `number` |
| `ny` | `number` |
| `sx` | `number` |
| `sy` | `number` |
| `side` | `number` \| ``"NONE"`` \| ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| ``"ALL"`` \| (``"NONE"`` \| ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| ``"ALL"``)[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L47)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L160)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L156)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L151)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L147)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L133)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L143)

___

### toNormal

▸ **toNormal**(`x`, `y`, `nx?`, `ny?`): [`EShapeAcceptorEdgeNormal`](../interfaces/EShapeAcceptorEdgeNormal.md)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L89)

___

### toSide

▸ **toSide**(`side?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `side?` | `number` \| ``"NONE"`` \| ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| ``"ALL"`` \| (``"NONE"`` \| ``"TOP"`` \| ``"RIGHT"`` \| ``"BOTTOM"`` \| ``"LEFT"`` \| ``"ALL"``)[] |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L112)
