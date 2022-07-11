[Winter Cardinal UI - v0.199.0](../index.md) / EShapeGroupTextAlignEditor

# Class: EShapeGroupTextAlignEditor

## Implements

- [`EShapeTextAlign`](../interfaces/EShapeTextAlign.md)

## Table of contents

### Constructors

- [constructor](EShapeGroupTextAlignEditor.md#constructor)

### Properties

- [\_parent](EShapeGroupTextAlignEditor.md#_parent)

### Accessors

- [horizontal](EShapeGroupTextAlignEditor.md#horizontal)
- [vertical](EShapeGroupTextAlignEditor.md#vertical)

### Methods

- [copy](EShapeGroupTextAlignEditor.md#copy)
- [deserialize](EShapeGroupTextAlignEditor.md#deserialize)
- [serialize](EShapeGroupTextAlignEditor.md#serialize)
- [set](EShapeGroupTextAlignEditor.md#set)
- [toObject](EShapeGroupTextAlignEditor.md#toobject)

## Constructors

### constructor

• **new EShapeGroupTextAlignEditor**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeGroupPropertyParent`](../interfaces/EShapeGroupPropertyParent.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts#L16)

## Properties

### \_parent

• `Protected` **\_parent**: [`EShapeGroupPropertyParent`](../interfaces/EShapeGroupPropertyParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts#L14)

## Accessors

### horizontal

• `get` **horizontal**(): [`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal)

#### Returns

[`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal)

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[horizontal](../interfaces/EShapeTextAlign.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts#L20)

• `set` **horizontal**(`horizontal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal` | [`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal) |

#### Returns

`void`

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[horizontal](../interfaces/EShapeTextAlign.md#horizontal)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts#L28)

___

### vertical

• `get` **vertical**(): [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical)

#### Returns

[`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical)

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[vertical](../interfaces/EShapeTextAlign.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts#L35)

• `set` **vertical**(`vertical`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertical` | [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical) |

#### Returns

`void`

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[vertical](../interfaces/EShapeTextAlign.md#vertical)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts#L43)

## Methods

### copy

▸ **copy**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `Partial`<[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)\> |

#### Returns

`void`

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[copy](../interfaces/EShapeTextAlign.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts#L50)

___

### deserialize

▸ **deserialize**(`target`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[deserialize](../interfaces/EShapeTextAlign.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts:79](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts#L79)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[serialize](../interfaces/EShapeTextAlign.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts#L75)

___

### set

▸ **set**(`horizontal?`, `vertical?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal?` | [`EShapeTextAlignHorizontal`](../index.md#eshapetextalignhorizontal) |
| `vertical?` | [`EShapeTextAlignVertical`](../index.md#eshapetextalignvertical) |

#### Returns

`void`

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[set](../interfaces/EShapeTextAlign.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts#L57)

___

### toObject

▸ **toObject**(): [`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)

#### Returns

[`EShapeTextAlignLike`](../interfaces/EShapeTextAlignLike.md)

#### Implementation of

[EShapeTextAlign](../interfaces/EShapeTextAlign.md).[toObject](../interfaces/EShapeTextAlign.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-align-editor.ts#L64)
