[Winter Cardinal UI - v0.407.0](../index.md) / EShapeActionRuntimeMiscHtmlElement

# Class: EShapeActionRuntimeMiscHtmlElement\<ELEMENT, UTIL\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ELEMENT` | extends `HTMLElement` = `HTMLElement` |
| `UTIL` | extends [`UtilHtmlElement`](UtilHtmlElement.md)\<`ELEMENT`\> = [`UtilHtmlElement`](UtilHtmlElement.md)\<`ELEMENT`\> |

## Hierarchy

- `EShapeActionRuntimeMiscHtmlElementBase`\<`ELEMENT`, `UTIL`\>

  ↳ **`EShapeActionRuntimeMiscHtmlElement`**

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimeMiscHtmlElement.md#constructor)

### Properties

- [condition](EShapeActionRuntimeMiscHtmlElement.md#condition)
- [elementCreator](EShapeActionRuntimeMiscHtmlElement.md#elementcreator)
- [noPointerEvent](EShapeActionRuntimeMiscHtmlElement.md#nopointerevent)
- [reset](EShapeActionRuntimeMiscHtmlElement.md#reset)
- [utils](EShapeActionRuntimeMiscHtmlElement.md#utils)
- [WORK](EShapeActionRuntimeMiscHtmlElement.md#work)

### Methods

- [containsPoint](EShapeActionRuntimeMiscHtmlElement.md#containspoint)
- [execute](EShapeActionRuntimeMiscHtmlElement.md#execute)
- [getClipperExRects](EShapeActionRuntimeMiscHtmlElement.md#getclipperexrects)
- [getClipperToRect](EShapeActionRuntimeMiscHtmlElement.md#getclippertorect)
- [getElementMatrix](EShapeActionRuntimeMiscHtmlElement.md#getelementmatrix)
- [getElementRect](EShapeActionRuntimeMiscHtmlElement.md#getelementrect)
- [getPadding](EShapeActionRuntimeMiscHtmlElement.md#getpadding)
- [getUtil](EShapeActionRuntimeMiscHtmlElement.md#getutil)
- [initialize](EShapeActionRuntimeMiscHtmlElement.md#initialize)
- [newElementCreator](EShapeActionRuntimeMiscHtmlElement.md#newelementcreator)
- [newOperation](EShapeActionRuntimeMiscHtmlElement.md#newoperation)
- [newUtil](EShapeActionRuntimeMiscHtmlElement.md#newutil)
- [newUtilOptions](EShapeActionRuntimeMiscHtmlElement.md#newutiloptions)
- [onBlur](EShapeActionRuntimeMiscHtmlElement.md#onblur)
- [onClick](EShapeActionRuntimeMiscHtmlElement.md#onclick)
- [onDblClick](EShapeActionRuntimeMiscHtmlElement.md#ondblclick)
- [onDown](EShapeActionRuntimeMiscHtmlElement.md#ondown)
- [onDowning](EShapeActionRuntimeMiscHtmlElement.md#ondowning)
- [onFocus](EShapeActionRuntimeMiscHtmlElement.md#onfocus)
- [onKeyDown](EShapeActionRuntimeMiscHtmlElement.md#onkeydown)
- [onKeyUp](EShapeActionRuntimeMiscHtmlElement.md#onkeyup)
- [onMove](EShapeActionRuntimeMiscHtmlElement.md#onmove)
- [onOut](EShapeActionRuntimeMiscHtmlElement.md#onout)
- [onOver](EShapeActionRuntimeMiscHtmlElement.md#onover)
- [onPressed](EShapeActionRuntimeMiscHtmlElement.md#onpressed)
- [onRender](EShapeActionRuntimeMiscHtmlElement.md#onrender)
- [onResize](EShapeActionRuntimeMiscHtmlElement.md#onresize)
- [onRightClick](EShapeActionRuntimeMiscHtmlElement.md#onrightclick)
- [onRightDown](EShapeActionRuntimeMiscHtmlElement.md#onrightdown)
- [onRightDowning](EShapeActionRuntimeMiscHtmlElement.md#onrightdowning)
- [onRightPressed](EShapeActionRuntimeMiscHtmlElement.md#onrightpressed)
- [onRightUnpressed](EShapeActionRuntimeMiscHtmlElement.md#onrightunpressed)
- [onRightUp](EShapeActionRuntimeMiscHtmlElement.md#onrightup)
- [onRightUpOutside](EShapeActionRuntimeMiscHtmlElement.md#onrightupoutside)
- [onUnpressed](EShapeActionRuntimeMiscHtmlElement.md#onunpressed)
- [onUp](EShapeActionRuntimeMiscHtmlElement.md#onup)
- [onUpOutside](EShapeActionRuntimeMiscHtmlElement.md#onupoutside)
- [toWhen](EShapeActionRuntimeMiscHtmlElement.md#towhen)

## Constructors

### constructor

• **new EShapeActionRuntimeMiscHtmlElement**\<`ELEMENT`, `UTIL`\>(`value`): [`EShapeActionRuntimeMiscHtmlElement`](EShapeActionRuntimeMiscHtmlElement.md)\<`ELEMENT`, `UTIL`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ELEMENT` | extends `HTMLElement` = `HTMLElement` |
| `UTIL` | extends [`UtilHtmlElement`](UtilHtmlElement.md)\<`ELEMENT`, [`UtilHtmlElementTarget`](../interfaces/UtilHtmlElementTarget.md), [`UtilHtmlElementOperation`](../interfaces/UtilHtmlElementOperation.md)\<`ELEMENT`\>, [`UtilThemeHtmlElement`](../interfaces/UtilThemeHtmlElement.md)\<`ELEMENT`\>, [`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)\<`ELEMENT`\>\> = [`UtilHtmlElement`](UtilHtmlElement.md)\<`ELEMENT`, [`UtilHtmlElementTarget`](../interfaces/UtilHtmlElementTarget.md), [`UtilHtmlElementOperation`](../interfaces/UtilHtmlElementOperation.md)\<`ELEMENT`\>, [`UtilThemeHtmlElement`](../interfaces/UtilThemeHtmlElement.md)\<`ELEMENT`\>, [`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)\<`ELEMENT`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValueMisc`](EShapeActionValueMisc.md) |

#### Returns

[`EShapeActionRuntimeMiscHtmlElement`](EShapeActionRuntimeMiscHtmlElement.md)\<`ELEMENT`, `UTIL`\>

#### Overrides

EShapeActionRuntimeMiscHtmlElementBase\&lt;ELEMENT, UTIL\&gt;.constructor

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element.ts#L24)

## Properties

### condition

• `Protected` `Readonly` **condition**: [`EShapeActionExpression`](../index.md#eshapeactionexpression)\<``null`` \| `string`\>

#### Inherited from

EShapeActionRuntimeMiscHtmlElementBase.condition

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L34)

___

### elementCreator

• `Protected` `Optional` **elementCreator**: [`EShapeActionExpressionWithParameter`](../index.md#eshapeactionexpressionwithparameter)\<``null`` \| `ELEMENT`, `HTMLElement`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element.ts#L21)

___

### noPointerEvent

• `Protected` **noPointerEvent**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element.ts#L22)

___

### reset

• `Readonly` **reset**: `number`

#### Inherited from

EShapeActionRuntimeMiscHtmlElementBase.reset

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L16)

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

#### Inherited from

EShapeActionRuntimeMiscHtmlElementBase.getPadding

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L150)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element.ts#L38)

___

### newOperation

▸ **newOperation**(`shape`, `runtime`): [`UtilHtmlElementOperation`](../interfaces/UtilHtmlElementOperation.md)\<`ELEMENT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

[`UtilHtmlElementOperation`](../interfaces/UtilHtmlElementOperation.md)\<`ELEMENT`\>

#### Inherited from

EShapeActionRuntimeMiscHtmlElementBase.newOperation

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element-base.ts#L62)

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

#### Overrides

EShapeActionRuntimeMiscHtmlElementBase.newUtil

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-misc-html-element.ts#L31)

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
