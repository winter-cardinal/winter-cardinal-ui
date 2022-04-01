[Winter Cardinal UI - v0.160.0](../index.md) / DTableBodyCellLinkLinkOptions

# Interface: DTableBodyCellLinkLinkOptions<ROW, VALUE\>

## Type parameters

| Name |
| :------ |
| `ROW` |
| `VALUE` |

## Table of contents

### Properties

- [checker](DTableBodyCellLinkLinkOptions.md#checker)
- [menu](DTableBodyCellLinkLinkOptions.md#menu)
- [target](DTableBodyCellLinkLinkOptions.md#target)
- [url](DTableBodyCellLinkLinkOptions.md#url)

## Properties

### checker

• `Optional` **checker**: [`DTableBodyCellLinkChecker`](../index.md#dtablebodycelllinkchecker)<`ROW`, `VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts#L39)

___

### menu

• `Optional` **menu**: [`DMenuOptions`](DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](DThemeMenu.md)\> \| [`DMenu`](../classes/DMenu.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](DThemeMenu.md), [`DMenuOptions`](DMenuOptions.md)<[`DLinkMenuItemId`](../index.md#dlinkmenuitemid), [`DThemeMenu`](DThemeMenu.md)\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts#L40)

___

### target

• `Optional` **target**: ``"AUTO"`` \| ``"NEW_WINDOW"`` \| ``"THIS_WINDOW"`` \| [`DLinkTarget`](../index.md#dlinktarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts#L38)

___

### url

• `Optional` **url**: `string` \| [`DTableBodyCellLinkUrlMaker`](../index.md#dtablebodycelllinkurlmaker)<`ROW`, `VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-table-body-cell-link.ts#L37)
