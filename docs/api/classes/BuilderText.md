[Winter Cardinal UI](../README.md) / BuilderText

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
- [indexCount](BuilderText.md#indexcount)
- [indexOffset](BuilderText.md#indexoffset)
- [offsetHorizontal](BuilderText.md#offsethorizontal)
- [offsetVertical](BuilderText.md#offsetvertical)
- [outlineAlpha](BuilderText.md#outlinealpha)
- [outlineColor](BuilderText.md#outlinecolor)
- [outlineWidth](BuilderText.md#outlinewidth)
- [paddingHorizontal](BuilderText.md#paddinghorizontal)
- [paddingVertical](BuilderText.md#paddingvertical)
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

• **new BuilderText**(`vertexOffset`, `indexOffset`, `vertexCount`, `indexCount`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |
| `vertexCount` | `number` |
| `indexCount` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L56)

## Properties

### alignHorizontal

• `Protected` **alignHorizontal**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L42)

___

### alignVertical

• `Protected` **alignVertical**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L43)

___

### alpha

• `Protected` **alpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L39)

___

### clipping

• `Protected` **clipping**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L54)

___

### color

• `Protected` **color**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L38)

___

### direction

• `Protected` **direction**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L51)

___

### family

• `Protected` **family**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L36)

___

### indexCount

• `Readonly` **indexCount**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[indexCount](../interfaces/Builder.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L27)

___

### indexOffset

• `Readonly` **indexOffset**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[indexOffset](../interfaces/Builder.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L25)

___

### offsetHorizontal

• `Protected` **offsetHorizontal**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L44)

___

### offsetVertical

• `Protected` **offsetVertical**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L45)

___

### outlineAlpha

• `Protected` **outlineAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L48)

___

### outlineColor

• `Protected` **outlineColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L47)

___

### outlineWidth

• `Protected` **outlineWidth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L46)

___

### paddingHorizontal

• `Protected` **paddingHorizontal**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L52)

___

### paddingVertical

• `Protected` **paddingVertical**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L53)

___

### size

• `Protected` **size**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L37)

___

### sizeX

• `Protected` **sizeX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L29)

___

### sizeY

• `Protected` **sizeY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L30)

___

### spacingHorizontal

• `Protected` **spacingHorizontal**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L49)

___

### spacingVertical

• `Protected` **spacingVertical**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L50)

___

### style

• `Protected` **style**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L41)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L33)

___

### textureTransformId

• `Protected` **textureTransformId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L34)

___

### transformLocalId

• `Protected` **transformLocalId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L31)

___

### value

• `Protected` **value**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L35)

___

### vertexCount

• `Readonly` **vertexCount**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[vertexCount](../interfaces/Builder.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L26)

___

### vertexOffset

• `Readonly` **vertexOffset**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[vertexOffset](../interfaces/Builder.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L24)

___

### weight

• `Protected` **weight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L40)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L296)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L96)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L110)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L114)

___

### updateColorFill

▸ `Protected` **updateColorFill**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L247)

___

### updateColorStroke

▸ `Protected` **updateColorStroke**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:260](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L260)

___

### updateStep

▸ `Protected` **updateStep**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L274)

___

### updateVertex

▸ `Protected` **updateVertex**(`buffer`, `shape`, `textAtlas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `textAtlas` | [`EShapeTextAtlas`](../interfaces/EShapeTextAtlas.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/builder-text.ts#L127)
