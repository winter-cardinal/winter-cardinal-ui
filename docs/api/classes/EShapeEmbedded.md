[Winter Cardinal UI - v0.374.0](../index.md) / EShapeEmbedded

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
- [\_capability](EShapeEmbedded.md#_capability)
- [\_connector](EShapeEmbedded.md#_connector)
- [\_depth](EShapeEmbedded.md#_depth)
- [\_edges](EShapeEmbedded.md#_edges)
- [\_image](EShapeEmbedded.md#_image)
- [\_lockTransform](EShapeEmbedded.md#_locktransform)
- [\_lockTransformParent](EShapeEmbedded.md#_locktransformparent)
- [\_lockUploaded](EShapeEmbedded.md#_lockuploaded)
- [\_mode](EShapeEmbedded.md#_mode)
- [\_name](EShapeEmbedded.md#_name)
- [\_points](EShapeEmbedded.md#_points)
- [\_state](EShapeEmbedded.md#_state)
- [\_visible](EShapeEmbedded.md#_visible)
- [action](EShapeEmbedded.md#action)
- [children](EShapeEmbedded.md#children)
- [cursor](EShapeEmbedded.md#cursor)
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

- [capability](EShapeEmbedded.md#capability)
- [connector](EShapeEmbedded.md#connector)
- [corner](EShapeEmbedded.md#corner)
- [depth](EShapeEmbedded.md#depth)
- [edges](EShapeEmbedded.md#edges)
- [gradient](EShapeEmbedded.md#gradient)
- [image](EShapeEmbedded.md#image)
- [mode](EShapeEmbedded.md#mode)
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
- [emit](EShapeEmbedded.md#emit)
- [eventNames](EShapeEmbedded.md#eventnames)
- [focus](EShapeEmbedded.md#focus)
- [getBounds](EShapeEmbedded.md#getbounds)
- [getBoundsInternal](EShapeEmbedded.md#getboundsinternal)
- [getBoundsLocal](EShapeEmbedded.md#getboundslocal)
- [getBoundsSize](EShapeEmbedded.md#getboundssize)
- [getBounds\_](EShapeEmbedded.md#getbounds_)
- [getCapability](EShapeEmbedded.md#getcapability)
- [getHitTestSize](EShapeEmbedded.md#gethittestsize)
- [getShapeScale](EShapeEmbedded.md#getshapescale)
- [getStrokeWidthScale](EShapeEmbedded.md#getstrokewidthscale)
- [isGroupSizeFittable](EShapeEmbedded.md#isgroupsizefittable)
- [listenerCount](EShapeEmbedded.md#listenercount)
- [listeners](EShapeEmbedded.md#listeners)
- [lock](EShapeEmbedded.md#lock)
- [newClone](EShapeEmbedded.md#newclone)
- [newData](EShapeEmbedded.md#newdata)
- [newEdges](EShapeEmbedded.md#newedges)
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
- [toEdgeNormal](EShapeEmbedded.md#toedgenormal)
- [toEdgePosition](EShapeEmbedded.md#toedgeposition)
- [toGlobal](EShapeEmbedded.md#toglobal)
- [toHitTestData](EShapeEmbedded.md#tohittestdata)
- [toLocal](EShapeEmbedded.md#tolocal)
- [unlock](EShapeEmbedded.md#unlock)
- [update](EShapeEmbedded.md#update)
- [updateRecursively](EShapeEmbedded.md#updaterecursively)
- [updateTransform](EShapeEmbedded.md#updatetransform)
- [updateUploaded](EShapeEmbedded.md#updateuploaded)
- [updateUuid](EShapeEmbedded.md#updateuuid)

## Constructors

### constructor

• **new EShapeEmbedded**(`name`, `mode`, `depth`, `type?`): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `mode` | [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1) | `undefined` |
| `depth` | `number` | `undefined` |
| `type` | `number` | `EShapeType.EMBEDDED` |

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[constructor](EShapeGroupViewer.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L18)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_bounds](EShapeGroupViewer.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsInternal](EShapeGroupViewer.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L88)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsInternalTransformId](EShapeGroupViewer.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsLocal](EShapeGroupViewer.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L90)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsLocalTransformId](EShapeGroupViewer.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L91)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_boundsTransformId](EShapeGroupViewer.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_capability

• `Protected` `Optional` **\_capability**: [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_capability](EShapeGroupViewer.md#_capability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_connector](EShapeGroupViewer.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L78)

___

### \_depth

• `Protected` **\_depth**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_depth](EShapeGroupViewer.md#_depth)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L36)

___

### \_edges

• `Protected` `Optional` **\_edges**: `Map`\<`string`, [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L16)

___

### \_image

• `Protected` `Optional` **\_image**: `HTMLImageElement`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_image](EShapeGroupViewer.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L64)

___

### \_lockTransform

• `Protected` **\_lockTransform**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_lockTransform](EShapeGroupViewer.md#_locktransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_lockTransformParent

• `Protected` **\_lockTransformParent**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_lockTransformParent](EShapeGroupViewer.md#_locktransformparent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_lockUploaded

• `Protected` **\_lockUploaded**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_lockUploaded](EShapeGroupViewer.md#_lockuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_mode

• `Protected` **\_mode**: [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_mode](EShapeGroupViewer.md#_mode)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L35)

___

### \_name

• `Protected` **\_name**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L15)

___

### \_points

• `Protected` `Optional` **\_points**: [`EShapePoints`](../interfaces/EShapePoints.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_points](EShapeGroupViewer.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L63)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_state](EShapeGroupViewer.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[_visible](EShapeGroupViewer.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L80)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[action](EShapeGroupViewer.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L72)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[children](EShapeGroupViewer.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### cursor

• `Optional` **cursor**: `string`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[cursor](EShapeGroupViewer.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### data

• **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[data](EShapeGroupViewer.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L32)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[editor](EShapeGroupViewer.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L110)

___

### fill

• **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[fill](EShapeGroupViewer.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L28)

___

### id

• **id**: `string`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[id](EShapeGroupViewer.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L54)

___

### imageSrc

• `Optional` **imageSrc**: `string`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[imageSrc](EShapeGroupViewer.md#imagesrc)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L65)

___

### index

• **index**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[index](EShapeGroupViewer.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### interactive

• **interactive**: `boolean`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[interactive](EShapeGroupViewer.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L74)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[layout](EShapeGroupViewer.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[parent](EShapeGroupViewer.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### reference

• **reference**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[reference](EShapeGroupViewer.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L104)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](../interfaces/EShapeRuntime.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[runtime](EShapeGroupViewer.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L107)

___

### selected

• **selected**: `boolean`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[selected](EShapeGroupViewer.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L103)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[shortcut](EShapeGroupViewer.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### size

• **size**: [`EShapeGroupSize`](../interfaces/EShapeGroupSize.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[size](EShapeGroupViewer.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L27)

___

### stroke

• **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[stroke](EShapeGroupViewer.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L29)

___

### tag

• **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`Deprecated`**

in favor of [data](EShapeEmbeddedLayer.md#data)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[tag](EShapeGroupViewer.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L31)

___

### text

• **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[text](EShapeGroupViewer.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L33)

___

### texture

• `Optional` **texture**: `Texture`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[texture](EShapeGroupViewer.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L66)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[title](EShapeGroupViewer.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L76)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[transform](EShapeGroupViewer.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L60)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[type](EShapeGroupViewer.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L56)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[uploaded](EShapeGroupViewer.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L113)

___

### uuid

• **uuid**: `number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[uuid](EShapeGroupViewer.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[WORK_HIT_TEST_DATA](EShapeGroupViewer.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L53)

## Accessors

### capability

• `get` **capability**(): [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

[`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

EShapeGroupViewer.capability

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:793](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L793)

___

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

EShapeGroupViewer.connector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:274](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L274)

___

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Inherited from

EShapeGroupViewer.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L113)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L117)

___

### depth

• `get` **depth**(): `number`

#### Returns

`number`

#### Inherited from

EShapeGroupViewer.depth

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L55)

___

### edges

• `get` **edges**(): `Map`\<`string`, [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)\>

#### Returns

`Map`\<`string`, [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L33)

___

### gradient

• `get` **gradient**(): `undefined` \| [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Returns

`undefined` \| [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Inherited from

EShapeGroupViewer.gradient

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L121)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L125)

___

### image

• `get` **image**(): `undefined` \| `HTMLImageElement`

#### Returns

`undefined` \| `HTMLImageElement`

#### Inherited from

EShapeGroupViewer.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L137)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L141)

___

### mode

• `get` **mode**(): [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Returns

[`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Inherited from

EShapeGroupViewer.mode

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L51)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L29)

___

### points

• `get` **points**(): `undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Returns

`undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Inherited from

EShapeGroupViewer.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L145)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L149)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Inherited from

EShapeGroupViewer.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L129)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L133)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Inherited from

EShapeGroupViewer.root

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:266](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L266)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

EShapeGroupViewer.state

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:782](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L782)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeGroupViewer.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L283)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L294)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeGroupViewer.worldVisible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L301)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L150)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:324](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L324)

___

### blur

▸ **blur**(): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[blur](EShapeGroupViewer.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:811](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L811)

___

### clone

▸ **clone**(): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[clone](EShapeGroupViewer.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L114)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L552)

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

[EShapeGroupViewer](EShapeGroupViewer.md).[containsAbsBBox](EShapeGroupViewer.md#containsabsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:631](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L631)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:614](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L614)

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

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[containsChildren](EShapeGroupViewer.md#containschildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:591](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L591)

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

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[containsText](EShapeGroupViewer.md#containstext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:570](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L570)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:865](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L865)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[destroy](EShapeGroupViewer.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:758](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L758)

___

### detach

▸ **detach**(`exceptions?`): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](../interfaces/EShape.md)\> |

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[detach](EShapeGroupViewer.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L352)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:806](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L806)

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

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getBounds](EShapeGroupViewer.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:661](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L661)

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

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getBoundsInternal](EShapeGroupViewer.md#getboundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:677](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L677)

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

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getBoundsLocal](EShapeGroupViewer.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:693](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L693)

___

### getBoundsSize

▸ **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getBoundsSize](EShapeGroupViewer.md#getboundssize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L99)

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

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getBounds_](EShapeGroupViewer.md#getbounds_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:713](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L713)

___

### getCapability

▸ **getCapability**(): `undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

`undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getCapability](EShapeGroupViewer.md#getcapability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:802](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L802)

___

### getHitTestSize

▸ **getHitTestSize**(`result`): [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md) |

#### Returns

[`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getHitTestSize](EShapeGroupViewer.md#gethittestsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L520)

___

### getShapeScale

▸ **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getShapeScale](EShapeGroupViewer.md#getshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L496)

___

### getStrokeWidthScale

▸ **getStrokeWidthScale**(`style`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `number` |

#### Returns

`number`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[getStrokeWidthScale](EShapeGroupViewer.md#getstrokewidthscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L504)

___

### isGroupSizeFittable

▸ **isGroupSizeFittable**(): `boolean`

#### Returns

`boolean`

#### Overrides

[EShapeGroupViewer](EShapeGroupViewer.md).[isGroupSizeFittable](EShapeGroupViewer.md#isgroupsizefittable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L97)

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

### lock

▸ **lock**(`part`): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `part` | `number` |

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[lock](EShapeGroupViewer.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L201)

___

### newClone

▸ **newClone**(): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L127)

___

### newData

▸ **newData**(): [`EShapeData`](../interfaces/EShapeData.md)

#### Returns

[`EShapeData`](../interfaces/EShapeData.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[newData](EShapeGroupViewer.md#newdata)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L76)

___

### newEdges

▸ **newEdges**(): `Map`\<`string`, [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)\>

#### Returns

`Map`\<`string`, [`EShapeAcceptorEdge`](../interfaces/EShapeAcceptorEdge.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L37)

___

### newGroupFill

▸ **newGroupFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[newGroupFill](EShapeGroupViewer.md#newgroupfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L80)

___

### newGroupSize

▸ **newGroupSize**(`mode`, `depth`): [`EShapeGroupSize`](../interfaces/EShapeGroupSize.md)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L101)

___

### newGroupStroke

▸ **newGroupStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[newGroupStroke](EShapeGroupViewer.md#newgroupstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L84)

___

### newGroupText

▸ **newGroupText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[newGroupText](EShapeGroupViewer.md#newgrouptext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L88)

___

### newTransform

▸ **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[newTransform](EShapeGroupViewer.md#newtransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L144)

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
| `context?` | `any` | The context to invoke the listener with. |

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L339)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onChildTransformChange](EShapeGroupViewer.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L108)

___

### onDetach

▸ **onDetach**(`exceptions?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](../interfaces/EShape.md)\> |

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onDetach](EShapeGroupViewer.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:368](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L368)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:825](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L825)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:833](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L833)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onParentTransformChange](EShapeGroupViewer.md#onparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L176)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:849](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L849)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onSizeChange](EShapeGroupViewer.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L148)

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

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onStateChange](EShapeGroupViewer.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L767)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onTransformChange](EShapeGroupViewer.md#ontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L171)

___

### onTransformChange\_

▸ **onTransformChange_**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[onTransformChange_](EShapeGroupViewer.md#ontransformchange_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L191)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShapeEmbedded`](EShapeEmbedded.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L635)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L144)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L132)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L140)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L136)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:420](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L420)

___

### setFocused

▸ **setFocused**(`isFocused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[setFocused](EShapeGroupViewer.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:816](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L816)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[toDirty](EShapeGroupViewer.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:316](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L316)

___

### toEdgeNormal

▸ **toEdgeNormal**(`x`, `y`): [`EShapeAcceptorEdgeNormal`](../interfaces/EShapeAcceptorEdgeNormal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`EShapeAcceptorEdgeNormal`](../interfaces/EShapeAcceptorEdgeNormal.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L82)

___

### toEdgePosition

▸ **toEdgePosition**(`lp`, `cp`, `sh`, `s`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lp` | `number` |
| `cp` | `number` |
| `sh` | `number` |
| `s` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L75)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:640](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L640)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:527](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L527)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:649](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L649)

___

### unlock

▸ **unlock**(`part`, `invoke`): [`EShapeEmbedded`](EShapeEmbedded.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `part` | `number` |
| `invoke` | `boolean` |

#### Returns

[`EShapeEmbedded`](EShapeEmbedded.md)

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[unlock](EShapeGroupViewer.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L214)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:842](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L842)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:856](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L856)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[updateTransform](EShapeGroupViewer.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L381)

___

### updateUploaded

▸ **updateUploaded**(`recursively?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

`void`

#### Inherited from

[EShapeGroupViewer](EShapeGroupViewer.md).[updateUploaded](EShapeGroupViewer.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L238)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded.ts#L154)
