[Winter Cardinal UI - v0.167.0](../index.md) / EShapeActionValueChangeColorBrightness

# Class: EShapeActionValueChangeColorBrightness

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)<[`EShapeActionValueChangeColorType`](../index.md#eshapeactionvaluechangecolortype)\>

  ↳ **`EShapeActionValueChangeColorBrightness`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueChangeColorBrightness.md#constructor)

### Properties

- [brightness](EShapeActionValueChangeColorBrightness.md#brightness)
- [condition](EShapeActionValueChangeColorBrightness.md#condition)
- [subtype](EShapeActionValueChangeColorBrightness.md#subtype)
- [type](EShapeActionValueChangeColorBrightness.md#type)

### Methods

- [isEquals](EShapeActionValueChangeColorBrightness.md#isequals)
- [serialize](EShapeActionValueChangeColorBrightness.md#serialize)
- [toLabel](EShapeActionValueChangeColorBrightness.md#tolabel)
- [toRuntime](EShapeActionValueChangeColorBrightness.md#toruntime)
- [deserialize](EShapeActionValueChangeColorBrightness.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueChangeColorBrightness**(`subtype`, `condition`, `brightness`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subtype` | `number` |
| `condition` | `string` |
| `brightness` | `string` |

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-brightness.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-brightness.ts#L37)

## Properties

### brightness

• `Readonly` **brightness**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-brightness.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-brightness.ts#L35)

___

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L14)

___

### subtype

• `Readonly` **subtype**: `number`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### type

• `Readonly` **type**: [`EShapeActionValueType`](../index.md#eshapeactionvaluetype)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[type](EShapeActionValueSubtyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-brightness.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-brightness.ts#L42)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-brightness.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-brightness.ts#L54)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toLabel](EShapeActionValueSubtyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L25)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntimeChangeColorBrightness`](EShapeActionRuntimeChangeColorBrightness.md)

#### Returns

[`EShapeActionRuntimeChangeColorBrightness`](EShapeActionRuntimeChangeColorBrightness.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-brightness.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-brightness.ts#L50)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueChangeColorBrightness`](EShapeActionValueChangeColorBrightness.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueChangeColorBrightnessSerialized`](../index.md#eshapeactionvaluechangecolorbrightnessserialized) \| [`EShapeActionValueChangeColorBrightnessSerializedLegacy`](../index.md#eshapeactionvaluechangecolorbrightnessserializedlegacy) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueChangeColorBrightness`](EShapeActionValueChangeColorBrightness.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-brightness.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-brightness.ts#L63)
