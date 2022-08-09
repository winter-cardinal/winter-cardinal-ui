[Winter Cardinal UI - v0.205.1](../index.md) / DDynamicTextMeasureResult

# Class: DDynamicTextMeasureResult

## Table of contents

### Constructors

- [constructor](DDynamicTextMeasureResult.md#constructor)

### Properties

- [characters](DDynamicTextMeasureResult.md#characters)
- [clipped](DDynamicTextMeasureResult.md#clipped)
- [count](DDynamicTextMeasureResult.md#count)
- [countPerLine](DDynamicTextMeasureResult.md#countperline)
- [height](DDynamicTextMeasureResult.md#height)
- [width](DDynamicTextMeasureResult.md#width)
- [x](DDynamicTextMeasureResult.md#x)
- [y](DDynamicTextMeasureResult.md#y)

### Methods

- [end](DDynamicTextMeasureResult.md#end)
- [isPushable](DDynamicTextMeasureResult.md#ispushable)
- [isPushableAtNewLine](DDynamicTextMeasureResult.md#ispushableatnewline)
- [newLine](DDynamicTextMeasureResult.md#newline)
- [pop](DDynamicTextMeasureResult.md#pop)
- [push](DDynamicTextMeasureResult.md#push)
- [start](DDynamicTextMeasureResult.md#start)
- [wordWrap](DDynamicTextMeasureResult.md#wordwrap)

## Constructors

### constructor

• **new DDynamicTextMeasureResult**()

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L16)

## Properties

### characters

• **characters**: [`DDynamicTextMeasureResultCharacter`](DDynamicTextMeasureResultCharacter.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L10)

___

### clipped

• **clipped**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L11)

___

### count

• **count**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L6)

___

### countPerLine

• **countPerLine**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L7)

___

### height

• **height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L9)

___

### width

• **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L8)

___

### x

• **x**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L13)

___

### y

• **y**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L14)

## Methods

### end

▸ **end**(`lineHeight`, `fontHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineHeight` | `number` |
| `fontHeight` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L125)

___

### isPushable

▸ **isPushable**(`width`, `character`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `character` | [`DynamicFontAtlasCharacter`](DynamicFontAtlasCharacter.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L39)

___

### isPushableAtNewLine

▸ **isPushableAtNewLine**(`height`, `lineHeight`, `fontHeight`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `lineHeight` | `number` |
| `fontHeight` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L51)

___

### newLine

▸ **newLine**(`lineHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineHeight` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L70)

___

### pop

▸ **pop**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L112)

___

### push

▸ **push**(`character`, `isWrappable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `character` | [`DynamicFontAtlasCharacter`](DynamicFontAtlasCharacter.md) |
| `isWrappable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L55)

___

### start

▸ **start**(`lineHeight`, `fontHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineHeight` | `number` |
| `fontHeight` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L28)

___

### wordWrap

▸ **wordWrap**(`lineHeight`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineHeight` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L77)
