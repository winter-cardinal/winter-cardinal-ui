[Winter Cardinal UI - v0.227.0](../index.md) / DDialogGestureImpl

# Class: DDialogGestureImpl<PARENT\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `PARENT` | extends [`DDialogGestureParent`](../interfaces/DDialogGestureParent.md) |

## Implements

- [`DDialogGesture`](../interfaces/DDialogGesture.md)<`PARENT`\>

## Table of contents

### Constructors

- [constructor](DDialogGestureImpl.md#constructor)

### Properties

- [\_constraint](DDialogGestureImpl.md#_constraint)
- [\_isDirty](DDialogGestureImpl.md#_isdirty)
- [\_isEnabled](DDialogGestureImpl.md#_isenabled)
- [\_mode](DDialogGestureImpl.md#_mode)
- [\_options](DDialogGestureImpl.md#_options)
- [\_parent](DDialogGestureImpl.md#_parent)
- [\_util](DDialogGestureImpl.md#_util)
- [WORK\_BOUNDS](DDialogGestureImpl.md#work_bounds)

### Accessors

- [constraint](DDialogGestureImpl.md#constraint)
- [mode](DDialogGestureImpl.md#mode)
- [parent](DDialogGestureImpl.md#parent)

### Methods

- [isClean](DDialogGestureImpl.md#isclean)
- [isDirty](DDialogGestureImpl.md#isdirty)
- [newConstraint](DDialogGestureImpl.md#newconstraint)
- [newUtil](DDialogGestureImpl.md#newutil)
- [toClean](DDialogGestureImpl.md#toclean)
- [toConstrained](DDialogGestureImpl.md#toconstrained)

## Constructors

### constructor

• **new DDialogGestureImpl**<`PARENT`\>(`parent`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `PARENT` | extends [`DDialogGestureParent`](../interfaces/DDialogGestureParent.md)<`PARENT`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `PARENT` |
| `options` | [`DDialogGestureOptions`](../interfaces/DDialogGestureOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L34)

## Properties

### \_constraint

• `Protected` `Optional` **\_constraint**: [`DDialogGestureConstraint`](../index.md#ddialoggestureconstraint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L31)

___

### \_isDirty

• `Protected` **\_isDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L30)

___

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L28)

___

### \_mode

• `Protected` **\_mode**: [`DDialogGestureMode`](../index.md#ddialoggesturemode-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L25)

___

### \_options

• `Protected` `Optional` **\_options**: [`DDialogGestureOptions`](../interfaces/DDialogGestureOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L26)

___

### \_parent

• `Protected` **\_parent**: `PARENT`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L24)

___

### \_util

• `Protected` `Optional` **\_util**: [`UtilGesture`](UtilGesture.md)<`any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L32)

___

### WORK\_BOUNDS

▪ `Static` `Protected` `Optional` **WORK\_BOUNDS**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L22)

## Accessors

### constraint

• `get` **constraint**(): [`DDialogGestureConstraint`](../index.md#ddialoggestureconstraint)

#### Returns

[`DDialogGestureConstraint`](../index.md#ddialoggestureconstraint)

#### Implementation of

[DDialogGesture](../interfaces/DDialogGesture.md).[constraint](../interfaces/DDialogGesture.md#constraint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L57)

• `set` **constraint**(`constraint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraint` | [`DDialogGestureConstraint`](../index.md#ddialoggestureconstraint) |

#### Returns

`void`

#### Implementation of

[DDialogGesture](../interfaces/DDialogGesture.md).[constraint](../interfaces/DDialogGesture.md#constraint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L66)

___

### mode

• `get` **mode**(): [`DDialogGestureMode`](../index.md#ddialoggesturemode-1)

#### Returns

[`DDialogGestureMode`](../index.md#ddialoggesturemode-1)

#### Implementation of

[DDialogGesture](../interfaces/DDialogGesture.md).[mode](../interfaces/DDialogGesture.md#mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L49)

• `set` **mode**(`mode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`DDialogGestureMode`](../index.md#ddialoggesturemode-1) |

#### Returns

`void`

#### Implementation of

[DDialogGesture](../interfaces/DDialogGesture.md).[mode](../interfaces/DDialogGesture.md#mode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L53)

___

### parent

• `get` **parent**(): `PARENT`

#### Returns

`PARENT`

#### Implementation of

[DDialogGesture](../interfaces/DDialogGesture.md).[parent](../interfaces/DDialogGesture.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L45)

## Methods

### isClean

▸ **isClean**(): `boolean`

Returns true if the dialog position is not changed by gestures.

#### Returns

`boolean`

#### Implementation of

[DDialogGesture](../interfaces/DDialogGesture.md).[isClean](../interfaces/DDialogGesture.md#isclean)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L80)

___

### isDirty

▸ **isDirty**(): `boolean`

Returns true if thhe dialog position is changed by gestures.

#### Returns

`boolean`

#### Implementation of

[DDialogGesture](../interfaces/DDialogGesture.md).[isDirty](../interfaces/DDialogGesture.md#isdirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L76)

___

### newConstraint

▸ `Protected` **newConstraint**(): [`DDialogGestureConstraint`](../index.md#ddialoggestureconstraint)

#### Returns

[`DDialogGestureConstraint`](../index.md#ddialoggestureconstraint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L70)

___

### newUtil

▸ `Protected` **newUtil**(): [`UtilGesture`](UtilGesture.md)<`any`\>

#### Returns

[`UtilGesture`](UtilGesture.md)<`any`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L90)

___

### toClean

▸ **toClean**(): `void`

Marks the dialog position is not changed by gestures.

#### Returns

`void`

#### Implementation of

[DDialogGesture](../interfaces/DDialogGesture.md).[toClean](../interfaces/DDialogGesture.md#toclean)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L84)

___

### toConstrained

▸ `Protected` **toConstrained**(`target`, `layer`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `layer` | [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-dialog-gesture-impl.ts#L136)
