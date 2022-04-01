[Winter Cardinal UI - v0.160.0](../index.md) / EShapeConnectorLine

# Class: EShapeConnectorLine

## Hierarchy

- [`EShapeLineBase`](EShapeLineBase.md)

  ↳ **`EShapeConnectorLine`**

## Implements

- [`EShapeConnector`](../interfaces/EShapeConnector.md)

## Table of contents

### Constructors

- [constructor](EShapeConnectorLine.md#constructor)

### Properties

- [\_body](EShapeConnectorLine.md#_body)
- [\_bodyId](EShapeConnectorLine.md#_bodyid)
- [\_bounds](EShapeConnectorLine.md#_bounds)
- [\_boundsInternal](EShapeConnectorLine.md#_boundsinternal)
- [\_boundsInternalTransformId](EShapeConnectorLine.md#_boundsinternaltransformid)
- [\_boundsLocal](EShapeConnectorLine.md#_boundslocal)
- [\_boundsLocalTransformId](EShapeConnectorLine.md#_boundslocaltransformid)
- [\_boundsTransformId](EShapeConnectorLine.md#_boundstransformid)
- [\_connector](EShapeConnectorLine.md#_connector)
- [\_corner](EShapeConnectorLine.md#_corner)
- [\_edge](EShapeConnectorLine.md#_edge)
- [\_headLocalId](EShapeConnectorLine.md#_headlocalid)
- [\_headMargin](EShapeConnectorLine.md#_headmargin)
- [\_image](EShapeConnectorLine.md#_image)
- [\_isChanged](EShapeConnectorLine.md#_ischanged)
- [\_isOnTransformChanged](EShapeConnectorLine.md#_isontransformchanged)
- [\_isUploadedUpdated](EShapeConnectorLine.md#_isuploadedupdated)
- [\_isUploadedUpdatedRecursively](EShapeConnectorLine.md#_isuploadedupdatedrecursively)
- [\_lockCount](EShapeConnectorLine.md#_lockcount)
- [\_onTransformChangeLock](EShapeConnectorLine.md#_ontransformchangelock)
- [\_points](EShapeConnectorLine.md#_points)
- [\_radius](EShapeConnectorLine.md#_radius)
- [\_state](EShapeConnectorLine.md#_state)
- [\_tailLocalId](EShapeConnectorLine.md#_taillocalid)
- [\_tailMargin](EShapeConnectorLine.md#_tailmargin)
- [\_uploadedUpdateLock](EShapeConnectorLine.md#_uploadedupdatelock)
- [\_visible](EShapeConnectorLine.md#_visible)
- [action](EShapeConnectorLine.md#action)
- [children](EShapeConnectorLine.md#children)
- [cursor](EShapeConnectorLine.md#cursor)
- [data](EShapeConnectorLine.md#data)
- [editor](EShapeConnectorLine.md#editor)
- [fill](EShapeConnectorLine.md#fill)
- [gradient](EShapeConnectorLine.md#gradient)
- [id](EShapeConnectorLine.md#id)
- [imageSrc](EShapeConnectorLine.md#imagesrc)
- [index](EShapeConnectorLine.md#index)
- [interactive](EShapeConnectorLine.md#interactive)
- [layout](EShapeConnectorLine.md#layout)
- [parent](EShapeConnectorLine.md#parent)
- [reference](EShapeConnectorLine.md#reference)
- [runtime](EShapeConnectorLine.md#runtime)
- [selected](EShapeConnectorLine.md#selected)
- [shortcut](EShapeConnectorLine.md#shortcut)
- [size](EShapeConnectorLine.md#size)
- [stroke](EShapeConnectorLine.md#stroke)
- [tag](EShapeConnectorLine.md#tag)
- [text](EShapeConnectorLine.md#text)
- [texture](EShapeConnectorLine.md#texture)
- [title](EShapeConnectorLine.md#title)
- [transform](EShapeConnectorLine.md#transform)
- [type](EShapeConnectorLine.md#type)
- [uploaded](EShapeConnectorLine.md#uploaded)
- [uuid](EShapeConnectorLine.md#uuid)
- [WORK\_BOUNDARY](EShapeConnectorLine.md#work_boundary)
- [WORK\_HIT\_TEST\_DATA](EShapeConnectorLine.md#work_hit_test_data)

### Accessors

- [body](EShapeConnectorLine.md#body)
- [connector](EShapeConnectorLine.md#connector)
- [corner](EShapeConnectorLine.md#corner)
- [edge](EShapeConnectorLine.md#edge)
- [image](EShapeConnectorLine.md#image)
- [points](EShapeConnectorLine.md#points)
- [radius](EShapeConnectorLine.md#radius)
- [root](EShapeConnectorLine.md#root)
- [state](EShapeConnectorLine.md#state)
- [visible](EShapeConnectorLine.md#visible)
- [worldVisible](EShapeConnectorLine.md#worldvisible)

### Methods

- [addListener](EShapeConnectorLine.md#addlistener)
- [addUuid](EShapeConnectorLine.md#adduuid)
- [allowOnTransformChange](EShapeConnectorLine.md#allowontransformchange)
- [allowUploadedUpdate](EShapeConnectorLine.md#allowuploadedupdate)
- [attach](EShapeConnectorLine.md#attach)
- [blur](EShapeConnectorLine.md#blur)
- [calcHitPart](EShapeConnectorLine.md#calchitpart)
- [calcHitPoint](EShapeConnectorLine.md#calchitpoint)
- [calcHitPointAbsHitTester](EShapeConnectorLine.md#calchitpointabshittester)
- [clone](EShapeConnectorLine.md#clone)
- [contains](EShapeConnectorLine.md#contains)
- [containsAbs](EShapeConnectorLine.md#containsabs)
- [containsAbsBBox](EShapeConnectorLine.md#containsabsbbox)
- [containsAbsMarker](EShapeConnectorLine.md#containsabsmarker)
- [containsBBox](EShapeConnectorLine.md#containsbbox)
- [containsChildren](EShapeConnectorLine.md#containschildren)
- [containsText](EShapeConnectorLine.md#containstext)
- [copy](EShapeConnectorLine.md#copy)
- [destroy](EShapeConnectorLine.md#destroy)
- [detach](EShapeConnectorLine.md#detach)
- [disallowOnTransformChange](EShapeConnectorLine.md#disallowontransformchange)
- [disallowUploadedUpdate](EShapeConnectorLine.md#disallowuploadedupdate)
- [emit](EShapeConnectorLine.md#emit)
- [eventNames](EShapeConnectorLine.md#eventnames)
- [focus](EShapeConnectorLine.md#focus)
- [getBounds](EShapeConnectorLine.md#getbounds)
- [getBoundsInternal](EShapeConnectorLine.md#getboundsinternal)
- [getBoundsLocal](EShapeConnectorLine.md#getboundslocal)
- [getBoundsSize](EShapeConnectorLine.md#getboundssize)
- [getBounds\_](EShapeConnectorLine.md#getbounds_)
- [getHitTestSize](EShapeConnectorLine.md#gethittestsize)
- [getShapeScale](EShapeConnectorLine.md#getshapescale)
- [getStrokeWidthScale](EShapeConnectorLine.md#getstrokewidthscale)
- [listenerCount](EShapeConnectorLine.md#listenercount)
- [listeners](EShapeConnectorLine.md#listeners)
- [lock](EShapeConnectorLine.md#lock)
- [newFill](EShapeConnectorLine.md#newfill)
- [newSize](EShapeConnectorLine.md#newsize)
- [newStroke](EShapeConnectorLine.md#newstroke)
- [newText](EShapeConnectorLine.md#newtext)
- [newTransform](EShapeConnectorLine.md#newtransform)
- [off](EShapeConnectorLine.md#off)
- [on](EShapeConnectorLine.md#on)
- [onAttach](EShapeConnectorLine.md#onattach)
- [onChange](EShapeConnectorLine.md#onchange)
- [onChildTransformChange](EShapeConnectorLine.md#onchildtransformchange)
- [onDetach](EShapeConnectorLine.md#ondetach)
- [onKeyDown](EShapeConnectorLine.md#onkeydown)
- [onKeyUp](EShapeConnectorLine.md#onkeyup)
- [onParentTransformChange](EShapeConnectorLine.md#onparenttransformchange)
- [onRender](EShapeConnectorLine.md#onrender)
- [onSizeChange](EShapeConnectorLine.md#onsizechange)
- [onStateChange](EShapeConnectorLine.md#onstatechange)
- [onTransformChange](EShapeConnectorLine.md#ontransformchange)
- [onTransformChange\_](EShapeConnectorLine.md#ontransformchange_)
- [once](EShapeConnectorLine.md#once)
- [removeAllListeners](EShapeConnectorLine.md#removealllisteners)
- [removeListener](EShapeConnectorLine.md#removelistener)
- [select](EShapeConnectorLine.md#select)
- [serialize](EShapeConnectorLine.md#serialize)
- [serializeChildren](EShapeConnectorLine.md#serializechildren)
- [serializeGradient](EShapeConnectorLine.md#serializegradient)
- [serializeImage](EShapeConnectorLine.md#serializeimage)
- [serializeState](EShapeConnectorLine.md#serializestate)
- [setFocused](EShapeConnectorLine.md#setfocused)
- [toDirty](EShapeConnectorLine.md#todirty)
- [toGlobal](EShapeConnectorLine.md#toglobal)
- [toHitTestData](EShapeConnectorLine.md#tohittestdata)
- [toLocal](EShapeConnectorLine.md#tolocal)
- [toMarkerSize](EShapeConnectorLine.md#tomarkersize)
- [unlock](EShapeConnectorLine.md#unlock)
- [update](EShapeConnectorLine.md#update)
- [updateRecursively](EShapeConnectorLine.md#updaterecursively)
- [updateTransform](EShapeConnectorLine.md#updatetransform)
- [updateUploaded](EShapeConnectorLine.md#updateuploaded)
- [updateUploadedRecursively](EShapeConnectorLine.md#updateuploadedrecursively)
- [updateUuid](EShapeConnectorLine.md#updateuuid)

## Constructors

### constructor

• **new EShapeConnectorLine**(`type?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `number` | `EShapeType.CONNECTOR_LINE` |

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[constructor](EShapeLineBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L34)

## Properties

### \_body

• `Protected` **\_body**: [`EShapeConnectorBody`](../interfaces/EShapeConnectorBody.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L24)

___

### \_bodyId

• `Protected` **\_bodyId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L30)

___

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_bounds](EShapeLineBase.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsInternal](EShapeLineBase.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsInternalTransformId](EShapeLineBase.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L85)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsLocal](EShapeLineBase.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsLocalTransformId](EShapeLineBase.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsTransformId](EShapeLineBase.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_connector](EShapeLineBase.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### \_corner

• `Protected` **\_corner**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_corner](EShapeLineBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L27)

___

### \_edge

• `Protected` **\_edge**: [`EShapeConnectorEdgeContainer`](../interfaces/EShapeConnectorEdgeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L23)

___

### \_headLocalId

• `Protected` **\_headLocalId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L28)

___

### \_headMargin

• `Protected` **\_headMargin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L29)

___

### \_image

• `Protected` `Optional` **\_image**: `HTMLImageElement`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_image](EShapeLineBase.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L28)

___

### \_isChanged

• `Protected` **\_isChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L32)

___

### \_isOnTransformChanged

• `Protected` **\_isOnTransformChanged**: `boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_isOnTransformChanged](EShapeLineBase.md#_isontransformchanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L77)

___

### \_isUploadedUpdated

• `Protected` **\_isUploadedUpdated**: `boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_isUploadedUpdated](EShapeLineBase.md#_isuploadedupdated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L79)

___

### \_isUploadedUpdatedRecursively

• `Protected` **\_isUploadedUpdatedRecursively**: `boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_isUploadedUpdatedRecursively](EShapeLineBase.md#_isuploadedupdatedrecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L80)

___

### \_lockCount

• `Protected` **\_lockCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L31)

___

### \_onTransformChangeLock

• `Protected` **\_onTransformChangeLock**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_onTransformChangeLock](EShapeLineBase.md#_ontransformchangelock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L76)

___

### \_points

• `Protected` **\_points**: [`EShapeLinePoints`](EShapeLinePoints.md)

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[_points](EShapeLineBase.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L25)

___

### \_radius

• `Protected` **\_radius**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_radius](EShapeLineBase.md#_radius)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L26)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_state](EShapeLineBase.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_tailLocalId

• `Protected` **\_tailLocalId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L26)

___

### \_tailMargin

• `Protected` **\_tailMargin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L27)

___

### \_uploadedUpdateLock

• `Protected` **\_uploadedUpdateLock**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_uploadedUpdateLock](EShapeLineBase.md#_uploadedupdatelock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L78)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_visible](EShapeLineBase.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[action](../interfaces/EShapeConnector.md#action)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[action](EShapeLineBase.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L67)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[children](../interfaces/EShapeConnector.md#children)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[children](EShapeLineBase.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### cursor

• **cursor**: `string`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[cursor](../interfaces/EShapeConnector.md#cursor)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[cursor](EShapeLineBase.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L34)

___

### data

• `Readonly` **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[data](../interfaces/EShapeConnector.md#data)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[data](EShapeLineBase.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L33)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[editor](../interfaces/EShapeConnector.md#editor)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[editor](EShapeLineBase.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L105)

___

### fill

• `Readonly` **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[fill](../interfaces/EShapeConnector.md#fill)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[fill](EShapeLineBase.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L24)

___

### gradient

• `Optional` **gradient**: [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[gradient](../interfaces/EShapeConnector.md#gradient)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[gradient](EShapeLineBase.md#gradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L29)

___

### id

• **id**: `string`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[id](../interfaces/EShapeConnector.md#id)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[id](EShapeLineBase.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L49)

___

### imageSrc

• `Optional` **imageSrc**: `string`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[imageSrc](../interfaces/EShapeConnector.md#imagesrc)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[imageSrc](EShapeLineBase.md#imagesrc)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L60)

___

### index

• **index**: `number`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[index](../interfaces/EShapeConnector.md#index)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[index](EShapeLineBase.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### interactive

• **interactive**: `boolean`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[interactive](../interfaces/EShapeConnector.md#interactive)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[interactive](EShapeLineBase.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L69)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[layout](../interfaces/EShapeConnector.md#layout)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[layout](EShapeLineBase.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[parent](../interfaces/EShapeConnector.md#parent)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[parent](EShapeLineBase.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L92)

___

### reference

• **reference**: `number`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[reference](../interfaces/EShapeConnector.md#reference)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[reference](EShapeLineBase.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](EShapeRuntime.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[runtime](../interfaces/EShapeConnector.md#runtime)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[runtime](EShapeLineBase.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### selected

• **selected**: `boolean`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[selected](../interfaces/EShapeConnector.md#selected)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[selected](EShapeLineBase.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[shortcut](../interfaces/EShapeConnector.md#shortcut)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[shortcut](EShapeLineBase.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L70)

___

### size

• `Readonly` **size**: `IPoint`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[size](../interfaces/EShapeConnector.md#size)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[size](EShapeLineBase.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L23)

___

### stroke

• `Readonly` **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[stroke](../interfaces/EShapeConnector.md#stroke)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[stroke](EShapeLineBase.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L25)

___

### tag

• `Readonly` **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`deprecated`** in favor of [data](EShapeConnectorLine.md#data)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[tag](../interfaces/EShapeConnector.md#tag)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[tag](EShapeLineBase.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L32)

___

### text

• `Readonly` **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[text](../interfaces/EShapeConnector.md#text)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[text](EShapeLineBase.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L30)

___

### texture

• `Optional` **texture**: `Texture`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[texture](../interfaces/EShapeConnector.md#texture)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[texture](EShapeLineBase.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L61)

___

### title

• `Optional` **title**: `string`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[title](../interfaces/EShapeConnector.md#title)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[title](EShapeLineBase.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L71)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[transform](../interfaces/EShapeConnector.md#transform)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[transform](EShapeLineBase.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### type

• `Readonly` **type**: `number`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[type](../interfaces/EShapeConnector.md#type)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[type](EShapeLineBase.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L51)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[uploaded](../interfaces/EShapeConnector.md#uploaded)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[uploaded](EShapeLineBase.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L108)

___

### uuid

• **uuid**: `number`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[uuid](../interfaces/EShapeConnector.md#uuid)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[uuid](EShapeLineBase.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L50)

___

### WORK\_BOUNDARY

▪ `Static` `Protected` **WORK\_BOUNDARY**: [`number`, `number`, `number`, `number`]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L22)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[WORK_HIT_TEST_DATA](EShapeLineBase.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L48)

## Accessors

### body

• `get` **body**(): [`EShapeConnectorBody`](../interfaces/EShapeConnectorBody.md)

#### Returns

[`EShapeConnectorBody`](../interfaces/EShapeConnectorBody.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L80)

___

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[connector](../interfaces/EShapeConnector.md#connector)

#### Inherited from

EShapeLineBase.connector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L267)

___

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[corner](../interfaces/EShapeConnector.md#corner)

#### Inherited from

EShapeLineBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L91)

• `set` **corner**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[corner](../interfaces/EShapeConnector.md#corner)

#### Inherited from

EShapeLineBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L95)

___

### edge

• `get` **edge**(): [`EShapeConnectorEdgeContainer`](../interfaces/EShapeConnectorEdgeContainer.md)

#### Returns

[`EShapeConnectorEdgeContainer`](../interfaces/EShapeConnectorEdgeContainer.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[edge](../interfaces/EShapeConnector.md#edge)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L76)

___

### image

• `get` **image**(): `undefined` \| `HTMLImageElement`

#### Returns

`undefined` \| `HTMLImageElement`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[image](../interfaces/EShapeConnector.md#image)

#### Inherited from

EShapeLineBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L113)

• `set` **image**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `undefined` \| `HTMLImageElement` |

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[image](../interfaces/EShapeConnector.md#image)

#### Inherited from

EShapeLineBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L117)

___

### points

• `get` **points**(): [`EShapeLinePoints`](EShapeLinePoints.md)

#### Returns

[`EShapeLinePoints`](EShapeLinePoints.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[points](../interfaces/EShapeConnector.md#points)

#### Overrides

EShapeLineBase.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L72)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[radius](../interfaces/EShapeConnector.md#radius)

#### Inherited from

EShapeLineBase.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L102)

• `set` **radius**(`radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[radius](../interfaces/EShapeConnector.md#radius)

#### Inherited from

EShapeLineBase.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L106)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[root](../interfaces/EShapeConnector.md#root)

#### Inherited from

EShapeLineBase.root

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L259)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[state](../interfaces/EShapeConnector.md#state)

#### Inherited from

EShapeLineBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L750)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[visible](../interfaces/EShapeConnector.md#visible)

#### Inherited from

EShapeLineBase.visible

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

[EShapeConnector](../interfaces/EShapeConnector.md).[visible](../interfaces/EShapeConnector.md#visible)

#### Inherited from

EShapeLineBase.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L287)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[worldVisible](../interfaces/EShapeConnector.md#worldvisible)

#### Inherited from

EShapeLineBase.worldVisible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L294)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EShapeConnectorLine`](EShapeConnectorLine.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[addListener](../interfaces/EShapeConnector.md#addlistener)

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

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[addUuid](../interfaces/EShapeConnector.md#adduuid)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[addUuid](EShapeLineBase.md#adduuid)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[allowOnTransformChange](../interfaces/EShapeConnector.md#allowontransformchange)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[allowOnTransformChange](EShapeLineBase.md#allowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L186)

___

### allowUploadedUpdate

▸ **allowUploadedUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[allowUploadedUpdate](../interfaces/EShapeConnector.md#allowuploadedupdate)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[allowUploadedUpdate](EShapeLineBase.md#allowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L210)

___

### attach

▸ **attach**(`parent`, `at?`): [`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md) |
| `at?` | `number` |

#### Returns

[`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[attach](../interfaces/EShapeConnector.md#attach)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[attach](EShapeLineBase.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:314](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L314)

___

### blur

▸ **blur**(): [`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Returns

[`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[blur](../interfaces/EShapeConnector.md#blur)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[blur](EShapeLineBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:766](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L766)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L133)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L169)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L199)

___

### clone

▸ **clone**(): [`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Returns

[`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[clone](../interfaces/EShapeConnector.md#clone)

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[clone](EShapeLineBase.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L238)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[contains](../interfaces/EShapeConnector.md#contains)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[contains](EShapeLineBase.md#contains)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[containsAbs](../interfaces/EShapeConnector.md#containsabs)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[containsAbs](EShapeLineBase.md#containsabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L105)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[containsAbsBBox](../interfaces/EShapeConnector.md#containsabsbbox)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[containsAbsBBox](EShapeLineBase.md#containsabsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:605](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L605)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L56)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[containsBBox](../interfaces/EShapeConnector.md#containsbbox)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[containsBBox](EShapeLineBase.md#containsbbox)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[containsChildren](EShapeLineBase.md#containschildren)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[containsText](EShapeLineBase.md#containstext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:546](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L546)

___

### copy

▸ **copy**(`source`, `part?`): [`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | [`EShape`](../interfaces/EShape.md) | `undefined` |
| `part` | `number` | `EShapeCopyPart.ALL` |

#### Returns

[`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[copy](../interfaces/EShapeConnector.md#copy)

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[copy](EShapeLineBase.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L229)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[destroy](../interfaces/EShapeConnector.md#destroy)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[destroy](EShapeLineBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L729)

___

### detach

▸ **detach**(): [`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Returns

[`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[detach](../interfaces/EShapeConnector.md#detach)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[detach](EShapeLineBase.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L342)

___

### disallowOnTransformChange

▸ **disallowOnTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[disallowOnTransformChange](../interfaces/EShapeConnector.md#disallowontransformchange)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[disallowOnTransformChange](EShapeLineBase.md#disallowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L179)

___

### disallowUploadedUpdate

▸ **disallowUploadedUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[disallowUploadedUpdate](../interfaces/EShapeConnector.md#disallowuploadedupdate)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[disallowUploadedUpdate](EShapeLineBase.md#disallowuploadedupdate)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[emit](../interfaces/EShapeConnector.md#emit)

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

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[eventNames](../interfaces/EShapeConnector.md#eventnames)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[eventNames](EShapeLineBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Returns

[`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[focus](../interfaces/EShapeConnector.md#focus)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[focus](EShapeLineBase.md#focus)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[getBounds](../interfaces/EShapeConnector.md#getbounds)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getBounds](EShapeLineBase.md#getbounds)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[getBoundsInternal](../interfaces/EShapeConnector.md#getboundsinternal)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getBoundsInternal](EShapeLineBase.md#getboundsinternal)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[getBoundsLocal](../interfaces/EShapeConnector.md#getboundslocal)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getBoundsLocal](EShapeLineBase.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L665)

___

### getBoundsSize

▸ `Protected` **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getBoundsSize](EShapeLineBase.md#getboundssize)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getBounds_](EShapeLineBase.md#getbounds_)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getHitTestSize](EShapeLineBase.md#gethittestsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L25)

___

### getShapeScale

▸ `Protected` **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getShapeScale](EShapeLineBase.md#getshapescale)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getStrokeWidthScale](EShapeLineBase.md#getstrokewidthscale)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[listenerCount](../interfaces/EShapeConnector.md#listenercount)

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

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[listeners](../interfaces/EShapeConnector.md#listeners)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[listeners](EShapeLineBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L55)

___

### newFill

▸ `Protected` **newFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newFill](EShapeLineBase.md#newfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L61)

___

### newSize

▸ `Protected` **newSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newSize](EShapeLineBase.md#newsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L50)

___

### newStroke

▸ `Protected` **newStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newStroke](EShapeLineBase.md#newstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L65)

___

### newText

▸ `Protected` **newText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newText](EShapeLineBase.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L78)

___

### newTransform

▸ `Protected` **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newTransform](EShapeLineBase.md#newtransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L140)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`EShapeConnectorLine`](EShapeConnectorLine.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[off](../interfaces/EShapeConnector.md#off)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[off](EShapeLineBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EShapeConnectorLine`](EShapeConnectorLine.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`EShapeConnectorLine`](EShapeConnectorLine.md)

`this`.

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[on](../interfaces/EShapeConnector.md#on)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[on](EShapeLineBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[onAttach](../interfaces/EShapeConnector.md#onattach)

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[onAttach](EShapeLineBase.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L84)

___

### onChange

▸ `Protected` **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L94)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[onChildTransformChange](../interfaces/EShapeConnector.md#onchildtransformchange)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onChildTransformChange](EShapeLineBase.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L198)

___

### onDetach

▸ **onDetach**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[onDetach](../interfaces/EShapeConnector.md#ondetach)

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[onDetach](EShapeLineBase.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L89)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onKeyUp](EShapeLineBase.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L788)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[onParentTransformChange](../interfaces/EShapeConnector.md#onparenttransformchange)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onParentTransformChange](EShapeLineBase.md#onparenttransformchange)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[onRender](../interfaces/EShapeConnector.md#onrender)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onRender](EShapeLineBase.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L804)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[onSizeChange](../interfaces/EShapeConnector.md#onsizechange)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onSizeChange](EShapeLineBase.md#onsizechange)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onStateChange](EShapeLineBase.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:738](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L738)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[onTransformChange](../interfaces/EShapeConnector.md#ontransformchange)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onTransformChange](EShapeLineBase.md#ontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L154)

___

### onTransformChange\_

▸ `Protected` **onTransformChange_**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onTransformChange_](EShapeLineBase.md#ontransformchange_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L168)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShapeConnectorLine`](EShapeConnectorLine.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`EShapeConnectorLine`](EShapeConnectorLine.md)

`this`.

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[once](../interfaces/EShapeConnector.md#once)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[once](EShapeLineBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EShapeConnectorLine`](EShapeConnectorLine.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`EShapeConnectorLine`](EShapeConnectorLine.md)

`this`.

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[removeAllListeners](../interfaces/EShapeConnector.md#removealllisteners)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[removeAllListeners](EShapeLineBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`EShapeConnectorLine`](EShapeConnectorLine.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`EShapeConnectorLine`](EShapeConnectorLine.md)

`this`.

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[removeListener](../interfaces/EShapeConnector.md#removelistener)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[serialize](../interfaces/EShapeConnector.md#serialize)

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[serialize](EShapeLineBase.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L242)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[serializeGradient](EShapeLineBase.md#serializegradient)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[serializeImage](EShapeLineBase.md#serializeimage)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[serializeState](EShapeLineBase.md#serializestate)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[setFocused](EShapeLineBase.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L771)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[toDirty](../interfaces/EShapeConnector.md#todirty)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[toDirty](EShapeLineBase.md#todirty)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[toGlobal](../interfaces/EShapeConnector.md#toglobal)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[toGlobal](EShapeLineBase.md#toglobal)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[toHitTestData](EShapeLineBase.md#tohittestdata)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[toLocal](../interfaces/EShapeConnector.md#tolocal)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[toLocal](EShapeLineBase.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:623](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L623)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L37)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L62)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[update](../interfaces/EShapeConnector.md#update)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[update](EShapeLineBase.md#update)

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

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[updateRecursively](EShapeLineBase.md#updaterecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:811](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L811)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[updateTransform](../interfaces/EShapeConnector.md#updatetransform)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[updateTransform](EShapeLineBase.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L371)

___

### updateUploaded

▸ **updateUploaded**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[updateUploaded](../interfaces/EShapeConnector.md#updateuploaded)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[updateUploaded](EShapeLineBase.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L236)

___

### updateUploadedRecursively

▸ **updateUploadedRecursively**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnector](../interfaces/EShapeConnector.md).[updateUploadedRecursively](../interfaces/EShapeConnector.md#updateuploadedrecursively)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[updateUploadedRecursively](EShapeLineBase.md#updateuploadedrecursively)

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

[EShapeConnector](../interfaces/EShapeConnector.md).[updateUuid](../interfaces/EShapeConnector.md#updateuuid)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[updateUuid](EShapeLineBase.md#updateuuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L463)
