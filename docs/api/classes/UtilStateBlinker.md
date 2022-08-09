[Winter Cardinal UI - v0.205.1](../index.md) / UtilStateBlinker

# Class: UtilStateBlinker

## Table of contents

### Constructors

- [constructor](UtilStateBlinker.md#constructor)

### Properties

- [\_delay](UtilStateBlinker.md#_delay)
- [\_interval](UtilStateBlinker.md#_interval)
- [\_isOn](UtilStateBlinker.md#_ison)
- [\_state](UtilStateBlinker.md#_state)
- [\_targets](UtilStateBlinker.md#_targets)
- [\_timeout](UtilStateBlinker.md#_timeout)
- [\_updateBound](UtilStateBlinker.md#_updatebound)

### Methods

- [add](UtilStateBlinker.md#add)
- [advance](UtilStateBlinker.md#advance)
- [clear](UtilStateBlinker.md#clear)
- [contains](UtilStateBlinker.md#contains)
- [isOff](UtilStateBlinker.md#isoff)
- [isOn](UtilStateBlinker.md#ison)
- [remove](UtilStateBlinker.md#remove)
- [start](UtilStateBlinker.md#start)
- [stop](UtilStateBlinker.md#stop)
- [update](UtilStateBlinker.md#update)

## Constructors

### constructor

• **new UtilStateBlinker**(`state`, `delay`, `interval`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `delay` | `number` |
| `interval` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L12)

## Properties

### \_delay

• `Protected` **\_delay**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L7)

___

### \_interval

• `Protected` **\_interval**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L8)

___

### \_isOn

• `Protected` **\_isOn**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:4](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L4)

___

### \_state

• `Protected` **\_state**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L6)

___

### \_targets

• `Protected` **\_targets**: `Set`<[`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:5](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L5)

___

### \_timeout

• `Protected` **\_timeout**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L9)

___

### \_updateBound

• `Protected` **\_updateBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L10)

## Methods

### add

▸ **add**(`target`): [`UtilStateBlinker`](UtilStateBlinker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

[`UtilStateBlinker`](UtilStateBlinker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L44)

___

### advance

▸ **advance**(): [`UtilStateBlinker`](UtilStateBlinker.md)

#### Returns

[`UtilStateBlinker`](UtilStateBlinker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L75)

___

### clear

▸ **clear**(): [`UtilStateBlinker`](UtilStateBlinker.md)

#### Returns

[`UtilStateBlinker`](UtilStateBlinker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L62)

___

### contains

▸ **contains**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L58)

___

### isOff

▸ **isOff**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L71)

___

### isOn

▸ **isOn**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L67)

___

### remove

▸ **remove**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L50)

___

### start

▸ **start**(): [`UtilStateBlinker`](UtilStateBlinker.md)

#### Returns

[`UtilStateBlinker`](UtilStateBlinker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L28)

___

### stop

▸ **stop**(): [`UtilStateBlinker`](UtilStateBlinker.md)

#### Returns

[`UtilStateBlinker`](UtilStateBlinker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L35)

___

### update

▸ **update**(): [`UtilStateBlinker`](UtilStateBlinker.md)

#### Returns

[`UtilStateBlinker`](UtilStateBlinker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-state-blinker.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-state-blinker.ts#L80)
