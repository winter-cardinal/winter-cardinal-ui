[Winter Cardinal UI](../README.md) / DBorderStateAware

# Interface: DBorderStateAware

## Hierarchy

- [`DBorder`](DBorder.md)

  ↳ **`DBorderStateAware`**

## Implemented by

- [`DBaseBorder`](../classes/DBaseBorder.md)

## Table of contents

### Properties

- [align](DBorderStateAware.md#align)
- [alpha](DBorderStateAware.md#alpha)
- [color](DBorderStateAware.md#color)
- [mask](DBorderStateAware.md#mask)
- [width](DBorderStateAware.md#width)

### Methods

- [getAlign](DBorderStateAware.md#getalign)
- [getAlpha](DBorderStateAware.md#getalpha)
- [getColor](DBorderStateAware.md#getcolor)
- [getMask](DBorderStateAware.md#getmask)
- [getTheme](DBorderStateAware.md#gettheme)
- [getWidth](DBorderStateAware.md#getwidth)
- [setTheme](DBorderStateAware.md#settheme)

## Properties

### align

• `Optional` **align**: [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DBorder](DBorder.md).[align](DBorder.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/d-border.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-border.ts#L15)

___

### alpha

• `Optional` **alpha**: [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DBorder](DBorder.md).[alpha](DBorder.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-border.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-border.ts#L13)

___

### color

• `Optional` **color**: [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Inherited from

[DBorder](DBorder.md).[color](DBorder.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-border.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-border.ts#L12)

___

### mask

• `Optional` **mask**: [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DBorder](DBorder.md).[mask](DBorder.md#mask)

#### Defined in

[src/main/typescript/wcardinal/ui/d-border.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-border.ts#L16)

___

### width

• `Optional` **width**: [`DStateAwareOrValueMightBe`](../README.md#dstateawareorvaluemightbe)<`number`\>

#### Inherited from

[DBorder](DBorder.md).[width](DBorder.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/d-border.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-border.ts#L14)

## Methods

### getAlign

▸ **getAlign**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-border.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-border.ts#L25)

___

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-border.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-border.ts#L23)

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

[src/main/typescript/wcardinal/ui/d-border.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-border.ts#L22)

___

### getMask

▸ **getMask**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-border.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-border.ts#L26)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](DThemeBase.md)

#### Returns

[`DThemeBase`](DThemeBase.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-border.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-border.ts#L20)

___

### getWidth

▸ **getWidth**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](DBaseStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-border.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-border.ts#L24)

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

[src/main/typescript/wcardinal/ui/d-border.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-border.ts#L21)
