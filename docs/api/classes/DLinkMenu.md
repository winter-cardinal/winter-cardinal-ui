[Winter Cardinal UI - v0.155.0](../index.md) / DLinkMenu

# Class: DLinkMenu

## Table of contents

### Constructors

- [constructor](DLinkMenu.md#constructor)

### Properties

- [\_isEnabled](DLinkMenu.md#_isenabled)
- [\_menu](DLinkMenu.md#_menu)
- [\_options](DLinkMenu.md#_options)
- [\_parent](DLinkMenu.md#_parent)

### Accessors

- [enable](DLinkMenu.md#enable)

### Methods

- [get](DLinkMenu.md#get)
- [newMenu](DLinkMenu.md#newmenu)
- [onSelect](DLinkMenu.md#onselect)
- [open](DLinkMenu.md#open)
- [toMenu](DLinkMenu.md#tomenu)

## Constructors

### constructor

• **new DLinkMenu**(`parent`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DLinkMenuParent`](../interfaces/DLinkMenuParent.md) |
| `options` | [`DLinkMenuOptions`](../index.md#dlinkmenuoptions) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-link-menu.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-link-menu.ts#L26)

## Properties

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link-menu.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-link-menu.ts#L24)

___

### \_menu

• `Protected` `Optional` **\_menu**: [`DMenu`](DMenu.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-link-menu.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-link-menu.ts#L22)

___

### \_options

• `Protected` **\_options**: [`DMenuOptions`](../interfaces/DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md)\> \| [`DMenu`](DMenu.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-link-menu.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-link-menu.ts#L23)

___

### \_parent

• `Protected` **\_parent**: [`DLinkMenuParent`](../interfaces/DLinkMenuParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-link-menu.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-link-menu.ts#L21)

## Accessors

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link-menu.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-link-menu.ts#L32)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link-menu.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-link-menu.ts#L36)

## Methods

### get

▸ **get**(): [`DMenu`](DMenu.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Returns

[`DMenu`](DMenu.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-link-menu.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-link-menu.ts#L44)

___

### newMenu

▸ `Protected` **newMenu**(`options`): [`DMenu`](DMenu.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DMenuOptions`](../interfaces/DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md)\> |

#### Returns

[`DMenu`](DMenu.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-link-menu.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-link-menu.ts#L72)

___

### onSelect

▸ `Protected` **onSelect**(`value`, `item`, `menu`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`DLinkMenuItemId`](../index.md#dlinkmenuitemid) |
| `item` | [`DMenuItem`](DMenuItem.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\> |
| `menu` | [`DMenu`](DMenu.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link-menu.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-link-menu.ts#L76)

___

### open

▸ **open**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-link-menu.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-link-menu.ts#L40)

___

### toMenu

▸ `Protected` **toMenu**(`options`): [`DMenu`](DMenu.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DMenuOptions`](../interfaces/DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md)\> \| [`DMenu`](DMenu.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |

#### Returns

[`DMenu`](DMenu.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-link-menu.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-link-menu.ts#L63)
