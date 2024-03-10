[Winter Cardinal UI - v0.414.0](../index.md) / EShapeEmbeddedLayerContainer

# Class: EShapeEmbeddedLayerContainer

## Implements

- [`EShapeLayerContainer`](../interfaces/EShapeLayerContainer.md)

## Table of contents

### Constructors

- [constructor](EShapeEmbeddedLayerContainer.md#constructor)

### Properties

- [\_hasConnectors](EShapeEmbeddedLayerContainer.md#_hasconnectors)
- [\_height](EShapeEmbeddedLayerContainer.md#_height)
- [\_width](EShapeEmbeddedLayerContainer.md#_width)
- [children](EShapeEmbeddedLayerContainer.md#children)

### Methods

- [copyTo](EShapeEmbeddedLayerContainer.md#copyto)
- [deserialize](EShapeEmbeddedLayerContainer.md#deserialize)
- [hasConnectors](EShapeEmbeddedLayerContainer.md#hasconnectors)
- [newHasConnectors](EShapeEmbeddedLayerContainer.md#newhasconnectors)

## Constructors

### constructor

• **new EShapeEmbeddedLayerContainer**(`width`, `height`): [`EShapeEmbeddedLayerContainer`](EShapeEmbeddedLayerContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

[`EShapeEmbeddedLayerContainer`](EShapeEmbeddedLayerContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L21)

## Properties

### \_hasConnectors

• `Protected` `Optional` **\_hasConnectors**: `Map`\<[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md), `boolean`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L19)

___

### \_height

• `Protected` **\_height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L18)

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L17)

___

### children

• **children**: [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)[]

#### Implementation of

[EShapeLayerContainer](../interfaces/EShapeLayerContainer.md).[children](../interfaces/EShapeLayerContainer.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L16)

## Methods

### copyTo

▸ **copyTo**(`destination`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Implementation of

[EShapeLayerContainer](../interfaces/EShapeLayerContainer.md).[copyTo](../interfaces/EShapeLayerContainer.md#copyto)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L53)

___

### deserialize

▸ **deserialize**(`serializedLayers`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedLayers` | [`DDiagramSerializedLayer`](../interfaces/DDiagramSerializedLayer.md)[] |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Implementation of

[EShapeLayerContainer](../interfaces/EShapeLayerContainer.md).[deserialize](../interfaces/EShapeLayerContainer.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L71)

___

### hasConnectors

▸ **hasConnectors**(`shapes`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L27)

___

### newHasConnectors

▸ **newHasConnectors**(): `Map`\<[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md), `boolean`\>

#### Returns

`Map`\<[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md), `boolean`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L43)
