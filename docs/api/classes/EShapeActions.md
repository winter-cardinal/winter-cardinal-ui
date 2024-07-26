[Winter Cardinal UI - v0.442.0](../index.md) / EShapeActions

# Class: EShapeActions

## Table of contents

### Constructors

- [constructor](EShapeActions.md#constructor)

### Methods

- [emit](EShapeActions.md#emit)
- [isDiagram](EShapeActions.md#isdiagram)
- [isEmbedded](EShapeActions.md#isembedded)
- [open](EShapeActions.md#open)
- [toDiagram](EShapeActions.md#todiagram)
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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L116)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L117)

___

### isDiagram

▸ **isDiagram**(`target`): target is DDiagram\<DThemeDiagram, DDiagramOptions\<DThemeDiagram, any\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |

#### Returns

target is DDiagram\<DThemeDiagram, DDiagramOptions\<DThemeDiagram, any\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L18)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L22)

___

### open

▸ **open**(`shape`, `type`, `target`, `inNewWindow`, `environment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `type` | `number` |
| `target` | `unknown` |
| `inNewWindow` | `boolean` |
| `environment` | [`EShapeActionEnvironment`](../interfaces/EShapeActionEnvironment.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L37)

___

### toDiagram

▸ **toDiagram**(`shape?`): ``null`` \| [`DDiagram`](DDiagram.md)\<[`DThemeDiagram`](../interfaces/DThemeDiagram.md), [`DDiagramOptions`](../interfaces/DDiagramOptions.md)\<[`DThemeDiagram`](../interfaces/DThemeDiagram.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape?` | ``null`` \| [`EShape`](../interfaces/EShape.md) |

#### Returns

``null`` \| [`DDiagram`](DDiagram.md)\<[`DThemeDiagram`](../interfaces/DThemeDiagram.md), [`DDiagramOptions`](../interfaces/DDiagramOptions.md)\<[`DThemeDiagram`](../interfaces/DThemeDiagram.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L26)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L74)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L108)
