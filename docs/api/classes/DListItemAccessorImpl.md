[Winter Cardinal UI - v0.194.0](../index.md) / DListItemAccessorImpl

# Class: DListItemAccessorImpl<VALUE\>

## Type parameters

| Name |
| :------ |
| `VALUE` |

## Implements

- [`DListItemAccessor`](../interfaces/DListItemAccessor.md)<`VALUE`\>

## Table of contents

### Constructors

- [constructor](DListItemAccessorImpl.md#constructor)

### Properties

- [link](DListItemAccessorImpl.md#link)
- [toId](DListItemAccessorImpl.md#toid)
- [toImage](DListItemAccessorImpl.md#toimage)
- [toLabel](DListItemAccessorImpl.md#tolabel)
- [toTitle](DListItemAccessorImpl.md#totitle)

### Methods

- [toLink](DListItemAccessorImpl.md#tolink)

## Constructors

### constructor

• **new DListItemAccessorImpl**<`VALUE`\>(`options?`)

#### Type parameters

| Name |
| :------ |
| `VALUE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DListItemAccessorOptions`](../interfaces/DListItemAccessorOptions.md)<`VALUE`\> |

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-accessor-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-list-item-accessor-impl.ts#L38)

## Properties

### link

• `Optional` **link**: [`DListItemAccessorLink`](../interfaces/DListItemAccessorLink.md)<`VALUE`\>

#### Implementation of

[DListItemAccessor](../interfaces/DListItemAccessor.md).[link](../interfaces/DListItemAccessor.md#link)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-accessor-impl.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-list-item-accessor-impl.ts#L36)

___

### toId

• `Optional` **toId**: [`DListItemToId`](../index.md#dlistitemtoid)<`VALUE`\>

#### Implementation of

[DListItemAccessor](../interfaces/DListItemAccessor.md).[toId](../interfaces/DListItemAccessor.md#toid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-accessor-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-list-item-accessor-impl.ts#L35)

___

### toImage

• **toImage**: [`DListItemToImage`](../index.md#dlistitemtoimage)<`VALUE`\>

#### Implementation of

[DListItemAccessor](../interfaces/DListItemAccessor.md).[toImage](../interfaces/DListItemAccessor.md#toimage)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-accessor-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-list-item-accessor-impl.ts#L34)

___

### toLabel

• **toLabel**: [`DListItemToLabel`](../index.md#dlistitemtolabel)<`VALUE`\>

#### Implementation of

[DListItemAccessor](../interfaces/DListItemAccessor.md).[toLabel](../interfaces/DListItemAccessor.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-accessor-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-list-item-accessor-impl.ts#L32)

___

### toTitle

• **toTitle**: [`DListItemToTitle`](../index.md#dlistitemtotitle)<`VALUE`\>

#### Implementation of

[DListItemAccessor](../interfaces/DListItemAccessor.md).[toTitle](../interfaces/DListItemAccessor.md#totitle)

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-accessor-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-list-item-accessor-impl.ts#L33)

## Methods

### toLink

▸ `Protected` **toLink**(`options?`): `undefined` \| [`DListItemAccessorLink`](../interfaces/DListItemAccessorLink.md)<`VALUE`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DListItemAccessorOptions`](../interfaces/DListItemAccessorOptions.md)<`VALUE`\> |

#### Returns

`undefined` \| [`DListItemAccessorLink`](../interfaces/DListItemAccessorLink.md)<`VALUE`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-list-item-accessor-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-list-item-accessor-impl.ts#L46)
