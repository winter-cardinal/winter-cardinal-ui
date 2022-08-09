[Winter Cardinal UI - v0.205.1](../index.md) / DDialogSelectListItemUpdater

# Class: DDialogSelectListItemUpdater<VALUE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |

## Hierarchy

- [`DListItemUpdater`](DListItemUpdater.md)<`VALUE`\>

  ↳ **`DDialogSelectListItemUpdater`**

## Table of contents

### Constructors

- [constructor](DDialogSelectListItemUpdater.md#constructor)

### Properties

- [\_container](DDialogSelectListItemUpdater.md#_container)
- [\_content](DDialogSelectListItemUpdater.md#_content)
- [\_data](DDialogSelectListItemUpdater.md#_data)
- [\_initItem](DDialogSelectListItemUpdater.md#_inititem)
- [\_isUpdateItemsCalled](DDialogSelectListItemUpdater.md#_isupdateitemscalled)
- [\_isUpdateItemsCalledForcibly](DDialogSelectListItemUpdater.md#_isupdateitemscalledforcibly)
- [\_itemHeight](DDialogSelectListItemUpdater.md#_itemheight)
- [\_itemIndexEnd](DDialogSelectListItemUpdater.md#_itemindexend)
- [\_itemIndexStart](DDialogSelectListItemUpdater.md#_itemindexstart)
- [\_itemWidth](DDialogSelectListItemUpdater.md#_itemwidth)
- [\_multiplicity](DDialogSelectListItemUpdater.md#_multiplicity)
- [\_newItem](DDialogSelectListItemUpdater.md#_newitem)
- [\_updateItemsCount](DDialogSelectListItemUpdater.md#_updateitemscount)
- [\_workItems](DDialogSelectListItemUpdater.md#_workitems)

### Accessors

- [multiplicity](DDialogSelectListItemUpdater.md#multiplicity)

### Methods

- [initItem](DDialogSelectListItemUpdater.md#inititem)
- [initItemNoStriping](DDialogSelectListItemUpdater.md#inititemnostriping)
- [lock](DDialogSelectListItemUpdater.md#lock)
- [moveFocus](DDialogSelectListItemUpdater.md#movefocus)
- [newItem](DDialogSelectListItemUpdater.md#newitem)
- [reset](DDialogSelectListItemUpdater.md#reset)
- [set](DDialogSelectListItemUpdater.md#set)
- [toInitItem](DDialogSelectListItemUpdater.md#toinititem)
- [toMapped](DDialogSelectListItemUpdater.md#tomapped)
- [toNewItem](DDialogSelectListItemUpdater.md#tonewitem)
- [unlock](DDialogSelectListItemUpdater.md#unlock)
- [unset](DDialogSelectListItemUpdater.md#unset)
- [update](DDialogSelectListItemUpdater.md#update)

## Constructors

### constructor

• **new DDialogSelectListItemUpdater**<`VALUE`\>(`data`, `content`, `container`, `options?`)

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

[DListItemUpdater](DListItemUpdater.md).[constructor](DListItemUpdater.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L82)

## Properties

### \_container

• `Protected` **\_container**: [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[_container](DListItemUpdater.md#_container)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L78)

___

### \_content

• `Protected` **\_content**: [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[_content](DListItemUpdater.md#_content)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L77)

___

### \_data

• `Protected` **\_data**: [`DListData`](../interfaces/DListData.md)<`VALUE`\>

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[_data](DListItemUpdater.md#_data)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L76)

___

### \_initItem

• `Protected` **\_initItem**: [`DItemUpdaterInitItem`](../index.md#ditemupdaterinititem)<[`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>\>

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[_initItem](DListItemUpdater.md#_inititem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L80)

___

### \_isUpdateItemsCalled

• `Protected` **\_isUpdateItemsCalled**: `boolean`

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[_isUpdateItemsCalled](DListItemUpdater.md#_isupdateitemscalled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L68)

___

### \_isUpdateItemsCalledForcibly

• `Protected` **\_isUpdateItemsCalledForcibly**: `boolean`

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[_isUpdateItemsCalledForcibly](DListItemUpdater.md#_isupdateitemscalledforcibly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L69)

___

### \_itemHeight

• `Protected` **\_itemHeight**: `number`

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[_itemHeight](DListItemUpdater.md#_itemheight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L70)

___

### \_itemIndexEnd

• `Protected` **\_itemIndexEnd**: `number`

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[_itemIndexEnd](DListItemUpdater.md#_itemindexend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L74)

___

### \_itemIndexStart

• `Protected` **\_itemIndexStart**: `number`

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[_itemIndexStart](DListItemUpdater.md#_itemindexstart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L73)

___

### \_itemWidth

• `Protected` **\_itemWidth**: `number`

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[_itemWidth](DListItemUpdater.md#_itemwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L71)

___

### \_multiplicity

• `Protected` **\_multiplicity**: `number`

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[_multiplicity](DListItemUpdater.md#_multiplicity)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L72)

___

### \_newItem

• `Protected` **\_newItem**: [`DItemUpdaterNewItem`](../index.md#ditemupdaternewitem)<[`DListData`](../interfaces/DListData.md)<`VALUE`\>, [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>\>

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[_newItem](DListItemUpdater.md#_newitem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L79)

___

### \_updateItemsCount

• `Protected` **\_updateItemsCount**: `number`

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[_updateItemsCount](DListItemUpdater.md#_updateitemscount)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L67)

___

### \_workItems

• `Protected` **\_workItems**: [`DListItem`](DListItem.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), [`DListItemOptions`](../interfaces/DListItemOptions.md)<`VALUE`, [`DThemeListItem`](../interfaces/DThemeListItem.md), `any`\>\>[]

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[_workItems](DListItemUpdater.md#_workitems)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L75)

## Accessors

### multiplicity

• `get` **multiplicity**(): `number`

#### Returns

`number`

#### Inherited from

DListItemUpdater.multiplicity

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L132)

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

[DListItemUpdater](DListItemUpdater.md).[initItem](DListItemUpdater.md#inititem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L123)

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

[DListItemUpdater](DListItemUpdater.md).[initItemNoStriping](DListItemUpdater.md#inititemnostriping)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L128)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[lock](DListItemUpdater.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L136)

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

[DListItemUpdater](DListItemUpdater.md).[moveFocus](DListItemUpdater.md#movefocus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L367)

___

### newItem

▸ `Protected` **newItem**(`this`, `data`): [`DDialogSelectListItem`](DDialogSelectListItem.md)<`VALUE`, [`DThemeDialogSelecListItem`](../interfaces/DThemeDialogSelecListItem.md), [`DDialogSelectListItemOptions`](../interfaces/DDialogSelectListItemOptions.md)<`VALUE`, [`DThemeDialogSelecListItem`](../interfaces/DThemeDialogSelecListItem.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `undefined` |
| `data` | [`DListData`](../interfaces/DListData.md)<`VALUE`\> |

#### Returns

[`DDialogSelectListItem`](DDialogSelectListItem.md)<`VALUE`, [`DThemeDialogSelecListItem`](../interfaces/DThemeDialogSelecListItem.md), [`DDialogSelectListItemOptions`](../interfaces/DDialogSelectListItemOptions.md)<`VALUE`, [`DThemeDialogSelecListItem`](../interfaces/DThemeDialogSelecListItem.md)\>\>

#### Overrides

[DListItemUpdater](DListItemUpdater.md).[newItem](DListItemUpdater.md#newitem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-list-item-updater.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-dialog-select-list-item-updater.ts#L11)

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

[DListItemUpdater](DListItemUpdater.md).[reset](DListItemUpdater.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L350)

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

[DListItemUpdater](DListItemUpdater.md).[set](DListItemUpdater.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L342)

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

[DListItemUpdater](DListItemUpdater.md).[toInitItem](DListItemUpdater.md#toinititem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L107)

___

### toMapped

▸ `Protected` **toMapped**(`data`): [`DListDataMapped`](../interfaces/DListDataMapped.md)<`VALUE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DListData`](../interfaces/DListData.md)<`VALUE`\> |

#### Returns

[`DListDataMapped`](../interfaces/DListDataMapped.md)<`VALUE`\>

#### Inherited from

[DListItemUpdater](DListItemUpdater.md).[toMapped](DListItemUpdater.md#tomapped)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-updater.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-list-item-updater.ts#L21)

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

[DListItemUpdater](DListItemUpdater.md).[toNewItem](DListItemUpdater.md#tonewitem)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L99)

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

[DListItemUpdater](DListItemUpdater.md).[unlock](DListItemUpdater.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L144)

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

[DListItemUpdater](DListItemUpdater.md).[unset](DListItemUpdater.md#unset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L346)

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

[DListItemUpdater](DListItemUpdater.md).[update](DListItemUpdater.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-item-updater.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-item-updater.ts#L155)
