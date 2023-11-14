[Winter Cardinal UI - v0.374.0](../index.md) / EShapeGroupFillEditor

# Class: EShapeGroupFillEditor

## Implements

- [`EShapeFill`](../interfaces/EShapeFill.md)

## Table of contents

### Constructors

- [constructor](EShapeGroupFillEditor.md#constructor)

### Properties

- [\_parent](EShapeGroupFillEditor.md#_parent)

### Accessors

- [alpha](EShapeGroupFillEditor.md#alpha)
- [color](EShapeGroupFillEditor.md#color)
- [enable](EShapeGroupFillEditor.md#enable)

### Methods

- [clone](EShapeGroupFillEditor.md#clone)
- [copy](EShapeGroupFillEditor.md#copy)
- [deserialize](EShapeGroupFillEditor.md#deserialize)
- [serialize](EShapeGroupFillEditor.md#serialize)
- [set](EShapeGroupFillEditor.md#set)
- [toObject](EShapeGroupFillEditor.md#toobject)

## Constructors

### constructor

• **new EShapeGroupFillEditor**(`parent`): [`EShapeGroupFillEditor`](EShapeGroupFillEditor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeGroupPropertyParent`](../interfaces/EShapeGroupPropertyParent.md) |

#### Returns

[`EShapeGroupFillEditor`](EShapeGroupFillEditor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts#L14)

## Properties

### \_parent

• `Protected` **\_parent**: [`EShapeGroupPropertyParent`](../interfaces/EShapeGroupPropertyParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts#L12)

## Accessors

### alpha

• `get` **alpha**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[alpha](../interfaces/EShapeFill.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts#L48)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[alpha](../interfaces/EShapeFill.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts#L56)

___

### color

• `get` **color**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[color](../interfaces/EShapeFill.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts#L33)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[color](../interfaces/EShapeFill.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts#L41)

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[enable](../interfaces/EShapeFill.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts#L18)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[enable](../interfaces/EShapeFill.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts#L26)

## Methods

### clone

▸ **clone**(): [`EShapeGroupFillEditor`](EShapeGroupFillEditor.md)

#### Returns

[`EShapeGroupFillEditor`](EShapeGroupFillEditor.md)

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[clone](../interfaces/EShapeFill.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts#L77)

___

### copy

▸ **copy**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `Partial`\<[`EShapeFillLike`](../interfaces/EShapeFillLike.md)\> |

#### Returns

`void`

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[copy](../interfaces/EShapeFill.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts#L63)

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

[EShapeFill](../interfaces/EShapeFill.md).[deserialize](../interfaces/EShapeFill.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts#L97)

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

[EShapeFill](../interfaces/EShapeFill.md).[serialize](../interfaces/EShapeFill.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts#L93)

___

### set

▸ **set**(`enable`, `color`, `alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |
| `color` | `number` |
| `alpha` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[set](../interfaces/EShapeFill.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts#L70)

___

### toObject

▸ **toObject**(): [`EShapeFillLike`](../interfaces/EShapeFillLike.md)

#### Returns

[`EShapeFillLike`](../interfaces/EShapeFillLike.md)

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[toObject](../interfaces/EShapeFill.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts:81](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-fill-editor.ts#L81)
