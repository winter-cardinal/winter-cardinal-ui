[Winter Cardinal UI - v0.442.0](../index.md) / DTableColumnImpl

# Class: DTableColumnImpl\<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW_VALUE` | `ROW_VALUE` |
| `CELL_VALUE` | `CELL_VALUE` |
| `DIALOG_VALUE` | `CELL_VALUE` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> = [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableColumnImpl`**

## Implements

- [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

## Table of contents

### Constructors

- [constructor](DTableColumnImpl.md#constructor)

### Properties

- [\_weight](DTableColumnImpl.md#_weight)
- [\_width](DTableColumnImpl.md#_width)
- [align](DTableColumnImpl.md#align)
- [body](DTableColumnImpl.md#body)
- [category](DTableColumnImpl.md#category)
- [editing](DTableColumnImpl.md#editing)
- [formatter](DTableColumnImpl.md#formatter)
- [frozen](DTableColumnImpl.md#frozen)
- [getter](DTableColumnImpl.md#getter)
- [header](DTableColumnImpl.md#header)
- [label](DTableColumnImpl.md#label)
- [link](DTableColumnImpl.md#link)
- [minWeight](DTableColumnImpl.md#minweight)
- [minWidth](DTableColumnImpl.md#minwidth)
- [offset](DTableColumnImpl.md#offset)
- [renderable](DTableColumnImpl.md#renderable)
- [resizable](DTableColumnImpl.md#resizable)
- [selecting](DTableColumnImpl.md#selecting)
- [setter](DTableColumnImpl.md#setter)
- [sorting](DTableColumnImpl.md#sorting)
- [state](DTableColumnImpl.md#state)
- [type](DTableColumnImpl.md#type)
- [update](DTableColumnImpl.md#update)

### Accessors

- [weight](DTableColumnImpl.md#weight)
- [width](DTableColumnImpl.md#width)

### Methods

- [addListener](DTableColumnImpl.md#addlistener)
- [emit](DTableColumnImpl.md#emit)
- [eventNames](DTableColumnImpl.md#eventnames)
- [listenerCount](DTableColumnImpl.md#listenercount)
- [listeners](DTableColumnImpl.md#listeners)
- [off](DTableColumnImpl.md#off)
- [on](DTableColumnImpl.md#on)
- [once](DTableColumnImpl.md#once)
- [removeAllListeners](DTableColumnImpl.md#removealllisteners)
- [removeListener](DTableColumnImpl.md#removelistener)

## Constructors

### constructor

• **new DTableColumnImpl**\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>(`index`, `options`): [`DTableColumnImpl`](DTableColumnImpl.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ROW_VALUE` | `ROW_VALUE` |
| `CELL_VALUE` | `CELL_VALUE` |
| `DIALOG_VALUE` | `CELL_VALUE` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> = [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `options` | [`DTableColumnOptions`](../interfaces/DTableColumnOptions.md)\<`ROW_VALUE`, `CELL_VALUE`, `any`, `any`\> |

#### Returns

[`DTableColumnImpl`](DTableColumnImpl.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:395](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L395)

## Properties

### \_weight

• `Protected` `Optional` **\_weight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:364](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L364)

___

### \_width

• `Protected` `Optional` **\_width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L366)

___

### align

• `Readonly` **align**: [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[align](../interfaces/DTableColumn.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L375)

___

### body

• `Optional` `Readonly` **body**: [`DTableBodyCellOptions`](../index.md#dtablebodycelloptions)\<`ROW_VALUE`\>

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[body](../interfaces/DTableColumn.md#body)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:383](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L383)

___

### category

• `Optional` `Readonly` **category**: `string` \| `string`[]

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[category](../interfaces/DTableColumn.md#category)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:387](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L387)

___

### editing

• `Readonly` **editing**: [`DTableColumnEditing`](../interfaces/DTableColumnEditing.md)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[editing](../interfaces/DTableColumn.md#editing)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:379](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L379)

___

### formatter

• `Optional` `Readonly` **formatter**: [`DTableColumnFormatter`](../index.md#dtablecolumnformatter)\<`CELL_VALUE`\>

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[formatter](../interfaces/DTableColumn.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L374)

___

### frozen

• `Optional` `Readonly` **frozen**: `boolean`

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[frozen](../interfaces/DTableColumn.md#frozen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:388](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L388)

___

### getter

• `Readonly` **getter**: [`DTableColumnGetter`](../index.md#dtablecolumngetter)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[getter](../interfaces/DTableColumn.md#getter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:372](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L372)

___

### header

• `Optional` `Readonly` **header**: [`DTableHeaderCellOptions`](../interfaces/DTableHeaderCellOptions.md)\<`ROW_VALUE`, [`DThemeTableHeaderCell`](../interfaces/DThemeTableHeaderCell.md)\>

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[header](../interfaces/DTableColumn.md#header)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:382](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L382)

___

### label

• `Readonly` **label**: `string`

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[label](../interfaces/DTableColumn.md#label)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L371)

___

### link

• `Optional` `Readonly` **link**: [`DTableBodyCellLinkLinkOptions`](../interfaces/DTableBodyCellLinkLinkOptions.md)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[link](../interfaces/DTableColumn.md#link)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:391](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L391)

___

### minWeight

• `Readonly` **minWeight**: `number`

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[minWeight](../interfaces/DTableColumn.md#minweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:365](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L365)

___

### minWidth

• `Readonly` **minWidth**: `number`

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[minWidth](../interfaces/DTableColumn.md#minwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L367)

___

### offset

• **offset**: `number`

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[offset](../interfaces/DTableColumn.md#offset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:389](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L389)

___

### renderable

• `Readonly` **renderable**: `boolean` \| [`DTableColumnRenderable`](../index.md#dtablecolumnrenderable)\<`ROW_VALUE`\>

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[renderable](../interfaces/DTableColumn.md#renderable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L377)

___

### resizable

• `Readonly` **resizable**: `boolean`

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[resizable](../interfaces/DTableColumn.md#resizable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:368](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L368)

___

### selecting

• `Readonly` **selecting**: [`DTableColumnSelecting`](../interfaces/DTableColumnSelecting.md)\<`CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[selecting](../interfaces/DTableColumn.md#selecting)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:385](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L385)

___

### setter

• `Readonly` **setter**: [`DTableColumnSetter`](../index.md#dtablecolumnsetter)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[setter](../interfaces/DTableColumn.md#setter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L373)

___

### sorting

• `Readonly` **sorting**: [`DTableColumnSorting`](../interfaces/DTableColumnSorting.md)\<`ROW_VALUE`\>

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[sorting](../interfaces/DTableColumn.md#sorting)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:380](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L380)

___

### state

• `Readonly` **state**: [`DTableColumnState`](../interfaces/DTableColumnState.md)\<`ROW_VALUE`\>

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[state](../interfaces/DTableColumn.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:376](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L376)

___

### type

• `Readonly` **type**: [`DTableColumnType`](../index.md#dtablecolumntype)

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[type](../interfaces/DTableColumn.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:370](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L370)

___

### update

• `Readonly` **update**: [`DTableColumnUpdate`](../index.md#dtablecolumnupdate)

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[update](../interfaces/DTableColumn.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L393)

## Accessors

### weight

• `get` **weight**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[weight](../interfaces/DTableColumn.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:444](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L444)

• `set` **weight**(`weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `weight` | `number` |

#### Returns

`void`

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[weight](../interfaces/DTableColumn.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L448)

___

### width

• `get` **width**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[width](../interfaces/DTableColumn.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L455)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[width](../interfaces/DTableColumn.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-impl.ts:459](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-column-impl.ts#L459)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): `this`

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

`this`

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[addListener](../interfaces/DTableColumn.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### emit

▸ **emit**(`event`, `...args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `...args` | `any`[] | Arguments that are passed to registered listeners |

#### Returns

`boolean`

`true` if the event had listeners, else `false`.

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[emit](../interfaces/DTableColumn.md#emit)

#### Inherited from

utils.EventEmitter.emit

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25441

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[eventNames](../interfaces/DTableColumn.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`number`

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[listenerCount](../interfaces/DTableColumn.md#listenercount)

#### Inherited from

utils.EventEmitter.listenerCount

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25432

___

### listeners

▸ **listeners**(`event`): `Function`[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`Function`[]

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[listeners](../interfaces/DTableColumn.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): `this`

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

`this`

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[off](../interfaces/DTableColumn.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25489

___

### on

▸ **on**(`event`, `fn`, `context?`): `this`

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

`this`

`this`.

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[on](../interfaces/DTableColumn.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### once

▸ **once**(`event`, `fn`, `context?`): `this`

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

`this`

`this`.

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[once](../interfaces/DTableColumn.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25463

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): `this`

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

`this`

`this`.

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[removeAllListeners](../interfaces/DTableColumn.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25483

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): `this`

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

`this`

`this`.

#### Implementation of

[DTableColumn](../interfaces/DTableColumn.md).[removeListener](../interfaces/DTableColumn.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475
