[Winter Cardinal UI](../README.md) / DBaseBackground

# Class: DBaseBackground

## Implements

- [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

## Table of contents

### Constructors

- [constructor](DBaseBackground.md#constructor)

### Properties

- [\_alpha](DBaseBackground.md#_alpha)
- [\_callback](DBaseBackground.md#_callback)
- [\_color](DBaseBackground.md#_color)
- [\_theme](DBaseBackground.md#_theme)

### Accessors

- [alpha](DBaseBackground.md#alpha)
- [color](DBaseBackground.md#color)

### Methods

- [getAlpha](DBaseBackground.md#getalpha)
- [getColor](DBaseBackground.md#getcolor)
- [getTheme](DBaseBackground.md#gettheme)
- [onChange](DBaseBackground.md#onchange)
- [setTheme](DBaseBackground.md#settheme)

## Constructors

### constructor

• **new DBaseBackground**(`theme`, `options?`, `callback?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |
| `options?` | [`DBaseOptions`](../interfaces/DBaseOptions.md)<`any`, `any`\> |
| `callback?` | `Callback` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L20)

## Properties

### \_alpha

• `Protected` `Optional` **\_alpha**: [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L17)

___

### \_callback

• `Protected` **\_callback**: `undefined` \| `Callback`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L18)

___

### \_color

• `Protected` `Optional` **\_color**: [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L16)

___

### \_theme

• `Protected` **\_theme**: [`DThemeBase`](../interfaces/DThemeBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L15)

## Accessors

### alpha

• `get` **alpha**(): [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[alpha](../interfaces/DBackgroundStateAware.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L79)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\> |

#### Returns

`void`

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[alpha](../interfaces/DBackgroundStateAware.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L83)

___

### color

• `get` **color**(): [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[color](../interfaces/DBackgroundStateAware.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L53)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<``null`` \| `number`\> |

#### Returns

`void`

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[color](../interfaces/DBackgroundStateAware.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L57)

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

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[getAlpha](../interfaces/DBackgroundStateAware.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L64)

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

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[getColor](../interfaces/DBackgroundStateAware.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L38)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](../interfaces/DThemeBase.md)

#### Returns

[`DThemeBase`](../interfaces/DThemeBase.md)

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[getTheme](../interfaces/DBackgroundStateAware.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L30)

___

### onChange

▸ `Protected` **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L90)

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

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[setTheme](../interfaces/DBackgroundStateAware.md#settheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L34)
