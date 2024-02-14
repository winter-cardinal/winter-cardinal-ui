[Winter Cardinal UI - v0.407.0](../index.md) / EShapeLineOfAny

# Interface: EShapeLineOfAny

## Hierarchy

- [`EShape`](EShape.md)

  ↳ **`EShapeLineOfAny`**

## Implemented by

- [`EShapeLineOfCircles`](../classes/EShapeLineOfCircles.md)
- [`EShapeLineOfRectangleRoundeds`](../classes/EShapeLineOfRectangleRoundeds.md)
- [`EShapeLineOfRectangles`](../classes/EShapeLineOfRectangles.md)
- [`EShapeLineOfTriangleRoundeds`](../classes/EShapeLineOfTriangleRoundeds.md)
- [`EShapeLineOfTriangles`](../classes/EShapeLineOfTriangles.md)

## Table of contents

### Properties

- [action](EShapeLineOfAny.md#action)
- [capability](EShapeLineOfAny.md#capability)
- [children](EShapeLineOfAny.md#children)
- [connector](EShapeLineOfAny.md#connector)
- [corner](EShapeLineOfAny.md#corner)
- [cursor](EShapeLineOfAny.md#cursor)
- [data](EShapeLineOfAny.md#data)
- [editor](EShapeLineOfAny.md#editor)
- [fill](EShapeLineOfAny.md#fill)
- [gradient](EShapeLineOfAny.md#gradient)
- [id](EShapeLineOfAny.md#id)
- [image](EShapeLineOfAny.md#image)
- [index](EShapeLineOfAny.md#index)
- [interactive](EShapeLineOfAny.md#interactive)
- [layout](EShapeLineOfAny.md#layout)
- [parent](EShapeLineOfAny.md#parent)
- [points](EShapeLineOfAny.md#points)
- [radius](EShapeLineOfAny.md#radius)
- [reference](EShapeLineOfAny.md#reference)
- [root](EShapeLineOfAny.md#root)
- [runtime](EShapeLineOfAny.md#runtime)
- [selected](EShapeLineOfAny.md#selected)
- [shortcut](EShapeLineOfAny.md#shortcut)
- [size](EShapeLineOfAny.md#size)
- [state](EShapeLineOfAny.md#state)
- [stroke](EShapeLineOfAny.md#stroke)
- [tag](EShapeLineOfAny.md#tag)
- [text](EShapeLineOfAny.md#text)
- [texture](EShapeLineOfAny.md#texture)
- [title](EShapeLineOfAny.md#title)
- [transform](EShapeLineOfAny.md#transform)
- [type](EShapeLineOfAny.md#type)
- [uploaded](EShapeLineOfAny.md#uploaded)
- [uuid](EShapeLineOfAny.md#uuid)
- [visible](EShapeLineOfAny.md#visible)
- [worldVisible](EShapeLineOfAny.md#worldvisible)

### Methods

- [addListener](EShapeLineOfAny.md#addlistener)
- [addUuid](EShapeLineOfAny.md#adduuid)
- [attach](EShapeLineOfAny.md#attach)
- [blur](EShapeLineOfAny.md#blur)
- [calcHitPoint](EShapeLineOfAny.md#calchitpoint)
- [clone](EShapeLineOfAny.md#clone)
- [contains](EShapeLineOfAny.md#contains)
- [containsAbs](EShapeLineOfAny.md#containsabs)
- [containsAbsBBox](EShapeLineOfAny.md#containsabsbbox)
- [containsBBox](EShapeLineOfAny.md#containsbbox)
- [containsPointAbs](EShapeLineOfAny.md#containspointabs)
- [copy](EShapeLineOfAny.md#copy)
- [destroy](EShapeLineOfAny.md#destroy)
- [detach](EShapeLineOfAny.md#detach)
- [emit](EShapeLineOfAny.md#emit)
- [eventNames](EShapeLineOfAny.md#eventnames)
- [focus](EShapeLineOfAny.md#focus)
- [getBounds](EShapeLineOfAny.md#getbounds)
- [getBoundsInternal](EShapeLineOfAny.md#getboundsinternal)
- [getBoundsLocal](EShapeLineOfAny.md#getboundslocal)
- [getCapability](EShapeLineOfAny.md#getcapability)
- [listenerCount](EShapeLineOfAny.md#listenercount)
- [listeners](EShapeLineOfAny.md#listeners)
- [lock](EShapeLineOfAny.md#lock)
- [off](EShapeLineOfAny.md#off)
- [on](EShapeLineOfAny.md#on)
- [onAttach](EShapeLineOfAny.md#onattach)
- [onChildTransformChange](EShapeLineOfAny.md#onchildtransformchange)
- [onDetach](EShapeLineOfAny.md#ondetach)
- [onParentTransformChange](EShapeLineOfAny.md#onparenttransformchange)
- [onRender](EShapeLineOfAny.md#onrender)
- [onSizeChange](EShapeLineOfAny.md#onsizechange)
- [onTransformChange](EShapeLineOfAny.md#ontransformchange)
- [once](EShapeLineOfAny.md#once)
- [removeAllListeners](EShapeLineOfAny.md#removealllisteners)
- [removeListener](EShapeLineOfAny.md#removelistener)
- [serialize](EShapeLineOfAny.md#serialize)
- [toDirty](EShapeLineOfAny.md#todirty)
- [toGlobal](EShapeLineOfAny.md#toglobal)
- [toLocal](EShapeLineOfAny.md#tolocal)
- [unlock](EShapeLineOfAny.md#unlock)
- [update](EShapeLineOfAny.md#update)
- [updateTransform](EShapeLineOfAny.md#updatetransform)
- [updateUploaded](EShapeLineOfAny.md#updateuploaded)
- [updateUuid](EShapeLineOfAny.md#updateuuid)

## Properties

### action

• `Readonly` **action**: [`EShapeAction`](../classes/EShapeAction.md)

#### Inherited from

[EShape](EShape.md).[action](EShape.md#action)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L49)

___

### capability

• `Readonly` **capability**: [`EShapeCapabilityContainer`](EShapeCapabilityContainer.md)

#### Inherited from

[EShape](EShape.md).[capability](EShape.md#capability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L82)

___

### children

• **children**: [`EShape`](EShape.md)[]

#### Inherited from

[EShape](EShape.md).[children](EShape.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L61)

___

### connector

• **connector**: [`EShapeConnectorContainer`](EShapeConnectorContainer.md)

#### Inherited from

[EShape](EShape.md).[connector](EShape.md#connector)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L56)

___

### corner

• **corner**: `number`

#### Inherited from

[EShape](EShape.md).[corner](EShape.md#corner)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L40)

___

### cursor

• `Optional` **cursor**: `string`

#### Inherited from

[EShape](EShape.md).[cursor](EShape.md#cursor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L50)

___

### data

• `Readonly` **data**: [`EShapeData`](EShapeData.md)

#### Inherited from

[EShape](EShape.md).[data](EShape.md#data)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L48)

___

### editor

• `Optional` **editor**: [`EShapeEditor`](../classes/EShapeEditor.md)

#### Inherited from

[EShape](EShape.md).[editor](EShape.md#editor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L73)

___

### fill

• `Readonly` **fill**: [`EShapeFill`](EShapeFill.md)

#### Inherited from

[EShape](EShape.md).[fill](EShape.md#fill)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L36)

___

### gradient

• `Optional` **gradient**: [`EShapeGradientLike`](EShapeGradientLike.md)

#### Inherited from

[EShape](EShape.md).[gradient](EShape.md#gradient)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L44)

___

### id

• **id**: `string`

#### Inherited from

[EShape](EShape.md).[id](EShape.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L32)

___

### image

• `Optional` **image**: [`EShapeImageLike`](EShapeImageLike.md)

#### Inherited from

[EShape](EShape.md).[image](EShape.md#image)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L42)

___

### index

• **index**: `number`

#### Inherited from

[EShape](EShape.md).[index](EShape.md#index)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L65)

___

### interactive

• **interactive**: `boolean`

#### Inherited from

[EShape](EShape.md).[interactive](EShape.md#interactive)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L53)

___

### layout

• `Optional` **layout**: [`EShapeLayout`](EShapeLayout.md)

#### Inherited from

[EShape](EShape.md).[layout](EShape.md#layout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L62)

___

### parent

• **parent**: ``null`` \| [`EShape`](EShape.md) \| [`EShapeContainer`](../classes/EShapeContainer.md)

#### Inherited from

[EShape](EShape.md).[parent](EShape.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L59)

___

### points

• `Readonly` **points**: [`EShapeLineOfAnyPoints`](EShapeLineOfAnyPoints.md)

#### Overrides

[EShape](EShape.md).[points](EShape.md#points)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any.ts#L13)

___

### radius

• **radius**: `number`

#### Inherited from

[EShape](EShape.md).[radius](EShape.md#radius)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L39)

___

### reference

• **reference**: `number`

#### Inherited from

[EShape](EShape.md).[reference](EShape.md#reference)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L67)

___

### root

• **root**: [`EShape`](EShape.md)

#### Inherited from

[EShape](EShape.md).[root](EShape.md#root)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L60)

___

### runtime

• `Optional` **runtime**: [`EShapeRuntime`](EShapeRuntime.md)

#### Inherited from

[EShape](EShape.md).[runtime](EShape.md#runtime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L70)

___

### selected

• **selected**: `boolean`

#### Inherited from

[EShape](EShape.md).[selected](EShape.md#selected)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L66)

___

### shortcut

• `Optional` **shortcut**: `string`

#### Inherited from

[EShape](EShape.md).[shortcut](EShape.md#shortcut)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L54)

___

### size

• `Readonly` **size**: `IPoint`

#### Inherited from

[EShape](EShape.md).[size](EShape.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L35)

___

### state

• `Readonly` **state**: [`EShapeStateSet`](EShapeStateSet.md)

#### Inherited from

[EShape](EShape.md).[state](EShape.md#state)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L79)

___

### stroke

• `Readonly` **stroke**: [`EShapeStroke`](EShapeStroke.md)

#### Inherited from

[EShape](EShape.md).[stroke](EShape.md#stroke)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L37)

___

### tag

• `Readonly` **tag**: [`EShapeData`](EShapeData.md)

**`Deprecated`**

in favor of [data](EShapeLineOfAny.md#data).

#### Inherited from

[EShape](EShape.md).[tag](EShape.md#tag)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L47)

___

### text

• `Readonly` **text**: [`EShapeText`](EShapeText.md)

#### Inherited from

[EShape](EShape.md).[text](EShape.md#text)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L45)

___

### texture

• `Optional` **texture**: `Texture`

#### Inherited from

[EShape](EShape.md).[texture](EShape.md#texture)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L43)

___

### title

• `Optional` **title**: `string`

#### Inherited from

[EShape](EShape.md).[title](EShape.md#title)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L55)

___

### transform

• `Readonly` **transform**: [`EShapeTransform`](EShapeTransform.md)

#### Inherited from

[EShape](EShape.md).[transform](EShape.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L38)

___

### type

• `Readonly` **type**: `number`

#### Inherited from

[EShape](EShape.md).[type](EShape.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L34)

___

### uploaded

• `Optional` **uploaded**: [`EShapeUploaded`](EShapeUploaded.md)

#### Inherited from

[EShape](EShape.md).[uploaded](EShape.md#uploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L76)

___

### uuid

• **uuid**: `number`

#### Inherited from

[EShape](EShape.md).[uuid](EShape.md#uuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L33)

___

### visible

• **visible**: `boolean`

#### Inherited from

[EShape](EShape.md).[visible](EShape.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L51)

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

#### Inherited from

[EShape](EShape.md).[worldVisible](EShape.md#worldvisible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L52)

## Methods

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`EShapeLineOfAny`](EShapeLineOfAny.md)

Alias method for `on`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Inherited from

[EShape](EShape.md).[addListener](EShape.md#addlistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25495

___

### addUuid

▸ **addUuid**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[addUuid](EShape.md#adduuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L122)

___

### attach

▸ **attach**(`parent`, `at?`): [`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](EShape.md) \| [`EShapeContainer`](../classes/EShapeContainer.md) |
| `at?` | `number` |

#### Returns

[`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Inherited from

[EShape](EShape.md).[attach](EShape.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L87)

___

### blur

▸ **blur**(): [`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Returns

[`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Inherited from

[EShape](EShape.md).[blur](EShape.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L98)

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any.ts#L27)

___

### clone

▸ **clone**(): [`EShape`](EShape.md)

#### Returns

[`EShape`](EShape.md)

#### Inherited from

[EShape](EShape.md).[clone](EShape.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L93)

___

### contains

▸ **contains**(`x`, `y`): ``null`` \| [`EShape`](EShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| [`EShape`](EShape.md)

#### Inherited from

[EShape](EShape.md).[contains](EShape.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L126)

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

[EShape](EShape.md).[containsAbs](EShape.md#containsabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L128)

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

[EShape](EShape.md).[containsAbsBBox](EShape.md#containsabsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L137)

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

[EShape](EShape.md).[containsBBox](EShape.md#containsbbox)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L127)

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any.ts#L14)

___

### copy

▸ **copy**(`source`): [`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShape`](EShape.md) |

#### Returns

[`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Inherited from

[EShape](EShape.md).[copy](EShape.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L91)

▸ **copy**(`source`, `part`): [`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShape`](EShape.md) |
| `part` | `number` |

#### Returns

[`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Inherited from

[EShape](EShape.md).[copy](EShape.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L92)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[destroy](EShape.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L94)

___

### detach

▸ **detach**(`exceptions?`): [`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](EShape.md)\> |

#### Returns

[`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Inherited from

[EShape](EShape.md).[detach](EShape.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L89)

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

[EShape](EShape.md).[emit](EShape.md#emit)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25441

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EShape](EShape.md).[eventNames](EShape.md#eventnames)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### focus

▸ **focus**(): [`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Returns

[`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Inherited from

[EShape](EShape.md).[focus](EShape.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L97)

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

[EShape](EShape.md).[getBounds](EShape.md#getbounds)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L142)

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

[EShape](EShape.md).[getBoundsInternal](EShape.md#getboundsinternal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L143)

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

[EShape](EShape.md).[getBoundsLocal](EShape.md#getboundslocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L144)

___

### getCapability

▸ **getCapability**(): `undefined` \| [`EShapeCapabilityContainer`](EShapeCapabilityContainer.md)

#### Returns

`undefined` \| [`EShapeCapabilityContainer`](EShapeCapabilityContainer.md)

#### Inherited from

[EShape](EShape.md).[getCapability](EShape.md#getcapability)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L83)

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

[EShape](EShape.md).[listenerCount](EShape.md#listenercount)

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

[EShape](EShape.md).[listeners](EShape.md#listeners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25424

___

### lock

▸ **lock**(`part`): [`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `part` | `number` |

#### Returns

[`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Inherited from

[EShape](EShape.md).[lock](EShape.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L108)

___

### off

▸ **off**(`event`, `fn?`, `context?`, `once?`): [`EShapeLineOfAny`](EShapeLineOfAny.md)

Alias method for `removeListener`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Inherited from

[EShape](EShape.md).[off](EShape.md#off)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25489

___

### on

▸ **on**(`event`, `fn`, `context?`): [`EShapeLineOfAny`](EShapeLineOfAny.md)

Add a listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`EShapeLineOfAny`](EShapeLineOfAny.md)

`this`.

#### Inherited from

[EShape](EShape.md).[on](EShape.md#on)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25452

___

### onAttach

▸ **onAttach**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[onAttach](EShape.md#onattach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L88)

___

### onChildTransformChange

▸ **onChildTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[onChildTransformChange](EShape.md#onchildtransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L115)

___

### onDetach

▸ **onDetach**(`exceptions?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](EShape.md)\> |

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[onDetach](EShape.md#ondetach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L90)

___

### onParentTransformChange

▸ **onParentTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[onParentTransformChange](EShape.md#onparenttransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L114)

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

[EShape](EShape.md).[onRender](EShape.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L105)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[onSizeChange](EShape.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L101)

___

### onTransformChange

▸ **onTransformChange**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[onTransformChange](EShape.md#ontransformchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L113)

___

### once

▸ **once**(`event`, `fn`, `context?`): [`EShapeLineOfAny`](EShapeLineOfAny.md)

Add a one-time listener for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn` | `Function` | The listener function. |
| `context?` | `any` | The context to invoke the listener with. |

#### Returns

[`EShapeLineOfAny`](EShapeLineOfAny.md)

`this`.

#### Inherited from

[EShape](EShape.md).[once](EShape.md#once)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25463

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EShapeLineOfAny`](EShapeLineOfAny.md)

Remove all listeners, or those of the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event?` | `string` \| `symbol` | The event name. |

#### Returns

[`EShapeLineOfAny`](EShapeLineOfAny.md)

`this`.

#### Inherited from

[EShape](EShape.md).[removeAllListeners](EShape.md#removealllisteners)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25483

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`, `once?`): [`EShapeLineOfAny`](EShapeLineOfAny.md)

Remove the listeners of a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `fn?` | `Function` | Only remove the listeners that match this function. |
| `context?` | `any` | Only remove the listeners that have this context. |
| `once?` | `boolean` | Only remove one-time listeners. |

#### Returns

[`EShapeLineOfAny`](EShapeLineOfAny.md)

`this`.

#### Inherited from

[EShape](EShape.md).[removeListener](EShape.md#removelistener)

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25475

___

### serialize

▸ **serialize**(`manager`): [`DDiagramSerializedItem`](DDiagramSerializedItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

[`DDiagramSerializedItem`](DDiagramSerializedItem.md)

#### Inherited from

[EShape](EShape.md).[serialize](EShape.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L121)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[toDirty](EShape.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L86)

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

[EShape](EShape.md).[toGlobal](EShape.md#toglobal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L140)

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

[EShape](EShape.md).[toLocal](EShape.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L141)

___

### unlock

▸ **unlock**(`part`, `invoke`): [`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `part` | `number` |
| `invoke` | `boolean` |

#### Returns

[`EShapeLineOfAny`](EShapeLineOfAny.md)

#### Inherited from

[EShape](EShape.md).[unlock](EShape.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L109)

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

[EShape](EShape.md).[update](EShape.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L104)

___

### updateTransform

▸ **updateTransform**(): `void`

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[updateTransform](EShape.md#updatetransform)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L112)

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

[EShape](EShape.md).[updateUploaded](EShape.md#updateuploaded)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L118)

___

### updateUuid

▸ **updateUuid**(`manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

`void`

#### Inherited from

[EShape](EShape.md).[updateUuid](EShape.md#updateuuid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape.ts#L123)
