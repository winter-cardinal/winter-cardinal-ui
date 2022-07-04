[Winter Cardinal UI - v0.194.0](../index.md) / UtilInputText

# Class: UtilInputText<TARGET, OPERATION, THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | extends [`UtilInputTextTarget`](../interfaces/UtilInputTextTarget.md) = [`UtilInputTextTarget`](../interfaces/UtilInputTextTarget.md) |
| `OPERATION` | extends [`UtilInputTextOperation`](../interfaces/UtilInputTextOperation.md) = [`UtilInputTextOperation`](../interfaces/UtilInputTextOperation.md) |
| `THEME` | extends [`UtilThemeInputText`](../interfaces/UtilThemeInputText.md) = [`UtilThemeInputText`](../interfaces/UtilThemeInputText.md) |
| `OPTIONS` | extends [`UtilInputTextOptions`](../interfaces/UtilInputTextOptions.md) = [`UtilInputTextOptions`](../interfaces/UtilInputTextOptions.md) |

## Hierarchy

- [`UtilInputInput`](UtilInputInput.md)<`string`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

  ↳ **`UtilInputText`**

## Table of contents

### Constructors

- [constructor](UtilInputText.md#constructor)

### Properties

- [\_after](UtilInputText.md#_after)
- [\_before](UtilInputText.md#_before)
- [\_clipper](UtilInputText.md#_clipper)
- [\_clipperEx](UtilInputText.md#_clipperex)
- [\_clipperExRects](UtilInputText.md#_clipperexrects)
- [\_clipperRectResult](UtilInputText.md#_clipperrectresult)
- [\_data](UtilInputText.md#_data)
- [\_description](UtilInputText.md#_description)
- [\_doSelectBound](UtilInputText.md#_doselectbound)
- [\_editingFormatter](UtilInputText.md#_editingformatter)
- [\_editingUnformatter](UtilInputText.md#_editingunformatter)
- [\_editingValidationResult](UtilInputText.md#_editingvalidationresult)
- [\_editingValidator](UtilInputText.md#_editingvalidator)
- [\_element](UtilInputText.md#_element)
- [\_elementRectResult](UtilInputText.md#_elementrectresult)
- [\_isElementShown](UtilInputText.md#_iselementshown)
- [\_isStartRequested](UtilInputText.md#_isstartrequested)
- [\_isStarted](UtilInputText.md#_isstarted)
- [\_onAfterFocusBound](UtilInputText.md#_onafterfocusbound)
- [\_onBeforeFocusBound](UtilInputText.md#_onbeforefocusbound)
- [\_onElementFocusBound](UtilInputText.md#_onelementfocusbound)
- [\_onInputChangeBound](UtilInputText.md#_oninputchangebound)
- [\_onInputInputBound](UtilInputText.md#_oninputinputbound)
- [\_onInputKeyDownBound](UtilInputText.md#_oninputkeydownbound)
- [\_onPostRenderBound](UtilInputText.md#_onpostrenderbound)
- [\_operation](UtilInputText.md#_operation)
- [\_point](UtilInputText.md#_point)
- [\_rendererBound](UtilInputText.md#_rendererbound)
- [\_target](UtilInputText.md#_target)
- [\_wasStarted](UtilInputText.md#_wasstarted)

### Accessors

- [element](UtilInputText.md#element)
- [when](UtilInputText.md#when)

### Methods

- [applyTitle](UtilInputText.md#applytitle)
- [cancel](UtilInputText.md#cancel)
- [doSelect](UtilInputText.md#doselect)
- [doStart](UtilInputText.md#dostart)
- [end](UtilInputText.md#end)
- [fillClipperExRects](UtilInputText.md#fillclipperexrects)
- [fromValue](UtilInputText.md#fromvalue)
- [getAfter](UtilInputText.md#getafter)
- [getBefore](UtilInputText.md#getbefore)
- [getClipper](UtilInputText.md#getclipper)
- [getClipperEx](UtilInputText.md#getclipperex)
- [getClipperExRects](UtilInputText.md#getclipperexrects)
- [getClipperRect](UtilInputText.md#getclipperrect)
- [getElement](UtilInputText.md#getelement)
- [getElementMatrix](UtilInputText.md#getelementmatrix)
- [getElementRect](UtilInputText.md#getelementrect)
- [isShown](UtilInputText.md#isshown)
- [isStartable](UtilInputText.md#isstartable)
- [newAfterStyler](UtilInputText.md#newafterstyler)
- [newBeforeStyler](UtilInputText.md#newbeforestyler)
- [newClipperStyler](UtilInputText.md#newclipperstyler)
- [newElementStyler](UtilInputText.md#newelementstyler)
- [onAfterFocus](UtilInputText.md#onafterfocus)
- [onBeforeFocus](UtilInputText.md#onbeforefocus)
- [onBlur](UtilInputText.md#onblur)
- [onCancel](UtilInputText.md#oncancel)
- [onDblClick](UtilInputText.md#ondblclick)
- [onDown](UtilInputText.md#ondown)
- [onDowning](UtilInputText.md#ondowning)
- [onElementAttached](UtilInputText.md#onelementattached)
- [onElementDetached](UtilInputText.md#onelementdetached)
- [onElementFocus](UtilInputText.md#onelementfocus)
- [onEnd](UtilInputText.md#onend)
- [onEndByBlur](UtilInputText.md#onendbyblur)
- [onFocus](UtilInputText.md#onfocus)
- [onInputChange](UtilInputText.md#oninputchange)
- [onInputInput](UtilInputText.md#oninputinput)
- [onInputKeyDown](UtilInputText.md#oninputkeydown)
- [onRender](UtilInputText.md#onrender)
- [onStart](UtilInputText.md#onstart)
- [select](UtilInputText.md#select)
- [start](UtilInputText.md#start)
- [toAfterData](UtilInputText.md#toafterdata)
- [toBeforeData](UtilInputText.md#tobeforedata)
- [toClipperData](UtilInputText.md#toclipperdata)
- [toClipperRectAdjusted](UtilInputText.md#toclipperrectadjusted)
- [toData](UtilInputText.md#todata)
- [toElementData](UtilInputText.md#toelementdata)
- [toElementFocused](UtilInputText.md#toelementfocused)
- [toValue](UtilInputText.md#tovalue)
- [updateElement](UtilInputText.md#updateelement)
- [validate](UtilInputText.md#validate)
- [getClipperRect](UtilInputText.md#getclipperrect)

## Constructors

### constructor

• **new UtilInputText**<`TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>(`target`, `operation`, `theme`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | extends [`UtilInputTextTarget`](../interfaces/UtilInputTextTarget.md) = [`UtilInputTextTarget`](../interfaces/UtilInputTextTarget.md) |
| `OPERATION` | extends [`UtilInputTextOperation`](../interfaces/UtilInputTextOperation.md)<`OPERATION`\> = [`UtilInputTextOperation`](../interfaces/UtilInputTextOperation.md) |
| `THEME` | extends [`UtilThemeInputText`](../interfaces/UtilThemeInputText.md)<`THEME`\> = [`UtilThemeInputText`](../interfaces/UtilThemeInputText.md) |
| `OPTIONS` | extends [`UtilInputTextOptions`](../interfaces/UtilInputTextOptions.md)<`OPTIONS`\> = [`UtilInputTextOptions`](../interfaces/UtilInputTextOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` |
| `operation` | `OPERATION` |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Inherited from

[UtilInputInput](UtilInputInput.md).[constructor](UtilInputInput.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L67)

## Properties

### \_after

• `Protected` `Optional` **\_after**: ``null`` \| `HTMLDivElement`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_after](UtilInputInput.md#_after)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L189)

___

### \_before

• `Protected` `Optional` **\_before**: ``null`` \| `HTMLDivElement`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_before](UtilInputInput.md#_before)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L186)

___

### \_clipper

• `Protected` `Optional` **\_clipper**: ``null`` \| `HTMLDivElement`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_clipper](UtilInputInput.md#_clipper)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L175)

___

### \_clipperEx

• `Protected` `Optional` **\_clipperEx**: ``null`` \| [`UtilHtmlElementClipperEx`](../interfaces/UtilHtmlElementClipperEx.md)

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_clipperEx](UtilInputInput.md#_clipperex)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L178)

___

### \_clipperExRects

• `Protected` `Optional` **\_clipperExRects**: ``null`` \| [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md)

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_clipperExRects](UtilInputInput.md#_clipperexrects)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L179)

___

### \_clipperRectResult

• `Protected` `Optional` **\_clipperRectResult**: `Rectangle`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_clipperRectResult](UtilInputInput.md#_clipperrectresult)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L176)

___

### \_data

• `Protected` **\_data**: [`UtilHtmlElementData`](../interfaces/UtilHtmlElementData.md)<`HTMLInputElement`\>

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_data](UtilInputInput.md#_data)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L171)

___

### \_description

• `Protected` **\_description**: `string`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_description](UtilInputInput.md#_description)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L60)

___

### \_doSelectBound

• `Protected` **\_doSelectBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_doSelectBound](UtilInputInput.md#_doselectbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L194)

___

### \_editingFormatter

• `Protected` **\_editingFormatter**: (`value`: `string`, `caller`: `any`) => `string`

#### Type declaration

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_editingFormatter](UtilInputInput.md#_editingformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L62)

___

### \_editingUnformatter

• `Protected` **\_editingUnformatter**: (`text`: `string`, `caller`: `any`) => `string`

#### Type declaration

▸ (`text`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_editingUnformatter](UtilInputInput.md#_editingunformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L63)

___

### \_editingValidationResult

• `Protected` `Optional` **\_editingValidationResult**: ``null`` \| `string`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_editingValidationResult](UtilInputInput.md#_editingvalidationresult)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L65)

___

### \_editingValidator

• `Protected` **\_editingValidator**: (`value`: `string`, `caller`: `any`) => ``null`` \| `string`

#### Type declaration

▸ (`value`, `caller`): ``null`` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `caller` | `any` |

##### Returns

``null`` \| `string`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_editingValidator](UtilInputInput.md#_editingvalidator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L64)

___

### \_element

• `Protected` `Optional` **\_element**: ``null`` \| `HTMLInputElement`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_element](UtilInputInput.md#_element)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L181)

___

### \_elementRectResult

• `Protected` `Optional` **\_elementRectResult**: `Rectangle`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_elementRectResult](UtilInputInput.md#_elementrectresult)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L182)

___

### \_isElementShown

• `Protected` **\_isElementShown**: `boolean`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_isElementShown](UtilInputInput.md#_iselementshown)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L183)

___

### \_isStartRequested

• `Protected` **\_isStartRequested**: `boolean`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_isStartRequested](UtilInputInput.md#_isstartrequested)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L195)

___

### \_isStarted

• `Protected` **\_isStarted**: `boolean`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_isStarted](UtilInputInput.md#_isstarted)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L192)

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

[UtilInputInput](UtilInputInput.md).[_onAfterFocusBound](UtilInputInput.md#_onafterfocusbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L190)

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

[UtilInputInput](UtilInputInput.md).[_onBeforeFocusBound](UtilInputInput.md#_onbeforefocusbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L187)

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

[UtilInputInput](UtilInputInput.md).[_onElementFocusBound](UtilInputInput.md#_onelementfocusbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L184)

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

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_onInputChangeBound](UtilInputInput.md#_oninputchangebound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L57)

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

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_onInputInputBound](UtilInputInput.md#_oninputinputbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L58)

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

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_onInputKeyDownBound](UtilInputInput.md#_oninputkeydownbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L56)

___

### \_onPostRenderBound

• `Protected` **\_onPostRenderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_onPostRenderBound](UtilInputInput.md#_onpostrenderbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L198)

___

### \_operation

• `Protected` **\_operation**: `OPERATION`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_operation](UtilInputInput.md#_operation)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L170)

___

### \_point

• `Protected` `Optional` **\_point**: `Point`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_point](UtilInputInput.md#_point)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L173)

___

### \_rendererBound

• `Protected` `Optional` **\_rendererBound**: `Renderer`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_rendererBound](UtilInputInput.md#_rendererbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L197)

___

### \_target

• `Protected` **\_target**: `TARGET`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_target](UtilInputInput.md#_target)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L169)

___

### \_wasStarted

• `Protected` **\_wasStarted**: `boolean`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_wasStarted](UtilInputInput.md#_wasstarted)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L193)

## Accessors

### element

• `get` **element**(): ``null`` \| `ELEMENT`

#### Returns

``null`` \| `ELEMENT`

#### Inherited from

UtilInputInput.element

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:332](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L332)

___

### when

• `get` **when**(): [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Returns

[`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Inherited from

UtilInputInput.when

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:336](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L336)

## Methods

### applyTitle

▸ **applyTitle**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[applyTitle](UtilInputInput.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L181)

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[cancel](UtilInputInput.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:585](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L585)

___

### doSelect

▸ `Protected` **doSelect**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[doSelect](UtilInputInput.md#doselect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:573](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L573)

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

[UtilInputInput](UtilInputInput.md).[doStart](UtilInputInput.md#dostart)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L471)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[end](UtilInputInput.md#end)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:767](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L767)

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

[UtilInputInput](UtilInputInput.md).[fillClipperExRects](UtilInputInput.md#fillclipperexrects)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L460)

___

### fromValue

▸ **fromValue**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |

#### Returns

`string`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[fromValue](UtilInputInput.md#fromvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L150)

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

[UtilInputInput](UtilInputInput.md).[getAfter](UtilInputInput.md#getafter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:715](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L715)

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

[UtilInputInput](UtilInputInput.md).[getBefore](UtilInputInput.md#getbefore)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:706](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L706)

___

### getClipper

▸ `Protected` **getClipper**(): ``null`` \| `HTMLDivElement`

#### Returns

``null`` \| `HTMLDivElement`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[getClipper](UtilInputInput.md#getclipper)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:660](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L660)

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

[UtilInputInput](UtilInputInput.md).[getClipperEx](UtilInputInput.md#getclipperex)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L670)

___

### getClipperExRects

▸ `Protected` **getClipperExRects**(): ``null`` \| [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md)

#### Returns

``null`` \| [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md)

#### Inherited from

[UtilInputInput](UtilInputInput.md).[getClipperExRects](UtilInputInput.md#getclipperexrects)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:684](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L684)

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

[UtilInputInput](UtilInputInput.md).[getClipperRect](UtilInputInput.md#getclipperrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:452](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L452)

___

### getElement

▸ `Protected` **getElement**(`clipper`): ``null`` \| `HTMLInputElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipper` | `HTMLDivElement` |

#### Returns

``null`` \| `HTMLInputElement`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[getElement](UtilInputInput.md#getelement)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L697)

___

### getElementMatrix

▸ `Protected` **getElementMatrix**(): ``null`` \| `Matrix`

#### Returns

``null`` \| `Matrix`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[getElementMatrix](UtilInputInput.md#getelementmatrix)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:448](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L448)

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

[UtilInputInput](UtilInputInput.md).[getElementRect](UtilInputInput.md#getelementrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L440)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[isShown](UtilInputInput.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L423)

___

### isStartable

▸ **isStartable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[isStartable](UtilInputInput.md#isstartable)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:400](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L400)

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

[UtilInputInput](UtilInputInput.md).[newAfterStyler](UtilInputInput.md#newafterstyler)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:326](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L326)

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

[UtilInputInput](UtilInputInput.md).[newBeforeStyler](UtilInputInput.md#newbeforestyler)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:313](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L313)

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

[UtilInputInput](UtilInputInput.md).[newClipperStyler](UtilInputInput.md#newclipperstyler)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L284)

___

### newElementStyler

▸ `Protected` **newElementStyler**(`theme`): (`target`: `HTMLInputElement`, `state`: [`DBaseStateSet`](../interfaces/DBaseStateSet.md), `padding`: ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding), `elementRect`: ``null`` \| `Rectangle`, `elementMatrix`: ``null`` \| `Matrix`, `clipperRect`: ``null`` \| `Rectangle`, `clipperEx`: `undefined` \| ``null`` \| [`UtilHtmlElementClipperEx`](../interfaces/UtilHtmlElementClipperEx.md)) => `void`

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
| `target` | `HTMLInputElement` |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |
| `clipperEx` | `undefined` \| ``null`` \| [`UtilHtmlElementClipperEx`](../interfaces/UtilHtmlElementClipperEx.md) |

##### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[newElementStyler](UtilInputInput.md#newelementstyler)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L251)

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

[UtilInputInput](UtilInputInput.md).[onAfterFocus](UtilInputInput.md#onafterfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:737](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L737)

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

[UtilInputInput](UtilInputInput.md).[onBeforeFocus](UtilInputInput.md#onbeforefocus)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:724](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L724)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[onBlur](UtilInputInput.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L386)

___

### onCancel

▸ `Protected` **onCancel**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[onCancel](UtilInputInput.md#oncancel)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:636](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L636)

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

[UtilInputInput](UtilInputInput.md).[onDblClick](UtilInputInput.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:364](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L364)

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

[UtilInputInput](UtilInputInput.md).[onDown](UtilInputInput.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L354)

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

[UtilInputInput](UtilInputInput.md).[onDowning](UtilInputInput.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:340](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L340)

___

### onElementAttached

▸ `Protected` **onElementAttached**(`element`, `before?`, `after?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLInputElement` |
| `before?` | ``null`` \| `HTMLDivElement` |
| `after?` | ``null`` \| `HTMLDivElement` |

#### Returns

`void`

#### Overrides

[UtilInputInput](UtilInputInput.md).[onElementAttached](UtilInputInput.md#onelementattached)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-text.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-text.ts#L28)

___

### onElementDetached

▸ `Protected` **onElementDetached**(`element`, `before?`, `after?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLInputElement` |
| `before?` | ``null`` \| `HTMLDivElement` |
| `after?` | ``null`` \| `HTMLDivElement` |

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[onElementDetached](UtilInputInput.md#onelementdetached)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-input.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-input.ts#L39)

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

[UtilInputInput](UtilInputInput.md).[onElementFocus](UtilInputInput.md#onelementfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L750)

___

### onEnd

▸ `Protected` **onEnd**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[onEnd](UtilInputInput.md#onend)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L91)

___

### onEndByBlur

▸ `Protected` **onEndByBlur**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[onEndByBlur](UtilInputInput.md#onendbyblur)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L759)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[onFocus](UtilInputInput.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L375)

___

### onInputChange

▸ `Protected` **onInputChange**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[onInputChange](UtilInputInput.md#oninputchange)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L132)

___

### onInputInput

▸ `Protected` **onInputInput**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Event` |

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[onInputInput](UtilInputInput.md#oninputinput)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L157)

___

### onInputKeyDown

▸ `Protected` **onInputKeyDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[onInputKeyDown](UtilInputInput.md#oninputkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L117)

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

[UtilInputInput](UtilInputInput.md).[onRender](UtilInputInput.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:427](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L427)

___

### onStart

▸ `Protected` **onStart**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[onStart](UtilInputInput.md#onstart)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L569)

___

### select

▸ **select**(): [`UtilInputText`](UtilInputText.md)<`TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

#### Returns

[`UtilInputText`](UtilInputText.md)<`TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

#### Inherited from

[UtilInputInput](UtilInputInput.md).[select](UtilInputInput.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L772)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[start](UtilInputInput.md#start)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:411](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L411)

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

[UtilInputInput](UtilInputInput.md).[toAfterData](UtilInputInput.md#toafterdata)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L319)

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

[UtilInputInput](UtilInputInput.md).[toBeforeData](UtilInputInput.md#tobeforedata)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L306)

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

[UtilInputInput](UtilInputInput.md).[toClipperData](UtilInputInput.md#toclipperdata)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:273](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L273)

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

[UtilInputInput](UtilInputInput.md).[toClipperRectAdjusted](UtilInputInput.md#toclipperrectadjusted)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:779](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L779)

___

### toData

▸ `Protected` **toData**(`theme`, `options?`): [`UtilHtmlElementData`](../interfaces/UtilHtmlElementData.md)<`HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`UtilHtmlElementData`](../interfaces/UtilHtmlElementData.md)<`HTMLInputElement`\>

#### Inherited from

[UtilInputInput](UtilInputInput.md).[toData](UtilInputInput.md#todata)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L230)

___

### toElementData

▸ `Protected` **toElementData**(`theme`, `options?`): [`UtilHtmlElementElementData`](../interfaces/UtilHtmlElementElementData.md)<`HTMLInputElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS`[``"element"``] |

#### Returns

[`UtilHtmlElementElementData`](../interfaces/UtilHtmlElementElementData.md)<`HTMLInputElement`\>

#### Inherited from

[UtilInputInput](UtilInputInput.md).[toElementData](UtilInputInput.md#toelementdata)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L241)

___

### toElementFocused

▸ `Protected` **toElementFocused**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLInputElement` |

#### Returns

`void`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[toElementFocused](UtilInputInput.md#toelementfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L126)

___

### toValue

▸ **toValue**(`valueAsString`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueAsString` | `string` |

#### Returns

`string`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[toValue](UtilInputInput.md#tovalue)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L146)

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

[UtilInputInput](UtilInputInput.md).[updateElement](UtilInputInput.md#updateelement)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:805](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L805)

___

### validate

▸ **validate**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[validate](UtilInputInput.md#validate)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L164)

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

[UtilInputInput](UtilInputInput.md).[getClipperRect](UtilInputInput.md#getclipperrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L868)
