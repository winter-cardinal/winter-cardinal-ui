[Winter Cardinal UI - v0.442.0](../index.md) / EShapeActionValueOpenDialogExtension

# Class: EShapeActionValueOpenDialogExtension

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)\<typeof [`DIALOG`](../index.md#dialog)\>

  ↳ **`EShapeActionValueOpenDialogExtension`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueOpenDialogExtension.md#constructor)

### Properties

- [argument](EShapeActionValueOpenDialogExtension.md#argument)
- [condition](EShapeActionValueOpenDialogExtension.md#condition)
- [dialogType](EShapeActionValueOpenDialogExtension.md#dialogtype)
- [subtype](EShapeActionValueOpenDialogExtension.md#subtype)
- [target](EShapeActionValueOpenDialogExtension.md#target)
- [type](EShapeActionValueOpenDialogExtension.md#type)
- [THEME](EShapeActionValueOpenDialogExtension.md#theme)

### Methods

- [getTheme](EShapeActionValueOpenDialogExtension.md#gettheme)
- [isEquals](EShapeActionValueOpenDialogExtension.md#isequals)
- [serialize](EShapeActionValueOpenDialogExtension.md#serialize)
- [toLabel](EShapeActionValueOpenDialogExtension.md#tolabel)
- [toRuntime](EShapeActionValueOpenDialogExtension.md#toruntime)
- [deserialize](EShapeActionValueOpenDialogExtension.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueOpenDialogExtension**(`condition`, `target`, `argument`, `dialogType`): [`EShapeActionValueOpenDialogExtension`](EShapeActionValueOpenDialogExtension.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` |
| `target` | `string` |
| `argument` | `string` |
| `dialogType` | `number` |

#### Returns

[`EShapeActionValueOpenDialogExtension`](EShapeActionValueOpenDialogExtension.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts#L49)

## Properties

### argument

• `Readonly` **argument**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts#L46)

___

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### dialogType

• `Readonly` **dialogType**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts#L47)

___

### subtype

• `Readonly` **subtype**: ``12``

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### target

• `Readonly` **target**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts#L45)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[type](EShapeActionValueSubtyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[THEME](EShapeActionValueSubtyped.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[getTheme](EShapeActionValueSubtyped.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts#L61)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts#L75)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toLabel](EShapeActionValueSubtyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts#L71)

___

### deserialize

▸ **deserialize**(`serialized`, `manager`): [`EShapeActionValueOpenDialogExtension`](EShapeActionValueOpenDialogExtension.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueOpenDialogExtensionSerialized`](../index.md#eshapeactionvalueopendialogextensionserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueOpenDialogExtension`](EShapeActionValueOpenDialogExtension.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-dialog-extension.ts#L84)
