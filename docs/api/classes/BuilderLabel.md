[Winter Cardinal UI - v0.407.0](../index.md) / BuilderLabel

# Class: BuilderLabel

## Implements

- [`Builder`](../interfaces/Builder.md)

## Table of contents

### Constructors

- [constructor](BuilderLabel.md#constructor)

### Properties

- [buffer](BuilderLabel.md#buffer)
- [indexCount](BuilderLabel.md#indexcount)
- [indexOffset](BuilderLabel.md#indexoffset)
- [texture](BuilderLabel.md#texture)
- [vertexCount](BuilderLabel.md#vertexcount)
- [vertexOffset](BuilderLabel.md#vertexoffset)

### Methods

- [buildUnit](BuilderLabel.md#buildunit)
- [init](BuilderLabel.md#init)
- [isCompatible](BuilderLabel.md#iscompatible)
- [reinit](BuilderLabel.md#reinit)
- [update](BuilderLabel.md#update)

## Constructors

### constructor

• **new BuilderLabel**(`buffer`, `vertexOffset`, `indexOffset`): [`BuilderLabel`](BuilderLabel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | [`BuilderBuffer`](../interfaces/BuilderBuffer.md) |
| `vertexOffset` | `number` |
| `indexOffset` | `number` |

#### Returns

[`BuilderLabel`](BuilderLabel.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts#L21)

## Properties

### buffer

• **buffer**: [`BuilderBuffer`](../interfaces/BuilderBuffer.md)

#### Implementation of

[Builder](../interfaces/Builder.md).[buffer](../interfaces/Builder.md#buffer)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts#L13)

___

### indexCount

• **indexCount**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[indexCount](../interfaces/Builder.md#indexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts#L17)

___

### indexOffset

• **indexOffset**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[indexOffset](../interfaces/Builder.md#indexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts#L16)

___

### texture

• `Protected` **texture**: ``null`` \| `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts#L19)

___

### vertexCount

• **vertexCount**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[vertexCount](../interfaces/Builder.md#vertexcount)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts#L15)

___

### vertexOffset

• **vertexOffset**: `number`

#### Implementation of

[Builder](../interfaces/Builder.md).[vertexOffset](../interfaces/Builder.md#vertexoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts#L14)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts#L55)

___

### init

▸ **init**(): [`BuilderLabel`](BuilderLabel.md)

#### Returns

[`BuilderLabel`](BuilderLabel.md)

#### Implementation of

[Builder](../interfaces/Builder.md).[init](../interfaces/Builder.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts#L47)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts#L35)

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

[src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/builder-label.ts#L51)
