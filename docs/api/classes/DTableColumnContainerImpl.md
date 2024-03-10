[Winter Cardinal UI - v0.414.0](../index.md) / DTableColumnContainerImpl

# Class: DTableColumnContainerImpl\<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ROW_VALUE` | `ROW_VALUE` |
| `CELL_VALUE` | `unknown` |
| `DIALOG_VALUE` | `CELL_VALUE` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> = [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> |

## Hierarchy

- `EventEmitter`

  ↳ **`DTableColumnContainerImpl`**

## Implements

- [`DTableColumnContainer`](../interfaces/DTableColumnContainer.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

## Table of contents

### Constructors

- [constructor](DTableColumnContainerImpl.md#constructor)

### Properties

- [frozen](DTableColumnContainerImpl.md#frozen)
- [items](DTableColumnContainerImpl.md#items)
- [parent](DTableColumnContainerImpl.md#parent)

### Accessors

- [width](DTableColumnContainerImpl.md#width)

### Methods

- [addListener](DTableColumnContainerImpl.md#addlistener)
- [each](DTableColumnContainerImpl.md#each)
- [emit](DTableColumnContainerImpl.md#emit)
- [eventNames](DTableColumnContainerImpl.md#eventnames)
- [get](DTableColumnContainerImpl.md#get)
- [listenerCount](DTableColumnContainerImpl.md#listenercount)
- [listeners](DTableColumnContainerImpl.md#listeners)
- [newOnColumnResize](DTableColumnContainerImpl.md#newoncolumnresize)
- [off](DTableColumnContainerImpl.md#off)
- [on](DTableColumnContainerImpl.md#on)
- [onColumnResize](DTableColumnContainerImpl.md#oncolumnresize)
- [onColumnResizeBody](DTableColumnContainerImpl.md#oncolumnresizebody)
- [onColumnResizeHeader](DTableColumnContainerImpl.md#oncolumnresizeheader)
- [onColumnResizeWeight](DTableColumnContainerImpl.md#oncolumnresizeweight)
- [onColumnResizeWidth](DTableColumnContainerImpl.md#oncolumnresizewidth)
- [once](DTableColumnContainerImpl.md#once)
- [removeAllListeners](DTableColumnContainerImpl.md#removealllisteners)
- [removeListener](DTableColumnContainerImpl.md#removelistener)
- [size](DTableColumnContainerImpl.md#size)

## Constructors

### constructor

• **new DTableColumnContainerImpl**\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>(`parent`, `options?`): [`DTableColumnContainerImpl`](DTableColumnContainerImpl.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ROW_VALUE` | `ROW_VALUE` |
| `CELL_VALUE` | `unknown` |
| `DIALOG_VALUE` | `CELL_VALUE` |
| `DIALOG` | extends [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> = [`DTableColumnSelectingDialog`](../interfaces/DTableColumnSelectingDialog.md)\<`DIALOG_VALUE`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableColumnContainerImplParent`](../interfaces/DTableColumnContainerImplParent.md) |
| `options?` | [`DTableColumnOptions`](../interfaces/DTableColumnOptions.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>[] |

#### Returns

[`DTableColumnContainerImpl`](DTableColumnContainerImpl.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts#L28)

## Properties

### frozen

• `Readonly` **frozen**: `number`

#### Implementation of

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[frozen](../interfaces/DTableColumnContainer.md#frozen)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts#L25)

___

### items

• `Readonly` **items**: [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>[]

#### Implementation of

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[items](../interfaces/DTableColumnContainer.md#items)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts#L26)

___

### parent

• `Readonly` **parent**: [`DTableColumnContainerImplParent`](../interfaces/DTableColumnContainerImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts#L24)

## Accessors

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[width](../interfaces/DTableColumnContainer.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts#L136)

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

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[addListener](../interfaces/DTableColumnContainer.md#addlistener)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### each

▸ **each**(`iteratee`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | [`DTableColumnIteratee`](../index.md#dtablecolumniteratee)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\> |

#### Returns

`this`

#### Implementation of

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[each](../interfaces/DTableColumnContainer.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts#L158)

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

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[emit](../interfaces/DTableColumnContainer.md#emit)

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

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[eventNames](../interfaces/DTableColumnContainer.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### get

▸ **get**(`index`): ``null`` \| [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\>

#### Implementation of

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[get](../interfaces/DTableColumnContainer.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts#L150)

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

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[listenerCount](../interfaces/DTableColumnContainer.md#listenercount)

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

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[listeners](../interfaces/DTableColumnContainer.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newOnColumnResize

▸ **newOnColumnResize**(`index`, `column`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts#L59)

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

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[off](../interfaces/DTableColumnContainer.md#off)

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

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[on](../interfaces/DTableColumnContainer.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onColumnResize

▸ **onColumnResize**(`index`, `column`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts#L68)

___

### onColumnResizeBody

▸ **onColumnResizeBody**(`index`, `column`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts#L95)

___

### onColumnResizeHeader

▸ **onColumnResizeHeader**(`index`, `column`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `column` | [`DTableColumn`](../interfaces/DTableColumn.md)\<`ROW_VALUE`, `CELL_VALUE`, `DIALOG_VALUE`, `DIALOG`\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts#L77)

___

### onColumnResizeWeight

▸ **onColumnResizeWeight**(`row`, `index`, `columnWeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `index` | `number` |
| `columnWeight` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts#L118)

___

### onColumnResizeWidth

▸ **onColumnResizeWidth**(`row`, `index`, `columnWidth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `index` | `number` |
| `columnWidth` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts#L127)

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

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[once](../interfaces/DTableColumnContainer.md#once)

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

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[removeAllListeners](../interfaces/DTableColumnContainer.md#removealllisteners)

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

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[removeListener](../interfaces/DTableColumnContainer.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DTableColumnContainer](../interfaces/DTableColumnContainer.md).[size](../interfaces/DTableColumnContainer.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-table-column-container-impl.ts#L168)
