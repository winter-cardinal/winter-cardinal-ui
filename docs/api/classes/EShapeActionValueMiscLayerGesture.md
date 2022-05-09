[Winter Cardinal UI - v0.164.0](../index.md) / EShapeActionValueMiscLayerGesture

# Class: EShapeActionValueMiscLayerGesture

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)<typeof [`LAYER_GESTURE`](../index.md#layer_gesture)\>

  ↳ **`EShapeActionValueMiscLayerGesture`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueMiscLayerGesture.md#constructor)

### Properties

- [condition](EShapeActionValueMiscLayerGesture.md#condition)
- [gestureType](EShapeActionValueMiscLayerGesture.md#gesturetype)
- [scaleMax](EShapeActionValueMiscLayerGesture.md#scalemax)
- [scaleMin](EShapeActionValueMiscLayerGesture.md#scalemin)
- [subtype](EShapeActionValueMiscLayerGesture.md#subtype)
- [type](EShapeActionValueMiscLayerGesture.md#type)

### Methods

- [isEquals](EShapeActionValueMiscLayerGesture.md#isequals)
- [serialize](EShapeActionValueMiscLayerGesture.md#serialize)
- [toLabel](EShapeActionValueMiscLayerGesture.md#tolabel)
- [toRuntime](EShapeActionValueMiscLayerGesture.md#toruntime)
- [deserialize](EShapeActionValueMiscLayerGesture.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueMiscLayerGesture**(`condition?`, `gestureType?`, `scaleMin?`, `scaleMax?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `condition` | `string` | `""` |
| `gestureType` | `number` | `EShapeActionValueMiscGestureType.ALL` |
| `scaleMin` | `number` | `0.05` |
| `scaleMax` | `number` | `20` |

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-gesture.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-gesture.ts#L32)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L14)

___

### gestureType

• `Readonly` **gestureType**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-gesture.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-gesture.ts#L28)

___

### scaleMax

• `Readonly` **scaleMax**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-gesture.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-gesture.ts#L30)

___

### scaleMin

• `Readonly` **scaleMin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-gesture.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-gesture.ts#L29)

___

### subtype

• `Readonly` **subtype**: ``10``

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### type

• `Readonly` **type**: [`EShapeActionValueType`](../index.md#eshapeactionvaluetype)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[type](EShapeActionValueSubtyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L20)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-gesture.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-gesture.ts#L48)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toLabel](EShapeActionValueSubtyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L25)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-gesture.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-gesture.ts#L44)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueMiscLayerGesture`](EShapeActionValueMiscLayerGesture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueMiscLayerGestureSerialized`](../index.md#eshapeactionvaluemisclayergestureserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueMiscLayerGesture`](EShapeActionValueMiscLayerGesture.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-gesture.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-gesture.ts#L55)
