[Winter Cardinal UI - v0.205.1](../index.md) / UtilInput

# Class: UtilInput<VALUE, ELEMENT, TARGET, OPERATION, THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `ELEMENT` | extends `HTMLInputElement` \| `HTMLTextAreaElement` = `HTMLInputElement` \| `HTMLTextAreaElement` |
| `TARGET` | extends [`UtilInputTarget`](../interfaces/UtilInputTarget.md) = [`UtilInputTarget`](../interfaces/UtilInputTarget.md) |
| `OPERATION` | extends [`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`VALUE`, `ELEMENT`\> = [`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`VALUE`, `ELEMENT`\> |
| `THEME` | extends [`UtilThemeInput`](../interfaces/UtilThemeInput.md)<`VALUE`, `ELEMENT`\> = [`UtilThemeInput`](../interfaces/UtilThemeInput.md)<`VALUE`, `ELEMENT`\> |
| `OPTIONS` | extends [`UtilInputOptions`](../interfaces/UtilInputOptions.md)<`VALUE`, `ELEMENT`\> = [`UtilInputOptions`](../interfaces/UtilInputOptions.md)<`VALUE`, `ELEMENT`\> |

## Hierarchy

- [`UtilHtmlElement`](UtilHtmlElement.md)<`ELEMENT`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

  ↳ **`UtilInput`**

  ↳↳ [`UtilInputInput`](UtilInputInput.md)

  ↳↳ [`UtilInputTextArea`](UtilInputTextArea.md)

## Table of contents

### Constructors

- [constructor](UtilInput.md#constructor)

### Properties

- [\_after](UtilInput.md#_after)
- [\_before](UtilInput.md#_before)
- [\_clipper](UtilInput.md#_clipper)
- [\_clipperEx](UtilInput.md#_clipperex)
- [\_clipperExRects](UtilInput.md#_clipperexrects)
- [\_clipperRectResult](UtilInput.md#_clipperrectresult)
- [\_data](UtilInput.md#_data)
- [\_description](UtilInput.md#_description)
- [\_doSelectBound](UtilInput.md#_doselectbound)
- [\_editingFormatter](UtilInput.md#_editingformatter)
- [\_editingUnformatter](UtilInput.md#_editingunformatter)
- [\_editingValidationResult](UtilInput.md#_editingvalidationresult)
- [\_editingValidator](UtilInput.md#_editingvalidator)
- [\_element](UtilInput.md#_element)
- [\_elementRectResult](UtilInput.md#_elementrectresult)
- [\_isElementShown](UtilInput.md#_iselementshown)
- [\_isStartRequested](UtilInput.md#_isstartrequested)
- [\_isStarted](UtilInput.md#_isstarted)
- [\_onAfterFocusBound](UtilInput.md#_onafterfocusbound)
- [\_onBeforeFocusBound](UtilInput.md#_onbeforefocusbound)
- [\_onElementFocusBound](UtilInput.md#_onelementfocusbound)
- [\_onInputChangeBound](UtilInput.md#_oninputchangebound)
- [\_onInputInputBound](UtilInput.md#_oninputinputbound)
- [\_onInputKeyDownBound](UtilInput.md#_oninputkeydownbound)
- [\_onPostRenderBound](UtilInput.md#_onpostrenderbound)
- [\_operation](UtilInput.md#_operation)
- [\_point](UtilInput.md#_point)
- [\_rendererBound](UtilInput.md#_rendererbound)
- [\_target](UtilInput.md#_target)
- [\_wasStarted](UtilInput.md#_wasstarted)

### Accessors

- [element](UtilInput.md#element)
- [when](UtilInput.md#when)

### Methods

- [applyTitle](UtilInput.md#applytitle)
- [cancel](UtilInput.md#cancel)
- [doSelect](UtilInput.md#doselect)
- [doStart](UtilInput.md#dostart)
- [end](UtilInput.md#end)
- [fillClipperExRects](UtilInput.md#fillclipperexrects)
- [fromValue](UtilInput.md#fromvalue)
- [getAfter](UtilInput.md#getafter)
- [getBefore](UtilInput.md#getbefore)
- [getClipper](UtilInput.md#getclipper)
- [getClipperEx](UtilInput.md#getclipperex)
- [getClipperExRects](UtilInput.md#getclipperexrects)
- [getClipperRect](UtilInput.md#getclipperrect)
- [getElement](UtilInput.md#getelement)
- [getElementMatrix](UtilInput.md#getelementmatrix)
- [getElementRect](UtilInput.md#getelementrect)
- [isShown](UtilInput.md#isshown)
- [isStartable](UtilInput.md#isstartable)
- [newAfterStyler](UtilInput.md#newafterstyler)
- [newBeforeStyler](UtilInput.md#newbeforestyler)
- [newClipperStyler](UtilInput.md#newclipperstyler)
- [newElementStyler](UtilInput.md#newelementstyler)
- [onAfterFocus](UtilInput.md#onafterfocus)
- [onBeforeFocus](UtilInput.md#onbeforefocus)
- [onBlur](UtilInput.md#onblur)
- [onCancel](UtilInput.md#oncancel)
- [onDblClick](UtilInput.md#ondblclick)
- [onDown](UtilInput.md#ondown)
- [onDowning](UtilInput.md#ondowning)
- [onElementAttached](UtilInput.md#onelementattached)
- [onElementDetached](UtilInput.md#onelementdetached)
- [onElementFocus](UtilInput.md#onelementfocus)
- [onEnd](UtilInput.md#onend)
- [onEndByBlur](UtilInput.md#onendbyblur)
- [onFocus](UtilInput.md#onfocus)
- [onInputChange](UtilInput.md#oninputchange)
- [onInputInput](UtilInput.md#oninputinput)
- [onInputKeyDown](UtilInput.md#oninputkeydown)
- [onRender](UtilInput.md#onrender)
- [onStart](UtilInput.md#onstart)
- [select](UtilInput.md#select)
- [start](UtilInput.md#start)
- [toAfterData](UtilInput.md#toafterdata)
- [toBeforeData](UtilInput.md#tobeforedata)
- [toClipperData](UtilInput.md#toclipperdata)
- [toClipperRectAdjusted](UtilInput.md#toclipperrectadjusted)
- [toData](UtilInput.md#todata)
- [toElementData](UtilInput.md#toelementdata)
- [toElementFocused](UtilInput.md#toelementfocused)
- [toValue](UtilInput.md#tovalue)
- [updateElement](UtilInput.md#updateelement)
- [validate](UtilInput.md#validate)
- [getClipperRect](UtilInput.md#getclipperrect)

## Constructors

### constructor

• **new UtilInput**<`VALUE`, `ELEMENT`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>(`target`, `operation`, `theme`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `ELEMENT` | extends `HTMLInputElement` \| `HTMLTextAreaElement` = `HTMLInputElement` \| `HTMLTextAreaElement` |
| `TARGET` | extends [`UtilInputTarget`](../interfaces/UtilInputTarget.md) = [`UtilInputTarget`](../interfaces/UtilInputTarget.md) |
| `OPERATION` | extends [`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`VALUE`, `ELEMENT`, `OPERATION`\> = [`UtilInputOperation`](../interfaces/UtilInputOperation.md)<`VALUE`, `ELEMENT`\> |
| `THEME` | extends [`UtilThemeInput`](../interfaces/UtilThemeInput.md)<`VALUE`, `ELEMENT`, `THEME`\> = [`UtilThemeInput`](../interfaces/UtilThemeInput.md)<`VALUE`, `ELEMENT`\> |
| `OPTIONS` | extends [`UtilInputOptions`](../interfaces/UtilInputOptions.md)<`VALUE`, `ELEMENT`, `OPTIONS`\> = [`UtilInputOptions`](../interfaces/UtilInputOptions.md)<`VALUE`, `ELEMENT`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` |
| `operation` | `OPERATION` |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Overrides

[UtilHtmlElement](UtilHtmlElement.md).[constructor](UtilHtmlElement.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L67)

## Properties

### \_after

• `Protected` `Optional` **\_after**: ``null`` \| `HTMLDivElement`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_after](UtilHtmlElement.md#_after)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L189)

___

### \_before

• `Protected` `Optional` **\_before**: ``null`` \| `HTMLDivElement`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_before](UtilHtmlElement.md#_before)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L186)

___

### \_clipper

• `Protected` `Optional` **\_clipper**: ``null`` \| `HTMLDivElement`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_clipper](UtilHtmlElement.md#_clipper)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L175)

___

### \_clipperEx

• `Protected` `Optional` **\_clipperEx**: ``null`` \| [`UtilHtmlElementClipperEx`](../interfaces/UtilHtmlElementClipperEx.md)

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_clipperEx](UtilHtmlElement.md#_clipperex)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L178)

___

### \_clipperExRects

• `Protected` `Optional` **\_clipperExRects**: ``null`` \| [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md)

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_clipperExRects](UtilHtmlElement.md#_clipperexrects)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L179)

___

### \_clipperRectResult

• `Protected` `Optional` **\_clipperRectResult**: `Rectangle`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_clipperRectResult](UtilHtmlElement.md#_clipperrectresult)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L176)

___

### \_data

• `Protected` **\_data**: [`UtilHtmlElementData`](../interfaces/UtilHtmlElementData.md)<`ELEMENT`\>

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_data](UtilHtmlElement.md#_data)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L171)

___

### \_description

• `Protected` **\_description**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L60)

___

### \_doSelectBound

• `Protected` **\_doSelectBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_doSelectBound](UtilHtmlElement.md#_doselectbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L194)

___

### \_editingFormatter

• `Protected` **\_editingFormatter**: (`value`: `VALUE`, `caller`: `any`) => `string`

#### Type declaration

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `caller` | `any` |

##### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L62)

___

### \_editingUnformatter

• `Protected` **\_editingUnformatter**: (`text`: `string`, `caller`: `any`) => `VALUE`

#### Type declaration

▸ (`text`, `caller`): `VALUE`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `caller` | `any` |

##### Returns

`VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L63)

___

### \_editingValidationResult

• `Protected` `Optional` **\_editingValidationResult**: ``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L65)

___

### \_editingValidator

• `Protected` **\_editingValidator**: (`value`: `VALUE`, `caller`: `any`) => ``null`` \| `string`

#### Type declaration

▸ (`value`, `caller`): ``null`` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `VALUE` |
| `caller` | `any` |

##### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L64)

___

### \_element

• `Protected` `Optional` **\_element**: ``null`` \| `ELEMENT`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_element](UtilHtmlElement.md#_element)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L181)

___

### \_elementRectResult

• `Protected` `Optional` **\_elementRectResult**: `Rectangle`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_elementRectResult](UtilHtmlElement.md#_elementrectresult)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L182)

___

### \_isElementShown

• `Protected` **\_isElementShown**: `boolean`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_isElementShown](UtilHtmlElement.md#_iselementshown)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L183)

___

### \_isStartRequested

• `Protected` **\_isStartRequested**: `boolean`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_isStartRequested](UtilHtmlElement.md#_isstartrequested)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L195)

___

### \_isStarted

• `Protected` **\_isStarted**: `boolean`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_isStarted](UtilHtmlElement.md#_isstarted)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_onAfterFocusBound](UtilHtmlElement.md#_onafterfocusbound)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_onBeforeFocusBound](UtilHtmlElement.md#_onbeforefocusbound)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_onElementFocusBound](UtilHtmlElement.md#_onelementfocusbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L184)

___

### \_onInputChangeBound

• `Protected` **\_onInputChangeBound**: (`e`: `Event`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Event` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L57)

___

### \_onInputInputBound

• `Protected` **\_onInputInputBound**: (`e`: `Event`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Event` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L58)

___

### \_onInputKeyDownBound

• `Protected` **\_onInputKeyDownBound**: (`e`: `KeyboardEvent`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L56)

___

### \_onPostRenderBound

• `Protected` **\_onPostRenderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_onPostRenderBound](UtilHtmlElement.md#_onpostrenderbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L198)

___

### \_operation

• `Protected` **\_operation**: `OPERATION`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_operation](UtilHtmlElement.md#_operation)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L170)

___

### \_point

• `Protected` `Optional` **\_point**: `Point`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_point](UtilHtmlElement.md#_point)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L173)

___

### \_rendererBound

• `Protected` `Optional` **\_rendererBound**: `Renderer`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_rendererBound](UtilHtmlElement.md#_rendererbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L197)

___

### \_target

• `Protected` **\_target**: `TARGET`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_target](UtilHtmlElement.md#_target)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L169)

___

### \_wasStarted

• `Protected` **\_wasStarted**: `boolean`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[_wasStarted](UtilHtmlElement.md#_wasstarted)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L193)

## Accessors

### element

• `get` **element**(): ``null`` \| `ELEMENT`

#### Returns

``null`` \| `ELEMENT`

#### Inherited from

UtilHtmlElement.element

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:332](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L332)

___

### when

• `get` **when**(): [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Returns

[`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Inherited from

UtilHtmlElement.when

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:336](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L336)

## Methods

### applyTitle

▸ **applyTitle**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L181)

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[cancel](UtilHtmlElement.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:585](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L585)

___

### doSelect

▸ `Protected` **doSelect**(): `void`

#### Returns

`void`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[doSelect](UtilHtmlElement.md#doselect)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[doStart](UtilHtmlElement.md#dostart)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L471)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[end](UtilHtmlElement.md#end)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[fillClipperExRects](UtilHtmlElement.md#fillclipperexrects)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L460)

___

### fromValue

▸ **fromValue**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `VALUE` |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L150)

___

### getAfter

▸ `Protected` **getAfter**(`clipper`): ``null`` \| `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipper` | `HTMLDivElement` |

#### Returns

``null`` \| `HTMLDivElement`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[getAfter](UtilHtmlElement.md#getafter)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[getBefore](UtilHtmlElement.md#getbefore)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:706](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L706)

___

### getClipper

▸ `Protected` **getClipper**(): ``null`` \| `HTMLDivElement`

#### Returns

``null`` \| `HTMLDivElement`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[getClipper](UtilHtmlElement.md#getclipper)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[getClipperEx](UtilHtmlElement.md#getclipperex)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L670)

___

### getClipperExRects

▸ `Protected` **getClipperExRects**(): ``null`` \| [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md)

#### Returns

``null`` \| [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md)

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[getClipperExRects](UtilHtmlElement.md#getclipperexrects)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[getClipperRect](UtilHtmlElement.md#getclipperrect)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[getElement](UtilHtmlElement.md#getelement)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L697)

___

### getElementMatrix

▸ `Protected` **getElementMatrix**(): ``null`` \| `Matrix`

#### Returns

``null`` \| `Matrix`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[getElementMatrix](UtilHtmlElement.md#getelementmatrix)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[getElementRect](UtilHtmlElement.md#getelementrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L440)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[isShown](UtilHtmlElement.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L423)

___

### isStartable

▸ **isStartable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[isStartable](UtilHtmlElement.md#isstartable)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[newAfterStyler](UtilHtmlElement.md#newafterstyler)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[newBeforeStyler](UtilHtmlElement.md#newbeforestyler)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[newClipperStyler](UtilHtmlElement.md#newclipperstyler)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[newElementStyler](UtilHtmlElement.md#newelementstyler)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[onAfterFocus](UtilHtmlElement.md#onafterfocus)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[onBeforeFocus](UtilHtmlElement.md#onbeforefocus)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:724](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L724)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[onBlur](UtilHtmlElement.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L386)

___

### onCancel

▸ `Protected` **onCancel**(): `void`

#### Returns

`void`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[onCancel](UtilHtmlElement.md#oncancel)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[onDblClick](UtilHtmlElement.md#ondblclick)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[onDown](UtilHtmlElement.md#ondown)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[onDowning](UtilHtmlElement.md#ondowning)

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

#### Overrides

[UtilHtmlElement](UtilHtmlElement.md).[onElementAttached](UtilHtmlElement.md#onelementattached)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L96)

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

#### Overrides

[UtilHtmlElement](UtilHtmlElement.md).[onElementDetached](UtilHtmlElement.md#onelementdetached)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L107)

___

### onElementFocus

▸ `Protected` **onElementFocus**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `FocusEvent` |

#### Returns

`void`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[onElementFocus](UtilHtmlElement.md#onelementfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L750)

___

### onEnd

▸ `Protected` **onEnd**(): `void`

#### Returns

`void`

#### Overrides

[UtilHtmlElement](UtilHtmlElement.md).[onEnd](UtilHtmlElement.md#onend)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L91)

___

### onEndByBlur

▸ `Protected` **onEndByBlur**(): `void`

#### Returns

`void`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[onEndByBlur](UtilHtmlElement.md#onendbyblur)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L759)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[onFocus](UtilHtmlElement.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L375)

___

### onInputChange

▸ `Protected` **onInputChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L132)

___

### onInputInput

▸ `Protected` **onInputInput**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Event` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L157)

___

### onInputKeyDown

▸ `Protected` **onInputKeyDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L117)

___

### onRender

▸ **onRender**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[onRender](UtilHtmlElement.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:427](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L427)

___

### onStart

▸ `Protected` **onStart**(): `void`

#### Returns

`void`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[onStart](UtilHtmlElement.md#onstart)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L569)

___

### select

▸ **select**(): [`UtilInput`](UtilInput.md)<`VALUE`, `ELEMENT`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

#### Returns

[`UtilInput`](UtilInput.md)<`VALUE`, `ELEMENT`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[select](UtilHtmlElement.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L772)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[start](UtilHtmlElement.md#start)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[toAfterData](UtilHtmlElement.md#toafterdata)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[toBeforeData](UtilHtmlElement.md#tobeforedata)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[toClipperData](UtilHtmlElement.md#toclipperdata)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[toClipperRectAdjusted](UtilHtmlElement.md#toclipperrectadjusted)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[toData](UtilHtmlElement.md#todata)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[toElementData](UtilHtmlElement.md#toelementdata)

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

#### Overrides

[UtilHtmlElement](UtilHtmlElement.md).[toElementFocused](UtilHtmlElement.md#toelementfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L126)

___

### toValue

▸ **toValue**(`valueAsString`): `VALUE`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueAsString` | `string` |

#### Returns

`VALUE`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L146)

___

### updateElement

▸ `Protected` **updateElement**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[updateElement](UtilHtmlElement.md#updateelement)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:805](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L805)

___

### validate

▸ **validate**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-input.ts#L164)

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

#### Inherited from

[UtilHtmlElement](UtilHtmlElement.md).[getClipperRect](UtilHtmlElement.md#getclipperrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L868)
