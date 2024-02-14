[Winter Cardinal UI - v0.407.0](../index.md) / EShapeDataValue

# Interface: EShapeDataValue

## Hierarchy

- [`EShapeDataValueLike`](EShapeDataValueLike.md)

  ↳ **`EShapeDataValue`**

## Implemented by

- [`EShapeDataValueImpl`](../classes/EShapeDataValueImpl.md)

## Table of contents

### Properties

- [as](EShapeDataValue.md#as)
- [capacity](EShapeDataValue.md#capacity)
- [format](EShapeDataValue.md#format)
- [formatter](EShapeDataValue.md#formatter)
- [id](EShapeDataValue.md#id)
- [initial](EShapeDataValue.md#initial)
- [nvalue](EShapeDataValue.md#nvalue)
- [order](EShapeDataValue.md#order)
- [parent](EShapeDataValue.md#parent)
- [range](EShapeDataValue.md#range)
- [scope](EShapeDataValue.md#scope)
- [state](EShapeDataValue.md#state)
- [states](EShapeDataValue.md#states)
- [time](EShapeDataValue.md#time)
- [times](EShapeDataValue.md#times)
- [type](EShapeDataValue.md#type)
- [value](EShapeDataValue.md#value)
- [values](EShapeDataValue.md#values)

### Methods

- [clear](EShapeDataValue.md#clear)
- [copy](EShapeDataValue.md#copy)
- [deserialize](EShapeDataValue.md#deserialize)
- [isEquals](EShapeDataValue.md#isequals)
- [remove](EShapeDataValue.md#remove)
- [removeAll](EShapeDataValue.md#removeall)
- [serialize](EShapeDataValue.md#serialize)
- [toDirty](EShapeDataValue.md#todirty)

## Properties

### as

• **as**: `string`

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[as](EShapeDataValueLike.md#as)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L17)

___

### capacity

• **capacity**: `number`

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[capacity](EShapeDataValueLike.md#capacity)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L23)

___

### format

• **format**: `string`

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[format](EShapeDataValueLike.md#format)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L21)

___

### formatter

• `Optional` **formatter**: [`EShapeDataValueFormatter`](../index.md#eshapedatavalueformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L44)

___

### id

• **id**: `string`

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[id](EShapeDataValueLike.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L16)

___

### initial

• **initial**: `string`

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[initial](EShapeDataValueLike.md#initial)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L20)

___

### nvalue

• `Readonly` **nvalue**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L33)

___

### order

• **order**: [`EShapeDataValueOrder`](../index.md#eshapedatavalueorder-1)

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[order](EShapeDataValueLike.md#order)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L24)

___

### parent

• `Optional` **parent**: [`EShapeDataValueParent`](EShapeDataValueParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L42)

___

### range

• **range**: [`EShapeDataValueRange`](EShapeDataValueRange.md)

#### Overrides

[EShapeDataValueLike](EShapeDataValueLike.md).[range](EShapeDataValueLike.md#range)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L41)

___

### scope

• **scope**: [`EShapeDataValueScope`](../index.md#eshapedatavaluescope-1)

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[scope](EShapeDataValueLike.md#scope)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L19)

___

### state

• **state**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L35)

___

### states

• **states**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L39)

___

### time

• **time**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L34)

___

### times

• **times**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L38)

___

### type

• **type**: `number`

#### Inherited from

[EShapeDataValueLike](EShapeDataValueLike.md).[type](EShapeDataValueLike.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L18)

___

### value

• **value**: `unknown`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L32)

___

### values

• **values**: `unknown`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L37)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L46)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L50)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L53)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L51)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L48)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L49)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L52)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value.ts#L47)
