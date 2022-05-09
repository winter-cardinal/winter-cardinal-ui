[Winter Cardinal UI - v0.164.0](../index.md) / DDiagramController

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

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L53)

## Methods

### getByName

▸ **getByName**(`name`): `Promise`<[`DDiagramSerialized`](DDiagramSerialized.md) \| [`DDiagramSerializedSimple`](DDiagramSerializedSimple.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<[`DDiagramSerialized`](DDiagramSerialized.md) \| [`DDiagramSerializedSimple`](DDiagramSerializedSimple.md)\>

#### Inherited from

[DDiagramBaseController](DDiagramBaseController.md).[getByName](DDiagramBaseController.md#getbyname)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L54)
