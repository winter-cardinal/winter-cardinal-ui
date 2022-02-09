[Winter Cardinal UI](../README.md) / EShapeGroupPoints

# Class: EShapeGroupPoints

## Implements

- [`EShapePoints`](../interfaces/EShapePoints.md)

## Table of contents

### Constructors

- [constructor](EShapeGroupPoints.md#constructor)

### Properties

- [\_parent](EShapeGroupPoints.md#_parent)

### Accessors

- [formatted](EShapeGroupPoints.md#formatted)
- [formatter](EShapeGroupPoints.md#formatter)
- [id](EShapeGroupPoints.md#id)
- [length](EShapeGroupPoints.md#length)
- [marker](EShapeGroupPoints.md#marker)
- [segments](EShapeGroupPoints.md#segments)
- [style](EShapeGroupPoints.md#style)
- [values](EShapeGroupPoints.md#values)

### Methods

- [clone](EShapeGroupPoints.md#clone)
- [copy](EShapeGroupPoints.md#copy)
- [getMarker](EShapeGroupPoints.md#getmarker)
- [serialize](EShapeGroupPoints.md#serialize)
- [set](EShapeGroupPoints.md#set)
- [toPoints](EShapeGroupPoints.md#topoints)

## Constructors

### constructor

• **new EShapeGroupPoints**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeGroupPropertyParent`](../interfaces/EShapeGroupPropertyParent.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L20)

## Properties

### \_parent

• `Protected` **\_parent**: [`EShapeGroupPropertyParent`](../interfaces/EShapeGroupPropertyParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L18)

## Accessors

### formatted

• `get` **formatted**(): [`EShapePointsFormatted`](../README.md#eshapepointsformatted)

#### Returns

[`EShapePointsFormatted`](../README.md#eshapepointsformatted)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[formatted](../interfaces/EShapePoints.md#formatted)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L152)

___

### formatter

• `get` **formatter**(): ``null`` \| [`EShapePointsFormatter`](../README.md#eshapepointsformatter)

#### Returns

``null`` \| [`EShapePointsFormatter`](../README.md#eshapepointsformatter)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[formatter](../interfaces/EShapePoints.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L131)

• `set` **formatter**(`formatter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `formatter` | ``null`` \| [`EShapePointsFormatter`](../README.md#eshapepointsformatter) |

#### Returns

`void`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[formatter](../interfaces/EShapePoints.md#formatter)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L142)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[id](../interfaces/EShapePoints.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L35)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[length](../interfaces/EShapePoints.md#length)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L24)

___

### marker

• `get` **marker**(): [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Returns

[`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[marker](../interfaces/EShapePoints.md#marker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L109)

___

### segments

• `get` **segments**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[segments](../interfaces/EShapePoints.md#segments)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L67)

• `set` **segments**(`segments`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `segments` | `number`[] |

#### Returns

`void`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[segments](../interfaces/EShapePoints.md#segments)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L78)

___

### style

• `get` **style**(): `number`

#### Returns

`number`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[style](../interfaces/EShapePoints.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L88)

• `set` **style**(`style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `number` |

#### Returns

`void`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[style](../interfaces/EShapePoints.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L99)

___

### values

• `get` **values**(): `number`[]

#### Returns

`number`[]

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[values](../interfaces/EShapePoints.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L46)

• `set` **values**(`values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |

#### Returns

`void`

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[values](../interfaces/EShapePoints.md#values)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L57)

## Methods

### clone

▸ **clone**(`parent`): [`EShapeGroupPoints`](EShapeGroupPoints.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) |

#### Returns

[`EShapeGroupPoints`](EShapeGroupPoints.md)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[clone](../interfaces/EShapePoints.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L185)

___

### copy

▸ **copy**(`source`): [`EShapeGroupPoints`](EShapeGroupPoints.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapePoints`](../interfaces/EShapePoints.md) |

#### Returns

[`EShapeGroupPoints`](EShapeGroupPoints.md)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[copy](../interfaces/EShapePoints.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L163)

___

### getMarker

▸ **getMarker**(): `undefined` \| [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

This method is more appropriate than the `marker` property in some situations
where the EShapePointsMarkerContainer instance do not need to be created.

#### Returns

`undefined` \| [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[getMarker](../interfaces/EShapePoints.md#getmarker)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L120)

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

[EShapePoints](../interfaces/EShapePoints.md).[serialize](../interfaces/EShapePoints.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L200)

___

### set

▸ **set**(`values?`, `segments?`, `style?`): [`EShapeGroupPoints`](EShapeGroupPoints.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | `number`[] |
| `segments?` | `number`[] |
| `style?` | `number` |

#### Returns

[`EShapeGroupPoints`](EShapeGroupPoints.md)

#### Implementation of

[EShapePoints](../interfaces/EShapePoints.md).[set](../interfaces/EShapePoints.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L174)

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

[EShapePoints](../interfaces/EShapePoints.md).[toPoints](../interfaces/EShapePoints.md#topoints)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-points.ts#L189)
