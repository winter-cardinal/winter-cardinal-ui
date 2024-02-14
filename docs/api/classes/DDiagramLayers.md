[Winter Cardinal UI - v0.407.0](../index.md) / DDiagramLayers

# Class: DDiagramLayers

## Table of contents

### Constructors

- [constructor](DDiagramLayers.md#constructor)

### Methods

- [bringAllToFront](DDiagramLayers.md#bringalltofront)
- [bringToFront](DDiagramLayers.md#bringtofront)
- [doBringToFront](DDiagramLayers.md#dobringtofront)
- [hide](DDiagramLayers.md#hide)
- [hideAll](DDiagramLayers.md#hideall)
- [show](DDiagramLayers.md#show)
- [showAll](DDiagramLayers.md#showall)
- [toLayer](DDiagramLayers.md#tolayer)
- [toLayers](DDiagramLayers.md#tolayers)

## Constructors

### constructor

• **new DDiagramLayers**(): [`DDiagramLayers`](DDiagramLayers.md)

#### Returns

[`DDiagramLayers`](DDiagramLayers.md)

## Methods

### bringAllToFront

▸ **bringAllToFront**(`targets`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targets` | [`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer)[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layers.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-layers.ts#L103)

___

### bringToFront

▸ **bringToFront**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layers.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-layers.ts#L95)

___

### doBringToFront

▸ **doBringToFront**(`target`, `layers`, `offset`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `unknown` |
| `layers` | `unknown`[] |
| `offset` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layers.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-layers.ts#L122)

___

### hide

▸ **hide**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layers.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-layers.ts#L75)

___

### hideAll

▸ **hideAll**(`targets`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targets` | [`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer)[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layers.ts:83](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-layers.ts#L83)

___

### show

▸ **show**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layers.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-layers.ts#L55)

___

### showAll

▸ **showAll**(`targets`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targets` | [`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer)[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layers.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-layers.ts#L63)

___

### toLayer

▸ **toLayer**(`shape`): `undefined` \| ``null`` \| [`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`DDiagramLayersShape`](../interfaces/DDiagramLayersShape.md) |

#### Returns

`undefined` \| ``null`` \| [`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layers.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-layers.ts#L41)

___

### toLayers

▸ **toLayers**(`shape`, `indices`): [`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | [`DDiagramLayersShape`](../interfaces/DDiagramLayersShape.md) |
| `indices` | `number`[] |

#### Returns

[`DDiagramLayersLayer`](../index.md#ddiagramlayerslayer)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-layers.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-diagram-layers.ts#L22)
