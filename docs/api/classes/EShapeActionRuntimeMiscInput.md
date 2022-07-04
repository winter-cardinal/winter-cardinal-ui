[Winter Cardinal UI - v0.194.0](../index.md) / EShapeActionRuntimeMiscInput

# Class: EShapeActionRuntimeMiscInput<VALUE, ELEMENT, UTIL\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `ELEMENT` | extends `HTMLInputElement` \| `HTMLTextAreaElement` = `HTMLInputElement` \| `HTMLTextAreaElement` |
| `UTIL` | extends [`UtilInput`](UtilInput.md)<`VALUE`, `ELEMENT`\> = [`UtilInput`](UtilInput.md)<`VALUE`, `ELEMENT`\> |

## Hierarchy

- `EShapeActionRuntimeMiscHtmlElementBase`<`ELEMENT`, `UTIL`\>

  ↳ **`EShapeActionRuntimeMiscInput`**

  ↳↳ [`EShapeActionRuntimeMiscInputInput`](EShapeActionRuntimeMiscInputInput.md)

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeMiscInput.md#constructor)

### Properties

- [condition](EShapeActionRuntimeMiscInput.md#condition)
- [onInputAction](EShapeActionRuntimeMiscInput.md#oninputaction)
- [reset](EShapeActionRuntimeMiscInput.md#reset)
- [target](EShapeActionRuntimeMiscInput.md#target)
- [utils](EShapeActionRuntimeMiscInput.md#utils)
- [WORK](EShapeActionRuntimeMiscInput.md#work)

### Methods

- [containsPoint](EShapeActionRuntimeMiscInput.md#containspoint)
- [execute](EShapeActionRuntimeMiscInput.md#execute)
- [getClipperExRects](EShapeActionRuntimeMiscInput.md#getclipperexrects)
- [getClipperToRect](EShapeActionRuntimeMiscInput.md#getclippertorect)
- [getElementMatrix](EShapeActionRuntimeMiscInput.md#getelementmatrix)
- [getElementRect](EShapeActionRuntimeMiscInput.md#getelementrect)
- [getPadding](EShapeActionRuntimeMiscInput.md#getpadding)
- [getUtil](EShapeActionRuntimeMiscInput.md#getutil)
- [initialize](EShapeActionRuntimeMiscInput.md#initialize)
- [newElementCreator](EShapeActionRuntimeMiscInput.md#newelementcreator)
- [newOperation](EShapeActionRuntimeMiscInput.md#newoperation)
- [newUtil](EShapeActionRuntimeMiscInput.md#newutil)
- [newUtilOptions](EShapeActionRuntimeMiscInput.md#newutiloptions)
- [onBlur](EShapeActionRuntimeMiscInput.md#onblur)
- [onDblClick](EShapeActionRuntimeMiscInput.md#ondblclick)
- [onDown](EShapeActionRuntimeMiscInput.md#ondown)
- [onDowning](EShapeActionRuntimeMiscInput.md#ondowning)
- [onFocus](EShapeActionRuntimeMiscInput.md#onfocus)
- [onMove](EShapeActionRuntimeMiscInput.md#onmove)
- [onRender](EShapeActionRuntimeMiscInput.md#onrender)
- [onValueChange](EShapeActionRuntimeMiscInput.md#onvaluechange)
- [toWhen](EShapeActionRuntimeMiscInput.md#towhen)

## Constructors

### constructor

• **new EShapeActionRuntimeMiscInput**<`VALUE`, `ELEMENT`, `UTIL`\>(`value`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `ELEMENT` | extends `HTMLInputElement` \| `HTMLTextAreaElement` = `HTMLInputElement` \| `HTMLTextAreaElement` |
| `UTIL` | extends [`UtilInput`](UtilInput.md)<`VALUE`, `ELEMENT`, [`UtilInputTarget`](../interfaces/UtilInputTarget.md), [`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`VALUE`, `ELEMENT`\>, [`UtilThemeInput`](../interfaces/UtilThemeInput.md)<`VALUE`, `ELEMENT`\>, [`UtilInputOptions`](../interfaces/UtilInputOptions.md)<`VALUE`, `ELEMENT`\>, `UTIL`\> = [`UtilInput`](UtilInput.md)<`VALUE`, `ELEMENT`, [`UtilInputTarget`](../interfaces/UtilInputTarget.md), [`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`VALUE`, `ELEMENT`\>, [`UtilThemeInput`](../interfaces/UtilThemeInput.md)<`VALUE`, `ELEMENT`\>, [`UtilInputOptions`](../interfaces/UtilInputOptions.md)<`VALUE`, `ELEMENT`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueMisc`](EShapeActionValueMisc.md) |

#### Overrides

EShapeActionRuntimeMiscHtmlElementBase&lt;ELEMENT, UTIL\&gt;.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L27)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Inherited from

EShapeActionRuntimeMiscHtmlElementBase.condition

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L35)

___

### onInputAction

• `Protected` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L25)

___

### reset

• **reset**: `number`

#### Inherited from

EShapeActionRuntimeMiscHtmlElementBase.reset

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

___

### target

• `Protected` `Readonly` **target**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)<``null`` \| `string`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L24)

___

### utils

• `Protected` **utils**: `Map`<[`EShape`](../interfaces/EShape.md), `UTIL`\>

#### Inherited from

EShapeActionRuntimeMiscHtmlElementBase.utils

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L36)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Point`

#### Inherited from

EShapeActionRuntimeMiscHtmlElementBase.WORK

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L34)

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

EShapeActionRuntimeMiscHtmlElementBase.containsPoint

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L142)

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

EShapeActionRuntimeMiscHtmlElementBase.execute

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L27)

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

EShapeActionRuntimeMiscHtmlElementBase.getClipperExRects

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L189)

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

EShapeActionRuntimeMiscHtmlElementBase.getClipperToRect

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L178)

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

EShapeActionRuntimeMiscHtmlElementBase.getElementMatrix

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L173)

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

EShapeActionRuntimeMiscHtmlElementBase.getElementRect

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L155)

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

#### Overrides

EShapeActionRuntimeMiscHtmlElementBase.getPadding

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L111)

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

EShapeActionRuntimeMiscHtmlElementBase.getUtil

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L44)

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

EShapeActionRuntimeMiscHtmlElementBase.initialize

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

___

### newElementCreator

▸ `Protected` **newElementCreator**(`shape`, `runtime`): `undefined` \| [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`ELEMENT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`undefined` \| [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)<`ELEMENT`\>

#### Overrides

EShapeActionRuntimeMiscHtmlElementBase.newElementCreator

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L104)

___

### newOperation

▸ `Protected` **newOperation**(`shape`, `runtime`): [`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`VALUE`, `ELEMENT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

[`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`VALUE`, `ELEMENT`\>

#### Overrides

EShapeActionRuntimeMiscHtmlElementBase.newOperation

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L33)

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

EShapeActionRuntimeMiscHtmlElementBase.newUtil

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L54)

___

### newUtilOptions

▸ `Protected` **newUtilOptions**(`shape`, `runtime`): [`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)<`ELEMENT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

[`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)<`ELEMENT`\>

#### Inherited from

EShapeActionRuntimeMiscHtmlElementBase.newUtilOptions

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L114)

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

EShapeActionRuntimeMiscHtmlElementBase.onBlur

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L227)

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

EShapeActionRuntimeMiscHtmlElementBase.onDblClick

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:239](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L239)

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

EShapeActionRuntimeMiscHtmlElementBase.onDown

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L235)

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

EShapeActionRuntimeMiscHtmlElementBase.onDowning

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:231](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L231)

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

EShapeActionRuntimeMiscHtmlElementBase.onFocus

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L223)

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

EShapeActionRuntimeMiscHtmlElementBase.onMove

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

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

EShapeActionRuntimeMiscHtmlElementBase.onRender

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L219)

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L115)

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

EShapeActionRuntimeMiscHtmlElementBase.toWhen

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L134)
