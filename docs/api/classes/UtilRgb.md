[Winter Cardinal UI - v0.165.0](../index.md) / UtilRgb

# Class: UtilRgb

## Table of contents

### Constructors

- [constructor](UtilRgb.md#constructor)

### Methods

- [blend](UtilRgb.md#blend)
- [brighten](UtilRgb.md#brighten)
- [darken](UtilRgb.md#darken)
- [fromCode](UtilRgb.md#fromcode)
- [fromRgb](UtilRgb.md#fromrgb)
- [toCode](UtilRgb.md#tocode)
- [toGrayscale](UtilRgb.md#tograyscale)
- [toLuma](UtilRgb.md#toluma)

## Constructors

### constructor

• **new UtilRgb**()

## Methods

### blend

▸ `Static` **blend**(`colorA`, `colorB`, `t`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorA` | `number` |
| `colorB` | `number` |
| `t` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-rgb.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-rgb.ts#L28)

___

### brighten

▸ `Static` **brighten**(`color`, `amount`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |
| `amount` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-rgb.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-rgb.ts#L46)

___

### darken

▸ `Static` **darken**(`color`, `amount`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |
| `amount` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-rgb.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-rgb.ts#L54)

___

### fromCode

▸ `Static` **fromCode**(`code`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-rgb.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-rgb.ts#L13)

___

### fromRgb

▸ `Static` **fromRgb**(`r`, `g`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-rgb.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-rgb.ts#L24)

___

### toCode

▸ `Static` **toCode**(`color`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-rgb.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-rgb.ts#L9)

___

### toGrayscale

▸ `Static` **toGrayscale**(`color`): `number`

Convertes the given color to a grayscale color.

**`see`** https://en.wikipedia.org/wiki/Grayscale

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `number` | a color to be converted |

#### Returns

`number`

a grayscale color

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-rgb.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-rgb.ts#L69)

___

### toLuma

▸ `Static` **toLuma**(`color`): `number`

Convertes the given color to a luma in the range [0, 255].

**`see`** https://en.wikipedia.org/wiki/Grayscale

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `number` | a color to be converted |

#### Returns

`number`

a luma in the range [0, 255]

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-rgb.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-rgb.ts#L81)
