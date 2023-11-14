[Winter Cardinal UI - v0.374.0](../index.md) / DBaseStateSetBlinkerDatumImpl

# Class: DBaseStateSetBlinkerDatumImpl

## Hierarchy

- [`DBaseStateSetSubDatumImp`](DBaseStateSetSubDatumImp.md)

  ↳ **`DBaseStateSetBlinkerDatumImpl`**

## Table of contents

### Constructors

- [constructor](DBaseStateSetBlinkerDatumImpl.md#constructor)

### Accessors

- [interval](DBaseStateSetBlinkerDatumImpl.md#interval)

### Methods

- [add](DBaseStateSetBlinkerDatumImpl.md#add)
- [newOn](DBaseStateSetBlinkerDatumImpl.md#newon)
- [newValue](DBaseStateSetBlinkerDatumImpl.md#newvalue)
- [onTime](DBaseStateSetBlinkerDatumImpl.md#ontime)
- [remove](DBaseStateSetBlinkerDatumImpl.md#remove)
- [start](DBaseStateSetBlinkerDatumImpl.md#start)
- [stop](DBaseStateSetBlinkerDatumImpl.md#stop)

## Constructors

### constructor

• **new DBaseStateSetBlinkerDatumImpl**(`interval`): [`DBaseStateSetBlinkerDatumImpl`](DBaseStateSetBlinkerDatumImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `interval` | `number` |

#### Returns

[`DBaseStateSetBlinkerDatumImpl`](DBaseStateSetBlinkerDatumImpl.md)

#### Inherited from

[DBaseStateSetSubDatumImp](DBaseStateSetSubDatumImp.md).[constructor](DBaseStateSetSubDatumImp.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L10)

## Accessors

### interval

• `get` **interval**(): `number`

#### Returns

`number`

#### Inherited from

DBaseStateSetSubDatumImp.interval

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L16)

## Methods

### add

▸ **add**(`state`, `target`): [`DBaseStateSetBlinkerDatumImpl`](DBaseStateSetBlinkerDatumImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `target` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

[`DBaseStateSetBlinkerDatumImpl`](DBaseStateSetBlinkerDatumImpl.md)

#### Inherited from

[DBaseStateSetSubDatumImp](DBaseStateSetSubDatumImp.md).[add](DBaseStateSetSubDatumImp.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L20)

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

#### Overrides

[DBaseStateSetSubDatumImp](DBaseStateSetSubDatumImp.md).[newOn](DBaseStateSetSubDatumImp.md#newon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-blinker-datum-impl.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set-blinker-datum-impl.ts#L8)

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

#### Overrides

[DBaseStateSetSubDatumImp](DBaseStateSetSubDatumImp.md).[newValue](DBaseStateSetSubDatumImp.md#newvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-blinker-datum-impl.ts:4](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set-blinker-datum-impl.ts#L4)

___

### onTime

▸ **onTime**(): `void`

#### Returns

`void`

#### Inherited from

[DBaseStateSetSubDatumImp](DBaseStateSetSubDatumImp.md).[onTime](DBaseStateSetSubDatumImp.md#ontime)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L68)

___

### remove

▸ **remove**(`state`, `target`): [`DBaseStateSetBlinkerDatumImpl`](DBaseStateSetBlinkerDatumImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `target` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

[`DBaseStateSetBlinkerDatumImpl`](DBaseStateSetBlinkerDatumImpl.md)

#### Inherited from

[DBaseStateSetSubDatumImp](DBaseStateSetSubDatumImp.md).[remove](DBaseStateSetSubDatumImp.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L36)

___

### start

▸ **start**(): [`DBaseStateSetBlinkerDatumImpl`](DBaseStateSetBlinkerDatumImpl.md)

#### Returns

[`DBaseStateSetBlinkerDatumImpl`](DBaseStateSetBlinkerDatumImpl.md)

#### Inherited from

[DBaseStateSetSubDatumImp](DBaseStateSetSubDatumImp.md).[start](DBaseStateSetSubDatumImp.md#start)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L52)

___

### stop

▸ **stop**(): [`DBaseStateSetBlinkerDatumImpl`](DBaseStateSetBlinkerDatumImpl.md)

#### Returns

[`DBaseStateSetBlinkerDatumImpl`](DBaseStateSetBlinkerDatumImpl.md)

#### Inherited from

[DBaseStateSetSubDatumImp](DBaseStateSetSubDatumImp.md).[stop](DBaseStateSetSubDatumImp.md#stop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-base-state-set-sub-datum-impl.ts#L59)
