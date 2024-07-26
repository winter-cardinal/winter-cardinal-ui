[Winter Cardinal UI - v0.442.0](../index.md) / BuilderNull

# Class: BuilderNull

## Implements

- [`Builder`](../interfaces/Builder.md)

## Table of contents

### Constructors

- [constructor](BuilderNull.md#constructor)

### Properties

- [buffer](BuilderNull.md#buffer)
- [indexCount](BuilderNull.md#indexcount)
- [indexOffset](BuilderNull.md#indexoffset)
- [texture](BuilderNull.md#texture)
- [vertexCount](BuilderNull.md#vertexcount)
- [vertexOffset](BuilderNull.md#vertexoffset)

### Methods

- [buildUnit](BuilderNull.md#buildunit)
- [init](BuilderNull.md#init)
- [isCompatible](BuilderNull.md#iscompatible)
- [reinit](BuilderNull.md#reinit)
- [update](BuilderNull.md#update)

## Constructors

### constructor

• **new BuilderNull**(`buffer`, `vertexOffset`, `indexOffset`): [`BuilderNull`](BuilderNull.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Returns

[`BuilderNull`](BuilderNull.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts#L21)

## Properties

### buffer

• **buffer**: [`BuilderBuffer`](../interfaces/BuilderBuffer.md)

#### Implementation of

[Builder](../interfaces/Builder.md).[buffer](../interfaces/Builder.md#buffer)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts#L13)

___

### indexCount

• **indexCount**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[indexCount](../interfaces/Builder.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts#L17)

___

### indexOffset

• **indexOffset**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[indexOffset](../interfaces/Builder.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts#L16)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts#L19)

___

### vertexCount

• **vertexCount**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[vertexCount](../interfaces/Builder.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts#L15)

___

### vertexOffset

• **vertexOffset**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[vertexOffset](../interfaces/Builder.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts#L14)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts#L55)

___

### init

▸ **init**(): `this`

#### Returns

`this`

#### Implementation of

[Builder](../interfaces/Builder.md).[init](../interfaces/Builder.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts#L47)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts#L35)

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

[Builder](../interfaces/Builder.md).[update](../interfaces/Builder.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/builder-null.ts#L51)
