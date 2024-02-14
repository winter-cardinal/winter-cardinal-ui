[Winter Cardinal UI - v0.407.0](../index.md) / UtilGestureOptions

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

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L78)

___

### checker

• `Optional` **checker**: [`UtilGestureCheckerOptions`](UtilGestureCheckerOptions.md)\<`TARGET`\>

Checker options

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L70)

___

### easing

• `Optional` **easing**: `boolean` \| [`UtilGestureEasingOptions`](UtilGestureEasingOptions.md)

Easing options

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L75)

___

### modifier

• `Optional` **modifier**: `number`

Expected mouse modifiers

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L65)

___

### on

• `Optional` **on**: [`UtilGestureOnOptions`](UtilGestureOnOptions.md)\<`TARGET`\>

Event options

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L81)

___

### touch

• `Optional` **touch**: `boolean`

True to restrict to touch gestures only.

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L60)
