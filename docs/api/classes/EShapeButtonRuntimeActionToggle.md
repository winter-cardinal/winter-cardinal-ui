[Winter Cardinal UI - v0.199.0](../index.md) / EShapeButtonRuntimeActionToggle

# Class: EShapeButtonRuntimeActionToggle

## Hierarchy

- [`EShapeActionRuntime`](EShapeActionRuntime.md)

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
- [onDblClick](EShapeButtonRuntimeActionToggle.md#ondblclick)
- [onDown](EShapeButtonRuntimeActionToggle.md#ondown)
- [onDowning](EShapeButtonRuntimeActionToggle.md#ondowning)
- [onFocus](EShapeButtonRuntimeActionToggle.md#onfocus)
- [onMove](EShapeButtonRuntimeActionToggle.md#onmove)
- [onRender](EShapeButtonRuntimeActionToggle.md#onrender)
- [toOnHovered](EShapeButtonRuntimeActionToggle.md#toonhovered)

## Constructors

### constructor

• **new EShapeButtonRuntimeActionToggle**(`runtime`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `runtime` | [`EShapeRuntime`](EShapeRuntime.md) |

#### Overrides

[EShapeActionRuntime](EShapeActionRuntime.md).[constructor](EShapeActionRuntime.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L46)

## Properties

### \_fillAlpha

• `Protected` `Readonly` **\_fillAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L20)

___

### \_fillAlphaDisabled

• `Protected` `Readonly` **\_fillAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L21)

___

### \_fillColor

• `Protected` `Readonly` **\_fillColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L16)

___

### \_fillColorActive

• `Protected` `Readonly` **\_fillColorActive**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L13)

___

### \_fillColorActiveHovered

• `Protected` `Readonly` **\_fillColorActiveHovered**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L15)

___

### \_fillColorActivePressed

• `Protected` `Readonly` **\_fillColorActivePressed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L14)

___

### \_fillColorHovered

• `Protected` `Readonly` **\_fillColorHovered**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L18)

___

### \_fillColorPressed

• `Protected` `Readonly` **\_fillColorPressed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L17)

___

### \_strokeAlpha

• `Protected` `Readonly` **\_strokeAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L30)

___

### \_strokeAlphaDisabled

• `Protected` `Readonly` **\_strokeAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L31)

___

### \_strokeColor

• `Protected` `Readonly` **\_strokeColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L26)

___

### \_strokeColorActive

• `Protected` `Readonly` **\_strokeColorActive**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L23)

___

### \_strokeColorActiveHovered

• `Protected` `Readonly` **\_strokeColorActiveHovered**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L25)

___

### \_strokeColorActivePressed

• `Protected` `Readonly` **\_strokeColorActivePressed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L24)

___

### \_strokeColorGrayscaleHovered

• `Protected` `Readonly` **\_strokeColorGrayscaleHovered**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L28)

___

### \_strokeColorPressed

• `Protected` `Readonly` **\_strokeColorPressed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L27)

___

### \_textAlpha

• `Protected` `Readonly` **\_textAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L37)

___

### \_textAlphaDisabled

• `Protected` `Readonly` **\_textAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L38)

___

### \_textColor

• `Protected` `Readonly` **\_textColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L34)

___

### \_textColorActive

• `Protected` `Readonly` **\_textColorActive**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L33)

___

### \_textColorDisabled

• `Protected` `Readonly` **\_textColorDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L35)

___

### \_textOutlineAlpha

• `Protected` `Readonly` **\_textOutlineAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L43)

___

### \_textOutlineAlphaDisabled

• `Protected` `Readonly` **\_textOutlineAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L44)

___

### \_textOutlineColor

• `Protected` `Readonly` **\_textOutlineColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L40)

___

### \_textOutlineColorDisabled

• `Protected` `Readonly` **\_textOutlineColorDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L41)

___

### reset

• **reset**: `number`

#### Inherited from

[EShapeActionRuntime](EShapeActionRuntime.md).[reset](EShapeActionRuntime.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L17)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L127)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L235)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L163)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L141)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L193)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L171)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:211](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L211)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:201](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L201)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:227](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L227)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:219](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L219)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L23)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L35)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L51)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L43)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L39)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L31)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L47)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime.ts#L60)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action-toggle.ts#L116)
