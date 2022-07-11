[Winter Cardinal UI - v0.199.0](../index.md) / DDiagramCanvasEditorSnap

# Class: DDiagramCanvasEditorSnap

## Table of contents

### Constructors

- [constructor](DDiagramCanvasEditorSnap.md#constructor)

### Properties

- [\_container](DDiagramCanvasEditorSnap.md#_container)
- [\_controller](DDiagramCanvasEditorSnap.md#_controller)
- [\_grid](DDiagramCanvasEditorSnap.md#_grid)
- [\_parent](DDiagramCanvasEditorSnap.md#_parent)
- [\_target](DDiagramCanvasEditorSnap.md#_target)

### Accessors

- [container](DDiagramCanvasEditorSnap.md#container)

### Methods

- [onChange](DDiagramCanvasEditorSnap.md#onchange)
- [onReflow](DDiagramCanvasEditorSnap.md#onreflow)
- [serialize](DDiagramCanvasEditorSnap.md#serialize)
- [toGrid](DDiagramCanvasEditorSnap.md#togrid)
- [toGridMajor](DDiagramCanvasEditorSnap.md#togridmajor)
- [toGridMinor](DDiagramCanvasEditorSnap.md#togridminor)
- [toTarget](DDiagramCanvasEditorSnap.md#totarget)
- [update](DDiagramCanvasEditorSnap.md#update)

## Constructors

### constructor

• **new DDiagramCanvasEditorSnap**(`parent`, `theme`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DDiagramCanvasEditorSnapParent`](../interfaces/DDiagramCanvasEditorSnapParent.md) |
| `theme` | [`DThemeDiagramCanvasEditorSnap`](../interfaces/DThemeDiagramCanvasEditorSnap.md) |
| `options` | [`DDiagramCanvasEditorSnapOptions`](../interfaces/DDiagramCanvasEditorSnapOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L117)

## Properties

### \_container

• `Protected` **\_container**: [`EShapeContainer`](EShapeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L113)

___

### \_controller

• `Protected` **\_controller**: [`ESnapper`](ESnapper.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L112)

___

### \_grid

• `Protected` **\_grid**: [`DDiagramCanvasEditorSnapGrid`](../interfaces/DDiagramCanvasEditorSnapGrid.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L114)

___

### \_parent

• `Protected` **\_parent**: [`DDiagramCanvasEditorSnapParent`](../interfaces/DDiagramCanvasEditorSnapParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L111)

___

### \_target

• `Protected` **\_target**: [`DDiagramCanvasEditorSnapTarget`](../interfaces/DDiagramCanvasEditorSnapTarget.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L115)

## Accessors

### container

• `get` **container**(): [`EShapeContainer`](EShapeContainer.md)

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L200)

## Methods

### onChange

▸ `Protected` **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L194)

___

### onReflow

▸ **onReflow**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L208)

___

### serialize

▸ **serialize**(): [`DDiagramSerializedSnap`](../interfaces/DDiagramSerializedSnap.md)

#### Returns

[`DDiagramSerializedSnap`](../interfaces/DDiagramSerializedSnap.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L204)

___

### toGrid

▸ `Protected` **toGrid**(`theme`, `options?`): [`DDiagramCanvasEditorSnapGrid`](../interfaces/DDiagramCanvasEditorSnapGrid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeDiagramCanvasEditorSnap`](../interfaces/DThemeDiagramCanvasEditorSnap.md) |
| `options?` | [`DDiagramCanvasEditorSnapGridOptions`](../interfaces/DDiagramCanvasEditorSnapGridOptions.md) |

#### Returns

[`DDiagramCanvasEditorSnapGrid`](../interfaces/DDiagramCanvasEditorSnapGrid.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:146](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L146)

___

### toGridMajor

▸ `Protected` **toGridMajor**(`theme`, `options?`): [`DDiagramCanvasEditorSnapGridMajor`](../interfaces/DDiagramCanvasEditorSnapGridMajor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeDiagramCanvasEditorSnap`](../interfaces/DThemeDiagramCanvasEditorSnap.md) |
| `options?` | [`DDiagramCanvasEditorSnapGridMajorOptions`](../interfaces/DDiagramCanvasEditorSnapGridMajorOptions.md) |

#### Returns

[`DDiagramCanvasEditorSnapGridMajor`](../interfaces/DDiagramCanvasEditorSnapGridMajor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L157)

___

### toGridMinor

▸ `Protected` **toGridMinor**(`theme`, `options?`): [`DDiagramCanvasEditorSnapGridMinor`](../interfaces/DDiagramCanvasEditorSnapGridMinor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeDiagramCanvasEditorSnap`](../interfaces/DThemeDiagramCanvasEditorSnap.md) |
| `options?` | [`DDiagramCanvasEditorSnapGridMinorOptions`](../interfaces/DDiagramCanvasEditorSnapGridMinorOptions.md) |

#### Returns

[`DDiagramCanvasEditorSnapGridMinor`](../interfaces/DDiagramCanvasEditorSnapGridMinor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L170)

___

### toTarget

▸ `Protected` **toTarget**(`theme`, `options?`): [`DDiagramCanvasEditorSnapTarget`](../interfaces/DDiagramCanvasEditorSnapTarget.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeDiagramCanvasEditorSnap`](../interfaces/DThemeDiagramCanvasEditorSnap.md) |
| `options?` | [`DDiagramCanvasEditorSnapTargetOptions`](../interfaces/DDiagramCanvasEditorSnapTargetOptions.md) |

#### Returns

[`DDiagramCanvasEditorSnapTarget`](../interfaces/DDiagramCanvasEditorSnapTarget.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:182](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L182)

___

### update

▸ `Protected` **update**(`container`, `shapes`, `index`, `x`, `y`, `position`, `w`, `h`, `style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`EShapeContainer`](EShapeContainer.md) |
| `shapes` | [`EShapeBar`](EShapeBar.md)[] |
| `index` | `number` |
| `x` | `number` |
| `y` | `number` |
| `position` | [`EShapeBarPosition`](../index.md#eshapebarposition) |
| `w` | `number` |
| `h` | `number` |
| `style` | [`DDiagramCanvasEditorSnapGridMajor`](../interfaces/DDiagramCanvasEditorSnapGridMajor.md) \| [`DDiagramCanvasEditorSnapGridMinor`](../interfaces/DDiagramCanvasEditorSnapGridMinor.md) \| [`DDiagramCanvasEditorSnapTarget`](../interfaces/DDiagramCanvasEditorSnapTarget.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:268](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.199.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L268)
