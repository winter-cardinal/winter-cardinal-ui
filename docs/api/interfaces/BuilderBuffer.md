[Winter Cardinal UI - v0.442.0](../index.md) / BuilderBuffer

# Interface: BuilderBuffer

## Table of contents

### Properties

- [colors](BuilderBuffer.md#colors)
- [indices](BuilderBuffer.md#indices)
- [steps](BuilderBuffer.md#steps)
- [uvs](BuilderBuffer.md#uvs)
- [vertices](BuilderBuffer.md#vertices)

### Methods

- [check](BuilderBuffer.md#check)
- [updateColors](BuilderBuffer.md#updatecolors)
- [updateIndices](BuilderBuffer.md#updateindices)
- [updateSteps](BuilderBuffer.md#updatesteps)
- [updateUvs](BuilderBuffer.md#updateuvs)
- [updateVertices](BuilderBuffer.md#updatevertices)

## Properties

### colors

• `Readonly` **colors**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L40)

___

### indices

• `Readonly` **indices**: `Uint16Array` \| `Uint32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L42)

___

### steps

• `Readonly` **steps**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L39)

___

### uvs

• `Readonly` **uvs**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L41)

___

### vertices

• `Readonly` **vertices**: `Float32Array`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L38)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L44)

___

### updateColors

▸ **updateColors**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L48)

___

### updateIndices

▸ **updateIndices**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L50)

___

### updateSteps

▸ **updateSteps**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L47)

___

### updateUvs

▸ **updateUvs**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L49)

___

### updateVertices

▸ **updateVertices**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L46)
