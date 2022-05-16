[Winter Cardinal UI - v0.167.0](../index.md) / EShapeActionRuntimes

# Class: EShapeActionRuntimes

## Table of contents

### Constructors

- [constructor](EShapeActionRuntimes.md#constructor)

### Methods

- [emit](EShapeActionRuntimes.md#emit)
- [open](EShapeActionRuntimes.md#open)
- [toContainer](EShapeActionRuntimes.md#tocontainer)
- [write](EShapeActionRuntimes.md#write)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L77)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L78)

___

### open

▸ `Static` **open**(`shape`, `target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `target` | `string` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L49)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L38)

___

### write

▸ `Static` **write**(`shape`, `id`, `value`, `time`, `remote`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `id` | `string` |
| `value` | `unknown` |
| `time` | `number` |
| `remote` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L56)
