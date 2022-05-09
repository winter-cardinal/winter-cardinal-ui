[Winter Cardinal UI - v0.164.0](../index.md) / DTextBaseTextOptions

# Interface: DTextBaseTextOptions<VALUE\>

[DTextBase](../classes/DTextBase.md) text options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

## Table of contents

### Properties

- [align](DTextBaseTextOptions.md#align)
- [alpha](DTextBaseTextOptions.md#alpha)
- [color](DTextBaseTextOptions.md#color)
- [style](DTextBaseTextOptions.md#style)
- [value](DTextBaseTextOptions.md#value)

### Methods

- [formatter](DTextBaseTextOptions.md#formatter)

## Properties

### align

• `Optional` **align**: [`DTextBaseTextAlignOptions`](DTextBaseTextAlignOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L37)

___

### alpha

• `Optional` **alpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L35)

___

### color

• `Optional` **color**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L34)

___

### style

• `Optional` **style**: [`DDynamicTextStyleOptions`](DDynamicTextStyleOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L36)

___

### value

• `Optional` **value**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L33)

## Methods

### formatter

▸ `Optional` **formatter**(`value`, `caller`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `caller` | `any` |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-text-base.ts#L38)
