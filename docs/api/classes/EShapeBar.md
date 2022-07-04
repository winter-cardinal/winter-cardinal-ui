[Winter Cardinal UI - v0.194.0](../index.md) / EShapeBar

# Class: EShapeBar

## Hierarchy

- [`EShapeLineBase`](EShapeLineBase.md)

  ↳ **`EShapeBar`**

## Table of contents

### Constructors

- [constructor](EShapeBar.md#constructor)

### Properties

- [\_bounds](EShapeBar.md#_bounds)
- [\_boundsInternal](EShapeBar.md#_boundsinternal)
- [\_boundsInternalTransformId](EShapeBar.md#_boundsinternaltransformid)
- [\_boundsLocal](EShapeBar.md#_boundslocal)
- [\_boundsLocalTransformId](EShapeBar.md#_boundslocaltransformid)
- [\_boundsTransformId](EShapeBar.md#_boundstransformid)
- [\_connector](EShapeBar.md#_connector)
- [\_corner](EShapeBar.md#_corner)
- [\_image](EShapeBar.md#_image)
- [\_isOnTransformChanged](EShapeBar.md#_isontransformchanged)
- [\_isUploadedUpdated](EShapeBar.md#_isuploadedupdated)
- [\_isUploadedUpdatedRecursively](EShapeBar.md#_isuploadedupdatedrecursively)
- [\_onTransformChangeLock](EShapeBar.md#_ontransformchangelock)
- [\_points](EShapeBar.md#_points)
- [\_radius](EShapeBar.md#_radius)
- [\_state](EShapeBar.md#_state)
- [\_uploadedUpdateLock](EShapeBar.md#_uploadedupdatelock)
- [\_visible](EShapeBar.md#_visible)
- [action](EShapeBar.md#action)
- [children](EShapeBar.md#children)
- [cursor](EShapeBar.md#cursor)
- [data](EShapeBar.md#data)
- [editor](EShapeBar.md#editor)
- [fill](EShapeBar.md#fill)
- [gradient](EShapeBar.md#gradient)
- [id](EShapeBar.md#id)
- [imageSrc](EShapeBar.md#imagesrc)
- [index](EShapeBar.md#index)
- [interactive](EShapeBar.md#interactive)
- [layout](EShapeBar.md#layout)
- [parent](EShapeBar.md#parent)
- [reference](EShapeBar.md#reference)
- [runtime](EShapeBar.md#runtime)
- [selected](EShapeBar.md#selected)
- [shortcut](EShapeBar.md#shortcut)
- [size](EShapeBar.md#size)
- [stroke](EShapeBar.md#stroke)
- [tag](EShapeBar.md#tag)
- [text](EShapeBar.md#text)
- [texture](EShapeBar.md#texture)
- [title](EShapeBar.md#title)
- [transform](EShapeBar.md#transform)
- [type](EShapeBar.md#type)
- [uploaded](EShapeBar.md#uploaded)
- [uuid](EShapeBar.md#uuid)
- [WORK\_HIT\_TEST\_DATA](EShapeBar.md#work_hit_test_data)

### Accessors

- [connector](EShapeBar.md#connector)
- [corner](EShapeBar.md#corner)
- [image](EShapeBar.md#image)
- [points](EShapeBar.md#points)
- [radius](EShapeBar.md#radius)
- [root](EShapeBar.md#root)
- [state](EShapeBar.md#state)
- [visible](EShapeBar.md#visible)
- [worldVisible](EShapeBar.md#worldvisible)

### Methods

- [addListener](EShapeBar.md#addlistener)
- [addUuid](EShapeBar.md#adduuid)
- [allowOnTransformChange](EShapeBar.md#allowontransformchange)
- [allowUploadedUpdate](EShapeBar.md#allowuploadedupdate)
- [attach](EShapeBar.md#attach)
- [blur](EShapeBar.md#blur)
- [calcHitPart](EShapeBar.md#calchitpart)
- [calcHitPoint](EShapeBar.md#calchitpoint)
- [calcHitPointAbsHitTester](EShapeBar.md#calchitpointabshittester)
- [clone](EShapeBar.md#clone)
- [contains](EShapeBar.md#contains)
- [containsAbs](EShapeBar.md#containsabs)
- [containsAbsBBox](EShapeBar.md#containsabsbbox)
- [containsAbsMarker](EShapeBar.md#containsabsmarker)
- [containsBBox](EShapeBar.md#containsbbox)
- [containsChildren](EShapeBar.md#containschildren)
- [containsText](EShapeBar.md#containstext)
- [copy](EShapeBar.md#copy)
- [destroy](EShapeBar.md#destroy)
- [detach](EShapeBar.md#detach)
- [disallowOnTransformChange](EShapeBar.md#disallowontransformchange)
- [disallowUploadedUpdate](EShapeBar.md#disallowuploadedupdate)
- [emit](EShapeBar.md#emit)
- [eventNames](EShapeBar.md#eventnames)
- [focus](EShapeBar.md#focus)
- [getBounds](EShapeBar.md#getbounds)
- [getBoundsInternal](EShapeBar.md#getboundsinternal)
- [getBoundsLocal](EShapeBar.md#getboundslocal)
- [getBoundsSize](EShapeBar.md#getboundssize)
- [getBounds\_](EShapeBar.md#getbounds_)
- [getHitTestSize](EShapeBar.md#gethittestsize)
- [getShapeScale](EShapeBar.md#getshapescale)
- [getStrokeWidthScale](EShapeBar.md#getstrokewidthscale)
- [listenerCount](EShapeBar.md#listenercount)
- [listeners](EShapeBar.md#listeners)
- [newFill](EShapeBar.md#newfill)
- [newSize](EShapeBar.md#newsize)
- [newStroke](EShapeBar.md#newstroke)
- [newText](EShapeBar.md#newtext)
- [newTransform](EShapeBar.md#newtransform)
- [off](EShapeBar.md#off)
- [on](EShapeBar.md#on)
- [onAttach](EShapeBar.md#onattach)
- [onChildTransformChange](EShapeBar.md#onchildtransformchange)
- [onDetach](EShapeBar.md#ondetach)
- [onKeyDown](EShapeBar.md#onkeydown)
- [onKeyUp](EShapeBar.md#onkeyup)
- [onParentTransformChange](EShapeBar.md#onparenttransformchange)
- [onRender](EShapeBar.md#onrender)
- [onSizeChange](EShapeBar.md#onsizechange)
- [onStateChange](EShapeBar.md#onstatechange)
- [onTransformChange](EShapeBar.md#ontransformchange)
- [onTransformChange\_](EShapeBar.md#ontransformchange_)
- [once](EShapeBar.md#once)
- [removeAllListeners](EShapeBar.md#removealllisteners)
- [removeListener](EShapeBar.md#removelistener)
- [select](EShapeBar.md#select)
- [serialize](EShapeBar.md#serialize)
- [serializeChildren](EShapeBar.md#serializechildren)
- [serializeGradient](EShapeBar.md#serializegradient)
- [serializeImage](EShapeBar.md#serializeimage)
- [serializeState](EShapeBar.md#serializestate)
- [setFocused](EShapeBar.md#setfocused)
- [toDirty](EShapeBar.md#todirty)
- [toGlobal](EShapeBar.md#toglobal)
- [toHitTestData](EShapeBar.md#tohittestdata)
- [toLocal](EShapeBar.md#tolocal)
- [toMarkerSize](EShapeBar.md#tomarkersize)
- [update](EShapeBar.md#update)
- [updateRecursively](EShapeBar.md#updaterecursively)
- [updateTransform](EShapeBar.md#updatetransform)
- [updateUploaded](EShapeBar.md#updateuploaded)
- [updateUploadedRecursively](EShapeBar.md#updateuploadedrecursively)
- [updateUuid](EShapeBar.md#updateuuid)

## Constructors

### constructor

• **new EShapeBar**(`type?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `number` | `EShapeType.BAR` |

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[constructor](EShapeLineBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts#L15)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_bounds](EShapeLineBase.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsInternal](EShapeLineBase.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsInternalTransformId](EShapeLineBase.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L85)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsLocal](EShapeLineBase.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsLocalTransformId](EShapeLineBase.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsTransformId](EShapeLineBase.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_connector](EShapeLineBase.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### \_corner

• `Protected` **\_corner**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_corner](EShapeLineBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L27)

___

### \_image

• `Protected` `Optional` **\_image**: `HTMLImageElement`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_image](EShapeLineBase.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L28)

___

### \_isOnTransformChanged

• `Protected` **\_isOnTransformChanged**: `boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_isOnTransformChanged](EShapeLineBase.md#_isontransformchanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L77)

___

### \_isUploadedUpdated

• `Protected` **\_isUploadedUpdated**: `boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_isUploadedUpdated](EShapeLineBase.md#_isuploadedupdated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L79)

___

### \_isUploadedUpdatedRecursively

• `Protected` **\_isUploadedUpdatedRecursively**: `boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_isUploadedUpdatedRecursively](EShapeLineBase.md#_isuploadedupdatedrecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L80)

___

### \_onTransformChangeLock

• `Protected` **\_onTransformChangeLock**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_onTransformChangeLock](EShapeLineBase.md#_ontransformchangelock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L76)

___

### \_points

• `Protected` **\_points**: [`EShapeBarPoints`](EShapeBarPoints.md)

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[_points](EShapeLineBase.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts#L13)

___

### \_radius

• `Protected` **\_radius**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_radius](EShapeLineBase.md#_radius)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L26)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_state](EShapeLineBase.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_uploadedUpdateLock

• `Protected` **\_uploadedUpdateLock**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_uploadedUpdateLock](EShapeLineBase.md#_uploadedupdatelock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L78)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_visible](EShapeLineBase.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[action](EShapeLineBase.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L67)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[children](EShapeLineBase.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### cursor

• **cursor**: `string`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[cursor](EShapeLineBase.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L34)

___

### data

• `Readonly` **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[data](EShapeLineBase.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L33)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[editor](EShapeLineBase.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L105)

___

### fill

• `Readonly` **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[fill](EShapeLineBase.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L24)

___

### gradient

• `Optional` **gradient**: [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[gradient](EShapeLineBase.md#gradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L29)

___

### id

• **id**: `string`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[id](EShapeLineBase.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L49)

___

### imageSrc

• `Optional` **imageSrc**: `string`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[imageSrc](EShapeLineBase.md#imagesrc)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L60)

___

### index

• **index**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[index](EShapeLineBase.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### interactive

• **interactive**: `boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[interactive](EShapeLineBase.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L69)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[layout](EShapeLineBase.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[parent](EShapeLineBase.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L92)

___

### reference

• **reference**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[reference](EShapeLineBase.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](EShapeRuntime.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[runtime](EShapeLineBase.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### selected

• **selected**: `boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[selected](EShapeLineBase.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[shortcut](EShapeLineBase.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L70)

___

### size

• `Readonly` **size**: `IPoint`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[size](EShapeLineBase.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L23)

___

### stroke

• `Readonly` **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[stroke](EShapeLineBase.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L25)

___

### tag

• `Readonly` **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`deprecated`** in favor of [data](EShapeBar.md#data)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[tag](EShapeLineBase.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L32)

___

### text

• `Readonly` **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[text](EShapeLineBase.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L30)

___

### texture

• `Optional` **texture**: `Texture`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[texture](EShapeLineBase.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L61)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[title](EShapeLineBase.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L71)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[transform](EShapeLineBase.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[type](EShapeLineBase.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L51)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[uploaded](EShapeLineBase.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L108)

___

### uuid

• **uuid**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[uuid](EShapeLineBase.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L50)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[WORK_HIT_TEST_DATA](EShapeLineBase.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L48)

## Accessors

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

EShapeLineBase.connector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L267)

___

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Inherited from

EShapeLineBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L91)

• `set` **corner**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `number` |

#### Returns

`void`

#### Inherited from

EShapeLineBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L95)

___

### image

• `get` **image**(): `undefined` \| `HTMLImageElement`

#### Returns

`undefined` \| `HTMLImageElement`

#### Inherited from

EShapeLineBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L113)

• `set` **image**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `undefined` \| `HTMLImageElement` |

#### Returns

`void`

#### Inherited from

EShapeLineBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L117)

___

### points

• `get` **points**(): [`EShapeBarPoints`](EShapeBarPoints.md)

#### Returns

[`EShapeBarPoints`](EShapeBarPoints.md)

#### Overrides

EShapeLineBase.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts#L20)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Inherited from

EShapeLineBase.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L102)

• `set` **radius**(`radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`

#### Inherited from

EShapeLineBase.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L106)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Inherited from

EShapeLineBase.root

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L259)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

EShapeLineBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L750)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeLineBase.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L276)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Inherited from

EShapeLineBase.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L287)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeLineBase.worldVisible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L294)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EShapeBar`](EShapeBar.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeBar`](EShapeBar.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[addListener](EShapeLineBase.md#addlistener)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[addUuid](EShapeLineBase.md#adduuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L455)

___

### allowOnTransformChange

▸ **allowOnTransformChange**(`invokeOnTransformChange`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `invokeOnTransformChange` | `boolean` |

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[allowOnTransformChange](EShapeLineBase.md#allowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L186)

___

### allowUploadedUpdate

▸ **allowUploadedUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[allowUploadedUpdate](EShapeLineBase.md#allowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L210)

___

### attach

▸ **attach**(`parent`, `at?`): [`EShapeBar`](EShapeBar.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md) |
| `at?` | `number` |

#### Returns

[`EShapeBar`](EShapeBar.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[attach](EShapeLineBase.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:314](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L314)

___

### blur

▸ **blur**(): [`EShapeBar`](EShapeBar.md)

#### Returns

[`EShapeBar`](EShapeBar.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[blur](EShapeLineBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:766](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L766)

___

### calcHitPart

▸ **calcHitPart**(`x`, `y`): [`EShapeLineBaseHitPart`](../index.md#eshapelinebasehitpart)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`EShapeLineBaseHitPart`](../index.md#eshapelinebasehitpart)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[calcHitPart](EShapeLineBase.md#calchitpart)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L133)

___

### calcHitPoint

▸ **calcHitPoint**<`RESULT`\>(`x`, `y`, `toThreshold`, `toRange`, `tester`, `result`): `boolean`

#### Type parameters

| Name |
| :------ |
| `RESULT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `toThreshold` | ``null`` \| [`EShapeLineBasePointsHitTesterToThreshold`](../index.md#eshapelinebasepointshittestertothreshold) |
| `toRange` | ``null`` \| [`EShapeLineBasePointsHitTesterToRange`](../index.md#eshapelinebasepointshittestertorange) |
| `tester` | [`EShapeLineBasePointsHitTester`](../index.md#eshapelinebasepointshittester)<`RESULT`\> |
| `result` | `RESULT` |

#### Returns

`boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[calcHitPoint](EShapeLineBase.md#calchitpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L169)

___

### calcHitPointAbsHitTester

▸ `Protected` **calcHitPointAbsHitTester**(`this`, `x`, `y`, `p0x`, `p0y`, `p1x`, `p1y`, `index`, `threshold`, `result`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `x` | `number` |
| `y` | `number` |
| `p0x` | `number` |
| `p0y` | `number` |
| `p1x` | `number` |
| `p1y` | `number` |
| `index` | `number` |
| `threshold` | `number` |
| `result` | `unknown` |

#### Returns

`boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[calcHitPointAbsHitTester](EShapeLineBase.md#calchitpointabshittester)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L199)

___

### clone

▸ **clone**(): [`EShapeBar`](EShapeBar.md)

#### Returns

[`EShapeBar`](EShapeBar.md)

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[clone](EShapeLineBase.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts#L24)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[contains](EShapeLineBase.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:528](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L528)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[containsAbs](EShapeLineBase.md#containsabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L105)

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

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[containsAbsBBox](EShapeLineBase.md#containsabsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts#L28)

___

### containsAbsMarker

▸ `Protected` **containsAbsMarker**(`marker`, `x`, `y`, `sw`, `ss`, `sa`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `marker` | [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md) |
| `x` | `number` |
| `y` | `number` |
| `sw` | `number` |
| `ss` | `number` |
| `sa` | `number` |

#### Returns

`boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[containsAbsMarker](EShapeLineBase.md#containsabsmarker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L56)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[containsBBox](EShapeLineBase.md#containsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L588)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[containsChildren](EShapeLineBase.md#containschildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L565)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[containsText](EShapeLineBase.md#containstext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:546](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L546)

___

### copy

▸ **copy**(`source`, `part?`): [`EShapeBar`](EShapeBar.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | [`EShape`](../interfaces/EShape.md) | `undefined` |
| `part` | `number` | `EShapeCopyPart.ALL` |

#### Returns

[`EShapeBar`](EShapeBar.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[copy](EShapeLineBase.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:820](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L820)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[destroy](EShapeLineBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L729)

___

### detach

▸ **detach**(): [`EShapeBar`](EShapeBar.md)

#### Returns

[`EShapeBar`](EShapeBar.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[detach](EShapeLineBase.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L342)

___

### disallowOnTransformChange

▸ **disallowOnTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[disallowOnTransformChange](EShapeLineBase.md#disallowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L179)

___

### disallowUploadedUpdate

▸ **disallowUploadedUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[disallowUploadedUpdate](EShapeLineBase.md#disallowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L202)

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

[EShapeLineBase](EShapeLineBase.md).[emit](EShapeLineBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[eventNames](EShapeLineBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`EShapeBar`](EShapeBar.md)

#### Returns

[`EShapeBar`](EShapeBar.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[focus](EShapeLineBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:761](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L761)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getBounds](EShapeLineBase.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L635)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getBoundsInternal](EShapeLineBase.md#getboundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L650)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getBoundsLocal](EShapeLineBase.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L665)

___

### getBoundsSize

▸ `Protected` **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getBoundsSize](EShapeLineBase.md#getboundssize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:680](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L680)

___

### getBounds\_

▸ `Protected` **getBounds_**(`transform`, `result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getBounds_](EShapeLineBase.md#getbounds_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:684](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L684)

___

### getHitTestSize

▸ `Protected` **getHitTestSize**(`result`): [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md) |

#### Returns

[`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getHitTestSize](EShapeLineBase.md#gethittestsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L25)

___

### getShapeScale

▸ `Protected` **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getShapeScale](EShapeLineBase.md#getshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L472)

___

### getStrokeWidthScale

▸ `Protected` **getStrokeWidthScale**(`style`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `number` |

#### Returns

`number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getStrokeWidthScale](EShapeLineBase.md#getstrokewidthscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:480](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L480)

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

[EShapeLineBase](EShapeLineBase.md).[listenerCount](EShapeLineBase.md#listenercount)

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

[EShapeLineBase](EShapeLineBase.md).[listeners](EShapeLineBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newFill

▸ `Protected` **newFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newFill](EShapeLineBase.md#newfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L61)

___

### newSize

▸ `Protected` **newSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newSize](EShapeLineBase.md#newsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L50)

___

### newStroke

▸ `Protected` **newStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newStroke](EShapeLineBase.md#newstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L65)

___

### newText

▸ `Protected` **newText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newText](EShapeLineBase.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L78)

___

### newTransform

▸ `Protected` **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newTransform](EShapeLineBase.md#newtransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L140)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`EShapeBar`](EShapeBar.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`EShapeBar`](EShapeBar.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[off](EShapeLineBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EShapeBar`](EShapeBar.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`EShapeBar`](EShapeBar.md)

`this`.

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[on](EShapeLineBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onAttach](EShapeLineBase.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:330](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L330)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onChildTransformChange](EShapeLineBase.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L198)

___

### onDetach

▸ **onDetach**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onDetach](EShapeLineBase.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L359)

___

### onKeyDown

▸ **onKeyDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onKeyDown](EShapeLineBase.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:780](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L780)

___

### onKeyUp

▸ **onKeyUp**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onKeyUp](EShapeLineBase.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L788)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onParentTransformChange](EShapeLineBase.md#onparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L159)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onRender](EShapeLineBase.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L804)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onSizeChange](EShapeLineBase.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L144)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onStateChange](EShapeLineBase.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:738](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L738)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onTransformChange](EShapeLineBase.md#ontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L154)

___

### onTransformChange\_

▸ `Protected` **onTransformChange_**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onTransformChange_](EShapeLineBase.md#ontransformchange_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L168)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShapeBar`](EShapeBar.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`EShapeBar`](EShapeBar.md)

`this`.

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[once](EShapeLineBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EShapeBar`](EShapeBar.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`EShapeBar`](EShapeBar.md)

`this`.

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[removeAllListeners](EShapeLineBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`EShapeBar`](EShapeBar.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`EShapeBar`](EShapeBar.md)

`this`.

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[removeListener](EShapeLineBase.md#removelistener)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[select](EShapeLineBase.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:609](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L609)

___

### serialize

▸ **serialize**(`manager`): [`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

[`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[serialize](EShapeLineBase.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts#L33)

___

### serializeChildren

▸ **serializeChildren**(`manager`): [`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

[`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)[]

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[serializeChildren](EShapeLineBase.md#serializechildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:384](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L384)

___

### serializeGradient

▸ **serializeGradient**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[serializeGradient](EShapeLineBase.md#serializegradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L399)

___

### serializeImage

▸ **serializeImage**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[serializeImage](EShapeLineBase.md#serializeimage)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L394)

___

### serializeState

▸ **serializeState**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[serializeState](EShapeLineBase.md#serializestate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:410](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L410)

___

### setFocused

▸ `Protected` **setFocused**(`isFocused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[setFocused](EShapeLineBase.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L771)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[toDirty](EShapeLineBase.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:309](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L309)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[toGlobal](EShapeLineBase.md#toglobal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:614](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L614)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[toHitTestData](EShapeLineBase.md#tohittestdata)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L503)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[toLocal](EShapeLineBase.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:623](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L623)

___

### toMarkerSize

▸ `Protected` **toMarkerSize**(`points`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`EShapePoints`](../interfaces/EShapePoints.md) |

#### Returns

`number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[toMarkerSize](EShapeLineBase.md#tomarkersize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L37)

___

### update

▸ **update**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[update](EShapeLineBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L797)

___

### updateRecursively

▸ **updateRecursively**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[updateRecursively](EShapeLineBase.md#updaterecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:811](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L811)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[updateTransform](EShapeLineBase.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L371)

___

### updateUploaded

▸ **updateUploaded**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[updateUploaded](EShapeLineBase.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L236)

___

### updateUploadedRecursively

▸ **updateUploadedRecursively**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[updateUploadedRecursively](EShapeLineBase.md#updateuploadedrecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L224)

___

### updateUuid

▸ **updateUuid**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[updateUuid](EShapeLineBase.md#updateuuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L463)
