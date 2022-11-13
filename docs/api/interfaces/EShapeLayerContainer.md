[Winter Cardinal UI - v0.227.0](../index.md) / EShapeLayerContainer

# Interface: EShapeLayerContainer

## Hierarchy

- [`DApplicationTarget`](DApplicationTarget.md)

  ↳ **`EShapeLayerContainer`**

## Implemented by

- [`EShapeEmbeddedLayerContainer`](../classes/EShapeEmbeddedLayerContainer.md)

## Table of contents

### Properties

- [children](EShapeLayerContainer.md#children)
- [parent](EShapeLayerContainer.md#parent)

### Methods

- [copyTo](EShapeLayerContainer.md#copyto)
- [deserialize](EShapeLayerContainer.md#deserialize)

## Properties

### children

• **children**: [`EShapeLayer`](EShapeLayer.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-layer-container.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-layer-container.ts#L13)

___

### parent

• `Optional` **parent**: ``null`` \| [`DApplicationTarget`](DApplicationTarget.md)

#### Inherited from

[DApplicationTarget](DApplicationTarget.md).[parent](DApplicationTarget.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-like.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-like.ts#L11)

## Methods

### copyTo

▸ **copyTo**(`destination`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`EShape`](EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-layer-container.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-layer-container.ts#L14)

___

### deserialize

▸ **deserialize**(`serializedLayers`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedLayers` | [`DDiagramSerializedLayer`](DDiagramSerializedLayer.md)[] |
| `manager` | [`EShapeResourceManagerDeserialization`](../classes/EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-layer-container.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/e-shape-layer-container.ts#L15)
