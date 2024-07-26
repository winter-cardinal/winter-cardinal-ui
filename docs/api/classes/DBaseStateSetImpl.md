[Winter Cardinal UI - v0.442.0](../index.md) / DBaseStateSetImpl

# Class: DBaseStateSetImpl

## Hierarchy

- **`DBaseStateSetImpl`**

  ↳ [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

## Implements

- [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

## Table of contents

### Constructors

- [constructor](DBaseStateSetImpl.md#constructor)

### Properties

- [\_blinker](DBaseStateSetImpl.md#_blinker)
- [\_local](DBaseStateSetImpl.md#_local)
- [\_parent](DBaseStateSetImpl.md#_parent)
- [\_ticker](DBaseStateSetImpl.md#_ticker)

### Accessors

- [blinker](DBaseStateSetImpl.md#blinker)
- [inActive](DBaseStateSetImpl.md#inactive)
- [inAlternated](DBaseStateSetImpl.md#inalternated)
- [inChanged](DBaseStateSetImpl.md#inchanged)
- [inDisabled](DBaseStateSetImpl.md#indisabled)
- [inEnabled](DBaseStateSetImpl.md#inenabled)
- [inFailed](DBaseStateSetImpl.md#infailed)
- [inFocusReverse](DBaseStateSetImpl.md#infocusreverse)
- [inFocusRoot](DBaseStateSetImpl.md#infocusroot)
- [inFocusable](DBaseStateSetImpl.md#infocusable)
- [inFocused](DBaseStateSetImpl.md#infocused)
- [inGesturing](DBaseStateSetImpl.md#ingesturing)
- [inHovered](DBaseStateSetImpl.md#inhovered)
- [inInvalid](DBaseStateSetImpl.md#ininvalid)
- [inPressed](DBaseStateSetImpl.md#inpressed)
- [inProcessing](DBaseStateSetImpl.md#inprocessing)
- [inReadOnly](DBaseStateSetImpl.md#inreadonly)
- [inSucceeded](DBaseStateSetImpl.md#insucceeded)
- [inUnfocusable](DBaseStateSetImpl.md#inunfocusable)
- [inWarned](DBaseStateSetImpl.md#inwarned)
- [isActionable](DBaseStateSetImpl.md#isactionable)
- [isActive](DBaseStateSetImpl.md#isactive)
- [isAlternated](DBaseStateSetImpl.md#isalternated)
- [isChanged](DBaseStateSetImpl.md#ischanged)
- [isDisabled](DBaseStateSetImpl.md#isdisabled)
- [isEnabled](DBaseStateSetImpl.md#isenabled)
- [isFailed](DBaseStateSetImpl.md#isfailed)
- [isFocusReverse](DBaseStateSetImpl.md#isfocusreverse)
- [isFocusRoot](DBaseStateSetImpl.md#isfocusroot)
- [isFocusable](DBaseStateSetImpl.md#isfocusable)
- [isFocused](DBaseStateSetImpl.md#isfocused)
- [isGesturing](DBaseStateSetImpl.md#isgesturing)
- [isHovered](DBaseStateSetImpl.md#ishovered)
- [isInvalid](DBaseStateSetImpl.md#isinvalid)
- [isPressed](DBaseStateSetImpl.md#ispressed)
- [isProcessing](DBaseStateSetImpl.md#isprocessing)
- [isReadOnly](DBaseStateSetImpl.md#isreadonly)
- [isSucceeded](DBaseStateSetImpl.md#issucceeded)
- [isUnfocusable](DBaseStateSetImpl.md#isunfocusable)
- [isWarned](DBaseStateSetImpl.md#iswarned)
- [local](DBaseStateSetImpl.md#local)
- [onActive](DBaseStateSetImpl.md#onactive)
- [onAlternated](DBaseStateSetImpl.md#onalternated)
- [onChanged](DBaseStateSetImpl.md#onchanged)
- [onDisabled](DBaseStateSetImpl.md#ondisabled)
- [onEnabled](DBaseStateSetImpl.md#onenabled)
- [onFailed](DBaseStateSetImpl.md#onfailed)
- [onFocusReverse](DBaseStateSetImpl.md#onfocusreverse)
- [onFocusRoot](DBaseStateSetImpl.md#onfocusroot)
- [onFocusable](DBaseStateSetImpl.md#onfocusable)
- [onFocused](DBaseStateSetImpl.md#onfocused)
- [onGesturing](DBaseStateSetImpl.md#ongesturing)
- [onHovered](DBaseStateSetImpl.md#onhovered)
- [onInvalid](DBaseStateSetImpl.md#oninvalid)
- [onPressed](DBaseStateSetImpl.md#onpressed)
- [onProcessing](DBaseStateSetImpl.md#onprocessing)
- [onReadOnly](DBaseStateSetImpl.md#onreadonly)
- [onSucceeded](DBaseStateSetImpl.md#onsucceeded)
- [onUnfocusable](DBaseStateSetImpl.md#onunfocusable)
- [onWarned](DBaseStateSetImpl.md#onwarned)
- [parent](DBaseStateSetImpl.md#parent)
- [ticker](DBaseStateSetImpl.md#ticker)
- [underActive](DBaseStateSetImpl.md#underactive)
- [underAlternated](DBaseStateSetImpl.md#underalternated)
- [underChanged](DBaseStateSetImpl.md#underchanged)
- [underDisabled](DBaseStateSetImpl.md#underdisabled)
- [underEnabled](DBaseStateSetImpl.md#underenabled)
- [underFailed](DBaseStateSetImpl.md#underfailed)
- [underFocusReverse](DBaseStateSetImpl.md#underfocusreverse)
- [underFocusRoot](DBaseStateSetImpl.md#underfocusroot)
- [underFocusable](DBaseStateSetImpl.md#underfocusable)
- [underFocused](DBaseStateSetImpl.md#underfocused)
- [underGesturing](DBaseStateSetImpl.md#undergesturing)
- [underHovered](DBaseStateSetImpl.md#underhovered)
- [underInvalid](DBaseStateSetImpl.md#underinvalid)
- [underPressed](DBaseStateSetImpl.md#underpressed)
- [underProcessing](DBaseStateSetImpl.md#underprocessing)
- [underReadOnly](DBaseStateSetImpl.md#underreadonly)
- [underSucceeded](DBaseStateSetImpl.md#undersucceeded)
- [underUnfocusable](DBaseStateSetImpl.md#underunfocusable)
- [underWarned](DBaseStateSetImpl.md#underwarned)

### Methods

- [add](DBaseStateSetImpl.md#add)
- [addAll](DBaseStateSetImpl.md#addall)
- [addAllObject](DBaseStateSetImpl.md#addallobject)
- [addAllString](DBaseStateSetImpl.md#addallstring)
- [begin](DBaseStateSetImpl.md#begin)
- [checkAdded](DBaseStateSetImpl.md#checkadded)
- [checkAddedsObject](DBaseStateSetImpl.md#checkaddedsobject)
- [checkAddedsString](DBaseStateSetImpl.md#checkaddedsstring)
- [checkRemoved](DBaseStateSetImpl.md#checkremoved)
- [checkRemovedsObject](DBaseStateSetImpl.md#checkremovedsobject)
- [checkRemovedsString](DBaseStateSetImpl.md#checkremovedsstring)
- [clear](DBaseStateSetImpl.md#clear)
- [copy](DBaseStateSetImpl.md#copy)
- [doSet](DBaseStateSetImpl.md#doset)
- [each](DBaseStateSetImpl.md#each)
- [end](DBaseStateSetImpl.md#end)
- [in](DBaseStateSetImpl.md#in)
- [is](DBaseStateSetImpl.md#is)
- [lock](DBaseStateSetImpl.md#lock)
- [newBlinker](DBaseStateSetImpl.md#newblinker)
- [newTicker](DBaseStateSetImpl.md#newticker)
- [on](DBaseStateSetImpl.md#on)
- [onParentChange](DBaseStateSetImpl.md#onparentchange)
- [remove](DBaseStateSetImpl.md#remove)
- [removeAll](DBaseStateSetImpl.md#removeall)
- [removeAllMatcher](DBaseStateSetImpl.md#removeallmatcher)
- [removeAllObject](DBaseStateSetImpl.md#removeallobject)
- [removeAllString](DBaseStateSetImpl.md#removeallstring)
- [set](DBaseStateSetImpl.md#set)
- [setAll](DBaseStateSetImpl.md#setall)
- [setAllObject](DBaseStateSetImpl.md#setallobject)
- [setAllString](DBaseStateSetImpl.md#setallstring)
- [size](DBaseStateSetImpl.md#size)
- [toObject](DBaseStateSetImpl.md#toobject)
- [toString](DBaseStateSetImpl.md#tostring)
- [under](DBaseStateSetImpl.md#under)
- [unlock](DBaseStateSetImpl.md#unlock)
- [valueOf](DBaseStateSetImpl.md#valueof)

## Constructors

### constructor

• **new DBaseStateSetImpl**(): [`DBaseStateSetImpl`](DBaseStateSetImpl.md)

#### Returns

[`DBaseStateSetImpl`](DBaseStateSetImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L26)

## Properties

### \_blinker

• `Protected` `Optional` **\_blinker**: [`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L23)

___

### \_local

• `Protected` **\_local**: `Map`\<`string`, ``null`` \| `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L21)

___

### \_parent

• `Protected` **\_parent**: ``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L22)

___

### \_ticker

• `Protected` `Optional` **\_ticker**: [`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L24)

## Accessors

### blinker

• `get` **blinker**(): [`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Returns

[`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[blinker](../interfaces/DBaseStateSet.md#blinker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L54)

___

### inActive

• `get` **inActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inActive](../interfaces/DBaseStateSet.md#inactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L504)

___

### inAlternated

• `get` **inAlternated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inAlternated](../interfaces/DBaseStateSet.md#inalternated)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:848](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L848)

___

### inChanged

• `get` **inChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inChanged](../interfaces/DBaseStateSet.md#inchanged)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:828](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L828)

___

### inDisabled

• `get` **inDisabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inDisabled](../interfaces/DBaseStateSet.md#indisabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L584)

___

### inEnabled

• `get` **inEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inEnabled](../interfaces/DBaseStateSet.md#inenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L564)

___

### inFailed

• `get` **inFailed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inFailed](../interfaces/DBaseStateSet.md#infailed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L788)

___

### inFocusReverse

• `get` **inFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inFocusReverse](../interfaces/DBaseStateSet.md#infocusreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:668](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L668)

___

### inFocusRoot

• `get` **inFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inFocusRoot](../interfaces/DBaseStateSet.md#infocusroot)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:648](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L648)

___

### inFocusable

• `get` **inFocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inFocusable](../interfaces/DBaseStateSet.md#infocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:688](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L688)

___

### inFocused

• `get` **inFocused**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inFocused](../interfaces/DBaseStateSet.md#infocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L628)

___

### inGesturing

• `get` **inGesturing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inGesturing](../interfaces/DBaseStateSet.md#ingesturing)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L608)

___

### inHovered

• `get` **inHovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inHovered](../interfaces/DBaseStateSet.md#inhovered)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L484)

___

### inInvalid

• `get` **inInvalid**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inInvalid](../interfaces/DBaseStateSet.md#ininvalid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L728)

___

### inPressed

• `get` **inPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inPressed](../interfaces/DBaseStateSet.md#inpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:524](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L524)

___

### inProcessing

• `get` **inProcessing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inProcessing](../interfaces/DBaseStateSet.md#inprocessing)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L748)

___

### inReadOnly

• `get` **inReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inReadOnly](../interfaces/DBaseStateSet.md#inreadonly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L544)

___

### inSucceeded

• `get` **inSucceeded**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inSucceeded](../interfaces/DBaseStateSet.md#insucceeded)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L768)

___

### inUnfocusable

• `get` **inUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inUnfocusable](../interfaces/DBaseStateSet.md#inunfocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:708](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L708)

___

### inWarned

• `get` **inWarned**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[inWarned](../interfaces/DBaseStateSet.md#inwarned)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:808](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L808)

___

### isActionable

• `get` **isActionable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isActionable](../interfaces/DBaseStateSet.md#isactionable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L596)

___

### isActive

• `get` **isActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isActive](../interfaces/DBaseStateSet.md#isactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L496)

• `set` **isActive**(`isActive`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isActive` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isActive](../interfaces/DBaseStateSet.md#isactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L500)

___

### isAlternated

• `get` **isAlternated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isAlternated](../interfaces/DBaseStateSet.md#isalternated)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:840](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L840)

• `set` **isAlternated**(`isAlternated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isAlternated` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isAlternated](../interfaces/DBaseStateSet.md#isalternated)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:844](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L844)

___

### isChanged

• `get` **isChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isChanged](../interfaces/DBaseStateSet.md#ischanged)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:820](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L820)

• `set` **isChanged**(`isChanged`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isChanged` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isChanged](../interfaces/DBaseStateSet.md#ischanged)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:824](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L824)

___

### isDisabled

• `get` **isDisabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isDisabled](../interfaces/DBaseStateSet.md#isdisabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L576)

• `set` **isDisabled**(`isDisabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isDisabled](../interfaces/DBaseStateSet.md#isdisabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L580)

___

### isEnabled

• `get` **isEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isEnabled](../interfaces/DBaseStateSet.md#isenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L556)

• `set` **isEnabled**(`isEnabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isEnabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isEnabled](../interfaces/DBaseStateSet.md#isenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:560](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L560)

___

### isFailed

• `get` **isFailed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isFailed](../interfaces/DBaseStateSet.md#isfailed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:780](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L780)

• `set` **isFailed**(`failed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `failed` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isFailed](../interfaces/DBaseStateSet.md#isfailed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:784](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L784)

___

### isFocusReverse

• `get` **isFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isFocusReverse](../interfaces/DBaseStateSet.md#isfocusreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:660](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L660)

• `set` **isFocusReverse**(`isFocusReverse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocusReverse` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isFocusReverse](../interfaces/DBaseStateSet.md#isfocusreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:664](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L664)

___

### isFocusRoot

• `get` **isFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isFocusRoot](../interfaces/DBaseStateSet.md#isfocusroot)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:640](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L640)

• `set` **isFocusRoot**(`isFocusRoot`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocusRoot` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isFocusRoot](../interfaces/DBaseStateSet.md#isfocusroot)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:644](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L644)

___

### isFocusable

• `get` **isFocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isFocusable](../interfaces/DBaseStateSet.md#isfocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:680](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L680)

• `set` **isFocusable**(`isFocusable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocusable` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isFocusable](../interfaces/DBaseStateSet.md#isfocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:684](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L684)

___

### isFocused

• `get` **isFocused**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isFocused](../interfaces/DBaseStateSet.md#isfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:620](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L620)

• `set` **isFocused**(`isFocused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isFocused](../interfaces/DBaseStateSet.md#isfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:624](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L624)

___

### isGesturing

• `get` **isGesturing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isGesturing](../interfaces/DBaseStateSet.md#isgesturing)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:600](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L600)

• `set` **isGesturing**(`isGesturing`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isGesturing` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isGesturing](../interfaces/DBaseStateSet.md#isgesturing)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:604](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L604)

___

### isHovered

• `get` **isHovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isHovered](../interfaces/DBaseStateSet.md#ishovered)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:476](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L476)

• `set` **isHovered**(`isHovered`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isHovered` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isHovered](../interfaces/DBaseStateSet.md#ishovered)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:480](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L480)

___

### isInvalid

• `get` **isInvalid**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isInvalid](../interfaces/DBaseStateSet.md#isinvalid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:720](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L720)

• `set` **isInvalid**(`invalid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `invalid` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isInvalid](../interfaces/DBaseStateSet.md#isinvalid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:724](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L724)

___

### isPressed

• `get` **isPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isPressed](../interfaces/DBaseStateSet.md#ispressed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L516)

• `set` **isPressed**(`isPressed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isPressed` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isPressed](../interfaces/DBaseStateSet.md#ispressed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L520)

___

### isProcessing

• `get` **isProcessing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isProcessing](../interfaces/DBaseStateSet.md#isprocessing)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L740)

• `set` **isProcessing**(`processing`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `processing` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isProcessing](../interfaces/DBaseStateSet.md#isprocessing)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L744)

___

### isReadOnly

• `get` **isReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isReadOnly](../interfaces/DBaseStateSet.md#isreadonly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L536)

• `set` **isReadOnly**(`isReadOnly`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReadOnly` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isReadOnly](../interfaces/DBaseStateSet.md#isreadonly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:540](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L540)

___

### isSucceeded

• `get` **isSucceeded**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isSucceeded](../interfaces/DBaseStateSet.md#issucceeded)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L760)

• `set` **isSucceeded**(`succeeded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `succeeded` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isSucceeded](../interfaces/DBaseStateSet.md#issucceeded)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:764](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L764)

___

### isUnfocusable

• `get` **isUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isUnfocusable](../interfaces/DBaseStateSet.md#isunfocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:700](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L700)

• `set` **isUnfocusable**(`unfocusable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unfocusable` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isUnfocusable](../interfaces/DBaseStateSet.md#isunfocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L704)

___

### isWarned

• `get` **isWarned**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isWarned](../interfaces/DBaseStateSet.md#iswarned)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:800](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L800)

• `set` **isWarned**(`isWarned`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isWarned` | `boolean` |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[isWarned](../interfaces/DBaseStateSet.md#iswarned)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L804)

___

### local

• `get` **local**(): `Map`\<`string`, ``null`` \| `number`\>

#### Returns

`Map`\<`string`, ``null`` \| `number`\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L31)

___

### onActive

• `get` **onActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onActive](../interfaces/DBaseStateSet.md#onactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L508)

___

### onAlternated

• `get` **onAlternated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onAlternated](../interfaces/DBaseStateSet.md#onalternated)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L852)

___

### onChanged

• `get` **onChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onChanged](../interfaces/DBaseStateSet.md#onchanged)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:832](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L832)

___

### onDisabled

• `get` **onDisabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onDisabled](../interfaces/DBaseStateSet.md#ondisabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L588)

___

### onEnabled

• `get` **onEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onEnabled](../interfaces/DBaseStateSet.md#onenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:568](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L568)

___

### onFailed

• `get` **onFailed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onFailed](../interfaces/DBaseStateSet.md#onfailed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L792)

___

### onFocusReverse

• `get` **onFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onFocusReverse](../interfaces/DBaseStateSet.md#onfocusreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L672)

___

### onFocusRoot

• `get` **onFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onFocusRoot](../interfaces/DBaseStateSet.md#onfocusroot)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:652](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L652)

___

### onFocusable

• `get` **onFocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onFocusable](../interfaces/DBaseStateSet.md#onfocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:692](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L692)

___

### onFocused

• `get` **onFocused**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onFocused](../interfaces/DBaseStateSet.md#onfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:632](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L632)

___

### onGesturing

• `get` **onGesturing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onGesturing](../interfaces/DBaseStateSet.md#ongesturing)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:612](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L612)

___

### onHovered

• `get` **onHovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onHovered](../interfaces/DBaseStateSet.md#onhovered)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L488)

___

### onInvalid

• `get` **onInvalid**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onInvalid](../interfaces/DBaseStateSet.md#oninvalid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:732](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L732)

___

### onPressed

• `get` **onPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onPressed](../interfaces/DBaseStateSet.md#onpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:528](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L528)

___

### onProcessing

• `get` **onProcessing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onProcessing](../interfaces/DBaseStateSet.md#onprocessing)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:752](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L752)

___

### onReadOnly

• `get` **onReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onReadOnly](../interfaces/DBaseStateSet.md#onreadonly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:548](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L548)

___

### onSucceeded

• `get` **onSucceeded**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onSucceeded](../interfaces/DBaseStateSet.md#onsucceeded)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L772)

___

### onUnfocusable

• `get` **onUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onUnfocusable](../interfaces/DBaseStateSet.md#onunfocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L712)

___

### onWarned

• `get` **onWarned**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onWarned](../interfaces/DBaseStateSet.md#onwarned)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:812](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L812)

___

### parent

• `get` **parent**(): ``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[parent](../interfaces/DBaseStateSet.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L35)

• `set` **parent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | ``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[parent](../interfaces/DBaseStateSet.md#parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L39)

___

### ticker

• `get` **ticker**(): [`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Returns

[`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[ticker](../interfaces/DBaseStateSet.md#ticker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L67)

___

### underActive

• `get` **underActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underActive](../interfaces/DBaseStateSet.md#underactive)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L512)

___

### underAlternated

• `get` **underAlternated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underAlternated](../interfaces/DBaseStateSet.md#underalternated)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:856](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L856)

___

### underChanged

• `get` **underChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underChanged](../interfaces/DBaseStateSet.md#underchanged)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:836](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L836)

___

### underDisabled

• `get` **underDisabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underDisabled](../interfaces/DBaseStateSet.md#underdisabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L592)

___

### underEnabled

• `get` **underEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underEnabled](../interfaces/DBaseStateSet.md#underenabled)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:572](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L572)

___

### underFailed

• `get` **underFailed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underFailed](../interfaces/DBaseStateSet.md#underfailed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L796)

___

### underFocusReverse

• `get` **underFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underFocusReverse](../interfaces/DBaseStateSet.md#underfocusreverse)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:676](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L676)

___

### underFocusRoot

• `get` **underFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underFocusRoot](../interfaces/DBaseStateSet.md#underfocusroot)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L656)

___

### underFocusable

• `get` **underFocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underFocusable](../interfaces/DBaseStateSet.md#underfocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:696](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L696)

___

### underFocused

• `get` **underFocused**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underFocused](../interfaces/DBaseStateSet.md#underfocused)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:636](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L636)

___

### underGesturing

• `get` **underGesturing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underGesturing](../interfaces/DBaseStateSet.md#undergesturing)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:616](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L616)

___

### underHovered

• `get` **underHovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underHovered](../interfaces/DBaseStateSet.md#underhovered)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:492](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L492)

___

### underInvalid

• `get` **underInvalid**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underInvalid](../interfaces/DBaseStateSet.md#underinvalid)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:736](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L736)

___

### underPressed

• `get` **underPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underPressed](../interfaces/DBaseStateSet.md#underpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:532](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L532)

___

### underProcessing

• `get` **underProcessing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underProcessing](../interfaces/DBaseStateSet.md#underprocessing)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:756](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L756)

___

### underReadOnly

• `get` **underReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underReadOnly](../interfaces/DBaseStateSet.md#underreadonly)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L552)

___

### underSucceeded

• `get` **underSucceeded**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underSucceeded](../interfaces/DBaseStateSet.md#undersucceeded)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:776](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L776)

___

### underUnfocusable

• `get` **underUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underUnfocusable](../interfaces/DBaseStateSet.md#underunfocusable)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:716](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L716)

___

### underWarned

• `get` **underWarned**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[underWarned](../interfaces/DBaseStateSet.md#underwarned)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:816](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L816)

## Methods

### add

▸ **add**(`state`, `value?`): `this`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `state` | `string` | `undefined` |
| `value` | ``null`` \| `number` | `null` |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[add](../interfaces/DBaseStateSet.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L120)

___

### addAll

▸ **addAll**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[addAll](../interfaces/DBaseStateSet.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L152)

▸ **addAll**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[addAll](../interfaces/DBaseStateSet.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L153)

▸ **addAll**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[addAll](../interfaces/DBaseStateSet.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L154)

▸ **addAll**(`...states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | `string`[] |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[addAll](../interfaces/DBaseStateSet.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L156)

▸ **addAll**(`...states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[addAll](../interfaces/DBaseStateSet.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L157)

___

### addAllObject

▸ **addAllObject**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L189)

___

### addAllString

▸ **addAllString**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L177)

___

### begin

▸ **begin**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L107)

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

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L115)

___

### checkAddedsObject

▸ **checkAddedsObject**(`states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L140)

___

### checkAddedsString

▸ **checkAddedsString**(`states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L129)

___

### checkRemoved

▸ **checkRemoved**(`removed`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `removed` | `string` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L202)

___

### checkRemovedsObject

▸ **checkRemovedsObject**(`states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L225)

___

### checkRemovedsString

▸ **checkRemovedsString**(`states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L215)

___

### clear

▸ **clear**(): `this`

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[clear](../interfaces/DBaseStateSet.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:429](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L429)

___

### copy

▸ **copy**(`other`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[copy](../interfaces/DBaseStateSet.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L462)

___

### doSet

▸ **doSet**(`added`, `value`, `removed?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | ``null`` \| `string` |
| `value` | ``null`` \| `number` |
| `removed?` | ``null`` \| `string` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:345](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L345)

___

### each

▸ **each**(`iteratee`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`state`: `string`, `value`: ``null`` \| `number`) => `void` |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[each](../interfaces/DBaseStateSet.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L451)

___

### end

▸ **end**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L111)

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

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[in](../interfaces/DBaseStateSet.md#in)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L85)

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

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[is](../interfaces/DBaseStateSet.md#is)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L80)

___

### lock

▸ **lock**(`callOnChange?`): `this`

Locks this state set.
The locked state set delays calling the change event handler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callOnChange?` | `boolean` | false to stop calling the change event handler when unlocked |

#### Returns

`this`

this

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[lock](../interfaces/DBaseStateSet.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L99)

___

### newBlinker

▸ **newBlinker**(): [`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Returns

[`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L63)

___

### newTicker

▸ **newTicker**(): [`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Returns

[`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L76)

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

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[on](../interfaces/DBaseStateSet.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L89)

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

[DBaseStateSet](../interfaces/DBaseStateSet.md).[onParentChange](../interfaces/DBaseStateSet.md#onparentchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L47)

___

### remove

▸ **remove**(`state`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[remove](../interfaces/DBaseStateSet.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L206)

___

### removeAll

▸ **removeAll**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[removeAll](../interfaces/DBaseStateSet.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L235)

▸ **removeAll**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[removeAll](../interfaces/DBaseStateSet.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L236)

▸ **removeAll**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[removeAll](../interfaces/DBaseStateSet.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L237)

▸ **removeAll**(`...states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | `string`[] |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[removeAll](../interfaces/DBaseStateSet.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:239](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L239)

▸ **removeAll**(`...states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[removeAll](../interfaces/DBaseStateSet.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L240)

▸ **removeAll**(`matcher`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher` | [`DBaseStateMatcher`](../index.md#dbasestatematcher) |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[removeAll](../interfaces/DBaseStateSet.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L242)

___

### removeAllMatcher

▸ **removeAllMatcher**(`matcher`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher` | [`DBaseStateMatcher`](../index.md#dbasestatematcher) |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:266](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L266)

___

### removeAllObject

▸ **removeAllObject**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L296)

___

### removeAllString

▸ **removeAllString**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L284)

___

### set

▸ **set**(`state`, `on`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `on` | `boolean` |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[set](../interfaces/DBaseStateSet.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L308)

▸ **set**(`state`, `value`, `on`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `value` | ``null`` \| `number` |
| `on` | `boolean` |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[set](../interfaces/DBaseStateSet.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:309](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L309)

▸ **set**(`added`, `removed`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | ``null`` \| `string` |
| `removed` | ``null`` \| `string` |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[set](../interfaces/DBaseStateSet.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L311)

▸ **set**(`added`, `value`, `removed`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | ``null`` \| `string` |
| `value` | ``null`` \| `number` |
| `removed` | ``null`` \| `string` |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[set](../interfaces/DBaseStateSet.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:312](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L312)

___

### setAll

▸ **setAll**(`states`, `on`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |
| `on` | `boolean` |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[setAll](../interfaces/DBaseStateSet.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:362](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L362)

▸ **setAll**(`states`, `on`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `on` | `boolean` |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[setAll](../interfaces/DBaseStateSet.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L363)

▸ **setAll**(`states`, `on`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `on` | `boolean` |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[setAll](../interfaces/DBaseStateSet.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:364](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L364)

▸ **setAll**(`addeds`, `removeds`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | ``null`` \| `string`[] |
| `removeds` | ``null`` \| `string`[] |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[setAll](../interfaces/DBaseStateSet.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L366)

▸ **setAll**(`addeds`, `removeds`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | ``null`` \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `removeds` | ``null`` \| `string`[] |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[setAll](../interfaces/DBaseStateSet.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L367)

▸ **setAll**(`addeds`, `removeds`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | ``null`` \| `string`[] \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `removeds` | ``null`` \| `string`[] |

#### Returns

`this`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[setAll](../interfaces/DBaseStateSet.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:368](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L368)

___

### setAllObject

▸ **setAllObject**(`addeds`, `removeds`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `removeds` | `string`[] |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:413](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L413)

___

### setAllString

▸ **setAllString**(`addeds`, `removeds`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | `string`[] |
| `removeds` | `string`[] |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L398)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[size](../interfaces/DBaseStateSet.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:458](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L458)

___

### toObject

▸ **toObject**(): [`DBaseStateSetLike`](../interfaces/DBaseStateSetLike.md)

#### Returns

[`DBaseStateSetLike`](../interfaces/DBaseStateSetLike.md)

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[toObject](../interfaces/DBaseStateSet.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:860](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L860)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[toString](../interfaces/DBaseStateSet.md#tostring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:870](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L870)

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

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[under](../interfaces/DBaseStateSet.md#under)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L94)

___

### unlock

▸ **unlock**(): `this`

Unlocks this state set and calls the change event handler if this state set has changed.
However, if this state set is locked with the `callOnChange` of false, the change event handler is not called.

#### Returns

`this`

this

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[unlock](../interfaces/DBaseStateSet.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L103)

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

#### Implementation of

[DBaseStateSet](../interfaces/DBaseStateSet.md).[valueOf](../interfaces/DBaseStateSet.md#valueof)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L439)
