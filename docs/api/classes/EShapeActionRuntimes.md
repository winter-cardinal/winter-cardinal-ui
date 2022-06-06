[Winter Cardinal UI - v0.179.0](../index.md) / EShapeActionRuntimes

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L139)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L140)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L48)

___

### isEmbedded

▸ `Static` **isEmbedded**(`target`): target is EShape

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |

#### Returns

target is EShape

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L52)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L69)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L58)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-runtimes.ts#L101)
