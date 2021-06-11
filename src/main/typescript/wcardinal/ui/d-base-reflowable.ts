/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";

export interface DBaseReflowable {
	onReflow(base: DBase, width: number, height: number): void;
}
