[Winter Cardinal UI - v0.154.0](../index.md) / EShapeTransforms

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

▸ `Static` **apply**(`shape`, `transform`, `keepSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `transform` | `Matrix` |
| `keepSize` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts#L43)

___

### applyLocal

▸ `Static` **applyLocal**(`shape`, `localTransform`, `bx?`, `by?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `localTransform` | `Matrix` |
| `bx?` | `number` |
| `by?` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts#L60)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts#L39)

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

[src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/e-shape-transforms.ts#L13)
