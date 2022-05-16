[Winter Cardinal UI - v0.167.0](../index.md) / DCommandUndo

# Class: DCommandUndo

## Implements

- [`DCommand`](../interfaces/DCommand.md)

## Table of contents

### Constructors

- [constructor](DCommandUndo.md#constructor)

### Methods

- [destroy](DCommandUndo.md#destroy)
- [execute](DCommandUndo.md#execute)
- [getFlag](DCommandUndo.md#getflag)
- [redo](DCommandUndo.md#redo)
- [undo](DCommandUndo.md#undo)

## Constructors

### constructor

• **new DCommandUndo**()

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[destroy](../interfaces/DCommand.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-undo.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-command-undo.ts#L22)

___

### execute

▸ **execute**(): `boolean` \| `Promise`<`void`\>

Called to executed this command.

#### Returns

`boolean` \| `Promise`<`void`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[execute](../interfaces/DCommand.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-undo.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-command-undo.ts#L10)

___

### getFlag

▸ **getFlag**(): `number`

#### Returns

`number`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[getFlag](../interfaces/DCommand.md#getflag)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-undo.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-command-undo.ts#L26)

___

### redo

▸ **redo**(): `boolean` \| `Promise`<`void`\>

#### Returns

`boolean` \| `Promise`<`void`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[redo](../interfaces/DCommand.md#redo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-undo.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-command-undo.ts#L14)

___

### undo

▸ **undo**(): `boolean` \| `Promise`<`void`\>

#### Returns

`boolean` \| `Promise`<`void`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[undo](../interfaces/DCommand.md#undo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-undo.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-command-undo.ts#L18)
