[Winter Cardinal UI - v0.200.0](../index.md) / EShapeTextOutline

# Interface: EShapeTextOutline

## Hierarchy

- [`EShapeTextOutlineLike`](EShapeTextOutlineLike.md)

  ↳ **`EShapeTextOutline`**

## Implemented by

- [`EShapeGroupTextOutlineEditor`](../classes/EShapeGroupTextOutlineEditor.md)
- [`EShapeGroupTextOutlineViewer`](../classes/EShapeGroupTextOutlineViewer.md)
- [`EShapeTextOutlineImpl`](../classes/EShapeTextOutlineImpl.md)

## Table of contents

### Properties

- [alpha](EShapeTextOutline.md#alpha)
- [color](EShapeTextOutline.md#color)
- [enable](EShapeTextOutline.md#enable)
- [width](EShapeTextOutline.md#width)

### Methods

- [clone](EShapeTextOutline.md#clone)
- [copy](EShapeTextOutline.md#copy)
- [deserialize](EShapeTextOutline.md#deserialize)
- [serialize](EShapeTextOutline.md#serialize)
- [set](EShapeTextOutline.md#set)
- [toObject](EShapeTextOutline.md#toobject)

## Properties

### alpha

• **alpha**: `number`

#### Inherited from

[EShapeTextOutlineLike](EShapeTextOutlineLike.md).[alpha](EShapeTextOutlineLike.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts#L12)

___

### color

• **color**: `number`

#### Inherited from

[EShapeTextOutlineLike](EShapeTextOutlineLike.md).[color](EShapeTextOutlineLike.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts#L11)

___

### enable

• **enable**: `boolean`

#### Inherited from

[EShapeTextOutlineLike](EShapeTextOutlineLike.md).[enable](EShapeTextOutlineLike.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts#L10)

___

### width

• **width**: `number`

#### Inherited from

[EShapeTextOutlineLike](EShapeTextOutlineLike.md).[width](EShapeTextOutlineLike.md#width)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts#L13)

## Methods

### clone

▸ **clone**(): [`EShapeTextOutline`](EShapeTextOutline.md)

#### Returns

[`EShapeTextOutline`](EShapeTextOutline.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts#L19)

___

### copy

▸ **copy**(`target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `Partial`<[`EShapeTextOutlineLike`](EShapeTextOutlineLike.md)\> |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts#L17)

___

### deserialize

▸ **deserialize**(`target`, `manager`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `manager` | [`EShapeResourceManagerDeserialization`](../classes/EShapeResourceManagerDeserialization.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts#L22)

___

### serialize

▸ **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](../classes/EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts#L21)

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

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts#L18)

___

### toObject

▸ **toObject**(): [`EShapeTextOutlineLike`](EShapeTextOutlineLike.md)

#### Returns

[`EShapeTextOutlineLike`](EShapeTextOutlineLike.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/shape/e-shape-text-outline.ts#L20)
