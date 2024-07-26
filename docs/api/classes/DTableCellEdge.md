[Winter Cardinal UI - v0.442.0](../index.md) / DTableCellEdge

# Class: DTableCellEdge\<CELL\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CELL` | extends [`DTableCellEdgeCell`](../interfaces/DTableCellEdgeCell.md) |

## Table of contents

### Constructors

- [constructor](DTableCellEdge.md#constructor)

### Properties

- [\_cell](DTableCellEdge.md#_cell)
- [\_checkWork](DTableCellEdge.md#_checkwork)
- [\_columnIndex](DTableCellEdge.md#_columnindex)
- [\_dragged](DTableCellEdge.md#_dragged)
- [\_left](DTableCellEdge.md#_left)
- [\_minWidth](DTableCellEdge.md#_minwidth)
- [\_onHoveredBound](DTableCellEdge.md#_onhoveredbound)
- [\_right](DTableCellEdge.md#_right)
- [\_row](DTableCellEdge.md#_row)
- [\_size](DTableCellEdge.md#_size)

### Accessors

- [left](DTableCellEdge.md#left)
- [right](DTableCellEdge.md#right)

### Methods

- [calcData](DTableCellEdge.md#calcdata)
- [findCells](DTableCellEdge.md#findcells)
- [findResizableCell](DTableCellEdge.md#findresizablecell)
- [isClicked](DTableCellEdge.md#isclicked)
- [newOnUp](DTableCellEdge.md#newonup)
- [onDown](DTableCellEdge.md#ondown)
- [onDown0](DTableCellEdge.md#ondown0)
- [onDown1](DTableCellEdge.md#ondown1)
- [onDown2](DTableCellEdge.md#ondown2)
- [onDown2a](DTableCellEdge.md#ondown2a)
- [onDown2b](DTableCellEdge.md#ondown2b)
- [onDown3](DTableCellEdge.md#ondown3)
- [onDown3a](DTableCellEdge.md#ondown3a)
- [onDown3b](DTableCellEdge.md#ondown3b)
- [onDown\_](DTableCellEdge.md#ondown_)
- [onHovered](DTableCellEdge.md#onhovered)
- [onOut](DTableCellEdge.md#onout)
- [onOver](DTableCellEdge.md#onover)
- [toX](DTableCellEdge.md#tox)

## Constructors

### constructor

• **new DTableCellEdge**\<`CELL`\>(`row`, `cell`, `columnIndex`, `size`): [`DTableCellEdge`](DTableCellEdge.md)\<`CELL`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CELL` | extends [`DTableCellEdgeCell`](../interfaces/DTableCellEdgeCell.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | [`DTableCellEdgeRow`](../interfaces/DTableCellEdgeRow.md)\<`CELL`\> |
| `cell` | `CELL` |
| `columnIndex` | `number` |
| `size` | `number` |

#### Returns

[`DTableCellEdge`](DTableCellEdge.md)\<`CELL`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L77)

## Properties

### \_cell

• `Protected` **\_cell**: `CELL`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L67)

___

### \_checkWork

• `Protected` `Optional` **\_checkWork**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L69)

___

### \_columnIndex

• `Protected` **\_columnIndex**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L68)

___

### \_dragged

• `Protected` **\_dragged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L74)

___

### \_left

• `Protected` `Optional` **\_left**: ``null`` \| [`DTableCellEdgeData`](../index.md#dtablecelledgedata)\<`CELL`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L71)

___

### \_minWidth

• `Protected` **\_minWidth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L75)

___

### \_onHoveredBound

• `Protected` `Optional` **\_onHoveredBound**: (`e`: `InteractionEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L70)

___

### \_right

• `Protected` `Optional` **\_right**: ``null`` \| [`DTableCellEdgeData`](../index.md#dtablecelledgedata)\<`CELL`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L72)

___

### \_row

• `Protected` **\_row**: [`DTableCellEdgeRow`](../interfaces/DTableCellEdgeRow.md)\<`CELL`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L66)

___

### \_size

• `Protected` **\_size**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L73)

## Accessors

### left

• `get` **left**(): ``null`` \| [`DTableCellEdgeData`](../index.md#dtablecelledgedata)\<`CELL`\>

#### Returns

``null`` \| [`DTableCellEdgeData`](../index.md#dtablecelledgedata)\<`CELL`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:213](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L213)

___

### right

• `get` **right**(): ``null`` \| [`DTableCellEdgeData`](../index.md#dtablecelledgedata)\<`CELL`\>

#### Returns

``null`` \| [`DTableCellEdgeData`](../index.md#dtablecelledgedata)\<`CELL`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L222)

## Methods

### calcData

▸ **calcData**(`columnIndex`): ``null`` \| [`DTableCellEdgeData`](../index.md#dtablecelledgedata)\<`CELL`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |

#### Returns

``null`` \| [`DTableCellEdgeData`](../index.md#dtablecelledgedata)\<`CELL`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L167)

___

### findCells

▸ **findCells**(`columnIndex`, `direction`, `weight`): `CELL`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |
| `direction` | `boolean` |
| `weight` | `boolean` |

#### Returns

`CELL`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L133)

___

### findResizableCell

▸ **findResizableCell**(`columnIndex`, `direction`, `weight`): ``null`` \| `CELL`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnIndex` | `number` |
| `direction` | `boolean` |
| `weight` | ``null`` \| `boolean` |

#### Returns

``null`` \| `CELL`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L86)

___

### isClicked

▸ **isClicked**(`e?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `MouseEvent` \| `KeyboardEvent` \| `TouchEvent` \| `InteractionEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:689](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L689)

___

### newOnUp

▸ **newOnUp**(`onMove`, `interactionManager`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onMove` | (`e`: `InteractionEvent`) => `void` |
| `interactionManager` | `InteractionManager` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:669](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L669)

___

### onDown

▸ **onDown**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:231](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L231)

___

### onDown0

▸ **onDown0**(`onDownPoint`, `data`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onDownPoint` | `number` |
| `data` | [`DTableCellEdgeData0`](../index.md#dtablecelledgedata0)\<`CELL`\> |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:343](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L343)

___

### onDown1

▸ **onDown1**(`onDownPoint`, `data`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onDownPoint` | `number` |
| `data` | [`DTableCellEdgeData1`](../index.md#dtablecelledgedata1)\<`CELL`\> |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:358](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L358)

___

### onDown2

▸ **onDown2**(`onDownPoint`, `data`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onDownPoint` | `number` |
| `data` | [`DTableCellEdgeData2`](../index.md#dtablecelledgedata2)\<`CELL`\> |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:421](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L421)

___

### onDown2a

▸ **onDown2a**(`onDownPoint`, `data`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onDownPoint` | `number` |
| `data` | [`DTableCellEdgeData2`](../index.md#dtablecelledgedata2)\<`CELL`\> |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:433](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L433)

___

### onDown2b

▸ **onDown2b**(`onDownPoint`, `data`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onDownPoint` | `number` |
| `data` | [`DTableCellEdgeData2`](../index.md#dtablecelledgedata2)\<`CELL`\> |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:464](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L464)

___

### onDown3

▸ **onDown3**(`onDownPoint`, `data`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onDownPoint` | `number` |
| `data` | [`DTableCellEdgeData3`](../index.md#dtablecelledgedata3)\<`CELL`\> |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:545](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L545)

___

### onDown3a

▸ **onDown3a**(`onDownPoint`, `data`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onDownPoint` | `number` |
| `data` | [`DTableCellEdgeData3`](../index.md#dtablecelledgedata3)\<`CELL`\> |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:557](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L557)

___

### onDown3b

▸ **onDown3b**(`onDownPoint`, `data`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onDownPoint` | `number` |
| `data` | [`DTableCellEdgeData3`](../index.md#dtablecelledgedata3)\<`CELL`\> |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L588)

___

### onDown\_

▸ **onDown_**(`onDownPoint`, `data`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onDownPoint` | `number` |
| `data` | [`DTableCellEdgeData`](../index.md#dtablecelledgedata)\<`CELL`\> |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:258](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L258)

___

### onHovered

▸ **onHovered**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:307](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L307)

___

### onOut

▸ **onOut**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:298](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L298)

___

### onOver

▸ **onOver**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:279](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L279)

___

### toX

▸ **toX**(`e`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-table-cell-edge.ts:338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-table-cell-edge.ts#L338)
