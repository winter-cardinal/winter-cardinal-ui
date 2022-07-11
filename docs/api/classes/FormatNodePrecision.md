[Winter Cardinal UI - v0.200.0](../index.md) / FormatNodePrecision

# Class: FormatNodePrecision

## Hierarchy

- **`FormatNodePrecision`**

  ↳ [`FormatNodee`](FormatNodee.md)

  ↳ [`FormatNodef`](FormatNodef.md)

  ↳ [`FormatNodefsi`](FormatNodefsi.md)

  ↳ [`FormatNodeg`](FormatNodeg.md)

## Implements

- [`FormatNode`](../interfaces/FormatNode.md)

## Table of contents

### Constructors

- [constructor](FormatNodePrecision.md#constructor)

### Properties

- [precision](FormatNodePrecision.md#precision)

### Methods

- [format](FormatNodePrecision.md#format)

## Constructors

### constructor

• **new FormatNodePrecision**(`precision?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `precision?` | `string` |

#### Defined in

[src/main/typescript/wcardinal/ui/util/format-node/format-node-precision.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/format-node/format-node-precision.ts#L11)

## Properties

### precision

• `Protected` **precision**: `undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/format-node/format-node-precision.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/format-node/format-node-precision.ts#L9)

## Methods

### format

▸ `Abstract` **format**(`target`, `step`, `date`): `string`

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

[src/main/typescript/wcardinal/ui/util/format-node/format-node-precision.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/util/format-node/format-node-precision.ts#L19)
