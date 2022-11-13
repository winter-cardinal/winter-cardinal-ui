[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionValueOpenDialog

# Class: EShapeActionValueOpenDialog

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)<typeof [`DIALOG`](../index.md#dialog)\>

  ↳ **`EShapeActionValueOpenDialog`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueOpenDialog.md#constructor)

### Properties

- [condition](EShapeActionValueOpenDialog.md#condition)
- [dialogType](EShapeActionValueOpenDialog.md#dialogtype)
- [initial](EShapeActionValueOpenDialog.md#initial)
- [onInputAction](EShapeActionValueOpenDialog.md#oninputaction)
- [subtype](EShapeActionValueOpenDialog.md#subtype)
- [target](EShapeActionValueOpenDialog.md#target)
- [type](EShapeActionValueOpenDialog.md#type)
- [THEME](EShapeActionValueOpenDialog.md#theme)

### Methods

- [getTheme](EShapeActionValueOpenDialog.md#gettheme)
- [isEquals](EShapeActionValueOpenDialog.md#isequals)
- [serialize](EShapeActionValueOpenDialog.md#serialize)
- [toLabel](EShapeActionValueOpenDialog.md#tolabel)
- [toRuntime](EShapeActionValueOpenDialog.md#toruntime)
- [deserialize](EShapeActionValueOpenDialog.md#deserialize)
- [toDialogType](EShapeActionValueOpenDialog.md#todialogtype)

## Constructors

### constructor

• **new EShapeActionValueOpenDialog**(`condition`, `target`, `onInputAction`, `initial`, `dialogType`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` |
| `target` | `string` |
| `onInputAction` | [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction-1) |
| `initial` | `string` |
| `dialogType` | [`EShapeActionValueOpenDialogTypeNew`](../index.md#eshapeactionvalueopendialogtypenew) |

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L72)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### dialogType

• `Readonly` **dialogType**: [`EShapeActionValueOpenDialogTypeNew`](../index.md#eshapeactionvalueopendialogtypenew)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L70)

___

### initial

• `Readonly` **initial**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L69)

___

### onInputAction

• `Readonly` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction-1)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L68)

___

### subtype

• `Readonly` **subtype**: ``12``

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### target

• `Readonly` **target**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L67)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L86)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L116)

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

▸ **toRuntime**(): [`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L97)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueOpenDialog`](EShapeActionValueOpenDialog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueOpenDialogSerialized`](../index.md#eshapeactionvalueopendialogserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueOpenDialog`](EShapeActionValueOpenDialog.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L125)

___

### toDialogType

▸ `Static` `Protected` **toDialogType**(`serialized`): [`EShapeActionValueOpenDialogTypeNew`](../index.md#eshapeactionvalueopendialogtypenew)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueOpenDialogSerialized`](../index.md#eshapeactionvalueopendialogserialized) |

#### Returns

[`EShapeActionValueOpenDialogTypeNew`](../index.md#eshapeactionvalueopendialogtypenew)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L141)
