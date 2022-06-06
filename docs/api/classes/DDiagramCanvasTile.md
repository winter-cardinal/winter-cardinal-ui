[Winter Cardinal UI - v0.179.0](../index.md) / DDiagramCanvasTile

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

• **new DDiagramCanvasTile**(`canvas`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`DDiagramCanvasBase`](DDiagramCanvasBase.md)<[`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md), [`DDiagramCanvasBaseOptions`](../interfaces/DDiagramCanvasBaseOptions.md)<[`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md)\>\> |
| `options?` | [`DDiagramCanvasTileOptions`](../interfaces/DDiagramCanvasTileOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L29)

## Properties

### \_canvas

• `Protected` **\_canvas**: [`DDiagramCanvasBase`](DDiagramCanvasBase.md)<[`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md), [`DDiagramCanvasBaseOptions`](../interfaces/DDiagramCanvasBaseOptions.md)<[`DThemeDiagramCanvasBase`](../interfaces/DThemeDiagramCanvasBase.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L24)

___

### \_factory

• `Protected` `Optional` **\_factory**: [`DDiagramCanvasTilePyramidFactory`](../index.md#ddiagramcanvastilepyramidfactory)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L26)

___

### \_mapping

• `Protected` **\_mapping**: [`DDiagramCanvasTileMappingImpl`](DDiagramCanvasTileMappingImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L27)

___

### \_pyramid

• `Protected` `Optional` **\_pyramid**: [`DMapTilePyramid`](../interfaces/DMapTilePyramid.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L25)

## Accessors

### factory

• `get` **factory**(): `undefined` \| [`DDiagramCanvasTilePyramidFactory`](../index.md#ddiagramcanvastilepyramidfactory)

#### Returns

`undefined` \| [`DDiagramCanvasTilePyramidFactory`](../index.md#ddiagramcanvastilepyramidfactory)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L66)

___

### mapping

• `get` **mapping**(): [`DDiagramCanvasTileMapping`](../interfaces/DDiagramCanvasTileMapping.md)

#### Returns

[`DDiagramCanvasTileMapping`](../interfaces/DDiagramCanvasTileMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L70)

___

### pyramid

• `get` **pyramid**(): `undefined` \| [`DMapTilePyramid`](../interfaces/DMapTilePyramid.md)

#### Returns

`undefined` \| [`DMapTilePyramid`](../interfaces/DMapTilePyramid.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L62)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L80)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L37)

___

### onMappingChange

▸ `Protected` **onMappingChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L41)

___

### serialize

▸ **serialize**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `mapping` | [`DDiagramCanvasTileMapping`](../interfaces/DDiagramCanvasTileMapping.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-tile.ts#L74)
