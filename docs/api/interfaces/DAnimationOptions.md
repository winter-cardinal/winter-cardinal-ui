[Winter Cardinal UI - v0.374.0](../index.md) / DAnimationOptions

# Interface: DAnimationOptions\<TARGET, EMITTER\>

[DAnimation](DAnimation.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | `TARGET` |
| `EMITTER` | [`DAnimation`](DAnimation.md)\<`TARGET`\> |

## Hierarchy

- **`DAnimationOptions`**

  ↳ [`DAnimationFadeInOptions`](DAnimationFadeInOptions.md)

## Table of contents

### Properties

- [duration](DAnimationOptions.md#duration)
- [on](DAnimationOptions.md#on)
- [onEnd](DAnimationOptions.md#onend)
- [onStart](DAnimationOptions.md#onstart)
- [onStop](DAnimationOptions.md#onstop)
- [onTime](DAnimationOptions.md#ontime)
- [target](DAnimationOptions.md#target)
- [timing](DAnimationOptions.md#timing)

## Properties

### duration

• `Optional` **duration**: `number`

An animation duration.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-animation.ts#L136)

___

### on

• `Optional` **on**: [`DAnimationOnOptions`](DAnimationOnOptions.md)\<`EMITTER`\>

Event handlers.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-animation.ts#L141)

___

### onEnd

• `Optional` **onEnd**: [`DAnimationOnEnd`](../index.md#danimationonend)\<`TARGET`\>

Triggered when an animation ends.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-animation.ts#L124)

___

### onStart

• `Optional` **onStart**: [`DAnimationOnStart`](../index.md#danimationonstart)\<`TARGET`\>

A function called when an animation starts.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-animation.ts#L114)

___

### onStop

• `Optional` **onStop**: [`DAnimationOnStop`](../index.md#danimationonstop)\<`TARGET`\>

Triggered when an animation stops.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-animation.ts#L129)

___

### onTime

• `Optional` **onTime**: [`DAnimationOnTime`](../index.md#danimationontime)\<`TARGET`\>

A function called constantly when an animation is on a run.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-animation.ts#L119)

___

### target

• `Optional` **target**: ``null`` \| `TARGET`

An animation target.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-animation.ts#L109)

___

### timing

• `Optional` **timing**: [`DAnimationTiming`](../index.md#danimationtiming)\<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-animation.ts#L131)
