[Winter Cardinal UI - v0.310.1](../index.md) / EShapeActions

# Class: EShapeActions

## Table of contents

### Constructors

- [constructor](EShapeActions.md#constructor)

### Methods

- [emit](EShapeActions.md#emit)
- [isContainer](EShapeActions.md#iscontainer)
- [isEmbedded](EShapeActions.md#isembedded)
- [open](EShapeActions.md#open)
- [toContainer](EShapeActions.md#tocontainer)
- [writeLocal](EShapeActions.md#writelocal)
- [writeRemote](EShapeActions.md#writeremote)

## Constructors

### constructor

• **new EShapeActions**()

## Methods

### emit

▸ `Static` **emit**(`shape`, `name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L124)

▸ `Static` **emit**(`shape`, `name`, `value`, `time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `name` | `string` |
| `value` | `unknown` |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L125)

___

### isContainer

▸ `Static` **isContainer**(`target`): target is EShapeActionsContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |

#### Returns

target is EShapeActionsContainer

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L30)

___

### isEmbedded

▸ `Static` **isEmbedded**(`target`): target is EShapeEmbedded

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |

#### Returns

target is EShapeEmbedded

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L34)

___

### open

▸ `Static` **open**(`shape`, `type`, `target`, `inNewWindow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `type` | `number` |
| `target` | `string` |
| `inNewWindow` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L49)

___

### toContainer

▸ `Static` **toContainer**(`shape?`): ``null`` \| [`EShapeActionsContainer`](../interfaces/EShapeActionsContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape?` | ``null`` \| [`EShape`](../interfaces/EShape.md) |

#### Returns

``null`` \| [`EShapeActionsContainer`](../interfaces/EShapeActionsContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L38)

___

### writeLocal

▸ `Static` **writeLocal**(`shape`, `id`, `value`, `time`, `state?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) | `undefined` |
| `id` | `string` | `undefined` |
| `value` | `unknown` | `undefined` |
| `time` | `number` | `undefined` |
| `state` | `number` | `EShapeDataValueState.FOUND` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L82)

___

### writeRemote

▸ `Static` **writeRemote**(`shape`, `id`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `id` | `string` |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L116)
