[Winter Cardinal UI - v0.199.0](../index.md) / DBaseSnippetContainer

# Class: DBaseSnippetContainer

## Table of contents

### Constructors

- [constructor](DBaseSnippetContainer.md#constructor)

### Properties

- [\_afters](DBaseSnippetContainer.md#_afters)
- [\_befores](DBaseSnippetContainer.md#_befores)
- [\_parent](DBaseSnippetContainer.md#_parent)
- [\_renderable](DBaseSnippetContainer.md#_renderable)

### Accessors

- [renderable](DBaseSnippetContainer.md#renderable)

### Methods

- [add](DBaseSnippetContainer.md#add)
- [addAt](DBaseSnippetContainer.md#addat)
- [remove](DBaseSnippetContainer.md#remove)
- [render](DBaseSnippetContainer.md#render)

## Constructors

### constructor

• **new DBaseSnippetContainer**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Container` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-snippet-container.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base-snippet-container.ts#L15)

## Properties

### \_afters

• `Protected` **\_afters**: [`DBaseSnippet`](../interfaces/DBaseSnippet.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-snippet-container.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base-snippet-container.ts#L12)

___

### \_befores

• `Protected` **\_befores**: [`DBaseSnippet`](../interfaces/DBaseSnippet.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-snippet-container.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base-snippet-container.ts#L11)

___

### \_parent

• `Protected` **\_parent**: `Container`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-snippet-container.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base-snippet-container.ts#L10)

___

### \_renderable

• `Protected` **\_renderable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-snippet-container.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base-snippet-container.ts#L13)

## Accessors

### renderable

• `get` **renderable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-snippet-container.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base-snippet-container.ts#L22)

• `set` **renderable**(`renderable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-snippet-container.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base-snippet-container.ts#L26)

## Methods

### add

▸ **add**(`snippet`, `phase`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `snippet` | [`DBaseSnippet`](../interfaces/DBaseSnippet.md) |
| `phase` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-snippet-container.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base-snippet-container.ts#L30)

___

### addAt

▸ **addAt**(`snippet`, `phase`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `snippet` | [`DBaseSnippet`](../interfaces/DBaseSnippet.md) |
| `phase` | `boolean` |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-snippet-container.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base-snippet-container.ts#L38)

___

### remove

▸ **remove**(`snippet`, `phase`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `snippet` | [`DBaseSnippet`](../interfaces/DBaseSnippet.md) |
| `phase` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-snippet-container.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base-snippet-container.ts#L52)

___

### render

▸ **render**(`renderer`, `phase`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `Renderer` |
| `phase` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-snippet-container.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-base-snippet-container.ts#L63)
