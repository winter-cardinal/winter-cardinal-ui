/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeConnectorEdge } from "./e-shape-connector-edge";

export interface EShapeConnectorContainer {
	add(target: EShapeConnectorEdge): boolean;
	remove(target: EShapeConnectorEdge): boolean;
	clear(): boolean;
	copy(source: EShapeConnectorContainer): this;
	each(iteratee: (edge: EShapeConnectorEdge) => void): this;
	contains(target: EShapeConnectorEdge): boolean;
	size(): number;
	fit(forcibly?: boolean): void;
	attach(): this;
	detach(): this;
}
