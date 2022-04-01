[Winter Cardinal UI - v0.160.0](../index.md) / EShapeBase

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
- [\_connector](EShapeBase.md#_connector)
- [\_image](EShapeBase.md#_image)
- [\_isOnTransformChanged](EShapeBase.md#_isontransformchanged)
- [\_isUploadedUpdated](EShapeBase.md#_isuploadedupdated)
- [\_isUploadedUpdatedRecursively](EShapeBase.md#_isuploadedupdatedrecursively)
- [\_onTransformChangeLock](EShapeBase.md#_ontransformchangelock)
- [\_points](EShapeBase.md#_points)
- [\_state](EShapeBase.md#_state)
- [\_uploadedUpdateLock](EShapeBase.md#_uploadedupdatelock)
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
- [imageSrc](EShapeBase.md#imagesrc)
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

- [connector](EShapeBase.md#connector)
- [image](EShapeBase.md#image)
- [points](EShapeBase.md#points)
- [root](EShapeBase.md#root)
- [state](EShapeBase.md#state)
- [visible](EShapeBase.md#visible)
- [worldVisible](EShapeBase.md#worldvisible)

### Methods

- [addListener](EShapeBase.md#addlistener)
- [addUuid](EShapeBase.md#adduuid)
- [allowOnTransformChange](EShapeBase.md#allowontransformchange)
- [allowUploadedUpdate](EShapeBase.md#allowuploadedupdate)
- [attach](EShapeBase.md#attach)
- [blur](EShapeBase.md#blur)
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
- [disallowOnTransformChange](EShapeBase.md#disallowontransformchange)
- [disallowUploadedUpdate](EShapeBase.md#disallowuploadedupdate)
- [emit](EShapeBase.md#emit)
- [eventNames](EShapeBase.md#eventnames)
- [focus](EShapeBase.md#focus)
- [getBounds](EShapeBase.md#getbounds)
- [getBoundsInternal](EShapeBase.md#getboundsinternal)
- [getBoundsLocal](EShapeBase.md#getboundslocal)
- [getBoundsSize](EShapeBase.md#getboundssize)
- [getBounds\_](EShapeBase.md#getbounds_)
- [getHitTestSize](EShapeBase.md#gethittestsize)
- [getShapeScale](EShapeBase.md#getshapescale)
- [getStrokeWidthScale](EShapeBase.md#getstrokewidthscale)
- [listenerCount](EShapeBase.md#listenercount)
- [listeners](EShapeBase.md#listeners)
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
- [onTransformChange](EShapeBase.md#ontransformchange)
- [onTransformChange\_](EShapeBase.md#ontransformchange_)
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
- [update](EShapeBase.md#update)
- [updateRecursively](EShapeBase.md#updaterecursively)
- [updateTransform](EShapeBase.md#updatetransform)
- [updateUploaded](EShapeBase.md#updateuploaded)
- [updateUploadedRecursively](EShapeBase.md#updateuploadedrecursively)
- [updateUuid](EShapeBase.md#updateuuid)

## Constructors

### constructor

• **new EShapeBase**(`type`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |

#### Overrides

utils.EventEmitter.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L110)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L85)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### \_image

• `Protected` `Optional` **\_image**: `HTMLImageElement`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L59)

___

### \_isOnTransformChanged

• `Protected` **\_isOnTransformChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L77)

___

### \_isUploadedUpdated

• `Protected` **\_isUploadedUpdated**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L79)

___

### \_isUploadedUpdatedRecursively

• `Protected` **\_isUploadedUpdatedRecursively**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L80)

___

### \_onTransformChangeLock

• `Protected` **\_onTransformChangeLock**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L76)

___

### \_points

• `Protected` `Optional` **\_points**: [`EShapePoints`](../interfaces/EShapePoints.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L58)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_uploadedUpdateLock

• `Protected` **\_uploadedUpdateLock**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L78)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[action](../interfaces/EShape.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L67)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Implementation of

[EShape](../interfaces/EShape.md).[children](../interfaces/EShape.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### corner

• `Abstract` **corner**: `number`

#### Implementation of

[EShape](../interfaces/EShape.md).[corner](../interfaces/EShape.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L57)

___

### cursor

• `Abstract` **cursor**: `string`

#### Implementation of

[EShape](../interfaces/EShape.md).[cursor](../interfaces/EShape.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L68)

___

### data

• `Readonly` `Abstract` **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[data](../interfaces/EShape.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L66)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[editor](../interfaces/EShape.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L105)

___

### fill

• `Readonly` `Abstract` **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[fill](../interfaces/EShape.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L53)

___

### gradient

• `Optional` `Abstract` **gradient**: [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[gradient](../interfaces/EShape.md#gradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L62)

___

### id

• **id**: `string`

#### Implementation of

[EShape](../interfaces/EShape.md).[id](../interfaces/EShape.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L49)

___

### imageSrc

• `Optional` **imageSrc**: `string`

#### Implementation of

[EShape](../interfaces/EShape.md).[imageSrc](../interfaces/EShape.md#imagesrc)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L60)

___

### index

• **index**: `number`

#### Implementation of

[EShape](../interfaces/EShape.md).[index](../interfaces/EShape.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### interactive

• **interactive**: `boolean`

#### Implementation of

[EShape](../interfaces/EShape.md).[interactive](../interfaces/EShape.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L69)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[layout](../interfaces/EShape.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[parent](../interfaces/EShape.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L92)

___

### radius

• `Abstract` **radius**: `number`

#### Implementation of

[EShape](../interfaces/EShape.md).[radius](../interfaces/EShape.md#radius)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L56)

___

### reference

• **reference**: `number`

#### Implementation of

[EShape](../interfaces/EShape.md).[reference](../interfaces/EShape.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](EShapeRuntime.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[runtime](../interfaces/EShape.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### selected

• **selected**: `boolean`

#### Implementation of

[EShape](../interfaces/EShape.md).[selected](../interfaces/EShape.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Implementation of

[EShape](../interfaces/EShape.md).[shortcut](../interfaces/EShape.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L70)

___

### size

• `Readonly` `Abstract` **size**: `IPoint`

#### Implementation of

[EShape](../interfaces/EShape.md).[size](../interfaces/EShape.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L52)

___

### stroke

• `Readonly` `Abstract` **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[stroke](../interfaces/EShape.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L54)

___

### tag

• `Readonly` `Abstract` **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`deprecated`** in favor of [data](EShapeBase.md#data)

#### Implementation of

[EShape](../interfaces/EShape.md).[tag](../interfaces/EShape.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L65)

___

### text

• `Readonly` `Abstract` **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[text](../interfaces/EShape.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L63)

___

### texture

• `Optional` **texture**: `Texture`

#### Implementation of

[EShape](../interfaces/EShape.md).[texture](../interfaces/EShape.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L61)

___

### title

• `Optional` **title**: `string`

#### Implementation of

[EShape](../interfaces/EShape.md).[title](../interfaces/EShape.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L71)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[transform](../interfaces/EShape.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### type

• `Readonly` **type**: `number`

#### Implementation of

[EShape](../interfaces/EShape.md).[type](../interfaces/EShape.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L51)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[uploaded](../interfaces/EShape.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L108)

___

### uuid

• **uuid**: `number`

#### Implementation of

[EShape](../interfaces/EShape.md).[uuid](../interfaces/EShape.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L50)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L48)

## Accessors

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[connector](../interfaces/EShape.md#connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L267)

___

### image

• `get` **image**(): `undefined` \| `HTMLImageElement`

#### Returns

`undefined` \| `HTMLImageElement`

#### Implementation of

[EShape](../interfaces/EShape.md).[image](../interfaces/EShape.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L247)

• `set` **image**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `undefined` \| `HTMLImageElement` |

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[image](../interfaces/EShape.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L251)

___

### points

• `get` **points**(): `undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Returns

`undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[points](../interfaces/EShape.md#points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L255)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[root](../interfaces/EShape.md#root)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L259)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[state](../interfaces/EShape.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L750)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShape](../interfaces/EShape.md).[visible](../interfaces/EShape.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L276)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L287)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShape](../interfaces/EShape.md).[worldVisible](../interfaces/EShape.md#worldvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L294)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EShapeBase`](EShapeBase.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeBase`](EShapeBase.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[addListener](../interfaces/EShape.md#addlistener)

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
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[addUuid](../interfaces/EShape.md#adduuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L455)

___

### allowOnTransformChange

▸ **allowOnTransformChange**(`invokeOnTransformChange`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `invokeOnTransformChange` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[allowOnTransformChange](../interfaces/EShape.md#allowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L186)

___

### allowUploadedUpdate

▸ **allowUploadedUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[allowUploadedUpdate](../interfaces/EShape.md#allowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L210)

___

### attach

▸ **attach**(`parent`, `at?`): [`EShapeBase`](EShapeBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md) |
| `at?` | `number` |

#### Returns

[`EShapeBase`](EShapeBase.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[attach](../interfaces/EShape.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:314](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L314)

___

### blur

▸ **blur**(): [`EShapeBase`](EShapeBase.md)

#### Returns

[`EShapeBase`](EShapeBase.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[blur](../interfaces/EShape.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:766](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L766)

___

### clone

▸ `Abstract` **clone**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[clone](../interfaces/EShape.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L306)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:528](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L528)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:593](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L593)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:605](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L605)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L588)

___

### containsChildren

▸ `Protected` **containsChildren**(`x`, `y`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L565)

___

### containsText

▸ `Protected` **containsText**(`x`, `y`): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:546](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L546)

___

### copy

▸ **copy**(`source`, `part?`): [`EShapeBase`](EShapeBase.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | [`EShape`](../interfaces/EShape.md) | `undefined` |
| `part` | `number` | `EShapeCopyPart.ALL` |

#### Returns

[`EShapeBase`](EShapeBase.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[copy](../interfaces/EShape.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:820](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L820)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[destroy](../interfaces/EShape.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L729)

___

### detach

▸ **detach**(): [`EShapeBase`](EShapeBase.md)

#### Returns

[`EShapeBase`](EShapeBase.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[detach](../interfaces/EShape.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L342)

___

### disallowOnTransformChange

▸ **disallowOnTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[disallowOnTransformChange](../interfaces/EShape.md#disallowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L179)

___

### disallowUploadedUpdate

▸ **disallowUploadedUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[disallowUploadedUpdate](../interfaces/EShape.md#disallowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L202)

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

#### Implementation of

[EShape](../interfaces/EShape.md).[emit](../interfaces/EShape.md#emit)

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

#### Implementation of

[EShape](../interfaces/EShape.md).[eventNames](../interfaces/EShape.md#eventnames)

#### Inherited from

utils.EventEmitter.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`EShapeBase`](EShapeBase.md)

#### Returns

[`EShapeBase`](EShapeBase.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[focus](../interfaces/EShape.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:761](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L761)

___

### getBounds

▸ **getBounds**(`work`, `skipUpdate`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `work` | `Point` |
| `skipUpdate` | `boolean` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Implementation of

[EShape](../interfaces/EShape.md).[getBounds](../interfaces/EShape.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L635)

___

### getBoundsInternal

▸ **getBoundsInternal**(`work`, `skipUpdate`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `work` | `Point` |
| `skipUpdate` | `boolean` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Implementation of

[EShape](../interfaces/EShape.md).[getBoundsInternal](../interfaces/EShape.md#getboundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L650)

___

### getBoundsLocal

▸ **getBoundsLocal**(`work`, `skipUpdate`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `work` | `Point` |
| `skipUpdate` | `boolean` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Implementation of

[EShape](../interfaces/EShape.md).[getBoundsLocal](../interfaces/EShape.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L665)

___

### getBoundsSize

▸ `Protected` **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:680](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L680)

___

### getBounds\_

▸ `Protected` **getBounds_**(`transform`, `work`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |
| `work` | `Point` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:684](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L684)

___

### getHitTestSize

▸ `Protected` **getHitTestSize**(`result`): [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md) |

#### Returns

[`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L496)

___

### getShapeScale

▸ `Protected` **getShapeScale**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L472)

___

### getStrokeWidthScale

▸ `Protected` **getStrokeWidthScale**(`style`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:480](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L480)

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

#### Implementation of

[EShape](../interfaces/EShape.md).[listeners](../interfaces/EShape.md#listeners)

#### Inherited from

utils.EventEmitter.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newTransform

▸ `Protected` **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L140)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`EShapeBase`](EShapeBase.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`EShapeBase`](EShapeBase.md)

#### Implementation of

[EShape](../interfaces/EShape.md).[off](../interfaces/EShape.md#off)

#### Inherited from

utils.EventEmitter.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EShapeBase`](EShapeBase.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`EShapeBase`](EShapeBase.md)

`this`.

#### Implementation of

[EShape](../interfaces/EShape.md).[on](../interfaces/EShape.md#on)

#### Inherited from

utils.EventEmitter.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[onAttach](../interfaces/EShape.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:330](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L330)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[onChildTransformChange](../interfaces/EShape.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L198)

___

### onDetach

▸ **onDetach**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[onDetach](../interfaces/EShape.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L359)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:780](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L780)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L788)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[onParentTransformChange](../interfaces/EShape.md#onparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L159)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L804)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[onSizeChange](../interfaces/EShape.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L144)

___

### onStateChange

▸ `Protected` **onStateChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:738](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L738)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[onTransformChange](../interfaces/EShape.md#ontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L154)

___

### onTransformChange\_

▸ `Protected` **onTransformChange_**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L168)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShapeBase`](EShapeBase.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`EShapeBase`](EShapeBase.md)

`this`.

#### Implementation of

[EShape](../interfaces/EShape.md).[once](../interfaces/EShape.md#once)

#### Inherited from

utils.EventEmitter.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EShapeBase`](EShapeBase.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`EShapeBase`](EShapeBase.md)

`this`.

#### Implementation of

[EShape](../interfaces/EShape.md).[removeAllListeners](../interfaces/EShape.md#removealllisteners)

#### Inherited from

utils.EventEmitter.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`EShapeBase`](EShapeBase.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`EShapeBase`](EShapeBase.md)

`this`.

#### Implementation of

[EShape](../interfaces/EShape.md).[removeListener](../interfaces/EShape.md#removelistener)

#### Inherited from

utils.EventEmitter.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24056

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:609](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L609)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:415](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L415)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:384](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L384)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L399)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L394)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:410](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L410)

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L771)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[toDirty](../interfaces/EShape.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:309](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L309)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:614](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L614)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L503)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:623](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L623)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L797)

___

### updateRecursively

▸ **updateRecursively**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:811](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L811)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[updateTransform](../interfaces/EShape.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L371)

___

### updateUploaded

▸ **updateUploaded**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[updateUploaded](../interfaces/EShape.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L236)

___

### updateUploadedRecursively

▸ **updateUploadedRecursively**(): `void`

#### Returns

`void`

#### Implementation of

[EShape](../interfaces/EShape.md).[updateUploadedRecursively](../interfaces/EShape.md#updateuploadedrecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L224)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L463)
