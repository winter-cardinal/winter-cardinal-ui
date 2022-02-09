[Winter Cardinal UI](../README.md) / DCommandSave

# Class: DCommandSave

## Implements

- [`DCommand`](../interfaces/DCommand.md)

## Table of contents

### Constructors

- [constructor](DCommandSave.md#constructor)

### Methods

- [destroy](DCommandSave.md#destroy)
- [execute](DCommandSave.md#execute)
- [getFlag](DCommandSave.md#getflag)
- [redo](DCommandSave.md#redo)
- [undo](DCommandSave.md#undo)

## Constructors

### constructor

• **new DCommandSave**()

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[destroy](../interfaces/DCommand.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-command-save.ts#L23)

___

### execute

▸ **execute**(): `boolean` \| `Promise`<`unknown`\>

Called to executed this command.

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[execute](../interfaces/DCommand.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-command-save.ts#L11)

___

### getFlag

▸ **getFlag**(): `number`

#### Returns

`number`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[getFlag](../interfaces/DCommand.md#getflag)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-command-save.ts#L27)

___

### redo

▸ **redo**(): `boolean` \| `Promise`<`unknown`\>

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[redo](../interfaces/DCommand.md#redo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-command-save.ts#L15)

___

### undo

▸ **undo**(): `boolean` \| `Promise`<`unknown`\>

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[undo](../interfaces/DCommand.md#undo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-command-save.ts#L19)
