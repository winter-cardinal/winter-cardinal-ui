[Winter Cardinal UI - v0.414.0](../index.md) / EShapeLineOfTriangles

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
- [\_capability](EShapeLineOfTriangles.md#_capability)
- [\_connector](EShapeLineOfTriangles.md#_connector)
- [\_corner](EShapeLineOfTriangles.md#_corner)
- [\_image](EShapeLineOfTriangles.md#_image)
- [\_lockTransformChild](EShapeLineOfTriangles.md#_locktransformchild)
- [\_lockTransformParent](EShapeLineOfTriangles.md#_locktransformparent)
- [\_lockTransformThis](EShapeLineOfTriangles.md#_locktransformthis)
- [\_lockUploaded](EShapeLineOfTriangles.md#_lockuploaded)
- [\_points](EShapeLineOfTriangles.md#_points)
- [\_radius](EShapeLineOfTriangles.md#_radius)
- [\_state](EShapeLineOfTriangles.md#_state)
- [\_tester](EShapeLineOfTriangles.md#_tester)
- [\_visible](EShapeLineOfTriangles.md#_visible)
- [action](EShapeLineOfTriangles.md#action)
- [children](EShapeLineOfTriangles.md#children)
- [cursor](EShapeLineOfTriangles.md#cursor)
- [data](EShapeLineOfTriangles.md#data)
- [editor](EShapeLineOfTriangles.md#editor)
- [fill](EShapeLineOfTriangles.md#fill)
- [gradient](EShapeLineOfTriangles.md#gradient)
- [id](EShapeLineOfTriangles.md#id)
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

- [capability](EShapeLineOfTriangles.md#capability)
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
- [attach](EShapeLineOfTriangles.md#attach)
- [blur](EShapeLineOfTriangles.md#blur)
- [calcHitPoint](EShapeLineOfTriangles.md#calchitpoint)
- [callChildTransformChange](EShapeLineOfTriangles.md#callchildtransformchange)
- [callParentTransformChange](EShapeLineOfTriangles.md#callparenttransformchange)
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
- [emit](EShapeLineOfTriangles.md#emit)
- [eventNames](EShapeLineOfTriangles.md#eventnames)
- [focus](EShapeLineOfTriangles.md#focus)
- [getBounds](EShapeLineOfTriangles.md#getbounds)
- [getBoundsInternal](EShapeLineOfTriangles.md#getboundsinternal)
- [getBoundsLocal](EShapeLineOfTriangles.md#getboundslocal)
- [getBoundsSize](EShapeLineOfTriangles.md#getboundssize)
- [getBounds\_](EShapeLineOfTriangles.md#getbounds_)
- [getCapability](EShapeLineOfTriangles.md#getcapability)
- [getHitTestSize](EShapeLineOfTriangles.md#gethittestsize)
- [getShapeScale](EShapeLineOfTriangles.md#getshapescale)
- [getStrokeWidthScale](EShapeLineOfTriangles.md#getstrokewidthscale)
- [listenerCount](EShapeLineOfTriangles.md#listenercount)
- [listeners](EShapeLineOfTriangles.md#listeners)
- [lock](EShapeLineOfTriangles.md#lock)
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
- [onThisTransformChange](EShapeLineOfTriangles.md#onthistransformchange)
- [onTransformChange](EShapeLineOfTriangles.md#ontransformchange)
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
- [unlock](EShapeLineOfTriangles.md#unlock)
- [update](EShapeLineOfTriangles.md#update)
- [updateTransform](EShapeLineOfTriangles.md#updatetransform)
- [updateUploaded](EShapeLineOfTriangles.md#updateuploaded)
- [updateUuid](EShapeLineOfTriangles.md#updateuuid)

## Constructors

### constructor

• **new EShapeLineOfTriangles**(`type?`): [`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `number` | `EShapeType.LINE_OF_TRIANGLES` |

#### Returns

[`EShapeLineOfTriangles`](EShapeLineOfTriangles.md)

#### Overrides

[EShapeTriangle](EShapeTriangle.md).[constructor](EShapeTriangle.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L20)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_bounds](EShapeTriangle.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_boundsInternal](EShapeTriangle.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L88)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_boundsInternalTransformId](EShapeTriangle.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_boundsLocal](EShapeTriangle.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L90)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_boundsLocalTransformId](EShapeTriangle.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L91)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_boundsTransformId](EShapeTriangle.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_capability

• `Protected` `Optional` **\_capability**: [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_capability](EShapeTriangle.md#_capability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_connector](EShapeTriangle.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L77)

___

### \_corner

• `Protected` **\_corner**: `number`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_corner](EShapeTriangle.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L30)

___

### \_image

• `Protected` `Optional` **\_image**: [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_image](EShapeTriangle.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L31)

___

### \_lockTransformChild

• `Protected` **\_lockTransformChild**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_lockTransformChild](EShapeTriangle.md#_locktransformchild)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L81)

___

### \_lockTransformParent

• `Protected` **\_lockTransformParent**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_lockTransformParent](EShapeTriangle.md#_locktransformparent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_lockTransformThis

• `Protected` **\_lockTransformThis**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_lockTransformThis](EShapeTriangle.md#_locktransformthis)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_lockUploaded

• `Protected` **\_lockUploaded**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_lockUploaded](EShapeTriangle.md#_lockuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_points

• `Protected` **\_points**: [`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md)

#### Overrides

[EShapeTriangle](EShapeTriangle.md).[_points](EShapeTriangle.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L17)

___

### \_radius

• `Protected` **\_radius**: `number`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_radius](EShapeTriangle.md#_radius)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L29)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_state](EShapeTriangle.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### \_tester

• `Protected` **\_tester**: [`EShapeLineOfAnyPointsHitTester`](../index.md#eshapelineofanypointshittester)\<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L18)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[_visible](EShapeTriangle.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L79)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[action](../interfaces/EShapeLineOfAny.md#action)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[action](EShapeTriangle.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L71)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[children](../interfaces/EShapeLineOfAny.md#children)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[children](EShapeTriangle.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### cursor

• `Optional` **cursor**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[cursor](../interfaces/EShapeLineOfAny.md#cursor)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[cursor](EShapeTriangle.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L72)

___

### data

• `Readonly` **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[data](../interfaces/EShapeLineOfAny.md#data)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[data](EShapeTriangle.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L36)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[editor](../interfaces/EShapeLineOfAny.md#editor)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[editor](EShapeTriangle.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L110)

___

### fill

• `Readonly` **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[fill](../interfaces/EShapeLineOfAny.md#fill)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[fill](EShapeTriangle.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L27)

___

### gradient

• `Optional` **gradient**: [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[gradient](../interfaces/EShapeLineOfAny.md#gradient)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[gradient](EShapeTriangle.md#gradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L32)

___

### id

• **id**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[id](../interfaces/EShapeLineOfAny.md#id)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[id](EShapeTriangle.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L54)

___

### index

• **index**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[index](../interfaces/EShapeLineOfAny.md#index)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[index](EShapeTriangle.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### interactive

• **interactive**: `boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[interactive](../interfaces/EShapeLineOfAny.md#interactive)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[interactive](EShapeTriangle.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[layout](../interfaces/EShapeLineOfAny.md#layout)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[layout](EShapeTriangle.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[parent](../interfaces/EShapeLineOfAny.md#parent)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[parent](EShapeTriangle.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### reference

• **reference**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[reference](../interfaces/EShapeLineOfAny.md#reference)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[reference](EShapeTriangle.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L104)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](../interfaces/EShapeRuntime.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[runtime](../interfaces/EShapeLineOfAny.md#runtime)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[runtime](EShapeTriangle.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L107)

___

### selected

• **selected**: `boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[selected](../interfaces/EShapeLineOfAny.md#selected)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[selected](EShapeTriangle.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L103)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[shortcut](../interfaces/EShapeLineOfAny.md#shortcut)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[shortcut](EShapeTriangle.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L74)

___

### size

• `Readonly` **size**: `IPoint`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[size](../interfaces/EShapeLineOfAny.md#size)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[size](EShapeTriangle.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L26)

___

### stroke

• `Readonly` **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[stroke](../interfaces/EShapeLineOfAny.md#stroke)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[stroke](EShapeTriangle.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L28)

___

### tag

• `Readonly` **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`Deprecated`**

in favor of [data](EShapePrimitive.md#data)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[tag](../interfaces/EShapeLineOfAny.md#tag)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[tag](EShapeTriangle.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L35)

___

### text

• `Readonly` **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[text](../interfaces/EShapeLineOfAny.md#text)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[text](EShapeTriangle.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L33)

___

### texture

• `Optional` **texture**: `Texture`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[texture](../interfaces/EShapeLineOfAny.md#texture)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[texture](EShapeTriangle.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L65)

___

### title

• `Optional` **title**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[title](../interfaces/EShapeLineOfAny.md#title)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[title](EShapeTriangle.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[transform](../interfaces/EShapeLineOfAny.md#transform)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[transform](EShapeTriangle.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L60)

___

### type

• `Readonly` **type**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[type](../interfaces/EShapeLineOfAny.md#type)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[type](EShapeTriangle.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L56)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[uploaded](../interfaces/EShapeLineOfAny.md#uploaded)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[uploaded](EShapeTriangle.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L113)

___

### uuid

• **uuid**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[uuid](../interfaces/EShapeLineOfAny.md#uuid)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[uuid](EShapeTriangle.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[WORK_HIT_TEST_DATA](EShapeTriangle.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L53)

## Accessors

### capability

• `get` **capability**(): [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

[`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[capability](../interfaces/EShapeLineOfAny.md#capability)

#### Inherited from

EShapeTriangle.capability

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:803](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L803)

___

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[connector](../interfaces/EShapeLineOfAny.md#connector)

#### Inherited from

EShapeTriangle.connector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L296)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L92)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L96)

___

### image

• `get` **image**(): `undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Returns

`undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[image](../interfaces/EShapeLineOfAny.md#image)

#### Inherited from

EShapeTriangle.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L114)

• `set` **image**(`image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md) |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[image](../interfaces/EShapeLineOfAny.md#image)

#### Inherited from

EShapeTriangle.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L118)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L29)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L103)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L107)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L288)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L792)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:305](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L305)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:316](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L316)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L323)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[addListener](../interfaces/EShapeLineOfAny.md#addlistener)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[addListener](EShapeTriangle.md#addlistener)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[addUuid](../interfaces/EShapeLineOfAny.md#adduuid)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[addUuid](EShapeTriangle.md#adduuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:489](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L489)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[attach](../interfaces/EShapeLineOfAny.md#attach)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[attach](EShapeTriangle.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L346)

___

### blur

▸ **blur**(): `this`

#### Returns

`this`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[blur](../interfaces/EShapeLineOfAny.md#blur)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[blur](EShapeTriangle.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:821](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L821)

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
| `toThreshold` | ``null`` \| [`EShapeLineOfAnyPointsHitTesterToThreshold`](../index.md#eshapelineofanypointshittestertothreshold) |
| `toRange` | ``null`` \| [`EShapeLineOfAnyPointsHitTesterToRange`](../index.md#eshapelineofanypointshittestertorange) |
| `tester` | ``null`` \| [`EShapeLineOfAnyPointsHitTester`](../index.md#eshapelineofanypointshittester)\<`RESULT`\> |
| `result` | `RESULT` |

#### Returns

`boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[calcHitPoint](../interfaces/EShapeLineOfAny.md#calchitpoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L79)

___

### callChildTransformChange

▸ **callChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[callChildTransformChange](EShapeTriangle.md#callchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L186)

___

### callParentTransformChange

▸ **callParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[callParentTransformChange](EShapeTriangle.md#callparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L201)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L33)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:562](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L562)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L37)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:641](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L641)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:624](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L624)

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

[EShapeTriangle](EShapeTriangle.md).[containsChildren](EShapeTriangle.md#containschildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:601](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L601)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-triangles.ts#L63)

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

[EShapeTriangle](EShapeTriangle.md).[containsText](EShapeTriangle.md#containstext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L580)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[copy](../interfaces/EShapeLineOfAny.md#copy)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[copy](EShapeTriangle.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:866](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L866)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L768)

___

### detach

▸ **detach**(`exceptions?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](../interfaces/EShape.md)\> |

#### Returns

`this`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[detach](../interfaces/EShapeLineOfAny.md#detach)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[detach](EShapeTriangle.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L374)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[emit](../interfaces/EShapeLineOfAny.md#emit)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[emit](EShapeTriangle.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25441

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

node_modules/pixi.js/pixi.js.d.ts:25415

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[focus](../interfaces/EShapeLineOfAny.md#focus)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[focus](EShapeTriangle.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:816](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L816)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[getBounds](../interfaces/EShapeLineOfAny.md#getbounds)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[getBounds](EShapeTriangle.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:671](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L671)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[getBoundsInternal](../interfaces/EShapeLineOfAny.md#getboundsinternal)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[getBoundsInternal](EShapeTriangle.md#getboundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:687](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L687)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[getBoundsLocal](../interfaces/EShapeLineOfAny.md#getboundslocal)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[getBoundsLocal](EShapeTriangle.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:703](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L703)

___

### getBoundsSize

▸ **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[getBoundsSize](EShapeTriangle.md#getboundssize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:719](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L719)

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

[EShapeTriangle](EShapeTriangle.md).[getBounds_](EShapeTriangle.md#getbounds_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L723)

___

### getCapability

▸ **getCapability**(): `undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

`undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[getCapability](../interfaces/EShapeLineOfAny.md#getcapability)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[getCapability](EShapeTriangle.md#getcapability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:812](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L812)

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

[EShapeTriangle](EShapeTriangle.md).[getHitTestSize](EShapeTriangle.md#gethittestsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L530)

___

### getShapeScale

▸ **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[getShapeScale](EShapeTriangle.md#getshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:506](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L506)

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

[EShapeTriangle](EShapeTriangle.md).[getStrokeWidthScale](EShapeTriangle.md#getstrokewidthscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:514](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L514)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[listeners](../interfaces/EShapeLineOfAny.md#listeners)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[listeners](EShapeTriangle.md#listeners)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[lock](../interfaces/EShapeLineOfAny.md#lock)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[lock](EShapeTriangle.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:217](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L217)

___

### newFill

▸ **newFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[newFill](EShapeTriangle.md#newfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L62)

___

### newSize

▸ **newSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[newSize](EShapeTriangle.md#newsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L51)

___

### newStroke

▸ **newStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[newStroke](EShapeTriangle.md#newstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L66)

___

### newText

▸ **newText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[newText](EShapeTriangle.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L79)

___

### newTransform

▸ **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[newTransform](EShapeTriangle.md#newtransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L145)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[off](../interfaces/EShapeLineOfAny.md#off)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[off](EShapeTriangle.md#off)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[on](../interfaces/EShapeLineOfAny.md#on)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[on](EShapeTriangle.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L361)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:264](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L264)

___

### onDetach

▸ **onDetach**(`exceptions?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](../interfaces/EShape.md)\> |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[onDetach](../interfaces/EShapeLineOfAny.md#ondetach)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[onDetach](EShapeTriangle.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L390)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:835](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L835)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L843)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L208)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:859](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L859)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L149)

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

[EShapeTriangle](EShapeTriangle.md).[onStateChange](EShapeTriangle.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L777)

___

### onThisTransformChange

▸ **onThisTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[onThisTransformChange](EShapeTriangle.md#onthistransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L193)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L174)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[once](../interfaces/EShapeLineOfAny.md#once)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[once](EShapeTriangle.md#once)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[removeAllListeners](../interfaces/EShapeLineOfAny.md#removealllisteners)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[removeAllListeners](EShapeTriangle.md#removealllisteners)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[removeListener](../interfaces/EShapeLineOfAny.md#removelistener)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[removeListener](EShapeTriangle.md#removelistener)

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

[EShapeTriangle](EShapeTriangle.md).[select](EShapeTriangle.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:645](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L645)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:435](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L435)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:416](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L416)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L137)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L132)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:430](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L430)

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

[EShapeTriangle](EShapeTriangle.md).[setFocused](EShapeTriangle.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:826](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L826)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L338)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L650)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:537](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L537)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:659](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L659)

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

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[unlock](../interfaces/EShapeLineOfAny.md#unlock)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[unlock](EShapeTriangle.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L233)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L852)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:403](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L403)

___

### updateUploaded

▸ **updateUploaded**(`recursively?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `recursively?` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[updateUploaded](../interfaces/EShapeLineOfAny.md#updateuploaded)

#### Inherited from

[EShapeTriangle](EShapeTriangle.md).[updateUploaded](EShapeTriangle.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L268)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L497)
