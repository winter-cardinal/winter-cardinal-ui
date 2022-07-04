[Winter Cardinal UI - v0.194.0](../index.md) / UtilOverlay

# Class: UtilOverlay

## Table of contents

### Constructors

- [constructor](UtilOverlay.md#constructor)

### Properties

- [\_application](UtilOverlay.md#_application)
- [\_layer](UtilOverlay.md#_layer)

### Accessors

- [picked](UtilOverlay.md#picked)

### Methods

- [pick](UtilOverlay.md#pick)

## Constructors

### constructor

• **new UtilOverlay**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.parent?` | `unknown` |

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-overlay.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-overlay.ts#L9)

## Properties

### \_application

• `Protected` **\_application**: ``null`` \| [`DApplicationLike`](../interfaces/DApplicationLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-overlay.ts:7](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-overlay.ts#L7)

___

### \_layer

• `Protected` **\_layer**: ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-overlay.ts:6](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-overlay.ts#L6)

## Accessors

### picked

• `get` **picked**(): ``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Returns

``null`` \| [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-overlay.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-overlay.ts#L14)

## Methods

### pick

▸ **pick**(`target`): [`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DApplicationTarget`](../interfaces/DApplicationTarget.md) |

#### Returns

[`DApplicationLayerLike`](../interfaces/DApplicationLayerLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-overlay.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-overlay.ts#L18)
