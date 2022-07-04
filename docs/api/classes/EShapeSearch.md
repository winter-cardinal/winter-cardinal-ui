[Winter Cardinal UI - v0.194.0](../index.md) / EShapeSearch

# Class: EShapeSearch

[EShape](../interfaces/EShape.md) search utility.

## Table of contents

### Constructors

- [constructor](EShapeSearch.md#constructor)

### Methods

- [COMPARATOR\_INDEX](EShapeSearch.md#comparator_index)
- [findChild](EShapeSearch.md#findchild)
- [findChildById](EShapeSearch.md#findchildbyid)
- [findChildByType](EShapeSearch.md#findchildbytype)
- [findChildren](EShapeSearch.md#findchildren)
- [findChildrenByType](EShapeSearch.md#findchildrenbytype)
- [isParent](EShapeSearch.md#isparent)
- [toDepth](EShapeSearch.md#todepth)
- [toIndices](EShapeSearch.md#toindices)
- [toOfParent](EShapeSearch.md#toofparent)
- [toSelected](EShapeSearch.md#toselected)
- [toSharedParent](EShapeSearch.md#tosharedparent)

## Constructors

### constructor

• **new EShapeSearch**()

## Methods

### COMPARATOR\_INDEX

▸ `Static` **COMPARATOR_INDEX**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`EShape`](../interfaces/EShape.md) |
| `b` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-search.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-search.ts#L15)

___

### findChild

▸ `Static` **findChild**(`shape`, `matcher`, `recursively?`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | `Object` |
| `shape.children` | [`EShape`](../interfaces/EShape.md)[] |
| `matcher` | (`shape`: [`EShape`](../interfaces/EShape.md)) => `boolean` |
| `recursively?` | `boolean` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-search.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-search.ts#L175)

___

### findChildById

▸ `Static` **findChildById**(`shape`, `id`, `recursively?`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | `Object` |
| `shape.children` | [`EShape`](../interfaces/EShape.md)[] |
| `id` | `string` |
| `recursively?` | `boolean` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-search.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-search.ts#L133)

___

### findChildByType

▸ `Static` **findChildByType**(`shape`, `type`, `recursively?`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | `Object` |
| `shape.children` | [`EShape`](../interfaces/EShape.md)[] |
| `type` | `number` |
| `recursively?` | `boolean` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-search.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-search.ts#L154)

___

### findChildren

▸ `Static` **findChildren**(`shape`, `matcher`, `recursively?`, `result?`): [`EShape`](../interfaces/EShape.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | `Object` |
| `shape.children` | [`EShape`](../interfaces/EShape.md)[] |
| `matcher` | (`shape`: [`EShape`](../interfaces/EShape.md)) => `boolean` |
| `recursively?` | `boolean` |
| `result?` | [`EShape`](../interfaces/EShape.md)[] |

#### Returns

[`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-search.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-search.ts#L216)

___

### findChildrenByType

▸ `Static` **findChildrenByType**(`shape`, `type`, `recursively?`, `result?`): [`EShape`](../interfaces/EShape.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | `Object` |
| `shape.children` | [`EShape`](../interfaces/EShape.md)[] |
| `type` | `number` |
| `recursively?` | `boolean` |
| `result?` | [`EShape`](../interfaces/EShape.md)[] |

#### Returns

[`EShape`](../interfaces/EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-search.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-search.ts#L196)

___

### isParent

▸ `Static` **isParent**(`shape`, `target`): `boolean`

Returns true if the given target is on the path to the given shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `target` | ``null`` \| [`EShape`](../interfaces/EShape.md) | a check target |

#### Returns

`boolean`

true if the given target is on the path to the given shape

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-search.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-search.ts#L104)

___

### toDepth

▸ `Static` **toDepth**(`shape`): `number`

Returns a depth of the given shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |

#### Returns

`number`

a depth

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-search.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-search.ts#L39)

___

### toIndices

▸ `Static` **toIndices**(`shapes`): `number`[]

Returns indices of the given shapes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] | shapes |

#### Returns

`number`[]

indices

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-search.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-search.ts#L25)

___

### toOfParent

▸ `Static` **toOfParent**(`shape`, `parent`): [`EShape`](../interfaces/EShape.md)

Returns a shape on the path to the given shape whose parent is equals to the given parent.
If there is no such shape, returns a root shape on the path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `parent` | [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md) | a parent |

#### Returns

[`EShape`](../interfaces/EShape.md)

a found shape

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-search.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-search.ts#L88)

___

### toSelected

▸ `Static` **toSelected**(`shape`): ``null`` \| [`EShape`](../interfaces/EShape.md)

Returns a selected shape on the path to the given shape.
If there are more than one selected shapes, returns a deepest selected shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

a found selected shape or null

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-search.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-search.ts#L122)

___

### toSharedParent

▸ `Static` **toSharedParent**(`shapeA`, `shapeB`): [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

Returns a deepest shape on the path to the given shapes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shapeA` | [`EShape`](../interfaces/EShape.md) | a shape |
| `shapeB` | [`EShape`](../interfaces/EShape.md) | a shape |

#### Returns

[`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

a found shape

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-search.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-search.ts#L56)
