[Winter Cardinal UI - v0.310.1](../index.md) / DDynamicTextMeasureResult

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
- [scale](DDynamicTextMeasureResult.md#scale)
- [scaled](DDynamicTextMeasureResult.md#scaled)
- [width](DDynamicTextMeasureResult.md#width)
- [x](DDynamicTextMeasureResult.md#x)
- [y](DDynamicTextMeasureResult.md#y)

### Methods

- [end](DDynamicTextMeasureResult.md#end)
- [fit](DDynamicTextMeasureResult.md#fit)
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

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L18)

## Properties

### characters

• **characters**: [`DDynamicTextMeasureResultCharacter`](DDynamicTextMeasureResultCharacter.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L10)

___

### clipped

• **clipped**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L13)

___

### count

• **count**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L6)

___

### countPerLine

• **countPerLine**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L7)

___

### height

• **height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L9)

___

### scale

• **scale**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L11)

___

### scaled

• **scaled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L12)

___

### width

• **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L8)

___

### x

• **x**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L15)

___

### y

• **y**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L16)

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

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L148)

___

### fit

▸ **fit**(`width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L131)

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

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L45)

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

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L57)

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

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L76)

___

### pop

▸ **pop**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L118)

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

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L61)

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

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L32)

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

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure-result.ts#L83)
