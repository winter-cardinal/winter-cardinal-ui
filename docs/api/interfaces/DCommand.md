[Winter Cardinal UI - v0.374.0](../index.md) / DCommand

# Interface: DCommand

## Implemented by

- [`DCommandBase`](../classes/DCommandBase.md)

## Table of contents

### Methods

- [destroy](DCommand.md#destroy)
- [execute](DCommand.md#execute)
- [isClean](DCommand.md#isclean)
- [isClear](DCommand.md#isclear)
- [isMerged](DCommand.md#ismerged)
- [isStorable](DCommand.md#isstorable)
- [merge](DCommand.md#merge)
- [redo](DCommand.md#redo)
- [undo](DCommand.md#undo)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-command.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command.ts#L33)

___

### execute

▸ **execute**(): `boolean`

Called to executed this command.

#### Returns

`boolean`

true if executed successfully

#### Defined in

[src/main/typescript/wcardinal/ui/d-command.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command.ts#L18)

___

### isClean

▸ **isClean**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-command.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command.ts#L11)

___

### isClear

▸ **isClear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-command.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command.ts#L9)

___

### isMerged

▸ **isMerged**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-command.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command.ts#L29)

___

### isStorable

▸ **isStorable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-command.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command.ts#L7)

___

### merge

▸ **merge**(`target`): `boolean`

Called to merge the target command and this command.
Returns true if merged successfully.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DCommand`](DCommand.md) | a command to be merged |

#### Returns

`boolean`

true if merged successfully

#### Defined in

[src/main/typescript/wcardinal/ui/d-command.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command.ts#L27)

___

### redo

▸ **redo**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-command.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command.ts#L31)

___

### undo

▸ **undo**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-command.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command.ts#L32)
