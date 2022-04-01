[Winter Cardinal UI - v0.160.0](../index.md) / DLink

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
- [menu](DLink.md#menu)
- [target](DLink.md#target)
- [url](DLink.md#url)

### Methods

- [add](DLink.md#add)
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

[src/main/typescript/wcardinal/ui/d-link.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L53)

## Properties

### \_checker

• `Protected` `Optional` **\_checker**: [`DLinkChecker`](../index.md#dlinkchecker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L49)

___

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L51)

___

### \_menu

• `Protected` `Optional` **\_menu**: [`DLinkMenu`](DLinkMenu.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L50)

___

### \_options

• `Protected` `Optional` **\_options**: [`DLinkOptions`](../interfaces/DLinkOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L45)

___

### \_target

• `Protected` **\_target**: [`DLinkTarget`](../index.md#dlinktarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L48)

___

### \_url

• `Protected` **\_url**: [`DLinkUrlValue`](../index.md#dlinkurlvalue) \| [`DLinkUrlMaker`](../index.md#dlinkurlmaker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L47)

___

### ANCHOR\_ELEMENT

▪ `Static` `Protected` `Optional` **ANCHOR\_ELEMENT**: `HTMLAnchorElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L42)

___

### MENU

▪ `Static` `Protected` `Optional` **MENU**: [`DLinkMenu`](DLinkMenu.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L43)

## Accessors

### checker

• `get` **checker**(): `undefined` \| [`DLinkChecker`](../index.md#dlinkchecker)

#### Returns

`undefined` \| [`DLinkChecker`](../index.md#dlinkchecker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L86)

• `set` **checker**(`checker`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `checker` | `undefined` \| [`DLinkChecker`](../index.md#dlinkchecker) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L90)

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L62)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L66)

___

### menu

• `get` **menu**(): [`DLinkMenu`](DLinkMenu.md)

#### Returns

[`DLinkMenu`](DLinkMenu.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L94)

___

### target

• `get` **target**(): [`DLinkTarget`](../index.md#dlinktarget)

#### Returns

[`DLinkTarget`](../index.md#dlinktarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L78)

• `set` **target**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DLinkTargetValue`](../index.md#dlinktargetvalue) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L82)

___

### url

• `get` **url**(): [`DLinkUrlValue`](../index.md#dlinkurlvalue) \| [`DLinkUrlMaker`](../index.md#dlinkurlmaker)

#### Returns

[`DLinkUrlValue`](../index.md#dlinkurlvalue) \| [`DLinkUrlMaker`](../index.md#dlinkurlmaker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L70)

• `set` **url**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | [`DLinkUrlValue`](../index.md#dlinkurlvalue) \| [`DLinkUrlMaker`](../index.md#dlinkurlmaker) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L74)

## Methods

### add

▸ **add**(`base`, `onSelect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `onSelect` | (`e`: `InteractionEvent`) => `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:253](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L253)

___

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

[src/main/typescript/wcardinal/ui/d-link.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L184)

___

### copy

▸ **copy**(): `void`

Copys the URL to the clipboard.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L154)

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

[src/main/typescript/wcardinal/ui/d-link.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L210)

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

[src/main/typescript/wcardinal/ui/d-link.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L232)

___

### newMenu

▸ `Protected` **newMenu**(): [`DLinkMenu`](DLinkMenu.md)

#### Returns

[`DLinkMenu`](DLinkMenu.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L103)

___

### onClick

▸ **onClick**(`base`, `isSimulated`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `isSimulated` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:261](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L261)

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

[src/main/typescript/wcardinal/ui/d-link.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L165)

▸ **open**(`inNewWindow`): `void`

Checks and opens the URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inNewWindow` | `boolean` | True to open in a new window |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L172)

___

### toNormalizedTarget

▸ `Protected` **toNormalizedTarget**(`target`): [`DLinkTarget`](../index.md#dlinktarget)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DLinkTargetValue`](../index.md#dlinktargetvalue) |

#### Returns

[`DLinkTarget`](../index.md#dlinktarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L147)

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

[src/main/typescript/wcardinal/ui/d-link.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L140)

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

[src/main/typescript/wcardinal/ui/d-link.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-link.ts#L122)
