[Winter Cardinal UI - v0.457.0](../index.md) / EShapeGroupSizeLayout

# Class: EShapeGroupSizeLayout

## Implements

- [`EShapeLayout`](../interfaces/EShapeLayout.md)

## Table of contents

### Constructors

- [constructor](EShapeGroupSizeLayout.md#constructor)

### Properties

- [base](EShapeGroupSizeLayout.md#base)
- [capable](EShapeGroupSizeLayout.md#capable)
- [shape](EShapeGroupSizeLayout.md#shape)
- [shapeBase](EShapeGroupSizeLayout.md#shapebase)
- [transform](EShapeGroupSizeLayout.md#transform)
- [WORK\_TRANSFORM](EShapeGroupSizeLayout.md#work_transform)

### Methods

- [apply](EShapeGroupSizeLayout.md#apply)
- [isCompatible](EShapeGroupSizeLayout.md#iscompatible)
- [reset](EShapeGroupSizeLayout.md#reset)
- [update](EShapeGroupSizeLayout.md#update)

## Constructors

### constructor

• **new EShapeGroupSizeLayout**(`shape`, `bx`, `by`): [`EShapeGroupSizeLayout`](EShapeGroupSizeLayout.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `bx` | `number` |
| `by` | `number` |

#### Returns

[`EShapeGroupSizeLayout`](EShapeGroupSizeLayout.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L24)

## Properties

### base

• `Protected` **base**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L18)

___

### capable

• `Protected` **capable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L22)

___

### shape

• `Protected` **shape**: [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L17)

___

### shapeBase

• `Protected` **shapeBase**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L19)

___

### transform

• `Protected` **transform**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L20)

___

### WORK\_TRANSFORM

▪ `Static` `Protected` **WORK\_TRANSFORM**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L15)

## Methods

### apply

▸ **apply**(`shape`, `localTransform`, `capability`, `size?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `localTransform` | `Matrix` |
| `capability` | `number` |
| `size?` | `IPoint` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L88)

___

### isCompatible

▸ **isCompatible**(`shape`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`boolean`

#### Implementation of

[EShapeLayout](../interfaces/EShapeLayout.md).[isCompatible](../interfaces/EShapeLayout.md#iscompatible)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L47)

___

### reset

▸ **reset**(`shape`, `baseX`, `baseY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `baseX` | `number` |
| `baseY` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeLayout](../interfaces/EShapeLayout.md).[reset](../interfaces/EShapeLayout.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L51)

___

### update

▸ **update**(`shape`, `baseX`, `baseY`, `pivotX`, `pivotY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `baseX` | `number` |
| `baseY` | `number` |
| `pivotX` | `number` |
| `pivotY` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeLayout](../interfaces/EShapeLayout.md).[update](../interfaces/EShapeLayout.md#update)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L63)
