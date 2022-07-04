[Winter Cardinal UI - v0.194.0](../index.md) / DBasePoint

# Class: DBasePoint

## Table of contents

### Constructors

- [constructor](DBasePoint.md#constructor)

### Properties

- [\_onChange](DBasePoint.md#_onchange)
- [\_point](DBasePoint.md#_point)

### Accessors

- [x](DBasePoint.md#x)
- [y](DBasePoint.md#y)

### Methods

- [clone](DBasePoint.md#clone)
- [copy](DBasePoint.md#copy)
- [copyFrom](DBasePoint.md#copyfrom)
- [copyTo](DBasePoint.md#copyto)
- [equals](DBasePoint.md#equals)
- [set](DBasePoint.md#set)

## Constructors

### constructor

• **new DBasePoint**(`point`, `onChange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `IPoint` |
| `onChange` | [`DBasePointCallback`](../index.md#dbasepointcallback) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-point.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base-point.ts#L14)

## Properties

### \_onChange

• `Protected` **\_onChange**: [`DBasePointCallback`](../index.md#dbasepointcallback)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-point.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base-point.ts#L12)

___

### \_point

• `Protected` **\_point**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-point.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base-point.ts#L11)

## Accessors

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-point.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base-point.ts#L19)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-point.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base-point.ts#L23)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-point.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base-point.ts#L33)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-point.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base-point.ts#L37)

## Methods

### clone

▸ **clone**(`onChange?`): [`DBasePoint`](DBasePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onChange?` | [`DBasePointCallback`](../index.md#dbasepointcallback) |

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-point.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base-point.ts#L80)

___

### copy

▸ **copy**(): [`DBasePoint`](DBasePoint.md)

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-point.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base-point.ts#L75)

___

### copyFrom

▸ **copyFrom**(`target`): [`DBasePoint`](DBasePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `IPoint` |

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-point.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base-point.ts#L58)

___

### copyTo

▸ **copyTo**(`target`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `IPoint` |

#### Returns

`IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-point.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base-point.ts#L71)

___

### equals

▸ **equals**(`p`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `IPoint` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-point.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base-point.ts#L84)

___

### set

▸ **set**(`x`, `y`): [`DBasePoint`](DBasePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`DBasePoint`](DBasePoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-point.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-base-point.ts#L47)
