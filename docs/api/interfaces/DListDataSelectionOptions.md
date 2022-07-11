[Winter Cardinal UI - v0.199.0](../index.md) / DListDataSelectionOptions

# Interface: DListDataSelectionOptions<ITEM, EMITTER\>

{@link DListSelection} options.

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

• `Optional` **mode**: ``"NONE"`` \| ``"SINGLE"`` \| ``"MULTIPLE"`` \| [`DListDataSelectionType`](../index.md#dlistdataselectiontype)

**`deprecated`** in favor of [type](DListDataSelectionOptions.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L44)

___

### on

• `Optional` **on**: [`DListDataSelectionOnOptions`](DListDataSelectionOnOptions.md)<`EMITTER`\>

Mappings of event names and handlers.

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L54)

___

### type

• `Optional` **type**: ``"NONE"`` \| ``"SINGLE"`` \| ``"MULTIPLE"`` \| [`DListDataSelectionType`](../index.md#dlistdataselectiontype)

A type.

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-data-selection.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-list-data-selection.ts#L49)
