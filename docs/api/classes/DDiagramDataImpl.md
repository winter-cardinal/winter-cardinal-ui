[Winter Cardinal UI - v0.227.0](../index.md) / DDiagramDataImpl

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

• **new DDiagramDataImpl**(`diagram`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `diagram` | [`DDiagramDataDiagram`](../interfaces/DDiagramDataDiagram.md) |
| `options?` | [`DDiagramDataOptions`](../interfaces/DDiagramDataOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L27)

## Properties

### \_diagram

• `Protected` **\_diagram**: [`DDiagramDataDiagram`](../interfaces/DDiagramDataDiagram.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L20)

___

### \_extended

• `Protected` **\_extended**: [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L25)

___

### \_mapper

• `Protected` **\_mapper**: ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L21)

___

### \_private

• `Protected` **\_private**: [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L23)

___

### \_protected

• `Protected` **\_protected**: [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L24)

___

### \_remote

• `Protected` **\_remote**: [`DDiagramDataRemote`](../interfaces/DDiagramDataRemote.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L22)

## Accessors

### extended

• `get` **extended**(): [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Returns

[`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[extended](../interfaces/DDiagramData.md#extended)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L60)

___

### ids

• `get` **ids**(): `string`[]

#### Returns

`string`[]

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[ids](../interfaces/DDiagramData.md#ids)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L64)

___

### mapper

• `get` **mapper**(): ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper)

#### Returns

``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[mapper](../interfaces/DDiagramData.md#mapper)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L40)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L44)

___

### private

• `get` **private**(): [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Returns

[`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[private](../interfaces/DDiagramData.md#private)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L52)

___

### protected

• `get` **protected**(): [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Returns

[`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[protected](../interfaces/DDiagramData.md#protected)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L56)

___

### remote

• `get` **remote**(): [`DDiagramDataRemote`](../interfaces/DDiagramDataRemote.md)

#### Returns

[`DDiagramDataRemote`](../interfaces/DDiagramDataRemote.md)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[remote](../interfaces/DDiagramData.md#remote)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L48)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L95)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L72)

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

[DDiagramData](../interfaces/DDiagramData.md).[set](../interfaces/DDiagramData.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L80)

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

[DDiagramData](../interfaces/DDiagramData.md).[setAll](../interfaces/DDiagramData.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L111)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L174)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L158)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L166)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:142](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L142)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:150](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L150)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L126)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L134)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L103)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[update](../interfaces/DDiagramData.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L36)
