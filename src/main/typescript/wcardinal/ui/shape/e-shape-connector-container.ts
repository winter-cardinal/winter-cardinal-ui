/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeConnector } from "./e-shape-connector";

export interface EShapeConnectorContainer {
	add(target: EShapeConnector): boolean;
	get(index: number): EShapeConnector | null;
	size(): number;
	remove(index: number): EShapeConnector | null;
	clear(): boolean;
	fit(): void;
}
