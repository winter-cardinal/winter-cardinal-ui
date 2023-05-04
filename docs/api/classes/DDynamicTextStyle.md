[Winter Cardinal UI - v0.310.1](../index.md) / DDynamicTextStyle

# Class: DDynamicTextStyle

## Table of contents

### Constructors

- [constructor](DDynamicTextStyle.md#constructor)

### Properties

- [\_align](DDynamicTextStyle.md#_align)
- [\_clipping](DDynamicTextStyle.md#_clipping)
- [\_fill](DDynamicTextStyle.md#_fill)
- [\_fillApproved](DDynamicTextStyle.md#_fillapproved)
- [\_fitting](DDynamicTextStyle.md#_fitting)
- [\_fontFamily](DDynamicTextStyle.md#_fontfamily)
- [\_fontId](DDynamicTextStyle.md#_fontid)
- [\_fontIdApproved](DDynamicTextStyle.md#_fontidapproved)
- [\_fontIdFontSize](DDynamicTextStyle.md#_fontidfontsize)
- [\_fontIdId](DDynamicTextStyle.md#_fontidid)
- [\_fontSize](DDynamicTextStyle.md#_fontsize)
- [\_fontSizeFitted](DDynamicTextStyle.md#_fontsizefitted)
- [\_fontStyle](DDynamicTextStyle.md#_fontstyle)
- [\_fontVariant](DDynamicTextStyle.md#_fontvariant)
- [\_fontWeight](DDynamicTextStyle.md#_fontweight)
- [\_id](DDynamicTextStyle.md#_id)
- [\_idApproved](DDynamicTextStyle.md#_idapproved)
- [\_isFontFitted](DDynamicTextStyle.md#_isfontfitted)
- [\_lineHeight](DDynamicTextStyle.md#_lineheight)
- [\_lineHeightFitted](DDynamicTextStyle.md#_lineheightfitted)
- [\_onChange](DDynamicTextStyle.md#_onchange)
- [\_wordWrap](DDynamicTextStyle.md#_wordwrap)
- [DEFAULT\_OPTIONS](DDynamicTextStyle.md#default_options)

### Accessors

- [clipping](DDynamicTextStyle.md#clipping)
- [fill](DDynamicTextStyle.md#fill)
- [fillApproved](DDynamicTextStyle.md#fillapproved)
- [fitting](DDynamicTextStyle.md#fitting)
- [fontFamily](DDynamicTextStyle.md#fontfamily)
- [fontId](DDynamicTextStyle.md#fontid)
- [fontIdApproved](DDynamicTextStyle.md#fontidapproved)
- [fontIdFontSize](DDynamicTextStyle.md#fontidfontsize)
- [fontSize](DDynamicTextStyle.md#fontsize)
- [fontSizeFitted](DDynamicTextStyle.md#fontsizefitted)
- [fontStyle](DDynamicTextStyle.md#fontstyle)
- [fontVariant](DDynamicTextStyle.md#fontvariant)
- [fontWeight](DDynamicTextStyle.md#fontweight)
- [id](DDynamicTextStyle.md#id)
- [idApproved](DDynamicTextStyle.md#idapproved)
- [isFontFitted](DDynamicTextStyle.md#isfontfitted)
- [lineHeight](DDynamicTextStyle.md#lineheight)
- [lineHeightFitted](DDynamicTextStyle.md#lineheightfitted)
- [wordWrap](DDynamicTextStyle.md#wordwrap)

### Methods

- [approve](DDynamicTextStyle.md#approve)
- [fit](DDynamicTextStyle.md#fit)
- [getDefaultOptions](DDynamicTextStyle.md#getdefaultoptions)
- [newDefaultOptions](DDynamicTextStyle.md#newdefaultoptions)
- [onChange](DDynamicTextStyle.md#onchange)
- [toFontId](DDynamicTextStyle.md#tofontid)
- [unfit](DDynamicTextStyle.md#unfit)
- [update](DDynamicTextStyle.md#update)

## Constructors

### constructor

• **new DDynamicTextStyle**(`options`, `onChange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `undefined` \| [`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md) |
| `onChange` | () => `void` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L54)

## Properties

### \_align

• `Protected` **\_align**: [`DDynamicTextAlign`](../index.md#ddynamictextalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L37)

___

### \_clipping

• `Protected` **\_clipping**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L47)

___

### \_fill

• `Protected` **\_fill**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L45)

___

### \_fillApproved

• `Protected` **\_fillApproved**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L46)

___

### \_fitting

• `Protected` **\_fitting**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L48)

___

### \_fontFamily

• `Protected` **\_fontFamily**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L38)

___

### \_fontId

• `Protected` **\_fontId**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L34)

___

### \_fontIdApproved

• `Protected` **\_fontIdApproved**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L35)

___

### \_fontIdFontSize

• `Protected` **\_fontIdFontSize**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L36)

___

### \_fontIdId

• `Protected` **\_fontIdId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L33)

___

### \_fontSize

• `Protected` **\_fontSize**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L39)

___

### \_fontSizeFitted

• `Protected` **\_fontSizeFitted**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L40)

___

### \_fontStyle

• `Protected` **\_fontStyle**: [`DFontStyle`](../index.md#dfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L42)

___

### \_fontVariant

• `Protected` **\_fontVariant**: [`DFontVariant`](../index.md#dfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L43)

___

### \_fontWeight

• `Protected` **\_fontWeight**: [`DFontWeight`](../index.md#dfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L44)

___

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L31)

___

### \_idApproved

• `Protected` **\_idApproved**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L32)

___

### \_isFontFitted

• `Protected` **\_isFontFitted**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L41)

___

### \_lineHeight

• `Protected` **\_lineHeight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L50)

___

### \_lineHeightFitted

• `Protected` **\_lineHeightFitted**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L51)

___

### \_onChange

• `Protected` **\_onChange**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L52)

___

### \_wordWrap

• `Protected` **\_wordWrap**: [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L49)

___

### DEFAULT\_OPTIONS

▪ `Static` `Protected` `Optional` **DEFAULT\_OPTIONS**: `Required`<[`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L29)

## Accessors

### clipping

• `get` **clipping**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:254](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L254)

• `set` **clipping**(`clipping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipping` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:258](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L258)

___

### fill

• `get` **fill**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L148)

• `set` **fill**(`fill`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fill` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L152)

___

### fillApproved

• `get` **fillApproved**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L164)

___

### fitting

• `get` **fitting**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:265](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L265)

• `set` **fitting**(`fitting`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fitting` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:269](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L269)

___

### fontFamily

• `get` **fontFamily**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L175)

• `set` **fontFamily**(`fontFamily`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontFamily` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L179)

___

### fontId

• `get` **fontId**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L134)

___

### fontIdApproved

• `get` **fontIdApproved**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L144)

___

### fontIdFontSize

• `get` **fontIdFontSize**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L139)

___

### fontSize

• `get` **fontSize**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L186)

• `set` **fontSize**(`fontSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontSize` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L190)

___

### fontSizeFitted

• `get` **fontSizeFitted**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L200)

___

### fontStyle

• `get` **fontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L208)

• `set` **fontStyle**(`fontStyle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontStyle` | [`DFontStyle`](../index.md#dfontstyle) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L212)

___

### fontVariant

• `get` **fontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L219)

• `set` **fontVariant**(`fontVariant`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontVariant` | [`DFontVariant`](../index.md#dfontvariant) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L223)

___

### fontWeight

• `get` **fontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L230)

• `set` **fontWeight**(`fontWeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontWeight` | [`DFontWeight`](../index.md#dfontweight) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L234)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L126)

___

### idApproved

• `get` **idApproved**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L130)

___

### isFontFitted

• `get` **isFontFitted**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L204)

___

### lineHeight

• `get` **lineHeight**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L287)

• `set` **lineHeight**(`lineHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineHeight` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L291)

___

### lineHeightFitted

• `get` **lineHeightFitted**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L301)

• `set` **lineHeightFitted**(`lineHeightFitted`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineHeightFitted` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:305](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L305)

___

### wordWrap

• `get` **wordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap-1)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L276)

• `set` **wordWrap**(`wordWrap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wordWrap` | [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap-1) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:280](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L280)

## Methods

### approve

▸ **approve**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L168)

___

### fit

▸ **fit**(`fontSize`, `lineHeight`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontSize` | `number` |
| `lineHeight` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:312](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L312)

___

### getDefaultOptions

▸ `Protected` **getDefaultOptions**(): `Required`<[`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)\>

#### Returns

`Required`<[`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L100)

___

### newDefaultOptions

▸ `Protected` **newDefaultOptions**(): `Required`<[`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)\>

#### Returns

`Required`<[`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L109)

___

### onChange

▸ `Protected` **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L159)

___

### toFontId

▸ **toFontId**(`fontSize`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontSize` | `number` |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:250](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L250)

___

### unfit

▸ **unfit**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:332](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L332)

___

### update

▸ `Protected` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L241)
