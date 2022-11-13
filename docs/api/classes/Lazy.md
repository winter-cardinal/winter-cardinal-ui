[Winter Cardinal UI - v0.227.0](../index.md) / Lazy

# Class: Lazy<INSTANCE, OPTIONS\>

## Type parameters

| Name |
| :------ |
| `INSTANCE` |
| `OPTIONS` |

## Table of contents

### Constructors

- [constructor](Lazy.md#constructor)

### Properties

- [instance](Lazy.md#instance)
- [newInstance](Lazy.md#newinstance)
- [options](Lazy.md#options)

### Methods

- [get](Lazy.md#get)

## Constructors

### constructor

• **new Lazy**<`INSTANCE`, `OPTIONS`\>(`newInstance`, `options`, `base?`)

#### Type parameters

| Name |
| :------ |
| `INSTANCE` |
| `OPTIONS` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `newInstance` | (`options`: `OPTIONS`) => `INSTANCE` |
| `options` | `OPTIONS` |
| `base?` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Defined in

[src/main/typescript/wcardinal/ui/util/lazy.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/lazy.ts#L13)

## Properties

### instance

• **instance**: ``null`` \| `INSTANCE`

#### Defined in

[src/main/typescript/wcardinal/ui/util/lazy.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/lazy.ts#L9)

___

### newInstance

• **newInstance**: (`options`: `OPTIONS`) => `INSTANCE`

#### Type declaration

• **new Lazy**(`options`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `OPTIONS` |

#### Defined in

[src/main/typescript/wcardinal/ui/util/lazy.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/lazy.ts#L10)

___

### options

• **options**: `OPTIONS`

#### Defined in

[src/main/typescript/wcardinal/ui/util/lazy.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/lazy.ts#L11)

## Methods

### get

▸ **get**(): `INSTANCE`

#### Returns

`INSTANCE`

#### Defined in

[src/main/typescript/wcardinal/ui/util/lazy.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/util/lazy.ts#L31)
