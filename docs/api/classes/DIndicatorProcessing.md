[Winter Cardinal UI - v0.407.0](../index.md) / DIndicatorProcessing

# Class: DIndicatorProcessing\<VALUE\>

## Type parameters

| Name |
| :------ |
| `VALUE` |

## Table of contents

### Constructors

- [constructor](DIndicatorProcessing.md#constructor)

### Properties

- [\_closeTimeoutId](DIndicatorProcessing.md#_closetimeoutid)
- [\_delayClose](DIndicatorProcessing.md#_delayclose)
- [\_delayDone](DIndicatorProcessing.md#_delaydone)
- [\_imageIndex](DIndicatorProcessing.md#_imageindex)
- [\_imageRotation](DIndicatorProcessing.md#_imagerotation)
- [\_imageRotationBackup](DIndicatorProcessing.md#_imagerotationbackup)
- [\_imageSource](DIndicatorProcessing.md#_imagesource)
- [\_imageSourceBackup](DIndicatorProcessing.md#_imagesourcebackup)
- [\_isImageEnabled](DIndicatorProcessing.md#_isimageenabled)
- [\_isTextEnabled](DIndicatorProcessing.md#_istextenabled)
- [\_parent](DIndicatorProcessing.md#_parent)
- [\_startTime](DIndicatorProcessing.md#_starttime)
- [\_state](DIndicatorProcessing.md#_state)
- [\_textValue](DIndicatorProcessing.md#_textvalue)
- [\_textValueBackup](DIndicatorProcessing.md#_textvaluebackup)
- [\_timeoutId](DIndicatorProcessing.md#_timeoutid)
- [\_wasReadOnly](DIndicatorProcessing.md#_wasreadonly)

### Accessors

- [theme](DIndicatorProcessing.md#theme)

### Methods

- [end](DIndicatorProcessing.md#end)
- [getType](DIndicatorProcessing.md#gettype)
- [onBegin](DIndicatorProcessing.md#onbegin)
- [onDone](DIndicatorProcessing.md#ondone)
- [onEnd](DIndicatorProcessing.md#onend)
- [onRejected](DIndicatorProcessing.md#onrejected)
- [onResolved](DIndicatorProcessing.md#onresolved)
- [reject](DIndicatorProcessing.md#reject)
- [resolve](DIndicatorProcessing.md#resolve)
- [start](DIndicatorProcessing.md#start)

## Constructors

### constructor

• **new DIndicatorProcessing**\<`VALUE`\>(`parent`, `options?`): [`DIndicatorProcessing`](DIndicatorProcessing.md)\<`VALUE`\>

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DImageBase`](DImageBase.md)\<`VALUE`, [`DThemeImageBase`](../interfaces/DThemeImageBase.md)\<`VALUE`\>, [`DImageBaseOptions`](../interfaces/DImageBaseOptions.md)\<`VALUE`, [`DThemeImageBase`](../interfaces/DThemeImageBase.md)\<`VALUE`\>, `any`\>\> |
| `options?` | [`DIndicatorProcessingOptions`](../interfaces/DIndicatorProcessingOptions.md)\<`VALUE`\> |

#### Returns

[`DIndicatorProcessing`](DIndicatorProcessing.md)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L72)

## Properties

### \_closeTimeoutId

• `Protected` `Optional` **\_closeTimeoutId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L60)

___

### \_delayClose

• `Protected` **\_delayClose**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L58)

___

### \_delayDone

• `Protected` **\_delayDone**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L57)

___

### \_imageIndex

• `Protected` **\_imageIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L65)

___

### \_imageRotation

• `Protected` **\_imageRotation**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L67)

___

### \_imageRotationBackup

• `Protected` `Optional` **\_imageRotationBackup**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L69)

___

### \_imageSource

• `Protected` **\_imageSource**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L66)

___

### \_imageSourceBackup

• `Protected` `Optional` **\_imageSourceBackup**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `DisplayObject` \| `Texture`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L68)

___

### \_isImageEnabled

• `Protected` **\_isImageEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L64)

___

### \_isTextEnabled

• `Protected` **\_isTextEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L61)

___

### \_parent

• `Protected` **\_parent**: [`DImageBase`](DImageBase.md)\<`VALUE`, [`DThemeImageBase`](../interfaces/DThemeImageBase.md)\<`VALUE`\>, [`DImageBaseOptions`](../interfaces/DImageBaseOptions.md)\<`VALUE`, [`DThemeImageBase`](../interfaces/DThemeImageBase.md)\<`VALUE`\>, `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L54)

___

### \_startTime

• `Protected` **\_startTime**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L56)

___

### \_state

• `Protected` **\_state**: `STATE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L55)

___

### \_textValue

• `Protected` **\_textValue**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L62)

___

### \_textValueBackup

• `Protected` `Optional` **\_textValueBackup**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L63)

___

### \_timeoutId

• `Protected` `Optional` **\_timeoutId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L59)

___

### \_wasReadOnly

• `Protected` **\_wasReadOnly**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L70)

## Accessors

### theme

• `get` **theme**(): [`DThemeIndicatorProcessing`](../interfaces/DThemeIndicatorProcessing.md)\<`VALUE`\>

#### Returns

[`DThemeIndicatorProcessing`](../interfaces/DThemeIndicatorProcessing.md)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:285](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L285)

## Methods

### end

▸ **end**(): [`DIndicatorProcessing`](DIndicatorProcessing.md)\<`VALUE`\>

#### Returns

[`DIndicatorProcessing`](DIndicatorProcessing.md)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L160)

___

### getType

▸ **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:281](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L281)

___

### onBegin

▸ **onBegin**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L113)

___

### onDone

▸ **onDone**(`delay`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delay` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:270](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L270)

___

### onEnd

▸ **onEnd**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L169)

___

### onRejected

▸ **onRejected**(`message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L252)

___

### onResolved

▸ **onResolved**(`message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L218)

___

### reject

▸ **reject**(`message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L236)

___

### resolve

▸ **resolve**(`message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L202)

___

### start

▸ **start**(): [`DIndicatorProcessing`](DIndicatorProcessing.md)\<`VALUE`\>

#### Returns

[`DIndicatorProcessing`](DIndicatorProcessing.md)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-indicator-processing.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-indicator-processing.ts#L100)
