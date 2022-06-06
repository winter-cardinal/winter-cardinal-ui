[Winter Cardinal UI - v0.179.0](../index.md) / DDiagramEditorController

# Interface: DDiagramEditorController

[DDiagramEditor](../classes/DDiagramEditor.md) controller.

## Hierarchy

- [`DDiagramBaseController`](DDiagramBaseController.md)

  ↳ **`DDiagramEditorController`**

## Table of contents

### Properties

- [piece](DDiagramEditorController.md#piece)

### Methods

- [delete](DDiagramEditorController.md#delete)
- [get](DDiagramEditorController.md#get)
- [getByName](DDiagramEditorController.md#getbyname)
- [open](DDiagramEditorController.md#open)
- [save](DDiagramEditorController.md#save)

## Properties

### piece

• **piece**: [`DDiagramBasePieceController`](DDiagramBasePieceController.md)

#### Inherited from

[DDiagramBaseController](DDiagramBaseController.md).[piece](DDiagramBaseController.md#piece)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts#L33)

## Methods

### delete

▸ **delete**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-controller.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-editor-controller.ts#L20)

___

### get

▸ **get**(`id`): `Promise`<[`DDiagramSerialized`](DDiagramSerialized.md) \| [`DDiagramSerializedSimple`](DDiagramSerializedSimple.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`<[`DDiagramSerialized`](DDiagramSerialized.md) \| [`DDiagramSerializedSimple`](DDiagramSerializedSimple.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-controller.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-editor-controller.ts#L18)

___

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

___

### save

▸ **save**(`simple`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `simple` | [`DDiagramSerializedSimple`](DDiagramSerializedSimple.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-controller.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-editor-controller.ts#L19)
