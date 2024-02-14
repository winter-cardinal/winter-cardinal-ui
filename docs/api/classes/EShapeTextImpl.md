[Winter Cardinal UI - v0.407.0](../index.md) / EShapeTextImpl

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
- [\_fitting](EShapeTextImpl.md#_fitting)
- [\_length](EShapeTextImpl.md#_length)
- [\_parent](EShapeTextImpl.md#_parent)
- [\_plength](EShapeTextImpl.md#_plength)
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
- [fitting](EShapeTextImpl.md#fitting)
- [length](EShapeTextImpl.md#length)
- [plength](EShapeTextImpl.md#plength)
- [size](EShapeTextImpl.md#size)
- [style](EShapeTextImpl.md#style)
- [value](EShapeTextImpl.md#value)
- [weight](EShapeTextImpl.md#weight)

### Methods

- [copy](EShapeTextImpl.md#copy)
- [deserialize](EShapeTextImpl.md#deserialize)
- [isCompatible](EShapeTextImpl.md#iscompatible)
- [serialize](EShapeTextImpl.md#serialize)
- [set](EShapeTextImpl.md#set)
- [toObject](EShapeTextImpl.md#toobject)

## Constructors

### constructor

• **new EShapeTextImpl**(`parent`, `value`, `color`, `alpha`, `family`, `size`): [`EShapeTextImpl`](EShapeTextImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeTextImplParent`](../interfaces/EShapeTextImplParent.md) |
| `value` | `string` |
| `color` | `number` |
| `alpha` | `number` |
| `family` | `string` |
| `size` | `number` |

#### Returns

[`EShapeTextImpl`](EShapeTextImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L54)

## Properties

### \_alpha

• `Protected` **\_alpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L37)

___

### \_clipping

• `Protected` **\_clipping**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L47)

___

### \_color

• `Protected` **\_color**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L36)

___

### \_direction

• `Protected` **\_direction**: [`EShapeTextDirection`](../index.md#eshapetextdirection-1)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L45)

___

### \_enable

• `Protected` **\_enable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L31)

___

### \_family

• `Protected` **\_family**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L35)

___

### \_fitting

• `Protected` **\_fitting**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L48)

___

### \_length

• `Protected` **\_length**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L33)

___

### \_parent

• `Protected` **\_parent**: [`EShapeTextImplParent`](../interfaces/EShapeTextImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L30)

___

### \_plength

• `Protected` **\_plength**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L34)

___

### \_size

• `Protected` **\_size**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L38)

___

### \_style

• `Protected` **\_style**: [`EShapeTextStyle`](../index.md#eshapetextstyle-1)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L42)

___

### \_value

• `Protected` **\_value**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L32)

___

### \_weight

• `Protected` **\_weight**: [`EShapeTextWeight`](../index.md#eshapetextweight-1)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L39)

___

### align

• `Readonly` **align**: [`EShapeTextAlign`](../interfaces/EShapeTextAlign.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[align](../interfaces/EShapeText.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L40)

___

### atlas

• `Optional` **atlas**: [`EShapeTextAtlas`](../interfaces/EShapeTextAtlas.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[atlas](../interfaces/EShapeText.md#atlas)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L51)

___

### offset

• `Readonly` **offset**: [`EShapeTextOffset`](../interfaces/EShapeTextOffset.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[offset](../interfaces/EShapeText.md#offset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L41)

___

### outline

• `Readonly` **outline**: [`EShapeTextOutline`](../interfaces/EShapeTextOutline.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[outline](../interfaces/EShapeText.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L43)

___

### padding

• `Readonly` **padding**: [`EShapeTextOffset`](../interfaces/EShapeTextOffset.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[padding](../interfaces/EShapeText.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L46)

___

### spacing

• `Readonly` **spacing**: [`EShapeTextOffset`](../interfaces/EShapeTextOffset.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[spacing](../interfaces/EShapeText.md#spacing)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L44)

___

### texture

• `Optional` **texture**: `Texture`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[texture](../interfaces/EShapeText.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L50)

___

### world

• `Optional` **world**: `number`[]

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[world](../interfaces/EShapeText.md#world)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L52)

## Accessors

### alpha

• `get` **alpha**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[alpha](../interfaces/EShapeText.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L173)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L177)

___

### clipping

• `get` **clipping**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[clipping](../interfaces/EShapeText.md#clipping)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L228)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L232)

___

### color

• `get` **color**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[color](../interfaces/EShapeText.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L162)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L166)

___

### direction

• `get` **direction**(): [`EShapeTextDirection`](../index.md#eshapetextdirection-1)

#### Returns

[`EShapeTextDirection`](../index.md#eshapetextdirection-1)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[direction](../interfaces/EShapeText.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:217](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L217)

• `set` **direction**(`direction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [`EShapeTextDirection`](../index.md#eshapetextdirection-1) |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[direction](../interfaces/EShapeText.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:221](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L221)

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[enable](../interfaces/EShapeText.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L86)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L90)

___

### family

• `get` **family**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[family](../interfaces/EShapeText.md#family)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L151)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L155)

___

### fitting

• `get` **fitting**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[fitting](../interfaces/EShapeText.md#fitting)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:239](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L239)

• `set` **fitting**(`fitting`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fitting` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[fitting](../interfaces/EShapeText.md#fitting)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:243](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L243)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[length](../interfaces/EShapeText.md#length)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L143)

___

### plength

• `get` **plength**(): `number`

Peak length

#### Returns

`number`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[plength](../interfaces/EShapeText.md#plength)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L147)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[size](../interfaces/EShapeText.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L184)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L188)

___

### style

• `get` **style**(): [`EShapeTextStyle`](../index.md#eshapetextstyle-1)

#### Returns

[`EShapeTextStyle`](../index.md#eshapetextstyle-1)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[style](../interfaces/EShapeText.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L206)

• `set` **style**(`style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`EShapeTextStyle`](../index.md#eshapetextstyle-1) |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[style](../interfaces/EShapeText.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L210)

___

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[value](../interfaces/EShapeText.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L97)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L101)

___

### weight

• `get` **weight**(): [`EShapeTextWeight`](../index.md#eshapetextweight-1)

#### Returns

[`EShapeTextWeight`](../index.md#eshapetextweight-1)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[weight](../interfaces/EShapeText.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L195)

• `set` **weight**(`weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `weight` | [`EShapeTextWeight`](../index.md#eshapetextweight-1) |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[weight](../interfaces/EShapeText.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L199)

## Methods

### copy

▸ **copy**(`target?`): [`EShapeTextImpl`](EShapeTextImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`DeepPartial`](../index.md#deeppartial)\<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\> |

#### Returns

[`EShapeTextImpl`](EShapeTextImpl.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[copy](../interfaces/EShapeText.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:250](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L250)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L394)

___

### isCompatible

▸ **isCompatible**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L118)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L377)

___

### set

▸ **set**(`value?`, `color?`, `alpha?`, `family?`, `size?`, `weight?`, `style?`, `direction?`, `clipping?`, `fitting?`): [`EShapeTextImpl`](EShapeTextImpl.md)

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
| `fitting?` | `boolean` |

#### Returns

[`EShapeTextImpl`](EShapeTextImpl.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[set](../interfaces/EShapeText.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:273](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L273)

___

### toObject

▸ **toObject**(): [`EShapeTextLike`](../interfaces/EShapeTextLike.md)

#### Returns

[`EShapeTextLike`](../interfaces/EShapeTextLike.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[toObject](../interfaces/EShapeText.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-text-impl.ts#L357)
