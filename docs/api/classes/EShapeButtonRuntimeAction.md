[Winter Cardinal UI - v0.407.0](../index.md) / EShapeButtonRuntimeAction

# Class: EShapeButtonRuntimeAction

A base class of action runtimes.

## Hierarchy

- [`EShapeActionRuntimeBase`](EShapeActionRuntimeBase.md)

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
- [onClick](EShapeButtonRuntimeAction.md#onclick)
- [onDblClick](EShapeButtonRuntimeAction.md#ondblclick)
- [onDown](EShapeButtonRuntimeAction.md#ondown)
- [onDowning](EShapeButtonRuntimeAction.md#ondowning)
- [onFocus](EShapeButtonRuntimeAction.md#onfocus)
- [onKeyDown](EShapeButtonRuntimeAction.md#onkeydown)
- [onKeyUp](EShapeButtonRuntimeAction.md#onkeyup)
- [onMove](EShapeButtonRuntimeAction.md#onmove)
- [onOut](EShapeButtonRuntimeAction.md#onout)
- [onOver](EShapeButtonRuntimeAction.md#onover)
- [onPressed](EShapeButtonRuntimeAction.md#onpressed)
- [onRender](EShapeButtonRuntimeAction.md#onrender)
- [onResize](EShapeButtonRuntimeAction.md#onresize)
- [onRightClick](EShapeButtonRuntimeAction.md#onrightclick)
- [onRightDown](EShapeButtonRuntimeAction.md#onrightdown)
- [onRightDowning](EShapeButtonRuntimeAction.md#onrightdowning)
- [onRightPressed](EShapeButtonRuntimeAction.md#onrightpressed)
- [onRightUnpressed](EShapeButtonRuntimeAction.md#onrightunpressed)
- [onRightUp](EShapeButtonRuntimeAction.md#onrightup)
- [onRightUpOutside](EShapeButtonRuntimeAction.md#onrightupoutside)
- [onUnpressed](EShapeButtonRuntimeAction.md#onunpressed)
- [onUp](EShapeButtonRuntimeAction.md#onup)
- [onUpOutside](EShapeButtonRuntimeAction.md#onupoutside)
- [toOnHovered](EShapeButtonRuntimeAction.md#toonhovered)

## Constructors

### constructor

• **new EShapeButtonRuntimeAction**(`runtime`): [`EShapeButtonRuntimeAction`](EShapeButtonRuntimeAction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) |

#### Returns

[`EShapeButtonRuntimeAction`](EShapeButtonRuntimeAction.md)

#### Overrides

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[constructor](EShapeActionRuntimeBase.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L42)

## Properties

### \_fillAlpha

• `Protected` `Readonly` **\_fillAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L19)

___

### \_fillAlphaDisabled

• `Protected` `Readonly` **\_fillAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L20)

___

### \_fillColor

• `Protected` `Readonly` **\_fillColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L14)

___

### \_fillColorDisabled

• `Protected` `Readonly` **\_fillColorDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L15)

___

### \_fillColorHovered

• `Protected` `Readonly` **\_fillColorHovered**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L17)

___

### \_fillColorPressed

• `Protected` `Readonly` **\_fillColorPressed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L16)

___

### \_strokeAlpha

• `Protected` `Readonly` **\_strokeAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L27)

___

### \_strokeAlphaDisabled

• `Protected` `Readonly` **\_strokeAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L28)

___

### \_strokeColor

• `Protected` `Readonly` **\_strokeColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L22)

___

### \_strokeColorDisabled

• `Protected` `Readonly` **\_strokeColorDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L23)

___

### \_strokeColorHovered

• `Protected` `Readonly` **\_strokeColorHovered**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L25)

___

### \_strokeColorPressed

• `Protected` `Readonly` **\_strokeColorPressed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L24)

___

### \_textAlpha

• `Protected` `Readonly` **\_textAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L33)

___

### \_textAlphaDisabled

• `Protected` `Readonly` **\_textAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L34)

___

### \_textColor

• `Protected` `Readonly` **\_textColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L30)

___

### \_textColorDisabled

• `Protected` `Readonly` **\_textColorDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L31)

___

### \_textOutlineAlpha

• `Protected` `Readonly` **\_textOutlineAlpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L39)

___

### \_textOutlineAlphaDisabled

• `Protected` `Readonly` **\_textOutlineAlphaDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L40)

___

### \_textOutlineColor

• `Protected` `Readonly` **\_textOutlineColor**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L36)

___

### \_textOutlineColorDisabled

• `Protected` `Readonly` **\_textOutlineColorDisabled**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L37)

___

### reset

• `Readonly` **reset**: `number`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[reset](EShapeActionRuntimeBase.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L16)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L106)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L192)

___

### getFillAlpha

▸ **getFillAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L132)

___

### getFillColor

▸ **getFillColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L120)

___

### getStrokeAlpha

▸ **getStrokeAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L152)

___

### getStrokeColor

▸ **getStrokeColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L140)

___

### getTextAlpha

▸ **getTextAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L168)

___

### getTextColor

▸ **getTextColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L160)

___

### getTextOutlineAlpha

▸ **getTextOutlineAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L184)

___

### getTextOutlineColor

▸ **getTextOutlineColor**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`EShapeStateSet`](../interfaces/EShapeStateSet.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L176)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L22)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L38)

___

### onClick

▸ **onClick**(`shape`, `runtime`, `e`): `void`

Called when a shape is clicked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onClick](EShapeActionRuntimeBase.md#onclick)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L42)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L46)

___

### onDown

▸ **onDown**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key get pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onDown](EShapeActionRuntimeBase.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L59)

___

### onDowning

▸ **onDowning**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key are about to be pressed on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onDowning](EShapeActionRuntimeBase.md#ondowning)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L55)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L34)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L91)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L95)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L63)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L71)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L67)

___

### onPressed

▸ **onPressed**(`shape`, `runtime`, `e`): `void`

Called when a shape is pressed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onPressed](EShapeActionRuntimeBase.md#onpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L83)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L127)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L30)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L99)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L107)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L103)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L119)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L123)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L111)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L115)

___

### onUnpressed

▸ **onUnpressed**(`shape`, `runtime`, `e`): `void`

Called when a shape is released.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onUnpressed](EShapeActionRuntimeBase.md#onunpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L87)

___

### onUp

▸ **onUp**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key get released on a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onUp](EShapeActionRuntimeBase.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L75)

___

### onUpOutside

▸ **onUpOutside**(`shape`, `runtime`, `e`): `void`

Called when a pointer or a key get released outside of a shape.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | a shape |
| `runtime` | [`EShapeRuntime`](../interfaces/EShapeRuntime.md) | a runtime |
| `e` | `KeyboardEvent` \| `InteractionEvent` | an event object |

#### Returns

`void`

#### Inherited from

[EShapeActionRuntimeBase](EShapeActionRuntimeBase.md).[onUpOutside](EShapeActionRuntimeBase.md#onupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtime-base.ts#L79)

___

### toOnHovered

▸ **toOnHovered**(`color`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-button-runtime-action.ts#L95)
