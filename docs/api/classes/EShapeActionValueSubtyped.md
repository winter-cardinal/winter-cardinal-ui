[Winter Cardinal UI - v0.414.0](../index.md) / EShapeActionValueSubtyped

# Class: EShapeActionValueSubtyped\<SUBTYPE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `SUBTYPE` | extends `number` |

## Hierarchy

- [`EShapeActionValueBase`](EShapeActionValueBase.md)

  ↳ **`EShapeActionValueSubtyped`**

  ↳↳ [`EShapeActionValueBlink`](EShapeActionValueBlink.md)

  ↳↳ [`EShapeActionValueChangeColorBrightness`](EShapeActionValueChangeColorBrightness.md)

  ↳↳ [`EShapeActionValueChangeColorCode`](EShapeActionValueChangeColorCode.md)

  ↳↳ [`EShapeActionValueChangeColor`](EShapeActionValueChangeColor.md)

  ↳↳ [`EShapeActionValueChangeText`](EShapeActionValueChangeText.md)

  ↳↳ [`EShapeActionValueGesture`](EShapeActionValueGesture.md)

  ↳↳ [`EShapeActionValueMiscExecute`](EShapeActionValueMiscExecute.md)

  ↳↳ [`EShapeActionValueMisc`](EShapeActionValueMisc.md)

  ↳↳ [`EShapeActionValueOpenDialogExtension`](EShapeActionValueOpenDialogExtension.md)

  ↳↳ [`EShapeActionValueOpenDialog`](EShapeActionValueOpenDialog.md)

  ↳↳ [`EShapeActionValueOpenExtension`](EShapeActionValueOpenExtension.md)

  ↳↳ [`EShapeActionValueOpen`](EShapeActionValueOpen.md)

  ↳↳ [`EShapeActionValueOpetyped`](EShapeActionValueOpetyped.md)

  ↳↳ [`EShapeActionValueShowHideLayer`](EShapeActionValueShowHideLayer.md)

  ↳↳ [`EShapeActionValueShowHideShape`](EShapeActionValueShowHideShape.md)

  ↳↳ [`EShapeActionValueShowHide`](EShapeActionValueShowHide.md)

## Table of contents

### Constructors

- [constructor](EShapeActionValueSubtyped.md#constructor)

### Properties

- [condition](EShapeActionValueSubtyped.md#condition)
- [subtype](EShapeActionValueSubtyped.md#subtype)
- [type](EShapeActionValueSubtyped.md#type)
- [THEME](EShapeActionValueSubtyped.md#theme)

### Methods

- [getTheme](EShapeActionValueSubtyped.md#gettheme)
- [isEquals](EShapeActionValueSubtyped.md#isequals)
- [serialize](EShapeActionValueSubtyped.md#serialize)
- [toLabel](EShapeActionValueSubtyped.md#tolabel)
- [toRuntime](EShapeActionValueSubtyped.md#toruntime)

## Constructors

### constructor

• **new EShapeActionValueSubtyped**\<`SUBTYPE`\>(`type`, `condition`, `subtype`): [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)\<`SUBTYPE`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SUBTYPE` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |
| `condition` | `string` |
| `subtype` | `SUBTYPE` |

#### Returns

[`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)\<`SUBTYPE`\>

#### Overrides

[EShapeActionValueBase](EShapeActionValueBase.md).[constructor](EShapeActionValueBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L15)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[condition](EShapeActionValueBase.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### subtype

• `Readonly` **subtype**: `SUBTYPE`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[type](EShapeActionValueBase.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[THEME](EShapeActionValueBase.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[getTheme](EShapeActionValueBase.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L31)

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

[EShapeActionValueBase](EShapeActionValueBase.md).[isEquals](EShapeActionValueBase.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L20)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[serialize](EShapeActionValueBase.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L37)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[toLabel](EShapeActionValueBase.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md)

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[toRuntime](EShapeActionValueBase.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L36)
