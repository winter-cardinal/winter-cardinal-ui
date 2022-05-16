[Winter Cardinal UI - v0.167.0](../index.md) / UtilInputTextArea

# Class: UtilInputTextArea<TARGET, OPERATION, THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | extends [`UtilInputTextAreaTarget`](../interfaces/UtilInputTextAreaTarget.md) = [`UtilInputTextAreaTarget`](../interfaces/UtilInputTextAreaTarget.md) |
| `OPERATION` | extends [`UtilInputTextAreaOperation`](../interfaces/UtilInputTextAreaOperation.md) = [`UtilInputTextAreaOperation`](../interfaces/UtilInputTextAreaOperation.md) |
| `THEME` | extends [`UtilThemeInputTextArea`](../interfaces/UtilThemeInputTextArea.md) = [`UtilThemeInputTextArea`](../interfaces/UtilThemeInputTextArea.md) |
| `OPTIONS` | extends [`UtilInputTextAreaOptions`](../interfaces/UtilInputTextAreaOptions.md) = [`UtilInputTextAreaOptions`](../interfaces/UtilInputTextAreaOptions.md) |

## Hierarchy

- [`UtilInput`](UtilInput.md)<`string`, `HTMLTextAreaElement`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

  ↳ **`UtilInputTextArea`**

## Table of contents

### Constructors

- [constructor](UtilInputTextArea.md#constructor)

### Properties

- [\_after](UtilInputTextArea.md#_after)
- [\_before](UtilInputTextArea.md#_before)
- [\_clipper](UtilInputTextArea.md#_clipper)
- [\_clipperRectResult](UtilInputTextArea.md#_clipperrectresult)
- [\_data](UtilInputTextArea.md#_data)
- [\_description](UtilInputTextArea.md#_description)
- [\_doSelectBound](UtilInputTextArea.md#_doselectbound)
- [\_editingFormatter](UtilInputTextArea.md#_editingformatter)
- [\_editingUnformatter](UtilInputTextArea.md#_editingunformatter)
- [\_editingValidationResult](UtilInputTextArea.md#_editingvalidationresult)
- [\_editingValidator](UtilInputTextArea.md#_editingvalidator)
- [\_element](UtilInputTextArea.md#_element)
- [\_elementRectResult](UtilInputTextArea.md#_elementrectresult)
- [\_isElementShown](UtilInputTextArea.md#_iselementshown)
- [\_isStartRequested](UtilInputTextArea.md#_isstartrequested)
- [\_isStarted](UtilInputTextArea.md#_isstarted)
- [\_onAfterFocusBound](UtilInputTextArea.md#_onafterfocusbound)
- [\_onBeforeFocusBound](UtilInputTextArea.md#_onbeforefocusbound)
- [\_onElementFocusBound](UtilInputTextArea.md#_onelementfocusbound)
- [\_onInputChangeBound](UtilInputTextArea.md#_oninputchangebound)
- [\_onInputInputBound](UtilInputTextArea.md#_oninputinputbound)
- [\_onInputKeyDownBound](UtilInputTextArea.md#_oninputkeydownbound)
- [\_onPostRenderBound](UtilInputTextArea.md#_onpostrenderbound)
- [\_operation](UtilInputTextArea.md#_operation)
- [\_point](UtilInputTextArea.md#_point)
- [\_rendererBound](UtilInputTextArea.md#_rendererbound)
- [\_target](UtilInputTextArea.md#_target)
- [\_wasStarted](UtilInputTextArea.md#_wasstarted)

### Accessors

- [element](UtilInputTextArea.md#element)
- [when](UtilInputTextArea.md#when)

### Methods

- [applyTitle](UtilInputTextArea.md#applytitle)
- [cancel](UtilInputTextArea.md#cancel)
- [doSelect](UtilInputTextArea.md#doselect)
- [doStart](UtilInputTextArea.md#dostart)
- [end](UtilInputTextArea.md#end)
- [fromValue](UtilInputTextArea.md#fromvalue)
- [getAfter](UtilInputTextArea.md#getafter)
- [getBefore](UtilInputTextArea.md#getbefore)
- [getClipper](UtilInputTextArea.md#getclipper)
- [getClipperRect](UtilInputTextArea.md#getclipperrect)
- [getElement](UtilInputTextArea.md#getelement)
- [getElementMatrix](UtilInputTextArea.md#getelementmatrix)
- [getElementRect](UtilInputTextArea.md#getelementrect)
- [isShown](UtilInputTextArea.md#isshown)
- [isStartable](UtilInputTextArea.md#isstartable)
- [newAfterStyler](UtilInputTextArea.md#newafterstyler)
- [newBeforeStyler](UtilInputTextArea.md#newbeforestyler)
- [newClipperStyler](UtilInputTextArea.md#newclipperstyler)
- [newElementStyler](UtilInputTextArea.md#newelementstyler)
- [onAfterFocus](UtilInputTextArea.md#onafterfocus)
- [onBeforeFocus](UtilInputTextArea.md#onbeforefocus)
- [onBlur](UtilInputTextArea.md#onblur)
- [onCancel](UtilInputTextArea.md#oncancel)
- [onDblClick](UtilInputTextArea.md#ondblclick)
- [onDown](UtilInputTextArea.md#ondown)
- [onDowning](UtilInputTextArea.md#ondowning)
- [onElementAttached](UtilInputTextArea.md#onelementattached)
- [onElementDetached](UtilInputTextArea.md#onelementdetached)
- [onElementFocus](UtilInputTextArea.md#onelementfocus)
- [onEnd](UtilInputTextArea.md#onend)
- [onEndByBlur](UtilInputTextArea.md#onendbyblur)
- [onFocus](UtilInputTextArea.md#onfocus)
- [onInputChange](UtilInputTextArea.md#oninputchange)
- [onInputInput](UtilInputTextArea.md#oninputinput)
- [onInputKeyDown](UtilInputTextArea.md#oninputkeydown)
- [onRender](UtilInputTextArea.md#onrender)
- [onStart](UtilInputTextArea.md#onstart)
- [select](UtilInputTextArea.md#select)
- [start](UtilInputTextArea.md#start)
- [toAfterData](UtilInputTextArea.md#toafterdata)
- [toBeforeData](UtilInputTextArea.md#tobeforedata)
- [toClipperData](UtilInputTextArea.md#toclipperdata)
- [toClipperRectAdjusted](UtilInputTextArea.md#toclipperrectadjusted)
- [toData](UtilInputTextArea.md#todata)
- [toElementData](UtilInputTextArea.md#toelementdata)
- [toElementFocused](UtilInputTextArea.md#toelementfocused)
- [toValue](UtilInputTextArea.md#tovalue)
- [updateElement](UtilInputTextArea.md#updateelement)
- [validate](UtilInputTextArea.md#validate)
- [getClipperRect](UtilInputTextArea.md#getclipperrect)

## Constructors

### constructor

• **new UtilInputTextArea**<`TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>(`target`, `operation`, `theme`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | extends [`UtilInputTextAreaTarget`](../interfaces/UtilInputTextAreaTarget.md) = [`UtilInputTextAreaTarget`](../interfaces/UtilInputTextAreaTarget.md) |
| `OPERATION` | extends [`UtilInputTextAreaOperation`](../interfaces/UtilInputTextAreaOperation.md)<`OPERATION`\> = [`UtilInputTextAreaOperation`](../interfaces/UtilInputTextAreaOperation.md) |
| `THEME` | extends [`UtilThemeInputTextArea`](../interfaces/UtilThemeInputTextArea.md)<`THEME`\> = [`UtilThemeInputTextArea`](../interfaces/UtilThemeInputTextArea.md) |
| `OPTIONS` | extends [`UtilInputTextAreaOptions`](../interfaces/UtilInputTextAreaOptions.md)<`OPTIONS`\> = [`UtilInputTextAreaOptions`](../interfaces/UtilInputTextAreaOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` |
| `operation` | `OPERATION` |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Inherited from

[UtilInput](UtilInput.md).[constructor](UtilInput.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L67)

## Properties

### \_after

• `Protected` `Optional` **\_after**: ``null`` \| `HTMLDivElement`

#### Inherited from

[UtilInput](UtilInput.md).[_after](UtilInput.md#_after)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L175)

___

### \_before

• `Protected` `Optional` **\_before**: ``null`` \| `HTMLDivElement`

#### Inherited from

[UtilInput](UtilInput.md).[_before](UtilInput.md#_before)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L172)

___

### \_clipper

• `Protected` `Optional` **\_clipper**: ``null`` \| `HTMLDivElement`

#### Inherited from

[UtilInput](UtilInput.md).[_clipper](UtilInput.md#_clipper)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L164)

___

### \_clipperRectResult

• `Protected` `Optional` **\_clipperRectResult**: `Rectangle`

#### Inherited from

[UtilInput](UtilInput.md).[_clipperRectResult](UtilInput.md#_clipperrectresult)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L165)

___

### \_data

• `Protected` **\_data**: [`UtilHtmlElementData`](../interfaces/UtilHtmlElementData.md)<`HTMLTextAreaElement`\>

#### Inherited from

[UtilInput](UtilInput.md).[_data](UtilInput.md#_data)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L160)

___

### \_description

• `Protected` **\_description**: `string`

#### Inherited from

[UtilInput](UtilInput.md).[_description](UtilInput.md#_description)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L60)

___

### \_doSelectBound

• `Protected` **\_doSelectBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[_doSelectBound](UtilInput.md#_doselectbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L180)

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

[UtilInput](UtilInput.md).[_editingFormatter](UtilInput.md#_editingformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L62)

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

[UtilInput](UtilInput.md).[_editingUnformatter](UtilInput.md#_editingunformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L63)

___

### \_editingValidationResult

• `Protected` `Optional` **\_editingValidationResult**: ``null`` \| `string`

#### Inherited from

[UtilInput](UtilInput.md).[_editingValidationResult](UtilInput.md#_editingvalidationresult)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L65)

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

[UtilInput](UtilInput.md).[_editingValidator](UtilInput.md#_editingvalidator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L64)

___

### \_element

• `Protected` `Optional` **\_element**: ``null`` \| `HTMLTextAreaElement`

#### Inherited from

[UtilInput](UtilInput.md).[_element](UtilInput.md#_element)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L167)

___

### \_elementRectResult

• `Protected` `Optional` **\_elementRectResult**: `Rectangle`

#### Inherited from

[UtilInput](UtilInput.md).[_elementRectResult](UtilInput.md#_elementrectresult)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L168)

___

### \_isElementShown

• `Protected` **\_isElementShown**: `boolean`

#### Inherited from

[UtilInput](UtilInput.md).[_isElementShown](UtilInput.md#_iselementshown)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L169)

___

### \_isStartRequested

• `Protected` **\_isStartRequested**: `boolean`

#### Inherited from

[UtilInput](UtilInput.md).[_isStartRequested](UtilInput.md#_isstartrequested)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L181)

___

### \_isStarted

• `Protected` **\_isStarted**: `boolean`

#### Inherited from

[UtilInput](UtilInput.md).[_isStarted](UtilInput.md#_isstarted)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L178)

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

[UtilInput](UtilInput.md).[_onAfterFocusBound](UtilInput.md#_onafterfocusbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L176)

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

[UtilInput](UtilInput.md).[_onBeforeFocusBound](UtilInput.md#_onbeforefocusbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L173)

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

[UtilInput](UtilInput.md).[_onElementFocusBound](UtilInput.md#_onelementfocusbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L170)

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

[UtilInput](UtilInput.md).[_onInputChangeBound](UtilInput.md#_oninputchangebound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L57)

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

[UtilInput](UtilInput.md).[_onInputInputBound](UtilInput.md#_oninputinputbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L58)

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

[UtilInput](UtilInput.md).[_onInputKeyDownBound](UtilInput.md#_oninputkeydownbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L56)

___

### \_onPostRenderBound

• `Protected` **\_onPostRenderBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[_onPostRenderBound](UtilInput.md#_onpostrenderbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L184)

___

### \_operation

• `Protected` **\_operation**: `OPERATION`

#### Inherited from

[UtilInput](UtilInput.md).[_operation](UtilInput.md#_operation)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L159)

___

### \_point

• `Protected` `Optional` **\_point**: `Point`

#### Inherited from

[UtilInput](UtilInput.md).[_point](UtilInput.md#_point)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L162)

___

### \_rendererBound

• `Protected` `Optional` **\_rendererBound**: `Renderer`

#### Inherited from

[UtilInput](UtilInput.md).[_rendererBound](UtilInput.md#_rendererbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L183)

___

### \_target

• `Protected` **\_target**: `TARGET`

#### Inherited from

[UtilInput](UtilInput.md).[_target](UtilInput.md#_target)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L158)

___

### \_wasStarted

• `Protected` **\_wasStarted**: `boolean`

#### Inherited from

[UtilInput](UtilInput.md).[_wasStarted](UtilInput.md#_wasstarted)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L179)

## Accessors

### element

• `get` **element**(): ``null`` \| `ELEMENT`

#### Returns

``null`` \| `ELEMENT`

#### Inherited from

UtilInput.element

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:313](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L313)

___

### when

• `get` **when**(): [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Returns

[`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Inherited from

UtilInput.when

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:317](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L317)

## Methods

### applyTitle

▸ **applyTitle**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilInput](UtilInput.md).[applyTitle](UtilInput.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L181)

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[cancel](UtilInput.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:543](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L543)

___

### doSelect

▸ `Protected` **doSelect**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[doSelect](UtilInput.md#doselect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:531](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L531)

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

[UtilInput](UtilInput.md).[doStart](UtilInput.md#dostart)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:441](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L441)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[end](UtilInput.md#end)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:698](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L698)

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

[UtilInput](UtilInput.md).[fromValue](UtilInput.md#fromvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L150)

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

[UtilInput](UtilInput.md).[getAfter](UtilInput.md#getafter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:646](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L646)

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

[UtilInput](UtilInput.md).[getBefore](UtilInput.md#getbefore)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:637](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L637)

___

### getClipper

▸ `Protected` **getClipper**(): ``null`` \| `HTMLDivElement`

#### Returns

``null`` \| `HTMLDivElement`

#### Inherited from

[UtilInput](UtilInput.md).[getClipper](UtilInput.md#getclipper)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:618](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L618)

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

[UtilInput](UtilInput.md).[getClipperRect](UtilInput.md#getclipperrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:433](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L433)

___

### getElement

▸ `Protected` **getElement**(`clipper`): ``null`` \| `HTMLTextAreaElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipper` | `HTMLDivElement` |

#### Returns

``null`` \| `HTMLTextAreaElement`

#### Inherited from

[UtilInput](UtilInput.md).[getElement](UtilInput.md#getelement)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L628)

___

### getElementMatrix

▸ `Protected` **getElementMatrix**(): ``null`` \| `Matrix`

#### Returns

``null`` \| `Matrix`

#### Inherited from

[UtilInput](UtilInput.md).[getElementMatrix](UtilInput.md#getelementmatrix)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:429](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L429)

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

[UtilInput](UtilInput.md).[getElementRect](UtilInput.md#getelementrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:421](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L421)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilInput](UtilInput.md).[isShown](UtilInput.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L404)

___

### isStartable

▸ **isStartable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilInput](UtilInput.md).[isStartable](UtilInput.md#isstartable)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:381](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L381)

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

[UtilInput](UtilInput.md).[newAfterStyler](UtilInput.md#newafterstyler)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:307](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L307)

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

[UtilInput](UtilInput.md).[newBeforeStyler](UtilInput.md#newbeforestyler)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L294)

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

#### Inherited from

[UtilInput](UtilInput.md).[newClipperStyler](UtilInput.md#newclipperstyler)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:267](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L267)

___

### newElementStyler

▸ `Protected` **newElementStyler**(`theme`): (`target`: `HTMLTextAreaElement`, `state`: [`DBaseStateSet`](../interfaces/DBaseStateSet.md), `padding`: ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding), `elementRect`: ``null`` \| `Rectangle`, `elementMatrix`: ``null`` \| `Matrix`, `clipperRect`: ``null`` \| `Rectangle`) => `void`

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
| `target` | `HTMLTextAreaElement` |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `padding` | ``null`` \| [`UtilHtmlElementPadding`](../index.md#utilhtmlelementpadding) |
| `elementRect` | ``null`` \| `Rectangle` |
| `elementMatrix` | ``null`` \| `Matrix` |
| `clipperRect` | ``null`` \| `Rectangle` |

##### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[newElementStyler](UtilInput.md#newelementstyler)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L237)

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

[UtilInput](UtilInput.md).[onAfterFocus](UtilInput.md#onafterfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:668](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L668)

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

[UtilInput](UtilInput.md).[onBeforeFocus](UtilInput.md#onbeforefocus)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:655](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L655)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[onBlur](UtilInput.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L367)

___

### onCancel

▸ `Protected` **onCancel**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[onCancel](UtilInput.md#oncancel)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L594)

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

[UtilInput](UtilInput.md).[onDblClick](UtilInput.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:345](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L345)

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

[UtilInput](UtilInput.md).[onDown](UtilInput.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:335](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L335)

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

[UtilInput](UtilInput.md).[onDowning](UtilInput.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:321](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L321)

___

### onElementAttached

▸ `Protected` **onElementAttached**(`element`, `before?`, `after?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLTextAreaElement` |
| `before?` | ``null`` \| `HTMLDivElement` |
| `after?` | ``null`` \| `HTMLDivElement` |

#### Returns

`void`

#### Overrides

[UtilInput](UtilInput.md).[onElementAttached](UtilInput.md#onelementattached)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-text-area.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input-text-area.ts#L30)

___

### onElementDetached

▸ `Protected` **onElementDetached**(`element`, `before?`, `after?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLTextAreaElement` |
| `before?` | ``null`` \| `HTMLDivElement` |
| `after?` | ``null`` \| `HTMLDivElement` |

#### Returns

`void`

#### Overrides

[UtilInput](UtilInput.md).[onElementDetached](UtilInput.md#onelementdetached)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-text-area.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input-text-area.ts#L39)

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

[UtilInput](UtilInput.md).[onElementFocus](UtilInput.md#onelementfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:681](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L681)

___

### onEnd

▸ `Protected` **onEnd**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[onEnd](UtilInput.md#onend)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L91)

___

### onEndByBlur

▸ `Protected` **onEndByBlur**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[onEndByBlur](UtilInput.md#onendbyblur)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:690](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L690)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[onFocus](UtilInput.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:356](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L356)

___

### onInputChange

▸ `Protected` **onInputChange**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[onInputChange](UtilInput.md#oninputchange)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L132)

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

[UtilInput](UtilInput.md).[onInputInput](UtilInput.md#oninputinput)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L157)

___

### onInputKeyDown

▸ `Protected` **onInputKeyDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`void`

#### Overrides

[UtilInput](UtilInput.md).[onInputKeyDown](UtilInput.md#oninputkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-text-area.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input-text-area.ts#L48)

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

[UtilInput](UtilInput.md).[onRender](UtilInput.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:408](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L408)

___

### onStart

▸ `Protected` **onStart**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[onStart](UtilInput.md#onstart)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:527](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L527)

___

### select

▸ **select**(): [`UtilInputTextArea`](UtilInputTextArea.md)<`TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

#### Returns

[`UtilInputTextArea`](UtilInputTextArea.md)<`TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

#### Inherited from

[UtilInput](UtilInput.md).[select](UtilInput.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:703](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L703)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[start](UtilInput.md#start)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:392](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L392)

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

[UtilInput](UtilInput.md).[toAfterData](UtilInput.md#toafterdata)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L300)

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

[UtilInput](UtilInput.md).[toBeforeData](UtilInput.md#tobeforedata)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L287)

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

[UtilInput](UtilInput.md).[toClipperData](UtilInput.md#toclipperdata)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:257](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L257)

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

[UtilInput](UtilInput.md).[toClipperRectAdjusted](UtilInput.md#toclipperrectadjusted)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:710](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L710)

___

### toData

▸ `Protected` **toData**(`theme`, `options?`): [`UtilHtmlElementData`](../interfaces/UtilHtmlElementData.md)<`HTMLTextAreaElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Returns

[`UtilHtmlElementData`](../interfaces/UtilHtmlElementData.md)<`HTMLTextAreaElement`\>

#### Inherited from

[UtilInput](UtilInput.md).[toData](UtilInput.md#todata)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L216)

___

### toElementData

▸ `Protected` **toElementData**(`theme`, `options?`): [`UtilHtmlElementElementData`](../interfaces/UtilHtmlElementElementData.md)<`HTMLTextAreaElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `THEME` |
| `options?` | `OPTIONS`[``"element"``] |

#### Returns

[`UtilHtmlElementElementData`](../interfaces/UtilHtmlElementElementData.md)<`HTMLTextAreaElement`\>

#### Inherited from

[UtilInput](UtilInput.md).[toElementData](UtilInput.md#toelementdata)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L227)

___

### toElementFocused

▸ `Protected` **toElementFocused**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLTextAreaElement` |

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[toElementFocused](UtilInput.md#toelementfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L126)

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

[UtilInput](UtilInput.md).[toValue](UtilInput.md#tovalue)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L146)

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

[UtilInput](UtilInput.md).[updateElement](UtilInput.md#updateelement)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:736](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L736)

___

### validate

▸ **validate**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

[UtilInput](UtilInput.md).[validate](UtilInput.md#validate)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L164)

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

[UtilInput](UtilInput.md).[getClipperRect](UtilInput.md#getclipperrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:787](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L787)
