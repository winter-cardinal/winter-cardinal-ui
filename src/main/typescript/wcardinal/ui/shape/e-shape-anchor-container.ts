/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeAnchor } from "./e-shape-anchor";

export interface EShapeAnchorContainer {
	add(target: EShapeAnchor): boolean;
	get(index: number): EShapeAnchor | null;
	size(): number;
	remove(index: number): EShapeAnchor | null;
	clear(): boolean;
	update(): void;
}
