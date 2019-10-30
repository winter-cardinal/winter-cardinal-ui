/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Application } from "pixi.js";
import { DPadding } from "./d-padding";

interface DApplicationLike extends Application {
	readonly width: number;
	readonly height: number;
	readonly padding: DPadding;

	disallowUpdate(): void;
	allowUpdate(): void;
	update(): void;
	render(): void;
	refit(): void;
	reflow(): void;
	getRootElement(): HTMLElement;
}

export class DApplications {
	protected static INSTANCE: DApplicationLike | null = null;

	static setInstace( instance: DApplicationLike ): DApplicationLike | null {
		const result = DApplications.INSTANCE;
		DApplications.INSTANCE = instance;
		return result;
	}

	static getInstance(): DApplicationLike {
		if( DApplications.INSTANCE == null ) {
			throw new Error( "Must create a DApplication instance at first" );
		}
		return DApplications.INSTANCE;
	}

	static update(): void {
		this.getInstance().update();
	}
}
