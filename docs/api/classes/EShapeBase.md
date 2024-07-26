[Winter Cardinal UI - v0.442.0](../index.md) / EShapeBase

# Class: EShapeBase

## Hierarchy

- `EventEmitter`

  ↳ **`EShapeBase`**

  ↳↳ [`EShapeGroupViewer`](EShapeGroupViewer.md)

  ↳↳ [`EShapeGroup`](EShapeGroup.md)

  ↳↳ [`EShapePrimitive`](EShapePrimitive.md)

## Implements

- [`EShape`](../interfaces/EShape.md)

## Table of contents

### Constructors

- [constructor](EShapeBase.md#constructor)

### Properties

- [\_bounds](EShapeBase.md#_bounds)
- [\_boundsInternal](EShapeBase.md#_boundsinternal)
- [\_boundsInternalTransformId](EShapeBase.md#_boundsinternaltransformid)
- [\_boundsLocal](EShapeBase.md#_boundslocal)
- [\_boundsLocalTransformId](EShapeBase.md#_boundslocaltransformid)
- [\_boundsTransformId](EShapeBase.md#_boundstransformid)
- [\_capability](EShapeBase.md#_capability)
- [\_connector](EShapeBase.md#_connector)
- [\_lockTransformChild](EShapeBase.md#_locktransformchild)
- [\_lockTransformParent](EShapeBase.md#_locktransformparent)
- [\_lockTransformThis](EShapeBase.md#_locktransformthis)
- [\_lockUploaded](EShapeBase.md#_lockuploaded)
- [\_points](EShapeBase.md#_points)
- [\_state](EShapeBase.md#_state)
- [\_visible](EShapeBase.md#_visible)
- [action](EShapeBase.md#action)
- [children](EShapeBase.md#children)
- [corner](EShapeBase.md#corner)
- [cursor](EShapeBase.md#cursor)
- [data](EShapeBase.md#data)
- [editor](EShapeBase.md#editor)
- [fill](EShapeBase.md#fill)
- [gradient](EShapeBase.md#gradient)
- [id](EShapeBase.md#id)
- [image](EShapeBase.md#image)
- [index](EShapeBase.md#index)
- [interactive](EShapeBase.md#interactive)
- [layout](EShapeBase.md#layout)
- [parent](EShapeBase.md#parent)
- [radius](EShapeBase.md#radius)
- [reference](EShapeBase.md#reference)
- [runtime](EShapeBase.md#runtime)
- [selected](EShapeBase.md#selected)
- [shortcut](EShapeBase.md#shortcut)
- [size](EShapeBase.md#size)
- [stroke](EShapeBase.md#stroke)
- [tag](EShapeBase.md#tag)
- [text](EShapeBase.md#text)
- [texture](EShapeBase.md#texture)
- [title](EShapeBase.md#title)
- [transform](EShapeBase.md#transform)
- [type](EShapeBase.md#type)
- [uploaded](EShapeBase.md#uploaded)
- [uuid](EShapeBase.md#uuid)
- [WORK\_HIT\_TEST\_DATA](EShapeBase.md#work_hit_test_data)

### Accessors

- [capability](EShapeBase.md#capability)
- [connector](EShapeBase.md#connector)
- [points](EShapeBase.md#points)
- [root](EShapeBase.md#root)
- [state](EShapeBase.md#state)
- [visible](EShapeBase.md#visible)
- [worldVisible](EShapeBase.md#worldvisible)

### Methods

- [addListener](EShapeBase.md#addlistener)
- [addUuid](EShapeBase.md#adduuid)
- [attach](EShapeBase.md#attach)
- [blur](EShapeBase.md#blur)
- [callChildTransformChange](EShapeBase.md#callchildtransformchange)
- [callParentTransformChange](EShapeBase.md#callparenttransformchange)
- [clone](EShapeBase.md#clone)
- [contains](EShapeBase.md#contains)
- [containsAbs](EShapeBase.md#containsabs)
- [containsAbsBBox](EShapeBase.md#containsabsbbox)
- [containsBBox](EShapeBase.md#containsbbox)
- [containsChildren](EShapeBase.md#containschildren)
- [containsText](EShapeBase.md#containstext)
- [copy](EShapeBase.md#copy)
- [destroy](EShapeBase.md#destroy)
- [detach](EShapeBase.md#detach)
- [emit](EShapeBase.md#emit)
- [eventNames](EShapeBase.md#eventnames)
- [focus](EShapeBase.md#focus)
- [getBounds](EShapeBase.md#getbounds)
- [getBoundsInternal](EShapeBase.md#getboundsinternal)
- [getBoundsLocal](EShapeBase.md#getboundslocal)
- [getBoundsSize](EShapeBase.md#getboundssize)
- [getBounds\_](EShapeBase.md#getbounds_)
- [getCapability](EShapeBase.md#getcapability)
- [getHitTestSize](EShapeBase.md#gethittestsize)
- [getShapeScale](EShapeBase.md#getshapescale)
- [getStrokeWidthScale](EShapeBase.md#getstrokewidthscale)
- [listenerCount](EShapeBase.md#listenercount)
- [listeners](EShapeBase.md#listeners)
- [lock](EShapeBase.md#lock)
- [newTransform](EShapeBase.md#newtransform)
- [off](EShapeBase.md#off)
- [on](EShapeBase.md#on)
- [onAttach](EShapeBase.md#onattach)
- [onChildTransformChange](EShapeBase.md#onchildtransformchange)
- [onDetach](EShapeBase.md#ondetach)
- [onKeyDown](EShapeBase.md#onkeydown)
- [onKeyUp](EShapeBase.md#onkeyup)
- [onParentTransformChange](EShapeBase.md#onparenttransformchange)
- [onRender](EShapeBase.md#onrender)
- [onSizeChange](EShapeBase.md#onsizechange)
- [onStateChange](EShapeBase.md#onstatechange)
- [onThisTransformChange](EShapeBase.md#onthistransformchange)
- [onTransformChange](EShapeBase.md#ontransformchange)
- [once](EShapeBase.md#once)
- [removeAllListeners](EShapeBase.md#removealllisteners)
- [removeListener](EShapeBase.md#removelistener)
- [select](EShapeBase.md#select)
- [serialize](EShapeBase.md#serialize)
- [serializeChildren](EShapeBase.md#serializechildren)
- [serializeGradient](EShapeBase.md#serializegradient)
- [serializeImage](EShapeBase.md#serializeimage)
- [serializeState](EShapeBase.md#serializestate)
- [setFocused](EShapeBase.md#setfocused)
- [toDirty](EShapeBase.md#todirty)
- [toGlobal](EShapeBase.md#toglobal)
- [toHitTestData](EShapeBase.md#tohittestdata)
- [toLocal](EShapeBase.md#tolocal)
- [unlock](EShapeBase.md#unlock)
- [update](EShapeBase.md#update)
- [updateTransform](EShapeBase.md#updatetransform)
- [updateUploaded](EShapeBase.md#updateuploaded)
- [updateUuid](EShapeBase.md#updateuuid)

## Constructors

### constructor

• **new EShapeBase**(`type`): [`EShapeBase`](EShapeBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |

#### Returns

[`EShapeBase`](EShapeBase.md)

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L115)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L88)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L90)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L91)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_capability

• `Protected` `Optional` **\_capability**: [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L77)

___

### \_lockTransformChild

• `Protected` **\_lockTransformChild**: [`EShapeLock`](EShapeLock.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L81)

___

### \_lockTransformParent

• `Protected` **\_lockTransformParent**: [`EShapeLock`](EShapeLock.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_lockTransformThis

• `Protected` **\_lockTransformThis**: [`EShapeLock`](EShapeLock.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_lockUploaded

• `Protected` **\_lockUploaded**: [`EShapeLock`](EShapeLock.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_points

• `Protected` `Optional` **\_points**: [`EShapePoints`](../interfaces/EShapePoints.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L63)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L79)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[action](../interfaces/EShape.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L71)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Implementation of

[EShape](../interfaces/EShape.md).[children](../interfaces/EShape.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### corner

• `Abstract` **corner**: `number`

#### Implementation of

[EShape](../interfaces/EShape.md).[corner](../interfaces/EShape.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L62)

___

### cursor

• `Optional` **cursor**: `string`

#### Implementation of

[EShape](../interfaces/EShape.md).[cursor](../interfaces/EShape.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L72)

___

### data

• `Readonly` `Abstract` **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[data](../interfaces/EShape.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L70)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[editor](../interfaces/EShape.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L110)

___

### fill

• `Readonly` `Abstract` **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[fill](../interfaces/EShape.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L58)

___

### gradient

• `Optional` `Abstract` **gradient**: [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[gradient](../interfaces/EShape.md#gradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L66)

___

### id

• **id**: `string`

#### Implementation of

[EShape](../interfaces/EShape.md).[id](../interfaces/EShape.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L54)

___

### image

• `Optional` `Abstract` **image**: [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[image](../interfaces/EShape.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L64)

___

### index

• **index**: `number`

#### Implementation of

[EShape](../interfaces/EShape.md).[index](../interfaces/EShape.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### interactive

• **interactive**: `boolean`

#### Implementation of

[EShape](../interfaces/EShape.md).[interactive](../interfaces/EShape.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[layout](../interfaces/EShape.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[parent](../interfaces/EShape.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### radius

• `Abstract` **radius**: `number`

#### Implementation of

[EShape](../interfaces/EShape.md).[radius](../interfaces/EShape.md#radius)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L61)

___

### reference

• **reference**: `number`

#### Implementation of

[EShape](../interfaces/EShape.md).[reference](../interfaces/EShape.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L104)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](../interfaces/EShapeRuntime.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[runtime](../interfaces/EShape.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L107)

___

### selected

• **selected**: `boolean`

#### Implementation of

[EShape](../interfaces/EShape.md).[selected](../interfaces/EShape.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L103)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Implementation of

[EShape](../interfaces/EShape.md).[shortcut](../interfaces/EShape.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L74)

___

### size

• `Readonly` `Abstract` **size**: `IPoint`

#### Implementation of

[EShape](../interfaces/EShape.md).[size](../interfaces/EShape.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L57)

___

### stroke

• `Readonly` `Abstract` **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[stroke](../interfaces/EShape.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L59)

___

### tag

• `Readonly` `Abstract` **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`Deprecated`**

in favor of [data](EShapeBase.md#data)

#### Implementation of

[EShape](../interfaces/EShape.md).[tag](../interfaces/EShape.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L69)

___

### text

• `Readonly` `Abstract` **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[text](../interfaces/EShape.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L67)

___

### texture

• `Optional` **texture**: `Texture`

#### Implementation of

[EShape](../interfaces/EShape.md).[texture](../interfaces/EShape.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L65)

___

### title

• `Optional` **title**: `string`

#### Implementation of

[EShape](../interfaces/EShape.md).[title](../interfaces/EShape.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[transform](../interfaces/EShape.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L60)

___

### type

• `Readonly` **type**: `number`

#### Implementation of

[EShape](../interfaces/EShape.md).[type](../interfaces/EShape.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L56)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[uploaded](../interfaces/EShape.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L113)

___

### uuid

• **uuid**: `number`

#### Implementation of

[EShape](../interfaces/EShape.md).[uuid](../interfaces/EShape.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L53)

## Accessors

### capability

• `get` **capability**(): [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

[`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[capability](../interfaces/EShape.md#capability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:803](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L803)

___

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[connector](../interfaces/EShape.md#connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L296)

___

### points

• `get` **points**(): `undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Returns

`undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[points](../interfaces/EShape.md#points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L284)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[root](../interfaces/EShape.md#root)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L288)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[state](../interfaces/EShape.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L792)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShape](../interfaces/EShape.md).[visible](../interfaces/EShape.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:305](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L305)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[visible](../interfaces/EShape.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:316](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L316)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShape](../interfaces/EShape.md).[worldVisible](../interfaces/EShape.md#worldvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L323)

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

[EShape](../interfaces/EShape.md).[addListener](../interfaces/EShape.md#addlistener)

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
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[addUuid](../interfaces/EShape.md#adduuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:489](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L489)

___

### attach

▸ **attach**(`parent`, `at?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md) |
| `at?` | `number` |

#### Returns

`this`

#### Implementation of

[EShape](../interfaces/EShape.md).[attach](../interfaces/EShape.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L346)

___

### blur

▸ **blur**(): `this`

#### Returns

`this`

#### Implementation of

[EShape](../interfaces/EShape.md).[blur](../interfaces/EShape.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:821](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L821)

___

### callChildTransformChange

▸ **callChildTransformChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L186)

___

### callParentTransformChange

▸ **callParentTransformChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L201)

___

### clone

▸ **clone**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[clone](../interfaces/EShape.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L335)

___

### contains

▸ **contains**(`x`, `y`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[contains](../interfaces/EShape.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:562](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L562)

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

#### Implementation of

[EShape](../interfaces/EShape.md).[containsAbs](../interfaces/EShape.md#containsabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:629](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L629)

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

#### Implementation of

[EShape](../interfaces/EShape.md).[containsAbsBBox](../interfaces/EShape.md#containsabsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:641](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L641)

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

#### Implementation of

[EShape](../interfaces/EShape.md).[containsBBox](../interfaces/EShape.md#containsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:624](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L624)

___

### containsChildren

▸ **containsChildren**(`x`, `y`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L601)

___

### containsText

▸ **containsText**(`x`, `y`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L580)

___

### copy

▸ **copy**(`source`, `part?`): `this`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | [`EShape`](../interfaces/EShape.md) | `undefined` |
| `part` | `number` | `EShapeCopyPart.ALL` |

#### Returns

`this`

#### Implementation of

[EShape](../interfaces/EShape.md).[copy](../interfaces/EShape.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:866](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L866)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[destroy](../interfaces/EShape.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L768)

___

### detach

▸ **detach**(`exceptions?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](../interfaces/EShape.md)\> |

#### Returns

`this`

#### Implementation of

[EShape](../interfaces/EShape.md).[detach](../interfaces/EShape.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L374)

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

[EShape](../interfaces/EShape.md).[emit](../interfaces/EShape.md#emit)

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

[EShape](../interfaces/EShape.md).[eventNames](../interfaces/EShape.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Implementation of

[EShape](../interfaces/EShape.md).[focus](../interfaces/EShape.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:816](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L816)

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

#### Implementation of

[EShape](../interfaces/EShape.md).[getBounds](../interfaces/EShape.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L671)

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

#### Implementation of

[EShape](../interfaces/EShape.md).[getBoundsInternal](../interfaces/EShape.md#getboundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L687)

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

#### Implementation of

[EShape](../interfaces/EShape.md).[getBoundsLocal](../interfaces/EShape.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:703](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L703)

___

### getBoundsSize

▸ **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L719)

___

### getBounds\_

▸ **getBounds_**(`transform`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L723)

___

### getCapability

▸ **getCapability**(): `undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

`undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[getCapability](../interfaces/EShape.md#getcapability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:812](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L812)

___

### getHitTestSize

▸ **getHitTestSize**(`result`): [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md) |

#### Returns

[`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L530)

___

### getShapeScale

▸ **getShapeScale**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:506](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L506)

___

### getStrokeWidthScale

▸ **getStrokeWidthScale**(`style`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:514](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L514)

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

[EShape](../interfaces/EShape.md).[listenerCount](../interfaces/EShape.md#listenercount)

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

[EShape](../interfaces/EShape.md).[listeners](../interfaces/EShape.md#listeners)

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

#### Implementation of

[EShape](../interfaces/EShape.md).[lock](../interfaces/EShape.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:217](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L217)

___

### newTransform

▸ **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L145)

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

[EShape](../interfaces/EShape.md).[off](../interfaces/EShape.md#off)

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

[EShape](../interfaces/EShape.md).[on](../interfaces/EShape.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[onAttach](../interfaces/EShape.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L361)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[onChildTransformChange](../interfaces/EShape.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:264](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L264)

___

### onDetach

▸ **onDetach**(`exceptions?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](../interfaces/EShape.md)\> |

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[onDetach](../interfaces/EShape.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L390)

___

### onKeyDown

▸ **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:835](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L835)

___

### onKeyUp

▸ **onKeyUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L843)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[onParentTransformChange](../interfaces/EShape.md#onparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L208)

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

#### Implementation of

[EShape](../interfaces/EShape.md).[onRender](../interfaces/EShape.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:859](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L859)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[onSizeChange](../interfaces/EShape.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L149)

___

### onStateChange

▸ **onStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L777)

___

### onThisTransformChange

▸ **onThisTransformChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L193)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[onTransformChange](../interfaces/EShape.md#ontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L174)

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

[EShape](../interfaces/EShape.md).[once](../interfaces/EShape.md#once)

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

[EShape](../interfaces/EShape.md).[removeAllListeners](../interfaces/EShape.md#removealllisteners)

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

[EShape](../interfaces/EShape.md).[removeListener](../interfaces/EShape.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### select

▸ **select**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Point` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:645](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L645)

___

### serialize

▸ **serialize**(`manager`): [`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

[`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[serialize](../interfaces/EShape.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:435](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L435)

___

### serializeChildren

▸ **serializeChildren**(`manager`): [`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

[`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:416](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L416)

___

### serializeGradient

▸ **serializeGradient**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L428)

___

### serializeImage

▸ **serializeImage**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L426)

___

### serializeState

▸ **serializeState**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:430](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L430)

___

### setFocused

▸ **setFocused**(`isFocused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:826](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L826)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[toDirty](../interfaces/EShape.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L338)

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

#### Implementation of

[EShape](../interfaces/EShape.md).[toGlobal](../interfaces/EShape.md#toglobal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L650)

___

### toHitTestData

▸ **toHitTestData**(`x`, `y`): [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L537)

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

#### Implementation of

[EShape](../interfaces/EShape.md).[toLocal](../interfaces/EShape.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:659](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L659)

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

#### Implementation of

[EShape](../interfaces/EShape.md).[unlock](../interfaces/EShape.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L233)

___

### update

▸ **update**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[update](../interfaces/EShape.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L852)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[updateTransform](../interfaces/EShape.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L403)

___

### updateUploaded

▸ **updateUploaded**(`recursively?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[updateUploaded](../interfaces/EShape.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L268)

___

### updateUuid

▸ **updateUuid**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[updateUuid](../interfaces/EShape.md#updateuuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L497)
