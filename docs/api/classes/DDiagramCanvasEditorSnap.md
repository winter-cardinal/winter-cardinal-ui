[Winter Cardinal UI - v0.457.0](../index.md) / DDiagramCanvasEditorSnap

# Class: DDiagramCanvasEditorSnap

## Table of contents

### Constructors

- [constructor](DDiagramCanvasEditorSnap.md#constructor)

### Properties

- [\_container](DDiagramCanvasEditorSnap.md#_container)
- [\_controller](DDiagramCanvasEditorSnap.md#_controller)
- [\_grid](DDiagramCanvasEditorSnap.md#_grid)
- [\_gridParentHeight](DDiagramCanvasEditorSnap.md#_gridparentheight)
- [\_gridParentScale](DDiagramCanvasEditorSnap.md#_gridparentscale)
- [\_gridParentWidth](DDiagramCanvasEditorSnap.md#_gridparentwidth)
- [\_gridSize](DDiagramCanvasEditorSnap.md#_gridsize)
- [\_isDirty](DDiagramCanvasEditorSnap.md#_isdirty)
- [\_parent](DDiagramCanvasEditorSnap.md#_parent)
- [\_target](DDiagramCanvasEditorSnap.md#_target)

### Accessors

- [container](DDiagramCanvasEditorSnap.md#container)

### Methods

- [newGridSize](DDiagramCanvasEditorSnap.md#newgridsize)
- [onChange](DDiagramCanvasEditorSnap.md#onchange)
- [onRender](DDiagramCanvasEditorSnap.md#onrender)
- [onResize](DDiagramCanvasEditorSnap.md#onresize)
- [onScale](DDiagramCanvasEditorSnap.md#onscale)
- [serialize](DDiagramCanvasEditorSnap.md#serialize)
- [toGrid](DDiagramCanvasEditorSnap.md#togrid)
- [toGridMajor](DDiagramCanvasEditorSnap.md#togridmajor)
- [toGridMinor](DDiagramCanvasEditorSnap.md#togridminor)
- [toTarget](DDiagramCanvasEditorSnap.md#totarget)
- [update](DDiagramCanvasEditorSnap.md#update)
- [updateAll](DDiagramCanvasEditorSnap.md#updateall)
- [updateGridSize](DDiagramCanvasEditorSnap.md#updategridsize)

## Constructors

### constructor

• **new DDiagramCanvasEditorSnap**(`parent`, `theme`, `options`): [`DDiagramCanvasEditorSnap`](DDiagramCanvasEditorSnap.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DDiagramCanvasEditorSnapParent`](../interfaces/DDiagramCanvasEditorSnapParent.md) |
| `theme` | [`DThemeDiagramCanvasEditorSnap`](../interfaces/DThemeDiagramCanvasEditorSnap.md) |
| `options` | [`DDiagramCanvasEditorSnapOptions`](../interfaces/DDiagramCanvasEditorSnapOptions.md) |

#### Returns

[`DDiagramCanvasEditorSnap`](DDiagramCanvasEditorSnap.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L128)

## Properties

### \_container

• `Protected` **\_container**: [`EShapeContainer`](EShapeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L116)

___

### \_controller

• `Protected` **\_controller**: [`ESnapper`](ESnapper.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L115)

___

### \_grid

• `Protected` **\_grid**: [`DDiagramCanvasEditorSnapGrid`](../interfaces/DDiagramCanvasEditorSnapGrid.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L120)

___

### \_gridParentHeight

• `Protected` **\_gridParentHeight**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:122](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L122)

___

### \_gridParentScale

• `Protected` **\_gridParentScale**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:123](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L123)

___

### \_gridParentWidth

• `Protected` **\_gridParentWidth**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L121)

___

### \_gridSize

• `Protected` **\_gridSize**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L124)

___

### \_isDirty

• `Protected` **\_isDirty**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L118)

___

### \_parent

• `Protected` **\_parent**: [`DDiagramCanvasEditorSnapParent`](../interfaces/DDiagramCanvasEditorSnapParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L114)

___

### \_target

• `Protected` **\_target**: [`DDiagramCanvasEditorSnapTarget`](../interfaces/DDiagramCanvasEditorSnapTarget.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L126)

## Accessors

### container

• `get` **container**(): [`EShapeContainer`](EShapeContainer.md)

#### Returns

[`EShapeContainer`](EShapeContainer.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:247](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L247)

## Methods

### newGridSize

▸ **newGridSize**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:279](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L279)

___

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L242)

___

### onRender

▸ **onRender**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:288](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L288)

___

### onResize

▸ **onResize**(`newWidth`, `newHeight`, `oldWidth`, `oldHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newWidth` | `number` |
| `newHeight` | `number` |
| `oldWidth` | `number` |
| `oldHeight` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L255)

___

### onScale

▸ **onScale**(`newX`, `newY`, `oldX`, `oldY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newX` | `number` |
| `newY` | `number` |
| `oldX` | `number` |
| `oldY` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:264](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L264)

___

### serialize

▸ **serialize**(): [`DDiagramSerializedSnap`](../interfaces/DDiagramSerializedSnap.md)

#### Returns

[`DDiagramSerializedSnap`](../interfaces/DDiagramSerializedSnap.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L251)

___

### toGrid

▸ **toGrid**(`theme`, `options?`): [`DDiagramCanvasEditorSnapGrid`](../interfaces/DDiagramCanvasEditorSnapGrid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeDiagramCanvasEditorSnap`](../interfaces/DThemeDiagramCanvasEditorSnap.md) |
| `options?` | [`DDiagramCanvasEditorSnapGridOptions`](../interfaces/DDiagramCanvasEditorSnapGridOptions.md) |

#### Returns

[`DDiagramCanvasEditorSnapGrid`](../interfaces/DDiagramCanvasEditorSnapGrid.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L162)

___

### toGridMajor

▸ **toGridMajor**(`theme`, `options?`): [`DDiagramCanvasEditorSnapGridMajor`](../interfaces/DDiagramCanvasEditorSnapGridMajor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeDiagramCanvasEditorSnap`](../interfaces/DThemeDiagramCanvasEditorSnap.md) |
| `options?` | [`DDiagramCanvasEditorSnapGridMajorOptions`](../interfaces/DDiagramCanvasEditorSnapGridMajorOptions.md) |

#### Returns

[`DDiagramCanvasEditorSnapGridMajor`](../interfaces/DDiagramCanvasEditorSnapGridMajor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L180)

___

### toGridMinor

▸ **toGridMinor**(`theme`, `options?`): [`DDiagramCanvasEditorSnapGridMinor`](../interfaces/DDiagramCanvasEditorSnapGridMinor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeDiagramCanvasEditorSnap`](../interfaces/DThemeDiagramCanvasEditorSnap.md) |
| `options?` | [`DDiagramCanvasEditorSnapGridMinorOptions`](../interfaces/DDiagramCanvasEditorSnapGridMinorOptions.md) |

#### Returns

[`DDiagramCanvasEditorSnapGridMinor`](../interfaces/DDiagramCanvasEditorSnapGridMinor.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L202)

___

### toTarget

▸ **toTarget**(`theme`, `options?`): [`DDiagramCanvasEditorSnapTarget`](../interfaces/DDiagramCanvasEditorSnapTarget.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeDiagramCanvasEditorSnap`](../interfaces/DThemeDiagramCanvasEditorSnap.md) |
| `options?` | [`DDiagramCanvasEditorSnapTargetOptions`](../interfaces/DDiagramCanvasEditorSnapTargetOptions.md) |

#### Returns

[`DDiagramCanvasEditorSnapTarget`](../interfaces/DDiagramCanvasEditorSnapTarget.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:222](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L222)

___

### update

▸ **update**(`container`, `shapes`, `index`, `x`, `y`, `position`, `w`, `h`, `style`): `void`

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

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L354)

___

### updateAll

▸ **updateAll**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L295)

___

### updateGridSize

▸ **updateGridSize**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts:271](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-snap.ts#L271)
