[Winter Cardinal UI - v0.414.0](../index.md) / DBaseStateSetTickerImpl

# Class: DBaseStateSetTickerImpl

## Hierarchy

- [`DBaseStateSetSubImpl`](DBaseStateSetSubImpl.md)

  ↳ **`DBaseStateSetTickerImpl`**

## Implements

- [`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

## Table of contents

### Constructors

- [constructor](DBaseStateSetTickerImpl.md#constructor)

### Properties

- [\_intervalToDatum](DBaseStateSetTickerImpl.md#_intervaltodatum)
- [\_parent](DBaseStateSetTickerImpl.md#_parent)
- [\_stateToInterval](DBaseStateSetTickerImpl.md#_statetointerval)

### Methods

- [add](DBaseStateSetTickerImpl.md#add)
- [clear](DBaseStateSetTickerImpl.md#clear)
- [has](DBaseStateSetTickerImpl.md#has)
- [newDatum](DBaseStateSetTickerImpl.md#newdatum)
- [remove](DBaseStateSetTickerImpl.md#remove)
- [set](DBaseStateSetTickerImpl.md#set)

## Constructors

### constructor

• **new DBaseStateSetTickerImpl**(`parent`): [`DBaseStateSetTickerImpl`](DBaseStateSetTickerImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

[`DBaseStateSetTickerImpl`](DBaseStateSetTickerImpl.md)

#### Overrides

[DBaseStateSetSubImpl](DBaseStateSetSubImpl.md).[constructor](DBaseStateSetSubImpl.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-ticker-impl.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-ticker-impl.ts#L10)

## Properties

### \_intervalToDatum

• `Protected` `Readonly` **\_intervalToDatum**: `Map`\<`number`, [`DBaseStateSetSubDatum`](../interfaces/DBaseStateSetSubDatum.md)\>

#### Inherited from

[DBaseStateSetSubImpl](DBaseStateSetSubImpl.md).[_intervalToDatum](DBaseStateSetSubImpl.md#_intervaltodatum)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts#L8)

___

### \_parent

• `Protected` `Readonly` **\_parent**: [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

[DBaseStateSetSubImpl](DBaseStateSetSubImpl.md).[_parent](DBaseStateSetSubImpl.md#_parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts#L6)

___

### \_stateToInterval

• `Protected` `Readonly` **\_stateToInterval**: `Map`\<`string`, `number`\>

#### Inherited from

[DBaseStateSetSubImpl](DBaseStateSetSubImpl.md).[_stateToInterval](DBaseStateSetSubImpl.md#_statetointerval)

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

[DBaseStateSetTicker](../interfaces/DBaseStateSetTicker.md).[add](../interfaces/DBaseStateSetTicker.md#add)

#### Inherited from

[DBaseStateSetSubImpl](DBaseStateSetSubImpl.md).[add](DBaseStateSetSubImpl.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts#L16)

___

### clear

▸ **clear**(): `this`

#### Returns

`this`

#### Implementation of

[DBaseStateSetTicker](../interfaces/DBaseStateSetTicker.md).[clear](../interfaces/DBaseStateSetTicker.md#clear)

#### Inherited from

[DBaseStateSetSubImpl](DBaseStateSetSubImpl.md).[clear](DBaseStateSetSubImpl.md#clear)

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

[DBaseStateSetTicker](../interfaces/DBaseStateSetTicker.md).[has](../interfaces/DBaseStateSetTicker.md#has)

#### Inherited from

[DBaseStateSetSubImpl](DBaseStateSetSubImpl.md).[has](DBaseStateSetSubImpl.md#has)

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

#### Overrides

[DBaseStateSetSubImpl](DBaseStateSetSubImpl.md).[newDatum](DBaseStateSetSubImpl.md#newdatum)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-ticker-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-ticker-impl.ts#L14)

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

[DBaseStateSetTicker](../interfaces/DBaseStateSetTicker.md).[remove](../interfaces/DBaseStateSetTicker.md#remove)

#### Inherited from

[DBaseStateSetSubImpl](DBaseStateSetSubImpl.md).[remove](DBaseStateSetSubImpl.md#remove)

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

#### Inherited from

[DBaseStateSetSubImpl](DBaseStateSetSubImpl.md).[set](DBaseStateSetSubImpl.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-impl.ts#L62)
