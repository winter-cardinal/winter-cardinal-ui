[Winter Cardinal UI - v0.167.0](../index.md) / DDiagramEditorThumbnail

# Class: DDiagramEditorThumbnail

## Table of contents

### Constructors

- [constructor](DDiagramEditorThumbnail.md#constructor)

### Properties

- [\_isEnabled](DDiagramEditorThumbnail.md#_isenabled)
- [\_options](DDiagramEditorThumbnail.md#_options)
- [\_snapshot](DDiagramEditorThumbnail.md#_snapshot)

### Accessors

- [cleanup](DDiagramEditorThumbnail.md#cleanup)
- [enable](DDiagramEditorThumbnail.md#enable)
- [size](DDiagramEditorThumbnail.md#size)

### Methods

- [serialize](DDiagramEditorThumbnail.md#serialize)
- [toCleanup](DDiagramEditorThumbnail.md#tocleanup)
- [toCreateAsUrlOptions](DDiagramEditorThumbnail.md#tocreateasurloptions)
- [toIsEnabled](DDiagramEditorThumbnail.md#toisenabled)
- [toSize](DDiagramEditorThumbnail.md#tosize)

## Constructors

### constructor

• **new DDiagramEditorThumbnail**(`snapshot`, `theme`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `snapshot` | [`DDiagramEditorThumbnailSnapshot`](../interfaces/DDiagramEditorThumbnailSnapshot.md) |
| `theme` | [`DThemeDiagramEditorThumbnail`](../interfaces/DThemeDiagramEditorThumbnail.md) |
| `options?` | [`DDiagramEditorThumbnailOptions`](../interfaces/DDiagramEditorThumbnailOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L49)

## Properties

### \_isEnabled

• `Protected` **\_isEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L46)

___

### \_options

• `Protected` **\_options**: [`DDiagramEditorThumbnailSnapshotCreateAsUrlOptions`](../interfaces/DDiagramEditorThumbnailSnapshotCreateAsUrlOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L47)

___

### \_snapshot

• `Protected` **\_snapshot**: [`DDiagramEditorThumbnailSnapshot`](../interfaces/DDiagramEditorThumbnailSnapshot.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L45)

## Accessors

### cleanup

• `get` **cleanup**(): [`DDiagramEditorThumbnailSnapshotCleanupOptions`](../interfaces/DDiagramEditorThumbnailSnapshotCleanupOptions.md)

#### Returns

[`DDiagramEditorThumbnailSnapshotCleanupOptions`](../interfaces/DDiagramEditorThumbnailSnapshotCleanupOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L117)

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:101](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L101)

• `set` **enable**(`enable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable` | `boolean` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:105](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L105)

___

### size

• `get` **size**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:109](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L109)

• `set` **size**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:113](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L113)

## Methods

### serialize

▸ **serialize**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L121)

___

### toCleanup

▸ `Protected` **toCleanup**(`theme`, `cleanup?`): [`DDiagramEditorThumbnailSnapshotCleanupOptions`](../interfaces/DDiagramEditorThumbnailSnapshotCleanupOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeDiagramEditorThumbnail`](../interfaces/DThemeDiagramEditorThumbnail.md) |
| `cleanup?` | `boolean` \| [`DDiagramSnapshotCleanupOptions`](../interfaces/DDiagramSnapshotCleanupOptions.md) |

#### Returns

[`DDiagramEditorThumbnailSnapshotCleanupOptions`](../interfaces/DDiagramEditorThumbnailSnapshotCleanupOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L70)

___

### toCreateAsUrlOptions

▸ `Protected` **toCreateAsUrlOptions**(`theme`, `options?`): [`DDiagramEditorThumbnailSnapshotCreateAsUrlOptions`](../interfaces/DDiagramEditorThumbnailSnapshotCreateAsUrlOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeDiagramEditorThumbnail`](../interfaces/DThemeDiagramEditorThumbnail.md) |
| `options?` | [`DDiagramEditorThumbnailOptions`](../interfaces/DDiagramEditorThumbnailOptions.md) |

#### Returns

[`DDiagramEditorThumbnailSnapshotCreateAsUrlOptions`](../interfaces/DDiagramEditorThumbnailSnapshotCreateAsUrlOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:91](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L91)

___

### toIsEnabled

▸ `Protected` **toIsEnabled**(`theme`, `options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeDiagramEditorThumbnail`](../interfaces/DThemeDiagramEditorThumbnail.md) |
| `options?` | [`DDiagramEditorThumbnailOptions`](../interfaces/DDiagramEditorThumbnailOptions.md) |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L59)

___

### toSize

▸ `Protected` **toSize**(`theme`, `options?`): ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | [`DThemeDiagramEditorThumbnail`](../interfaces/DThemeDiagramEditorThumbnail.md) |
| `options?` | ``null`` \| `number` |

#### Returns

``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.167.0/src/main/typescript/wcardinal/ui/d-diagram-editor-thumbnail.ts#L66)
