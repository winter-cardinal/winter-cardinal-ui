[Winter Cardinal UI - v0.407.0](../index.md) / BuilderBuffer

# Interface: BuilderBuffer

## Table of contents

### Properties

- [clippings](BuilderBuffer.md#clippings)
- [colorFills](BuilderBuffer.md#colorfills)
- [colorStrokes](BuilderBuffer.md#colorstrokes)
- [indices](BuilderBuffer.md#indices)
- [steps](BuilderBuffer.md#steps)
- [uvs](BuilderBuffer.md#uvs)
- [vertices](BuilderBuffer.md#vertices)

### Methods

- [check](BuilderBuffer.md#check)
- [updateClippings](BuilderBuffer.md#updateclippings)
- [updateColorFills](BuilderBuffer.md#updatecolorfills)
- [updateColorStrokes](BuilderBuffer.md#updatecolorstrokes)
- [updateIndices](BuilderBuffer.md#updateindices)
- [updateSteps](BuilderBuffer.md#updatesteps)
- [updateUvs](BuilderBuffer.md#updateuvs)
- [updateVertices](BuilderBuffer.md#updatevertices)

## Properties

### clippings

• `Readonly` **clippings**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L33)

___

### colorFills

• `Readonly` **colorFills**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L35)

___

### colorStrokes

• `Readonly` **colorStrokes**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L36)

___

### indices

• `Readonly` **indices**: `Uint16Array` \| `Uint32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L38)

___

### steps

• `Readonly` **steps**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L34)

___

### uvs

• `Readonly` **uvs**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L37)

___

### vertices

• `Readonly` **vertices**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L32)

## Methods

### check

▸ **check**(`vindex`, `ioffset`, `vcount`, `icount`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vindex` | `number` |
| `ioffset` | `number` |
| `vcount` | `number` |
| `icount` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L40)

___

### updateClippings

▸ **updateClippings**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L43)

___

### updateColorFills

▸ **updateColorFills**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L45)

___

### updateColorStrokes

▸ **updateColorStrokes**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L46)

___

### updateIndices

▸ **updateIndices**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L48)

___

### updateSteps

▸ **updateSteps**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L44)

___

### updateUvs

▸ **updateUvs**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L47)

___

### updateVertices

▸ **updateVertices**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L42)
