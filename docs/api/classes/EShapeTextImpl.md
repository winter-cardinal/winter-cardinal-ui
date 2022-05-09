[Winter Cardinal UI - v0.164.0](../index.md) / EShapeTextImpl

# Class: EShapeTextImpl

## Implements

- [`EShapeText`](../interfaces/EShapeText.md)

## Table of contents

### Constructors

- [constructor](EShapeTextImpl.md#constructor)

### Properties

- [\_alpha](EShapeTextImpl.md#_alpha)
- [\_clipping](EShapeTextImpl.md#_clipping)
- [\_color](EShapeTextImpl.md#_color)
- [\_direction](EShapeTextImpl.md#_direction)
- [\_enable](EShapeTextImpl.md#_enable)
- [\_family](EShapeTextImpl.md#_family)
- [\_parent](EShapeTextImpl.md#_parent)
- [\_size](EShapeTextImpl.md#_size)
- [\_style](EShapeTextImpl.md#_style)
- [\_value](EShapeTextImpl.md#_value)
- [\_weight](EShapeTextImpl.md#_weight)
- [align](EShapeTextImpl.md#align)
- [atlas](EShapeTextImpl.md#atlas)
- [offset](EShapeTextImpl.md#offset)
- [outline](EShapeTextImpl.md#outline)
- [padding](EShapeTextImpl.md#padding)
- [spacing](EShapeTextImpl.md#spacing)
- [texture](EShapeTextImpl.md#texture)
- [world](EShapeTextImpl.md#world)

### Accessors

- [alpha](EShapeTextImpl.md#alpha)
- [clipping](EShapeTextImpl.md#clipping)
- [color](EShapeTextImpl.md#color)
- [direction](EShapeTextImpl.md#direction)
- [enable](EShapeTextImpl.md#enable)
- [family](EShapeTextImpl.md#family)
- [size](EShapeTextImpl.md#size)
- [style](EShapeTextImpl.md#style)
- [value](EShapeTextImpl.md#value)
- [weight](EShapeTextImpl.md#weight)

### Methods

- [copy](EShapeTextImpl.md#copy)
- [deserialize](EShapeTextImpl.md#deserialize)
- [serialize](EShapeTextImpl.md#serialize)
- [set](EShapeTextImpl.md#set)
- [toObject](EShapeTextImpl.md#toobject)

## Constructors

### constructor

• **new EShapeTextImpl**(`parent`, `value`, `color`, `alpha`, `family`, `size`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeTextImplParent`](../interfaces/EShapeTextImplParent.md) |
| `value` | `string` |
| `color` | `number` |
| `alpha` | `number` |
| `family` | `string` |
| `size` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L51)

## Properties

### \_alpha

• `Protected` **\_alpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L35)

___

### \_clipping

• `Protected` **\_clipping**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L45)

___

### \_color

• `Protected` **\_color**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L34)

___

### \_direction

• `Protected` **\_direction**: [`EShapeTextDirection`](../index.md#eshapetextdirection)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L43)

___

### \_enable

• `Protected` **\_enable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L31)

___

### \_family

• `Protected` **\_family**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L33)

___

### \_parent

• `Protected` **\_parent**: [`EShapeTextImplParent`](../interfaces/EShapeTextImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L30)

___

### \_size

• `Protected` **\_size**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L36)

___

### \_style

• `Protected` **\_style**: [`EShapeTextStyle`](../index.md#eshapetextstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L40)

___

### \_value

• `Protected` **\_value**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L32)

___

### \_weight

• `Protected` **\_weight**: [`EShapeTextWeight`](../index.md#eshapetextweight)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L37)

___

### align

• `Readonly` **align**: [`EShapeTextAlign`](../interfaces/EShapeTextAlign.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[align](../interfaces/EShapeText.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L38)

___

### atlas

• `Optional` **atlas**: [`EShapeTextAtlas`](../interfaces/EShapeTextAtlas.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[atlas](../interfaces/EShapeText.md#atlas)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L48)

___

### offset

• `Readonly` **offset**: [`EShapeTextOffset`](../interfaces/EShapeTextOffset.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[offset](../interfaces/EShapeText.md#offset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L39)

___

### outline

• `Readonly` **outline**: [`EShapeTextOutline`](../interfaces/EShapeTextOutline.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[outline](../interfaces/EShapeText.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L41)

___

### padding

• `Readonly` **padding**: [`EShapeTextOffset`](../interfaces/EShapeTextOffset.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[padding](../interfaces/EShapeText.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L44)

___

### spacing

• `Readonly` **spacing**: [`EShapeTextOffset`](../interfaces/EShapeTextOffset.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[spacing](../interfaces/EShapeText.md#spacing)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L42)

___

### texture

• `Optional` **texture**: `Texture`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[texture](../interfaces/EShapeText.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L47)

___

### world

• `Optional` **world**: `number`[]

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[world](../interfaces/EShapeText.md#world)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L49)

## Accessors

### alpha

• `get` **alpha**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[alpha](../interfaces/EShapeText.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L154)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[alpha](../interfaces/EShapeText.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L158)

___

### clipping

• `get` **clipping**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[clipping](../interfaces/EShapeText.md#clipping)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L209)

• `set` **clipping**(`clipping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipping` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[clipping](../interfaces/EShapeText.md#clipping)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:213](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L213)

___

### color

• `get` **color**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[color](../interfaces/EShapeText.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L143)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[color](../interfaces/EShapeText.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L147)

___

### direction

• `get` **direction**(): [`EShapeTextDirection`](../index.md#eshapetextdirection)

#### Returns

[`EShapeTextDirection`](../index.md#eshapetextdirection)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[direction](../interfaces/EShapeText.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L198)

• `set` **direction**(`direction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [`EShapeTextDirection`](../index.md#eshapetextdirection) |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[direction](../interfaces/EShapeText.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L202)

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[enable](../interfaces/EShapeText.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L81)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[enable](../interfaces/EShapeText.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L85)

___

### family

• `get` **family**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[family](../interfaces/EShapeText.md#family)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L132)

• `set` **family**(`family`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `family` | `string` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[family](../interfaces/EShapeText.md#family)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L136)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[size](../interfaces/EShapeText.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L165)

• `set` **size**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[size](../interfaces/EShapeText.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L169)

___

### style

• `get` **style**(): [`EShapeTextStyle`](../index.md#eshapetextstyle)

#### Returns

[`EShapeTextStyle`](../index.md#eshapetextstyle)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[style](../interfaces/EShapeText.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L187)

• `set` **style**(`style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`EShapeTextStyle`](../index.md#eshapetextstyle) |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[style](../interfaces/EShapeText.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L191)

___

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[value](../interfaces/EShapeText.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L92)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[value](../interfaces/EShapeText.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L96)

___

### weight

• `get` **weight**(): [`EShapeTextWeight`](../index.md#eshapetextweight)

#### Returns

[`EShapeTextWeight`](../index.md#eshapetextweight)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[weight](../interfaces/EShapeText.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L176)

• `set` **weight**(`weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `weight` | [`EShapeTextWeight`](../index.md#eshapetextweight) |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[weight](../interfaces/EShapeText.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L180)

## Methods

### copy

▸ **copy**(`target?`): [`EShapeTextImpl`](EShapeTextImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`DeepPartial`](../index.md#deeppartial)<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\> |

#### Returns

[`EShapeTextImpl`](EShapeTextImpl.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[copy](../interfaces/EShapeText.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L220)

___

### deserialize

▸ **deserialize**(`target`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[deserialize](../interfaces/EShapeText.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:344](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L344)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[serialize](../interfaces/EShapeText.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:329](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L329)

___

### set

▸ **set**(`value?`, `color?`, `alpha?`, `family?`, `size?`, `weight?`, `style?`, `direction?`, `clipping?`): [`EShapeTextImpl`](EShapeTextImpl.md)

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

#### Returns

[`EShapeTextImpl`](EShapeTextImpl.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[set](../interfaces/EShapeText.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L242)

___

### toObject

▸ **toObject**(): [`EShapeTextLike`](../interfaces/EShapeTextLike.md)

#### Returns

[`EShapeTextLike`](../interfaces/EShapeTextLike.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[toObject](../interfaces/EShapeText.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:310](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L310)
