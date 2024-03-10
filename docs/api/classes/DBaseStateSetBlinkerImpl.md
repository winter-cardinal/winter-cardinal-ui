[Winter Cardinal UI - v0.414.0](../index.md) / DBaseStateSetBlinkerImpl

# Class: DBaseStateSetBlinkerImpl

## Hierarchy

- [`DBaseStateSetSubImpl`](DBaseStateSetSubImpl.md)

  ↳ **`DBaseStateSetBlinkerImpl`**

## Implements

- [`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

## Table of contents

### Constructors

- [constructor](DBaseStateSetBlinkerImpl.md#constructor)

### Properties

- [\_intervalToDatum](DBaseStateSetBlinkerImpl.md#_intervaltodatum)
- [\_parent](DBaseStateSetBlinkerImpl.md#_parent)
- [\_stateToInterval](DBaseStateSetBlinkerImpl.md#_statetointerval)

### Methods

- [add](DBaseStateSetBlinkerImpl.md#add)
- [clear](DBaseStateSetBlinkerImpl.md#clear)
- [has](DBaseStateSetBlinkerImpl.md#has)
- [newDatum](DBaseStateSetBlinkerImpl.md#newdatum)
- [remove](DBaseStateSetBlinkerImpl.md#remove)
- [set](DBaseStateSetBlinkerImpl.md#set)

## Constructors

### constructor

• **new DBaseStateSetBlinkerImpl**(`parent`): [`DBaseStateSetBlinkerImpl`](DBaseStateSetBlinkerImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

[`DBaseStateSetBlinkerImpl`](DBaseStateSetBlinkerImpl.md)

#### Overrides

[DBaseStateSetSubImpl](DBaseStateSetSubImpl.md).[constructor](DBaseStateSetSubImpl.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-blinker-impl.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-blinker-impl.ts#L10)

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

[DBaseStateSetBlinker](../interfaces/DBaseStateSetBlinker.md).[add](../interfaces/DBaseStateSetBlinker.md#add)

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

[DBaseStateSetBlinker](../interfaces/DBaseStateSetBlinker.md).[clear](../interfaces/DBaseStateSetBlinker.md#clear)

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

[DBaseStateSetBlinker](../interfaces/DBaseStateSetBlinker.md).[has](../interfaces/DBaseStateSetBlinker.md#has)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-blinker-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-blinker-impl.ts#L14)

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

[DBaseStateSetBlinker](../interfaces/DBaseStateSetBlinker.md).[remove](../interfaces/DBaseStateSetBlinker.md#remove)

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
