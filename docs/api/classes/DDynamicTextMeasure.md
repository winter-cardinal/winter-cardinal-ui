[Winter Cardinal UI](../README.md) / DDynamicTextMeasure

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

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dynamic-text-measure.ts#L21)

## Methods

### measure

▸ `Static` **measure**(`text`, `atlas`, `clipping`): [`DDynamicTextMeasureResult`](DDynamicTextMeasureResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `atlas` | ``null`` \| [`DynamicFontAtlas`](DynamicFontAtlas.md) |
| `clipping` | `Clipping` |

#### Returns

[`DDynamicTextMeasureResult`](DDynamicTextMeasureResult.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dynamic-text-measure.ts#L23)

___

### measure5

▸ `Static` **measure5**(`iterator`, `clippingWidth`, `lineHeight`, `atlas`, `result`, `close`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterator` | `UtilCharacterIterator` |
| `clippingWidth` | `number` |
| `lineHeight` | `number` |
| `atlas` | [`DynamicFontAtlas`](DynamicFontAtlas.md) |
| `result` | [`DDynamicTextMeasureResult`](DDynamicTextMeasureResult.md) |
| `close` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-measure.ts:304](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-dynamic-text-measure.ts#L304)
