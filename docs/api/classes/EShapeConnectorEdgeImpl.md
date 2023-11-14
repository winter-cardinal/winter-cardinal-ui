[Winter Cardinal UI - v0.374.0](../index.md) / EShapeConnectorEdgeImpl

# Class: EShapeConnectorEdgeImpl

## Implements

- [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)

## Table of contents

### Constructors

- [constructor](EShapeConnectorEdgeImpl.md#constructor)

### Properties

- [\_acceptor](EShapeConnectorEdgeImpl.md#_acceptor)
- [\_acceptorTransformNew](EShapeConnectorEdgeImpl.md#_acceptortransformnew)
- [\_acceptorTransformOld](EShapeConnectorEdgeImpl.md#_acceptortransformold)
- [\_hasAcceptorTransformOld](EShapeConnectorEdgeImpl.md#_hasacceptortransformold)
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
- [\_other](EShapeConnectorEdgeImpl.md#_other)
- [\_parent](EShapeConnectorEdgeImpl.md#_parent)
- [\_side](EShapeConnectorEdgeImpl.md#_side)
- [WORK\_MATRIX](EShapeConnectorEdgeImpl.md#work_matrix)

### Accessors

- [acceptor](EShapeConnectorEdgeImpl.md#acceptor)
- [local](EShapeConnectorEdgeImpl.md#local)
- [localId](EShapeConnectorEdgeImpl.md#localid)
- [margin](EShapeConnectorEdgeImpl.md#margin)
- [normal](EShapeConnectorEdgeImpl.md#normal)
- [normalId](EShapeConnectorEdgeImpl.md#normalid)
- [other](EShapeConnectorEdgeImpl.md#other)
- [parent](EShapeConnectorEdgeImpl.md#parent)
- [side](EShapeConnectorEdgeImpl.md#side)

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

• **new EShapeConnectorEdgeImpl**(`parent`, `onChange`): [`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeConnector`](../interfaces/EShapeConnector.md) |
| `onChange` | () => `void` |

#### Returns

[`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L42)

## Properties

### \_acceptor

• `Protected` **\_acceptor**: [`EShapeConnectorEdgeAcceptor`](../interfaces/EShapeConnectorEdgeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L23)

___

### \_acceptorTransformNew

• `Protected` **\_acceptorTransformNew**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L24)

___

### \_acceptorTransformOld

• `Protected` **\_acceptorTransformOld**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L25)

___

### \_hasAcceptorTransformOld

• `Protected` **\_hasAcceptorTransformOld**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L26)

___

### \_isAcceptorChanged

• `Protected` **\_isAcceptorChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L37)

___

### \_isLocalChanged

• `Protected` **\_isLocalChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L38)

___

### \_isNormalChanged

• `Protected` **\_isNormalChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L39)

___

### \_isOtherChanged

• `Protected` **\_isOtherChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L40)

___

### \_local

• `Protected` **\_local**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L29)

___

### \_localId

• `Protected` **\_localId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L28)

___

### \_localIdRequired

• `Protected` **\_localIdRequired**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L27)

___

### \_lockCount

• `Protected` **\_lockCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L36)

___

### \_margin

• `Protected` **\_margin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L34)

___

### \_normal

• `Protected` **\_normal**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L32)

___

### \_normalId

• `Protected` **\_normalId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L31)

___

### \_normalIdRequired

• `Protected` **\_normalIdRequired**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L30)

___

### \_onChange

• `Protected` **\_onChange**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L22)

___

### \_other

• `Protected` **\_other**: ``null`` \| [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L35)

___

### \_parent

• `Protected` **\_parent**: [`EShapeConnector`](../interfaces/EShapeConnector.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L21)

___

### \_side

• `Protected` **\_side**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L33)

___

### WORK\_MATRIX

▪ `Static` `Protected` `Optional` **WORK\_MATRIX**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L19)

## Accessors

### acceptor

• `get` **acceptor**(): [`EShapeConnectorEdgeAcceptor`](../interfaces/EShapeConnectorEdgeAcceptor.md)

#### Returns

[`EShapeConnectorEdgeAcceptor`](../interfaces/EShapeConnectorEdgeAcceptor.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[acceptor](../interfaces/EShapeConnectorEdge.md#acceptor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L129)

___

### local

• `get` **local**(): `IPoint`

#### Returns

`IPoint`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[local](../interfaces/EShapeConnectorEdge.md#local)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:133](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L133)

___

### localId

• `get` **localId**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[localId](../interfaces/EShapeConnectorEdge.md#localid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L137)

___

### margin

• `get` **margin**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[margin](../interfaces/EShapeConnectorEdge.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L160)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L164)

___

### normal

• `get` **normal**(): `IPoint`

#### Returns

`IPoint`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[normal](../interfaces/EShapeConnectorEdge.md#normal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:141](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L141)

___

### normalId

• `get` **normalId**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[normalId](../interfaces/EShapeConnectorEdge.md#normalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L145)

___

### other

• `get` **other**(): ``null`` \| [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)

#### Returns

``null`` \| [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L171)

• `set` **other**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | ``null`` \| [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L175)

___

### parent

• `get` **parent**(): [`EShapeConnector`](../interfaces/EShapeConnector.md)

#### Returns

[`EShapeConnector`](../interfaces/EShapeConnector.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[parent](../interfaces/EShapeConnectorEdge.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L125)

___

### side

• `get` **side**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[side](../interfaces/EShapeConnectorEdge.md#side)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L149)

• `set` **side**(`side`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `side` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[side](../interfaces/EShapeConnectorEdge.md#side)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L153)

## Methods

### attach

▸ **attach**(): [`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Returns

[`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[attach](../interfaces/EShapeConnectorEdge.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:461](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L461)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L224)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L249)

___

### detach

▸ **detach**(`exceptions?`): [`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](../interfaces/EShape.md)\> |

#### Returns

[`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[detach](../interfaces/EShapeConnectorEdge.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L471)

___

### doFit

▸ **doFit**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L300)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:291](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L291)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[lock](../interfaces/EShapeConnectorEdge.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L75)

___

### onAcceptorChange

▸ **onAcceptorChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L422)

___

### onLocalChange

▸ **onLocalChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:433](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L433)

___

### onNormalChange

▸ **onNormalChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:443](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L443)

___

### onOtherChange

▸ **onOtherChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:453](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L453)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L235)

___

### set

▸ **set**(`acceptorShape?`, `acceptorEdge?`, `acceptorX?`, `acceptorY?`, `margin?`, `x?`, `y?`, `nx?`, `ny?`, `side?`): [`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `acceptorShape?` | ``null`` \| [`EShape`](../interfaces/EShape.md) |
| `acceptorEdge?` | ``null`` \| `string` |
| `acceptorX?` | ``null`` \| `number` |
| `acceptorY?` | ``null`` \| `number` |
| `margin?` | `number` |
| `x?` | `number` |
| `y?` | `number` |
| `nx?` | `number` |
| `ny?` | `number` |
| `side?` | `number` |

#### Returns

[`EShapeConnectorEdgeImpl`](EShapeConnectorEdgeImpl.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[set](../interfaces/EShapeConnectorEdge.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:179](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L179)

___

### toAcceptorTransform

▸ **toAcceptorTransform**(`shape`, `result`): `Matrix`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `result` | `Matrix` |

#### Returns

`Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:407](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L407)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[unlock](../interfaces/EShapeConnectorEdge.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L85)
