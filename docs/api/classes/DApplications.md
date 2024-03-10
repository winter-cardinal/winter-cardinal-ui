[Winter Cardinal UI - v0.414.0](../index.md) / DApplications

# Class: DApplications

## Table of contents

### Constructors

- [constructor](DApplications.md#constructor)

### Properties

- [INSTANCES](DApplications.md#instances)

### Methods

- [add](DApplications.md#add)
- [find](DApplications.md#find)
- [first](DApplications.md#first)
- [get](DApplications.md#get)
- [getLayer](DApplications.md#getlayer)
- [getLayerBase](DApplications.md#getlayerbase)
- [getLayerOverlay](DApplications.md#getlayeroverlay)
- [getResolution](DApplications.md#getresolution)
- [getStage](DApplications.md#getstage)
- [indexOf](DApplications.md#indexof)
- [last](DApplications.md#last)
- [render](DApplications.md#render)
- [size](DApplications.md#size)
- [update](DApplications.md#update)

## Constructors

### constructor

• **new DApplications**(): [`DApplications`](DApplications.md)

#### Returns

[`DApplications`](DApplications.md)

## Properties

### INSTANCES

▪ `Static` `Protected` **INSTANCES**: [`DApplicationLike`](../interfaces/DApplicationLike.md)[] = `[]`

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L11)

## Methods

### add

▸ **add**(`instance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`DApplicationLike`](../interfaces/DApplicationLike.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L13)

___

### find

▸ **find**(`target`): ``null`` \| [`DApplicationLike`](../interfaces/DApplicationLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DApplicationTarget`](../interfaces/DApplicationTarget.md) |

#### Returns

``null`` \| [`DApplicationLike`](../interfaces/DApplicationLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L61)

___

### first

▸ **first**(): [`DApplicationLike`](../interfaces/DApplicationLike.md)

#### Returns

[`DApplicationLike`](../interfaces/DApplicationLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L18)

___

### get

▸ **get**(`index`): ``null`` \| [`DApplicationLike`](../interfaces/DApplicationLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`DApplicationLike`](../interfaces/DApplicationLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L34)

___

### getLayer

▸ **getLayer**(`target`): ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DApplicationTarget`](../interfaces/DApplicationTarget.md) |

#### Returns

``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L85)

___

### getLayerBase

▸ **getLayerBase**(`target`): ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DApplicationTarget`](../interfaces/DApplicationTarget.md) |

#### Returns

``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L69)

___

### getLayerOverlay

▸ **getLayerOverlay**(`target`): ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DApplicationTarget`](../interfaces/DApplicationTarget.md) |

#### Returns

``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L77)

___

### getResolution

▸ **getResolution**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DApplicationTarget`](../interfaces/DApplicationTarget.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L93)

___

### getStage

▸ **getStage**(`target`): ``null`` \| [`DApplicationLayerStageLike`](../interfaces/DApplicationLayerStageLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DApplicationTarget`](../interfaces/DApplicationTarget.md) |

#### Returns

``null`` \| [`DApplicationLayerStageLike`](../interfaces/DApplicationLayerStageLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L50)

___

### indexOf

▸ **indexOf**(`instance`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`DApplicationLike`](../interfaces/DApplicationLike.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L42)

___

### last

▸ **last**(): [`DApplicationLike`](../interfaces/DApplicationLike.md)

#### Returns

[`DApplicationLike`](../interfaces/DApplicationLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L26)

___

### render

▸ **render**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`DApplicationTarget`](../interfaces/DApplicationTarget.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L115)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L46)

___

### update

▸ **update**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`DApplicationTarget`](../interfaces/DApplicationTarget.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-applications.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-applications.ts#L101)
