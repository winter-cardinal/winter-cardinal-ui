[Winter Cardinal UI - v0.310.1](../index.md) / EShapeConnectorEdgeImpl

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
- [\_isNormalChanged](EShapeConnectorEdgeImpl.md#_isnormalchanged)
- [\_isOtherChanged](EShapeConnectorEdgeImpl.md#_isotherchanged)
- [\_local](EShapeConnectorEdgeImpl.md#_local)
- [\_localId](EShapeConnectorEdgeImpl.md#_localid)
- [\_localIdRequired](EShapeConnectorEdgeImpl.md#_localidrequired)
- [\_lockCount](EShapeConnectorEdgeImpl.md#_lockcount)
- [\_margin](EShapeConnectorEdgeImpl.md#_margin)
- [\_normal](EShapeConnectorEdgeImpl.md#_normal)
- [\_normalId](EShapeConnectorEdgeImpl.md#_normalid)
- [\_normalIdRequired](EShapeConnectorEdgeImpl.md#_normalidrequired)
- [\_onChange](EShapeConnectorEdgeImpl.md#_onchange)
- [\_parent](EShapeConnectorEdgeImpl.md#_parent)
- [WORK\_MATRIX](EShapeConnectorEdgeImpl.md#work_matrix)

### Accessors

- [acceptor](EShapeConnectorEdgeImpl.md#acceptor)
- [local](EShapeConnectorEdgeImpl.md#local)
- [localId](EShapeConnectorEdgeImpl.md#localid)
- [margin](EShapeConnectorEdgeImpl.md#margin)
- [normal](EShapeConnectorEdgeImpl.md#normal)
- [normalId](EShapeConnectorEdgeImpl.md#normalid)
- [parent](EShapeConnectorEdgeImpl.md#parent)

### Methods

- [attach](EShapeConnectorEdgeImpl.md#attach)
- [copy](EShapeConnectorEdgeImpl.md#copy)
- [deserialize](EShapeConnectorEdgeImpl.md#deserialize)
- [detach](EShapeConnectorEdgeImpl.md#detach)
- [doFit](EShapeConnectorEdgeImpl.md#dofit)
- [fit](EShapeConnectorEdgeImpl.md#fit)
- [lock](EShapeConnectorEdgeImpl.md#lock)
- [onAcceptorChange](EShapeConnectorEdgeImpl.md#onacceptorchange)
- [onLocalChange](EShapeConnectorEdgeImpl.md#onlocalchange)
- [onNormalChange](EShapeConnectorEdgeImpl.md#onnormalchange)
- [onOtherChange](EShapeConnectorEdgeImpl.md#onotherchange)
- [serialize](EShapeConnectorEdgeImpl.md#serialize)
- [set](EShapeConnectorEdgeImpl.md#set)
- [toAcceptorTransform](EShapeConnectorEdgeImpl.md#toacceptortransform)
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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L36)

## Properties

### \_acceptor

• `Protected` **\_acceptor**: [`EShapeConnectorEdgeAcceptor`](../interfaces/EShapeConnectorEdgeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L22)

___

### \_isAcceptorChanged

• `Protected` **\_isAcceptorChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L31)

___

### \_isLocalChanged

• `Protected` **\_isLocalChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L32)

___

### \_isNormalChanged

• `Protected` **\_isNormalChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L33)

___

### \_isOtherChanged

• `Protected` **\_isOtherChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L34)

___

### \_local

• `Protected` **\_local**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L25)

___

### \_localId

• `Protected` **\_localId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L24)

___

### \_localIdRequired

• `Protected` **\_localIdRequired**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L23)

___

### \_lockCount

• `Protected` **\_lockCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L30)

___

### \_margin

• `Protected` **\_margin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L29)

___

### \_normal

• `Protected` **\_normal**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L28)

___

### \_normalId

• `Protected` **\_normalId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L27)

___

### \_normalIdRequired

• `Protected` **\_normalIdRequired**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L26)

___

### \_onChange

• `Protected` **\_onChange**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L21)

___

### \_parent

• `Protected` **\_parent**: [`EShapeConnector`](../interfaces/EShapeConnector.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L20)

___

### WORK\_MATRIX

▪ `Static` `Protected` `Optional` **WORK\_MATRIX**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L18)

## Accessors

### acceptor

• `get` **acceptor**(): [`EShapeConnectorEdgeAcceptor`](../interfaces/EShapeConnectorEdgeAcceptor.md)

#### Returns

[`EShapeConnectorEdgeAcceptor`](../interfaces/EShapeConnectorEdgeAcceptor.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[acceptor](../interfaces/EShapeConnectorEdge.md#acceptor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L115)

___

### local

• `get` **local**(): `IPoint`

#### Returns

`IPoint`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[local](../interfaces/EShapeConnectorEdge.md#local)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L119)

___

### localId

• `get` **localId**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[localId](../interfaces/EShapeConnectorEdge.md#localid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L123)

___

### margin

• `get` **margin**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[margin](../interfaces/EShapeConnectorEdge.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L135)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L139)

___

### normal

• `get` **normal**(): `IPoint`

#### Returns

`IPoint`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[normal](../interfaces/EShapeConnectorEdge.md#normal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L127)

___

### normalId

• `get` **normalId**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[normalId](../interfaces/EShapeConnectorEdge.md#normalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L131)

___

### parent

• `get` **parent**(): [`EShapeConnector`](../interfaces/EShapeConnector.md)

#### Returns

[`EShapeConnector`](../interfaces/EShapeConnector.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[parent](../interfaces/EShapeConnectorEdge.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L111)

## Methods

### attach

▸ **attach**(): [`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Returns

[`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[attach](../interfaces/EShapeConnectorEdge.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L366)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L184)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:207](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L207)

___

### detach

▸ **detach**(): [`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Returns

[`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[detach](../interfaces/EShapeConnectorEdge.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L374)

___

### doFit

▸ `Protected` **doFit**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L255)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L246)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[lock](../interfaces/EShapeConnectorEdge.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L62)

___

### onAcceptorChange

▸ **onAcceptorChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:328](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L328)

___

### onLocalChange

▸ `Protected` **onLocalChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L338)

___

### onNormalChange

▸ `Protected` **onNormalChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:348](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L348)

___

### onOtherChange

▸ `Protected` **onOtherChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:358](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L358)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L194)

___

### set

▸ **set**(`shape?`, `edge?`, `margin?`, `x?`, `y?`, `nx?`, `ny?`): [`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape?` | ``null`` \| [`EShape`](../interfaces/EShape.md) |
| `edge?` | ``null`` \| `string` |
| `margin?` | `number` |
| `x?` | `number` |
| `y?` | `number` |
| `nx?` | `number` |
| `ny?` | `number` |

#### Returns

[`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[set](../interfaces/EShapeConnectorEdge.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L146)

___

### toAcceptorTransform

▸ `Protected` **toAcceptorTransform**(`shape`): `Matrix`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:313](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L313)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[unlock](../interfaces/EShapeConnectorEdge.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L72)
