[Winter Cardinal UI - v0.374.0](../index.md) / EShapeGroupSizeViewer

# Class: EShapeGroupSizeViewer

## Implements

- [`EShapeGroupSize`](../interfaces/EShapeGroupSize.md)

## Table of contents

### Constructors

- [constructor](EShapeGroupSizeViewer.md#constructor)

### Properties

- [\_base](EShapeGroupSizeViewer.md#_base)
- [\_parent](EShapeGroupSizeViewer.md#_parent)
- [\_x](EShapeGroupSizeViewer.md#_x)
- [\_y](EShapeGroupSizeViewer.md#_y)

### Accessors

- [base](EShapeGroupSizeViewer.md#base)
- [x](EShapeGroupSizeViewer.md#x)
- [y](EShapeGroupSizeViewer.md#y)

### Methods

- [clone](EShapeGroupSizeViewer.md#clone)
- [copyFrom](EShapeGroupSizeViewer.md#copyfrom)
- [copyTo](EShapeGroupSizeViewer.md#copyto)
- [equals](EShapeGroupSizeViewer.md#equals)
- [fit](EShapeGroupSizeViewer.md#fit)
- [init](EShapeGroupSizeViewer.md#init)
- [onChange](EShapeGroupSizeViewer.md#onchange)
- [set](EShapeGroupSizeViewer.md#set)

## Constructors

### constructor

• **new EShapeGroupSizeViewer**(`parent`, `x`, `y`, `bx`, `by`): [`EShapeGroupSizeViewer`](EShapeGroupSizeViewer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeGroupSizeViewerParent`](../interfaces/EShapeGroupSizeViewerParent.md) |
| `x` | `number` |
| `y` | `number` |
| `bx` | `number` |
| `by` | `number` |

#### Returns

[`EShapeGroupSizeViewer`](EShapeGroupSizeViewer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L23)

## Properties

### \_base

• `Protected` **\_base**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L21)

___

### \_parent

• `Protected` **\_parent**: [`EShapeGroupSizeViewerParent`](../interfaces/EShapeGroupSizeViewerParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L20)

___

### \_x

• `Protected` **\_x**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L18)

___

### \_y

• `Protected` **\_y**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L19)

## Accessors

### base

• `get` **base**(): `IPoint`

#### Returns

`IPoint`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L52)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[x](../interfaces/EShapeGroupSize.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L30)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[x](../interfaces/EShapeGroupSize.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L34)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[y](../interfaces/EShapeGroupSize.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L41)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[y](../interfaces/EShapeGroupSize.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L45)

## Methods

### clone

▸ **clone**(): [`EShapeGroupSizeViewer`](EShapeGroupSizeViewer.md)

#### Returns

[`EShapeGroupSizeViewer`](EShapeGroupSizeViewer.md)

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[clone](../interfaces/EShapeGroupSize.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L62)

___

### copyFrom

▸ **copyFrom**(`p`): [`EShapeGroupSizeViewer`](EShapeGroupSizeViewer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `IPoint` |

#### Returns

[`EShapeGroupSizeViewer`](EShapeGroupSizeViewer.md)

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[copyFrom](../interfaces/EShapeGroupSize.md#copyfrom)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L83)

___

### copyTo

▸ **copyTo**(`p`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `IPoint` |

#### Returns

`IPoint`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[copyTo](../interfaces/EShapeGroupSize.md#copyto)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L95)

___

### equals

▸ **equals**(`p`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `IPoint` |

#### Returns

`boolean`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[equals](../interfaces/EShapeGroupSize.md#equals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L103)

___

### fit

▸ **fit**(): [`EShapeGroupSizeViewer`](EShapeGroupSizeViewer.md)

#### Returns

[`EShapeGroupSizeViewer`](EShapeGroupSizeViewer.md)

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[fit](../interfaces/EShapeGroupSize.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L107)

___

### init

▸ **init**(): [`EShapeGroupSizeViewer`](EShapeGroupSizeViewer.md)

#### Returns

[`EShapeGroupSizeViewer`](EShapeGroupSizeViewer.md)

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[init](../interfaces/EShapeGroupSize.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L56)

___

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L111)

___

### set

▸ **set**(`x?`, `y?`): [`EShapeGroupSizeViewer`](EShapeGroupSizeViewer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Returns

[`EShapeGroupSizeViewer`](EShapeGroupSizeViewer.md)

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[set](../interfaces/EShapeGroupSize.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-viewer.ts#L67)
