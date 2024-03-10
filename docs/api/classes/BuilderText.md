[Winter Cardinal UI - v0.414.0](../index.md) / BuilderText

# Class: BuilderText

## Implements

- [`Builder`](../interfaces/Builder.md)

## Table of contents

### Constructors

- [constructor](BuilderText.md#constructor)

### Properties

- [alignHorizontal](BuilderText.md#alignhorizontal)
- [alignVertical](BuilderText.md#alignvertical)
- [alpha](BuilderText.md#alpha)
- [buffer](BuilderText.md#buffer)
- [clipping](BuilderText.md#clipping)
- [color](BuilderText.md#color)
- [direction](BuilderText.md#direction)
- [family](BuilderText.md#family)
- [fitting](BuilderText.md#fitting)
- [indexCount](BuilderText.md#indexcount)
- [indexOffset](BuilderText.md#indexoffset)
- [inited](BuilderText.md#inited)
- [offsetHorizontal](BuilderText.md#offsethorizontal)
- [offsetVertical](BuilderText.md#offsetvertical)
- [outlineAlpha](BuilderText.md#outlinealpha)
- [outlineColor](BuilderText.md#outlinecolor)
- [outlineWidth](BuilderText.md#outlinewidth)
- [paddingHorizontal](BuilderText.md#paddinghorizontal)
- [paddingVertical](BuilderText.md#paddingvertical)
- [scaleX](BuilderText.md#scalex)
- [scaleY](BuilderText.md#scaley)
- [size](BuilderText.md#size)
- [sizeX](BuilderText.md#sizex)
- [sizeY](BuilderText.md#sizey)
- [spacingHorizontal](BuilderText.md#spacinghorizontal)
- [spacingVertical](BuilderText.md#spacingvertical)
- [style](BuilderText.md#style)
- [texture](BuilderText.md#texture)
- [textureTransformId](BuilderText.md#texturetransformid)
- [transformLocalId](BuilderText.md#transformlocalid)
- [value](BuilderText.md#value)
- [vertexCount](BuilderText.md#vertexcount)
- [vertexOffset](BuilderText.md#vertexoffset)
- [weight](BuilderText.md#weight)

### Methods

- [buildUnit](BuilderText.md#buildunit)
- [init](BuilderText.md#init)
- [isCompatible](BuilderText.md#iscompatible)
- [reinit](BuilderText.md#reinit)
- [update](BuilderText.md#update)
- [updateColor](BuilderText.md#updatecolor)
- [updateStep](BuilderText.md#updatestep)
- [updateVertex](BuilderText.md#updatevertex)

## Constructors

### constructor

• **new BuilderText**(`buffer`, `vertexOffset`, `indexOffset`, `vertexCount`, `indexCount`): [`BuilderText`](BuilderText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |
| `vertexCount` | `number` |
| `indexCount` | `number` |

#### Returns

[`BuilderText`](BuilderText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L62)

## Properties

### alignHorizontal

• `Protected` **alignHorizontal**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L47)

___

### alignVertical

• `Protected` **alignVertical**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L48)

___

### alpha

• `Protected` **alpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L44)

___

### buffer

• **buffer**: [`BuilderBuffer`](../interfaces/BuilderBuffer.md)

#### Implementation of

[Builder](../interfaces/Builder.md).[buffer](../interfaces/Builder.md#buffer)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L24)

___

### clipping

• `Protected` **clipping**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L59)

___

### color

• `Protected` **color**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L43)

___

### direction

• `Protected` **direction**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L56)

___

### family

• `Protected` **family**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L41)

___

### fitting

• `Protected` **fitting**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L60)

___

### indexCount

• **indexCount**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[indexCount](../interfaces/Builder.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L28)

___

### indexOffset

• **indexOffset**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[indexOffset](../interfaces/Builder.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L26)

___

### inited

• `Protected` **inited**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L30)

___

### offsetHorizontal

• `Protected` **offsetHorizontal**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L49)

___

### offsetVertical

• `Protected` **offsetVertical**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L50)

___

### outlineAlpha

• `Protected` **outlineAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L53)

___

### outlineColor

• `Protected` **outlineColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L52)

___

### outlineWidth

• `Protected` **outlineWidth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L51)

___

### paddingHorizontal

• `Protected` **paddingHorizontal**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L57)

___

### paddingVertical

• `Protected` **paddingVertical**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L58)

___

### scaleX

• `Protected` **scaleX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L35)

___

### scaleY

• `Protected` **scaleY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L36)

___

### size

• `Protected` **size**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L42)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L32)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L33)

___

### spacingHorizontal

• `Protected` **spacingHorizontal**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L54)

___

### spacingVertical

• `Protected` **spacingVertical**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L55)

___

### style

• `Protected` **style**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L46)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L38)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L39)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L34)

___

### value

• `Protected` **value**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L40)

___

### vertexCount

• **vertexCount**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[vertexCount](../interfaces/Builder.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L27)

___

### vertexOffset

• **vertexOffset**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[vertexOffset](../interfaces/Builder.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L25)

___

### weight

• `Protected` **weight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L45)

## Methods

### buildUnit

▸ **buildUnit**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`EShapeBufferUnitBuilder`](EShapeBufferUnitBuilder.md) |

#### Returns

`void`

#### Implementation of

[Builder](../interfaces/Builder.md).[buildUnit](../interfaces/Builder.md#buildunit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:384](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L384)

___

### init

▸ **init**(): `this`

#### Returns

`this`

#### Implementation of

[Builder](../interfaces/Builder.md).[init](../interfaces/Builder.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L110)

___

### isCompatible

▸ **isCompatible**(`shape`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`boolean`

#### Implementation of

[Builder](../interfaces/Builder.md).[isCompatible](../interfaces/Builder.md#iscompatible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L156)

___

### reinit

▸ **reinit**(`buffer`, `shape`, `vertexOffset`, `indexOffset`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Returns

`boolean`

#### Implementation of

[Builder](../interfaces/Builder.md).[reinit](../interfaces/Builder.md#reinit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L123)

___

### update

▸ **update**(`shape`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`this`

#### Implementation of

[Builder](../interfaces/Builder.md).[update](../interfaces/Builder.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L160)

___

### updateColor

▸ **updateColor**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:303](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L303)

___

### updateStep

▸ **updateStep**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L339)

___

### updateVertex

▸ **updateVertex**(`buffer`, `shape`, `textAtlas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `textAtlas` | [`EShapeTextAtlas`](../interfaces/EShapeTextAtlas.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L174)
