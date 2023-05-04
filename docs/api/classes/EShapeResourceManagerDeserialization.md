[Winter Cardinal UI - v0.310.1](../index.md) / EShapeResourceManagerDeserialization

# Class: EShapeResourceManagerDeserialization

## Table of contents

### Constructors

- [constructor](EShapeResourceManagerDeserialization.md#constructor)

### Properties

- [\_actions](EShapeResourceManagerDeserialization.md#_actions)
- [\_aligns](EShapeResourceManagerDeserialization.md#_aligns)
- [\_capabilities](EShapeResourceManagerDeserialization.md#_capabilities)
- [\_data](EShapeResourceManagerDeserialization.md#_data)
- [\_dataDestinations](EShapeResourceManagerDeserialization.md#_datadestinations)
- [\_dataMappers](EShapeResourceManagerDeserialization.md#_datamappers)
- [\_dataMapping](EShapeResourceManagerDeserialization.md#_datamapping)
- [\_dataSystem](EShapeResourceManagerDeserialization.md#_datasystem)
- [\_dataValues](EShapeResourceManagerDeserialization.md#_datavalues)
- [\_extensions](EShapeResourceManagerDeserialization.md#_extensions)
- [\_fills](EShapeResourceManagerDeserialization.md#_fills)
- [\_margins](EShapeResourceManagerDeserialization.md#_margins)
- [\_ranges](EShapeResourceManagerDeserialization.md#_ranges)
- [\_strokes](EShapeResourceManagerDeserialization.md#_strokes)
- [\_textOutlines](EShapeResourceManagerDeserialization.md#_textoutlines)
- [\_texts](EShapeResourceManagerDeserialization.md#_texts)
- [data](EShapeResourceManagerDeserialization.md#data)
- [depth](EShapeResourceManagerDeserialization.md#depth)
- [mode](EShapeResourceManagerDeserialization.md#mode)
- [pieceData](EShapeResourceManagerDeserialization.md#piecedata)
- [pieces](EShapeResourceManagerDeserialization.md#pieces)
- [resources](EShapeResourceManagerDeserialization.md#resources)

### Methods

- [getAction](EShapeResourceManagerDeserialization.md#getaction)
- [getAlign](EShapeResourceManagerDeserialization.md#getalign)
- [getCapability](EShapeResourceManagerDeserialization.md#getcapability)
- [getData](EShapeResourceManagerDeserialization.md#getdata)
- [getDataDestination](EShapeResourceManagerDeserialization.md#getdatadestination)
- [getDataMapper](EShapeResourceManagerDeserialization.md#getdatamapper)
- [getDataMapping](EShapeResourceManagerDeserialization.md#getdatamapping)
- [getDataSystem](EShapeResourceManagerDeserialization.md#getdatasystem)
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
- [setCapability](EShapeResourceManagerDeserialization.md#setcapability)
- [setData](EShapeResourceManagerDeserialization.md#setdata)
- [setDataMapping](EShapeResourceManagerDeserialization.md#setdatamapping)
- [setDataSystem](EShapeResourceManagerDeserialization.md#setdatasystem)
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

• **new EShapeResourceManagerDeserialization**(`serialized`, `pieces`, `pieceData`, `mode`, `depth`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | [`EShapeResourceManagerDeserializationSerialized`](../interfaces/EShapeResourceManagerDeserializationSerialized.md) |
| `pieces` | `undefined` \| `string`[] |
| `pieceData` | `undefined` \| `Map`<`string`, ``null`` \| [`EShapeEmbeddedDatum`](EShapeEmbeddedDatum.md)\> |
| `mode` | [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1) |
| `depth` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L56)

## Properties

### \_actions

• `Protected` **\_actions**: `Map`<`number`, [`EShapeActionValue`](../interfaces/EShapeActionValue.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L39)

___

### \_aligns

• `Protected` **\_aligns**: `Map`<`number`, [[`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal-1), [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical-1)]\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L49)

___

### \_capabilities

• `Protected` **\_capabilities**: `Map`<`number`, [`number`, `number`]\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L53)

___

### \_data

• `Protected` **\_data**: `Map`<`number`, [`DDiagramSerializedData`](../index.md#ddiagramserializeddata)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L42)

___

### \_dataDestinations

• `Protected` **\_dataDestinations**: `Map`<`string`, ``null`` \| `string`[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L46)

___

### \_dataMappers

• `Protected` **\_dataMappers**: `Map`<`string`, ``null`` \| [`EShapeDataMapper`](../interfaces/EShapeDataMapper.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L45)

___

### \_dataMapping

• `Protected` **\_dataMapping**: `Map`<`number`, [`DDiagramSerializedDataMapping`](../index.md#ddiagramserializeddatamapping)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L44)

___

### \_dataSystem

• `Protected` **\_dataSystem**: `Map`<`number`, [`DDiagramSerializedDataSystem`](../index.md#ddiagramserializeddatasystem)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L47)

___

### \_dataValues

• `Protected` **\_dataValues**: `Map`<`number`, [`DDiagramSerializedDataValue`](../interfaces/DDiagramSerializedDataValue.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L43)

___

### \_extensions

• `Protected` **\_extensions**: `Map`<`number`, `unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L54)

___

### \_fills

• `Protected` **\_fills**: `Map`<`number`, [`DDiagramSerializedFill`](../interfaces/DDiagramSerializedFill.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L40)

___

### \_margins

• `Protected` **\_margins**: `Map`<`number`, [`number`, `number`]\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L50)

___

### \_ranges

• `Protected` **\_ranges**: `Map`<`number`, [`DDiagramSerializedDataRange`](../interfaces/DDiagramSerializedDataRange.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L48)

___

### \_strokes

• `Protected` **\_strokes**: `Map`<`number`, [`DDiagramSerializedStroke`](../interfaces/DDiagramSerializedStroke.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L41)

___

### \_textOutlines

• `Protected` **\_textOutlines**: `Map`<`number`, [`DDiagramSerializedTextOutline`](../interfaces/DDiagramSerializedTextOutline.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L52)

___

### \_texts

• `Protected` **\_texts**: `Map`<`number`, [`DDiagramSerializedText`](../interfaces/DDiagramSerializedText.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L51)

___

### data

• **data**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L33)

___

### depth

• **depth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L37)

___

### mode

• **mode**: [`EShapeResourceManagerDeserializationMode`](../index.md#eshaperesourcemanagerdeserializationmode-1)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L36)

___

### pieceData

• `Optional` **pieceData**: `Map`<`string`, ``null`` \| [`EShapeEmbeddedDatum`](EShapeEmbeddedDatum.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L35)

___

### pieces

• `Optional` **pieces**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L34)

___

### resources

• **resources**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L32)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L88)

___

### getAlign

▸ **getAlign**(`id`): `undefined` \| [[`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal-1), [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical-1)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [[`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal-1), [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical-1)]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L172)

___

### getCapability

▸ **getCapability**(`id`): `undefined` \| [`number`, `number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`number`, `number`]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L204)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L112)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L146)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L136)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L128)

___

### getDataSystem

▸ **getDataSystem**(`id`): `undefined` \| [`DDiagramSerializedDataSystem`](../index.md#ddiagramserializeddatasystem)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`DDiagramSerializedDataSystem`](../index.md#ddiagramserializeddatasystem)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L156)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L120)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L212)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L96)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L180)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L164)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L104)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L188)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L196)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L92)

___

### setAlign

▸ **setAlign**(`id`, `align`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `align` | [[`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal-1), [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical-1)] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L176)

___

### setCapability

▸ **setCapability**(`id`, `capability`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `capability` | [`number`, `number`] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L208)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L116)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L132)

___

### setDataSystem

▸ **setDataSystem**(`id`, `dataSystem`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `dataSystem` | [`DDiagramSerializedDataSystem`](../index.md#ddiagramserializeddatasystem) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L160)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L124)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L216)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L100)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L184)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L168)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L108)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L192)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-deserialization.ts#L200)
