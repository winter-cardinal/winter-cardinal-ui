[Winter Cardinal UI](../README.md) / EShapeLineOfTriangles

# Class: EShapeLineOfTriangles

## Hierarchy

- [`EShapeTriangle`](EShapeTriangle.md)

  ↳ **`EShapeLineOfTriangles`**

## Implements

- [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

## Table of contents

### Constructors

- [constructor](EShapeLineOfTriangles.md#constructor)

### Properties

- [\_bounds](EShapeLineOfTriangles.md#_bounds)
- [\_boundsInternal](EShapeLineOfTriangles.md#_boundsinternal)
- [\_boundsInternalTransformId](EShapeLineOfTriangles.md#_boundsinternaltransformid)
- [\_boundsLocal](EShapeLineOfTriangles.md#_boundslocal)
- [\_boundsLocalTransformId](EShapeLineOfTriangles.md#_boundslocaltransformid)
- [\_boundsTransformId](EShapeLineOfTriangles.md#_boundstransformid)
- [\_connector](EShapeLineOfTriangles.md#_connector)
- [\_corner](EShapeLineOfTriangles.md#_corner)
- [\_image](EShapeLineOfTriangles.md#_image)
- [\_isOnTransformChanged](EShapeLineOfTriangles.md#_isontransformchanged)
- [\_isUploadedUpdated](EShapeLineOfTriangles.md#_isuploadedupdated)
- [\_isUploadedUpdatedRecursively](EShapeLineOfTriangles.md#_isuploadedupdatedrecursively)
- [\_onTransformChangeLock](EShapeLineOfTriangles.md#_ontransformchangelock)
- [\_points](EShapeLineOfTriangles.md#_points)
- [\_radius](EShapeLineOfTriangles.md#_radius)
- [\_state](EShapeLineOfTriangles.md#_state)
- [\_tester](EShapeLineOfTriangles.md#_tester)
- [\_uploadedUpdateLock](EShapeLineOfTriangles.md#_uploadedupdatelock)
- [\_visible](EShapeLineOfTriangles.md#_visible)
- [action](EShapeLineOfTriangles.md#action)
- [children](EShapeLineOfTriangles.md#children)
- [cursor](EShapeLineOfTriangles.md#cursor)
- [data](EShapeLineOfTriangles.md#data)
- [editor](EShapeLineOfTriangles.md#editor)
- [fill](EShapeLineOfTriangles.md#fill)
- [gradient](EShapeLineOfTriangles.md#gradient)
- [id](EShapeLineOfTriangles.md#id)
- [imageSrc](EShapeLineOfTriangles.md#imagesrc)
- [index](EShapeLineOfTriangles.md#index)
- [interactive](EShapeLineOfTriangles.md#interactive)
- [layout](EShapeLineOfTriangles.md#layout)
- [parent](EShapeLineOfTriangles.md#parent)
- [reference](EShapeLineOfTriangles.md#reference)
- [runtime](EShapeLineOfTriangles.md#runtime)
- [selected](EShapeLineOfTriangles.md#selected)
- [shortcut](EShapeLineOfTriangles.md#shortcut)
- [size](EShapeLineOfTriangles.md#size)
- [stroke](EShapeLineOfTriangles.md#stroke)
- [tag](EShapeLineOfTriangles.md#tag)
- [text](EShapeLineOfTriangles.md#text)
- [texture](EShapeLineOfTriangles.md#texture)
- [title](EShapeLineOfTriangles.md#title)
- [transform](EShapeLineOfTriangles.md#transform)
- [type](EShapeLineOfTriangles.md#type)
- [uploaded](EShapeLineOfTriangles.md#uploaded)
- [uuid](EShapeLineOfTriangles.md#uuid)
- [WORK\_HIT\_TEST\_DATA](EShapeLineOfTriangles.md#work_hit_test_data)

### Accessors

- [connector](EShapeLineOfTriangles.md#connector)
- [corner](EShapeLineOfTriangles.md#corner)
- [image](EShapeLineOfTriangles.md#image)
- [points](EShapeLineOfTriangles.md#points)
- [radius](EShapeLineOfTriangles.md#radius)
- [root](EShapeLineOfTriangles.md#root)
- [state](EShapeLineOfTriangles.md#state)
- [visible](EShapeLineOfTriangles.md#visible)
- [worldVisible](EShapeLineOfTriangles.md#worldvisible)

### Methods

- [addListener](EShapeLineOfTriangles.md#addlistener)
- [addUuid](EShapeLineOfTriangles.md#adduuid)
- [allowOnTransformChange](EShapeLineOfTriangles.md#allowontransformchange)
- [allowUploadedUpdate](EShapeLineOfTriangles.md#allowuploadedupdate)
- [attach](EShapeLineOfTriangles.md#attach)
- [blur](EShapeLineOfTriangles.md#blur)
- [calcHitPoint](EShapeLineOfTriangles.md#calchitpoint)
- [clone](EShapeLineOfTriangles.md#clone)
- [contains](EShapeLineOfTriangles.md#contains)
- [containsAbs](EShapeLineOfTriangles.md#containsabs)
- [containsAbsBBox](EShapeLineOfTriangles.md#containsabsbbox)
- [containsBBox](EShapeLineOfTriangles.md#containsbbox)
- [containsChildren](EShapeLineOfTriangles.md#containschildren)
- [containsPointAbs](EShapeLineOfTriangles.md#containspointabs)
- [containsText](EShapeLineOfTriangles.md#containstext)
- [copy](EShapeLineOfTriangles.md#copy)
- [destroy](EShapeLineOfTriangles.md#destroy)
- [detach](EShapeLineOfTriangles.md#detach)
- [disallowOnTransformChange](EShapeLineOfTriangles.md#disallowontransformchange)
- [disallowUploadedUpdate](EShapeLineOfTriangles.md#disallowuploadedupdate)
- [emit](EShapeLineOfTriangles.md#emit)
- [eventNames](EShapeLineOfTriangles.md#eventnames)
- [focus](EShapeLineOfTriangles.md#focus)
- [getBounds](EShapeLineOfTriangles.md#getbounds)
- [getBoundsInternal](EShapeLineOfTriangles.md#getboundsinternal)
- [getBoundsLocal](EShapeLineOfTriangles.md#getboundslocal)
- [getBoundsSize](EShapeLineOfTriangles.md#getboundssize)
- [getBounds\_](EShapeLineOfTriangles.md#getbounds_)
- [getHitTestSize](EShapeLineOfTriangles.md#gethittestsize)
- [getShapeScale](EShapeLineOfTriangles.md#getshapescale)
- [getStrokeWidthScale](EShapeLineOfTriangles.md#getstrokewidthscale)
- [listenerCount](EShapeLineOfTriangles.md#listenercount)
- [listeners](EShapeLineOfTriangles.md#listeners)
- [newFill](EShapeLineOfTriangles.md#newfill)
- [newSize](EShapeLineOfTriangles.md#newsize)
- [newStroke](EShapeLineOfTriangles.md#newstroke)
- [newText](EShapeLineOfTriangles.md#newtext)
- [newTransform](EShapeLineOfTriangles.md#newtransform)
- [off](EShapeLineOfTriangles.md#off)
- [on](EShapeLineOfTriangles.md#on)
- [onAttach](EShapeLineOfTriangles.md#onattach)
- [onChildTransformChange](EShapeLineOfTriangles.md#onchildtransformchange)
- [onDetach](EShapeLineOfTriangles.md#ondetach)
- [onKeyDown](EShapeLineOfTriangles.md#onkeydown)
- [onKeyUp](EShapeLineOfTriangles.md#onkeyup)
- [onParentTransformChange](EShapeLineOfTriangles.md#onparenttransformchange)
- [onRender](EShapeLineOfTriangles.md#onrender)
- [onSizeChange](EShapeLineOfTriangles.md#onsizechange)
- [onStateChange](EShapeLineOfTriangles.md#onstatechange)
- [onTransformChange](EShapeLineOfTriangles.md#ontransformchange)
- [onTransformChange\_](EShapeLineOfTriangles.md#ontransformchange_)
- [once](EShapeLineOfTriangles.md#once)
- [removeAllListeners](EShapeLineOfTriangles.md#removealllisteners)
- [removeListener](EShapeLineOfTriangles.md#removelistener)
- [select](EShapeLineOfTriangles.md#select)
- [serialize](EShapeLineOfTriangles.md#serialize)
- [serializeChildren](EShapeLineOfTriangles.md#serializechildren)
- [serializeGradient](EShapeLineOfTriangles.md#serializegradient)
- [serializeImage](EShapeLineOfTriangles.md#serializeimage)
- [serializeState](EShapeLineOfTriangles.md#serializestate)
- [setFocused](EShapeLineOfTriangles.md#setfocused)
- [toDirty](EShapeLineOfTriangles.md#todirty)
- [toGlobal](EShapeLineOfTriangles.md#toglobal)
- [toHitTestData](EShapeLineOfTriangles.md#tohittestdata)
- [toLocal](EShapeLineOfTriangles.md#tolocal)
- [update](EShapeLineOfTriangles.md#update)
- [updateRecursively](EShapeLineOfTriangles.md#updaterecursively)
- [updateTransform](EShapeLineOfTriangles.md#updatetransform)
- [updateUploaded](EShapeLineOfTriangles.md#updateuploaded)
- [updateUploadedRecursively](EShapeLineOfTriangles.md#updateuploadedrecursively)
- [updateUuid](EShapeLineOfTriangles.md#updateuuid)

## Constructors

### constructor

• **new EShapeLineOfTriangles**(`type?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `number` | `EShapeType.LINE_OF_TRIANGLES` |

#### Overrides

[EShapeTriangle](EShapeTriangle.md).[constructor](EShapeTriangle.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L20)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_bounds](EShapeTriangle.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_boundsInternal](EShapeTriangle.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_boundsInternalTransformId](EShapeTriangle.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L85)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_boundsLocal](EShapeTriangle.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_boundsLocalTransformId](EShapeTriangle.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_boundsTransformId](EShapeTriangle.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_connector](EShapeTriangle.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### \_corner

• `Protected` **\_corner**: `number`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_corner](EShapeTriangle.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L27)

___

### \_image

• `Protected` `Optional` **\_image**: `HTMLImageElement`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_image](EShapeTriangle.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L28)

___

### \_isOnTransformChanged

• `Protected` **\_isOnTransformChanged**: `boolean`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_isOnTransformChanged](EShapeTriangle.md#_isontransformchanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L77)

___

### \_isUploadedUpdated

• `Protected` **\_isUploadedUpdated**: `boolean`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_isUploadedUpdated](EShapeTriangle.md#_isuploadedupdated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L79)

___

### \_isUploadedUpdatedRecursively

• `Protected` **\_isUploadedUpdatedRecursively**: `boolean`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_isUploadedUpdatedRecursively](EShapeTriangle.md#_isuploadedupdatedrecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L80)

___

### \_onTransformChangeLock

• `Protected` **\_onTransformChangeLock**: `number`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_onTransformChangeLock](EShapeTriangle.md#_ontransformchangelock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L76)

___

### \_points

• `Protected` **\_points**: [`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md)

#### Overrides

[EShapeTriangle](EShapeTriangle.md).[_points](EShapeTriangle.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L17)

___

### \_radius

• `Protected` **\_radius**: `number`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_radius](EShapeTriangle.md#_radius)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L26)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_state](EShapeTriangle.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_tester

• `Protected` **\_tester**: [`EShapeLineOfAnyPointsHitTester`](../README.md#eshapelineofanypointshittester)<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L18)

___

### \_uploadedUpdateLock

• `Protected` **\_uploadedUpdateLock**: `number`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_uploadedUpdateLock](EShapeTriangle.md#_uploadedupdatelock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L78)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_visible](EShapeTriangle.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[action](../interfaces/EShapeLineOfAny.md#action)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[action](EShapeTriangle.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L67)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[children](../interfaces/EShapeLineOfAny.md#children)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[children](EShapeTriangle.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### cursor

• **cursor**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[cursor](../interfaces/EShapeLineOfAny.md#cursor)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[cursor](EShapeTriangle.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L34)

___

### data

• `Readonly` **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[data](../interfaces/EShapeLineOfAny.md#data)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[data](EShapeTriangle.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L33)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[editor](../interfaces/EShapeLineOfAny.md#editor)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[editor](EShapeTriangle.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L105)

___

### fill

• `Readonly` **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[fill](../interfaces/EShapeLineOfAny.md#fill)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[fill](EShapeTriangle.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L24)

___

### gradient

• `Optional` **gradient**: [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[gradient](../interfaces/EShapeLineOfAny.md#gradient)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[gradient](EShapeTriangle.md#gradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L29)

___

### id

• **id**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[id](../interfaces/EShapeLineOfAny.md#id)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[id](EShapeTriangle.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L49)

___

### imageSrc

• `Optional` **imageSrc**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[imageSrc](../interfaces/EShapeLineOfAny.md#imagesrc)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[imageSrc](EShapeTriangle.md#imagesrc)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L60)

___

### index

• **index**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[index](../interfaces/EShapeLineOfAny.md#index)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[index](EShapeTriangle.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### interactive

• **interactive**: `boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[interactive](../interfaces/EShapeLineOfAny.md#interactive)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[interactive](EShapeTriangle.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L69)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[layout](../interfaces/EShapeLineOfAny.md#layout)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[layout](EShapeTriangle.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[parent](../interfaces/EShapeLineOfAny.md#parent)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[parent](EShapeTriangle.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L92)

___

### reference

• **reference**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[reference](../interfaces/EShapeLineOfAny.md#reference)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[reference](EShapeTriangle.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](EShapeRuntime.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[runtime](../interfaces/EShapeLineOfAny.md#runtime)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[runtime](EShapeTriangle.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### selected

• **selected**: `boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[selected](../interfaces/EShapeLineOfAny.md#selected)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[selected](EShapeTriangle.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[shortcut](../interfaces/EShapeLineOfAny.md#shortcut)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[shortcut](EShapeTriangle.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L70)

___

### size

• `Readonly` **size**: `IPoint`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[size](../interfaces/EShapeLineOfAny.md#size)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[size](EShapeTriangle.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L23)

___

### stroke

• `Readonly` **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[stroke](../interfaces/EShapeLineOfAny.md#stroke)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[stroke](EShapeTriangle.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L25)

___

### tag

• `Readonly` **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`deprecated`** in favor of [data](EShapeLineOfTriangles.md#data)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[tag](../interfaces/EShapeLineOfAny.md#tag)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[tag](EShapeTriangle.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L32)

___

### text

• `Readonly` **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[text](../interfaces/EShapeLineOfAny.md#text)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[text](EShapeTriangle.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L30)

___

### texture

• `Optional` **texture**: `Texture`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[texture](../interfaces/EShapeLineOfAny.md#texture)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[texture](EShapeTriangle.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L61)

___

### title

• `Optional` **title**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[title](../interfaces/EShapeLineOfAny.md#title)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[title](EShapeTriangle.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L71)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[transform](../interfaces/EShapeLineOfAny.md#transform)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[transform](EShapeTriangle.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### type

• `Readonly` **type**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[type](../interfaces/EShapeLineOfAny.md#type)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[type](EShapeTriangle.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L51)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[uploaded](../interfaces/EShapeLineOfAny.md#uploaded)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[uploaded](EShapeTriangle.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L108)

___

### uuid

• **uuid**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[uuid](../interfaces/EShapeLineOfAny.md#uuid)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[uuid](EShapeTriangle.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L50)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[WORK_HIT_TEST_DATA](EShapeTriangle.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L48)

## Accessors

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[connector](../interfaces/EShapeLineOfAny.md#connector)

#### Inherited from

EShapeTriangle.connector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L267)

___

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[corner](../interfaces/EShapeLineOfAny.md#corner)

#### Inherited from

EShapeTriangle.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L91)

• `set` **corner**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[corner](../interfaces/EShapeLineOfAny.md#corner)

#### Inherited from

EShapeTriangle.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L95)

___

### image

• `get` **image**(): `undefined` \| `HTMLImageElement`

#### Returns

`undefined` \| `HTMLImageElement`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[image](../interfaces/EShapeLineOfAny.md#image)

#### Inherited from

EShapeTriangle.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L113)

• `set` **image**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `undefined` \| `HTMLImageElement` |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[image](../interfaces/EShapeLineOfAny.md#image)

#### Inherited from

EShapeTriangle.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L117)

___

### points

• `get` **points**(): [`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md)

#### Returns

[`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[points](../interfaces/EShapeLineOfAny.md#points)

#### Overrides

EShapeTriangle.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L29)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[radius](../interfaces/EShapeLineOfAny.md#radius)

#### Inherited from

EShapeTriangle.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L102)

• `set` **radius**(`radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[radius](../interfaces/EShapeLineOfAny.md#radius)

#### Inherited from

EShapeTriangle.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L106)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[root](../interfaces/EShapeLineOfAny.md#root)

#### Inherited from

EShapeTriangle.root

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L259)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[state](../interfaces/EShapeLineOfAny.md#state)

#### Inherited from

EShapeTriangle.state

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L750)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[visible](../interfaces/EShapeLineOfAny.md#visible)

#### Inherited from

EShapeTriangle.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L276)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[visible](../interfaces/EShapeLineOfAny.md#visible)

#### Inherited from

EShapeTriangle.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L287)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[worldVisible](../interfaces/EShapeLineOfAny.md#worldvisible)

#### Inherited from

EShapeTriangle.worldVisible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L294)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[addListener](../interfaces/EShapeLineOfAny.md#addlistener)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[addListener](EShapeTriangle.md#addlistener)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[addUuid](../interfaces/EShapeLineOfAny.md#adduuid)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[addUuid](EShapeTriangle.md#adduuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L455)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[allowOnTransformChange](../interfaces/EShapeLineOfAny.md#allowontransformchange)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[allowOnTransformChange](EShapeTriangle.md#allowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L186)

___

### allowUploadedUpdate

▸ **allowUploadedUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[allowUploadedUpdate](../interfaces/EShapeLineOfAny.md#allowuploadedupdate)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[allowUploadedUpdate](EShapeTriangle.md#allowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L210)

___

### attach

▸ **attach**(`parent`, `at?`): [`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md) |
| `at?` | `number` |

#### Returns

[`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[attach](../interfaces/EShapeLineOfAny.md#attach)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[attach](EShapeTriangle.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:314](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L314)

___

### blur

▸ **blur**(): [`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Returns

[`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[blur](../interfaces/EShapeLineOfAny.md#blur)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[blur](EShapeTriangle.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:766](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L766)

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
| `toThreshold` | ``null`` \| [`EShapeLineOfAnyPointsHitTesterToThreshold`](../README.md#eshapelineofanypointshittestertothreshold) |
| `toRange` | ``null`` \| [`EShapeLineOfAnyPointsHitTesterToRange`](../README.md#eshapelineofanypointshittestertorange) |
| `tester` | ``null`` \| [`EShapeLineOfAnyPointsHitTester`](../README.md#eshapelineofanypointshittester)<`RESULT`\> |
| `result` | `RESULT` |

#### Returns

`boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[calcHitPoint](../interfaces/EShapeLineOfAny.md#calchitpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L79)

___

### clone

▸ **clone**(): [`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Returns

[`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[clone](../interfaces/EShapeLineOfAny.md#clone)

#### Overrides

[EShapeTriangle](EShapeTriangle.md).[clone](EShapeTriangle.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L33)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[contains](../interfaces/EShapeLineOfAny.md#contains)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[contains](EShapeTriangle.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:528](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L528)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[containsAbs](../interfaces/EShapeLineOfAny.md#containsabs)

#### Overrides

[EShapeTriangle](EShapeTriangle.md).[containsAbs](EShapeTriangle.md#containsabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L37)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[containsAbsBBox](../interfaces/EShapeLineOfAny.md#containsabsbbox)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[containsAbsBBox](EShapeTriangle.md#containsabsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:605](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L605)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[containsBBox](../interfaces/EShapeLineOfAny.md#containsbbox)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[containsBBox](EShapeTriangle.md#containsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L588)

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

[EShapeTriangle](EShapeTriangle.md).[containsChildren](EShapeTriangle.md#containschildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L565)

___

### containsPointAbs

▸ **containsPointAbs**(`x`, `y`, `ax`, `ay`, `ox`, `oy`, `px`, `py`, `sw`, `ss`, `sa`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `ax` | `number` |
| `ay` | `number` |
| `ox` | `number` |
| `oy` | `number` |
| `px` | `number` |
| `py` | `number` |
| `sw` | `number` |
| `ss` | `number` |
| `sa` | `number` |

#### Returns

`boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[containsPointAbs](../interfaces/EShapeLineOfAny.md#containspointabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L63)

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

[EShapeTriangle](EShapeTriangle.md).[containsText](EShapeTriangle.md#containstext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:546](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L546)

___

### copy

▸ **copy**(`source`, `part?`): [`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | [`EShape`](../interfaces/EShape.md) | `undefined` |
| `part` | `number` | `EShapeCopyPart.ALL` |

#### Returns

[`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[copy](../interfaces/EShapeLineOfAny.md#copy)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[copy](EShapeTriangle.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:820](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L820)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[destroy](../interfaces/EShapeLineOfAny.md#destroy)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[destroy](EShapeTriangle.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L729)

___

### detach

▸ **detach**(): [`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Returns

[`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[detach](../interfaces/EShapeLineOfAny.md#detach)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[detach](EShapeTriangle.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L342)

___

### disallowOnTransformChange

▸ **disallowOnTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[disallowOnTransformChange](../interfaces/EShapeLineOfAny.md#disallowontransformchange)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[disallowOnTransformChange](EShapeTriangle.md#disallowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L179)

___

### disallowUploadedUpdate

▸ **disallowUploadedUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[disallowUploadedUpdate](../interfaces/EShapeLineOfAny.md#disallowuploadedupdate)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[disallowUploadedUpdate](EShapeTriangle.md#disallowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L202)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[emit](../interfaces/EShapeLineOfAny.md#emit)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[emit](EShapeTriangle.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[eventNames](../interfaces/EShapeLineOfAny.md#eventnames)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[eventNames](EShapeTriangle.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Returns

[`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[focus](../interfaces/EShapeLineOfAny.md#focus)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[focus](EShapeTriangle.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:761](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L761)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[getBounds](../interfaces/EShapeLineOfAny.md#getbounds)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[getBounds](EShapeTriangle.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L635)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[getBoundsInternal](../interfaces/EShapeLineOfAny.md#getboundsinternal)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[getBoundsInternal](EShapeTriangle.md#getboundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L650)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[getBoundsLocal](../interfaces/EShapeLineOfAny.md#getboundslocal)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[getBoundsLocal](EShapeTriangle.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L665)

___

### getBoundsSize

▸ `Protected` **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[getBoundsSize](EShapeTriangle.md#getboundssize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:680](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L680)

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

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[getBounds_](EShapeTriangle.md#getbounds_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:684](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L684)

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

[EShapeTriangle](EShapeTriangle.md).[getHitTestSize](EShapeTriangle.md#gethittestsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L496)

___

### getShapeScale

▸ `Protected` **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[getShapeScale](EShapeTriangle.md#getshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L472)

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

[EShapeTriangle](EShapeTriangle.md).[getStrokeWidthScale](EShapeTriangle.md#getstrokewidthscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:480](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L480)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[listenerCount](../interfaces/EShapeLineOfAny.md#listenercount)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[listenerCount](EShapeTriangle.md#listenercount)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[listeners](../interfaces/EShapeLineOfAny.md#listeners)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[listeners](EShapeTriangle.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newFill

▸ `Protected` **newFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[newFill](EShapeTriangle.md#newfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L61)

___

### newSize

▸ `Protected` **newSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[newSize](EShapeTriangle.md#newsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L50)

___

### newStroke

▸ `Protected` **newStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[newStroke](EShapeTriangle.md#newstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L65)

___

### newText

▸ `Protected` **newText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[newText](EShapeTriangle.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L78)

___

### newTransform

▸ `Protected` **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[newTransform](EShapeTriangle.md#newtransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L140)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[off](../interfaces/EShapeLineOfAny.md#off)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[off](EShapeTriangle.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

`this`.

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[on](../interfaces/EShapeLineOfAny.md#on)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[on](EShapeTriangle.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[onAttach](../interfaces/EShapeLineOfAny.md#onattach)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[onAttach](EShapeTriangle.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:330](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L330)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[onChildTransformChange](../interfaces/EShapeLineOfAny.md#onchildtransformchange)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[onChildTransformChange](EShapeTriangle.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L198)

___

### onDetach

▸ **onDetach**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[onDetach](../interfaces/EShapeLineOfAny.md#ondetach)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[onDetach](EShapeTriangle.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L359)

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

[EShapeTriangle](EShapeTriangle.md).[onKeyDown](EShapeTriangle.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:780](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L780)

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

[EShapeTriangle](EShapeTriangle.md).[onKeyUp](EShapeTriangle.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L788)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[onParentTransformChange](../interfaces/EShapeLineOfAny.md#onparenttransformchange)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[onParentTransformChange](EShapeTriangle.md#onparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L159)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[onRender](../interfaces/EShapeLineOfAny.md#onrender)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[onRender](EShapeTriangle.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L804)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[onSizeChange](../interfaces/EShapeLineOfAny.md#onsizechange)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[onSizeChange](EShapeTriangle.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L144)

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

[EShapeTriangle](EShapeTriangle.md).[onStateChange](EShapeTriangle.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:738](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L738)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[onTransformChange](../interfaces/EShapeLineOfAny.md#ontransformchange)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[onTransformChange](EShapeTriangle.md#ontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L154)

___

### onTransformChange\_

▸ `Protected` **onTransformChange_**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[onTransformChange_](EShapeTriangle.md#ontransformchange_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L168)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

`this`.

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[once](../interfaces/EShapeLineOfAny.md#once)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[once](EShapeTriangle.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

`this`.

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[removeAllListeners](../interfaces/EShapeLineOfAny.md#removealllisteners)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[removeAllListeners](EShapeTriangle.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

`this`.

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[removeListener](../interfaces/EShapeLineOfAny.md#removelistener)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[removeListener](EShapeTriangle.md#removelistener)

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

[EShapeTriangle](EShapeTriangle.md).[select](EShapeTriangle.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:609](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L609)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[serialize](../interfaces/EShapeLineOfAny.md#serialize)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[serialize](EShapeTriangle.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:415](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L415)

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

[EShapeTriangle](EShapeTriangle.md).[serializeChildren](EShapeTriangle.md#serializechildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:384](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L384)

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

[EShapeTriangle](EShapeTriangle.md).[serializeGradient](EShapeTriangle.md#serializegradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:399](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L399)

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

[EShapeTriangle](EShapeTriangle.md).[serializeImage](EShapeTriangle.md#serializeimage)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L394)

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

[EShapeTriangle](EShapeTriangle.md).[serializeState](EShapeTriangle.md#serializestate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:410](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L410)

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

[EShapeTriangle](EShapeTriangle.md).[setFocused](EShapeTriangle.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L771)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[toDirty](../interfaces/EShapeLineOfAny.md#todirty)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[toDirty](EShapeTriangle.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:309](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L309)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[toGlobal](../interfaces/EShapeLineOfAny.md#toglobal)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[toGlobal](EShapeTriangle.md#toglobal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:614](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L614)

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

[EShapeTriangle](EShapeTriangle.md).[toHitTestData](EShapeTriangle.md#tohittestdata)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L503)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[toLocal](../interfaces/EShapeLineOfAny.md#tolocal)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[toLocal](EShapeTriangle.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:623](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L623)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[update](../interfaces/EShapeLineOfAny.md#update)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[update](EShapeTriangle.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L797)

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

[EShapeTriangle](EShapeTriangle.md).[updateRecursively](EShapeTriangle.md#updaterecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:811](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L811)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[updateTransform](../interfaces/EShapeLineOfAny.md#updatetransform)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[updateTransform](EShapeTriangle.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L371)

___

### updateUploaded

▸ **updateUploaded**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[updateUploaded](../interfaces/EShapeLineOfAny.md#updateuploaded)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[updateUploaded](EShapeTriangle.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L236)

___

### updateUploadedRecursively

▸ **updateUploadedRecursively**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[updateUploadedRecursively](../interfaces/EShapeLineOfAny.md#updateuploadedrecursively)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[updateUploadedRecursively](EShapeTriangle.md#updateuploadedrecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L224)

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

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[updateUuid](../interfaces/EShapeLineOfAny.md#updateuuid)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[updateUuid](EShapeTriangle.md#updateuuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L463)
