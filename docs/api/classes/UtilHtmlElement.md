[Winter Cardinal UI - v0.155.0](../index.md) / UtilHtmlElement

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
- [getAfter](UtilHtmlElement.md#getafter)
- [getBefore](UtilHtmlElement.md#getbefore)
- [getClipper](UtilHtmlElement.md#getclipper)
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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L186)

## Properties

### \_after

• `Protected` `Optional` **\_after**: ``null`` \| `HTMLDivElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L175)

___

### \_before

• `Protected` `Optional` **\_before**: ``null`` \| `HTMLDivElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L172)

___

### \_clipper

• `Protected` `Optional` **\_clipper**: ``null`` \| `HTMLDivElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L164)

___

### \_clipperRectResult

• `Protected` `Optional` **\_clipperRectResult**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L165)

___

### \_data

• `Protected` **\_data**: [`UtilHtmlElementData`](../interfaces/UtilHtmlElementData.md)<`ELEMENT`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L160)

___

### \_doSelectBound

• `Protected` **\_doSelectBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L180)

___

### \_element

• `Protected` `Optional` **\_element**: ``null`` \| `ELEMENT`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L167)

___

### \_elementRectResult

• `Protected` `Optional` **\_elementRectResult**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L168)

___

### \_isElementShown

• `Protected` **\_isElementShown**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L169)

___

### \_isStartRequested

• `Protected` **\_isStartRequested**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L181)

___

### \_isStarted

• `Protected` **\_isStarted**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L178)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L176)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L173)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L170)

___

### \_onPostRenderBound

• `Protected` **\_onPostRenderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L184)

___

### \_operation

• `Protected` **\_operation**: `OPERATION`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L159)

___

### \_point

• `Protected` `Optional` **\_point**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L162)

___

### \_rendererBound

• `Protected` `Optional` **\_rendererBound**: `Renderer`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L183)

___

### \_target

• `Protected` **\_target**: `TARGET`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L158)

___

### \_wasStarted

• `Protected` **\_wasStarted**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L179)

## Accessors

### element

• `get` **element**(): ``null`` \| `ELEMENT`

#### Returns

``null`` \| `ELEMENT`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:313](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L313)

___

### when

• `get` **when**(): [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Returns

[`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:317](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L317)

## Methods

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:541](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L541)

___

### doSelect

▸ `Protected` **doSelect**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:529](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L529)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L441)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:696](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L696)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:644](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L644)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:635](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L635)

___

### getClipper

▸ `Protected` **getClipper**(): ``null`` \| `HTMLDivElement`

#### Returns

``null`` \| `HTMLDivElement`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:616](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L616)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:433](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L433)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:626](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L626)

___

### getElementMatrix

▸ `Protected` **getElementMatrix**(): ``null`` \| `Matrix`

#### Returns

``null`` \| `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:429](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L429)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:421](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L421)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L404)

___

### isStartable

▸ **isStartable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L381)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:307](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L307)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L294)

___

### newClipperStyler

▸ `Protected` **newClipperStyler**(`theme`): (`target`: `HTMLDivElement`, `state`: [`DBaseStateSet`](../interfaces/DBaseStateSet.md), `padding`: ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding), `elementRect`: ``null`` \| `Rectangle`, `elementMatrix`: ``null`` \| `Matrix`, `clipperRect`: ``null`` \| `Rectangle`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`fn`

▸ (`target`, `state`, `padding`, `elementRect`, `elementMatrix`, `clipperRect`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `HTMLDivElement` |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L267)

___

### newElementStyler

▸ `Protected` **newElementStyler**(`theme`): (`target`: `ELEMENT`, `state`: [`DBaseStateSet`](../interfaces/DBaseStateSet.md), `padding`: ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding), `elementRect`: ``null`` \| `Rectangle`, `elementMatrix`: ``null`` \| `Matrix`, `clipperRect`: ``null`` \| `Rectangle`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |

#### Returns

`fn`

▸ (`target`, `state`, `padding`, `elementRect`, `elementMatrix`, `clipperRect`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `ELEMENT` |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L237)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:666](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L666)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:653](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L653)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L367)

___

### onCancel

▸ `Protected` **onCancel**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L592)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:345](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L345)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L335)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:321](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L321)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L596)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L606)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:679](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L679)

___

### onEnd

▸ `Protected` **onEnd**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:692](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L692)

___

### onEndByBlur

▸ `Protected` **onEndByBlur**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:688](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L688)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:356](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L356)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:408](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L408)

___

### onStart

▸ `Protected` **onStart**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:525](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L525)

___

### select

▸ **select**(): [`UtilHtmlElement`](UtilHtmlElement.md)<`ELEMENT`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

#### Returns

[`UtilHtmlElement`](UtilHtmlElement.md)<`ELEMENT`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:701](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L701)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:392](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L392)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L300)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L287)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:257](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L257)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:708](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L708)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L216)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L227)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:521](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L521)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:734](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L734)

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

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:785](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L785)
