[Winter Cardinal UI - v0.155.0](../index.md) / DDiagramCanvasEditorBackground

# Class: DDiagramCanvasEditorBackground

## Implements

- [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

## Table of contents

### Constructors

- [constructor](DDiagramCanvasEditorBackground.md#constructor)

### Properties

- [\_base](DDiagramCanvasEditorBackground.md#_base)
- [\_target](DDiagramCanvasEditorBackground.md#_target)

### Accessors

- [alpha](DDiagramCanvasEditorBackground.md#alpha)
- [color](DDiagramCanvasEditorBackground.md#color)

### Methods

- [getAlpha](DDiagramCanvasEditorBackground.md#getalpha)
- [getBaseColor](DDiagramCanvasEditorBackground.md#getbasecolor)
- [getColor](DDiagramCanvasEditorBackground.md#getcolor)
- [getTheme](DDiagramCanvasEditorBackground.md#gettheme)
- [setBaseColor](DDiagramCanvasEditorBackground.md#setbasecolor)
- [setTheme](DDiagramCanvasEditorBackground.md#settheme)

## Constructors

### constructor

• **new DDiagramCanvasEditorBackground**(`target`, `base`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md) |
| `base` | ``null`` \| `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts#L16)

## Properties

### \_base

• `Protected` **\_base**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts#L14)

___

### \_target

• `Protected` **\_target**: [`DBackgroundStateAware`](../interfaces/DBackgroundStateAware.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts#L13)

## Accessors

### alpha

• `get` **alpha**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\>

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[alpha](../interfaces/DBackgroundStateAware.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts#L66)

• `set` **alpha**(`alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `alpha` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<`number`\> |

#### Returns

`void`

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[alpha](../interfaces/DBackgroundStateAware.md#alpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts#L70)

___

### color

• `get` **color**(): [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Returns

[`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\>

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[color](../interfaces/DBackgroundStateAware.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts#L50)

• `set` **color**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`DStateAwareOrValueMightBe`](../index.md#dstateawareorvaluemightbe)<``null`` \| `number`\> |

#### Returns

`void`

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[color](../interfaces/DBackgroundStateAware.md#color)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts#L54)

## Methods

### getAlpha

▸ **getAlpha**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`number`

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[getAlpha](../interfaces/DBackgroundStateAware.md#getalpha)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts#L58)

___

### getBaseColor

▸ **getBaseColor**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts#L29)

___

### getColor

▸ **getColor**(`state`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

``null`` \| `number`

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[getColor](../interfaces/DBackgroundStateAware.md#getcolor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts#L37)

___

### getTheme

▸ **getTheme**(): [`DThemeBase`](../interfaces/DThemeBase.md)

#### Returns

[`DThemeBase`](../interfaces/DThemeBase.md)

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[getTheme](../interfaces/DBackgroundStateAware.md#gettheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts#L21)

___

### setBaseColor

▸ **setBaseColor**(`baseColor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseColor` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts#L33)

___

### setTheme

▸ **setTheme**(`theme`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeBase`](../interfaces/DThemeBase.md) |

#### Returns

`void`

#### Implementation of

[DBackgroundStateAware](../interfaces/DBackgroundStateAware.md).[setTheme](../interfaces/DBackgroundStateAware.md#settheme)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.155.0/src/main/typescript/wcardinal/ui/d-diagram-canvas-editor-background.ts#L25)
