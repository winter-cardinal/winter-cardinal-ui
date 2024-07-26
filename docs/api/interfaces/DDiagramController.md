[Winter Cardinal UI - v0.442.0](../index.md) / DDiagramController

# Interface: DDiagramController

[DDiagram](../classes/DDiagram.md) controller.

## Hierarchy

- [`DDiagramBaseController`](DDiagramBaseController.md)

  ↳ **`DDiagramController`**

## Table of contents

### Properties

- [piece](DDiagramController.md#piece)

### Methods

- [getByName](DDiagramController.md#getbyname)

## Properties

### piece

• **piece**: [`DDiagramBasePieceController`](DDiagramBasePieceController.md)

#### Inherited from

[DDiagramBaseController](DDiagramBaseController.md).[piece](DDiagramBaseController.md#piece)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts#L33)

## Methods

### getByName

▸ **getByName**(`name`): `Promise`\<[`DDiagramSerializedSimple`](DDiagramSerializedSimple.md) \| [`DDiagramSerialized`](DDiagramSerialized.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<[`DDiagramSerializedSimple`](DDiagramSerializedSimple.md) \| [`DDiagramSerialized`](DDiagramSerialized.md)\>

#### Inherited from

[DDiagramBaseController](DDiagramBaseController.md).[getByName](DDiagramBaseController.md#getbyname)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts#L34)
