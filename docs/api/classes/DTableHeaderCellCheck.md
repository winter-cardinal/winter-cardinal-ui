[Winter Cardinal UI - v0.310.1](../index.md) / DTableHeaderCellCheck

# Class: DTableHeaderCellCheck<ROW\>

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

• **new DTableHeaderCellCheck**<`ROW`\>(`parent`, `options?`)

#### Type parameters

| Name |
| :------ |
| `ROW` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DTableHeaderCellCheckParent`](../interfaces/DTableHeaderCellCheckParent.md)<`ROW`\> |
| `options?` | [`DTableHeaderCellCheckOptions`](../interfaces/DTableHeaderCellCheckOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L23)

## Properties

### \_isEmittable

• `Protected` **\_isEmittable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L21)

___

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L19)

___

### \_isFilterable

• `Protected` **\_isFilterable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L20)

___

### \_parent

• `Protected` **\_parent**: [`DTableHeaderCellCheckParent`](../interfaces/DTableHeaderCellCheckParent.md)<`ROW`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L18)

## Accessors

### isEmittable

• `get` **isEmittable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L42)

• `set` **isEmittable**(`isEmittable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isEmittable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L46)

___

### isEnabled

• `get` **isEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L30)

___

### isFilterable

• `get` **isFilterable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L34)

• `set` **isFilterable**(`isFilterable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFilterable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L38)

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

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L91)

___

### newIteratee

▸ `Protected` **newIteratee**(`table`, `isChecked`): ``null`` \| (`row`: `ROW`, `rowIndex`: `number`) => `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | [`DTableHeaderTable`](../interfaces/DTableHeaderTable.md)<`ROW`\> |
| `isChecked` | `boolean` |

#### Returns

``null`` \| (`row`: `ROW`, `rowIndex`: `number`) => `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-table-header-cell-check.ts#L50)
