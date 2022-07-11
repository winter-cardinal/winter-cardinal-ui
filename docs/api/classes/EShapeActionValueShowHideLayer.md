[Winter Cardinal UI - v0.199.0](../index.md) / EShapeActionValueShowHideLayer

# Class: EShapeActionValueShowHideLayer

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)<typeof [`LAYER`](../index.md#layer)\>

  ↳ **`EShapeActionValueShowHideLayer`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueShowHideLayer.md#constructor)

### Properties

- [bringToFront](EShapeActionValueShowHideLayer.md#bringtofront)
- [condition](EShapeActionValueShowHideLayer.md#condition)
- [layers](EShapeActionValueShowHideLayer.md#layers)
- [subtype](EShapeActionValueShowHideLayer.md#subtype)
- [type](EShapeActionValueShowHideLayer.md#type)
- [THEME](EShapeActionValueShowHideLayer.md#theme)

### Methods

- [getTheme](EShapeActionValueShowHideLayer.md#gettheme)
- [isEquals](EShapeActionValueShowHideLayer.md#isequals)
- [serialize](EShapeActionValueShowHideLayer.md#serialize)
- [serializeLayers](EShapeActionValueShowHideLayer.md#serializelayers)
- [toLabel](EShapeActionValueShowHideLayer.md#tolabel)
- [toRuntime](EShapeActionValueShowHideLayer.md#toruntime)
- [deserialize](EShapeActionValueShowHideLayer.md#deserialize)
- [deserializeLayers](EShapeActionValueShowHideLayer.md#deserializelayers)

## Constructors

### constructor

• **new EShapeActionValueShowHideLayer**(`condition`, `layers`, `bringToFront`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` |
| `layers` | `number`[] |
| `bringToFront` | `boolean` |

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts#L29)

## Properties

### bringToFront

• `Readonly` **bringToFront**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts#L27)

___

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L16)

___

### layers

• `Readonly` **layers**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts#L26)

___

### subtype

• `Readonly` **subtype**: ``3``

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[type](EShapeActionValueSubtyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L15)

___

### THEME

▪ `Static` `Protected` `Optional` **THEME**: [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[THEME](EShapeActionValueSubtyped.md#theme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### getTheme

▸ `Protected` **getTheme**(): [`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Returns

[`EThemeShapeActionValue`](../interfaces/EThemeShapeActionValue.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[getTheme](EShapeActionValueSubtyped.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L20)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts#L39)

___

### serializeLayers

▸ `Protected` **serializeLayers**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts#L48)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toLabel](EShapeActionValueSubtyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L27)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts#L35)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueShowHideLayer`](EShapeActionValueShowHideLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueShowHideLayerSerialized`](../index.md#eshapeactionvalueshowhidelayerserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueShowHideLayer`](EShapeActionValueShowHideLayer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts#L60)

___

### deserializeLayers

▸ `Static` **deserializeLayers**(`target`, `manager`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-show-hide-layer.ts#L70)
