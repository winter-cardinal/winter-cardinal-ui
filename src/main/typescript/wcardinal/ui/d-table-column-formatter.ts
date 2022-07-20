/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type DTableColumnFormatter<CELL_VALUE, EMITTER = any> = (
	cell: CELL_VALUE,
	emitter: EMITTER
) => string;
