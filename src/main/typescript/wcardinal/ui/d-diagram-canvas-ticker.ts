/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramTicker } from "./d-diagram-ticker";

export interface DDiagramCanvasTicker {
	add(interval: unknown): DDiagramTicker;
	start(): void;
	stop(): void;
}
