[Winter Cardinal UI - v0.310.1](../index.md) / EShapeGroupViewer

# Class: EShapeGroupViewer

## Hierarchy

- [`EShapeBase`](EShapeBase.md)

  ↳ **`EShapeGroupViewer`**

  ↳↳ [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)

  ↳↳ [`EShapeEmbedded`](EShapeEmbedded.md)

## Table of contents

### Constructors

- [constructor](EShapeGroupViewer.md#constructor)

### Properties

- [\_bounds](EShapeGroupViewer.md#_bounds)
- [\_boundsInternal](EShapeGroupViewer.md#_boundsinternal)
- [\_boundsInternalTransformId](EShapeGroupViewer.md#_boundsinternaltransformid)
- [\_boundsLocal](EShapeGroupViewer.md#_boundslocal)
- [\_boundsLocalTransformId](EShapeGroupViewer.md#_boundslocaltransformid)
- [\_boundsTransformId](EShapeGroupViewer.md#_boundstransformid)
- [\_capability](EShapeGroupViewer.md#_capability)
- [\_connector](EShapeGroupViewer.md#_connector)
- [\_depth](EShapeGroupViewer.md#_depth)
- [\_image](EShapeGroupViewer.md#_image)
- [\_isOnTransformChanged](EShapeGroupViewer.md#_isontransformchanged)
- [\_isUploadedUpdated](EShapeGroupViewer.md#_isuploadedupdated)
- [\_isUploadedUpdatedRecursively](EShapeGroupViewer.md#_isuploadedupdatedrecursively)
- [\_mode](EShapeGroupViewer.md#_mode)
- [\_onTransformChangeLock](EShapeGroupViewer.md#_ontransformchangelock)
- [\_points](EShapeGroupViewer.md#_points)
- [\_state](EShapeGroupViewer.md#_state)
- [\_uploadedUpdateLock](EShapeGroupViewer.md#_uploadedupdatelock)
- [\_visible](EShapeGroupViewer.md#_visible)
- [action](EShapeGroupViewer.md#action)
- [children](EShapeGroupViewer.md#children)
- [cursor](EShapeGroupViewer.md#cursor)
- [data](EShapeGroupViewer.md#data)
- [editor](EShapeGroupViewer.md#editor)
- [fill](EShapeGroupViewer.md#fill)
- [id](EShapeGroupViewer.md#id)
- [imageSrc](EShapeGroupViewer.md#imagesrc)
- [index](EShapeGroupViewer.md#index)
- [interactive](EShapeGroupViewer.md#interactive)
- [layout](EShapeGroupViewer.md#layout)
- [parent](EShapeGroupViewer.md#parent)
- [reference](EShapeGroupViewer.md#reference)
- [runtime](EShapeGroupViewer.md#runtime)
- [selected](EShapeGroupViewer.md#selected)
- [shortcut](EShapeGroupViewer.md#shortcut)
- [size](EShapeGroupViewer.md#size)
- [stroke](EShapeGroupViewer.md#stroke)
- [tag](EShapeGroupViewer.md#tag)
- [text](EShapeGroupViewer.md#text)
- [texture](EShapeGroupViewer.md#texture)
- [title](EShapeGroupViewer.md#title)
- [transform](EShapeGroupViewer.md#transform)
- [type](EShapeGroupViewer.md#type)
- [uploaded](EShapeGroupViewer.md#uploaded)
- [uuid](EShapeGroupViewer.md#uuid)
- [WORK\_HIT\_TEST\_DATA](EShapeGroupViewer.md#work_hit_test_data)

### Accessors

- [capability](EShapeGroupViewer.md#capability)
- [connector](EShapeGroupViewer.md#connector)
- [corner](EShapeGroupViewer.md#corner)
- [depth](EShapeGroupViewer.md#depth)
- [gradient](EShapeGroupViewer.md#gradient)
- [image](EShapeGroupViewer.md#image)
- [mode](EShapeGroupViewer.md#mode)
- [points](EShapeGroupViewer.md#points)
- [radius](EShapeGroupViewer.md#radius)
- [root](EShapeGroupViewer.md#root)
- [state](EShapeGroupViewer.md#state)
- [visible](EShapeGroupViewer.md#visible)
- [worldVisible](EShapeGroupViewer.md#worldvisible)

### Methods

- [addListener](EShapeGroupViewer.md#addlistener)
- [addUuid](EShapeGroupViewer.md#adduuid)
- [allowOnTransformChange](EShapeGroupViewer.md#allowontransformchange)
- [allowUploadedUpdate](EShapeGroupViewer.md#allowuploadedupdate)
- [attach](EShapeGroupViewer.md#attach)
- [blur](EShapeGroupViewer.md#blur)
- [clone](EShapeGroupViewer.md#clone)
- [contains](EShapeGroupViewer.md#contains)
- [containsAbs](EShapeGroupViewer.md#containsabs)
- [containsAbsBBox](EShapeGroupViewer.md#containsabsbbox)
- [containsBBox](EShapeGroupViewer.md#containsbbox)
- [containsChildren](EShapeGroupViewer.md#containschildren)
- [containsText](EShapeGroupViewer.md#containstext)
- [copy](EShapeGroupViewer.md#copy)
- [destroy](EShapeGroupViewer.md#destroy)
- [detach](EShapeGroupViewer.md#detach)
- [disallowOnTransformChange](EShapeGroupViewer.md#disallowontransformchange)
- [disallowUploadedUpdate](EShapeGroupViewer.md#disallowuploadedupdate)
- [emit](EShapeGroupViewer.md#emit)
- [eventNames](EShapeGroupViewer.md#eventnames)
- [focus](EShapeGroupViewer.md#focus)
- [getBounds](EShapeGroupViewer.md#getbounds)
- [getBoundsInternal](EShapeGroupViewer.md#getboundsinternal)
- [getBoundsLocal](EShapeGroupViewer.md#getboundslocal)
- [getBoundsSize](EShapeGroupViewer.md#getboundssize)
- [getBounds\_](EShapeGroupViewer.md#getbounds_)
- [getCapability](EShapeGroupViewer.md#getcapability)
- [getHitTestSize](EShapeGroupViewer.md#gethittestsize)
- [getShapeScale](EShapeGroupViewer.md#getshapescale)
- [getStrokeWidthScale](EShapeGroupViewer.md#getstrokewidthscale)
- [isGroupSizeFittable](EShapeGroupViewer.md#isgroupsizefittable)
- [listenerCount](EShapeGroupViewer.md#listenercount)
- [listeners](EShapeGroupViewer.md#listeners)
- [newData](EShapeGroupViewer.md#newdata)
- [newGroupFill](EShapeGroupViewer.md#newgroupfill)
- [newGroupSize](EShapeGroupViewer.md#newgroupsize)
- [newGroupStroke](EShapeGroupViewer.md#newgroupstroke)
- [newGroupText](EShapeGroupViewer.md#newgrouptext)
- [newTransform](EShapeGroupViewer.md#newtransform)
- [off](EShapeGroupViewer.md#off)
- [on](EShapeGroupViewer.md#on)
- [onAttach](EShapeGroupViewer.md#onattach)
- [onChildTransformChange](EShapeGroupViewer.md#onchildtransformchange)
- [onDetach](EShapeGroupViewer.md#ondetach)
- [onKeyDown](EShapeGroupViewer.md#onkeydown)
- [onKeyUp](EShapeGroupViewer.md#onkeyup)
- [onParentTransformChange](EShapeGroupViewer.md#onparenttransformchange)
- [onRender](EShapeGroupViewer.md#onrender)
- [onSizeChange](EShapeGroupViewer.md#onsizechange)
- [onStateChange](EShapeGroupViewer.md#onstatechange)
- [onTransformChange](EShapeGroupViewer.md#ontransformchange)
- [onTransformChange\_](EShapeGroupViewer.md#ontransformchange_)
- [once](EShapeGroupViewer.md#once)
- [removeAllListeners](EShapeGroupViewer.md#removealllisteners)
- [removeListener](EShapeGroupViewer.md#removelistener)
- [select](EShapeGroupViewer.md#select)
- [serialize](EShapeGroupViewer.md#serialize)
- [serializeChildren](EShapeGroupViewer.md#serializechildren)
- [serializeGradient](EShapeGroupViewer.md#serializegradient)
- [serializeImage](EShapeGroupViewer.md#serializeimage)
- [serializeState](EShapeGroupViewer.md#serializestate)
- [setFocused](EShapeGroupViewer.md#setfocused)
- [toDirty](EShapeGroupViewer.md#todirty)
- [toGlobal](EShapeGroupViewer.md#toglobal)
- [toHitTestData](EShapeGroupViewer.md#tohittestdata)
- [toLocal](EShapeGroupViewer.md#tolocal)
- [update](EShapeGroupViewer.md#update)
- [updateRecursively](EShapeGroupViewer.md#updaterecursively)
- [updateTransform](EShapeGroupViewer.md#updatetransform)
- [updateUploaded](EShapeGroupViewer.md#updateuploaded)
- [updateUploadedRecursively](EShapeGroupViewer.md#updateuploadedrecursively)
- [updateUuid](EShapeGroupViewer.md#updateuuid)

## Constructors

### constructor

• **new EShapeGroupViewer**(`mode`, `depth`, `type`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1) |
| `depth` | `number` |
| `type` | `number` |

#### Overrides

[EShapeBase](EShapeBase.md).[constructor](EShapeBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L38)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeBase](EShapeBase.md).[_bounds](EShapeBase.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L85)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsInternal](EShapeBase.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsInternalTransformId](EShapeBase.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L88)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsLocal](EShapeBase.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsLocalTransformId](EShapeBase.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L90)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsTransformId](EShapeBase.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_capability

• `Protected` `Optional` **\_capability**: [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_capability](EShapeBase.md#_capability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_connector](EShapeBase.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L76)

___

### \_depth

• `Protected` **\_depth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L36)

___

### \_image

• `Protected` `Optional` **\_image**: `HTMLImageElement`

#### Inherited from

[EShapeBase](EShapeBase.md).[_image](EShapeBase.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L62)

___

### \_isOnTransformChanged

• `Protected` **\_isOnTransformChanged**: `boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[_isOnTransformChanged](EShapeBase.md#_isontransformchanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L80)

___

### \_isUploadedUpdated

• `Protected` **\_isUploadedUpdated**: `boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[_isUploadedUpdated](EShapeBase.md#_isuploadedupdated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_isUploadedUpdatedRecursively

• `Protected` **\_isUploadedUpdatedRecursively**: `boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[_isUploadedUpdatedRecursively](EShapeBase.md#_isuploadedupdatedrecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_mode

• `Protected` **\_mode**: [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L35)

___

### \_onTransformChangeLock

• `Protected` **\_onTransformChangeLock**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[_onTransformChangeLock](EShapeBase.md#_ontransformchangelock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L79)

___

### \_points

• `Protected` `Optional` **\_points**: [`EShapePoints`](../interfaces/EShapePoints.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_points](EShapeBase.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L61)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_state](EShapeBase.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L92)

___

### \_uploadedUpdateLock

• `Protected` **\_uploadedUpdateLock**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[_uploadedUpdateLock](EShapeBase.md#_uploadedupdatelock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L81)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[_visible](EShapeBase.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L78)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[action](EShapeBase.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L70)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Inherited from

[EShapeBase](EShapeBase.md).[children](EShapeBase.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### cursor

• `Optional` **cursor**: `string`

#### Inherited from

[EShapeBase](EShapeBase.md).[cursor](EShapeBase.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L71)

___

### data

• **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Overrides

[EShapeBase](EShapeBase.md).[data](EShapeBase.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L32)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[editor](EShapeBase.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L109)

___

### fill

• **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Overrides

[EShapeBase](EShapeBase.md).[fill](EShapeBase.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L28)

___

### id

• **id**: `string`

#### Inherited from

[EShapeBase](EShapeBase.md).[id](EShapeBase.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L52)

___

### imageSrc

• `Optional` **imageSrc**: `string`

#### Inherited from

[EShapeBase](EShapeBase.md).[imageSrc](EShapeBase.md#imagesrc)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L63)

___

### index

• **index**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[index](EShapeBase.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L101)

___

### interactive

• **interactive**: `boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[interactive](EShapeBase.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L72)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[layout](EShapeBase.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[parent](EShapeBase.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L96)

___

### reference

• **reference**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[reference](EShapeBase.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L103)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](../interfaces/EShapeRuntime.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[runtime](EShapeBase.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L106)

___

### selected

• **selected**: `boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[selected](EShapeBase.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Inherited from

[EShapeBase](EShapeBase.md).[shortcut](EShapeBase.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### size

• **size**: [`EShapeGroupSize`](../interfaces/EShapeGroupSize.md)

#### Overrides

[EShapeBase](EShapeBase.md).[size](EShapeBase.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L27)

___

### stroke

• **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Overrides

[EShapeBase](EShapeBase.md).[stroke](EShapeBase.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L29)

___

### tag

• **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`Deprecated`**

in favor of [data](EShapeGroupViewer.md#data)

#### Overrides

[EShapeBase](EShapeBase.md).[tag](EShapeBase.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L31)

___

### text

• **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Overrides

[EShapeBase](EShapeBase.md).[text](EShapeBase.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L33)

___

### texture

• `Optional` **texture**: `Texture`

#### Inherited from

[EShapeBase](EShapeBase.md).[texture](EShapeBase.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L64)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[EShapeBase](EShapeBase.md).[title](EShapeBase.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L74)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[transform](EShapeBase.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L58)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[type](EShapeBase.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L54)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[uploaded](EShapeBase.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L112)

___

### uuid

• **uuid**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[uuid](EShapeBase.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L53)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[WORK_HIT_TEST_DATA](EShapeBase.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L51)

## Accessors

### capability

• `get` **capability**(): [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

[`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

EShapeBase.capability

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:799](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L799)

___

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

EShapeBase.connector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L283)

___

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Overrides

EShapeBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L113)

• `set` **corner**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `number` |

#### Returns

`void`

#### Overrides

EShapeBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L117)

___

### depth

• `get` **depth**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L55)

___

### gradient

• `get` **gradient**(): `undefined` \| [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Returns

`undefined` \| [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Overrides

EShapeBase.gradient

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L121)

• `set` **gradient**(`gradient`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gradient` | `undefined` \| [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md) |

#### Returns

`void`

#### Overrides

EShapeBase.gradient

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L125)

___

### image

• `get` **image**(): `undefined` \| `HTMLImageElement`

#### Returns

`undefined` \| `HTMLImageElement`

#### Overrides

EShapeBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L137)

• `set` **image**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `undefined` \| `HTMLImageElement` |

#### Returns

`void`

#### Overrides

EShapeBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L141)

___

### mode

• `get` **mode**(): [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Returns

[`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L51)

___

### points

• `get` **points**(): `undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Returns

`undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Overrides

EShapeBase.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L145)

• `set` **points**(`points`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md) |

#### Returns

`void`

#### Overrides

EShapeBase.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L149)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Overrides

EShapeBase.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L129)

• `set` **radius**(`radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`

#### Overrides

EShapeBase.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L133)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Inherited from

EShapeBase.root

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:275](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L275)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

EShapeBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L788)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeBase.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L292)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Inherited from

EShapeBase.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:303](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L303)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeBase.worldVisible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:310](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L310)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EShapeGroupViewer`](EShapeGroupViewer.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[addListener](EShapeBase.md#addlistener)

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

[EShapeBase](EShapeBase.md).[addUuid](EShapeBase.md#adduuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L488)

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

[EShapeBase](EShapeBase.md).[allowOnTransformChange](EShapeBase.md#allowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L202)

___

### allowUploadedUpdate

▸ **allowUploadedUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[allowUploadedUpdate](EShapeBase.md#allowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L226)

___

### attach

▸ **attach**(`parent`, `at?`): [`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md) |
| `at?` | `number` |

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[attach](EShapeBase.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L333)

___

### blur

▸ **blur**(): [`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[blur](EShapeBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:817](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L817)

___

### clone

▸ `Abstract` **clone**(): [`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Overrides

[EShapeBase](EShapeBase.md).[clone](EShapeBase.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L153)

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

[EShapeBase](EShapeBase.md).[contains](EShapeBase.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:561](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L561)

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

#### Overrides

[EShapeBase](EShapeBase.md).[containsAbs](EShapeBase.md#containsabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L155)

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

#### Inherited from

[EShapeBase](EShapeBase.md).[containsAbsBBox](EShapeBase.md#containsabsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:640](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L640)

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

[EShapeBase](EShapeBase.md).[containsBBox](EShapeBase.md#containsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:623](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L623)

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

[EShapeBase](EShapeBase.md).[containsChildren](EShapeBase.md#containschildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:600](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L600)

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

[EShapeBase](EShapeBase.md).[containsText](EShapeBase.md#containstext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L579)

___

### copy

▸ **copy**(`source`, `part?`): [`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | [`EShape`](../interfaces/EShape.md) | `undefined` |
| `part` | `number` | `EShapeCopyPart.ALL` |

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[copy](EShapeBase.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:871](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L871)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[destroy](EShapeBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:764](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L764)

___

### detach

▸ **detach**(): [`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[detach](EShapeBase.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L361)

___

### disallowOnTransformChange

▸ **disallowOnTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[disallowOnTransformChange](EShapeBase.md#disallowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L195)

___

### disallowUploadedUpdate

▸ **disallowUploadedUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[disallowUploadedUpdate](EShapeBase.md#disallowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L218)

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

[EShapeBase](EShapeBase.md).[emit](EShapeBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EShapeBase](EShapeBase.md).[eventNames](EShapeBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[focus](EShapeBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:812](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L812)

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

[EShapeBase](EShapeBase.md).[getBounds](EShapeBase.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L670)

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

[EShapeBase](EShapeBase.md).[getBoundsInternal](EShapeBase.md#getboundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:685](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L685)

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

[EShapeBase](EShapeBase.md).[getBoundsLocal](EShapeBase.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:700](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L700)

___

### getBoundsSize

▸ `Protected` **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Overrides

[EShapeBase](EShapeBase.md).[getBoundsSize](EShapeBase.md#getboundssize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L99)

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

[EShapeBase](EShapeBase.md).[getBounds_](EShapeBase.md#getbounds_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L719)

___

### getCapability

▸ **getCapability**(): `undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

`undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[getCapability](EShapeBase.md#getcapability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:808](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L808)

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

[EShapeBase](EShapeBase.md).[getHitTestSize](EShapeBase.md#gethittestsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:529](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L529)

___

### getShapeScale

▸ `Protected` **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeBase](EShapeBase.md).[getShapeScale](EShapeBase.md#getshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:505](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L505)

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

[EShapeBase](EShapeBase.md).[getStrokeWidthScale](EShapeBase.md#getstrokewidthscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:513](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L513)

___

### isGroupSizeFittable

▸ `Protected` **isGroupSizeFittable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L72)

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

[EShapeBase](EShapeBase.md).[listenerCount](EShapeBase.md#listenercount)

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

[EShapeBase](EShapeBase.md).[listeners](EShapeBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newData

▸ `Protected` **newData**(): [`EShapeData`](../interfaces/EShapeData.md)

#### Returns

[`EShapeData`](../interfaces/EShapeData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L76)

___

### newGroupFill

▸ `Protected` **newGroupFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L80)

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L59)

___

### newGroupStroke

▸ `Protected` **newGroupStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L84)

___

### newGroupText

▸ `Protected` **newGroupText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L88)

___

### newTransform

▸ `Protected` **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[newTransform](EShapeBase.md#newtransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L144)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`EShapeGroupViewer`](EShapeGroupViewer.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[off](EShapeBase.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EShapeGroupViewer`](EShapeGroupViewer.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

`this`.

#### Inherited from

[EShapeBase](EShapeBase.md).[on](EShapeBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onAttach](EShapeBase.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:348](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L348)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Overrides

[EShapeBase](EShapeBase.md).[onChildTransformChange](EShapeBase.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L108)

___

### onDetach

▸ **onDetach**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onDetach](EShapeBase.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L377)

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

[EShapeBase](EShapeBase.md).[onKeyDown](EShapeBase.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:831](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L831)

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

[EShapeBase](EShapeBase.md).[onKeyUp](EShapeBase.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:839](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L839)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onParentTransformChange](EShapeBase.md#onparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L172)

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

[EShapeBase](EShapeBase.md).[onRender](EShapeBase.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:855](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L855)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onSizeChange](EShapeBase.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L148)

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

[EShapeBase](EShapeBase.md).[onStateChange](EShapeBase.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:773](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L773)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onTransformChange](EShapeBase.md#ontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L167)

___

### onTransformChange\_

▸ `Protected` **onTransformChange_**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onTransformChange_](EShapeBase.md#ontransformchange_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L184)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShapeGroupViewer`](EShapeGroupViewer.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

`this`.

#### Inherited from

[EShapeBase](EShapeBase.md).[once](EShapeBase.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EShapeGroupViewer`](EShapeGroupViewer.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

`this`.

#### Inherited from

[EShapeBase](EShapeBase.md).[removeAllListeners](EShapeBase.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`EShapeGroupViewer`](EShapeGroupViewer.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

`this`.

#### Inherited from

[EShapeBase](EShapeBase.md).[removeListener](EShapeBase.md#removelistener)

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

[EShapeBase](EShapeBase.md).[select](EShapeBase.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:644](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L644)

___

### serialize

▸ **serialize**(`manager`): [`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

[`DDiagramSerializedItem`](../interfaces/DDiagramSerializedItem.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[serialize](EShapeBase.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:434](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L434)

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

[EShapeBase](EShapeBase.md).[serializeChildren](EShapeBase.md#serializechildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L403)

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

[EShapeBase](EShapeBase.md).[serializeGradient](EShapeBase.md#serializegradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L418)

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

[EShapeBase](EShapeBase.md).[serializeImage](EShapeBase.md#serializeimage)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:413](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L413)

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

[EShapeBase](EShapeBase.md).[serializeState](EShapeBase.md#serializestate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:429](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L429)

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

[EShapeBase](EShapeBase.md).[setFocused](EShapeBase.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:822](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L822)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[toDirty](EShapeBase.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:325](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L325)

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

[EShapeBase](EShapeBase.md).[toGlobal](EShapeBase.md#toglobal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L649)

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

[EShapeBase](EShapeBase.md).[toHitTestData](EShapeBase.md#tohittestdata)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L536)

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

[EShapeBase](EShapeBase.md).[toLocal](EShapeBase.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:658](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L658)

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

[EShapeBase](EShapeBase.md).[update](EShapeBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:848](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L848)

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

[EShapeBase](EShapeBase.md).[updateRecursively](EShapeBase.md#updaterecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:862](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L862)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[updateTransform](EShapeBase.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L390)

___

### updateUploaded

▸ **updateUploaded**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[updateUploaded](EShapeBase.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L252)

___

### updateUploadedRecursively

▸ **updateUploadedRecursively**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[updateUploadedRecursively](EShapeBase.md#updateuploadedrecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L240)

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

[EShapeBase](EShapeBase.md).[updateUuid](EShapeBase.md#updateuuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L496)
