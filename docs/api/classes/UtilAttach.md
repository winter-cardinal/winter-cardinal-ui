[Winter Cardinal UI - v0.414.0](../index.md) / UtilAttach

# Class: UtilAttach

## Table of contents

### Constructors

- [constructor](UtilAttach.md#constructor)

### Methods

- [adjust](UtilAttach.md#adjust)
- [attach](UtilAttach.md#attach)

## Constructors

### constructor

• **new UtilAttach**(): [`UtilAttach`](UtilAttach.md)

#### Returns

[`UtilAttach`](UtilAttach.md)

## Methods

### adjust

▸ **adjust**(`position`, `size`, `offset`, `clippingSize`): `number`

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

[src/main/typescript/wcardinal/ui/util/util-attach.ts:158](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-attach.ts#L158)

___

### attach

▸ **attach**(`target`, `bounds`, `offsetX`, `offsetY`, `clippingWidth`, `clippingHeight`, `align`): `void`

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

[src/main/typescript/wcardinal/ui/util/util-attach.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/util/util-attach.ts#L43)
