[Winter Cardinal UI - v0.414.0](../index.md) / EShapeActionValueTransformResize

# Class: EShapeActionValueTransformResize

## Hierarchy

- [`EShapeActionValueOpetyped`](EShapeActionValueOpetyped.md)\<[`EShapeActionValueTransformType`](../index.md#eshapeactionvaluetransformtype), [`EShapeActionValueTransformResizeType`](../index.md#eshapeactionvaluetransformresizetype)\>

  ↳ **`EShapeActionValueTransformResize`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueTransformResize.md#constructor)

### Properties

- [amount](EShapeActionValueTransformResize.md#amount)
- [condition](EShapeActionValueTransformResize.md#condition)
- [opetype](EShapeActionValueTransformResize.md#opetype)
- [originX](EShapeActionValueTransformResize.md#originx)
- [originY](EShapeActionValueTransformResize.md#originy)
- [subtype](EShapeActionValueTransformResize.md#subtype)
- [type](EShapeActionValueTransformResize.md#type)
- [THEME](EShapeActionValueTransformResize.md#theme)

### Methods

- [getTheme](EShapeActionValueTransformResize.md#gettheme)
- [isEquals](EShapeActionValueTransformResize.md#isequals)
- [serialize](EShapeActionValueTransformResize.md#serialize)
- [toLabel](EShapeActionValueTransformResize.md#tolabel)
- [toRuntime](EShapeActionValueTransformResize.md#toruntime)
- [deserialize](EShapeActionValueTransformResize.md#deserialize)

## Constructors

### constructor

• **new EShapeActionValueTransformResize**(`opetype`, `condition`, `originX`, `originY`, `amount`): [`EShapeActionValueTransformResize`](EShapeActionValueTransformResize.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opetype` | [`EShapeActionValueTransformResizeType`](../index.md#eshapeactionvaluetransformresizetype) |
| `condition` | `string` |
| `originX` | `number` |
| `originY` | `number` |
| `amount` | `string` |

#### Returns

[`EShapeActionValueTransformResize`](EShapeActionValueTransformResize.md)

#### Overrides

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[constructor](EShapeActionValueOpetyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts#L40)

## Properties

### amount

• `Readonly` **amount**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts#L38)

___

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[condition](EShapeActionValueOpetyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### opetype

• `Readonly` **opetype**: [`EShapeActionValueTransformResizeType`](../index.md#eshapeactionvaluetransformresizetype)

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[opetype](EShapeActionValueOpetyped.md#opetype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-opetyped.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-opetyped.ts#L14)

___

### originX

• `Readonly` **originX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts#L36)

___

### originY

• `Readonly` **originY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts#L37)

___

### subtype

• `Readonly` **subtype**: [`EShapeActionValueTransformType`](../index.md#eshapeactionvaluetransformtype)

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[subtype](EShapeActionValueOpetyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[type](EShapeActionValueOpetyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[THEME](EShapeActionValueOpetyped.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[getTheme](EShapeActionValueOpetyped.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L31)

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

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[isEquals](EShapeActionValueOpetyped.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts#L58)

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

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[serialize](EShapeActionValueOpetyped.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts#L85)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[toLabel](EShapeActionValueOpetyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntimeTransformResize`](EShapeActionRuntimeTransformResize.md)

#### Returns

[`EShapeActionRuntimeTransformResize`](EShapeActionRuntimeTransformResize.md)

#### Overrides

[EShapeActionValueOpetyped](EShapeActionValueOpetyped.md).[toRuntime](EShapeActionValueOpetyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts#L68)

___

### deserialize

▸ **deserialize**(`serialized`, `manager`): [`EShapeActionValueTransformResize`](EShapeActionValueTransformResize.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueTransformResizeSerialized`](../index.md#eshapeactionvaluetransformresizeserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueTransformResize`](EShapeActionValueTransformResize.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-transform-resize.ts#L93)
