[Winter Cardinal UI - v0.407.0](../index.md) / DBaseStateSetImplObservable

# Class: DBaseStateSetImplObservable

## Hierarchy

- [`DBaseStateSetImpl`](DBaseStateSetImpl.md)

  ↳ **`DBaseStateSetImplObservable`**

  ↳↳ [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

## Table of contents

### Constructors

- [constructor](DBaseStateSetImplObservable.md#constructor)

### Properties

- [\_blinker](DBaseStateSetImplObservable.md#_blinker)
- [\_doSave](DBaseStateSetImplObservable.md#_dosave)
- [\_isLocked](DBaseStateSetImplObservable.md#_islocked)
- [\_isSaved](DBaseStateSetImplObservable.md#_issaved)
- [\_local](DBaseStateSetImplObservable.md#_local)
- [\_onChange](DBaseStateSetImplObservable.md#_onchange)
- [\_parent](DBaseStateSetImplObservable.md#_parent)
- [\_saved](DBaseStateSetImplObservable.md#_saved)
- [\_ticker](DBaseStateSetImplObservable.md#_ticker)

### Accessors

- [blinker](DBaseStateSetImplObservable.md#blinker)
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
- [inProcessing](DBaseStateSetImplObservable.md#inprocessing)
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
- [isProcessing](DBaseStateSetImplObservable.md#isprocessing)
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
- [onProcessing](DBaseStateSetImplObservable.md#onprocessing)
- [onReadOnly](DBaseStateSetImplObservable.md#onreadonly)
- [onSucceeded](DBaseStateSetImplObservable.md#onsucceeded)
- [onUnfocusable](DBaseStateSetImplObservable.md#onunfocusable)
- [onWarned](DBaseStateSetImplObservable.md#onwarned)
- [parent](DBaseStateSetImplObservable.md#parent)
- [saved](DBaseStateSetImplObservable.md#saved)
- [ticker](DBaseStateSetImplObservable.md#ticker)
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
- [underProcessing](DBaseStateSetImplObservable.md#underprocessing)
- [underReadOnly](DBaseStateSetImplObservable.md#underreadonly)
- [underSucceeded](DBaseStateSetImplObservable.md#undersucceeded)
- [underUnfocusable](DBaseStateSetImplObservable.md#underunfocusable)
- [underWarned](DBaseStateSetImplObservable.md#underwarned)

### Methods

- [add](DBaseStateSetImplObservable.md#add)
- [addAll](DBaseStateSetImplObservable.md#addall)
- [addAllObject](DBaseStateSetImplObservable.md#addallobject)
- [addAllString](DBaseStateSetImplObservable.md#addallstring)
- [begin](DBaseStateSetImplObservable.md#begin)
- [checkAdded](DBaseStateSetImplObservable.md#checkadded)
- [checkAddedsObject](DBaseStateSetImplObservable.md#checkaddedsobject)
- [checkAddedsString](DBaseStateSetImplObservable.md#checkaddedsstring)
- [checkRemoved](DBaseStateSetImplObservable.md#checkremoved)
- [checkRemovedsObject](DBaseStateSetImplObservable.md#checkremovedsobject)
- [checkRemovedsString](DBaseStateSetImplObservable.md#checkremovedsstring)
- [clear](DBaseStateSetImplObservable.md#clear)
- [copy](DBaseStateSetImplObservable.md#copy)
- [doSet](DBaseStateSetImplObservable.md#doset)
- [each](DBaseStateSetImplObservable.md#each)
- [end](DBaseStateSetImplObservable.md#end)
- [in](DBaseStateSetImplObservable.md#in)
- [is](DBaseStateSetImplObservable.md#is)
- [lock](DBaseStateSetImplObservable.md#lock)
- [newBlinker](DBaseStateSetImplObservable.md#newblinker)
- [newTicker](DBaseStateSetImplObservable.md#newticker)
- [on](DBaseStateSetImplObservable.md#on)
- [onChange](DBaseStateSetImplObservable.md#onchange)
- [onParentChange](DBaseStateSetImplObservable.md#onparentchange)
- [remove](DBaseStateSetImplObservable.md#remove)
- [removeAll](DBaseStateSetImplObservable.md#removeall)
- [removeAllMatcher](DBaseStateSetImplObservable.md#removeallmatcher)
- [removeAllObject](DBaseStateSetImplObservable.md#removeallobject)
- [removeAllString](DBaseStateSetImplObservable.md#removeallstring)
- [set](DBaseStateSetImplObservable.md#set)
- [setAll](DBaseStateSetImplObservable.md#setall)
- [setAllObject](DBaseStateSetImplObservable.md#setallobject)
- [setAllString](DBaseStateSetImplObservable.md#setallstring)
- [size](DBaseStateSetImplObservable.md#size)
- [toObject](DBaseStateSetImplObservable.md#toobject)
- [toString](DBaseStateSetImplObservable.md#tostring)
- [under](DBaseStateSetImplObservable.md#under)
- [unlock](DBaseStateSetImplObservable.md#unlock)
- [valueOf](DBaseStateSetImplObservable.md#valueof)

## Constructors

### constructor

• **new DBaseStateSetImplObservable**(`onChange`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onChange` | [`DBaseStateSetImplObservableOnChange`](../index.md#dbasestatesetimplobservableonchange) |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Overrides

[DBaseStateSetImpl](DBaseStateSetImpl.md).[constructor](DBaseStateSetImpl.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L21)

## Properties

### \_blinker

• `Protected` `Optional` **\_blinker**: [`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[_blinker](DBaseStateSetImpl.md#_blinker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L23)

___

### \_doSave

• `Protected` **\_doSave**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L18)

___

### \_isLocked

• `Protected` **\_isLocked**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L16)

___

### \_isSaved

• `Protected` **\_isSaved**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L17)

___

### \_local

• `Protected` **\_local**: `Map`\<`string`, ``null`` \| `number`\>

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[_local](DBaseStateSetImpl.md#_local)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L21)

___

### \_onChange

• `Protected` **\_onChange**: [`DBaseStateSetImplObservableOnChange`](../index.md#dbasestatesetimplobservableonchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L15)

___

### \_parent

• `Protected` **\_parent**: ``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[_parent](DBaseStateSetImpl.md#_parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L22)

___

### \_saved

• `Protected` `Optional` **\_saved**: [`DBaseStateSetImpl`](DBaseStateSetImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L19)

___

### \_ticker

• `Protected` `Optional` **\_ticker**: [`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[_ticker](DBaseStateSetImpl.md#_ticker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L24)

## Accessors

### blinker

• `get` **blinker**(): [`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Returns

[`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Inherited from

DBaseStateSetImpl.blinker

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L54)

___

### inActive

• `get` **inActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L504)

___

### inAlternated

• `get` **inAlternated**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:848](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L848)

___

### inChanged

• `get` **inChanged**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:828](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L828)

___

### inDisabled

• `get` **inDisabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L584)

___

### inEnabled

• `get` **inEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L564)

___

### inFailed

• `get` **inFailed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L788)

___

### inFocusReverse

• `get` **inFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:668](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L668)

___

### inFocusRoot

• `get` **inFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:648](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L648)

___

### inFocusable

• `get` **inFocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:688](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L688)

___

### inFocused

• `get` **inFocused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L628)

___

### inGesturing

• `get` **inGesturing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L608)

___

### inHovered

• `get` **inHovered**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L484)

___

### inInvalid

• `get` **inInvalid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L728)

___

### inPressed

• `get` **inPressed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:524](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L524)

___

### inProcessing

• `get` **inProcessing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inProcessing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L748)

___

### inReadOnly

• `get` **inReadOnly**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L544)

___

### inSucceeded

• `get` **inSucceeded**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L768)

___

### inUnfocusable

• `get` **inUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:708](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L708)

___

### inWarned

• `get` **inWarned**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.inWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:808](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L808)

___

### isActionable

• `get` **isActionable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isActionable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L596)

___

### isActive

• `get` **isActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L496)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L500)

___

### isAlternated

• `get` **isAlternated**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:840](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L840)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:844](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L844)

___

### isChanged

• `get` **isChanged**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:820](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L820)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:824](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L824)

___

### isDisabled

• `get` **isDisabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L576)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L580)

___

### isEnabled

• `get` **isEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L556)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:560](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L560)

___

### isFailed

• `get` **isFailed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:780](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L780)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:784](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L784)

___

### isFocusReverse

• `get` **isFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:660](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L660)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:664](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L664)

___

### isFocusRoot

• `get` **isFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:640](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L640)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:644](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L644)

___

### isFocusable

• `get` **isFocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:680](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L680)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:684](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L684)

___

### isFocused

• `get` **isFocused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:620](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L620)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:624](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L624)

___

### isGesturing

• `get` **isGesturing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:600](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L600)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:604](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L604)

___

### isHovered

• `get` **isHovered**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:476](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L476)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:480](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L480)

___

### isInvalid

• `get` **isInvalid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:720](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L720)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:724](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L724)

___

### isPressed

• `get` **isPressed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L516)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L520)

___

### isProcessing

• `get` **isProcessing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isProcessing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L740)

• `set` **isProcessing**(`processing`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `processing` | `boolean` |

#### Returns

`void`

#### Inherited from

DBaseStateSetImpl.isProcessing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L744)

___

### isReadOnly

• `get` **isReadOnly**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L536)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:540](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L540)

___

### isSucceeded

• `get` **isSucceeded**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L760)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:764](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L764)

___

### isUnfocusable

• `get` **isUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:700](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L700)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L704)

___

### isWarned

• `get` **isWarned**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.isWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:800](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L800)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L804)

___

### local

• `get` **local**(): `Map`\<`string`, ``null`` \| `number`\>

#### Returns

`Map`\<`string`, ``null`` \| `number`\>

#### Inherited from

DBaseStateSetImpl.local

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L31)

___

### onActive

• `get` **onActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L508)

___

### onAlternated

• `get` **onAlternated**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L852)

___

### onChanged

• `get` **onChanged**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:832](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L832)

___

### onDisabled

• `get` **onDisabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L588)

___

### onEnabled

• `get` **onEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:568](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L568)

___

### onFailed

• `get` **onFailed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L792)

___

### onFocusReverse

• `get` **onFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L672)

___

### onFocusRoot

• `get` **onFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:652](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L652)

___

### onFocusable

• `get` **onFocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:692](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L692)

___

### onFocused

• `get` **onFocused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:632](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L632)

___

### onGesturing

• `get` **onGesturing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:612](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L612)

___

### onHovered

• `get` **onHovered**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L488)

___

### onInvalid

• `get` **onInvalid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:732](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L732)

___

### onPressed

• `get` **onPressed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:528](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L528)

___

### onProcessing

• `get` **onProcessing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onProcessing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:752](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L752)

___

### onReadOnly

• `get` **onReadOnly**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:548](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L548)

___

### onSucceeded

• `get` **onSucceeded**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L772)

___

### onUnfocusable

• `get` **onUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L712)

___

### onWarned

• `get` **onWarned**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.onWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:812](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L812)

___

### parent

• `get` **parent**(): ``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

DBaseStateSetImpl.parent

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L35)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L39)

___

### saved

• `get` **saved**(): [`DBaseStateSetImpl`](DBaseStateSetImpl.md)

#### Returns

[`DBaseStateSetImpl`](DBaseStateSetImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L42)

___

### ticker

• `get` **ticker**(): [`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Returns

[`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Inherited from

DBaseStateSetImpl.ticker

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L67)

___

### underActive

• `get` **underActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L512)

___

### underAlternated

• `get` **underAlternated**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:856](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L856)

___

### underChanged

• `get` **underChanged**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:836](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L836)

___

### underDisabled

• `get` **underDisabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L592)

___

### underEnabled

• `get` **underEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:572](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L572)

___

### underFailed

• `get` **underFailed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L796)

___

### underFocusReverse

• `get` **underFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:676](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L676)

___

### underFocusRoot

• `get` **underFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L656)

___

### underFocusable

• `get` **underFocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:696](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L696)

___

### underFocused

• `get` **underFocused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:636](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L636)

___

### underGesturing

• `get` **underGesturing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:616](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L616)

___

### underHovered

• `get` **underHovered**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:492](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L492)

___

### underInvalid

• `get` **underInvalid**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:736](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L736)

___

### underPressed

• `get` **underPressed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:532](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L532)

___

### underProcessing

• `get` **underProcessing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underProcessing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:756](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L756)

___

### underReadOnly

• `get` **underReadOnly**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L552)

___

### underSucceeded

• `get` **underSucceeded**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:776](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L776)

___

### underUnfocusable

• `get` **underUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:716](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L716)

___

### underWarned

• `get` **underWarned**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DBaseStateSetImpl.underWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:816](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L816)

## Methods

### add

▸ **add**(`state`, `value?`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `state` | `string` | `undefined` |
| `value` | ``null`` \| `number` | `null` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[add](DBaseStateSetImpl.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L120)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L152)

▸ **addAll**(`states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[addAll](DBaseStateSetImpl.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L153)

▸ **addAll**(`states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[addAll](DBaseStateSetImpl.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L154)

▸ **addAll**(`...states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | `string`[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[addAll](DBaseStateSetImpl.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L156)

▸ **addAll**(`...states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[addAll](DBaseStateSetImpl.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L157)

___

### addAllObject

▸ **addAllObject**(`states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[addAllObject](DBaseStateSetImpl.md#addallobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L189)

___

### addAllString

▸ **addAllString**(`states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[addAllString](DBaseStateSetImpl.md#addallstring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L177)

___

### begin

▸ **begin**(): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Overrides

[DBaseStateSetImpl](DBaseStateSetImpl.md).[begin](DBaseStateSetImpl.md#begin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L51)

___

### checkAdded

▸ **checkAdded**(`added`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | `string` |
| `value` | ``null`` \| `number` |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[checkAdded](DBaseStateSetImpl.md#checkadded)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L115)

___

### checkAddedsObject

▸ **checkAddedsObject**(`states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[checkAddedsObject](DBaseStateSetImpl.md#checkaddedsobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L140)

___

### checkAddedsString

▸ **checkAddedsString**(`states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[checkAddedsString](DBaseStateSetImpl.md#checkaddedsstring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L129)

___

### checkRemoved

▸ **checkRemoved**(`removed`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `removed` | `string` |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[checkRemoved](DBaseStateSetImpl.md#checkremoved)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L202)

___

### checkRemovedsObject

▸ **checkRemovedsObject**(`states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[checkRemovedsObject](DBaseStateSetImpl.md#checkremovedsobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L225)

___

### checkRemovedsString

▸ **checkRemovedsString**(`states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[checkRemovedsString](DBaseStateSetImpl.md#checkremovedsstring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L215)

___

### clear

▸ **clear**(): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[clear](DBaseStateSetImpl.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:429](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L429)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L462)

___

### doSet

▸ **doSet**(`added`, `value`, `removed?`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | ``null`` \| `string` |
| `value` | ``null`` \| `number` |
| `removed?` | ``null`` \| `string` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[doSet](DBaseStateSetImpl.md#doset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:345](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L345)

___

### each

▸ **each**(`iteratee`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`state`: `string`, `value`: ``null`` \| `number`) => `void` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[each](DBaseStateSetImpl.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L451)

___

### end

▸ **end**(): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Overrides

[DBaseStateSetImpl](DBaseStateSetImpl.md).[end](DBaseStateSetImpl.md#end)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L59)

___

### in

▸ **in**(`state`, `value?`): `boolean`

Returns true if the given state is on or if one of the parents has the given state.
If the given value is undefined, values assigned to states are ignored.
If the given value is not undefined, values assigned to states are taken into account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `string` | a state |
| `value?` | ``null`` \| `number` | a state value |

#### Returns

`boolean`

true if the given state is on or if one of the parents has the given state.

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[in](DBaseStateSetImpl.md#in)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L85)

___

### is

▸ **is**(`state`, `value?`): `boolean`

Returns true if the given state is on.
If the given value is undefined, values assigned to states are ignored.
If the given value is not undefined, values assigned to states are taken into account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `string` | a state |
| `value?` | ``null`` \| `number` | a state value |

#### Returns

`boolean`

true if the given state is on

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[is](DBaseStateSetImpl.md#is)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L80)

___

### lock

▸ **lock**(`callOnChange?`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

Locks this state set.
The locked state set delays calling the change event handler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callOnChange?` | `boolean` | false to stop calling the change event handler when unlocked |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

this

#### Overrides

[DBaseStateSetImpl](DBaseStateSetImpl.md).[lock](DBaseStateSetImpl.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L29)

___

### newBlinker

▸ **newBlinker**(): [`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Returns

[`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[newBlinker](DBaseStateSetImpl.md#newblinker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L63)

___

### newTicker

▸ **newTicker**(): [`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Returns

[`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[newTicker](DBaseStateSetImpl.md#newticker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L76)

___

### on

▸ **on**(`state`, `value?`): `boolean`

Returns true if the direct parent has the given state.
If the given value is undefined, values assigned to states are ignored.
If the given value is not undefined, values assigned to states are taken into account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `string` | a state |
| `value?` | ``null`` \| `number` | a state value |

#### Returns

`boolean`

true if the direct parent has the given state.

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[on](DBaseStateSetImpl.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L89)

___

### onChange

▸ **onChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:70](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L70)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L47)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L206)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L235)

▸ **removeAll**(`states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[removeAll](DBaseStateSetImpl.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L236)

▸ **removeAll**(`states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[removeAll](DBaseStateSetImpl.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L237)

▸ **removeAll**(`...states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | `string`[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[removeAll](DBaseStateSetImpl.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:239](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L239)

▸ **removeAll**(`...states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[removeAll](DBaseStateSetImpl.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L240)

▸ **removeAll**(`matcher`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher` | [`DBaseStateMatcher`](../index.md#dbasestatematcher) |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[removeAll](DBaseStateSetImpl.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L242)

___

### removeAllMatcher

▸ **removeAllMatcher**(`matcher`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher` | [`DBaseStateMatcher`](../index.md#dbasestatematcher) |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[removeAllMatcher](DBaseStateSetImpl.md#removeallmatcher)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:266](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L266)

___

### removeAllObject

▸ **removeAllObject**(`states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[removeAllObject](DBaseStateSetImpl.md#removeallobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L296)

___

### removeAllString

▸ **removeAllString**(`states`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[removeAllString](DBaseStateSetImpl.md#removeallstring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L284)

___

### set

▸ **set**(`state`, `on`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `on` | `boolean` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[set](DBaseStateSetImpl.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L308)

▸ **set**(`state`, `value`, `on`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `value` | ``null`` \| `number` |
| `on` | `boolean` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[set](DBaseStateSetImpl.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:309](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L309)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L311)

▸ **set**(`added`, `value`, `removed`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | ``null`` \| `string` |
| `value` | ``null`` \| `number` |
| `removed` | ``null`` \| `string` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[set](DBaseStateSetImpl.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:312](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L312)

___

### setAll

▸ **setAll**(`states`, `on`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |
| `on` | `boolean` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[setAll](DBaseStateSetImpl.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:362](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L362)

▸ **setAll**(`states`, `on`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `on` | `boolean` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[setAll](DBaseStateSetImpl.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L363)

▸ **setAll**(`states`, `on`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `on` | `boolean` |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[setAll](DBaseStateSetImpl.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:364](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L364)

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

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L366)

▸ **setAll**(`addeds`, `removeds`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | ``null`` \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `removeds` | ``null`` \| `string`[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[setAll](DBaseStateSetImpl.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L367)

▸ **setAll**(`addeds`, `removeds`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | ``null`` \| `string`[] \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `removeds` | ``null`` \| `string`[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[setAll](DBaseStateSetImpl.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:368](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L368)

___

### setAllObject

▸ **setAllObject**(`addeds`, `removeds`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `removeds` | `string`[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[setAllObject](DBaseStateSetImpl.md#setallobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:413](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L413)

___

### setAllString

▸ **setAllString**(`addeds`, `removeds`): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | `string`[] |
| `removeds` | `string`[] |

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[setAllString](DBaseStateSetImpl.md#setallstring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L398)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[size](DBaseStateSetImpl.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:458](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L458)

___

### toObject

▸ **toObject**(): [`DBaseStateSetLike`](../interfaces/DBaseStateSetLike.md)

#### Returns

[`DBaseStateSetLike`](../interfaces/DBaseStateSetLike.md)

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[toObject](DBaseStateSetImpl.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:860](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L860)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[toString](DBaseStateSetImpl.md#tostring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:870](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L870)

___

### under

▸ **under**(`state`, `value?`): `boolean`

Returns true if one of the parents has the given state.
If the given value is undefined, values assigned to states are ignored.
If the given value is not undefined, values assigned to states are taken into account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `string` | a state |
| `value?` | ``null`` \| `number` | a state value |

#### Returns

`boolean`

true if one of the parents has the given state.

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[under](DBaseStateSetImpl.md#under)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L94)

___

### unlock

▸ **unlock**(): [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

Unlocks this state set and calls the change event handler if this state set has changed.
However, if this state set is locked with the `callOnChange` of false, the change event handler is not called.

#### Returns

[`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

this

#### Overrides

[DBaseStateSetImpl](DBaseStateSetImpl.md).[unlock](DBaseStateSetImpl.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L37)

___

### valueOf

▸ **valueOf**(`state`, `def?`): `undefined` \| ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `def?` | ``null`` \| `number` |

#### Returns

`undefined` \| ``null`` \| `number`

#### Inherited from

[DBaseStateSetImpl](DBaseStateSetImpl.md).[valueOf](DBaseStateSetImpl.md#valueof)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L439)
