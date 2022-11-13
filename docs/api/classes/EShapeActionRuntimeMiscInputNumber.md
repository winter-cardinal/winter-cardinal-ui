[Winter Cardinal UI - v0.227.0](../index.md) / EShapeActionRuntimeMiscInputNumber

# Class: EShapeActionRuntimeMiscInputNumber

## Hierarchy

- [`EShapeActionRuntimeMiscInputInput`](EShapeActionRuntimeMiscInputInput.md)<`number`, [`UtilInputNumber`](UtilInputNumber.md)\>

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
- [onDblClick](EShapeActionRuntimeMiscInputNumber.md#ondblclick)
- [onDown](EShapeActionRuntimeMiscInputNumber.md#ondown)
- [onDowning](EShapeActionRuntimeMiscInputNumber.md#ondowning)
- [onFocus](EShapeActionRuntimeMiscInputNumber.md#onfocus)
- [onMove](EShapeActionRuntimeMiscInputNumber.md#onmove)
- [onRender](EShapeActionRuntimeMiscInputNumber.md#onrender)
- [onValueChange](EShapeActionRuntimeMiscInputNumber.md#onvaluechange)
- [toWhen](EShapeActionRuntimeMiscInputNumber.md#towhen)

## Constructors

### constructor

• **new EShapeActionRuntimeMiscInputNumber**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueMisc`](EShapeActionValueMisc.md) |

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[constructor](EShapeActionRuntimeMiscInputInput.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L28)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[condition](EShapeActionRuntimeMiscInputInput.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L36)

___

### onInputAction

• `Protected` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction-1)

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onInputAction](EShapeActionRuntimeMiscInputInput.md#oninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L26)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[reset](EShapeActionRuntimeMiscInputInput.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

___

### target

• `Protected` `Readonly` **target**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[target](EShapeActionRuntimeMiscInputInput.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L25)

___

### utils

• `Protected` **utils**: `Map`<[`EShape`](../interfaces/EShape.md), [`UtilInputNumber`](UtilInputNumber.md)<[`UtilInputNumberTarget`](../interfaces/UtilInputNumberTarget.md), [`UtilInputNumberOperation`](../interfaces/UtilInputNumberOperation.md), [`UtilThemeInputNumber`](../interfaces/UtilThemeInputNumber.md), [`UtilInputNumberOptions`](../interfaces/UtilInputNumberOptions.md)\>\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[utils](EShapeActionRuntimeMiscInputInput.md#utils)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L37)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Point`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[WORK](EShapeActionRuntimeMiscInputInput.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L35)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L143)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L27)

___

### getClipperExRects

▸ `Protected` **getClipperExRects**(`shape`, `result`): `void`

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L190)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L179)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L174)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L156)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L112)

___

### getUtil

▸ `Protected` **getUtil**(`shape`, `runtime`): [`UtilInputNumber`](UtilInputNumber.md)<[`UtilInputNumberTarget`](../interfaces/UtilInputNumberTarget.md), [`UtilInputNumberOperation`](../interfaces/UtilInputNumberOperation.md), [`UtilThemeInputNumber`](../interfaces/UtilThemeInputNumber.md), [`UtilInputNumberOptions`](../interfaces/UtilInputNumberOptions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

[`UtilInputNumber`](UtilInputNumber.md)<[`UtilInputNumberTarget`](../interfaces/UtilInputNumberTarget.md), [`UtilInputNumberOperation`](../interfaces/UtilInputNumberOperation.md), [`UtilThemeInputNumber`](../interfaces/UtilThemeInputNumber.md), [`UtilInputNumberOptions`](../interfaces/UtilInputNumberOptions.md)\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[getUtil](EShapeActionRuntimeMiscInputInput.md#getutil)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L45)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L105)

___

### newOperation

▸ `Protected` **newOperation**(`shape`, `runtime`): [`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`number`, `HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

[`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`number`, `HTMLInputElement`\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[newOperation](EShapeActionRuntimeMiscInputInput.md#newoperation)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L34)

___

### newUtil

▸ `Protected` **newUtil**(`shape`, `runtime`): [`UtilInputNumber`](UtilInputNumber.md)<[`UtilInputNumberTarget`](../interfaces/UtilInputNumberTarget.md), [`UtilInputNumberOperation`](../interfaces/UtilInputNumberOperation.md), [`UtilThemeInputNumber`](../interfaces/UtilThemeInputNumber.md), [`UtilInputNumberOptions`](../interfaces/UtilInputNumberOptions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

[`UtilInputNumber`](UtilInputNumber.md)<[`UtilInputNumberTarget`](../interfaces/UtilInputNumberTarget.md), [`UtilInputNumberOperation`](../interfaces/UtilInputNumberOperation.md), [`UtilThemeInputNumber`](../interfaces/UtilThemeInputNumber.md), [`UtilInputNumberOptions`](../interfaces/UtilInputNumberOptions.md)\>

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[newUtil](EShapeActionRuntimeMiscInputInput.md#newutil)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L55)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L115)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L228)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L240)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L236)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L232)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L224)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L220)

___

### onValueChange

▸ `Protected` **onValueChange**(`shape`, `runtime`, `newValue`, `oldValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `newValue` | `number` |
| `oldValue` | `number` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[onValueChange](EShapeActionRuntimeMiscInputInput.md#onvaluechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L116)

___

### toWhen

▸ `Protected` **toWhen**(`shape`, `runtime`): `undefined` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`undefined` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen-1)

#### Inherited from

[EShapeActionRuntimeMiscInputInput](EShapeActionRuntimeMiscInputInput.md).[toWhen](EShapeActionRuntimeMiscInputInput.md#towhen)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L135)
