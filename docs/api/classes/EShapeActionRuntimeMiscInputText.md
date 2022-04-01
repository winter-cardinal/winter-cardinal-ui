[Winter Cardinal UI - v0.160.0](../index.md) / EShapeActionRuntimeMiscInputText

# Class: EShapeActionRuntimeMiscInputText

## Hierarchy

- [`EShapeActionRuntimeMiscInputInput`](EShapeActionRuntimeMiscInputInput.md)<`string`, [`UtilInputText`](UtilInputText.md)\>

  ↳ **`EShapeActionRuntimeMiscInputText`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeMiscInputText.md#constructor)

### Properties

- [condition](EShapeActionRuntimeMiscInputText.md#condition)
- [onInputAction](EShapeActionRuntimeMiscInputText.md#oninputaction)
- [reset](EShapeActionRuntimeMiscInputText.md#reset)
- [target](EShapeActionRuntimeMiscInputText.md#target)
- [utils](EShapeActionRuntimeMiscInputText.md#utils)
- [WORK](EShapeActionRuntimeMiscInputText.md#work)

### Methods

- [containsPoint](EShapeActionRuntimeMiscInputText.md#containspoint)
- [execute](EShapeActionRuntimeMiscInputText.md#execute)
- [getClipperToRect](EShapeActionRuntimeMiscInputText.md#getclippertorect)
- [getElementMatrix](EShapeActionRuntimeMiscInputText.md#getelementmatrix)
- [getElementRect](EShapeActionRuntimeMiscInputText.md#getelementrect)
- [getPadding](EShapeActionRuntimeMiscInputText.md#getpadding)
- [getUtil](EShapeActionRuntimeMiscInputText.md#getutil)
- [initialize](EShapeActionRuntimeMiscInputText.md#initialize)
- [newElementCreator](EShapeActionRuntimeMiscInputText.md#newelementcreator)
- [newOperation](EShapeActionRuntimeMiscInputText.md#newoperation)
- [newUtil](EShapeActionRuntimeMiscInputText.md#newutil)
- [newUtilOptions](EShapeActionRuntimeMiscInputText.md#newutiloptions)
- [onBlur](EShapeActionRuntimeMiscInputText.md#onblur)
- [onDblClick](EShapeActionRuntimeMiscInputText.md#ondblclick)
- [onDown](EShapeActionRuntimeMiscInputText.md#ondown)
- [onDowning](EShapeActionRuntimeMiscInputText.md#ondowning)
- [onFocus](EShapeActionRuntimeMiscInputText.md#onfocus)
- [onMove](EShapeActionRuntimeMiscInputText.md#onmove)
- [onRender](EShapeActionRuntimeMiscInputText.md#onrender)
- [onValueChange](EShapeActionRuntimeMiscInputText.md#onvaluechange)
- [toWhen](EShapeActionRuntimeMiscInputText.md#towhen)

## Constructors

### constructor

• **new EShapeActionRuntimeMiscInputText**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueMisc`](EShapeActionValueMisc.md) |

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[constructor](EShapeActionRuntimeMiscInputInput.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L26)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[condition](EShapeActionRuntimeMiscInputInput.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L31)

___

### onInputAction

• `Protected` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction)

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onInputAction](EShapeActionRuntimeMiscInputInput.md#oninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L24)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[reset](EShapeActionRuntimeMiscInputInput.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

___

### target

• `Protected` `Readonly` **target**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[target](EShapeActionRuntimeMiscInputInput.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L23)

___

### utils

• `Protected` **utils**: `Map`<[`EShape`](../interfaces/EShape.md), [`UtilInputText`](UtilInputText.md)<[`UtilInputTextTarget`](../interfaces/UtilInputTextTarget.md), [`UtilInputTextOperation`](../interfaces/UtilInputTextOperation.md), [`UtilThemeInputText`](../interfaces/UtilThemeInputText.md), [`UtilInputTextOptions`](../interfaces/UtilInputTextOptions.md)\>\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[utils](EShapeActionRuntimeMiscInputInput.md#utils)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L32)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Point`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[WORK](EShapeActionRuntimeMiscInputInput.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L30)

## Methods

### containsPoint

▸ `Protected` **containsPoint**(`shape`, `runtime`, `point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `point` | `Point` |

#### Returns

`boolean`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[containsPoint](EShapeActionRuntimeMiscInputInput.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L131)

___

### execute

▸ **execute**(`shape`, `runtime`, `time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `time` | `number` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[execute](EShapeActionRuntimeMiscInputInput.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L27)

___

### getClipperToRect

▸ `Protected` **getClipperToRect**(`shape`, `runtime`, `resolution`, `point`, `result`): ``null`` \| `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `resolution` | `number` |
| `point` | `Point` |
| `result` | `Rectangle` |

#### Returns

``null`` \| `Rectangle`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[getClipperToRect](EShapeActionRuntimeMiscInputInput.md#getclippertorect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L168)

___

### getElementMatrix

▸ `Protected` **getElementMatrix**(`shape`, `runtime`): ``null`` \| `Matrix`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

``null`` \| `Matrix`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[getElementMatrix](EShapeActionRuntimeMiscInputInput.md#getelementmatrix)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L163)

___

### getElementRect

▸ `Protected` **getElementRect**(`shape`, `runtime`, `resolution`, `point`, `result`): ``null`` \| `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `resolution` | `number` |
| `point` | `Point` |
| `result` | `Rectangle` |

#### Returns

``null`` \| `Rectangle`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[getElementRect](EShapeActionRuntimeMiscInputInput.md#getelementrect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L145)

___

### getPadding

▸ `Protected` **getPadding**(`shape`, `runtime`): ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding)

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[getPadding](EShapeActionRuntimeMiscInputInput.md#getpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L106)

___

### getUtil

▸ `Protected` **getUtil**(`shape`, `runtime`): [`UtilInputText`](UtilInputText.md)<[`UtilInputTextTarget`](../interfaces/UtilInputTextTarget.md), [`UtilInputTextOperation`](../interfaces/UtilInputTextOperation.md), [`UtilThemeInputText`](../interfaces/UtilThemeInputText.md), [`UtilInputTextOptions`](../interfaces/UtilInputTextOptions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

[`UtilInputText`](UtilInputText.md)<[`UtilInputTextTarget`](../interfaces/UtilInputTextTarget.md), [`UtilInputTextOperation`](../interfaces/UtilInputTextOperation.md), [`UtilThemeInputText`](../interfaces/UtilThemeInputText.md), [`UtilInputTextOptions`](../interfaces/UtilInputTextOptions.md)\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[getUtil](EShapeActionRuntimeMiscInputInput.md#getutil)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L40)

___

### initialize

▸ **initialize**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[initialize](EShapeActionRuntimeMiscInputInput.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

___

### newElementCreator

▸ `Protected` **newElementCreator**(`shape`, `runtime`): `undefined` \| [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`undefined` \| [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`HTMLInputElement`\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[newElementCreator](EShapeActionRuntimeMiscInputInput.md#newelementcreator)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L99)

___

### newOperation

▸ `Protected` **newOperation**(`shape`, `runtime`): [`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`string`, `HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

[`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`string`, `HTMLInputElement`\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[newOperation](EShapeActionRuntimeMiscInputInput.md#newoperation)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L32)

___

### newUtil

▸ `Protected` **newUtil**(`shape`, `runtime`): [`UtilInputText`](UtilInputText.md)<[`UtilInputTextTarget`](../interfaces/UtilInputTextTarget.md), [`UtilInputTextOperation`](../interfaces/UtilInputTextOperation.md), [`UtilThemeInputText`](../interfaces/UtilThemeInputText.md), [`UtilInputTextOptions`](../interfaces/UtilInputTextOptions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

[`UtilInputText`](UtilInputText.md)<[`UtilInputTextTarget`](../interfaces/UtilInputTextTarget.md), [`UtilInputTextOperation`](../interfaces/UtilInputTextOperation.md), [`UtilThemeInputText`](../interfaces/UtilThemeInputText.md), [`UtilInputTextOptions`](../interfaces/UtilInputTextOptions.md)\>

#### Overrides

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[newUtil](EShapeActionRuntimeMiscInputInput.md#newutil)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input-text.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input-text.ts#L17)

___

### newUtilOptions

▸ `Protected` **newUtilOptions**(`shape`, `runtime`): [`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)<`HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

[`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)<`HTMLInputElement`\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[newUtilOptions](EShapeActionRuntimeMiscInputInput.md#newutiloptions)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L106)

___

### onBlur

▸ **onBlur**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onBlur](EShapeActionRuntimeMiscInputInput.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L187)

___

### onDblClick

▸ **onDblClick**(`shape`, `runtime`, `e`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onDblClick](EShapeActionRuntimeMiscInputInput.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L199)

___

### onDown

▸ **onDown**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onDown](EShapeActionRuntimeMiscInputInput.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L195)

___

### onDowning

▸ **onDowning**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onDowning](EShapeActionRuntimeMiscInputInput.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L191)

___

### onFocus

▸ **onFocus**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onFocus](EShapeActionRuntimeMiscInputInput.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L183)

___

### onMove

▸ **onMove**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onMove](EShapeActionRuntimeMiscInputInput.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

___

### onRender

▸ **onRender**(`shape`, `runtime`, `time`, `renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `time` | `number` |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onRender](EShapeActionRuntimeMiscInputInput.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L179)

___

### onValueChange

▸ `Protected` **onValueChange**(`shape`, `runtime`, `newValue`, `oldValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `newValue` | `string` |
| `oldValue` | `string` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onValueChange](EShapeActionRuntimeMiscInputInput.md#onvaluechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L110)

___

### toWhen

▸ `Protected` **toWhen**(`shape`, `runtime`): `undefined` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`undefined` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[toWhen](EShapeActionRuntimeMiscInputInput.md#towhen)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L123)
