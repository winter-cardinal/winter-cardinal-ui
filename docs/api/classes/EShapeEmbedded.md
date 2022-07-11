[Winter Cardinal UI - v0.199.0](../index.md) / EShapeEmbedded

# Class: EShapeEmbedded

## Hierarchy

- [`EShapeGroupViewer`](EShapeGroupViewer.md)

  ↳ **`EShapeEmbedded`**

## Table of contents

### Constructors

- [constructor](EShapeEmbedded.md#constructor)

### Properties

- [\_bounds](EShapeEmbedded.md#_bounds)
- [\_boundsInternal](EShapeEmbedded.md#_boundsinternal)
- [\_boundsInternalTransformId](EShapeEmbedded.md#_boundsinternaltransformid)
- [\_boundsLocal](EShapeEmbedded.md#_boundslocal)
- [\_boundsLocalTransformId](EShapeEmbedded.md#_boundslocaltransformid)
- [\_boundsTransformId](EShapeEmbedded.md#_boundstransformid)
- [\_connector](EShapeEmbedded.md#_connector)
- [\_image](EShapeEmbedded.md#_image)
- [\_isEditMode](EShapeEmbedded.md#_iseditmode)
- [\_isOnTransformChanged](EShapeEmbedded.md#_isontransformchanged)
- [\_isUploadedUpdated](EShapeEmbedded.md#_isuploadedupdated)
- [\_isUploadedUpdatedRecursively](EShapeEmbedded.md#_isuploadedupdatedrecursively)
- [\_name](EShapeEmbedded.md#_name)
- [\_onTransformChangeLock](EShapeEmbedded.md#_ontransformchangelock)
- [\_points](EShapeEmbedded.md#_points)
- [\_state](EShapeEmbedded.md#_state)
- [\_uploadedUpdateLock](EShapeEmbedded.md#_uploadedupdatelock)
- [\_visible](EShapeEmbedded.md#_visible)
- [action](EShapeEmbedded.md#action)
- [children](EShapeEmbedded.md#children)
- [data](EShapeEmbedded.md#data)
- [editor](EShapeEmbedded.md#editor)
- [fill](EShapeEmbedded.md#fill)
- [id](EShapeEmbedded.md#id)
- [imageSrc](EShapeEmbedded.md#imagesrc)
- [index](EShapeEmbedded.md#index)
- [interactive](EShapeEmbedded.md#interactive)
- [layout](EShapeEmbedded.md#layout)
- [parent](EShapeEmbedded.md#parent)
- [reference](EShapeEmbedded.md#reference)
- [runtime](EShapeEmbedded.md#runtime)
- [selected](EShapeEmbedded.md#selected)
- [shortcut](EShapeEmbedded.md#shortcut)
- [size](EShapeEmbedded.md#size)
- [stroke](EShapeEmbedded.md#stroke)
- [tag](EShapeEmbedded.md#tag)
- [text](EShapeEmbedded.md#text)
- [texture](EShapeEmbedded.md#texture)
- [title](EShapeEmbedded.md#title)
- [transform](EShapeEmbedded.md#transform)
- [type](EShapeEmbedded.md#type)
- [uploaded](EShapeEmbedded.md#uploaded)
- [uuid](EShapeEmbedded.md#uuid)
- [WORK\_HIT\_TEST\_DATA](EShapeEmbedded.md#work_hit_test_data)

### Accessors

- [connector](EShapeEmbedded.md#connector)
- [corner](EShapeEmbedded.md#corner)
- [cursor](EShapeEmbedded.md#cursor)
- [gradient](EShapeEmbedded.md#gradient)
- [image](EShapeEmbedded.md#image)
- [isEditMode](EShapeEmbedded.md#iseditmode)
- [name](EShapeEmbedded.md#name)
- [points](EShapeEmbedded.md#points)
- [radius](EShapeEmbedded.md#radius)
- [root](EShapeEmbedded.md#root)
- [state](EShapeEmbedded.md#state)
- [visible](EShapeEmbedded.md#visible)
- [worldVisible](EShapeEmbedded.md#worldvisible)

### Methods

- [addListener](EShapeEmbedded.md#addlistener)
- [addUuid](EShapeEmbedded.md#adduuid)
- [allowOnTransformChange](EShapeEmbedded.md#allowontransformchange)
- [allowUploadedUpdate](EShapeEmbedded.md#allowuploadedupdate)
- [attach](EShapeEmbedded.md#attach)
- [blur](EShapeEmbedded.md#blur)
- [clone](EShapeEmbedded.md#clone)
- [contains](EShapeEmbedded.md#contains)
- [containsAbs](EShapeEmbedded.md#containsabs)
- [containsAbsBBox](EShapeEmbedded.md#containsabsbbox)
- [containsBBox](EShapeEmbedded.md#containsbbox)
- [containsChildren](EShapeEmbedded.md#containschildren)
- [containsText](EShapeEmbedded.md#containstext)
- [copy](EShapeEmbedded.md#copy)
- [destroy](EShapeEmbedded.md#destroy)
- [detach](EShapeEmbedded.md#detach)
- [disallowOnTransformChange](EShapeEmbedded.md#disallowontransformchange)
- [disallowUploadedUpdate](EShapeEmbedded.md#disallowuploadedupdate)
- [emit](EShapeEmbedded.md#emit)
- [eventNames](EShapeEmbedded.md#eventnames)
- [focus](EShapeEmbedded.md#focus)
- [getBounds](EShapeEmbedded.md#getbounds)
- [getBoundsInternal](EShapeEmbedded.md#getboundsinternal)
- [getBoundsLocal](EShapeEmbedded.md#getboundslocal)
- [getBoundsSize](EShapeEmbedded.md#getboundssize)
- [getBounds\_](EShapeEmbedded.md#getbounds_)
- [getHitTestSize](EShapeEmbedded.md#gethittestsize)
- [getShapeScale](EShapeEmbedded.md#getshapescale)
- [getStrokeWidthScale](EShapeEmbedded.md#getstrokewidthscale)
- [isGroupSizeFittable](EShapeEmbedded.md#isgroupsizefittable)
- [listenerCount](EShapeEmbedded.md#listenercount)
- [listeners](EShapeEmbedded.md#listeners)
- [newClone](EShapeEmbedded.md#newclone)
- [newData](EShapeEmbedded.md#newdata)
- [newGroupFill](EShapeEmbedded.md#newgroupfill)
- [newGroupSize](EShapeEmbedded.md#newgroupsize)
- [newGroupStroke](EShapeEmbedded.md#newgroupstroke)
- [newGroupText](EShapeEmbedded.md#newgrouptext)
- [newTransform](EShapeEmbedded.md#newtransform)
- [off](EShapeEmbedded.md#off)
- [on](EShapeEmbedded.md#on)
- [onAttach](EShapeEmbedded.md#onattach)
- [onChildTransformChange](EShapeEmbedded.md#onchildtransformchange)
- [onDetach](EShapeEmbedded.md#ondetach)
- [onKeyDown](EShapeEmbedded.md#onkeydown)
- [onKeyUp](EShapeEmbedded.md#onkeyup)
- [onParentTransformChange](EShapeEmbedded.md#onparenttransformchange)
- [onRender](EShapeEmbedded.md#onrender)
- [onSizeChange](EShapeEmbedded.md#onsizechange)
- [onStateChange](EShapeEmbedded.md#onstatechange)
- [onTransformChange](EShapeEmbedded.md#ontransformchange)
- [onTransformChange\_](EShapeEmbedded.md#ontransformchange_)
- [once](EShapeEmbedded.md#once)
- [removeAllListeners](EShapeEmbedded.md#removealllisteners)
- [removeListener](EShapeEmbedded.md#removelistener)
- [select](EShapeEmbedded.md#select)
- [serialize](EShapeEmbedded.md#serialize)
- [serializeChildren](EShapeEmbedded.md#serializechildren)
- [serializeGradient](EShapeEmbedded.md#serializegradient)
- [serializeImage](EShapeEmbedded.md#serializeimage)
- [serializeState](EShapeEmbedded.md#serializestate)
- [setFocused](EShapeEmbedded.md#setfocused)
- [toDirty](EShapeEmbedded.md#todirty)
- [toGlobal](EShapeEmbedded.md#toglobal)
- [toHitTestData](EShapeEmbedded.md#tohittestdata)
- [toLocal](EShapeEmbedded.md#tolocal)
- [update](EShapeEmbedded.md#update)
- [updateRecursively](EShapeEmbedded.md#updaterecursively)
- [updateTransform](EShapeEmbedded.md#updatetransform)
- [updateUploaded](EShapeEmbedded.md#updateuploaded)
- [updateUploadedRecursively](EShapeEmbedded.md#updateuploadedrecursively)
- [updateUuid](EShapeEmbedded.md#updateuuid)

## Constructors

### constructor

• **new EShapeEmbedded**(`name`, `isEditMode`, `type?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `isEditMode` | `boolean` | `undefined` |
| `type` | `number` | `EShapeType.EMBEDDED` |

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[constructor](EShapeGroupViewer.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L11)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_bounds](EShapeGroupViewer.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsInternal](EShapeGroupViewer.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsInternalTransformId](EShapeGroupViewer.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L85)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsLocal](EShapeGroupViewer.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsLocalTransformId](EShapeGroupViewer.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsTransformId](EShapeGroupViewer.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_connector](EShapeGroupViewer.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### \_image

• `Protected` `Optional` **\_image**: `HTMLImageElement`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_image](EShapeGroupViewer.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L59)

___

### \_isEditMode

• `Protected` **\_isEditMode**: `boolean`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_isEditMode](EShapeGroupViewer.md#_iseditmode)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L34)

___

### \_isOnTransformChanged

• `Protected` **\_isOnTransformChanged**: `boolean`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_isOnTransformChanged](EShapeGroupViewer.md#_isontransformchanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L77)

___

### \_isUploadedUpdated

• `Protected` **\_isUploadedUpdated**: `boolean`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_isUploadedUpdated](EShapeGroupViewer.md#_isuploadedupdated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L79)

___

### \_isUploadedUpdatedRecursively

• `Protected` **\_isUploadedUpdatedRecursively**: `boolean`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_isUploadedUpdatedRecursively](EShapeGroupViewer.md#_isuploadedupdatedrecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L80)

___

### \_name

• `Protected` **\_name**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L9)

___

### \_onTransformChangeLock

• `Protected` **\_onTransformChangeLock**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_onTransformChangeLock](EShapeGroupViewer.md#_ontransformchangelock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L76)

___

### \_points

• `Protected` `Optional` **\_points**: [`EShapePoints`](../interfaces/EShapePoints.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_points](EShapeGroupViewer.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L58)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_state](EShapeGroupViewer.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_uploadedUpdateLock

• `Protected` **\_uploadedUpdateLock**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_uploadedUpdateLock](EShapeGroupViewer.md#_uploadedupdatelock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L78)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_visible](EShapeGroupViewer.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[action](EShapeGroupViewer.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L67)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[children](EShapeGroupViewer.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### data

• **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[data](EShapeGroupViewer.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L31)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[editor](EShapeGroupViewer.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L105)

___

### fill

• **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[fill](EShapeGroupViewer.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L27)

___

### id

• **id**: `string`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[id](EShapeGroupViewer.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L49)

___

### imageSrc

• `Optional` **imageSrc**: `string`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[imageSrc](EShapeGroupViewer.md#imagesrc)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L60)

___

### index

• **index**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[index](EShapeGroupViewer.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### interactive

• **interactive**: `boolean`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[interactive](EShapeGroupViewer.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L69)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[layout](EShapeGroupViewer.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[parent](EShapeGroupViewer.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L92)

___

### reference

• **reference**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[reference](EShapeGroupViewer.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](EShapeRuntime.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[runtime](EShapeGroupViewer.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### selected

• **selected**: `boolean`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[selected](EShapeGroupViewer.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[shortcut](EShapeGroupViewer.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L70)

___

### size

• **size**: [`EShapeGroupSize`](../interfaces/EShapeGroupSize.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[size](EShapeGroupViewer.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L26)

___

### stroke

• **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[stroke](EShapeGroupViewer.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L28)

___

### tag

• **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`deprecated`** in favor of [data](EShapeEmbedded.md#data)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[tag](EShapeGroupViewer.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L30)

___

### text

• **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[text](EShapeGroupViewer.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L32)

___

### texture

• `Optional` **texture**: `Texture`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[texture](EShapeGroupViewer.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L61)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[title](EShapeGroupViewer.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L71)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[transform](EShapeGroupViewer.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[type](EShapeGroupViewer.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L51)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[uploaded](EShapeGroupViewer.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L108)

___

### uuid

• **uuid**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[uuid](EShapeGroupViewer.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L50)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[WORK_HIT_TEST_DATA](EShapeGroupViewer.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L48)

## Accessors

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

EShapeGroupViewer.connector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L267)

___

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Inherited from

EShapeGroupViewer.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L96)

• `set` **corner**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `number` |

#### Returns

`void`

#### Inherited from

EShapeGroupViewer.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L100)

___

### cursor

• `get` **cursor**(): `string`

#### Returns

`string`

#### Inherited from

EShapeGroupViewer.cursor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L104)

• `set` **cursor**(`cursor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |

#### Returns

`void`

#### Inherited from

EShapeGroupViewer.cursor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L108)

___

### gradient

• `get` **gradient**(): `undefined` \| [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Returns

`undefined` \| [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Inherited from

EShapeGroupViewer.gradient

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L112)

• `set` **gradient**(`gradient`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gradient` | `undefined` \| [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md) |

#### Returns

`void`

#### Inherited from

EShapeGroupViewer.gradient

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L116)

___

### image

• `get` **image**(): `undefined` \| `HTMLImageElement`

#### Returns

`undefined` \| `HTMLImageElement`

#### Inherited from

EShapeGroupViewer.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L128)

• `set` **image**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `undefined` \| `HTMLImageElement` |

#### Returns

`void`

#### Inherited from

EShapeGroupViewer.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L132)

___

### isEditMode

• `get` **isEditMode**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeGroupViewer.isEditMode

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L48)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L16)

___

### points

• `get` **points**(): `undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Returns

`undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Inherited from

EShapeGroupViewer.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L136)

• `set` **points**(`points`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md) |

#### Returns

`void`

#### Inherited from

EShapeGroupViewer.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L140)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Inherited from

EShapeGroupViewer.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L120)

• `set` **radius**(`radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`

#### Inherited from

EShapeGroupViewer.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L124)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Inherited from

EShapeGroupViewer.root

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L259)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

EShapeGroupViewer.state

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L750)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeGroupViewer.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L276)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Inherited from

EShapeGroupViewer.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L287)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeGroupViewer.worldVisible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L294)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EShapeEmbedded`](EShapeEmbedded.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

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

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[addUuid](EShapeGroupViewer.md#adduuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L64)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[allowOnTransformChange](EShapeGroupViewer.md#allowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L186)

___

### allowUploadedUpdate

▸ **allowUploadedUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[allowUploadedUpdate](EShapeGroupViewer.md#allowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L210)

___

### attach

▸ **attach**(`parent`, `at?`): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md) |
| `at?` | `number` |

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[attach](EShapeGroupViewer.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:314](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L314)

___

### blur

▸ **blur**(): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[blur](EShapeGroupViewer.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:766](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L766)

___

### clone

▸ **clone**(): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[clone](EShapeGroupViewer.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L28)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[contains](EShapeGroupViewer.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:528](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L528)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[containsAbs](EShapeGroupViewer.md#containsabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L146)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[containsAbsBBox](EShapeGroupViewer.md#containsabsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:605](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L605)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[containsBBox](EShapeGroupViewer.md#containsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L588)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L565)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:546](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L546)

___

### copy

▸ **copy**(`source`, `part?`): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | [`EShape`](../interfaces/EShape.md) | `undefined` |
| `part` | `number` | `EShapeCopyPart.ALL` |

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[copy](EShapeGroupViewer.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:820](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L820)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[destroy](EShapeGroupViewer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:729](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L729)

___

### detach

▸ **detach**(): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[detach](EShapeGroupViewer.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L342)

___

### disallowOnTransformChange

▸ **disallowOnTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[disallowOnTransformChange](EShapeGroupViewer.md#disallowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L179)

___

### disallowUploadedUpdate

▸ **disallowUploadedUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[disallowUploadedUpdate](EShapeGroupViewer.md#disallowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L202)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[emit](EShapeGroupViewer.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[eventNames](EShapeGroupViewer.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[focus](EShapeGroupViewer.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:761](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L761)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[getBounds](EShapeGroupViewer.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L635)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[getBoundsInternal](EShapeGroupViewer.md#getboundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L650)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[getBoundsLocal](EShapeGroupViewer.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:665](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L665)

___

### getBoundsSize

▸ `Protected` **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getBoundsSize](EShapeGroupViewer.md#getboundssize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L82)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:684](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L684)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L496)

___

### getShapeScale

▸ `Protected` **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getShapeScale](EShapeGroupViewer.md#getshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L472)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:480](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L480)

___

### isGroupSizeFittable

▸ `Protected` **isGroupSizeFittable**(): `boolean`

#### Returns

`boolean`

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[isGroupSizeFittable](EShapeGroupViewer.md#isgroupsizefittable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L24)

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

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[listeners](EShapeGroupViewer.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newClone

▸ `Protected` **newClone**(): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L41)

___

### newData

▸ `Protected` **newData**(): [`EShapeData`](../interfaces/EShapeData.md)

#### Returns

[`EShapeData`](../interfaces/EShapeData.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[newData](EShapeGroupViewer.md#newdata)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L66)

___

### newGroupFill

▸ `Protected` **newGroupFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[newGroupFill](EShapeGroupViewer.md#newgroupfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L70)

___

### newGroupSize

▸ `Protected` **newGroupSize**(`isEditMode`): [`EShapeGroupSize`](../interfaces/EShapeGroupSize.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `isEditMode` | `boolean` |

#### Returns

[`EShapeGroupSize`](../interfaces/EShapeGroupSize.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[newGroupSize](EShapeGroupViewer.md#newgroupsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L52)

___

### newGroupStroke

▸ `Protected` **newGroupStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[newGroupStroke](EShapeGroupViewer.md#newgroupstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L74)

___

### newGroupText

▸ `Protected` **newGroupText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[newGroupText](EShapeGroupViewer.md#newgrouptext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L20)

___

### newTransform

▸ `Protected` **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[newTransform](EShapeGroupViewer.md#newtransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L140)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`EShapeEmbedded`](EShapeEmbedded.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[off](EShapeGroupViewer.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EShapeEmbedded`](EShapeEmbedded.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

`this`.

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[on](EShapeGroupViewer.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24033

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onAttach](EShapeGroupViewer.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:330](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L330)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onChildTransformChange](EShapeGroupViewer.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L91)

___

### onDetach

▸ **onDetach**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onDetach](EShapeGroupViewer.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:359](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L359)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:780](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L780)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L788)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onParentTransformChange](EShapeGroupViewer.md#onparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L159)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[onRender](EShapeGroupViewer.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L804)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onSizeChange](EShapeGroupViewer.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L144)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:738](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L738)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onTransformChange](EShapeGroupViewer.md#ontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L154)

___

### onTransformChange\_

▸ `Protected` **onTransformChange_**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onTransformChange_](EShapeGroupViewer.md#ontransformchange_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L168)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShapeEmbedded`](EShapeEmbedded.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | - |

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

`this`.

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[once](EShapeGroupViewer.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EShapeEmbedded`](EShapeEmbedded.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

`this`.

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[removeAllListeners](EShapeGroupViewer.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`EShapeEmbedded`](EShapeEmbedded.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

`this`.

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:609](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L609)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[serialize](EShapeGroupViewer.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L58)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L46)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L54)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L50)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:410](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L410)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L771)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[toDirty](EShapeGroupViewer.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:309](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L309)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[toGlobal](EShapeGroupViewer.md#toglobal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:614](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L614)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:503](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L503)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[toLocal](EShapeGroupViewer.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:623](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L623)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[update](EShapeGroupViewer.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L797)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:811](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L811)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[updateTransform](EShapeGroupViewer.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:371](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L371)

___

### updateUploaded

▸ **updateUploaded**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[updateUploaded](EShapeGroupViewer.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L236)

___

### updateUploadedRecursively

▸ **updateUploadedRecursively**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[updateUploadedRecursively](EShapeGroupViewer.md#updateuploadedrecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L224)

___

### updateUuid

▸ **updateUuid**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[updateUuid](EShapeGroupViewer.md#updateuuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L68)
