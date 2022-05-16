[Winter Cardinal UI - v0.167.0](../index.md) / EShapeConnectorEdgeImpl

# Class: EShapeConnectorEdgeImpl

## Implements

- [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)

## Table of contents

### Constructors

- [constructor](EShapeConnectorEdgeImpl.md#constructor)

### Properties

- [\_acceptor](EShapeConnectorEdgeImpl.md#_acceptor)
- [\_isAcceptorChanged](EShapeConnectorEdgeImpl.md#_isacceptorchanged)
- [\_isLocalChanged](EShapeConnectorEdgeImpl.md#_islocalchanged)
- [\_isOtherChanged](EShapeConnectorEdgeImpl.md#_isotherchanged)
- [\_local](EShapeConnectorEdgeImpl.md#_local)
- [\_localId](EShapeConnectorEdgeImpl.md#_localid)
- [\_localIdRequired](EShapeConnectorEdgeImpl.md#_localidrequired)
- [\_lockCount](EShapeConnectorEdgeImpl.md#_lockcount)
- [\_margin](EShapeConnectorEdgeImpl.md#_margin)
- [\_onChange](EShapeConnectorEdgeImpl.md#_onchange)
- [\_parent](EShapeConnectorEdgeImpl.md#_parent)
- [WORK\_UPDATE\_LOCAL](EShapeConnectorEdgeImpl.md#work_update_local)

### Accessors

- [acceptor](EShapeConnectorEdgeImpl.md#acceptor)
- [local](EShapeConnectorEdgeImpl.md#local)
- [localId](EShapeConnectorEdgeImpl.md#localid)
- [margin](EShapeConnectorEdgeImpl.md#margin)

### Methods

- [attach](EShapeConnectorEdgeImpl.md#attach)
- [copy](EShapeConnectorEdgeImpl.md#copy)
- [deserialize](EShapeConnectorEdgeImpl.md#deserialize)
- [detach](EShapeConnectorEdgeImpl.md#detach)
- [fit](EShapeConnectorEdgeImpl.md#fit)
- [lock](EShapeConnectorEdgeImpl.md#lock)
- [onAcceptorChange](EShapeConnectorEdgeImpl.md#onacceptorchange)
- [onLocalChange](EShapeConnectorEdgeImpl.md#onlocalchange)
- [onOtherChange](EShapeConnectorEdgeImpl.md#onotherchange)
- [serialize](EShapeConnectorEdgeImpl.md#serialize)
- [set](EShapeConnectorEdgeImpl.md#set)
- [unlock](EShapeConnectorEdgeImpl.md#unlock)

## Constructors

### constructor

• **new EShapeConnectorEdgeImpl**(`parent`, `onChange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeConnector`](../interfaces/EShapeConnector.md) |
| `onChange` | () => `void` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L32)

## Properties

### \_acceptor

• `Protected` **\_acceptor**: [`EShapeConnectorEdgeAcceptor`](../interfaces/EShapeConnectorEdgeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L22)

___

### \_isAcceptorChanged

• `Protected` **\_isAcceptorChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L28)

___

### \_isLocalChanged

• `Protected` **\_isLocalChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L29)

___

### \_isOtherChanged

• `Protected` **\_isOtherChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L30)

___

### \_local

• `Protected` **\_local**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L25)

___

### \_localId

• `Protected` **\_localId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L24)

___

### \_localIdRequired

• `Protected` **\_localIdRequired**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L23)

___

### \_lockCount

• `Protected` **\_lockCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L27)

___

### \_margin

• `Protected` **\_margin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L26)

___

### \_onChange

• `Protected` **\_onChange**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L21)

___

### \_parent

• `Protected` **\_parent**: [`EShapeConnector`](../interfaces/EShapeConnector.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L20)

___

### WORK\_UPDATE\_LOCAL

▪ `Static` `Protected` `Optional` **WORK\_UPDATE\_LOCAL**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L18)

## Accessors

### acceptor

• `get` **acceptor**(): [`EShapeConnectorEdgeAcceptor`](../interfaces/EShapeConnectorEdgeAcceptor.md)

#### Returns

[`EShapeConnectorEdgeAcceptor`](../interfaces/EShapeConnectorEdgeAcceptor.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[acceptor](../interfaces/EShapeConnectorEdge.md#acceptor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L70)

___

### local

• `get` **local**(): `IPoint`

#### Returns

`IPoint`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[local](../interfaces/EShapeConnectorEdge.md#local)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L74)

___

### localId

• `get` **localId**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[localId](../interfaces/EShapeConnectorEdge.md#localid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L78)

___

### margin

• `get` **margin**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[margin](../interfaces/EShapeConnectorEdge.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L82)

• `set` **margin**(`margin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `margin` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[margin](../interfaces/EShapeConnectorEdge.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L86)

## Methods

### attach

▸ **attach**(): [`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Returns

[`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[attach](../interfaces/EShapeConnectorEdge.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L225)

___

### copy

▸ **copy**(`source`): [`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md) |

#### Returns

[`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[copy](../interfaces/EShapeConnectorEdge.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L115)

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

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[deserialize](../interfaces/EShapeConnectorEdge.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L136)

___

### detach

▸ **detach**(): [`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Returns

[`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[detach](../interfaces/EShapeConnectorEdge.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:233](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L233)

___

### fit

▸ **fit**(`forcibly?`): [`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

[`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[fit](../interfaces/EShapeConnectorEdge.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L167)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[lock](../interfaces/EShapeConnectorEdge.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L48)

___

### onAcceptorChange

▸ **onAcceptorChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:198](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L198)

___

### onLocalChange

▸ `Protected` **onLocalChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L207)

___

### onOtherChange

▸ `Protected` **onOtherChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:217](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L217)

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

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[serialize](../interfaces/EShapeConnectorEdge.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L124)

___

### set

▸ **set**(`shape?`, `edge?`, `margin?`, `localX?`, `localY?`): [`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape?` | ``null`` \| [`EShape`](../interfaces/EShape.md) |
| `edge?` | ``null`` \| `string` |
| `margin?` | `number` |
| `localX?` | `number` |
| `localY?` | `number` |

#### Returns

[`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[set](../interfaces/EShapeConnectorEdge.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L93)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[unlock](../interfaces/EShapeConnectorEdge.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L57)
