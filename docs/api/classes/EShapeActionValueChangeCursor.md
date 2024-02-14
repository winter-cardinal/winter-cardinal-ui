[Winter Cardinal UI - v0.407.0](../index.md) / EShapeActionValueChangeCursor

# Class: EShapeActionValueChangeCursor

## Hierarchy

- [`EShapeActionValueBase`](EShapeActionValueBase.md)

  ↳ **`EShapeActionValueChangeCursor`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueChangeCursor.md#constructor)

### Properties

- [condition](EShapeActionValueChangeCursor.md#condition)
- [name](EShapeActionValueChangeCursor.md#name)
- [type](EShapeActionValueChangeCursor.md#type)
- [THEME](EShapeActionValueChangeCursor.md#theme)

### Methods

- [getTheme](EShapeActionValueChangeCursor.md#gettheme)
- [isEquals](EShapeActionValueChangeCursor.md#isequals)
- [serialize](EShapeActionValueChangeCursor.md#serialize)
- [toLabel](EShapeActionValueChangeCursor.md#tolabel)
- [toRuntime](EShapeActionValueChangeCursor.md#toruntime)
- [deserialize](EShapeActionValueChangeCursor.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueChangeCursor**(`condition`, `name`): [`EShapeActionValueChangeCursor`](EShapeActionValueChangeCursor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` |
| `name` | `string` |

#### Returns

[`EShapeActionValueChangeCursor`](EShapeActionValueChangeCursor.md)

#### Overrides

[EShapeActionValueBase](EShapeActionValueBase.md).[constructor](EShapeActionValueBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-cursor.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-cursor.ts#L23)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[condition](EShapeActionValueBase.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-cursor.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-cursor.ts#L21)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[type](EShapeActionValueBase.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[THEME](EShapeActionValueBase.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[getTheme](EShapeActionValueBase.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-cursor.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-cursor.ts#L28)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-cursor.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-cursor.ts#L40)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueBase](EShapeActionValueBase.md).[toLabel](EShapeActionValueBase.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntimeChangeCursor`](EShapeActionRuntimeChangeCursor.md)

#### Returns

[`EShapeActionRuntimeChangeCursor`](EShapeActionRuntimeChangeCursor.md)

#### Overrides

[EShapeActionValueBase](EShapeActionValueBase.md).[toRuntime](EShapeActionValueBase.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-cursor.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-cursor.ts#L36)

___

### deserialize

▸ **deserialize**(`serialized`, `manager`): [`EShapeActionValueChangeCursor`](EShapeActionValueChangeCursor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueChangeCursorSerialized`](../index.md#eshapeactionvaluechangecursorserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueChangeCursor`](EShapeActionValueChangeCursor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-cursor.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-change-cursor.ts#L46)
