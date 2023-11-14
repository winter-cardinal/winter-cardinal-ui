[Winter Cardinal UI - v0.374.0](../index.md) / DViewZoomDblClickOptions

# Interface: DViewZoomDblClickOptions

[DView](DView.md) double-click zoom options.

## Table of contents

### Properties

- [amount](DViewZoomDblClickOptions.md#amount)
- [checker](DViewZoomDblClickOptions.md#checker)
- [duration](DViewZoomDblClickOptions.md#duration)
- [enable](DViewZoomDblClickOptions.md#enable)
- [modifier](DViewZoomDblClickOptions.md#modifier)

## Properties

### amount

• `Optional` **amount**: `number`

Zoom amount

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L48)

___

### checker

• `Optional` **checker**: [`DViewChecker`](../index.md#dviewchecker)

Double click zoom checker.
If a checker returns false, double click zooms will be canceled.

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L57)

___

### duration

• `Optional` **duration**: `number`

Zoom duration

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L60)

___

### enable

• `Optional` **enable**: `boolean`

True to enable double click zoom

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L45)

___

### modifier

• `Optional` **modifier**: `number` \| ``"NONE"`` \| ``"CTRL"`` \| ``"SHIFT"`` \| ``"ALT"`` \| ``"AND"`` \| ``"OR"`` \| ``"NOT_NONE"``

Mouse modifiers

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-view.ts#L51)
