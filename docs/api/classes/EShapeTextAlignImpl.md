[Winter Cardinal UI - v0.164.0](../index.md) / EShapeTextAlignImpl

# Class: EShapeTextAlignImpl

## Implements

- [`EShapeTextAlign`](../interfaces/EShapeTextAlign.md)

## Table of contents

### Constructors

- [constructor](EShapeTextAlignImpl.md#constructor)

### Properties

- [\_horizontal](EShapeTextAlignImpl.md#_horizontal)
- [\_parent](EShapeTextAlignImpl.md#_parent)
- [\_vertical](EShapeTextAlignImpl.md#_vertical)

### Accessors

- [horizontal](EShapeTextAlignImpl.md#horizontal)
- [vertical](EShapeTextAlignImpl.md#vertical)

### Methods

- [copy](EShapeTextAlignImpl.md#copy)
- [deserialize](EShapeTextAlignImpl.md#deserialize)
- [serialize](EShapeTextAlignImpl.md#serialize)
- [set](EShapeTextAlignImpl.md#set)
- [toObject](EShapeTextAlignImpl.md#toobject)

## Constructors

### constructor

• **new EShapeTextAlignImpl**(`parent`, `horizontal`, `vertical`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeTextAlignImplParent`](../interfaces/EShapeTextAlignImplParent.md) |
| `horizontal` | [`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal) |
| `vertical` | [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical) |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts#L18)

## Properties

### \_horizontal

• `Protected` **\_horizontal**: [`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts#L15)

___

### \_parent

• `Protected` **\_parent**: [`EShapeTextAlignImplParent`](../interfaces/EShapeTextAlignImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts#L14)

___

### \_vertical

• `Protected` **\_vertical**: [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts#L16)

## Accessors

### horizontal

• `get` **horizontal**(): [`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal)

#### Returns

[`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal)

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[horizontal](../interfaces/EShapeTextAlign.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts#L28)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts#L32)

___

### vertical

• `get` **vertical**(): [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical)

#### Returns

[`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical)

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[vertical](../interfaces/EShapeTextAlign.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts#L39)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts#L43)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts#L50)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts#L85)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts#L81)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts#L56)

___

### toObject

▸ **toObject**(): [`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)

#### Returns

[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[toObject](../interfaces/EShapeTextAlign.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-align-impl.ts#L74)
