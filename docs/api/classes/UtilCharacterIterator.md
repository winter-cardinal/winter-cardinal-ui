[Winter Cardinal UI - v0.205.1](../index.md) / UtilCharacterIterator

# Class: UtilCharacterIterator

## Table of contents

### Constructors

- [constructor](UtilCharacterIterator.md#constructor)

### Properties

- [position](UtilCharacterIterator.md#position)
- [target](UtilCharacterIterator.md#target)
- [\_instance](UtilCharacterIterator.md#_instance)

### Methods

- [advance](UtilCharacterIterator.md#advance)
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

• **new UtilCharacterIterator**()

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L11)

## Properties

### position

• **position**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L9)

___

### target

• **target**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L8)

___

### \_instance

▪ `Static` `Protected` **\_instance**: ``null`` \| [`UtilCharacterIterator`](UtilCharacterIterator.md) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L7)

## Methods

### advance

▸ **advance**(`except?`): `boolean`

Advances the position if the next character is not equal to
the given `except`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `except?` | `string` |

#### Returns

`boolean`

true if the position is advanced

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L64)

___

### close

▸ **close**(): `boolean`

Closes this iterator.

#### Returns

`boolean`

true if closed.

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L80)

___

### findNextBreak

▸ `Protected` **findNextBreak**(`target`, `istart`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |
| `istart` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L25)

___

### hasNext

▸ **hasNext**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L21)

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

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L16)

___

### isHighSurrogate

▸ `Protected` **isHighSurrogate**(`code`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L36)

___

### isLowSurrogate

▸ `Protected` **isLowSurrogate**(`code`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L40)

___

### isVariationSelector

▸ `Protected` **isVariationSelector**(`code`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L44)

___

### next

▸ **next**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L48)

___

### from

▸ `Static` **from**(`target`): [`UtilCharacterIterator`](UtilCharacterIterator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |

#### Returns

[`UtilCharacterIterator`](UtilCharacterIterator.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-character-iterator.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-character-iterator.ts#L89)
