[Winter Cardinal UI - v0.310.1](../index.md) / EShapeFill

# Interface: EShapeFill

## Hierarchy

- [`EShapeFillLike`](EShapeFillLike.md)

  ↳ **`EShapeFill`**

  ↳↳ [`DDiagramLayerBackground`](DDiagramLayerBackground.md)

## Implemented by

- [`EShapeFillImpl`](../classes/EShapeFillImpl.md)
- [`EShapeGroupFillEditor`](../classes/EShapeGroupFillEditor.md)
- [`EShapeGroupFillViewer`](../classes/EShapeGroupFillViewer.md)

## Table of contents

### Properties

- [alpha](EShapeFill.md#alpha)
- [color](EShapeFill.md#color)
- [enable](EShapeFill.md#enable)

### Methods

- [clone](EShapeFill.md#clone)
- [copy](EShapeFill.md#copy)
- [deserialize](EShapeFill.md#deserialize)
- [serialize](EShapeFill.md#serialize)
- [set](EShapeFill.md#set)
- [toObject](EShapeFill.md#toobject)

## Properties

### alpha

• **alpha**: `number`

#### Inherited from

[EShapeFillLike](EShapeFillLike.md).[alpha](EShapeFillLike.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts#L12)

___

### color

• **color**: `number`

#### Inherited from

[EShapeFillLike](EShapeFillLike.md).[color](EShapeFillLike.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts#L11)

___

### enable

• **enable**: `boolean`

#### Inherited from

[EShapeFillLike](EShapeFillLike.md).[enable](EShapeFillLike.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts#L10)

## Methods

### clone

▸ **clone**(): [`EShapeFill`](EShapeFill.md)

#### Returns

[`EShapeFill`](EShapeFill.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts#L18)

___

### copy

▸ **copy**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `Partial`<[`EShapeFillLike`](EShapeFillLike.md)\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts#L16)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts#L21)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts#L20)

___

### set

▸ **set**(`enable?`, `color?`, `alpha?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |
| `color?` | `number` |
| `alpha?` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts#L17)

___

### toObject

▸ **toObject**(): [`EShapeFillLike`](EShapeFillLike.md)

#### Returns

[`EShapeFillLike`](EShapeFillLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-fill.ts#L19)
