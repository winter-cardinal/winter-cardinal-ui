[Winter Cardinal UI - v0.407.0](../index.md) / DThemeDarkTree

# Class: DThemeDarkTree

[DBase](DBase.md) theme.

## Hierarchy

- [`DThemeDarkPane`](DThemeDarkPane.md)

  ↳ **`DThemeDarkTree`**

## Implements

- [`DThemeTree`](../interfaces/DThemeTree.md)

## Table of contents

### Constructors

- [constructor](DThemeDarkTree.md#constructor)

### Properties

- [\_style](DThemeDarkTree.md#_style)

### Methods

- [getAlpha](DThemeDarkTree.md#getalpha)
- [getBackgroundAlpha](DThemeDarkTree.md#getbackgroundalpha)
- [getBackgroundColor](DThemeDarkTree.md#getbackgroundcolor)
- [getBackgroundTexture](DThemeDarkTree.md#getbackgroundtexture)
- [getBorderAlign](DThemeDarkTree.md#getborderalign)
- [getBorderAlpha](DThemeDarkTree.md#getborderalpha)
- [getBorderColor](DThemeDarkTree.md#getbordercolor)
- [getBorderMask](DThemeDarkTree.md#getbordermask)
- [getBorderTexture](DThemeDarkTree.md#getbordertexture)
- [getBorderWidth](DThemeDarkTree.md#getborderwidth)
- [getClearType](DThemeDarkTree.md#getcleartype)
- [getColor](DThemeDarkTree.md#getcolor)
- [getCornerMask](DThemeDarkTree.md#getcornermask)
- [getCornerRadius](DThemeDarkTree.md#getcornerradius)
- [getCursor](DThemeDarkTree.md#getcursor)
- [getFontFamilly](DThemeDarkTree.md#getfontfamilly)
- [getFontSize](DThemeDarkTree.md#getfontsize)
- [getFontStyle](DThemeDarkTree.md#getfontstyle)
- [getFontVariant](DThemeDarkTree.md#getfontvariant)
- [getFontWeight](DThemeDarkTree.md#getfontweight)
- [getGestureMode](DThemeDarkTree.md#getgesturemode)
- [getHeight](DThemeDarkTree.md#getheight)
- [getInteractive](DThemeDarkTree.md#getinteractive)
- [getLineHeight](DThemeDarkTree.md#getlineheight)
- [getOutlineAlign](DThemeDarkTree.md#getoutlinealign)
- [getOutlineAlpha](DThemeDarkTree.md#getoutlinealpha)
- [getOutlineColor](DThemeDarkTree.md#getoutlinecolor)
- [getOutlineMask](DThemeDarkTree.md#getoutlinemask)
- [getOutlineOffset](DThemeDarkTree.md#getoutlineoffset)
- [getOutlineWidth](DThemeDarkTree.md#getoutlinewidth)
- [getPaddingBottom](DThemeDarkTree.md#getpaddingbottom)
- [getPaddingLeft](DThemeDarkTree.md#getpaddingleft)
- [getPaddingRight](DThemeDarkTree.md#getpaddingright)
- [getPaddingTop](DThemeDarkTree.md#getpaddingtop)
- [getShadow](DThemeDarkTree.md#getshadow)
- [getTitle](DThemeDarkTree.md#gettitle)
- [getWeight](DThemeDarkTree.md#getweight)
- [getWheelSpeed](DThemeDarkTree.md#getwheelspeed)
- [getWidth](DThemeDarkTree.md#getwidth)
- [getX](DThemeDarkTree.md#getx)
- [getY](DThemeDarkTree.md#gety)
- [isOverflowMaskEnabled](DThemeDarkTree.md#isoverflowmaskenabled)
- [newShadow](DThemeDarkTree.md#newshadow)
- [newShadowWeak](DThemeDarkTree.md#newshadowweak)
- [newState](DThemeDarkTree.md#newstate)
- [newStyle](DThemeDarkTree.md#newstyle)

## Constructors

### constructor

• **new DThemeDarkTree**(): [`DThemeDarkTree`](DThemeDarkTree.md)

#### Returns

[`DThemeDarkTree`](DThemeDarkTree.md)

#### Overrides

[DThemeDarkPane](DThemeDarkPane.md).[constructor](DThemeDarkPane.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-tree.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-tree.ts#L15)

## Properties

### \_style

• `Protected` **\_style**: [`DThemeDarkTreeItems`](DThemeDarkTreeItems.md)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-tree.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-tree.ts#L13)

## Methods

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getAlpha](../interfaces/DThemeTree.md#getalpha)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getAlpha](DThemeDarkPane.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L35)

___

### getBackgroundAlpha

▸ **getBackgroundAlpha**(`state`): `number`

Returns a background alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getBackgroundAlpha](../interfaces/DThemeTree.md#getbackgroundalpha)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBackgroundAlpha](DThemeDarkPane.md#getbackgroundalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L84)

___

### getBackgroundColor

▸ **getBackgroundColor**(`state`): ``null`` \| `number`

Returns a background color.
If the color is null, backgrounds are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getBackgroundColor](../interfaces/DThemeTree.md#getbackgroundcolor)

#### Overrides

[DThemeDarkPane](DThemeDarkPane.md).[getBackgroundColor](DThemeDarkPane.md#getbackgroundcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-tree.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-tree.ts#L24)

___

### getBackgroundTexture

▸ **getBackgroundTexture**(): `Texture`

Returns a background texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getBackgroundTexture](../interfaces/DThemeTree.md#getbackgroundtexture)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBackgroundTexture](DThemeDarkPane.md#getbackgroundtexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L88)

___

### getBorderAlign

▸ **getBorderAlign**(`state`): `number`

Returns a border align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getBorderAlign](../interfaces/DThemeTree.md#getborderalign)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderAlign](DThemeDarkPane.md#getborderalign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L22)

___

### getBorderAlpha

▸ **getBorderAlpha**(`state`): `number`

Returns a border alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getBorderAlpha](../interfaces/DThemeTree.md#getborderalpha)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderAlpha](DThemeDarkPane.md#getborderalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L96)

___

### getBorderColor

▸ **getBorderColor**(`state`): ``null`` \| `number`

Returns a border color.
If the color is null, borders are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getBorderColor](../interfaces/DThemeTree.md#getbordercolor)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderColor](DThemeDarkPane.md#getbordercolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L92)

___

### getBorderMask

▸ **getBorderMask**(`state`): `number`

Returns a border mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a mask |

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getBorderMask](../interfaces/DThemeTree.md#getbordermask)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderMask](DThemeDarkPane.md#getbordermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L108)

___

### getBorderTexture

▸ **getBorderTexture**(): `Texture`

Returns a border texture.

#### Returns

`Texture`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getBorderTexture](../interfaces/DThemeTree.md#getbordertexture)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderTexture](DThemeDarkPane.md#getbordertexture)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L112)

___

### getBorderWidth

▸ **getBorderWidth**(`state`): `number`

Returns a border width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getBorderWidth](../interfaces/DThemeTree.md#getborderwidth)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getBorderWidth](DThemeDarkPane.md#getborderwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L100)

___

### getClearType

▸ **getClearType**(): `number`

Returns a clear type.
A clear type is for layout classes including [DLayoutVertical](DLayoutVertical.md).

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getClearType](../interfaces/DThemeTree.md#getcleartype)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getClearType](DThemeDarkPane.md#getcleartype)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L167)

___

### getColor

▸ **getColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getColor](../interfaces/DThemeTree.md#getcolor)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getColor](DThemeDarkPane.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L19)

___

### getCornerMask

▸ **getCornerMask**(): `number`

Returns a corner mask.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getCornerMask](../interfaces/DThemeTree.md#getcornermask)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getCornerMask](DThemeDarkPane.md#getcornermask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L136)

___

### getCornerRadius

▸ **getCornerRadius**(): `number`

Returns a corner radius.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getCornerRadius](../interfaces/DThemeTree.md#getcornerradius)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getCornerRadius](DThemeDarkPane.md#getcornerradius)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L132)

___

### getCursor

▸ **getCursor**(`state`): `string`

Returns a cursor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`string`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getCursor](../interfaces/DThemeTree.md#getcursor)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getCursor](DThemeDarkPane.md#getcursor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L199)

___

### getFontFamilly

▸ **getFontFamilly**(): `string`

#### Returns

`string`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getFontFamilly](../interfaces/DThemeTree.md#getfontfamilly)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontFamilly](DThemeDarkPane.md#getfontfamilly)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L11)

___

### getFontSize

▸ **getFontSize**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getFontSize](../interfaces/DThemeTree.md#getfontsize)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontSize](DThemeDarkPane.md#getfontsize)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L15)

___

### getFontStyle

▸ **getFontStyle**(): [`DFontStyle`](../index.md#dfontstyle)

#### Returns

[`DFontStyle`](../index.md#dfontstyle)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getFontStyle](../interfaces/DThemeTree.md#getfontstyle)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontStyle](DThemeDarkPane.md#getfontstyle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L27)

___

### getFontVariant

▸ **getFontVariant**(): [`DFontVariant`](../index.md#dfontvariant)

#### Returns

[`DFontVariant`](../index.md#dfontvariant)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getFontVariant](../interfaces/DThemeTree.md#getfontvariant)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontVariant](DThemeDarkPane.md#getfontvariant)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L31)

___

### getFontWeight

▸ **getFontWeight**(): [`DFontWeight`](../index.md#dfontweight)

#### Returns

[`DFontWeight`](../index.md#dfontweight)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getFontWeight](../interfaces/DThemeTree.md#getfontweight)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getFontWeight](DThemeDarkPane.md#getfontweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L23)

___

### getGestureMode

▸ **getGestureMode**(): [`UtilGestureMode`](../index.md#utilgesturemode-1)

#### Returns

[`UtilGestureMode`](../index.md#utilgesturemode-1)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getGestureMode](../interfaces/DThemeTree.md#getgesturemode)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getGestureMode](DThemeDarkPane.md#getgesturemode)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L38)

___

### getHeight

▸ **getHeight**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a height.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getHeight](../interfaces/DThemeTree.md#getheight)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getHeight](DThemeDarkPane.md#getheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L72)

___

### getInteractive

▸ **getInteractive**(): `number`

Returns an interactivity.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getInteractive](../interfaces/DThemeTree.md#getinteractive)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getInteractive](DThemeDarkPane.md#getinteractive)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L30)

___

### getLineHeight

▸ **getLineHeight**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getLineHeight](../interfaces/DThemeTree.md#getlineheight)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getLineHeight](DThemeDarkPane.md#getlineheight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-font.ts#L42)

___

### getOutlineAlign

▸ **getOutlineAlign**(`state`): `number`

Returns an outline align.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getOutlineAlign](../interfaces/DThemeTree.md#getoutlinealign)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineAlign](DThemeDarkPane.md#getoutlinealign)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L26)

___

### getOutlineAlpha

▸ **getOutlineAlpha**(`state`): `number`

Returns an outline alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getOutlineAlpha](../interfaces/DThemeTree.md#getoutlinealpha)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineAlpha](DThemeDarkPane.md#getoutlinealpha)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L144)

___

### getOutlineColor

▸ **getOutlineColor**(`state`): ``null`` \| `number`

Returns an outline color.
If the color is null, outlines are not be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

``null`` \| `number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getOutlineColor](../interfaces/DThemeTree.md#getoutlinecolor)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineColor](DThemeDarkPane.md#getoutlinecolor)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L140)

___

### getOutlineMask

▸ **getOutlineMask**(`state`): `number`

Returns an outline mask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getOutlineMask](../interfaces/DThemeTree.md#getoutlinemask)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineMask](DThemeDarkPane.md#getoutlinemask)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L163)

___

### getOutlineOffset

▸ **getOutlineOffset**(`state`): `number`

Returns an outline offset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getOutlineOffset](../interfaces/DThemeTree.md#getoutlineoffset)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineOffset](DThemeDarkPane.md#getoutlineoffset)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L155)

___

### getOutlineWidth

▸ **getOutlineWidth**(`state`): `number`

Returns an outline width.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) | a state |

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getOutlineWidth](../interfaces/DThemeTree.md#getoutlinewidth)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getOutlineWidth](DThemeDarkPane.md#getoutlinewidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L151)

___

### getPaddingBottom

▸ **getPaddingBottom**(): `number`

Returns a bottom padding.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getPaddingBottom](../interfaces/DThemeTree.md#getpaddingbottom)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getPaddingBottom](DThemeDarkPane.md#getpaddingbottom)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L128)

___

### getPaddingLeft

▸ **getPaddingLeft**(): `number`

Returns a left padding.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getPaddingLeft](../interfaces/DThemeTree.md#getpaddingleft)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getPaddingLeft](DThemeDarkPane.md#getpaddingleft)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L116)

___

### getPaddingRight

▸ **getPaddingRight**(): `number`

Returns a right padding.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getPaddingRight](../interfaces/DThemeTree.md#getpaddingright)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getPaddingRight](DThemeDarkPane.md#getpaddingright)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L120)

___

### getPaddingTop

▸ **getPaddingTop**(): `number`

Returns a top padding.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getPaddingTop](../interfaces/DThemeTree.md#getpaddingtop)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getPaddingTop](DThemeDarkPane.md#getpaddingtop)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L124)

___

### getShadow

▸ **getShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Returns a shadow.
If a shadow is null, no shadow is rendered.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getShadow](../interfaces/DThemeTree.md#getshadow)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getShadow](DThemeDarkPane.md#getshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L171)

___

### getTitle

▸ **getTitle**(): `string`

Returns a tooltip text.

#### Returns

`string`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getTitle](../interfaces/DThemeTree.md#gettitle)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getTitle](DThemeDarkPane.md#gettitle)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L183)

___

### getWeight

▸ **getWeight**(): `number`

Returns a weight.
Weights are for layout classes including [DLayoutVertical](DLayoutVertical.md).
If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getWeight](../interfaces/DThemeTree.md#getweight)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getWeight](DThemeDarkPane.md#getweight)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L187)

___

### getWheelSpeed

▸ **getWheelSpeed**(): `number`

#### Returns

`number`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getWheelSpeed](../interfaces/DThemeTree.md#getwheelspeed)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getWheelSpeed](DThemeDarkPane.md#getwheelspeed)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L34)

___

### getWidth

▸ **getWidth**(): [`DCoordinateSize`](../index.md#dcoordinatesize)

Returns a width.

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getWidth](../interfaces/DThemeTree.md#getwidth)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getWidth](DThemeDarkPane.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L76)

___

### getX

▸ **getX**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a X coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getX](../interfaces/DThemeTree.md#getx)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getX](DThemeDarkPane.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L64)

___

### getY

▸ **getY**(): [`DCoordinatePosition`](../index.md#dcoordinateposition)

Returns a Y coordinate.

#### Returns

[`DCoordinatePosition`](../index.md#dcoordinateposition)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[getY](../interfaces/DThemeTree.md#gety)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[getY](DThemeDarkPane.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L68)

___

### isOverflowMaskEnabled

▸ **isOverflowMaskEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[isOverflowMaskEnabled](../interfaces/DThemeTree.md#isoverflowmaskenabled)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[isOverflowMaskEnabled](DThemeDarkPane.md#isoverflowmaskenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-pane.ts#L14)

___

### newShadow

▸ **newShadow**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[newShadow](../interfaces/DThemeTree.md#newshadow)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[newShadow](DThemeDarkPane.md#newshadow)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L191)

___

### newShadowWeak

▸ **newShadowWeak**(): ``null`` \| [`DShadow`](../interfaces/DShadow.md)

Creates a new weak shadow.

#### Returns

``null`` \| [`DShadow`](../interfaces/DShadow.md)

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[newShadowWeak](../interfaces/DThemeTree.md#newshadowweak)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[newShadowWeak](DThemeDarkPane.md#newshadowweak)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L195)

___

### newState

▸ **newState**(`state`): `void`

Returns true if focusable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Implementation of

[DThemeTree](../interfaces/DThemeTree.md).[newState](../interfaces/DThemeTree.md#newstate)

#### Inherited from

[DThemeDarkPane](DThemeDarkPane.md).[newState](DThemeDarkPane.md#newstate)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-base.ts#L179)

___

### newStyle

▸ **newStyle**(): [`DThemeDarkTreeItems`](DThemeDarkTreeItems.md)

#### Returns

[`DThemeDarkTreeItems`](DThemeDarkTreeItems.md)

#### Defined in

[src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-tree.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/theme/dark/d-theme-dark-tree.ts#L20)
