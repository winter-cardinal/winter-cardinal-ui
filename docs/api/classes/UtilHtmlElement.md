[Winter Cardinal UI - v0.205.1](../index.md) / UtilHtmlElement

# Class: UtilHtmlElement<ELEMENT, TARGET, OPERATION, THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ELEMENT` | extends `HTMLElement` = `HTMLElement` |
| `TARGET` | extends [`UtilHtmlElementTarget`](../interfaces/UtilHtmlElementTarget.md) = [`UtilHtmlElementTarget`](../interfaces/UtilHtmlElementTarget.md) |
| `OPERATION` | extends [`UtilHtmlElementOperation`](../interfaces/UtilHtmlElementOperation.md)<`ELEMENT`\> = [`UtilHtmlElementOperation`](../interfaces/UtilHtmlElementOperation.md)<`ELEMENT`\> |
| `THEME` | extends [`UtilThemeHtmlElement`](../interfaces/UtilThemeHtmlElement.md)<`ELEMENT`\> = [`UtilThemeHtmlElement`](../interfaces/UtilThemeHtmlElement.md)<`ELEMENT`\> |
| `OPTIONS` | extends [`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)<`ELEMENT`\> = [`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)<`ELEMENT`\> |

## Hierarchy

- **`UtilHtmlElement`**

  ↳ [`UtilInput`](UtilInput.md)

## Table of contents

### Constructors

- [constructor](UtilHtmlElement.md#constructor)

### Properties

- [\_after](UtilHtmlElement.md#_after)
- [\_before](UtilHtmlElement.md#_before)
- [\_clipper](UtilHtmlElement.md#_clipper)
- [\_clipperEx](UtilHtmlElement.md#_clipperex)
- [\_clipperExRects](UtilHtmlElement.md#_clipperexrects)
- [\_clipperRectResult](UtilHtmlElement.md#_clipperrectresult)
- [\_data](UtilHtmlElement.md#_data)
- [\_doSelectBound](UtilHtmlElement.md#_doselectbound)
- [\_element](UtilHtmlElement.md#_element)
- [\_elementRectResult](UtilHtmlElement.md#_elementrectresult)
- [\_isElementShown](UtilHtmlElement.md#_iselementshown)
- [\_isStartRequested](UtilHtmlElement.md#_isstartrequested)
- [\_isStarted](UtilHtmlElement.md#_isstarted)
- [\_onAfterFocusBound](UtilHtmlElement.md#_onafterfocusbound)
- [\_onBeforeFocusBound](UtilHtmlElement.md#_onbeforefocusbound)
- [\_onElementFocusBound](UtilHtmlElement.md#_onelementfocusbound)
- [\_onPostRenderBound](UtilHtmlElement.md#_onpostrenderbound)
- [\_operation](UtilHtmlElement.md#_operation)
- [\_point](UtilHtmlElement.md#_point)
- [\_rendererBound](UtilHtmlElement.md#_rendererbound)
- [\_target](UtilHtmlElement.md#_target)
- [\_wasStarted](UtilHtmlElement.md#_wasstarted)

### Accessors

- [element](UtilHtmlElement.md#element)
- [when](UtilHtmlElement.md#when)

### Methods

- [cancel](UtilHtmlElement.md#cancel)
- [doSelect](UtilHtmlElement.md#doselect)
- [doStart](UtilHtmlElement.md#dostart)
- [end](UtilHtmlElement.md#end)
- [fillClipperExRects](UtilHtmlElement.md#fillclipperexrects)
- [getAfter](UtilHtmlElement.md#getafter)
- [getBefore](UtilHtmlElement.md#getbefore)
- [getClipper](UtilHtmlElement.md#getclipper)
- [getClipperEx](UtilHtmlElement.md#getclipperex)
- [getClipperExRects](UtilHtmlElement.md#getclipperexrects)
- [getClipperRect](UtilHtmlElement.md#getclipperrect)
- [getElement](UtilHtmlElement.md#getelement)
- [getElementMatrix](UtilHtmlElement.md#getelementmatrix)
- [getElementRect](UtilHtmlElement.md#getelementrect)
- [isShown](UtilHtmlElement.md#isshown)
- [isStartable](UtilHtmlElement.md#isstartable)
- [newAfterStyler](UtilHtmlElement.md#newafterstyler)
- [newBeforeStyler](UtilHtmlElement.md#newbeforestyler)
- [newClipperStyler](UtilHtmlElement.md#newclipperstyler)
- [newElementStyler](UtilHtmlElement.md#newelementstyler)
- [onAfterFocus](UtilHtmlElement.md#onafterfocus)
- [onBeforeFocus](UtilHtmlElement.md#onbeforefocus)
- [onBlur](UtilHtmlElement.md#onblur)
- [onCancel](UtilHtmlElement.md#oncancel)
- [onDblClick](UtilHtmlElement.md#ondblclick)
- [onDown](UtilHtmlElement.md#ondown)
- [onDowning](UtilHtmlElement.md#ondowning)
- [onElementAttached](UtilHtmlElement.md#onelementattached)
- [onElementDetached](UtilHtmlElement.md#onelementdetached)
- [onElementFocus](UtilHtmlElement.md#onelementfocus)
- [onEnd](UtilHtmlElement.md#onend)
- [onEndByBlur](UtilHtmlElement.md#onendbyblur)
- [onFocus](UtilHtmlElement.md#onfocus)
- [onRender](UtilHtmlElement.md#onrender)
- [onStart](UtilHtmlElement.md#onstart)
- [select](UtilHtmlElement.md#select)
- [start](UtilHtmlElement.md#start)
- [toAfterData](UtilHtmlElement.md#toafterdata)
- [toBeforeData](UtilHtmlElement.md#tobeforedata)
- [toClipperData](UtilHtmlElement.md#toclipperdata)
- [toClipperRectAdjusted](UtilHtmlElement.md#toclipperrectadjusted)
- [toData](UtilHtmlElement.md#todata)
- [toElementData](UtilHtmlElement.md#toelementdata)
- [toElementFocused](UtilHtmlElement.md#toelementfocused)
- [updateElement](UtilHtmlElement.md#updateelement)
- [getClipperRect](UtilHtmlElement.md#getclipperrect)

## Constructors

### constructor

• **new UtilHtmlElement**<`ELEMENT`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>(`target`, `operation`, `theme`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ELEMENT` | extends `HTMLElement` = `HTMLElement` |
| `TARGET` | extends [`UtilHtmlElementTarget`](../interfaces/UtilHtmlElementTarget.md) = [`UtilHtmlElementTarget`](../interfaces/UtilHtmlElementTarget.md) |
| `OPERATION` | extends [`UtilHtmlElementOperation`](../interfaces/UtilHtmlElementOperation.md)<`ELEMENT`, `OPERATION`\> = [`UtilHtmlElementOperation`](../interfaces/UtilHtmlElementOperation.md)<`ELEMENT`\> |
| `THEME` | extends [`UtilThemeHtmlElement`](../interfaces/UtilThemeHtmlElement.md)<`ELEMENT`, `THEME`\> = [`UtilThemeHtmlElement`](../interfaces/UtilThemeHtmlElement.md)<`ELEMENT`\> |
| `OPTIONS` | extends [`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)<`ELEMENT`, `OPTIONS`\> = [`UtilHtmlElementOptions`](../interfaces/UtilHtmlElementOptions.md)<`ELEMENT`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` |
| `operation` | `OPERATION` |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L200)

## Properties

### \_after

• `Protected` `Optional` **\_after**: ``null`` \| `HTMLDivElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L189)

___

### \_before

• `Protected` `Optional` **\_before**: ``null`` \| `HTMLDivElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L186)

___

### \_clipper

• `Protected` `Optional` **\_clipper**: ``null`` \| `HTMLDivElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L175)

___

### \_clipperEx

• `Protected` `Optional` **\_clipperEx**: ``null`` \| [`UtilHtmlElementClipperEx`](../interfaces/UtilHtmlElementClipperEx.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L178)

___

### \_clipperExRects

• `Protected` `Optional` **\_clipperExRects**: ``null`` \| [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L179)

___

### \_clipperRectResult

• `Protected` `Optional` **\_clipperRectResult**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L176)

___

### \_data

• `Protected` **\_data**: [`UtilHtmlElementData`](../interfaces/UtilHtmlElementData.md)<`ELEMENT`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L171)

___

### \_doSelectBound

• `Protected` **\_doSelectBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L194)

___

### \_element

• `Protected` `Optional` **\_element**: ``null`` \| `ELEMENT`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L181)

___

### \_elementRectResult

• `Protected` `Optional` **\_elementRectResult**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L182)

___

### \_isElementShown

• `Protected` **\_isElementShown**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L183)

___

### \_isStartRequested

• `Protected` **\_isStartRequested**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L195)

___

### \_isStarted

• `Protected` **\_isStarted**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L192)

___

### \_onAfterFocusBound

• `Protected` **\_onAfterFocusBound**: (`e`: `FocusEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `FocusEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L190)

___

### \_onBeforeFocusBound

• `Protected` **\_onBeforeFocusBound**: (`e`: `FocusEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `FocusEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L187)

___

### \_onElementFocusBound

• `Protected` **\_onElementFocusBound**: (`e`: `FocusEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `FocusEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L184)

___

### \_onPostRenderBound

• `Protected` **\_onPostRenderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L198)

___

### \_operation

• `Protected` **\_operation**: `OPERATION`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L170)

___

### \_point

• `Protected` `Optional` **\_point**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L173)

___

### \_rendererBound

• `Protected` `Optional` **\_rendererBound**: `Renderer`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L197)

___

### \_target

• `Protected` **\_target**: `TARGET`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L169)

___

### \_wasStarted

• `Protected` **\_wasStarted**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L193)

## Accessors

### element

• `get` **element**(): ``null`` \| `ELEMENT`

#### Returns

``null`` \| `ELEMENT`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:332](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L332)

___

### when

• `get` **when**(): [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Returns

[`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:336](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L336)

## Methods

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:585](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L585)

___

### doSelect

▸ `Protected` **doSelect**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L573)

___

### doStart

▸ `Protected` **doStart**(`renderer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer?` | `Renderer` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L471)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L767)

___

### fillClipperExRects

▸ `Protected` **fillClipperExRects**(`resolution`, `result`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `number` |
| `result` | [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L460)

___

### getAfter

▸ `Protected` **getAfter**(`clipper`): ``null`` \| `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipper` | `HTMLDivElement` |

#### Returns

``null`` \| `HTMLDivElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:715](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L715)

___

### getBefore

▸ `Protected` **getBefore**(`clipper`): ``null`` \| `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipper` | `HTMLDivElement` |

#### Returns

``null`` \| `HTMLDivElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:706](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L706)

___

### getClipper

▸ `Protected` **getClipper**(): ``null`` \| `HTMLDivElement`

#### Returns

``null`` \| `HTMLDivElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:660](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L660)

___

### getClipperEx

▸ `Protected` **getClipperEx**(`clipper`): ``null`` \| [`UtilHtmlElementClipperEx`](../interfaces/UtilHtmlElementClipperEx.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipper` | `HTMLDivElement` |

#### Returns

``null`` \| [`UtilHtmlElementClipperEx`](../interfaces/UtilHtmlElementClipperEx.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L670)

___

### getClipperExRects

▸ `Protected` **getClipperExRects**(): ``null`` \| [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md)

#### Returns

``null`` \| [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:684](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L684)

___

### getClipperRect

▸ `Protected` **getClipperRect**(`resolution`): ``null`` \| `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `number` |

#### Returns

``null`` \| `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:452](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L452)

___

### getElement

▸ `Protected` **getElement**(`clipper`): ``null`` \| `ELEMENT`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipper` | `HTMLDivElement` |

#### Returns

``null`` \| `ELEMENT`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L697)

___

### getElementMatrix

▸ `Protected` **getElementMatrix**(): ``null`` \| `Matrix`

#### Returns

``null`` \| `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L448)

___

### getElementRect

▸ `Protected` **getElementRect**(`resolution`): ``null`` \| `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolution` | `number` |

#### Returns

``null`` \| `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L440)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L423)

___

### isStartable

▸ **isStartable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L400)

___

### newAfterStyler

▸ `Protected` **newAfterStyler**(`theme`): (`target`: `HTMLDivElement`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`fn`

▸ (`target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLDivElement` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:326](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L326)

___

### newBeforeStyler

▸ `Protected` **newBeforeStyler**(`theme`): (`target`: `HTMLDivElement`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`fn`

▸ (`target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLDivElement` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:313](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L313)

___

### newClipperStyler

▸ `Protected` **newClipperStyler**(`theme`): (`target`: `HTMLDivElement`, `state`: [`DBaseStateSet`](../interfaces/DBaseStateSet.md), `padding`: ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding), `elementRect`: ``null`` \| `Rectangle`, `elementMatrix`: ``null`` \| `Matrix`, `clipperRect`: ``null`` \| `Rectangle`, `clipperEx`: `undefined` \| ``null`` \| [`UtilHtmlElementClipperEx`](../interfaces/UtilHtmlElementClipperEx.md)) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`fn`

▸ (`target`, `state`, `padding`, `elementRect`, `elementMatrix`, `clipperRect`, `clipperEx`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLDivElement` |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |
| `clipperEx` | `undefined` \| ``null`` \| [`UtilHtmlElementClipperEx`](../interfaces/UtilHtmlElementClipperEx.md) |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L284)

___

### newElementStyler

▸ `Protected` **newElementStyler**(`theme`): (`target`: `ELEMENT`, `state`: [`DBaseStateSet`](../interfaces/DBaseStateSet.md), `padding`: ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding), `elementRect`: ``null`` \| `Rectangle`, `elementMatrix`: ``null`` \| `Matrix`, `clipperRect`: ``null`` \| `Rectangle`, `clipperEx`: `undefined` \| ``null`` \| [`UtilHtmlElementClipperEx`](../interfaces/UtilHtmlElementClipperEx.md)) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`fn`

▸ (`target`, `state`, `padding`, `elementRect`, `elementMatrix`, `clipperRect`, `clipperEx`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `ELEMENT` |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |
| `clipperEx` | `undefined` \| ``null`` \| [`UtilHtmlElementClipperEx`](../interfaces/UtilHtmlElementClipperEx.md) |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L251)

___

### onAfterFocus

▸ `Protected` **onAfterFocus**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `FocusEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:737](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L737)

___

### onBeforeFocus

▸ `Protected` **onBeforeFocus**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `FocusEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:724](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L724)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L386)

___

### onCancel

▸ `Protected` **onCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:636](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L636)

___

### onDblClick

▸ **onDblClick**(`e`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` \| `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:364](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L364)

___

### onDown

▸ **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L354)

___

### onDowning

▸ **onDowning**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:340](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L340)

___

### onElementAttached

▸ `Protected` **onElementAttached**(`element`, `before?`, `after?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `ELEMENT` |
| `before?` | ``null`` \| `HTMLDivElement` |
| `after?` | ``null`` \| `HTMLDivElement` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:640](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L640)

___

### onElementDetached

▸ `Protected` **onElementDetached**(`element`, `before?`, `after?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `ELEMENT` |
| `before?` | ``null`` \| `HTMLDivElement` |
| `after?` | ``null`` \| `HTMLDivElement` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:650](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L650)

___

### onElementFocus

▸ `Protected` **onElementFocus**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `FocusEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L750)

___

### onEnd

▸ `Protected` **onEnd**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:763](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L763)

___

### onEndByBlur

▸ `Protected` **onEndByBlur**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L759)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L375)

___

### onRender

▸ **onRender**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:427](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L427)

___

### onStart

▸ `Protected` **onStart**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L569)

___

### select

▸ **select**(): [`UtilHtmlElement`](UtilHtmlElement.md)<`ELEMENT`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

#### Returns

[`UtilHtmlElement`](UtilHtmlElement.md)<`ELEMENT`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L772)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L411)

___

### toAfterData

▸ `Protected` **toAfterData**(`theme`, `options?`): [`UtilHtmlElementAfterData`](../interfaces/UtilHtmlElementAfterData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS`[``"after"``] |

#### Returns

[`UtilHtmlElementAfterData`](../interfaces/UtilHtmlElementAfterData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L319)

___

### toBeforeData

▸ `Protected` **toBeforeData**(`theme`, `options?`): [`UtilHtmlElementBeforeData`](../interfaces/UtilHtmlElementBeforeData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS`[``"before"``] |

#### Returns

[`UtilHtmlElementBeforeData`](../interfaces/UtilHtmlElementBeforeData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L306)

___

### toClipperData

▸ `Protected` **toClipperData**(`theme`, `options?`): [`UtilHtmlElementClipperData`](../interfaces/UtilHtmlElementClipperData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS`[``"clipper"``] |

#### Returns

[`UtilHtmlElementClipperData`](../interfaces/UtilHtmlElementClipperData.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:273](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L273)

___

### toClipperRectAdjusted

▸ `Protected` **toClipperRectAdjusted**(`elementRect`, `elementMatrix`, `clipperRect`): ``null`` \| `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |

#### Returns

``null`` \| `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:779](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L779)

___

### toData

▸ `Protected` **toData**(`theme`, `options?`): [`UtilHtmlElementData`](../interfaces/UtilHtmlElementData.md)<`ELEMENT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`UtilHtmlElementData`](../interfaces/UtilHtmlElementData.md)<`ELEMENT`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L230)

___

### toElementData

▸ `Protected` **toElementData**(`theme`, `options?`): [`UtilHtmlElementElementData`](../interfaces/UtilHtmlElementElementData.md)<`ELEMENT`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS`[``"element"``] |

#### Returns

[`UtilHtmlElementElementData`](../interfaces/UtilHtmlElementElementData.md)<`ELEMENT`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L241)

___

### toElementFocused

▸ `Protected` **toElementFocused**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `ELEMENT` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:563](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L563)

___

### updateElement

▸ `Protected` **updateElement**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:805](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L805)

___

### getClipperRect

▸ `Static` **getClipperRect**(`parent`, `target`, `resolution`, `point`, `result`): ``null`` \| `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `unknown` |
| `target` | `unknown` |
| `resolution` | `number` |
| `point` | `Point` |
| `result` | `Rectangle` |

#### Returns

``null`` \| `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L868)
