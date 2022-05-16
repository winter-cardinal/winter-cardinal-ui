[Winter Cardinal UI - v0.167.0](../index.md) / EShapeActionValueChangeColor

# Class: EShapeActionValueChangeColor

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)<[`EShapeActionValueChangeColorType`](../index.md#eshapeactionvaluechangecolortype)\>

  ↳ **`EShapeActionValueChangeColor`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueChangeColor.md#constructor)

### Properties

- [alpha](EShapeActionValueChangeColor.md#alpha)
- [blend](EShapeActionValueChangeColor.md#blend)
- [color](EShapeActionValueChangeColor.md#color)
- [condition](EShapeActionValueChangeColor.md#condition)
- [subtype](EShapeActionValueChangeColor.md#subtype)
- [target](EShapeActionValueChangeColor.md#target)
- [type](EShapeActionValueChangeColor.md#type)

### Methods

- [isEquals](EShapeActionValueChangeColor.md#isequals)
- [serialize](EShapeActionValueChangeColor.md#serialize)
- [toLabel](EShapeActionValueChangeColor.md#tolabel)
- [toRuntime](EShapeActionValueChangeColor.md#toruntime)
- [deserialize](EShapeActionValueChangeColor.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueChangeColor**(`subtype`, `condition`, `target`, `color`, `alpha`, `blend`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subtype` | `number` |
| `condition` | `string` |
| `target` | [`EShapeActionValueChangeColorTargetColorOrAlpha`](../index.md#eshapeactionvaluechangecolortargetcolororalpha) |
| `color` | `number` |
| `alpha` | `number` |
| `blend` | `string` |

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts#L49)

## Properties

### alpha

• `Readonly` **alpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts#L46)

___

### blend

• `Readonly` **blend**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts#L47)

___

### color

• `Readonly` **color**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts#L45)

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

### target

• `Readonly` **target**: [`EShapeActionValueChangeColorTargetColorOrAlpha`](../index.md#eshapeactionvaluechangecolortargetcolororalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts#L44)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts#L64)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts#L79)

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

▸ **toRuntime**(): [`EShapeActionRuntimeChangeColor`](EShapeActionRuntimeChangeColor.md)

#### Returns

[`EShapeActionRuntimeChangeColor`](EShapeActionRuntimeChangeColor.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts#L75)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueChangeColor`](EShapeActionValueChangeColor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueChangeColorSerialized`](../index.md#eshapeactionvaluechangecolorserialized) \| [`EShapeActionValueChangeColorSerializedLegacy`](../index.md#eshapeactionvaluechangecolorserializedlegacy) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueChangeColor`](EShapeActionValueChangeColor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color.ts#L87)
