[Winter Cardinal UI - v0.165.0](../index.md) / DListData

# Interface: DListData<ITEM\>

[DList](../classes/DList.md) data.

## Type parameters

| Name |
| :------ |
| `ITEM` |

## Implemented by

- [`DListDataImpl`](../classes/DListDataImpl.md)

## Table of contents

### Properties

- [accessor](DListData.md#accessor)
- [after](DListData.md#after)
- [before](DListData.md#before)
- [items](DListData.md#items)
- [mapped](DListData.md#mapped)
- [selection](DListData.md#selection)

### Methods

- [add](DListData.md#add)
- [addAll](DListData.md#addall)
- [clear](DListData.md#clear)
- [clearAndAdd](DListData.md#clearandadd)
- [clearAndAddAll](DListData.md#clearandaddall)
- [each](DListData.md#each)
- [get](DListData.md#get)
- [remove](DListData.md#remove)
- [set](DListData.md#set)
- [size](DListData.md#size)

## Properties

### accessor

• `Readonly` **accessor**: [`DListItemAccessor`](DListItemAccessor.md)<`ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L45)

___

### after

• **after**: `ITEM`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L43)

___

### before

• **before**: `ITEM`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L41)

___

### items

• **items**: `ITEM`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L42)

___

### mapped

• `Readonly` **mapped**: [`DListDataMapped`](DListDataMapped.md)<`ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L44)

___

### selection

• `Readonly` **selection**: [`DListDataSelection`](DListDataSelection.md)<`ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L46)

## Methods

### add

▸ **add**(`item`, `index?`): `boolean`

Adds the given item.
If the index is given, inserts the given item at that index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `ITEM` | an item |
| `index?` | `number` | an index |

#### Returns

`boolean`

true if the data is changed

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L78)

___

### addAll

▸ **addAll**(`newItems`, `index?`): `boolean`

Adds all the given items.
If the index is given, inserts all the given items at that index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newItems` | `ITEM`[] | items |
| `index?` | `number` | an index |

#### Returns

`boolean`

true if the data is changed

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L88)

___

### clear

▸ **clear**(): `boolean`

Removes all the items.

#### Returns

`boolean`

true if the data is changed

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L103)

___

### clearAndAdd

▸ **clearAndAdd**(`item`): `boolean`

Removes all the existing items and adds the given item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `ITEM` | an item |

#### Returns

`boolean`

true if the data is changed

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L111)

___

### clearAndAddAll

▸ **clearAndAddAll**(`newItems`): `boolean`

Removes all the existing items and adds all the given items.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newItems` | `ITEM`[] | items to be inserted |

#### Returns

`boolean`

true if the data is changed.

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L119)

___

### each

▸ **each**(`iteratee`, `ifrom?`, `ito?`): `void`

Calls the specified iteratee on each datum of the specified index range.
If called iteratee explicitly returns false, stops an iteration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iteratee` | [`DListDataIteratee`](../index.md#dlistdataiteratee)<`ITEM`\> | an function called on each datum |
| `ifrom?` | `number` | an index to start an iteration |
| `ito?` | `number` | an index before which an interation stops |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L129)

___

### get

▸ **get**(`index`): ``null`` \| `ITEM`

Returns an item at the specified index.
The index is an index on itemsrows filters and sorters are not applied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | an index on rows filters and sorters are not applied |

#### Returns

``null`` \| `ITEM`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L59)

___

### remove

▸ **remove**(`index`): ``null`` \| `ITEM`

Removes an item at the given index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | an index of the item to be removed. |

#### Returns

``null`` \| `ITEM`

a removed item or null

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L96)

___

### set

▸ **set**(`index`, `item`): ``null`` \| `ITEM`

Replaces an item at the specified index with the given item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | an index of the item to be replaced. |
| `item` | `ITEM` | an item |

#### Returns

``null`` \| `ITEM`

a replaced item or null

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L68)

___

### size

▸ **size**(): `number`

Returns a size of data.

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-list-data.ts#L51)
