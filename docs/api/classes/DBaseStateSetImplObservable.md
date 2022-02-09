[Winter Cardinal UI](../README.md) / DBaseStateSetImplObservable

# Class: DBaseStateSetImplObservable

## Hierarchy

- [`DBaseStateSetImpl`](DBaseStateSetImpl.md)

  ↳ **`DBaseStateSetImplObservable`**

  ↳↳ [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

## Table of contents

### Constructors

- [constructor](DBaseStateSetImplObservable.md#constructor)

### Properties

- [\_doSave](DBaseStateSetImplObservable.md#_dosave)
- [\_isLocked](DBaseStateSetImplObservable.md#_islocked)
- [\_isSaved](DBaseStateSetImplObservable.md#_issaved)
- [\_local](DBaseStateSetImplObservable.md#_local)
- [\_onChange](DBaseStateSetImplObservable.md#_onchange)
- [\_parent](DBaseStateSetImplObservable.md#_parent)
- [\_saved](DBaseStateSetImplObservable.md#_saved)

### Accessors

- [inActive](DBaseStateSetImplObservable.md#inactive)
- [inAlternated](DBaseStateSetImplObservable.md#inalternated)
- [inChanged](DBaseStateSetImplObservable.md#inchanged)
- [inDisabled](DBaseStateSetImplObservable.md#indisabled)
- [inEnabled](DBaseStateSetImplObservable.md#inenabled)
- [inFailed](DBaseStateSetImplObservable.md#infailed)
- [inFocusReverse](DBaseStateSetImplObservable.md#infocusreverse)
- [inFocusRoot](DBaseStateSetImplObservable.md#infocusroot)
- [inFocusable](DBaseStateSetImplObservable.md#infocusable)
- [inFocused](DBaseStateSetImplObservable.md#infocused)
- [inGesturing](DBaseStateSetImplObservable.md#ingesturing)
- [inHovered](DBaseStateSetImplObservable.md#inhovered)
- [inInvalid](DBaseStateSetImplObservable.md#ininvalid)
- [inPressed](DBaseStateSetImplObservable.md#inpressed)
- [inReadOnly](DBaseStateSetImplObservable.md#inreadonly)
- [inSucceeded](DBaseStateSetImplObservable.md#insucceeded)
- [inUnfocusable](DBaseStateSetImplObservable.md#inunfocusable)
- [inWarned](DBaseStateSetImplObservable.md#inwarned)
- [isActionable](DBaseStateSetImplObservable.md#isactionable)
- [isActive](DBaseStateSetImplObservable.md#isactive)
- [isAlternated](DBaseStateSetImplObservable.md#isalternated)
- [isChanged](DBaseStateSetImplObservable.md#ischanged)
- [isDisabled](DBaseStateSetImplObservable.md#isdisabled)
- [isEnabled](DBaseStateSetImplObservable.md#isenabled)
- [isFailed](DBaseStateSetImplObservable.md#isfailed)
- [isFocusReverse](DBaseStateSetImplObservable.md#isfocusreverse)
- [isFocusRoot](DBaseStateSetImplObservable.md#isfocusroot)
- [isFocusable](DBaseStateSetImplObservable.md#isfocusable)
- [isFocused](DBaseStateSetImplObservable.md#isfocused)
- [isGesturing](DBaseStateSetImplObservable.md#isgesturing)
- [isHovered](DBaseStateSetImplObservable.md#ishovered)
- [isInvalid](DBaseStateSetImplObservable.md#isinvalid)
- [isPressed](DBaseStateSetImplObservable.md#ispressed)
- [isReadOnly](DBaseStateSetImplObservable.md#isreadonly)
- [isSucceeded](DBaseStateSetImplObservable.md#issucceeded)
- [isUnfocusable](DBaseStateSetImplObservable.md#isunfocusable)
- [isWarned](DBaseStateSetImplObservable.md#iswarned)
- [local](DBaseStateSetImplObservable.md#local)
- [onActive](DBaseStateSetImplObservable.md#onactive)
- [onAlternated](DBaseStateSetImplObservable.md#onalternated)
- [onChanged](DBaseStateSetImplObservable.md#onchanged)
- [onDisabled](DBaseStateSetImplObservable.md#ondisabled)
- [onEnabled](DBaseStateSetImplObservable.md#onenabled)
- [onFailed](DBaseStateSetImplObservable.md#onfailed)
- [onFocusReverse](DBaseStateSetImplObservable.md#onfocusreverse)
- [onFocusRoot](DBaseStateSetImplObservable.md#onfocusroot)
- [onFocusable](DBaseStateSetImplObservable.md#onfocusable)
- [onFocused](DBaseStateSetImplObservable.md#onfocused)
- [onGesturing](DBaseStateSetImplObservable.md#ongesturing)
- [onHovered](DBaseStateSetImplObservable.md#onhovered)
- [onInvalid](DBaseStateSetImplObservable.md#oninvalid)
- [onPressed](DBaseStateSetImplObservable.md#onpressed)
- [onReadOnly](DBaseStateSetImplObservable.md#onreadonly)
- [onSucceeded](DBaseStateSetImplObservable.md#onsucceeded)
- [onUnfocusable](DBaseStateSetImplObservable.md#onunfocusable)
- [onWarned](DBaseStateSetImplObservable.md#onwarned)
- [parent](DBaseStateSetImplObservable.md#parent)
- [saved](DBaseStateSetImplObservable.md#saved)
- [underActive](DBaseStateSetImplObservable.md#underactive)
- [underAlternated](DBaseStateSetImplObservable.md#underalternated)
- [underChanged](DBaseStateSetImplObservable.md#underchanged)
- [underDisabled](DBaseStateSetImplObservable.md#underdisabled)
- [underEnabled](DBaseStateSetImplObservable.md#underenabled)
- [underFailed](DBaseStateSetImplObservable.md#underfailed)
- [underFocusReverse](DBaseStateSetImplObservable.md#underfocusreverse)
- [underFocusRoot](DBaseStateSetImplObservable.md#underfocusroot)
- [underFocusable](DBaseStateSetImplObservable.md#underfocusable)
- [underFocused](DBaseStateSetImplObservable.md#underfocused)
- [underGesturing](DBaseStateSetImplObservable.md#undergesturing)
- [underHovered](DBaseStateSetImplObservable.md#underhovered)
- [underInvalid](DBaseStateSetImplObservable.md#underinvalid)
- [underPressed](DBaseStateSetImplObservable.md#underpressed)
- [underReadOnly](DBaseStateSetImplObservable.md#underreadonly)
- [underSucceeded](DBaseStateSetImplObservable.md#undersucceeded)
- [underUnfocusable](DBaseStateSetImplObservable.md#underunfocusable)
- [underWarned](DBaseStateSetImplObservable.md#underwarned)

### Methods

- [add](DBaseStateSetImplObservable.md#add)
- [addAll](DBaseStateSetImplObservable.md#addall)
- [begin](DBaseStateSetImplObservable.md#begin)
- [checkAdded](DBaseStateSetImplObservable.md#checkadded)
- [checkAddeds](DBaseStateSetImplObservable.md#checkaddeds)
- [checkRemoved](DBaseStateSetImplObservable.md#checkremoved)
- [checkRemoveds](DBaseStateSetImplObservable.md#checkremoveds)
- [clear](DBaseStateSetImplObservable.md#clear)
- [copy](DBaseStateSetImplObservable.md#copy)
- [each](DBaseStateSetImplObservable.md#each)
- [end](DBaseStateSetImplObservable.md#end)
- [in](DBaseStateSetImplObservable.md#in)
- [is](DBaseStateSetImplObservable.md#is)
- [lock](DBaseStateSetImplObservable.md#lock)
- [on](DBaseStateSetImplObservable.md#on)
- [onChange](DBaseStateSetImplObservable.md#onchange)
- [onParentChange](DBaseStateSetImplObservable.md#onparentchange)
- [remove](DBaseStateSetImplObservable.md#remove)
- [removeAll](DBaseStateSetImplObservable.md#removeall)
- [set](DBaseStateSetImplObservable.md#set)
- [setAll](DBaseStateSetImplObservable.md#setall)
- [size](DBaseStateSetImplObservable.md#size)
- [toObject](DBaseStateSetImplObservable.md#toobject)
- [toString](DBaseStateSetImplObservable.md#tostring)
- [under](DBaseStateSetImplObservable.md#under)
- [unlock](DBaseStateSetImplObservable.md#unlock)

## Constructors

### constructor

• **new DBaseStateSetImplObservable**(`onChange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onChange` | [`DBaseStateSetImplObservableOnChange`](../README.md#dbasestatesetimplobservableonchange) |

#### Overrides

[DBaseStateSetImpl](DBaseStateSetImpl.md).[constructor](DBaseStateSetImpl.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L21)

## Properties

### \_doSave

• `Protected` **\_doSave**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L18)

___

### \_isLocked

• `Protected` **\_isLocked**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L16)

___

### \_isSaved

• `Protected` **\_isSaved**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L17)

___

### \_local

• `Protected` **\_local**: `Set`<`string`\>

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[_local](DBaseStateSetImpl.md#_local)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L13)

___

### \_onChange

• `Protected` **\_onChange**: [`DBaseStateSetImplObservableOnChange`](../README.md#dbasestatesetimplobservableonchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L15)

___

### \_parent

• `Protected` **\_parent**: ``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[_parent](DBaseStateSetImpl.md#_parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L14)

___

### \_saved

• `Protected` `Optional` **\_saved**: [`DBaseStateSetImpl`](DBaseStateSetImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L19)

## Accessors

### inActive

• `get` **inActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L306)

___

### inAlternated

• `get` **inAlternated**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:630](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L630)

___

### inChanged

• `get` **inChanged**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:610](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L610)

___

### inDisabled

• `get` **inDisabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L386)

___

### inEnabled

• `get` **inEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L366)

___

### inFailed

• `get` **inFailed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:570](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L570)

___

### inFocusReverse

• `get` **inFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:470](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L470)

___

### inFocusRoot

• `get` **inFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L450)

___

### inFocusable

• `get` **inFocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L490)

___

### inFocused

• `get` **inFocused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:430](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L430)

___

### inGesturing

• `get` **inGesturing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:410](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L410)

___

### inHovered

• `get` **inHovered**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L286)

___

### inInvalid

• `get` **inInvalid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L530)

___

### inPressed

• `get` **inPressed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:326](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L326)

___

### inReadOnly

• `get` **inReadOnly**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L346)

___

### inSucceeded

• `get` **inSucceeded**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:550](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L550)

___

### inUnfocusable

• `get` **inUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:510](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L510)

___

### inWarned

• `get` **inWarned**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:590](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L590)

___

### isActionable

• `get` **isActionable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isActionable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L398)

___

### isActive

• `get` **isActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:298](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L298)

• `set` **isActive**(`isActive`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isActive` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:302](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L302)

___

### isAlternated

• `get` **isAlternated**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L622)

• `set` **isAlternated**(`isAlternated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isAlternated` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:626](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L626)

___

### isChanged

• `get` **isChanged**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L602)

• `set` **isChanged**(`isChanged`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isChanged` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L606)

___

### isDisabled

• `get` **isDisabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:378](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L378)

• `set` **isDisabled**(`isDisabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisabled` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:382](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L382)

___

### isEnabled

• `get` **isEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:358](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L358)

• `set` **isEnabled**(`isEnabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isEnabled` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:362](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L362)

___

### isFailed

• `get` **isFailed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:562](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L562)

• `set` **isFailed**(`failed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `failed` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:566](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L566)

___

### isFocusReverse

• `get` **isFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L462)

• `set` **isFocusReverse**(`isFocusReverse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocusReverse` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:466](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L466)

___

### isFocusRoot

• `get` **isFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L442)

• `set` **isFocusRoot**(`isFocusRoot`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocusRoot` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:446](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L446)

___

### isFocusable

• `get` **isFocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:482](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L482)

• `set` **isFocusable**(`isFocusable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocusable` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L486)

___

### isFocused

• `get` **isFocused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L422)

• `set` **isFocused**(`isFocused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L426)

___

### isGesturing

• `get` **isGesturing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L402)

• `set` **isGesturing**(`isGesturing`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isGesturing` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:406](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L406)

___

### isHovered

• `get` **isHovered**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L278)

• `set` **isHovered**(`isHovered`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isHovered` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:282](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L282)

___

### isInvalid

• `get` **isInvalid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L522)

• `set` **isInvalid**(`invalid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `invalid` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L526)

___

### isPressed

• `get` **isPressed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:318](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L318)

• `set` **isPressed**(`isPressed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isPressed` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:322](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L322)

___

### isReadOnly

• `get` **isReadOnly**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L338)

• `set` **isReadOnly**(`isReadOnly`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReadOnly` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L342)

___

### isSucceeded

• `get` **isSucceeded**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:542](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L542)

• `set` **isSucceeded**(`succeeded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `succeeded` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:546](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L546)

___

### isUnfocusable

• `get` **isUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L502)

• `set` **isUnfocusable**(`unfocusable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unfocusable` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:506](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L506)

___

### isWarned

• `get` **isWarned**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:582](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L582)

• `set` **isWarned**(`isWarned`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isWarned` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:586](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L586)

___

### local

• `get` **local**(): `Set`<`string`\>

#### Returns

`Set`<`string`\>

#### Inherited from

DBaseStateSetImpl.local

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L255)

___

### onActive

• `get` **onActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:310](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L310)

___

### onAlternated

• `get` **onAlternated**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:634](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L634)

___

### onChanged

• `get` **onChanged**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:614](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L614)

___

### onDisabled

• `get` **onDisabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L390)

___

### onEnabled

• `get` **onEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:370](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L370)

___

### onFailed

• `get` **onFailed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:574](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L574)

___

### onFocusReverse

• `get` **onFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L474)

___

### onFocusRoot

• `get` **onFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L454)

___

### onFocusable

• `get` **onFocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:494](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L494)

___

### onFocused

• `get` **onFocused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:434](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L434)

___

### onGesturing

• `get` **onGesturing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L414)

___

### onHovered

• `get` **onHovered**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:290](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L290)

___

### onInvalid

• `get` **onInvalid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:534](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L534)

___

### onPressed

• `get` **onPressed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:330](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L330)

___

### onReadOnly

• `get` **onReadOnly**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L350)

___

### onSucceeded

• `get` **onSucceeded**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:554](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L554)

___

### onUnfocusable

• `get` **onUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:514](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L514)

___

### onWarned

• `get` **onWarned**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L594)

___

### parent

• `get` **parent**(): ``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DBaseStateSetImpl.parent

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L259)

• `set` **parent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | ``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.parent

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L263)

___

### saved

• `Protected` `get` **saved**(): [`DBaseStateSetImpl`](DBaseStateSetImpl.md)

#### Returns

[`DBaseStateSetImpl`](DBaseStateSetImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L42)

___

### underActive

• `get` **underActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:314](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L314)

___

### underAlternated

• `get` **underAlternated**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:638](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L638)

___

### underChanged

• `get` **underChanged**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:618](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L618)

___

### underDisabled

• `get` **underDisabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L394)

___

### underEnabled

• `get` **underEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L374)

___

### underFailed

• `get` **underFailed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:578](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L578)

___

### underFocusReverse

• `get` **underFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:478](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L478)

___

### underFocusRoot

• `get` **underFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:458](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L458)

___

### underFocusable

• `get` **underFocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:498](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L498)

___

### underFocused

• `get` **underFocused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:438](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L438)

___

### underGesturing

• `get` **underGesturing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L418)

___

### underHovered

• `get` **underHovered**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L294)

___

### underInvalid

• `get` **underInvalid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:538](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L538)

___

### underPressed

• `get` **underPressed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:334](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L334)

___

### underReadOnly

• `get` **underReadOnly**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L354)

___

### underSucceeded

• `get` **underSucceeded**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:558](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L558)

___

### underUnfocusable

• `get` **underUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:518](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L518)

___

### underWarned

• `get` **underWarned**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:598](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L598)

## Methods

### add

▸ **add**(`state`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[add](DBaseStateSetImpl.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L57)

___

### addAll

▸ **addAll**(`states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[addAll](DBaseStateSetImpl.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L76)

▸ **addAll**(...`states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | `string`[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[addAll](DBaseStateSetImpl.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L77)

___

### begin

▸ `Protected` **begin**(): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Overrides

[DBaseStateSetImpl](DBaseStateSetImpl.md).[begin](DBaseStateSetImpl.md#begin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L51)

___

### checkAdded

▸ `Protected` **checkAdded**(`added`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | `string` |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[checkAdded](DBaseStateSetImpl.md#checkadded)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L53)

___

### checkAddeds

▸ `Protected` **checkAddeds**(`states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[checkAddeds](DBaseStateSetImpl.md#checkaddeds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L66)

___

### checkRemoved

▸ `Protected` **checkRemoved**(`removed`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `removed` | `string` |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[checkRemoved](DBaseStateSetImpl.md#checkremoved)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L93)

___

### checkRemoveds

▸ `Protected` **checkRemoveds**(`states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[checkRemoveds](DBaseStateSetImpl.md#checkremoveds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L106)

___

### clear

▸ **clear**(): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[clear](DBaseStateSetImpl.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L152)

___

### copy

▸ **copy**(`other`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[copy](DBaseStateSetImpl.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L241)

___

### each

▸ **each**(`iteratee`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`state`: `string`) => `void` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[each](DBaseStateSetImpl.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L230)

___

### end

▸ `Protected` **end**(): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Overrides

[DBaseStateSetImpl](DBaseStateSetImpl.md).[end](DBaseStateSetImpl.md#end)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L59)

___

### in

▸ **in**(`state`): `boolean`

Returns true if the given state is on or if one of the parents has the given state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[in](DBaseStateSetImpl.md#in)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L25)

___

### is

▸ **is**(`state`): `boolean`

Returns true if the given state is on.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[is](DBaseStateSetImpl.md#is)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L21)

___

### lock

▸ **lock**(`callOnChange?`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

Locks this state set.
The locked state set delays calling the change event handler.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callOnChange?` | `boolean` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Overrides

[DBaseStateSetImpl](DBaseStateSetImpl.md).[lock](DBaseStateSetImpl.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L29)

___

### on

▸ **on**(`state`): `boolean`

Returns true if the direct parent has the given state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[on](DBaseStateSetImpl.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L29)

___

### onChange

▸ `Protected` **onChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L70)

___

### onParentChange

▸ **onParentChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[onParentChange](DBaseStateSetImpl.md#onparentchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:271](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L271)

___

### remove

▸ **remove**(`state`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[remove](DBaseStateSetImpl.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L97)

___

### removeAll

▸ **removeAll**(`states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[removeAll](DBaseStateSetImpl.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L116)

▸ **removeAll**(...`states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | `string`[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[removeAll](DBaseStateSetImpl.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L117)

▸ **removeAll**(`matcher`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher` | (`state`: `string`) => `boolean` \| `void` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[removeAll](DBaseStateSetImpl.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L118)

___

### set

▸ **set**(`state`, `isOn`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `isOn` | `boolean` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[set](DBaseStateSetImpl.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L162)

▸ **set**(`added`, `removed`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | ``null`` \| `string` |
| `removed` | ``null`` \| `string` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[set](DBaseStateSetImpl.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L163)

___

### setAll

▸ **setAll**(`states`, `isOn`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |
| `isOn` | `boolean` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[setAll](DBaseStateSetImpl.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L193)

▸ **setAll**(`addeds`, `removeds`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | ``null`` \| `string`[] |
| `removeds` | ``null`` \| `string`[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[setAll](DBaseStateSetImpl.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L194)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[size](DBaseStateSetImpl.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L237)

___

### toObject

▸ **toObject**(): [`DBaseStateSetLike`](../interfaces/DBaseStateSetLike.md)

#### Returns

[`DBaseStateSetLike`](../interfaces/DBaseStateSetLike.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[toObject](DBaseStateSetImpl.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:642](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L642)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[toString](DBaseStateSetImpl.md#tostring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:652](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L652)

___

### under

▸ **under**(`state`): `boolean`

Returns true if one of the parents has the given state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[under](DBaseStateSetImpl.md#under)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L33)

___

### unlock

▸ **unlock**(): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

Unlocks this state set and calls the change event handler if this state set has changed.
However, if this state set is locked with the `callOnChange` of false, the change event handler is not called.

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Overrides

[DBaseStateSetImpl](DBaseStateSetImpl.md).[unlock](DBaseStateSetImpl.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L37)
