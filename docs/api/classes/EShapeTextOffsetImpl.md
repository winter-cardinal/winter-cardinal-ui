[Winter Cardinal UI - v0.457.0](../index.md) / EShapeTextOffsetImpl

# Class: EShapeTextOffsetImpl

## Implements

- [`EShapeTextOffset`](../interfaces/EShapeTextOffset.md)

## Table of contents

### Constructors

- [constructor](EShapeTextOffsetImpl.md#constructor)

### Properties

- [\_horizontal](EShapeTextOffsetImpl.md#_horizontal)
- [\_parent](EShapeTextOffsetImpl.md#_parent)
- [\_vertical](EShapeTextOffsetImpl.md#_vertical)

### Accessors

- [horizontal](EShapeTextOffsetImpl.md#horizontal)
- [vertical](EShapeTextOffsetImpl.md#vertical)

### Methods

- [copy](EShapeTextOffsetImpl.md#copy)
- [deserialize](EShapeTextOffsetImpl.md#deserialize)
- [serialize](EShapeTextOffsetImpl.md#serialize)
- [set](EShapeTextOffsetImpl.md#set)
- [toObject](EShapeTextOffsetImpl.md#toobject)

## Constructors

### constructor

• **new EShapeTextOffsetImpl**(`parent`, `horizontal`, `vertical`): [`EShapeTextOffsetImpl`](EShapeTextOffsetImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeTextOffsetImplParent`](../interfaces/EShapeTextOffsetImplParent.md) |
| `horizontal` | `number` |
| `vertical` | `number` |

#### Returns

[`EShapeTextOffsetImpl`](EShapeTextOffsetImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts#L16)

## Properties

### \_horizontal

• `Protected` **\_horizontal**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts#L13)

___

### \_parent

• `Protected` **\_parent**: [`EShapeTextOffsetImplParent`](../interfaces/EShapeTextOffsetImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts#L12)

___

### \_vertical

• `Protected` **\_vertical**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts#L14)

## Accessors

### horizontal

• `get` **horizontal**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[horizontal](../interfaces/EShapeTextOffset.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts#L22)

• `set` **horizontal**(`horizontal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[horizontal](../interfaces/EShapeTextOffset.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts#L26)

___

### vertical

• `get` **vertical**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[vertical](../interfaces/EShapeTextOffset.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts#L33)

• `set` **vertical**(`vertical`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertical` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[vertical](../interfaces/EShapeTextOffset.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts#L37)

## Methods

### copy

▸ **copy**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `Partial`\<[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)\> |

#### Returns

`void`

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[copy](../interfaces/EShapeTextOffset.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts#L44)

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

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[deserialize](../interfaces/EShapeTextOffset.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts#L79)

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

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[serialize](../interfaces/EShapeTextOffset.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts#L75)

___

### set

▸ **set**(`horizontal?`, `vertical?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal?` | `number` |
| `vertical?` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[set](../interfaces/EShapeTextOffset.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts#L50)

___

### toObject

▸ **toObject**(): [`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)

#### Returns

[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)

#### Implementation of

[EShapeTextOffset](../interfaces/EShapeTextOffset.md).[toObject](../interfaces/EShapeTextOffset.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-offset-impl.ts#L68)
