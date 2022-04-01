[Winter Cardinal UI - v0.160.0](../index.md) / DDiagramBaseController

# Interface: DDiagramBaseController

[DDiagram](../classes/DDiagram.md) controller.

## Hierarchy

- **`DDiagramBaseController`**

  ↳ [`DDiagramEditorController`](DDiagramEditorController.md)

  ↳ [`DDiagramController`](DDiagramController.md)

## Table of contents

### Properties

- [piece](DDiagramBaseController.md#piece)

### Methods

- [getByName](DDiagramBaseController.md#getbyname)

## Properties

### piece

• **piece**: [`DDiagramBasePieceController`](DDiagramBasePieceController.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L53)

## Methods

### getByName

▸ **getByName**(`name`): `Promise`<[`DDiagramSerialized`](DDiagramSerialized.md) \| [`DDiagramSerializedSimple`](DDiagramSerializedSimple.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<[`DDiagramSerialized`](DDiagramSerialized.md) \| [`DDiagramSerializedSimple`](DDiagramSerializedSimple.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L54)
