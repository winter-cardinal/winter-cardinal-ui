[Winter Cardinal UI - v0.407.0](../index.md) / EShapeUploadedImpl

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

### Methods

- [buildUnit](EShapeUploadedImpl.md#buildunit)
- [getIndexCount](EShapeUploadedImpl.md#getindexcount)
- [getIndexOffset](EShapeUploadedImpl.md#getindexoffset)
- [getVertexCount](EShapeUploadedImpl.md#getvertexcount)
- [getVertexOffset](EShapeUploadedImpl.md#getvertexoffset)
- [init](EShapeUploadedImpl.md#init)
- [isCompatible](EShapeUploadedImpl.md#iscompatible)
- [reinit](EShapeUploadedImpl.md#reinit)
- [update](EShapeUploadedImpl.md#update)

## Constructors

### constructor

• **new EShapeUploadedImpl**(`buffer`, `vertexOffset`, `indexOffset`, `vertexCount`, `indexCount`, `builders`): [`EShapeUploadedImpl`](EShapeUploadedImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |
| `vertexCount` | `number` |
| `indexCount` | `number` |
| `builders` | [`Builder`](../interfaces/Builder.md)[] |

#### Returns

[`EShapeUploadedImpl`](EShapeUploadedImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L34)

## Properties

### \_builders

• `Protected` **\_builders**: [`Builder`](../interfaces/Builder.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L28)

___

### \_indexCount

• `Protected` **\_indexCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L32)

___

### \_indexOffset

• `Protected` **\_indexOffset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L30)

___

### \_vertexCount

• `Protected` **\_vertexCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L31)

___

### \_vertexOffset

• `Protected` **\_vertexOffset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L29)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L118)

___

### getIndexCount

▸ **getIndexCount**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeUploaded](../interfaces/EShapeUploaded.md).[getIndexCount](../interfaces/EShapeUploaded.md#getindexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L114)

___

### getIndexOffset

▸ **getIndexOffset**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeUploaded](../interfaces/EShapeUploaded.md).[getIndexOffset](../interfaces/EShapeUploaded.md#getindexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L110)

___

### getVertexCount

▸ **getVertexCount**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeUploaded](../interfaces/EShapeUploaded.md).[getVertexCount](../interfaces/EShapeUploaded.md#getvertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L106)

___

### getVertexOffset

▸ **getVertexOffset**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeUploaded](../interfaces/EShapeUploaded.md).[getVertexOffset](../interfaces/EShapeUploaded.md#getvertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L102)

___

### init

▸ **init**(`shape`): [`EShapeUploadedImpl`](EShapeUploadedImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

[`EShapeUploadedImpl`](EShapeUploadedImpl.md)

#### Implementation of

[EShapeUploaded](../interfaces/EShapeUploaded.md).[init](../interfaces/EShapeUploaded.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L49)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L92)

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

[EShapeUploaded](../interfaces/EShapeUploaded.md).[reinit](../interfaces/EShapeUploaded.md#reinit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L59)

___

### update

▸ **update**(`shape`): [`EShapeUploadedImpl`](EShapeUploadedImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

[`EShapeUploadedImpl`](EShapeUploadedImpl.md)

#### Implementation of

[EShapeUploaded](../interfaces/EShapeUploaded.md).[update](../interfaces/EShapeUploaded.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-uploaded.ts#L84)
