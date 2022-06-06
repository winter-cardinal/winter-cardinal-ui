[Winter Cardinal UI - v0.179.0](../index.md) / EShapeGroupTextOffsetEditor

# Class: EShapeGroupTextOffsetEditor

## Table of contents

### Constructors

- [constructor](EShapeGroupTextOffsetEditor.md#constructor)

### Properties

- [\_parent](EShapeGroupTextOffsetEditor.md#_parent)

### Accessors

- [horizontal](EShapeGroupTextOffsetEditor.md#horizontal)
- [vertical](EShapeGroupTextOffsetEditor.md#vertical)

### Methods

- [copy](EShapeGroupTextOffsetEditor.md#copy)
- [deserialize](EShapeGroupTextOffsetEditor.md#deserialize)
- [serialize](EShapeGroupTextOffsetEditor.md#serialize)
- [set](EShapeGroupTextOffsetEditor.md#set)
- [toObject](EShapeGroupTextOffsetEditor.md#toobject)

## Constructors

### constructor

• **new EShapeGroupTextOffsetEditor**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeGroupPropertyParent`](../interfaces/EShapeGroupPropertyParent.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts#L14)

## Properties

### \_parent

• `Protected` **\_parent**: [`EShapeGroupPropertyParent`](../interfaces/EShapeGroupPropertyParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts#L12)

## Accessors

### horizontal

• `get` **horizontal**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts#L18)

• `set` **horizontal**(`horizontal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts#L26)

___

### vertical

• `get` **vertical**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts#L33)

• `set` **vertical**(`vertical`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertical` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts#L41)

## Methods

### copy

▸ **copy**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts#L48)

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts#L77)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts#L73)

___

### set

▸ **set**(`horizontal`, `vertical`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `horizontal` | `number` |
| `vertical` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts#L55)

___

### toObject

▸ **toObject**(): [`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)

#### Returns

[`EShapeTextOffsetLike`](../interfaces/EShapeTextOffsetLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-offset-editor.ts#L62)
