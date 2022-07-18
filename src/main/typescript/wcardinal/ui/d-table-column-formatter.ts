/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type DTableColumnFormatter<CELL_VALUE> = (cell: CELL_VALUE) => string;
