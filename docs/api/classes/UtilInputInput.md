[Winter Cardinal UI - v0.194.0](../index.md) / UtilInputInput

# Class: UtilInputInput<VALUE, TARGET, OPERATION, THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `TARGET` | extends [`UtilInputInputTarget`](../interfaces/UtilInputInputTarget.md) = [`UtilInputInputTarget`](../interfaces/UtilInputInputTarget.md) |
| `OPERATION` | extends [`UtilInputInputOperation`](../interfaces/UtilInputInputOperation.md)<`VALUE`\> = [`UtilInputInputOperation`](../interfaces/UtilInputInputOperation.md)<`VALUE`\> |
| `THEME` | extends [`UtilThemeInputInput`](../interfaces/UtilThemeInputInput.md)<`VALUE`\> = [`UtilThemeInputInput`](../interfaces/UtilThemeInputInput.md)<`VALUE`\> |
| `OPTIONS` | extends [`UtilInputInputOptions`](../interfaces/UtilInputInputOptions.md)<`VALUE`\> = [`UtilInputInputOptions`](../interfaces/UtilInputInputOptions.md)<`VALUE`\> |

## Hierarchy

- [`UtilInput`](UtilInput.md)<`VALUE`, `HTMLInputElement`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

  ↳ **`UtilInputInput`**

  ↳↳ [`UtilInputNumber`](UtilInputNumber.md)

  ↳↳ [`UtilInputText`](UtilInputText.md)

## Table of contents

### Constructors

- [constructor](UtilInputInput.md#constructor)

### Properties

- [\_after](UtilInputInput.md#_after)
- [\_before](UtilInputInput.md#_before)
- [\_clipper](UtilInputInput.md#_clipper)
- [\_clipperEx](UtilInputInput.md#_clipperex)
- [\_clipperExRects](UtilInputInput.md#_clipperexrects)
- [\_clipperRectResult](UtilInputInput.md#_clipperrectresult)
- [\_data](UtilInputInput.md#_data)
- [\_description](UtilInputInput.md#_description)
- [\_doSelectBound](UtilInputInput.md#_doselectbound)
- [\_editingFormatter](UtilInputInput.md#_editingformatter)
- [\_editingUnformatter](UtilInputInput.md#_editingunformatter)
- [\_editingValidationResult](UtilInputInput.md#_editingvalidationresult)
- [\_editingValidator](UtilInputInput.md#_editingvalidator)
- [\_element](UtilInputInput.md#_element)
- [\_elementRectResult](UtilInputInput.md#_elementrectresult)
- [\_isElementShown](UtilInputInput.md#_iselementshown)
- [\_isStartRequested](UtilInputInput.md#_isstartrequested)
- [\_isStarted](UtilInputInput.md#_isstarted)
- [\_onAfterFocusBound](UtilInputInput.md#_onafterfocusbound)
- [\_onBeforeFocusBound](UtilInputInput.md#_onbeforefocusbound)
- [\_onElementFocusBound](UtilInputInput.md#_onelementfocusbound)
- [\_onInputChangeBound](UtilInputInput.md#_oninputchangebound)
- [\_onInputInputBound](UtilInputInput.md#_oninputinputbound)
- [\_onInputKeyDownBound](UtilInputInput.md#_oninputkeydownbound)
- [\_onPostRenderBound](UtilInputInput.md#_onpostrenderbound)
- [\_operation](UtilInputInput.md#_operation)
- [\_point](UtilInputInput.md#_point)
- [\_rendererBound](UtilInputInput.md#_rendererbound)
- [\_target](UtilInputInput.md#_target)
- [\_wasStarted](UtilInputInput.md#_wasstarted)

### Accessors

- [element](UtilInputInput.md#element)
- [when](UtilInputInput.md#when)

### Methods

- [applyTitle](UtilInputInput.md#applytitle)
- [cancel](UtilInputInput.md#cancel)
- [doSelect](UtilInputInput.md#doselect)
- [doStart](UtilInputInput.md#dostart)
- [end](UtilInputInput.md#end)
- [fillClipperExRects](UtilInputInput.md#fillclipperexrects)
- [fromValue](UtilInputInput.md#fromvalue)
- [getAfter](UtilInputInput.md#getafter)
- [getBefore](UtilInputInput.md#getbefore)
- [getClipper](UtilInputInput.md#getclipper)
- [getClipperEx](UtilInputInput.md#getclipperex)
- [getClipperExRects](UtilInputInput.md#getclipperexrects)
- [getClipperRect](UtilInputInput.md#getclipperrect)
- [getElement](UtilInputInput.md#getelement)
- [getElementMatrix](UtilInputInput.md#getelementmatrix)
- [getElementRect](UtilInputInput.md#getelementrect)
- [isShown](UtilInputInput.md#isshown)
- [isStartable](UtilInputInput.md#isstartable)
- [newAfterStyler](UtilInputInput.md#newafterstyler)
- [newBeforeStyler](UtilInputInput.md#newbeforestyler)
- [newClipperStyler](UtilInputInput.md#newclipperstyler)
- [newElementStyler](UtilInputInput.md#newelementstyler)
- [onAfterFocus](UtilInputInput.md#onafterfocus)
- [onBeforeFocus](UtilInputInput.md#onbeforefocus)
- [onBlur](UtilInputInput.md#onblur)
- [onCancel](UtilInputInput.md#oncancel)
- [onDblClick](UtilInputInput.md#ondblclick)
- [onDown](UtilInputInput.md#ondown)
- [onDowning](UtilInputInput.md#ondowning)
- [onElementAttached](UtilInputInput.md#onelementattached)
- [onElementDetached](UtilInputInput.md#onelementdetached)
- [onElementFocus](UtilInputInput.md#onelementfocus)
- [onEnd](UtilInputInput.md#onend)
- [onEndByBlur](UtilInputInput.md#onendbyblur)
- [onFocus](UtilInputInput.md#onfocus)
- [onInputChange](UtilInputInput.md#oninputchange)
- [onInputInput](UtilInputInput.md#oninputinput)
- [onInputKeyDown](UtilInputInput.md#oninputkeydown)
- [onRender](UtilInputInput.md#onrender)
- [onStart](UtilInputInput.md#onstart)
- [select](UtilInputInput.md#select)
- [start](UtilInputInput.md#start)
- [toAfterData](UtilInputInput.md#toafterdata)
- [toBeforeData](UtilInputInput.md#tobeforedata)
- [toClipperData](UtilInputInput.md#toclipperdata)
- [toClipperRectAdjusted](UtilInputInput.md#toclipperrectadjusted)
- [toData](UtilInputInput.md#todata)
- [toElementData](UtilInputInput.md#toelementdata)
- [toElementFocused](UtilInputInput.md#toelementfocused)
- [toValue](UtilInputInput.md#tovalue)
- [updateElement](UtilInputInput.md#updateelement)
- [validate](UtilInputInput.md#validate)
- [getClipperRect](UtilInputInput.md#getclipperrect)

## Constructors

### constructor

• **new UtilInputInput**<`VALUE`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>(`target`, `operation`, `theme`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `VALUE` | `unknown` |
| `TARGET` | extends [`UtilInputInputTarget`](../interfaces/UtilInputInputTarget.md) = [`UtilInputInputTarget`](../interfaces/UtilInputInputTarget.md) |
| `OPERATION` | extends [`UtilInputInputOperation`](../interfaces/UtilInputInputOperation.md)<`VALUE`, `OPERATION`\> = [`UtilInputInputOperation`](../interfaces/UtilInputInputOperation.md)<`VALUE`\> |
| `THEME` | extends [`UtilThemeInputInput`](../interfaces/UtilThemeInputInput.md)<`VALUE`, `THEME`\> = [`UtilThemeInputInput`](../interfaces/UtilThemeInputInput.md)<`VALUE`\> |
| `OPTIONS` | extends [`UtilInputInputOptions`](../interfaces/UtilInputInputOptions.md)<`VALUE`, `OPTIONS`\> = [`UtilInputInputOptions`](../interfaces/UtilInputInputOptions.md)<`VALUE`\> |

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

[src/main/typescript/wcardinal/ui/util/util-input.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L67)

## Properties

### \_after

• `Protected` `Optional` **\_after**: ``null`` \| `HTMLDivElement`

#### Inherited from

[UtilInput](UtilInput.md).[_after](UtilInput.md#_after)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L189)

___

### \_before

• `Protected` `Optional` **\_before**: ``null`` \| `HTMLDivElement`

#### Inherited from

[UtilInput](UtilInput.md).[_before](UtilInput.md#_before)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:186](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L186)

___

### \_clipper

• `Protected` `Optional` **\_clipper**: ``null`` \| `HTMLDivElement`

#### Inherited from

[UtilInput](UtilInput.md).[_clipper](UtilInput.md#_clipper)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L175)

___

### \_clipperEx

• `Protected` `Optional` **\_clipperEx**: ``null`` \| [`UtilHtmlElementClipperEx`](../interfaces/UtilHtmlElementClipperEx.md)

#### Inherited from

[UtilInput](UtilInput.md).[_clipperEx](UtilInput.md#_clipperex)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:178](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L178)

___

### \_clipperExRects

• `Protected` `Optional` **\_clipperExRects**: ``null`` \| [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md)

#### Inherited from

[UtilInput](UtilInput.md).[_clipperExRects](UtilInput.md#_clipperexrects)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L179)

___

### \_clipperRectResult

• `Protected` `Optional` **\_clipperRectResult**: `Rectangle`

#### Inherited from

[UtilInput](UtilInput.md).[_clipperRectResult](UtilInput.md#_clipperrectresult)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L176)

___

### \_data

• `Protected` **\_data**: [`UtilHtmlElementData`](../interfaces/UtilHtmlElementData.md)<`HTMLInputElement`\>

#### Inherited from

[UtilInput](UtilInput.md).[_data](UtilInput.md#_data)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L171)

___

### \_description

• `Protected` **\_description**: `string`

#### Inherited from

[UtilInput](UtilInput.md).[_description](UtilInput.md#_description)

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

[UtilInput](UtilInput.md).[_doSelectBound](UtilInput.md#_doselectbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L194)

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

#### Inherited from

[UtilInput](UtilInput.md).[_editingFormatter](UtilInput.md#_editingformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L62)

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

#### Inherited from

[UtilInput](UtilInput.md).[_editingUnformatter](UtilInput.md#_editingunformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L63)

___

### \_editingValidationResult

• `Protected` `Optional` **\_editingValidationResult**: ``null`` \| `string`

#### Inherited from

[UtilInput](UtilInput.md).[_editingValidationResult](UtilInput.md#_editingvalidationresult)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L65)

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

#### Inherited from

[UtilInput](UtilInput.md).[_editingValidator](UtilInput.md#_editingvalidator)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L64)

___

### \_element

• `Protected` `Optional` **\_element**: ``null`` \| `HTMLInputElement`

#### Inherited from

[UtilInput](UtilInput.md).[_element](UtilInput.md#_element)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L181)

___

### \_elementRectResult

• `Protected` `Optional` **\_elementRectResult**: `Rectangle`

#### Inherited from

[UtilInput](UtilInput.md).[_elementRectResult](UtilInput.md#_elementrectresult)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L182)

___

### \_isElementShown

• `Protected` **\_isElementShown**: `boolean`

#### Inherited from

[UtilInput](UtilInput.md).[_isElementShown](UtilInput.md#_iselementshown)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L183)

___

### \_isStartRequested

• `Protected` **\_isStartRequested**: `boolean`

#### Inherited from

[UtilInput](UtilInput.md).[_isStartRequested](UtilInput.md#_isstartrequested)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:195](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L195)

___

### \_isStarted

• `Protected` **\_isStarted**: `boolean`

#### Inherited from

[UtilInput](UtilInput.md).[_isStarted](UtilInput.md#_isstarted)

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

[UtilInput](UtilInput.md).[_onAfterFocusBound](UtilInput.md#_onafterfocusbound)

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

[UtilInput](UtilInput.md).[_onBeforeFocusBound](UtilInput.md#_onbeforefocusbound)

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

[UtilInput](UtilInput.md).[_onElementFocusBound](UtilInput.md#_onelementfocusbound)

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

[UtilInput](UtilInput.md).[_onInputChangeBound](UtilInput.md#_oninputchangebound)

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

[UtilInput](UtilInput.md).[_onInputInputBound](UtilInput.md#_oninputinputbound)

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

[UtilInput](UtilInput.md).[_onInputKeyDownBound](UtilInput.md#_oninputkeydownbound)

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

[UtilInput](UtilInput.md).[_onPostRenderBound](UtilInput.md#_onpostrenderbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L198)

___

### \_operation

• `Protected` **\_operation**: `OPERATION`

#### Inherited from

[UtilInput](UtilInput.md).[_operation](UtilInput.md#_operation)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L170)

___

### \_point

• `Protected` `Optional` **\_point**: `Point`

#### Inherited from

[UtilInput](UtilInput.md).[_point](UtilInput.md#_point)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L173)

___

### \_rendererBound

• `Protected` `Optional` **\_rendererBound**: `Renderer`

#### Inherited from

[UtilInput](UtilInput.md).[_rendererBound](UtilInput.md#_rendererbound)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L197)

___

### \_target

• `Protected` **\_target**: `TARGET`

#### Inherited from

[UtilInput](UtilInput.md).[_target](UtilInput.md#_target)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L169)

___

### \_wasStarted

• `Protected` **\_wasStarted**: `boolean`

#### Inherited from

[UtilInput](UtilInput.md).[_wasStarted](UtilInput.md#_wasstarted)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L193)

## Accessors

### element

• `get` **element**(): ``null`` \| `ELEMENT`

#### Returns

``null`` \| `ELEMENT`

#### Inherited from

UtilInput.element

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:332](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L332)

___

### when

• `get` **when**(): [`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Returns

[`UtilHtmlElementWhen`](../index.md#utilhtmlelementwhen)

#### Inherited from

UtilInput.when

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:336](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L336)

## Methods

### applyTitle

▸ **applyTitle**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilInput](UtilInput.md).[applyTitle](UtilInput.md#applytitle)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L181)

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[cancel](UtilInput.md#cancel)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:585](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L585)

___

### doSelect

▸ `Protected` **doSelect**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[doSelect](UtilInput.md#doselect)

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

[UtilInput](UtilInput.md).[doStart](UtilInput.md#dostart)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L471)

___

### end

▸ **end**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[end](UtilInput.md#end)

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

[UtilInput](UtilInput.md).[fillClipperExRects](UtilInput.md#fillclipperexrects)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:460](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L460)

___

### fromValue

▸ **fromValue**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| `VALUE` |

#### Returns

`string`

#### Inherited from

[UtilInput](UtilInput.md).[fromValue](UtilInput.md#fromvalue)

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

[UtilInput](UtilInput.md).[getAfter](UtilInput.md#getafter)

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

[UtilInput](UtilInput.md).[getBefore](UtilInput.md#getbefore)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:706](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L706)

___

### getClipper

▸ `Protected` **getClipper**(): ``null`` \| `HTMLDivElement`

#### Returns

``null`` \| `HTMLDivElement`

#### Inherited from

[UtilInput](UtilInput.md).[getClipper](UtilInput.md#getclipper)

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

[UtilInput](UtilInput.md).[getClipperEx](UtilInput.md#getclipperex)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:670](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L670)

___

### getClipperExRects

▸ `Protected` **getClipperExRects**(): ``null`` \| [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md)

#### Returns

``null`` \| [`UtilHtmlElementClipperExRects`](../interfaces/UtilHtmlElementClipperExRects.md)

#### Inherited from

[UtilInput](UtilInput.md).[getClipperExRects](UtilInput.md#getclipperexrects)

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

[UtilInput](UtilInput.md).[getClipperRect](UtilInput.md#getclipperrect)

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

[UtilInput](UtilInput.md).[getElement](UtilInput.md#getelement)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:697](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L697)

___

### getElementMatrix

▸ `Protected` **getElementMatrix**(): ``null`` \| `Matrix`

#### Returns

``null`` \| `Matrix`

#### Inherited from

[UtilInput](UtilInput.md).[getElementMatrix](UtilInput.md#getelementmatrix)

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

[UtilInput](UtilInput.md).[getElementRect](UtilInput.md#getelementrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:440](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L440)

___

### isShown

▸ **isShown**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilInput](UtilInput.md).[isShown](UtilInput.md#isshown)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L423)

___

### isStartable

▸ **isStartable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UtilInput](UtilInput.md).[isStartable](UtilInput.md#isstartable)

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

[UtilInput](UtilInput.md).[newAfterStyler](UtilInput.md#newafterstyler)

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

[UtilInput](UtilInput.md).[newBeforeStyler](UtilInput.md#newbeforestyler)

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

[UtilInput](UtilInput.md).[newClipperStyler](UtilInput.md#newclipperstyler)

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

[UtilInput](UtilInput.md).[newElementStyler](UtilInput.md#newelementstyler)

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

[UtilInput](UtilInput.md).[onAfterFocus](UtilInput.md#onafterfocus)

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

[UtilInput](UtilInput.md).[onBeforeFocus](UtilInput.md#onbeforefocus)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:724](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L724)

___

### onBlur

▸ **onBlur**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[onBlur](UtilInput.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L386)

___

### onCancel

▸ `Protected` **onCancel**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[onCancel](UtilInput.md#oncancel)

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

[UtilInput](UtilInput.md).[onDblClick](UtilInput.md#ondblclick)

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

[UtilInput](UtilInput.md).[onDown](UtilInput.md#ondown)

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

[UtilInput](UtilInput.md).[onDowning](UtilInput.md#ondowning)

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

[UtilInput](UtilInput.md).[onElementAttached](UtilInput.md#onelementattached)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-input.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-input.ts#L30)

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

#### Overrides

[UtilInput](UtilInput.md).[onElementDetached](UtilInput.md#onelementdetached)

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

[UtilInput](UtilInput.md).[onElementFocus](UtilInput.md#onelementfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:750](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L750)

___

### onEnd

▸ `Protected` **onEnd**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[onEnd](UtilInput.md#onend)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L91)

___

### onEndByBlur

▸ `Protected` **onEndByBlur**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[onEndByBlur](UtilInput.md#onendbyblur)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:759](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L759)

___

### onFocus

▸ **onFocus**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[onFocus](UtilInput.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:375](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L375)

___

### onInputChange

▸ `Protected` **onInputChange**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[onInputChange](UtilInput.md#oninputchange)

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

[UtilInput](UtilInput.md).[onInputInput](UtilInput.md#oninputinput)

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

[UtilInput](UtilInput.md).[onInputKeyDown](UtilInput.md#oninputkeydown)

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

[UtilInput](UtilInput.md).[onRender](UtilInput.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:427](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L427)

___

### onStart

▸ `Protected` **onStart**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[onStart](UtilInput.md#onstart)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:569](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L569)

___

### select

▸ **select**(): [`UtilInputInput`](UtilInputInput.md)<`VALUE`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

#### Returns

[`UtilInputInput`](UtilInputInput.md)<`VALUE`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

#### Inherited from

[UtilInput](UtilInput.md).[select](UtilInput.md#select)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L772)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UtilInput](UtilInput.md).[start](UtilInput.md#start)

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

[UtilInput](UtilInput.md).[toAfterData](UtilInput.md#toafterdata)

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

[UtilInput](UtilInput.md).[toBeforeData](UtilInput.md#tobeforedata)

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

[UtilInput](UtilInput.md).[toClipperData](UtilInput.md#toclipperdata)

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

[UtilInput](UtilInput.md).[toClipperRectAdjusted](UtilInput.md#toclipperrectadjusted)

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

[UtilInput](UtilInput.md).[toData](UtilInput.md#todata)

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

[UtilInput](UtilInput.md).[toElementData](UtilInput.md#toelementdata)

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

[UtilInput](UtilInput.md).[toElementFocused](UtilInput.md#toelementfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L126)

___

### toValue

▸ **toValue**(`valueAsString`): `VALUE`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueAsString` | `string` |

#### Returns

`VALUE`

#### Inherited from

[UtilInput](UtilInput.md).[toValue](UtilInput.md#tovalue)

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

[UtilInput](UtilInput.md).[updateElement](UtilInput.md#updateelement)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:805](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L805)

___

### validate

▸ **validate**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

[UtilInput](UtilInput.md).[validate](UtilInput.md#validate)

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

[UtilInput](UtilInput.md).[getClipperRect](UtilInput.md#getclipperrect)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-html-element.ts:868](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-html-element.ts#L868)
