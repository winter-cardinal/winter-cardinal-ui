[Winter Cardinal UI - v0.167.0](../index.md) / DViewTranslationWheelOptions

# Interface: DViewTranslationWheelOptions

[DView](DView.md) wheel translation options.

## Table of contents

### Properties

- [checker](DViewTranslationWheelOptions.md#checker)
- [enable](DViewTranslationWheelOptions.md#enable)
- [modifier](DViewTranslationWheelOptions.md#modifier)
- [speed](DViewTranslationWheelOptions.md#speed)

## Properties

### checker

• `Optional` **checker**: [`DViewChecker`](../index.md#dviewchecker)

Wheel translation checker.
If a checker returns false, wheel translations will be canceled.

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view.ts#L99)

___

### enable

• `Optional` **enable**: `boolean`

True to enable wheel translation

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view.ts#L87)

___

### modifier

• `Optional` **modifier**: `number` \| ``"NONE"`` \| ``"CTRL"`` \| ``"SHIFT"`` \| ``"ALT"`` \| ``"AND"`` \| ``"OR"`` \| ``"NOT_NONE"``

Mouse modifiers

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view.ts#L93)

___

### speed

• `Optional` **speed**: `number`

Translation speed

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-view.ts#L90)
