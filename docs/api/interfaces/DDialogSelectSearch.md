[Winter Cardinal UI - v0.200.0](../index.md) / DDialogSelectSearch

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

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L36)

___

### getResult

▸ **getResult**(): ``null`` \| `VALUE`[]

#### Returns

``null`` \| `VALUE`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L41)

___

### isDone

▸ **isDone**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L40)

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

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L37)

▸ **on**(`event`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"fail"`` |
| `handler` | () => `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L38)

▸ **on**(`event`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"change"`` |
| `handler` | () => `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-select.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-dialog-select.ts#L39)
