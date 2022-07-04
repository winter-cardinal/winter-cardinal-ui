[Winter Cardinal UI - v0.194.0](../index.md) / EShapeDataValue

# Interface: EShapeDataValue

## Hierarchy

- [`EShapeDataValueLike`](EShapeDataValueLike.md)

  ↳ **`EShapeDataValue`**

## Implemented by

- [`EShapeDataValueImpl`](../classes/EShapeDataValueImpl.md)

## Table of contents

### Properties

- [capacity](EShapeDataValue.md#capacity)
- [format](EShapeDataValue.md#format)
- [id](EShapeDataValue.md#id)
- [initial](EShapeDataValue.md#initial)
- [nvalue](EShapeDataValue.md#nvalue)
- [order](EShapeDataValue.md#order)
- [parent](EShapeDataValue.md#parent)
- [range](EShapeDataValue.md#range)
- [scope](EShapeDataValue.md#scope)
- [time](EShapeDataValue.md#time)
- [times](EShapeDataValue.md#times)
- [type](EShapeDataValue.md#type)
- [value](EShapeDataValue.md#value)
- [values](EShapeDataValue.md#values)

### Methods

- [clear](EShapeDataValue.md#clear)
- [copy](EShapeDataValue.md#copy)
- [deserialize](EShapeDataValue.md#deserialize)
- [formatter](EShapeDataValue.md#formatter)
- [isEquals](EShapeDataValue.md#isequals)
- [remove](EShapeDataValue.md#remove)
- [removeAll](EShapeDataValue.md#removeall)
- [serialize](EShapeDataValue.md#serialize)

## Properties

### capacity

• **capacity**: `number`

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[capacity](EShapeDataValueLike.md#capacity)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L20)

___

### format

• **format**: `string`

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[format](EShapeDataValueLike.md#format)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L18)

___

### id

• **id**: `string`

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[id](EShapeDataValueLike.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L14)

___

### initial

• **initial**: `string`

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[initial](EShapeDataValueLike.md#initial)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L17)

___

### nvalue

• `Readonly` **nvalue**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L30)

___

### order

• **order**: [`EShapeDataValueOrder`](../index.md#eshapedatavalueorder)

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[order](EShapeDataValueLike.md#order)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L21)

___

### parent

• `Optional` **parent**: [`EShapeDataValueParent`](EShapeDataValueParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L37)

___

### range

• **range**: [`EShapeDataValueRange`](EShapeDataValueRange.md)

#### Overrides

[EShapeDataValueLike](EShapeDataValueLike.md).[range](EShapeDataValueLike.md#range)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L36)

___

### scope

• **scope**: [`EShapeDataValueScope`](../index.md#eshapedatavaluescope)

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[scope](EShapeDataValueLike.md#scope)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L16)

___

### time

• **time**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L31)

___

### times

• **times**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L34)

___

### type

• **type**: [`EShapeDataValueType`](../index.md#eshapedatavaluetype)

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[type](EShapeDataValueLike.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L15)

___

### value

• **value**: `unknown`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L29)

___

### values

• **values**: `unknown`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L33)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L41)

___

### copy

▸ **copy**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeDataValue`](EShapeDataValue.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L44)

___

### deserialize

▸ **deserialize**(`target`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](../classes/EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L47)

___

### formatter

▸ `Optional` **formatter**(`value`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`unknown`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L39)

___

### isEquals

▸ **isEquals**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeDataValue`](EShapeDataValue.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L45)

___

### remove

▸ **remove**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L42)

___

### removeAll

▸ **removeAll**(`indices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indices` | `number`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L43)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L46)
