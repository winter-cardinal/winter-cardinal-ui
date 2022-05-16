[Winter Cardinal UI - v0.167.0](../index.md) / EShape

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
- [imageSrc](EShape.md#imagesrc)
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
- [allowOnTransformChange](EShape.md#allowontransformchange)
- [allowUploadedUpdate](EShape.md#allowuploadedupdate)
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
- [disallowOnTransformChange](EShape.md#disallowontransformchange)
- [disallowUploadedUpdate](EShape.md#disallowuploadedupdate)
- [emit](EShape.md#emit)
- [eventNames](EShape.md#eventnames)
- [focus](EShape.md#focus)
- [getBounds](EShape.md#getbounds)
- [getBoundsInternal](EShape.md#getboundsinternal)
- [getBoundsLocal](EShape.md#getboundslocal)
- [listenerCount](EShape.md#listenercount)
- [listeners](EShape.md#listeners)
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
- [update](EShape.md#update)
- [updateTransform](EShape.md#updatetransform)
- [updateUploaded](EShape.md#updateuploaded)
- [updateUploadedRecursively](EShape.md#updateuploadedrecursively)
- [updateUuid](EShape.md#updateuuid)

## Properties

### action

• `Readonly` **action**: [`EShapeAction`](../classes/EShapeAction.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L47)

___

### children

• **children**: [`EShape`](EShape.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L59)

___

### connector

• **connector**: [`EShapeConnectorContainer`](EShapeConnectorContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L54)

___

### corner

• **corner**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L37)

___

### cursor

• **cursor**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L48)

___

### data

• `Readonly` **data**: [`EShapeData`](EShapeData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L46)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](../classes/EShapeEditor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L71)

___

### fill

• `Readonly` **fill**: [`EShapeFill`](EShapeFill.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L33)

___

### gradient

• `Optional` **gradient**: [`EShapeGradientLike`](EShapeGradientLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L42)

___

### id

• **id**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L29)

___

### image

• `Optional` **image**: `HTMLImageElement`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L39)

___

### imageSrc

• `Optional` **imageSrc**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L40)

___

### index

• **index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L63)

___

### interactive

• **interactive**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L51)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](EShapeLayout.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L60)

___

### parent

• **parent**: ``null`` \| [`EShape`](EShape.md) \| [`EShapeContainer`](../classes/EShapeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L57)

___

### points

• `Optional` `Readonly` **points**: [`EShapePoints`](EShapePoints.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L38)

___

### radius

• **radius**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L36)

___

### reference

• **reference**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L65)

___

### root

• **root**: [`EShape`](EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L58)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](../classes/EShapeRuntime.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L68)

___

### selected

• **selected**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L64)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L52)

___

### size

• `Readonly` **size**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L32)

___

### state

• `Readonly` **state**: [`EShapeStateSet`](EShapeStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L77)

___

### stroke

• `Readonly` **stroke**: [`EShapeStroke`](EShapeStroke.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L34)

___

### tag

• `Readonly` **tag**: [`EShapeData`](EShapeData.md)

**`deprecated`** in favor of [data](EShape.md#data).

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L45)

___

### text

• `Readonly` **text**: [`EShapeText`](EShapeText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L43)

___

### texture

• `Optional` **texture**: `Texture`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L41)

___

### title

• `Optional` **title**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L53)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](EShapeTransform.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L35)

___

### type

• `Readonly` **type**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L31)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](EShapeUploaded.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L74)

___

### uuid

• **uuid**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L30)

___

### visible

• **visible**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L49)

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L50)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EShape`](EShape.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShape`](EShape.md)

#### Inherited from

utils.EventEmitter.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24076

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

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L117)

___

### allowOnTransformChange

▸ **allowOnTransformChange**(`invokeOnTransformChange`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `invokeOnTransformChange` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L104)

___

### allowUploadedUpdate

▸ **allowUploadedUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L111)

___

### attach

▸ **attach**(`parent`, `at?`): [`EShape`](EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](EShape.md) \| [`EShapeContainer`](../classes/EShapeContainer.md) |
| `at?` | `number` |

#### Returns

[`EShape`](EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L81)

___

### blur

▸ **blur**(): [`EShape`](EShape.md)

#### Returns

[`EShape`](EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L92)

___

### clone

▸ **clone**(): [`EShape`](EShape.md)

#### Returns

[`EShape`](EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L87)

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

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L121)

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

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L123)

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

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L132)

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

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L122)

___

### copy

▸ **copy**(`source`): [`EShape`](EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShape`](EShape.md) |

#### Returns

[`EShape`](EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L85)

▸ **copy**(`source`, `part`): [`EShape`](EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShape`](EShape.md) |
| `part` | `number` |

#### Returns

[`EShape`](EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L86)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L88)

___

### detach

▸ **detach**(): [`EShape`](EShape.md)

#### Returns

[`EShape`](EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L83)

___

### disallowOnTransformChange

▸ **disallowOnTransformChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L103)

___

### disallowUploadedUpdate

▸ **disallowUploadedUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L110)

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

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

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`EShape`](EShape.md)

#### Returns

[`EShape`](EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L91)

___

### getBounds

▸ **getBounds**(`skipUpdate`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate` | `boolean` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L137)

___

### getBoundsInternal

▸ **getBoundsInternal**(`skipUpdate`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate` | `boolean` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L138)

___

### getBoundsLocal

▸ **getBoundsLocal**(`skipUpdate`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate` | `boolean` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L139)

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

node_modules/pixi.js/pixi.js.d.ts:24013

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

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`EShape`](EShape.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`EShape`](EShape.md)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EShape`](EShape.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`EShape`](EShape.md)

`this`.

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L82)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L107)

___

### onDetach

▸ **onDetach**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L84)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L106)

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

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L99)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L95)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L105)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShape`](EShape.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`EShape`](EShape.md)

`this`.

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EShape`](EShape.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`EShape`](EShape.md)

`this`.

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`EShape`](EShape.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`EShape`](EShape.md)

`this`.

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

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

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L116)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L80)

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

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L135)

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

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L136)

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

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L98)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L102)

___

### updateUploaded

▸ **updateUploaded**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L112)

___

### updateUploadedRecursively

▸ **updateUploadedRecursively**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L113)

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

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L118)
