[Winter Cardinal UI - v0.310.1](../index.md) / UtilTransition

# Class: UtilTransition

## Table of contents

### Constructors

- [constructor](UtilTransition.md#constructor)

### Properties

- [\_current](UtilTransition.md#_current)
- [\_duration](UtilTransition.md#_duration)
- [\_lastUpdate](UtilTransition.md#_lastupdate)
- [\_updateId](UtilTransition.md#_updateid)

### Methods

- [hide](UtilTransition.md#hide)
- [show](UtilTransition.md#show)
- [update](UtilTransition.md#update)

## Constructors

### constructor

• **new UtilTransition**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`UtilTransitionOptions`](../interfaces/UtilTransitionOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-transition.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-transition.ts#L18)

## Properties

### \_current

• `Protected` **\_current**: `undefined` \| ``null`` \| [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-transition.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-transition.ts#L14)

___

### \_duration

• `Protected` **\_duration**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-transition.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-transition.ts#L13)

___

### \_lastUpdate

• `Protected` **\_lastUpdate**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-transition.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-transition.ts#L15)

___

### \_updateId

• `Protected` **\_updateId**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-transition.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-transition.ts#L16)

## Methods

### hide

▸ **hide**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-transition.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-transition.ts#L63)

___

### show

▸ **show**(`next`, `forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | `undefined` \| ``null`` \| [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-transition.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-transition.ts#L25)

___

### update

▸ `Protected` **update**(`now`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `now` | `number` |
| `next` | `undefined` \| ``null`` \| [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-transition.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-transition.ts#L47)
