[Winter Cardinal UI - v0.414.0](../index.md) / DCommandBase

# Class: DCommandBase

## Hierarchy

- **`DCommandBase`**

  ↳ [`DCommandClear`](DCommandClear.md)

  ↳ [`DCommandCreate`](DCommandCreate.md)

  ↳ [`DCommandSaveAs`](DCommandSaveAs.md)

  ↳ [`DCommandSave`](DCommandSave.md)

## Implements

- [`DCommand`](../interfaces/DCommand.md)

## Table of contents

### Constructors

- [constructor](DCommandBase.md#constructor)

### Methods

- [destroy](DCommandBase.md#destroy)
- [execute](DCommandBase.md#execute)
- [isClean](DCommandBase.md#isclean)
- [isClear](DCommandBase.md#isclear)
- [isMerged](DCommandBase.md#ismerged)
- [isStorable](DCommandBase.md#isstorable)
- [merge](DCommandBase.md#merge)
- [redo](DCommandBase.md#redo)
- [undo](DCommandBase.md#undo)

## Constructors

### constructor

• **new DCommandBase**(): [`DCommandBase`](DCommandBase.md)

#### Returns

[`DCommandBase`](DCommandBase.md)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[destroy](../interfaces/DCommand.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L41)

___

### execute

▸ **execute**(): `boolean`

Called to executed this command.

#### Returns

`boolean`

true if executed successfully

#### Implementation of

[DCommand](../interfaces/DCommand.md).[execute](../interfaces/DCommand.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L21)

___

### isClean

▸ **isClean**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[isClean](../interfaces/DCommand.md#isclean)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L17)

___

### isClear

▸ **isClear**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[isClear](../interfaces/DCommand.md#isclear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L13)

___

### isMerged

▸ **isMerged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[isMerged](../interfaces/DCommand.md#ismerged)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L29)

___

### isStorable

▸ **isStorable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[isStorable](../interfaces/DCommand.md#isstorable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L9)

___

### merge

▸ **merge**(`target`): `boolean`

Called to merge the target command and this command.
Returns true if merged successfully.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DCommand`](../interfaces/DCommand.md) | a command to be merged |

#### Returns

`boolean`

true if merged successfully

#### Implementation of

[DCommand](../interfaces/DCommand.md).[merge](../interfaces/DCommand.md#merge)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L25)

___

### redo

▸ **redo**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[redo](../interfaces/DCommand.md#redo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L33)

___

### undo

▸ **undo**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DCommand](../interfaces/DCommand.md).[undo](../interfaces/DCommand.md#undo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L37)
