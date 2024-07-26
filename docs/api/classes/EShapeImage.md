[Winter Cardinal UI - v0.442.0](../index.md) / EShapeImage

# Class: EShapeImage

## Hierarchy

- [`EShapeRectangle`](EShapeRectangle.md)

  ↳ **`EShapeImage`**

  ↳↳ [`EShapeImageSdf`](EShapeImageSdf.md)

## Table of contents

### Constructors

- [constructor](EShapeImage.md#constructor)

### Properties

- [\_bounds](EShapeImage.md#_bounds)
- [\_boundsInternal](EShapeImage.md#_boundsinternal)
- [\_boundsInternalTransformId](EShapeImage.md#_boundsinternaltransformid)
- [\_boundsLocal](EShapeImage.md#_boundslocal)
- [\_boundsLocalTransformId](EShapeImage.md#_boundslocaltransformid)
- [\_boundsTransformId](EShapeImage.md#_boundstransformid)
- [\_capability](EShapeImage.md#_capability)
- [\_connector](EShapeImage.md#_connector)
- [\_corner](EShapeImage.md#_corner)
- [\_image](EShapeImage.md#_image)
- [\_lockTransformChild](EShapeImage.md#_locktransformchild)
- [\_lockTransformParent](EShapeImage.md#_locktransformparent)
- [\_lockTransformThis](EShapeImage.md#_locktransformthis)
- [\_lockUploaded](EShapeImage.md#_lockuploaded)
- [\_points](EShapeImage.md#_points)
- [\_radius](EShapeImage.md#_radius)
- [\_state](EShapeImage.md#_state)
- [\_visible](EShapeImage.md#_visible)
- [action](EShapeImage.md#action)
- [children](EShapeImage.md#children)
- [cursor](EShapeImage.md#cursor)
- [data](EShapeImage.md#data)
- [editor](EShapeImage.md#editor)
- [fill](EShapeImage.md#fill)
- [gradient](EShapeImage.md#gradient)
- [id](EShapeImage.md#id)
- [index](EShapeImage.md#index)
- [interactive](EShapeImage.md#interactive)
- [layout](EShapeImage.md#layout)
- [parent](EShapeImage.md#parent)
- [reference](EShapeImage.md#reference)
- [runtime](EShapeImage.md#runtime)
- [selected](EShapeImage.md#selected)
- [shortcut](EShapeImage.md#shortcut)
- [size](EShapeImage.md#size)
- [stroke](EShapeImage.md#stroke)
- [tag](EShapeImage.md#tag)
- [text](EShapeImage.md#text)
- [texture](EShapeImage.md#texture)
- [title](EShapeImage.md#title)
- [transform](EShapeImage.md#transform)
- [type](EShapeImage.md#type)
- [uploaded](EShapeImage.md#uploaded)
- [uuid](EShapeImage.md#uuid)
- [WORK\_HIT\_TEST\_DATA](EShapeImage.md#work_hit_test_data)

### Accessors

- [capability](EShapeImage.md#capability)
- [connector](EShapeImage.md#connector)
- [corner](EShapeImage.md#corner)
- [image](EShapeImage.md#image)
- [points](EShapeImage.md#points)
- [radius](EShapeImage.md#radius)
- [root](EShapeImage.md#root)
- [state](EShapeImage.md#state)
- [visible](EShapeImage.md#visible)
- [worldVisible](EShapeImage.md#worldvisible)

### Methods

- [addListener](EShapeImage.md#addlistener)
- [addUuid](EShapeImage.md#adduuid)
- [attach](EShapeImage.md#attach)
- [blur](EShapeImage.md#blur)
- [callChildTransformChange](EShapeImage.md#callchildtransformchange)
- [callParentTransformChange](EShapeImage.md#callparenttransformchange)
- [clone](EShapeImage.md#clone)
- [contains](EShapeImage.md#contains)
- [containsAbs](EShapeImage.md#containsabs)
- [containsAbsBBox](EShapeImage.md#containsabsbbox)
- [containsBBox](EShapeImage.md#containsbbox)
- [containsChildren](EShapeImage.md#containschildren)
- [containsText](EShapeImage.md#containstext)
- [copy](EShapeImage.md#copy)
- [destroy](EShapeImage.md#destroy)
- [detach](EShapeImage.md#detach)
- [emit](EShapeImage.md#emit)
- [eventNames](EShapeImage.md#eventnames)
- [focus](EShapeImage.md#focus)
- [getBounds](EShapeImage.md#getbounds)
- [getBoundsInternal](EShapeImage.md#getboundsinternal)
- [getBoundsLocal](EShapeImage.md#getboundslocal)
- [getBoundsSize](EShapeImage.md#getboundssize)
- [getBounds\_](EShapeImage.md#getbounds_)
- [getCapability](EShapeImage.md#getcapability)
- [getHitTestSize](EShapeImage.md#gethittestsize)
- [getShapeScale](EShapeImage.md#getshapescale)
- [getStrokeWidthScale](EShapeImage.md#getstrokewidthscale)
- [listenerCount](EShapeImage.md#listenercount)
- [listeners](EShapeImage.md#listeners)
- [lock](EShapeImage.md#lock)
- [newFill](EShapeImage.md#newfill)
- [newSize](EShapeImage.md#newsize)
- [newStroke](EShapeImage.md#newstroke)
- [newText](EShapeImage.md#newtext)
- [newTransform](EShapeImage.md#newtransform)
- [off](EShapeImage.md#off)
- [on](EShapeImage.md#on)
- [onAttach](EShapeImage.md#onattach)
- [onChildTransformChange](EShapeImage.md#onchildtransformchange)
- [onDetach](EShapeImage.md#ondetach)
- [onKeyDown](EShapeImage.md#onkeydown)
- [onKeyUp](EShapeImage.md#onkeyup)
- [onParentTransformChange](EShapeImage.md#onparenttransformchange)
- [onRender](EShapeImage.md#onrender)
- [onSizeChange](EShapeImage.md#onsizechange)
- [onStateChange](EShapeImage.md#onstatechange)
- [onThisTransformChange](EShapeImage.md#onthistransformchange)
- [onTransformChange](EShapeImage.md#ontransformchange)
- [once](EShapeImage.md#once)
- [removeAllListeners](EShapeImage.md#removealllisteners)
- [removeListener](EShapeImage.md#removelistener)
- [select](EShapeImage.md#select)
- [serialize](EShapeImage.md#serialize)
- [serializeChildren](EShapeImage.md#serializechildren)
- [serializeGradient](EShapeImage.md#serializegradient)
- [serializeImage](EShapeImage.md#serializeimage)
- [serializeState](EShapeImage.md#serializestate)
- [setFocused](EShapeImage.md#setfocused)
- [toDirty](EShapeImage.md#todirty)
- [toGlobal](EShapeImage.md#toglobal)
- [toHitTestData](EShapeImage.md#tohittestdata)
- [toLocal](EShapeImage.md#tolocal)
- [unlock](EShapeImage.md#unlock)
- [update](EShapeImage.md#update)
- [updateTransform](EShapeImage.md#updatetransform)
- [updateUploaded](EShapeImage.md#updateuploaded)
- [updateUuid](EShapeImage.md#updateuuid)

## Constructors

### constructor

• **new EShapeImage**(`image?`, `type?`): [`EShapeImage`](EShapeImage.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `image?` | [`EShapeImageLike`](../interfaces/EShapeImageLike.md) | `undefined` |
| `type` | `number` | `EShapeType.IMAGE` |

#### Returns

[`EShapeImage`](EShapeImage.md)

#### Overrides

[EShapeRectangle](EShapeRectangle.md).[constructor](EShapeRectangle.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-image.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-image.ts#L11)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_bounds](EShapeRectangle.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsInternal](EShapeRectangle.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L88)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsInternalTransformId](EShapeRectangle.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsLocal](EShapeRectangle.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L90)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsLocalTransformId](EShapeRectangle.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L91)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_boundsTransformId](EShapeRectangle.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_capability

• `Protected` `Optional` **\_capability**: [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_capability](EShapeRectangle.md#_capability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_connector](EShapeRectangle.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L77)

___

### \_corner

• `Protected` **\_corner**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_corner](EShapeRectangle.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L30)

___

### \_image

• `Protected` `Optional` **\_image**: [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_image](EShapeRectangle.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L31)

___

### \_lockTransformChild

• `Protected` **\_lockTransformChild**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_lockTransformChild](EShapeRectangle.md#_locktransformchild)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L81)

___

### \_lockTransformParent

• `Protected` **\_lockTransformParent**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_lockTransformParent](EShapeRectangle.md#_locktransformparent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_lockTransformThis

• `Protected` **\_lockTransformThis**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_lockTransformThis](EShapeRectangle.md#_locktransformthis)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_lockUploaded

• `Protected` **\_lockUploaded**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_lockUploaded](EShapeRectangle.md#_lockuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_points

• `Protected` `Optional` **\_points**: [`EShapePoints`](../interfaces/EShapePoints.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_points](EShapeRectangle.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L63)

___

### \_radius

• `Protected` **\_radius**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_radius](EShapeRectangle.md#_radius)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L29)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_state](EShapeRectangle.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[_visible](EShapeRectangle.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L79)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[action](EShapeRectangle.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L71)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[children](EShapeRectangle.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### cursor

• `Optional` **cursor**: `string`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[cursor](EShapeRectangle.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L72)

___

### data

• `Readonly` **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[data](EShapeRectangle.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L36)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[editor](EShapeRectangle.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L110)

___

### fill

• `Readonly` **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[fill](EShapeRectangle.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L27)

___

### gradient

• `Optional` **gradient**: [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[gradient](EShapeRectangle.md#gradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L32)

___

### id

• **id**: `string`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[id](EShapeRectangle.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L54)

___

### index

• **index**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[index](EShapeRectangle.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### interactive

• **interactive**: `boolean`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[interactive](EShapeRectangle.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[layout](EShapeRectangle.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[parent](EShapeRectangle.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### reference

• **reference**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[reference](EShapeRectangle.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L104)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](../interfaces/EShapeRuntime.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[runtime](EShapeRectangle.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L107)

___

### selected

• **selected**: `boolean`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[selected](EShapeRectangle.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L103)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[shortcut](EShapeRectangle.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L74)

___

### size

• `Readonly` **size**: `IPoint`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[size](EShapeRectangle.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L26)

___

### stroke

• `Readonly` **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[stroke](EShapeRectangle.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L28)

___

### tag

• `Readonly` **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`Deprecated`**

in favor of [data](EShapePrimitive.md#data)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[tag](EShapeRectangle.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L35)

___

### text

• `Readonly` **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[text](EShapeRectangle.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L33)

___

### texture

• `Optional` **texture**: `Texture`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[texture](EShapeRectangle.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L65)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[title](EShapeRectangle.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[transform](EShapeRectangle.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L60)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[type](EShapeRectangle.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L56)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[uploaded](EShapeRectangle.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L113)

___

### uuid

• **uuid**: `number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[uuid](EShapeRectangle.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[WORK_HIT_TEST_DATA](EShapeRectangle.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L53)

## Accessors

### capability

• `get` **capability**(): [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

[`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

EShapeRectangle.capability

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:803](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L803)

___

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

EShapeRectangle.connector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L296)

___

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Inherited from

EShapeRectangle.corner

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

EShapeRectangle.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L96)

___

### image

• `get` **image**(): `undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Returns

`undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Inherited from

EShapeRectangle.image

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

EShapeRectangle.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L118)

___

### points

• `get` **points**(): `undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Returns

`undefined` \| [`EShapePoints`](../interfaces/EShapePoints.md)

#### Inherited from

EShapeRectangle.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L284)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Inherited from

EShapeRectangle.radius

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

EShapeRectangle.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L107)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Inherited from

EShapeRectangle.root

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L288)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

EShapeRectangle.state

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L792)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeRectangle.visible

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

EShapeRectangle.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:316](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L316)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeRectangle.worldVisible

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

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[addUuid](EShapeRectangle.md#adduuid)

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

[EShapeRectangle](EShapeRectangle.md).[attach](EShapeRectangle.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L346)

___

### blur

▸ **blur**(): `this`

#### Returns

`this`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[blur](EShapeRectangle.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:821](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L821)

___

### callChildTransformChange

▸ **callChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[callChildTransformChange](EShapeRectangle.md#callchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L186)

___

### callParentTransformChange

▸ **callParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[callParentTransformChange](EShapeRectangle.md#callparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L201)

___

### clone

▸ **clone**(): [`EShapeImage`](EShapeImage.md)

#### Returns

[`EShapeImage`](EShapeImage.md)

#### Overrides

[EShapeRectangle](EShapeRectangle.md).[clone](EShapeRectangle.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-image.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-image.ts#L20)

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

[EShapeRectangle](EShapeRectangle.md).[contains](EShapeRectangle.md#contains)

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

[EShapeRectangle](EShapeRectangle.md).[containsAbs](EShapeRectangle.md#containsabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-rectangle.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-rectangle.ts#L19)

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

[EShapeRectangle](EShapeRectangle.md).[containsAbsBBox](EShapeRectangle.md#containsabsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:641](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L641)

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

[EShapeRectangle](EShapeRectangle.md).[containsBBox](EShapeRectangle.md#containsbbox)

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

[EShapeRectangle](EShapeRectangle.md).[containsChildren](EShapeRectangle.md#containschildren)

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

[EShapeRectangle](EShapeRectangle.md).[containsText](EShapeRectangle.md#containstext)

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

[EShapeRectangle](EShapeRectangle.md).[copy](EShapeRectangle.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:866](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L866)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[destroy](EShapeRectangle.md#destroy)

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

[EShapeRectangle](EShapeRectangle.md).[detach](EShapeRectangle.md#detach)

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

[EShapeRectangle](EShapeRectangle.md).[emit](EShapeRectangle.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25441

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[eventNames](EShapeRectangle.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[focus](EShapeRectangle.md#focus)

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

[EShapeRectangle](EShapeRectangle.md).[getBounds](EShapeRectangle.md#getbounds)

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

[EShapeRectangle](EShapeRectangle.md).[getBoundsInternal](EShapeRectangle.md#getboundsinternal)

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

[EShapeRectangle](EShapeRectangle.md).[getBoundsLocal](EShapeRectangle.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:703](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L703)

___

### getBoundsSize

▸ **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[getBoundsSize](EShapeRectangle.md#getboundssize)

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

[EShapeRectangle](EShapeRectangle.md).[getBounds_](EShapeRectangle.md#getbounds_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L723)

___

### getCapability

▸ **getCapability**(): `undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

`undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[getCapability](EShapeRectangle.md#getcapability)

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

[EShapeRectangle](EShapeRectangle.md).[getHitTestSize](EShapeRectangle.md#gethittestsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L530)

___

### getShapeScale

▸ **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[getShapeScale](EShapeRectangle.md#getshapescale)

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

[EShapeRectangle](EShapeRectangle.md).[getStrokeWidthScale](EShapeRectangle.md#getstrokewidthscale)

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

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[lock](EShapeRectangle.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:217](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L217)

___

### newFill

▸ **newFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newFill](EShapeRectangle.md#newfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L62)

___

### newSize

▸ **newSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newSize](EShapeRectangle.md#newsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L51)

___

### newStroke

▸ **newStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newStroke](EShapeRectangle.md#newstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L66)

___

### newText

▸ **newText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newText](EShapeRectangle.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L79)

___

### newTransform

▸ **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[newTransform](EShapeRectangle.md#newtransform)

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

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[on](EShapeRectangle.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[onAttach](EShapeRectangle.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L361)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[onChildTransformChange](EShapeRectangle.md#onchildtransformchange)

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

[EShapeRectangle](EShapeRectangle.md).[onDetach](EShapeRectangle.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L390)

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

[EShapeRectangle](EShapeRectangle.md).[onKeyUp](EShapeRectangle.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L843)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[onParentTransformChange](EShapeRectangle.md#onparenttransformchange)

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

[EShapeRectangle](EShapeRectangle.md).[onRender](EShapeRectangle.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:859](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L859)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[onSizeChange](EShapeRectangle.md#onsizechange)

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

[EShapeRectangle](EShapeRectangle.md).[onStateChange](EShapeRectangle.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L777)

___

### onThisTransformChange

▸ **onThisTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[onThisTransformChange](EShapeRectangle.md#onthistransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L193)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[onTransformChange](EShapeRectangle.md#ontransformchange)

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

[EShapeRectangle](EShapeRectangle.md).[serialize](EShapeRectangle.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:435](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L435)

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

[EShapeRectangle](EShapeRectangle.md).[serializeGradient](EShapeRectangle.md#serializegradient)

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

[EShapeRectangle](EShapeRectangle.md).[serializeImage](EShapeRectangle.md#serializeimage)

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

[EShapeRectangle](EShapeRectangle.md).[serializeState](EShapeRectangle.md#serializestate)

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

[EShapeRectangle](EShapeRectangle.md).[setFocused](EShapeRectangle.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:826](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L826)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[toDirty](EShapeRectangle.md#todirty)

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

[EShapeRectangle](EShapeRectangle.md).[toGlobal](EShapeRectangle.md#toglobal)

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

[EShapeRectangle](EShapeRectangle.md).[toHitTestData](EShapeRectangle.md#tohittestdata)

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

[EShapeRectangle](EShapeRectangle.md).[toLocal](EShapeRectangle.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:659](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L659)

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

[EShapeRectangle](EShapeRectangle.md).[unlock](EShapeRectangle.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L233)

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

[EShapeRectangle](EShapeRectangle.md).[update](EShapeRectangle.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L852)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeRectangle](EShapeRectangle.md).[updateTransform](EShapeRectangle.md#updatetransform)

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

[EShapeRectangle](EShapeRectangle.md).[updateUploaded](EShapeRectangle.md#updateuploaded)

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

[EShapeRectangle](EShapeRectangle.md).[updateUuid](EShapeRectangle.md#updateuuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L497)
