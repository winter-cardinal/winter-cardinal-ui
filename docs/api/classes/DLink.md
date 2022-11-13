[Winter Cardinal UI - v0.227.0](../index.md) / DLink

# Class: DLink

## Table of contents

### Constructors

- [constructor](DLink.md#constructor)

### Properties

- [\_checker](DLink.md#_checker)
- [\_isEnabled](DLink.md#_isenabled)
- [\_menu](DLink.md#_menu)
- [\_options](DLink.md#_options)
- [\_target](DLink.md#_target)
- [\_url](DLink.md#_url)
- [ANCHOR\_ELEMENT](DLink.md#anchor_element)
- [MENU](DLink.md#menu)

### Accessors

- [checker](DLink.md#checker)
- [enable](DLink.md#enable)
- [menu](DLink.md#menu-1)
- [target](DLink.md#target)
- [url](DLink.md#url)

### Methods

- [check](DLink.md#check)
- [copy](DLink.md#copy)
- [exec](DLink.md#exec)
- [inNewWindow](DLink.md#innewwindow)
- [newMenu](DLink.md#newmenu)
- [onClick](DLink.md#onclick)
- [open](DLink.md#open)
- [toNormalizedTarget](DLink.md#tonormalizedtarget)
- [toNormalizedUrl](DLink.md#tonormalizedurl)
- [toStringifiedUrl](DLink.md#tostringifiedurl)

## Constructors

### constructor

• **new DLink**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DLinkOptions`](../interfaces/DLinkOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L52)

## Properties

### \_checker

• `Protected` `Optional` **\_checker**: [`DLinkChecker`](../index.md#dlinkchecker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L48)

___

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L50)

___

### \_menu

• `Protected` `Optional` **\_menu**: [`DLinkMenu`](DLinkMenu.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L49)

___

### \_options

• `Protected` `Optional` **\_options**: [`DLinkOptions`](../interfaces/DLinkOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L44)

___

### \_target

• `Protected` **\_target**: [`DLinkTarget`](../index.md#dlinktarget-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L47)

___

### \_url

• `Protected` **\_url**: [`DLinkUrlValue`](../index.md#dlinkurlvalue) \| [`DLinkUrlMaker`](../index.md#dlinkurlmaker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L46)

___

### ANCHOR\_ELEMENT

▪ `Static` `Protected` `Optional` **ANCHOR\_ELEMENT**: `HTMLAnchorElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L41)

___

### MENU

▪ `Static` `Protected` `Optional` **MENU**: [`DLinkMenu`](DLinkMenu.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L42)

## Accessors

### checker

• `get` **checker**(): `undefined` \| [`DLinkChecker`](../index.md#dlinkchecker)

#### Returns

`undefined` \| [`DLinkChecker`](../index.md#dlinkchecker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L85)

• `set` **checker**(`checker`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `checker` | `undefined` \| [`DLinkChecker`](../index.md#dlinkchecker) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L89)

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L61)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L65)

___

### menu

• `get` **menu**(): [`DLinkMenu`](DLinkMenu.md)

#### Returns

[`DLinkMenu`](DLinkMenu.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L93)

___

### target

• `get` **target**(): [`DLinkTarget`](../index.md#dlinktarget-1)

#### Returns

[`DLinkTarget`](../index.md#dlinktarget-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L77)

• `set` **target**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DLinkTargetValue`](../index.md#dlinktargetvalue) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L81)

___

### url

• `get` **url**(): [`DLinkUrlValue`](../index.md#dlinkurlvalue) \| [`DLinkUrlMaker`](../index.md#dlinkurlmaker)

#### Returns

[`DLinkUrlValue`](../index.md#dlinkurlvalue) \| [`DLinkUrlMaker`](../index.md#dlinkurlmaker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L69)

• `set` **url**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | [`DLinkUrlValue`](../index.md#dlinkurlvalue) \| [`DLinkUrlMaker`](../index.md#dlinkurlmaker) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L73)

## Methods

### check

▸ **check**(`url`, `inNewWindow`, `onResolved`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `inNewWindow` | `boolean` |
| `onResolved` | () => `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L183)

___

### copy

▸ **copy**(): `void`

Copys the URL to the clipboard.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L153)

___

### exec

▸ **exec**(`url`, `inNewWindow`): `void`

Opens the given URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | An URL to be opened |
| `inNewWindow` | `boolean` | True to open in a new window. |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L209)

___

### inNewWindow

▸ **inNewWindow**(`e?`): `boolean`

Returns true if the URL need to be opened in a new window.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | `InteractionEvent` \| `KeyboardEvent` \| `MouseEvent` \| `TouchEvent` | An event object. |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:231](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L231)

___

### newMenu

▸ `Protected` **newMenu**(): [`DLinkMenu`](DLinkMenu.md)

#### Returns

[`DLinkMenu`](DLinkMenu.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L102)

___

### onClick

▸ **onClick**(`base`, `e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L252)

___

### open

▸ **open**(`e?`): `void`

Checks and opens the URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | `InteractionEvent` \| `KeyboardEvent` \| `MouseEvent` \| `TouchEvent` | An event object which triggered this method call. |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L164)

▸ **open**(`inNewWindow`): `void`

Checks and opens the URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inNewWindow` | `boolean` | True to open in a new window |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L171)

___

### toNormalizedTarget

▸ `Protected` **toNormalizedTarget**(`target`): [`DLinkTarget`](../index.md#dlinktarget-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DLinkTargetValue`](../index.md#dlinktargetvalue) |

#### Returns

[`DLinkTarget`](../index.md#dlinktarget-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L146)

___

### toNormalizedUrl

▸ `Protected` **toNormalizedUrl**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L139)

___

### toStringifiedUrl

▸ `Protected` **toStringifiedUrl**(`target`, `onResolved`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DLinkUrlValue`](../index.md#dlinkurlvalue) \| [`DLinkUrlMaker`](../index.md#dlinkurlmaker) |
| `onResolved` | (`url`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-link.ts#L121)
