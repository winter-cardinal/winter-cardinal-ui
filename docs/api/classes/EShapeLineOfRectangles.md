[Winter Cardinal UI - v0.457.0](../index.md) / EShapeLineOfRectangles

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
- [\_lockTransformChild](EShapeLineOfRectangles.md#_locktransformchild)
- [\_lockTransformParent](EShapeLineOfRectangles.md#_locktransformparent)
- [\_lockTransformThis](EShapeLineOfRectangles.md#_locktransformthis)
- [\_lockUploaded](EShapeLineOfRectangles.md#_lockuploaded)
- [\_points](EShapeLineOfRectangles.md#_points)
- [\_radius](EShapeLineOfRectangles.md#_radius)
- [\_state](EShapeLineOfRectangles.md#_state)
- [\_tester](EShapeLineOfRectangles.md#_tester)
- [\_visible](EShapeLineOfRectangles.md#_visible)
- [action](EShapeLineOfRectangles.md#action)
- [children](EShapeLineOfRectangles.md#children)
- [cursor](EShapeLineOfRectangles.md#cursor)
- [data](EShapeLineOfRectangles.md#data)
- [editor](EShapeLineOfRectangles.md#editor)
- [fill](EShapeLineOfRectangles.md#fill)
- [gradient](EShapeLineOfRectangles.md#gradient)
- [id](EShapeLineOfRectangles.md#id)
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
- [attach](EShapeLineOfRectangles.md#attach)
- [blur](EShapeLineOfRectangles.md#blur)
- [calcHitPoint](EShapeLineOfRectangles.md#calchitpoint)
- [callChildTransformChange](EShapeLineOfRectangles.md#callchildtransformchange)
- [callParentTransformChange](EShapeLineOfRectangles.md#callparenttransformchange)
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
- [lock](EShapeLineOfRectangles.md#lock)
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
- [onThisTransformChange](EShapeLineOfRectangles.md#onthistransformchange)
- [onTransformChange](EShapeLineOfRectangles.md#ontransformchange)
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
- [unlock](EShapeLineOfRectangles.md#unlock)
- [update](EShapeLineOfRectangles.md#update)
- [updateTransform](EShapeLineOfRectangles.md#updatetransform)
- [updateUploaded](EShapeLineOfRectangles.md#updateuploaded)
- [updateUuid](EShapeLineOfRectangles.md#updateuuid)

## Constructors

### constructor

• **new EShapeLineOfRectangles**(`type?`): [`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `number` | `EShapeType.LINE_OF_RECTANGLES` |

#### Returns

[`EShapeLineOfRectangles`](EShapeLineOfRectangles.md)

#### Overrides

[EShapeRectangle](EShapeRectangle.md).[constructor](EShapeRectangle.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L20)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_bounds](EShapeRectangle.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsInternal](EShapeRectangle.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsInternalTransformId](EShapeRectangle.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L90)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsLocal](EShapeRectangle.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L91)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsLocalTransformId](EShapeRectangle.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L92)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsTransformId](EShapeRectangle.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L88)

___

### \_capability

• `Protected` `Optional` **\_capability**: [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_capability](EShapeRectangle.md#_capability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L95)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_connector](EShapeRectangle.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L78)

___

### \_corner

• `Protected` **\_corner**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_corner](EShapeRectangle.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L30)

___

### \_image

• `Protected` `Optional` **\_image**: [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_image](EShapeRectangle.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L31)

___

### \_lockTransformChild

• `Protected` **\_lockTransformChild**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_lockTransformChild](EShapeRectangle.md#_locktransformchild)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_lockTransformParent

• `Protected` **\_lockTransformParent**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_lockTransformParent](EShapeRectangle.md#_locktransformparent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_lockTransformThis

• `Protected` **\_lockTransformThis**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_lockTransformThis](EShapeRectangle.md#_locktransformthis)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_lockUploaded

• `Protected` **\_lockUploaded**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_lockUploaded](EShapeRectangle.md#_lockuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L85)

___

### \_points

• `Protected` **\_points**: [`EShapeLineOfAnyPoints`](../interfaces/EShapeLineOfAnyPoints.md)

#### Overrides

[EShapeRectangle](EShapeRectangle.md).[_points](EShapeRectangle.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L17)

___

### \_radius

• `Protected` **\_radius**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_radius](EShapeRectangle.md#_radius)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L29)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_state](EShapeRectangle.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### \_tester

• `Protected` **\_tester**: [`EShapeLineOfAnyPointsHitTester`](../index.md#eshapelineofanypointshittester)\<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L18)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_visible](EShapeRectangle.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L80)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[action](../interfaces/EShapeLineOfAny.md#action)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[action](EShapeRectangle.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L72)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[children](../interfaces/EShapeLineOfAny.md#children)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[children](EShapeRectangle.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### cursor

• `Optional` **cursor**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[cursor](../interfaces/EShapeLineOfAny.md#cursor)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[cursor](EShapeRectangle.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### data

• `Readonly` **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[data](../interfaces/EShapeLineOfAny.md#data)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[data](EShapeRectangle.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L36)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[editor](../interfaces/EShapeLineOfAny.md#editor)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[editor](EShapeRectangle.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L111)

___

### fill

• `Readonly` **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[fill](../interfaces/EShapeLineOfAny.md#fill)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[fill](EShapeRectangle.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L27)

___

### gradient

• `Optional` **gradient**: [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[gradient](../interfaces/EShapeLineOfAny.md#gradient)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[gradient](EShapeRectangle.md#gradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L32)

___

### id

• **id**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[id](../interfaces/EShapeLineOfAny.md#id)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[id](EShapeRectangle.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### index

• **index**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[index](../interfaces/EShapeLineOfAny.md#index)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[index](EShapeRectangle.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L103)

___

### interactive

• **interactive**: `boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[interactive](../interfaces/EShapeLineOfAny.md#interactive)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[interactive](EShapeRectangle.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L74)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[layout](../interfaces/EShapeLineOfAny.md#layout)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[layout](EShapeRectangle.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L100)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[parent](../interfaces/EShapeLineOfAny.md#parent)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[parent](EShapeRectangle.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### reference

• **reference**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[reference](../interfaces/EShapeLineOfAny.md#reference)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[reference](EShapeRectangle.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L105)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](../interfaces/EShapeRuntime.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[runtime](../interfaces/EShapeLineOfAny.md#runtime)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[runtime](EShapeRectangle.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L108)

___

### selected

• **selected**: `boolean`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[selected](../interfaces/EShapeLineOfAny.md#selected)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[selected](EShapeRectangle.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L104)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[shortcut](../interfaces/EShapeLineOfAny.md#shortcut)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[shortcut](EShapeRectangle.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### size

• `Readonly` **size**: `IPoint`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[size](../interfaces/EShapeLineOfAny.md#size)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[size](EShapeRectangle.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L26)

___

### stroke

• `Readonly` **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[stroke](../interfaces/EShapeLineOfAny.md#stroke)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[stroke](EShapeRectangle.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L28)

___

### tag

• `Readonly` **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`Deprecated`**

in favor of [data](EShapePrimitive.md#data)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[tag](../interfaces/EShapeLineOfAny.md#tag)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[tag](EShapeRectangle.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L35)

___

### text

• `Readonly` **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[text](../interfaces/EShapeLineOfAny.md#text)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[text](EShapeRectangle.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L33)

___

### texture

• `Optional` **texture**: `Texture`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[texture](../interfaces/EShapeLineOfAny.md#texture)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[texture](EShapeRectangle.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L66)

___

### title

• `Optional` **title**: `string`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[title](../interfaces/EShapeLineOfAny.md#title)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[title](EShapeRectangle.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L76)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[transform](../interfaces/EShapeLineOfAny.md#transform)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[transform](EShapeRectangle.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L61)

___

### type

• `Readonly` **type**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[type](../interfaces/EShapeLineOfAny.md#type)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[type](EShapeRectangle.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L57)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[uploaded](../interfaces/EShapeLineOfAny.md#uploaded)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[uploaded](EShapeRectangle.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L114)

___

### uuid

• **uuid**: `number`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[uuid](../interfaces/EShapeLineOfAny.md#uuid)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[uuid](EShapeRectangle.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L56)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[WORK_HIT_TEST_DATA](EShapeRectangle.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L54)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:808](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L808)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:299](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L299)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L92)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L96)

___

### image

• `get` **image**(): `undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Returns

`undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[image](../interfaces/EShapeLineOfAny.md#image)

#### Inherited from

EShapeRectangle.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L114)

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

EShapeRectangle.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L118)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L29)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L103)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L107)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L291)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:797](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L797)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L308)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L319)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:326](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L326)

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

[EShapeRectangle](EShapeRectangle.md).[addListener](EShapeRectangle.md#addlistener)

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

[EShapeRectangle](EShapeRectangle.md).[addUuid](EShapeRectangle.md#adduuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:492](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L492)

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

[EShapeRectangle](EShapeRectangle.md).[attach](EShapeRectangle.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:349](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L349)

___

### blur

▸ **blur**(): `this`

#### Returns

`this`

#### Implementation of

[EShapeLineOfAny](../interfaces/EShapeLineOfAny.md).[blur](../interfaces/EShapeLineOfAny.md#blur)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[blur](EShapeRectangle.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:826](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L826)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L79)

___

### callChildTransformChange

▸ **callChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[callChildTransformChange](EShapeRectangle.md#callchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L189)

___

### callParentTransformChange

▸ **callParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[callParentTransformChange](EShapeRectangle.md#callparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L204)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L33)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:565](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L565)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L37)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:644](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L644)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:627](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L627)

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

[EShapeRectangle](EShapeRectangle.md).[containsChildren](EShapeRectangle.md#containschildren)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:604](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L604)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-rectangles.ts#L63)

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

[EShapeRectangle](EShapeRectangle.md).[containsText](EShapeRectangle.md#containstext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:583](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L583)

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

[EShapeRectangle](EShapeRectangle.md).[copy](EShapeRectangle.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:881](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L881)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:771](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L771)

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

[EShapeRectangle](EShapeRectangle.md).[detach](EShapeRectangle.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:377](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L377)

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

[EShapeRectangle](EShapeRectangle.md).[emit](EShapeRectangle.md#emit)

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

[EShapeRectangle](EShapeRectangle.md).[eventNames](EShapeRectangle.md#eventnames)

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

[EShapeRectangle](EShapeRectangle.md).[focus](EShapeRectangle.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:821](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L821)

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

[EShapeRectangle](EShapeRectangle.md).[getBounds](EShapeRectangle.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:674](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L674)

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

[EShapeRectangle](EShapeRectangle.md).[getBoundsInternal](EShapeRectangle.md#getboundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L690)

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

[EShapeRectangle](EShapeRectangle.md).[getBoundsLocal](EShapeRectangle.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:706](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L706)

___

### getBoundsSize

▸ **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[getBoundsSize](EShapeRectangle.md#getboundssize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:722](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L722)

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

[EShapeRectangle](EShapeRectangle.md).[getBounds_](EShapeRectangle.md#getbounds_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:726](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L726)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:817](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L817)

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

[EShapeRectangle](EShapeRectangle.md).[getHitTestSize](EShapeRectangle.md#gethittestsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:533](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L533)

___

### getShapeScale

▸ **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[getShapeScale](EShapeRectangle.md#getshapescale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:509](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L509)

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

[EShapeRectangle](EShapeRectangle.md).[getStrokeWidthScale](EShapeRectangle.md#getstrokewidthscale)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:517](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L517)

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

[EShapeRectangle](EShapeRectangle.md).[listeners](EShapeRectangle.md#listeners)

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

[EShapeRectangle](EShapeRectangle.md).[lock](EShapeRectangle.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L220)

___

### newFill

▸ **newFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newFill](EShapeRectangle.md#newfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L62)

___

### newSize

▸ **newSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newSize](EShapeRectangle.md#newsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L51)

___

### newStroke

▸ **newStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newStroke](EShapeRectangle.md#newstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L66)

___

### newText

▸ **newText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newText](EShapeRectangle.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L79)

___

### newTransform

▸ **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newTransform](EShapeRectangle.md#newtransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L146)

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

[EShapeRectangle](EShapeRectangle.md).[off](EShapeRectangle.md#off)

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

[EShapeRectangle](EShapeRectangle.md).[on](EShapeRectangle.md#on)

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

[EShapeRectangle](EShapeRectangle.md).[onAttach](EShapeRectangle.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:364](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L364)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L267)

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

[EShapeRectangle](EShapeRectangle.md).[onDetach](EShapeRectangle.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:393](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L393)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:840](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L840)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:851](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L851)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L211)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:872](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L872)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L150)

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

[EShapeRectangle](EShapeRectangle.md).[onStateChange](EShapeRectangle.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:780](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L780)

___

### onThisTransformChange

▸ **onThisTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[onThisTransformChange](EShapeRectangle.md#onthistransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L196)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L177)

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

[EShapeRectangle](EShapeRectangle.md).[once](EShapeRectangle.md#once)

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

[EShapeRectangle](EShapeRectangle.md).[removeAllListeners](EShapeRectangle.md#removealllisteners)

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

[EShapeRectangle](EShapeRectangle.md).[removeListener](EShapeRectangle.md#removelistener)

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

[EShapeRectangle](EShapeRectangle.md).[select](EShapeRectangle.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:648](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L648)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:438](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L438)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:419](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L419)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L137)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L132)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:433](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L433)

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

[EShapeRectangle](EShapeRectangle.md).[setFocused](EShapeRectangle.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:831](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L831)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:341](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L341)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:653](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L653)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:540](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L540)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:662](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L662)

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

[EShapeRectangle](EShapeRectangle.md).[unlock](EShapeRectangle.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L236)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:863](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L863)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:406](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L406)

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

[EShapeRectangle](EShapeRectangle.md).[updateUploaded](EShapeRectangle.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:271](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L271)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L500)
