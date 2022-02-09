[Winter Cardinal UI](../README.md) / EShapeActionRuntimeMiscInputInput

# Class: EShapeActionRuntimeMiscInputInput<VALUE, UTIL\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `UTIL` | extends [`UtilInputInput`](UtilInputInput.md)<`VALUE`\> = [`UtilInputInput`](UtilInputInput.md)<`VALUE`\> |

## Hierarchy

- [`EShapeActionRuntimeMiscInput`](EShapeActionRuntimeMiscInput.md)<`VALUE`, `HTMLInputElement`, `UTIL`\>

  ↳ **`EShapeActionRuntimeMiscInputInput`**

  ↳↳ [`EShapeActionRuntimeMiscInputNumber`](EShapeActionRuntimeMiscInputNumber.md)

  ↳↳ [`EShapeActionRuntimeMiscInputText`](EShapeActionRuntimeMiscInputText.md)

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeMiscInputInput.md#constructor)

### Properties

- [condition](EShapeActionRuntimeMiscInputInput.md#condition)
- [onInputAction](EShapeActionRuntimeMiscInputInput.md#oninputaction)
- [reset](EShapeActionRuntimeMiscInputInput.md#reset)
- [target](EShapeActionRuntimeMiscInputInput.md#target)
- [utils](EShapeActionRuntimeMiscInputInput.md#utils)
- [WORK](EShapeActionRuntimeMiscInputInput.md#work)

### Methods

- [containsPoint](EShapeActionRuntimeMiscInputInput.md#containspoint)
- [execute](EShapeActionRuntimeMiscInputInput.md#execute)
- [getClipperToRect](EShapeActionRuntimeMiscInputInput.md#getclippertorect)
- [getElementMatrix](EShapeActionRuntimeMiscInputInput.md#getelementmatrix)
- [getElementRect](EShapeActionRuntimeMiscInputInput.md#getelementrect)
- [getPadding](EShapeActionRuntimeMiscInputInput.md#getpadding)
- [getUtil](EShapeActionRuntimeMiscInputInput.md#getutil)
- [initialize](EShapeActionRuntimeMiscInputInput.md#initialize)
- [newElementCreator](EShapeActionRuntimeMiscInputInput.md#newelementcreator)
- [newOperation](EShapeActionRuntimeMiscInputInput.md#newoperation)
- [newUtil](EShapeActionRuntimeMiscInputInput.md#newutil)
- [newUtilOptions](EShapeActionRuntimeMiscInputInput.md#newutiloptions)
- [onBlur](EShapeActionRuntimeMiscInputInput.md#onblur)
- [onDblClick](EShapeActionRuntimeMiscInputInput.md#ondblclick)
- [onDown](EShapeActionRuntimeMiscInputInput.md#ondown)
- [onDowning](EShapeActionRuntimeMiscInputInput.md#ondowning)
- [onFocus](EShapeActionRuntimeMiscInputInput.md#onfocus)
- [onMove](EShapeActionRuntimeMiscInputInput.md#onmove)
- [onRender](EShapeActionRuntimeMiscInputInput.md#onrender)
- [onValueChange](EShapeActionRuntimeMiscInputInput.md#onvaluechange)
- [toWhen](EShapeActionRuntimeMiscInputInput.md#towhen)

## Constructors

### constructor

• **new EShapeActionRuntimeMiscInputInput**<`VALUE`, `UTIL`\>(`value`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `UTIL` | extends [`UtilInputInput`](UtilInputInput.md)<`VALUE`, [`UtilInputInputTarget`](../interfaces/UtilInputInputTarget.md), [`UtilInputInputOperation`](../interfaces/UtilInputInputOperation.md)<`VALUE`\>, [`UtilThemeInputInput`](../interfaces/UtilThemeInputInput.md)<`VALUE`\>, [`UtilInputInputOptions`](../interfaces/UtilInputInputOptions.md)<`VALUE`\>, `UTIL`\> = [`UtilInputInput`](UtilInputInput.md)<`VALUE`, [`UtilInputInputTarget`](../interfaces/UtilInputInputTarget.md), [`UtilInputInputOperation`](../interfaces/UtilInputInputOperation.md)<`VALUE`\>, [`UtilThemeInputInput`](../interfaces/UtilThemeInputInput.md)<`VALUE`\>, [`UtilInputInputOptions`](../interfaces/UtilInputInputOptions.md)<`VALUE`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueMisc`](EShapeActionValueMisc.md) |

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[constructor](EShapeActionRuntimeMiscInput.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L26)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../README.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[condition](EShapeActionRuntimeMiscInput.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L31)

___

### onInputAction

• `Protected` **onInputAction**: [`EShapeActionValueOnInputAction`](../README.md#eshapeactionvalueoninputaction)

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onInputAction](EShapeActionRuntimeMiscInput.md#oninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L24)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[reset](EShapeActionRuntimeMiscInput.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

___

### target

• `Protected` `Readonly` **target**: [`EShapeActionExpression`](../README.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[target](EShapeActionRuntimeMiscInput.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L23)

___

### utils

• `Protected` **utils**: `Map`<[`EShape`](../interfaces/EShape.md), `UTIL`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[utils](EShapeActionRuntimeMiscInput.md#utils)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L32)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Point`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[WORK](EShapeActionRuntimeMiscInput.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L30)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[containsPoint](EShapeActionRuntimeMiscInput.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L131)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[execute](EShapeActionRuntimeMiscInput.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L27)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getClipperToRect](EShapeActionRuntimeMiscInput.md#getclippertorect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L168)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getElementMatrix](EShapeActionRuntimeMiscInput.md#getelementmatrix)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L163)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getElementRect](EShapeActionRuntimeMiscInput.md#getelementrect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L145)

___

### getPadding

▸ `Protected` **getPadding**(`shape`, `runtime`): ``null`` \| [`UtilHtmlElementPadding`](../README.md#utilhtmlelementpadding)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

``null`` \| [`UtilHtmlElementPadding`](../README.md#utilhtmlelementpadding)

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getPadding](EShapeActionRuntimeMiscInput.md#getpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L106)

___

### getUtil

▸ `Protected` **getUtil**(`shape`, `runtime`): `UTIL`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`UTIL`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getUtil](EShapeActionRuntimeMiscInput.md#getutil)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L40)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[initialize](EShapeActionRuntimeMiscInput.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

___

### newElementCreator

▸ `Protected` **newElementCreator**(`shape`, `runtime`): `undefined` \| [`UtilHtmlElementCreator`](../README.md#utilhtmlelementcreator)<`HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`undefined` \| [`UtilHtmlElementCreator`](../README.md#utilhtmlelementcreator)<`HTMLInputElement`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[newElementCreator](EShapeActionRuntimeMiscInput.md#newelementcreator)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L99)

___

### newOperation

▸ `Protected` **newOperation**(`shape`, `runtime`): [`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`VALUE`, `HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

[`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`VALUE`, `HTMLInputElement`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[newOperation](EShapeActionRuntimeMiscInput.md#newoperation)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L32)

___

### newUtil

▸ `Protected` **newUtil**(`shape`, `runtime`): `UTIL`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`UTIL`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[newUtil](EShapeActionRuntimeMiscInput.md#newutil)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L50)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[newUtilOptions](EShapeActionRuntimeMiscInput.md#newutiloptions)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L106)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onBlur](EShapeActionRuntimeMiscInput.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L187)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onDblClick](EShapeActionRuntimeMiscInput.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:199](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L199)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onDown](EShapeActionRuntimeMiscInput.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L195)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onDowning](EShapeActionRuntimeMiscInput.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L191)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onFocus](EShapeActionRuntimeMiscInput.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L183)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onMove](EShapeActionRuntimeMiscInput.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRender](EShapeActionRuntimeMiscInput.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L179)

___

### onValueChange

▸ `Protected` **onValueChange**(`shape`, `runtime`, `newValue`, `oldValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `newValue` | `VALUE` |
| `oldValue` | `VALUE` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onValueChange](EShapeActionRuntimeMiscInput.md#onvaluechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L110)

___

### toWhen

▸ `Protected` **toWhen**(`shape`, `runtime`): `undefined` \| [`UtilHtmlElementWhen`](../README.md#utilhtmlelementwhen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`undefined` \| [`UtilHtmlElementWhen`](../README.md#utilhtmlelementwhen)

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[toWhen](EShapeActionRuntimeMiscInput.md#towhen)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L123)
