[Winter Cardinal UI - v0.199.0](../index.md) / DItemUpdater

# Class: DItemUpdater<VALUE, DATA, DATA_MAPPED, ITEM, OPTIONS\>

The primary purpose of this class is to minimize the number of rendered items (e.g., [DListItem](DListItem.md))
as low as possible and to update their positions and states. For this sake, the updater calculates the
required number of items whenever their container size changes and creates items if needed.

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `DATA` | extends [`DItemUpdaterData`](../interfaces/DItemUpdaterData.md)<`VALUE`\> = [`DItemUpdaterData`](../interfaces/DItemUpdaterData.md)<`VALUE`\> |
| `DATA_MAPPED` | extends [`DItemUpdaterDataMapped`](../interfaces/DItemUpdaterDataMapped.md)<`VALUE`\> = [`DItemUpdaterDataMapped`](../interfaces/DItemUpdaterDataMapped.md)<`VALUE`\> |
| `ITEM` | extends [`DItemUpdaterItem`](../interfaces/DItemUpdaterItem.md)<`VALUE`\> = [`DItemUpdaterItem`](../interfaces/DItemUpdaterItem.md)<`VALUE`\> |
| `OPTIONS` | extends [`DItemUpdaterOptions`](../interfaces/DItemUpdaterOptions.md)<`VALUE`, `DATA`, `ITEM`\> = [`DItemUpdaterOptions`](../interfaces/DItemUpdaterOptions.md)<`VALUE`, `DATA`, `ITEM`\> |

## Hierarchy

- **`DItemUpdater`**

  ↳ [`DListItemUpdater`](DListItemUpdater.md)

  ↳ [`DTreeItemUpdater`](DTreeItemUpdater.md)

## Table of contents

### Constructors

- [constructor](DItemUpdater.md#constructor)

### Properties

- [\_container](DItemUpdater.md#_container)
- [\_content](DItemUpdater.md#_content)
- [\_data](DItemUpdater.md#_data)
- [\_initItem](DItemUpdater.md#_inititem)
- [\_isUpdateItemsCalled](DItemUpdater.md#_isupdateitemscalled)
- [\_isUpdateItemsCalledForcibly](DItemUpdater.md#_isupdateitemscalledforcibly)
- [\_itemHeight](DItemUpdater.md#_itemheight)
- [\_itemIndexEnd](DItemUpdater.md#_itemindexend)
- [\_itemIndexStart](DItemUpdater.md#_itemindexstart)
- [\_itemWidth](DItemUpdater.md#_itemwidth)
- [\_multiplicity](DItemUpdater.md#_multiplicity)
- [\_newItem](DItemUpdater.md#_newitem)
- [\_updateItemsCount](DItemUpdater.md#_updateitemscount)
- [\_workItems](DItemUpdater.md#_workitems)

### Accessors

- [multiplicity](DItemUpdater.md#multiplicity)

### Methods

- [initItem](DItemUpdater.md#inititem)
- [initItemNoStriping](DItemUpdater.md#inititemnostriping)
- [lock](DItemUpdater.md#lock)
- [moveFocus](DItemUpdater.md#movefocus)
- [newItem](DItemUpdater.md#newitem)
- [reset](DItemUpdater.md#reset)
- [set](DItemUpdater.md#set)
- [toInitItem](DItemUpdater.md#toinititem)
- [toMapped](DItemUpdater.md#tomapped)
- [toNewItem](DItemUpdater.md#tonewitem)
- [unlock](DItemUpdater.md#unlock)
- [unset](DItemUpdater.md#unset)
- [update](DItemUpdater.md#update)

## Constructors

### constructor

• **new DItemUpdater**<`VALUE`, `DATA`, `DATA_MAPPED`, `ITEM`, `OPTIONS`\>(`data`, `content`, `container`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `DATA` | extends [`DItemUpdaterData`](../interfaces/DItemUpdaterData.md)<`VALUE`, `DATA`\> = [`DItemUpdaterData`](../interfaces/DItemUpdaterData.md)<`VALUE`\> |
| `DATA_MAPPED` | extends [`DItemUpdaterDataMapped`](../interfaces/DItemUpdaterDataMapped.md)<`VALUE`, `DATA_MAPPED`\> = [`DItemUpdaterDataMapped`](../interfaces/DItemUpdaterDataMapped.md)<`VALUE`\> |
| `ITEM` | extends [`DItemUpdaterItem`](../interfaces/DItemUpdaterItem.md)<`VALUE`, `ITEM`\> = [`DItemUpdaterItem`](../interfaces/DItemUpdaterItem.md)<`VALUE`\> |
| `OPTIONS` | extends [`DItemUpdaterOptions`](../interfaces/DItemUpdaterOptions.md)<`VALUE`, `DATA`, `ITEM`, `OPTIONS`\> = [`DItemUpdaterOptions`](../interfaces/DItemUpdaterOptions.md)<`VALUE`, `DATA`, `ITEM`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `DATA` |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `container` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `options?` | `OPTIONS` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L82)

## Properties

### \_container

• `Protected` **\_container**: [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L78)

___

### \_content

• `Protected` **\_content**: [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L77)

___

### \_data

• `Protected` **\_data**: `DATA`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L76)

___

### \_initItem

• `Protected` **\_initItem**: [`DItemUpdaterInitItem`](../index.md#ditemupdaterinititem)<`DATA`, `ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L80)

___

### \_isUpdateItemsCalled

• `Protected` **\_isUpdateItemsCalled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L68)

___

### \_isUpdateItemsCalledForcibly

• `Protected` **\_isUpdateItemsCalledForcibly**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L69)

___

### \_itemHeight

• `Protected` **\_itemHeight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L70)

___

### \_itemIndexEnd

• `Protected` **\_itemIndexEnd**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L74)

___

### \_itemIndexStart

• `Protected` **\_itemIndexStart**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L73)

___

### \_itemWidth

• `Protected` **\_itemWidth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L71)

___

### \_multiplicity

• `Protected` **\_multiplicity**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L72)

___

### \_newItem

• `Protected` **\_newItem**: [`DItemUpdaterNewItem`](../index.md#ditemupdaternewitem)<`DATA`, `ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L79)

___

### \_updateItemsCount

• `Protected` **\_updateItemsCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L67)

___

### \_workItems

• `Protected` **\_workItems**: `ITEM`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L75)

## Accessors

### multiplicity

• `get` **multiplicity**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L132)

## Methods

### initItem

▸ `Protected` **initItem**(`this`, `item`, `index`, `data`): `ITEM`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `undefined` |
| `item` | `ITEM` |
| `index` | `number` |
| `data` | `DATA` |

#### Returns

`ITEM`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L123)

___

### initItemNoStriping

▸ `Protected` **initItemNoStriping**(`this`, `item`, `index`, `data`): `ITEM`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `undefined` |
| `item` | `ITEM` |
| `index` | `number` |
| `data` | `DATA` |

#### Returns

`ITEM`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L128)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L136)

___

### moveFocus

▸ **moveFocus**(`e`, `target`, `moveVertically`, `moveHorizontally`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |
| `target` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `moveVertically` | `boolean` |
| `moveHorizontally` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L367)

___

### newItem

▸ `Protected` `Abstract` **newItem**(`this`, `data`): `ITEM`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `undefined` |
| `data` | `DATA` |

#### Returns

`ITEM`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L105)

___

### reset

▸ `Protected` **reset**(`item`): `ITEM`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `ITEM` |

#### Returns

`ITEM`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L350)

___

### set

▸ `Protected` **set**(`item`, `value`, `index`, `forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `ITEM` |
| `value` | `VALUE` |
| `index` | `number` |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L342)

___

### toInitItem

▸ `Protected` **toInitItem**(`options?`): [`DItemUpdaterInitItem`](../index.md#ditemupdaterinititem)<`DATA`, `ITEM`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DItemUpdaterOptions`](../interfaces/DItemUpdaterOptions.md)<`VALUE`, `DATA`, `ITEM`\> |

#### Returns

[`DItemUpdaterInitItem`](../index.md#ditemupdaterinititem)<`DATA`, `ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L107)

___

### toMapped

▸ `Protected` `Abstract` **toMapped**(`data`): `DATA_MAPPED`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `DATA` |

#### Returns

`DATA_MAPPED`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:340](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L340)

___

### toNewItem

▸ `Protected` **toNewItem**(`options?`): [`DItemUpdaterNewItem`](../index.md#ditemupdaternewitem)<`DATA`, `ITEM`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DItemUpdaterOptions`](../interfaces/DItemUpdaterOptions.md)<`VALUE`, `DATA`, `ITEM`\> |

#### Returns

[`DItemUpdaterNewItem`](../index.md#ditemupdaternewitem)<`DATA`, `ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L99)

___

### unlock

▸ **unlock**(`callIfNeeded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callIfNeeded` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L144)

___

### unset

▸ `Protected` **unset**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `ITEM` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L346)

___

### update

▸ **update**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L155)
