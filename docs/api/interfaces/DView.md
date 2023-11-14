[Winter Cardinal UI - v0.374.0](../index.md) / DView

# Interface: DView

## Implemented by

- [`DViewImpl`](../classes/DViewImpl.md)

## Table of contents

### Properties

- [gesture](DView.md#gesture)
- [position](DView.md#position)
- [scale](DView.md#scale)

### Methods

- [fit](DView.md#fit)
- [moveTo](DView.md#moveto)
- [reset](DView.md#reset)
- [stop](DView.md#stop)
- [toGlobal](DView.md#toglobal)
- [toLocal](DView.md#tolocal)
- [transform](DView.md#transform)
- [zoom](DView.md#zoom)
- [zoomAt](DView.md#zoomat)
- [zoomAtGlobal](DView.md#zoomatglobal)
- [zoomIn](DView.md#zoomin)
- [zoomOut](DView.md#zoomout)

## Properties

### gesture

• `Readonly` **gesture**: [`DViewGesture`](DViewGesture.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L236)

___

### position

• **position**: [`DViewTargetPoint`](DViewTargetPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L238)

___

### scale

• **scale**: [`DViewTargetPoint`](DViewTargetPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L237)

## Methods

### fit

▸ **fit**(`duration?`, `stop?`): `void`

Fits into a screen.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L259)

___

### moveTo

▸ **moveTo**(`x`, `y`, `duration?`, `stop?`): `void`

Moves to the given position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | a local X coordinate position |
| `y` | `number` | a local Y coordinate position |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L333)

___

### reset

▸ **reset**(`duration?`, `stop?`): `void`

Resets a position and a scale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L251)

___

### stop

▸ **stop**(): `void`

Stops an animation if exits.

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:243](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L243)

___

### toGlobal

▸ **toGlobal**(`local`, `global`, `skipUpdate?`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | `IPoint` |
| `global` | `IPoint` |
| `skipUpdate?` | `boolean` |

#### Returns

`IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L355)

___

### toLocal

▸ **toLocal**(`global`, `local`, `skipUpdate?`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `global` | `IPoint` |
| `local` | `IPoint` |
| `skipUpdate?` | `boolean` |

#### Returns

`IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L354)

___

### transform

▸ **transform**(`x`, `y`, `scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Sets to the specified position and scale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | a local X coordinate position |
| `y` | `number` | a local Y coordinate position |
| `scaleX` | `number` | a X coordinate scale |
| `scaleY` | `number` | a Y coordinate scale |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:345](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L345)

___

### zoom

▸ **zoom**(`scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Zooms in / out at the current position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scaleX` | `number` | a X coordinate scale |
| `scaleY` | `number` | a Y coordinate scale |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:323](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L323)

___

### zoomAt

▸ **zoomAt**(`x`, `y`, `scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Zooms into the given position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | a local X coordinate position |
| `y` | `number` | a local Y coordinate position |
| `scaleX` | `number` | a X coordinate scale |
| `scaleY` | `number` | a Y coordinate scale |
| `duration?` | `number` | an duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L287)

___

### zoomAtGlobal

▸ **zoomAtGlobal**(`x`, `y`, `scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Zooms into the specified global position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | a global X coordinate position |
| `y` | `number` | a global Y coordinate position |
| `scaleX` | `number` | a X coordinate scale |
| `scaleY` | `number` | a Y coordinate scale |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L306)

___

### zoomIn

▸ **zoomIn**(`duration?`, `stop?`): `void`

Zooms in at the current position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L267)

___

### zoomOut

▸ **zoomOut**(`duration?`, `stop?`): `void`

Zooms out at the current position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration?` | `number` | an animation duration |
| `stop?` | `boolean` | false to keep a previous animation |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:275](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L275)
