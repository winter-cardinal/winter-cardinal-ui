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
