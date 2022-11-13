[Winter Cardinal UI - v0.227.0](../index.md) / DTreeDataOptions

# Interface: DTreeDataOptions<NODE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](DTreeNode.md) |

## Hierarchy

- [`DTreeNodeAccessorOptions`](DTreeNodeAccessorOptions.md)<`NODE`\>

  ↳ **`DTreeDataOptions`**

## Table of contents

### Properties

- [newChildren](DTreeDataOptions.md#newchildren)
- [nodes](DTreeDataOptions.md#nodes)
- [reverse](DTreeDataOptions.md#reverse)
- [selection](DTreeDataOptions.md#selection)
- [toChildren](DTreeDataOptions.md#tochildren)
- [toImage](DTreeDataOptions.md#toimage)
- [toLabel](DTreeDataOptions.md#tolabel)
- [toTitle](DTreeDataOptions.md#totitle)

## Properties

### newChildren

• `Optional` **newChildren**: (`node`: `NODE`) => `undefined` \| ``null`` \| `NODE`[]

#### Type declaration

▸ (`node`): `undefined` \| ``null`` \| `NODE`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

##### Returns

`undefined` \| ``null`` \| `NODE`[]

#### Inherited from

[DTreeNodeAccessorOptions](DTreeNodeAccessorOptions.md).[newChildren](DTreeNodeAccessorOptions.md#newchildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L14)

___

### nodes

• `Optional` **nodes**: `NODE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L13)

___

### reverse

• `Optional` **reverse**: `boolean`

True to list up nodes in the given node array in the reverse order.

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L23)

___

### selection

• `Optional` **selection**: [`DTreeDataSelectionOptions`](DTreeDataSelectionOptions.md)<`NODE`, `any`\>

Selection options.

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-data.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-data.ts#L18)

___

### toChildren

• `Optional` **toChildren**: (`node`: `NODE`) => `undefined` \| ``null`` \| `NODE`[]

#### Type declaration

▸ (`node`): `undefined` \| ``null`` \| `NODE`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

##### Returns

`undefined` \| ``null`` \| `NODE`[]

#### Inherited from

[DTreeNodeAccessorOptions](DTreeNodeAccessorOptions.md).[toChildren](DTreeNodeAccessorOptions.md#tochildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L13)

___

### toImage

• `Optional` **toImage**: (`node`: `NODE`) => `undefined` \| ``null`` \| `DisplayObject` \| `Texture`

#### Type declaration

▸ (`node`): `undefined` \| ``null`` \| `DisplayObject` \| `Texture`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

##### Returns

`undefined` \| ``null`` \| `DisplayObject` \| `Texture`

#### Inherited from

[DTreeNodeAccessorOptions](DTreeNodeAccessorOptions.md).[toImage](DTreeNodeAccessorOptions.md#toimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L12)

___

### toLabel

• `Optional` **toLabel**: (`node`: `NODE`) => `undefined` \| `string`

#### Type declaration

▸ (`node`): `undefined` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

##### Returns

`undefined` \| `string`

#### Inherited from

[DTreeNodeAccessorOptions](DTreeNodeAccessorOptions.md).[toLabel](DTreeNodeAccessorOptions.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L10)

___

### toTitle

• `Optional` **toTitle**: (`node`: `NODE`) => `undefined` \| `string`

#### Type declaration

▸ (`node`): `undefined` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NODE` |

##### Returns

`undefined` \| `string`

#### Inherited from

[DTreeNodeAccessorOptions](DTreeNodeAccessorOptions.md).[toTitle](DTreeNodeAccessorOptions.md#totitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor.ts#L11)
