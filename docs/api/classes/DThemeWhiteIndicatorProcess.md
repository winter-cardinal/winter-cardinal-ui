[Winter Cardinal UI - v0.407.0](../index.md) / DThemeWhiteIndicatorProcess

# Class: DThemeWhiteIndicatorProcess\<VALUE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

## Hierarchy

- **`DThemeWhiteIndicatorProcess`**

  ↳ [`DThemeWhiteEnUsIndicatorProcessing`](DThemeWhiteEnUsIndicatorProcessing.md)

  ↳ [`DThemeWhiteJaJpIndicatorProcessing`](DThemeWhiteJaJpIndicatorProcessing.md)

## Implements

- [`DThemeIndicatorProcessing`](../interfaces/DThemeIndicatorProcessing.md)\<`VALUE`\>

## Table of contents

### Constructors

- [constructor](DThemeWhiteIndicatorProcess.md#constructor)

### Methods

- [getProcessCloseDelay](DThemeWhiteIndicatorProcess.md#getprocessclosedelay)
- [getProcessDoneDelay](DThemeWhiteIndicatorProcess.md#getprocessdonedelay)
- [getProcessImageIndex](DThemeWhiteIndicatorProcess.md#getprocessimageindex)
- [isProcessImageEnabled](DThemeWhiteIndicatorProcess.md#isprocessimageenabled)
- [isProcessTextEnabled](DThemeWhiteIndicatorProcess.md#isprocesstextenabled)
- [newProcessImageRotation](DThemeWhiteIndicatorProcess.md#newprocessimagerotation)
- [newProcessImageSource](DThemeWhiteIndicatorProcess.md#newprocessimagesource)
- [newProcessTextValue](DThemeWhiteIndicatorProcess.md#newprocesstextvalue)

## Constructors

### constructor

• **new DThemeWhiteIndicatorProcess**\<`VALUE`\>(): [`DThemeWhiteIndicatorProcess`](DThemeWhiteIndicatorProcess.md)\<`VALUE`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

#### Returns

[`DThemeWhiteIndicatorProcess`](DThemeWhiteIndicatorProcess.md)\<`VALUE`\>

## Methods

### getProcessCloseDelay

▸ **getProcessCloseDelay**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeIndicatorProcessing](../interfaces/DThemeIndicatorProcessing.md).[getProcessCloseDelay](../interfaces/DThemeIndicatorProcessing.md#getprocessclosedelay)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts#L63)

___

### getProcessDoneDelay

▸ **getProcessDoneDelay**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeIndicatorProcessing](../interfaces/DThemeIndicatorProcessing.md).[getProcessDoneDelay](../interfaces/DThemeIndicatorProcessing.md#getprocessdonedelay)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts#L59)

___

### getProcessImageIndex

▸ **getProcessImageIndex**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeIndicatorProcessing](../interfaces/DThemeIndicatorProcessing.md).[getProcessImageIndex](../interfaces/DThemeIndicatorProcessing.md#getprocessimageindex)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts#L77)

___

### isProcessImageEnabled

▸ **isProcessImageEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeIndicatorProcessing](../interfaces/DThemeIndicatorProcessing.md).[isProcessImageEnabled](../interfaces/DThemeIndicatorProcessing.md#isprocessimageenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts#L73)

___

### isProcessTextEnabled

▸ **isProcessTextEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeIndicatorProcessing](../interfaces/DThemeIndicatorProcessing.md).[isProcessTextEnabled](../interfaces/DThemeIndicatorProcessing.md#isprocesstextenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts#L67)

___

### newProcessImageRotation

▸ **newProcessImageRotation**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Implementation of

[DThemeIndicatorProcessing](../interfaces/DThemeIndicatorProcessing.md).[newProcessImageRotation](../interfaces/DThemeIndicatorProcessing.md#newprocessimagerotation)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts#L85)

___

### newProcessImageSource

▸ **newProcessImageSource**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\>

#### Implementation of

[DThemeIndicatorProcessing](../interfaces/DThemeIndicatorProcessing.md).[newProcessImageSource](../interfaces/DThemeIndicatorProcessing.md#newprocessimagesource)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts#L81)

___

### newProcessTextValue

▸ **newProcessTextValue**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Implementation of

[DThemeIndicatorProcessing](../interfaces/DThemeIndicatorProcessing.md).[newProcessTextValue](../interfaces/DThemeIndicatorProcessing.md#newprocesstextvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/white/d-theme-white-indicator-processing.ts#L71)
