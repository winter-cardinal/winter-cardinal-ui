[Winter Cardinal UI - v0.457.0](../index.md) / DMenuItems

# Class: DMenuItems

## Table of contents

### Constructors

- [constructor](DMenuItems.md#constructor)

### Methods

- [each](DMenuItems.md#each)
- [find](DMenuItems.md#find)

## Constructors

### constructor

• **new DMenuItems**(): [`DMenuItems`](DMenuItems.md)

#### Returns

[`DMenuItems`](DMenuItems.md)

## Methods

### each

▸ **each**\<`VALUE`\>(`menu`, `iteratee`): ``null`` \| [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `menu` | [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |
| `iteratee` | (`item`: [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>) => `boolean` \| `void` |

#### Returns

``null`` \| [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-items.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-menu-items.ts#L11)

___

### find

▸ **find**\<`VALUE`\>(`menu`, `value`): ``null`` \| [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `menu` | [`DMenu`](DMenu.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md), [`DMenuOptions`](../interfaces/DMenuOptions.md)\<`VALUE`, [`DThemeMenu`](../interfaces/DThemeMenu.md)\>\> |
| `value` | ``null`` \| `VALUE` |

#### Returns

``null`` \| [`DMenuItem`](DMenuItem.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md), [`DMenuItemOptions`](../interfaces/DMenuItemOptions.md)\<`VALUE`, [`DThemeMenuItem`](../interfaces/DThemeMenuItem.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-items.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-menu-items.ts#L32)
