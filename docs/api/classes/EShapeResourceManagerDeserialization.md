[Winter Cardinal UI - v0.164.0](../index.md) / EShapeResourceManagerDeserialization

# Class: EShapeResourceManagerDeserialization

## Table of contents

### Constructors

- [constructor](EShapeResourceManagerDeserialization.md#constructor)

### Properties

- [\_actions](EShapeResourceManagerDeserialization.md#_actions)
- [\_aligns](EShapeResourceManagerDeserialization.md#_aligns)
- [\_data](EShapeResourceManagerDeserialization.md#_data)
- [\_dataValues](EShapeResourceManagerDeserialization.md#_datavalues)
- [\_extensions](EShapeResourceManagerDeserialization.md#_extensions)
- [\_fills](EShapeResourceManagerDeserialization.md#_fills)
- [\_margins](EShapeResourceManagerDeserialization.md#_margins)
- [\_ranges](EShapeResourceManagerDeserialization.md#_ranges)
- [\_strokes](EShapeResourceManagerDeserialization.md#_strokes)
- [\_textOutlines](EShapeResourceManagerDeserialization.md#_textoutlines)
- [\_texts](EShapeResourceManagerDeserialization.md#_texts)
- [data](EShapeResourceManagerDeserialization.md#data)
- [isEditMode](EShapeResourceManagerDeserialization.md#iseditmode)
- [pieceData](EShapeResourceManagerDeserialization.md#piecedata)
- [pieces](EShapeResourceManagerDeserialization.md#pieces)
- [resources](EShapeResourceManagerDeserialization.md#resources)

### Methods

- [getAction](EShapeResourceManagerDeserialization.md#getaction)
- [getAlign](EShapeResourceManagerDeserialization.md#getalign)
- [getData](EShapeResourceManagerDeserialization.md#getdata)
- [getDataValue](EShapeResourceManagerDeserialization.md#getdatavalue)
- [getExtension](EShapeResourceManagerDeserialization.md#getextension)
- [getFill](EShapeResourceManagerDeserialization.md#getfill)
- [getMargin](EShapeResourceManagerDeserialization.md#getmargin)
- [getRange](EShapeResourceManagerDeserialization.md#getrange)
- [getStroke](EShapeResourceManagerDeserialization.md#getstroke)
- [getText](EShapeResourceManagerDeserialization.md#gettext)
- [getTextOutline](EShapeResourceManagerDeserialization.md#gettextoutline)
- [setAction](EShapeResourceManagerDeserialization.md#setaction)
- [setAlign](EShapeResourceManagerDeserialization.md#setalign)
- [setData](EShapeResourceManagerDeserialization.md#setdata)
- [setDataValue](EShapeResourceManagerDeserialization.md#setdatavalue)
- [setExtension](EShapeResourceManagerDeserialization.md#setextension)
- [setFill](EShapeResourceManagerDeserialization.md#setfill)
- [setMargin](EShapeResourceManagerDeserialization.md#setmargin)
- [setRange](EShapeResourceManagerDeserialization.md#setrange)
- [setStroke](EShapeResourceManagerDeserialization.md#setstroke)
- [setText](EShapeResourceManagerDeserialization.md#settext)
- [setTextOutline](EShapeResourceManagerDeserialization.md#settextoutline)

## Constructors

### constructor

• **new EShapeResourceManagerDeserialization**(`serialized`, `pieces`, `pieceData`, `isEditMode`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeResourceManagerDeserializationSerialized`](../interfaces/EShapeResourceManagerDeserializationSerialized.md) |
| `pieces` | `undefined` \| `string`[] |
| `pieceData` | `undefined` \| `Map`<`string`, ``null`` \| [`EShapeEmbeddedDatum`](EShapeEmbeddedDatum.md)\> |
| `isEditMode` | `boolean` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L44)

## Properties

### \_actions

• `Protected` **\_actions**: `Map`<`number`, [`EShapeActionValue`](../interfaces/EShapeActionValue.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L32)

___

### \_aligns

• `Protected` **\_aligns**: `Map`<`number`, [[`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal), [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical)]\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L38)

___

### \_data

• `Protected` **\_data**: `Map`<`number`, `number`[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L36)

___

### \_dataValues

• `Protected` **\_dataValues**: `Map`<`number`, [`DDiagramSerializedDataValue`](../interfaces/DDiagramSerializedDataValue.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L35)

___

### \_extensions

• `Protected` **\_extensions**: `Map`<`number`, `unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L42)

___

### \_fills

• `Protected` **\_fills**: `Map`<`number`, [`DDiagramSerializedFill`](../interfaces/DDiagramSerializedFill.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L33)

___

### \_margins

• `Protected` **\_margins**: `Map`<`number`, [`number`, `number`]\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L39)

___

### \_ranges

• `Protected` **\_ranges**: `Map`<`number`, [`DDiagramSerializedDataRange`](../interfaces/DDiagramSerializedDataRange.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L37)

___

### \_strokes

• `Protected` **\_strokes**: `Map`<`number`, [`DDiagramSerializedStroke`](../interfaces/DDiagramSerializedStroke.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L34)

___

### \_textOutlines

• `Protected` **\_textOutlines**: `Map`<`number`, [`DDiagramSerializedTextOutline`](../interfaces/DDiagramSerializedTextOutline.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L41)

___

### \_texts

• `Protected` **\_texts**: `Map`<`number`, [`DDiagramSerializedText`](../interfaces/DDiagramSerializedText.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L40)

___

### data

• **data**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L27)

___

### isEditMode

• **isEditMode**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L30)

___

### pieceData

• `Optional` **pieceData**: `Map`<`string`, ``null`` \| [`EShapeEmbeddedDatum`](EShapeEmbeddedDatum.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L29)

___

### pieces

• `Optional` **pieces**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L28)

___

### resources

• **resources**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L26)

## Methods

### getAction

▸ **getAction**(`id`): `undefined` \| [`EShapeActionValue`](../interfaces/EShapeActionValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`EShapeActionValue`](../interfaces/EShapeActionValue.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L69)

___

### getAlign

▸ **getAlign**(`id`): `undefined` \| [[`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal), [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [[`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal), [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical)]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L117)

___

### getData

▸ **getData**(`id`): `undefined` \| `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L93)

___

### getDataValue

▸ **getDataValue**(`id`): `undefined` \| [`DDiagramSerializedDataValue`](../interfaces/DDiagramSerializedDataValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`DDiagramSerializedDataValue`](../interfaces/DDiagramSerializedDataValue.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L101)

___

### getExtension

▸ **getExtension**<`T`\>(`id`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| `T`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L149)

___

### getFill

▸ **getFill**(`id`): `undefined` \| [`DDiagramSerializedFill`](../interfaces/DDiagramSerializedFill.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`DDiagramSerializedFill`](../interfaces/DDiagramSerializedFill.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L77)

___

### getMargin

▸ **getMargin**(`id`): `undefined` \| [`number`, `number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`number`, `number`]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L125)

___

### getRange

▸ **getRange**(`id`): `undefined` \| [`DDiagramSerializedDataRange`](../interfaces/DDiagramSerializedDataRange.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`DDiagramSerializedDataRange`](../interfaces/DDiagramSerializedDataRange.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L109)

___

### getStroke

▸ **getStroke**(`id`): `undefined` \| [`DDiagramSerializedStroke`](../interfaces/DDiagramSerializedStroke.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`DDiagramSerializedStroke`](../interfaces/DDiagramSerializedStroke.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L85)

___

### getText

▸ **getText**(`id`): `undefined` \| [`DDiagramSerializedText`](../interfaces/DDiagramSerializedText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`DDiagramSerializedText`](../interfaces/DDiagramSerializedText.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L133)

___

### getTextOutline

▸ **getTextOutline**(`id`): `undefined` \| [`DDiagramSerializedTextOutline`](../interfaces/DDiagramSerializedTextOutline.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`DDiagramSerializedTextOutline`](../interfaces/DDiagramSerializedTextOutline.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L141)

___

### setAction

▸ **setAction**(`id`, `action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `action` | [`EShapeActionValue`](../interfaces/EShapeActionValue.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L73)

___

### setAlign

▸ **setAlign**(`id`, `align`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `align` | [[`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal), [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical)] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L121)

___

### setData

▸ **setData**(`id`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `data` | `number`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L97)

___

### setDataValue

▸ **setDataValue**(`id`, `dataValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `dataValue` | [`DDiagramSerializedDataValue`](../interfaces/DDiagramSerializedDataValue.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L105)

___

### setExtension

▸ **setExtension**(`id`, `extension`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `extension` | `unknown` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L153)

___

### setFill

▸ **setFill**(`id`, `fill`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `fill` | [`DDiagramSerializedFill`](../interfaces/DDiagramSerializedFill.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L81)

___

### setMargin

▸ **setMargin**(`id`, `margin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `margin` | [`number`, `number`] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L129)

___

### setRange

▸ **setRange**(`id`, `range`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `range` | [`DDiagramSerializedDataRange`](../interfaces/DDiagramSerializedDataRange.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L113)

___

### setStroke

▸ **setStroke**(`id`, `stroke`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `stroke` | [`DDiagramSerializedStroke`](../interfaces/DDiagramSerializedStroke.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L89)

___

### setText

▸ **setText**(`id`, `text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `text` | [`DDiagramSerializedText`](../interfaces/DDiagramSerializedText.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L137)

___

### setTextOutline

▸ **setTextOutline**(`id`, `textOutline`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `textOutline` | [`DDiagramSerializedTextOutline`](../interfaces/DDiagramSerializedTextOutline.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.164.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L145)
