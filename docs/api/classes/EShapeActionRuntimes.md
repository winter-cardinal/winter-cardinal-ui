[Winter Cardinal UI - v0.194.0](../index.md) / EShapeActionRuntimes

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L142)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L143)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L49)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L53)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L68)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L57)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L101)
