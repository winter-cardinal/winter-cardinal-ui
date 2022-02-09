[Winter Cardinal UI - v0.154.0](../index.md) / EShapeGroupSizeLayout

# Class: EShapeGroupSizeLayout

## Implements

- [`EShapeLayout`](../interfaces/EShapeLayout.md)

## Table of contents

### Constructors

- [constructor](EShapeGroupSizeLayout.md#constructor)

### Properties

- [base](EShapeGroupSizeLayout.md#base)
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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L19)

## Properties

### base

• `Protected` **base**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L15)

___

### shape

• `Protected` **shape**: [`EShape`](../interfaces/EShape.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L14)

___

### shapeBase

• `Protected` **shapeBase**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L16)

___

### transform

• `Protected` **transform**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L17)

___

### WORK\_TRANSFORM

▪ `Static` `Protected` **WORK\_TRANSFORM**: `Matrix`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L12)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L35)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L39)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-layout.ts#L51)
