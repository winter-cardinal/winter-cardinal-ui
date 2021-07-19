/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeConnector } from "./variant/e-shape-connector";

export interface EShapeAnchorConnectorContainer {
	add(target: EShapeConnector): boolean;
	get(index: number): EShapeConnector | null;
	size(): number;
	remove(index: number): EShapeConnector | null;
	clear(): boolean;
	update(): void;
}
