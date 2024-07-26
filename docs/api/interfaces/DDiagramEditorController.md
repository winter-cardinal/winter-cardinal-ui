[Winter Cardinal UI - v0.442.0](../index.md) / DDiagramEditorController

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
- [save](DDiagramEditorController.md#save)

## Properties

### piece

• **piece**: [`DDiagramBasePieceController`](DDiagramBasePieceController.md)

#### Inherited from

[DDiagramBaseController](DDiagramBaseController.md).[piece](DDiagramBaseController.md#piece)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-base-controller.ts#L33)

## Methods

### delete

▸ **delete**(`id`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-controller.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-editor-controller.ts#L20)

___

### get

▸ **get**(`id`): `Promise`\<[`DDiagramSerializedSimple`](DDiagramSerializedSimple.md) \| [`DDiagramSerialized`](DDiagramSerialized.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`\<[`DDiagramSerializedSimple`](DDiagramSerializedSimple.md) \| [`DDiagramSerialized`](DDiagramSerialized.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-controller.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-editor-controller.ts#L18)

___

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

___

### save

▸ **save**(`simple`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `simple` | [`DDiagramSerializedSimple`](DDiagramSerializedSimple.md) |

#### Returns

`Promise`\<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-controller.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-editor-controller.ts#L19)
