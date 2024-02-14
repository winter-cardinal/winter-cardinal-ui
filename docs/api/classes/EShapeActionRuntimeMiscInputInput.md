[Winter Cardinal UI - v0.407.0](../index.md) / EShapeActionRuntimeMiscInputInput

# Class: EShapeActionRuntimeMiscInputInput\<VALUE, UTIL\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `UTIL` | extends [`UtilInputInput`](UtilInputInput.md)\<`VALUE`\> = [`UtilInputInput`](UtilInputInput.md)\<`VALUE`\> |

## Hierarchy

- [`EShapeActionRuntimeMiscInput`](EShapeActionRuntimeMiscInput.md)\<`VALUE`, `HTMLInputElement`, `UTIL`\>

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
- [getClipperExRects](EShapeActionRuntimeMiscInputInput.md#getclipperexrects)
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
- [onClick](EShapeActionRuntimeMiscInputInput.md#onclick)
- [onDblClick](EShapeActionRuntimeMiscInputInput.md#ondblclick)
- [onDown](EShapeActionRuntimeMiscInputInput.md#ondown)
- [onDowning](EShapeActionRuntimeMiscInputInput.md#ondowning)
- [onFocus](EShapeActionRuntimeMiscInputInput.md#onfocus)
- [onKeyDown](EShapeActionRuntimeMiscInputInput.md#onkeydown)
- [onKeyUp](EShapeActionRuntimeMiscInputInput.md#onkeyup)
- [onMove](EShapeActionRuntimeMiscInputInput.md#onmove)
- [onOut](EShapeActionRuntimeMiscInputInput.md#onout)
- [onOver](EShapeActionRuntimeMiscInputInput.md#onover)
- [onPressed](EShapeActionRuntimeMiscInputInput.md#onpressed)
- [onRender](EShapeActionRuntimeMiscInputInput.md#onrender)
- [onResize](EShapeActionRuntimeMiscInputInput.md#onresize)
- [onRightClick](EShapeActionRuntimeMiscInputInput.md#onrightclick)
- [onRightDown](EShapeActionRuntimeMiscInputInput.md#onrightdown)
- [onRightDowning](EShapeActionRuntimeMiscInputInput.md#onrightdowning)
- [onRightPressed](EShapeActionRuntimeMiscInputInput.md#onrightpressed)
- [onRightUnpressed](EShapeActionRuntimeMiscInputInput.md#onrightunpressed)
- [onRightUp](EShapeActionRuntimeMiscInputInput.md#onrightup)
- [onRightUpOutside](EShapeActionRuntimeMiscInputInput.md#onrightupoutside)
- [onUnpressed](EShapeActionRuntimeMiscInputInput.md#onunpressed)
- [onUp](EShapeActionRuntimeMiscInputInput.md#onup)
- [onUpOutside](EShapeActionRuntimeMiscInputInput.md#onupoutside)
- [onValueChange](EShapeActionRuntimeMiscInputInput.md#onvaluechange)
- [toWhen](EShapeActionRuntimeMiscInputInput.md#towhen)

## Constructors

### constructor

• **new EShapeActionRuntimeMiscInputInput**\<`VALUE`, `UTIL`\>(`value`): [`EShapeActionRuntimeMiscInputInput`](EShapeActionRuntimeMiscInputInput.md)\<`VALUE`, `UTIL`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `UTIL` | extends [`UtilInputInput`](UtilInputInput.md)\<`VALUE`, [`UtilInputInputTarget`](../interfaces/UtilInputInputTarget.md), [`UtilInputInputOperation`](../interfaces/UtilInputInputOperation.md)\<`VALUE`\>, [`UtilThemeInputInput`](../interfaces/UtilThemeInputInput.md)\<`VALUE`\>, [`UtilInputInputOptions`](../interfaces/UtilInputInputOptions.md)\<`VALUE`\>\> = [`UtilInputInput`](UtilInputInput.md)\<`VALUE`, [`UtilInputInputTarget`](../interfaces/UtilInputInputTarget.md), [`UtilInputInputOperation`](../interfaces/UtilInputInputOperation.md)\<`VALUE`\>, [`UtilThemeInputInput`](../interfaces/UtilThemeInputInput.md)\<`VALUE`\>, [`UtilInputInputOptions`](../interfaces/UtilInputInputOptions.md)\<`VALUE`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueMisc`](EShapeActionValueMisc.md) |

#### Returns

[`EShapeActionRuntimeMiscInputInput`](EShapeActionRuntimeMiscInputInput.md)\<`VALUE`, `UTIL`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[constructor](EShapeActionRuntimeMiscInput.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L28)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[condition](EShapeActionRuntimeMiscInput.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L34)

___

### onInputAction

• `Protected` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction-1)

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onInputAction](EShapeActionRuntimeMiscInput.md#oninputaction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L26)

___

### reset

• `Readonly` **reset**: `number`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[reset](EShapeActionRuntimeMiscInput.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L16)

___

### target

• `Protected` `Readonly` **target**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<``null`` \| `string`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[target](EShapeActionRuntimeMiscInput.md#target)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L25)

___

### utils

• `Protected` **utils**: `Map`\<[`EShape`](../interfaces/EShape.md), `UTIL`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[utils](EShapeActionRuntimeMiscInput.md#utils)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L35)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Point`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[WORK](EShapeActionRuntimeMiscInput.md#work)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L33)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[containsPoint](EShapeActionRuntimeMiscInput.md#containspoint)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L141)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[execute](EShapeActionRuntimeMiscInput.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L26)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getClipperExRects](EShapeActionRuntimeMiscInput.md#getclipperexrects)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L188)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getClipperToRect](EShapeActionRuntimeMiscInput.md#getclippertorect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L177)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getElementMatrix](EShapeActionRuntimeMiscInput.md#getelementmatrix)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L172)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getElementRect](EShapeActionRuntimeMiscInput.md#getelementrect)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L154)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getPadding](EShapeActionRuntimeMiscInput.md#getpadding)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L112)

___

### getUtil

▸ **getUtil**(`shape`, `runtime`): `UTIL`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`UTIL`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[getUtil](EShapeActionRuntimeMiscInput.md#getutil)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L43)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[initialize](EShapeActionRuntimeMiscInput.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L22)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[newElementCreator](EShapeActionRuntimeMiscInput.md#newelementcreator)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L105)

___

### newOperation

▸ **newOperation**(`shape`, `runtime`): [`UtilInputOperation`](../interfaces/UtilInputOperation.md)\<`VALUE`, `HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

[`UtilInputOperation`](../interfaces/UtilInputOperation.md)\<`VALUE`, `HTMLInputElement`\>

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[newOperation](EShapeActionRuntimeMiscInput.md#newoperation)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L34)

___

### newUtil

▸ **newUtil**(`shape`, `runtime`): `UTIL`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`UTIL`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[newUtil](EShapeActionRuntimeMiscInput.md#newutil)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L53)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[newUtilOptions](EShapeActionRuntimeMiscInput.md#newutiloptions)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L113)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onBlur](EShapeActionRuntimeMiscInput.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L226)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onClick](EShapeActionRuntimeMiscInput.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L42)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onDblClick](EShapeActionRuntimeMiscInput.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L238)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onDown](EShapeActionRuntimeMiscInput.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:234](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L234)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onDowning](EShapeActionRuntimeMiscInput.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L230)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onFocus](EShapeActionRuntimeMiscInput.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L222)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onKeyDown](EShapeActionRuntimeMiscInput.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L91)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onKeyUp](EShapeActionRuntimeMiscInput.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L95)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onMove](EShapeActionRuntimeMiscInput.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L63)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onOut](EShapeActionRuntimeMiscInput.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L71)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onOver](EShapeActionRuntimeMiscInput.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L67)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onPressed](EShapeActionRuntimeMiscInput.md#onpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L83)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRender](EShapeActionRuntimeMiscInput.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L218)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onResize](EShapeActionRuntimeMiscInput.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L30)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRightClick](EShapeActionRuntimeMiscInput.md#onrightclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L99)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRightDown](EShapeActionRuntimeMiscInput.md#onrightdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L107)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRightDowning](EShapeActionRuntimeMiscInput.md#onrightdowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L103)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRightPressed](EShapeActionRuntimeMiscInput.md#onrightpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L119)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRightUnpressed](EShapeActionRuntimeMiscInput.md#onrightunpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L123)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRightUp](EShapeActionRuntimeMiscInput.md#onrightup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L111)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onRightUpOutside](EShapeActionRuntimeMiscInput.md#onrightupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L115)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onUnpressed](EShapeActionRuntimeMiscInput.md#onunpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L87)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onUp](EShapeActionRuntimeMiscInput.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L75)

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

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onUpOutside](EShapeActionRuntimeMiscInput.md#onupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L79)

___

### onValueChange

▸ **onValueChange**(`shape`, `runtime`, `newValue`, `oldValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |
| `newValue` | `VALUE` |
| `oldValue` | `VALUE` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[onValueChange](EShapeActionRuntimeMiscInput.md#onvaluechange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L116)

___

### toWhen

▸ **toWhen**(`shape`, `runtime`): `undefined` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen-1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`undefined` \| [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen-1)

#### Inherited from

[EShapeActionRuntimeMiscInput](EShapeActionRuntimeMiscInput.md).[toWhen](EShapeActionRuntimeMiscInput.md#towhen)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L133)
