[Winter Cardinal UI - v0.374.0](../index.md) / UtilGestureOptions

# Interface: UtilGestureOptions\<TARGET\>

## Type parameters

| Name |
| :------ |
| `TARGET` |

## Table of contents

### Properties

- [bind](UtilGestureOptions.md#bind)
- [checker](UtilGestureOptions.md#checker)
- [easing](UtilGestureOptions.md#easing)
- [modifier](UtilGestureOptions.md#modifier)
- [on](UtilGestureOptions.md#on)
- [touch](UtilGestureOptions.md#touch)

## Properties

### bind

• `Optional` **bind**: `TARGET` & `EventEmitter`

Binds the pointerdown event of the given target.

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L79)

___

### checker

• `Optional` **checker**: [`UtilGestureCheckerOptions`](UtilGestureCheckerOptions.md)\<`TARGET`\>

Checker options

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L71)

___

### easing

• `Optional` **easing**: `boolean` \| [`UtilGestureEasingOptions`](UtilGestureEasingOptions.md)

Easing options

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L76)

___

### modifier

• `Optional` **modifier**: `number`

Expected mouse modifiers

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L66)

___

### on

• `Optional` **on**: [`UtilGestureOnOptions`](UtilGestureOnOptions.md)\<`TARGET`\>

Event options

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L82)

___

### touch

• `Optional` **touch**: `boolean`

True to restrict to touch gestures only.

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L61)
