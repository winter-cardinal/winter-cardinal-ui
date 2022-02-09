[Winter Cardinal UI - v0.154.0](../index.md) / DTreeNodeAccessor

# Interface: DTreeNodeAccessor<NODE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](DTreeNode.md) |

## Implemented by

- [`DTreeNodeAccessorImpl`](../classes/DTreeNodeAccessorImpl.md)

## Table of contents

### Methods

- [newChildren](DTreeNodeAccessor.md#newchildren)
- [toChildren](DTreeNodeAccessor.md#tochildren)
- [toImage](DTreeNodeAccessor.md#toimage)
- [toLabel](DTreeNodeAccessor.md#tolabel)
- [toTitle](DTreeNodeAccessor.md#totitle)

## Methods

### newChildren

▸ **newChildren**(`node`): `undefined` \| ``null`` \| `NODE`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`undefined` \| ``null`` \| `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L22)

___

### toChildren

▸ **toChildren**(`node`): `undefined` \| ``null`` \| `NODE`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`undefined` \| ``null`` \| `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L21)

___

### toImage

▸ **toImage**(`node`): `undefined` \| ``null`` \| `Texture` \| `DisplayObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`undefined` \| ``null`` \| `Texture` \| `DisplayObject`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L20)

___

### toLabel

▸ **toLabel**(`node`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`undefined` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L18)

___

### toTitle

▸ **toTitle**(`node`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`undefined` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L19)
