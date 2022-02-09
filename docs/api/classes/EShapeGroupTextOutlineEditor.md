[Winter Cardinal UI - v0.154.0](../index.md) / EShapeGroupTextOutlineEditor

# Class: EShapeGroupTextOutlineEditor

## Implements

- [`EShapeTextOutline`](../interfaces/EShapeTextOutline.md)

## Table of contents

### Constructors

- [constructor](EShapeGroupTextOutlineEditor.md#constructor)

### Properties

- [\_parent](EShapeGroupTextOutlineEditor.md#_parent)

### Accessors

- [alpha](EShapeGroupTextOutlineEditor.md#alpha)
- [color](EShapeGroupTextOutlineEditor.md#color)
- [enable](EShapeGroupTextOutlineEditor.md#enable)
- [width](EShapeGroupTextOutlineEditor.md#width)

### Methods

- [clone](EShapeGroupTextOutlineEditor.md#clone)
- [copy](EShapeGroupTextOutlineEditor.md#copy)
- [deserialize](EShapeGroupTextOutlineEditor.md#deserialize)
- [serialize](EShapeGroupTextOutlineEditor.md#serialize)
- [set](EShapeGroupTextOutlineEditor.md#set)
- [toObject](EShapeGroupTextOutlineEditor.md#toobject)

## Constructors

### constructor

• **new EShapeGroupTextOutlineEditor**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeGroupPropertyParent`](../interfaces/EShapeGroupPropertyParent.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L14)

## Properties

### \_parent

• `Protected` **\_parent**: [`EShapeGroupPropertyParent`](../interfaces/EShapeGroupPropertyParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L12)

## Accessors

### alpha

• `get` **alpha**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeTextOutline](../interfaces/EShapeTextOutline.md).[alpha](../interfaces/EShapeTextOutline.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L48)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeTextOutline](../interfaces/EShapeTextOutline.md).[alpha](../interfaces/EShapeTextOutline.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L56)

___

### color

• `get` **color**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeTextOutline](../interfaces/EShapeTextOutline.md).[color](../interfaces/EShapeTextOutline.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L33)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeTextOutline](../interfaces/EShapeTextOutline.md).[color](../interfaces/EShapeTextOutline.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L41)

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeTextOutline](../interfaces/EShapeTextOutline.md).[enable](../interfaces/EShapeTextOutline.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L18)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeTextOutline](../interfaces/EShapeTextOutline.md).[enable](../interfaces/EShapeTextOutline.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L26)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeTextOutline](../interfaces/EShapeTextOutline.md).[width](../interfaces/EShapeTextOutline.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L63)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeTextOutline](../interfaces/EShapeTextOutline.md).[width](../interfaces/EShapeTextOutline.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L71)

## Methods

### clone

▸ **clone**(): [`EShapeGroupTextOutlineEditor`](EShapeGroupTextOutlineEditor.md)

#### Returns

[`EShapeGroupTextOutlineEditor`](EShapeGroupTextOutlineEditor.md)

#### Implementation of

[EShapeTextOutline](../interfaces/EShapeTextOutline.md).[clone](../interfaces/EShapeTextOutline.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L92)

___

### copy

▸ **copy**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `Partial`<[`EShapeTextOutlineLike`](../interfaces/EShapeTextOutlineLike.md)\> |

#### Returns

`void`

#### Implementation of

[EShapeTextOutline](../interfaces/EShapeTextOutline.md).[copy](../interfaces/EShapeTextOutline.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:78](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L78)

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

[EShapeTextOutline](../interfaces/EShapeTextOutline.md).[deserialize](../interfaces/EShapeTextOutline.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L113)

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

[EShapeTextOutline](../interfaces/EShapeTextOutline.md).[serialize](../interfaces/EShapeTextOutline.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L109)

___

### set

▸ **set**(`enable?`, `color?`, `alpha?`, `width?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |
| `color?` | `number` |
| `alpha?` | `number` |
| `width?` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeTextOutline](../interfaces/EShapeTextOutline.md).[set](../interfaces/EShapeTextOutline.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L85)

___

### toObject

▸ **toObject**(): [`EShapeTextOutlineLike`](../interfaces/EShapeTextOutlineLike.md)

#### Returns

[`EShapeTextOutlineLike`](../interfaces/EShapeTextOutlineLike.md)

#### Implementation of

[EShapeTextOutline](../interfaces/EShapeTextOutline.md).[toObject](../interfaces/EShapeTextOutline.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-text-outline-editor.ts#L96)
