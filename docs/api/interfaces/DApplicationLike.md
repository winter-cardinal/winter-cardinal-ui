[Winter Cardinal UI - v0.457.0](../index.md) / DApplicationLike

# Interface: DApplicationLike

## Implemented by

- [`DApplication`](../classes/DApplication.md)

## Table of contents

### Properties

- [stage](DApplicationLike.md#stage)

### Methods

- [getFocusController](DApplicationLike.md#getfocuscontroller)
- [getLayerBase](DApplicationLike.md#getlayerbase)
- [getLayerOverlay](DApplicationLike.md#getlayeroverlay)
- [getResolution](DApplicationLike.md#getresolution)
- [getRootElement](DApplicationLike.md#getrootelement)
- [render](DApplicationLike.md#render)
- [update](DApplicationLike.md#update)

## Properties

### stage

• `Readonly` **stage**: `Container`

The stage of the base layer.

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-like.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-like.ts#L18)

## Methods

### getFocusController

▸ **getFocusController**(): [`DControllerFocus`](DControllerFocus.md)

Returns a focus controller.

#### Returns

[`DControllerFocus`](DControllerFocus.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-like.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-like.ts#L28)

___

### getLayerBase

▸ **getLayerBase**(): [`DApplicationLayerLike`](DApplicationLayerLike.md)

Returns a base layer.

#### Returns

[`DApplicationLayerLike`](DApplicationLayerLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-like.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-like.ts#L38)

___

### getLayerOverlay

▸ **getLayerOverlay**(): [`DApplicationLayerLike`](DApplicationLayerLike.md)

Returns an overlay layer.
Note that the overlay layer and the base layer are same
if the overlay layer is disabled.

#### Returns

[`DApplicationLayerLike`](DApplicationLayerLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-like.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-like.ts#L45)

___

### getResolution

▸ **getResolution**(): `number`

Returns a resolution.

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-like.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-like.ts#L33)

___

### getRootElement

▸ **getRootElement**(): `HTMLElement`

Returns a root element.

#### Returns

`HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-like.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-like.ts#L23)

___

### render

▸ **render**(): `void`

Renders layers.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-like.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-like.ts#L55)

___

### update

▸ **update**(): `void`

Updates layers.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-like.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-application-like.ts#L50)
