[Winter Cardinal UI - v0.442.0](../index.md) / EShapeActionValueMiscWrite

# Class: EShapeActionValueMiscWrite

## Hierarchy

- [`EShapeActionValueMisc`](EShapeActionValueMisc.md)

  ↳ **`EShapeActionValueMiscWrite`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueMiscWrite.md#constructor)

### Properties

- [condition](EShapeActionValueMiscWrite.md#condition)
- [onInputAction](EShapeActionValueMiscWrite.md#oninputaction)
- [subtype](EShapeActionValueMiscWrite.md#subtype)
- [target](EShapeActionValueMiscWrite.md#target)
- [type](EShapeActionValueMiscWrite.md#type)
- [value](EShapeActionValueMiscWrite.md#value)
- [THEME](EShapeActionValueMiscWrite.md#theme)

### Methods

- [getTheme](EShapeActionValueMiscWrite.md#gettheme)
- [isEquals](EShapeActionValueMiscWrite.md#isequals)
- [serialize](EShapeActionValueMiscWrite.md#serialize)
- [toLabel](EShapeActionValueMiscWrite.md#tolabel)
- [toRuntime](EShapeActionValueMiscWrite.md#toruntime)
- [deserialize](EShapeActionValueMiscWrite.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueMiscWrite**(`subtype`, `condition`, `target`, `value`): [`EShapeActionValueMiscWrite`](EShapeActionValueMiscWrite.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subtype` | ``4`` \| ``5`` \| ``6`` |
| `condition` | `string` |
| `target` | `string` |
| `value` | `string` |

#### Returns

[`EShapeActionValueMiscWrite`](EShapeActionValueMiscWrite.md)

#### Overrides

[EShapeActionValueMisc](EShapeActionValueMisc.md).[constructor](EShapeActionValueMisc.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-write.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-write.ts#L11)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[condition](EShapeActionValueMisc.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### onInputAction

• `Readonly` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction)

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[onInputAction](EShapeActionValueMisc.md#oninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L45)

___

### subtype

• `Readonly` **subtype**: [`EShapeActionValueMiscSubtype`](../index.md#eshapeactionvaluemiscsubtype)

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[subtype](EShapeActionValueMisc.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### target

• `Readonly` **target**: `string`

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[target](EShapeActionValueMisc.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L44)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[type](EShapeActionValueMisc.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### value

• `Readonly` **value**: `string`

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[value](EShapeActionValueMisc.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L46)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[THEME](EShapeActionValueMisc.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[getTheme](EShapeActionValueMisc.md#gettheme)

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

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[isEquals](EShapeActionValueMisc.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L20)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L83)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[toLabel](EShapeActionValueMisc.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md)

#### Inherited from

[EShapeActionValueMisc](EShapeActionValueMisc.md).[toRuntime](EShapeActionValueMisc.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L61)

___

### deserialize

▸ **deserialize**(`serialized`, `manager`): [`EShapeActionValueMisc`](EShapeActionValueMisc.md)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L92)
