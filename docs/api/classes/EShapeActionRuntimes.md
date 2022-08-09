[Winter Cardinal UI - v0.205.1](../index.md) / EShapeActionRuntimes

# Class: EShapeActionRuntimes

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimes.md#constructor)

### Methods

- [emit](EShapeActionRuntimes.md#emit)
- [isContainer](EShapeActionRuntimes.md#iscontainer)
- [isEmbedded](EShapeActionRuntimes.md#isembedded)
- [open](EShapeActionRuntimes.md#open)
- [toContainer](EShapeActionRuntimes.md#tocontainer)
- [writeLocal](EShapeActionRuntimes.md#writelocal)
- [writeRemote](EShapeActionRuntimes.md#writeremote)

## Constructors

### constructor

• **new EShapeActionRuntimes**()

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L124)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L125)

___

### isContainer

▸ `Static` **isContainer**(`target`): target is EShapeActionRuntimeContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |

#### Returns

target is EShapeActionRuntimeContainer

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L30)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L34)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L49)

___

### toContainer

▸ `Static` **toContainer**(`shape?`): ``null`` \| [`EShapeActionRuntimeContainer`](../interfaces/EShapeActionRuntimeContainer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape?` | ``null`` \| [`EShape`](../interfaces/EShape.md) |

#### Returns

``null`` \| [`EShapeActionRuntimeContainer`](../interfaces/EShapeActionRuntimeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L38)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L82)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L116)
