/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import type { DDiagramCanvas } from "../d-diagram-canvas";

export interface EShapeDataValueExtension {
	id: string;
	type: number;
	label: string;
	initial: unknown;
	start?: (canvas: DDiagramCanvas) => void;
	stop?: (canvas: DDiagramCanvas) => void;
}
