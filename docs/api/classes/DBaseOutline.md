[Winter Cardinal UI - v0.167.0](../index.md) / DBaseOutline

# Class: DBaseOutline

## Implements

- [`DOutline`](../interfaces/DOutline.md)

## Table of contents

### Constructors

- [constructor](DBaseOutline.md#constructor)

### Properties

- [\_align](DBaseOutline.md#_align)
- [\_alpha](DBaseOutline.md#_alpha)
- [\_callback](DBaseOutline.md#_callback)
- [\_color](DBaseOutline.md#_color)
- [\_mask](DBaseOutline.md#_mask)
- [\_offset](DBaseOutline.md#_offset)
- [\_theme](DBaseOutline.md#_theme)
- [\_width](DBaseOutline.md#_width)

### Accessors

- [align](DBaseOutline.md#align)
- [alpha](DBaseOutline.md#alpha)
- [color](DBaseOutline.md#color)
- [mask](DBaseOutline.md#mask)
- [offset](DBaseOutline.md#offset)
- [width](DBaseOutline.md#width)

### Methods

- [getAlign](DBaseOutline.md#getalign)
- [getAlpha](DBaseOutline.md#getalpha)
- [getColor](DBaseOutline.md#getcolor)
- [getMask](DBaseOutline.md#getmask)
- [getOffset](DBaseOutline.md#getoffset)
- [getTheme](DBaseOutline.md#gettheme)
- [getWidth](DBaseOutline.md#getwidth)
- [setTheme](DBaseOutline.md#settheme)

## Constructors

### constructor

• **new DBaseOutline**(`theme`, `options?`, `callback?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |
| `options?` | [`DBaseOptions`](../interfaces/DBaseOptions.md)<`any`, `any`\> |
| `callback?` | () => `void` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L24)

## Properties

### \_align

• `Protected` `Optional` **\_align**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L20)

___

### \_alpha

• `Protected` `Optional` **\_alpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L17)

___

### \_callback

• `Protected` `Optional` **\_callback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L22)

___

### \_color

• `Protected` `Optional` **\_color**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L16)

___

### \_mask

• `Protected` `Optional` **\_mask**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L21)

___

### \_offset

• `Protected` `Optional` **\_offset**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L19)

___

### \_theme

• `Protected` **\_theme**: [`DThemeBase`](../interfaces/DThemeBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L15)

___

### \_width

• `Protected` `Optional` **\_width**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L18)

## Accessors

### align

• `get` **align**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Implementation of

[DOutline](../interfaces/DOutline.md).[align](../interfaces/DOutline.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L177)

• `set` **align**(`align`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `align` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\> |

#### Returns

`void`

#### Implementation of

[DOutline](../interfaces/DOutline.md).[align](../interfaces/DOutline.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L181)

___

### alpha

• `get` **alpha**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Implementation of

[DOutline](../interfaces/DOutline.md).[alpha](../interfaces/DOutline.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L90)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\> |

#### Returns

`void`

#### Implementation of

[DOutline](../interfaces/DOutline.md).[alpha](../interfaces/DOutline.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L94)

___

### color

• `get` **color**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Implementation of

[DOutline](../interfaces/DOutline.md).[color](../interfaces/DOutline.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L61)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\> |

#### Returns

`void`

#### Implementation of

[DOutline](../interfaces/DOutline.md).[color](../interfaces/DOutline.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L65)

___

### mask

• `get` **mask**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Implementation of

[DOutline](../interfaces/DOutline.md).[mask](../interfaces/DOutline.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L206)

• `set` **mask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\> |

#### Returns

`void`

#### Implementation of

[DOutline](../interfaces/DOutline.md).[mask](../interfaces/DOutline.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L210)

___

### offset

• `get` **offset**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Implementation of

[DOutline](../interfaces/DOutline.md).[offset](../interfaces/DOutline.md#offset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L148)

• `set` **offset**(`offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\> |

#### Returns

`void`

#### Implementation of

[DOutline](../interfaces/DOutline.md).[offset](../interfaces/DOutline.md#offset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L152)

___

### width

• `get` **width**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Implementation of

[DOutline](../interfaces/DOutline.md).[width](../interfaces/DOutline.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L119)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\> |

#### Returns

`void`

#### Implementation of

[DOutline](../interfaces/DOutline.md).[width](../interfaces/DOutline.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L123)

## Methods

### getAlign

▸ **getAlign**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DOutline](../interfaces/DOutline.md).[getAlign](../interfaces/DOutline.md#getalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L162)

___

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DOutline](../interfaces/DOutline.md).[getAlpha](../interfaces/DOutline.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L75)

___

### getColor

▸ **getColor**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Implementation of

[DOutline](../interfaces/DOutline.md).[getColor](../interfaces/DOutline.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L46)

___

### getMask

▸ **getMask**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DOutline](../interfaces/DOutline.md).[getMask](../interfaces/DOutline.md#getmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L191)

___

### getOffset

▸ **getOffset**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DOutline](../interfaces/DOutline.md).[getOffset](../interfaces/DOutline.md#getoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L133)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](../interfaces/DThemeBase.md)

#### Returns

[`DThemeBase`](../interfaces/DThemeBase.md)

#### Implementation of

[DOutline](../interfaces/DOutline.md).[getTheme](../interfaces/DOutline.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L38)

___

### getWidth

▸ **getWidth**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DOutline](../interfaces/DOutline.md).[getWidth](../interfaces/DOutline.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L104)

___

### setTheme

▸ **setTheme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |

#### Returns

`void`

#### Implementation of

[DOutline](../interfaces/DOutline.md).[setTheme](../interfaces/DOutline.md#settheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-outline.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-outline.ts#L42)
