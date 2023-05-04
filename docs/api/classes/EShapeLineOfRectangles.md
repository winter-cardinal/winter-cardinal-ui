[Winter Cardinal UI - v0.310.1](../index.md) / EShapeLineOfRectangles

# Class: EShapeLineOfRectangles

## Hierarchy

- [`EShapeRectangle`](EShapeRectangle.md)

  ↳ **`EShapeLineOfRectangles`**

## Implements

- [`EShapeLineOfAny`](../interfaces/EShapeLineOfAny.md)

## Table of contents

### Constructors

- [constructor](EShapeLineOfRectangles.md#constructor)

### Properties

- [\_bounds](EShapeLineOfRectangles.md#_bounds)
- [\_boundsInternal](EShapeLineOfRectangles.md#_boundsinternal)
- [\_boundsInternalTransformId](EShapeLineOfRectangles.md#_boundsinternaltransformid)
- [\_boundsLocal](EShapeLineOfRectangles.md#_boundslocal)
- [\_boundsLocalTransformId](EShapeLineOfRectangles.md#_boundslocaltransformid)
- [\_boundsTransformId](EShapeLineOfRectangles.md#_boundstransformid)
- [\_capability](EShapeLineOfRectangles.md#_capability)
- [\_connector](EShapeLineOfRectangles.md#_connector)
- [\_corner](EShapeLineOfRectangles.md#_corner)
- [\_image](EShapeLineOfRectangles.md#_image)
- [\_isOnTransformChanged](EShapeLineOfRectangles.md#_isontransformchanged)
- [\_isUploadedUpdated](EShapeLineOfRectangles.md#_isuploadedupdated)
- [\_isUploadedUpdatedRecursively](EShapeLineOfRectangles.md#_isuploadedupdatedrecursively)
- [\_onTransformChangeLock](EShapeLineOfRectangles.md#_ontransformchangelock)
- [\_points](EShapeLineOfRectangles.md#_points)
- [\_radius](EShapeLineOfRectangles.md#_radius)
- [\_state](EShapeLineOfRectangles.md#_state)
- [\_tester](EShapeLineOfRectangles.md#_tester)
- [\_uploadedUpdateLock](EShapeLineOfRectangles.md#_uploadedupdatelock)
- [\_visible](EShapeLineOfRectangles.md#_visible)
- [action](EShapeLineOfRectangles.md#action)
- [children](EShapeLineOfRectangles.md#children)
- [cursor](EShapeLineOfRectangles.md#cursor)
- [data](EShapeLineOfRectangles.md#data)
- [editor](EShapeLineOfRectangles.md#editor)
- [fill](EShapeLineOfRectangles.md#fill)
- [gradient](EShapeLineOfRectangles.md#gradient)
- [id](EShapeLineOfRectangles.md#id)
- [imageSrc](EShapeLineOfRectangles.md#imagesrc)
- [index](EShapeLineOfRectangles.md#index)
- [interactive](EShapeLineOfRectangles.md#interactive)
- [layout](EShapeLineOfRectangles.md#layout)
- [parent](EShapeLineOfRectangles.md#parent)
- [reference](EShapeLineOfRectangles.md#reference)
- [runtime](EShapeLineOfRectangles.md#runtime)
- [selected](EShapeLineOfRectangles.md#selected)
- [shortcut](EShapeLineOfRectangles.md#shortcut)
- [size](EShapeLineOfRectangles.md#size)
- [stroke](EShapeLineOfRectangles.md#stroke)
- [tag](EShapeLineOfRectangles.md#tag)
- [text](EShapeLineOfRectangles.md#text)
- [texture](EShapeLineOfRectangles.md#texture)
- [title](EShapeLineOfRectangles.md#title)
- [transform](EShapeLineOfRectangles.md#transform)
- [type](EShapeLineOfRectangles.md#type)
- [uploaded](EShapeLineOfRectangles.md#uploaded)
- [uuid](EShapeLineOfRectangles.md#uuid)
- [WORK\_HIT\_TEST\_DATA](EShapeLineOfRectangles.md#work_hit_test_data)

### Accessors

- [capability](EShapeLineOfRectangles.md#capability)
- [connector](EShapeLineOfRectangles.md#connector)
- [corner](EShapeLineOfRectangles.md#corner)
- [image](EShapeLineOfRectangles.md#image)
- [points](EShapeLineOfRectangles.md#points)
- [radius](EShapeLineOfRectangles.md#radius)
- [root](EShapeLineOfRectangles.md#root)
- [state](EShapeLineOfRectangles.md#state)
- [visible](EShapeLineOfRectangles.md#visible)
- [worldVisible](EShapeLineOfRectangles.md#worldvisible)

### Methods

- [addListener](EShapeLineOfRectangles.md#addlistener)
- [addUuid](EShapeLineOfRectangles.md#adduuid)
- [allowOnTransformChange](EShapeLineOfRectangles.md#allowontransformchange)
- [allowUploadedUpdate](EShapeLineOfRectangles.md#allowuploadedupdate)
- [attach](EShapeLineOfRectangles.md#attach)
- [blur](EShapeLineOfRectangles.md#blur)
- [calcHitPoint](EShapeLineOfRectangles.md#calchitpoint)
- [clone](EShapeLineOfRectangles.md#clone)
- [contains](EShapeLineOfRectangles.md#contains)
- [containsAbs](EShapeLineOfRectangles.md#containsabs)
- [containsAbsBBox](EShapeLineOfRectangles.md#containsabsbbox)
- [containsBBox](EShapeLineOfRectangles.md#containsbbox)
- [containsChildren](EShapeLineOfRectangles.md#containschildren)
- [containsPointAbs](EShapeLineOfRectangles.md#containspointabs)
- [containsText](EShapeLineOfRectangles.md#containstext)
- [copy](EShapeLineOfRectangles.md#copy)
- [destroy](EShapeLineOfRectangles.md#destroy)
- [detach](EShapeLineOfRectangles.md#detach)
- [disallowOnTransformChange](EShapeLineOfRectangles.md#disallowontransformchange)
- [disallowUploadedUpdate](EShapeLineOfRectangles.md#disallowuploadedupdate)
- [emit](EShapeLineOfRectangles.md#emit)
- [eventNames](EShapeLineOfRectangles.md#eventnames)
- [focus](EShapeLineOfRectangles.md#focus)
- [getBounds](EShapeLineOfRectangles.md#getbounds)
- [getBoundsInternal](EShapeLineOfRectangles.md#getboundsinternal)
- [getBoundsLocal](EShapeLineOfRectangles.md#getboundslocal)
- [getBoundsSize](EShapeLineOfRectangles.md#getboundssize)
- [getBounds\_](EShapeLineOfRectangles.md#getbounds_)
- [getCapability](EShapeLineOfRectangles.md#getcapability)
- [getHitTestSize](EShapeLineOfRectangles.md#gethittestsize)
- [getShapeScale](EShapeLineOfRectangles.md#getshapescale)
- [getStrokeWidthScale](EShapeLineOfRectangles.md#getstrokewidthscale)
- [listenerCount](EShapeLineOfRectangles.md#listenercount)
- [listeners](EShapeLineOfRectangles.md#listeners)
- [newFill](EShapeLineOfRectangles.md#newfill)
- [newSize](EShapeLineOfRectangles.md#newsize)
- [newStroke](EShapeLineOfRectangles.md#newstroke)
- [newText](EShapeLineOfRectangles.md#newtext)
- [newTransform](EShapeLineOfRectangles.md#newtransform)
- [off](EShapeLineOfRectangles.md#off)
- [on](EShapeLineOfRectangles.md#on)
- [onAttach](EShapeLineOfRectangles.md#onattach)
- [onChildTransformChange](EShapeLineOfRectangles.md#onchildtransformchange)
- [onDetach](EShapeLineOfRectangles.md#ondetach)
- [onKeyDown](EShapeLineOfRectangles.md#onkeydown)
- [onKeyUp](EShapeLineOfRectangles.md#onkeyup)
- [onParentTransformChange](EShapeLineOfRectangles.md#onparenttransformchange)
- [onRender](EShapeLineOfRectangles.md#onrender)
- [onSizeChange](EShapeLineOfRectangles.md#onsizechange)
- [onStateChange](EShapeLineOfRectangles.md#onstatechange)
- [onTransformChange](EShapeLineOfRectangles.md#ontransformchange)
- [onTransformChange\_](EShapeLineOfRectangles.md#ontransformchange_)
- [once](EShapeLineOfRectangles.md#once)
- [removeAllListeners](EShapeLineOfRectangles.md#removealllisteners)
- [removeListener](EShapeLineOfRectangles.md#removelistener)
- [select](EShapeLineOfRectangles.md#select)
- [serialize](EShapeLineOfRectangles.md#serialize)
- [serializeChildren](EShapeLineOfRectangles.md#serializechildren)
- [serializeGradient](EShapeLineOfRectangles.md#serializegradient)
- [serializeImage](EShapeLineOfRectangles.md#serializeimage)
- [serializeState](EShapeLineOfRectangles.md#serializestate)
- [setFocused](EShapeLineOfRectangles.md#setfocused)
- [toDirty](EShapeLineOfRectangles.md#todirty)
- [toGlobal](EShapeLineOfRectangles.md#toglobal)
- [toHitTestData](EShapeLineOfRectangles.md#tohittestdata)
- [toLocal](EShapeLineOfRectangles.md#tolocal)
- [update](EShapeLineOfRectangles.md#update)
- [updateRecursively](EShapeLineOfRectangles.md#updaterecursively)
- [updateTransform](EShapeLineOfRectangles.md#updatetransform)
- [updateUploaded](EShapeLineOfRectangles.md#updateuploaded)
- [updateUploadedRecursively](EShapeLineOfRectangles.md#updateuploadedrecursively)
- [updateUuid](EShapeLineOfRectangles.md#updateuuid)

## Constructors

### constructor

• **new EShapeLineOfRectangles**(`type?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `number` | `EShapeType.LINE_OF_RECTANGLES` |

#### Overrides

[EShapeRectangle](EShapeRectangle.md).[constructor](EShapeRectangle.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L20)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_bounds](EShapeRectangle.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L85)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsInternal](EShapeRectangle.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsInternalTransformId](EShapeRectangle.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L88)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsLocal](EShapeRectangle.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsLocalTransformId](EShapeRectangle.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L90)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsTransformId](EShapeRectangle.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_capability

• `Protected` `Optional` **\_capability**: [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_capability](EShapeRectangle.md#_capability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_connector](EShapeRectangle.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L76)

___

### \_corner

• `Protected` **\_corner**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_corner](EShapeRectangle.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L27)

___

### \_image

• `Protected` `Optional` **\_image**: `HTMLImageElement`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_image](EShapeRectangle.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L28)

___

### \_isOnTransformChanged

• `Protected` **\_isOnTransformChanged**: `boolean`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_isOnTransformChanged](EShapeRectangle.md#_isontransformchanged)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L80)

___

### \_isUploadedUpdated

• `Protected` **\_isUploadedUpdated**: `boolean`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_isUploadedUpdated](EShapeRectangle.md#_isuploadedupdated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_isUploadedUpdatedRecursively

• `Protected` **\_isUploadedUpdatedRecursively**: `boolean`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_isUploadedUpdatedRecursively](EShapeRectangle.md#_isuploadedupdatedrecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_onTransformChangeLock

• `Protected` **\_onTransformChangeLock**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_onTransformChangeLock](EShapeRectangle.md#_ontransformchangelock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L79)

___

### \_points

• `Protected` **\_points**: [`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md)

#### Overrides

[EShapeRectangle](EShapeRectangle.md).[_points](EShapeRectangle.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L17)

___

### \_radius

• `Protected` **\_radius**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_radius](EShapeRectangle.md#_radius)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L26)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_state](EShapeRectangle.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L92)

___

### \_tester

• `Protected` **\_tester**: [`EShapeLineOfAnyPointsHitTester`](../index.md#eshapelineofanypointshittester)<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L18)

___

### \_uploadedUpdateLock

• `Protected` **\_uploadedUpdateLock**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_uploadedUpdateLock](EShapeRectangle.md#_uploadedupdatelock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L81)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_visible](EShapeRectangle.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L78)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[action](../interfaces/EShapeLineOfAny.md#action)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[action](EShapeRectangle.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L70)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[children](../interfaces/EShapeLineOfAny.md#children)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[children](EShapeRectangle.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### cursor

• `Optional` **cursor**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[cursor](../interfaces/EShapeLineOfAny.md#cursor)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[cursor](EShapeRectangle.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L71)

___

### data

• `Readonly` **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[data](../interfaces/EShapeLineOfAny.md#data)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[data](EShapeRectangle.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L33)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[editor](../interfaces/EShapeLineOfAny.md#editor)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[editor](EShapeRectangle.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L109)

___

### fill

• `Readonly` **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[fill](../interfaces/EShapeLineOfAny.md#fill)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[fill](EShapeRectangle.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L24)

___

### gradient

• `Optional` **gradient**: [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[gradient](../interfaces/EShapeLineOfAny.md#gradient)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[gradient](EShapeRectangle.md#gradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L29)

___

### id

• **id**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[id](../interfaces/EShapeLineOfAny.md#id)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[id](EShapeRectangle.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L52)

___

### imageSrc

• `Optional` **imageSrc**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[imageSrc](../interfaces/EShapeLineOfAny.md#imagesrc)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[imageSrc](EShapeRectangle.md#imagesrc)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L63)

___

### index

• **index**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[index](../interfaces/EShapeLineOfAny.md#index)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[index](EShapeRectangle.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L101)

___

### interactive

• **interactive**: `boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[interactive](../interfaces/EShapeLineOfAny.md#interactive)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[interactive](EShapeRectangle.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L72)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[layout](../interfaces/EShapeLineOfAny.md#layout)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[layout](EShapeRectangle.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[parent](../interfaces/EShapeLineOfAny.md#parent)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[parent](EShapeRectangle.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L96)

___

### reference

• **reference**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[reference](../interfaces/EShapeLineOfAny.md#reference)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[reference](EShapeRectangle.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L103)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](../interfaces/EShapeRuntime.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[runtime](../interfaces/EShapeLineOfAny.md#runtime)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[runtime](EShapeRectangle.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L106)

___

### selected

• **selected**: `boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[selected](../interfaces/EShapeLineOfAny.md#selected)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[selected](EShapeRectangle.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[shortcut](../interfaces/EShapeLineOfAny.md#shortcut)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[shortcut](EShapeRectangle.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### size

• `Readonly` **size**: `IPoint`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[size](../interfaces/EShapeLineOfAny.md#size)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[size](EShapeRectangle.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L23)

___

### stroke

• `Readonly` **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[stroke](../interfaces/EShapeLineOfAny.md#stroke)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[stroke](EShapeRectangle.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L25)

___

### tag

• `Readonly` **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`Deprecated`**

in favor of [data](EShapeLineOfRectangles.md#data)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[tag](../interfaces/EShapeLineOfAny.md#tag)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[tag](EShapeRectangle.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L32)

___

### text

• `Readonly` **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[text](../interfaces/EShapeLineOfAny.md#text)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[text](EShapeRectangle.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L30)

___

### texture

• `Optional` **texture**: `Texture`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[texture](../interfaces/EShapeLineOfAny.md#texture)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[texture](EShapeRectangle.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L64)

___

### title

• `Optional` **title**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[title](../interfaces/EShapeLineOfAny.md#title)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[title](EShapeRectangle.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L74)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[transform](../interfaces/EShapeLineOfAny.md#transform)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[transform](EShapeRectangle.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L58)

___

### type

• `Readonly` **type**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[type](../interfaces/EShapeLineOfAny.md#type)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[type](EShapeRectangle.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L54)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[uploaded](../interfaces/EShapeLineOfAny.md#uploaded)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[uploaded](EShapeRectangle.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L112)

___

### uuid

• **uuid**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[uuid](../interfaces/EShapeLineOfAny.md#uuid)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[uuid](EShapeRectangle.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L53)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[WORK_HIT_TEST_DATA](EShapeRectangle.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L51)

## Accessors

### capability

• `get` **capability**(): [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

[`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[capability](../interfaces/EShapeLineOfAny.md#capability)

#### Inherited from

EShapeRectangle.capability

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:799](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L799)

___

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[connector](../interfaces/EShapeLineOfAny.md#connector)

#### Inherited from

EShapeRectangle.connector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L283)

___

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[corner](../interfaces/EShapeLineOfAny.md#corner)

#### Inherited from

EShapeRectangle.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L89)

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

EShapeRectangle.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L93)

___

### image

• `get` **image**(): `undefined` \| `HTMLImageElement`

#### Returns

`undefined` \| `HTMLImageElement`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[image](../interfaces/EShapeLineOfAny.md#image)

#### Inherited from

EShapeRectangle.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L111)

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

EShapeRectangle.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L115)

___

### points

• `get` **points**(): [`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md)

#### Returns

[`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[points](../interfaces/EShapeLineOfAny.md#points)

#### Overrides

EShapeRectangle.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L29)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[radius](../interfaces/EShapeLineOfAny.md#radius)

#### Inherited from

EShapeRectangle.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L100)

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

EShapeRectangle.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L104)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[root](../interfaces/EShapeLineOfAny.md#root)

#### Inherited from

EShapeRectangle.root

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:275](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L275)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[state](../interfaces/EShapeLineOfAny.md#state)

#### Inherited from

EShapeRectangle.state

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L788)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[visible](../interfaces/EShapeLineOfAny.md#visible)

#### Inherited from

EShapeRectangle.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L292)

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

EShapeRectangle.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:303](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L303)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[worldVisible](../interfaces/EShapeLineOfAny.md#worldvisible)

#### Inherited from

EShapeRectangle.worldVisible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:310](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L310)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[addListener](../interfaces/EShapeLineOfAny.md#addlistener)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[addListener](EShapeRectangle.md#addlistener)

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

[EShapeRectangle](EShapeRectangle.md).[addUuid](EShapeRectangle.md#adduuid)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[allowOnTransformChange](../interfaces/EShapeLineOfAny.md#allowontransformchange)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[allowOnTransformChange](EShapeRectangle.md#allowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L202)

___

### allowUploadedUpdate

▸ **allowUploadedUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[allowUploadedUpdate](../interfaces/EShapeLineOfAny.md#allowuploadedupdate)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[allowUploadedUpdate](EShapeRectangle.md#allowuploadedupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L226)

___

### attach

▸ **attach**(`parent`, `at?`): [`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md) |
| `at?` | `number` |

#### Returns

[`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[attach](../interfaces/EShapeLineOfAny.md#attach)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[attach](EShapeRectangle.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L333)

___

### blur

▸ **blur**(): [`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Returns

[`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[blur](../interfaces/EShapeLineOfAny.md#blur)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[blur](EShapeRectangle.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:817](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L817)

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
| `toThreshold` | ``null`` \| [`EShapeLineOfAnyPointsHitTesterToThreshold`](../index.md#eshapelineofanypointshittestertothreshold) |
| `toRange` | ``null`` \| [`EShapeLineOfAnyPointsHitTesterToRange`](../index.md#eshapelineofanypointshittestertorange) |
| `tester` | ``null`` \| [`EShapeLineOfAnyPointsHitTester`](../index.md#eshapelineofanypointshittester)<`RESULT`\> |
| `result` | `RESULT` |

#### Returns

`boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[calcHitPoint](../interfaces/EShapeLineOfAny.md#calchitpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L79)

___

### clone

▸ **clone**(): [`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Returns

[`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[clone](../interfaces/EShapeLineOfAny.md#clone)

#### Overrides

[EShapeRectangle](EShapeRectangle.md).[clone](EShapeRectangle.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L33)

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

[EShapeRectangle](EShapeRectangle.md).[contains](EShapeRectangle.md#contains)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[containsAbs](../interfaces/EShapeLineOfAny.md#containsabs)

#### Overrides

[EShapeRectangle](EShapeRectangle.md).[containsAbs](EShapeRectangle.md#containsabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L37)

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

[EShapeRectangle](EShapeRectangle.md).[containsAbsBBox](EShapeRectangle.md#containsabsbbox)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[containsBBox](../interfaces/EShapeLineOfAny.md#containsbbox)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[containsBBox](EShapeRectangle.md#containsbbox)

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

[EShapeRectangle](EShapeRectangle.md).[containsChildren](EShapeRectangle.md#containschildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:600](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L600)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L63)

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

[EShapeRectangle](EShapeRectangle.md).[containsText](EShapeRectangle.md#containstext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:579](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L579)

___

### copy

▸ **copy**(`source`, `part?`): [`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `source` | [`EShape`](../interfaces/EShape.md) | `undefined` |
| `part` | `number` | `EShapeCopyPart.ALL` |

#### Returns

[`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[copy](../interfaces/EShapeLineOfAny.md#copy)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[copy](EShapeRectangle.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:871](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L871)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[destroy](../interfaces/EShapeLineOfAny.md#destroy)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[destroy](EShapeRectangle.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:764](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L764)

___

### detach

▸ **detach**(): [`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Returns

[`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[detach](../interfaces/EShapeLineOfAny.md#detach)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[detach](EShapeRectangle.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L361)

___

### disallowOnTransformChange

▸ **disallowOnTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[disallowOnTransformChange](../interfaces/EShapeLineOfAny.md#disallowontransformchange)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[disallowOnTransformChange](EShapeRectangle.md#disallowontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L195)

___

### disallowUploadedUpdate

▸ **disallowUploadedUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[disallowUploadedUpdate](../interfaces/EShapeLineOfAny.md#disallowuploadedupdate)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[disallowUploadedUpdate](EShapeRectangle.md#disallowuploadedupdate)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[emit](../interfaces/EShapeLineOfAny.md#emit)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[emit](EShapeRectangle.md#emit)

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

[EShapeRectangle](EShapeRectangle.md).[eventNames](EShapeRectangle.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### focus

▸ **focus**(): [`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Returns

[`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[focus](../interfaces/EShapeLineOfAny.md#focus)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[focus](EShapeRectangle.md#focus)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[getBounds](../interfaces/EShapeLineOfAny.md#getbounds)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[getBounds](EShapeRectangle.md#getbounds)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[getBoundsInternal](../interfaces/EShapeLineOfAny.md#getboundsinternal)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[getBoundsInternal](EShapeRectangle.md#getboundsinternal)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[getBoundsLocal](../interfaces/EShapeLineOfAny.md#getboundslocal)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[getBoundsLocal](EShapeRectangle.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:700](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L700)

___

### getBoundsSize

▸ `Protected` **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[getBoundsSize](EShapeRectangle.md#getboundssize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:715](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L715)

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

[EShapeRectangle](EShapeRectangle.md).[getBounds_](EShapeRectangle.md#getbounds_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L719)

___

### getCapability

▸ **getCapability**(): `undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

`undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[getCapability](../interfaces/EShapeLineOfAny.md#getcapability)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[getCapability](EShapeRectangle.md#getcapability)

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

[EShapeRectangle](EShapeRectangle.md).[getHitTestSize](EShapeRectangle.md#gethittestsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:529](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L529)

___

### getShapeScale

▸ `Protected` **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[getShapeScale](EShapeRectangle.md#getshapescale)

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

[EShapeRectangle](EShapeRectangle.md).[getStrokeWidthScale](EShapeRectangle.md#getstrokewidthscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:513](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L513)

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

[EShapeRectangle](EShapeRectangle.md).[listenerCount](EShapeRectangle.md#listenercount)

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

[EShapeRectangle](EShapeRectangle.md).[listeners](EShapeRectangle.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### newFill

▸ `Protected` **newFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newFill](EShapeRectangle.md#newfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L59)

___

### newSize

▸ `Protected` **newSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newSize](EShapeRectangle.md#newsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L48)

___

### newStroke

▸ `Protected` **newStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newStroke](EShapeRectangle.md#newstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L63)

___

### newText

▸ `Protected` **newText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newText](EShapeRectangle.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L76)

___

### newTransform

▸ `Protected` **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newTransform](EShapeRectangle.md#newtransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L144)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[off](../interfaces/EShapeLineOfAny.md#off)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[off](EShapeRectangle.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24070

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

`this`.

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[on](../interfaces/EShapeLineOfAny.md#on)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[on](EShapeRectangle.md#on)

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

[EShapeRectangle](EShapeRectangle.md).[onAttach](EShapeRectangle.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:348](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L348)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[onChildTransformChange](../interfaces/EShapeLineOfAny.md#onchildtransformchange)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[onChildTransformChange](EShapeRectangle.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:214](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L214)

___

### onDetach

▸ **onDetach**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[onDetach](../interfaces/EShapeLineOfAny.md#ondetach)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[onDetach](EShapeRectangle.md#ondetach)

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

[EShapeRectangle](EShapeRectangle.md).[onKeyDown](EShapeRectangle.md#onkeydown)

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

[EShapeRectangle](EShapeRectangle.md).[onKeyUp](EShapeRectangle.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:839](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L839)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[onParentTransformChange](../interfaces/EShapeLineOfAny.md#onparenttransformchange)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[onParentTransformChange](EShapeRectangle.md#onparenttransformchange)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[onRender](../interfaces/EShapeLineOfAny.md#onrender)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[onRender](EShapeRectangle.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:855](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L855)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[onSizeChange](../interfaces/EShapeLineOfAny.md#onsizechange)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[onSizeChange](EShapeRectangle.md#onsizechange)

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

[EShapeRectangle](EShapeRectangle.md).[onStateChange](EShapeRectangle.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:773](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L773)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[onTransformChange](../interfaces/EShapeLineOfAny.md#ontransformchange)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[onTransformChange](EShapeRectangle.md#ontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L167)

___

### onTransformChange\_

▸ `Protected` **onTransformChange_**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[onTransformChange_](EShapeRectangle.md#ontransformchange_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L184)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

`this`.

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[once](../interfaces/EShapeLineOfAny.md#once)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[once](EShapeRectangle.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24044

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

`this`.

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[removeAllListeners](../interfaces/EShapeLineOfAny.md#removealllisteners)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[removeAllListeners](EShapeRectangle.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24064

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

`this`.

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[removeListener](../interfaces/EShapeLineOfAny.md#removelistener)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[removeListener](EShapeRectangle.md#removelistener)

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

[EShapeRectangle](EShapeRectangle.md).[select](EShapeRectangle.md#select)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[serialize](../interfaces/EShapeLineOfAny.md#serialize)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[serialize](EShapeRectangle.md#serialize)

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

[EShapeRectangle](EShapeRectangle.md).[serializeChildren](EShapeRectangle.md#serializechildren)

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

[EShapeRectangle](EShapeRectangle.md).[serializeGradient](EShapeRectangle.md#serializegradient)

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

[EShapeRectangle](EShapeRectangle.md).[serializeImage](EShapeRectangle.md#serializeimage)

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

[EShapeRectangle](EShapeRectangle.md).[serializeState](EShapeRectangle.md#serializestate)

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

[EShapeRectangle](EShapeRectangle.md).[setFocused](EShapeRectangle.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:822](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L822)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[toDirty](../interfaces/EShapeLineOfAny.md#todirty)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[toDirty](EShapeRectangle.md#todirty)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[toGlobal](../interfaces/EShapeLineOfAny.md#toglobal)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[toGlobal](EShapeRectangle.md#toglobal)

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

[EShapeRectangle](EShapeRectangle.md).[toHitTestData](EShapeRectangle.md#tohittestdata)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[toLocal](../interfaces/EShapeLineOfAny.md#tolocal)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[toLocal](EShapeRectangle.md#tolocal)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[update](../interfaces/EShapeLineOfAny.md#update)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[update](EShapeRectangle.md#update)

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

[EShapeRectangle](EShapeRectangle.md).[updateRecursively](EShapeRectangle.md#updaterecursively)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:862](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L862)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[updateTransform](../interfaces/EShapeLineOfAny.md#updatetransform)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[updateTransform](EShapeRectangle.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L390)

___

### updateUploaded

▸ **updateUploaded**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[updateUploaded](../interfaces/EShapeLineOfAny.md#updateuploaded)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[updateUploaded](EShapeRectangle.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L252)

___

### updateUploadedRecursively

▸ **updateUploadedRecursively**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[updateUploadedRecursively](../interfaces/EShapeLineOfAny.md#updateuploadedrecursively)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[updateUploadedRecursively](EShapeRectangle.md#updateuploadedrecursively)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[updateUuid](../interfaces/EShapeLineOfAny.md#updateuuid)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[updateUuid](EShapeRectangle.md#updateuuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L496)
