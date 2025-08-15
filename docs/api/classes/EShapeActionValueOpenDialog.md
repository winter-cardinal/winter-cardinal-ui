[Winter Cardinal UI - v0.457.0](../index.md) / EShapeActionValueOpenDialog

# Class: EShapeActionValueOpenDialog

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)\<typeof [`DIALOG`](../index.md#dialog)\>

  ↳ **`EShapeActionValueOpenDialog`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueOpenDialog.md#constructor)

### Properties

- [condition](EShapeActionValueOpenDialog.md#condition)
- [dialogType](EShapeActionValueOpenDialog.md#dialogtype)
- [initial](EShapeActionValueOpenDialog.md#initial)
- [max](EShapeActionValueOpenDialog.md#max)
- [min](EShapeActionValueOpenDialog.md#min)
- [onInputAction](EShapeActionValueOpenDialog.md#oninputaction)
- [step](EShapeActionValueOpenDialog.md#step)
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

• **new EShapeActionValueOpenDialog**(`condition`, `target`, `onInputAction`, `initial`, `step`, `min`, `max`, `dialogType`): [`EShapeActionValueOpenDialog`](EShapeActionValueOpenDialog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` |
| `target` | `string` |
| `onInputAction` | [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction) |
| `initial` | `string` |
| `step` | `string` |
| `min` | `string` |
| `max` | `string` |
| `dialogType` | [`EShapeActionValueOpenDialogTypeNew`](../index.md#eshapeactionvalueopendialogtypenew) |

#### Returns

[`EShapeActionValueOpenDialog`](EShapeActionValueOpenDialog.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L89)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### dialogType

• `Readonly` **dialogType**: [`EShapeActionValueOpenDialogTypeNew`](../index.md#eshapeactionvalueopendialogtypenew)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L87)

___

### initial

• `Readonly` **initial**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L83)

___

### max

• `Readonly` **max**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L86)

___

### min

• `Readonly` **min**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L85)

___

### onInputAction

• `Readonly` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L82)

___

### step

• `Readonly` **step**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L84)

___

### subtype

• `Readonly` **subtype**: ``12``

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### target

• `Readonly` **target**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L81)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[type](EShapeActionValueSubtyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[THEME](EShapeActionValueSubtyped.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[getTheme](EShapeActionValueSubtyped.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L109)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L142)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toLabel](EShapeActionValueSubtyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L123)

___

### deserialize

▸ **deserialize**(`serialized`, `manager`): [`EShapeActionValueOpenDialog`](EShapeActionValueOpenDialog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueOpenDialogSerialized`](../index.md#eshapeactionvalueopendialogserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueOpenDialog`](EShapeActionValueOpenDialog.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L154)

___

### toDialogType

▸ **toDialogType**(`serialized`): [`EShapeActionValueOpenDialogTypeNew`](../index.md#eshapeactionvalueopendialogtypenew)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueOpenDialogSerialized`](../index.md#eshapeactionvalueopendialogserialized) |

#### Returns

[`EShapeActionValueOpenDialogTypeNew`](../index.md#eshapeactionvalueopendialogtypenew)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog.ts#L177)
