[Winter Cardinal UI - v0.414.0](../index.md) / DMenuSidedSelection

# Class: DMenuSidedSelection\<VALUE\>

## Type parameters

| Name |
| :------ |
| `VALUE` |

## Hierarchy

- `EventEmitter`

  ↳ **`DMenuSidedSelection`**

## Table of contents

### Constructors

- [constructor](DMenuSidedSelection.md#constructor)

### Properties

- [\_content](DMenuSidedSelection.md#_content)
- [\_filter](DMenuSidedSelection.md#_filter)
- [\_isDirty](DMenuSidedSelection.md#_isdirty)
- [\_item](DMenuSidedSelection.md#_item)
- [\_type](DMenuSidedSelection.md#_type)

### Methods

- [add](DMenuSidedSelection.md#add)
- [addListener](DMenuSidedSelection.md#addlistener)
- [clear](DMenuSidedSelection.md#clear)
- [emit](DMenuSidedSelection.md#emit)
- [eventNames](DMenuSidedSelection.md#eventnames)
- [first](DMenuSidedSelection.md#first)
- [get](DMenuSidedSelection.md#get)
- [getFilterDefault](DMenuSidedSelection.md#getfilterdefault)
- [getIndex](DMenuSidedSelection.md#getindex)
- [hasMenu](DMenuSidedSelection.md#hasmenu)
- [isEmpty](DMenuSidedSelection.md#isempty)
- [listenerCount](DMenuSidedSelection.md#listenercount)
- [listeners](DMenuSidedSelection.md#listeners)
- [off](DMenuSidedSelection.md#off)
- [on](DMenuSidedSelection.md#on)
- [once](DMenuSidedSelection.md#once)
- [remove](DMenuSidedSelection.md#remove)
- [removeAllListeners](DMenuSidedSelection.md#removealllisteners)
- [removeListener](DMenuSidedSelection.md#removelistener)
- [set](DMenuSidedSelection.md#set)
- [setState](DMenuSidedSelection.md#setstate)
- [set\_](DMenuSidedSelection.md#set_)
- [size](DMenuSidedSelection.md#size)
- [toDirty](DMenuSidedSelection.md#todirty)
- [update](DMenuSidedSelection.md#update)
- [update\_](DMenuSidedSelection.md#update_)

## Constructors

### constructor

• **new DMenuSidedSelection**\<`VALUE`\>(`content`, `options?`): [`DMenuSidedSelection`](DMenuSidedSelection.md)\<`VALUE`\>

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `Container` |
| `options?` | [`DMenuSidedSelectionOptions`](../interfaces/DMenuSidedSelectionOptions.md)\<`any`\> |

#### Returns

[`DMenuSidedSelection`](DMenuSidedSelection.md)\<`VALUE`\>

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L70)

## Properties

### \_content

• `Protected` **\_content**: `Container`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L64)

___

### \_filter

• `Protected` **\_filter**: (`item`: ``null`` \| [`DMenuItemBase`](DMenuItemBase.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md), [`DMenuItemBaseOptions`](../interfaces/DMenuItemBaseOptions.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md)\>\>) => `boolean`

#### Type declaration

▸ (`item`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | ``null`` \| [`DMenuItemBase`](DMenuItemBase.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md), [`DMenuItemBaseOptions`](../interfaces/DMenuItemBaseOptions.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md)\>\> |

##### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L68)

___

### \_isDirty

• `Protected` **\_isDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L66)

___

### \_item

• `Protected` **\_item**: ``null`` \| [`DMenuItemBase`](DMenuItemBase.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md), [`DMenuItemBaseOptions`](../interfaces/DMenuItemBaseOptions.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L65)

___

### \_type

• `Protected` **\_type**: [`DMenuSidedSelectionType`](../index.md#dmenusidedselectiontype)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L67)

## Methods

### add

▸ **add**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`DMenuItemBase`](DMenuItemBase.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md), [`DMenuItemBaseOptions`](../interfaces/DMenuItemBaseOptions.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md)\>\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L133)

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

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L167)

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

### first

▸ **first**(): ``null`` \| [`DMenuItemBase`](DMenuItemBase.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md), [`DMenuItemBaseOptions`](../interfaces/DMenuItemBaseOptions.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md)\>\>

#### Returns

``null`` \| [`DMenuItemBase`](DMenuItemBase.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md), [`DMenuItemBaseOptions`](../interfaces/DMenuItemBaseOptions.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L94)

___

### get

▸ **get**(`index`): ``null`` \| [`DMenuItemBase`](DMenuItemBase.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md), [`DMenuItemBaseOptions`](../interfaces/DMenuItemBaseOptions.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DMenuItemBase`](DMenuItemBase.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md), [`DMenuItemBaseOptions`](../interfaces/DMenuItemBaseOptions.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L143)

___

### getFilterDefault

▸ **getFilterDefault**(): (`item`: ``null`` \| [`DMenuItemBase`](DMenuItemBase.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md), [`DMenuItemBaseOptions`](../interfaces/DMenuItemBaseOptions.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md)\>\>) => `boolean`

#### Returns

`fn`

▸ (`item`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | ``null`` \| [`DMenuItemBase`](DMenuItemBase.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md), [`DMenuItemBaseOptions`](../interfaces/DMenuItemBaseOptions.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md)\>\> |

##### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L172)

___

### getIndex

▸ **getIndex**(`index`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L148)

___

### hasMenu

▸ **hasMenu**(`child`): child is Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `any` |

#### Returns

child is Object

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L109)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L156)

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

### remove

▸ **remove**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L160)

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

___

### set

▸ **set**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`DMenuItemBase`](DMenuItemBase.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md), [`DMenuItemBaseOptions`](../interfaces/DMenuItemBaseOptions.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md)\>\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L138)

___

### setState

▸ **setState**(`item`, `mode`, `isOn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | ``null`` \| [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `mode` | [`DMenuSidedSelectionType`](../index.md#dmenusidedselectiontype) |
| `isOn` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L189)

___

### set\_

▸ **set_**(`item`, `emit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | ``null`` \| [`DMenuItemBase`](DMenuItemBase.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md), [`DMenuItemBaseOptions`](../interfaces/DMenuItemBaseOptions.md)\<`VALUE`, [`DThemeMenuItemBase`](../interfaces/DThemeMenuItemBase.md)\>\> |
| `emit` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L176)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L152)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L98)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L102)

___

### update\_

▸ **update_**(`root`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `Container` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L113)
