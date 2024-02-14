[Winter Cardinal UI - v0.407.0](../index.md) / DListDataSelectionOptions

# Interface: DListDataSelectionOptions\<ITEM, EMITTER\>

[DListDataSelection](DListDataSelection.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `ITEM` | `ITEM` |
| `EMITTER` | `any` |

## Table of contents

### Properties

- [mode](DListDataSelectionOptions.md#mode)
- [on](DListDataSelectionOptions.md#on)
- [type](DListDataSelectionOptions.md#type)

## Properties

### mode

• `Optional` **mode**: ``"NONE"`` \| ``"SINGLE"`` \| ``"MULTIPLE"`` \| [`DListDataSelectionType`](../index.md#dlistdataselectiontype-1)

**`Deprecated`**

in favor of [type](DListDataSelectionOptions.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L47)

___

### on

• `Optional` **on**: [`DListDataSelectionOnOptions`](DListDataSelectionOnOptions.md)\<`EMITTER`\>

Mappings of event names and handlers.

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L57)

___

### type

• `Optional` **type**: ``"NONE"`` \| ``"SINGLE"`` \| ``"MULTIPLE"`` \| [`DListDataSelectionType`](../index.md#dlistdataselectiontype-1)

A type.

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L52)
