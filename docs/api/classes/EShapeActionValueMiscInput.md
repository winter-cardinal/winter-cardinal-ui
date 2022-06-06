[Winter Cardinal UI - v0.179.0](../index.md) / EShapeActionValueMiscInput

# Class: EShapeActionValueMiscInput

## Hierarchy

- [`EShapeActionValueMisc`](EShapeActionValueMisc.md)

  ↳ **`EShapeActionValueMiscInput`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueMiscInput.md#constructor)

### Properties

- [condition](EShapeActionValueMiscInput.md#condition)
- [onInputAction](EShapeActionValueMiscInput.md#oninputaction)
- [subtype](EShapeActionValueMiscInput.md#subtype)
- [target](EShapeActionValueMiscInput.md#target)
- [type](EShapeActionValueMiscInput.md#type)
- [value](EShapeActionValueMiscInput.md#value)
- [THEME](EShapeActionValueMiscInput.md#theme)

### Methods

- [getTheme](EShapeActionValueMiscInput.md#gettheme)
- [isEquals](EShapeActionValueMiscInput.md#isequals)
- [serialize](EShapeActionValueMiscInput.md#serialize)
- [toLabel](EShapeActionValueMiscInput.md#tolabel)
- [toRuntime](EShapeActionValueMiscInput.md#toruntime)
- [deserialize](EShapeActionValueMiscInput.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueMiscInput**(`subtype`, `when`, `target`, `onInputAction`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subtype` | ``0`` \| ``1`` \| ``2`` |
| `when` | `string` |
| `target` | `string` |
| `onInputAction` | [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction) |

#### Overrides

[EShapeActionValueMisc](EShapeActionValueMisc.md).[constructor](EShapeActionValueMisc.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-input.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-input.ts#L11)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[condition](EShapeActionValueMisc.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### onInputAction

• `Readonly` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction)

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[onInputAction](EShapeActionValueMisc.md#oninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L45)

___

### subtype

• `Readonly` **subtype**: [`EShapeActionValueMiscSubtype`](../index.md#eshapeactionvaluemiscsubtype)

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[subtype](EShapeActionValueMisc.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### target

• `Readonly` **target**: `string`

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[target](EShapeActionValueMisc.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L44)

___

### type

• `Readonly` **type**: [`EShapeActionValueType`](../index.md#eshapeactionvaluetype)

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[type](EShapeActionValueMisc.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### value

• `Readonly` **value**: `string`

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[value](EShapeActionValueMisc.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L46)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[THEME](EShapeActionValueMisc.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ `Protected` **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[getTheme](EShapeActionValueMisc.md#gettheme)

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

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[isEquals](EShapeActionValueMisc.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L20)

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

[EShapeActionValueMisc](EShapeActionValueMisc.md).[serialize](EShapeActionValueMisc.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L83)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[toLabel](EShapeActionValueMisc.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[toRuntime](EShapeActionValueMisc.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L61)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueMisc`](EShapeActionValueMisc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueMiscSerialized`](../index.md#eshapeactionvaluemiscserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueMisc`](EShapeActionValueMisc.md)

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[deserialize](EShapeActionValueMisc.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L92)
