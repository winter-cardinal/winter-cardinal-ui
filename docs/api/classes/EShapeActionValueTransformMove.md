[Winter Cardinal UI - v0.199.0](../index.md) / EShapeActionValueTransformMove

# Class: EShapeActionValueTransformMove

## Hierarchy

- [`EShapeActionValueOpetyped`](EShapeActionValueOpetyped.md)<[`EShapeActionValueTransformType`](../index.md#eshapeactionvaluetransformtype), [`EShapeActionValueTransformMoveType`](../index.md#eshapeactionvaluetransformmovetype)\>

  ↳ **`EShapeActionValueTransformMove`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueTransformMove.md#constructor)

### Properties

- [amount](EShapeActionValueTransformMove.md#amount)
- [condition](EShapeActionValueTransformMove.md#condition)
- [opetype](EShapeActionValueTransformMove.md#opetype)
- [subtype](EShapeActionValueTransformMove.md#subtype)
- [type](EShapeActionValueTransformMove.md#type)
- [THEME](EShapeActionValueTransformMove.md#theme)

### Methods

- [getTheme](EShapeActionValueTransformMove.md#gettheme)
- [isEquals](EShapeActionValueTransformMove.md#isequals)
- [serialize](EShapeActionValueTransformMove.md#serialize)
- [toLabel](EShapeActionValueTransformMove.md#tolabel)
- [toRuntime](EShapeActionValueTransformMove.md#toruntime)
- [deserialize](EShapeActionValueTransformMove.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueTransformMove**(`opetype`, `condition`, `amount`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opetype` | [`EShapeActionValueTransformMoveType`](../index.md#eshapeactionvaluetransformmovetype) |
| `condition` | `string` |
| `amount` | `string` |

#### Overrides

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[constructor](EShapeActionValueOpetyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-move.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-move.ts#L36)

## Properties

### amount

• `Readonly` **amount**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-move.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-move.ts#L34)

___

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[condition](EShapeActionValueOpetyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### opetype

• `Readonly` **opetype**: [`EShapeActionValueTransformMoveType`](../index.md#eshapeactionvaluetransformmovetype)

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[opetype](EShapeActionValueOpetyped.md#opetype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-opetyped.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-opetyped.ts#L14)

___

### subtype

• `Readonly` **subtype**: [`EShapeActionValueTransformType`](../index.md#eshapeactionvaluetransformtype)

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[subtype](EShapeActionValueOpetyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[type](EShapeActionValueOpetyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[THEME](EShapeActionValueOpetyped.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ `Protected` **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[getTheme](EShapeActionValueOpetyped.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-move.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-move.ts#L46)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-move.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-move.ts#L71)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[toLabel](EShapeActionValueOpetyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntimeTransformMove`](EShapeActionRuntimeTransformMove.md)

#### Returns

[`EShapeActionRuntimeTransformMove`](EShapeActionRuntimeTransformMove.md)

#### Overrides

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[toRuntime](EShapeActionValueOpetyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-move.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-move.ts#L54)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueTransformMove`](EShapeActionValueTransformMove.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueTransformMoveSerialized`](../index.md#eshapeactionvaluetransformmoveserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueTransformMove`](EShapeActionValueTransformMove.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-move.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-move.ts#L79)
