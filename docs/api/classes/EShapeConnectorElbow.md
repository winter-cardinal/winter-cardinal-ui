[Winter Cardinal UI - v0.442.0](../index.md) / EShapeConnectorElbow

# Class: EShapeConnectorElbow

## Hierarchy

- [`EShapeConnectorLine`](EShapeConnectorLine.md)

  ↳ **`EShapeConnectorElbow`**

## Table of contents

### Constructors

- [constructor](EShapeConnectorElbow.md#constructor)

### Properties

- [\_body](EShapeConnectorElbow.md#_body)
- [\_bodyId](EShapeConnectorElbow.md#_bodyid)
- [\_bounds](EShapeConnectorElbow.md#_bounds)
- [\_boundsInternal](EShapeConnectorElbow.md#_boundsinternal)
- [\_boundsInternalTransformId](EShapeConnectorElbow.md#_boundsinternaltransformid)
- [\_boundsLocal](EShapeConnectorElbow.md#_boundslocal)
- [\_boundsLocalTransformId](EShapeConnectorElbow.md#_boundslocaltransformid)
- [\_boundsTransformId](EShapeConnectorElbow.md#_boundstransformid)
- [\_capability](EShapeConnectorElbow.md#_capability)
- [\_connector](EShapeConnectorElbow.md#_connector)
- [\_corner](EShapeConnectorElbow.md#_corner)
- [\_edge](EShapeConnectorElbow.md#_edge)
- [\_headLocalId](EShapeConnectorElbow.md#_headlocalid)
- [\_headMargin](EShapeConnectorElbow.md#_headmargin)
- [\_headNormalId](EShapeConnectorElbow.md#_headnormalid)
- [\_image](EShapeConnectorElbow.md#_image)
- [\_lockConnector](EShapeConnectorElbow.md#_lockconnector)
- [\_lockTransformChild](EShapeConnectorElbow.md#_locktransformchild)
- [\_lockTransformParent](EShapeConnectorElbow.md#_locktransformparent)
- [\_lockTransformThis](EShapeConnectorElbow.md#_locktransformthis)
- [\_lockUploaded](EShapeConnectorElbow.md#_lockuploaded)
- [\_points](EShapeConnectorElbow.md#_points)
- [\_radius](EShapeConnectorElbow.md#_radius)
- [\_state](EShapeConnectorElbow.md#_state)
- [\_tailLocalId](EShapeConnectorElbow.md#_taillocalid)
- [\_tailMargin](EShapeConnectorElbow.md#_tailmargin)
- [\_tailNormalId](EShapeConnectorElbow.md#_tailnormalid)
- [\_visible](EShapeConnectorElbow.md#_visible)
- [action](EShapeConnectorElbow.md#action)
- [children](EShapeConnectorElbow.md#children)
- [cursor](EShapeConnectorElbow.md#cursor)
- [data](EShapeConnectorElbow.md#data)
- [editor](EShapeConnectorElbow.md#editor)
- [fill](EShapeConnectorElbow.md#fill)
- [gradient](EShapeConnectorElbow.md#gradient)
- [id](EShapeConnectorElbow.md#id)
- [index](EShapeConnectorElbow.md#index)
- [interactive](EShapeConnectorElbow.md#interactive)
- [layout](EShapeConnectorElbow.md#layout)
- [parent](EShapeConnectorElbow.md#parent)
- [reference](EShapeConnectorElbow.md#reference)
- [runtime](EShapeConnectorElbow.md#runtime)
- [selected](EShapeConnectorElbow.md#selected)
- [shortcut](EShapeConnectorElbow.md#shortcut)
- [size](EShapeConnectorElbow.md#size)
- [stroke](EShapeConnectorElbow.md#stroke)
- [tag](EShapeConnectorElbow.md#tag)
- [text](EShapeConnectorElbow.md#text)
- [texture](EShapeConnectorElbow.md#texture)
- [title](EShapeConnectorElbow.md#title)
- [transform](EShapeConnectorElbow.md#transform)
- [type](EShapeConnectorElbow.md#type)
- [uploaded](EShapeConnectorElbow.md#uploaded)
- [uuid](EShapeConnectorElbow.md#uuid)
- [WORK\_BOUNDARY](EShapeConnectorElbow.md#work_boundary)
- [WORK\_HIT\_TEST\_DATA](EShapeConnectorElbow.md#work_hit_test_data)

### Accessors

- [body](EShapeConnectorElbow.md#body)
- [capability](EShapeConnectorElbow.md#capability)
- [connector](EShapeConnectorElbow.md#connector)
- [corner](EShapeConnectorElbow.md#corner)
- [edge](EShapeConnectorElbow.md#edge)
- [image](EShapeConnectorElbow.md#image)
- [points](EShapeConnectorElbow.md#points)
- [radius](EShapeConnectorElbow.md#radius)
- [root](EShapeConnectorElbow.md#root)
- [state](EShapeConnectorElbow.md#state)
- [visible](EShapeConnectorElbow.md#visible)
- [worldVisible](EShapeConnectorElbow.md#worldvisible)

### Methods

- [addListener](EShapeConnectorElbow.md#addlistener)
- [addUuid](EShapeConnectorElbow.md#adduuid)
- [attach](EShapeConnectorElbow.md#attach)
- [blur](EShapeConnectorElbow.md#blur)
- [calcHitPart](EShapeConnectorElbow.md#calchitpart)
- [calcHitPoint](EShapeConnectorElbow.md#calchitpoint)
- [calcHitPointAbsHitTester](EShapeConnectorElbow.md#calchitpointabshittester)
- [callChildTransformChange](EShapeConnectorElbow.md#callchildtransformchange)
- [callParentTransformChange](EShapeConnectorElbow.md#callparenttransformchange)
- [clone](EShapeConnectorElbow.md#clone)
- [contains](EShapeConnectorElbow.md#contains)
- [containsAbs](EShapeConnectorElbow.md#containsabs)
- [containsAbsBBox](EShapeConnectorElbow.md#containsabsbbox)
- [containsAbsMarker](EShapeConnectorElbow.md#containsabsmarker)
- [containsBBox](EShapeConnectorElbow.md#containsbbox)
- [containsChildren](EShapeConnectorElbow.md#containschildren)
- [containsText](EShapeConnectorElbow.md#containstext)
- [copy](EShapeConnectorElbow.md#copy)
- [destroy](EShapeConnectorElbow.md#destroy)
- [detach](EShapeConnectorElbow.md#detach)
- [emit](EShapeConnectorElbow.md#emit)
- [eventNames](EShapeConnectorElbow.md#eventnames)
- [fillPoints](EShapeConnectorElbow.md#fillpoints)
- [focus](EShapeConnectorElbow.md#focus)
- [getBounds](EShapeConnectorElbow.md#getbounds)
- [getBoundsInternal](EShapeConnectorElbow.md#getboundsinternal)
- [getBoundsLocal](EShapeConnectorElbow.md#getboundslocal)
- [getBoundsSize](EShapeConnectorElbow.md#getboundssize)
- [getBounds\_](EShapeConnectorElbow.md#getbounds_)
- [getCapability](EShapeConnectorElbow.md#getcapability)
- [getHitTestSize](EShapeConnectorElbow.md#gethittestsize)
- [getShapeScale](EShapeConnectorElbow.md#getshapescale)
- [getStrokeWidthScale](EShapeConnectorElbow.md#getstrokewidthscale)
- [listenerCount](EShapeConnectorElbow.md#listenercount)
- [listeners](EShapeConnectorElbow.md#listeners)
- [lock](EShapeConnectorElbow.md#lock)
- [newFill](EShapeConnectorElbow.md#newfill)
- [newSize](EShapeConnectorElbow.md#newsize)
- [newStroke](EShapeConnectorElbow.md#newstroke)
- [newText](EShapeConnectorElbow.md#newtext)
- [newTransform](EShapeConnectorElbow.md#newtransform)
- [off](EShapeConnectorElbow.md#off)
- [on](EShapeConnectorElbow.md#on)
- [onAttach](EShapeConnectorElbow.md#onattach)
- [onChange](EShapeConnectorElbow.md#onchange)
- [onChildTransformChange](EShapeConnectorElbow.md#onchildtransformchange)
- [onDetach](EShapeConnectorElbow.md#ondetach)
- [onKeyDown](EShapeConnectorElbow.md#onkeydown)
- [onKeyUp](EShapeConnectorElbow.md#onkeyup)
- [onParentTransformChange](EShapeConnectorElbow.md#onparenttransformchange)
- [onRender](EShapeConnectorElbow.md#onrender)
- [onSizeChange](EShapeConnectorElbow.md#onsizechange)
- [onStateChange](EShapeConnectorElbow.md#onstatechange)
- [onThisTransformChange](EShapeConnectorElbow.md#onthistransformchange)
- [onTransformChange](EShapeConnectorElbow.md#ontransformchange)
- [once](EShapeConnectorElbow.md#once)
- [removeAllListeners](EShapeConnectorElbow.md#removealllisteners)
- [removeListener](EShapeConnectorElbow.md#removelistener)
- [select](EShapeConnectorElbow.md#select)
- [serialize](EShapeConnectorElbow.md#serialize)
- [serializeChildren](EShapeConnectorElbow.md#serializechildren)
- [serializeGradient](EShapeConnectorElbow.md#serializegradient)
- [serializeImage](EShapeConnectorElbow.md#serializeimage)
- [serializeState](EShapeConnectorElbow.md#serializestate)
- [setFocused](EShapeConnectorElbow.md#setfocused)
- [toDirty](EShapeConnectorElbow.md#todirty)
- [toGlobal](EShapeConnectorElbow.md#toglobal)
- [toHitTestData](EShapeConnectorElbow.md#tohittestdata)
- [toLocal](EShapeConnectorElbow.md#tolocal)
- [toMarkerSize](EShapeConnectorElbow.md#tomarkersize)
- [unlock](EShapeConnectorElbow.md#unlock)
- [update](EShapeConnectorElbow.md#update)
- [updateTransform](EShapeConnectorElbow.md#updatetransform)
- [updateUploaded](EShapeConnectorElbow.md#updateuploaded)
- [updateUuid](EShapeConnectorElbow.md#updateuuid)

## Constructors

### constructor

• **new EShapeConnectorElbow**(`type?`): [`EShapeConnectorElbow`](EShapeConnectorElbow.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `number` | `EShapeType.CONNECTOR_ELBOW` |

#### Returns

[`EShapeConnectorElbow`](EShapeConnectorElbow.md)

#### Overrides

[EShapeConnectorLine](EShapeConnectorLine.md).[constructor](EShapeConnectorLine.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow.ts#L14)

## Properties

### \_body

• `Protected` **\_body**: [`EShapeConnectorBody`](../interfaces/EShapeConnectorBody.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_body](EShapeConnectorLine.md#_body)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L27)

___

### \_bodyId

• `Protected` **\_bodyId**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_bodyId](EShapeConnectorLine.md#_bodyid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L35)

___

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_bounds](EShapeConnectorLine.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_boundsInternal](EShapeConnectorLine.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L88)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_boundsInternalTransformId](EShapeConnectorLine.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_boundsLocal](EShapeConnectorLine.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L90)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_boundsLocalTransformId](EShapeConnectorLine.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L91)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_boundsTransformId](EShapeConnectorLine.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_capability

• `Protected` `Optional` **\_capability**: [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_capability](EShapeConnectorLine.md#_capability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_connector](EShapeConnectorLine.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L77)

___

### \_corner

• `Protected` **\_corner**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_corner](EShapeConnectorLine.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L30)

___

### \_edge

• `Protected` **\_edge**: [`EShapeConnectorEdgeContainer`](../interfaces/EShapeConnectorEdgeContainer.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_edge](EShapeConnectorLine.md#_edge)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L26)

___

### \_headLocalId

• `Protected` **\_headLocalId**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_headLocalId](EShapeConnectorLine.md#_headlocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L32)

___

### \_headMargin

• `Protected` **\_headMargin**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_headMargin](EShapeConnectorLine.md#_headmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L34)

___

### \_headNormalId

• `Protected` **\_headNormalId**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_headNormalId](EShapeConnectorLine.md#_headnormalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L33)

___

### \_image

• `Protected` `Optional` **\_image**: [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_image](EShapeConnectorLine.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L31)

___

### \_lockConnector

• `Protected` **\_lockConnector**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_lockConnector](EShapeConnectorLine.md#_lockconnector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L36)

___

### \_lockTransformChild

• `Protected` **\_lockTransformChild**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_lockTransformChild](EShapeConnectorLine.md#_locktransformchild)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L81)

___

### \_lockTransformParent

• `Protected` **\_lockTransformParent**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_lockTransformParent](EShapeConnectorLine.md#_locktransformparent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_lockTransformThis

• `Protected` **\_lockTransformThis**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_lockTransformThis](EShapeConnectorLine.md#_locktransformthis)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_lockUploaded

• `Protected` **\_lockUploaded**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_lockUploaded](EShapeConnectorLine.md#_lockuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_points

• `Protected` **\_points**: [`EShapeLinePoints`](EShapeLinePoints.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_points](EShapeConnectorLine.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L28)

___

### \_radius

• `Protected` **\_radius**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_radius](EShapeConnectorLine.md#_radius)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L29)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_state](EShapeConnectorLine.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### \_tailLocalId

• `Protected` **\_tailLocalId**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_tailLocalId](EShapeConnectorLine.md#_taillocalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L29)

___

### \_tailMargin

• `Protected` **\_tailMargin**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_tailMargin](EShapeConnectorLine.md#_tailmargin)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L31)

___

### \_tailNormalId

• `Protected` **\_tailNormalId**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_tailNormalId](EShapeConnectorLine.md#_tailnormalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L30)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[_visible](EShapeConnectorLine.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L79)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[action](EShapeConnectorLine.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L71)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[children](EShapeConnectorLine.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### cursor

• `Optional` **cursor**: `string`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[cursor](EShapeConnectorLine.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L72)

___

### data

• `Readonly` **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[data](EShapeConnectorLine.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L36)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[editor](EShapeConnectorLine.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L110)

___

### fill

• `Readonly` **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[fill](EShapeConnectorLine.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L27)

___

### gradient

• `Optional` **gradient**: [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[gradient](EShapeConnectorLine.md#gradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L32)

___

### id

• **id**: `string`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[id](EShapeConnectorLine.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L54)

___

### index

• **index**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[index](EShapeConnectorLine.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### interactive

• **interactive**: `boolean`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[interactive](EShapeConnectorLine.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[layout](EShapeConnectorLine.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[parent](EShapeConnectorLine.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### reference

• **reference**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[reference](EShapeConnectorLine.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L104)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](../interfaces/EShapeRuntime.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[runtime](EShapeConnectorLine.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L107)

___

### selected

• **selected**: `boolean`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[selected](EShapeConnectorLine.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L103)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[shortcut](EShapeConnectorLine.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L74)

___

### size

• `Readonly` **size**: `IPoint`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[size](EShapeConnectorLine.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L26)

___

### stroke

• `Readonly` **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[stroke](EShapeConnectorLine.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L28)

___

### tag

• `Readonly` **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`Deprecated`**

in favor of [data](EShapePrimitive.md#data)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[tag](EShapeConnectorLine.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L35)

___

### text

• `Readonly` **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[text](EShapeConnectorLine.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L33)

___

### texture

• `Optional` **texture**: `Texture`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[texture](EShapeConnectorLine.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L65)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[title](EShapeConnectorLine.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[transform](EShapeConnectorLine.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L60)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[type](EShapeConnectorLine.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L56)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[uploaded](EShapeConnectorLine.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L113)

___

### uuid

• **uuid**: `number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[uuid](EShapeConnectorLine.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### WORK\_BOUNDARY

▪ `Static` `Protected` **WORK\_BOUNDARY**: [`number`, `number`, `number`, `number`]

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[WORK_BOUNDARY](EShapeConnectorLine.md#work_boundary)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L25)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[WORK_HIT_TEST_DATA](EShapeConnectorLine.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L53)

## Accessors

### body

• `get` **body**(): [`EShapeConnectorBody`](../interfaces/EShapeConnectorBody.md)

#### Returns

[`EShapeConnectorBody`](../interfaces/EShapeConnectorBody.md)

#### Inherited from

EShapeConnectorLine.body

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L86)

___

### capability

• `get` **capability**(): [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

[`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

EShapeConnectorLine.capability

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:803](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L803)

___

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

EShapeConnectorLine.connector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L296)

___

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Inherited from

EShapeConnectorLine.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L92)

• `set` **corner**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `number` |

#### Returns

`void`

#### Inherited from

EShapeConnectorLine.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L96)

___

### edge

• `get` **edge**(): [`EShapeConnectorEdgeContainer`](../interfaces/EShapeConnectorEdgeContainer.md)

#### Returns

[`EShapeConnectorEdgeContainer`](../interfaces/EShapeConnectorEdgeContainer.md)

#### Inherited from

EShapeConnectorLine.edge

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L82)

___

### image

• `get` **image**(): `undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Returns

`undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Inherited from

EShapeConnectorLine.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L114)

• `set` **image**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md) |

#### Returns

`void`

#### Inherited from

EShapeConnectorLine.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L118)

___

### points

• `get` **points**(): [`EShapeLinePoints`](EShapeLinePoints.md)

#### Returns

[`EShapeLinePoints`](EShapeLinePoints.md)

#### Inherited from

EShapeConnectorLine.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L78)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Inherited from

EShapeConnectorLine.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L103)

• `set` **radius**(`radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`

#### Inherited from

EShapeConnectorLine.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L107)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Inherited from

EShapeConnectorLine.root

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L288)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

EShapeConnectorLine.state

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L792)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeConnectorLine.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:305](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L305)

• `set` **visible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Inherited from

EShapeConnectorLine.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:316](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L316)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeConnectorLine.worldVisible

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[addListener](EShapeConnectorLine.md#addlistener)

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

[EShapeConnectorLine](EShapeConnectorLine.md).[addUuid](EShapeConnectorLine.md#adduuid)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[attach](EShapeConnectorLine.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L346)

___

### blur

▸ **blur**(): `this`

#### Returns

`this`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[blur](EShapeConnectorLine.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:821](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L821)

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

[EShapeConnectorLine](EShapeConnectorLine.md).[calcHitPart](EShapeConnectorLine.md#calchitpart)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L133)

___

### calcHitPoint

▸ **calcHitPoint**\<`RESULT`\>(`x`, `y`, `toThreshold`, `toRange`, `tester`, `result`): `boolean`

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
| `tester` | [`EShapeLineBasePointsHitTester`](../index.md#eshapelinebasepointshittester)\<`RESULT`\> |
| `result` | `RESULT` |

#### Returns

`boolean`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[calcHitPoint](EShapeConnectorLine.md#calchitpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L169)

___

### calcHitPointAbsHitTester

▸ **calcHitPointAbsHitTester**(`this`, `x`, `y`, `p0x`, `p0y`, `p1x`, `p1y`, `index`, `threshold`, `result`): `boolean`

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

[EShapeConnectorLine](EShapeConnectorLine.md).[calcHitPointAbsHitTester](EShapeConnectorLine.md#calchitpointabshittester)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L199)

___

### callChildTransformChange

▸ **callChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[callChildTransformChange](EShapeConnectorLine.md#callchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L186)

___

### callParentTransformChange

▸ **callParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[callParentTransformChange](EShapeConnectorLine.md#callparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L201)

___

### clone

▸ **clone**(): [`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Returns

[`EShapeConnectorLine`](EShapeConnectorLine.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[clone](EShapeConnectorLine.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L263)

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

[EShapeConnectorLine](EShapeConnectorLine.md).[contains](EShapeConnectorLine.md#contains)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[containsAbs](EShapeConnectorLine.md#containsabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L105)

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

[EShapeConnectorLine](EShapeConnectorLine.md).[containsAbsBBox](EShapeConnectorLine.md#containsabsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:641](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L641)

___

### containsAbsMarker

▸ **containsAbsMarker**(`marker`, `x`, `y`, `sw`, `ss`, `sa`): `boolean`

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

[EShapeConnectorLine](EShapeConnectorLine.md).[containsAbsMarker](EShapeConnectorLine.md#containsabsmarker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L56)

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

[EShapeConnectorLine](EShapeConnectorLine.md).[containsBBox](EShapeConnectorLine.md#containsbbox)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[containsChildren](EShapeConnectorLine.md#containschildren)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[containsText](EShapeConnectorLine.md#containstext)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[copy](EShapeConnectorLine.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L252)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[destroy](EShapeConnectorLine.md#destroy)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[detach](EShapeConnectorLine.md#detach)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[emit](EShapeConnectorLine.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25441

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[eventNames](EShapeConnectorLine.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### fillPoints

▸ **fillPoints**(`tail`, `tailMargin`, `head`, `headMargin`, `body`, `px`, `py`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tail` | [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md) |
| `tailMargin` | `number` |
| `head` | [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md) |
| `headMargin` | `number` |
| `body` | [`EShapeConnectorBody`](../interfaces/EShapeConnectorBody.md) |
| `px` | `number` |
| `py` | `number` |
| `values` | `number`[] |

#### Returns

`void`

#### Overrides

[EShapeConnectorLine](EShapeConnectorLine.md).[fillPoints](EShapeConnectorLine.md#fillpoints)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow.ts#L18)

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[focus](EShapeConnectorLine.md#focus)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[getBounds](EShapeConnectorLine.md#getbounds)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[getBoundsInternal](EShapeConnectorLine.md#getboundsinternal)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[getBoundsLocal](EShapeConnectorLine.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:703](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L703)

___

### getBoundsSize

▸ **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[getBoundsSize](EShapeConnectorLine.md#getboundssize)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[getBounds_](EShapeConnectorLine.md#getbounds_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L723)

___

### getCapability

▸ **getCapability**(): `undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

`undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[getCapability](EShapeConnectorLine.md#getcapability)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[getHitTestSize](EShapeConnectorLine.md#gethittestsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L25)

___

### getShapeScale

▸ **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[getShapeScale](EShapeConnectorLine.md#getshapescale)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[getStrokeWidthScale](EShapeConnectorLine.md#getstrokewidthscale)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[listenerCount](EShapeConnectorLine.md#listenercount)

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

[EShapeConnectorLine](EShapeConnectorLine.md).[listeners](EShapeConnectorLine.md#listeners)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[lock](EShapeConnectorLine.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L60)

___

### newFill

▸ **newFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[newFill](EShapeConnectorLine.md#newfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L62)

___

### newSize

▸ **newSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[newSize](EShapeConnectorLine.md#newsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L51)

___

### newStroke

▸ **newStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[newStroke](EShapeConnectorLine.md#newstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L66)

___

### newText

▸ **newText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[newText](EShapeConnectorLine.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L79)

___

### newTransform

▸ **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[newTransform](EShapeConnectorLine.md#newtransform)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[off](EShapeConnectorLine.md#off)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[on](EShapeConnectorLine.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[onAttach](EShapeConnectorLine.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L90)

___

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[onChange](EShapeConnectorLine.md#onchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L100)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[onChildTransformChange](EShapeConnectorLine.md#onchildtransformchange)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[onDetach](EShapeConnectorLine.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L95)

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

[EShapeConnectorLine](EShapeConnectorLine.md).[onKeyDown](EShapeConnectorLine.md#onkeydown)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[onKeyUp](EShapeConnectorLine.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L843)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[onParentTransformChange](EShapeConnectorLine.md#onparenttransformchange)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[onRender](EShapeConnectorLine.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:859](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L859)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[onSizeChange](EShapeConnectorLine.md#onsizechange)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[onStateChange](EShapeConnectorLine.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L777)

___

### onThisTransformChange

▸ **onThisTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[onThisTransformChange](EShapeConnectorLine.md#onthistransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L193)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[onTransformChange](EShapeConnectorLine.md#ontransformchange)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[once](EShapeConnectorLine.md#once)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[removeAllListeners](EShapeConnectorLine.md#removealllisteners)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[removeListener](EShapeConnectorLine.md#removelistener)

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

[EShapeConnectorLine](EShapeConnectorLine.md).[select](EShapeConnectorLine.md#select)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[serialize](EShapeConnectorLine.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L268)

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

[EShapeConnectorLine](EShapeConnectorLine.md).[serializeChildren](EShapeConnectorLine.md#serializechildren)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[serializeGradient](EShapeConnectorLine.md#serializegradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L137)

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

[EShapeConnectorLine](EShapeConnectorLine.md).[serializeImage](EShapeConnectorLine.md#serializeimage)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L132)

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

[EShapeConnectorLine](EShapeConnectorLine.md).[serializeState](EShapeConnectorLine.md#serializestate)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[setFocused](EShapeConnectorLine.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:826](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L826)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[toDirty](EShapeConnectorLine.md#todirty)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[toGlobal](EShapeConnectorLine.md#toglobal)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[toHitTestData](EShapeConnectorLine.md#tohittestdata)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[toLocal](EShapeConnectorLine.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:659](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L659)

___

### toMarkerSize

▸ **toMarkerSize**(`points`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`EShapePoints`](../interfaces/EShapePoints.md) |

#### Returns

`number`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[toMarkerSize](EShapeConnectorLine.md#tomarkersize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L37)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[unlock](EShapeConnectorLine.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-line.ts#L68)

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

[EShapeConnectorLine](EShapeConnectorLine.md).[update](EShapeConnectorLine.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L852)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[updateTransform](EShapeConnectorLine.md#updatetransform)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[updateUploaded](EShapeConnectorLine.md#updateuploaded)

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

#### Inherited from

[EShapeConnectorLine](EShapeConnectorLine.md).[updateUuid](EShapeConnectorLine.md#updateuuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L497)
