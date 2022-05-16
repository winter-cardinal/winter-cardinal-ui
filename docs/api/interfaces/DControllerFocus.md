[Winter Cardinal UI - v0.165.0](../index.md) / DControllerFocus

# Interface: DControllerFocus

## Implemented by

- [`DControllerDefaultFocus`](../classes/DControllerDefaultFocus.md)

## Table of contents

### Methods

- [blur](DControllerFocus.md#blur)
- [clear](DControllerFocus.md#clear)
- [find](DControllerFocus.md#find)
- [findParent](DControllerFocus.md#findparent)
- [focus](DControllerFocus.md#focus)
- [get](DControllerFocus.md#get)
- [set](DControllerFocus.md#set)

## Methods

### blur

▸ **blur**(`focusable`): ``null`` \| [`DFocusable`](DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusable` | [`DFocusable`](DFocusable.md) |

#### Returns

``null`` \| [`DFocusable`](DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L23)

___

### clear

▸ **clear**(): ``null`` \| [`DFocusable`](DFocusable.md)

#### Returns

``null`` \| [`DFocusable`](DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L24)

___

### find

▸ **find**(`target`, `includesTarget`, `includesTargetChildren`, `direction`, `root?`): ``null`` \| [`DFocusable`](DFocusable.md)

Searches a focusable and returns a firstly-found focusable.
If no focusable is found, returns null.
The search starts from the given target in the depth-first manner.
If the root is given, the search will be limited to the root's children.
The root itself will not be checked.
This method assumes the root is the one of the parents of the given target.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DFocusableMightBe`](DFocusableMightBe.md) | a target where a search starts at |
| `includesTarget` | `boolean` | true to check the target itself |
| `includesTargetChildren` | `boolean` | true to check the target's children |
| `direction` | `boolean` | true to search in the descending order |
| `root?` | `unknown` | a root of a search |

#### Returns

``null`` \| [`DFocusable`](DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L43)

___

### findParent

▸ **findParent**(`mightBeFocusable`): ``null`` \| [`DFocusable`](DFocusable.md)

Returns the closest focusable parent of the specified target.
If the specified target is focusable, returns the specified target.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mightBeFocusable` | ``null`` \| [`DFocusableMightBe`](DFocusableMightBe.md) | the node a search starts from |

#### Returns

``null`` \| [`DFocusable`](DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L57)

___

### focus

▸ **focus**(`focusable`): ``null`` \| [`DFocusable`](DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusable` | ``null`` \| [`DFocusable`](DFocusable.md) |

#### Returns

``null`` \| [`DFocusable`](DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L22)

___

### get

▸ **get**(): ``null`` \| [`DFocusable`](DFocusable.md)

#### Returns

``null`` \| [`DFocusable`](DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L27)

___

### set

▸ **set**(`focusable`, `isFocused`): ``null`` \| [`DFocusable`](DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusable` | ``null`` \| [`DFocusable`](DFocusable.md) |
| `isFocused` | `boolean` |

#### Returns

``null`` \| [`DFocusable`](DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-focus.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-controller-focus.ts#L26)
