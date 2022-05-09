[Winter Cardinal UI - v0.164.0](../index.md) / EShapeActionValueEmitEvent

# Class: EShapeActionValueEmitEvent

## Hierarchy

- [`EShapeActionValueBase`](EShapeActionValueBase.md)

  ↳ **`EShapeActionValueEmitEvent`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueEmitEvent.md#constructor)

### Properties

- [condition](EShapeActionValueEmitEvent.md#condition)
- [name](EShapeActionValueEmitEvent.md#name)
- [type](EShapeActionValueEmitEvent.md#type)

### Methods

- [isEquals](EShapeActionValueEmitEvent.md#isequals)
- [serialize](EShapeActionValueEmitEvent.md#serialize)
- [toLabel](EShapeActionValueEmitEvent.md#tolabel)
- [toRuntime](EShapeActionValueEmitEvent.md#toruntime)
- [deserialize](EShapeActionValueEmitEvent.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueEmitEvent**(`condition`, `name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` |
| `name` | `string` |

#### Overrides

[EShapeActionValueBase](EShapeActionValueBase.md).[constructor](EShapeActionValueBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts#L23)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[condition](EShapeActionValueBase.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L14)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts#L21)

___

### type

• `Readonly` **type**: [`EShapeActionValueType`](../index.md#eshapeactionvaluetype)

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[type](EShapeActionValueBase.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts#L28)

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

[EShapeActionValueBase](EShapeActionValueBase.md).[serialize](EShapeActionValueBase.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts#L40)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[toLabel](EShapeActionValueBase.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L25)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntimeEmitEvent`](EShapeActionRuntimeEmitEvent.md)

#### Returns

[`EShapeActionRuntimeEmitEvent`](EShapeActionRuntimeEmitEvent.md)

#### Overrides

[EShapeActionValueBase](EShapeActionValueBase.md).[toRuntime](EShapeActionValueBase.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts#L36)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueEmitEvent`](EShapeActionValueEmitEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueEmitEventSerialized`](../index.md#eshapeactionvalueemiteventserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueEmitEvent`](EShapeActionValueEmitEvent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts#L46)
