[Winter Cardinal UI - v0.194.0](../index.md) / DCommandSaveAs

# Class: DCommandSaveAs

## Implements

- [`DCommand`](../interfaces/DCommand.md)

## Table of contents

### Constructors

- [constructor](DCommandSaveAs.md#constructor)

### Properties

- [\_name](DCommandSaveAs.md#_name)

### Methods

- [destroy](DCommandSaveAs.md#destroy)
- [execute](DCommandSaveAs.md#execute)
- [getFlag](DCommandSaveAs.md#getflag)
- [redo](DCommandSaveAs.md#redo)
- [undo](DCommandSaveAs.md#undo)

## Constructors

### constructor

• **new DCommandSaveAs**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save-as.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-command-save-as.ts#L13)

## Properties

### \_name

• `Protected` **\_name**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save-as.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-command-save-as.ts#L11)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[destroy](../interfaces/DCommand.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save-as.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-command-save-as.ts#L29)

___

### execute

▸ **execute**(): `boolean` \| `Promise`<`unknown`\>

Called to executed this command.

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[execute](../interfaces/DCommand.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save-as.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-command-save-as.ts#L17)

___

### getFlag

▸ **getFlag**(): `number`

#### Returns

`number`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[getFlag](../interfaces/DCommand.md#getflag)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save-as.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-command-save-as.ts#L33)

___

### redo

▸ **redo**(): `boolean` \| `Promise`<`unknown`\>

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[redo](../interfaces/DCommand.md#redo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save-as.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-command-save-as.ts#L21)

___

### undo

▸ **undo**(): `boolean` \| `Promise`<`unknown`\>

#### Returns

`boolean` \| `Promise`<`unknown`\>

#### Implementation of

[DCommand](../interfaces/DCommand.md).[undo](../interfaces/DCommand.md#undo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save-as.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-command-save-as.ts#L25)
