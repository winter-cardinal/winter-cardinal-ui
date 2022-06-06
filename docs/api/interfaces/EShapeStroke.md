[Winter Cardinal UI - v0.179.0](../index.md) / EShapeStroke

# Interface: EShapeStroke

## Hierarchy

- [`EShapeStrokeLike`](EShapeStrokeLike.md)

  ↳ **`EShapeStroke`**

## Implemented by

- [`EShapeGroupStrokeEditor`](../classes/EShapeGroupStrokeEditor.md)
- [`EShapeGroupStrokeViewer`](../classes/EShapeGroupStrokeViewer.md)
- [`EShapeStrokeImpl`](../classes/EShapeStrokeImpl.md)

## Table of contents

### Properties

- [align](EShapeStroke.md#align)
- [alpha](EShapeStroke.md#alpha)
- [color](EShapeStroke.md#color)
- [enable](EShapeStroke.md#enable)
- [side](EShapeStroke.md#side)
- [style](EShapeStroke.md#style)
- [width](EShapeStroke.md#width)

### Methods

- [clone](EShapeStroke.md#clone)
- [copy](EShapeStroke.md#copy)
- [deserialize](EShapeStroke.md#deserialize)
- [serialize](EShapeStroke.md#serialize)
- [set](EShapeStroke.md#set)
- [toObject](EShapeStroke.md#toobject)

## Properties

### align

• **align**: `number`

#### Inherited from

[EShapeStrokeLike](EShapeStrokeLike.md).[align](EShapeStrokeLike.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts#L16)

___

### alpha

• **alpha**: `number`

#### Inherited from

[EShapeStrokeLike](EShapeStrokeLike.md).[alpha](EShapeStrokeLike.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts#L14)

___

### color

• **color**: `number`

#### Inherited from

[EShapeStrokeLike](EShapeStrokeLike.md).[color](EShapeStrokeLike.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts#L13)

___

### enable

• **enable**: `boolean`

#### Inherited from

[EShapeStrokeLike](EShapeStrokeLike.md).[enable](EShapeStrokeLike.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts#L12)

___

### side

• **side**: `number`

#### Inherited from

[EShapeStrokeLike](EShapeStrokeLike.md).[side](EShapeStrokeLike.md#side)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts#L17)

___

### style

• **style**: `number`

#### Inherited from

[EShapeStrokeLike](EShapeStrokeLike.md).[style](EShapeStrokeLike.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts#L18)

___

### width

• **width**: `number`

#### Inherited from

[EShapeStrokeLike](EShapeStrokeLike.md).[width](EShapeStrokeLike.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts#L15)

## Methods

### clone

▸ **clone**(): [`EShapeStroke`](EShapeStroke.md)

#### Returns

[`EShapeStroke`](EShapeStroke.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts#L32)

___

### copy

▸ **copy**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `Partial`<[`EShapeStrokeLike`](EShapeStrokeLike.md)\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts#L22)

___

### deserialize

▸ **deserialize**(`target`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](../classes/EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts#L35)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts#L34)

___

### set

▸ **set**(`enable?`, `color?`, `alpha?`, `width?`, `align?`, `side?`, `style?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |
| `color?` | `number` |
| `alpha?` | `number` |
| `width?` | `number` |
| `align?` | `number` |
| `side?` | `number` |
| `style?` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts#L23)

___

### toObject

▸ **toObject**(): [`EShapeStrokeLike`](EShapeStrokeLike.md)

#### Returns

[`EShapeStrokeLike`](EShapeStrokeLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/e-shape-stroke.ts#L33)
