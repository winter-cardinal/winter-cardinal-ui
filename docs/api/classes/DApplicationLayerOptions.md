[Winter Cardinal UI - v0.414.0](../index.md) / DApplicationLayerOptions

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
- [isHeightFixed](DApplicationLayerOptions.md#isheightfixed)
- [isOverlay](DApplicationLayerOptions.md#isoverlay)
- [isWidthFixed](DApplicationLayerOptions.md#iswidthfixed)
- [setAntialias](DApplicationLayerOptions.md#setantialias)
- [setBackgroundColor](DApplicationLayerOptions.md#setbackgroundcolor)
- [setHeight](DApplicationLayerOptions.md#setheight)
- [setHeightFixed](DApplicationLayerOptions.md#setheightfixed)
- [setPadding](DApplicationLayerOptions.md#setpadding)
- [setRootElement](DApplicationLayerOptions.md#setrootelement)
- [setWidth](DApplicationLayerOptions.md#setwidth)
- [setWidthFixed](DApplicationLayerOptions.md#setwidthfixed)

## Constructors

### constructor

• **new DApplicationLayerOptions**(`options`): [`DApplicationLayerOptions`](DApplicationLayerOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DApplicationLayerOptionsOptions`](../interfaces/DApplicationLayerOptionsOptions.md) |

#### Returns

[`DApplicationLayerOptions`](DApplicationLayerOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L52)

## Methods

### getAntialias

▸ **getAntialias**(): `boolean`

Returns an antialias setting.
The default antialias setting is false.

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L267)

___

### getBackgroundColor

▸ **getBackgroundColor**(): `number`

Returns a background color.

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L249)

___

### getHeight

▸ **getHeight**(): `number`

Returns a canvas height.

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L188)

___

### getPadding

▸ **getPadding**(): [`DPadding`](../interfaces/DPadding.md)

Returns padding sizes.
The default padding size is 6.

#### Returns

[`DPadding`](../interfaces/DPadding.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L225)

___

### getPixiApplicationOptions

▸ **getPixiApplicationOptions**(): [`PixiApplicationOptions`](../interfaces/PixiApplicationOptions.md)

#### Returns

[`PixiApplicationOptions`](../interfaces/PixiApplicationOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L288)

___

### getRootElement

▸ **getRootElement**(): `HTMLElement`

Returns a root element.
`HTMLCanvasElement` and other DOM elements are created in this element.
The default root element is `document.body`.

#### Returns

`HTMLElement`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L125)

___

### getWidth

▸ **getWidth**(): `number`

Returns a canvas width.

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L152)

___

### isHeightFixed

▸ **isHeightFixed**(): `boolean`

Returns true if the height is fixed.

#### Returns

`boolean`

true if the height is fixed.

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L207)

___

### isOverlay

▸ **isOverlay**(): `boolean`

Returns true if a layer is supposed to be an overlay layer.

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L284)

___

### isWidthFixed

▸ **isWidthFixed**(): `boolean`

Returns true if the width is fixed.

#### Returns

`boolean`

true if the width is fixed.

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L171)

___

### setAntialias

▸ **setAntialias**(`antialias`): `this`

Sets an antialias setting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `antialias` | `boolean` | new antialias setting |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L276)

___

### setBackgroundColor

▸ **setBackgroundColor**(`color`): `this`

Sets a background color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `number` | new background color |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:258](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L258)

___

### setHeight

▸ **setHeight**(`height`): `this`

Sets a canvas height.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `height` | `number` | new canvas height |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L197)

___

### setHeightFixed

▸ **setHeightFixed**(`fixed`): `this`

Makes the canvas height fixed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fixed` | `boolean` | true to make the canvas height fixed |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L216)

___

### setPadding

▸ **setPadding**(`left`, `top`, `right`, `bottom`): `this`

Sets padding sizes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `number` | new left padding |
| `top` | `number` | new top padding |
| `right` | `number` | new right padding |
| `bottom` | `number` | new bottom padding |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L237)

___

### setRootElement

▸ **setRootElement**(`root`, `updateWidthAndHeight?`): `this`

Sets a root element and updates the canvas width and height
if `updateWidthAndHeight` is not false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | `HTMLElement` | new root element |
| `updateWidthAndHeight?` | `boolean` | false to preserve the canvas width / height |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L136)

___

### setWidth

▸ **setWidth**(`width`): `this`

Sets a canvas width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | new canvas width |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L161)

___

### setWidthFixed

▸ **setWidthFixed**(`fixed`): `this`

Makes the canvas width fixed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fixed` | `boolean` | true to make the canvas width fixed |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-application-layer-options.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-application-layer-options.ts#L180)
