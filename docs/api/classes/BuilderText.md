[Winter Cardinal UI - v0.374.0](../index.md) / BuilderText

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
- [clipping](BuilderText.md#clipping)
- [color](BuilderText.md#color)
- [direction](BuilderText.md#direction)
- [family](BuilderText.md#family)
- [fitting](BuilderText.md#fitting)
- [indexCount](BuilderText.md#indexcount)
- [indexOffset](BuilderText.md#indexoffset)
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
- [update](BuilderText.md#update)
- [updateColorFill](BuilderText.md#updatecolorfill)
- [updateColorStroke](BuilderText.md#updatecolorstroke)
- [updateStep](BuilderText.md#updatestep)
- [updateVertex](BuilderText.md#updatevertex)

## Constructors

### constructor

• **new BuilderText**(`vertexOffset`, `indexOffset`, `vertexCount`, `indexCount`): [`BuilderText`](BuilderText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |
| `vertexCount` | `number` |
| `indexCount` | `number` |

#### Returns

[`BuilderText`](BuilderText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L60)

## Properties

### alignHorizontal

• `Protected` **alignHorizontal**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L45)

___

### alignVertical

• `Protected` **alignVertical**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L46)

___

### alpha

• `Protected` **alpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L42)

___

### clipping

• `Protected` **clipping**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L57)

___

### color

• `Protected` **color**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L41)

___

### direction

• `Protected` **direction**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L54)

___

### family

• `Protected` **family**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L39)

___

### fitting

• `Protected` **fitting**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L58)

___

### indexCount

• `Readonly` **indexCount**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[indexCount](../interfaces/Builder.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L28)

___

### indexOffset

• `Readonly` **indexOffset**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[indexOffset](../interfaces/Builder.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L26)

___

### offsetHorizontal

• `Protected` **offsetHorizontal**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L47)

___

### offsetVertical

• `Protected` **offsetVertical**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L48)

___

### outlineAlpha

• `Protected` **outlineAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L51)

___

### outlineColor

• `Protected` **outlineColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L50)

___

### outlineWidth

• `Protected` **outlineWidth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L49)

___

### paddingHorizontal

• `Protected` **paddingHorizontal**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L55)

___

### paddingVertical

• `Protected` **paddingVertical**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L56)

___

### scaleX

• `Protected` **scaleX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L33)

___

### scaleY

• `Protected` **scaleY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L34)

___

### size

• `Protected` **size**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L40)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L30)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L31)

___

### spacingHorizontal

• `Protected` **spacingHorizontal**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L52)

___

### spacingVertical

• `Protected` **spacingVertical**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L53)

___

### style

• `Protected` **style**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L44)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L36)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L37)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L32)

___

### value

• `Protected` **value**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L38)

___

### vertexCount

• `Readonly` **vertexCount**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[vertexCount](../interfaces/Builder.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L27)

___

### vertexOffset

• `Readonly` **vertexOffset**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[vertexOffset](../interfaces/Builder.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L25)

___

### weight

• `Protected` **weight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L43)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:329](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L329)

___

### init

▸ **init**(`buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |

#### Returns

`void`

#### Implementation of

[Builder](../interfaces/Builder.md).[init](../interfaces/Builder.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L104)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L118)

___

### update

▸ **update**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Implementation of

[Builder](../interfaces/Builder.md).[update](../interfaces/Builder.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L122)

___

### updateColorFill

▸ **updateColorFill**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:260](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L260)

___

### updateColorStroke

▸ **updateColorStroke**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:273](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L273)

___

### updateStep

▸ **updateStep**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L287)

___

### updateVertex

▸ **updateVertex**(`buffer`, `shape`, `textAtlas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `textAtlas` | [`EShapeTextAtlas`](../interfaces/EShapeTextAtlas.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L135)
