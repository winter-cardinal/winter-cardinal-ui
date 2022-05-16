[Winter Cardinal UI - v0.165.0](../index.md) / DControllerDocument

# Interface: DControllerDocument<DOCUMENT\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `DOCUMENT` | extends [`DDocument`](DDocument.md) |

## Implemented by

- [`DDiagramEditor`](../classes/DDiagramEditor.md)

## Table of contents

### Methods

- [delete](DControllerDocument.md#delete)
- [get](DControllerDocument.md#get)
- [getName](DControllerDocument.md#getname)
- [isChanged](DControllerDocument.md#ischanged)
- [isNew](DControllerDocument.md#isnew)
- [save](DControllerDocument.md#save)
- [saveAs](DControllerDocument.md#saveas)

## Methods

### delete

▸ **delete**(): `Promise`<`unknown`\>

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-document.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-controller-document.ts#L15)

___

### get

▸ **get**(): ``null`` \| `DOCUMENT`

#### Returns

``null`` \| `DOCUMENT`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-document.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-controller-document.ts#L11)

___

### getName

▸ **getName**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-document.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-controller-document.ts#L12)

___

### isChanged

▸ **isChanged**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-document.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-controller-document.ts#L9)

___

### isNew

▸ **isNew**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-document.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-controller-document.ts#L10)

___

### save

▸ **save**(): `Promise`<`unknown`\>

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-document.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-controller-document.ts#L13)

___

### saveAs

▸ **saveAs**(`name`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-document.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-controller-document.ts#L14)
