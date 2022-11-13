[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionValueTransformRotate

# Class: EShapeActionValueTransformRotate

## Hierarchy

- [`EShapeActionValueOpetyped`](EShapeActionValueOpetyped.md)<[`EShapeActionValueTransformType`](../index.md#eshapeactionvaluetransformtype-1), [`EShapeActionValueTransformRotateType`](../index.md#eshapeactionvaluetransformrotatetype-1)\>

  ↳ **`EShapeActionValueTransformRotate`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueTransformRotate.md#constructor)

### Properties

- [amount](EShapeActionValueTransformRotate.md#amount)
- [condition](EShapeActionValueTransformRotate.md#condition)
- [opetype](EShapeActionValueTransformRotate.md#opetype)
- [originX](EShapeActionValueTransformRotate.md#originx)
- [originY](EShapeActionValueTransformRotate.md#originy)
- [subtype](EShapeActionValueTransformRotate.md#subtype)
- [type](EShapeActionValueTransformRotate.md#type)
- [THEME](EShapeActionValueTransformRotate.md#theme)

### Methods

- [getTheme](EShapeActionValueTransformRotate.md#gettheme)
- [isEquals](EShapeActionValueTransformRotate.md#isequals)
- [serialize](EShapeActionValueTransformRotate.md#serialize)
- [toLabel](EShapeActionValueTransformRotate.md#tolabel)
- [toRuntime](EShapeActionValueTransformRotate.md#toruntime)
- [deserialize](EShapeActionValueTransformRotate.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueTransformRotate**(`opetype`, `condition`, `originX`, `originY`, `amount`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opetype` | [`EShapeActionValueTransformRotateType`](../index.md#eshapeactionvaluetransformrotatetype-1) |
| `condition` | `string` |
| `originX` | `number` |
| `originY` | `number` |
| `amount` | `string` |

#### Overrides

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[constructor](EShapeActionValueOpetyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts#L36)

## Properties

### amount

• `Readonly` **amount**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts#L34)

___

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[condition](EShapeActionValueOpetyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### opetype

• `Readonly` **opetype**: [`EShapeActionValueTransformRotateType`](../index.md#eshapeactionvaluetransformrotatetype-1)

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[opetype](EShapeActionValueOpetyped.md#opetype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-opetyped.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-opetyped.ts#L14)

___

### originX

• `Readonly` **originX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts#L32)

___

### originY

• `Readonly` **originY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts#L33)

___

### subtype

• `Readonly` **subtype**: [`EShapeActionValueTransformType`](../index.md#eshapeactionvaluetransformtype-1)

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[subtype](EShapeActionValueOpetyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[type](EShapeActionValueOpetyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[THEME](EShapeActionValueOpetyped.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ `Protected` **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[getTheme](EShapeActionValueOpetyped.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L31)

___

### isEquals

▸ **isEquals**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValue`](../interfaces/EShapeActionValue.md) |

#### Returns

`boolean`

#### Overrides

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[isEquals](EShapeActionValueOpetyped.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts#L54)

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

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[serialize](EShapeActionValueOpetyped.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts#L73)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[toLabel](EShapeActionValueOpetyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntimeTransformRotate`](EShapeActionRuntimeTransformRotate.md)

#### Returns

[`EShapeActionRuntimeTransformRotate`](EShapeActionRuntimeTransformRotate.md)

#### Overrides

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[toRuntime](EShapeActionValueOpetyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts#L64)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueTransformRotate`](EShapeActionValueTransformRotate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueTransformRotateSerialized`](../index.md#eshapeactionvaluetransformrotateserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueTransformRotate`](EShapeActionValueTransformRotate.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-rotate.ts#L81)
