[Winter Cardinal UI - v0.199.0](../index.md) / DListDataImpl

# Class: DListDataImpl<ITEM\>

## Type parameters

| Name |
| :------ |
| `ITEM` |

## Implements

- [`DListData`](../interfaces/DListData.md)<`ITEM`\>

## Table of contents

### Constructors

- [constructor](DListDataImpl.md#constructor)

### Properties

- [\_accessor](DListDataImpl.md#_accessor)
- [\_after](DListDataImpl.md#_after)
- [\_before](DListDataImpl.md#_before)
- [\_items](DListDataImpl.md#_items)
- [\_mapped](DListDataImpl.md#_mapped)
- [\_parent](DListDataImpl.md#_parent)
- [\_selection](DListDataImpl.md#_selection)

### Accessors

- [accessor](DListDataImpl.md#accessor)
- [after](DListDataImpl.md#after)
- [before](DListDataImpl.md#before)
- [items](DListDataImpl.md#items)
- [mapped](DListDataImpl.md#mapped)
- [selection](DListDataImpl.md#selection)

### Methods

- [add](DListDataImpl.md#add)
- [addAll](DListDataImpl.md#addall)
- [clear](DListDataImpl.md#clear)
- [clearAndAdd](DListDataImpl.md#clearandadd)
- [clearAndAddAll](DListDataImpl.md#clearandaddall)
- [each](DListDataImpl.md#each)
- [get](DListDataImpl.md#get)
- [onChange](DListDataImpl.md#onchange)
- [remove](DListDataImpl.md#remove)
- [set](DListDataImpl.md#set)
- [size](DListDataImpl.md#size)
- [toSelection](DListDataImpl.md#toselection)
- [update](DListDataImpl.md#update)

## Constructors

### constructor

• **new DListDataImpl**<`ITEM`\>(`parent`, `options?`)

#### Type parameters

| Name |
| :------ |
| `ITEM` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DListDataImplParent`](../interfaces/DListDataImplParent.md) |
| `options?` | [`DListDataOptions`](../interfaces/DListDataOptions.md)<`ITEM`\> |

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L33)

## Properties

### \_accessor

• `Protected` **\_accessor**: [`DListItemAccessorImpl`](DListItemAccessorImpl.md)<`ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L29)

___

### \_after

• `Protected` **\_after**: `ITEM`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L28)

___

### \_before

• `Protected` **\_before**: `ITEM`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L26)

___

### \_items

• `Protected` **\_items**: `ITEM`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L27)

___

### \_mapped

• `Protected` **\_mapped**: [`DListDataMapped`](../interfaces/DListDataMapped.md)<`ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L31)

___

### \_parent

• `Protected` **\_parent**: [`DListDataImplParent`](../interfaces/DListDataImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L25)

___

### \_selection

• `Protected` **\_selection**: [`DListDataImplSelection`](../interfaces/DListDataImplSelection.md)<`ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L30)

## Accessors

### accessor

• `get` **accessor**(): [`DListItemAccessor`](../interfaces/DListItemAccessor.md)<`ITEM`\>

#### Returns

[`DListItemAccessor`](../interfaces/DListItemAccessor.md)<`ITEM`\>

#### Implementation of

[DListData](../interfaces/DListData.md).[accessor](../interfaces/DListData.md#accessor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L101)

___

### after

• `get` **after**(): `ITEM`[]

#### Returns

`ITEM`[]

#### Implementation of

[DListData](../interfaces/DListData.md).[after](../interfaces/DListData.md#after)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L87)

• `set` **after**(`after`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `after` | `ITEM`[] |

#### Returns

`void`

#### Implementation of

[DListData](../interfaces/DListData.md).[after](../interfaces/DListData.md#after)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L91)

___

### before

• `get` **before**(): `ITEM`[]

#### Returns

`ITEM`[]

#### Implementation of

[DListData](../interfaces/DListData.md).[before](../interfaces/DListData.md#before)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L67)

• `set` **before**(`before`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `before` | `ITEM`[] |

#### Returns

`void`

#### Implementation of

[DListData](../interfaces/DListData.md).[before](../interfaces/DListData.md#before)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L71)

___

### items

• `get` **items**(): `ITEM`[]

#### Returns

`ITEM`[]

#### Implementation of

[DListData](../interfaces/DListData.md).[items](../interfaces/DListData.md#items)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L77)

• `set` **items**(`items`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `ITEM`[] |

#### Returns

`void`

#### Implementation of

[DListData](../interfaces/DListData.md).[items](../interfaces/DListData.md#items)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L81)

___

### mapped

• `get` **mapped**(): [`DListDataMapped`](../interfaces/DListDataMapped.md)<`ITEM`\>

#### Returns

[`DListDataMapped`](../interfaces/DListDataMapped.md)<`ITEM`\>

#### Implementation of

[DListData](../interfaces/DListData.md).[mapped](../interfaces/DListData.md#mapped)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L97)

___

### selection

• `get` **selection**(): [`DListDataSelection`](../interfaces/DListDataSelection.md)<`ITEM`\>

#### Returns

[`DListDataSelection`](../interfaces/DListDataSelection.md)<`ITEM`\>

#### Implementation of

[DListData](../interfaces/DListData.md).[selection](../interfaces/DListData.md#selection)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L105)

## Methods

### add

▸ **add**(`item`, `index?`): `boolean`

Adds the given item.
If the index is given, inserts the given item at that index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `ITEM` |
| `index?` | `number` |

#### Returns

`boolean`

#### Implementation of

[DListData](../interfaces/DListData.md).[add](../interfaces/DListData.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L166)

___

### addAll

▸ **addAll**(`newItems`, `index?`): `boolean`

Adds all the given items.
If the index is given, inserts all the given items at that index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newItems` | `ITEM`[] |
| `index?` | `number` |

#### Returns

`boolean`

#### Implementation of

[DListData](../interfaces/DListData.md).[addAll](../interfaces/DListData.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L180)

___

### clear

▸ **clear**(): `boolean`

Removes all the items.

#### Returns

`boolean`

#### Implementation of

[DListData](../interfaces/DListData.md).[clear](../interfaces/DListData.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L117)

___

### clearAndAdd

▸ **clearAndAdd**(`item`): `boolean`

Removes all the existing items and adds the given item.

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `ITEM` |

#### Returns

`boolean`

#### Implementation of

[DListData](../interfaces/DListData.md).[clearAndAdd](../interfaces/DListData.md#clearandadd)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L127)

___

### clearAndAddAll

▸ **clearAndAddAll**(`newItems`): `boolean`

Removes all the existing items and adds all the given items.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newItems` | `ITEM`[] |

#### Returns

`boolean`

#### Implementation of

[DListData](../interfaces/DListData.md).[clearAndAddAll](../interfaces/DListData.md#clearandaddall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L146)

___

### each

▸ **each**(`iteratee`, `from?`, `to?`): `void`

Calls the specified iteratee on each datum of the specified index range.
If called iteratee explicitly returns false, stops an iteration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | [`DListDataIteratee`](../index.md#dlistdataiteratee)<`ITEM`\> |
| `from?` | `number` |
| `to?` | `number` |

#### Returns

`void`

#### Implementation of

[DListData](../interfaces/DListData.md).[each](../interfaces/DListData.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L230)

___

### get

▸ **get**(`index`): ``null`` \| `ITEM`

Returns an item at the specified index.
The index is an index on itemsrows filters and sorters are not applied.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `ITEM`

#### Implementation of

[DListData](../interfaces/DListData.md).[get](../interfaces/DListData.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L201)

___

### onChange

▸ `Protected` **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L242)

___

### remove

▸ **remove**(`index`): ``null`` \| `ITEM`

Removes an item at the given index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `ITEM`

#### Implementation of

[DListData](../interfaces/DListData.md).[remove](../interfaces/DListData.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L220)

___

### set

▸ **set**(`index`, `item`): ``null`` \| `ITEM`

Replaces an item at the specified index with the given item.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `item` | `ITEM` |

#### Returns

``null`` \| `ITEM`

#### Implementation of

[DListData](../interfaces/DListData.md).[set](../interfaces/DListData.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:209](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L209)

___

### size

▸ **size**(): `number`

Returns a size of data.

#### Returns

`number`

#### Implementation of

[DListData](../interfaces/DListData.md).[size](../interfaces/DListData.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L113)

___

### toSelection

▸ `Protected` **toSelection**(`accessor`, `options?`): [`DListDataImplSelection`](../interfaces/DListDataImplSelection.md)<`ITEM`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessor` | [`DListItemAccessorImpl`](DListItemAccessorImpl.md)<`ITEM`\> |
| `options?` | [`DListDataOptions`](../interfaces/DListDataOptions.md)<`ITEM`\> |

#### Returns

[`DListDataImplSelection`](../interfaces/DListDataImplSelection.md)<`ITEM`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L50)

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

[src/main/typescript/wcardinal/ui/d-list-data-impl.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-impl.ts#L109)
