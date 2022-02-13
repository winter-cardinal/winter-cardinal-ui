[Winter Cardinal UI - v0.155.0](../index.md) / DTreeNodeAccessorOptions

# Interface: DTreeNodeAccessorOptions<NODE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](DTreeNode.md) |

## Hierarchy

- **`DTreeNodeAccessorOptions`**

  ↳ [`DTreeDataOptions`](DTreeDataOptions.md)

## Table of contents

### Methods

- [newChildren](DTreeNodeAccessorOptions.md#newchildren)
- [toChildren](DTreeNodeAccessorOptions.md#tochildren)
- [toImage](DTreeNodeAccessorOptions.md#toimage)
- [toLabel](DTreeNodeAccessorOptions.md#tolabel)
- [toTitle](DTreeNodeAccessorOptions.md#totitle)

## Methods

### newChildren

▸ `Optional` **newChildren**(`node`): `undefined` \| ``null`` \| `NODE`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`undefined` \| ``null`` \| `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L14)

___

### toChildren

▸ `Optional` **toChildren**(`node`): `undefined` \| ``null`` \| `NODE`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`undefined` \| ``null`` \| `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L13)

___

### toImage

▸ `Optional` **toImage**(`node`): `undefined` \| ``null`` \| `DisplayObject` \| `Texture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`undefined` \| ``null`` \| `DisplayObject` \| `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L12)

___

### toLabel

▸ `Optional` **toLabel**(`node`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`undefined` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L10)

___

### toTitle

▸ `Optional` **toTitle**(`node`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

#### Returns

`undefined` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L11)
