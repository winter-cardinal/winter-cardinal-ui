[Winter Cardinal UI - v0.442.0](../index.md) / EShapeConnectorEdgeImpl

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L43)

## Properties

### \_acceptor

• `Protected` **\_acceptor**: [`EShapeConnectorEdgeAcceptor`](../interfaces/EShapeConnectorEdgeAcceptor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L24)

___

### \_acceptorTransformNew

• `Protected` **\_acceptorTransformNew**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L25)

___

### \_acceptorTransformOld

• `Protected` **\_acceptorTransformOld**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L26)

___

### \_hasAcceptorTransformOld

• `Protected` **\_hasAcceptorTransformOld**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L27)

___

### \_isAcceptorChanged

• `Protected` **\_isAcceptorChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L38)

___

### \_isLocalChanged

• `Protected` **\_isLocalChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L39)

___

### \_isNormalChanged

• `Protected` **\_isNormalChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L40)

___

### \_isOtherChanged

• `Protected` **\_isOtherChanged**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L41)

___

### \_local

• `Protected` **\_local**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L30)

___

### \_localId

• `Protected` **\_localId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L29)

___

### \_localIdRequired

• `Protected` **\_localIdRequired**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L28)

___

### \_lockCount

• `Protected` **\_lockCount**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L37)

___

### \_margin

• `Protected` **\_margin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L35)

___

### \_normal

• `Protected` **\_normal**: `IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L33)

___

### \_normalId

• `Protected` **\_normalId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L32)

___

### \_normalIdRequired

• `Protected` **\_normalIdRequired**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L31)

___

### \_onChange

• `Protected` **\_onChange**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L23)

___

### \_other

• `Protected` **\_other**: ``null`` \| [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L36)

___

### \_parent

• `Protected` **\_parent**: [`EShapeConnector`](../interfaces/EShapeConnector.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L22)

___

### \_side

• `Protected` **\_side**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L34)

___

### WORK\_MATRIX

▪ `Static` `Protected` `Optional` **WORK\_MATRIX**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L20)

## Accessors

### acceptor

• `get` **acceptor**(): [`EShapeConnectorEdgeAcceptor`](../interfaces/EShapeConnectorEdgeAcceptor.md)

#### Returns

[`EShapeConnectorEdgeAcceptor`](../interfaces/EShapeConnectorEdgeAcceptor.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[acceptor](../interfaces/EShapeConnectorEdge.md#acceptor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L130)

___

### local

• `get` **local**(): `IPoint`

#### Returns

`IPoint`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[local](../interfaces/EShapeConnectorEdge.md#local)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L134)

___

### localId

• `get` **localId**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[localId](../interfaces/EShapeConnectorEdge.md#localid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:138](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L138)

___

### margin

• `get` **margin**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[margin](../interfaces/EShapeConnectorEdge.md#margin)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L161)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L165)

___

### normal

• `get` **normal**(): `IPoint`

#### Returns

`IPoint`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[normal](../interfaces/EShapeConnectorEdge.md#normal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L142)

___

### normalId

• `get` **normalId**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[normalId](../interfaces/EShapeConnectorEdge.md#normalid)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L146)

___

### other

• `get` **other**(): ``null`` \| [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)

#### Returns

``null`` \| [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L172)

• `set` **other**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | ``null`` \| [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L176)

___

### parent

• `get` **parent**(): [`EShapeConnector`](../interfaces/EShapeConnector.md)

#### Returns

[`EShapeConnector`](../interfaces/EShapeConnector.md)

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[parent](../interfaces/EShapeConnectorEdge.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L126)

___

### side

• `get` **side**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[side](../interfaces/EShapeConnectorEdge.md#side)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L150)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L154)

## Methods

### attach

▸ **attach**(): `this`

#### Returns

`this`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[attach](../interfaces/EShapeConnectorEdge.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L462)

___

### copy

▸ **copy**(`source`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md) |

#### Returns

`this`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[copy](../interfaces/EShapeConnectorEdge.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L225)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:250](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L250)

___

### detach

▸ **detach**(`exceptions?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](../interfaces/EShape.md)\> |

#### Returns

`this`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[detach](../interfaces/EShapeConnectorEdge.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:472](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L472)

___

### doFit

▸ **doFit**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:301](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L301)

___

### fit

▸ **fit**(`forcibly?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`this`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[fit](../interfaces/EShapeConnectorEdge.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L292)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[lock](../interfaces/EShapeConnectorEdge.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L76)

___

### onAcceptorChange

▸ **onAcceptorChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:423](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L423)

___

### onLocalChange

▸ **onLocalChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:434](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L434)

___

### onNormalChange

▸ **onNormalChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:444](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L444)

___

### onOtherChange

▸ **onOtherChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L454)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L236)

___

### set

▸ **set**(`acceptorShape?`, `acceptorEdge?`, `acceptorX?`, `acceptorY?`, `margin?`, `x?`, `y?`, `nx?`, `ny?`, `side?`): `this`

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

`this`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[set](../interfaces/EShapeConnectorEdge.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L180)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:408](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L408)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeConnectorEdge](../interfaces/EShapeConnectorEdge.md).[unlock](../interfaces/EShapeConnectorEdge.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-edge-impl.ts#L86)
