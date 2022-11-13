[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionValueMisc

# Class: EShapeActionValueMisc

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)<[`EShapeActionValueMiscSubtype`](../index.md#eshapeactionvaluemiscsubtype)\>

  ↳ **`EShapeActionValueMisc`**

  ↳↳ [`EShapeActionValueMiscEmitEvent`](EShapeActionValueMiscEmitEvent.md)

  ↳↳ [`EShapeActionValueMiscHtmlElement`](EShapeActionValueMiscHtmlElement.md)

  ↳↳ [`EShapeActionValueMiscInput`](EShapeActionValueMiscInput.md)

  ↳↳ [`EShapeActionValueMiscWrite`](EShapeActionValueMiscWrite.md)

## Table of contents

### Constructors

- [constructor](EShapeActionValueMisc.md#constructor)

### Properties

- [condition](EShapeActionValueMisc.md#condition)
- [onInputAction](EShapeActionValueMisc.md#oninputaction)
- [subtype](EShapeActionValueMisc.md#subtype)
- [target](EShapeActionValueMisc.md#target)
- [type](EShapeActionValueMisc.md#type)
- [value](EShapeActionValueMisc.md#value)
- [THEME](EShapeActionValueMisc.md#theme)

### Methods

- [getTheme](EShapeActionValueMisc.md#gettheme)
- [isEquals](EShapeActionValueMisc.md#isequals)
- [serialize](EShapeActionValueMisc.md#serialize)
- [toLabel](EShapeActionValueMisc.md#tolabel)
- [toRuntime](EShapeActionValueMisc.md#toruntime)
- [deserialize](EShapeActionValueMisc.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueMisc**(`subtype`, `condition`, `target`, `onInputAction`, `value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subtype` | [`EShapeActionValueMiscSubtype`](../index.md#eshapeactionvaluemiscsubtype) |
| `condition` | `string` |
| `target` | `string` |
| `onInputAction` | [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction-1) |
| `value` | `string` |

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L48)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### onInputAction

• `Readonly` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction-1)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L45)

___

### subtype

• `Readonly` **subtype**: [`EShapeActionValueMiscSubtype`](../index.md#eshapeactionvaluemiscsubtype)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### target

• `Readonly` **target**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L44)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[type](EShapeActionValueSubtyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### value

• `Readonly` **value**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L46)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[THEME](EShapeActionValueSubtyped.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ `Protected` **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[getTheme](EShapeActionValueSubtyped.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L31)

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

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[isEquals](EShapeActionValueSubtyped.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L20)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L83)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toLabel](EShapeActionValueSubtyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L61)

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc.ts#L92)
