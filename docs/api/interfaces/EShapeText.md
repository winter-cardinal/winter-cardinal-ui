[Winter Cardinal UI - v0.227.0](../index.md) / EShapeText

# Interface: EShapeText

## Hierarchy

- [`EShapeTextLike`](EShapeTextLike.md)

  ↳ **`EShapeText`**

## Implemented by

- [`EShapeTextImpl`](../classes/EShapeTextImpl.md)

## Table of contents

### Properties

- [align](EShapeText.md#align)
- [alpha](EShapeText.md#alpha)
- [atlas](EShapeText.md#atlas)
- [clipping](EShapeText.md#clipping)
- [color](EShapeText.md#color)
- [direction](EShapeText.md#direction)
- [enable](EShapeText.md#enable)
- [family](EShapeText.md#family)
- [offset](EShapeText.md#offset)
- [outline](EShapeText.md#outline)
- [padding](EShapeText.md#padding)
- [size](EShapeText.md#size)
- [spacing](EShapeText.md#spacing)
- [style](EShapeText.md#style)
- [texture](EShapeText.md#texture)
- [value](EShapeText.md#value)
- [weight](EShapeText.md#weight)
- [world](EShapeText.md#world)

### Methods

- [copy](EShapeText.md#copy)
- [deserialize](EShapeText.md#deserialize)
- [serialize](EShapeText.md#serialize)
- [set](EShapeText.md#set)
- [toObject](EShapeText.md#toobject)

## Properties

### align

• **align**: [`EShapeTextAlign`](EShapeTextAlign.md)

#### Overrides

[EShapeTextLike](EShapeTextLike.md).[align](EShapeTextLike.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L72)

___

### alpha

• **alpha**: `number`

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[alpha](EShapeTextLike.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L32)

___

### atlas

• `Optional` **atlas**: [`EShapeTextAtlas`](EShapeTextAtlas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L79)

___

### clipping

• **clipping**: `boolean`

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[clipping](EShapeTextLike.md#clipping)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L43)

___

### color

• **color**: `number`

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[color](EShapeTextLike.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L31)

___

### direction

• **direction**: [`EShapeTextDirection`](../index.md#eshapetextdirection-1)

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[direction](EShapeTextLike.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L41)

___

### enable

• **enable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L70)

___

### family

• **family**: `string`

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[family](EShapeTextLike.md#family)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L33)

___

### offset

• **offset**: [`EShapeTextOffset`](EShapeTextOffset.md)

#### Overrides

[EShapeTextLike](EShapeTextLike.md).[offset](EShapeTextLike.md#offset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L73)

___

### outline

• **outline**: [`EShapeTextOutline`](EShapeTextOutline.md)

#### Overrides

[EShapeTextLike](EShapeTextLike.md).[outline](EShapeTextLike.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L74)

___

### padding

• **padding**: [`EShapeTextOffset`](EShapeTextOffset.md)

#### Overrides

[EShapeTextLike](EShapeTextLike.md).[padding](EShapeTextLike.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L76)

___

### size

• **size**: `number`

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[size](EShapeTextLike.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L34)

___

### spacing

• **spacing**: [`EShapeTextOffset`](EShapeTextOffset.md)

#### Overrides

[EShapeTextLike](EShapeTextLike.md).[spacing](EShapeTextLike.md#spacing)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L75)

___

### style

• **style**: [`EShapeTextStyle`](../index.md#eshapetextstyle-1)

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[style](EShapeTextLike.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L38)

___

### texture

• `Optional` **texture**: `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L78)

___

### value

• **value**: `string`

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[value](EShapeTextLike.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L30)

___

### weight

• **weight**: [`EShapeTextWeight`](../index.md#eshapetextweight-1)

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[weight](EShapeTextLike.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L35)

___

### world

• `Optional` **world**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L80)

## Methods

### copy

▸ **copy**(`target?`): [`EShapeText`](EShapeText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`DeepPartial`](../index.md#deeppartial)<[`EShapeTextLike`](EShapeTextLike.md)\> |

#### Returns

[`EShapeText`](EShapeText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L82)

___

### deserialize

▸ **deserialize**(`target`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](../classes/EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L96)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L95)

___

### set

▸ **set**(`value?`, `color?`, `alpha?`, `family?`, `size?`, `weight?`, `style?`, `direction?`, `clipping?`): [`EShapeText`](EShapeText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `string` |
| `color?` | `number` |
| `alpha?` | `number` |
| `family?` | `string` |
| `size?` | `number` |
| `weight?` | [`EShapeTextWeight`](../index.md#eshapetextweight-1) |
| `style?` | [`EShapeTextStyle`](../index.md#eshapetextstyle-1) |
| `direction?` | [`EShapeTextDirection`](../index.md#eshapetextdirection-1) |
| `clipping?` | `boolean` |

#### Returns

[`EShapeText`](EShapeText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L83)

___

### toObject

▸ **toObject**(): [`EShapeTextLike`](EShapeTextLike.md)

#### Returns

[`EShapeTextLike`](EShapeTextLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L94)
