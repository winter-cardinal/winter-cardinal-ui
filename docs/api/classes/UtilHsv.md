[Winter Cardinal UI - v0.414.0](../index.md) / UtilHsv

# Class: UtilHsv

## Table of contents

### Constructors

- [constructor](UtilHsv.md#constructor)

### Methods

- [fromRgb](UtilHsv.md#fromrgb)
- [toRgb](UtilHsv.md#torgb)

## Constructors

### constructor

• **new UtilHsv**(): [`UtilHsv`](UtilHsv.md)

#### Returns

[`UtilHsv`](UtilHsv.md)

## Methods

### fromRgb

▸ **fromRgb**(`color`): [`number`, `number`, `number`]

Returns HSV colors.
Ranges of components are:

* H: [0, 360)
* S: [0, 255]
* V: [0, 255]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `number` | a rgb color |

#### Returns

[`number`, `number`, `number`]

an array of hsv components

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-hsv.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-hsv.ts#L18)

___

### toRgb

▸ **toRgb**(`h`, `s`, `v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `h` | `number` |
| `s` | `number` |
| `v` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-hsv.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-hsv.ts#L45)
