[Winter Cardinal UI - v0.442.0](../index.md) / UtilStateBlinker

# Class: UtilStateBlinker

## Table of contents

### Constructors

- [constructor](UtilStateBlinker.md#constructor)

### Properties

- [\_delay](UtilStateBlinker.md#_delay)
- [\_interval](UtilStateBlinker.md#_interval)
- [\_state](UtilStateBlinker.md#_state)
- [\_targets](UtilStateBlinker.md#_targets)
- [\_timeout](UtilStateBlinker.md#_timeout)
- [\_updateBound](UtilStateBlinker.md#_updatebound)

### Methods

- [add](UtilStateBlinker.md#add)
- [clear](UtilStateBlinker.md#clear)
- [contains](UtilStateBlinker.md#contains)
- [isOn](UtilStateBlinker.md#ison)
- [remove](UtilStateBlinker.md#remove)
- [start](UtilStateBlinker.md#start)
- [stop](UtilStateBlinker.md#stop)
- [update](UtilStateBlinker.md#update)

## Constructors

### constructor

• **new UtilStateBlinker**(`state`, `delay`, `interval`): [`UtilStateBlinker`](UtilStateBlinker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `delay` | `number` |
| `interval` | `number` |

#### Returns

[`UtilStateBlinker`](UtilStateBlinker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L11)

## Properties

### \_delay

• `Protected` **\_delay**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L6)

___

### \_interval

• `Protected` **\_interval**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L7)

___

### \_state

• `Protected` **\_state**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:5](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L5)

___

### \_targets

• `Protected` **\_targets**: `Set`\<[`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:4](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L4)

___

### \_timeout

• `Protected` **\_timeout**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L8)

___

### \_updateBound

• `Protected` **\_updateBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L9)

## Methods

### add

▸ **add**(`target`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L38)

___

### clear

▸ **clear**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L56)

___

### contains

▸ **contains**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L52)

___

### isOn

▸ **isOn**(`time`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L61)

___

### remove

▸ **remove**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DBase`](DBase.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)\<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L44)

___

### start

▸ **start**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L22)

___

### stop

▸ **stop**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L29)

___

### update

▸ **update**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L65)
