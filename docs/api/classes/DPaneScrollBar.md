[Winter Cardinal UI - v0.310.1](../index.md) / DPaneScrollBar

# Class: DPaneScrollBar<PARENT\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `PARENT` | extends [`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md) = [`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md) |

## Hierarchy

- **`DPaneScrollBar`**

  ↳ [`DTableScrollBar`](DTableScrollBar.md)

## Table of contents

### Constructors

- [constructor](DPaneScrollBar.md#constructor)

### Properties

- [\_isCalled](DPaneScrollBar.md#_iscalled)
- [\_isCalledSilently](DPaneScrollBar.md#_iscalledsilently)
- [\_isLocked](DPaneScrollBar.md#_islocked)
- [\_onUpdate](DPaneScrollBar.md#_onupdate)
- [\_parent](DPaneScrollBar.md#_parent)
- [horizontal](DPaneScrollBar.md#horizontal)
- [vertical](DPaneScrollBar.md#vertical)

### Methods

- [getOffsetHorizontalEnd](DPaneScrollBar.md#getoffsethorizontalend)
- [getOffsetHorizontalStart](DPaneScrollBar.md#getoffsethorizontalstart)
- [getOffsetVerticalEnd](DPaneScrollBar.md#getoffsetverticalend)
- [getOffsetVerticalStart](DPaneScrollBar.md#getoffsetverticalstart)
- [lock](DPaneScrollBar.md#lock)
- [touch](DPaneScrollBar.md#touch)
- [unlock](DPaneScrollBar.md#unlock)
- [update](DPaneScrollBar.md#update)

## Constructors

### constructor

• **new DPaneScrollBar**<`PARENT`\>(`parent`, `options`, `onUpdate`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PARENT` | extends [`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md) = [`DPaneScrollBarParent`](../interfaces/DPaneScrollBarParent.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `PARENT` |
| `options` | `undefined` \| [`DPaneScrollBarOptions`](../interfaces/DPaneScrollBarOptions.md) |
| `onUpdate` | (`isRegionVisible`: `boolean`) => `void` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L34)

## Properties

### \_isCalled

• `Protected` **\_isCalled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L31)

___

### \_isCalledSilently

• `Protected` `Optional` **\_isCalledSilently**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L32)

___

### \_isLocked

• `Protected` **\_isLocked**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L30)

___

### \_onUpdate

• `Protected` **\_onUpdate**: (`isRegionVisible`: `boolean`) => `void`

#### Type declaration

▸ (`isRegionVisible`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `isRegionVisible` | `boolean` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L26)

___

### \_parent

• `Protected` **\_parent**: `PARENT`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L25)

___

### horizontal

• `Readonly` **horizontal**: [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<[`DThemeScrollBar`](../interfaces/DThemeScrollBar.md), [`DScrollBarOptions`](../interfaces/DScrollBarOptions.md)<[`DThemeScrollBar`](../interfaces/DThemeScrollBar.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L28)

___

### vertical

• `Readonly` **vertical**: [`DScrollBarVertical`](DScrollBarVertical.md)<[`DThemeScrollBar`](../interfaces/DThemeScrollBar.md), [`DScrollBarOptions`](../interfaces/DScrollBarOptions.md)<[`DThemeScrollBar`](../interfaces/DThemeScrollBar.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L27)

## Methods

### getOffsetHorizontalEnd

▸ `Protected` **getOffsetHorizontalEnd**(`size`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L110)

___

### getOffsetHorizontalStart

▸ `Protected` **getOffsetHorizontalStart**(`size`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L106)

___

### getOffsetVerticalEnd

▸ `Protected` **getOffsetVerticalEnd**(`size`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L118)

___

### getOffsetVerticalStart

▸ `Protected` **getOffsetVerticalStart**(`size`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L114)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L47)

___

### touch

▸ **touch**(`silently?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `silently?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L101)

___

### unlock

▸ **unlock**(`callIfNeeded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callIfNeeded` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L55)

___

### update

▸ **update**(`silently?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `silently?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L66)
