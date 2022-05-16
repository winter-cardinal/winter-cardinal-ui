[Winter Cardinal UI - v0.165.0](../index.md) / UtilGestureOptions

# Interface: UtilGestureOptions<TARGET\>

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

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L69)

___

### checker

• `Optional` **checker**: [`UtilGestureCheckerOptions`](UtilGestureCheckerOptions.md)<`TARGET`\>

Checker options

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L61)

___

### easing

• `Optional` **easing**: `boolean` \| [`UtilGestureEasingOptions`](UtilGestureEasingOptions.md)

Easing options

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L66)

___

### modifier

• `Optional` **modifier**: `number`

Expected mouse modifiers

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L56)

___

### on

• `Optional` **on**: [`UtilGestureOnOptions`](UtilGestureOnOptions.md)<`TARGET`\>

Event options

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L72)

___

### touch

• `Optional` **touch**: `boolean`

True to restrict to touch gestures only.

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-gesture.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/util/util-gesture.ts#L51)
