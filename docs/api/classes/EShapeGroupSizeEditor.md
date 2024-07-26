[Winter Cardinal UI - v0.442.0](../index.md) / EShapeGroupSizeEditor

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

• **new EShapeGroupSizeEditor**(`parent`, `x`, `y`, `isFittable`): [`EShapeGroupSizeEditor`](EShapeGroupSizeEditor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeGroupSizeParent`](../interfaces/EShapeGroupSizeParent.md) |
| `x` | `number` |
| `y` | `number` |
| `isFittable` | `boolean` |

#### Returns

[`EShapeGroupSizeEditor`](EShapeGroupSizeEditor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L22)

## Properties

### \_isFittable

• `Protected` **\_isFittable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L20)

___

### \_layouts

• `Protected` **\_layouts**: [`EShapeLayout`](../interfaces/EShapeLayout.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L17)

___

### \_parent

• `Protected` **\_parent**: [`EShapeGroupSizeParent`](../interfaces/EShapeGroupSizeParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L15)

___

### \_size

• `Protected` **\_size**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L16)

___

### \_workRectForCalcRect

• `Protected` **\_workRectForCalcRect**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L18)

___

### \_workRectForFit

• `Protected` **\_workRectForFit**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L19)

## Accessors

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[x](../interfaces/EShapeGroupSize.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L33)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L37)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[y](../interfaces/EShapeGroupSize.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L46)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L50)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L196)

___

### clone

▸ **clone**(): [`EShapeGroupSizeEditor`](EShapeGroupSizeEditor.md)

#### Returns

[`EShapeGroupSizeEditor`](EShapeGroupSizeEditor.md)

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[clone](../interfaces/EShapeGroupSize.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L78)

___

### copy

▸ **copy**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L83)

___

### copyFrom

▸ **copyFrom**(`point`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `IPoint` |

#### Returns

`this`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[copyFrom](../interfaces/EShapeGroupSize.md#copyfrom)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:87](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L87)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L101)

___

### doFit

▸ **doFit**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L116)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L105)

___

### fit

▸ **fit**(): `this`

#### Returns

`this`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[fit](../interfaces/EShapeGroupSize.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L109)

___

### init

▸ **init**(): `this`

#### Returns

`this`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[init](../interfaces/EShapeGroupSize.md#init)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L29)

___

### newLayout

▸ **newLayout**(`shape`, `ox`, `oy`): [`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`EShape`](../interfaces/EShape.md) |
| `ox` | `number` |
| `oy` | `number` |

#### Returns

[`EShapeLayout`](../interfaces/EShapeLayout.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L255)

___

### onChange

▸ **onChange**(`ox`, `oy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ox` | `number` |
| `oy` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L216)

___

### onChange\_

▸ **onChange_**(`children`, `layouts`, `sx`, `sy`, `px`, `py`, `ox`, `oy`): `void`

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L224)

___

### reset

▸ **reset**(`children`, `layouts`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `children` | [`EShape`](../interfaces/EShape.md)[] |
| `layouts` | [`EShapeLayout`](../interfaces/EShapeLayout.md)[] |
| `size` | `IPoint` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L180)

___

### set

▸ **set**(`x?`, `y?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Returns

`this`

#### Implementation of

[EShapeGroupSize](../interfaces/EShapeGroupSize.md).[set](../interfaces/EShapeGroupSize.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-size-editor.ts#L59)
