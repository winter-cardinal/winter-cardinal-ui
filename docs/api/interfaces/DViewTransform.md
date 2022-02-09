[Winter Cardinal UI](../README.md) / DViewTransform

# Interface: DViewTransform

## Implemented by

- [`DViewTransformImpl`](../classes/DViewTransformImpl.md)

## Table of contents

### Methods

- [start](DViewTransform.md#start)
- [stop](DViewTransform.md#stop)

## Methods

### start

▸ **start**(`target`, `x`, `y`, `scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Sets to the specified position and scale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DBase`](../classes/DBase.md)<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)<[`DThemeBase`](DThemeBase.md), `any`\>\> | a target |
| `x` | `number` | a local X coordinate positoon |
| `y` | `number` | a local Y coordinate position |
| `scaleX` | `number` | a X coordinate scale |
| `scaleY` | `number` | a Y coordinate scale |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-transform.ts#L20)

___

### stop

▸ **stop**(): `void`

Stops an animation if exits.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-transform.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-transform.ts#L33)
