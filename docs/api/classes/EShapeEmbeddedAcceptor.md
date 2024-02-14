[Winter Cardinal UI - v0.407.0](../index.md) / EShapeEmbeddedAcceptor

# Class: EShapeEmbeddedAcceptor

## Hierarchy

- [`EShapeAcceptorImpl`](EShapeAcceptorImpl.md)

  ↳ **`EShapeEmbeddedAcceptor`**

## Table of contents

### Constructors

- [constructor](EShapeEmbeddedAcceptor.md#constructor)

### Properties

- [\_edges](EShapeEmbeddedAcceptor.md#_edges)

### Methods

- [add](EShapeEmbeddedAcceptor.md#add)
- [clear](EShapeEmbeddedAcceptor.md#clear)
- [contains](EShapeEmbeddedAcceptor.md#contains)
- [each](EShapeEmbeddedAcceptor.md#each)
- [get](EShapeEmbeddedAcceptor.md#get)
- [getEdges](EShapeEmbeddedAcceptor.md#getedges)
- [remove](EShapeEmbeddedAcceptor.md#remove)
- [size](EShapeEmbeddedAcceptor.md#size)
- [toNormal](EShapeEmbeddedAcceptor.md#tonormal)
- [toSide](EShapeEmbeddedAcceptor.md#toside)

## Constructors

### constructor

• **new EShapeEmbeddedAcceptor**(): [`EShapeEmbeddedAcceptor`](EShapeEmbeddedAcceptor.md)

#### Returns

[`EShapeEmbeddedAcceptor`](EShapeEmbeddedAcceptor.md)

#### Inherited from

[EShapeAcceptorImpl](EShapeAcceptorImpl.md).[constructor](EShapeAcceptorImpl.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L19)

## Properties

### \_edges

• `Protected` **\_edges**: `Map`\<`string`, [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)\>

#### Inherited from

[EShapeAcceptorImpl](EShapeAcceptorImpl.md).[_edges](EShapeAcceptorImpl.md#_edges)

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

#### Inherited from

[EShapeAcceptorImpl](EShapeAcceptorImpl.md).[add](EShapeAcceptorImpl.md#add)

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

#### Inherited from

[EShapeAcceptorImpl](EShapeAcceptorImpl.md).[add](EShapeAcceptorImpl.md#add)

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

#### Inherited from

[EShapeAcceptorImpl](EShapeAcceptorImpl.md).[add](EShapeAcceptorImpl.md#add)

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

#### Inherited from

[EShapeAcceptorImpl](EShapeAcceptorImpl.md).[add](EShapeAcceptorImpl.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L47)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[EShapeAcceptorImpl](EShapeAcceptorImpl.md).[clear](EShapeAcceptorImpl.md#clear)

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

#### Inherited from

[EShapeAcceptorImpl](EShapeAcceptorImpl.md).[contains](EShapeAcceptorImpl.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L156)

___

### each

▸ **each**(`shape`, `iteratee`): [`EShapeEmbeddedAcceptor`](EShapeEmbeddedAcceptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `iteratee` | (`edge`: [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md), `id`: `string`) => `void` |

#### Returns

[`EShapeEmbeddedAcceptor`](EShapeEmbeddedAcceptor.md)

#### Overrides

[EShapeAcceptorImpl](EShapeAcceptorImpl.md).[each](EShapeAcceptorImpl.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-acceptor.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-acceptor.ts#L18)

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

#### Overrides

[EShapeAcceptorImpl](EShapeAcceptorImpl.md).[get](EShapeAcceptorImpl.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-acceptor.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-acceptor.ts#L7)

___

### getEdges

▸ **getEdges**(`shape`): ``null`` \| `Map`\<`string`, [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

``null`` \| `Map`\<`string`, [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-acceptor.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-acceptor.ts#L28)

___

### remove

▸ **remove**(`id`): ``null`` \| [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)

#### Inherited from

[EShapeAcceptorImpl](EShapeAcceptorImpl.md).[remove](EShapeAcceptorImpl.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L133)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeAcceptorImpl](EShapeAcceptorImpl.md).[size](EShapeAcceptorImpl.md#size)

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

#### Inherited from

[EShapeAcceptorImpl](EShapeAcceptorImpl.md).[toNormal](EShapeAcceptorImpl.md#tonormal)

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

#### Inherited from

[EShapeAcceptorImpl](EShapeAcceptorImpl.md).[toSide](EShapeAcceptorImpl.md#toside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-acceptor-impl.ts#L112)
