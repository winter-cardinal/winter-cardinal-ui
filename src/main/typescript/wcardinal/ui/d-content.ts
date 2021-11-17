/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";

export interface DContentOptions extends DBaseOptions<DThemeContent> {}

export interface DThemeContent extends DThemeBase {}

export class DContent extends DBase<DThemeContent, DContentOptions> {
	protected initReflowable(): void {
		// DO NOTHING
	}

	protected getType(): string {
		return "DContent";
	}
}
