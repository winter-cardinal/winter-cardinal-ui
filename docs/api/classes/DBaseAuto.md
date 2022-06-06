[Winter Cardinal UI - v0.179.0](../index.md) / DBaseAuto

# Class: DBaseAuto

## Table of contents

### Constructors

- [constructor](DBaseAuto.md#constructor)

### Properties

- [\_isOn](DBaseAuto.md#_ison)

### Accessors

- [isOff](DBaseAuto.md#isoff)
- [isOn](DBaseAuto.md#ison)

### Methods

- [from](DBaseAuto.md#from)
- [toCoordinate](DBaseAuto.md#tocoordinate)

## Constructors

### constructor

• **new DBaseAuto**()

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-auto.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base-auto.ts#L11)

## Properties

### \_isOn

• `Protected` **\_isOn**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-auto.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base-auto.ts#L9)

## Accessors

### isOff

• `get` **isOff**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-auto.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base-auto.ts#L15)

___

### isOn

• `get` **isOn**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-auto.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base-auto.ts#L19)

## Methods

### from

▸ **from**(`size`): `boolean`

Update the auto settings by the given size.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | [`DCoordinateSize`](../index.md#dcoordinatesize) | a size |

#### Returns

`boolean`

True if the given size is "auto".

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-auto.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base-auto.ts#L33)

___

### toCoordinate

▸ **toCoordinate**(`def`): [`DCoordinateSize`](../index.md#dcoordinatesize)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`DCoordinateSize`](../index.md#dcoordinatesize) |

#### Returns

[`DCoordinateSize`](../index.md#dcoordinatesize)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-auto.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-base-auto.ts#L23)
