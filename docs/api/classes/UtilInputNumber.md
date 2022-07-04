[Winter Cardinal UI - v0.194.0](../index.md) / UtilInputNumber

# Class: UtilInputNumber<TARGET, OPERATION, THEME, OPTIONS\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | extends [`UtilInputNumberTarget`](../interfaces/UtilInputNumberTarget.md) = [`UtilInputNumberTarget`](../interfaces/UtilInputNumberTarget.md) |
| `OPERATION` | extends [`UtilInputNumberOperation`](../interfaces/UtilInputNumberOperation.md) = [`UtilInputNumberOperation`](../interfaces/UtilInputNumberOperation.md) |
| `THEME` | extends [`UtilThemeInputNumber`](../interfaces/UtilThemeInputNumber.md) = [`UtilThemeInputNumber`](../interfaces/UtilThemeInputNumber.md) |
| `OPTIONS` | extends [`UtilInputNumberOptions`](../interfaces/UtilInputNumberOptions.md) = [`UtilInputNumberOptions`](../interfaces/UtilInputNumberOptions.md) |

## Hierarchy

- [`UtilInputInput`](UtilInputInput.md)<`number`, `TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

  ↳ **`UtilInputNumber`**

## Table of contents

### Constructors

- [constructor](UtilInputNumber.md#constructor)

### Properties

- [\_after](UtilInputNumber.md#_after)
- [\_before](UtilInputNumber.md#_before)
- [\_clipper](UtilInputNumber.md#_clipper)
- [\_clipperEx](UtilInputNumber.md#_clipperex)
- [\_clipperExRects](UtilInputNumber.md#_clipperexrects)
- [\_clipperRectResult](UtilInputNumber.md#_clipperrectresult)
- [\_data](UtilInputNumber.md#_data)
- [\_description](UtilInputNumber.md#_description)
- [\_doSelectBound](UtilInputNumber.md#_doselectbound)
- [\_editingFormatter](UtilInputNumber.md#_editingformatter)
- [\_editingUnformatter](UtilInputNumber.md#_editingunformatter)
- [\_editingValidationResult](UtilInputNumber.md#_editingvalidationresult)
- [\_editingValidator](UtilInputNumber.md#_editingvalidator)
- [\_element](UtilInputNumber.md#_element)
- [\_elementRectResult](UtilInputNumber.md#_elementrectresult)
- [\_isElementShown](UtilInputNumber.md#_iselementshown)
- [\_isStartRequested](UtilInputNumber.md#_isstartrequested)
- [\_isStarted](UtilInputNumber.md#_isstarted)
- [\_max](UtilInputNumber.md#_max)
- [\_min](UtilInputNumber.md#_min)
- [\_onAfterFocusBound](UtilInputNumber.md#_onafterfocusbound)
- [\_onBeforeFocusBound](UtilInputNumber.md#_onbeforefocusbound)
- [\_onElementFocusBound](UtilInputNumber.md#_onelementfocusbound)
- [\_onInputChangeBound](UtilInputNumber.md#_oninputchangebound)
- [\_onInputInputBound](UtilInputNumber.md#_oninputinputbound)
- [\_onInputKeyDownBound](UtilInputNumber.md#_oninputkeydownbound)
- [\_onPostRenderBound](UtilInputNumber.md#_onpostrenderbound)
- [\_operation](UtilInputNumber.md#_operation)
- [\_point](UtilInputNumber.md#_point)
- [\_rendererBound](UtilInputNumber.md#_rendererbound)
- [\_step](UtilInputNumber.md#_step)
- [\_target](UtilInputNumber.md#_target)
- [\_wasStarted](UtilInputNumber.md#_wasstarted)

### Accessors

- [element](UtilInputNumber.md#element)
- [max](UtilInputNumber.md#max)
- [min](UtilInputNumber.md#min)
- [step](UtilInputNumber.md#step)
- [when](UtilInputNumber.md#when)

### Methods

- [applyTitle](UtilInputNumber.md#applytitle)
- [cancel](UtilInputNumber.md#cancel)
- [doSelect](UtilInputNumber.md#doselect)
- [doStart](UtilInputNumber.md#dostart)
- [end](UtilInputNumber.md#end)
- [fillClipperExRects](UtilInputNumber.md#fillclipperexrects)
- [fromValue](UtilInputNumber.md#fromvalue)
- [getAfter](UtilInputNumber.md#getafter)
- [getBefore](UtilInputNumber.md#getbefore)
- [getClipper](UtilInputNumber.md#getclipper)
- [getClipperEx](UtilInputNumber.md#getclipperex)
- [getClipperExRects](UtilInputNumber.md#getclipperexrects)
- [getClipperRect](UtilInputNumber.md#getclipperrect)
- [getElement](UtilInputNumber.md#getelement)
- [getElementMatrix](UtilInputNumber.md#getelementmatrix)
- [getElementRect](UtilInputNumber.md#getelementrect)
- [isShown](UtilInputNumber.md#isshown)
- [isStartable](UtilInputNumber.md#isstartable)
- [newAfterStyler](UtilInputNumber.md#newafterstyler)
- [newBeforeStyler](UtilInputNumber.md#newbeforestyler)
- [newClipperStyler](UtilInputNumber.md#newclipperstyler)
- [newElementStyler](UtilInputNumber.md#newelementstyler)
- [onAfterFocus](UtilInputNumber.md#onafterfocus)
- [onBeforeFocus](UtilInputNumber.md#onbeforefocus)
- [onBlur](UtilInputNumber.md#onblur)
- [onCancel](UtilInputNumber.md#oncancel)
- [onDblClick](UtilInputNumber.md#ondblclick)
- [onDown](UtilInputNumber.md#ondown)
- [onDowning](UtilInputNumber.md#ondowning)
- [onElementAttached](UtilInputNumber.md#onelementattached)
- [onElementDetached](UtilInputNumber.md#onelementdetached)
- [onElementFocus](UtilInputNumber.md#onelementfocus)
- [onEnd](UtilInputNumber.md#onend)
- [onEndByBlur](UtilInputNumber.md#onendbyblur)
- [onFocus](UtilInputNumber.md#onfocus)
- [onInputChange](UtilInputNumber.md#oninputchange)
- [onInputInput](UtilInputNumber.md#oninputinput)
- [onInputKeyDown](UtilInputNumber.md#oninputkeydown)
- [onMaxChange](UtilInputNumber.md#onmaxchange)
- [onMinChange](UtilInputNumber.md#onminchange)
- [onRender](UtilInputNumber.md#onrender)
- [onStart](UtilInputNumber.md#onstart)
- [onStepChange](UtilInputNumber.md#onstepchange)
- [select](UtilInputNumber.md#select)
- [start](UtilInputNumber.md#start)
- [toAfterData](UtilInputNumber.md#toafterdata)
- [toBeforeData](UtilInputNumber.md#tobeforedata)
- [toClipperData](UtilInputNumber.md#toclipperdata)
- [toClipperRectAdjusted](UtilInputNumber.md#toclipperrectadjusted)
- [toData](UtilInputNumber.md#todata)
- [toElementData](UtilInputNumber.md#toelementdata)
- [toElementFocused](UtilInputNumber.md#toelementfocused)
- [toValue](UtilInputNumber.md#tovalue)
- [updateElement](UtilInputNumber.md#updateelement)
- [updateMax](UtilInputNumber.md#updatemax)
- [updateMin](UtilInputNumber.md#updatemin)
- [updateStep](UtilInputNumber.md#updatestep)
- [validate](UtilInputNumber.md#validate)
- [getClipperRect](UtilInputNumber.md#getclipperrect)

## Constructors

### constructor

• **new UtilInputNumber**<`TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>(`target`, `operation`, `theme`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TARGET` | extends [`UtilInputNumberTarget`](../interfaces/UtilInputNumberTarget.md) = [`UtilInputNumberTarget`](../interfaces/UtilInputNumberTarget.md) |
| `OPERATION` | extends [`UtilInputNumberOperation`](../interfaces/UtilInputNumberOperation.md)<`OPERATION`\> = [`UtilInputNumberOperation`](../interfaces/UtilInputNumberOperation.md) |
| `THEME` | extends [`UtilThemeInputNumber`](../interfaces/UtilThemeInputNumber.md)<`THEME`\> = [`UtilThemeInputNumber`](../interfaces/UtilThemeInputNumber.md) |
| `OPTIONS` | extends [`UtilInputNumberOptions`](../interfaces/UtilInputNumberOptions.md)<`OPTIONS`\> = [`UtilInputNumberOptions`](../interfaces/UtilInputNumberOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TARGET` |
| `operation` | `OPERATION` |
| `theme` | `THEME` |
| `options?` | `OPTIONS` |

#### Overrides

[UtilInputInput](UtilInputInput.md).[constructor](UtilInputInput.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L40)

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

• `Protected` **\_editingFormatter**: (`value`: `number`, `caller`: `any`) => `string`

#### Type declaration

▸ (`value`, `caller`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `caller` | `any` |

##### Returns

`string`

#### Inherited from

[UtilInputInput](UtilInputInput.md).[_editingFormatter](UtilInputInput.md#_editingformatter)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input.ts#L62)

___

### \_editingUnformatter

• `Protected` **\_editingUnformatter**: (`text`: `string`, `caller`: `any`) => `number`

#### Type declaration

▸ (`text`, `caller`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `caller` | `any` |

##### Returns

`number`

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

• `Protected` **\_editingValidator**: (`value`: `number`, `caller`: `any`) => ``null`` \| `string`

#### Type declaration

▸ (`value`, `caller`): ``null`` \| `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
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

### \_max

• `Protected` **\_max**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L38)

___

### \_min

• `Protected` **\_min**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L37)

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

### \_step

• `Protected` **\_step**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L36)

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

### max

• `get` **max**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L70)

• `set` **max**(`max`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L74)

___

### min

• `get` **min**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L59)

• `set` **min**(`min`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L63)

___

### step

• `get` **step**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L48)

• `set` **step**(`step`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L52)

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
| `value` | `undefined` \| `number` |

#### Returns

`string`

#### Overrides

[UtilInputInput](UtilInputInput.md).[fromValue](UtilInputInput.md#fromvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L97)

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

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L158)

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

### onMaxChange

▸ `Protected` **onMaxChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L122)

___

### onMinChange

▸ `Protected` **onMinChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L113)

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

### onStepChange

▸ `Protected` **onStepChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L104)

___

### select

▸ **select**(): [`UtilInputNumber`](UtilInputNumber.md)<`TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

#### Returns

[`UtilInputNumber`](UtilInputNumber.md)<`TARGET`, `OPERATION`, `THEME`, `OPTIONS`\>

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

▸ **toValue**(`valueAsString`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueAsString` | `string` |

#### Returns

`number`

#### Overrides

[UtilInputInput](UtilInputInput.md).[toValue](UtilInputInput.md#tovalue)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L81)

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

### updateMax

▸ `Protected` **updateMax**(`input`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `HTMLInputElement` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L149)

___

### updateMin

▸ `Protected` **updateMin**(`input`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `HTMLInputElement` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L140)

___

### updateStep

▸ `Protected` **updateStep**(`input`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `HTMLInputElement` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-input-number.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-input-number.ts#L131)

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
