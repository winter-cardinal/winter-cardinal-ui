[Winter Cardinal UI - v0.374.0](../index.md) / DDialogSelectSearch

# Interface: DDialogSelectSearch\<VALUE, CATEGORY_ID\>

[DDialogSelect](../classes/DDialogSelect.md) search object.

## Type parameters

| Name |
| :------ |
| `VALUE` |
| `CATEGORY_ID` |

## Hierarchy

- **`DDialogSelectSearch`**

  ↳ [`DDialogSelectSearchDismissable`](DDialogSelectSearchDismissable.md)

## Implemented by

- [`DDialogSelectSearhImpl`](../classes/DDialogSelectSearhImpl.md)

## Table of contents

### Methods

- [create](DDialogSelectSearch.md#create)
- [isDone](DDialogSelectSearch.md#isdone)
- [on](DDialogSelectSearch.md#on)

## Methods

### create

▸ **create**(`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`string`] \| [`string`, ``null`` \| `CATEGORY_ID`] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L10)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L14)

___

### on

▸ **on**(`event`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"success"`` |
| `handler` | (`e`: `unknown`, `searchResults`: `VALUE`[]) => `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L11)

▸ **on**(`event`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"fail"`` |
| `handler` | () => `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L12)

▸ **on**(`event`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"change"`` |
| `handler` | () => `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L13)
