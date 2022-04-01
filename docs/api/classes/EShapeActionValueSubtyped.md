[Winter Cardinal UI - v0.160.0](../index.md) / EShapeActionValueSubtyped

# Class: EShapeActionValueSubtyped<SUBTYPE\>

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

  ↳↳ [`EShapeActionValueMiscGesture`](EShapeActionValueMiscGesture.md)

  ↳↳ [`EShapeActionValueMiscLayerGesture`](EShapeActionValueMiscLayerGesture.md)

  ↳↳ [`EShapeActionValueMiscLayerShowHide`](EShapeActionValueMiscLayerShowHide.md)

  ↳↳ [`EShapeActionValueMisc`](EShapeActionValueMisc.md)

  ↳↳ [`EShapeActionValueOpen`](EShapeActionValueOpen.md)

  ↳↳ [`EShapeActionValueOpetyped`](EShapeActionValueOpetyped.md)

  ↳↳ [`EShapeActionValueShowHide`](EShapeActionValueShowHide.md)

## Table of contents

### Constructors

- [constructor](EShapeActionValueSubtyped.md#constructor)

### Properties

- [condition](EShapeActionValueSubtyped.md#condition)
- [subtype](EShapeActionValueSubtyped.md#subtype)
- [type](EShapeActionValueSubtyped.md#type)

### Methods

- [isEquals](EShapeActionValueSubtyped.md#isequals)
- [serialize](EShapeActionValueSubtyped.md#serialize)
- [toLabel](EShapeActionValueSubtyped.md#tolabel)
- [toRuntime](EShapeActionValueSubtyped.md#toruntime)

## Constructors

### constructor

• **new EShapeActionValueSubtyped**<`SUBTYPE`\>(`type`, `condition`, `subtype`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SUBTYPE` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`EShapeActionValueType`](../index.md#eshapeactionvaluetype) |
| `condition` | `string` |
| `subtype` | `SUBTYPE` |

#### Overrides

[EShapeActionValueBase](EShapeActionValueBase.md).[constructor](EShapeActionValueBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L15)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[condition](EShapeActionValueBase.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L14)

___

### subtype

• `Readonly` **subtype**: `SUBTYPE`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### type

• `Readonly` **type**: [`EShapeActionValueType`](../index.md#eshapeactionvaluetype)

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[type](EShapeActionValueBase.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

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

[EShapeActionValueBase](EShapeActionValueBase.md).[isEquals](EShapeActionValueBase.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L20)

___

### serialize

▸ `Abstract` **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[serialize](EShapeActionValueBase.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L30)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[toLabel](EShapeActionValueBase.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L25)

___

### toRuntime

▸ `Abstract` **toRuntime**(): [`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[toRuntime](EShapeActionValueBase.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L29)
