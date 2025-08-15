[Winter Cardinal UI - v0.457.0](../index.md) / DTableColumn

# Interface: DTableColumn\<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW_VALUE` | `ROW_VALUE` |
| `CELL_VALUE` | `unknown` |
| `DIALOG_VALUE` | `CELL_VALUE` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> = [`DTableColumnSelectingDialog`](DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableColumn`**

## Implemented by

- [`DTableColumnImpl`](../classes/DTableColumnImpl.md)

## Table of contents

### Properties

- [align](DTableColumn.md#align)
- [body](DTableColumn.md#body)
- [category](DTableColumn.md#category)
- [editing](DTableColumn.md#editing)
- [formatter](DTableColumn.md#formatter)
- [frozen](DTableColumn.md#frozen)
- [getter](DTableColumn.md#getter)
- [header](DTableColumn.md#header)
- [label](DTableColumn.md#label)
- [link](DTableColumn.md#link)
- [minWeight](DTableColumn.md#minweight)
- [minWidth](DTableColumn.md#minwidth)
- [offset](DTableColumn.md#offset)
- [renderable](DTableColumn.md#renderable)
- [resizable](DTableColumn.md#resizable)
- [selecting](DTableColumn.md#selecting)
- [setter](DTableColumn.md#setter)
- [sorting](DTableColumn.md#sorting)
- [state](DTableColumn.md#state)
- [type](DTableColumn.md#type)
- [update](DTableColumn.md#update)
- [weight](DTableColumn.md#weight)
- [width](DTableColumn.md#width)

### Methods

- [addListener](DTableColumn.md#addlistener)
- [emit](DTableColumn.md#emit)
- [eventNames](DTableColumn.md#eventnames)
- [listenerCount](DTableColumn.md#listenercount)
- [listeners](DTableColumn.md#listeners)
- [off](DTableColumn.md#off)
- [on](DTableColumn.md#on)
- [once](DTableColumn.md#once)
- [removeAllListeners](DTableColumn.md#removealllisteners)
- [removeListener](DTableColumn.md#removelistener)

## Properties

### align

• `Readonly` **align**: [`DAlignHorizontal`](../index.md#dalignhorizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L124)

___

### body

• `Optional` `Readonly` **body**: [`DTableBodyCellOptions`](../index.md#dtablebodycelloptions)\<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L132)

___

### category

• `Optional` `Readonly` **category**: `string` \| `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L136)

___

### editing

• `Readonly` **editing**: [`DTableColumnEditing`](DTableColumnEditing.md)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L128)

___

### formatter

• `Optional` `Readonly` **formatter**: [`DTableColumnFormatter`](../index.md#dtablecolumnformatter)\<`CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L123)

___

### frozen

• `Optional` `Readonly` **frozen**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L137)

___

### getter

• `Readonly` **getter**: [`DTableColumnGetter`](../index.md#dtablecolumngetter)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L121)

___

### header

• `Optional` `Readonly` **header**: [`DTableHeaderCellOptions`](DTableHeaderCellOptions.md)\<`ROW_VALUE`, [`DThemeTableHeaderCell`](DThemeTableHeaderCell.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L131)

___

### label

• **label**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L120)

___

### link

• `Optional` `Readonly` **link**: [`DTableBodyCellLinkLinkOptions`](DTableBodyCellLinkLinkOptions.md)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L140)

___

### minWeight

• **minWeight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L114)

___

### minWidth

• **minWidth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L116)

___

### offset

• **offset**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L138)

___

### renderable

• `Readonly` **renderable**: `boolean` \| [`DTableColumnRenderable`](../index.md#dtablecolumnrenderable)\<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L126)

___

### resizable

• `Readonly` **resizable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L117)

___

### selecting

• `Readonly` **selecting**: [`DTableColumnSelecting`](DTableColumnSelecting.md)\<`CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L134)

___

### setter

• `Readonly` **setter**: [`DTableColumnSetter`](../index.md#dtablecolumnsetter)\<`ROW_VALUE`, `CELL_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L122)

___

### sorting

• `Readonly` **sorting**: [`DTableColumnSorting`](DTableColumnSorting.md)\<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L129)

___

### state

• `Readonly` **state**: [`DTableColumnState`](DTableColumnState.md)\<`ROW_VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L125)

___

### type

• `Readonly` **type**: [`DTableColumnType`](../index.md#dtablecolumntype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L119)

___

### update

• `Readonly` **update**: [`DTableColumnUpdate`](../index.md#dtablecolumnupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L142)

___

### weight

• `Optional` **weight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L113)

___

### width

• `Optional` **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-column.ts#L115)

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

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475
