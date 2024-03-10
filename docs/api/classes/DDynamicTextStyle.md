[Winter Cardinal UI - v0.414.0](../index.md) / DDynamicTextStyle

# Class: DDynamicTextStyle

## Hierarchy

- `EventEmitter`

  ↳ **`DDynamicTextStyle`**

## Table of contents

### Constructors

- [constructor](DDynamicTextStyle.md#constructor)

### Properties

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
- [\_wordWrap](DDynamicTextStyle.md#_wordwrap)

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

- [addListener](DDynamicTextStyle.md#addlistener)
- [approve](DDynamicTextStyle.md#approve)
- [emit](DDynamicTextStyle.md#emit)
- [eventNames](DDynamicTextStyle.md#eventnames)
- [fit](DDynamicTextStyle.md#fit)
- [listenerCount](DDynamicTextStyle.md#listenercount)
- [listeners](DDynamicTextStyle.md#listeners)
- [off](DDynamicTextStyle.md#off)
- [on](DDynamicTextStyle.md#on)
- [onChange](DDynamicTextStyle.md#onchange)
- [once](DDynamicTextStyle.md#once)
- [removeAllListeners](DDynamicTextStyle.md#removealllisteners)
- [removeListener](DDynamicTextStyle.md#removelistener)
- [toFontId](DDynamicTextStyle.md#tofontid)
- [unfit](DDynamicTextStyle.md#unfit)
- [update](DDynamicTextStyle.md#update)

## Constructors

### constructor

• **new DDynamicTextStyle**(`parent`, `theme`, `options?`): [`DDynamicTextStyle`](DDynamicTextStyle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DDynamicTextStyleParent`](../interfaces/DDynamicTextStyleParent.md) |
| `theme` | [`DThemeDynamicTextStyle`](../interfaces/DThemeDynamicTextStyle.md) |
| `options?` | [`DDynamicTextStyleOptions`](../interfaces/DDynamicTextStyleOptions.md) |

#### Returns

[`DDynamicTextStyle`](DDynamicTextStyle.md)

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L60)

## Properties

### \_clipping

• `Protected` **\_clipping**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L54)

___

### \_fill

• `Protected` **\_fill**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L52)

___

### \_fillApproved

• `Protected` **\_fillApproved**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L53)

___

### \_fitting

• `Protected` **\_fitting**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L55)

___

### \_fontFamily

• `Protected` **\_fontFamily**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L45)

___

### \_fontId

• `Protected` **\_fontId**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L42)

___

### \_fontIdApproved

• `Protected` **\_fontIdApproved**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L43)

___

### \_fontIdFontSize

• `Protected` **\_fontIdFontSize**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L44)

___

### \_fontIdId

• `Protected` **\_fontIdId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L41)

___

### \_fontSize

• `Protected` **\_fontSize**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L46)

___

### \_fontSizeFitted

• `Protected` **\_fontSizeFitted**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L47)

___

### \_fontStyle

• `Protected` **\_fontStyle**: [`DFontStyle`](../index.md#dfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L49)

___

### \_fontVariant

• `Protected` **\_fontVariant**: [`DFontVariant`](../index.md#dfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L50)

___

### \_fontWeight

• `Protected` **\_fontWeight**: [`DFontWeight`](../index.md#dfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L51)

___

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L39)

___

### \_idApproved

• `Protected` **\_idApproved**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L40)

___

### \_isFontFitted

• `Protected` **\_isFontFitted**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L48)

___

### \_lineHeight

• `Protected` **\_lineHeight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L57)

___

### \_lineHeightFitted

• `Protected` **\_lineHeightFitted**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L58)

___

### \_wordWrap

• `Protected` **\_wordWrap**: [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L56)

## Accessors

### clipping

• `get` **clipping**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L233)

• `set` **clipping**(`clipping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipping` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L237)

___

### fill

• `get` **fill**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L127)

• `set` **fill**(`fill`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fill` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L131)

___

### fillApproved

• `get` **fillApproved**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L143)

___

### fitting

• `get` **fitting**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:244](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L244)

• `set` **fitting**(`fitting`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fitting` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:248](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L248)

___

### fontFamily

• `get` **fontFamily**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L154)

• `set` **fontFamily**(`fontFamily`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontFamily` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L158)

___

### fontId

• `get` **fontId**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L113)

___

### fontIdApproved

• `get` **fontIdApproved**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L123)

___

### fontIdFontSize

• `get` **fontIdFontSize**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L118)

___

### fontSize

• `get` **fontSize**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L165)

• `set` **fontSize**(`fontSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontSize` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L169)

___

### fontSizeFitted

• `get` **fontSizeFitted**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L179)

___

### fontStyle

• `get` **fontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L187)

• `set` **fontStyle**(`fontStyle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontStyle` | [`DFontStyle`](../index.md#dfontstyle) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L191)

___

### fontVariant

• `get` **fontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L198)

• `set` **fontVariant**(`fontVariant`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontVariant` | [`DFontVariant`](../index.md#dfontvariant) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L202)

___

### fontWeight

• `get` **fontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L209)

• `set` **fontWeight**(`fontWeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fontWeight` | [`DFontWeight`](../index.md#dfontweight) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:213](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L213)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L105)

___

### idApproved

• `get` **idApproved**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L109)

___

### isFontFitted

• `get` **isFontFitted**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L183)

___

### lineHeight

• `get` **lineHeight**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:266](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L266)

• `set` **lineHeight**(`lineHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineHeight` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:270](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L270)

___

### lineHeightFitted

• `get` **lineHeightFitted**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:280](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L280)

• `set` **lineHeightFitted**(`lineHeightFitted`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineHeightFitted` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L284)

___

### wordWrap

• `get` **wordWrap**(): [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Returns

[`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L255)

• `set` **wordWrap**(`wordWrap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wordWrap` | [`DDynamicTextStyleWordWrap`](../index.md#ddynamictextstylewordwrap) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L259)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): `this`

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### approve

▸ **approve**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L147)

___

### emit

▸ **emit**(`event`, `...args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `...args` | `any`[] | Arguments that are passed to registered listeners |

#### Returns

`boolean`

`true` if the event had listeners, else `false`.

#### Inherited from

utils.EventEmitter.emit

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25441

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

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

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L291)

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`number`

#### Inherited from

utils.EventEmitter.listenerCount

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25432

___

### listeners

▸ **listeners**(`event`): `Function`[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`Function`[]

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): `this`

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

`this`

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25489

___

### on

▸ **on**(`event`, `fn`, `context?`): `this`

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

`this`

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L138)

___

### once

▸ **once**(`event`, `fn`, `context?`): `this`

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

`this`

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25463

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): `this`

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

`this`

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25483

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): `this`

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

`this`

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

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

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L229)

___

### unfit

▸ **unfit**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L311)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-dynamic-text-style.ts#L220)
