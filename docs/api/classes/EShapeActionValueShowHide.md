[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionValueShowHide

# Class: EShapeActionValueShowHide

**`Deprecated`**

in favor of [EShapeActionValueShowHideShape](EShapeActionValueShowHideShape.md).

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)<[`EShapeActionValueShowHideType`](../index.md#eshapeactionvalueshowhidetype-1)\>

  ↳ **`EShapeActionValueShowHide`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueShowHide.md#constructor)

### Properties

- [condition](EShapeActionValueShowHide.md#condition)
- [subtype](EShapeActionValueShowHide.md#subtype)
- [type](EShapeActionValueShowHide.md#type)
- [THEME](EShapeActionValueShowHide.md#theme)

### Methods

- [getTheme](EShapeActionValueShowHide.md#gettheme)
- [isEquals](EShapeActionValueShowHide.md#isequals)
- [serialize](EShapeActionValueShowHide.md#serialize)
- [toLabel](EShapeActionValueShowHide.md#tolabel)
- [toRuntime](EShapeActionValueShowHide.md#toruntime)
- [deserialize](EShapeActionValueShowHide.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueShowHide**(`subtype`, `condition`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subtype` | [`EShapeActionValueShowHideType`](../index.md#eshapeactionvalueshowhidetype-1) |
| `condition` | `string` |

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide.ts#L27)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### subtype

• `Readonly` **subtype**: [`EShapeActionValueShowHideType`](../index.md#eshapeactionvalueshowhidetype-1)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[type](EShapeActionValueSubtyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[THEME](EShapeActionValueSubtyped.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ `Protected` **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[getTheme](EShapeActionValueSubtyped.md#gettheme)

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

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[isEquals](EShapeActionValueSubtyped.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L20)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide.ts#L35)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toLabel](EShapeActionValueSubtyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntimeShowHide`](EShapeActionRuntimeShowHide.md)

#### Returns

[`EShapeActionRuntimeShowHide`](EShapeActionRuntimeShowHide.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide.ts#L31)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueShowHide`](EShapeActionValueShowHide.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueShowHideSerialized`](../index.md#eshapeactionvalueshowhideserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueShowHide`](EShapeActionValueShowHide.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide.ts#L40)
