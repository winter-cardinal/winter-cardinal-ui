[Winter Cardinal UI - v0.414.0](../index.md) / EShapeActionRuntimes

# Class: EShapeActionRuntimes

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimes.md#constructor)

### Properties

- [\_typeToRuntimes](EShapeActionRuntimes.md#_typetoruntimes)

### Methods

- [add](EShapeActionRuntimes.md#add)
- [get](EShapeActionRuntimes.md#get)

## Constructors

### constructor

• **new EShapeActionRuntimes**(): [`EShapeActionRuntimes`](EShapeActionRuntimes.md)

#### Returns

[`EShapeActionRuntimes`](EShapeActionRuntimes.md)

## Properties

### \_typeToRuntimes

▪ `Static` `Optional` **\_typeToRuntimes**: `Map`\<`number`, [`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md)[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:5](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L5)

## Methods

### add

▸ **add**(`type`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |
| `runtime` | [`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L7)

___

### get

▸ **get**(`type`): `undefined` \| ``null`` \| [`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |

#### Returns

`undefined` \| ``null`` \| [`EShapeActionRuntime`](../interfaces/EShapeActionRuntime.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L22)
