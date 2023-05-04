[Winter Cardinal UI - v0.310.1](../index.md) / EShapeButtonRuntimeActionToggle

# Class: EShapeButtonRuntimeActionToggle

A base class of action runtimes.

## Hierarchy

- [`EShapeActionRuntimeBase`](EShapeActionRuntimeBase.md)

  ↳ **`EShapeButtonRuntimeActionToggle`**

## Table of contents

### Constructors

- [constructor](EShapeButtonRuntimeActionToggle.md#constructor)

### Properties

- [\_fillAlpha](EShapeButtonRuntimeActionToggle.md#_fillalpha)
- [\_fillAlphaDisabled](EShapeButtonRuntimeActionToggle.md#_fillalphadisabled)
- [\_fillColor](EShapeButtonRuntimeActionToggle.md#_fillcolor)
- [\_fillColorActive](EShapeButtonRuntimeActionToggle.md#_fillcoloractive)
- [\_fillColorActiveHovered](EShapeButtonRuntimeActionToggle.md#_fillcoloractivehovered)
- [\_fillColorActivePressed](EShapeButtonRuntimeActionToggle.md#_fillcoloractivepressed)
- [\_fillColorHovered](EShapeButtonRuntimeActionToggle.md#_fillcolorhovered)
- [\_fillColorPressed](EShapeButtonRuntimeActionToggle.md#_fillcolorpressed)
- [\_strokeAlpha](EShapeButtonRuntimeActionToggle.md#_strokealpha)
- [\_strokeAlphaDisabled](EShapeButtonRuntimeActionToggle.md#_strokealphadisabled)
- [\_strokeColor](EShapeButtonRuntimeActionToggle.md#_strokecolor)
- [\_strokeColorActive](EShapeButtonRuntimeActionToggle.md#_strokecoloractive)
- [\_strokeColorActiveHovered](EShapeButtonRuntimeActionToggle.md#_strokecoloractivehovered)
- [\_strokeColorActivePressed](EShapeButtonRuntimeActionToggle.md#_strokecoloractivepressed)
- [\_strokeColorGrayscaleHovered](EShapeButtonRuntimeActionToggle.md#_strokecolorgrayscalehovered)
- [\_strokeColorPressed](EShapeButtonRuntimeActionToggle.md#_strokecolorpressed)
- [\_textAlpha](EShapeButtonRuntimeActionToggle.md#_textalpha)
- [\_textAlphaDisabled](EShapeButtonRuntimeActionToggle.md#_textalphadisabled)
- [\_textColor](EShapeButtonRuntimeActionToggle.md#_textcolor)
- [\_textColorActive](EShapeButtonRuntimeActionToggle.md#_textcoloractive)
- [\_textColorDisabled](EShapeButtonRuntimeActionToggle.md#_textcolordisabled)
- [\_textOutlineAlpha](EShapeButtonRuntimeActionToggle.md#_textoutlinealpha)
- [\_textOutlineAlphaDisabled](EShapeButtonRuntimeActionToggle.md#_textoutlinealphadisabled)
- [\_textOutlineColor](EShapeButtonRuntimeActionToggle.md#_textoutlinecolor)
- [\_textOutlineColorDisabled](EShapeButtonRuntimeActionToggle.md#_textoutlinecolordisabled)
- [reset](EShapeButtonRuntimeActionToggle.md#reset)

### Methods

- [execute](EShapeButtonRuntimeActionToggle.md#execute)
- [getCursor](EShapeButtonRuntimeActionToggle.md#getcursor)
- [getFillAlpha](EShapeButtonRuntimeActionToggle.md#getfillalpha)
- [getFillColor](EShapeButtonRuntimeActionToggle.md#getfillcolor)
- [getStrokeAlpha](EShapeButtonRuntimeActionToggle.md#getstrokealpha)
- [getStrokeColor](EShapeButtonRuntimeActionToggle.md#getstrokecolor)
- [getTextAlpha](EShapeButtonRuntimeActionToggle.md#gettextalpha)
- [getTextColor](EShapeButtonRuntimeActionToggle.md#gettextcolor)
- [getTextOutlineAlpha](EShapeButtonRuntimeActionToggle.md#gettextoutlinealpha)
- [getTextOutlineColor](EShapeButtonRuntimeActionToggle.md#gettextoutlinecolor)
- [initialize](EShapeButtonRuntimeActionToggle.md#initialize)
- [onBlur](EShapeButtonRuntimeActionToggle.md#onblur)
- [onClick](EShapeButtonRuntimeActionToggle.md#onclick)
- [onDblClick](EShapeButtonRuntimeActionToggle.md#ondblclick)
- [onDown](EShapeButtonRuntimeActionToggle.md#ondown)
- [onDowning](EShapeButtonRuntimeActionToggle.md#ondowning)
- [onFocus](EShapeButtonRuntimeActionToggle.md#onfocus)
- [onKeyDown](EShapeButtonRuntimeActionToggle.md#onkeydown)
- [onKeyUp](EShapeButtonRuntimeActionToggle.md#onkeyup)
- [onMove](EShapeButtonRuntimeActionToggle.md#onmove)
- [onOut](EShapeButtonRuntimeActionToggle.md#onout)
- [onOver](EShapeButtonRuntimeActionToggle.md#onover)
- [onPressed](EShapeButtonRuntimeActionToggle.md#onpressed)
- [onRender](EShapeButtonRuntimeActionToggle.md#onrender)
- [onResize](EShapeButtonRuntimeActionToggle.md#onresize)
- [onRightClick](EShapeButtonRuntimeActionToggle.md#onrightclick)
- [onRightDown](EShapeButtonRuntimeActionToggle.md#onrightdown)
- [onRightDowning](EShapeButtonRuntimeActionToggle.md#onrightdowning)
- [onRightPressed](EShapeButtonRuntimeActionToggle.md#onrightpressed)
- [onRightUnpressed](EShapeButtonRuntimeActionToggle.md#onrightunpressed)
- [onRightUp](EShapeButtonRuntimeActionToggle.md#onrightup)
- [onRightUpOutside](EShapeButtonRuntimeActionToggle.md#onrightupoutside)
- [onUnpressed](EShapeButtonRuntimeActionToggle.md#onunpressed)
- [onUp](EShapeButtonRuntimeActionToggle.md#onup)
- [onUpOutside](EShapeButtonRuntimeActionToggle.md#onupoutside)
- [toOnHovered](EShapeButtonRuntimeActionToggle.md#toonhovered)

## Constructors

### constructor

• **new EShapeButtonRuntimeActionToggle**(`runtime`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Overrides

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[constructor](EShapeActionRuntimeBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L47)

## Properties

### \_fillAlpha

• `Protected` `Readonly` **\_fillAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L21)

___

### \_fillAlphaDisabled

• `Protected` `Readonly` **\_fillAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L22)

___

### \_fillColor

• `Protected` `Readonly` **\_fillColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L17)

___

### \_fillColorActive

• `Protected` `Readonly` **\_fillColorActive**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L14)

___

### \_fillColorActiveHovered

• `Protected` `Readonly` **\_fillColorActiveHovered**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L16)

___

### \_fillColorActivePressed

• `Protected` `Readonly` **\_fillColorActivePressed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L15)

___

### \_fillColorHovered

• `Protected` `Readonly` **\_fillColorHovered**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L19)

___

### \_fillColorPressed

• `Protected` `Readonly` **\_fillColorPressed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L18)

___

### \_strokeAlpha

• `Protected` `Readonly` **\_strokeAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L31)

___

### \_strokeAlphaDisabled

• `Protected` `Readonly` **\_strokeAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L32)

___

### \_strokeColor

• `Protected` `Readonly` **\_strokeColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L27)

___

### \_strokeColorActive

• `Protected` `Readonly` **\_strokeColorActive**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L24)

___

### \_strokeColorActiveHovered

• `Protected` `Readonly` **\_strokeColorActiveHovered**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L26)

___

### \_strokeColorActivePressed

• `Protected` `Readonly` **\_strokeColorActivePressed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L25)

___

### \_strokeColorGrayscaleHovered

• `Protected` `Readonly` **\_strokeColorGrayscaleHovered**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L29)

___

### \_strokeColorPressed

• `Protected` `Readonly` **\_strokeColorPressed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L28)

___

### \_textAlpha

• `Protected` `Readonly` **\_textAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L38)

___

### \_textAlphaDisabled

• `Protected` `Readonly` **\_textAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L39)

___

### \_textColor

• `Protected` `Readonly` **\_textColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L35)

___

### \_textColorActive

• `Protected` `Readonly` **\_textColorActive**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L34)

___

### \_textColorDisabled

• `Protected` `Readonly` **\_textColorDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L36)

___

### \_textOutlineAlpha

• `Protected` `Readonly` **\_textOutlineAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L44)

___

### \_textOutlineAlphaDisabled

• `Protected` `Readonly` **\_textOutlineAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L45)

___

### \_textOutlineColor

• `Protected` `Readonly` **\_textOutlineColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L41)

___

### \_textOutlineColorDisabled

• `Protected` `Readonly` **\_textOutlineColorDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L42)

___

### reset

• `Readonly` **reset**: `number`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[reset](EShapeActionRuntimeBase.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L18)

## Methods

### execute

▸ **execute**(`shape`, `runtime`, `time`): `void`

Called to execute this action for the given shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `time` | `number` | a current time |

#### Returns

`void`

#### Overrides

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[execute](EShapeActionRuntimeBase.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L128)

___

### getCursor

▸ **getCursor**(`state`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L236)

___

### getFillAlpha

▸ `Protected` **getFillAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L164)

___

### getFillColor

▸ `Protected` **getFillColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L142)

___

### getStrokeAlpha

▸ `Protected` **getStrokeAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L194)

___

### getStrokeColor

▸ `Protected` **getStrokeColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L172)

___

### getTextAlpha

▸ `Protected` **getTextAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L212)

___

### getTextColor

▸ `Protected` **getTextColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L202)

___

### getTextOutlineAlpha

▸ `Protected` **getTextOutlineAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L228)

___

### getTextOutlineColor

▸ `Protected` **getTextOutlineColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L220)

___

### initialize

▸ **initialize**(`shape`, `runtime`): `void`

Called to initialize this action runtime for the given shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[initialize](EShapeActionRuntimeBase.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L24)

___

### onBlur

▸ **onBlur**(`shape`, `runtime`): `void`

Called when a shape losees a focuse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onBlur](EShapeActionRuntimeBase.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L40)

___

### onClick

▸ **onClick**(`shape`, `runtime`, `e`): `void`

Called when a shape is clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` \| `KeyboardEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onClick](EShapeActionRuntimeBase.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L44)

___

### onDblClick

▸ **onDblClick**(`shape`, `runtime`, `e`, `manager`): `void`

Called when a shape is double clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `MouseEvent` \| `TouchEvent` | an event object |
| `manager` | `InteractionManager` | the interaction manager |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onDblClick](EShapeActionRuntimeBase.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L48)

___

### onDown

▸ **onDown**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key get pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` \| `KeyboardEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onDown](EShapeActionRuntimeBase.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L61)

___

### onDowning

▸ **onDowning**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key are about to be pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` \| `KeyboardEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onDowning](EShapeActionRuntimeBase.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L57)

___

### onFocus

▸ **onFocus**(`shape`, `runtime`): `void`

Called when a shape get focused.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onFocus](EShapeActionRuntimeBase.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L36)

___

### onKeyDown

▸ **onKeyDown**(`shape`, `runtime`, `e`): `void`

Called when a key is pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onKeyDown](EShapeActionRuntimeBase.md#onkeydown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L93)

___

### onKeyUp

▸ **onKeyUp**(`shape`, `runtime`, `e`): `void`

Called when a key is released on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onKeyUp](EShapeActionRuntimeBase.md#onkeyup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L97)

___

### onMove

▸ **onMove**(`shape`, `runtime`, `e`): `void`

Called when a pointer is moved on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onMove](EShapeActionRuntimeBase.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L65)

___

### onOut

▸ **onOut**(`shape`, `runtime`, `e`): `void`

Called when a pointer gets out of a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onOut](EShapeActionRuntimeBase.md#onout)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L73)

___

### onOver

▸ **onOver**(`shape`, `runtime`, `e`): `void`

Called when a pointer gets on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onOver](EShapeActionRuntimeBase.md#onover)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L69)

___

### onPressed

▸ **onPressed**(`shape`, `runtime`, `e`): `void`

Called when a shape is pressed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` \| `KeyboardEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onPressed](EShapeActionRuntimeBase.md#onpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L85)

___

### onRender

▸ **onRender**(`shape`, `runtime`, `time`, `renderer`): `void`

Called when a shape get rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `time` | `number` | - |
| `renderer` | `Renderer` | - |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onRender](EShapeActionRuntimeBase.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L129)

___

### onResize

▸ **onResize**(`shape`, `runtime`): `void`

Called when the shape size is changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onResize](EShapeActionRuntimeBase.md#onresize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L32)

___

### onRightClick

▸ **onRightClick**(`shape`, `runtime`, `e`): `void`

Called when a shape is right-clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onRightClick](EShapeActionRuntimeBase.md#onrightclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L101)

___

### onRightDown

▸ **onRightDown**(`shape`, `runtime`, `e`): `void`

Called when a secondary button gets pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onRightDown](EShapeActionRuntimeBase.md#onrightdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L109)

___

### onRightDowning

▸ **onRightDowning**(`shape`, `runtime`, `e`): `void`

Called when a secondary button is about to be pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onRightDowning](EShapeActionRuntimeBase.md#onrightdowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L105)

___

### onRightPressed

▸ **onRightPressed**(`shape`, `runtime`, `e`): `void`

Called when a secondary button is pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onRightPressed](EShapeActionRuntimeBase.md#onrightpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L121)

___

### onRightUnpressed

▸ **onRightUnpressed**(`shape`, `runtime`, `e`): `void`

Called when a secondary button is released on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onRightUnpressed](EShapeActionRuntimeBase.md#onrightunpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L125)

___

### onRightUp

▸ **onRightUp**(`shape`, `runtime`, `e`): `void`

Called when a secondary button gets released on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onRightUp](EShapeActionRuntimeBase.md#onrightup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L113)

___

### onRightUpOutside

▸ **onRightUpOutside**(`shape`, `runtime`, `e`): `void`

Called when a secondary button get released outside of a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onRightUpOutside](EShapeActionRuntimeBase.md#onrightupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L117)

___

### onUnpressed

▸ **onUnpressed**(`shape`, `runtime`, `e`): `void`

Called when a shape is released.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` \| `KeyboardEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onUnpressed](EShapeActionRuntimeBase.md#onunpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L89)

___

### onUp

▸ **onUp**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key get released on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` \| `KeyboardEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onUp](EShapeActionRuntimeBase.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L77)

___

### onUpOutside

▸ **onUpOutside**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key get released outside of a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `InteractionEvent` \| `KeyboardEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onUpOutside](EShapeActionRuntimeBase.md#onupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L81)

___

### toOnHovered

▸ `Protected` **toOnHovered**(`color`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L117)
