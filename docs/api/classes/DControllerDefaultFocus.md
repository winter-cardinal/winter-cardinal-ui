[Winter Cardinal UI - v0.179.0](../index.md) / DControllerDefaultFocus

# Class: DControllerDefaultFocus

## Implements

- [`DControllerFocus`](../interfaces/DControllerFocus.md)

## Table of contents

### Constructors

- [constructor](DControllerDefaultFocus.md#constructor)

### Methods

- [blur](DControllerDefaultFocus.md#blur)
- [clear](DControllerDefaultFocus.md#clear)
- [find](DControllerDefaultFocus.md#find)
- [findNext](DControllerDefaultFocus.md#findnext)
- [findParent](DControllerDefaultFocus.md#findparent)
- [findPrevious](DControllerDefaultFocus.md#findprevious)
- [focus](DControllerDefaultFocus.md#focus)
- [get](DControllerDefaultFocus.md#get)
- [isFocusReverse](DControllerDefaultFocus.md#isfocusreverse)
- [isFocusRoot](DControllerDefaultFocus.md#isfocusroot)
- [isFocusable](DControllerDefaultFocus.md#isfocusable)
- [isFocusableContainer](DControllerDefaultFocus.md#isfocusablecontainer)
- [set](DControllerDefaultFocus.md#set)

## Constructors

### constructor

• **new DControllerDefaultFocus**()

## Methods

### blur

▸ **blur**(`focusable`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusable` | ``null`` \| [`DFocusable`](../interfaces/DFocusable.md) |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[blur](../interfaces/DControllerFocus.md#blur)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-focus.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-controller-default-focus.ts#L32)

___

### clear

▸ **clear**(): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[clear](../interfaces/DControllerFocus.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-focus.ts:41](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-controller-default-focus.ts#L41)

___

### find

▸ **find**(`target`, `includesTarget`, `includesTargetChildren`, `direction`, `root?`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

Searches a focusable and returns a firstly-found focusable.
If no focusable is found, returns null.
The search starts from the given target in the depth-first manner.
If the root is given, the search will be limited to the root's children.
The root itself will not be checked.
This method assumes the root is the one of the parents of the given target.

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DFocusableMightBe`](../interfaces/DFocusableMightBe.md) |
| `includesTarget` | `boolean` |
| `includesTargetChildren` | `boolean` |
| `direction` | `boolean` |
| `root?` | `unknown` |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[find](../interfaces/DControllerFocus.md#find)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-focus.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-controller-default-focus.ts#L69)

___

### findNext

▸ `Protected` **findNext**(`target`, `includesTarget`, `includesTargetChildren`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DFocusableMightBe`](../interfaces/DFocusableMightBe.md) |
| `includesTarget` | `boolean` |
| `includesTargetChildren` | `boolean` |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-focus.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-controller-default-focus.ts#L188)

___

### findParent

▸ **findParent**(`mightBeFocusable`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

Returns the closest focusable parent of the specified target.
If the specified target is focusable, returns the specified target.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mightBeFocusable` | ``null`` \| [`DFocusableMightBe`](../interfaces/DFocusableMightBe.md) |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[findParent](../interfaces/DControllerFocus.md#findparent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-focus.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-controller-default-focus.ts#L57)

___

### findPrevious

▸ `Protected` **findPrevious**(`target`, `includesTarget`, `includesTargetChildren`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`DFocusableMightBe`](../interfaces/DFocusableMightBe.md) |
| `includesTarget` | `boolean` |
| `includesTargetChildren` | `boolean` |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-focus.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-controller-default-focus.ts#L225)

___

### focus

▸ **focus**(`focusable`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusable` | ``null`` \| [`DFocusable`](../interfaces/DFocusable.md) |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[focus](../interfaces/DControllerFocus.md#focus)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-focus.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-controller-default-focus.ts#L16)

___

### get

▸ **get**(): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[get](../interfaces/DControllerFocus.md#get)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-focus.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-controller-default-focus.ts#L53)

___

### isFocusReverse

▸ `Protected` **isFocusReverse**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-focus.ts:283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-controller-default-focus.ts#L283)

___

### isFocusRoot

▸ `Protected` **isFocusRoot**(`target`, `root`): target is DFocusable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `root` | `unknown` |

#### Returns

target is DFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-focus.ts:276](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-controller-default-focus.ts#L276)

___

### isFocusable

▸ `Protected` **isFocusable**(`target`): target is DFocusable

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-focus.ts:262](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-controller-default-focus.ts#L262)

___

### isFocusableContainer

▸ `Protected` **isFocusableContainer**(`target`): target is DFocusableContainer

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

target is DFocusableContainer

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-focus.ts:272](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-controller-default-focus.ts#L272)

___

### set

▸ **set**(`focusable`, `isFocused`): ``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focusable` | ``null`` \| [`DFocusable`](../interfaces/DFocusable.md) |
| `isFocused` | `boolean` |

#### Returns

``null`` \| [`DFocusable`](../interfaces/DFocusable.md)

#### Implementation of

[DControllerFocus](../interfaces/DControllerFocus.md).[set](../interfaces/DControllerFocus.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-controller-default-focus.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-controller-default-focus.ts#L45)
