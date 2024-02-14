[Winter Cardinal UI - v0.407.0](../index.md) / DDiagramDataImpl

# Class: DDiagramDataImpl

A data helper class for diagrams.

## Implements

- [`DDiagramData`](../interfaces/DDiagramData.md)

## Table of contents

### Constructors

- [constructor](DDiagramDataImpl.md#constructor)

### Properties

- [\_diagram](DDiagramDataImpl.md#_diagram)
- [\_extended](DDiagramDataImpl.md#_extended)
- [\_mapper](DDiagramDataImpl.md#_mapper)
- [\_private](DDiagramDataImpl.md#_private)
- [\_protected](DDiagramDataImpl.md#_protected)
- [\_remote](DDiagramDataImpl.md#_remote)

### Accessors

- [extended](DDiagramDataImpl.md#extended)
- [ids](DDiagramDataImpl.md#ids)
- [mapper](DDiagramDataImpl.md#mapper)
- [private](DDiagramDataImpl.md#private)
- [protected](DDiagramDataImpl.md#protected)
- [remote](DDiagramDataImpl.md#remote)

### Methods

- [clear](DDiagramDataImpl.md#clear)
- [each](DDiagramDataImpl.md#each)
- [get](DDiagramDataImpl.md#get)
- [set](DDiagramDataImpl.md#set)
- [setAll](DDiagramDataImpl.md#setall)
- [setRange](DDiagramDataImpl.md#setrange)
- [setState](DDiagramDataImpl.md#setstate)
- [setStates](DDiagramDataImpl.md#setstates)
- [setTime](DDiagramDataImpl.md#settime)
- [setTimes](DDiagramDataImpl.md#settimes)
- [setValue](DDiagramDataImpl.md#setvalue)
- [setValues](DDiagramDataImpl.md#setvalues)
- [toDirty](DDiagramDataImpl.md#todirty)
- [update](DDiagramDataImpl.md#update)

## Constructors

### constructor

• **new DDiagramDataImpl**(`diagram`, `options?`): [`DDiagramDataImpl`](DDiagramDataImpl.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `diagram` | [`DDiagramDataDiagram`](../interfaces/DDiagramDataDiagram.md) |
| `options?` | [`DDiagramDataOptions`](../interfaces/DDiagramDataOptions.md) |

#### Returns

[`DDiagramDataImpl`](DDiagramDataImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L28)

## Properties

### \_diagram

• `Protected` **\_diagram**: [`DDiagramDataDiagram`](../interfaces/DDiagramDataDiagram.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L21)

___

### \_extended

• `Protected` **\_extended**: [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L26)

___

### \_mapper

• `Protected` **\_mapper**: ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L22)

___

### \_private

• `Protected` **\_private**: [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L24)

___

### \_protected

• `Protected` **\_protected**: [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L25)

___

### \_remote

• `Protected` **\_remote**: [`DDiagramDataRemote`](../interfaces/DDiagramDataRemote.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L23)

## Accessors

### extended

• `get` **extended**(): [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Returns

[`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[extended](../interfaces/DDiagramData.md#extended)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L61)

___

### ids

• `get` **ids**(): `string`[]

#### Returns

`string`[]

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[ids](../interfaces/DDiagramData.md#ids)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L65)

___

### mapper

• `get` **mapper**(): ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper)

#### Returns

``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[mapper](../interfaces/DDiagramData.md#mapper)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L41)

• `set` **mapper**(`mapper`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper) |

#### Returns

`void`

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[mapper](../interfaces/DDiagramData.md#mapper)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L45)

___

### private

• `get` **private**(): [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Returns

[`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[private](../interfaces/DDiagramData.md#private)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L53)

___

### protected

• `get` **protected**(): [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Returns

[`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[protected](../interfaces/DDiagramData.md#protected)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L57)

___

### remote

• `get` **remote**(): [`DDiagramDataRemote`](../interfaces/DDiagramDataRemote.md)

#### Returns

[`DDiagramDataRemote`](../interfaces/DDiagramDataRemote.md)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[remote](../interfaces/DDiagramData.md#remote)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L49)

## Methods

### clear

▸ **clear**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[clear](../interfaces/DDiagramData.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L104)

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

[DDiagramData](../interfaces/DDiagramData.md).[each](../interfaces/DDiagramData.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L73)

___

### get

▸ **get**(`id`): ``null`` \| [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[get](../interfaces/DDiagramData.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L96)

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

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[set](../interfaces/DDiagramData.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L81)

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

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[setAll](../interfaces/DDiagramData.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L120)

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

[DDiagramData](../interfaces/DDiagramData.md).[setRange](../interfaces/DDiagramData.md#setrange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:183](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L183)

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

[DDiagramData](../interfaces/DDiagramData.md).[setState](../interfaces/DDiagramData.md#setstate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:167](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L167)

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

[DDiagramData](../interfaces/DDiagramData.md).[setStates](../interfaces/DDiagramData.md#setstates)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:175](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L175)

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

[DDiagramData](../interfaces/DDiagramData.md).[setTime](../interfaces/DDiagramData.md#settime)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:151](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L151)

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

[DDiagramData](../interfaces/DDiagramData.md).[setTimes](../interfaces/DDiagramData.md#settimes)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:159](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L159)

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

[DDiagramData](../interfaces/DDiagramData.md).[setValue](../interfaces/DDiagramData.md#setvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:135](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L135)

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

[DDiagramData](../interfaces/DDiagramData.md).[setValues](../interfaces/DDiagramData.md#setvalues)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:143](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L143)

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

[DDiagramData](../interfaces/DDiagramData.md).[toDirty](../interfaces/DDiagramData.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L112)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[update](../interfaces/DDiagramData.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L37)
