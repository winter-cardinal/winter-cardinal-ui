[Winter Cardinal UI - v0.160.0](../index.md) / DMenuContext

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

• **new DMenuContext**(`owner`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | [`Owner`](../interfaces/Owner.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L24)

## Properties

### \_closeables

• `Protected` **\_closeables**: [`Closeable`](../interfaces/Closeable.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L22)

___

### \_owner

• `Protected` **\_owner**: [`Owner`](../interfaces/Owner.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L21)

## Methods

### add

▸ **add**(`closeable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `closeable` | [`Closeable`](../interfaces/Closeable.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L41)

___

### close

▸ `Protected` **close**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L33)

___

### indexOf

▸ `Protected` **indexOf**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L29)

___

### remove

▸ **remove**(`closeable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `closeable` | [`Closeable`](../interfaces/Closeable.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L49)

___

### trim

▸ **trim**(`closeable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `closeable` | ``null`` \| [`Closeable`](../interfaces/Closeable.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-menu-context.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-menu-context.ts#L45)
