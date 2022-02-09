[Winter Cardinal UI](../README.md) / DDiagramData

# Class: DDiagramData

A data helper class for diagrams.

## Table of contents

### Constructors

- [constructor](DDiagramData.md#constructor)

### Properties

- [\_diagram](DDiagramData.md#_diagram)
- [\_mapper](DDiagramData.md#_mapper)
- [\_remote](DDiagramData.md#_remote)

### Accessors

- [mapper](DDiagramData.md#mapper)
- [remote](DDiagramData.md#remote)

### Methods

- [clear](DDiagramData.md#clear)
- [each](DDiagramData.md#each)
- [getIds](DDiagramData.md#getids)
- [set](DDiagramData.md#set)
- [setAll](DDiagramData.md#setall)
- [setRange](DDiagramData.md#setrange)
- [setTime](DDiagramData.md#settime)
- [setTimes](DDiagramData.md#settimes)
- [setValue](DDiagramData.md#setvalue)
- [setValues](DDiagramData.md#setvalues)
- [update](DDiagramData.md#update)

## Constructors

### constructor

• **new DDiagramData**(`diagram`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `diagram` | [`DDiagramDataDiagram`](../interfaces/DDiagramDataDiagram.md) |
| `options?` | [`DDiagramDataOptions`](../interfaces/DDiagramDataOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L47)

## Properties

### \_diagram

• `Protected` **\_diagram**: [`DDiagramDataDiagram`](../interfaces/DDiagramDataDiagram.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L43)

___

### \_mapper

• `Protected` **\_mapper**: ``null`` \| [`DDiagramDataMapper`](../README.md#ddiagramdatamapper)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L44)

___

### \_remote

• `Protected` **\_remote**: [`DDiagramDataRemote`](DDiagramDataRemote.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L45)

## Accessors

### mapper

• `get` **mapper**(): ``null`` \| [`DDiagramDataMapper`](../README.md#ddiagramdatamapper)

#### Returns

``null`` \| [`DDiagramDataMapper`](../README.md#ddiagramdatamapper)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L57)

• `set` **mapper**(`mapper`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | ``null`` \| [`DDiagramDataMapper`](../README.md#ddiagramdatamapper) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L61)

___

### remote

• `get` **remote**(): [`DDiagramDataRemote`](DDiagramDataRemote.md)

#### Returns

[`DDiagramDataRemote`](DDiagramDataRemote.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L65)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L122)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L77)

___

### getIds

▸ **getIds**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L69)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L90)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L136)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L236)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L208)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L222)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L168)

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

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L188)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-data.ts#L53)
