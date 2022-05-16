[Winter Cardinal UI - v0.167.0](../index.md) / Builder

# Interface: Builder

## Implemented by

- [`BuilderBase`](../classes/BuilderBase.md)
- [`BuilderLabel`](../classes/BuilderLabel.md)
- [`BuilderNull`](../classes/BuilderNull.md)
- [`BuilderText`](../classes/BuilderText.md)

## Table of contents

### Properties

- [indexCount](Builder.md#indexcount)
- [indexOffset](Builder.md#indexoffset)
- [vertexCount](Builder.md#vertexcount)
- [vertexOffset](Builder.md#vertexoffset)

### Methods

- [buildUnit](Builder.md#buildunit)
- [init](Builder.md#init)
- [isCompatible](Builder.md#iscompatible)
- [update](Builder.md#update)

## Properties

### indexCount

• `Readonly` **indexCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L14)

___

### indexOffset

• `Readonly` **indexOffset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L12)

___

### vertexCount

• `Readonly` **vertexCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L13)

___

### vertexOffset

• `Readonly` **vertexOffset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L11)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L19)

___

### init

▸ **init**(`buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](../classes/EShapeBuffer.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L16)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L17)

___

### update

▸ **update**(`buffer`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`EShapeBuffer`](../classes/EShapeBuffer.md) |
| `shape` | [`EShape`](EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L18)
