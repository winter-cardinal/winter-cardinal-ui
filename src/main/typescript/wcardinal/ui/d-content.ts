/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";

export interface DContentOptions extends DBaseOptions<DThemeContent> {

}

export interface DThemeContent extends DThemeBase {

}

export class DContent extends DBase<DThemeContent, DContentOptions> {
	protected init( options?: DContentOptions ) {
		super.init( options );
		this.setState( DBaseState.UNFOCUSABLE, true );
	}

	protected initReflowable(): void {
		// DO NOTHING
	}

	protected getType(): string {
		return "DContent";
	}
}
