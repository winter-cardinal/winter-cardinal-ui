[Winter Cardinal UI - v0.414.0](../index.md) / EShape

# Interface: EShape

## Hierarchy

- `EventEmitter`

  ↳ **`EShape`**

  ↳↳ [`EShapeLineOfAny`](EShapeLineOfAny.md)

  ↳↳ [`EShapeConnector`](EShapeConnector.md)

  ↳↳ [`EShapeLayer`](EShapeLayer.md)

## Implemented by

- [`EShapeBase`](../classes/EShapeBase.md)

## Table of contents

### Properties

- [action](EShape.md#action)
- [capability](EShape.md#capability)
- [children](EShape.md#children)
- [connector](EShape.md#connector)
- [corner](EShape.md#corner)
- [cursor](EShape.md#cursor)
- [data](EShape.md#data)
- [editor](EShape.md#editor)
- [fill](EShape.md#fill)
- [gradient](EShape.md#gradient)
- [id](EShape.md#id)
- [image](EShape.md#image)
- [index](EShape.md#index)
- [interactive](EShape.md#interactive)
- [layout](EShape.md#layout)
- [parent](EShape.md#parent)
- [points](EShape.md#points)
- [radius](EShape.md#radius)
- [reference](EShape.md#reference)
- [root](EShape.md#root)
- [runtime](EShape.md#runtime)
- [selected](EShape.md#selected)
- [shortcut](EShape.md#shortcut)
- [size](EShape.md#size)
- [state](EShape.md#state)
- [stroke](EShape.md#stroke)
- [tag](EShape.md#tag)
- [text](EShape.md#text)
- [texture](EShape.md#texture)
- [title](EShape.md#title)
- [transform](EShape.md#transform)
- [type](EShape.md#type)
- [uploaded](EShape.md#uploaded)
- [uuid](EShape.md#uuid)
- [visible](EShape.md#visible)
- [worldVisible](EShape.md#worldvisible)

### Methods

- [addListener](EShape.md#addlistener)
- [addUuid](EShape.md#adduuid)
- [attach](EShape.md#attach)
- [blur](EShape.md#blur)
- [clone](EShape.md#clone)
- [contains](EShape.md#contains)
- [containsAbs](EShape.md#containsabs)
- [containsAbsBBox](EShape.md#containsabsbbox)
- [containsBBox](EShape.md#containsbbox)
- [copy](EShape.md#copy)
- [destroy](EShape.md#destroy)
- [detach](EShape.md#detach)
- [emit](EShape.md#emit)
- [eventNames](EShape.md#eventnames)
- [focus](EShape.md#focus)
- [getBounds](EShape.md#getbounds)
- [getBoundsInternal](EShape.md#getboundsinternal)
- [getBoundsLocal](EShape.md#getboundslocal)
- [getCapability](EShape.md#getcapability)
- [listenerCount](EShape.md#listenercount)
- [listeners](EShape.md#listeners)
- [lock](EShape.md#lock)
- [off](EShape.md#off)
- [on](EShape.md#on)
- [onAttach](EShape.md#onattach)
- [onChildTransformChange](EShape.md#onchildtransformchange)
- [onDetach](EShape.md#ondetach)
- [onParentTransformChange](EShape.md#onparenttransformchange)
- [onRender](EShape.md#onrender)
- [onSizeChange](EShape.md#onsizechange)
- [onTransformChange](EShape.md#ontransformchange)
- [once](EShape.md#once)
- [removeAllListeners](EShape.md#removealllisteners)
- [removeListener](EShape.md#removelistener)
- [serialize](EShape.md#serialize)
- [toDirty](EShape.md#todirty)
- [toGlobal](EShape.md#toglobal)
- [toLocal](EShape.md#tolocal)
- [unlock](EShape.md#unlock)
- [update](EShape.md#update)
- [updateTransform](EShape.md#updatetransform)
- [updateUploaded](EShape.md#updateuploaded)
- [updateUuid](EShape.md#updateuuid)

## Properties

### action

• `Readonly` **action**: [`EShapeAction`](../classes/EShapeAction.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L49)

___

### capability

• `Readonly` **capability**: [`EShapeCapabilityContainer`](EShapeCapabilityContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L82)

___

### children

• **children**: [`EShape`](EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L61)

___

### connector

• **connector**: [`EShapeConnectorContainer`](EShapeConnectorContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L56)

___

### corner

• **corner**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L40)

___

### cursor

• `Optional` **cursor**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L50)

___

### data

• `Readonly` **data**: [`EShapeData`](EShapeData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L48)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](../classes/EShapeEditor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L73)

___

### fill

• `Readonly` **fill**: [`EShapeFill`](EShapeFill.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L36)

___

### gradient

• `Optional` **gradient**: [`EShapeGradientLike`](EShapeGradientLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L44)

___

### id

• **id**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L32)

___

### image

• `Optional` **image**: [`EShapeImageLike`](EShapeImageLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L42)

___

### index

• **index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L65)

___

### interactive

• **interactive**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L53)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](EShapeLayout.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L62)

___

### parent

• **parent**: ``null`` \| [`EShape`](EShape.md) \| [`EShapeContainer`](../classes/EShapeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L59)

___

### points

• `Optional` `Readonly` **points**: [`EShapePoints`](EShapePoints.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L41)

___

### radius

• **radius**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L39)

___

### reference

• **reference**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L67)

___

### root

• **root**: [`EShape`](EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L60)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](EShapeRuntime.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L70)

___

### selected

• **selected**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L66)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L54)

___

### size

• `Readonly` **size**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L35)

___

### state

• `Readonly` **state**: [`EShapeStateSet`](EShapeStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L79)

___

### stroke

• `Readonly` **stroke**: [`EShapeStroke`](EShapeStroke.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L37)

___

### tag

• `Readonly` **tag**: [`EShapeData`](EShapeData.md)

**`Deprecated`**

in favor of [data](EShape.md#data).

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L47)

___

### text

• `Readonly` **text**: [`EShapeText`](EShapeText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L45)

___

### texture

• `Optional` **texture**: `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L43)

___

### title

• `Optional` **title**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L55)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](EShapeTransform.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L38)

___

### type

• `Readonly` **type**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L34)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](EShapeUploaded.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L76)

___

### uuid

• **uuid**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L33)

___

### visible

• **visible**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L51)

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L52)

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

### addUuid

▸ **addUuid**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L122)

___

### attach

▸ **attach**(`parent`, `at?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](EShape.md) \| [`EShapeContainer`](../classes/EShapeContainer.md) |
| `at?` | `number` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L87)

___

### blur

▸ **blur**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L98)

___

### clone

▸ **clone**(): [`EShape`](EShape.md)

#### Returns

[`EShape`](EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L93)

___

### contains

▸ **contains**(`x`, `y`): ``null`` \| [`EShape`](EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`EShape`](EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L126)

___

### containsAbs

▸ **containsAbs**(`x`, `y`, `ax`, `ay`, `sw`, `ss`, `sa`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `ax` | `number` |
| `ay` | `number` |
| `sw` | `number` |
| `ss` | `number` |
| `sa` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L128)

___

### containsAbsBBox

▸ **containsAbsBBox**(`x`, `y`, `ax`, `ay`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `ax` | `number` |
| `ay` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L137)

___

### containsBBox

▸ **containsBBox**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L127)

___

### copy

▸ **copy**(`source`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShape`](EShape.md) |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L91)

▸ **copy**(`source`, `part`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShape`](EShape.md) |
| `part` | `number` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L92)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L94)

___

### detach

▸ **detach**(`exceptions?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](EShape.md)\> |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L89)

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

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L97)

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `result?`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate?` | `boolean` |
| `result?` | `Rectangle` |

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L142)

___

### getBoundsInternal

▸ **getBoundsInternal**(`skipUpdate?`, `result?`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate?` | `boolean` |
| `result?` | `Rectangle` |

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L143)

___

### getBoundsLocal

▸ **getBoundsLocal**(`skipUpdate?`, `result?`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate?` | `boolean` |
| `result?` | `Rectangle` |

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L144)

___

### getCapability

▸ **getCapability**(): `undefined` \| [`EShapeCapabilityContainer`](EShapeCapabilityContainer.md)

#### Returns

`undefined` \| [`EShapeCapabilityContainer`](EShapeCapabilityContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L83)

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

### lock

▸ **lock**(`part`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `part` | `number` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L108)

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

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L88)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L115)

___

### onDetach

▸ **onDetach**(`exceptions?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](EShape.md)\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L90)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L114)

___

### onRender

▸ **onRender**(`time`, `renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L105)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L101)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L113)

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

___

### serialize

▸ **serialize**(`manager`): [`DDiagramSerializedItem`](DDiagramSerializedItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

[`DDiagramSerializedItem`](DDiagramSerializedItem.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L121)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L86)

___

### toGlobal

▸ **toGlobal**(`position`, `result`, `skipUpdate?`): `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `IPoint` |
| `result` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L140)

___

### toLocal

▸ **toLocal**(`position`, `from?`, `result?`, `skipUpdate?`): `Point`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `IPoint` |
| `from?` | `DisplayObject` |
| `result?` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L141)

___

### unlock

▸ **unlock**(`part`, `invoke`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `part` | `number` |
| `invoke` | `boolean` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L109)

___

### update

▸ **update**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L104)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L112)

___

### updateUploaded

▸ **updateUploaded**(`recursively?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L118)

___

### updateUuid

▸ **updateUuid**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L123)
