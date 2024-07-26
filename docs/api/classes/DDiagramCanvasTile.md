[Winter Cardinal UI - v0.442.0](../index.md) / DDiagramCanvasTile

# Class: DDiagramCanvasTile

## Table of contents

### Constructors

- [constructor](DDiagramCanvasTile.md#constructor)

### Properties

- [\_canvas](DDiagramCanvasTile.md#_canvas)
- [\_factory](DDiagramCanvasTile.md#_factory)
- [\_mapping](DDiagramCanvasTile.md#_mapping)
- [\_pyramid](DDiagramCanvasTile.md#_pyramid)

### Accessors

- [factory](DDiagramCanvasTile.md#factory)
- [mapping](DDiagramCanvasTile.md#mapping)
- [pyramid](DDiagramCanvasTile.md#pyramid)

### Methods

- [destroy](DDiagramCanvasTile.md#destroy)
- [init](DDiagramCanvasTile.md#init)
- [onMappingChange](DDiagramCanvasTile.md#onmappingchange)
- [serialize](DDiagramCanvasTile.md#serialize)

## Constructors

### constructor

• **new DDiagramCanvasTile**(`canvas`, `options?`): [`DDiagramCanvasTile`](DDiagramCanvasTile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`DDiagramCanvasBase`](DDiagramCanvasBase.md)\<[`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md), [`DDiagramCanvasBaseOptions`](../interfaces/DDiagramCanvasBaseOptions.md)\<[`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md)\>\> |
| `options?` | [`DDiagramCanvasTileOptions`](../interfaces/DDiagramCanvasTileOptions.md) |

#### Returns

[`DDiagramCanvasTile`](DDiagramCanvasTile.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L29)

## Properties

### \_canvas

• `Protected` **\_canvas**: [`DDiagramCanvasBase`](DDiagramCanvasBase.md)\<[`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md), [`DDiagramCanvasBaseOptions`](../interfaces/DDiagramCanvasBaseOptions.md)\<[`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L24)

___

### \_factory

• `Protected` `Optional` **\_factory**: [`DDiagramCanvasTilePyramidFactory`](../index.md#ddiagramcanvastilepyramidfactory)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L26)

___

### \_mapping

• `Protected` **\_mapping**: [`DDiagramCanvasTileMappingImpl`](DDiagramCanvasTileMappingImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L27)

___

### \_pyramid

• `Protected` `Optional` **\_pyramid**: [`DMapTilePyramid`](../interfaces/DMapTilePyramid.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L25)

## Accessors

### factory

• `get` **factory**(): `undefined` \| [`DDiagramCanvasTilePyramidFactory`](../index.md#ddiagramcanvastilepyramidfactory)

#### Returns

`undefined` \| [`DDiagramCanvasTilePyramidFactory`](../index.md#ddiagramcanvastilepyramidfactory)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L69)

___

### mapping

• `get` **mapping**(): [`DDiagramCanvasTileMapping`](../interfaces/DDiagramCanvasTileMapping.md)

#### Returns

[`DDiagramCanvasTileMapping`](../interfaces/DDiagramCanvasTileMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L73)

___

### pyramid

• `get` **pyramid**(): `undefined` \| [`DMapTilePyramid`](../interfaces/DMapTilePyramid.md)

#### Returns

`undefined` \| [`DMapTilePyramid`](../interfaces/DMapTilePyramid.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L65)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L83)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L40)

___

### onMappingChange

▸ **onMappingChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L44)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `mapping` | [`DDiagramCanvasTileMapping`](../interfaces/DDiagramCanvasTileMapping.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L77)
