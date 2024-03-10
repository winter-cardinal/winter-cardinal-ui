[Winter Cardinal UI - v0.414.0](../index.md) / DBaseBorder

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

• **new DBaseBorder**(`theme`, `options?`, `callback?`): [`DBaseBorder`](DBaseBorder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |
| `options?` | [`DBaseOptions`](../interfaces/DBaseOptions.md)\<`any`, `any`\> |
| `callback?` | () => `void` |

#### Returns

[`DBaseBorder`](DBaseBorder.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L23)

## Properties

### \_align

• `Protected` `Optional` **\_align**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L19)

___

### \_alpha

• `Protected` `Optional` **\_alpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L17)

___

### \_callback

• `Protected` `Optional` **\_callback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L21)

___

### \_color

• `Protected` `Optional` **\_color**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L16)

___

### \_mask

• `Protected` `Optional` **\_mask**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L20)

___

### \_theme

• `Protected` **\_theme**: [`DThemeBase`](../interfaces/DThemeBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L15)

___

### \_width

• `Protected` `Optional` **\_width**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L18)

## Accessors

### align

• `get` **align**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[align](../interfaces/DBorderStateAware.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L137)

• `set` **align**(`align`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `align` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\> |

#### Returns

`void`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[align](../interfaces/DBorderStateAware.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L141)

___

### alpha

• `get` **alpha**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[alpha](../interfaces/DBorderStateAware.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L85)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\> |

#### Returns

`void`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[alpha](../interfaces/DBorderStateAware.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L89)

___

### color

• `get` **color**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `number`\>

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[color](../interfaces/DBorderStateAware.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L59)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<``null`` \| `number`\> |

#### Returns

`void`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[color](../interfaces/DBorderStateAware.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L63)

___

### mask

• `get` **mask**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[mask](../interfaces/DBorderStateAware.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L163)

• `set` **mask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\> |

#### Returns

`void`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[mask](../interfaces/DBorderStateAware.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L167)

___

### width

• `get` **width**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\>

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[width](../interfaces/DBorderStateAware.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L111)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)\<`number`\> |

#### Returns

`void`

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[width](../interfaces/DBorderStateAware.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L115)

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

[src/main/typescript/wcardinal/ui/d-base-border.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L122)

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

[src/main/typescript/wcardinal/ui/d-base-border.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L70)

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

[src/main/typescript/wcardinal/ui/d-base-border.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L44)

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

[src/main/typescript/wcardinal/ui/d-base-border.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L148)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](../interfaces/DThemeBase.md)

#### Returns

[`DThemeBase`](../interfaces/DThemeBase.md)

#### Implementation of

[DBorderStateAware](../interfaces/DBorderStateAware.md).[getTheme](../interfaces/DBorderStateAware.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L36)

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

[src/main/typescript/wcardinal/ui/d-base-border.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L96)

___

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-border.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L174)

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

[src/main/typescript/wcardinal/ui/d-base-border.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-border.ts#L40)
