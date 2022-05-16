[Winter Cardinal UI - v0.167.0](../index.md) / DDiagramCanvasTileMappingImpl

# Class: DDiagramCanvasTileMappingImpl

## Implements

- [`DDiagramCanvasTileMapping`](../interfaces/DDiagramCanvasTileMapping.md)

## Table of contents

### Constructors

- [constructor](DDiagramCanvasTileMappingImpl.md#constructor)

### Properties

- [\_cb](DDiagramCanvasTileMappingImpl.md#_cb)
- [\_enable](DDiagramCanvasTileMappingImpl.md#_enable)
- [\_from](DDiagramCanvasTileMappingImpl.md#_from)
- [\_to](DDiagramCanvasTileMappingImpl.md#_to)

### Accessors

- [enable](DDiagramCanvasTileMappingImpl.md#enable)
- [from](DDiagramCanvasTileMappingImpl.md#from)
- [to](DDiagramCanvasTileMappingImpl.md#to)

### Methods

- [serialize](DDiagramCanvasTileMappingImpl.md#serialize)

## Constructors

### constructor

• **new DDiagramCanvasTileMappingImpl**(`cb`, `mapping?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => `void` |
| `mapping?` | [`DDiagramCanvasTileMapping`](../interfaces/DDiagramCanvasTileMapping.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts#L16)

• **new DDiagramCanvasTileMappingImpl**(`cb`, `enable`, `lon0`, `lat0`, `lon1`, `lat1`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => `void` |
| `enable` | `boolean` |
| `lon0` | `number` |
| `lat0` | `number` |
| `lon1` | `number` |
| `lat1` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts#L17)

## Properties

### \_cb

• `Protected` **\_cb**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts#L14)

___

### \_enable

• `Protected` **\_enable**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts#L11)

___

### \_from

• `Protected` **\_from**: [`DDiagramCanvasTileMappingPointImpl`](DDiagramCanvasTileMappingPointImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts#L12)

___

### \_to

• `Protected` **\_to**: [`DDiagramCanvasTileMappingPointImpl`](DDiagramCanvasTileMappingPointImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts#L13)

## Accessors

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DDiagramCanvasTileMapping](../interfaces/DDiagramCanvasTileMapping.md).[enable](../interfaces/DDiagramCanvasTileMapping.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts#L51)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Implementation of

[DDiagramCanvasTileMapping](../interfaces/DDiagramCanvasTileMapping.md).[enable](../interfaces/DDiagramCanvasTileMapping.md#enable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts#L55)

___

### from

• `get` **from**(): [`DMapTileMappingPoint`](../interfaces/DMapTileMappingPoint.md)

#### Returns

[`DMapTileMappingPoint`](../interfaces/DMapTileMappingPoint.md)

#### Implementation of

[DDiagramCanvasTileMapping](../interfaces/DDiagramCanvasTileMapping.md).[from](../interfaces/DDiagramCanvasTileMapping.md#from)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts:62](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts#L62)

___

### to

• `get` **to**(): [`DMapTileMappingPoint`](../interfaces/DMapTileMappingPoint.md)

#### Returns

[`DMapTileMappingPoint`](../interfaces/DMapTileMappingPoint.md)

#### Implementation of

[DDiagramCanvasTileMapping](../interfaces/DDiagramCanvasTileMapping.md).[to](../interfaces/DDiagramCanvasTileMapping.md#to)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts#L66)

## Methods

### serialize

▸ **serialize**(): [`DDiagramCanvasTileMapping`](../interfaces/DDiagramCanvasTileMapping.md)

#### Returns

[`DDiagramCanvasTileMapping`](../interfaces/DDiagramCanvasTileMapping.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-mapping-impl.ts#L70)
