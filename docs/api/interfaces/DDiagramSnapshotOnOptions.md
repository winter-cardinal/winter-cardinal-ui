[Winter Cardinal UI - v0.160.0](../index.md) / DDiagramSnapshotOnOptions

# Interface: DDiagramSnapshotOnOptions<CANVAS, EMITTER\>

## Type parameters

| Name |
| :------ |
| `CANVAS` |
| `EMITTER` |

## Hierarchy

- `Partial`<[`DDiagramSnapshotEvents`](DDiagramSnapshotEvents.md)<`CANVAS`, `EMITTER`\>\>

- `DOnOptions`

  ↳ **`DDiagramSnapshotOnOptions`**

## Table of contents

### Methods

- [taking](DDiagramSnapshotOnOptions.md#taking)
- [took](DDiagramSnapshotOnOptions.md#took)

## Methods

### taking

▸ `Optional` **taking**(`canvas`, `emitter`): `void`

Triggered before taking a snapshot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | `CANVAS` | a canvas |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.taking

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L29)

___

### took

▸ `Optional` **took**(`canvas`, `reason`, `emitter`): `void`

Triggered when a snapshot is taken successfully or when failed to take.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | `CANVAS` | a canvas |
| `reason` | ``null`` \| `string` | Null if succeeded. Otherwise, a string representing a reason why failed. |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Inherited from

Partial.took

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L38)
