[Winter Cardinal UI - v0.310.1](../index.md) / EShapeTransforms

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

• **new EShapeTransforms**()

## Methods

### apply

▸ `Static` **apply**(`shape`, `transform`, `capability`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `transform` | `Matrix` |
| `capability` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts#L44)

___

### applyLocal

▸ `Static` **applyLocal**(`shape`, `localTransform`, `capability`, `size?`): `void`

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

[src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts#L56)

___

### finalize

▸ `Static` **finalize**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts#L40)

___

### prepare

▸ `Static` **prepare**(`shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts#L14)
