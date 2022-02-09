[Winter Cardinal UI](../README.md) / EShapeActionValue

# Interface: EShapeActionValue

## Implemented by

- [`EShapeActionValueBase`](../classes/EShapeActionValueBase.md)

## Table of contents

### Properties

- [condition](EShapeActionValue.md#condition)
- [type](EShapeActionValue.md#type)

### Methods

- [isEquals](EShapeActionValue.md#isequals)
- [serialize](EShapeActionValue.md#serialize)
- [toLabel](EShapeActionValue.md#tolabel)
- [toRuntime](EShapeActionValue.md#toruntime)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value.ts#L44)

___

### type

• `Readonly` **type**: [`EShapeActionValueType`](../README.md#eshapeactionvaluetype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value.ts#L43)

## Methods

### isEquals

▸ **isEquals**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValue`](EShapeActionValue.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value.ts#L46)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value.ts#L49)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value.ts#L48)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntime`](../classes/EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](../classes/EShapeActionRuntime.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value.ts#L47)
