[Winter Cardinal UI - v0.200.0](../index.md) / DDiagramCanvasTileMappingPointImpl

# Class: DDiagramCanvasTileMappingPointImpl

## Hierarchy

- `ObservablePoint`

  ↳ **`DDiagramCanvasTileMappingPointImpl`**

## Implements

- [`DMapTileMappingPoint`](../interfaces/DMapTileMappingPoint.md)

## Table of contents

### Constructors

- [constructor](DDiagramCanvasTileMappingPointImpl.md#constructor)

### Properties

- [x](DDiagramCanvasTileMappingPointImpl.md#x)
- [y](DDiagramCanvasTileMappingPointImpl.md#y)

### Accessors

- [lat](DDiagramCanvasTileMappingPointImpl.md#lat)
- [lon](DDiagramCanvasTileMappingPointImpl.md#lon)

### Methods

- [clone](DDiagramCanvasTileMappingPointImpl.md#clone)
- [copyFrom](DDiagramCanvasTileMappingPointImpl.md#copyfrom)
- [copyTo](DDiagramCanvasTileMappingPointImpl.md#copyto)
- [equals](DDiagramCanvasTileMappingPointImpl.md#equals)
- [set](DDiagramCanvasTileMappingPointImpl.md#set)
- [toObject](DDiagramCanvasTileMappingPointImpl.md#toobject)

## Constructors

### constructor

• **new DDiagramCanvasTileMappingPointImpl**(`cb`, `scope`, `x?`, `y?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (...`params`: `any`[]) => `any` |
| `scope` | `any` |
| `x?` | `number` |
| `y?` | `number` |

#### Inherited from

ObservablePoint.constructor

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12062

## Properties

### x

• **x**: `number`

The position of the displayObject on the x axis relative to the local coordinates of the parent.

**`member`** {number}

#### Inherited from

ObservablePoint.x

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12109

___

### y

• **y**: `number`

The position of the displayObject on the x axis relative to the local coordinates of the parent.

**`member`** {number}

#### Inherited from

ObservablePoint.y

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12115

## Accessors

### lat

• `get` **lat**(): `number`

#### Returns

`number`

#### Implementation of

[DMapTileMappingPoint](../interfaces/DMapTileMappingPoint.md).[lat](../interfaces/DMapTileMappingPoint.md#lat)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-point-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-point-impl.ts#L21)

• `set` **lat**(`lat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lat` | `number` |

#### Returns

`void`

#### Implementation of

[DMapTileMappingPoint](../interfaces/DMapTileMappingPoint.md).[lat](../interfaces/DMapTileMappingPoint.md#lat)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-point-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-point-impl.ts#L25)

___

### lon

• `get` **lon**(): `number`

#### Returns

`number`

#### Implementation of

[DMapTileMappingPoint](../interfaces/DMapTileMappingPoint.md).[lon](../interfaces/DMapTileMappingPoint.md#lon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-point-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-point-impl.ts#L13)

• `set` **lon**(`lon`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lon` | `number` |

#### Returns

`void`

#### Implementation of

[DMapTileMappingPoint](../interfaces/DMapTileMappingPoint.md).[lon](../interfaces/DMapTileMappingPoint.md#lon)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-point-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-point-impl.ts#L17)

## Methods

### clone

▸ **clone**(`cb?`, `scope?`): `ObservablePoint`

Creates a clone of this point.
The callback and scope params can be overidden otherwise they will default
to the clone object's values.

**`override`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | (...`params`: `any`[]) => `any` |
| `scope?` | `any` |

#### Returns

`ObservablePoint`

a copy of the point

#### Inherited from

ObservablePoint.clone

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12073

___

### copyFrom

▸ **copyFrom**(`p`): [`DDiagramCanvasTileMappingPointImpl`](DDiagramCanvasTileMappingPointImpl.md)

Copies x and y from the given point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `IPoint` | The point to copy from. |

#### Returns

[`DDiagramCanvasTileMappingPointImpl`](DDiagramCanvasTileMappingPointImpl.md)

Returns itself.

#### Inherited from

ObservablePoint.copyFrom

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12089

___

### copyTo

▸ **copyTo**(`p`): `IPoint`

Copies x and y into the given point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `IPoint` | The point to copy. |

#### Returns

`IPoint`

Given point with values updated

#### Inherited from

ObservablePoint.copyTo

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12096

___

### equals

▸ **equals**(`p`): `boolean`

Returns true if the given point is equal to this point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `IPoint` | The point to check |

#### Returns

`boolean`

Whether the given point equal to this point

#### Inherited from

ObservablePoint.equals

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12103

___

### set

▸ **set**(`x?`, `y?`): [`DDiagramCanvasTileMappingPointImpl`](DDiagramCanvasTileMappingPointImpl.md)

Sets the point to a new x and y position.
If y is omitted, both x and y will be set to x.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |

#### Returns

[`DDiagramCanvasTileMappingPointImpl`](DDiagramCanvasTileMappingPointImpl.md)

Returns itself.

#### Inherited from

ObservablePoint.set

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:12082

___

### toObject

▸ **toObject**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `lat` | `number` |
| `lon` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-point-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.200.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-point-impl.ts#L29)
