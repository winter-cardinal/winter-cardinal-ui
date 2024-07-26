[Winter Cardinal UI - v0.442.0](../index.md) / EShapeActionValueEmitEvent

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
- [THEME](EShapeActionValueEmitEvent.md#theme)

### Methods

- [getTheme](EShapeActionValueEmitEvent.md#gettheme)
- [isEquals](EShapeActionValueEmitEvent.md#isequals)
- [serialize](EShapeActionValueEmitEvent.md#serialize)
- [toLabel](EShapeActionValueEmitEvent.md#tolabel)
- [toRuntime](EShapeActionValueEmitEvent.md#toruntime)
- [deserialize](EShapeActionValueEmitEvent.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueEmitEvent**(`condition`, `name`): [`EShapeActionValueEmitEvent`](EShapeActionValueEmitEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` |
| `name` | `string` |

#### Returns

[`EShapeActionValueEmitEvent`](EShapeActionValueEmitEvent.md)

#### Overrides

[EShapeActionValueBase](EShapeActionValueBase.md).[constructor](EShapeActionValueBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts#L23)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[condition](EShapeActionValueBase.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts#L21)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[type](EShapeActionValueBase.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[THEME](EShapeActionValueBase.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[getTheme](EShapeActionValueBase.md#gettheme)

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

[EShapeActionValueBase](EShapeActionValueBase.md).[isEquals](EShapeActionValueBase.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts#L28)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts#L40)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[toLabel](EShapeActionValueBase.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntimeEmitEvent`](EShapeActionRuntimeEmitEvent.md)

#### Returns

[`EShapeActionRuntimeEmitEvent`](EShapeActionRuntimeEmitEvent.md)

#### Overrides

[EShapeActionValueBase](EShapeActionValueBase.md).[toRuntime](EShapeActionValueBase.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts#L36)

___

### deserialize

▸ **deserialize**(`serialized`, `manager`): [`EShapeActionValueEmitEvent`](EShapeActionValueEmitEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueEmitEventSerialized`](../index.md#eshapeactionvalueemiteventserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueEmitEvent`](EShapeActionValueEmitEvent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-emit-event.ts#L46)
