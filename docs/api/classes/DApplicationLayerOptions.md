[Winter Cardinal UI - v0.227.0](../index.md) / DApplicationLayerOptions

# Class: DApplicationLayerOptions

DApplicationLayer options

## Table of contents

### Constructors

- [constructor](DApplicationLayerOptions.md#constructor)

### Methods

- [getAntialias](DApplicationLayerOptions.md#getantialias)
- [getBackgroundColor](DApplicationLayerOptions.md#getbackgroundcolor)
- [getHeight](DApplicationLayerOptions.md#getheight)
- [getPadding](DApplicationLayerOptions.md#getpadding)
- [getPixiApplicationOptions](DApplicationLayerOptions.md#getpixiapplicationoptions)
- [getRootElement](DApplicationLayerOptions.md#getrootelement)
- [getWidth](DApplicationLayerOptions.md#getwidth)
- [isOverlay](DApplicationLayerOptions.md#isoverlay)
- [setAntialias](DApplicationLayerOptions.md#setantialias)
- [setBackgroundColor](DApplicationLayerOptions.md#setbackgroundcolor)
- [setHeight](DApplicationLayerOptions.md#setheight)
- [setPadding](DApplicationLayerOptions.md#setpadding)
- [setRootElement](DApplicationLayerOptions.md#setrootelement)
- [setWidth](DApplicationLayerOptions.md#setwidth)

## Constructors

### constructor

• **new DApplicationLayerOptions**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DApplicationLayerOptionsOptions`](../interfaces/DApplicationLayerOptionsOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L50)

## Methods

### getAntialias

▸ **getAntialias**(): `boolean`

Returns an antialias setting.
The default antialias setting is false.

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L225)

___

### getBackgroundColor

▸ **getBackgroundColor**(): `number`

Returns a background color.

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L207)

___

### getHeight

▸ **getHeight**(): `number`

Returns a canvas height.

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L165)

___

### getPadding

▸ **getPadding**(): [`DPadding`](../interfaces/DPadding.md)

Returns padding sizes.
The default padding size is 6.

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L183)

___

### getPixiApplicationOptions

▸ **getPixiApplicationOptions**(): [`PixiApplicationOptions`](../interfaces/PixiApplicationOptions.md)

#### Returns

[`PixiApplicationOptions`](../interfaces/PixiApplicationOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L246)

___

### getRootElement

▸ **getRootElement**(): `HTMLElement`

Returns a root element.
`HTMLCanvasElement` and other DOM elements are created in this element.
The default root element is `document.body`.

#### Returns

`HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L121)

___

### getWidth

▸ **getWidth**(): `number`

Returns a canvas width.

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L148)

___

### isOverlay

▸ **isOverlay**(): `boolean`

Returns true if a layer is supposed to be an overlay layer.

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L242)

___

### setAntialias

▸ **setAntialias**(`antialias`): [`DApplicationLayerOptions`](DApplicationLayerOptions.md)

Sets an antialias setting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `antialias` | `boolean` | new antialias setting |

#### Returns

[`DApplicationLayerOptions`](DApplicationLayerOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L234)

___

### setBackgroundColor

▸ **setBackgroundColor**(`color`): [`DApplicationLayerOptions`](DApplicationLayerOptions.md)

Sets a background color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `number` | new background color |

#### Returns

[`DApplicationLayerOptions`](DApplicationLayerOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L216)

___

### setHeight

▸ **setHeight**(`height`): [`DApplicationLayerOptions`](DApplicationLayerOptions.md)

Sets a canvas height.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `height` | `number` | new canvas height |

#### Returns

[`DApplicationLayerOptions`](DApplicationLayerOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L174)

___

### setPadding

▸ **setPadding**(`left`, `top`, `right`, `bottom`): [`DApplicationLayerOptions`](DApplicationLayerOptions.md)

Sets padding sizes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `number` | new left padding |
| `top` | `number` | new top padding |
| `right` | `number` | new right padding |
| `bottom` | `number` | new bottom padding |

#### Returns

[`DApplicationLayerOptions`](DApplicationLayerOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L195)

___

### setRootElement

▸ **setRootElement**(`root`, `updateWidthAndHeight?`): [`DApplicationLayerOptions`](DApplicationLayerOptions.md)

Sets a root element and updates the canvas width and height
if `updateWidthAndHeight` is not false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | `HTMLElement` | new root element |
| `updateWidthAndHeight?` | `boolean` | false to preserve the canvas width / height |

#### Returns

[`DApplicationLayerOptions`](DApplicationLayerOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L132)

___

### setWidth

▸ **setWidth**(`width`): [`DApplicationLayerOptions`](DApplicationLayerOptions.md)

Sets a canvas width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | new canvas width |

#### Returns

[`DApplicationLayerOptions`](DApplicationLayerOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L157)
