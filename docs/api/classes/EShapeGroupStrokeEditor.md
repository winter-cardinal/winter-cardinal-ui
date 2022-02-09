[Winter Cardinal UI](../README.md) / EShapeGroupStrokeEditor

# Class: EShapeGroupStrokeEditor

## Implements

- [`EShapeStroke`](../interfaces/EShapeStroke.md)

## Table of contents

### Constructors

- [constructor](EShapeGroupStrokeEditor.md#constructor)

### Properties

- [\_parent](EShapeGroupStrokeEditor.md#_parent)

### Accessors

- [align](EShapeGroupStrokeEditor.md#align)
- [alpha](EShapeGroupStrokeEditor.md#alpha)
- [color](EShapeGroupStrokeEditor.md#color)
- [enable](EShapeGroupStrokeEditor.md#enable)
- [side](EShapeGroupStrokeEditor.md#side)
- [style](EShapeGroupStrokeEditor.md#style)
- [width](EShapeGroupStrokeEditor.md#width)

### Methods

- [clone](EShapeGroupStrokeEditor.md#clone)
- [copy](EShapeGroupStrokeEditor.md#copy)
- [deserialize](EShapeGroupStrokeEditor.md#deserialize)
- [serialize](EShapeGroupStrokeEditor.md#serialize)
- [set](EShapeGroupStrokeEditor.md#set)
- [toObject](EShapeGroupStrokeEditor.md#toobject)

## Constructors

### constructor

• **new EShapeGroupStrokeEditor**(`parent`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeGroupPropertyParent`](../interfaces/EShapeGroupPropertyParent.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L16)

## Properties

### \_parent

• `Protected` **\_parent**: [`EShapeGroupPropertyParent`](../interfaces/EShapeGroupPropertyParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L14)

## Accessors

### align

• `get` **align**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[align](../interfaces/EShapeStroke.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L80)

• `set` **align**(`align`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `align` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[align](../interfaces/EShapeStroke.md#align)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L88)

___

### alpha

• `get` **alpha**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[alpha](../interfaces/EShapeStroke.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L50)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[alpha](../interfaces/EShapeStroke.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L58)

___

### color

• `get` **color**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[color](../interfaces/EShapeStroke.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L35)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[color](../interfaces/EShapeStroke.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L43)

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[enable](../interfaces/EShapeStroke.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L20)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[enable](../interfaces/EShapeStroke.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L28)

___

### side

• `get` **side**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[side](../interfaces/EShapeStroke.md#side)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L95)

• `set` **side**(`side`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `side` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[side](../interfaces/EShapeStroke.md#side)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L103)

___

### style

• `get` **style**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[style](../interfaces/EShapeStroke.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:110](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L110)

• `set` **style**(`style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[style](../interfaces/EShapeStroke.md#style)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L118)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[width](../interfaces/EShapeStroke.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L65)

• `set` **width**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[width](../interfaces/EShapeStroke.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L73)

## Methods

### clone

▸ **clone**(): [`EShapeGroupStrokeEditor`](EShapeGroupStrokeEditor.md)

#### Returns

[`EShapeGroupStrokeEditor`](EShapeGroupStrokeEditor.md)

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[clone](../interfaces/EShapeStroke.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L145)

___

### copy

▸ **copy**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `Partial`<[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)\> |

#### Returns

`void`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[copy](../interfaces/EShapeStroke.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:125](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L125)

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

[EShapeStroke](../interfaces/EShapeStroke.md).[deserialize](../interfaces/EShapeStroke.md#deserialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L169)

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

[EShapeStroke](../interfaces/EShapeStroke.md).[serialize](../interfaces/EShapeStroke.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L165)

___

### set

▸ **set**(`enable`, `color`, `alpha`, `width`, `side`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |
| `color` | `number` |
| `alpha` | `number` |
| `width` | `number` |
| `side` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[set](../interfaces/EShapeStroke.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L132)

___

### toObject

▸ **toObject**(): [`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)

#### Returns

[`EShapeStrokeLike`](../interfaces/EShapeStrokeLike.md)

#### Implementation of

[EShapeStroke](../interfaces/EShapeStroke.md).[toObject](../interfaces/EShapeStroke.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts:149](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-group-stroke-editor.ts#L149)
