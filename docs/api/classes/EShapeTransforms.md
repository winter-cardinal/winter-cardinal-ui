[Winter Cardinal UI - v0.374.0](../index.md) / EShapeTransforms

# Class: EShapeTransforms

## Table of contents

### Constructors

- [constructor](EShapeTransforms.md#constructor)

### Methods

- [apply](EShapeTransforms.md#apply)
- [applyLocal](EShapeTransforms.md#applylocal)
- [finalize](EShapeTransforms.md#finalize)
- [prepare](EShapeTransforms.md#prepare)

## Constructors

### constructor

• **new EShapeTransforms**(): [`EShapeTransforms`](EShapeTransforms.md)

#### Returns

[`EShapeTransforms`](EShapeTransforms.md)

## Methods

### apply

▸ **apply**(`shape`, `transform`, `capability`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `transform` | `Matrix` |
| `capability` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts#L45)

___

### applyLocal

▸ **applyLocal**(`shape`, `localTransform`, `capability`, `size?`): `void`

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

[src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts#L57)

___

### finalize

▸ **finalize**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts#L41)

___

### prepare

▸ **prepare**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts#L15)
