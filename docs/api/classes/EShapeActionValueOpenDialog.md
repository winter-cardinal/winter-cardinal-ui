[Winter Cardinal UI - v0.179.0](../index.md) / EShapeActionValueOpenDialog

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
| `onInputAction` | [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction) |
| `initial` | `string` |
| `dialogType` | [`EShapeActionValueOpenDialogType`](../index.md#eshapeactionvalueopendialogtype) |

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L63)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### dialogType

• `Readonly` **dialogType**: [`EShapeActionValueOpenDialogType`](../index.md#eshapeactionvalueopendialogtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L61)

___

### initial

• `Readonly` **initial**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L60)

___

### onInputAction

• `Readonly` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L59)

___

### subtype

• `Readonly` **subtype**: ``12``

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### target

• `Readonly` **target**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L58)

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

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[isEquals](EShapeActionValueSubtyped.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L77)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L107)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L88)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L116)

___

### toDialogType

▸ `Static` `Protected` **toDialogType**(`serialized`): [`EShapeActionValueOpenDialogType`](../index.md#eshapeactionvalueopendialogtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueOpenDialogSerialized`](../index.md#eshapeactionvalueopendialogserialized) |

#### Returns

[`EShapeActionValueOpenDialogType`](../index.md#eshapeactionvalueopendialogtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L132)
