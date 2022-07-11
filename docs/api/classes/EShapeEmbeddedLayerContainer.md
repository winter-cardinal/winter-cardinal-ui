[Winter Cardinal UI - v0.200.0](../index.md) / EShapeEmbeddedLayerContainer

# Class: EShapeEmbeddedLayerContainer

## Implements

- [`EShapeLayerContainer`](../interfaces/EShapeLayerContainer.md)

## Table of contents

### Constructors

- [constructor](EShapeEmbeddedLayerContainer.md#constructor)

### Properties

- [\_hasConnectors](EShapeEmbeddedLayerContainer.md#_hasconnectors)
- [\_height](EShapeEmbeddedLayerContainer.md#_height)
- [\_isEditMode](EShapeEmbeddedLayerContainer.md#_iseditmode)
- [\_width](EShapeEmbeddedLayerContainer.md#_width)
- [children](EShapeEmbeddedLayerContainer.md#children)

### Methods

- [copyTo](EShapeEmbeddedLayerContainer.md#copyto)
- [deserialize](EShapeEmbeddedLayerContainer.md#deserialize)
- [hasConnectors](EShapeEmbeddedLayerContainer.md#hasconnectors)
- [newHasConnectors](EShapeEmbeddedLayerContainer.md#newhasconnectors)

## Constructors

### constructor

• **new EShapeEmbeddedLayerContainer**(`width`, `height`, `isEditMode`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `isEditMode` | `boolean` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L22)

## Properties

### \_hasConnectors

• `Protected` `Optional` **\_hasConnectors**: `Map`<[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md), `boolean`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L20)

___

### \_height

• `Protected` **\_height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L18)

___

### \_isEditMode

• `Protected` **\_isEditMode**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L19)

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L17)

___

### children

• **children**: [`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md)[]

#### Implementation of

[EShapeLayerContainer](../interfaces/EShapeLayerContainer.md).[children](../interfaces/EShapeLayerContainer.md#children)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L16)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L55)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L73)

___

### hasConnectors

▸ `Protected` **hasConnectors**(`shapes`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapes` | [`EShape`](../interfaces/EShape.md)[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L29)

___

### newHasConnectors

▸ `Protected` **newHasConnectors**(): `Map`<[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md), `boolean`\>

#### Returns

`Map`<[`EShapeEmbeddedLayer`](EShapeEmbeddedLayer.md), `boolean`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-embedded-layer-container.ts#L45)
