[Winter Cardinal UI - v0.414.0](../index.md) / DViewZoomWheelOptions

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

[src/main/typescript/wcardinal/ui/d-view.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view.ts#L37)

___

### enable

• `Optional` **enable**: `boolean`

True to enable wheel zoom

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view.ts#L25)

___

### modifier

• `Optional` **modifier**: `number` \| ``"NONE"`` \| ``"CTRL"`` \| ``"SHIFT"`` \| ``"ALT"`` \| ``"AND"`` \| ``"OR"`` \| ``"NOT_NONE"``

Mouse modifiers

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view.ts#L31)

___

### speed

• `Optional` **speed**: `number`

Zoom speed

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-view.ts#L28)
