[Winter Cardinal UI - v0.160.0](../index.md) / DTableScrollBar

# Class: DTableScrollBar

## Hierarchy

- [`DPaneScrollBar`](DPaneScrollBar.md)<[`DTableScrollBarParent`](../interfaces/DTableScrollBarParent.md)\>

  ↳ **`DTableScrollBar`**

## Table of contents

### Constructors

- [constructor](DTableScrollBar.md#constructor)

### Properties

- [\_isCalled](DTableScrollBar.md#_iscalled)
- [\_isCalledSilently](DTableScrollBar.md#_iscalledsilently)
- [\_isLocked](DTableScrollBar.md#_islocked)
- [\_onUpdate](DTableScrollBar.md#_onupdate)
- [\_parent](DTableScrollBar.md#_parent)
- [horizontal](DTableScrollBar.md#horizontal)
- [vertical](DTableScrollBar.md#vertical)

### Methods

- [getOffsetHorizontalEnd](DTableScrollBar.md#getoffsethorizontalend)
- [getOffsetHorizontalStart](DTableScrollBar.md#getoffsethorizontalstart)
- [getOffsetVerticalEnd](DTableScrollBar.md#getoffsetverticalend)
- [getOffsetVerticalStart](DTableScrollBar.md#getoffsetverticalstart)
- [lock](DTableScrollBar.md#lock)
- [unlock](DTableScrollBar.md#unlock)
- [update](DTableScrollBar.md#update)

## Constructors

### constructor

• **new DTableScrollBar**(`parent`, `options`, `onUpdate`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableScrollBarParent`](../interfaces/DTableScrollBarParent.md) |
| `options` | `undefined` \| [`DPaneScrollBarOptions`](../interfaces/DPaneScrollBarOptions.md) |
| `onUpdate` | (`isRegionVisible`: `boolean`) => `void` |

#### Inherited from

[DPaneScrollBar](DPaneScrollBar.md).[constructor](DPaneScrollBar.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L34)

## Properties

### \_isCalled

• `Protected` **\_isCalled**: `boolean`

#### Inherited from

[DPaneScrollBar](DPaneScrollBar.md).[_isCalled](DPaneScrollBar.md#_iscalled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L31)

___

### \_isCalledSilently

• `Protected` `Optional` **\_isCalledSilently**: `boolean`

#### Inherited from

[DPaneScrollBar](DPaneScrollBar.md).[_isCalledSilently](DPaneScrollBar.md#_iscalledsilently)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L32)

___

### \_isLocked

• `Protected` **\_isLocked**: `number`

#### Inherited from

[DPaneScrollBar](DPaneScrollBar.md).[_isLocked](DPaneScrollBar.md#_islocked)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L30)

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

#### Inherited from

[DPaneScrollBar](DPaneScrollBar.md).[_onUpdate](DPaneScrollBar.md#_onupdate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L26)

___

### \_parent

• `Protected` **\_parent**: [`DTableScrollBarParent`](../interfaces/DTableScrollBarParent.md)

#### Inherited from

[DPaneScrollBar](DPaneScrollBar.md).[_parent](DPaneScrollBar.md#_parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L25)

___

### horizontal

• `Readonly` **horizontal**: [`DScrollBarHorizontal`](DScrollBarHorizontal.md)<[`DThemeScrollBar`](../interfaces/DThemeScrollBar.md), [`DScrollBarOptions`](../interfaces/DScrollBarOptions.md)<[`DThemeScrollBar`](../interfaces/DThemeScrollBar.md)\>\>

#### Inherited from

[DPaneScrollBar](DPaneScrollBar.md).[horizontal](DPaneScrollBar.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L28)

___

### vertical

• `Readonly` **vertical**: [`DScrollBarVertical`](DScrollBarVertical.md)<[`DThemeScrollBar`](../interfaces/DThemeScrollBar.md), [`DScrollBarOptions`](../interfaces/DScrollBarOptions.md)<[`DThemeScrollBar`](../interfaces/DThemeScrollBar.md)\>\>

#### Inherited from

[DPaneScrollBar](DPaneScrollBar.md).[vertical](DPaneScrollBar.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L27)

## Methods

### getOffsetHorizontalEnd

▸ `Protected` **getOffsetHorizontalEnd**(`size`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`number`

#### Inherited from

[DPaneScrollBar](DPaneScrollBar.md).[getOffsetHorizontalEnd](DPaneScrollBar.md#getoffsethorizontalend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L105)

___

### getOffsetHorizontalStart

▸ `Protected` **getOffsetHorizontalStart**(`size`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`number`

#### Inherited from

[DPaneScrollBar](DPaneScrollBar.md).[getOffsetHorizontalStart](DPaneScrollBar.md#getoffsethorizontalstart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L101)

___

### getOffsetVerticalEnd

▸ `Protected` **getOffsetVerticalEnd**(`size`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`number`

#### Inherited from

[DPaneScrollBar](DPaneScrollBar.md).[getOffsetVerticalEnd](DPaneScrollBar.md#getoffsetverticalend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L113)

___

### getOffsetVerticalStart

▸ `Protected` **getOffsetVerticalStart**(`size`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`number`

#### Overrides

[DPaneScrollBar](DPaneScrollBar.md).[getOffsetVerticalStart](DPaneScrollBar.md#getoffsetverticalstart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-scrollbar.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-table-scrollbar.ts#L9)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Inherited from

[DPaneScrollBar](DPaneScrollBar.md).[lock](DPaneScrollBar.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L47)

___

### unlock

▸ **unlock**(`callIfNeeded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callIfNeeded` | `boolean` |

#### Returns

`void`

#### Inherited from

[DPaneScrollBar](DPaneScrollBar.md).[unlock](DPaneScrollBar.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L55)

___

### update

▸ **update**(`silently?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `silently?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DPaneScrollBar](DPaneScrollBar.md).[update](DPaneScrollBar.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-pane-scrollbar.ts#L66)
