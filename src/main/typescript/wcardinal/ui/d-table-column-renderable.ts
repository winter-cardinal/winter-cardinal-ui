/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type DTableColumnRenderable<ROW_VALUE> = (row: ROW_VALUE, columnIndex: number) => boolean;
