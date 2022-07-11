[Winter Cardinal UI - v0.199.0](../index.md) / DApplication

# Class: DApplication

## Implements

- [`DApplicationLike`](../interfaces/DApplicationLike.md)

## Table of contents

### Constructors

- [constructor](DApplication.md#constructor)

### Properties

- [\_base](DApplication.md#_base)
- [\_focus](DApplication.md#_focus)
- [\_isOverlayEnabled](DApplication.md#_isoverlayenabled)
- [\_options](DApplication.md#_options)
- [\_overlay](DApplication.md#_overlay)
- [\_resolution](DApplication.md#_resolution)
- [\_root](DApplication.md#_root)

### Accessors

- [stage](DApplication.md#stage)

### Methods

- [getFocusController](DApplication.md#getfocuscontroller)
- [getLayerBase](DApplication.md#getlayerbase)
- [getLayerOverlay](DApplication.md#getlayeroverlay)
- [getResolution](DApplication.md#getresolution)
- [getRootElement](DApplication.md#getrootelement)
- [initFocusHandling](DApplication.md#initfocushandling)
- [newLayerBase](DApplication.md#newlayerbase)
- [newLayerOverlay](DApplication.md#newlayeroverlay)
- [render](DApplication.md#render)
- [toLayerBaseOptions](DApplication.md#tolayerbaseoptions)
- [toLayerOverlayOptions](DApplication.md#tolayeroverlayoptions)
- [toRootElement](DApplication.md#torootelement)
- [update](DApplication.md#update)

## Constructors

### constructor

• **new DApplication**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DApplicationOptions`](../interfaces/DApplicationOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L80)

## Properties

### \_base

• `Protected` **\_base**: [`DApplicationLayer`](DApplicationLayer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L74)

___

### \_focus

• `Protected` `Optional` **\_focus**: [`DControllerFocus`](../interfaces/DControllerFocus.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L78)

___

### \_isOverlayEnabled

• `Protected` **\_isOverlayEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L77)

___

### \_options

• `Protected` `Optional` **\_options**: [`DApplicationOptions`](../interfaces/DApplicationOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L72)

___

### \_overlay

• `Protected` `Optional` **\_overlay**: [`DApplicationLayer`](DApplicationLayer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L75)

___

### \_resolution

• `Protected` **\_resolution**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L76)

___

### \_root

• `Protected` **\_root**: `HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L73)

## Accessors

### stage

• `get` **stage**(): `Container`

The stage of the base layer.

#### Returns

`Container`

#### Implementation of

[DApplicationLike](../interfaces/DApplicationLike.md).[stage](../interfaces/DApplicationLike.md#stage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L109)

## Methods

### getFocusController

▸ **getFocusController**(): [`DControllerFocus`](../interfaces/DControllerFocus.md)

Returns a focus controller.

#### Returns

[`DControllerFocus`](../interfaces/DControllerFocus.md)

#### Implementation of

[DApplicationLike](../interfaces/DApplicationLike.md).[getFocusController](../interfaces/DApplicationLike.md#getfocuscontroller)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L158)

___

### getLayerBase

▸ **getLayerBase**(): [`DApplicationLayer`](DApplicationLayer.md)

Returns a base layer.

#### Returns

[`DApplicationLayer`](DApplicationLayer.md)

#### Implementation of

[DApplicationLike](../interfaces/DApplicationLike.md).[getLayerBase](../interfaces/DApplicationLike.md#getlayerbase)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L187)

___

### getLayerOverlay

▸ **getLayerOverlay**(): [`DApplicationLayer`](DApplicationLayer.md)

Returns an overlay layer.
Note that the overlay layer and the base layer are same
if the overlay layer is disabled.

#### Returns

[`DApplicationLayer`](DApplicationLayer.md)

#### Implementation of

[DApplicationLike](../interfaces/DApplicationLike.md).[getLayerOverlay](../interfaces/DApplicationLike.md#getlayeroverlay)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L219)

___

### getResolution

▸ **getResolution**(): `number`

Returns a resolution.

#### Returns

`number`

#### Implementation of

[DApplicationLike](../interfaces/DApplicationLike.md).[getResolution](../interfaces/DApplicationLike.md#getresolution)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L117)

___

### getRootElement

▸ **getRootElement**(): `HTMLElement`

Returns a root element.

#### Returns

`HTMLElement`

#### Implementation of

[DApplicationLike](../interfaces/DApplicationLike.md).[getRootElement](../interfaces/DApplicationLike.md#getrootelement)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L113)

___

### initFocusHandling

▸ `Protected` **initFocusHandling**(`root`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `HTMLElement` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L165)

___

### newLayerBase

▸ `Protected` **newLayerBase**(`options?`): [`DApplicationLayer`](DApplicationLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DApplicationOptions`](../interfaces/DApplicationOptions.md) |

#### Returns

[`DApplicationLayer`](DApplicationLayer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L183)

___

### newLayerOverlay

▸ `Protected` **newLayerOverlay**(`options?`): [`DApplicationLayer`](DApplicationLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DApplicationOptions`](../interfaces/DApplicationOptions.md) |

#### Returns

[`DApplicationLayer`](DApplicationLayer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L215)

___

### render

▸ **render**(): `void`

Renders layers.

#### Returns

`void`

#### Implementation of

[DApplicationLike](../interfaces/DApplicationLike.md).[render](../interfaces/DApplicationLike.md#render)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:244](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L244)

___

### toLayerBaseOptions

▸ `Protected` **toLayerBaseOptions**(`options?`): [`DApplicationLayerOptions`](DApplicationLayerOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DApplicationOptions`](../interfaces/DApplicationOptions.md) |

#### Returns

[`DApplicationLayerOptions`](DApplicationLayerOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L136)

___

### toLayerOverlayOptions

▸ `Protected` **toLayerOverlayOptions**(`options?`): [`DApplicationLayerOptions`](DApplicationLayerOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DApplicationOptions`](../interfaces/DApplicationOptions.md) |

#### Returns

[`DApplicationLayerOptions`](DApplicationLayerOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L191)

___

### toRootElement

▸ `Protected` **toRootElement**(`options?`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DApplicationOptions`](../interfaces/DApplicationOptions.md) |

#### Returns

`HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L121)

___

### update

▸ **update**(): `void`

Updates layers.

#### Returns

`void`

#### Implementation of

[DApplicationLike](../interfaces/DApplicationLike.md).[update](../interfaces/DApplicationLike.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-application.ts#L230)
