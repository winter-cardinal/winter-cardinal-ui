[Winter Cardinal UI - v0.374.0](../index.md) / FormatNodePadding

# Class: FormatNodePadding

## Implements

- [`FormatNode`](../interfaces/FormatNode.md)

## Table of contents

### Constructors

- [constructor](FormatNodePadding.md#constructor)

### Properties

- [character](FormatNodePadding.md#character)
- [length](FormatNodePadding.md#length)
- [node](FormatNodePadding.md#node)

### Methods

- [format](FormatNodePadding.md#format)

## Constructors

### constructor

• **new FormatNodePadding**(`length`, `character`, `node`): [`FormatNodePadding`](FormatNodePadding.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |
| `character` | `string` |
| `node` | [`FormatNode`](../interfaces/FormatNode.md) |

#### Returns

[`FormatNodePadding`](FormatNodePadding.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/format-node/format-node-padding.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/format-node/format-node-padding.ts#L14)

## Properties

### character

• `Protected` **character**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/format-node/format-node-padding.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/format-node/format-node-padding.ts#L11)

___

### length

• `Protected` **length**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/format-node/format-node-padding.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/format-node/format-node-padding.ts#L10)

___

### node

• `Protected` **node**: [`FormatNode`](../interfaces/FormatNode.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/format-node/format-node-padding.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/format-node/format-node-padding.ts#L12)

## Methods

### format

▸ **format**(`target`, `step`, `date`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `step` | `number` |
| `date` | `Date` |

#### Returns

`string`

#### Implementation of

[FormatNode](../interfaces/FormatNode.md).[format](../interfaces/FormatNode.md#format)

#### Defined in

[src/main/typescript/wcardinal/ui/util/format-node/format-node-padding.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/format-node/format-node-padding.ts#L20)
