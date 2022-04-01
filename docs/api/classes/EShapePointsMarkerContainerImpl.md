[Winter Cardinal UI - v0.160.0](../index.md) / EShapePointsMarkerContainerImpl

# Class: EShapePointsMarkerContainerImpl

## Implements

- [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md)

## Table of contents

### Constructors

- [constructor](EShapePointsMarkerContainerImpl.md#constructor)

### Properties

- [\_head](EShapePointsMarkerContainerImpl.md#_head)
- [\_isFillChanged](EShapePointsMarkerContainerImpl.md#_isfillchanged)
- [\_isSizeChanged](EShapePointsMarkerContainerImpl.md#_issizechanged)
- [\_isTypeChanged](EShapePointsMarkerContainerImpl.md#_istypechanged)
- [\_lockCount](EShapePointsMarkerContainerImpl.md#_lockcount)
- [\_parent](EShapePointsMarkerContainerImpl.md#_parent)
- [\_tail](EShapePointsMarkerContainerImpl.md#_tail)

### Accessors

- [head](EShapePointsMarkerContainerImpl.md#head)
- [parent](EShapePointsMarkerContainerImpl.md#parent)
- [tail](EShapePointsMarkerContainerImpl.md#tail)

### Methods

- [copy](EShapePointsMarkerContainerImpl.md#copy)
- [deserialize](EShapePointsMarkerContainerImpl.md#deserialize)
- [lock](EShapePointsMarkerContainerImpl.md#lock)
- [onFillChange](EShapePointsMarkerContainerImpl.md#onfillchange)
- [onSizeChange](EShapePointsMarkerContainerImpl.md#onsizechange)
- [onTypeChange](EShapePointsMarkerContainerImpl.md#ontypechange)
- [serialize](EShapePointsMarkerContainerImpl.md#serialize)
- [unlock](EShapePointsMarkerContainerImpl.md#unlock)

## Constructors

### constructor

• **new EShapePointsMarkerContainerImpl**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapePointsMarkerContainerImplParent`](../interfaces/EShapePointsMarkerContainerImplParent.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L32)

## Properties

### \_head

• `Protected` **\_head**: [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L29)

___

### \_isFillChanged

• `Protected` **\_isFillChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L28)

___

### \_isSizeChanged

• `Protected` **\_isSizeChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L27)

___

### \_isTypeChanged

• `Protected` **\_isTypeChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L26)

___

### \_lockCount

• `Protected` **\_lockCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L25)

___

### \_parent

• `Protected` **\_parent**: [`EShapePointsMarkerContainerImplParent`](../interfaces/EShapePointsMarkerContainerImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L24)

___

### \_tail

• `Protected` **\_tail**: [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L30)

## Accessors

### head

• `get` **head**(): [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Returns

[`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Implementation of

[EShapePointsMarkerContainer](../interfaces/EShapePointsMarkerContainer.md).[head](../interfaces/EShapePointsMarkerContainer.md#head)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L73)

___

### parent

• `get` **parent**(): [`EShapePointsMarkerContainerImplParent`](../interfaces/EShapePointsMarkerContainerImplParent.md)

#### Returns

[`EShapePointsMarkerContainerImplParent`](../interfaces/EShapePointsMarkerContainerImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L69)

___

### tail

• `get` **tail**(): [`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Returns

[`EShapePointsMarker`](../interfaces/EShapePointsMarker.md)

#### Implementation of

[EShapePointsMarkerContainer](../interfaces/EShapePointsMarkerContainer.md).[tail](../interfaces/EShapePointsMarkerContainer.md#tail)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L77)

## Methods

### copy

▸ **copy**(`source`): [`EShapePointsMarkerContainerImpl`](EShapePointsMarkerContainerImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapePointsMarkerContainer`](../interfaces/EShapePointsMarkerContainer.md) |

#### Returns

[`EShapePointsMarkerContainerImpl`](EShapePointsMarkerContainerImpl.md)

#### Implementation of

[EShapePointsMarkerContainer](../interfaces/EShapePointsMarkerContainer.md).[copy](../interfaces/EShapePointsMarkerContainer.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L105)

___

### deserialize

▸ **deserialize**(`resourceId`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceId` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Implementation of

[EShapePointsMarkerContainer](../interfaces/EShapePointsMarkerContainer.md).[deserialize](../interfaces/EShapePointsMarkerContainer.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L119)

___

### lock

▸ **lock**(): [`EShapePointsMarkerContainerImpl`](EShapePointsMarkerContainerImpl.md)

#### Returns

[`EShapePointsMarkerContainerImpl`](EShapePointsMarkerContainerImpl.md)

#### Implementation of

[EShapePointsMarkerContainer](../interfaces/EShapePointsMarkerContainer.md).[lock](../interfaces/EShapePointsMarkerContainer.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L42)

___

### onFillChange

▸ **onFillChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L97)

___

### onSizeChange

▸ **onSizeChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L89)

___

### onTypeChange

▸ **onTypeChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L81)

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

[EShapePointsMarkerContainer](../interfaces/EShapePointsMarkerContainer.md).[serialize](../interfaces/EShapePointsMarkerContainer.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L113)

___

### unlock

▸ **unlock**(): [`EShapePointsMarkerContainerImpl`](EShapePointsMarkerContainerImpl.md)

#### Returns

[`EShapePointsMarkerContainerImpl`](EShapePointsMarkerContainerImpl.md)

#### Implementation of

[EShapePointsMarkerContainer](../interfaces/EShapePointsMarkerContainer.md).[unlock](../interfaces/EShapePointsMarkerContainer.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-points-marker-container-impl.ts#L52)
