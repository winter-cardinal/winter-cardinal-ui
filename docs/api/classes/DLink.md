[Winter Cardinal UI - v0.414.0](../index.md) / DLink

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

• **new DLink**(`options?`): [`DLink`](DLink.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DLinkOptions`](../interfaces/DLinkOptions.md) |

#### Returns

[`DLink`](DLink.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L51)

## Properties

### \_checker

• `Protected` `Optional` **\_checker**: [`DLinkChecker`](../index.md#dlinkchecker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L47)

___

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L49)

___

### \_menu

• `Protected` `Optional` **\_menu**: [`DLinkMenu`](DLinkMenu.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L48)

___

### \_options

• `Protected` `Optional` **\_options**: [`DLinkOptions`](../interfaces/DLinkOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L43)

___

### \_target

• `Protected` **\_target**: [`DLinkTarget`](../index.md#dlinktarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L46)

___

### \_url

• `Protected` **\_url**: [`DLinkUrlMaker`](../index.md#dlinkurlmaker) \| [`DLinkUrlValue`](../index.md#dlinkurlvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L45)

___

### ANCHOR\_ELEMENT

▪ `Static` `Protected` `Optional` **ANCHOR\_ELEMENT**: `HTMLAnchorElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L40)

___

### MENU

▪ `Static` `Protected` `Optional` **MENU**: [`DLinkMenu`](DLinkMenu.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L41)

## Accessors

### checker

• `get` **checker**(): `undefined` \| [`DLinkChecker`](../index.md#dlinkchecker)

#### Returns

`undefined` \| [`DLinkChecker`](../index.md#dlinkchecker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L84)

• `set` **checker**(`checker`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `checker` | `undefined` \| [`DLinkChecker`](../index.md#dlinkchecker) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L88)

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L60)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L64)

___

### menu

• `get` **menu**(): [`DLinkMenu`](DLinkMenu.md)

#### Returns

[`DLinkMenu`](DLinkMenu.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L92)

___

### target

• `get` **target**(): [`DLinkTarget`](../index.md#dlinktarget)

#### Returns

[`DLinkTarget`](../index.md#dlinktarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L76)

• `set` **target**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DLinkTargetValue`](../index.md#dlinktargetvalue) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L80)

___

### url

• `get` **url**(): [`DLinkUrlMaker`](../index.md#dlinkurlmaker) \| [`DLinkUrlValue`](../index.md#dlinkurlvalue)

#### Returns

[`DLinkUrlMaker`](../index.md#dlinkurlmaker) \| [`DLinkUrlValue`](../index.md#dlinkurlvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L68)

• `set` **url**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | [`DLinkUrlMaker`](../index.md#dlinkurlmaker) \| [`DLinkUrlValue`](../index.md#dlinkurlvalue) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L72)

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

[src/main/typescript/wcardinal/ui/d-link.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L182)

___

### copy

▸ **copy**(): `void`

Copys the URL to the clipboard.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L152)

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

[src/main/typescript/wcardinal/ui/d-link.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L208)

___

### inNewWindow

▸ **inNewWindow**(`e?`): `boolean`

Returns true if the URL need to be opened in a new window.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | `MouseEvent` \| `KeyboardEvent` \| `TouchEvent` \| `InteractionEvent` | An event object. |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L230)

___

### newMenu

▸ **newMenu**(): [`DLinkMenu`](DLinkMenu.md)

#### Returns

[`DLinkMenu`](DLinkMenu.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L101)

___

### onClick

▸ **onClick**(`base`, `e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L251)

___

### open

▸ **open**(`e?`): `void`

Checks and opens the URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | `MouseEvent` \| `KeyboardEvent` \| `TouchEvent` \| `InteractionEvent` | An event object which triggered this method call. |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L163)

▸ **open**(`inNewWindow`): `void`

Checks and opens the URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inNewWindow` | `boolean` | True to open in a new window |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L170)

___

### toNormalizedTarget

▸ **toNormalizedTarget**(`target`): [`DLinkTarget`](../index.md#dlinktarget)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DLinkTargetValue`](../index.md#dlinktargetvalue) |

#### Returns

[`DLinkTarget`](../index.md#dlinktarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L145)

___

### toNormalizedUrl

▸ **toNormalizedUrl**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L138)

___

### toStringifiedUrl

▸ **toStringifiedUrl**(`target`, `onResolved`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DLinkUrlMaker`](../index.md#dlinkurlmaker) \| [`DLinkUrlValue`](../index.md#dlinkurlvalue) |
| `onResolved` | (`url`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-link.ts#L120)
