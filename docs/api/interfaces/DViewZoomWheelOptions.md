[Winter Cardinal UI - v0.179.0](../index.md) / DViewZoomWheelOptions

# Interface: DViewZoomWheelOptions

[DView](DView.md) wheel zoom options.

## Table of contents

### Properties

- [checker](DViewZoomWheelOptions.md#checker)
- [enable](DViewZoomWheelOptions.md#enable)
- [modifier](DViewZoomWheelOptions.md#modifier)
- [speed](DViewZoomWheelOptions.md#speed)

## Properties

### checker

• `Optional` **checker**: [`DViewChecker`](../index.md#dviewchecker)

Wheel zoom checker.
If a checker returns false, wheel zooms will be canceled.

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-view.ts#L36)

___

### enable

• `Optional` **enable**: `boolean`

True to enable wheel zoom

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-view.ts#L24)

___

### modifier

• `Optional` **modifier**: `number` \| ``"NONE"`` \| ``"CTRL"`` \| ``"SHIFT"`` \| ``"ALT"`` \| ``"AND"`` \| ``"OR"`` \| ``"NOT_NONE"``

Mouse modifiers

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-view.ts#L30)

___

### speed

• `Optional` **speed**: `number`

Zoom speed

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-view.ts#L27)
