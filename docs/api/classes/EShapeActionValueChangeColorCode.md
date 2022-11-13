[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionValueChangeColorCode

# Class: EShapeActionValueChangeColorCode

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)<[`EShapeActionValueChangeColorType`](../index.md#eshapeactionvaluechangecolortype-1)\>

  ↳ **`EShapeActionValueChangeColorCode`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueChangeColorCode.md#constructor)

### Properties

- [alpha](EShapeActionValueChangeColorCode.md#alpha)
- [blend](EShapeActionValueChangeColorCode.md#blend)
- [color](EShapeActionValueChangeColorCode.md#color)
- [condition](EShapeActionValueChangeColorCode.md#condition)
- [subtype](EShapeActionValueChangeColorCode.md#subtype)
- [type](EShapeActionValueChangeColorCode.md#type)
- [THEME](EShapeActionValueChangeColorCode.md#theme)

### Methods

- [getTheme](EShapeActionValueChangeColorCode.md#gettheme)
- [isEquals](EShapeActionValueChangeColorCode.md#isequals)
- [serialize](EShapeActionValueChangeColorCode.md#serialize)
- [toLabel](EShapeActionValueChangeColorCode.md#tolabel)
- [toRuntime](EShapeActionValueChangeColorCode.md#toruntime)
- [deserialize](EShapeActionValueChangeColorCode.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueChangeColorCode**(`subtype`, `condition`, `color`, `alpha`, `blend`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subtype` | `number` |
| `condition` | `string` |
| `color` | `string` |
| `alpha` | `string` |
| `blend` | `string` |

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts#L43)

## Properties

### alpha

• `Readonly` **alpha**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts#L40)

___

### blend

• `Readonly` **blend**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts#L41)

___

### color

• `Readonly` **color**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts#L39)

___

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### subtype

• `Readonly` **subtype**: `number`

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

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[isEquals](EShapeActionValueSubtyped.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts#L56)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts#L70)

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

▸ **toRuntime**(): [`EShapeActionRuntimeChangeColorCode`](EShapeActionRuntimeChangeColorCode.md)

#### Returns

[`EShapeActionRuntimeChangeColorCode`](EShapeActionRuntimeChangeColorCode.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts#L66)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueChangeColorCode`](EShapeActionValueChangeColorCode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueChangeColorCodeSerialized`](../index.md#eshapeactionvaluechangecolorcodeserialized) \| [`EShapeActionValueChangeColorCodeSerializedLegacy`](../index.md#eshapeactionvaluechangecolorcodeserializedlegacy) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueChangeColorCode`](EShapeActionValueChangeColorCode.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-color-code.ts#L81)
