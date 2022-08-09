[Winter Cardinal UI - v0.205.1](../index.md) / UtilInputEditingOptions

# Interface: UtilInputEditingOptions<VALUE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

## Table of contents

### Methods

- [formatter](UtilInputEditingOptions.md#formatter)
- [unformatter](UtilInputEditingOptions.md#unformatter)
- [validator](UtilInputEditingOptions.md#validator)

## Methods

### formatter

▸ `Optional` **formatter**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L30)

___

### unformatter

▸ `Optional` **unformatter**(`text`): `VALUE`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L31)

___

### validator

▸ `Optional` **validator**(`value`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |

#### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L32)
