[Winter Cardinal UI - v0.407.0](../index.md) / EShapeActions

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

• **new EShapeActions**(): [`EShapeActions`](EShapeActions.md)

#### Returns

[`EShapeActions`](EShapeActions.md)

## Methods

### emit

▸ **emit**(`shape`, `name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L125)

▸ **emit**(`shape`, `name`, `value`, `time`): `void`

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L126)

___

### isContainer

▸ **isContainer**(`target`): target is EShapeActionsContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |

#### Returns

target is EShapeActionsContainer

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L31)

___

### isEmbedded

▸ **isEmbedded**(`target`): target is EShapeEmbedded

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |

#### Returns

target is EShapeEmbedded

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L35)

___

### open

▸ **open**(`shape`, `type`, `target`, `inNewWindow`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `type` | `number` |
| `target` | `unknown` |
| `inNewWindow` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L50)

___

### toContainer

▸ **toContainer**(`shape?`): ``null`` \| [`EShapeActionsContainer`](../interfaces/EShapeActionsContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape?` | ``null`` \| [`EShape`](../interfaces/EShape.md) |

#### Returns

``null`` \| [`EShapeActionsContainer`](../interfaces/EShapeActionsContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L39)

___

### writeLocal

▸ **writeLocal**(`shape`, `id`, `value`, `time`, `state?`): `boolean`

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L83)

___

### writeRemote

▸ **writeRemote**(`shape`, `id`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `id` | `string` |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L117)
