[Winter Cardinal UI - v0.200.0](../index.md) / DDiagramDataImpl

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L26)

## Properties

### \_diagram

• `Protected` **\_diagram**: [`DDiagramDataDiagram`](../interfaces/DDiagramDataDiagram.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L19)

___

### \_extended

• `Protected` **\_extended**: [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L24)

___

### \_mapper

• `Protected` **\_mapper**: ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L20)

___

### \_private

• `Protected` **\_private**: [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L22)

___

### \_protected

• `Protected` **\_protected**: [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L23)

___

### \_remote

• `Protected` **\_remote**: [`DDiagramDataRemote`](../interfaces/DDiagramDataRemote.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L21)

## Accessors

### extended

• `get` **extended**(): [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Returns

[`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[extended](../interfaces/DDiagramData.md#extended)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L59)

___

### ids

• `get` **ids**(): `string`[]

#### Returns

`string`[]

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[ids](../interfaces/DDiagramData.md#ids)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L63)

___

### mapper

• `get` **mapper**(): ``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper)

#### Returns

``null`` \| [`DDiagramDataMapper`](../index.md#ddiagramdatamapper)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[mapper](../interfaces/DDiagramData.md#mapper)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L39)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L43)

___

### private

• `get` **private**(): [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Returns

[`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[private](../interfaces/DDiagramData.md#private)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L51)

___

### protected

• `get` **protected**(): [`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Returns

[`DDiagramDataScoped`](../interfaces/DDiagramDataScoped.md)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[protected](../interfaces/DDiagramData.md#protected)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L55)

___

### remote

• `get` **remote**(): [`DDiagramDataRemote`](../interfaces/DDiagramDataRemote.md)

#### Returns

[`DDiagramDataRemote`](../interfaces/DDiagramDataRemote.md)

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[remote](../interfaces/DDiagramData.md#remote)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L47)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L93)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L71)

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

[DDiagramData](../interfaces/DDiagramData.md).[set](../interfaces/DDiagramData.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L79)

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

[DDiagramData](../interfaces/DDiagramData.md).[setAll](../interfaces/DDiagramData.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L109)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:155](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L155)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:139](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L139)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L147)

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

[DDiagramData](../interfaces/DDiagramData.md).[setValue](../interfaces/DDiagramData.md#setvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L123)

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

[DDiagramData](../interfaces/DDiagramData.md).[setValues](../interfaces/DDiagramData.md#setvalues)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L131)

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

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L101)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[DDiagramData](../interfaces/DDiagramData.md).[update](../interfaces/DDiagramData.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-data-impl.ts#L35)
