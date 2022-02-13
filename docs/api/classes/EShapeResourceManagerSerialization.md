[Winter Cardinal UI - v0.155.0](../index.md) / EShapeResourceManagerSerialization

# Class: EShapeResourceManagerSerialization

## Table of contents

### Constructors

- [constructor](EShapeResourceManagerSerialization.md#constructor)

### Properties

- [data](EShapeResourceManagerSerialization.md#data)
- [dataToIndex](EShapeResourceManagerSerialization.md#datatoindex)
- [pieceToIndex](EShapeResourceManagerSerialization.md#piecetoindex)
- [pieces](EShapeResourceManagerSerialization.md#pieces)
- [resourceToIndex](EShapeResourceManagerSerialization.md#resourcetoindex)
- [resources](EShapeResourceManagerSerialization.md#resources)
- [uuidNext](EShapeResourceManagerSerialization.md#uuidnext)
- [uuids](EShapeResourceManagerSerialization.md#uuids)

### Methods

- [addData](EShapeResourceManagerSerialization.md#adddata)
- [addPiece](EShapeResourceManagerSerialization.md#addpiece)
- [addResource](EShapeResourceManagerSerialization.md#addresource)
- [addUuid](EShapeResourceManagerSerialization.md#adduuid)
- [add\_](EShapeResourceManagerSerialization.md#add_)
- [newUuid](EShapeResourceManagerSerialization.md#newuuid)
- [updateUuid](EShapeResourceManagerSerialization.md#updateuuid)

## Constructors

### constructor

• **new EShapeResourceManagerSerialization**()

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L16)

## Properties

### data

• **data**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:8](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L8)

___

### dataToIndex

• `Protected` **dataToIndex**: `Map`<`string`, `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L11)

___

### pieceToIndex

• `Protected` **pieceToIndex**: `Map`<`string`, `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L12)

___

### pieces

• **pieces**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L9)

___

### resourceToIndex

• `Protected` **resourceToIndex**: `Map`<`string`, `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L10)

___

### resources

• **resources**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L7)

___

### uuidNext

• `Protected` **uuidNext**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L14)

___

### uuids

• `Protected` **uuids**: `Set`<`number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L13)

## Methods

### addData

▸ **addData**(`data`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L31)

___

### addPiece

▸ **addPiece**(`piece`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `piece` | `string` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L35)

___

### addResource

▸ **addResource**(`resource`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resource` | `string` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L27)

___

### addUuid

▸ **addUuid**(`uuid`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L39)

___

### add\_

▸ `Protected` **add_**(`target`, `array`, `map`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |
| `array` | `string`[] |
| `map` | `Map`<`string`, `number`\> |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L75)

___

### newUuid

▸ **newUuid**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L63)

___

### updateUuid

▸ **updateUuid**(`uuid`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/shape/e-shape-resource-manager-serialization.ts#L52)
