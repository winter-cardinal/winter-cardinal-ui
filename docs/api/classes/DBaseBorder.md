[Winter Cardinal UI](../README.md) / DBaseBorder

# Class: DBaseBorder

## Implements

- [`DBorderStateAware`](../interfaces/DBorderStateAware.md)

## Table of contents

### Constructors

- [constructor](DBaseBorder.md#constructor)

### Properties

- [\_align](DBaseBorder.md#_align)
- [\_alpha](DBaseBorder.md#_alpha)
- [\_callback](DBaseBorder.md#_callback)
- [\_color](DBaseBorder.md#_color)
- [\_mask](DBaseBorder.md#_mask)
- [\_theme](DBaseBorder.md#_theme)
- [\_width](DBaseBorder.md#_width)

### Accessors

- [align](DBaseBorder.md#align)
- [alpha](DBaseBorder.md#alpha)
- [color](DBaseBorder.md#color)
- [mask](DBaseBorder.md#mask)
- [width](DBaseBorder.md#width)

### Methods

- [getAlign](DBaseBorder.md#getalign)
- [getAlpha](DBaseBorder.md#getalpha)
- [getColor](DBaseBorder.md#getcolor)
- [getMask](DBaseBorder.md#getmask)
- [getTheme](DBaseBorder.md#gettheme)
- [getWidth](DBaseBorder.md#getwidth)
- [onChange](DBaseBorder.md#onchange)
- [setTheme](DBaseBorder.md#settheme)

## Constructors

### constructor

• **new DBaseBorder**(`theme`, `options?`, `callback?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |
| `options?` | [`DBaseOptions`](../interfaces/DBaseOptions.md)<`any`, `any`\> |
| `callback?` | `Callback` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L25)

## Properties

### \_align

• `Protected` `Optional` **\_align**: [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L21)

___

### \_alpha

• `Protected` `Optional` **\_alpha**: [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L19)

___

### \_callback

• `Protected` **\_callback**: `undefined` \| `Callback`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L23)

___

### \_color

• `Protected` `Optional` **\_color**: [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L18)

___

### \_mask

• `Protected` `Optional` **\_mask**: [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L22)

___

### \_theme

• `Protected` **\_theme**: [`DThemeBase`](../interfaces/DThemeBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L17)

___

### \_width

• `Protected` `Optional` **\_width**: [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L20)

## Accessors

### align

• `get` **align**(): [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[align](../interfaces/DBorderStateAware.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L139)

• `set` **align**(`align`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `align` | [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\> |

#### Returns

`void`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[align](../interfaces/DBorderStateAware.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L143)

___

### alpha

• `get` **alpha**(): [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[alpha](../interfaces/DBorderStateAware.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L87)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\> |

#### Returns

`void`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[alpha](../interfaces/DBorderStateAware.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L91)

___

### color

• `get` **color**(): [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[color](../interfaces/DBorderStateAware.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L61)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<``null`` \| `number`\> |

#### Returns

`void`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[color](../interfaces/DBorderStateAware.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L65)

___

### mask

• `get` **mask**(): [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[mask](../interfaces/DBorderStateAware.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L165)

• `set` **mask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\> |

#### Returns

`void`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[mask](../interfaces/DBorderStateAware.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L169)

___

### width

• `get` **width**(): [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[width](../interfaces/DBorderStateAware.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L113)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\> |

#### Returns

`void`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[width](../interfaces/DBorderStateAware.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L117)

## Methods

### getAlign

▸ **getAlign**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[getAlign](../interfaces/DBorderStateAware.md#getalign)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L124)

___

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[getAlpha](../interfaces/DBorderStateAware.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L72)

___

### getColor

▸ **getColor**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[getColor](../interfaces/DBorderStateAware.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L46)

___

### getMask

▸ **getMask**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[getMask](../interfaces/DBorderStateAware.md#getmask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L150)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](../interfaces/DThemeBase.md)

#### Returns

[`DThemeBase`](../interfaces/DThemeBase.md)

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[getTheme](../interfaces/DBorderStateAware.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L38)

___

### getWidth

▸ **getWidth**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[getWidth](../interfaces/DBorderStateAware.md#getwidth)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L98)

___

### onChange

▸ `Protected` **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L176)

___

### setTheme

▸ **setTheme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |

#### Returns

`void`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[setTheme](../interfaces/DBorderStateAware.md#settheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L42)
