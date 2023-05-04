[Winter Cardinal UI - v0.310.1](../index.md) / EShapeDataSystemImpl

# Class: EShapeDataSystemImpl

## Implements

- [`EShapeDataSystem`](../interfaces/EShapeDataSystem.md)

## Table of contents

### Constructors

- [constructor](EShapeDataSystemImpl.md#constructor)

### Properties

- [\_data](EShapeDataSystemImpl.md#_data)

### Methods

- [clear](EShapeDataSystemImpl.md#clear)
- [contains](EShapeDataSystemImpl.md#contains)
- [copy](EShapeDataSystemImpl.md#copy)
- [deserialize](EShapeDataSystemImpl.md#deserialize)
- [each](EShapeDataSystemImpl.md#each)
- [get](EShapeDataSystemImpl.md#get)
- [remove](EShapeDataSystemImpl.md#remove)
- [serialize](EShapeDataSystemImpl.md#serialize)
- [set](EShapeDataSystemImpl.md#set)
- [size](EShapeDataSystemImpl.md#size)

## Constructors

### constructor

• **new EShapeDataSystemImpl**()

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts#L14)

## Properties

### \_data

• `Protected` **\_data**: `Map`<`string`, `string`\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts#L12)

## Methods

### clear

▸ **clear**(): [`EShapeDataSystemImpl`](EShapeDataSystemImpl.md)

#### Returns

[`EShapeDataSystemImpl`](EShapeDataSystemImpl.md)

#### Implementation of

[EShapeDataSystem](../interfaces/EShapeDataSystem.md).[clear](../interfaces/EShapeDataSystem.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts#L38)

___

### contains

▸ **contains**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Implementation of

[EShapeDataSystem](../interfaces/EShapeDataSystem.md).[contains](../interfaces/EShapeDataSystem.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts#L27)

___

### copy

▸ **copy**(`target`): [`EShapeDataSystemImpl`](EShapeDataSystemImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeDataSystem`](../interfaces/EShapeDataSystem.md) |

#### Returns

[`EShapeDataSystemImpl`](EShapeDataSystemImpl.md)

#### Implementation of

[EShapeDataSystem](../interfaces/EShapeDataSystem.md).[copy](../interfaces/EShapeDataSystem.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts#L59)

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

[EShapeDataSystem](../interfaces/EShapeDataSystem.md).[deserialize](../interfaces/EShapeDataSystem.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts#L82)

___

### each

▸ **each**(`iteratee`): [`EShapeDataSystemImpl`](EShapeDataSystemImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`value`: `string`, `key`: `string`) => `boolean` \| `void` |

#### Returns

[`EShapeDataSystemImpl`](EShapeDataSystemImpl.md)

#### Implementation of

[EShapeDataSystem](../interfaces/EShapeDataSystem.md).[each](../interfaces/EShapeDataSystem.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts#L47)

___

### get

▸ **get**(`key`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| `string`

#### Implementation of

[EShapeDataSystem](../interfaces/EShapeDataSystem.md).[get](../interfaces/EShapeDataSystem.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts#L23)

___

### remove

▸ **remove**(`key`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| `string`

#### Implementation of

[EShapeDataSystem](../interfaces/EShapeDataSystem.md).[remove](../interfaces/EShapeDataSystem.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts#L31)

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

[EShapeDataSystem](../interfaces/EShapeDataSystem.md).[serialize](../interfaces/EShapeDataSystem.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts#L68)

___

### set

▸ **set**(`key`, `value`): [`EShapeDataSystemImpl`](EShapeDataSystemImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

[`EShapeDataSystemImpl`](EShapeDataSystemImpl.md)

#### Implementation of

[EShapeDataSystem](../interfaces/EShapeDataSystem.md).[set](../interfaces/EShapeDataSystem.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts#L18)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeDataSystem](../interfaces/EShapeDataSystem.md).[size](../interfaces/EShapeDataSystem.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-data-system-impl.ts#L43)
