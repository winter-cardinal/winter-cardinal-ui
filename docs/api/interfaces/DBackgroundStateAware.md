[Winter Cardinal UI - v0.165.0](../index.md) / DBackgroundStateAware

# Interface: DBackgroundStateAware

## Hierarchy

- [`DBackground`](DBackground.md)

  ↳ **`DBackgroundStateAware`**

## Implemented by

- [`DBaseBackground`](../classes/DBaseBackground.md)
- [`DDiagramCanvasEditorBackground`](../classes/DDiagramCanvasEditorBackground.md)

## Table of contents

### Properties

- [alpha](DBackgroundStateAware.md#alpha)
- [color](DBackgroundStateAware.md#color)

### Methods

- [getAlpha](DBackgroundStateAware.md#getalpha)
- [getColor](DBackgroundStateAware.md#getcolor)
- [getTheme](DBackgroundStateAware.md#gettheme)
- [setTheme](DBackgroundStateAware.md#settheme)

## Properties

### alpha

• `Optional` **alpha**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DBackground](DBackground.md).[alpha](DBackground.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-background.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-background.ts#L12)

___

### color

• `Optional` **color**: [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Inherited from

[DBackground](DBackground.md).[color](DBackground.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-background.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-background.ts#L11)

## Methods

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-background.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-background.ts#L19)

___

### getColor

▸ **getColor**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-background.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-background.ts#L18)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](DThemeBase.md)

#### Returns

[`DThemeBase`](DThemeBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-background.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-background.ts#L16)

___

### setTheme

▸ **setTheme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](DThemeBase.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-background.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-background.ts#L17)
