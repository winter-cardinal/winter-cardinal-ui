[Winter Cardinal UI - v0.457.0](../index.md) / DDiagramCanvasData

# Interface: DDiagramCanvasData

## Implemented by

- [`DDiagramCanvasDataImpl`](../classes/DDiagramCanvasDataImpl.md)

## Table of contents

### Properties

- [extended](DDiagramCanvasData.md#extended)
- [ids](DDiagramCanvasData.md#ids)
- [private](DDiagramCanvasData.md#private)
- [protected](DDiagramCanvasData.md#protected)

### Methods

- [add](DDiagramCanvasData.md#add)
- [clear](DDiagramCanvasData.md#clear)
- [each](DDiagramCanvasData.md#each)
- [get](DDiagramCanvasData.md#get)
- [set](DDiagramCanvasData.md#set)
- [setAll](DDiagramCanvasData.md#setall)
- [setRange](DDiagramCanvasData.md#setrange)
- [setState](DDiagramCanvasData.md#setstate)
- [setStates](DDiagramCanvasData.md#setstates)
- [setTime](DDiagramCanvasData.md#settime)
- [setTimes](DDiagramCanvasData.md#settimes)
- [setValue](DDiagramCanvasData.md#setvalue)
- [setValues](DDiagramCanvasData.md#setvalues)
- [toDirty](DDiagramCanvasData.md#todirty)

## Properties

### extended

• `Readonly` **extended**: [`EShapeDataScoped`](EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L13)

___

### ids

• `Readonly` **ids**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L14)

___

### private

• `Readonly` **private**: [`EShapeDataScoped`](EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L11)

___

### protected

• `Readonly` **protected**: [`EShapeDataScoped`](EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L12)

## Methods

### add

▸ **add**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | [`EShapeDataValue`](EShapeDataValue.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L16)

___

### clear

▸ **clear**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L26)

___

### each

▸ **each**(`iteratee`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`id`: `string`) => `boolean` \| `void` |

#### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L15)

___

### get

▸ **get**(`id`): ``null`` \| [`EShapeDataValue`](EShapeDataValue.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`EShapeDataValue`](EShapeDataValue.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L25)

___

### set

▸ **set**(`id`, `value?`, `time?`, `state?`, `from?`, `to?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value?` | `unknown` |
| `time?` | `number` |
| `state?` | `number` |
| `from?` | ``null`` \| `number` |
| `to?` | ``null`` \| `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L17)

___

### setAll

▸ **setAll**(`id`, `values?`, `times?`, `states?`, `from?`, `to?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `values?` | `unknown`[] |
| `times?` | `number`[] |
| `states?` | `number`[] |
| `from?` | ``null`` \| `number` |
| `to?` | ``null`` \| `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L28)

___

### setRange

▸ **setRange**(`id`, `from?`, `to?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `from?` | ``null`` \| `number` |
| `to?` | ``null`` \| `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L42)

___

### setState

▸ **setState**(`id`, `state`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `state` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L40)

___

### setStates

▸ **setStates**(`id`, `states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `states` | `number`[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L41)

___

### setTime

▸ **setTime**(`id`, `time`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `time` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L38)

___

### setTimes

▸ **setTimes**(`id`, `times`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `times` | `number`[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L39)

___

### setValue

▸ **setValue**(`id`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L36)

___

### setValues

▸ **setValues**(`id`, `values`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `values` | `unknown`[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L37)

___

### toDirty

▸ **toDirty**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data.ts#L27)
