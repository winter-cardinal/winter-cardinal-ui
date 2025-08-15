[Winter Cardinal UI - v0.457.0](../index.md) / UtilCharacterIterator

# Class: UtilCharacterIterator

## Table of contents

### Constructors

- [constructor](UtilCharacterIterator.md#constructor)

### Properties

- [position](UtilCharacterIterator.md#position)
- [target](UtilCharacterIterator.md#target)
- [\_instance](UtilCharacterIterator.md#_instance)

### Methods

- [close](UtilCharacterIterator.md#close)
- [findNextBreak](UtilCharacterIterator.md#findnextbreak)
- [hasNext](UtilCharacterIterator.md#hasnext)
- [init](UtilCharacterIterator.md#init)
- [isHighSurrogate](UtilCharacterIterator.md#ishighsurrogate)
- [isLowSurrogate](UtilCharacterIterator.md#islowsurrogate)
- [isVariationSelector](UtilCharacterIterator.md#isvariationselector)
- [next](UtilCharacterIterator.md#next)
- [from](UtilCharacterIterator.md#from)

## Constructors

### constructor

• **new UtilCharacterIterator**(): [`UtilCharacterIterator`](UtilCharacterIterator.md)

#### Returns

[`UtilCharacterIterator`](UtilCharacterIterator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L11)

## Properties

### position

• **position**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L9)

___

### target

• **target**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L8)

___

### \_instance

▪ `Static` `Protected` **\_instance**: ``null`` \| [`UtilCharacterIterator`](UtilCharacterIterator.md) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L7)

## Methods

### close

▸ **close**(): `boolean`

Closes this iterator.

#### Returns

`boolean`

true if closed.

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L62)

___

### findNextBreak

▸ **findNextBreak**(`target`, `istart`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |
| `istart` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L25)

___

### hasNext

▸ **hasNext**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L21)

___

### init

▸ **init**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L16)

___

### isHighSurrogate

▸ **isHighSurrogate**(`code`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L36)

___

### isLowSurrogate

▸ **isLowSurrogate**(`code`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L40)

___

### isVariationSelector

▸ **isVariationSelector**(`code`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L44)

___

### next

▸ **next**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L48)

___

### from

▸ **from**(`target`): [`UtilCharacterIterator`](UtilCharacterIterator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |

#### Returns

[`UtilCharacterIterator`](UtilCharacterIterator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L71)
