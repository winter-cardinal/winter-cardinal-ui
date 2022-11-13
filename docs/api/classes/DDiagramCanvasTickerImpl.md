[Winter Cardinal UI - v0.227.0](../index.md) / DDiagramCanvasTickerImpl

# Class: DDiagramCanvasTickerImpl

## Implements

- [`DDiagramCanvasTicker`](../interfaces/DDiagramCanvasTicker.md)

## Table of contents

### Constructors

- [constructor](DDiagramCanvasTickerImpl.md#constructor)

### Properties

- [\_data](DDiagramCanvasTickerImpl.md#_data)
- [\_parent](DDiagramCanvasTickerImpl.md#_parent)

### Methods

- [add](DDiagramCanvasTickerImpl.md#add)
- [start](DDiagramCanvasTickerImpl.md#start)
- [stop](DDiagramCanvasTickerImpl.md#stop)
- [toNormalized](DDiagramCanvasTickerImpl.md#tonormalized)

## Constructors

### constructor

• **new DDiagramCanvasTickerImpl**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DDiagramTickerParent`](../interfaces/DDiagramTickerParent.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-ticker-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-ticker-impl.ts#L14)

## Properties

### \_data

• `Protected` **\_data**: `Map`<`number`, [`DDiagramTicker`](DDiagramTicker.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-ticker-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-ticker-impl.ts#L12)

___

### \_parent

• `Protected` **\_parent**: [`DDiagramTickerParent`](../interfaces/DDiagramTickerParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-ticker-impl.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-ticker-impl.ts#L11)

## Methods

### add

▸ **add**(`interval`): [`DDiagramTicker`](DDiagramTicker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `unknown` |

#### Returns

[`DDiagramTicker`](DDiagramTicker.md)

#### Implementation of

[DDiagramCanvasTicker](../interfaces/DDiagramCanvasTicker.md).[add](../interfaces/DDiagramCanvasTicker.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-ticker-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-ticker-impl.ts#L19)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[DDiagramCanvasTicker](../interfaces/DDiagramCanvasTicker.md).[start](../interfaces/DDiagramCanvasTicker.md#start)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-ticker-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-ticker-impl.ts#L35)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[DDiagramCanvasTicker](../interfaces/DDiagramCanvasTicker.md).[stop](../interfaces/DDiagramCanvasTicker.md#stop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-ticker-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-ticker-impl.ts#L41)

___

### toNormalized

▸ `Protected` **toNormalized**(`interval`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `unknown` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-ticker-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-ticker-impl.ts#L31)
