[Winter Cardinal UI - v0.205.1](../index.md) / EShapeGroupSizeLayout

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

- [isCompatible](EShapeGroupSizeLayout.md#iscompatible)
- [reset](EShapeGroupSizeLayout.md#reset)
- [update](EShapeGroupSizeLayout.md#update)

## Constructors

### constructor

• **new EShapeGroupSizeLayout**(`shape`, `bx`, `by`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `bx` | `number` |
| `by` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L23)

## Properties

### base

• `Protected` **base**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L17)

___

### capable

• `Protected` **capable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L21)

___

### shape

• `Protected` **shape**: [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L16)

___

### shapeBase

• `Protected` **shapeBase**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L18)

___

### transform

• `Protected` **transform**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L19)

___

### WORK\_TRANSFORM

▪ `Static` `Protected` **WORK\_TRANSFORM**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L14)

## Methods

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L46)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L50)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L62)
