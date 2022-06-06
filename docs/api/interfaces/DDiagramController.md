[Winter Cardinal UI - v0.179.0](../index.md) / DDiagramController

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
- [open](DDiagramController.md#open)

## Properties

### piece

• **piece**: [`DDiagramBasePieceController`](DDiagramBasePieceController.md)

#### Inherited from

[DDiagramBaseController](DDiagramBaseController.md).[piece](DDiagramBaseController.md#piece)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts#L33)

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

[src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts#L34)

___

### open

▸ `Optional` **open**(`type`, `id`, `inNewWindow`): `void`

Opens a diagram or a page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `number` | a diagram or a page |
| `id` | `string` | an id to identify a diagram or a page |
| `inNewWindow` | `boolean` | true to open in a new window |

#### Returns

`void`

#### Inherited from

[DDiagramBaseController](DDiagramBaseController.md).[open](DDiagramBaseController.md#open)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts#L43)
