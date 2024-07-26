[Winter Cardinal UI - v0.442.0](../index.md) / DViewTarget

# Interface: DViewTarget

## Implemented by

- [`DChartPlotAreaContainer`](../classes/DChartPlotAreaContainer.md)
- [`DChartPlotAreaTwofoldViewTarget`](../classes/DChartPlotAreaTwofoldViewTarget.md)

## Table of contents

### Properties

- [parent](DViewTarget.md#parent)
- [position](DViewTarget.md#position)
- [scale](DViewTarget.md#scale)

### Methods

- [getLocalBounds](DViewTarget.md#getlocalbounds)

## Properties

### parent

• `Optional` **parent**: ``null`` \| [`DViewTargetParent`](DViewTargetParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-to-target.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view-to-target.ts#L21)

___

### position

• `Readonly` **position**: [`DViewTargetPoint`](DViewTargetPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-to-target.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view-to-target.ts#L23)

___

### scale

• `Readonly` **scale**: [`DViewTargetPoint`](DViewTargetPoint.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-to-target.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view-to-target.ts#L22)

## Methods

### getLocalBounds

▸ **getLocalBounds**(`rect`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect` | `Rectangle` |

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-to-target.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view-to-target.ts#L24)
