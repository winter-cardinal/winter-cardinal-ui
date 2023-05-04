[Winter Cardinal UI - v0.310.1](../index.md) / DDialogSelectSearchDismissable

# Interface: DDialogSelectSearchDismissable<VALUE\>

[DDialogSelect](../classes/DDialogSelect.md) dismissable search object.

## Type parameters

| Name |
| :------ |
| `VALUE` |

## Hierarchy

- [`DDialogSelectSearch`](DDialogSelectSearch.md)<`VALUE`\>

  ↳ **`DDialogSelectSearchDismissable`**

## Implemented by

- [`DDialogSelectSearhDismissableImpl`](../classes/DDialogSelectSearhDismissableImpl.md)

## Table of contents

### Methods

- [create](DDialogSelectSearchDismissable.md#create)
- [isDone](DDialogSelectSearchDismissable.md#isdone)
- [on](DDialogSelectSearchDismissable.md#on)

## Methods

### create

▸ **create**(`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`string`] |

#### Returns

`void`

#### Inherited from

[DDialogSelectSearch](DDialogSelectSearch.md).[create](DDialogSelectSearch.md#create)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L10)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DDialogSelectSearch](DDialogSelectSearch.md).[isDone](DDialogSelectSearch.md#isdone)

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

#### Inherited from

[DDialogSelectSearch](DDialogSelectSearch.md).[on](DDialogSelectSearch.md#on)

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

#### Inherited from

[DDialogSelectSearch](DDialogSelectSearch.md).[on](DDialogSelectSearch.md#on)

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

#### Inherited from

[DDialogSelectSearch](DDialogSelectSearch.md).[on](DDialogSelectSearch.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select-search.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-select-search.ts#L13)
