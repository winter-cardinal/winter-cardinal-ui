[Winter Cardinal UI - v0.205.1](../index.md) / EShapeGroupTextAlignViewer

# Class: EShapeGroupTextAlignViewer

## Implements

- [`EShapeTextAlign`](../interfaces/EShapeTextAlign.md)

## Table of contents

### Constructors

- [constructor](EShapeGroupTextAlignViewer.md#constructor)

### Accessors

- [horizontal](EShapeGroupTextAlignViewer.md#horizontal)
- [vertical](EShapeGroupTextAlignViewer.md#vertical)

### Methods

- [copy](EShapeGroupTextAlignViewer.md#copy)
- [deserialize](EShapeGroupTextAlignViewer.md#deserialize)
- [serialize](EShapeGroupTextAlignViewer.md#serialize)
- [set](EShapeGroupTextAlignViewer.md#set)
- [toObject](EShapeGroupTextAlignViewer.md#toobject)

## Constructors

### constructor

• **new EShapeGroupTextAlignViewer**()

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts#L13)

## Accessors

### horizontal

• `get` **horizontal**(): [`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal)

#### Returns

[`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal)

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[horizontal](../interfaces/EShapeTextAlign.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts#L17)

• `set` **horizontal**(`horizontal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal` | [`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal) |

#### Returns

`void`

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[horizontal](../interfaces/EShapeTextAlign.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts#L21)

___

### vertical

• `get` **vertical**(): [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical)

#### Returns

[`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical)

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[vertical](../interfaces/EShapeTextAlign.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts#L25)

• `set` **vertical**(`vertical`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertical` | [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical) |

#### Returns

`void`

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[vertical](../interfaces/EShapeTextAlign.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts#L29)

## Methods

### copy

▸ **copy**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `Partial`<[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)\> |

#### Returns

`void`

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[copy](../interfaces/EShapeTextAlign.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts#L33)

___

### deserialize

▸ **deserialize**(`target`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[deserialize](../interfaces/EShapeTextAlign.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts#L52)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[serialize](../interfaces/EShapeTextAlign.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts#L48)

___

### set

▸ **set**(`horizontal?`, `vertical?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal?` | [`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal) |
| `vertical?` | [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical) |

#### Returns

`void`

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[set](../interfaces/EShapeTextAlign.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts#L37)

___

### toObject

▸ **toObject**(): [`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)

#### Returns

[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[toObject](../interfaces/EShapeTextAlign.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-viewer.ts#L41)
