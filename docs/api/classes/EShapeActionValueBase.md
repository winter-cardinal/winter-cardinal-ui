[Winter Cardinal UI - v0.200.0](../index.md) / EShapeActionValueBase

# Class: EShapeActionValueBase

## Hierarchy

- **`EShapeActionValueBase`**

  ↳ [`EShapeActionValueChangeCursor`](EShapeActionValueChangeCursor.md)

  ↳ [`EShapeActionValueEmitEvent`](EShapeActionValueEmitEvent.md)

  ↳ [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)

## Implements

- [`EShapeActionValue`](../interfaces/EShapeActionValue.md)

## Table of contents

### Constructors

- [constructor](EShapeActionValueBase.md#constructor)

### Properties

- [condition](EShapeActionValueBase.md#condition)
- [type](EShapeActionValueBase.md#type)
- [THEME](EShapeActionValueBase.md#theme)

### Methods

- [getTheme](EShapeActionValueBase.md#gettheme)
- [isEquals](EShapeActionValueBase.md#isequals)
- [serialize](EShapeActionValueBase.md#serialize)
- [toLabel](EShapeActionValueBase.md#tolabel)
- [toRuntime](EShapeActionValueBase.md#toruntime)

## Constructors

### constructor

• **new EShapeActionValueBase**(`type`, `condition`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |
| `condition` | `string` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L18)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Implementation of

[EShapeActionValue](../interfaces/EShapeActionValue.md).[condition](../interfaces/EShapeActionValue.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### type

• `Readonly` **type**: `number`

#### Implementation of

[EShapeActionValue](../interfaces/EShapeActionValue.md).[type](../interfaces/EShapeActionValue.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ `Protected` **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L31)

___

### isEquals

▸ **isEquals**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValue`](../interfaces/EShapeActionValue.md) |

#### Returns

`boolean`

#### Implementation of

[EShapeActionValue](../interfaces/EShapeActionValue.md).[isEquals](../interfaces/EShapeActionValue.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L23)

___

### serialize

▸ `Abstract` **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Implementation of

[EShapeActionValue](../interfaces/EShapeActionValue.md).[serialize](../interfaces/EShapeActionValue.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L37)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeActionValue](../interfaces/EShapeActionValue.md).[toLabel](../interfaces/EShapeActionValue.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ `Abstract` **toRuntime**(): [`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Implementation of

[EShapeActionValue](../interfaces/EShapeActionValue.md).[toRuntime](../interfaces/EShapeActionValue.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L36)
