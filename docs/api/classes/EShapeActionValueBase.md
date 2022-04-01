[Winter Cardinal UI - v0.160.0](../index.md) / EShapeActionValueBase

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

### Methods

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
| `type` | [`EShapeActionValueType`](../index.md#eshapeactionvaluetype) |
| `condition` | `string` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Implementation of

[EShapeActionValue](../interfaces/EShapeActionValue.md).[condition](../interfaces/EShapeActionValue.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L14)

___

### type

• `Readonly` **type**: [`EShapeActionValueType`](../index.md#eshapeactionvaluetype)

#### Implementation of

[EShapeActionValue](../interfaces/EShapeActionValue.md).[type](../interfaces/EShapeActionValue.md#type)

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

#### Implementation of

[EShapeActionValue](../interfaces/EShapeActionValue.md).[isEquals](../interfaces/EShapeActionValue.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L21)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L30)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeActionValue](../interfaces/EShapeActionValue.md).[toLabel](../interfaces/EShapeActionValue.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L25)

___

### toRuntime

▸ `Abstract` **toRuntime**(): [`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Implementation of

[EShapeActionValue](../interfaces/EShapeActionValue.md).[toRuntime](../interfaces/EShapeActionValue.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L29)
