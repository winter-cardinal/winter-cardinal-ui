/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DDiagramDataScoped {
	readonly ids: string[];

	set(
		id: string,
		value: unknown,
		time?: number,
		from?: number | null,
		to?: number | null
	): boolean;
	toDirty(id: string): boolean;
	each(iteratee: (id: string) => boolean | void): string | null;
}
