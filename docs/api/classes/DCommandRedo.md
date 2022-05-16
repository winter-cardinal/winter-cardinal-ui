[Winter Cardinal UI - v0.167.0](../index.md) / DCommandRedo

# Class: DCommandRedo

## Implements

- [`DCommand`](../interfaces/DCommand.md)

## Table of contents

### Constructors

- [constructor](DCommandRedo.md#constructor)

### Methods

- [destroy](DCommandRedo.md#destroy)
- [execute](DCommandRedo.md#execute)
- [getFlag](DCommandRedo.md#getflag)
- [redo](DCommandRedo.md#redo)
- [undo](DCommandRedo.md#undo)

## Constructors

### constructor

• **new DCommandRedo**()

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[destroy](../interfaces/DCommand.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-redo.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-command-redo.ts#L22)

___

### execute

▸ **execute**(): `boolean` \| `Promise`<`void`\>

Called to executed this command.

#### Returns

`boolean` \| `Promise`<`void`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[execute](../interfaces/DCommand.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-redo.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-command-redo.ts#L10)

___

### getFlag

▸ **getFlag**(): `number`

#### Returns

`number`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[getFlag](../interfaces/DCommand.md#getflag)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-redo.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-command-redo.ts#L26)

___

### redo

▸ **redo**(): `boolean` \| `Promise`<`void`\>

#### Returns

`boolean` \| `Promise`<`void`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[redo](../interfaces/DCommand.md#redo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-redo.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-command-redo.ts#L14)

___

### undo

▸ **undo**(): `boolean` \| `Promise`<`void`\>

#### Returns

`boolean` \| `Promise`<`void`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[undo](../interfaces/DCommand.md#undo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-redo.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-command-redo.ts#L18)
