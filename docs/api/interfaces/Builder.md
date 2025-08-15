[Winter Cardinal UI - v0.457.0](../index.md) / Builder

# Interface: Builder

## Implemented by

- [`BuilderBase`](../classes/BuilderBase.md)
- [`BuilderLabel`](../classes/BuilderLabel.md)
- [`BuilderNull`](../classes/BuilderNull.md)
- [`BuilderText`](../classes/BuilderText.md)

## Table of contents

### Properties

- [buffer](Builder.md#buffer)
- [indexCount](Builder.md#indexcount)
- [indexOffset](Builder.md#indexoffset)
- [vertexCount](Builder.md#vertexcount)
- [vertexOffset](Builder.md#vertexoffset)

### Methods

- [buildUnit](Builder.md#buildunit)
- [init](Builder.md#init)
- [isCompatible](Builder.md#iscompatible)
- [reinit](Builder.md#reinit)
- [update](Builder.md#update)

## Properties

### buffer

• `Readonly` **buffer**: [`BuilderBuffer`](BuilderBuffer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L54)

___

### indexCount

• `Readonly` **indexCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L58)

___

### indexOffset

• `Readonly` **indexOffset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L56)

___

### vertexCount

• `Readonly` **vertexCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L57)

___

### vertexOffset

• `Readonly` **vertexOffset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L55)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L69)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L60)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L67)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L61)

___

### update

▸ **update**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/builder.ts#L68)
