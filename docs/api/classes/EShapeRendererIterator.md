[Winter Cardinal UI - v0.154.0](../index.md) / EShapeRendererIterator

# Class: EShapeRendererIterator

## Table of contents

### Constructors

- [constructor](EShapeRendererIterator.md#constructor)

### Properties

- [\_current](EShapeRendererIterator.md#_current)
- [\_data](EShapeRendererIterator.md#_data)
- [\_datum](EShapeRendererIterator.md#_datum)
- [\_index](EShapeRendererIterator.md#_index)

### Methods

- [get](EShapeRendererIterator.md#get)
- [next](EShapeRendererIterator.md#next)
- [reset](EShapeRendererIterator.md#reset)

## Constructors

### constructor

• **new EShapeRendererIterator**()

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts#L15)

## Properties

### \_current

• `Protected` **\_current**: ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts#L13)

___

### \_data

• `Protected` **\_data**: [`EShapeRendererIteratorDatum`](EShapeRendererIteratorDatum.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts#L11)

___

### \_datum

• `Protected` **\_datum**: [`EShapeRendererIteratorDatum`](EShapeRendererIteratorDatum.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts#L12)

___

### \_index

• `Protected` **\_index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts#L10)

## Methods

### get

▸ **get**(): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts#L34)

___

### next

▸ **next**(): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts#L38)

___

### reset

▸ **reset**(`shape`, `shapes`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | ``null`` \| [`EShape`](../interfaces/EShape.md) |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-renderer-iterator.ts#L22)
