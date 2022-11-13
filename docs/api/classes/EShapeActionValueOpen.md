[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionValueOpen

# Class: EShapeActionValueOpen

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)<typeof [`DIAGRAM`](../index.md#diagram) \| typeof [`PAGE`](../index.md#page)\>

  ↳ **`EShapeActionValueOpen`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueOpen.md#constructor)

### Properties

- [condition](EShapeActionValueOpen.md#condition)
- [inNewWindow](EShapeActionValueOpen.md#innewwindow)
- [subtype](EShapeActionValueOpen.md#subtype)
- [target](EShapeActionValueOpen.md#target)
- [type](EShapeActionValueOpen.md#type)
- [THEME](EShapeActionValueOpen.md#theme)

### Methods

- [getTheme](EShapeActionValueOpen.md#gettheme)
- [isEquals](EShapeActionValueOpen.md#isequals)
- [serialize](EShapeActionValueOpen.md#serialize)
- [toLabel](EShapeActionValueOpen.md#tolabel)
- [toRuntime](EShapeActionValueOpen.md#toruntime)
- [deserialize](EShapeActionValueOpen.md#deserialize)
- [inNewWindow](EShapeActionValueOpen.md#innewwindow-1)
- [toSubType](EShapeActionValueOpen.md#tosubtype)

## Constructors

### constructor

• **new EShapeActionValueOpen**(`subtype`, `condition`, `target`, `inNewWindow`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subtype` | ``10`` \| ``11`` |
| `condition` | `string` |
| `target` | `string` |
| `inNewWindow` | `boolean` |

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts#L48)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### inNewWindow

• `Readonly` **inNewWindow**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts#L46)

___

### subtype

• `Readonly` **subtype**: ``10`` \| ``11``

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### target

• `Readonly` **target**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts#L45)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[type](EShapeActionValueSubtyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

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

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[isEquals](EShapeActionValueSubtyped.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts#L59)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts#L77)

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

▸ **toRuntime**(): [`EShapeActionRuntimeOpen`](EShapeActionRuntimeOpen.md)

#### Returns

[`EShapeActionRuntimeOpen`](EShapeActionRuntimeOpen.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts#L68)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueOpen`](EShapeActionValueOpen.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueOpenSerialized`](../index.md#eshapeactionvalueopenserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueOpen`](EShapeActionValueOpen.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts#L86)

___

### inNewWindow

▸ `Static` `Protected` **inNewWindow**(`serialized`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueOpenSerialized`](../index.md#eshapeactionvalueopenserialized) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts#L117)

___

### toSubType

▸ `Static` `Protected` **toSubType**(`serialized`): ``10`` \| ``11``

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueOpenSerialized`](../index.md#eshapeactionvalueopenserialized) |

#### Returns

``10`` \| ``11``

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open.ts#L100)
