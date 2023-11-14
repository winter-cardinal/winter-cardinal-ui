[Winter Cardinal UI - v0.374.0](../index.md) / DCommandClear

# Class: DCommandClear

## Hierarchy

- [`DCommandBase`](DCommandBase.md)

  ↳ **`DCommandClear`**

## Table of contents

### Constructors

- [constructor](DCommandClear.md#constructor)

### Methods

- [destroy](DCommandClear.md#destroy)
- [execute](DCommandClear.md#execute)
- [isClean](DCommandClear.md#isclean)
- [isClear](DCommandClear.md#isclear)
- [isMerged](DCommandClear.md#ismerged)
- [isStorable](DCommandClear.md#isstorable)
- [merge](DCommandClear.md#merge)
- [redo](DCommandClear.md#redo)
- [undo](DCommandClear.md#undo)

## Constructors

### constructor

• **new DCommandClear**(): [`DCommandClear`](DCommandClear.md)

#### Returns

[`DCommandClear`](DCommandClear.md)

#### Inherited from

[DCommandBase](DCommandBase.md).[constructor](DCommandBase.md#constructor)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DCommandBase](DCommandBase.md).[destroy](DCommandBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command-base.ts#L41)

___

### execute

▸ **execute**(): `boolean`

Called to executed this command.

#### Returns

`boolean`

true if executed successfully

#### Inherited from

[DCommandBase](DCommandBase.md).[execute](DCommandBase.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command-base.ts#L21)

___

### isClean

▸ **isClean**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCommandBase](DCommandBase.md).[isClean](DCommandBase.md#isclean)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command-base.ts#L17)

___

### isClear

▸ **isClear**(): `boolean`

#### Returns

`boolean`

#### Overrides

[DCommandBase](DCommandBase.md).[isClear](DCommandBase.md#isclear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-clear.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command-clear.ts#L13)

___

### isMerged

▸ **isMerged**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCommandBase](DCommandBase.md).[isMerged](DCommandBase.md#ismerged)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command-base.ts#L29)

___

### isStorable

▸ **isStorable**(): `boolean`

#### Returns

`boolean`

#### Overrides

[DCommandBase](DCommandBase.md).[isStorable](DCommandBase.md#isstorable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-clear.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command-clear.ts#L9)

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

#### Inherited from

[DCommandBase](DCommandBase.md).[merge](DCommandBase.md#merge)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command-base.ts#L25)

___

### redo

▸ **redo**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCommandBase](DCommandBase.md).[redo](DCommandBase.md#redo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command-base.ts#L33)

___

### undo

▸ **undo**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCommandBase](DCommandBase.md).[undo](DCommandBase.md#undo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-command-base.ts#L37)
