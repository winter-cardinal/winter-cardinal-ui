[Winter Cardinal UI - v0.374.0](../index.md) / DTableHeaderCellCheck

# Class: DTableHeaderCellCheck\<ROW\>

## Type parameters

| Name |
| :------ |
| `ROW` |

## Table of contents

### Constructors

- [constructor](DTableHeaderCellCheck.md#constructor)

### Properties

- [\_isEmittable](DTableHeaderCellCheck.md#_isemittable)
- [\_isEnabled](DTableHeaderCellCheck.md#_isenabled)
- [\_isFilterable](DTableHeaderCellCheck.md#_isfilterable)
- [\_parent](DTableHeaderCellCheck.md#_parent)

### Accessors

- [isEmittable](DTableHeaderCellCheck.md#isemittable)
- [isEnabled](DTableHeaderCellCheck.md#isenabled)
- [isFilterable](DTableHeaderCellCheck.md#isfilterable)

### Methods

- [execute](DTableHeaderCellCheck.md#execute)
- [newIteratee](DTableHeaderCellCheck.md#newiteratee)

## Constructors

### constructor

• **new DTableHeaderCellCheck**\<`ROW`\>(`parent`, `options?`): [`DTableHeaderCellCheck`](DTableHeaderCellCheck.md)\<`ROW`\>

#### Type parameters

| Name |
| :------ |
| `ROW` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableHeaderCellCheckParent`](../interfaces/DTableHeaderCellCheckParent.md)\<`ROW`\> |
| `options?` | [`DTableHeaderCellCheckOptions`](../interfaces/DTableHeaderCellCheckOptions.md) |

#### Returns

[`DTableHeaderCellCheck`](DTableHeaderCellCheck.md)\<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L24)

## Properties

### \_isEmittable

• `Protected` **\_isEmittable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L22)

___

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L20)

___

### \_isFilterable

• `Protected` **\_isFilterable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L21)

___

### \_parent

• `Protected` **\_parent**: [`DTableHeaderCellCheckParent`](../interfaces/DTableHeaderCellCheckParent.md)\<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L19)

## Accessors

### isEmittable

• `get` **isEmittable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L43)

• `set` **isEmittable**(`isEmittable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isEmittable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L47)

___

### isEnabled

• `get` **isEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L31)

___

### isFilterable

• `get` **isFilterable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L35)

• `set` **isFilterable**(`isFilterable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFilterable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L39)

## Methods

### execute

▸ **execute**(`isChecked`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isChecked` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L92)

___

### newIteratee

▸ **newIteratee**(`table`, `isChecked`): ``null`` \| (`row`: `ROW`, `rowIndex`: `number`) => `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | [`DTableHeaderTable`](../interfaces/DTableHeaderTable.md)\<`ROW`\> |
| `isChecked` | `boolean` |

#### Returns

``null`` \| (`row`: `ROW`, `rowIndex`: `number`) => `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L51)
