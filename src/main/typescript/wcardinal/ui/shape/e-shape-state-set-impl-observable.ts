/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSetImplObservable } from "../d-base-state-set-impl-observable";
import { EShapeState } from "./e-shape-state";

export class EShapeStateSetImplObservable extends DBaseStateSetImplObservable {
	get isClicked(): boolean {
		return this.is( EShapeState.CLICKED );
	}

	set isClicked( isClicked: boolean ) {
		this.set( EShapeState.CLICKED, isClicked );
	}

	get inClicked(): boolean {
		return this.in( EShapeState.CLICKED );
	}

	get onClicked(): boolean {
		return this.on( EShapeState.CLICKED );
	}

	get underClicked(): boolean {
		return this.under( EShapeState.CLICKED );
	}

	get isDown(): boolean {
		return this.is( EShapeState.DOWN );
	}

	set isDown( isDown: boolean ) {
		this.set( EShapeState.DOWN, isDown );
	}

	get inDown(): boolean {
		return this.in( EShapeState.DOWN );
	}

	get onDown(): boolean {
		return this.on( EShapeState.DOWN );
	}

	get underDown(): boolean {
		return this.under( EShapeState.DOWN );
	}

	get isUp(): boolean {
		return this.is( EShapeState.UP );
	}

	set isUp( isUp: boolean ) {
		this.set( EShapeState.UP, isUp );
	}

	get inUp(): boolean {
		return this.in( EShapeState.UP );
	}

	get onUp(): boolean {
		return this.on( EShapeState.UP );
	}

	get underUp(): boolean {
		return this.under( EShapeState.UP );
	}
}
