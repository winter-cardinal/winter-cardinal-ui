[Winter Cardinal UI - v0.407.0](../index.md) / DTextPiece

# Interface: DTextPiece\<VALUE\>

## Type parameters

| Name |
| :------ |
| `VALUE` |

## Hierarchy

- `EventEmitter`

  ↳ **`DTextPiece`**

## Implemented by

- [`DTextPieceImpl`](../classes/DTextPieceImpl.md)

## Table of contents

### Properties

- [align](DTextPiece.md#align)
- [alpha](DTextPiece.md#alpha)
- [color](DTextPiece.md#color)
- [computed](DTextPiece.md#computed)
- [formatter](DTextPiece.md#formatter)
- [object](DTextPiece.md#object)
- [style](DTextPiece.md#style)
- [value](DTextPiece.md#value)

### Methods

- [addListener](DTextPiece.md#addlistener)
- [compute](DTextPiece.md#compute)
- [destroy](DTextPiece.md#destroy)
- [emit](DTextPiece.md#emit)
- [eventNames](DTextPiece.md#eventnames)
- [getValue](DTextPiece.md#getvalue)
- [hide](DTextPiece.md#hide)
- [isShown](DTextPiece.md#isshown)
- [listenerCount](DTextPiece.md#listenercount)
- [listeners](DTextPiece.md#listeners)
- [off](DTextPiece.md#off)
- [on](DTextPiece.md#on)
- [once](DTextPiece.md#once)
- [removeAllListeners](DTextPiece.md#removealllisteners)
- [removeListener](DTextPiece.md#removelistener)
- [setValue](DTextPiece.md#setvalue)
- [show](DTextPiece.md#show)

## Properties

### align

• `Readonly` **align**: [`DTextPieceAlign`](DTextPieceAlign.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L62)

___

### alpha

• **alpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L61)

___

### color

• **color**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L60)

___

### computed

• `Readonly` **computed**: `undefined` \| `VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L59)

___

### formatter

• **formatter**: [`DTextPieceFormatter`](../index.md#dtextpieceformatter)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L58)

___

### object

• `Readonly` **object**: `undefined` \| ``null`` \| [`DDynamicText`](../classes/DDynamicText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L64)

___

### style

• `Readonly` **style**: [`DTextPieceStyle`](DTextPieceStyle.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L63)

___

### value

• **value**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L54)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DTextPiece`](DTextPiece.md)\<`VALUE`\>

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DTextPiece`](DTextPiece.md)\<`VALUE`\>

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### compute

▸ **compute**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L57)

___

### destroy

▸ **destroy**(): [`DTextPiece`](DTextPiece.md)\<`VALUE`\>

#### Returns

[`DTextPiece`](DTextPiece.md)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L69)

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

### getValue

▸ **getValue**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L55)

___

### hide

▸ **hide**(): [`DTextPiece`](DTextPiece.md)\<`VALUE`\>

#### Returns

[`DTextPiece`](DTextPiece.md)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L67)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L68)

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

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`DTextPiece`](DTextPiece.md)\<`VALUE`\>

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`DTextPiece`](DTextPiece.md)\<`VALUE`\>

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25489

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DTextPiece`](DTextPiece.md)\<`VALUE`\>

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DTextPiece`](DTextPiece.md)\<`VALUE`\>

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DTextPiece`](DTextPiece.md)\<`VALUE`\>

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`DTextPiece`](DTextPiece.md)\<`VALUE`\>

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25463

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DTextPiece`](DTextPiece.md)\<`VALUE`\>

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`DTextPiece`](DTextPiece.md)\<`VALUE`\>

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25483

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`DTextPiece`](DTextPiece.md)\<`VALUE`\>

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`DTextPiece`](DTextPiece.md)\<`VALUE`\>

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### setValue

▸ **setValue**(`value`, `forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\> |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L56)

___

### show

▸ **show**(): [`DTextPiece`](DTextPiece.md)\<`VALUE`\>

#### Returns

[`DTextPiece`](DTextPiece.md)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-text-piece.ts#L66)
