[Winter Cardinal UI - v0.165.0](../index.md) / DAnimationFadeInOptions

# Interface: DAnimationFadeInOptions<TARGET\>

## Type parameters

| Name |
| :------ |
| `TARGET` |

## Hierarchy

- [`DAnimationOptions`](DAnimationOptions.md)<`TARGET`\>

  ↳ **`DAnimationFadeInOptions`**

## Table of contents

### Properties

- [duration](DAnimationFadeInOptions.md#duration)
- [on](DAnimationFadeInOptions.md#on)
- [onEnd](DAnimationFadeInOptions.md#onend)
- [onStart](DAnimationFadeInOptions.md#onstart)
- [onTime](DAnimationFadeInOptions.md#ontime)
- [shift](DAnimationFadeInOptions.md#shift)
- [target](DAnimationFadeInOptions.md#target)
- [timing](DAnimationFadeInOptions.md#timing)

## Properties

### duration

• `Optional` **duration**: `number`

An animation duration.

#### Inherited from

[DAnimationOptions](DAnimationOptions.md).[duration](DAnimationOptions.md#duration)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-animation.ts#L115)

___

### on

• `Optional` **on**: [`DAnimationOnOptions`](DAnimationOnOptions.md)<[`DAnimation`](DAnimation.md)<`TARGET`\>\>

Event handlers.

#### Inherited from

[DAnimationOptions](DAnimationOptions.md).[on](DAnimationOptions.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-animation.ts#L120)

___

### onEnd

• `Optional` **onEnd**: [`DAnimationOnEnd`](../index.md#danimationonend)<`TARGET`\>

Triggered when an animation stops.

#### Inherited from

[DAnimationOptions](DAnimationOptions.md).[onEnd](DAnimationOptions.md#onend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-animation.ts#L108)

___

### onStart

• `Optional` **onStart**: [`DAnimationOnStart`](../index.md#danimationonstart)<`TARGET`\>

A function called when an animation starts.

#### Inherited from

[DAnimationOptions](DAnimationOptions.md).[onStart](DAnimationOptions.md#onstart)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-animation.ts#L98)

___

### onTime

• `Optional` **onTime**: [`DAnimationOnTime`](../index.md#danimationontime)<`TARGET`\>

A function called constantly when an animation is on a run.

#### Inherited from

[DAnimationOptions](DAnimationOptions.md).[onTime](DAnimationOptions.md#ontime)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-animation.ts#L103)

___

### shift

• `Optional` **shift**: [`DAnimationFadeInShiftOptions`](DAnimationFadeInShiftOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation-fade-in.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-animation-fade-in.ts#L18)

___

### target

• `Optional` **target**: ``null`` \| `TARGET`

An animation target.

#### Inherited from

[DAnimationOptions](DAnimationOptions.md).[target](DAnimationOptions.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-animation.ts#L93)

___

### timing

• `Optional` **timing**: [`DAnimationTiming`](../index.md#danimationtiming)<`TARGET`\>

#### Inherited from

[DAnimationOptions](DAnimationOptions.md).[timing](DAnimationOptions.md#timing)

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-animation.ts#L110)
