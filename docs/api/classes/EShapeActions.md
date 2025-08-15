[Winter Cardinal UI - v0.457.0](../index.md) / EShapeActions

# Class: EShapeActions

## Table of contents

### Constructors

- [constructor](EShapeActions.md#constructor)

### Properties

- [SHAPE](EShapeActions.md#shape)

### Methods

- [emit](EShapeActions.md#emit)
- [getDiagram](EShapeActions.md#getdiagram)
- [getShape](EShapeActions.md#getshape)
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

## Properties

### SHAPE

▪ `Static` **SHAPE**: ``null`` \| [`EShape`](../interfaces/EShape.md) = `null`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L19)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L127)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L128)

___

### getDiagram

▸ **getDiagram**(): ``null`` \| [`DDiagram`](DDiagram.md)\<[`DThemeDiagram`](../interfaces/DThemeDiagram.md), [`DDiagramOptions`](../interfaces/DDiagramOptions.md)\<[`DThemeDiagram`](../interfaces/DThemeDiagram.md), `any`\>\>

#### Returns

``null`` \| [`DDiagram`](DDiagram.md)\<[`DThemeDiagram`](../interfaces/DThemeDiagram.md), [`DDiagramOptions`](../interfaces/DDiagramOptions.md)\<[`DThemeDiagram`](../interfaces/DThemeDiagram.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L25)

___

### getShape

▸ **getShape**(): ``null`` \| [`EShape`](../interfaces/EShape.md)

#### Returns

``null`` \| [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L21)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L29)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L33)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L48)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L37)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L85)

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

[src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts:119](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-actions.ts#L119)
