[Winter Cardinal UI - v0.442.0](../index.md) / EShapeConnectorContainer

# Interface: EShapeConnectorContainer

## Implemented by

- [`EShapeConnectorContainerImpl`](../classes/EShapeConnectorContainerImpl.md)

## Table of contents

### Methods

- [add](EShapeConnectorContainer.md#add)
- [attach](EShapeConnectorContainer.md#attach)
- [clear](EShapeConnectorContainer.md#clear)
- [contains](EShapeConnectorContainer.md#contains)
- [copy](EShapeConnectorContainer.md#copy)
- [detach](EShapeConnectorContainer.md#detach)
- [each](EShapeConnectorContainer.md#each)
- [fit](EShapeConnectorContainer.md#fit)
- [remove](EShapeConnectorContainer.md#remove)
- [size](EShapeConnectorContainer.md#size)

## Methods

### add

▸ **add**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeConnectorEdge`](EShapeConnectorEdge.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts#L10)

___

### attach

▸ **attach**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts#L18)

___

### clear

▸ **clear**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts#L12)

___

### contains

▸ **contains**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeConnectorEdge`](EShapeConnectorEdge.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts#L15)

___

### copy

▸ **copy**(`source`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`EShapeConnectorContainer`](EShapeConnectorContainer.md) |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts#L13)

___

### detach

▸ **detach**(`exceptions?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `exceptions?` | `Set`\<[`EShape`](EShape.md)\> |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts#L19)

___

### each

▸ **each**(`iteratee`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`edge`: [`EShapeConnectorEdge`](EShapeConnectorEdge.md)) => `void` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts#L14)

___

### fit

▸ **fit**(`forcibly?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forcibly?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts#L17)

___

### remove

▸ **remove**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeConnectorEdge`](EShapeConnectorEdge.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts#L11)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/e-shape-connector-container.ts#L16)
