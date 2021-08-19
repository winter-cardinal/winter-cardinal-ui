/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeConnector } from "./e-shape-connector";

export interface EShapeConnectorContainer {
	add(target: EShapeConnector): boolean;
	remove(target: EShapeConnector): boolean;
	clear(): boolean;
	contains(target: EShapeConnector): boolean;
	size(): number;
	fit(forcibly?: boolean): void;
}
