[Winter Cardinal UI - v0.414.0](../index.md) / DCommandCreate

# Class: DCommandCreate

## Hierarchy

- [`DCommandBase`](DCommandBase.md)

  ↳ **`DCommandCreate`**

## Table of contents

### Constructors

- [constructor](DCommandCreate.md#constructor)

### Methods

- [destroy](DCommandCreate.md#destroy)
- [execute](DCommandCreate.md#execute)
- [isClean](DCommandCreate.md#isclean)
- [isClear](DCommandCreate.md#isclear)
- [isMerged](DCommandCreate.md#ismerged)
- [isStorable](DCommandCreate.md#isstorable)
- [merge](DCommandCreate.md#merge)
- [redo](DCommandCreate.md#redo)
- [undo](DCommandCreate.md#undo)

## Constructors

### constructor

• **new DCommandCreate**(): [`DCommandCreate`](DCommandCreate.md)

#### Returns

[`DCommandCreate`](DCommandCreate.md)

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

[src/main/typescript/wcardinal/ui/d-command-base.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L41)

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

[src/main/typescript/wcardinal/ui/d-command-create.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-create.ts#L9)

___

### isClean

▸ **isClean**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCommandBase](DCommandBase.md).[isClean](DCommandBase.md#isclean)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L17)

___

### isClear

▸ **isClear**(): `boolean`

#### Returns

`boolean`

#### Overrides

[DCommandBase](DCommandBase.md).[isClear](DCommandBase.md#isclear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-create.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-create.ts#L15)

___

### isMerged

▸ **isMerged**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCommandBase](DCommandBase.md).[isMerged](DCommandBase.md#ismerged)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L29)

___

### isStorable

▸ **isStorable**(): `boolean`

#### Returns

`boolean`

#### Overrides

[DCommandBase](DCommandBase.md).[isStorable](DCommandBase.md#isstorable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-create.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-create.ts#L11)

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

[src/main/typescript/wcardinal/ui/d-command-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L25)

___

### redo

▸ **redo**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCommandBase](DCommandBase.md).[redo](DCommandBase.md#redo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L33)

___

### undo

▸ **undo**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DCommandBase](DCommandBase.md).[undo](DCommandBase.md#undo)

#### Defined in

[src/main/typescript/wcardinal/ui/d-command-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-command-base.ts#L37)
