[Winter Cardinal UI - v0.457.0](../index.md) / EShapeText

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
- [characters](EShapeText.md#characters)
- [clipping](EShapeText.md#clipping)
- [color](EShapeText.md#color)
- [direction](EShapeText.md#direction)
- [enable](EShapeText.md#enable)
- [family](EShapeText.md#family)
- [fitting](EShapeText.md#fitting)
- [length](EShapeText.md#length)
- [nacharacters](EShapeText.md#nacharacters)
- [offset](EShapeText.md#offset)
- [outline](EShapeText.md#outline)
- [padding](EShapeText.md#padding)
- [plength](EShapeText.md#plength)
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

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L73)

___

### alpha

• **alpha**: `number`

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[alpha](EShapeTextLike.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L32)

___

### atlas

• `Optional` **atlas**: [`EShapeTextAtlas`](EShapeTextAtlas.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L80)

___

### characters

• **characters**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L81)

___

### clipping

• **clipping**: `boolean`

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[clipping](EShapeTextLike.md#clipping)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L43)

___

### color

• **color**: `number`

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[color](EShapeTextLike.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L31)

___

### direction

• **direction**: [`EShapeTextDirection`](../index.md#eshapetextdirection)

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[direction](EShapeTextLike.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L41)

___

### enable

• **enable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L71)

___

### family

• **family**: `string`

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[family](EShapeTextLike.md#family)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L33)

___

### fitting

• **fitting**: `boolean`

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[fitting](EShapeTextLike.md#fitting)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L44)

___

### length

• `Readonly` **length**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L85)

___

### nacharacters

• **nacharacters**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L82)

___

### offset

• **offset**: [`EShapeTextOffset`](EShapeTextOffset.md)

#### Overrides

[EShapeTextLike](EShapeTextLike.md).[offset](EShapeTextLike.md#offset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L74)

___

### outline

• **outline**: [`EShapeTextOutline`](EShapeTextOutline.md)

#### Overrides

[EShapeTextLike](EShapeTextLike.md).[outline](EShapeTextLike.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L75)

___

### padding

• **padding**: [`EShapeTextOffset`](EShapeTextOffset.md)

#### Overrides

[EShapeTextLike](EShapeTextLike.md).[padding](EShapeTextLike.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L77)

___

### plength

• `Readonly` **plength**: `number`

Peak length

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L87)

___

### size

• **size**: `number`

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[size](EShapeTextLike.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L34)

___

### spacing

• **spacing**: [`EShapeTextOffset`](EShapeTextOffset.md)

#### Overrides

[EShapeTextLike](EShapeTextLike.md).[spacing](EShapeTextLike.md#spacing)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L76)

___

### style

• **style**: [`EShapeTextStyle`](../index.md#eshapetextstyle)

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[style](EShapeTextLike.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L38)

___

### texture

• `Optional` **texture**: `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L79)

___

### value

• **value**: `string`

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[value](EShapeTextLike.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L30)

___

### weight

• **weight**: [`EShapeTextWeight`](../index.md#eshapetextweight)

#### Inherited from

[EShapeTextLike](EShapeTextLike.md).[weight](EShapeTextLike.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L35)

___

### world

• `Optional` **world**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L83)

## Methods

### copy

▸ **copy**(`target?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`DeepPartial`](../index.md#deeppartial)\<[`EShapeTextLike`](EShapeTextLike.md)\> |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L89)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L104)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L103)

___

### set

▸ **set**(`value?`, `color?`, `alpha?`, `family?`, `size?`, `weight?`, `style?`, `direction?`, `clipping?`, `fitting?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `string` |
| `color?` | `number` |
| `alpha?` | `number` |
| `family?` | `string` |
| `size?` | `number` |
| `weight?` | [`EShapeTextWeight`](../index.md#eshapetextweight) |
| `style?` | [`EShapeTextStyle`](../index.md#eshapetextstyle) |
| `direction?` | [`EShapeTextDirection`](../index.md#eshapetextdirection) |
| `clipping?` | `boolean` |
| `fitting?` | `boolean` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L90)

___

### toObject

▸ **toObject**(): [`EShapeTextLike`](EShapeTextLike.md)

#### Returns

[`EShapeTextLike`](EShapeTextLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/e-shape-text.ts#L102)
