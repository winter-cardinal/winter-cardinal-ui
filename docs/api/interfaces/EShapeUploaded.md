[Winter Cardinal UI - v0.442.0](../index.md) / EShapeUploaded

# Interface: EShapeUploaded

## Implemented by

- [`EShapeUploadedImpl`](../classes/EShapeUploadedImpl.md)

## Table of contents

### Methods

- [buildUnit](EShapeUploaded.md#buildunit)
- [getIndexCount](EShapeUploaded.md#getindexcount)
- [getIndexOffset](EShapeUploaded.md#getindexoffset)
- [getVertexCount](EShapeUploaded.md#getvertexcount)
- [getVertexOffset](EShapeUploaded.md#getvertexoffset)
- [init](EShapeUploaded.md#init)
- [isCompatible](EShapeUploaded.md#iscompatible)
- [reinit](EShapeUploaded.md#reinit)
- [update](EShapeUploaded.md#update)

## Methods

### buildUnit

▸ **buildUnit**(`builder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`EShapeBufferUnitBuilder`](../classes/EShapeBufferUnitBuilder.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L24)

___

### getIndexCount

▸ **getIndexCount**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L23)

___

### getIndexOffset

▸ **getIndexOffset**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L22)

___

### getVertexCount

▸ **getVertexCount**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L21)

___

### getVertexOffset

▸ **getVertexOffset**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L20)

___

### init

▸ **init**(`shape`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L11)

___

### isCompatible

▸ **isCompatible**(`shape`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L19)

___

### reinit

▸ **reinit**(`buffer`, `shape`, `vertexOffset`, `indexOffset`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](BuilderBuffer.md) |
| `shape` | [`EShape`](EShape.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L12)

___

### update

▸ **update**(`shape`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L18)
