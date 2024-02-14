[Winter Cardinal UI - v0.407.0](../index.md) / FormatNodessi

# Class: FormatNodessi

## Hierarchy

- [`FormatNodefsi`](FormatNodefsi.md)

  ↳ **`FormatNodessi`**

## Table of contents

### Constructors

- [constructor](FormatNodessi.md#constructor)

### Properties

- [precision](FormatNodessi.md#precision)

### Methods

- [format](FormatNodessi.md#format)
- [format\_](FormatNodessi.md#format_)
- [toAbs](FormatNodessi.md#toabs)

## Constructors

### constructor

• **new FormatNodessi**(`precision?`): [`FormatNodessi`](FormatNodessi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `precision?` | `string` |

#### Returns

[`FormatNodessi`](FormatNodessi.md)

#### Inherited from

[FormatNodefsi](FormatNodefsi.md).[constructor](FormatNodefsi.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/util/format-node/format-node-precision.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/format-node/format-node-precision.ts#L11)

## Properties

### precision

• `Protected` **precision**: `undefined` \| `number`

#### Inherited from

[FormatNodefsi](FormatNodefsi.md).[precision](FormatNodefsi.md#precision)

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

#### Inherited from

[FormatNodefsi](FormatNodefsi.md).[format](FormatNodefsi.md#format)

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

#### Inherited from

[FormatNodefsi](FormatNodefsi.md).[format_](FormatNodefsi.md#format_)

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

#### Overrides

[FormatNodefsi](FormatNodefsi.md).[toAbs](FormatNodefsi.md#toabs)

#### Defined in

[src/main/typescript/wcardinal/ui/util/format-node/format-node-ssi.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/format-node/format-node-ssi.ts#L9)
