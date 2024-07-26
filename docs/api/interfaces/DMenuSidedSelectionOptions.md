[Winter Cardinal UI - v0.442.0](../index.md) / DMenuSidedSelectionOptions

# Interface: DMenuSidedSelectionOptions\<EMITTER\>

[DMenuSidedSelection](../classes/DMenuSidedSelection.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `EMITTER` | `any` |

## Table of contents

### Properties

- [filter](DMenuSidedSelectionOptions.md#filter)
- [mode](DMenuSidedSelectionOptions.md#mode)
- [on](DMenuSidedSelectionOptions.md#on)
- [type](DMenuSidedSelectionOptions.md#type)

## Properties

### filter

• `Optional` **filter**: (`item`: ``null`` \| [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\>) => `boolean`

#### Type declaration

▸ (`item`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | ``null`` \| [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> |

##### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L58)

___

### mode

• `Optional` **mode**: ``"NONE"`` \| ``"SINGLE"`` \| ``"SINGLE_ONCE"`` \| [`DMenuSidedSelectionType`](../index.md#dmenusidedselectiontype)

**`Deprecated`**

in favor of [type](DMenuSidedSelectionOptions.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L49)

___

### on

• `Optional` **on**: [`DMenuSidedSelectionOnOptions`](DMenuSidedSelectionOnOptions.md)\<`EMITTER`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L56)

___

### type

• `Optional` **type**: ``"NONE"`` \| ``"SINGLE"`` \| ``"SINGLE_ONCE"`` \| [`DMenuSidedSelectionType`](../index.md#dmenusidedselectiontype)

A selection type.

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-menu-sided-selection.ts#L54)
