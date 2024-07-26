[Winter Cardinal UI - v0.442.0](../index.md) / EShapeBarPoints

# Class: EShapeBarPoints

## Implements

- [`EShapeLineBasePoints`](../interfaces/EShapeLineBasePoints.md)

## Table of contents

### Constructors

- [constructor](EShapeBarPoints.md#constructor)

### Properties

- [\_id](EShapeBarPoints.md#_id)
- [\_marker](EShapeBarPoints.md#_marker)
- [\_parent](EShapeBarPoints.md#_parent)
- [\_position](EShapeBarPoints.md#_position)
- [\_segments](EShapeBarPoints.md#_segments)
- [\_size](EShapeBarPoints.md#_size)
- [\_style](EShapeBarPoints.md#_style)
- [\_updatedParentSizeX](EShapeBarPoints.md#_updatedparentsizex)
- [\_updatedParentSizeY](EShapeBarPoints.md#_updatedparentsizey)
- [\_updatedPosition](EShapeBarPoints.md#_updatedposition)
- [\_updatedSize](EShapeBarPoints.md#_updatedsize)
- [\_values](EShapeBarPoints.md#_values)

### Accessors

- [formatted](EShapeBarPoints.md#formatted)
- [formatter](EShapeBarPoints.md#formatter)
- [id](EShapeBarPoints.md#id)
- [length](EShapeBarPoints.md#length)
- [marker](EShapeBarPoints.md#marker)
- [plength](EShapeBarPoints.md#plength)
- [position](EShapeBarPoints.md#position)
- [segments](EShapeBarPoints.md#segments)
- [size](EShapeBarPoints.md#size)
- [style](EShapeBarPoints.md#style)
- [values](EShapeBarPoints.md#values)

### Methods

- [calcHitPointAbs](EShapeBarPoints.md#calchitpointabs)
- [clone](EShapeBarPoints.md#clone)
- [copy](EShapeBarPoints.md#copy)
- [deserialize](EShapeBarPoints.md#deserialize)
- [getComputedSize](EShapeBarPoints.md#getcomputedsize)
- [getMarker](EShapeBarPoints.md#getmarker)
- [moveTo](EShapeBarPoints.md#moveto)
- [onSizeChange](EShapeBarPoints.md#onsizechange)
- [serialize](EShapeBarPoints.md#serialize)
- [set](EShapeBarPoints.md#set)
- [toPoints](EShapeBarPoints.md#topoints)
- [update](EShapeBarPoints.md#update)

## Constructors

### constructor

• **new EShapeBarPoints**(`parent`): [`EShapeBarPoints`](EShapeBarPoints.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) |

#### Returns

[`EShapeBarPoints`](EShapeBarPoints.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L35)

## Properties

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L22)

___

### \_marker

• `Protected` `Optional` **\_marker**: [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L28)

___

### \_parent

• `Protected` **\_parent**: [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L21)

___

### \_position

• `Protected` **\_position**: [`EShapeBarPosition`](../index.md#eshapebarposition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L27)

___

### \_segments

• `Protected` **\_segments**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L25)

___

### \_size

• `Protected` **\_size**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L26)

___

### \_style

• `Protected` **\_style**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L23)

___

### \_updatedParentSizeX

• `Protected` **\_updatedParentSizeX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L31)

___

### \_updatedParentSizeY

• `Protected` **\_updatedParentSizeY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L32)

___

### \_updatedPosition

• `Protected` **\_updatedPosition**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L33)

___

### \_updatedSize

• `Protected` **\_updatedSize**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L30)

___

### \_values

• `Protected` **\_values**: [`number`, `number`, `number`, `number`]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L24)

## Accessors

### formatted

• `get` **formatted**(): `this`

#### Returns

`this`

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[formatted](../interfaces/EShapeLineBasePoints.md#formatted)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L200)

___

### formatter

• `get` **formatter**(): ``null`` \| [`EShapePointsFormatter`](../index.md#eshapepointsformatter)

#### Returns

``null`` \| [`EShapePointsFormatter`](../index.md#eshapepointsformatter)

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[formatter](../interfaces/EShapeLineBasePoints.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L192)

• `set` **formatter**(`formatter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `formatter` | ``null`` \| [`EShapePointsFormatter`](../index.md#eshapepointsformatter) |

#### Returns

`void`

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[formatter](../interfaces/EShapeLineBasePoints.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L196)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[id](../interfaces/EShapeLineBasePoints.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L133)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[length](../interfaces/EShapeLineBasePoints.md#length)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L125)

___

### marker

• `get` **marker**(): [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Returns

[`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[marker](../interfaces/EShapeLineBasePoints.md#marker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L179)

___

### plength

• `get` **plength**(): `number`

Peak length

#### Returns

`number`

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[plength](../interfaces/EShapeLineBasePoints.md#plength)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L129)

___

### position

• `get` **position**(): [`EShapeBarPosition`](../index.md#eshapebarposition)

#### Returns

[`EShapeBarPosition`](../index.md#eshapebarposition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L163)

• `set` **position**(`position`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`EShapeBarPosition`](../index.md#eshapebarposition) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L167)

___

### segments

• `get` **segments**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[segments](../interfaces/EShapeLineBasePoints.md#segments)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L147)

• `set` **segments**(`segments`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `segments` | `number`[] |

#### Returns

`void`

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[segments](../interfaces/EShapeLineBasePoints.md#segments)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L151)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L155)

• `set` **size**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L159)

___

### style

• `get` **style**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[style](../interfaces/EShapeLineBasePoints.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L171)

• `set` **style**(`style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[style](../interfaces/EShapeLineBasePoints.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L175)

___

### values

• `get` **values**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[values](../interfaces/EShapeLineBasePoints.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L138)

• `set` **values**(`values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

`void`

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[values](../interfaces/EShapeLineBasePoints.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L143)

## Methods

### calcHitPointAbs

▸ **calcHitPointAbs**\<`RESULT`\>(`x`, `y`, `ax`, `ay`, `threshold`, `toRange`, `tester`, `result`): `boolean`

#### Type parameters

| Name |
| :------ |
| `RESULT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `ax` | `number` |
| `ay` | `number` |
| `threshold` | `number` |
| `toRange` | ``null`` \| [`EShapeLineBasePointsHitTesterToRange`](../index.md#eshapelinebasepointshittestertorange) |
| `tester` | [`EShapeLineBasePointsHitTester`](../index.md#eshapelinebasepointshittester)\<`RESULT`\> |
| `result` | `RESULT` |

#### Returns

`boolean`

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[calcHitPointAbs](../interfaces/EShapeLineBasePoints.md#calchitpointabs)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:280](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L280)

___

### clone

▸ **clone**(`parent`): [`EShapeBarPoints`](EShapeBarPoints.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) |

#### Returns

[`EShapeBarPoints`](EShapeBarPoints.md)

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[clone](../interfaces/EShapeLineBasePoints.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:254](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L254)

___

### copy

▸ **copy**(`source`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapePoints`](../interfaces/EShapePoints.md) |

#### Returns

`this`

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[copy](../interfaces/EShapeLineBasePoints.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L204)

___

### deserialize

▸ **deserialize**(`resourceId`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceId` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:272](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L272)

___

### getComputedSize

▸ **getComputedSize**(`size`, `position`, `sizeX`, `sizeY`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `position` | [`EShapeBarPosition`](../index.md#eshapebarposition) |
| `sizeX` | `number` |
| `sizeY` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L50)

___

### getMarker

▸ **getMarker**(): `undefined` \| [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

This method is more appropriate than the `marker` property in some situations
where the EShapePointsMarkerContainer instance do not need to be created.

#### Returns

`undefined` \| [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[getMarker](../interfaces/EShapeLineBasePoints.md#getmarker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L188)

___

### moveTo

▸ **moveTo**(`position?`, `size?`, `style?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position?` | [`EShapeBarPosition`](../index.md#eshapebarposition) |
| `size?` | `number` |
| `style?` | `number` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:229](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L229)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[onSizeChange](../interfaces/EShapeLineBasePoints.md#onsizechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L71)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[serialize](../interfaces/EShapeLineBasePoints.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L268)

___

### set

▸ **set**(`newValues?`, `newSegments?`, `newStyle?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValues?` | `number`[] |
| `newSegments?` | `number`[] |
| `newStyle?` | `number` |

#### Returns

`this`

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[set](../interfaces/EShapeLineBasePoints.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L212)

___

### toPoints

▸ **toPoints**(`transform`): `Point`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | `Matrix` |

#### Returns

`Point`[]

#### Implementation of

[EShapeLineBasePoints](../interfaces/EShapeLineBasePoints.md).[toPoints](../interfaces/EShapeLineBasePoints.md#topoints)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:258](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L258)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-bar-points.ts#L75)
