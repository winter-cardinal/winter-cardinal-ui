[Winter Cardinal UI - v0.167.0](../index.md) / DApplicationOptions

# Interface: DApplicationOptions

## Table of contents

### Properties

- [antialias](DApplicationOptions.md#antialias)
- [background](DApplicationOptions.md#background)
- [height](DApplicationOptions.md#height)
- [overlay](DApplicationOptions.md#overlay)
- [padding](DApplicationOptions.md#padding)
- [resolution](DApplicationOptions.md#resolution)
- [root](DApplicationOptions.md#root)
- [width](DApplicationOptions.md#width)

## Properties

### antialias

• `Optional` **antialias**: `boolean`

An antialias setting.

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application.ts#L51)

___

### background

• `Optional` **background**: [`DApplicationBackgroundOptions`](DApplicationBackgroundOptions.md)

A background setting.

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application.ts#L46)

___

### height

• `Optional` **height**: `number`

A canvas height.

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application.ts#L41)

___

### overlay

• `Optional` **overlay**: `boolean`

An overlay layer setting.
The overlay layer is used by modal UI elements including DDialog
to provide the better interoperability with DOM-based UI elements
and WebGL-based UI elements.
However, an extra layer requires extra memory.
Set to true to enable the overlay layer.
The default value is false.

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application.ts#L68)

___

### padding

• `Optional` **padding**: `number` \| [`DPaddingLike`](DPaddingLike.md)

Padding settings.

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application.ts#L31)

___

### resolution

• `Optional` **resolution**: `number`

A resolution.
The default value is `devicePixelRatio`.

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application.ts#L57)

___

### root

• `Optional` **root**: `string` \| `HTMLElement`

A root element selector or a root element.
`HTMLCanvasElement` and other DOM elements are created in this element.
The default root element is `document.body`.

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application.ts#L26)

___

### width

• `Optional` **width**: `number`

A canvas width.

#### Defined in

[src/main/typescript/wcardinal/ui/d-application.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-application.ts#L36)
