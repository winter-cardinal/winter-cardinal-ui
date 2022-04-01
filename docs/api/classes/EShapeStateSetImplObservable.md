[Winter Cardinal UI - v0.160.0](../index.md) / EShapeStateSetImplObservable

# Class: EShapeStateSetImplObservable

## Hierarchy

- [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

  ↳ **`EShapeStateSetImplObservable`**

## Implements

- [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

## Table of contents

### Constructors

- [constructor](EShapeStateSetImplObservable.md#constructor)

### Properties

- [\_doSave](EShapeStateSetImplObservable.md#_dosave)
- [\_isLocked](EShapeStateSetImplObservable.md#_islocked)
- [\_isSaved](EShapeStateSetImplObservable.md#_issaved)
- [\_local](EShapeStateSetImplObservable.md#_local)
- [\_onChange](EShapeStateSetImplObservable.md#_onchange)
- [\_parent](EShapeStateSetImplObservable.md#_parent)
- [\_saved](EShapeStateSetImplObservable.md#_saved)

### Accessors

- [inActivated](EShapeStateSetImplObservable.md#inactivated)
- [inActive](EShapeStateSetImplObservable.md#inactive)
- [inAlternated](EShapeStateSetImplObservable.md#inalternated)
- [inChanged](EShapeStateSetImplObservable.md#inchanged)
- [inClicked](EShapeStateSetImplObservable.md#inclicked)
- [inDeactivated](EShapeStateSetImplObservable.md#indeactivated)
- [inDisabled](EShapeStateSetImplObservable.md#indisabled)
- [inDown](EShapeStateSetImplObservable.md#indown)
- [inEnabled](EShapeStateSetImplObservable.md#inenabled)
- [inFailed](EShapeStateSetImplObservable.md#infailed)
- [inFocusReverse](EShapeStateSetImplObservable.md#infocusreverse)
- [inFocusRoot](EShapeStateSetImplObservable.md#infocusroot)
- [inFocusable](EShapeStateSetImplObservable.md#infocusable)
- [inFocused](EShapeStateSetImplObservable.md#infocused)
- [inGesturing](EShapeStateSetImplObservable.md#ingesturing)
- [inHovered](EShapeStateSetImplObservable.md#inhovered)
- [inInvalid](EShapeStateSetImplObservable.md#ininvalid)
- [inPressed](EShapeStateSetImplObservable.md#inpressed)
- [inReadOnly](EShapeStateSetImplObservable.md#inreadonly)
- [inSucceeded](EShapeStateSetImplObservable.md#insucceeded)
- [inUnfocusable](EShapeStateSetImplObservable.md#inunfocusable)
- [inUp](EShapeStateSetImplObservable.md#inup)
- [inWarned](EShapeStateSetImplObservable.md#inwarned)
- [isActionable](EShapeStateSetImplObservable.md#isactionable)
- [isActivated](EShapeStateSetImplObservable.md#isactivated)
- [isActive](EShapeStateSetImplObservable.md#isactive)
- [isAlternated](EShapeStateSetImplObservable.md#isalternated)
- [isChanged](EShapeStateSetImplObservable.md#ischanged)
- [isClicked](EShapeStateSetImplObservable.md#isclicked)
- [isDeactivated](EShapeStateSetImplObservable.md#isdeactivated)
- [isDisabled](EShapeStateSetImplObservable.md#isdisabled)
- [isDown](EShapeStateSetImplObservable.md#isdown)
- [isEnabled](EShapeStateSetImplObservable.md#isenabled)
- [isFailed](EShapeStateSetImplObservable.md#isfailed)
- [isFocusReverse](EShapeStateSetImplObservable.md#isfocusreverse)
- [isFocusRoot](EShapeStateSetImplObservable.md#isfocusroot)
- [isFocusable](EShapeStateSetImplObservable.md#isfocusable)
- [isFocused](EShapeStateSetImplObservable.md#isfocused)
- [isGesturing](EShapeStateSetImplObservable.md#isgesturing)
- [isHovered](EShapeStateSetImplObservable.md#ishovered)
- [isInvalid](EShapeStateSetImplObservable.md#isinvalid)
- [isPressed](EShapeStateSetImplObservable.md#ispressed)
- [isReadOnly](EShapeStateSetImplObservable.md#isreadonly)
- [isSucceeded](EShapeStateSetImplObservable.md#issucceeded)
- [isUnfocusable](EShapeStateSetImplObservable.md#isunfocusable)
- [isUp](EShapeStateSetImplObservable.md#isup)
- [isWarned](EShapeStateSetImplObservable.md#iswarned)
- [local](EShapeStateSetImplObservable.md#local)
- [onActivated](EShapeStateSetImplObservable.md#onactivated)
- [onActive](EShapeStateSetImplObservable.md#onactive)
- [onAlternated](EShapeStateSetImplObservable.md#onalternated)
- [onChanged](EShapeStateSetImplObservable.md#onchanged)
- [onClicked](EShapeStateSetImplObservable.md#onclicked)
- [onDeactivated](EShapeStateSetImplObservable.md#ondeactivated)
- [onDisabled](EShapeStateSetImplObservable.md#ondisabled)
- [onDown](EShapeStateSetImplObservable.md#ondown)
- [onEnabled](EShapeStateSetImplObservable.md#onenabled)
- [onFailed](EShapeStateSetImplObservable.md#onfailed)
- [onFocusReverse](EShapeStateSetImplObservable.md#onfocusreverse)
- [onFocusRoot](EShapeStateSetImplObservable.md#onfocusroot)
- [onFocusable](EShapeStateSetImplObservable.md#onfocusable)
- [onFocused](EShapeStateSetImplObservable.md#onfocused)
- [onGesturing](EShapeStateSetImplObservable.md#ongesturing)
- [onHovered](EShapeStateSetImplObservable.md#onhovered)
- [onInvalid](EShapeStateSetImplObservable.md#oninvalid)
- [onPressed](EShapeStateSetImplObservable.md#onpressed)
- [onReadOnly](EShapeStateSetImplObservable.md#onreadonly)
- [onSucceeded](EShapeStateSetImplObservable.md#onsucceeded)
- [onUnfocusable](EShapeStateSetImplObservable.md#onunfocusable)
- [onUp](EShapeStateSetImplObservable.md#onup)
- [onWarned](EShapeStateSetImplObservable.md#onwarned)
- [parent](EShapeStateSetImplObservable.md#parent)
- [saved](EShapeStateSetImplObservable.md#saved)
- [underActivated](EShapeStateSetImplObservable.md#underactivated)
- [underActive](EShapeStateSetImplObservable.md#underactive)
- [underAlternated](EShapeStateSetImplObservable.md#underalternated)
- [underChanged](EShapeStateSetImplObservable.md#underchanged)
- [underClicked](EShapeStateSetImplObservable.md#underclicked)
- [underDeactivated](EShapeStateSetImplObservable.md#underdeactivated)
- [underDisabled](EShapeStateSetImplObservable.md#underdisabled)
- [underDown](EShapeStateSetImplObservable.md#underdown)
- [underEnabled](EShapeStateSetImplObservable.md#underenabled)
- [underFailed](EShapeStateSetImplObservable.md#underfailed)
- [underFocusReverse](EShapeStateSetImplObservable.md#underfocusreverse)
- [underFocusRoot](EShapeStateSetImplObservable.md#underfocusroot)
- [underFocusable](EShapeStateSetImplObservable.md#underfocusable)
- [underFocused](EShapeStateSetImplObservable.md#underfocused)
- [underGesturing](EShapeStateSetImplObservable.md#undergesturing)
- [underHovered](EShapeStateSetImplObservable.md#underhovered)
- [underInvalid](EShapeStateSetImplObservable.md#underinvalid)
- [underPressed](EShapeStateSetImplObservable.md#underpressed)
- [underReadOnly](EShapeStateSetImplObservable.md#underreadonly)
- [underSucceeded](EShapeStateSetImplObservable.md#undersucceeded)
- [underUnfocusable](EShapeStateSetImplObservable.md#underunfocusable)
- [underUp](EShapeStateSetImplObservable.md#underup)
- [underWarned](EShapeStateSetImplObservable.md#underwarned)

### Methods

- [add](EShapeStateSetImplObservable.md#add)
- [addAll](EShapeStateSetImplObservable.md#addall)
- [begin](EShapeStateSetImplObservable.md#begin)
- [checkAdded](EShapeStateSetImplObservable.md#checkadded)
- [checkAddeds](EShapeStateSetImplObservable.md#checkaddeds)
- [checkRemoved](EShapeStateSetImplObservable.md#checkremoved)
- [checkRemoveds](EShapeStateSetImplObservable.md#checkremoveds)
- [clear](EShapeStateSetImplObservable.md#clear)
- [copy](EShapeStateSetImplObservable.md#copy)
- [each](EShapeStateSetImplObservable.md#each)
- [end](EShapeStateSetImplObservable.md#end)
- [in](EShapeStateSetImplObservable.md#in)
- [is](EShapeStateSetImplObservable.md#is)
- [lock](EShapeStateSetImplObservable.md#lock)
- [on](EShapeStateSetImplObservable.md#on)
- [onChange](EShapeStateSetImplObservable.md#onchange)
- [onParentChange](EShapeStateSetImplObservable.md#onparentchange)
- [remove](EShapeStateSetImplObservable.md#remove)
- [removeAll](EShapeStateSetImplObservable.md#removeall)
- [set](EShapeStateSetImplObservable.md#set)
- [setAll](EShapeStateSetImplObservable.md#setall)
- [size](EShapeStateSetImplObservable.md#size)
- [toObject](EShapeStateSetImplObservable.md#toobject)
- [toString](EShapeStateSetImplObservable.md#tostring)
- [under](EShapeStateSetImplObservable.md#under)
- [unlock](EShapeStateSetImplObservable.md#unlock)

## Constructors

### constructor

• **new EShapeStateSetImplObservable**(`onChange`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onChange` | [`DBaseStateSetImplObservableOnChange`](../index.md#dbasestatesetimplobservableonchange) |

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[constructor](DBaseStateSetImplObservable.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L21)

## Properties

### \_doSave

• `Protected` **\_doSave**: `boolean`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_doSave](DBaseStateSetImplObservable.md#_dosave)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L18)

___

### \_isLocked

• `Protected` **\_isLocked**: `number`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_isLocked](DBaseStateSetImplObservable.md#_islocked)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L16)

___

### \_isSaved

• `Protected` **\_isSaved**: `boolean`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_isSaved](DBaseStateSetImplObservable.md#_issaved)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L17)

___

### \_local

• `Protected` **\_local**: `Set`<`string`\>

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_local](DBaseStateSetImplObservable.md#_local)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L13)

___

### \_onChange

• `Protected` **\_onChange**: [`DBaseStateSetImplObservableOnChange`](../index.md#dbasestatesetimplobservableonchange)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_onChange](DBaseStateSetImplObservable.md#_onchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L15)

___

### \_parent

• `Protected` **\_parent**: ``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_parent](DBaseStateSetImplObservable.md#_parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L14)

___

### \_saved

• `Protected` `Optional` **\_saved**: [`DBaseStateSetImpl`](DBaseStateSetImpl.md)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_saved](DBaseStateSetImplObservable.md#_saved)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L19)

## Accessors

### inActivated

• `get` **inActivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inActivated](../interfaces/EShapeStateSet.md#inactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L96)

___

### inActive

• `get` **inActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inActive](../interfaces/EShapeStateSet.md#inactive)

#### Inherited from

DBaseStateSetImplObservable.inActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L306)

___

### inAlternated

• `get` **inAlternated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inAlternated](../interfaces/EShapeStateSet.md#inalternated)

#### Inherited from

DBaseStateSetImplObservable.inAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:630](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L630)

___

### inChanged

• `get` **inChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inChanged](../interfaces/EShapeStateSet.md#inchanged)

#### Inherited from

DBaseStateSetImplObservable.inChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:610](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L610)

___

### inClicked

• `get` **inClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inClicked](../interfaces/EShapeStateSet.md#inclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L36)

___

### inDeactivated

• `get` **inDeactivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inDeactivated](../interfaces/EShapeStateSet.md#indeactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L116)

___

### inDisabled

• `get` **inDisabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inDisabled](../interfaces/EShapeStateSet.md#indisabled)

#### Inherited from

DBaseStateSetImplObservable.inDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L386)

___

### inDown

• `get` **inDown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inDown](../interfaces/EShapeStateSet.md#indown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L56)

___

### inEnabled

• `get` **inEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inEnabled](../interfaces/EShapeStateSet.md#inenabled)

#### Inherited from

DBaseStateSetImplObservable.inEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L366)

___

### inFailed

• `get` **inFailed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inFailed](../interfaces/EShapeStateSet.md#infailed)

#### Inherited from

DBaseStateSetImplObservable.inFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:570](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L570)

___

### inFocusReverse

• `get` **inFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inFocusReverse](../interfaces/EShapeStateSet.md#infocusreverse)

#### Inherited from

DBaseStateSetImplObservable.inFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:470](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L470)

___

### inFocusRoot

• `get` **inFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inFocusRoot](../interfaces/EShapeStateSet.md#infocusroot)

#### Inherited from

DBaseStateSetImplObservable.inFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:450](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L450)

___

### inFocusable

• `get` **inFocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inFocusable](../interfaces/EShapeStateSet.md#infocusable)

#### Inherited from

DBaseStateSetImplObservable.inFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:490](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L490)

___

### inFocused

• `get` **inFocused**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inFocused](../interfaces/EShapeStateSet.md#infocused)

#### Inherited from

DBaseStateSetImplObservable.inFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:430](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L430)

___

### inGesturing

• `get` **inGesturing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inGesturing](../interfaces/EShapeStateSet.md#ingesturing)

#### Inherited from

DBaseStateSetImplObservable.inGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:410](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L410)

___

### inHovered

• `get` **inHovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inHovered](../interfaces/EShapeStateSet.md#inhovered)

#### Inherited from

DBaseStateSetImplObservable.inHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L286)

___

### inInvalid

• `get` **inInvalid**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inInvalid](../interfaces/EShapeStateSet.md#ininvalid)

#### Inherited from

DBaseStateSetImplObservable.inInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L530)

___

### inPressed

• `get` **inPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inPressed](../interfaces/EShapeStateSet.md#inpressed)

#### Inherited from

DBaseStateSetImplObservable.inPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:326](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L326)

___

### inReadOnly

• `get` **inReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inReadOnly](../interfaces/EShapeStateSet.md#inreadonly)

#### Inherited from

DBaseStateSetImplObservable.inReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L346)

___

### inSucceeded

• `get` **inSucceeded**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inSucceeded](../interfaces/EShapeStateSet.md#insucceeded)

#### Inherited from

DBaseStateSetImplObservable.inSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:550](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L550)

___

### inUnfocusable

• `get` **inUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inUnfocusable](../interfaces/EShapeStateSet.md#inunfocusable)

#### Inherited from

DBaseStateSetImplObservable.inUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:510](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L510)

___

### inUp

• `get` **inUp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inUp](../interfaces/EShapeStateSet.md#inup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L76)

___

### inWarned

• `get` **inWarned**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inWarned](../interfaces/EShapeStateSet.md#inwarned)

#### Inherited from

DBaseStateSetImplObservable.inWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:590](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L590)

___

### isActionable

• `get` **isActionable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isActionable](../interfaces/EShapeStateSet.md#isactionable)

#### Inherited from

DBaseStateSetImplObservable.isActionable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L398)

___

### isActivated

• `get` **isActivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isActivated](../interfaces/EShapeStateSet.md#isactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L88)

• `set` **isActivated**(`isActivated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isActivated` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isActivated](../interfaces/EShapeStateSet.md#isactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L92)

___

### isActive

• `get` **isActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isActive](../interfaces/EShapeStateSet.md#isactive)

#### Inherited from

DBaseStateSetImplObservable.isActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:298](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L298)

• `set` **isActive**(`isActive`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isActive` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isActive](../interfaces/EShapeStateSet.md#isactive)

#### Inherited from

DBaseStateSetImplObservable.isActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:302](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L302)

___

### isAlternated

• `get` **isAlternated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isAlternated](../interfaces/EShapeStateSet.md#isalternated)

#### Inherited from

DBaseStateSetImplObservable.isAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:622](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L622)

• `set` **isAlternated**(`isAlternated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isAlternated` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isAlternated](../interfaces/EShapeStateSet.md#isalternated)

#### Inherited from

DBaseStateSetImplObservable.isAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:626](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L626)

___

### isChanged

• `get` **isChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isChanged](../interfaces/EShapeStateSet.md#ischanged)

#### Inherited from

DBaseStateSetImplObservable.isChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:602](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L602)

• `set` **isChanged**(`isChanged`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isChanged` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isChanged](../interfaces/EShapeStateSet.md#ischanged)

#### Inherited from

DBaseStateSetImplObservable.isChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:606](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L606)

___

### isClicked

• `get` **isClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isClicked](../interfaces/EShapeStateSet.md#isclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L28)

• `set` **isClicked**(`isClicked`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isClicked` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isClicked](../interfaces/EShapeStateSet.md#isclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L32)

___

### isDeactivated

• `get` **isDeactivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isDeactivated](../interfaces/EShapeStateSet.md#isdeactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L108)

• `set` **isDeactivated**(`isDeactivated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDeactivated` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isDeactivated](../interfaces/EShapeStateSet.md#isdeactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L112)

___

### isDisabled

• `get` **isDisabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isDisabled](../interfaces/EShapeStateSet.md#isdisabled)

#### Inherited from

DBaseStateSetImplObservable.isDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:378](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L378)

• `set` **isDisabled**(`isDisabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isDisabled](../interfaces/EShapeStateSet.md#isdisabled)

#### Inherited from

DBaseStateSetImplObservable.isDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:382](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L382)

___

### isDown

• `get` **isDown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isDown](../interfaces/EShapeStateSet.md#isdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L48)

• `set` **isDown**(`isDown`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDown` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isDown](../interfaces/EShapeStateSet.md#isdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L52)

___

### isEnabled

• `get` **isEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isEnabled](../interfaces/EShapeStateSet.md#isenabled)

#### Inherited from

DBaseStateSetImplObservable.isEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:358](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L358)

• `set` **isEnabled**(`isEnabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isEnabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isEnabled](../interfaces/EShapeStateSet.md#isenabled)

#### Inherited from

DBaseStateSetImplObservable.isEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:362](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L362)

___

### isFailed

• `get` **isFailed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFailed](../interfaces/EShapeStateSet.md#isfailed)

#### Inherited from

DBaseStateSetImplObservable.isFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:562](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L562)

• `set` **isFailed**(`failed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `failed` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFailed](../interfaces/EShapeStateSet.md#isfailed)

#### Inherited from

DBaseStateSetImplObservable.isFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:566](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L566)

___

### isFocusReverse

• `get` **isFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocusReverse](../interfaces/EShapeStateSet.md#isfocusreverse)

#### Inherited from

DBaseStateSetImplObservable.isFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L462)

• `set` **isFocusReverse**(`isFocusReverse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocusReverse` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocusReverse](../interfaces/EShapeStateSet.md#isfocusreverse)

#### Inherited from

DBaseStateSetImplObservable.isFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:466](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L466)

___

### isFocusRoot

• `get` **isFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocusRoot](../interfaces/EShapeStateSet.md#isfocusroot)

#### Inherited from

DBaseStateSetImplObservable.isFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:442](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L442)

• `set` **isFocusRoot**(`isFocusRoot`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocusRoot` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocusRoot](../interfaces/EShapeStateSet.md#isfocusroot)

#### Inherited from

DBaseStateSetImplObservable.isFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:446](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L446)

___

### isFocusable

• `get` **isFocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocusable](../interfaces/EShapeStateSet.md#isfocusable)

#### Inherited from

DBaseStateSetImplObservable.isFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:482](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L482)

• `set` **isFocusable**(`isFocusable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocusable` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocusable](../interfaces/EShapeStateSet.md#isfocusable)

#### Inherited from

DBaseStateSetImplObservable.isFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:486](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L486)

___

### isFocused

• `get` **isFocused**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocused](../interfaces/EShapeStateSet.md#isfocused)

#### Inherited from

DBaseStateSetImplObservable.isFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:422](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L422)

• `set` **isFocused**(`isFocused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocused](../interfaces/EShapeStateSet.md#isfocused)

#### Inherited from

DBaseStateSetImplObservable.isFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:426](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L426)

___

### isGesturing

• `get` **isGesturing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isGesturing](../interfaces/EShapeStateSet.md#isgesturing)

#### Inherited from

DBaseStateSetImplObservable.isGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:402](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L402)

• `set` **isGesturing**(`isGesturing`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isGesturing` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isGesturing](../interfaces/EShapeStateSet.md#isgesturing)

#### Inherited from

DBaseStateSetImplObservable.isGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:406](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L406)

___

### isHovered

• `get` **isHovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isHovered](../interfaces/EShapeStateSet.md#ishovered)

#### Inherited from

DBaseStateSetImplObservable.isHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L278)

• `set` **isHovered**(`isHovered`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isHovered` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isHovered](../interfaces/EShapeStateSet.md#ishovered)

#### Inherited from

DBaseStateSetImplObservable.isHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:282](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L282)

___

### isInvalid

• `get` **isInvalid**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isInvalid](../interfaces/EShapeStateSet.md#isinvalid)

#### Inherited from

DBaseStateSetImplObservable.isInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:522](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L522)

• `set` **isInvalid**(`invalid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `invalid` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isInvalid](../interfaces/EShapeStateSet.md#isinvalid)

#### Inherited from

DBaseStateSetImplObservable.isInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:526](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L526)

___

### isPressed

• `get` **isPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isPressed](../interfaces/EShapeStateSet.md#ispressed)

#### Inherited from

DBaseStateSetImplObservable.isPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:318](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L318)

• `set` **isPressed**(`isPressed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isPressed` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isPressed](../interfaces/EShapeStateSet.md#ispressed)

#### Inherited from

DBaseStateSetImplObservable.isPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:322](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L322)

___

### isReadOnly

• `get` **isReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isReadOnly](../interfaces/EShapeStateSet.md#isreadonly)

#### Inherited from

DBaseStateSetImplObservable.isReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:338](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L338)

• `set` **isReadOnly**(`isReadOnly`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReadOnly` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isReadOnly](../interfaces/EShapeStateSet.md#isreadonly)

#### Inherited from

DBaseStateSetImplObservable.isReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:342](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L342)

___

### isSucceeded

• `get` **isSucceeded**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isSucceeded](../interfaces/EShapeStateSet.md#issucceeded)

#### Inherited from

DBaseStateSetImplObservable.isSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:542](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L542)

• `set` **isSucceeded**(`succeeded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `succeeded` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isSucceeded](../interfaces/EShapeStateSet.md#issucceeded)

#### Inherited from

DBaseStateSetImplObservable.isSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:546](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L546)

___

### isUnfocusable

• `get` **isUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isUnfocusable](../interfaces/EShapeStateSet.md#isunfocusable)

#### Inherited from

DBaseStateSetImplObservable.isUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:502](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L502)

• `set` **isUnfocusable**(`unfocusable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unfocusable` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isUnfocusable](../interfaces/EShapeStateSet.md#isunfocusable)

#### Inherited from

DBaseStateSetImplObservable.isUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:506](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L506)

___

### isUp

• `get` **isUp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isUp](../interfaces/EShapeStateSet.md#isup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L68)

• `set` **isUp**(`isUp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isUp` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isUp](../interfaces/EShapeStateSet.md#isup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L72)

___

### isWarned

• `get` **isWarned**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isWarned](../interfaces/EShapeStateSet.md#iswarned)

#### Inherited from

DBaseStateSetImplObservable.isWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:582](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L582)

• `set` **isWarned**(`isWarned`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isWarned` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isWarned](../interfaces/EShapeStateSet.md#iswarned)

#### Inherited from

DBaseStateSetImplObservable.isWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:586](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L586)

___

### local

• `get` **local**(): `Set`<`string`\>

#### Returns

`Set`<`string`\>

#### Inherited from

DBaseStateSetImplObservable.local

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:255](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L255)

___

### onActivated

• `get` **onActivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onActivated](../interfaces/EShapeStateSet.md#onactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L100)

___

### onActive

• `get` **onActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onActive](../interfaces/EShapeStateSet.md#onactive)

#### Inherited from

DBaseStateSetImplObservable.onActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:310](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L310)

___

### onAlternated

• `get` **onAlternated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onAlternated](../interfaces/EShapeStateSet.md#onalternated)

#### Inherited from

DBaseStateSetImplObservable.onAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:634](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L634)

___

### onChanged

• `get` **onChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onChanged](../interfaces/EShapeStateSet.md#onchanged)

#### Inherited from

DBaseStateSetImplObservable.onChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:614](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L614)

___

### onClicked

• `get` **onClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onClicked](../interfaces/EShapeStateSet.md#onclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L40)

___

### onDeactivated

• `get` **onDeactivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onDeactivated](../interfaces/EShapeStateSet.md#ondeactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L120)

___

### onDisabled

• `get` **onDisabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onDisabled](../interfaces/EShapeStateSet.md#ondisabled)

#### Inherited from

DBaseStateSetImplObservable.onDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:390](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L390)

___

### onDown

• `get` **onDown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onDown](../interfaces/EShapeStateSet.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L60)

___

### onEnabled

• `get` **onEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onEnabled](../interfaces/EShapeStateSet.md#onenabled)

#### Inherited from

DBaseStateSetImplObservable.onEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:370](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L370)

___

### onFailed

• `get` **onFailed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onFailed](../interfaces/EShapeStateSet.md#onfailed)

#### Inherited from

DBaseStateSetImplObservable.onFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:574](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L574)

___

### onFocusReverse

• `get` **onFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onFocusReverse](../interfaces/EShapeStateSet.md#onfocusreverse)

#### Inherited from

DBaseStateSetImplObservable.onFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:474](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L474)

___

### onFocusRoot

• `get` **onFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onFocusRoot](../interfaces/EShapeStateSet.md#onfocusroot)

#### Inherited from

DBaseStateSetImplObservable.onFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:454](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L454)

___

### onFocusable

• `get` **onFocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onFocusable](../interfaces/EShapeStateSet.md#onfocusable)

#### Inherited from

DBaseStateSetImplObservable.onFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:494](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L494)

___

### onFocused

• `get` **onFocused**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onFocused](../interfaces/EShapeStateSet.md#onfocused)

#### Inherited from

DBaseStateSetImplObservable.onFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:434](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L434)

___

### onGesturing

• `get` **onGesturing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onGesturing](../interfaces/EShapeStateSet.md#ongesturing)

#### Inherited from

DBaseStateSetImplObservable.onGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:414](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L414)

___

### onHovered

• `get` **onHovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onHovered](../interfaces/EShapeStateSet.md#onhovered)

#### Inherited from

DBaseStateSetImplObservable.onHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:290](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L290)

___

### onInvalid

• `get` **onInvalid**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onInvalid](../interfaces/EShapeStateSet.md#oninvalid)

#### Inherited from

DBaseStateSetImplObservable.onInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:534](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L534)

___

### onPressed

• `get` **onPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onPressed](../interfaces/EShapeStateSet.md#onpressed)

#### Inherited from

DBaseStateSetImplObservable.onPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:330](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L330)

___

### onReadOnly

• `get` **onReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onReadOnly](../interfaces/EShapeStateSet.md#onreadonly)

#### Inherited from

DBaseStateSetImplObservable.onReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:350](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L350)

___

### onSucceeded

• `get` **onSucceeded**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onSucceeded](../interfaces/EShapeStateSet.md#onsucceeded)

#### Inherited from

DBaseStateSetImplObservable.onSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:554](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L554)

___

### onUnfocusable

• `get` **onUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onUnfocusable](../interfaces/EShapeStateSet.md#onunfocusable)

#### Inherited from

DBaseStateSetImplObservable.onUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:514](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L514)

___

### onUp

• `get` **onUp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onUp](../interfaces/EShapeStateSet.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L80)

___

### onWarned

• `get` **onWarned**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onWarned](../interfaces/EShapeStateSet.md#onwarned)

#### Inherited from

DBaseStateSetImplObservable.onWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:594](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L594)

___

### parent

• `get` **parent**(): ``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[parent](../interfaces/EShapeStateSet.md#parent)

#### Inherited from

DBaseStateSetImplObservable.parent

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L259)

• `set` **parent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | ``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[parent](../interfaces/EShapeStateSet.md#parent)

#### Inherited from

DBaseStateSetImplObservable.parent

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L263)

___

### saved

• `Protected` `get` **saved**(): [`DBaseStateSetImpl`](DBaseStateSetImpl.md)

#### Returns

[`DBaseStateSetImpl`](DBaseStateSetImpl.md)

#### Inherited from

DBaseStateSetImplObservable.saved

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L42)

___

### underActivated

• `get` **underActivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underActivated](../interfaces/EShapeStateSet.md#underactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L104)

___

### underActive

• `get` **underActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underActive](../interfaces/EShapeStateSet.md#underactive)

#### Inherited from

DBaseStateSetImplObservable.underActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:314](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L314)

___

### underAlternated

• `get` **underAlternated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underAlternated](../interfaces/EShapeStateSet.md#underalternated)

#### Inherited from

DBaseStateSetImplObservable.underAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:638](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L638)

___

### underChanged

• `get` **underChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underChanged](../interfaces/EShapeStateSet.md#underchanged)

#### Inherited from

DBaseStateSetImplObservable.underChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:618](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L618)

___

### underClicked

• `get` **underClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underClicked](../interfaces/EShapeStateSet.md#underclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L44)

___

### underDeactivated

• `get` **underDeactivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underDeactivated](../interfaces/EShapeStateSet.md#underdeactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L124)

___

### underDisabled

• `get` **underDisabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underDisabled](../interfaces/EShapeStateSet.md#underdisabled)

#### Inherited from

DBaseStateSetImplObservable.underDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L394)

___

### underDown

• `get` **underDown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underDown](../interfaces/EShapeStateSet.md#underdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L64)

___

### underEnabled

• `get` **underEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underEnabled](../interfaces/EShapeStateSet.md#underenabled)

#### Inherited from

DBaseStateSetImplObservable.underEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:374](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L374)

___

### underFailed

• `get` **underFailed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underFailed](../interfaces/EShapeStateSet.md#underfailed)

#### Inherited from

DBaseStateSetImplObservable.underFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:578](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L578)

___

### underFocusReverse

• `get` **underFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underFocusReverse](../interfaces/EShapeStateSet.md#underfocusreverse)

#### Inherited from

DBaseStateSetImplObservable.underFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:478](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L478)

___

### underFocusRoot

• `get` **underFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underFocusRoot](../interfaces/EShapeStateSet.md#underfocusroot)

#### Inherited from

DBaseStateSetImplObservable.underFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:458](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L458)

___

### underFocusable

• `get` **underFocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underFocusable](../interfaces/EShapeStateSet.md#underfocusable)

#### Inherited from

DBaseStateSetImplObservable.underFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:498](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L498)

___

### underFocused

• `get` **underFocused**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underFocused](../interfaces/EShapeStateSet.md#underfocused)

#### Inherited from

DBaseStateSetImplObservable.underFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:438](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L438)

___

### underGesturing

• `get` **underGesturing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underGesturing](../interfaces/EShapeStateSet.md#undergesturing)

#### Inherited from

DBaseStateSetImplObservable.underGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:418](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L418)

___

### underHovered

• `get` **underHovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underHovered](../interfaces/EShapeStateSet.md#underhovered)

#### Inherited from

DBaseStateSetImplObservable.underHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:294](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L294)

___

### underInvalid

• `get` **underInvalid**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underInvalid](../interfaces/EShapeStateSet.md#underinvalid)

#### Inherited from

DBaseStateSetImplObservable.underInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:538](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L538)

___

### underPressed

• `get` **underPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underPressed](../interfaces/EShapeStateSet.md#underpressed)

#### Inherited from

DBaseStateSetImplObservable.underPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:334](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L334)

___

### underReadOnly

• `get` **underReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underReadOnly](../interfaces/EShapeStateSet.md#underreadonly)

#### Inherited from

DBaseStateSetImplObservable.underReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L354)

___

### underSucceeded

• `get` **underSucceeded**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underSucceeded](../interfaces/EShapeStateSet.md#undersucceeded)

#### Inherited from

DBaseStateSetImplObservable.underSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:558](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L558)

___

### underUnfocusable

• `get` **underUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underUnfocusable](../interfaces/EShapeStateSet.md#underunfocusable)

#### Inherited from

DBaseStateSetImplObservable.underUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:518](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L518)

___

### underUp

• `get` **underUp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underUp](../interfaces/EShapeStateSet.md#underup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L84)

___

### underWarned

• `get` **underWarned**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underWarned](../interfaces/EShapeStateSet.md#underwarned)

#### Inherited from

DBaseStateSetImplObservable.underWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:598](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L598)

## Methods

### add

▸ **add**(`state`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[add](../interfaces/EShapeStateSet.md#add)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[add](DBaseStateSetImplObservable.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:57](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L57)

___

### addAll

▸ **addAll**(`states`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[addAll](../interfaces/EShapeStateSet.md#addall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[addAll](DBaseStateSetImplObservable.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L76)

▸ **addAll**(...`states`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | `string`[] |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[addAll](../interfaces/EShapeStateSet.md#addall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[addAll](DBaseStateSetImplObservable.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:77](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L77)

___

### begin

▸ `Protected` **begin**(): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[begin](DBaseStateSetImplObservable.md#begin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L51)

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

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[checkAdded](DBaseStateSetImplObservable.md#checkadded)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L53)

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

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[checkAddeds](DBaseStateSetImplObservable.md#checkaddeds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:66](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L66)

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

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[checkRemoved](DBaseStateSetImplObservable.md#checkremoved)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:93](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L93)

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

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[checkRemoveds](DBaseStateSetImplObservable.md#checkremoveds)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L106)

___

### clear

▸ **clear**(): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[clear](../interfaces/EShapeStateSet.md#clear)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[clear](DBaseStateSetImplObservable.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L152)

___

### copy

▸ **copy**(`other`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[copy](../interfaces/EShapeStateSet.md#copy)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[copy](DBaseStateSetImplObservable.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:241](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L241)

___

### each

▸ **each**(`iteratee`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`state`: `string`) => `void` |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[each](../interfaces/EShapeStateSet.md#each)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[each](DBaseStateSetImplObservable.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:230](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L230)

___

### end

▸ `Protected` **end**(): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[end](DBaseStateSetImplObservable.md#end)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L59)

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

true if the given state is on or if one of the parents has the given state.

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[in](../interfaces/EShapeStateSet.md#in)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[in](DBaseStateSetImplObservable.md#in)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L25)

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

true if the given state is on

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[is](../interfaces/EShapeStateSet.md#is)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[is](DBaseStateSetImplObservable.md#is)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L21)

___

### lock

▸ **lock**(`callOnChange?`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

Locks this state set.
The locked state set delays calling the change event handler.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callOnChange?` | `boolean` |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

this

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[lock](../interfaces/EShapeStateSet.md#lock)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[lock](DBaseStateSetImplObservable.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L29)

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

true if the direct parent has the given state.

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[on](../interfaces/EShapeStateSet.md#on)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[on](DBaseStateSetImplObservable.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L29)

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

#### Overrides

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[onChange](DBaseStateSetImplObservable.md#onchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L15)

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

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onParentChange](../interfaces/EShapeStateSet.md#onparentchange)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[onParentChange](DBaseStateSetImplObservable.md#onparentchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:271](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L271)

___

### remove

▸ **remove**(`state`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[remove](../interfaces/EShapeStateSet.md#remove)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[remove](DBaseStateSetImplObservable.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:97](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L97)

___

### removeAll

▸ **removeAll**(`states`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[removeAll](../interfaces/EShapeStateSet.md#removeall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[removeAll](DBaseStateSetImplObservable.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L116)

▸ **removeAll**(...`states`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | `string`[] |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[removeAll](../interfaces/EShapeStateSet.md#removeall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[removeAll](DBaseStateSetImplObservable.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:117](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L117)

▸ **removeAll**(`matcher`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher` | (`state`: `string`) => `boolean` \| `void` |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[removeAll](../interfaces/EShapeStateSet.md#removeall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[removeAll](DBaseStateSetImplObservable.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L118)

___

### set

▸ **set**(`state`, `isOn`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `isOn` | `boolean` |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[set](../interfaces/EShapeStateSet.md#set)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[set](DBaseStateSetImplObservable.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L162)

▸ **set**(`added`, `removed`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | ``null`` \| `string` |
| `removed` | ``null`` \| `string` |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[set](../interfaces/EShapeStateSet.md#set)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[set](DBaseStateSetImplObservable.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:163](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L163)

___

### setAll

▸ **setAll**(`states`, `isOn`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |
| `isOn` | `boolean` |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[setAll](../interfaces/EShapeStateSet.md#setall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[setAll](DBaseStateSetImplObservable.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:193](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L193)

▸ **setAll**(`addeds`, `removeds`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | ``null`` \| `string`[] |
| `removeds` | ``null`` \| `string`[] |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[setAll](../interfaces/EShapeStateSet.md#setall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[setAll](DBaseStateSetImplObservable.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:194](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L194)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[size](../interfaces/EShapeStateSet.md#size)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[size](DBaseStateSetImplObservable.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L237)

___

### toObject

▸ **toObject**(): [`DBaseStateSetLike`](../interfaces/DBaseStateSetLike.md)

#### Returns

[`DBaseStateSetLike`](../interfaces/DBaseStateSetLike.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[toObject](../interfaces/EShapeStateSet.md#toobject)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[toObject](DBaseStateSetImplObservable.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:642](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L642)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[toString](../interfaces/EShapeStateSet.md#tostring)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[toString](DBaseStateSetImplObservable.md#tostring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:652](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L652)

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

true if one of the parents has the given state.

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[under](../interfaces/EShapeStateSet.md#under)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[under](DBaseStateSetImplObservable.md#under)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L33)

___

### unlock

▸ **unlock**(): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

Unlocks this state set and calls the change event handler if this state set has changed.
However, if this state set is locked with the `callOnChange` of false, the change event handler is not called.

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

this

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[unlock](../interfaces/EShapeStateSet.md#unlock)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[unlock](DBaseStateSetImplObservable.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.160.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L37)
