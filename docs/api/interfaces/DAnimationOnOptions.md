[Winter Cardinal UI - v0.442.0](../index.md) / DAnimationOnOptions

# Interface: DAnimationOnOptions\<EMITTER\>

[DAnimation](DAnimation.md) "on" options.

## Type parameters

| Name |
| :------ |
| `EMITTER` |

## Hierarchy

- `Partial`\<[`DAnimationEvents`](DAnimationEvents.md)\<`EMITTER`\>\>

- `DOnOptions`

  ↳ **`DAnimationOnOptions`**

## Table of contents

### Methods

- [end](DAnimationOnOptions.md#end)
- [start](DAnimationOnOptions.md#start)
- [stop](DAnimationOnOptions.md#stop)
- [time](DAnimationOnOptions.md#time)

## Methods

### end

▸ **end**(`isReverse`, `emitter`): `void`

Triggered when an animation ends.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isReverse` | `boolean` | true if an animation is playing in reverse |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.end

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-animation.ts#L84)

___

### start

▸ **start**(`isReverse`, `emitter`): `void`

Triggered when an animation starts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isReverse` | `boolean` | true if an animation is playing in reverse |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.start

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-animation.ts#L66)

___

### stop

▸ **stop**(`isReverse`, `emitter`): `void`

Triggered when an animation stops.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isReverse` | `boolean` | true if an animation is playing in reverse |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.stop

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-animation.ts#L92)

___

### time

▸ **time**(`time`, `isReverse`, `elapsedTime`, `emitter`): `void`

Triggered constantly when an animation is on a run.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | a timing value in a range [0, 1] |
| `isReverse` | `boolean` | true if an animation is playing in reverse |
| `elapsedTime` | `number` | an elapsed time since an animation has started |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.time

#### Defined in

[src/main/typescript/wcardinal/ui/d-animation.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-animation.ts#L76)
