[Winter Cardinal UI - v0.179.0](../index.md) / DDialogSelectSearch

# Interface: DDialogSelectSearch<VALUE\>

[DDialogSelect](../classes/DDialogSelect.md) search object.

## Type parameters

| Name |
| :------ |
| `VALUE` |

## Table of contents

### Methods

- [create](DDialogSelectSearch.md#create)
- [getResult](DDialogSelectSearch.md#getresult)
- [isDone](DDialogSelectSearch.md#isdone)
- [on](DDialogSelectSearch.md#on)

## Methods

### create

▸ **create**(`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`string`] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L44)

___

### getResult

▸ **getResult**(): ``null`` \| `VALUE`[]

#### Returns

``null`` \| `VALUE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L49)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L48)

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

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L45)

▸ **on**(`event`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"fail"`` |
| `handler` | () => `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L46)

▸ **on**(`event`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"change"`` |
| `handler` | () => `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L47)
