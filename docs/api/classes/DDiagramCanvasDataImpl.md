[Winter Cardinal UI - v0.194.0](../index.md) / DDiagramCanvasDataImpl

# Class: DDiagramCanvasDataImpl

## Implements

- [`DDiagramCanvasData`](../interfaces/DDiagramCanvasData.md)

## Table of contents

### Constructors

- [constructor](DDiagramCanvasDataImpl.md#constructor)

### Properties

- [\_data](DDiagramCanvasDataImpl.md#_data)
- [\_private](DDiagramCanvasDataImpl.md#_private)
- [\_protected](DDiagramCanvasDataImpl.md#_protected)

### Accessors

- [ids](DDiagramCanvasDataImpl.md#ids)
- [private](DDiagramCanvasDataImpl.md#private)
- [protected](DDiagramCanvasDataImpl.md#protected)

### Methods

- [add](DDiagramCanvasDataImpl.md#add)
- [clear](DDiagramCanvasDataImpl.md#clear)
- [each](DDiagramCanvasDataImpl.md#each)
- [newPrivate](DDiagramCanvasDataImpl.md#newprivate)
- [newProtected](DDiagramCanvasDataImpl.md#newprotected)
- [set](DDiagramCanvasDataImpl.md#set)
- [setAll](DDiagramCanvasDataImpl.md#setall)
- [setRange](DDiagramCanvasDataImpl.md#setrange)
- [setTime](DDiagramCanvasDataImpl.md#settime)
- [setTimes](DDiagramCanvasDataImpl.md#settimes)
- [setValue](DDiagramCanvasDataImpl.md#setvalue)
- [setValues](DDiagramCanvasDataImpl.md#setvalues)

## Constructors

### constructor

• **new DDiagramCanvasDataImpl**()

## Properties

### \_data

• `Protected` `Optional` **\_data**: `Map`<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L13)

___

### \_private

• `Protected` `Optional` **\_private**: [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L14)

___

### \_protected

• `Protected` `Optional` **\_protected**: [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L15)

## Accessors

### ids

• `get` **ids**(): `string`[]

#### Returns

`string`[]

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[ids](../interfaces/DDiagramCanvasData.md#ids)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L43)

___

### private

• `get` **private**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[private](../interfaces/DDiagramCanvasData.md#private)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L17)

___

### protected

• `get` **protected**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[protected](../interfaces/DDiagramCanvasData.md#protected)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L30)

## Methods

### add

▸ **add**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |

#### Returns

`void`

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[add](../interfaces/DDiagramCanvasData.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L71)

___

### clear

▸ **clear**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[clear](../interfaces/DDiagramCanvasData.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L118)

___

### each

▸ **each**(`callback`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`id`: `string`) => `boolean` \| `void` |

#### Returns

``null`` \| `string`

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[each](../interfaces/DDiagramCanvasData.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L55)

___

### newPrivate

▸ `Protected` **newPrivate**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L26)

___

### newProtected

▸ `Protected` **newProtected**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L39)

___

### set

▸ **set**(`id`, `value`, `time?`, `from?`, `to?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `unknown` |
| `time?` | `number` |
| `from?` | ``null`` \| `number` |
| `to?` | ``null`` \| `number` |

#### Returns

`boolean`

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[set](../interfaces/DDiagramCanvasData.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L81)

___

### setAll

▸ **setAll**(`id`, `values`, `times?`, `from?`, `to?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `values` | `unknown`[] |
| `times?` | `number`[] |
| `from?` | ``null`` \| `number` |
| `to?` | ``null`` \| `number` |

#### Returns

`boolean`

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[setAll](../interfaces/DDiagramCanvasData.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L137)

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

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[setRange](../interfaces/DDiagramCanvasData.md#setrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:264](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L264)

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

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[setTime](../interfaces/DDiagramCanvasData.md#settime)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:226](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L226)

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

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[setTimes](../interfaces/DDiagramCanvasData.md#settimes)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:245](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L245)

___

### setValue

▸ **setValue**(`id`, `value`, `time?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `unknown` |
| `time?` | `number` |

#### Returns

`boolean`

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[setValue](../interfaces/DDiagramCanvasData.md#setvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L174)

___

### setValues

▸ **setValues**(`id`, `values`, `times?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `values` | `unknown`[] |
| `times?` | `number`[] |

#### Returns

`boolean`

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[setValues](../interfaces/DDiagramCanvasData.md#setvalues)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L200)
