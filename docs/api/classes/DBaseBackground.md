[Winter Cardinal UI - v0.167.0](../index.md) / DBaseBackground

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
| `callback?` | () => `void` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L18)

## Properties

### \_alpha

• `Protected` `Optional` **\_alpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L15)

___

### \_callback

• `Protected` `Optional` **\_callback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L16)

___

### \_color

• `Protected` `Optional` **\_color**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L14)

___

### \_theme

• `Protected` **\_theme**: [`DThemeBase`](../interfaces/DThemeBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L13)

## Accessors

### alpha

• `get` **alpha**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[alpha](../interfaces/DBackgroundStateAware.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L77)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\> |

#### Returns

`void`

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[alpha](../interfaces/DBackgroundStateAware.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L81)

___

### color

• `get` **color**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[color](../interfaces/DBackgroundStateAware.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L51)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\> |

#### Returns

`void`

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[color](../interfaces/DBackgroundStateAware.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L55)

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

[src/main/typescript/wcardinal/ui/d-base-background.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L62)

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

[src/main/typescript/wcardinal/ui/d-base-background.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L36)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](../interfaces/DThemeBase.md)

#### Returns

[`DThemeBase`](../interfaces/DThemeBase.md)

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[getTheme](../interfaces/DBackgroundStateAware.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L28)

___

### onChange

▸ `Protected` **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-background.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L88)

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

[src/main/typescript/wcardinal/ui/d-base-background.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-base-background.ts#L32)
