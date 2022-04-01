[Winter Cardinal UI - v0.160.0](../index.md) / DCommandClear

# Class: DCommandClear

## Implements

- [`DCommand`](../interfaces/DCommand.md)

## Table of contents

### Constructors

- [constructor](DCommandClear.md#constructor)

### Methods

- [destroy](DCommandClear.md#destroy)
- [execute](DCommandClear.md#execute)
- [getFlag](DCommandClear.md#getflag)
- [redo](DCommandClear.md#redo)
- [undo](DCommandClear.md#undo)

## Constructors

### constructor

• **new DCommandClear**()

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[destroy](../interfaces/DCommand.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-clear.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-command-clear.ts#L22)

___

### execute

▸ **execute**(): `boolean` \| `Promise`<`unknown`\>

Called to executed this command.

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[execute](../interfaces/DCommand.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-clear.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-command-clear.ts#L10)

___

### getFlag

▸ **getFlag**(): `number`

#### Returns

`number`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[getFlag](../interfaces/DCommand.md#getflag)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-clear.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-command-clear.ts#L26)

___

### redo

▸ **redo**(): `boolean` \| `Promise`<`unknown`\>

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[redo](../interfaces/DCommand.md#redo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-clear.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-command-clear.ts#L14)

___

### undo

▸ **undo**(): `boolean` \| `Promise`<`unknown`\>

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[undo](../interfaces/DCommand.md#undo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-clear.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-command-clear.ts#L18)
