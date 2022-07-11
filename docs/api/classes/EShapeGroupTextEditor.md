[Winter Cardinal UI - v0.200.0](../index.md) / EShapeGroupTextEditor

# Class: EShapeGroupTextEditor

## Implements

- [`EShapeText`](../interfaces/EShapeText.md)

## Table of contents

### Constructors

- [constructor](EShapeGroupTextEditor.md#constructor)

### Properties

- [\_parent](EShapeGroupTextEditor.md#_parent)
- [align](EShapeGroupTextEditor.md#align)
- [offset](EShapeGroupTextEditor.md#offset)
- [outline](EShapeGroupTextEditor.md#outline)
- [padding](EShapeGroupTextEditor.md#padding)
- [spacing](EShapeGroupTextEditor.md#spacing)

### Accessors

- [alpha](EShapeGroupTextEditor.md#alpha)
- [clipping](EShapeGroupTextEditor.md#clipping)
- [color](EShapeGroupTextEditor.md#color)
- [direction](EShapeGroupTextEditor.md#direction)
- [enable](EShapeGroupTextEditor.md#enable)
- [family](EShapeGroupTextEditor.md#family)
- [size](EShapeGroupTextEditor.md#size)
- [style](EShapeGroupTextEditor.md#style)
- [value](EShapeGroupTextEditor.md#value)
- [weight](EShapeGroupTextEditor.md#weight)

### Methods

- [copy](EShapeGroupTextEditor.md#copy)
- [deserialize](EShapeGroupTextEditor.md#deserialize)
- [serialize](EShapeGroupTextEditor.md#serialize)
- [set](EShapeGroupTextEditor.md#set)
- [toObject](EShapeGroupTextEditor.md#toobject)

## Constructors

### constructor

• **new EShapeGroupTextEditor**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeGroupPropertyParent`](../interfaces/EShapeGroupPropertyParent.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L28)

## Properties

### \_parent

• `Protected` **\_parent**: [`EShapeGroupPropertyParent`](../interfaces/EShapeGroupPropertyParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L20)

___

### align

• **align**: [`EShapeGroupTextAlignEditor`](EShapeGroupTextAlignEditor.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[align](../interfaces/EShapeText.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L22)

___

### offset

• **offset**: [`EShapeGroupTextOffsetEditor`](EShapeGroupTextOffsetEditor.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[offset](../interfaces/EShapeText.md#offset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L23)

___

### outline

• **outline**: [`EShapeTextOutline`](../interfaces/EShapeTextOutline.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[outline](../interfaces/EShapeText.md#outline)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L24)

___

### padding

• **padding**: [`EShapeGroupTextPaddingEditor`](EShapeGroupTextPaddingEditor.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[padding](../interfaces/EShapeText.md#padding)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L26)

___

### spacing

• **spacing**: [`EShapeGroupTextSpacingEditor`](EShapeGroupTextSpacingEditor.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[spacing](../interfaces/EShapeText.md#spacing)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L25)

## Accessors

### alpha

• `get` **alpha**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[alpha](../interfaces/EShapeText.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L83)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[alpha](../interfaces/EShapeText.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L91)

___

### clipping

• `get` **clipping**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[clipping](../interfaces/EShapeText.md#clipping)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L173)

• `set` **clipping**(`clipping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipping` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[clipping](../interfaces/EShapeText.md#clipping)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L181)

___

### color

• `get` **color**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[color](../interfaces/EShapeText.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L68)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[color](../interfaces/EShapeText.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L76)

___

### direction

• `get` **direction**(): [`EShapeTextDirection`](../index.md#eshapetextdirection)

#### Returns

[`EShapeTextDirection`](../index.md#eshapetextdirection)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[direction](../interfaces/EShapeText.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L158)

• `set` **direction**(`direction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [`EShapeTextDirection`](../index.md#eshapetextdirection) |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[direction](../interfaces/EShapeText.md#direction)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L166)

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[enable](../interfaces/EShapeText.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L38)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[enable](../interfaces/EShapeText.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L46)

___

### family

• `get` **family**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[family](../interfaces/EShapeText.md#family)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L98)

• `set` **family**(`family`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `family` | `string` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[family](../interfaces/EShapeText.md#family)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L106)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[size](../interfaces/EShapeText.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L113)

• `set` **size**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[size](../interfaces/EShapeText.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L121)

___

### style

• `get` **style**(): [`EShapeTextStyle`](../index.md#eshapetextstyle)

#### Returns

[`EShapeTextStyle`](../index.md#eshapetextstyle)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[style](../interfaces/EShapeText.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L143)

• `set` **style**(`style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`EShapeTextStyle`](../index.md#eshapetextstyle) |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[style](../interfaces/EShapeText.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L151)

___

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[value](../interfaces/EShapeText.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L53)

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[value](../interfaces/EShapeText.md#value)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L61)

___

### weight

• `get` **weight**(): [`EShapeTextWeight`](../index.md#eshapetextweight)

#### Returns

[`EShapeTextWeight`](../index.md#eshapetextweight)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[weight](../interfaces/EShapeText.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L128)

• `set` **weight**(`weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `weight` | [`EShapeTextWeight`](../index.md#eshapetextweight) |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[weight](../interfaces/EShapeText.md#weight)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L136)

## Methods

### copy

▸ **copy**(`target?`): [`EShapeGroupTextEditor`](EShapeGroupTextEditor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`DeepPartial`](../index.md#deeppartial)<[`EShapeTextLike`](../interfaces/EShapeTextLike.md)\> |

#### Returns

[`EShapeGroupTextEditor`](EShapeGroupTextEditor.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[copy](../interfaces/EShapeText.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L188)

___

### deserialize

▸ **deserialize**(`target`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[deserialize](../interfaces/EShapeText.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L240)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[serialize](../interfaces/EShapeText.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L236)

___

### set

▸ **set**(`value?`, `color?`, `alpha?`, `family?`, `size?`, `weight?`, `style?`, `direction?`): [`EShapeGroupTextEditor`](EShapeGroupTextEditor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `string` |
| `color?` | `number` |
| `alpha?` | `number` |
| `family?` | `string` |
| `size?` | `number` |
| `weight?` | [`EShapeTextWeight`](../index.md#eshapetextweight) |
| `style?` | [`EShapeTextStyle`](../index.md#eshapetextstyle) |
| `direction?` | [`EShapeTextDirection`](../index.md#eshapetextdirection) |

#### Returns

[`EShapeGroupTextEditor`](EShapeGroupTextEditor.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[set](../interfaces/EShapeText.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L196)

___

### toObject

▸ **toObject**(): [`EShapeTextLike`](../interfaces/EShapeTextLike.md)

#### Returns

[`EShapeTextLike`](../interfaces/EShapeTextLike.md)

#### Implementation of

[EShapeText](../interfaces/EShapeText.md).[toObject](../interfaces/EShapeText.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts:213](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-editor.ts#L213)
