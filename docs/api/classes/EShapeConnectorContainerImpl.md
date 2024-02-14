[Winter Cardinal UI - v0.407.0](../index.md) / EShapeConnectorContainerImpl

# Class: EShapeConnectorContainerImpl

## Implements

- [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md)

## Table of contents

### Constructors

- [constructor](EShapeConnectorContainerImpl.md#constructor)

### Properties

- [\_edges](EShapeConnectorContainerImpl.md#_edges)
- [\_onFitBound](EShapeConnectorContainerImpl.md#_onfitbound)
- [\_onFitBoundForcibly](EShapeConnectorContainerImpl.md#_onfitboundforcibly)
- [\_parent](EShapeConnectorContainerImpl.md#_parent)

### Methods

- [add](EShapeConnectorContainerImpl.md#add)
- [attach](EShapeConnectorContainerImpl.md#attach)
- [clear](EShapeConnectorContainerImpl.md#clear)
- [contains](EShapeConnectorContainerImpl.md#contains)
- [copy](EShapeConnectorContainerImpl.md#copy)
- [detach](EShapeConnectorContainerImpl.md#detach)
- [each](EShapeConnectorContainerImpl.md#each)
- [fit](EShapeConnectorContainerImpl.md#fit)
- [newOnFitBound](EShapeConnectorContainerImpl.md#newonfitbound)
- [onFit](EShapeConnectorContainerImpl.md#onfit)
- [remove](EShapeConnectorContainerImpl.md#remove)
- [size](EShapeConnectorContainerImpl.md#size)
- [toOnFitBound](EShapeConnectorContainerImpl.md#toonfitbound)

## Constructors

### constructor

• **new EShapeConnectorContainerImpl**(`parent`): [`EShapeConnectorContainerImpl`](EShapeConnectorContainerImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShape`](../interfaces/EShape.md) |

#### Returns

[`EShapeConnectorContainerImpl`](EShapeConnectorContainerImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L16)

## Properties

### \_edges

• `Protected` **\_edges**: `Set`\<[`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L12)

___

### \_onFitBound

• `Protected` `Optional` **\_onFitBound**: (`connector`: [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)) => `void`

#### Type declaration

▸ (`connector`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `connector` | [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md) |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L13)

___

### \_onFitBoundForcibly

• `Protected` `Optional` **\_onFitBoundForcibly**: (`connector`: [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)) => `void`

#### Type declaration

▸ (`connector`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `connector` | [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md) |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L14)

___

### \_parent

• `Protected` **\_parent**: [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L11)

## Methods

### add

▸ **add**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md) |

#### Returns

`boolean`

#### Implementation of

[EShapeConnectorContainer](../interfaces/EShapeConnectorContainer.md).[add](../interfaces/EShapeConnectorContainer.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L21)

___

### attach

▸ **attach**(): [`EShapeConnectorContainerImpl`](EShapeConnectorContainerImpl.md)

#### Returns

[`EShapeConnectorContainerImpl`](EShapeConnectorContainerImpl.md)

#### Implementation of

[EShapeConnectorContainer](../interfaces/EShapeConnectorContainer.md).[attach](../interfaces/EShapeConnectorContainer.md#attach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L97)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeConnectorContainer](../interfaces/EShapeConnectorContainer.md).[clear](../interfaces/EShapeConnectorContainer.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L42)

___

### contains

▸ **contains**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md) |

#### Returns

`boolean`

#### Implementation of

[EShapeConnectorContainer](../interfaces/EShapeConnectorContainer.md).[contains](../interfaces/EShapeConnectorContainer.md#contains)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L30)

___

### copy

▸ **copy**(`source`): [`EShapeConnectorContainerImpl`](EShapeConnectorContainerImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapeConnectorContainer`](../interfaces/EShapeConnectorContainer.md) |

#### Returns

[`EShapeConnectorContainerImpl`](EShapeConnectorContainerImpl.md)

#### Implementation of

[EShapeConnectorContainer](../interfaces/EShapeConnectorContainer.md).[copy](../interfaces/EShapeConnectorContainer.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L51)

___

### detach

▸ **detach**(`exceptions?`): [`EShapeConnectorContainerImpl`](EShapeConnectorContainerImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](../interfaces/EShape.md)\> |

#### Returns

[`EShapeConnectorContainerImpl`](EShapeConnectorContainerImpl.md)

#### Implementation of

[EShapeConnectorContainer](../interfaces/EShapeConnectorContainer.md).[detach](../interfaces/EShapeConnectorContainer.md#detach)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L105)

___

### each

▸ **each**(`iteratee`): [`EShapeConnectorContainerImpl`](EShapeConnectorContainerImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`edge`: [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)) => `void` |

#### Returns

[`EShapeConnectorContainerImpl`](EShapeConnectorContainerImpl.md)

#### Implementation of

[EShapeConnectorContainer](../interfaces/EShapeConnectorContainer.md).[each](../interfaces/EShapeConnectorContainer.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L60)

___

### fit

▸ **fit**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeConnectorContainer](../interfaces/EShapeConnectorContainer.md).[fit](../interfaces/EShapeConnectorContainer.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L65)

___

### newOnFitBound

▸ **newOnFitBound**(`forcibly?`): (`edge`: [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`fn`

▸ (`edge`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md) |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L87)

___

### onFit

▸ **onFit**(`target`, `forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md) |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L93)

___

### remove

▸ **remove**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md) |

#### Returns

`boolean`

#### Implementation of

[EShapeConnectorContainer](../interfaces/EShapeConnectorContainer.md).[remove](../interfaces/EShapeConnectorContainer.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L38)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeConnectorContainer](../interfaces/EShapeConnectorContainer.md).[size](../interfaces/EShapeConnectorContainer.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L34)

___

### toOnFitBound

▸ **toOnFitBound**(`forcibly?`): (`connector`: [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md)) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`fn`

▸ (`connector`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `connector` | [`EShapeConnectorEdge`](../interfaces/EShapeConnectorEdge.md) |

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container-impl.ts#L69)
