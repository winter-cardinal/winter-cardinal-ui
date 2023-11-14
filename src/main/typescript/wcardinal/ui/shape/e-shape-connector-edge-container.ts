/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeConnectorEdge } from "./e-shape-connector-edge";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeUuidMapping } from "./e-shape-uuid-mapping";

export type EShapeConnectorEdgeContainerSerialized = [number, number];

export interface EShapeConnectorEdgeContainer {
	tail: EShapeConnectorEdge;
	head: EShapeConnectorEdge;
	lock(): void;
	unlock(): void;
	copy(source: EShapeConnectorEdgeContainer): this;
	fit(forcibly?: boolean): this;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(
		resourceId: number,
		mapping: EShapeUuidMapping,
		manager: EShapeResourceManagerDeserialization
	): void;
	attach(): this;
	detach(exceptions?: Set<EShape>): this;
}
