[Winter Cardinal UI - v0.457.0](../index.md) / DTableCategoryColumnImpl

# Class: DTableCategoryColumnImpl\<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW_VALUE` | `ROW_VALUE` |
| `CELL_VALUE` | `CELL_VALUE` |
| `DIALOG_VALUE` | `CELL_VALUE` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> = [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableCategoryColumnImpl`**

## Implements

- [`DTableCategoryColumn`](../interfaces/DTableCategoryColumn.md)

## Table of contents

### Constructors

- [constructor](DTableCategoryColumnImpl.md#constructor)

### Properties

- [\_columns](DTableCategoryColumnImpl.md#_columns)
- [\_isLocked](DTableCategoryColumnImpl.md#_islocked)
- [\_onResizeBound](DTableCategoryColumnImpl.md#_onresizebound)
- [\_weight](DTableCategoryColumnImpl.md#_weight)
- [\_width](DTableCategoryColumnImpl.md#_width)
- [label](DTableCategoryColumnImpl.md#label)
- [offset](DTableCategoryColumnImpl.md#offset)
- [resizable](DTableCategoryColumnImpl.md#resizable)

### Accessors

- [minWeight](DTableCategoryColumnImpl.md#minweight)
- [minWidth](DTableCategoryColumnImpl.md#minwidth)
- [weight](DTableCategoryColumnImpl.md#weight)
- [width](DTableCategoryColumnImpl.md#width)

### Methods

- [add](DTableCategoryColumnImpl.md#add)
- [addListener](DTableCategoryColumnImpl.md#addlistener)
- [emit](DTableCategoryColumnImpl.md#emit)
- [eventNames](DTableCategoryColumnImpl.md#eventnames)
- [listenerCount](DTableCategoryColumnImpl.md#listenercount)
- [listeners](DTableCategoryColumnImpl.md#listeners)
- [off](DTableCategoryColumnImpl.md#off)
- [on](DTableCategoryColumnImpl.md#on)
- [onResize](DTableCategoryColumnImpl.md#onresize)
- [once](DTableCategoryColumnImpl.md#once)
- [removeAllListeners](DTableCategoryColumnImpl.md#removealllisteners)
- [removeListener](DTableCategoryColumnImpl.md#removelistener)

## Constructors

### constructor

• **new DTableCategoryColumnImpl**\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>(`index`, `column`): [`DTableCategoryColumnImpl`](DTableCategoryColumnImpl.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

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
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\> |

#### Returns

[`DTableCategoryColumnImpl`](DTableCategoryColumnImpl.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L34)

## Properties

### \_columns

• `Protected` **\_columns**: [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L27)

___

### \_isLocked

• `Protected` **\_isLocked**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L25)

___

### \_onResizeBound

• `Protected` **\_onResizeBound**: (`column`: [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>) => `void`

#### Type declaration

▸ (`column`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\> |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L30)

___

### \_weight

• `Protected` **\_weight**: `undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L23)

___

### \_width

• `Protected` **\_width**: `undefined` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L24)

___

### label

• **label**: `undefined` \| `string`

#### Implementation of

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[label](../interfaces/DTableCategoryColumn.md#label)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L22)

___

### offset

• **offset**: `number`

#### Implementation of

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[offset](../interfaces/DTableCategoryColumn.md#offset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L26)

___

### resizable

• `Readonly` **resizable**: `boolean`

#### Implementation of

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[resizable](../interfaces/DTableCategoryColumn.md#resizable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L28)

## Accessors

### minWeight

• `get` **minWeight**(): `number`

#### Returns

`number`

#### Implementation of

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[minWeight](../interfaces/DTableCategoryColumn.md#minweight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L138)

___

### minWidth

• `get` **minWidth**(): `number`

#### Returns

`number`

#### Implementation of

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[minWidth](../interfaces/DTableCategoryColumn.md#minwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L193)

___

### weight

• `get` **weight**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[weight](../interfaces/DTableCategoryColumn.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L97)

• `set` **weight**(`weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `weight` | `number` |

#### Returns

`void`

#### Implementation of

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[weight](../interfaces/DTableCategoryColumn.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L101)

___

### width

• `get` **width**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Implementation of

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[width](../interfaces/DTableCategoryColumn.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L152)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Implementation of

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[width](../interfaces/DTableCategoryColumn.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L156)

## Methods

### add

▸ **add**(`column`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L207)

___

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

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[addListener](../interfaces/DTableCategoryColumn.md#addlistener)

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

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[emit](../interfaces/DTableCategoryColumn.md#emit)

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

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[eventNames](../interfaces/DTableCategoryColumn.md#eventnames)

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

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[listenerCount](../interfaces/DTableCategoryColumn.md#listenercount)

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

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[listeners](../interfaces/DTableCategoryColumn.md#listeners)

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

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[off](../interfaces/DTableCategoryColumn.md#off)

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

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[on](../interfaces/DTableCategoryColumn.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-table-category-column-impl.ts#L65)

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

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[once](../interfaces/DTableCategoryColumn.md#once)

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

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[removeAllListeners](../interfaces/DTableCategoryColumn.md#removealllisteners)

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

[DTableCategoryColumn](../interfaces/DTableCategoryColumn.md).[removeListener](../interfaces/DTableCategoryColumn.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475
