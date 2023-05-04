[Winter Cardinal UI - v0.310.1](../index.md) / DDynamicTextMeasure

# Class: DDynamicTextMeasure

## Table of contents

### Constructors

- [constructor](DDynamicTextMeasure.md#constructor)

### Properties

- [RESULT](DDynamicTextMeasure.md#result)

### Methods

- [measure](DDynamicTextMeasure.md#measure)
- [measure5](DDynamicTextMeasure.md#measure5)

## Constructors

### constructor

• **new DDynamicTextMeasure**()

## Properties

### RESULT

▪ `Static` `Protected` **RESULT**: ``null`` \| [`DDynamicTextMeasureResult`](DDynamicTextMeasureResult.md) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure.ts#L22)

## Methods

### measure

▸ `Static` **measure**(`text`, `atlas`, `modifier`): [`DDynamicTextMeasureResult`](DDynamicTextMeasureResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `atlas` | ``null`` \| [`DynamicFontAtlas`](DynamicFontAtlas.md) |
| `modifier` | [`DDynamicTextMeasureModifier`](../interfaces/DDynamicTextMeasureModifier.md) |

#### Returns

[`DDynamicTextMeasureResult`](DDynamicTextMeasureResult.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure.ts#L24)

___

### measure5

▸ `Static` **measure5**(`iterator`, `clippingWidth`, `lineHeight`, `atlas`, `result`, `close`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterator` | [`UtilCharacterIterator`](UtilCharacterIterator.md) |
| `clippingWidth` | `number` |
| `lineHeight` | `number` |
| `atlas` | [`DynamicFontAtlas`](DynamicFontAtlas.md) |
| `result` | [`DDynamicTextMeasureResult`](DDynamicTextMeasureResult.md) |
| `close` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure.ts:309](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-measure.ts#L309)
