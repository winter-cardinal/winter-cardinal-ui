[Winter Cardinal UI - v0.160.0](../index.md) / DDynamicTextStyle

# Class: DDynamicTextStyle

## Table of contents

### Constructors

- [constructor](DDynamicTextStyle.md#constructor)

### Properties

- [\_align](DDynamicTextStyle.md#_align)
- [\_clipping](DDynamicTextStyle.md#_clipping)
- [\_fill](DDynamicTextStyle.md#_fill)
- [\_fillApproved](DDynamicTextStyle.md#_fillapproved)
- [\_fontFamily](DDynamicTextStyle.md#_fontfamily)
- [\_fontId](DDynamicTextStyle.md#_fontid)
- [\_fontIdApproved](DDynamicTextStyle.md#_fontidapproved)
- [\_fontIdId](DDynamicTextStyle.md#_fontidid)
- [\_fontSize](DDynamicTextStyle.md#_fontsize)
- [\_fontStyle](DDynamicTextStyle.md#_fontstyle)
- [\_fontVariant](DDynamicTextStyle.md#_fontvariant)
- [\_fontWeight](DDynamicTextStyle.md#_fontweight)
- [\_id](DDynamicTextStyle.md#_id)
- [\_idApproved](DDynamicTextStyle.md#_idapproved)
- [\_lineHeight](DDynamicTextStyle.md#_lineheight)
- [\_onChange](DDynamicTextStyle.md#_onchange)
- [\_wordWrap](DDynamicTextStyle.md#_wordwrap)
- [DEFAULT\_OPTIONS](DDynamicTextStyle.md#default_options)

### Accessors

- [clipping](DDynamicTextStyle.md#clipping)
- [fill](DDynamicTextStyle.md#fill)
- [fillApproved](DDynamicTextStyle.md#fillapproved)
- [fontFamily](DDynamicTextStyle.md#fontfamily)
- [fontId](DDynamicTextStyle.md#fontid)
- [fontIdApproved](DDynamicTextStyle.md#fontidapproved)
- [fontSize](DDynamicTextStyle.md#fontsize)
- [fontStyle](DDynamicTextStyle.md#fontstyle)
- [fontVariant](DDynamicTextStyle.md#fontvariant)
- [fontWeight](DDynamicTextStyle.md#fontweight)
- [id](DDynamicTextStyle.md#id)
- [idApproved](DDynamicTextStyle.md#idapproved)
- [lineHeight](DDynamicTextStyle.md#lineheight)
- [wordWrap](DDynamicTextStyle.md#wordwrap)

### Methods

- [approve](DDynamicTextStyle.md#approve)
- [getDefaultOptions](DDynamicTextStyle.md#getdefaultoptions)
- [newDefaultOptions](DDynamicTextStyle.md#newdefaultoptions)
- [newFontId](DDynamicTextStyle.md#newfontid)
- [onChange](DDynamicTextStyle.md#onchange)
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

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L48)

## Properties

### \_align

• `Protected` **\_align**: [`DDynamicTextAlign`](../index.md#ddynamictextalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L35)

___

### \_clipping

• `Protected` **\_clipping**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L43)

___

### \_fill

• `Protected` **\_fill**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L41)

___

### \_fillApproved

• `Protected` **\_fillApproved**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L42)

___

### \_fontFamily

• `Protected` **\_fontFamily**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L36)

___

### \_fontId

• `Protected` **\_fontId**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L33)

___

### \_fontIdApproved

• `Protected` **\_fontIdApproved**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L34)

___

### \_fontIdId

• `Protected` **\_fontIdId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L32)

___

### \_fontSize

• `Protected` **\_fontSize**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L37)

___

### \_fontStyle

• `Protected` **\_fontStyle**: [`DFontStyle`](../index.md#dfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L38)

___

### \_fontVariant

• `Protected` **\_fontVariant**: [`DFontVariant`](../index.md#dfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L39)

___

### \_fontWeight

• `Protected` **\_fontWeight**: [`DFontWeight`](../index.md#dfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L40)

___

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L30)

___

### \_idApproved

• `Protected` **\_idApproved**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L31)

___

### \_lineHeight

• `Protected` **\_lineHeight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L45)

___

### \_onChange

• `Protected` **\_onChange**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L46)

___

### \_wordWrap

• `Protected` **\_wordWrap**: [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L44)

___

### DEFAULT\_OPTIONS

▪ `Static` `Protected` `Optional` **DEFAULT\_OPTIONS**: `Required`<[`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L28)

## Accessors

### clipping

• `get` **clipping**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L223)

• `set` **clipping**(`clipping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipping` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L227)

___

### fill

• `get` **fill**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L130)

• `set` **fill**(`fill`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fill` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L134)

___

### fillApproved

• `get` **fillApproved**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L146)

___

### fontFamily

• `get` **fontFamily**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L157)

• `set` **fontFamily**(`fontFamily`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontFamily` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L161)

___

### fontId

• `get` **fontId**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L121)

___

### fontIdApproved

• `get` **fontIdApproved**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L126)

___

### fontSize

• `get` **fontSize**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L168)

• `set` **fontSize**(`fontSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontSize` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L172)

___

### fontStyle

• `get` **fontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L179)

• `set` **fontStyle**(`fontStyle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontStyle` | [`DFontStyle`](../index.md#dfontstyle) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L183)

___

### fontVariant

• `get` **fontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L190)

• `set` **fontVariant**(`fontVariant`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontVariant` | [`DFontVariant`](../index.md#dfontvariant) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L194)

___

### fontWeight

• `get` **fontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L201)

• `set` **fontWeight**(`fontWeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontWeight` | [`DFontWeight`](../index.md#dfontweight) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:205](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L205)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L113)

___

### idApproved

• `get` **idApproved**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L117)

___

### lineHeight

• `get` **lineHeight**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:245](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L245)

• `set` **lineHeight**(`lineHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineHeight` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L249)

___

### wordWrap

• `get` **wordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L234)

• `set` **wordWrap**(`wordWrap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wordWrap` | [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L238)

## Methods

### approve

▸ **approve**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L150)

___

### getDefaultOptions

▸ `Protected` **getDefaultOptions**(): `Required`<[`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)\>

#### Returns

`Required`<[`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L88)

___

### newDefaultOptions

▸ `Protected` **newDefaultOptions**(): `Required`<[`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)\>

#### Returns

`Required`<[`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L97)

___

### newFontId

▸ `Protected` **newFontId**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L219)

___

### onChange

▸ `Protected` **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L141)

___

### update

▸ `Protected` **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L212)
