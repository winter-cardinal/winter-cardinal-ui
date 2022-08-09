[Winter Cardinal UI - v0.205.1](../index.md) / EShapeResourceManagerDeserialization

# Class: EShapeResourceManagerDeserialization

## Table of contents

### Constructors

- [constructor](EShapeResourceManagerDeserialization.md#constructor)

### Properties

- [\_actions](EShapeResourceManagerDeserialization.md#_actions)
- [\_aligns](EShapeResourceManagerDeserialization.md#_aligns)
- [\_data](EShapeResourceManagerDeserialization.md#_data)
- [\_dataDestinations](EShapeResourceManagerDeserialization.md#_datadestinations)
- [\_dataMappers](EShapeResourceManagerDeserialization.md#_datamappers)
- [\_dataMapping](EShapeResourceManagerDeserialization.md#_datamapping)
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
- [getDataDestination](EShapeResourceManagerDeserialization.md#getdatadestination)
- [getDataMapper](EShapeResourceManagerDeserialization.md#getdatamapper)
- [getDataMapping](EShapeResourceManagerDeserialization.md#getdatamapping)
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
- [setDataMapping](EShapeResourceManagerDeserialization.md#setdatamapping)
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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L51)

## Properties

### \_actions

• `Protected` **\_actions**: `Map`<`number`, [`EShapeActionValue`](../interfaces/EShapeActionValue.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L36)

___

### \_aligns

• `Protected` **\_aligns**: `Map`<`number`, [[`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal), [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical)]\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L45)

___

### \_data

• `Protected` **\_data**: `Map`<`number`, [`DDiagramSerializedData`](../index.md#ddiagramserializeddata)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L39)

___

### \_dataDestinations

• `Protected` **\_dataDestinations**: `Map`<`string`, ``null`` \| `string`[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L43)

___

### \_dataMappers

• `Protected` **\_dataMappers**: `Map`<`string`, ``null`` \| [`EShapeDataMapper`](../interfaces/EShapeDataMapper.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L42)

___

### \_dataMapping

• `Protected` **\_dataMapping**: `Map`<`number`, [`DDiagramSerializedDataMapping`](../index.md#ddiagramserializeddatamapping)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L41)

___

### \_dataValues

• `Protected` **\_dataValues**: `Map`<`number`, [`DDiagramSerializedDataValue`](../interfaces/DDiagramSerializedDataValue.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L40)

___

### \_extensions

• `Protected` **\_extensions**: `Map`<`number`, `unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L49)

___

### \_fills

• `Protected` **\_fills**: `Map`<`number`, [`DDiagramSerializedFill`](../interfaces/DDiagramSerializedFill.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L37)

___

### \_margins

• `Protected` **\_margins**: `Map`<`number`, [`number`, `number`]\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L46)

___

### \_ranges

• `Protected` **\_ranges**: `Map`<`number`, [`DDiagramSerializedDataRange`](../interfaces/DDiagramSerializedDataRange.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L44)

___

### \_strokes

• `Protected` **\_strokes**: `Map`<`number`, [`DDiagramSerializedStroke`](../interfaces/DDiagramSerializedStroke.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L38)

___

### \_textOutlines

• `Protected` **\_textOutlines**: `Map`<`number`, [`DDiagramSerializedTextOutline`](../interfaces/DDiagramSerializedTextOutline.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L48)

___

### \_texts

• `Protected` **\_texts**: `Map`<`number`, [`DDiagramSerializedText`](../interfaces/DDiagramSerializedText.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L47)

___

### data

• **data**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L31)

___

### isEditMode

• **isEditMode**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L34)

___

### pieceData

• `Optional` **pieceData**: `Map`<`string`, ``null`` \| [`EShapeEmbeddedDatum`](EShapeEmbeddedDatum.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L33)

___

### pieces

• `Optional` **pieces**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L32)

___

### resources

• **resources**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L30)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L79)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L155)

___

### getData

▸ **getData**(`id`): `undefined` \| [`DDiagramSerializedData`](../index.md#ddiagramserializeddata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`DDiagramSerializedData`](../index.md#ddiagramserializeddata)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L103)

___

### getDataDestination

▸ **getDataDestination**(`destination`): ``null`` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `string` |

#### Returns

``null`` \| `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L137)

___

### getDataMapper

▸ **getDataMapper**(`source`): ``null`` \| [`EShapeDataMapper`](../interfaces/EShapeDataMapper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

``null`` \| [`EShapeDataMapper`](../interfaces/EShapeDataMapper.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L127)

___

### getDataMapping

▸ **getDataMapping**(`id`): `undefined` \| [`DDiagramSerializedDataMapping`](../index.md#ddiagramserializeddatamapping)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`DDiagramSerializedDataMapping`](../index.md#ddiagramserializeddatamapping)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L119)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L111)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L187)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L87)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L163)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L147)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L95)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L171)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L179)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L83)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L159)

___

### setData

▸ **setData**(`id`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `data` | [`DDiagramSerializedData`](../index.md#ddiagramserializeddata) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L107)

___

### setDataMapping

▸ **setDataMapping**(`id`, `dataMapping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `dataMapping` | [`DDiagramSerializedDataMapping`](../index.md#ddiagramserializeddatamapping) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L123)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L115)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:191](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L191)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L91)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L167)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L151)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L99)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L175)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L183)
