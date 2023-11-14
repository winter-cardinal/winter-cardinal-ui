[Winter Cardinal UI - v0.374.0](../index.md) / EShapeConnectorEdgeContainerImpl

# Class: EShapeConnectorEdgeContainerImpl

## Implements

- [`EShapeConnectorEdgeContainer`](../interfaces/EShapeConnectorEdgeContainer.md)

## Table of contents

### Constructors

- [constructor](EShapeConnectorEdgeContainerImpl.md#constructor)

### Properties

- [\_head](EShapeConnectorEdgeContainerImpl.md#_head)
- [\_isChanged](EShapeConnectorEdgeContainerImpl.md#_ischanged)
- [\_lockCount](EShapeConnectorEdgeContainerImpl.md#_lockcount)
- [\_onChange](EShapeConnectorEdgeContainerImpl.md#_onchange)
- [\_parent](EShapeConnectorEdgeContainerImpl.md#_parent)
- [\_tail](EShapeConnectorEdgeContainerImpl.md#_tail)

### Accessors

- [head](EShapeConnectorEdgeContainerImpl.md#head)
- [tail](EShapeConnectorEdgeContainerImpl.md#tail)

### Methods

- [attach](EShapeConnectorEdgeContainerImpl.md#attach)
- [copy](EShapeConnectorEdgeContainerImpl.md#copy)
- [deserialize](EShapeConnectorEdgeContainerImpl.md#deserialize)
- [detach](EShapeConnectorEdgeContainerImpl.md#detach)
- [fit](EShapeConnectorEdgeContainerImpl.md#fit)
- [lock](EShapeConnectorEdgeContainerImpl.md#lock)
- [onChange](EShapeConnectorEdgeContainerImpl.md#onchange)
- [serialize](EShapeConnectorEdgeContainerImpl.md#serialize)
- [unlock](EShapeConnectorEdgeContainerImpl.md#unlock)

## Constructors

### constructor

• **new EShapeConnectorEdgeContainerImpl**(`parent`, `onChange`): [`EShapeConnectorEdgeContainerImpl`](EShapeConnectorEdgeContainerImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeConnector`](../interfaces/EShapeConnector.md) |
| `onChange` | () => `void` |

#### Returns

[`EShapeConnectorEdgeContainerImpl`](EShapeConnectorEdgeContainerImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L26)

## Properties

### \_head

• `Protected` **\_head**: [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L24)

___

### \_isChanged

• `Protected` **\_isChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L21)

___

### \_lockCount

• `Protected` **\_lockCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L20)

___

### \_onChange

• `Protected` **\_onChange**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L22)

___

### \_parent

• `Protected` **\_parent**: [`EShapeConnector`](../interfaces/EShapeConnector.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L19)

___

### \_tail

• `Protected` **\_tail**: [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L23)

## Accessors

### head

• `get` **head**(): [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)

#### Returns

[`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)

#### Implementation of

[EShapeConnectorEdgeContainer](../interfaces/EShapeConnectorEdgeContainer.md).[head](../interfaces/EShapeConnectorEdgeContainer.md#head)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L72)

___

### tail

• `get` **tail**(): [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)

#### Returns

[`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)

#### Implementation of

[EShapeConnectorEdgeContainer](../interfaces/EShapeConnectorEdgeContainer.md).[tail](../interfaces/EShapeConnectorEdgeContainer.md#tail)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L68)

## Methods

### attach

▸ **attach**(): [`EShapeConnectorEdgeContainerImpl`](EShapeConnectorEdgeContainerImpl.md)

#### Returns

[`EShapeConnectorEdgeContainerImpl`](EShapeConnectorEdgeContainerImpl.md)

#### Implementation of

[EShapeConnectorEdgeContainer](../interfaces/EShapeConnectorEdgeContainer.md).[attach](../interfaces/EShapeConnectorEdgeContainer.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L119)

___

### copy

▸ **copy**(`source`): [`EShapeConnectorEdgeContainerImpl`](EShapeConnectorEdgeContainerImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapeConnectorEdgeContainer`](../interfaces/EShapeConnectorEdgeContainer.md) |

#### Returns

[`EShapeConnectorEdgeContainerImpl`](EShapeConnectorEdgeContainerImpl.md)

#### Implementation of

[EShapeConnectorEdgeContainer](../interfaces/EShapeConnectorEdgeContainer.md).[copy](../interfaces/EShapeConnectorEdgeContainer.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L76)

___

### deserialize

▸ **deserialize**(`resourceId`, `mapping`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceId` | `number` |
| `mapping` | [`EShapeUuidMapping`](../interfaces/EShapeUuidMapping.md) |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Implementation of

[EShapeConnectorEdgeContainer](../interfaces/EShapeConnectorEdgeContainer.md).[deserialize](../interfaces/EShapeConnectorEdgeContainer.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L98)

___

### detach

▸ **detach**(`exceptions?`): [`EShapeConnectorEdgeContainerImpl`](EShapeConnectorEdgeContainerImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](../interfaces/EShape.md)\> |

#### Returns

[`EShapeConnectorEdgeContainerImpl`](EShapeConnectorEdgeContainerImpl.md)

#### Implementation of

[EShapeConnectorEdgeContainer](../interfaces/EShapeConnectorEdgeContainer.md).[detach](../interfaces/EShapeConnectorEdgeContainer.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L131)

___

### fit

▸ **fit**(`forcibly?`): [`EShapeConnectorEdgeContainerImpl`](EShapeConnectorEdgeContainerImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

[`EShapeConnectorEdgeContainerImpl`](EShapeConnectorEdgeContainerImpl.md)

#### Implementation of

[EShapeConnectorEdgeContainer](../interfaces/EShapeConnectorEdgeContainer.md).[fit](../interfaces/EShapeConnectorEdgeContainer.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L84)

___

### lock

▸ **lock**(): [`EShapeConnectorEdgeContainerImpl`](EShapeConnectorEdgeContainerImpl.md)

#### Returns

[`EShapeConnectorEdgeContainerImpl`](EShapeConnectorEdgeContainerImpl.md)

#### Implementation of

[EShapeConnectorEdgeContainer](../interfaces/EShapeConnectorEdgeContainer.md).[lock](../interfaces/EShapeConnectorEdgeContainer.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L42)

___

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L60)

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

[EShapeConnectorEdgeContainer](../interfaces/EShapeConnectorEdgeContainer.md).[serialize](../interfaces/EShapeConnectorEdgeContainer.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L92)

___

### unlock

▸ **unlock**(): [`EShapeConnectorEdgeContainerImpl`](EShapeConnectorEdgeContainerImpl.md)

#### Returns

[`EShapeConnectorEdgeContainerImpl`](EShapeConnectorEdgeContainerImpl.md)

#### Implementation of

[EShapeConnectorEdgeContainer](../interfaces/EShapeConnectorEdgeContainer.md).[unlock](../interfaces/EShapeConnectorEdgeContainer.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-container-impl.ts#L50)
