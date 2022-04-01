[Winter Cardinal UI - v0.160.0](../index.md) / DControllers

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

• **new DControllers**()

## Properties

### COMMAND

▪ `Static` `Protected` **COMMAND**: ``null`` \| [`DControllerCommand`](../interfaces/DControllerCommand.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-controllers.ts#L14)

___

### DOCUMENT

▪ `Static` `Protected` **DOCUMENT**: ``null`` \| [`DControllerDocument`](../interfaces/DControllerDocument.md)<`any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-controllers.ts#L15)

___

### KEYBOARD

▪ `Static` `Protected` **KEYBOARD**: ``null`` \| [`DControllerKeyboard`](DControllerKeyboard.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-controllers.ts#L13)

## Methods

### getCommandController

▸ `Static` **getCommandController**(): [`DControllerCommand`](../interfaces/DControllerCommand.md)

#### Returns

[`DControllerCommand`](../interfaces/DControllerCommand.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-controllers.ts#L32)

___

### getDocumentController

▸ `Static` **getDocumentController**<`DOCUMENT`\>(): [`DControllerDocument`](../interfaces/DControllerDocument.md)<`DOCUMENT`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DOCUMENT` | extends [`DDocument`](../interfaces/DDocument.md) |

#### Returns

[`DControllerDocument`](../interfaces/DControllerDocument.md)<`DOCUMENT`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-controllers.ts#L46)

___

### getKeyboardController

▸ `Static` **getKeyboardController**(): [`DControllerKeyboard`](DControllerKeyboard.md)

#### Returns

[`DControllerKeyboard`](DControllerKeyboard.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-controllers.ts#L18)

___

### setCommandController

▸ `Static` **setCommandController**(`instance`): ``null`` \| [`DControllerCommand`](../interfaces/DControllerCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`DControllerCommand`](../interfaces/DControllerCommand.md) |

#### Returns

``null`` \| [`DControllerCommand`](../interfaces/DControllerCommand.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-controllers.ts#L39)

___

### setDocumentController

▸ `Static` **setDocumentController**<`DOCUMENT`\>(`instance`): ``null`` \| [`DControllerDocument`](../interfaces/DControllerDocument.md)<`DOCUMENT`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DOCUMENT` | extends [`DDocument`](../interfaces/DDocument.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`DControllerDocument`](../interfaces/DControllerDocument.md)<`DOCUMENT`\> |

#### Returns

``null`` \| [`DControllerDocument`](../interfaces/DControllerDocument.md)<`DOCUMENT`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-controllers.ts#L53)

___

### setKeyboardController

▸ `Static` **setKeyboardController**(`instance`): ``null`` \| [`DControllerKeyboard`](DControllerKeyboard.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`DControllerKeyboard`](DControllerKeyboard.md) |

#### Returns

``null`` \| [`DControllerKeyboard`](DControllerKeyboard.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controllers.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-controllers.ts#L25)
