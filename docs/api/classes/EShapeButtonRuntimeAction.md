[Winter Cardinal UI - v0.154.0](../index.md) / EShapeButtonRuntimeAction

# Class: EShapeButtonRuntimeAction

## Hierarchy

- [`EShapeActionRuntime`](EShapeActionRuntime.md)

  ↳ **`EShapeButtonRuntimeAction`**

## Table of contents

### Constructors

- [constructor](EShapeButtonRuntimeAction.md#constructor)

### Properties

- [\_fillAlpha](EShapeButtonRuntimeAction.md#_fillalpha)
- [\_fillAlphaDisabled](EShapeButtonRuntimeAction.md#_fillalphadisabled)
- [\_fillColor](EShapeButtonRuntimeAction.md#_fillcolor)
- [\_fillColorDisabled](EShapeButtonRuntimeAction.md#_fillcolordisabled)
- [\_fillColorHovered](EShapeButtonRuntimeAction.md#_fillcolorhovered)
- [\_fillColorPressed](EShapeButtonRuntimeAction.md#_fillcolorpressed)
- [\_strokeAlpha](EShapeButtonRuntimeAction.md#_strokealpha)
- [\_strokeAlphaDisabled](EShapeButtonRuntimeAction.md#_strokealphadisabled)
- [\_strokeColor](EShapeButtonRuntimeAction.md#_strokecolor)
- [\_strokeColorDisabled](EShapeButtonRuntimeAction.md#_strokecolordisabled)
- [\_strokeColorHovered](EShapeButtonRuntimeAction.md#_strokecolorhovered)
- [\_strokeColorPressed](EShapeButtonRuntimeAction.md#_strokecolorpressed)
- [\_textAlpha](EShapeButtonRuntimeAction.md#_textalpha)
- [\_textAlphaDisabled](EShapeButtonRuntimeAction.md#_textalphadisabled)
- [\_textColor](EShapeButtonRuntimeAction.md#_textcolor)
- [\_textColorDisabled](EShapeButtonRuntimeAction.md#_textcolordisabled)
- [\_textOutlineAlpha](EShapeButtonRuntimeAction.md#_textoutlinealpha)
- [\_textOutlineAlphaDisabled](EShapeButtonRuntimeAction.md#_textoutlinealphadisabled)
- [\_textOutlineColor](EShapeButtonRuntimeAction.md#_textoutlinecolor)
- [\_textOutlineColorDisabled](EShapeButtonRuntimeAction.md#_textoutlinecolordisabled)
- [reset](EShapeButtonRuntimeAction.md#reset)

### Methods

- [execute](EShapeButtonRuntimeAction.md#execute)
- [getCursor](EShapeButtonRuntimeAction.md#getcursor)
- [getFillAlpha](EShapeButtonRuntimeAction.md#getfillalpha)
- [getFillColor](EShapeButtonRuntimeAction.md#getfillcolor)
- [getStrokeAlpha](EShapeButtonRuntimeAction.md#getstrokealpha)
- [getStrokeColor](EShapeButtonRuntimeAction.md#getstrokecolor)
- [getTextAlpha](EShapeButtonRuntimeAction.md#gettextalpha)
- [getTextColor](EShapeButtonRuntimeAction.md#gettextcolor)
- [getTextOutlineAlpha](EShapeButtonRuntimeAction.md#gettextoutlinealpha)
- [getTextOutlineColor](EShapeButtonRuntimeAction.md#gettextoutlinecolor)
- [initialize](EShapeButtonRuntimeAction.md#initialize)
- [onBlur](EShapeButtonRuntimeAction.md#onblur)
- [onDblClick](EShapeButtonRuntimeAction.md#ondblclick)
- [onDown](EShapeButtonRuntimeAction.md#ondown)
- [onDowning](EShapeButtonRuntimeAction.md#ondowning)
- [onFocus](EShapeButtonRuntimeAction.md#onfocus)
- [onMove](EShapeButtonRuntimeAction.md#onmove)
- [onRender](EShapeButtonRuntimeAction.md#onrender)
- [toOnHovered](EShapeButtonRuntimeAction.md#toonhovered)

## Constructors

### constructor

• **new EShapeButtonRuntimeAction**(`runtime`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Overrides

[EShapeActionRuntime](EShapeActionRuntime.md).[constructor](EShapeActionRuntime.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L41)

## Properties

### \_fillAlpha

• `Protected` `Readonly` **\_fillAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L18)

___

### \_fillAlphaDisabled

• `Protected` `Readonly` **\_fillAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L19)

___

### \_fillColor

• `Protected` `Readonly` **\_fillColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L13)

___

### \_fillColorDisabled

• `Protected` `Readonly` **\_fillColorDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L14)

___

### \_fillColorHovered

• `Protected` `Readonly` **\_fillColorHovered**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L16)

___

### \_fillColorPressed

• `Protected` `Readonly` **\_fillColorPressed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L15)

___

### \_strokeAlpha

• `Protected` `Readonly` **\_strokeAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L26)

___

### \_strokeAlphaDisabled

• `Protected` `Readonly` **\_strokeAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L27)

___

### \_strokeColor

• `Protected` `Readonly` **\_strokeColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L21)

___

### \_strokeColorDisabled

• `Protected` `Readonly` **\_strokeColorDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L22)

___

### \_strokeColorHovered

• `Protected` `Readonly` **\_strokeColorHovered**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L24)

___

### \_strokeColorPressed

• `Protected` `Readonly` **\_strokeColorPressed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L23)

___

### \_textAlpha

• `Protected` `Readonly` **\_textAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L32)

___

### \_textAlphaDisabled

• `Protected` `Readonly` **\_textAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L33)

___

### \_textColor

• `Protected` `Readonly` **\_textColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L29)

___

### \_textColorDisabled

• `Protected` `Readonly` **\_textColorDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L30)

___

### \_textOutlineAlpha

• `Protected` `Readonly` **\_textOutlineAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L38)

___

### \_textOutlineAlphaDisabled

• `Protected` `Readonly` **\_textOutlineAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L39)

___

### \_textOutlineColor

• `Protected` `Readonly` **\_textOutlineColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L35)

___

### \_textOutlineColorDisabled

• `Protected` `Readonly` **\_textOutlineColorDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L36)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntime](EShapeActionRuntime.md).[reset](EShapeActionRuntime.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

## Methods

### execute

▸ **execute**(`shape`, `runtime`, `time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `time` | `number` |

#### Returns

`void`

#### Overrides

[EShapeActionRuntime](EShapeActionRuntime.md).[execute](EShapeActionRuntime.md#execute)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L105)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L191)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L131)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L119)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L151)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L139)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L167)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L159)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L183)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L175)

___

### initialize

▸ **initialize**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntime](EShapeActionRuntime.md).[initialize](EShapeActionRuntime.md#initialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

___

### onBlur

▸ **onBlur**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntime](EShapeActionRuntime.md).[onBlur](EShapeActionRuntime.md#onblur)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L35)

___

### onDblClick

▸ **onDblClick**(`shape`, `runtime`, `e`, `interactionManager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntime](EShapeActionRuntime.md).[onDblClick](EShapeActionRuntime.md#ondblclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L51)

___

### onDown

▸ **onDown**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntime](EShapeActionRuntime.md).[onDown](EShapeActionRuntime.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L43)

___

### onDowning

▸ **onDowning**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` \| `KeyboardEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntime](EShapeActionRuntime.md).[onDowning](EShapeActionRuntime.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L39)

___

### onFocus

▸ **onFocus**(`shape`, `runtime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntime](EShapeActionRuntime.md).[onFocus](EShapeActionRuntime.md#onfocus)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L31)

___

### onMove

▸ **onMove**(`shape`, `runtime`, `e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntime](EShapeActionRuntime.md).[onMove](EShapeActionRuntime.md#onmove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

___

### onRender

▸ **onRender**(`shape`, `runtime`, `time`, `renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |
| `time` | `number` |
| `renderer` | `Renderer` |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntime](EShapeActionRuntime.md).[onRender](EShapeActionRuntime.md#onrender)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L94)
