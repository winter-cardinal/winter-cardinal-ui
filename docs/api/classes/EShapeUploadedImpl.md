[Winter Cardinal UI - v0.179.0](../index.md) / EShapeUploadedImpl

# Class: EShapeUploadedImpl

## Implements

- [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

## Table of contents

### Constructors

- [constructor](EShapeUploadedImpl.md#constructor)

### Properties

- [\_builders](EShapeUploadedImpl.md#_builders)
- [\_indexCount](EShapeUploadedImpl.md#_indexcount)
- [\_indexOffset](EShapeUploadedImpl.md#_indexoffset)
- [\_vertexCount](EShapeUploadedImpl.md#_vertexcount)
- [\_vertexOffset](EShapeUploadedImpl.md#_vertexoffset)
- [buffer](EShapeUploadedImpl.md#buffer)

### Methods

- [buildUnit](EShapeUploadedImpl.md#buildunit)
- [getBuffer](EShapeUploadedImpl.md#getbuffer)
- [getIndexCount](EShapeUploadedImpl.md#getindexcount)
- [getIndexOffset](EShapeUploadedImpl.md#getindexoffset)
- [getVertexCount](EShapeUploadedImpl.md#getvertexcount)
- [getVertexOffset](EShapeUploadedImpl.md#getvertexoffset)
- [init](EShapeUploadedImpl.md#init)
- [isCompatible](EShapeUploadedImpl.md#iscompatible)
- [update](EShapeUploadedImpl.md#update)

## Constructors

### constructor

• **new EShapeUploadedImpl**(`buffer`, `vertexOffset`, `indexOffset`, `vertexCount`, `indexCount`, `builders`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](EShapeBuffer.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |
| `vertexCount` | `number` |
| `indexCount` | `number` |
| `builders` | [`Builder`](../interfaces/Builder.md)[] |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L30)

## Properties

### \_builders

• `Protected` **\_builders**: [`Builder`](../interfaces/Builder.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L24)

___

### \_indexCount

• `Protected` **\_indexCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L28)

___

### \_indexOffset

• `Protected` **\_indexOffset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L26)

___

### \_vertexCount

• `Protected` **\_vertexCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L27)

___

### \_vertexOffset

• `Protected` **\_vertexOffset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L25)

___

### buffer

• `Protected` **buffer**: [`EShapeBuffer`](EShapeBuffer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L23)

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

[EShapeUploaded](../interfaces/EShapeUploaded.md).[buildUnit](../interfaces/EShapeUploaded.md#buildunit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L95)

___

### getBuffer

▸ **getBuffer**(): [`EShapeBuffer`](EShapeBuffer.md)

#### Returns

[`EShapeBuffer`](EShapeBuffer.md)

#### Implementation of

[EShapeUploaded](../interfaces/EShapeUploaded.md).[getBuffer](../interfaces/EShapeUploaded.md#getbuffer)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L75)

___

### getIndexCount

▸ **getIndexCount**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeUploaded](../interfaces/EShapeUploaded.md).[getIndexCount](../interfaces/EShapeUploaded.md#getindexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L91)

___

### getIndexOffset

▸ **getIndexOffset**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeUploaded](../interfaces/EShapeUploaded.md).[getIndexOffset](../interfaces/EShapeUploaded.md#getindexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L87)

___

### getVertexCount

▸ **getVertexCount**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeUploaded](../interfaces/EShapeUploaded.md).[getVertexCount](../interfaces/EShapeUploaded.md#getvertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L83)

___

### getVertexOffset

▸ **getVertexOffset**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeUploaded](../interfaces/EShapeUploaded.md).[getVertexOffset](../interfaces/EShapeUploaded.md#getvertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L79)

___

### init

▸ **init**(`shape`): [`EShapeUploadedImpl`](EShapeUploadedImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

[`EShapeUploadedImpl`](EShapeUploadedImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L46)

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

[EShapeUploaded](../interfaces/EShapeUploaded.md).[isCompatible](../interfaces/EShapeUploaded.md#iscompatible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L65)

___

### update

▸ **update**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Implementation of

[EShapeUploaded](../interfaces/EShapeUploaded.md).[update](../interfaces/EShapeUploaded.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L57)
