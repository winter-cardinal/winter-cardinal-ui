[Winter Cardinal UI - v0.165.0](../index.md) / EShapeDataValueRange

# Interface: EShapeDataValueRange

## Hierarchy

- [`EShapeDataValueRangeLike`](EShapeDataValueRangeLike.md)

  ↳ **`EShapeDataValueRange`**

## Implemented by

- [`EShapeDataValueRangeImpl`](../classes/EShapeDataValueRangeImpl.md)

## Table of contents

### Properties

- [from](EShapeDataValueRange.md#from)
- [parent](EShapeDataValueRange.md#parent)
- [to](EShapeDataValueRange.md#to)
- [type](EShapeDataValueRange.md#type)

### Methods

- [copy](EShapeDataValueRange.md#copy)
- [deserialize](EShapeDataValueRange.md#deserialize)
- [isEquals](EShapeDataValueRange.md#isequals)
- [normalize](EShapeDataValueRange.md#normalize)
- [serialize](EShapeDataValueRange.md#serialize)
- [set](EShapeDataValueRange.md#set)
- [toObject](EShapeDataValueRange.md#toobject)

## Properties

### from

• **from**: `number`

#### Inherited from

[EShapeDataValueRangeLike](EShapeDataValueRangeLike.md).[from](EShapeDataValueRangeLike.md#from)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts#L23)

___

### parent

• `Optional` **parent**: [`EShapeDataValueRangeParent`](EShapeDataValueRangeParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts#L32)

___

### to

• **to**: `number`

#### Inherited from

[EShapeDataValueRangeLike](EShapeDataValueRangeLike.md).[to](EShapeDataValueRangeLike.md#to)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts#L24)

___

### type

• **type**: `number`

#### Inherited from

[EShapeDataValueRangeLike](EShapeDataValueRangeLike.md).[type](EShapeDataValueRangeLike.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts#L22)

## Methods

### copy

▸ **copy**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeDataValueRangeLike`](EShapeDataValueRangeLike.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts#L37)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts#L40)

___

### isEquals

▸ **isEquals**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeDataValueRangeLike`](EShapeDataValueRangeLike.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts#L36)

___

### normalize

▸ **normalize**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts#L35)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts#L39)

___

### set

▸ **set**(`from?`, `to?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from?` | ``null`` \| `number` |
| `to?` | ``null`` \| `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts#L34)

___

### toObject

▸ **toObject**(): [`EShapeDataValueRangeLike`](EShapeDataValueRangeLike.md)

#### Returns

[`EShapeDataValueRangeLike`](EShapeDataValueRangeLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/e-shape-data-value-range.ts#L38)
