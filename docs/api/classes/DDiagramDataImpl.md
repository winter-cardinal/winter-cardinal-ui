[Winter Cardinal UI - v0.179.0](../index.md) / DDiagramDataImpl

# Class: DDiagramDataImpl

A data helper class for diagrams.

## Table of contents

### Constructors

- [constructor](DDiagramDataImpl.md#constructor)

### Properties

- [\_diagram](DDiagramDataImpl.md#_diagram)
- [\_mapper](DDiagramDataImpl.md#_mapper)
- [\_private](DDiagramDataImpl.md#_private)
- [\_protected](DDiagramDataImpl.md#_protected)
- [\_remote](DDiagramDataImpl.md#_remote)

### Accessors

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
- [setTime](DDiagramDataImpl.md#settime)
- [setTimes](DDiagramDataImpl.md#settimes)
- [setValue](DDiagramDataImpl.md#setvalue)
- [setValues](DDiagramDataImpl.md#setvalues)
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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L24)

## Properties

### \_diagram

• `Protected` **\_diagram**: [`DDiagramDataDiagram`](../interfaces/DDiagramDataDiagram.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L18)

___

### \_mapper

• `Protected` **\_mapper**: ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L19)

___

### \_private

• `Protected` **\_private**: [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L21)

___

### \_protected

• `Protected` **\_protected**: [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L22)

___

### \_remote

• `Protected` **\_remote**: [`DDiagramDataRemote`](../interfaces/DDiagramDataRemote.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L20)

## Accessors

### ids

• `get` **ids**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L56)

___

### mapper

• `get` **mapper**(): ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper)

#### Returns

``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L36)

• `set` **mapper**(`mapper`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L40)

___

### private

• `get` **private**(): [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Returns

[`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L48)

___

### protected

• `get` **protected**(): [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Returns

[`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L52)

___

### remote

• `get` **remote**(): [`DDiagramDataRemote`](../interfaces/DDiagramDataRemote.md)

#### Returns

[`DDiagramDataRemote`](../interfaces/DDiagramDataRemote.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L44)

## Methods

### clear

▸ **clear**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L86)

___

### each

▸ **each**(`callback`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`id`: `string`) => `boolean` \| `void` |

#### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L64)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L72)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L94)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L140)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L124)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L132)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L108)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L116)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L32)
