[Winter Cardinal UI - v0.179.0](../index.md) / NumberFormatterImpl

# Class: NumberFormatterImpl

A NumberFormatter implementation class.

## Implements

- [`NumberFormatter`](../interfaces/NumberFormatter.md)

## Table of contents

### Constructors

- [constructor](NumberFormatterImpl.md#constructor)

### Properties

- [date](NumberFormatterImpl.md#date)
- [nodes](NumberFormatterImpl.md#nodes)
- [DATE](NumberFormatterImpl.md#date)

### Methods

- [format](NumberFormatterImpl.md#format)

## Constructors

### constructor

• **new NumberFormatterImpl**(`format`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `string` |

#### Defined in

[src/main/typescript/wcardinal/ui/util/number-formatter-impl.ts:315](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/util/number-formatter-impl.ts#L315)

## Properties

### date

• `Protected` **date**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/number-formatter-impl.ts:312](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/util/number-formatter-impl.ts#L312)

___

### nodes

• `Protected` **nodes**: [`FormatNode`](../interfaces/FormatNode.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/util/number-formatter-impl.ts:313](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/util/number-formatter-impl.ts#L313)

___

### DATE

▪ `Static` `Protected` `Optional` **DATE**: `Date`

#### Defined in

[src/main/typescript/wcardinal/ui/util/number-formatter-impl.ts:310](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/util/number-formatter-impl.ts#L310)

## Methods

### format

▸ **format**(`target`, `step`): `string`

Formats the given number `target`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `step` | `number` |

#### Returns

`string`

#### Implementation of

[NumberFormatter](../interfaces/NumberFormatter.md).[format](../interfaces/NumberFormatter.md#format)

#### Defined in

[src/main/typescript/wcardinal/ui/util/number-formatter-impl.ts:321](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/util/number-formatter-impl.ts#L321)
