[Winter Cardinal UI - v0.227.0](../index.md) / DDiagramData

# Interface: DDiagramData

A data helper class for diagrams.

## Implemented by

- [`DDiagramDataImpl`](../classes/DDiagramDataImpl.md)

## Table of contents

### Properties

- [extended](DDiagramData.md#extended)
- [ids](DDiagramData.md#ids)
- [mapper](DDiagramData.md#mapper)
- [private](DDiagramData.md#private)
- [protected](DDiagramData.md#protected)
- [remote](DDiagramData.md#remote)

### Methods

- [clear](DDiagramData.md#clear)
- [each](DDiagramData.md#each)
- [set](DDiagramData.md#set)
- [setAll](DDiagramData.md#setall)
- [setRange](DDiagramData.md#setrange)
- [setState](DDiagramData.md#setstate)
- [setStates](DDiagramData.md#setstates)
- [setTime](DDiagramData.md#settime)
- [setTimes](DDiagramData.md#settimes)
- [setValue](DDiagramData.md#setvalue)
- [setValues](DDiagramData.md#setvalues)
- [toDirty](DDiagramData.md#todirty)
- [update](DDiagramData.md#update)

## Properties

### extended

• `Readonly` **extended**: [`DDiagramDataScoped`](DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L40)

___

### ids

• `Readonly` **ids**: `string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L41)

___

### mapper

• **mapper**: ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L42)

___

### private

• `Readonly` **private**: [`DDiagramDataScoped`](DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L38)

___

### protected

• `Readonly` **protected**: [`DDiagramDataScoped`](DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L39)

___

### remote

• `Readonly` **remote**: [`DDiagramDataRemote`](DDiagramDataRemote.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L37)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L52)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L43)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L44)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L54)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L68)

___

### setState

▸ **setState**(`id`, `state`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `state` | `unknown` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L66)

___

### setStates

▸ **setStates**(`id`, `states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `states` | `unknown`[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L67)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L64)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L65)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L62)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L63)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L53)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.227.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L69)
