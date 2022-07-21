/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDataValueState } from "./shape/e-shape-data-value-state";

export interface DDiagramDataScoped {
	readonly ids: string[];

	set(
		id: string,
		value: unknown,
		time?: number,
		state?: EShapeDataValueState,
		from?: number | null,
		to?: number | null
	): boolean;
	toDirty(id: string): boolean;
	each(iteratee: (id: string) => boolean | void): string | null;
}
