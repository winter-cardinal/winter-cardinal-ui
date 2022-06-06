[Winter Cardinal UI - v0.179.0](../index.md) / UtilAttach

# Class: UtilAttach

## Table of contents

### Constructors

- [constructor](UtilAttach.md#constructor)

### Methods

- [adjust](UtilAttach.md#adjust)
- [attach](UtilAttach.md#attach)

## Constructors

### constructor

• **new UtilAttach**()

## Methods

### adjust

▸ `Static` **adjust**(`position`, `size`, `offset`, `clippingSize`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |
| `size` | `number` |
| `offset` | `number` |
| `clippingSize` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-attach.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/util/util-attach.ts#L152)

___

### attach

▸ `Static` **attach**(`target`, `bounds`, `offsetX`, `offsetY`, `clippingWidth`, `clippingHeight`, `align`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`UtilAttachTarget`](../interfaces/UtilAttachTarget.md) |
| `bounds` | `Rectangle` |
| `offsetX` | `number` |
| `offsetY` | `number` |
| `clippingWidth` | `number` |
| `clippingHeight` | `number` |
| `align` | [`UtilAttachAlign`](../index.md#utilattachalign) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-attach.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/util/util-attach.ts#L41)
