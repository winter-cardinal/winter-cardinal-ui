[Winter Cardinal UI - v0.227.0](../index.md) / EShapeEmbeddedLayer

# Class: EShapeEmbeddedLayer

## Hierarchy

- [`EShapeGroupViewer`](EShapeGroupViewer.md)

  ↳ **`EShapeEmbeddedLayer`**

## Implements

- [`EShapeLayer`](../interfaces/EShapeLayer.md)

## Table of contents

### Constructors

- [constructor](EShapeEmbeddedLayer.md#constructor)

### Properties

- [\_bounds](EShapeEmbeddedLayer.md#_bounds)
- [\_boundsInternal](EShapeEmbeddedLayer.md#_boundsinternal)
- [\_boundsInternalTransformId](EShapeEmbeddedLayer.md#_boundsinternaltransformid)
- [\_boundsLocal](EShapeEmbeddedLayer.md#_boundslocal)
- [\_boundsLocalTransformId](EShapeEmbeddedLayer.md#_boundslocaltransformid)
- [\_boundsTransformId](EShapeEmbeddedLayer.md#_boundstransformid)
- [\_connector](EShapeEmbeddedLayer.md#_connector)
- [\_depth](EShapeEmbeddedLayer.md#_depth)
- [\_image](EShapeEmbeddedLayer.md#_image)
- [\_isOnTransformChanged](EShapeEmbeddedLayer.md#_isontransformchanged)
- [\_isUploadedUpdated](EShapeEmbeddedLayer.md#_isuploadedupdated)
- [\_isUploadedUpdatedRecursively](EShapeEmbeddedLayer.md#_isuploadedupdatedrecursively)
- [\_mode](EShapeEmbeddedLayer.md#_mode)
- [\_name](EShapeEmbeddedLayer.md#_name)
- [\_onTransformChangeLock](EShapeEmbeddedLayer.md#_ontransformchangelock)
- [\_points](EShapeEmbeddedLayer.md#_points)
- [\_state](EShapeEmbeddedLayer.md#_state)
- [\_uploadedUpdateLock](EShapeEmbeddedLayer.md#_uploadedupdatelock)
- [\_visible](EShapeEmbeddedLayer.md#_visible)
- [action](EShapeEmbeddedLayer.md#action)
- [children](EShapeEmbeddedLayer.md#children)
- [data](EShapeEmbeddedLayer.md#data)
- [editor](EShapeEmbeddedLayer.md#editor)
- [fill](EShapeEmbeddedLayer.md#fill)
- [id](EShapeEmbeddedLayer.md#id)
- [imageSrc](EShapeEmbeddedLayer.md#imagesrc)
- [index](EShapeEmbeddedLayer.md#index)
- [interactive](EShapeEmbeddedLayer.md#interactive)
- [layout](EShapeEmbeddedLayer.md#layout)
- [parent](EShapeEmbeddedLayer.md#parent)
- [reference](EShapeEmbeddedLayer.md#reference)
- [runtime](EShapeEmbeddedLayer.md#runtime)
- [selected](EShapeEmbeddedLayer.md#selected)
- [shortcut](EShapeEmbeddedLayer.md#shortcut)
- [size](EShapeEmbeddedLayer.md#size)
- [stroke](EShapeEmbeddedLayer.md#stroke)
- [tag](EShapeEmbeddedLayer.md#tag)
- [text](EShapeEmbeddedLayer.md#text)
- [texture](EShapeEmbeddedLayer.md#texture)
- [title](EShapeEmbeddedLayer.md#title)
- [transform](EShapeEmbeddedLayer.md#transform)
- [type](EShapeEmbeddedLayer.md#type)
- [uploaded](EShapeEmbeddedLayer.md#uploaded)
- [uuid](EShapeEmbeddedLayer.md#uuid)
- [WORK\_HIT\_TEST\_DATA](EShapeEmbeddedLayer.md#work_hit_test_data)

### Accessors

- [connector](EShapeEmbeddedLayer.md#connector)
- [corner](EShapeEmbeddedLayer.md#corner)
- [cursor](EShapeEmbeddedLayer.md#cursor)
- [depth](EShapeEmbeddedLayer.md#depth)
- [gradient](EShapeEmbeddedLayer.md#gradient)
- [image](EShapeEmbeddedLayer.md#image)
- [mode](EShapeEmbeddedLayer.md#mode)
- [name](EShapeEmbeddedLayer.md#name)
- [points](EShapeEmbeddedLayer.md#points)
- [radius](EShapeEmbeddedLayer.md#radius)
- [root](EShapeEmbeddedLayer.md#root)
- [state](EShapeEmbeddedLayer.md#state)
- [visible](EShapeEmbeddedLayer.md#visible)
- [worldVisible](EShapeEmbeddedLayer.md#worldvisible)

### Methods

- [addListener](EShapeEmbeddedLayer.md#addlistener)
- [addUuid](EShapeEmbeddedLayer.md#adduuid)
- [allowOnTransformChange](EShapeEmbeddedLayer.md#allowontransformchange)
- [allowUploadedUpdate](EShapeEmbeddedLayer.md#allowuploadedupdate)
- [attach](EShapeEmbeddedLayer.md#attach)
- [blur](EShapeEmbeddedLayer.md#blur)
- [clone](EShapeEmbeddedLayer.md#clone)
- [contains](EShapeEmbeddedLayer.md#contains)
- [containsAbs](EShapeEmbeddedLayer.md#containsabs)
- [containsAbsBBox](EShapeEmbeddedLayer.md#containsabsbbox)
- [containsBBox](EShapeEmbeddedLayer.md#containsbbox)
- [containsChildren](EShapeEmbeddedLayer.md#containschildren)
- [containsText](EShapeEmbeddedLayer.md#containstext)
- [copy](EShapeEmbeddedLayer.md#copy)
- [destroy](EShapeEmbeddedLayer.md#destroy)
- [detach](EShapeEmbeddedLayer.md#detach)
- [disallowOnTransformChange](EShapeEmbeddedLayer.md#disallowontransformchange)
- [disallowUploadedUpdate](EShapeEmbeddedLayer.md#disallowuploadedupdate)
- [emit](EShapeEmbeddedLayer.md#emit)
- [eventNames](EShapeEmbeddedLayer.md#eventnames)
- [focus](EShapeEmbeddedLayer.md#focus)
- [getBounds](EShapeEmbeddedLayer.md#getbounds)
- [getBoundsInternal](EShapeEmbeddedLayer.md#getboundsinternal)
- [getBoundsLocal](EShapeEmbeddedLayer.md#getboundslocal)
- [getBoundsSize](EShapeEmbeddedLayer.md#getboundssize)
- [getBounds\_](EShapeEmbeddedLayer.md#getbounds_)
- [getHitTestSize](EShapeEmbeddedLayer.md#gethittestsize)
- [getShapeScale](EShapeEmbeddedLayer.md#getshapescale)
- [getStrokeWidthScale](EShapeEmbeddedLayer.md#getstrokewidthscale)
- [isGroupSizeFittable](EShapeEmbeddedLayer.md#isgroupsizefittable)
- [listenerCount](EShapeEmbeddedLayer.md#listenercount)
- [listeners](EShapeEmbeddedLayer.md#listeners)
- [newClone](EShapeEmbeddedLayer.md#newclone)
- [newData](EShapeEmbeddedLayer.md#newdata)
- [newGroupFill](EShapeEmbeddedLayer.md#newgroupfill)
- [newGroupSize](EShapeEmbeddedLayer.md#newgroupsize)
- [newGroupStroke](EShapeEmbeddedLayer.md#newgroupstroke)
- [newGroupText](EShapeEmbeddedLayer.md#newgrouptext)
- [newTransform](EShapeEmbeddedLayer.md#newtransform)
- [off](EShapeEmbeddedLayer.md#off)
- [on](EShapeEmbeddedLayer.md#on)
- [onAttach](EShapeEmbeddedLayer.md#onattach)
- [onChildTransformChange](EShapeEmbeddedLayer.md#onchildtransformchange)
- [onDetach](EShapeEmbeddedLayer.md#ondetach)
- [onKeyDown](EShapeEmbeddedLayer.md#onkeydown)
- [onKeyUp](EShapeEmbeddedLayer.md#onkeyup)
- [onParentTransformChange](EShapeEmbeddedLayer.md#onparenttransformchange)
- [onRender](EShapeEmbeddedLayer.md#onrender)
- [onSizeChange](EShapeEmbeddedLayer.md#onsizechange)
- [onStateChange](EShapeEmbeddedLayer.md#onstatechange)
- [onTransformChange](EShapeEmbeddedLayer.md#ontransformchange)
- [onTransformChange\_](EShapeEmbeddedLayer.md#ontransformchange_)
- [once](EShapeEmbeddedLayer.md#once)
- [removeAllListeners](EShapeEmbeddedLayer.md#removealllisteners)
- [removeListener](EShapeEmbeddedLayer.md#removelistener)
- [select](EShapeEmbeddedLayer.md#select)
- [serialize](EShapeEmbeddedLayer.md#serialize)
- [serializeChildren](EShapeEmbeddedLayer.md#serializechildren)
- [serializeGradient](EShapeEmbeddedLayer.md#serializegradient)
- [serializeImage](EShapeEmbeddedLayer.md#serializeimage)
- [serializeState](EShapeEmbeddedLayer.md#serializestate)
- [setFocused](EShapeEmbeddedLayer.md#setfocused)
- [toDirty](EShapeEmbeddedLayer.md#todirty)
- [toGlobal](EShapeEmbeddedLayer.md#toglobal)
- [toHitTestData](EShapeEmbeddedLayer.md#tohittestdata)
- [toLocal](EShapeEmbeddedLayer.md#tolocal)
- [update](EShapeEmbeddedLayer.md#update)
- [updateRecursively](EShapeEmbeddedLayer.md#updaterecursively)
- [updateTransform](EShapeEmbeddedLayer.md#updatetransform)
- [updateUploaded](EShapeEmbeddedLayer.md#updateuploaded)
- [updateUploadedRecursively](EShapeEmbeddedLayer.md#updateuploadedrecursively)
- [updateUuid](EShapeEmbeddedLayer.md#updateuuid)

## Constructors

### constructor

• **new EShapeEmbeddedLayer**(`name`, `mode`, `depth`, `type?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `mode` | [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1) | `undefined` |
| `depth` | `number` | `undefined` |
| `type` | `number` | `EShapeType.EMBEDDED_LAYER` |

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[constructor](EShapeGroupViewer.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts#L21)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_bounds](EShapeGroupViewer.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsInternal](EShapeGroupViewer.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsInternalTransformId](EShapeGroupViewer.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L85)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsLocal](EShapeGroupViewer.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsLocalTransformId](EShapeGroupViewer.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsTransformId](EShapeGroupViewer.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_connector](EShapeGroupViewer.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### \_depth

• `Protected` **\_depth**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_depth](EShapeGroupViewer.md#_depth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L36)

___

### \_image

• `Protected` `Optional` **\_image**: `HTMLImageElement`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_image](EShapeGroupViewer.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L59)

___

### \_isOnTransformChanged

• `Protected` **\_isOnTransformChanged**: `boolean`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_isOnTransformChanged](EShapeGroupViewer.md#_isontransformchanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L77)

___

### \_isUploadedUpdated

• `Protected` **\_isUploadedUpdated**: `boolean`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_isUploadedUpdated](EShapeGroupViewer.md#_isuploadedupdated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L79)

___

### \_isUploadedUpdatedRecursively

• `Protected` **\_isUploadedUpdatedRecursively**: `boolean`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_isUploadedUpdatedRecursively](EShapeGroupViewer.md#_isuploadedupdatedrecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L80)

___

### \_mode

• `Protected` **\_mode**: [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_mode](EShapeGroupViewer.md#_mode)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L35)

___

### \_name

• `Protected` **\_name**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts#L19)

___

### \_onTransformChangeLock

• `Protected` **\_onTransformChangeLock**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_onTransformChangeLock](EShapeGroupViewer.md#_ontransformchangelock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L76)

___

### \_points

• `Protected` `Optional` **\_points**: [`EShapePoints`](../interfaces/EShapePoints.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_points](EShapeGroupViewer.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L58)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_state](EShapeGroupViewer.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_uploadedUpdateLock

• `Protected` **\_uploadedUpdateLock**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_uploadedUpdateLock](EShapeGroupViewer.md#_uploadedupdatelock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L78)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_visible](EShapeGroupViewer.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[action](../interfaces/EShapeLayer.md#action)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[action](EShapeGroupViewer.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L67)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[children](../interfaces/EShapeLayer.md#children)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[children](EShapeGroupViewer.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### data

• **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[data](../interfaces/EShapeLayer.md#data)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[data](EShapeGroupViewer.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L32)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[editor](../interfaces/EShapeLayer.md#editor)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[editor](EShapeGroupViewer.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L105)

___

### fill

• **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[fill](../interfaces/EShapeLayer.md#fill)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[fill](EShapeGroupViewer.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L28)

___

### id

• **id**: `string`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[id](../interfaces/EShapeLayer.md#id)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[id](EShapeGroupViewer.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L49)

___

### imageSrc

• `Optional` **imageSrc**: `string`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[imageSrc](../interfaces/EShapeLayer.md#imagesrc)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[imageSrc](EShapeGroupViewer.md#imagesrc)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L60)

___

### index

• **index**: `number`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[index](../interfaces/EShapeLayer.md#index)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[index](EShapeGroupViewer.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### interactive

• **interactive**: `boolean`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[interactive](../interfaces/EShapeLayer.md#interactive)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[interactive](EShapeGroupViewer.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L69)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[layout](../interfaces/EShapeLayer.md#layout)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[layout](EShapeGroupViewer.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[parent](../interfaces/EShapeLayer.md#parent)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[parent](EShapeGroupViewer.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L92)

___

### reference

• **reference**: `number`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[reference](../interfaces/EShapeLayer.md#reference)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[reference](EShapeGroupViewer.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](EShapeRuntime.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[runtime](../interfaces/EShapeLayer.md#runtime)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[runtime](EShapeGroupViewer.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### selected

• **selected**: `boolean`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[selected](../interfaces/EShapeLayer.md#selected)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[selected](EShapeGroupViewer.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[shortcut](../interfaces/EShapeLayer.md#shortcut)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[shortcut](EShapeGroupViewer.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L70)

___

### size

• **size**: [`EShapeGroupSize`](../interfaces/EShapeGroupSize.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[size](../interfaces/EShapeLayer.md#size)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[size](EShapeGroupViewer.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L27)

___

### stroke

• **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[stroke](../interfaces/EShapeLayer.md#stroke)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[stroke](EShapeGroupViewer.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L29)

___

### tag

• **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`Deprecated`**

in favor of [data](EShapeEmbeddedLayer.md#data)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[tag](../interfaces/EShapeLayer.md#tag)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[tag](EShapeGroupViewer.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L31)

___

### text

• **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[text](../interfaces/EShapeLayer.md#text)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[text](EShapeGroupViewer.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L33)

___

### texture

• `Optional` **texture**: `Texture`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[texture](../interfaces/EShapeLayer.md#texture)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[texture](EShapeGroupViewer.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L61)

___

### title

• `Optional` **title**: `string`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[title](../interfaces/EShapeLayer.md#title)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[title](EShapeGroupViewer.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L71)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[transform](../interfaces/EShapeLayer.md#transform)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[transform](EShapeGroupViewer.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### type

• `Readonly` **type**: `number`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[type](../interfaces/EShapeLayer.md#type)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[type](EShapeGroupViewer.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L51)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[uploaded](../interfaces/EShapeLayer.md#uploaded)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[uploaded](EShapeGroupViewer.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L108)

___

### uuid

• **uuid**: `number`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[uuid](../interfaces/EShapeLayer.md#uuid)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[uuid](EShapeGroupViewer.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L50)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[WORK_HIT_TEST_DATA](EShapeGroupViewer.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L48)

## Accessors

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[connector](../interfaces/EShapeLayer.md#connector)

#### Inherited from

EShapeGroupViewer.connector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L267)

___

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[corner](../interfaces/EShapeLayer.md#corner)

#### Inherited from

EShapeGroupViewer.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L113)

• `set` **corner**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[corner](../interfaces/EShapeLayer.md#corner)

#### Inherited from

EShapeGroupViewer.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L117)

___

### cursor

• `get` **cursor**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[cursor](../interfaces/EShapeLayer.md#cursor)

#### Inherited from

EShapeGroupViewer.cursor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L121)

• `set` **cursor**(`cursor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[cursor](../interfaces/EShapeLayer.md#cursor)

#### Inherited from

EShapeGroupViewer.cursor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L125)

___

### depth

• `get` **depth**(): `number`

#### Returns

`number`

#### Inherited from

EShapeGroupViewer.depth

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L55)

___

### gradient

• `get` **gradient**(): `undefined` \| [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Returns

`undefined` \| [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[gradient](../interfaces/EShapeLayer.md#gradient)

#### Inherited from

EShapeGroupViewer.gradient

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L129)

• `set` **gradient**(`gradient`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gradient` | `undefined` \| [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md) |

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[gradient](../interfaces/EShapeLayer.md#gradient)

#### Inherited from

EShapeGroupViewer.gradient

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L133)

___

### image

• `get` **image**(): `undefined` \| `HTMLImageElement`

#### Returns

`undefined` \| `HTMLImageElement`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[image](../interfaces/EShapeLayer.md#image)

#### Inherited from

EShapeGroupViewer.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L145)

• `set` **image**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `undefined` \| `HTMLImageElement` |

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[image](../interfaces/EShapeLayer.md#image)

#### Inherited from

EShapeGroupViewer.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L149)

___

### mode

• `get` **mode**(): [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Returns

[`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Inherited from

EShapeGroupViewer.mode

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L51)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[name](../interfaces/EShapeLayer.md#name)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts#L31)

___

### points

• `get` **points**(): `undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Returns

`undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[points](../interfaces/EShapeLayer.md#points)

#### Inherited from

EShapeGroupViewer.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L153)

• `set` **points**(`points`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md) |

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[points](../interfaces/EShapeLayer.md#points)

#### Inherited from

EShapeGroupViewer.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L157)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[radius](../interfaces/EShapeLayer.md#radius)

#### Inherited from

EShapeGroupViewer.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L137)

• `set` **radius**(`radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[radius](../interfaces/EShapeLayer.md#radius)

#### Inherited from

EShapeGroupViewer.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L141)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[root](../interfaces/EShapeLayer.md#root)

#### Inherited from

EShapeGroupViewer.root

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L259)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[state](../interfaces/EShapeLayer.md#state)

#### Inherited from

EShapeGroupViewer.state

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:752](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L752)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[visible](../interfaces/EShapeLayer.md#visible)

#### Inherited from

EShapeGroupViewer.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L276)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[visible](../interfaces/EShapeLayer.md#visible)

#### Inherited from

EShapeGroupViewer.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L287)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[worldVisible](../interfaces/EShapeLayer.md#worldvisible)

#### Inherited from

EShapeGroupViewer.worldVisible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L294)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[addListener](../interfaces/EShapeLayer.md#addlistener)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[addListener](EShapeGroupViewer.md#addlistener)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[addUuid](../interfaces/EShapeLayer.md#adduuid)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[addUuid](EShapeGroupViewer.md#adduuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:455](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L455)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[allowOnTransformChange](../interfaces/EShapeLayer.md#allowontransformchange)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[allowOnTransformChange](EShapeGroupViewer.md#allowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L186)

___

### allowUploadedUpdate

▸ **allowUploadedUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[allowUploadedUpdate](../interfaces/EShapeLayer.md#allowuploadedupdate)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[allowUploadedUpdate](EShapeGroupViewer.md#allowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L210)

___

### attach

▸ **attach**(`parent`, `at?`): [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md) |
| `at?` | `number` |

#### Returns

[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[attach](../interfaces/EShapeLayer.md#attach)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[attach](EShapeGroupViewer.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:314](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L314)

___

### blur

▸ **blur**(): [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Returns

[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[blur](../interfaces/EShapeLayer.md#blur)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[blur](EShapeGroupViewer.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L768)

___

### clone

▸ **clone**(): [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Returns

[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[clone](../interfaces/EShapeLayer.md#clone)

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[clone](EShapeGroupViewer.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts#L52)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[contains](../interfaces/EShapeLayer.md#contains)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[contains](EShapeGroupViewer.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:528](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L528)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[containsAbs](../interfaces/EShapeLayer.md#containsabs)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[containsAbs](EShapeGroupViewer.md#containsabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L163)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[containsAbsBBox](../interfaces/EShapeLayer.md#containsabsbbox)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[containsAbsBBox](EShapeGroupViewer.md#containsabsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:607](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L607)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[containsBBox](../interfaces/EShapeLayer.md#containsbbox)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[containsBBox](EShapeGroupViewer.md#containsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:590](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L590)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[containsChildren](EShapeGroupViewer.md#containschildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:567](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L567)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[containsText](EShapeGroupViewer.md#containstext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:546](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L546)

___

### copy

▸ **copy**(`source`, `part?`): [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | [`EShape`](../interfaces/EShape.md) | `undefined` |
| `part` | `number` | `EShapeCopyPart.ALL` |

#### Returns

[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[copy](../interfaces/EShapeLayer.md#copy)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[copy](EShapeGroupViewer.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:822](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L822)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[destroy](../interfaces/EShapeLayer.md#destroy)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[destroy](EShapeGroupViewer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:731](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L731)

___

### detach

▸ **detach**(): [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Returns

[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[detach](../interfaces/EShapeLayer.md#detach)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[detach](EShapeGroupViewer.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L342)

___

### disallowOnTransformChange

▸ **disallowOnTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[disallowOnTransformChange](../interfaces/EShapeLayer.md#disallowontransformchange)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[disallowOnTransformChange](EShapeGroupViewer.md#disallowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L179)

___

### disallowUploadedUpdate

▸ **disallowUploadedUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[disallowUploadedUpdate](../interfaces/EShapeLayer.md#disallowuploadedupdate)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[disallowUploadedUpdate](EShapeGroupViewer.md#disallowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L202)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[emit](../interfaces/EShapeLayer.md#emit)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[emit](EShapeGroupViewer.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[eventNames](../interfaces/EShapeLayer.md#eventnames)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[eventNames](EShapeGroupViewer.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Returns

[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[focus](../interfaces/EShapeLayer.md#focus)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[focus](EShapeGroupViewer.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:763](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L763)

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

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[getBounds](../interfaces/EShapeLayer.md#getbounds)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getBounds](EShapeGroupViewer.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:637](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L637)

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

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[getBoundsInternal](../interfaces/EShapeLayer.md#getboundsinternal)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getBoundsInternal](EShapeGroupViewer.md#getboundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:652](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L652)

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

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[getBoundsLocal](../interfaces/EShapeLayer.md#getboundslocal)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getBoundsLocal](EShapeGroupViewer.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:667](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L667)

___

### getBoundsSize

▸ `Protected` **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getBoundsSize](EShapeGroupViewer.md#getboundssize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L99)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[getBounds_](EShapeGroupViewer.md#getbounds_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:686](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L686)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[getHitTestSize](EShapeGroupViewer.md#gethittestsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L496)

___

### getShapeScale

▸ `Protected` **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getShapeScale](EShapeGroupViewer.md#getshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L472)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[getStrokeWidthScale](EShapeGroupViewer.md#getstrokewidthscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:480](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L480)

___

### isGroupSizeFittable

▸ `Protected` **isGroupSizeFittable**(): `boolean`

#### Returns

`boolean`

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[isGroupSizeFittable](EShapeGroupViewer.md#isgroupsizefittable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts#L39)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[listenerCount](../interfaces/EShapeLayer.md#listenercount)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[listenerCount](EShapeGroupViewer.md#listenercount)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[listeners](../interfaces/EShapeLayer.md#listeners)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[listeners](EShapeGroupViewer.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newClone

▸ `Protected` **newClone**(): [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Returns

[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts#L66)

___

### newData

▸ `Protected` **newData**(): [`EShapeData`](../interfaces/EShapeData.md)

#### Returns

[`EShapeData`](../interfaces/EShapeData.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[newData](EShapeGroupViewer.md#newdata)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L76)

___

### newGroupFill

▸ `Protected` **newGroupFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[newGroupFill](EShapeGroupViewer.md#newgroupfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts#L35)

___

### newGroupSize

▸ `Protected` **newGroupSize**(`mode`, `depth`): [`EShapeGroupSize`](../interfaces/EShapeGroupSize.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1) |
| `depth` | `number` |

#### Returns

[`EShapeGroupSize`](../interfaces/EShapeGroupSize.md)

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[newGroupSize](EShapeGroupViewer.md#newgroupsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts#L43)

___

### newGroupStroke

▸ `Protected` **newGroupStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[newGroupStroke](EShapeGroupViewer.md#newgroupstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L84)

___

### newGroupText

▸ `Protected` **newGroupText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[newGroupText](EShapeGroupViewer.md#newgrouptext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L88)

___

### newTransform

▸ `Protected` **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[newTransform](EShapeGroupViewer.md#newtransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L140)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[off](../interfaces/EShapeLayer.md#off)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[off](EShapeGroupViewer.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

`this`.

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[on](../interfaces/EShapeLayer.md#on)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[on](EShapeGroupViewer.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[onAttach](../interfaces/EShapeLayer.md#onattach)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onAttach](EShapeGroupViewer.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:329](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L329)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[onChildTransformChange](../interfaces/EShapeLayer.md#onchildtransformchange)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onChildTransformChange](EShapeGroupViewer.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L108)

___

### onDetach

▸ **onDetach**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[onDetach](../interfaces/EShapeLayer.md#ondetach)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onDetach](EShapeGroupViewer.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:358](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L358)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[onKeyDown](EShapeGroupViewer.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:782](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L782)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[onKeyUp](EShapeGroupViewer.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:790](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L790)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[onParentTransformChange](../interfaces/EShapeLayer.md#onparenttransformchange)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onParentTransformChange](EShapeGroupViewer.md#onparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L159)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[onRender](../interfaces/EShapeLayer.md#onrender)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onRender](EShapeGroupViewer.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:806](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L806)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[onSizeChange](../interfaces/EShapeLayer.md#onsizechange)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onSizeChange](EShapeGroupViewer.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L144)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[onStateChange](EShapeGroupViewer.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L740)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[onTransformChange](../interfaces/EShapeLayer.md#ontransformchange)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onTransformChange](EShapeGroupViewer.md#ontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L154)

___

### onTransformChange\_

▸ `Protected` **onTransformChange_**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onTransformChange_](EShapeGroupViewer.md#ontransformchange_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L168)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

`this`.

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[once](../interfaces/EShapeLayer.md#once)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[once](EShapeGroupViewer.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

`this`.

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[removeAllListeners](../interfaces/EShapeLayer.md#removealllisteners)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[removeAllListeners](EShapeGroupViewer.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

`this`.

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[removeListener](../interfaces/EShapeLayer.md#removelistener)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[removeListener](EShapeGroupViewer.md#removelistener)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[select](EShapeGroupViewer.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:611](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L611)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[serialize](../interfaces/EShapeLayer.md#serialize)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[serialize](EShapeGroupViewer.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:415](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L415)

___

### serializeChildren

▸ **serializeChildren**(`manager`): [`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

[`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)[]

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[serializeChildren](EShapeGroupViewer.md#serializechildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts#L71)

___

### serializeGradient

▸ **serializeGradient**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[serializeGradient](EShapeGroupViewer.md#serializegradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts#L79)

___

### serializeImage

▸ **serializeImage**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[serializeImage](EShapeGroupViewer.md#serializeimage)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer.ts#L75)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[serializeState](EShapeGroupViewer.md#serializestate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:410](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L410)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[setFocused](EShapeGroupViewer.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:773](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L773)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[toDirty](../interfaces/EShapeLayer.md#todirty)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[toDirty](EShapeGroupViewer.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:309](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L309)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[toGlobal](../interfaces/EShapeLayer.md#toglobal)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[toGlobal](EShapeGroupViewer.md#toglobal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:616](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L616)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[toHitTestData](EShapeGroupViewer.md#tohittestdata)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L503)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[toLocal](../interfaces/EShapeLayer.md#tolocal)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[toLocal](EShapeGroupViewer.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:625](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L625)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[update](../interfaces/EShapeLayer.md#update)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[update](EShapeGroupViewer.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:799](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L799)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[updateRecursively](EShapeGroupViewer.md#updaterecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:813](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L813)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[updateTransform](../interfaces/EShapeLayer.md#updatetransform)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[updateTransform](EShapeGroupViewer.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L371)

___

### updateUploaded

▸ **updateUploaded**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[updateUploaded](../interfaces/EShapeLayer.md#updateuploaded)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[updateUploaded](EShapeGroupViewer.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L236)

___

### updateUploadedRecursively

▸ **updateUploadedRecursively**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLayer](../interfaces/EShapeLayer.md).[updateUploadedRecursively](../interfaces/EShapeLayer.md#updateuploadedrecursively)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[updateUploadedRecursively](EShapeGroupViewer.md#updateuploadedrecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L224)

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

[EShapeLayer](../interfaces/EShapeLayer.md).[updateUuid](../interfaces/EShapeLayer.md#updateuuid)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[updateUuid](EShapeGroupViewer.md#updateuuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:463](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L463)
