[Winter Cardinal UI - v0.442.0](../index.md) / EShapeBar

# Class: EShapeBar

## Hierarchy

- [`EShapeLineBase`](EShapeLineBase.md)

  ↳ **`EShapeBar`**

## Table of contents

### Constructors

- [constructor](EShapeBar.md#constructor)

### Properties

- [\_bounds](EShapeBar.md#_bounds)
- [\_boundsInternal](EShapeBar.md#_boundsinternal)
- [\_boundsInternalTransformId](EShapeBar.md#_boundsinternaltransformid)
- [\_boundsLocal](EShapeBar.md#_boundslocal)
- [\_boundsLocalTransformId](EShapeBar.md#_boundslocaltransformid)
- [\_boundsTransformId](EShapeBar.md#_boundstransformid)
- [\_capability](EShapeBar.md#_capability)
- [\_connector](EShapeBar.md#_connector)
- [\_corner](EShapeBar.md#_corner)
- [\_image](EShapeBar.md#_image)
- [\_lockTransformChild](EShapeBar.md#_locktransformchild)
- [\_lockTransformParent](EShapeBar.md#_locktransformparent)
- [\_lockTransformThis](EShapeBar.md#_locktransformthis)
- [\_lockUploaded](EShapeBar.md#_lockuploaded)
- [\_points](EShapeBar.md#_points)
- [\_radius](EShapeBar.md#_radius)
- [\_state](EShapeBar.md#_state)
- [\_visible](EShapeBar.md#_visible)
- [action](EShapeBar.md#action)
- [children](EShapeBar.md#children)
- [cursor](EShapeBar.md#cursor)
- [data](EShapeBar.md#data)
- [editor](EShapeBar.md#editor)
- [fill](EShapeBar.md#fill)
- [gradient](EShapeBar.md#gradient)
- [id](EShapeBar.md#id)
- [index](EShapeBar.md#index)
- [interactive](EShapeBar.md#interactive)
- [layout](EShapeBar.md#layout)
- [parent](EShapeBar.md#parent)
- [reference](EShapeBar.md#reference)
- [runtime](EShapeBar.md#runtime)
- [selected](EShapeBar.md#selected)
- [shortcut](EShapeBar.md#shortcut)
- [size](EShapeBar.md#size)
- [stroke](EShapeBar.md#stroke)
- [tag](EShapeBar.md#tag)
- [text](EShapeBar.md#text)
- [texture](EShapeBar.md#texture)
- [title](EShapeBar.md#title)
- [transform](EShapeBar.md#transform)
- [type](EShapeBar.md#type)
- [uploaded](EShapeBar.md#uploaded)
- [uuid](EShapeBar.md#uuid)
- [WORK\_HIT\_TEST\_DATA](EShapeBar.md#work_hit_test_data)

### Accessors

- [capability](EShapeBar.md#capability)
- [connector](EShapeBar.md#connector)
- [corner](EShapeBar.md#corner)
- [image](EShapeBar.md#image)
- [points](EShapeBar.md#points)
- [radius](EShapeBar.md#radius)
- [root](EShapeBar.md#root)
- [state](EShapeBar.md#state)
- [visible](EShapeBar.md#visible)
- [worldVisible](EShapeBar.md#worldvisible)

### Methods

- [addListener](EShapeBar.md#addlistener)
- [addUuid](EShapeBar.md#adduuid)
- [attach](EShapeBar.md#attach)
- [blur](EShapeBar.md#blur)
- [calcHitPart](EShapeBar.md#calchitpart)
- [calcHitPoint](EShapeBar.md#calchitpoint)
- [calcHitPointAbsHitTester](EShapeBar.md#calchitpointabshittester)
- [callChildTransformChange](EShapeBar.md#callchildtransformchange)
- [callParentTransformChange](EShapeBar.md#callparenttransformchange)
- [clone](EShapeBar.md#clone)
- [contains](EShapeBar.md#contains)
- [containsAbs](EShapeBar.md#containsabs)
- [containsAbsBBox](EShapeBar.md#containsabsbbox)
- [containsAbsMarker](EShapeBar.md#containsabsmarker)
- [containsBBox](EShapeBar.md#containsbbox)
- [containsChildren](EShapeBar.md#containschildren)
- [containsText](EShapeBar.md#containstext)
- [copy](EShapeBar.md#copy)
- [destroy](EShapeBar.md#destroy)
- [detach](EShapeBar.md#detach)
- [emit](EShapeBar.md#emit)
- [eventNames](EShapeBar.md#eventnames)
- [focus](EShapeBar.md#focus)
- [getBounds](EShapeBar.md#getbounds)
- [getBoundsInternal](EShapeBar.md#getboundsinternal)
- [getBoundsLocal](EShapeBar.md#getboundslocal)
- [getBoundsSize](EShapeBar.md#getboundssize)
- [getBounds\_](EShapeBar.md#getbounds_)
- [getCapability](EShapeBar.md#getcapability)
- [getHitTestSize](EShapeBar.md#gethittestsize)
- [getShapeScale](EShapeBar.md#getshapescale)
- [getStrokeWidthScale](EShapeBar.md#getstrokewidthscale)
- [listenerCount](EShapeBar.md#listenercount)
- [listeners](EShapeBar.md#listeners)
- [lock](EShapeBar.md#lock)
- [newFill](EShapeBar.md#newfill)
- [newSize](EShapeBar.md#newsize)
- [newStroke](EShapeBar.md#newstroke)
- [newText](EShapeBar.md#newtext)
- [newTransform](EShapeBar.md#newtransform)
- [off](EShapeBar.md#off)
- [on](EShapeBar.md#on)
- [onAttach](EShapeBar.md#onattach)
- [onChildTransformChange](EShapeBar.md#onchildtransformchange)
- [onDetach](EShapeBar.md#ondetach)
- [onKeyDown](EShapeBar.md#onkeydown)
- [onKeyUp](EShapeBar.md#onkeyup)
- [onParentTransformChange](EShapeBar.md#onparenttransformchange)
- [onRender](EShapeBar.md#onrender)
- [onSizeChange](EShapeBar.md#onsizechange)
- [onStateChange](EShapeBar.md#onstatechange)
- [onThisTransformChange](EShapeBar.md#onthistransformchange)
- [onTransformChange](EShapeBar.md#ontransformchange)
- [once](EShapeBar.md#once)
- [removeAllListeners](EShapeBar.md#removealllisteners)
- [removeListener](EShapeBar.md#removelistener)
- [select](EShapeBar.md#select)
- [serialize](EShapeBar.md#serialize)
- [serializeChildren](EShapeBar.md#serializechildren)
- [serializeGradient](EShapeBar.md#serializegradient)
- [serializeImage](EShapeBar.md#serializeimage)
- [serializeState](EShapeBar.md#serializestate)
- [setFocused](EShapeBar.md#setfocused)
- [toDirty](EShapeBar.md#todirty)
- [toGlobal](EShapeBar.md#toglobal)
- [toHitTestData](EShapeBar.md#tohittestdata)
- [toLocal](EShapeBar.md#tolocal)
- [toMarkerSize](EShapeBar.md#tomarkersize)
- [unlock](EShapeBar.md#unlock)
- [update](EShapeBar.md#update)
- [updateTransform](EShapeBar.md#updatetransform)
- [updateUploaded](EShapeBar.md#updateuploaded)
- [updateUuid](EShapeBar.md#updateuuid)

## Constructors

### constructor

• **new EShapeBar**(`type?`): [`EShapeBar`](EShapeBar.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `number` | `EShapeType.BAR` |

#### Returns

[`EShapeBar`](EShapeBar.md)

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[constructor](EShapeLineBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts#L15)

## Properties

### \_bounds

• `Protected` `Optional` **\_bounds**: `Rectangle`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_bounds](EShapeLineBase.md#_bounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L86)

___

### \_boundsInternal

• `Protected` `Optional` **\_boundsInternal**: `Rectangle`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsInternal](EShapeLineBase.md#_boundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L88)

___

### \_boundsInternalTransformId

• `Protected` **\_boundsInternalTransformId**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsInternalTransformId](EShapeLineBase.md#_boundsinternaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L89)

___

### \_boundsLocal

• `Protected` `Optional` **\_boundsLocal**: `Rectangle`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsLocal](EShapeLineBase.md#_boundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L90)

___

### \_boundsLocalTransformId

• `Protected` **\_boundsLocalTransformId**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsLocalTransformId](EShapeLineBase.md#_boundslocaltransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L91)

___

### \_boundsTransformId

• `Protected` **\_boundsTransformId**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_boundsTransformId](EShapeLineBase.md#_boundstransformid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L87)

___

### \_capability

• `Protected` `Optional` **\_capability**: [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_capability](EShapeLineBase.md#_capability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L94)

___

### \_connector

• `Protected` `Optional` **\_connector**: [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_connector](EShapeLineBase.md#_connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L77)

___

### \_corner

• `Protected` **\_corner**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_corner](EShapeLineBase.md#_corner)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L30)

___

### \_image

• `Protected` `Optional` **\_image**: [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_image](EShapeLineBase.md#_image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L31)

___

### \_lockTransformChild

• `Protected` **\_lockTransformChild**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_lockTransformChild](EShapeLineBase.md#_locktransformchild)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L81)

___

### \_lockTransformParent

• `Protected` **\_lockTransformParent**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_lockTransformParent](EShapeLineBase.md#_locktransformparent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L83)

___

### \_lockTransformThis

• `Protected` **\_lockTransformThis**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_lockTransformThis](EShapeLineBase.md#_locktransformthis)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L82)

___

### \_lockUploaded

• `Protected` **\_lockUploaded**: [`EShapeLock`](EShapeLock.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_lockUploaded](EShapeLineBase.md#_lockuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L84)

___

### \_points

• `Protected` **\_points**: [`EShapeBarPoints`](EShapeBarPoints.md)

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[_points](EShapeLineBase.md#_points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts#L13)

___

### \_radius

• `Protected` **\_radius**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_radius](EShapeLineBase.md#_radius)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L29)

___

### \_state

• `Protected` `Optional` **\_state**: [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_state](EShapeLineBase.md#_state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L93)

___

### \_visible

• `Protected` **\_visible**: `boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[_visible](EShapeLineBase.md#_visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L79)

___

### action

• `Readonly` **action**: [`EShapeAction`](EShapeAction.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[action](EShapeLineBase.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L71)

___

### children

• **children**: [`EShape`](../interfaces/EShape.md)[]

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[children](EShapeLineBase.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L98)

___

### cursor

• `Optional` **cursor**: `string`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[cursor](EShapeLineBase.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L72)

___

### data

• `Readonly` **data**: [`EShapeData`](../interfaces/EShapeData.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[data](EShapeLineBase.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L36)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](EShapeEditor.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[editor](EShapeLineBase.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L110)

___

### fill

• `Readonly` **fill**: [`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[fill](EShapeLineBase.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L27)

___

### gradient

• `Optional` **gradient**: [`EShapeGradientLike`](../interfaces/EShapeGradientLike.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[gradient](EShapeLineBase.md#gradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L32)

___

### id

• **id**: `string`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[id](EShapeLineBase.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L54)

___

### index

• **index**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[index](EShapeLineBase.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L102)

___

### interactive

• **interactive**: `boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[interactive](EShapeLineBase.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L73)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[layout](EShapeLineBase.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L99)

___

### parent

• **parent**: ``null`` \| [`EShape`](../interfaces/EShape.md) \| [`EShapeContainer`](EShapeContainer.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[parent](EShapeLineBase.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L97)

___

### reference

• **reference**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[reference](EShapeLineBase.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L104)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](../interfaces/EShapeRuntime.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[runtime](EShapeLineBase.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L107)

___

### selected

• **selected**: `boolean`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[selected](EShapeLineBase.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L103)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[shortcut](EShapeLineBase.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L74)

___

### size

• `Readonly` **size**: `IPoint`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[size](EShapeLineBase.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L26)

___

### stroke

• `Readonly` **stroke**: [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[stroke](EShapeLineBase.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L28)

___

### tag

• `Readonly` **tag**: [`EShapeData`](../interfaces/EShapeData.md)

**`Deprecated`**

in favor of [data](EShapePrimitive.md#data)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[tag](EShapeLineBase.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L35)

___

### text

• `Readonly` **text**: [`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[text](EShapeLineBase.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L33)

___

### texture

• `Optional` **texture**: `Texture`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[texture](EShapeLineBase.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L65)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[title](EShapeLineBase.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L75)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[transform](EShapeLineBase.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L60)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[type](EShapeLineBase.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L56)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](../interfaces/EShapeUploaded.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[uploaded](EShapeLineBase.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L113)

___

### uuid

• **uuid**: `number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[uuid](EShapeLineBase.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L55)

___

### WORK\_HIT\_TEST\_DATA

▪ `Static` `Protected` `Optional` **WORK\_HIT\_TEST\_DATA**: [`EShapeBaseHitTestData`](EShapeBaseHitTestData.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[WORK_HIT_TEST_DATA](EShapeLineBase.md#work_hit_test_data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L53)

## Accessors

### capability

• `get` **capability**(): [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

[`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

EShapeLineBase.capability

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:803](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L803)

___

### connector

• `get` **connector**(): [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Returns

[`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

#### Inherited from

EShapeLineBase.connector

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L296)

___

### corner

• `get` **corner**(): `number`

#### Returns

`number`

#### Inherited from

EShapeLineBase.corner

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

EShapeLineBase.corner

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L96)

___

### image

• `get` **image**(): `undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Returns

`undefined` \| [`EShapeImageLike`](../interfaces/EShapeImageLike.md)

#### Inherited from

EShapeLineBase.image

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

EShapeLineBase.image

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L118)

___

### points

• `get` **points**(): [`EShapeBarPoints`](EShapeBarPoints.md)

#### Returns

[`EShapeBarPoints`](EShapeBarPoints.md)

#### Overrides

EShapeLineBase.points

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts#L20)

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Inherited from

EShapeLineBase.radius

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

EShapeLineBase.radius

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L107)

___

### root

• `get` **root**(): [`EShape`](../interfaces/EShape.md)

#### Returns

[`EShape`](../interfaces/EShape.md)

#### Inherited from

EShapeLineBase.root

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L288)

___

### state

• `get` **state**(): [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Returns

[`EShapeStateSet`](../interfaces/EShapeStateSet.md)

#### Inherited from

EShapeLineBase.state

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L792)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeLineBase.visible

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

EShapeLineBase.visible

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:316](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L316)

___

### worldVisible

• `get` **worldVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

EShapeLineBase.worldVisible

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

[EShapeLineBase](EShapeLineBase.md).[addListener](EShapeLineBase.md#addlistener)

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

[EShapeLineBase](EShapeLineBase.md).[addUuid](EShapeLineBase.md#adduuid)

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

[EShapeLineBase](EShapeLineBase.md).[attach](EShapeLineBase.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L346)

___

### blur

▸ **blur**(): `this`

#### Returns

`this`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[blur](EShapeLineBase.md#blur)

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

[EShapeLineBase](EShapeLineBase.md).[calcHitPart](EShapeLineBase.md#calchitpart)

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

[EShapeLineBase](EShapeLineBase.md).[calcHitPoint](EShapeLineBase.md#calchitpoint)

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

[EShapeLineBase](EShapeLineBase.md).[calcHitPointAbsHitTester](EShapeLineBase.md#calchitpointabshittester)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L199)

___

### callChildTransformChange

▸ **callChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[callChildTransformChange](EShapeLineBase.md#callchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L186)

___

### callParentTransformChange

▸ **callParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[callParentTransformChange](EShapeLineBase.md#callparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L201)

___

### clone

▸ **clone**(): [`EShapeBar`](EShapeBar.md)

#### Returns

[`EShapeBar`](EShapeBar.md)

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[clone](EShapeLineBase.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts#L24)

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

[EShapeLineBase](EShapeLineBase.md).[contains](EShapeLineBase.md#contains)

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

[EShapeLineBase](EShapeLineBase.md).[containsAbs](EShapeLineBase.md#containsabs)

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

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[containsAbsBBox](EShapeLineBase.md#containsabsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts#L28)

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

[EShapeLineBase](EShapeLineBase.md).[containsAbsMarker](EShapeLineBase.md#containsabsmarker)

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

[EShapeLineBase](EShapeLineBase.md).[containsBBox](EShapeLineBase.md#containsbbox)

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

[EShapeLineBase](EShapeLineBase.md).[containsChildren](EShapeLineBase.md#containschildren)

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

[EShapeLineBase](EShapeLineBase.md).[containsText](EShapeLineBase.md#containstext)

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

[EShapeLineBase](EShapeLineBase.md).[copy](EShapeLineBase.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:866](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L866)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[destroy](EShapeLineBase.md#destroy)

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

[EShapeLineBase](EShapeLineBase.md).[detach](EShapeLineBase.md#detach)

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

[EShapeLineBase](EShapeLineBase.md).[emit](EShapeLineBase.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25441

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[eventNames](EShapeLineBase.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### focus

▸ **focus**(): `this`

#### Returns

`this`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[focus](EShapeLineBase.md#focus)

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

[EShapeLineBase](EShapeLineBase.md).[getBounds](EShapeLineBase.md#getbounds)

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

[EShapeLineBase](EShapeLineBase.md).[getBoundsInternal](EShapeLineBase.md#getboundsinternal)

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

[EShapeLineBase](EShapeLineBase.md).[getBoundsLocal](EShapeLineBase.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:703](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L703)

___

### getBoundsSize

▸ **getBoundsSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getBoundsSize](EShapeLineBase.md#getboundssize)

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

[EShapeLineBase](EShapeLineBase.md).[getBounds_](EShapeLineBase.md#getbounds_)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:723](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L723)

___

### getCapability

▸ **getCapability**(): `undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Returns

`undefined` \| [`EShapeCapabilityContainer`](../interfaces/EShapeCapabilityContainer.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getCapability](EShapeLineBase.md#getcapability)

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

[EShapeLineBase](EShapeLineBase.md).[getHitTestSize](EShapeLineBase.md#gethittestsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-base.ts#L25)

___

### getShapeScale

▸ **getShapeScale**(): `number`

#### Returns

`number`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[getShapeScale](EShapeLineBase.md#getshapescale)

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

[EShapeLineBase](EShapeLineBase.md).[getStrokeWidthScale](EShapeLineBase.md#getstrokewidthscale)

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

[EShapeLineBase](EShapeLineBase.md).[listenerCount](EShapeLineBase.md#listenercount)

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

[EShapeLineBase](EShapeLineBase.md).[listeners](EShapeLineBase.md#listeners)

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

[EShapeLineBase](EShapeLineBase.md).[lock](EShapeLineBase.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:217](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L217)

___

### newFill

▸ **newFill**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newFill](EShapeLineBase.md#newfill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L62)

___

### newSize

▸ **newSize**(): `IPoint`

#### Returns

`IPoint`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newSize](EShapeLineBase.md#newsize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L51)

___

### newStroke

▸ **newStroke**(): [`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Returns

[`EShapeStroke`](../interfaces/EShapeStroke.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newStroke](EShapeLineBase.md#newstroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L66)

___

### newText

▸ **newText**(): [`EShapeText`](../interfaces/EShapeText.md)

#### Returns

[`EShapeText`](../interfaces/EShapeText.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newText](EShapeLineBase.md#newtext)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-primitive.ts#L79)

___

### newTransform

▸ **newTransform**(): [`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Returns

[`EShapeTransform`](../interfaces/EShapeTransform.md)

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[newTransform](EShapeLineBase.md#newtransform)

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

[EShapeLineBase](EShapeLineBase.md).[off](EShapeLineBase.md#off)

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

[EShapeLineBase](EShapeLineBase.md).[on](EShapeLineBase.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onAttach](EShapeLineBase.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L361)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onChildTransformChange](EShapeLineBase.md#onchildtransformchange)

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

[EShapeLineBase](EShapeLineBase.md).[onDetach](EShapeLineBase.md#ondetach)

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

[EShapeLineBase](EShapeLineBase.md).[onKeyDown](EShapeLineBase.md#onkeydown)

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

[EShapeLineBase](EShapeLineBase.md).[onKeyUp](EShapeLineBase.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:843](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L843)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onParentTransformChange](EShapeLineBase.md#onparenttransformchange)

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

[EShapeLineBase](EShapeLineBase.md).[onRender](EShapeLineBase.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:859](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L859)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onSizeChange](EShapeLineBase.md#onsizechange)

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

[EShapeLineBase](EShapeLineBase.md).[onStateChange](EShapeLineBase.md#onstatechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:777](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L777)

___

### onThisTransformChange

▸ **onThisTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onThisTransformChange](EShapeLineBase.md#onthistransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L193)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[onTransformChange](EShapeLineBase.md#ontransformchange)

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

[EShapeLineBase](EShapeLineBase.md).[once](EShapeLineBase.md#once)

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

[EShapeLineBase](EShapeLineBase.md).[removeAllListeners](EShapeLineBase.md#removealllisteners)

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

[EShapeLineBase](EShapeLineBase.md).[removeListener](EShapeLineBase.md#removelistener)

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

[EShapeLineBase](EShapeLineBase.md).[select](EShapeLineBase.md#select)

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

#### Overrides

[EShapeLineBase](EShapeLineBase.md).[serialize](EShapeLineBase.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar.ts#L33)

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

[EShapeLineBase](EShapeLineBase.md).[serializeChildren](EShapeLineBase.md#serializechildren)

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

[EShapeLineBase](EShapeLineBase.md).[serializeGradient](EShapeLineBase.md#serializegradient)

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

[EShapeLineBase](EShapeLineBase.md).[serializeImage](EShapeLineBase.md#serializeimage)

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

[EShapeLineBase](EShapeLineBase.md).[serializeState](EShapeLineBase.md#serializestate)

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

[EShapeLineBase](EShapeLineBase.md).[setFocused](EShapeLineBase.md#setfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:826](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L826)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[toDirty](EShapeLineBase.md#todirty)

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

[EShapeLineBase](EShapeLineBase.md).[toGlobal](EShapeLineBase.md#toglobal)

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

[EShapeLineBase](EShapeLineBase.md).[toHitTestData](EShapeLineBase.md#tohittestdata)

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

[EShapeLineBase](EShapeLineBase.md).[toLocal](EShapeLineBase.md#tolocal)

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

[EShapeLineBase](EShapeLineBase.md).[toMarkerSize](EShapeLineBase.md#tomarkersize)

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

[EShapeLineBase](EShapeLineBase.md).[unlock](EShapeLineBase.md#unlock)

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

[EShapeLineBase](EShapeLineBase.md).[update](EShapeLineBase.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L852)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[EShapeLineBase](EShapeLineBase.md).[updateTransform](EShapeLineBase.md#updatetransform)

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

[EShapeLineBase](EShapeLineBase.md).[updateUploaded](EShapeLineBase.md#updateuploaded)

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

[EShapeLineBase](EShapeLineBase.md).[updateUuid](EShapeLineBase.md#updateuuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts:497](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-base.ts#L497)
