/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../d-base-state-set";
import { DBaseStateSetImplObservable } from "../d-base-state-set-impl-observable";
import { EShapeState } from "./e-shape-state";
import { EShapeStateSet } from "./e-shape-state-set";

export class EShapeStateSetImplObservable
	extends DBaseStateSetImplObservable
	implements EShapeStateSet
{
	protected onChange(newState: DBaseStateSet, oldState: DBaseStateSet): void {
		if (newState.isActive) {
			if (!oldState.isActive) {
				this._local.add(EShapeState.ACTIVATED).delete(EShapeState.DEACTIVATED);
			}
		} else {
			if (oldState.isActive) {
				this._local.add(EShapeState.DEACTIVATED).delete(EShapeState.ACTIVATED);
			}
		}
		super.onChange(newState, oldState);
	}

	get isClicked(): boolean {
		return this.is(EShapeState.CLICKED);
	}

	set isClicked(isClicked: boolean) {
		this.set(EShapeState.CLICKED, isClicked);
	}

	get inClicked(): boolean {
		return this.in(EShapeState.CLICKED);
	}

	get onClicked(): boolean {
		return this.on(EShapeState.CLICKED);
	}

	get underClicked(): boolean {
		return this.under(EShapeState.CLICKED);
	}

	get isDblClicked(): boolean {
		return this.is(EShapeState.DBL_CLICKED);
	}

	set isDblClicked(isDblClicked: boolean) {
		this.set(EShapeState.DBL_CLICKED, isDblClicked);
	}

	get inDblClicked(): boolean {
		return this.in(EShapeState.DBL_CLICKED);
	}

	get onDblClicked(): boolean {
		return this.on(EShapeState.DBL_CLICKED);
	}

	get underDblClicked(): boolean {
		return this.under(EShapeState.DBL_CLICKED);
	}

	get isDown(): boolean {
		return this.is(EShapeState.DOWN);
	}

	set isDown(isDown: boolean) {
		this.set(EShapeState.DOWN, isDown);
	}

	get inDown(): boolean {
		return this.in(EShapeState.DOWN);
	}

	get onDown(): boolean {
		return this.on(EShapeState.DOWN);
	}

	get underDown(): boolean {
		return this.under(EShapeState.DOWN);
	}

	get isUp(): boolean {
		return this.is(EShapeState.UP);
	}

	set isUp(isUp: boolean) {
		this.set(EShapeState.UP, isUp);
	}

	get inUp(): boolean {
		return this.in(EShapeState.UP);
	}

	get onUp(): boolean {
		return this.on(EShapeState.UP);
	}

	get underUp(): boolean {
		return this.under(EShapeState.UP);
	}

	get isUpOutside(): boolean {
		return this.is(EShapeState.UP_OUTSIDE);
	}

	set isUpOutside(isUpOutside: boolean) {
		this.set(EShapeState.UP_OUTSIDE, isUpOutside);
	}

	get inUpOutside(): boolean {
		return this.in(EShapeState.UP_OUTSIDE);
	}

	get onUpOutside(): boolean {
		return this.on(EShapeState.UP_OUTSIDE);
	}

	get underUpOutside(): boolean {
		return this.under(EShapeState.UP_OUTSIDE);
	}

	get isRightClicked(): boolean {
		return this.is(EShapeState.RIGHT_CLICKED);
	}

	set isRightClicked(isRightClicked: boolean) {
		this.set(EShapeState.RIGHT_CLICKED, isRightClicked);
	}

	get inRightClicked(): boolean {
		return this.in(EShapeState.RIGHT_CLICKED);
	}

	get onRightClicked(): boolean {
		return this.on(EShapeState.RIGHT_CLICKED);
	}

	get underRightClicked(): boolean {
		return this.under(EShapeState.RIGHT_CLICKED);
	}

	get isRightDown(): boolean {
		return this.is(EShapeState.RIGHT_DOWN);
	}

	set isRightDown(isRightDown: boolean) {
		this.set(EShapeState.RIGHT_DOWN, isRightDown);
	}

	get inRightDown(): boolean {
		return this.in(EShapeState.RIGHT_DOWN);
	}

	get onRightDown(): boolean {
		return this.on(EShapeState.RIGHT_DOWN);
	}

	get underRightDown(): boolean {
		return this.under(EShapeState.RIGHT_DOWN);
	}

	get isRightUp(): boolean {
		return this.is(EShapeState.RIGHT_UP);
	}

	set isRightUp(isRightUp: boolean) {
		this.set(EShapeState.RIGHT_UP, isRightUp);
	}

	get inRightUp(): boolean {
		return this.in(EShapeState.RIGHT_UP);
	}

	get onRightUp(): boolean {
		return this.on(EShapeState.RIGHT_UP);
	}

	get underRightUp(): boolean {
		return this.under(EShapeState.RIGHT_UP);
	}

	get isRightUpOutside(): boolean {
		return this.is(EShapeState.RIGHT_UP_OUTSIDE);
	}

	set isRightUpOutside(isRightUpOutside: boolean) {
		this.set(EShapeState.RIGHT_UP_OUTSIDE, isRightUpOutside);
	}

	get inRightUpOutside(): boolean {
		return this.in(EShapeState.RIGHT_UP_OUTSIDE);
	}

	get onRightUpOutside(): boolean {
		return this.on(EShapeState.RIGHT_UP_OUTSIDE);
	}

	get underRightUpOutside(): boolean {
		return this.under(EShapeState.RIGHT_UP_OUTSIDE);
	}

	get isRightPressed(): boolean {
		return this.is(EShapeState.RIGHT_PRESSED);
	}

	set isRightPressed(isRightPressed: boolean) {
		this.set(EShapeState.RIGHT_PRESSED, isRightPressed);
	}

	get inRightPressed(): boolean {
		return this.in(EShapeState.RIGHT_PRESSED);
	}

	get onRightPressed(): boolean {
		return this.on(EShapeState.RIGHT_PRESSED);
	}

	get underRightPressed(): boolean {
		return this.under(EShapeState.RIGHT_PRESSED);
	}

	get isActivated(): boolean {
		return this.is(EShapeState.ACTIVATED);
	}

	set isActivated(isActivated: boolean) {
		this.set(EShapeState.ACTIVATED, isActivated);
	}

	get inActivated(): boolean {
		return this.in(EShapeState.ACTIVATED);
	}

	get onActivated(): boolean {
		return this.on(EShapeState.ACTIVATED);
	}

	get underActivated(): boolean {
		return this.under(EShapeState.ACTIVATED);
	}

	get isDeactivated(): boolean {
		return this.is(EShapeState.DEACTIVATED);
	}

	set isDeactivated(isDeactivated: boolean) {
		this.set(EShapeState.DEACTIVATED, isDeactivated);
	}

	get inDeactivated(): boolean {
		return this.in(EShapeState.DEACTIVATED);
	}

	get onDeactivated(): boolean {
		return this.on(EShapeState.DEACTIVATED);
	}

	get underDeactivated(): boolean {
		return this.under(EShapeState.DEACTIVATED);
	}
}
