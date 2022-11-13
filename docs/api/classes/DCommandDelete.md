[Winter Cardinal UI - v0.227.0](../index.md) / DCommandDelete

# Class: DCommandDelete

## Implements

- [`DCommand`](../interfaces/DCommand.md)

## Table of contents

### Constructors

- [constructor](DCommandDelete.md#constructor)

### Methods

- [destroy](DCommandDelete.md#destroy)
- [execute](DCommandDelete.md#execute)
- [getFlag](DCommandDelete.md#getflag)
- [redo](DCommandDelete.md#redo)
- [undo](DCommandDelete.md#undo)

## Constructors

### constructor

• **new DCommandDelete**()

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[destroy](../interfaces/DCommand.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-delete.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-command-delete.ts#L23)

___

### execute

▸ **execute**(): `boolean` \| `Promise`<`unknown`\>

Called to executed this command.

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[execute](../interfaces/DCommand.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-delete.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-command-delete.ts#L11)

___

### getFlag

▸ **getFlag**(): `number`

#### Returns

`number`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[getFlag](../interfaces/DCommand.md#getflag)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-delete.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-command-delete.ts#L27)

___

### redo

▸ **redo**(): `boolean` \| `Promise`<`unknown`\>

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[redo](../interfaces/DCommand.md#redo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-delete.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-command-delete.ts#L15)

___

### undo

▸ **undo**(): `boolean` \| `Promise`<`unknown`\>

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[undo](../interfaces/DCommand.md#undo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-delete.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-command-delete.ts#L19)
