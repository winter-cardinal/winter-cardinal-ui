[Winter Cardinal UI - v0.154.0](../index.md) / DButtonGroupOnOptions

# Interface: DButtonGroupOnOptions<BUTTON, EMITTER\>

[DButtonGroup](../classes/DButtonGroup.md) "on" options.

## Type parameters

| Name |
| :------ |
| `BUTTON` |
| `EMITTER` |

## Hierarchy

- `Partial`<[`DButtonGroupEvents`](DButtonGroupEvents.md)<`BUTTON`, `EMITTER`\>\>

- `DOnOptions`

  ↳ **`DButtonGroupOnOptions`**

## Table of contents

### Methods

- [active](DButtonGroupOnOptions.md#active)

## Methods

### active

▸ `Optional` **active**(`newActive`, `oldActive`, `emitter`): `void`

Triggered when the active button is changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newActive` | ``null`` \| `BUTTON` | - |
| `oldActive` | ``null`` \| `BUTTON` | - |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.active

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-button-group.ts#L19)
