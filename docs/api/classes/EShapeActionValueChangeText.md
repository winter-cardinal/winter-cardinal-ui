[Winter Cardinal UI - v0.155.0](../index.md) / EShapeActionValueChangeText

# Class: EShapeActionValueChangeText

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)<[`EShapeActionValueChangeTextType`](../index.md#eshapeactionvaluechangetexttype)\>

  ↳ **`EShapeActionValueChangeText`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueChangeText.md#constructor)

### Properties

- [condition](EShapeActionValueChangeText.md#condition)
- [subtype](EShapeActionValueChangeText.md#subtype)
- [type](EShapeActionValueChangeText.md#type)
- [value](EShapeActionValueChangeText.md#value)

### Methods

- [isEquals](EShapeActionValueChangeText.md#isequals)
- [serialize](EShapeActionValueChangeText.md#serialize)
- [toLabel](EShapeActionValueChangeText.md#tolabel)
- [toRuntime](EShapeActionValueChangeText.md#toruntime)
- [deserialize](EShapeActionValueChangeText.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueChangeText**(`subtype`, `condition`, `value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subtype` | [`EShapeActionValueChangeTextType`](../index.md#eshapeactionvaluechangetexttype) |
| `condition` | `string` |
| `value` | `string` |

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-text.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-text.ts#L26)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L14)

___

### subtype

• `Readonly` **subtype**: [`EShapeActionValueChangeTextType`](../index.md#eshapeactionvaluechangetexttype)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### type

• `Readonly` **type**: [`EShapeActionValueType`](../index.md#eshapeactionvaluetype)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[type](EShapeActionValueSubtyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

___

### value

• `Readonly` **value**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-text.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-text.ts#L24)

## Methods

### isEquals

▸ **isEquals**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValue`](../interfaces/EShapeActionValue.md) |

#### Returns

`boolean`

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[isEquals](EShapeActionValueSubtyped.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-text.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-text.ts#L31)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[serialize](EShapeActionValueSubtyped.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-text.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-text.ts#L48)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toLabel](EShapeActionValueSubtyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L25)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntimeChangeTextNumber`](EShapeActionRuntimeChangeTextNumber.md) \| [`EShapeActionRuntimeChangeTextText`](EShapeActionRuntimeChangeTextText.md)

#### Returns

[`EShapeActionRuntimeChangeTextNumber`](EShapeActionRuntimeChangeTextNumber.md) \| [`EShapeActionRuntimeChangeTextText`](EShapeActionRuntimeChangeTextText.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-text.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-text.ts#L39)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueChangeText`](EShapeActionValueChangeText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueChangeTextSerialized`](../index.md#eshapeactionvaluechangetextserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueChangeText`](EShapeActionValueChangeText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-text.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-text.ts#L54)
