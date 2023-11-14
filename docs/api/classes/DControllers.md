[Winter Cardinal UI - v0.374.0](../index.md) / DControllers

# Class: DControllers

## Table of contents

### Constructors

- [constructor](DControllers.md#constructor)

### Properties

- [COMMAND](DControllers.md#command)
- [DOCUMENT](DControllers.md#document)
- [KEYBOARD](DControllers.md#keyboard)

### Methods

- [getCommandController](DControllers.md#getcommandcontroller)
- [getDocumentController](DControllers.md#getdocumentcontroller)
- [getKeyboardController](DControllers.md#getkeyboardcontroller)
- [setCommandController](DControllers.md#setcommandcontroller)
- [setDocumentController](DControllers.md#setdocumentcontroller)
- [setKeyboardController](DControllers.md#setkeyboardcontroller)

## Constructors

### constructor

• **new DControllers**(): [`DControllers`](DControllers.md)

#### Returns

[`DControllers`](DControllers.md)

## Properties

### COMMAND

▪ `Static` `Protected` **COMMAND**: ``null`` \| [`DControllerCommand`](../interfaces/DControllerCommand.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-controllers.ts#L15)

___

### DOCUMENT

▪ `Static` `Protected` **DOCUMENT**: ``null`` \| [`DControllerDocument`](../interfaces/DControllerDocument.md)\<`any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-controllers.ts#L16)

___

### KEYBOARD

▪ `Static` `Protected` **KEYBOARD**: ``null`` \| [`DControllerKeyboard`](../interfaces/DControllerKeyboard.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-controllers.ts#L14)

## Methods

### getCommandController

▸ **getCommandController**(): [`DControllerCommand`](../interfaces/DControllerCommand.md)

#### Returns

[`DControllerCommand`](../interfaces/DControllerCommand.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-controllers.ts#L33)

___

### getDocumentController

▸ **getDocumentController**\<`DOCUMENT`\>(): [`DControllerDocument`](../interfaces/DControllerDocument.md)\<`DOCUMENT`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DOCUMENT` | extends [`DDocument`](../interfaces/DDocument.md) |

#### Returns

[`DControllerDocument`](../interfaces/DControllerDocument.md)\<`DOCUMENT`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-controllers.ts#L47)

___

### getKeyboardController

▸ **getKeyboardController**(): [`DControllerKeyboard`](../interfaces/DControllerKeyboard.md)

#### Returns

[`DControllerKeyboard`](../interfaces/DControllerKeyboard.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-controllers.ts#L19)

___

### setCommandController

▸ **setCommandController**(`instance`): ``null`` \| [`DControllerCommand`](../interfaces/DControllerCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`DControllerCommand`](../interfaces/DControllerCommand.md) |

#### Returns

``null`` \| [`DControllerCommand`](../interfaces/DControllerCommand.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-controllers.ts#L40)

___

### setDocumentController

▸ **setDocumentController**\<`DOCUMENT`\>(`instance`): ``null`` \| [`DControllerDocument`](../interfaces/DControllerDocument.md)\<`DOCUMENT`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DOCUMENT` | extends [`DDocument`](../interfaces/DDocument.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`DControllerDocument`](../interfaces/DControllerDocument.md)\<`DOCUMENT`\> |

#### Returns

``null`` \| [`DControllerDocument`](../interfaces/DControllerDocument.md)\<`DOCUMENT`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-controllers.ts#L54)

___

### setKeyboardController

▸ **setKeyboardController**(`instance`): ``null`` \| [`DControllerKeyboard`](../interfaces/DControllerKeyboard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`DControllerKeyboard`](../interfaces/DControllerKeyboard.md) |

#### Returns

``null`` \| [`DControllerKeyboard`](../interfaces/DControllerKeyboard.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-controllers.ts#L26)
