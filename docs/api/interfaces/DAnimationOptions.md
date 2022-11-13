[Winter Cardinal UI - v0.227.0](../index.md) / DAnimationOptions

# Interface: DAnimationOptions<TARGET, EMITTER\>

[DAnimation](DAnimation.md) options.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | `TARGET` |
| `EMITTER` | [`DAnimation`](DAnimation.md)<`TARGET`\> |

## Hierarchy

- **`DAnimationOptions`**

  ↳ [`DAnimationFadeInOptions`](DAnimationFadeInOptions.md)

## Table of contents

### Properties

- [duration](DAnimationOptions.md#duration)
- [on](DAnimationOptions.md#on)
- [onEnd](DAnimationOptions.md#onend)
- [onStart](DAnimationOptions.md#onstart)
- [onTime](DAnimationOptions.md#ontime)
- [target](DAnimationOptions.md#target)
- [timing](DAnimationOptions.md#timing)

## Properties

### duration

• `Optional` **duration**: `number`

An animation duration.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-animation.ts#L115)

___

### on

• `Optional` **on**: [`DAnimationOnOptions`](DAnimationOnOptions.md)<`EMITTER`\>

Event handlers.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-animation.ts#L120)

___

### onEnd

• `Optional` **onEnd**: [`DAnimationOnEnd`](../index.md#danimationonend)<`TARGET`\>

Triggered when an animation stops.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-animation.ts#L108)

___

### onStart

• `Optional` **onStart**: [`DAnimationOnStart`](../index.md#danimationonstart)<`TARGET`\>

A function called when an animation starts.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-animation.ts#L98)

___

### onTime

• `Optional` **onTime**: [`DAnimationOnTime`](../index.md#danimationontime)<`TARGET`\>

A function called constantly when an animation is on a run.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-animation.ts#L103)

___

### target

• `Optional` **target**: ``null`` \| `TARGET`

An animation target.

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-animation.ts#L93)

___

### timing

• `Optional` **timing**: [`DAnimationTiming`](../index.md#danimationtiming)<`TARGET`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-animation.ts#L110)
