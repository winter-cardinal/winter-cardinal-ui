[Winter Cardinal UI - v0.194.0](../index.md) / DListItemUpdater

# Class: DListItemUpdater<VALUE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

## Hierarchy

- [`DItemUpdater`](DItemUpdater.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DListDataMapped`](../interfaces/DListDataMapped.md)<`VALUE`\>, [`DListItem`](DListItem.md)<`VALUE`\>, [`DListItemUpdaterOptions`](../interfaces/DListItemUpdaterOptions.md)<`VALUE`\>\>

  ↳ **`DListItemUpdater`**

  ↳↳ [`DDialogSelectListItemUpdater`](DDialogSelectListItemUpdater.md)

## Table of contents

### Constructors

- [constructor](DListItemUpdater.md#constructor)

### Properties

- [\_container](DListItemUpdater.md#_container)
- [\_content](DListItemUpdater.md#_content)
- [\_data](DListItemUpdater.md#_data)
- [\_initItem](DListItemUpdater.md#_inititem)
- [\_isUpdateItemsCalled](DListItemUpdater.md#_isupdateitemscalled)
- [\_isUpdateItemsCalledForcibly](DListItemUpdater.md#_isupdateitemscalledforcibly)
- [\_itemHeight](DListItemUpdater.md#_itemheight)
- [\_itemIndexEnd](DListItemUpdater.md#_itemindexend)
- [\_itemIndexStart](DListItemUpdater.md#_itemindexstart)
- [\_itemWidth](DListItemUpdater.md#_itemwidth)
- [\_multiplicity](DListItemUpdater.md#_multiplicity)
- [\_newItem](DListItemUpdater.md#_newitem)
- [\_updateItemsCount](DListItemUpdater.md#_updateitemscount)
- [\_workItems](DListItemUpdater.md#_workitems)

### Accessors

- [multiplicity](DListItemUpdater.md#multiplicity)

### Methods

- [initItem](DListItemUpdater.md#inititem)
- [initItemNoStriping](DListItemUpdater.md#inititemnostriping)
- [lock](DListItemUpdater.md#lock)
- [moveFocus](DListItemUpdater.md#movefocus)
- [newItem](DListItemUpdater.md#newitem)
- [reset](DListItemUpdater.md#reset)
- [set](DListItemUpdater.md#set)
- [toInitItem](DListItemUpdater.md#toinititem)
- [toMapped](DListItemUpdater.md#tomapped)
- [toNewItem](DListItemUpdater.md#tonewitem)
- [unlock](DListItemUpdater.md#unlock)
- [unset](DListItemUpdater.md#unset)
- [update](DListItemUpdater.md#update)

## Constructors

### constructor

• **new DListItemUpdater**<`VALUE`\>(`data`, `content`, `container`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DListData`](../interfaces/DListData.md)<`VALUE`\> |
| `content` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `container` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `options?` | [`DListItemUpdaterOptions`](../interfaces/DListItemUpdaterOptions.md)<`VALUE`\> |

#### Inherited from

[DItemUpdater](DItemUpdater.md).[constructor](DItemUpdater.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L82)

## Properties

### \_container

• `Protected` **\_container**: [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_container](DItemUpdater.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L78)

___

### \_content

• `Protected` **\_content**: [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_content](DItemUpdater.md#_content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L77)

___

### \_data

• `Protected` **\_data**: [`DListData`](../interfaces/DListData.md)<`VALUE`\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_data](DItemUpdater.md#_data)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L76)

___

### \_initItem

• `Protected` **\_initItem**: [`DItemUpdaterInitItem`](../index.md#ditemupdaterinititem)<[`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_initItem](DItemUpdater.md#_inititem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L80)

___

### \_isUpdateItemsCalled

• `Protected` **\_isUpdateItemsCalled**: `boolean`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_isUpdateItemsCalled](DItemUpdater.md#_isupdateitemscalled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L68)

___

### \_isUpdateItemsCalledForcibly

• `Protected` **\_isUpdateItemsCalledForcibly**: `boolean`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_isUpdateItemsCalledForcibly](DItemUpdater.md#_isupdateitemscalledforcibly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L69)

___

### \_itemHeight

• `Protected` **\_itemHeight**: `number`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_itemHeight](DItemUpdater.md#_itemheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L70)

___

### \_itemIndexEnd

• `Protected` **\_itemIndexEnd**: `number`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_itemIndexEnd](DItemUpdater.md#_itemindexend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L74)

___

### \_itemIndexStart

• `Protected` **\_itemIndexStart**: `number`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_itemIndexStart](DItemUpdater.md#_itemindexstart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L73)

___

### \_itemWidth

• `Protected` **\_itemWidth**: `number`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_itemWidth](DItemUpdater.md#_itemwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L71)

___

### \_multiplicity

• `Protected` **\_multiplicity**: `number`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_multiplicity](DItemUpdater.md#_multiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L72)

___

### \_newItem

• `Protected` **\_newItem**: [`DItemUpdaterNewItem`](../index.md#ditemupdaternewitem)<[`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_newItem](DItemUpdater.md#_newitem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L79)

___

### \_updateItemsCount

• `Protected` **\_updateItemsCount**: `number`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_updateItemsCount](DItemUpdater.md#_updateitemscount)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L67)

___

### \_workItems

• `Protected` **\_workItems**: [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>[]

#### Inherited from

[DItemUpdater](DItemUpdater.md).[_workItems](DItemUpdater.md#_workitems)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L75)

## Accessors

### multiplicity

• `get` **multiplicity**(): `number`

#### Returns

`number`

#### Inherited from

DItemUpdater.multiplicity

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L132)

## Methods

### initItem

▸ `Protected` **initItem**(`this`, `item`, `index`, `data`): [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `undefined` |
| `item` | [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\> |
| `index` | `number` |
| `data` | [`DListData`](../interfaces/DListData.md)<`VALUE`\> |

#### Returns

[`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[initItem](DItemUpdater.md#inititem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L123)

___

### initItemNoStriping

▸ `Protected` **initItemNoStriping**(`this`, `item`, `index`, `data`): [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `undefined` |
| `item` | [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\> |
| `index` | `number` |
| `data` | [`DListData`](../interfaces/DListData.md)<`VALUE`\> |

#### Returns

[`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[initItemNoStriping](DItemUpdater.md#inititemnostriping)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L128)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[lock](DItemUpdater.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L136)

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

#### Inherited from

[DItemUpdater](DItemUpdater.md).[moveFocus](DItemUpdater.md#movefocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L367)

___

### newItem

▸ `Protected` **newItem**(`this`, `data`): [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `undefined` |
| `data` | [`DListData`](../interfaces/DListData.md)<`VALUE`\> |

#### Returns

[`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>

#### Overrides

[DItemUpdater](DItemUpdater.md).[newItem](DItemUpdater.md#newitem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-updater.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-list-item-updater.ts#L25)

___

### reset

▸ `Protected` **reset**(`item`): [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\> |

#### Returns

[`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[reset](DItemUpdater.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L350)

___

### set

▸ `Protected` **set**(`item`, `value`, `index`, `forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\> |
| `value` | `VALUE` |
| `index` | `number` |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[set](DItemUpdater.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L342)

___

### toInitItem

▸ `Protected` **toInitItem**(`options?`): [`DItemUpdaterInitItem`](../index.md#ditemupdaterinititem)<[`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DItemUpdaterOptions`](../interfaces/DItemUpdaterOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>\> |

#### Returns

[`DItemUpdaterInitItem`](../index.md#ditemupdaterinititem)<[`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[toInitItem](DItemUpdater.md#toinititem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L107)

___

### toMapped

▸ `Protected` **toMapped**(`data`): [`DListDataMapped`](../interfaces/DListDataMapped.md)<`VALUE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DListData`](../interfaces/DListData.md)<`VALUE`\> |

#### Returns

[`DListDataMapped`](../interfaces/DListDataMapped.md)<`VALUE`\>

#### Overrides

[DItemUpdater](DItemUpdater.md).[toMapped](DItemUpdater.md#tomapped)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-updater.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-list-item-updater.ts#L21)

___

### toNewItem

▸ `Protected` **toNewItem**(`options?`): [`DItemUpdaterNewItem`](../index.md#ditemupdaternewitem)<[`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DItemUpdaterOptions`](../interfaces/DItemUpdaterOptions.md)<`VALUE`, [`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>\> |

#### Returns

[`DItemUpdaterNewItem`](../index.md#ditemupdaternewitem)<[`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>\>

#### Inherited from

[DItemUpdater](DItemUpdater.md).[toNewItem](DItemUpdater.md#tonewitem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L99)

___

### unlock

▸ **unlock**(`callIfNeeded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callIfNeeded` | `boolean` |

#### Returns

`void`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[unlock](DItemUpdater.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L144)

___

### unset

▸ `Protected` **unset**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\> |

#### Returns

`void`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[unset](DItemUpdater.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L346)

___

### update

▸ **update**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DItemUpdater](DItemUpdater.md).[update](DItemUpdater.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-item-updater.ts#L155)
