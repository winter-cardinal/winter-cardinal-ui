[Winter Cardinal UI - v0.457.0](../index.md) / EShapeActionValueOpenExtension

# Class: EShapeActionValueOpenExtension

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)\<`number`\>

  ↳ **`EShapeActionValueOpenExtension`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueOpenExtension.md#constructor)

### Properties

- [condition](EShapeActionValueOpenExtension.md#condition)
- [inNewWindow](EShapeActionValueOpenExtension.md#innewwindow)
- [subtype](EShapeActionValueOpenExtension.md#subtype)
- [target](EShapeActionValueOpenExtension.md#target)
- [type](EShapeActionValueOpenExtension.md#type)
- [THEME](EShapeActionValueOpenExtension.md#theme)

### Methods

- [getTheme](EShapeActionValueOpenExtension.md#gettheme)
- [isEquals](EShapeActionValueOpenExtension.md#isequals)
- [serialize](EShapeActionValueOpenExtension.md#serialize)
- [toLabel](EShapeActionValueOpenExtension.md#tolabel)
- [toRuntime](EShapeActionValueOpenExtension.md#toruntime)
- [deserialize](EShapeActionValueOpenExtension.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueOpenExtension**(`subtype`, `condition`, `target`, `inNewWindow`): [`EShapeActionValueOpenExtension`](EShapeActionValueOpenExtension.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subtype` | `number` |
| `condition` | `string` |
| `target` | `string` |
| `inNewWindow` | `boolean` |

#### Returns

[`EShapeActionValueOpenExtension`](EShapeActionValueOpenExtension.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts#L20)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### inNewWindow

• `Readonly` **inNewWindow**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts#L18)

___

### subtype

• `Readonly` **subtype**: `number`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### target

• `Readonly` **target**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts#L17)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[type](EShapeActionValueSubtyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[THEME](EShapeActionValueSubtyped.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[getTheme](EShapeActionValueSubtyped.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts#L26)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts#L45)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toLabel](EShapeActionValueSubtyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts#L39)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntimeOpen`](EShapeActionRuntimeOpen.md)

#### Returns

[`EShapeActionRuntimeOpen`](EShapeActionRuntimeOpen.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts#L35)

___

### deserialize

▸ **deserialize**(`serialized`, `manager`): [`EShapeActionValueOpenExtension`](EShapeActionValueOpenExtension.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueOpenSerializedNew`](../index.md#eshapeactionvalueopenserializednew) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueOpenExtension`](EShapeActionValueOpenExtension.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-open-extension.ts#L54)
