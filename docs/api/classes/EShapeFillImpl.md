[Winter Cardinal UI - v0.205.1](../index.md) / EShapeFillImpl

# Class: EShapeFillImpl

## Implements

- [`EShapeFill`](../interfaces/EShapeFill.md)

## Table of contents

### Constructors

- [constructor](EShapeFillImpl.md#constructor)

### Properties

- [\_alpha](EShapeFillImpl.md#_alpha)
- [\_color](EShapeFillImpl.md#_color)
- [\_enable](EShapeFillImpl.md#_enable)
- [\_parent](EShapeFillImpl.md#_parent)

### Accessors

- [alpha](EShapeFillImpl.md#alpha)
- [color](EShapeFillImpl.md#color)
- [enable](EShapeFillImpl.md#enable)

### Methods

- [clone](EShapeFillImpl.md#clone)
- [copy](EShapeFillImpl.md#copy)
- [deserialize](EShapeFillImpl.md#deserialize)
- [serialize](EShapeFillImpl.md#serialize)
- [set](EShapeFillImpl.md#set)
- [toObject](EShapeFillImpl.md#toobject)

## Constructors

### constructor

• **new EShapeFillImpl**(`parent`, `enable`, `color`, `alpha`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeFillImplParent`](../interfaces/EShapeFillImplParent.md) |
| `enable` | `boolean` |
| `color` | `number` |
| `alpha` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L17)

## Properties

### \_alpha

• `Protected` **\_alpha**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L15)

___

### \_color

• `Protected` **\_color**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L14)

___

### \_enable

• `Protected` **\_enable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L13)

___

### \_parent

• `Protected` **\_parent**: [`EShapeFillImplParent`](../interfaces/EShapeFillImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L12)

## Accessors

### alpha

• `get` **alpha**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[alpha](../interfaces/EShapeFill.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L46)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L50)

___

### color

• `get` **color**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[color](../interfaces/EShapeFill.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L35)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L39)

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[enable](../interfaces/EShapeFill.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L24)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L28)

## Methods

### clone

▸ **clone**(): [`EShapeFill`](../interfaces/EShapeFill.md)

#### Returns

[`EShapeFill`](../interfaces/EShapeFill.md)

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[clone](../interfaces/EShapeFill.md#clone)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L86)

___

### copy

▸ **copy**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `Partial`<[`EShapeFillLike`](../interfaces/EShapeFillLike.md)\> |

#### Returns

`void`

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[copy](../interfaces/EShapeFill.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L57)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L103)

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

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L98)

___

### set

▸ **set**(`enable?`, `color?`, `alpha?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |
| `color?` | `number` |
| `alpha?` | `number` |

#### Returns

`void`

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[set](../interfaces/EShapeFill.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L63)

___

### toObject

▸ **toObject**(): [`EShapeFillLike`](../interfaces/EShapeFillLike.md)

#### Returns

[`EShapeFillLike`](../interfaces/EShapeFillLike.md)

#### Implementation of

[EShapeFill](../interfaces/EShapeFill.md).[toObject](../interfaces/EShapeFill.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-fill-impl.ts#L90)
