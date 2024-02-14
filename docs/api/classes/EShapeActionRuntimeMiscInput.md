[Winter Cardinal UI - v0.407.0](../index.md) / EShapeActionRuntimeMiscInput

# Class: EShapeActionRuntimeMiscInput\<VALUE, ELEMENT, UTIL\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `ELEMENT` | extends `HTMLInputElement` \| `HTMLTextAreaElement` = `HTMLInputElement` \| `HTMLTextAreaElement` |
| `UTIL` | extends [`UtilInput`](UtilInput.md)\<`VALUE`, `ELEMENT`\> = [`UtilInput`](UtilInput.md)\<`VALUE`, `ELEMENT`\> |

## Hierarchy

- `EShapeActionRuntimeMiscHtmlElementBase`\<`ELEMENT`, `UTIL`\>

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
- [onClick](EShapeActionRuntimeMiscInput.md#onclick)
- [onDblClick](EShapeActionRuntimeMiscInput.md#ondblclick)
- [onDown](EShapeActionRuntimeMiscInput.md#ondown)
- [onDowning](EShapeActionRuntimeMiscInput.md#ondowning)
- [onFocus](EShapeActionRuntimeMiscInput.md#onfocus)
- [onKeyDown](EShapeActionRuntimeMiscInput.md#onkeydown)
- [onKeyUp](EShapeActionRuntimeMiscInput.md#onkeyup)
- [onMove](EShapeActionRuntimeMiscInput.md#onmove)
- [onOut](EShapeActionRuntimeMiscInput.md#onout)
- [onOver](EShapeActionRuntimeMiscInput.md#onover)
- [onPressed](EShapeActionRuntimeMiscInput.md#onpressed)
- [onRender](EShapeActionRuntimeMiscInput.md#onrender)
- [onResize](EShapeActionRuntimeMiscInput.md#onresize)
- [onRightClick](EShapeActionRuntimeMiscInput.md#onrightclick)
- [onRightDown](EShapeActionRuntimeMiscInput.md#onrightdown)
- [onRightDowning](EShapeActionRuntimeMiscInput.md#onrightdowning)
- [onRightPressed](EShapeActionRuntimeMiscInput.md#onrightpressed)
- [onRightUnpressed](EShapeActionRuntimeMiscInput.md#onrightunpressed)
- [onRightUp](EShapeActionRuntimeMiscInput.md#onrightup)
- [onRightUpOutside](EShapeActionRuntimeMiscInput.md#onrightupoutside)
- [onUnpressed](EShapeActionRuntimeMiscInput.md#onunpressed)
- [onUp](EShapeActionRuntimeMiscInput.md#onup)
- [onUpOutside](EShapeActionRuntimeMiscInput.md#onupoutside)
- [onValueChange](EShapeActionRuntimeMiscInput.md#onvaluechange)
- [toWhen](EShapeActionRuntimeMiscInput.md#towhen)

## Constructors

### constructor

• **new EShapeActionRuntimeMiscInput**\<`VALUE`, `ELEMENT`, `UTIL`\>(`value`): [`EShapeActionRuntimeMiscInput`](EShapeActionRuntimeMiscInput.md)\<`VALUE`, `ELEMENT`, `UTIL`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `ELEMENT` | extends `HTMLInputElement` \| `HTMLTextAreaElement` = `HTMLInputElement` \| `HTMLTextAreaElement` |
| `UTIL` | extends [`UtilInput`](UtilInput.md)\<`VALUE`, `ELEMENT`, [`UtilInputTarget`](../interfaces/UtilInputTarget.md), [`UtilInputOperation`](../interfaces/UtilInputOperation.md)\<`VALUE`, `ELEMENT`\>, [`UtilThemeInput`](../interfaces/UtilThemeInput.md)\<`VALUE`, `ELEMENT`\>, [`UtilInputOptions`](../interfaces/UtilInputOptions.md)\<`VALUE`, `ELEMENT`\>\> = [`UtilInput`](UtilInput.md)\<`VALUE`, `ELEMENT`, [`UtilInputTarget`](../interfaces/UtilInputTarget.md), [`UtilInputOperation`](../interfaces/UtilInputOperation.md)\<`VALUE`, `ELEMENT`\>, [`UtilThemeInput`](../interfaces/UtilThemeInput.md)\<`VALUE`, `ELEMENT`\>, [`UtilInputOptions`](../interfaces/UtilInputOptions.md)\<`VALUE`, `ELEMENT`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueMisc`](EShapeActionValueMisc.md) |

#### Returns

[`EShapeActionRuntimeMiscInput`](EShapeActionRuntimeMiscInput.md)\<`VALUE`, `ELEMENT`, `UTIL`\>

#### Overrides

EShapeActionRuntimeMiscHtmlElementBase\&lt;ELEMENT, UTIL\&gt;.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L28)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<``null`` \| `string`\>

#### Inherited from

EShapeActionRuntimeMiscHtmlElementBase.condition

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L34)

___

### onInputAction

• `Protected` **onInputAction**: [`EShapeActionValueOnInputAction`](../index.md#eshapeactionvalueoninputaction-1)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L26)

___

### reset

• `Readonly` **reset**: `number`

#### Inherited from

EShapeActionRuntimeMiscHtmlElementBase.reset

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L16)

___

### target

• `Protected` `Readonly` **target**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<``null`` \| `string`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L25)

___

### utils

• `Protected` **utils**: `Map`\<[`EShape`](../interfaces/EShape.md), `UTIL`\>

#### Inherited from

EShapeActionRuntimeMiscHtmlElementBase.utils

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L35)

___

### WORK

▪ `Static` `Protected` `Optional` **WORK**: `Point`

#### Inherited from

EShapeActionRuntimeMiscHtmlElementBase.WORK

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

EShapeActionRuntimeMiscHtmlElementBase.containsPoint

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

EShapeActionRuntimeMiscHtmlElementBase.execute

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

EShapeActionRuntimeMiscHtmlElementBase.getClipperExRects

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

EShapeActionRuntimeMiscHtmlElementBase.getClipperToRect

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

EShapeActionRuntimeMiscHtmlElementBase.getElementMatrix

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

EShapeActionRuntimeMiscHtmlElementBase.getElementRect

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

#### Overrides

EShapeActionRuntimeMiscHtmlElementBase.getPadding

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

EShapeActionRuntimeMiscHtmlElementBase.getUtil

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

EShapeActionRuntimeMiscHtmlElementBase.initialize

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L22)

___

### newElementCreator

▸ **newElementCreator**(`shape`, `runtime`): `undefined` \| [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`ELEMENT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

`undefined` \| [`UtilHtmlElementCreator`](../index.md#utilhtmlelementcreator)\<`ELEMENT`\>

#### Overrides

EShapeActionRuntimeMiscHtmlElementBase.newElementCreator

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-input.ts#L105)

___

### newOperation

▸ **newOperation**(`shape`, `runtime`): [`UtilInputOperation`](../interfaces/UtilInputOperation.md)\<`VALUE`, `ELEMENT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

[`UtilInputOperation`](../interfaces/UtilInputOperation.md)\<`VALUE`, `ELEMENT`\>

#### Overrides

EShapeActionRuntimeMiscHtmlElementBase.newOperation

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

EShapeActionRuntimeMiscHtmlElementBase.newUtil

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L53)

___

### newUtilOptions

▸ **newUtilOptions**(`shape`, `runtime`): [`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)\<`ELEMENT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

[`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)\<`ELEMENT`\>

#### Inherited from

EShapeActionRuntimeMiscHtmlElementBase.newUtilOptions

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

EShapeActionRuntimeMiscHtmlElementBase.onBlur

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

EShapeActionRuntimeMiscHtmlElementBase.onClick

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

EShapeActionRuntimeMiscHtmlElementBase.onDblClick

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

EShapeActionRuntimeMiscHtmlElementBase.onDown

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

EShapeActionRuntimeMiscHtmlElementBase.onDowning

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

EShapeActionRuntimeMiscHtmlElementBase.onFocus

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

EShapeActionRuntimeMiscHtmlElementBase.onKeyDown

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

EShapeActionRuntimeMiscHtmlElementBase.onKeyUp

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

EShapeActionRuntimeMiscHtmlElementBase.onMove

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

EShapeActionRuntimeMiscHtmlElementBase.onOut

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

EShapeActionRuntimeMiscHtmlElementBase.onOver

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

EShapeActionRuntimeMiscHtmlElementBase.onPressed

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

EShapeActionRuntimeMiscHtmlElementBase.onRender

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

EShapeActionRuntimeMiscHtmlElementBase.onResize

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

EShapeActionRuntimeMiscHtmlElementBase.onRightClick

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

EShapeActionRuntimeMiscHtmlElementBase.onRightDown

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

EShapeActionRuntimeMiscHtmlElementBase.onRightDowning

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

EShapeActionRuntimeMiscHtmlElementBase.onRightPressed

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

EShapeActionRuntimeMiscHtmlElementBase.onRightUnpressed

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

EShapeActionRuntimeMiscHtmlElementBase.onRightUp

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

EShapeActionRuntimeMiscHtmlElementBase.onRightUpOutside

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

EShapeActionRuntimeMiscHtmlElementBase.onUnpressed

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

EShapeActionRuntimeMiscHtmlElementBase.onUp

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

EShapeActionRuntimeMiscHtmlElementBase.onUpOutside

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

EShapeActionRuntimeMiscHtmlElementBase.toWhen

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L133)
