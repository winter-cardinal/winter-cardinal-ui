[Winter Cardinal UI - v0.199.0](../index.md) / DViewZoomDblClickOptions

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

[src/main/typescript/wcardinal/ui/d-view.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-view.ts#L47)

___

### checker

• `Optional` **checker**: [`DViewChecker`](../index.md#dviewchecker)

Double click zoom checker.
If a checker returns false, double click zooms will be canceled.

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-view.ts#L56)

___

### duration

• `Optional` **duration**: `number`

Zoom duration

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-view.ts#L59)

___

### enable

• `Optional` **enable**: `boolean`

True to enable double click zoom

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-view.ts#L44)

___

### modifier

• `Optional` **modifier**: `number` \| ``"NONE"`` \| ``"CTRL"`` \| ``"SHIFT"`` \| ``"ALT"`` \| ``"AND"`` \| ``"OR"`` \| ``"NOT_NONE"``

Mouse modifiers

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-view.ts#L50)
