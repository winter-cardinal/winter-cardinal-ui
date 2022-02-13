[Winter Cardinal UI - v0.155.0](../index.md) / DPickerTimeBounds

# Class: DPickerTimeBounds

## Table of contents

### Constructors

- [constructor](DPickerTimeBounds.md#constructor)

### Properties

- [constant](DPickerTimeBounds.md#constant)
- [hours](DPickerTimeBounds.md#hours)
- [lower](DPickerTimeBounds.md#lower)
- [mask](DPickerTimeBounds.md#mask)
- [minutes](DPickerTimeBounds.md#minutes)
- [seconds](DPickerTimeBounds.md#seconds)
- [upper](DPickerTimeBounds.md#upper)

### Methods

- [adjust](DPickerTimeBounds.md#adjust)
- [compare](DPickerTimeBounds.md#compare)
- [contains](DPickerTimeBounds.md#contains)
- [newConstant](DPickerTimeBounds.md#newconstant)
- [test](DPickerTimeBounds.md#test)

## Constructors

### constructor

• **new DPickerTimeBounds**(`options`, `onChange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `undefined` \| [`DPickerTimeBoundsOptions`](../interfaces/DPickerTimeBoundsOptions.md) |
| `onChange` | () => `void` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts#L27)

## Properties

### constant

• **constant**: [`DPickerTimeBoundConstant`](../interfaces/DPickerTimeBoundConstant.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts#L25)

___

### hours

• **hours**: [`DPickerTimeBoundHours`](DPickerTimeBoundHours.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts#L22)

___

### lower

• **lower**: [`DPickerTimeBound`](DPickerTimeBound.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts#L19)

___

### mask

• **mask**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts#L21)

___

### minutes

• **minutes**: [`DPickerTimeBoundMinutes`](DPickerTimeBoundMinutes.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts#L23)

___

### seconds

• **seconds**: [`DPickerTimeBoundSeconds`](DPickerTimeBoundSeconds.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts#L24)

___

### upper

• **upper**: [`DPickerTimeBound`](DPickerTimeBound.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts#L20)

## Methods

### adjust

▸ **adjust**(`date`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts#L56)

___

### compare

▸ **compare**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Date` |
| `b` | `Date` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts#L100)

___

### contains

▸ **contains**(`date`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts#L173)

___

### newConstant

▸ **newConstant**(): [`DPickerTimeBoundConstant`](../interfaces/DPickerTimeBoundConstant.md)

#### Returns

[`DPickerTimeBoundConstant`](../interfaces/DPickerTimeBoundConstant.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts#L37)

___

### test

▸ **test**(`date`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-picker-time-bounds.ts#L145)
