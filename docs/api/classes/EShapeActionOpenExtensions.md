[Winter Cardinal UI - v0.194.0](../index.md) / EShapeActionOpenExtensions

# Class: EShapeActionOpenExtensions

## Table of contents

### Constructors

- [constructor](EShapeActionOpenExtensions.md#constructor)

### Properties

- [\_data](EShapeActionOpenExtensions.md#_data)
- [\_typeToDatum](EShapeActionOpenExtensions.md#_typetodatum)

### Methods

- [add](EShapeActionOpenExtensions.md#add)
- [each](EShapeActionOpenExtensions.md#each)
- [get](EShapeActionOpenExtensions.md#get)

## Constructors

### constructor

• **new EShapeActionOpenExtensions**()

## Properties

### \_data

▪ `Static` `Protected` `Optional` **\_data**: [`EShapeActionOpenExtension`](../interfaces/EShapeActionOpenExtension.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-open-extensions.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-open-extensions.ts#L12)

___

### \_typeToDatum

▪ `Static` `Protected` `Optional` **\_typeToDatum**: `Map`<`number`, [`EShapeActionOpenExtension`](../interfaces/EShapeActionOpenExtension.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-open-extensions.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-open-extensions.ts#L13)

## Methods

### add

▸ `Static` **add**(`extension`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extension` | [`EShapeActionOpenExtension`](../interfaces/EShapeActionOpenExtension.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-open-extensions.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-open-extensions.ts#L15)

___

### each

▸ `Static` **each**(`iteratee`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`extension`: [`EShapeActionOpenExtension`](../interfaces/EShapeActionOpenExtension.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-open-extensions.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-open-extensions.ts#L30)

___

### get

▸ `Static` **get**(`type`): `undefined` \| [`EShapeActionOpenExtension`](../interfaces/EShapeActionOpenExtension.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |

#### Returns

`undefined` \| [`EShapeActionOpenExtension`](../interfaces/EShapeActionOpenExtension.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-open-extensions.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-open-extensions.ts#L23)
