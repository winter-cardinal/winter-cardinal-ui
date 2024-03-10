[Winter Cardinal UI - v0.414.0](../index.md) / DBaseStateSetSubImpl

# Class: DBaseStateSetSubImpl

## Hierarchy

- **`DBaseStateSetSubImpl`**

  ↳ [`DBaseStateSetBlinkerImpl`](DBaseStateSetBlinkerImpl.md)

  ↳ [`DBaseStateSetTickerImpl`](DBaseStateSetTickerImpl.md)

## Implements

- [`DBaseStateSetSub`](../interfaces/DBaseStateSetSub.md)

## Table of contents

### Constructors

- [constructor](DBaseStateSetSubImpl.md#constructor)

### Properties

- [\_intervalToDatum](DBaseStateSetSubImpl.md#_intervaltodatum)
- [\_parent](DBaseStateSetSubImpl.md#_parent)
- [\_stateToInterval](DBaseStateSetSubImpl.md#_statetointerval)

### Methods

- [add](DBaseStateSetSubImpl.md#add)
- [clear](DBaseStateSetSubImpl.md#clear)
- [has](DBaseStateSetSubImpl.md#has)
- [newDatum](DBaseStateSetSubImpl.md#newdatum)
- [remove](DBaseStateSetSubImpl.md#remove)
- [set](DBaseStateSetSubImpl.md#set)

## Constructors

### constructor

• **new DBaseStateSetSubImpl**(`parent`, `intervalToDatum`): [`DBaseStateSetSubImpl`](DBaseStateSetSubImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `intervalToDatum` | `Map`\<`number`, [`DBaseStateSetSubDatum`](../interfaces/DBaseStateSetSubDatum.md)\> |

#### Returns

[`DBaseStateSetSubImpl`](DBaseStateSetSubImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts#L10)

## Properties

### \_intervalToDatum

• `Protected` `Readonly` **\_intervalToDatum**: `Map`\<`number`, [`DBaseStateSetSubDatum`](../interfaces/DBaseStateSetSubDatum.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts#L8)

___

### \_parent

• `Protected` `Readonly` **\_parent**: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts#L6)

___

### \_stateToInterval

• `Protected` `Readonly` **\_stateToInterval**: `Map`\<`string`, `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts#L7)

## Methods

### add

▸ **add**(`state`, `interval`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `interval` | `number` |

#### Returns

`this`

#### Implementation of

[DBaseStateSetSub](../interfaces/DBaseStateSetSub.md).[add](../interfaces/DBaseStateSetSub.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts#L16)

___

### clear

▸ **clear**(): `this`

#### Returns

`this`

#### Implementation of

[DBaseStateSetSub](../interfaces/DBaseStateSetSub.md).[clear](../interfaces/DBaseStateSetSub.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts#L74)

___

### has

▸ **has**(`state`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

`boolean`

#### Implementation of

[DBaseStateSetSub](../interfaces/DBaseStateSetSub.md).[has](../interfaces/DBaseStateSetSub.md#has)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts#L70)

___

### newDatum

▸ **newDatum**(`interval`): [`DBaseStateSetSubDatum`](../interfaces/DBaseStateSetSubDatum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

[`DBaseStateSetSubDatum`](../interfaces/DBaseStateSetSubDatum.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts#L46)

___

### remove

▸ **remove**(`state`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

`this`

#### Implementation of

[DBaseStateSetSub](../interfaces/DBaseStateSetSub.md).[remove](../interfaces/DBaseStateSetSub.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts#L48)

___

### set

▸ **set**(`state`, `interval`, `on`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `interval` | `number` |
| `on` | `boolean` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts#L62)
