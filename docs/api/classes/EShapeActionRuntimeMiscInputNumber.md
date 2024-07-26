[Winter Cardinal UI - v0.442.0](../index.md) / EShapeActionRuntimeMiscInputNumber

# Class: EShapeActionRuntimeMiscInputNumber

## Hierarchy

- [`EShapeActionRuntimeMiscInputInput`](EShapeActionRuntimeMiscInputInput.md)\<`number`, [`UtilInputNumber`](UtilInputNumber.md)\>

  ↳ **`EShapeActionRuntimeMiscInputNumber`**

  ↳↳ [`EShapeActionRuntimeMiscInputInteger`](EShapeActionRuntimeMiscInputInteger.md)

  ↳↳ [`EShapeActionRuntimeMiscInputReal`](EShapeActionRuntimeMiscInputReal.md)

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeMiscInputNumber.md#constructor)

### Properties

- [condition](EShapeActionRuntimeMiscInputNumber.md#condition)
- [onInputAction](EShapeActionRuntimeMiscInputNumber.md#oninputaction)
- [reset](EShapeActionRuntimeMiscInputNumber.md#reset)
- [target](EShapeActionRuntimeMiscInputNumber.md#target)
- [utils](EShapeActionRuntimeMiscInputNumber.md#utils)
- [WORK](EShapeActionRuntimeMiscInputNumber.md#work)

### Methods

- [containsPoint](EShapeActionRuntimeMiscInputNumber.md#containspoint)
- [execute](EShapeActionRuntimeMiscInputNumber.md#execute)
- [getClipperExRects](EShapeActionRuntimeMiscInputNumber.md#getclipperexrects)
- [getClipperToRect](EShapeActionRuntimeMiscInputNumber.md#getclippertorect)
- [getElementMatrix](EShapeActionRuntimeMiscInputNumber.md#getelementmatrix)
- [getElementRect](EShapeActionRuntimeMiscInputNumber.md#getelementrect)
- [getPadding](EShapeActionRuntimeMiscInputNumber.md#getpadding)
- [getUtil](EShapeActionRuntimeMiscInputNumber.md#getutil)
- [initialize](EShapeActionRuntimeMiscInputNumber.md#initialize)
- [newElementCreator](EShapeActionRuntimeMiscInputNumber.md#newelementcreator)
- [newOperation](EShapeActionRuntimeMiscInputNumber.md#newoperation)
- [newUtil](EShapeActionRuntimeMiscInputNumber.md#newutil)
- [newUtilOptions](EShapeActionRuntimeMiscInputNumber.md#newutiloptions)
- [onBlur](EShapeActionRuntimeMiscInputNumber.md#onblur)
- [onClick](EShapeActionRuntimeMiscInputNumber.md#onclick)
- [onDblClick](EShapeActionRuntimeMiscInputNumber.md#ondblclick)
- [onDown](EShapeActionRuntimeMiscInputNumber.md#ondown)
- [onDowning](EShapeActionRuntimeMiscInputNumber.md#ondowning)
- [onFocus](EShapeActionRuntimeMiscInputNumber.md#onfocus)
- [onKeyDown](EShapeActionRuntimeMiscInputNumber.md#onkeydown)
- [onKeyUp](EShapeActionRuntimeMiscInputNumber.md#onkeyup)
- [onMove](EShapeActionRuntimeMiscInputNumber.md#onmove)
- [onOut](EShapeActionRuntimeMiscInputNumber.md#onout)
- [onOver](EShapeActionRuntimeMiscInputNumber.md#onover)
- [onPressed](EShapeActionRuntimeMiscInputNumber.md#onpressed)
- [onRender](EShapeActionRuntimeMiscInputNumber.md#onrender)
- [onResize](EShapeActionRuntimeMiscInputNumber.md#onresize)
- [onRightClick](EShapeActionRuntimeMiscInputNumber.md#onrightclick)
- [onRightDown](EShapeActionRuntimeMiscInputNumber.md#onrightdown)
- [onRightDowning](EShapeActionRuntimeMiscInputNumber.md#onrightdowning)
- [onRightPressed](EShapeActionRuntimeMiscInputNumber.md#onrightpressed)
- [onRightUnpressed](EShapeActionRuntimeMiscInputNumber.md#onrightunpressed)
- [onRightUp](EShapeActionRuntimeMiscInputNumber.md#onrightup)
- [onRightUpOutside](EShapeActionRuntimeMiscInputNumber.md#onrightupoutside)
- [onUnpressed](EShapeActionRuntimeMiscInputNumber.md#onunpressed)
- [onUp](EShapeActionRuntimeMiscInputNumber.md#onup)
- [onUpOutside](EShapeActionRuntimeMiscInputNumber.md#onupoutside)
- [onValueChange](EShapeActionRuntimeMiscInputNumber.md#onvaluechange)
- [toWhen](EShapeActionRuntimeMiscInputNumber.md#towhen)

## Constructors

### constructor

• **new EShapeActionRuntimeMiscInputNumber**(`value`): [`EShapeActionRuntimeMiscInputNumber`](EShapeActionRuntimeMiscInputNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueMisc`](EShapeActionValueMisc.md) |

#### Returns

[`EShapeActionRuntimeMiscInputNumber`](EShapeActionRuntimeMiscInputNumber.md)

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[constructor](EShapeActionRuntimeMiscInputInput.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L28)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[condition](EShapeActionRuntimeMiscInputInput.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L34)

___

### onInputAction

• `Protected` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction)

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onInputAction](EShapeActionRuntimeMiscInputInput.md#oninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L26)

___

### reset

• `Readonly` **reset**: `number`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[reset](EShapeActionRuntimeMiscInputInput.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L16)

___

### target

• `Protected` `Readonly` **target**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[target](EShapeActionRuntimeMiscInputInput.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L25)

___

### utils

• `Protected` **utils**: `Map`\<[`EShape`](../interfaces/EShape.md), [`UtilInputNumber`](UtilInputNumber.md)\<[`UtilInputNumberTarget`](../interfaces/UtilInputNumberTarget.md), [`UtilInputNumberOperation`](../interfaces/UtilInputNumberOperation.md), [`UtilThemeInputNumber`](../interfaces/UtilThemeInputNumber.md), [`UtilInputNumberOptions`](../interfaces/UtilInputNumberOptions.md)\>\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[utils](EShapeActionRuntimeMiscInputInput.md#utils)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L35)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Point`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[WORK](EShapeActionRuntimeMiscInputInput.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L33)

## Methods

### containsPoint

▸ **containsPoint**(`shape`, `runtime`, `point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[containsPoint](EShapeActionRuntimeMiscInputInput.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L141)

___

### execute

▸ **execute**(`shape`, `runtime`, `time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `time` | `number` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[execute](EShapeActionRuntimeMiscInputInput.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L26)

___

### getClipperExRects

▸ **getClipperExRects**(`shape`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `result` | [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[getClipperExRects](EShapeActionRuntimeMiscInputInput.md#getclipperexrects)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L188)

___

### getClipperToRect

▸ **getClipperToRect**(`shape`, `runtime`, `resolution`, `point`, `result`): ``null`` \| `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `resolution` | `number` |
| `point` | `Point` |
| `result` | `Rectangle` |

#### Returns

``null`` \| `Rectangle`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[getClipperToRect](EShapeActionRuntimeMiscInputInput.md#getclippertorect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L177)

___

### getElementMatrix

▸ **getElementMatrix**(`shape`, `runtime`): ``null`` \| `Matrix`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

``null`` \| `Matrix`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[getElementMatrix](EShapeActionRuntimeMiscInputInput.md#getelementmatrix)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L172)

___

### getElementRect

▸ **getElementRect**(`shape`, `runtime`, `resolution`, `point`, `result`): ``null`` \| `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `resolution` | `number` |
| `point` | `Point` |
| `result` | `Rectangle` |

#### Returns

``null`` \| `Rectangle`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[getElementRect](EShapeActionRuntimeMiscInputInput.md#getelementrect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L154)

___

### getPadding

▸ **getPadding**(`shape`, `runtime`): ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[getPadding](EShapeActionRuntimeMiscInputInput.md#getpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L112)

___

### getUtil

▸ **getUtil**(`shape`, `runtime`): [`UtilInputNumber`](UtilInputNumber.md)\<[`UtilInputNumberTarget`](../interfaces/UtilInputNumberTarget.md), [`UtilInputNumberOperation`](../interfaces/UtilInputNumberOperation.md), [`UtilThemeInputNumber`](../interfaces/UtilThemeInputNumber.md), [`UtilInputNumberOptions`](../interfaces/UtilInputNumberOptions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

[`UtilInputNumber`](UtilInputNumber.md)\<[`UtilInputNumberTarget`](../interfaces/UtilInputNumberTarget.md), [`UtilInputNumberOperation`](../interfaces/UtilInputNumberOperation.md), [`UtilThemeInputNumber`](../interfaces/UtilThemeInputNumber.md), [`UtilInputNumberOptions`](../interfaces/UtilInputNumberOptions.md)\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[getUtil](EShapeActionRuntimeMiscInputInput.md#getutil)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L43)

___

### initialize

▸ **initialize**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[initialize](EShapeActionRuntimeMiscInputInput.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L22)

___

### newElementCreator

▸ **newElementCreator**(`shape`, `runtime`): `undefined` \| [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`undefined` \| [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`HTMLInputElement`\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[newElementCreator](EShapeActionRuntimeMiscInputInput.md#newelementcreator)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L105)

___

### newOperation

▸ **newOperation**(`shape`, `runtime`): [`UtilInputOperation`](../interfaces/UtilInputOperation.md)\<`number`, `HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

[`UtilInputOperation`](../interfaces/UtilInputOperation.md)\<`number`, `HTMLInputElement`\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[newOperation](EShapeActionRuntimeMiscInputInput.md#newoperation)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L34)

___

### newUtil

▸ **newUtil**(`shape`, `runtime`): [`UtilInputNumber`](UtilInputNumber.md)\<[`UtilInputNumberTarget`](../interfaces/UtilInputNumberTarget.md), [`UtilInputNumberOperation`](../interfaces/UtilInputNumberOperation.md), [`UtilThemeInputNumber`](../interfaces/UtilThemeInputNumber.md), [`UtilInputNumberOptions`](../interfaces/UtilInputNumberOptions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

[`UtilInputNumber`](UtilInputNumber.md)\<[`UtilInputNumberTarget`](../interfaces/UtilInputNumberTarget.md), [`UtilInputNumberOperation`](../interfaces/UtilInputNumberOperation.md), [`UtilThemeInputNumber`](../interfaces/UtilThemeInputNumber.md), [`UtilInputNumberOptions`](../interfaces/UtilInputNumberOptions.md)\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[newUtil](EShapeActionRuntimeMiscInputInput.md#newutil)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L53)

___

### newUtilOptions

▸ **newUtilOptions**(`shape`, `runtime`): [`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)\<`HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

[`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)\<`HTMLInputElement`\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[newUtilOptions](EShapeActionRuntimeMiscInputInput.md#newutiloptions)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L113)

___

### onBlur

▸ **onBlur**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onBlur](EShapeActionRuntimeMiscInputInput.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L226)

___

### onClick

▸ **onClick**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `KeyboardEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onClick](EShapeActionRuntimeMiscInputInput.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L42)

___

### onDblClick

▸ **onDblClick**(`shape`, `runtime`, `e`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onDblClick](EShapeActionRuntimeMiscInputInput.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L238)

___

### onDown

▸ **onDown**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `KeyboardEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onDown](EShapeActionRuntimeMiscInputInput.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L234)

___

### onDowning

▸ **onDowning**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `KeyboardEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onDowning](EShapeActionRuntimeMiscInputInput.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L230)

___

### onFocus

▸ **onFocus**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onFocus](EShapeActionRuntimeMiscInputInput.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L222)

___

### onKeyDown

▸ **onKeyDown**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onKeyDown](EShapeActionRuntimeMiscInputInput.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L91)

___

### onKeyUp

▸ **onKeyUp**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onKeyUp](EShapeActionRuntimeMiscInputInput.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L95)

___

### onMove

▸ **onMove**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onMove](EShapeActionRuntimeMiscInputInput.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L63)

___

### onOut

▸ **onOut**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onOut](EShapeActionRuntimeMiscInputInput.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L71)

___

### onOver

▸ **onOver**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onOver](EShapeActionRuntimeMiscInputInput.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L67)

___

### onPressed

▸ **onPressed**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `KeyboardEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onPressed](EShapeActionRuntimeMiscInputInput.md#onpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L83)

___

### onRender

▸ **onRender**(`shape`, `runtime`, `time`, `renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `time` | `number` |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onRender](EShapeActionRuntimeMiscInputInput.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L218)

___

### onResize

▸ **onResize**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onResize](EShapeActionRuntimeMiscInputInput.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L30)

___

### onRightClick

▸ **onRightClick**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onRightClick](EShapeActionRuntimeMiscInputInput.md#onrightclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L99)

___

### onRightDown

▸ **onRightDown**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onRightDown](EShapeActionRuntimeMiscInputInput.md#onrightdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L107)

___

### onRightDowning

▸ **onRightDowning**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onRightDowning](EShapeActionRuntimeMiscInputInput.md#onrightdowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L103)

___

### onRightPressed

▸ **onRightPressed**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onRightPressed](EShapeActionRuntimeMiscInputInput.md#onrightpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L119)

___

### onRightUnpressed

▸ **onRightUnpressed**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onRightUnpressed](EShapeActionRuntimeMiscInputInput.md#onrightunpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L123)

___

### onRightUp

▸ **onRightUp**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onRightUp](EShapeActionRuntimeMiscInputInput.md#onrightup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L111)

___

### onRightUpOutside

▸ **onRightUpOutside**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onRightUpOutside](EShapeActionRuntimeMiscInputInput.md#onrightupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L115)

___

### onUnpressed

▸ **onUnpressed**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `KeyboardEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onUnpressed](EShapeActionRuntimeMiscInputInput.md#onunpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L87)

___

### onUp

▸ **onUp**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `KeyboardEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onUp](EShapeActionRuntimeMiscInputInput.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L75)

___

### onUpOutside

▸ **onUpOutside**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `e` | `KeyboardEvent` \| `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onUpOutside](EShapeActionRuntimeMiscInputInput.md#onupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L79)

___

### onValueChange

▸ **onValueChange**(`shape`, `runtime`, `newValue`, `oldValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `newValue` | `number` |
| `oldValue` | `number` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onValueChange](EShapeActionRuntimeMiscInputInput.md#onvaluechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L116)

___

### toWhen

▸ **toWhen**(`shape`, `runtime`): `undefined` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`undefined` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[toWhen](EShapeActionRuntimeMiscInputInput.md#towhen)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L133)
