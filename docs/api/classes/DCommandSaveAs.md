[Winter Cardinal UI - v0.442.0](../index.md) / DCommandSaveAs

# Class: DCommandSaveAs

## Hierarchy

- [`DCommandBase`](DCommandBase.md)

  ↳ **`DCommandSaveAs`**

## Table of contents

### Constructors

- [constructor](DCommandSaveAs.md#constructor)

### Properties

- [\_name](DCommandSaveAs.md#_name)

### Accessors

- [name](DCommandSaveAs.md#name)

### Methods

- [destroy](DCommandSaveAs.md#destroy)
- [execute](DCommandSaveAs.md#execute)
- [isClean](DCommandSaveAs.md#isclean)
- [isClear](DCommandSaveAs.md#isclear)
- [isMerged](DCommandSaveAs.md#ismerged)
- [isStorable](DCommandSaveAs.md#isstorable)
- [merge](DCommandSaveAs.md#merge)
- [redo](DCommandSaveAs.md#redo)
- [undo](DCommandSaveAs.md#undo)

## Constructors

### constructor

• **new DCommandSaveAs**(`name`): [`DCommandSaveAs`](DCommandSaveAs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`DCommandSaveAs`](DCommandSaveAs.md)

#### Overrides

[DCommandBase](DCommandBase.md).[constructor](DCommandBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save-as.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-command-save-as.ts#L12)

## Properties

### \_name

• `Protected` **\_name**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save-as.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-command-save-as.ts#L10)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save-as.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-command-save-as.ts#L17)

## Methods

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DCommandBase](DCommandBase.md).[destroy](DCommandBase.md#destroy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L41)

___

### execute

▸ **execute**(): `boolean`

Called to executed this command.

#### Returns

`boolean`

true if executed successfully

#### Overrides

[DCommandBase](DCommandBase.md).[execute](DCommandBase.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save-as.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-command-save-as.ts#L25)

___

### isClean

▸ **isClean**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCommandBase](DCommandBase.md).[isClean](DCommandBase.md#isclean)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L17)

___

### isClear

▸ **isClear**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCommandBase](DCommandBase.md).[isClear](DCommandBase.md#isclear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L13)

___

### isMerged

▸ **isMerged**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCommandBase](DCommandBase.md).[isMerged](DCommandBase.md#ismerged)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L29)

___

### isStorable

▸ **isStorable**(): `boolean`

#### Returns

`boolean`

#### Overrides

[DCommandBase](DCommandBase.md).[isStorable](DCommandBase.md#isstorable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-save-as.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-command-save-as.ts#L21)

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

[src/main/typescript/wcardinal/ui/d-command-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L25)

___

### redo

▸ **redo**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCommandBase](DCommandBase.md).[redo](DCommandBase.md#redo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L33)

___

### undo

▸ **undo**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCommandBase](DCommandBase.md).[undo](DCommandBase.md#undo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L37)
