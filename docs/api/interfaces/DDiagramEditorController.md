[Winter Cardinal UI](../README.md) / DDiagramEditorController

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

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L53)

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

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L42)

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

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L40)

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

[src/main/typescript/wcardinal/ui/d-diagram-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-base.ts#L54)

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

[src/main/typescript/wcardinal/ui/d-diagram-editor.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-editor.ts#L41)
