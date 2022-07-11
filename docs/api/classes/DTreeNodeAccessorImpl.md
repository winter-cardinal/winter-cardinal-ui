[Winter Cardinal UI - v0.200.0](../index.md) / DTreeNodeAccessorImpl

# Class: DTreeNodeAccessorImpl<NODE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) |

## Implements

- [`DTreeNodeAccessor`](../interfaces/DTreeNodeAccessor.md)<`NODE`\>

## Table of contents

### Constructors

- [constructor](DTreeNodeAccessorImpl.md#constructor)

### Properties

- [newChildren](DTreeNodeAccessorImpl.md#newchildren)
- [toChildren](DTreeNodeAccessorImpl.md#tochildren)
- [toImage](DTreeNodeAccessorImpl.md#toimage)
- [toLabel](DTreeNodeAccessorImpl.md#tolabel)
- [toTitle](DTreeNodeAccessorImpl.md#totitle)

## Constructors

### constructor

• **new DTreeNodeAccessorImpl**<`NODE`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `NODE` | extends [`DTreeNode`](../interfaces/DTreeNode.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DTreeNodeAccessorOptions`](../interfaces/DTreeNodeAccessorOptions.md)<`NODE`\> |

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor-impl.ts#L54)

## Properties

### newChildren

• **newChildren**: (`item`: `NODE`) => `undefined` \| ``null`` \| `NODE`[]

#### Type declaration

▸ (`item`): `undefined` \| ``null`` \| `NODE`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `NODE` |

##### Returns

`undefined` \| ``null`` \| `NODE`[]

#### Implementation of

[DTreeNodeAccessor](../interfaces/DTreeNodeAccessor.md).[newChildren](../interfaces/DTreeNodeAccessor.md#newchildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor-impl.ts#L52)

___

### toChildren

• **toChildren**: (`item`: `NODE`) => `undefined` \| ``null`` \| `NODE`[]

#### Type declaration

▸ (`item`): `undefined` \| ``null`` \| `NODE`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `NODE` |

##### Returns

`undefined` \| ``null`` \| `NODE`[]

#### Implementation of

[DTreeNodeAccessor](../interfaces/DTreeNodeAccessor.md).[toChildren](../interfaces/DTreeNodeAccessor.md#tochildren)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor-impl.ts#L51)

___

### toImage

• **toImage**: (`item`: `NODE`) => `undefined` \| ``null`` \| `DisplayObject` \| `Texture`

#### Type declaration

▸ (`item`): `undefined` \| ``null`` \| `DisplayObject` \| `Texture`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `NODE` |

##### Returns

`undefined` \| ``null`` \| `DisplayObject` \| `Texture`

#### Implementation of

[DTreeNodeAccessor](../interfaces/DTreeNodeAccessor.md).[toImage](../interfaces/DTreeNodeAccessor.md#toimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor-impl.ts#L50)

___

### toLabel

• **toLabel**: (`item`: `NODE`) => `undefined` \| `string`

#### Type declaration

▸ (`item`): `undefined` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `NODE` |

##### Returns

`undefined` \| `string`

#### Implementation of

[DTreeNodeAccessor](../interfaces/DTreeNodeAccessor.md).[toLabel](../interfaces/DTreeNodeAccessor.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor-impl.ts#L48)

___

### toTitle

• **toTitle**: (`item`: `NODE`) => `undefined` \| `string`

#### Type declaration

▸ (`item`): `undefined` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `NODE` |

##### Returns

`undefined` \| `string`

#### Implementation of

[DTreeNodeAccessor](../interfaces/DTreeNodeAccessor.md).[toTitle](../interfaces/DTreeNodeAccessor.md#totitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-tree-node-accessor-impl.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-tree-node-accessor-impl.ts#L49)
