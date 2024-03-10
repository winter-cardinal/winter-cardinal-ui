[Winter Cardinal UI - v0.414.0](../index.md) / DTextPieceImpl

# Class: DTextPieceImpl\<VALUE\>

## Type parameters

| Name |
| :------ |
| `VALUE` |

## Hierarchy

- `EventEmitter`

  ↳ **`DTextPieceImpl`**

## Implements

- [`DTextPiece`](../interfaces/DTextPiece.md)\<`VALUE`\>

## Table of contents

### Constructors

- [constructor](DTextPieceImpl.md#constructor)

### Properties

- [\_align](DTextPieceImpl.md#_align)
- [\_alpha](DTextPieceImpl.md#_alpha)
- [\_color](DTextPieceImpl.md#_color)
- [\_computed](DTextPieceImpl.md#_computed)
- [\_dstyle](DTextPieceImpl.md#_dstyle)
- [\_formatter](DTextPieceImpl.md#_formatter)
- [\_isVisible](DTextPieceImpl.md#_isvisible)
- [\_object](DTextPieceImpl.md#_object)
- [\_parent](DTextPieceImpl.md#_parent)
- [\_style](DTextPieceImpl.md#_style)
- [\_theme](DTextPieceImpl.md#_theme)
- [\_value](DTextPieceImpl.md#_value)

### Accessors

- [align](DTextPieceImpl.md#align)
- [alpha](DTextPieceImpl.md#alpha)
- [color](DTextPieceImpl.md#color)
- [computed](DTextPieceImpl.md#computed)
- [formatter](DTextPieceImpl.md#formatter)
- [object](DTextPieceImpl.md#object)
- [style](DTextPieceImpl.md#style)
- [value](DTextPieceImpl.md#value)
- [visible](DTextPieceImpl.md#visible)

### Methods

- [addListener](DTextPieceImpl.md#addlistener)
- [compute](DTextPieceImpl.md#compute)
- [destroy](DTextPieceImpl.md#destroy)
- [emit](DTextPieceImpl.md#emit)
- [eventNames](DTextPieceImpl.md#eventnames)
- [getValue](DTextPieceImpl.md#getvalue)
- [hide](DTextPieceImpl.md#hide)
- [isShown](DTextPieceImpl.md#isshown)
- [listenerCount](DTextPieceImpl.md#listenercount)
- [listeners](DTextPieceImpl.md#listeners)
- [newAlpha](DTextPieceImpl.md#newalpha)
- [newColor](DTextPieceImpl.md#newcolor)
- [newComputed](DTextPieceImpl.md#newcomputed)
- [newObject](DTextPieceImpl.md#newobject)
- [off](DTextPieceImpl.md#off)
- [on](DTextPieceImpl.md#on)
- [onColorChange](DTextPieceImpl.md#oncolorchange)
- [onComputedChange](DTextPieceImpl.md#oncomputedchange)
- [onValueChange](DTextPieceImpl.md#onvaluechange)
- [once](DTextPieceImpl.md#once)
- [removeAllListeners](DTextPieceImpl.md#removealllisteners)
- [removeListener](DTextPieceImpl.md#removelistener)
- [setValue](DTextPieceImpl.md#setvalue)
- [show](DTextPieceImpl.md#show)
- [update](DTextPieceImpl.md#update)
- [updateObject](DTextPieceImpl.md#updateobject)

## Constructors

### constructor

• **new DTextPieceImpl**\<`VALUE`\>(`parent`, `theme`, `options?`): [`DTextPieceImpl`](DTextPieceImpl.md)\<`VALUE`\>

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTextPieceImplParent`](../interfaces/DTextPieceImplParent.md) |
| `theme` | [`DThemeTextPiece`](../interfaces/DThemeTextPiece.md)\<`VALUE`\> |
| `options?` | [`DTextPieceOptions`](../interfaces/DTextPieceOptions.md)\<`VALUE`\> |

#### Returns

[`DTextPieceImpl`](DTextPieceImpl.md)\<`VALUE`\>

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L43)

## Properties

### \_align

• `Protected` **\_align**: [`DTextPieceAlign`](../interfaces/DTextPieceAlign.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L39)

___

### \_alpha

• `Protected` **\_alpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L36)

___

### \_color

• `Protected` **\_color**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L35)

___

### \_computed

• `Protected` `Optional` **\_computed**: `VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L34)

___

### \_dstyle

• `Protected` **\_dstyle**: [`DDynamicTextStyle`](DDynamicTextStyle.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L38)

___

### \_formatter

• `Protected` **\_formatter**: [`DTextPieceFormatter`](../index.md#dtextpieceformatter)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L40)

___

### \_isVisible

• `Protected` **\_isVisible**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L41)

___

### \_object

• `Protected` `Optional` **\_object**: ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L32)

___

### \_parent

• `Protected` **\_parent**: [`DTextPieceImplParent`](../interfaces/DTextPieceImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L30)

___

### \_style

• `Protected` **\_style**: [`DTextPieceStyleImpl`](DTextPieceStyleImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L37)

___

### \_theme

• `Protected` **\_theme**: [`DThemeTextPiece`](../interfaces/DThemeTextPiece.md)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L31)

___

### \_value

• `Protected` `Optional` **\_value**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L33)

## Accessors

### align

• `get` **align**(): [`DTextPieceAlign`](../interfaces/DTextPieceAlign.md)

#### Returns

[`DTextPieceAlign`](../interfaces/DTextPieceAlign.md)

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[align](../interfaces/DTextPiece.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L160)

___

### alpha

• `get` **alpha**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[alpha](../interfaces/DTextPiece.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L133)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\> |

#### Returns

`void`

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[alpha](../interfaces/DTextPiece.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L137)

___

### color

• `get` **color**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[color](../interfaces/DTextPiece.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L122)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\> |

#### Returns

`void`

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[color](../interfaces/DTextPiece.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L126)

___

### computed

• `get` **computed**(): `undefined` \| `VALUE`

#### Returns

`undefined` \| `VALUE`

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[computed](../interfaces/DTextPiece.md#computed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L107)

___

### formatter

• `get` **formatter**(): [`DTextPieceFormatter`](../index.md#dtextpieceformatter)\<`VALUE`\>

#### Returns

[`DTextPieceFormatter`](../index.md#dtextpieceformatter)\<`VALUE`\>

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[formatter](../interfaces/DTextPiece.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L111)

• `set` **formatter**(`formatter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `formatter` | [`DTextPieceFormatter`](../index.md#dtextpieceformatter)\<`VALUE`\> |

#### Returns

`void`

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[formatter](../interfaces/DTextPiece.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L115)

___

### object

• `get` **object**(): `undefined` \| ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Returns

`undefined` \| ``null`` \| [`DDynamicText`](DDynamicText.md)

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[object](../interfaces/DTextPiece.md#object)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L168)

___

### style

• `get` **style**(): [`DTextPieceStyle`](../interfaces/DTextPieceStyle.md)

#### Returns

[`DTextPieceStyle`](../interfaces/DTextPieceStyle.md)

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[style](../interfaces/DTextPiece.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L164)

___

### value

• `get` **value**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[value](../interfaces/DTextPiece.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L68)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\> |

#### Returns

`void`

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[value](../interfaces/DTextPiece.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L72)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L278)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L286)

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

[DTextPiece](../interfaces/DTextPiece.md).[addListener](../interfaces/DTextPiece.md#addlistener)

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

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[compute](../interfaces/DTextPiece.md#compute)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L103)

___

### destroy

▸ **destroy**(): `this`

#### Returns

`this`

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[destroy](../interfaces/DTextPiece.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:312](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L312)

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

[DTextPiece](../interfaces/DTextPiece.md).[emit](../interfaces/DTextPiece.md#emit)

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

[DTextPiece](../interfaces/DTextPiece.md).[eventNames](../interfaces/DTextPiece.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### getValue

▸ **getValue**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`VALUE`\>

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[getValue](../interfaces/DTextPiece.md#getvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L79)

___

### hide

▸ **hide**(): `this`

#### Returns

`this`

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[hide](../interfaces/DTextPiece.md#hide)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L299)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[isShown](../interfaces/DTextPiece.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:304](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L304)

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

[DTextPiece](../interfaces/DTextPiece.md).[listenerCount](../interfaces/DTextPiece.md#listenercount)

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

[DTextPiece](../interfaces/DTextPiece.md).[listeners](../interfaces/DTextPiece.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### newAlpha

▸ **newAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L259)

___

### newColor

▸ **newColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:244](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L244)

___

### newComputed

▸ **newComputed**(): `undefined` \| `VALUE`

#### Returns

`undefined` \| `VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L229)

___

### newObject

▸ **newObject**(): [`DDynamicText`](DDynamicText.md)

#### Returns

[`DDynamicText`](DDynamicText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L274)

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

[DTextPiece](../interfaces/DTextPiece.md).[off](../interfaces/DTextPiece.md#off)

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

[DTextPiece](../interfaces/DTextPiece.md).[on](../interfaces/DTextPiece.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onColorChange

▸ **onColorChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L144)

___

### onComputedChange

▸ **onComputedChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L308)

___

### onValueChange

▸ **onValueChange**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L90)

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

[DTextPiece](../interfaces/DTextPiece.md).[once](../interfaces/DTextPiece.md#once)

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

[DTextPiece](../interfaces/DTextPiece.md).[removeAllListeners](../interfaces/DTextPiece.md#removealllisteners)

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

[DTextPiece](../interfaces/DTextPiece.md).[removeListener](../interfaces/DTextPiece.md#removelistener)

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

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[setValue](../interfaces/DTextPiece.md#setvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L83)

___

### show

▸ **show**(): `this`

#### Returns

`this`

#### Implementation of

[DTextPiece](../interfaces/DTextPiece.md).[show](../interfaces/DTextPiece.md#show)

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L294)

___

### update

▸ **update**(`layouter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layouter` | [`DImagePieceLayouter`](DImagePieceLayouter.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L172)

___

### updateObject

▸ **updateObject**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-text-piece-impl.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-text-piece-impl.ts#L196)
