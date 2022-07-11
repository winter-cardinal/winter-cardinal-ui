[Winter Cardinal UI - v0.200.0](../index.md) / DColorGradientPointObservable

# Class: DColorGradientPointObservable

## Implements

- [`DColorGradientPoint`](../interfaces/DColorGradientPoint.md)

## Table of contents

### Constructors

- [constructor](DColorGradientPointObservable.md#constructor)

### Properties

- [\_alpha](DColorGradientPointObservable.md#_alpha)
- [\_callback](DColorGradientPointObservable.md#_callback)
- [\_color](DColorGradientPointObservable.md#_color)
- [\_position](DColorGradientPointObservable.md#_position)
- [\_selected](DColorGradientPointObservable.md#_selected)

### Accessors

- [alpha](DColorGradientPointObservable.md#alpha)
- [color](DColorGradientPointObservable.md#color)
- [position](DColorGradientPointObservable.md#position)
- [selected](DColorGradientPointObservable.md#selected)

### Methods

- [set](DColorGradientPointObservable.md#set)
- [toObject](DColorGradientPointObservable.md#toobject)

## Constructors

### constructor

• **new DColorGradientPointObservable**(`color`, `alpha`, `position`, `selected`, `callback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |
| `alpha` | `number` |
| `position` | `number` |
| `selected` | `boolean` |
| `callback` | (`target`: [`DColorGradientPointObservable`](DColorGradientPointObservable.md)) => `void` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L15)

## Properties

### \_alpha

• `Protected` **\_alpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L10)

___

### \_callback

• `Protected` **\_callback**: (`target`: [`DColorGradientPointObservable`](DColorGradientPointObservable.md)) => `void`

#### Type declaration

▸ (`target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DColorGradientPointObservable`](DColorGradientPointObservable.md) |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L12)

___

### \_color

• `Protected` **\_color**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L9)

___

### \_position

• `Protected` **\_position**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L11)

___

### \_selected

• `Protected` **\_selected**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L13)

## Accessors

### alpha

• `get` **alpha**(): `number`

#### Returns

`number`

#### Implementation of

[DColorGradientPoint](../interfaces/DColorGradientPoint.md).[alpha](../interfaces/DColorGradientPoint.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L55)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | `number` |

#### Returns

`void`

#### Implementation of

[DColorGradientPoint](../interfaces/DColorGradientPoint.md).[alpha](../interfaces/DColorGradientPoint.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L59)

___

### color

• `get` **color**(): `number`

#### Returns

`number`

#### Implementation of

[DColorGradientPoint](../interfaces/DColorGradientPoint.md).[color](../interfaces/DColorGradientPoint.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L44)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`void`

#### Implementation of

[DColorGradientPoint](../interfaces/DColorGradientPoint.md).[color](../interfaces/DColorGradientPoint.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L48)

___

### position

• `get` **position**(): `number`

#### Returns

`number`

#### Implementation of

[DColorGradientPoint](../interfaces/DColorGradientPoint.md).[position](../interfaces/DColorGradientPoint.md#position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L66)

• `set` **position**(`position`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |

#### Returns

`void`

#### Implementation of

[DColorGradientPoint](../interfaces/DColorGradientPoint.md).[position](../interfaces/DColorGradientPoint.md#position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L70)

___

### selected

• `get` **selected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L77)

• `set` **selected**(`selected`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selected` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L81)

## Methods

### set

▸ **set**(`color`, `alpha`, `position`, `selected`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |
| `alpha` | `number` |
| `position` | `number` |
| `selected` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L29)

___

### toObject

▸ **toObject**(): [`DColorGradientPoint`](../interfaces/DColorGradientPoint.md)

#### Returns

[`DColorGradientPoint`](../interfaces/DColorGradientPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-color-gradient-point-observable.ts#L88)
