[Winter Cardinal UI - v0.165.0](../index.md) / EShapeGroupSizeEditor

# Class: EShapeGroupSizeEditor

## Implements

- [`EShapeGroupSize`](../interfaces/EShapeGroupSize.md)

## Table of contents

### Constructors

- [constructor](EShapeGroupSizeEditor.md#constructor)

### Properties

- [\_isFittable](EShapeGroupSizeEditor.md#_isfittable)
- [\_layouts](EShapeGroupSizeEditor.md#_layouts)
- [\_parent](EShapeGroupSizeEditor.md#_parent)
- [\_size](EShapeGroupSizeEditor.md#_size)
- [\_workRectForCalcRect](EShapeGroupSizeEditor.md#_workrectforcalcrect)
- [\_workRectForFit](EShapeGroupSizeEditor.md#_workrectforfit)

### Accessors

- [x](EShapeGroupSizeEditor.md#x)
- [y](EShapeGroupSizeEditor.md#y)

### Methods

- [calcRect](EShapeGroupSizeEditor.md#calcrect)
- [clone](EShapeGroupSizeEditor.md#clone)
- [copy](EShapeGroupSizeEditor.md#copy)
- [copyFrom](EShapeGroupSizeEditor.md#copyfrom)
- [copyTo](EShapeGroupSizeEditor.md#copyto)
- [doFit](EShapeGroupSizeEditor.md#dofit)
- [equals](EShapeGroupSizeEditor.md#equals)
- [fit](EShapeGroupSizeEditor.md#fit)
- [init](EShapeGroupSizeEditor.md#init)
- [newLayout](EShapeGroupSizeEditor.md#newlayout)
- [onChange](EShapeGroupSizeEditor.md#onchange)
- [onChange\_](EShapeGroupSizeEditor.md#onchange_)
- [reset](EShapeGroupSizeEditor.md#reset)
- [set](EShapeGroupSizeEditor.md#set)

## Constructors

### constructor

• **new EShapeGroupSizeEditor**(`parent`, `x`, `y`, `isFittable`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeGroupSizeParent`](../interfaces/EShapeGroupSizeParent.md) |
| `x` | `number` |
| `y` | `number` |
| `isFittable` | `boolean` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L21)

## Properties

### \_isFittable

• `Protected` **\_isFittable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L19)

___

### \_layouts

• `Protected` **\_layouts**: [`EShapeLayout`](../interfaces/EShapeLayout.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L16)

___

### \_parent

• `Protected` **\_parent**: [`EShapeGroupSizeParent`](../interfaces/EShapeGroupSizeParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L14)

___

### \_size

• `Protected` **\_size**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L15)

___

### \_workRectForCalcRect

• `Protected` **\_workRectForCalcRect**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L17)

___

### \_workRectForFit

• `Protected` **\_workRectForFit**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L18)

## Accessors

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[x](../interfaces/EShapeGroupSize.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L32)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L36)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[y](../interfaces/EShapeGroupSize.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L45)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L49)

## Methods

### calcRect

▸ **calcRect**(`result`): `Rectangle`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `Rectangle` |

#### Returns

`Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:190](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L190)

___

### clone

▸ **clone**(): [`EShapeGroupSizeEditor`](EShapeGroupSizeEditor.md)

#### Returns

[`EShapeGroupSizeEditor`](EShapeGroupSizeEditor.md)

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[clone](../interfaces/EShapeGroupSize.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L77)

___

### copy

▸ **copy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:82](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L82)

___

### copyFrom

▸ **copyFrom**(`point`): [`EShapeGroupSizeEditor`](EShapeGroupSizeEditor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `IPoint` |

#### Returns

[`EShapeGroupSizeEditor`](EShapeGroupSizeEditor.md)

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[copyFrom](../interfaces/EShapeGroupSize.md#copyfrom)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L86)

___

### copyTo

▸ **copyTo**(`point`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `IPoint` |

#### Returns

`IPoint`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[copyTo](../interfaces/EShapeGroupSize.md#copyto)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L100)

___

### doFit

▸ `Protected` **doFit**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L114)

___

### equals

▸ **equals**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `IPoint` |

#### Returns

`boolean`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[equals](../interfaces/EShapeGroupSize.md#equals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L104)

___

### fit

▸ **fit**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[fit](../interfaces/EShapeGroupSize.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L108)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[init](../interfaces/EShapeGroupSize.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L28)

___

### newLayout

▸ `Protected` **newLayout**(`shape`, `ox`, `oy`): [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `ox` | `number` |
| `oy` | `number` |

#### Returns

[`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:249](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L249)

___

### onChange

▸ `Protected` **onChange**(`ox`, `oy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ox` | `number` |
| `oy` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:210](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L210)

___

### onChange\_

▸ `Protected` **onChange_**(`children`, `layouts`, `sx`, `sy`, `px`, `py`, `ox`, `oy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | [`EShape`](../interfaces/EShape.md)[] |
| `layouts` | [`EShapeLayout`](../interfaces/EShapeLayout.md)[] |
| `sx` | `number` |
| `sy` | `number` |
| `px` | `number` |
| `py` | `number` |
| `ox` | `number` |
| `oy` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L218)

___

### reset

▸ `Protected` **reset**(`children`, `layouts`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | [`EShape`](../interfaces/EShape.md)[] |
| `layouts` | [`EShapeLayout`](../interfaces/EShapeLayout.md)[] |
| `size` | `IPoint` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:174](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L174)

___

### set

▸ **set**(`x?`, `y?`): [`EShapeGroupSizeEditor`](EShapeGroupSizeEditor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Returns

[`EShapeGroupSizeEditor`](EShapeGroupSizeEditor.md)

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[set](../interfaces/EShapeGroupSize.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L58)
