[Winter Cardinal UI - v0.442.0](../index.md) / UtilHtmlElementTarget

# Interface: UtilHtmlElementTarget

## Hierarchy

- [`DFocusableMightBe`](DFocusableMightBe.md)

  ↳ **`UtilHtmlElementTarget`**

  ↳↳ [`UtilInputTarget`](UtilInputTarget.md)

## Table of contents

### Properties

- [cursor](UtilHtmlElementTarget.md#cursor)
- [parent](UtilHtmlElementTarget.md#parent)
- [state](UtilHtmlElementTarget.md#state)
- [visible](UtilHtmlElementTarget.md#visible)
- [worldVisible](UtilHtmlElementTarget.md#worldvisible)

### Methods

- [focus](UtilHtmlElementTarget.md#focus)

## Properties

### cursor

• `Optional` `Readonly` **cursor**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L144)

___

### parent

• **parent**: ``null`` \| [`DFocusableContainer`](DFocusableContainer.md)

#### Inherited from

[DFocusableMightBe](DFocusableMightBe.md).[parent](DFocusableMightBe.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L10)

___

### state

• `Readonly` **state**: [`DBaseStateSet`](DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L143)

___

### visible

• **visible**: `boolean`

#### Inherited from

[DFocusableMightBe](DFocusableMightBe.md).[visible](DFocusableMightBe.md#visible)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L11)

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L145)

## Methods

### focus

▸ **focus**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L147)
