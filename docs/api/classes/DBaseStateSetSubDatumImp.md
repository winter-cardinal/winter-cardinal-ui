[Winter Cardinal UI - v0.442.0](../index.md) / DBaseStateSetSubDatumImp

# Class: DBaseStateSetSubDatumImp

## Hierarchy

- **`DBaseStateSetSubDatumImp`**

  ↳ [`DBaseStateSetBlinkerDatumImpl`](DBaseStateSetBlinkerDatumImpl.md)

  ↳ [`DBaseStateSetTickerDatumImpl`](DBaseStateSetTickerDatumImpl.md)

## Implements

- [`DBaseStateSetSubDatum`](../interfaces/DBaseStateSetSubDatum.md)

## Table of contents

### Constructors

- [constructor](DBaseStateSetSubDatumImp.md#constructor)

### Accessors

- [interval](DBaseStateSetSubDatumImp.md#interval)

### Methods

- [add](DBaseStateSetSubDatumImp.md#add)
- [newOn](DBaseStateSetSubDatumImp.md#newon)
- [newValue](DBaseStateSetSubDatumImp.md#newvalue)
- [onTime](DBaseStateSetSubDatumImp.md#ontime)
- [remove](DBaseStateSetSubDatumImp.md#remove)
- [start](DBaseStateSetSubDatumImp.md#start)
- [stop](DBaseStateSetSubDatumImp.md#stop)

## Constructors

### constructor

• **new DBaseStateSetSubDatumImp**(`interval`): [`DBaseStateSetSubDatumImp`](DBaseStateSetSubDatumImp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

[`DBaseStateSetSubDatumImp`](DBaseStateSetSubDatumImp.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L10)

## Accessors

### interval

• `get` **interval**(): `number`

#### Returns

`number`

#### Implementation of

[DBaseStateSetSubDatum](../interfaces/DBaseStateSetSubDatum.md).[interval](../interfaces/DBaseStateSetSubDatum.md#interval)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L16)

## Methods

### add

▸ **add**(`state`, `target`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `target` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`this`

#### Implementation of

[DBaseStateSetSubDatum](../interfaces/DBaseStateSetSubDatum.md).[add](../interfaces/DBaseStateSetSubDatum.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L20)

___

### newOn

▸ **newOn**(`now`, `interval`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `now` | `number` |
| `interval` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L85)

___

### newValue

▸ **newValue**(`now`, `interval`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `now` | `number` |
| `interval` | `number` |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L84)

___

### onTime

▸ **onTime**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L68)

___

### remove

▸ **remove**(`state`, `target`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `target` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`this`

#### Implementation of

[DBaseStateSetSubDatum](../interfaces/DBaseStateSetSubDatum.md).[remove](../interfaces/DBaseStateSetSubDatum.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L36)

___

### start

▸ **start**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L52)

___

### stop

▸ **stop**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L59)
