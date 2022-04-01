[Winter Cardinal UI - v0.160.0](../index.md) / DCommand

# Interface: DCommand

## Implemented by

- [`DCommandClear`](../classes/DCommandClear.md)
- [`DCommandCreate`](../classes/DCommandCreate.md)
- [`DCommandDelete`](../classes/DCommandDelete.md)
- [`DCommandRedo`](../classes/DCommandRedo.md)
- [`DCommandSave`](../classes/DCommandSave.md)
- [`DCommandSaveAs`](../classes/DCommandSaveAs.md)
- [`DCommandUndo`](../classes/DCommandUndo.md)

## Table of contents

### Methods

- [destroy](DCommand.md#destroy)
- [execute](DCommand.md#execute)
- [getFlag](DCommand.md#getflag)
- [redo](DCommand.md#redo)
- [undo](DCommand.md#undo)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-command.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-command.ts#L16)

___

### execute

▸ **execute**(): `boolean` \| `Promise`<`unknown`\>

Called to executed this command.

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-command.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-command.ts#L12)

___

### getFlag

▸ **getFlag**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-command.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-command.ts#L17)

___

### redo

▸ **redo**(): `boolean` \| `Promise`<`unknown`\>

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-command.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-command.ts#L14)

___

### undo

▸ **undo**(): `boolean` \| `Promise`<`unknown`\>

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-command.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-command.ts#L15)
