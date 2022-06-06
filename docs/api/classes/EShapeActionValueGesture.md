[Winter Cardinal UI - v0.179.0](../index.md) / EShapeActionValueGesture

# Class: EShapeActionValueGesture

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)<[`EShapeActionValueGestureType`](../index.md#eshapeactionvaluegesturetype)\>

  ↳ **`EShapeActionValueGesture`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueGesture.md#constructor)

### Properties

- [condition](EShapeActionValueGesture.md#condition)
- [operationType](EShapeActionValueGesture.md#operationtype)
- [scaleMax](EShapeActionValueGesture.md#scalemax)
- [scaleMin](EShapeActionValueGesture.md#scalemin)
- [subtype](EShapeActionValueGesture.md#subtype)
- [type](EShapeActionValueGesture.md#type)
- [THEME](EShapeActionValueGesture.md#theme)

### Methods

- [getTheme](EShapeActionValueGesture.md#gettheme)
- [isEquals](EShapeActionValueGesture.md#isequals)
- [serialize](EShapeActionValueGesture.md#serialize)
- [toLabel](EShapeActionValueGesture.md#tolabel)
- [toRuntime](EShapeActionValueGesture.md#toruntime)
- [deserialize](EShapeActionValueGesture.md#deserialize)
- [toSubType](EShapeActionValueGesture.md#tosubtype)

## Constructors

### constructor

• **new EShapeActionValueGesture**(`condition?`, `subtype`, `operationType`, `scaleMin?`, `scaleMax?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `condition` | `string` | `""` |
| `subtype` | [`EShapeActionValueGestureType`](../index.md#eshapeactionvaluegesturetype) | `undefined` |
| `operationType` | `number` | `undefined` |
| `scaleMin` | `number` | `0.05` |
| `scaleMax` | `number` | `20` |

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts#L45)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### operationType

• `Readonly` **operationType**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts#L41)

___

### scaleMax

• `Readonly` **scaleMax**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts#L43)

___

### scaleMin

• `Readonly` **scaleMin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts#L42)

___

### subtype

• `Readonly` **subtype**: [`EShapeActionValueGestureType`](../index.md#eshapeactionvaluegesturetype)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### type

• `Readonly` **type**: [`EShapeActionValueType`](../index.md#eshapeactionvaluetype)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[type](EShapeActionValueSubtyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[THEME](EShapeActionValueSubtyped.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ `Protected` **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[getTheme](EShapeActionValueSubtyped.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L31)

___

### isEquals

▸ **isEquals**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValue`](../interfaces/EShapeActionValue.md) |

#### Returns

`boolean`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[isEquals](EShapeActionValueSubtyped.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L20)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts#L67)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toLabel](EShapeActionValueSubtyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts#L58)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueGesture`](EShapeActionValueGesture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueGestureSerialized`](../index.md#eshapeactionvaluegestureserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueGesture`](EShapeActionValueGesture.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts#L74)

___

### toSubType

▸ `Static` `Protected` **toSubType**(`serialized`): [`EShapeActionValueGestureType`](../index.md#eshapeactionvaluegesturetype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueGestureSerialized`](../index.md#eshapeactionvaluegestureserialized) |

#### Returns

[`EShapeActionValueGestureType`](../index.md#eshapeactionvaluegesturetype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-gesture.ts#L86)
