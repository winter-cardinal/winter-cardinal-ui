[Winter Cardinal UI - v0.310.1](../index.md) / DDialogGesture

# Interface: DDialogGesture<PARENT\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `PARENT` | extends [`DDialogGestureParent`](DDialogGestureParent.md) |

## Implemented by

- [`DDialogGestureImpl`](../classes/DDialogGestureImpl.md)

## Table of contents

### Properties

- [constraint](DDialogGesture.md#constraint)
- [mode](DDialogGesture.md#mode)
- [parent](DDialogGesture.md#parent)

### Methods

- [isClean](DDialogGesture.md#isclean)
- [isDirty](DDialogGesture.md#isdirty)
- [toClean](DDialogGesture.md#toclean)

## Properties

### constraint

• **constraint**: [`DDialogGestureConstraint`](../index.md#ddialoggestureconstraint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-gesture.ts#L32)

___

### mode

• **mode**: [`DDialogGestureMode`](../index.md#ddialoggesturemode-1)

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-gesture.ts#L30)

___

### parent

• **parent**: `PARENT`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-gesture.ts#L28)

## Methods

### isClean

▸ **isClean**(): `boolean`

Returns true if the dialog position is not changed by gestures.

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-gesture.ts#L42)

___

### isDirty

▸ **isDirty**(): `boolean`

Returns true if thhe dialog position is changed by gestures.

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-gesture.ts#L37)

___

### toClean

▸ **toClean**(): `void`

Marks the dialog position is not changed by gestures.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-dialog-gesture.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-dialog-gesture.ts#L47)
