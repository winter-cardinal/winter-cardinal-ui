[Winter Cardinal UI - v0.407.0](../index.md) / DMenuContext

# Class: DMenuContext

## Table of contents

### Constructors

- [constructor](DMenuContext.md#constructor)

### Properties

- [\_closeables](DMenuContext.md#_closeables)
- [\_owner](DMenuContext.md#_owner)

### Methods

- [add](DMenuContext.md#add)
- [close](DMenuContext.md#close)
- [indexOf](DMenuContext.md#indexof)
- [remove](DMenuContext.md#remove)
- [trim](DMenuContext.md#trim)

## Constructors

### constructor

• **new DMenuContext**(`owner`): [`DMenuContext`](DMenuContext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | [`DMenuContextOwner`](../interfaces/DMenuContextOwner.md) |

#### Returns

[`DMenuContext`](DMenuContext.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L20)

## Properties

### \_closeables

• `Protected` **\_closeables**: [`DMenuCloseable`](../interfaces/DMenuCloseable.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L18)

___

### \_owner

• `Protected` **\_owner**: [`DMenuContextOwner`](../interfaces/DMenuContextOwner.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L17)

## Methods

### add

▸ **add**(`closeable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `closeable` | [`DMenuCloseable`](../interfaces/DMenuCloseable.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L37)

___

### close

▸ **close**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L29)

___

### indexOf

▸ **indexOf**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L25)

___

### remove

▸ **remove**(`closeable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `closeable` | [`DMenuCloseable`](../interfaces/DMenuCloseable.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L45)

___

### trim

▸ **trim**(`closeable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `closeable` | ``null`` \| [`DMenuCloseable`](../interfaces/DMenuCloseable.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L41)
