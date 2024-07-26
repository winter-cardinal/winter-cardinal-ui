[Winter Cardinal UI - v0.442.0](../index.md) / UtilGestureOptions

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
- [tap](UtilGestureOptions.md#tap)
- [touch](UtilGestureOptions.md#touch)

## Properties

### bind

• `Optional` **bind**: `TARGET` & `EventEmitter`

Binds the pointerdown event of the given target.

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L75)

___

### checker

• `Optional` **checker**: [`UtilGestureCheckerOptions`](UtilGestureCheckerOptions.md)\<`TARGET`\>

Checker options

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L67)

___

### easing

• `Optional` **easing**: `boolean` \| [`UtilGestureEasingOptions`](UtilGestureEasingOptions.md)

Easing options

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L72)

___

### modifier

• `Optional` **modifier**: `number`

Expected mouse modifiers

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L62)

___

### on

• `Optional` **on**: [`UtilGestureOnOptions`](UtilGestureOnOptions.md)\<`TARGET`\>

Event options

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L83)

___

### tap

• `Optional` **tap**: [`UtilGestureTapOptions`](UtilGestureTapOptions.md)\<`TARGET`\>

Tap options

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L80)

___

### touch

• `Optional` **touch**: `boolean`

True to restrict to touch gestures only.

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L57)
