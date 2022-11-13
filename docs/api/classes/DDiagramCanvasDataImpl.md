[Winter Cardinal UI - v0.227.0](../index.md) / DDiagramCanvasDataImpl

# Class: DDiagramCanvasDataImpl

## Implements

- [`DDiagramCanvasData`](../interfaces/DDiagramCanvasData.md)

## Table of contents

### Constructors

- [constructor](DDiagramCanvasDataImpl.md#constructor)

### Properties

- [\_data](DDiagramCanvasDataImpl.md#_data)
- [\_extended](DDiagramCanvasDataImpl.md#_extended)
- [\_private](DDiagramCanvasDataImpl.md#_private)
- [\_protected](DDiagramCanvasDataImpl.md#_protected)

### Accessors

- [extended](DDiagramCanvasDataImpl.md#extended)
- [ids](DDiagramCanvasDataImpl.md#ids)
- [private](DDiagramCanvasDataImpl.md#private)
- [protected](DDiagramCanvasDataImpl.md#protected)

### Methods

- [add](DDiagramCanvasDataImpl.md#add)
- [clear](DDiagramCanvasDataImpl.md#clear)
- [each](DDiagramCanvasDataImpl.md#each)
- [newExtended](DDiagramCanvasDataImpl.md#newextended)
- [newPrivate](DDiagramCanvasDataImpl.md#newprivate)
- [newProtected](DDiagramCanvasDataImpl.md#newprotected)
- [set](DDiagramCanvasDataImpl.md#set)
- [setAll](DDiagramCanvasDataImpl.md#setall)
- [setRange](DDiagramCanvasDataImpl.md#setrange)
- [setState](DDiagramCanvasDataImpl.md#setstate)
- [setStates](DDiagramCanvasDataImpl.md#setstates)
- [setTime](DDiagramCanvasDataImpl.md#settime)
- [setTimes](DDiagramCanvasDataImpl.md#settimes)
- [setValue](DDiagramCanvasDataImpl.md#setvalue)
- [setValues](DDiagramCanvasDataImpl.md#setvalues)
- [toDirty](DDiagramCanvasDataImpl.md#todirty)

## Constructors

### constructor

• **new DDiagramCanvasDataImpl**()

## Properties

### \_data

• `Protected` `Optional` **\_data**: `Map`<`string`, [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L14)

___

### \_extended

• `Protected` `Optional` **\_extended**: [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L17)

___

### \_private

• `Protected` `Optional` **\_private**: [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L15)

___

### \_protected

• `Protected` `Optional` **\_protected**: [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L16)

## Accessors

### extended

• `get` **extended**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[extended](../interfaces/DDiagramCanvasData.md#extended)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L45)

___

### ids

• `get` **ids**(): `string`[]

#### Returns

`string`[]

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[ids](../interfaces/DDiagramCanvasData.md#ids)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L58)

___

### private

• `get` **private**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[private](../interfaces/DDiagramCanvasData.md#private)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L19)

___

### protected

• `get` **protected**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[protected](../interfaces/DDiagramCanvasData.md#protected)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L32)

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

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L86)

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

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L139)

___

### each

▸ **each**(`iteratee`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`id`: `string`) => `boolean` \| `void` |

#### Returns

``null`` \| `string`

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[each](../interfaces/DDiagramCanvasData.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L70)

___

### newExtended

▸ `Protected` **newExtended**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L54)

___

### newPrivate

▸ `Protected` **newPrivate**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L28)

___

### newProtected

▸ `Protected` **newProtected**(): [`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Returns

[`EShapeDataScoped`](../interfaces/EShapeDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L41)

___

### set

▸ **set**(`id`, `value`, `time?`, `state?`, `from?`, `to?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `unknown` |
| `time?` | `number` |
| `state?` | `number` |
| `from?` | ``null`` \| `number` |
| `to?` | ``null`` \| `number` |

#### Returns

`boolean`

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[set](../interfaces/DDiagramCanvasData.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L96)

___

### setAll

▸ **setAll**(`id`, `values`, `times?`, `states?`, `from?`, `to?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `values` | `unknown`[] |
| `times?` | `number`[] |
| `states?` | `number`[] |
| `from?` | ``null`` \| `number` |
| `to?` | ``null`` \| `number` |

#### Returns

`boolean`

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[setAll](../interfaces/DDiagramCanvasData.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L177)

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

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:334](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L334)

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

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[setState](../interfaces/DDiagramCanvasData.md#setstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L296)

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

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[setStates](../interfaces/DDiagramCanvasData.md#setstates)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:315](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L315)

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

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:258](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L258)

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

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:277](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L277)

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

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[setValue](../interfaces/DDiagramCanvasData.md#setvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L220)

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

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[setValues](../interfaces/DDiagramCanvasData.md#setvalues)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:239](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L239)

___

### toDirty

▸ **toDirty**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Implementation of

[DDiagramCanvasData](../interfaces/DDiagramCanvasData.md).[toDirty](../interfaces/DDiagramCanvasData.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-data-impl.ts#L158)
