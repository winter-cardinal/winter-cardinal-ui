[Winter Cardinal UI - v0.407.0](../index.md) / FormatNodefsi

# Class: FormatNodefsi

## Hierarchy

- [`FormatNodePrecision`](FormatNodePrecision.md)

  ↳ **`FormatNodefsi`**

  ↳↳ [`FormatNodessi`](FormatNodessi.md)

## Table of contents

### Constructors

- [constructor](FormatNodefsi.md#constructor)

### Properties

- [precision](FormatNodefsi.md#precision)

### Methods

- [format](FormatNodefsi.md#format)
- [format\_](FormatNodefsi.md#format_)
- [toAbs](FormatNodefsi.md#toabs)

## Constructors

### constructor

• **new FormatNodefsi**(`precision?`): [`FormatNodefsi`](FormatNodefsi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `precision?` | `string` |

#### Returns

[`FormatNodefsi`](FormatNodefsi.md)

#### Inherited from

[FormatNodePrecision](FormatNodePrecision.md).[constructor](FormatNodePrecision.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/util/format-node/format-node-precision.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/format-node/format-node-precision.ts#L11)

## Properties

### precision

• `Protected` **precision**: `undefined` \| `number`

#### Inherited from

[FormatNodePrecision](FormatNodePrecision.md).[precision](FormatNodePrecision.md#precision)

#### Defined in

[src/main/typescript/wcardinal/ui/util/format-node/format-node-precision.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/format-node/format-node-precision.ts#L9)

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

#### Overrides

[FormatNodePrecision](FormatNodePrecision.md).[format](FormatNodePrecision.md#format)

#### Defined in

[src/main/typescript/wcardinal/ui/util/format-node/format-node-fsi.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/format-node/format-node-fsi.ts#L9)

___

### format\_

▸ **format_**(`target`, `unitInverse`, `postfix`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `unitInverse` | `number` |
| `postfix` | `string` |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/format-node/format-node-fsi.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/format-node/format-node-fsi.ts#L54)

___

### toAbs

▸ **toAbs**(`target`, `step`, `date`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `step` | `number` |
| `date` | `Date` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/format-node/format-node-fsi.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/format-node/format-node-fsi.ts#L50)
