[Winter Cardinal UI - v0.407.0](../index.md) / EShapeGroupViewer

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
- [\_lockTransformChild](EShapeGroupViewer.md#_locktransformchild)
- [\_lockTransformParent](EShapeGroupViewer.md#_locktransformparent)
- [\_lockTransformThis](EShapeGroupViewer.md#_locktransformthis)
- [\_lockUploaded](EShapeGroupViewer.md#_lockuploaded)
- [\_mode](EShapeGroupViewer.md#_mode)
- [\_points](EShapeGroupViewer.md#_points)
- [\_state](EShapeGroupViewer.md#_state)
- [\_visible](EShapeGroupViewer.md#_visible)
- [action](EShapeGroupViewer.md#action)
- [children](EShapeGroupViewer.md#children)
- [cursor](EShapeGroupViewer.md#cursor)
- [data](EShapeGroupViewer.md#data)
- [editor](EShapeGroupViewer.md#editor)
- [fill](EShapeGroupViewer.md#fill)
- [id](EShapeGroupViewer.md#id)
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
- [attach](EShapeGroupViewer.md#attach)
- [blur](EShapeGroupViewer.md#blur)
- [callChildTransformChange](EShapeGroupViewer.md#callchildtransformchange)
- [callParentTransformChange](EShapeGroupViewer.md#callparenttransformchange)
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
- [lock](EShapeGroupViewer.md#lock)
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
- [onThisTransformChange](EShapeGroupViewer.md#onthistransformchange)
- [onTransformChange](EShapeGroupViewer.md#ontransformchange)
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
- [unlock](EShapeGroupViewer.md#unlock)
- [update](EShapeGroupViewer.md#update)
- [updateTransform](EShapeGroupViewer.md#updatetransform)
- [updateUploaded](EShapeGroupViewer.md#updateuploaded)
- [updateUuid](EShapeGroupViewer.md#updateuuid)

## Constructors

### constructor

• **new EShapeGroupViewer**(`mode`, `depth`, `type`): [`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1) |
| `depth` | `number` |
| `type` | `number` |

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Overrides

[EShapeBase](EShapeBase.md).[constructor](EShapeBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L40)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeBase](EShapeBase.md).[_bounds](EShapeBase.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsInternal](EShapeBase.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L88)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsInternalTransformId](EShapeBase.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsLocal](EShapeBase.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L90)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsLocalTransformId](EShapeBase.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L91)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[_boundsTransformId](EShapeBase.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_capability

• `Protected` `Optional` **\_capability**: [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_capability](EShapeBase.md#_capability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_connector](EShapeBase.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L77)

___

### \_depth

• `Protected` **\_depth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L38)

___

### \_lockTransformChild

• `Protected` **\_lockTransformChild**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_lockTransformChild](EShapeBase.md#_locktransformchild)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L81)

___

### \_lockTransformParent

• `Protected` **\_lockTransformParent**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_lockTransformParent](EShapeBase.md#_locktransformparent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_lockTransformThis

• `Protected` **\_lockTransformThis**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_lockTransformThis](EShapeBase.md#_locktransformthis)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_lockUploaded

• `Protected` **\_lockUploaded**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_lockUploaded](EShapeBase.md#_lockuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_mode

• `Protected` **\_mode**: [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L37)

___

### \_points

• `Protected` `Optional` **\_points**: [`EShapePoints`](../interfaces/EShapePoints.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_points](EShapeBase.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L63)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[_state](EShapeBase.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[_visible](EShapeBase.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L79)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[action](EShapeBase.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L71)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Inherited from

[EShapeBase](EShapeBase.md).[children](EShapeBase.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### cursor

• `Optional` **cursor**: `string`

#### Inherited from

[EShapeBase](EShapeBase.md).[cursor](EShapeBase.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L72)

___

### data

• **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Overrides

[EShapeBase](EShapeBase.md).[data](EShapeBase.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L34)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[editor](EShapeBase.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L110)

___

### fill

• **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Overrides

[EShapeBase](EShapeBase.md).[fill](EShapeBase.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L30)

___

### id

• **id**: `string`

#### Inherited from

[EShapeBase](EShapeBase.md).[id](EShapeBase.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L54)

___

### index

• **index**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[index](EShapeBase.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### interactive

• **interactive**: `boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[interactive](EShapeBase.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[layout](EShapeBase.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[parent](EShapeBase.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### reference

• **reference**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[reference](EShapeBase.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L104)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](../interfaces/EShapeRuntime.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[runtime](EShapeBase.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L107)

___

### selected

• **selected**: `boolean`

#### Inherited from

[EShapeBase](EShapeBase.md).[selected](EShapeBase.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L103)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Inherited from

[EShapeBase](EShapeBase.md).[shortcut](EShapeBase.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L74)

___

### size

• **size**: [`EShapeGroupSize`](../interfaces/EShapeGroupSize.md)

#### Overrides

[EShapeBase](EShapeBase.md).[size](EShapeBase.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L29)

___

### stroke

• **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Overrides

[EShapeBase](EShapeBase.md).[stroke](EShapeBase.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L31)

___

### tag

• **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`Deprecated`**

in favor of [data](EShapeEmbeddedLayer.md#data)

#### Overrides

[EShapeBase](EShapeBase.md).[tag](EShapeBase.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L33)

___

### text

• **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Overrides

[EShapeBase](EShapeBase.md).[text](EShapeBase.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L35)

___

### texture

• `Optional` **texture**: `Texture`

#### Inherited from

[EShapeBase](EShapeBase.md).[texture](EShapeBase.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L65)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[EShapeBase](EShapeBase.md).[title](EShapeBase.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[transform](EShapeBase.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L60)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[type](EShapeBase.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L56)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[uploaded](EShapeBase.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L113)

___

### uuid

• **uuid**: `number`

#### Inherited from

[EShapeBase](EShapeBase.md).[uuid](EShapeBase.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[WORK_HIT_TEST_DATA](EShapeBase.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L53)

## Accessors

### capability

• `get` **capability**(): [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

[`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

EShapeBase.capability

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:803](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L803)

___

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

EShapeBase.connector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L296)

___

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Overrides

EShapeBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L115)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L119)

___

### depth

• `get` **depth**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L57)

___

### gradient

• `get` **gradient**(): `undefined` \| [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Returns

`undefined` \| [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Overrides

EShapeBase.gradient

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L123)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L127)

___

### image

• `get` **image**(): `undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Returns

`undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Overrides

EShapeBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L143)

• `set` **image**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md) |

#### Returns

`void`

#### Overrides

EShapeBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L147)

___

### mode

• `get` **mode**(): [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Returns

[`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L53)

___

### points

• `get` **points**(): `undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Returns

`undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Overrides

EShapeBase.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L155)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L159)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Overrides

EShapeBase.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L135)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L139)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Inherited from

EShapeBase.root

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L288)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

EShapeBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L792)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeBase.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:305](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L305)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:316](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L316)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeBase.worldVisible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L323)

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

#### Inherited from

[EShapeBase](EShapeBase.md).[addUuid](EShapeBase.md#adduuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:489](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L489)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L346)

___

### blur

▸ **blur**(): [`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[blur](EShapeBase.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:821](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L821)

___

### callChildTransformChange

▸ **callChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[callChildTransformChange](EShapeBase.md#callchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L186)

___

### callParentTransformChange

▸ **callParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[callParentTransformChange](EShapeBase.md#callparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L201)

___

### clone

▸ **clone**(): [`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Overrides

[EShapeBase](EShapeBase.md).[clone](EShapeBase.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L163)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:562](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L562)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L165)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:641](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L641)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:624](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L624)

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

[EShapeBase](EShapeBase.md).[containsChildren](EShapeBase.md#containschildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L601)

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

[EShapeBase](EShapeBase.md).[containsText](EShapeBase.md#containstext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L580)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:866](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L866)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[destroy](EShapeBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L768)

___

### detach

▸ **detach**(`exceptions?`): [`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](../interfaces/EShape.md)\> |

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[detach](EShapeBase.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L374)

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

[EShapeBase](EShapeBase.md).[emit](EShapeBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25441

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EShapeBase](EShapeBase.md).[eventNames](EShapeBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### focus

▸ **focus**(): [`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[focus](EShapeBase.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:816](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L816)

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

[EShapeBase](EShapeBase.md).[getBounds](EShapeBase.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L671)

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

[EShapeBase](EShapeBase.md).[getBoundsInternal](EShapeBase.md#getboundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L687)

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

[EShapeBase](EShapeBase.md).[getBoundsLocal](EShapeBase.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:703](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L703)

___

### getBoundsSize

▸ **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Overrides

[EShapeBase](EShapeBase.md).[getBoundsSize](EShapeBase.md#getboundssize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L101)

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

[EShapeBase](EShapeBase.md).[getBounds_](EShapeBase.md#getbounds_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L723)

___

### getCapability

▸ **getCapability**(): `undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

`undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[getCapability](EShapeBase.md#getcapability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:812](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L812)

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

[EShapeBase](EShapeBase.md).[getHitTestSize](EShapeBase.md#gethittestsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L530)

___

### getShapeScale

▸ **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeBase](EShapeBase.md).[getShapeScale](EShapeBase.md#getshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:506](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L506)

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

[EShapeBase](EShapeBase.md).[getStrokeWidthScale](EShapeBase.md#getstrokewidthscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:514](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L514)

___

### isGroupSizeFittable

▸ **isGroupSizeFittable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L74)

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

#### Inherited from

[EShapeBase](EShapeBase.md).[listeners](EShapeBase.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### lock

▸ **lock**(`part`): [`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `part` | `number` |

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[lock](EShapeBase.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:217](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L217)

___

### newData

▸ **newData**(): [`EShapeData`](../interfaces/EShapeData.md)

#### Returns

[`EShapeData`](../interfaces/EShapeData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L78)

___

### newGroupFill

▸ **newGroupFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L82)

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L61)

___

### newGroupStroke

▸ **newGroupStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L86)

___

### newGroupText

▸ **newGroupText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L90)

___

### newTransform

▸ **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[newTransform](EShapeBase.md#newtransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L145)

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

node_modules/pixi.js/pixi.js.d.ts:25489

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

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onAttach](EShapeBase.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L361)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Overrides

[EShapeBase](EShapeBase.md).[onChildTransformChange](EShapeBase.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L110)

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

[EShapeBase](EShapeBase.md).[onDetach](EShapeBase.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L390)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:835](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L835)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L843)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onParentTransformChange](EShapeBase.md#onparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L208)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:859](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L859)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onSizeChange](EShapeBase.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L149)

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

[EShapeBase](EShapeBase.md).[onStateChange](EShapeBase.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L777)

___

### onThisTransformChange

▸ **onThisTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onThisTransformChange](EShapeBase.md#onthistransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L193)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[onTransformChange](EShapeBase.md#ontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L174)

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

node_modules/pixi.js/pixi.js.d.ts:25463

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

node_modules/pixi.js/pixi.js.d.ts:25483

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

#### Inherited from

[EShapeBase](EShapeBase.md).[select](EShapeBase.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:645](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L645)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:435](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L435)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:416](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L416)

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

[EShapeBase](EShapeBase.md).[serializeGradient](EShapeBase.md#serializegradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L131)

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

[EShapeBase](EShapeBase.md).[serializeImage](EShapeBase.md#serializeimage)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-viewer.ts#L151)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:430](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L430)

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

[EShapeBase](EShapeBase.md).[setFocused](EShapeBase.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:826](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L826)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[toDirty](EShapeBase.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L338)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L650)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L537)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:659](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L659)

___

### unlock

▸ **unlock**(`part`, `invoke`): [`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `part` | `number` |
| `invoke` | `boolean` |

#### Returns

[`EShapeGroupViewer`](EShapeGroupViewer.md)

#### Inherited from

[EShapeBase](EShapeBase.md).[unlock](EShapeBase.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L233)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L852)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeBase](EShapeBase.md).[updateTransform](EShapeBase.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L403)

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

[EShapeBase](EShapeBase.md).[updateUploaded](EShapeBase.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L268)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L497)
