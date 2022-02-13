[Winter Cardinal UI - v0.155.0](../index.md) / EShapeActionValueMiscLayerShowHide

# Class: EShapeActionValueMiscLayerShowHide

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)<typeof [`LAYER_SHOW_HIDE`](../index.md#layer_show_hide)\>

  ↳ **`EShapeActionValueMiscLayerShowHide`**

## Table of contents

### Constructors

- [constructor](EShapeActionValueMiscLayerShowHide.md#constructor)

### Properties

- [bringToFront](EShapeActionValueMiscLayerShowHide.md#bringtofront)
- [condition](EShapeActionValueMiscLayerShowHide.md#condition)
- [layers](EShapeActionValueMiscLayerShowHide.md#layers)
- [subtype](EShapeActionValueMiscLayerShowHide.md#subtype)
- [type](EShapeActionValueMiscLayerShowHide.md#type)

### Methods

- [isEquals](EShapeActionValueMiscLayerShowHide.md#isequals)
- [serialize](EShapeActionValueMiscLayerShowHide.md#serialize)
- [serializeLayers](EShapeActionValueMiscLayerShowHide.md#serializelayers)
- [toLabel](EShapeActionValueMiscLayerShowHide.md#tolabel)
- [toRuntime](EShapeActionValueMiscLayerShowHide.md#toruntime)
- [deserialize](EShapeActionValueMiscLayerShowHide.md#deserialize)
- [deserializeLayers](EShapeActionValueMiscLayerShowHide.md#deserializelayers)

## Constructors

### constructor

• **new EShapeActionValueMiscLayerShowHide**(`condition`, `layers`, `bringToFront`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` |
| `layers` | `number`[] |
| `bringToFront` | `boolean` |

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts#L29)

## Properties

### bringToFront

• `Readonly` **bringToFront**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts#L27)

___

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L14)

___

### layers

• `Readonly` **layers**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts#L26)

___

### subtype

• `Readonly` **subtype**: ``9``

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### type

• `Readonly` **type**: [`EShapeActionValueType`](../index.md#eshapeactionvaluetype)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[type](EShapeActionValueSubtyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L20)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts#L39)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts#L48)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toLabel](EShapeActionValueSubtyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L25)

___

### toRuntime

▸ **toRuntime**(): [`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts#L35)

___

### deserialize

▸ `Static` **deserialize**(`serialized`, `manager`): [`EShapeActionValueMiscLayerShowHide`](EShapeActionValueMiscLayerShowHide.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeActionValueMiscLayerShowHideSerialized`](../index.md#eshapeactionvaluemisclayershowhideserialized) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

[`EShapeActionValueMiscLayerShowHide`](EShapeActionValueMiscLayerShowHide.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts#L60)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-misc-layer-show-hide.ts#L70)
