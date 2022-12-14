/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShape } from "./e-shape";
import { EShapeConnector } from "./e-shape-connector";
import { EShapeConnectorEdgeAcceptor } from "./e-shape-connector-edge-acceptor";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeUuidMapping } from "./e-shape-uuid-mapping";

export type EShapeConnectorEdgeSerialized = [
	number | null,
	number,
	number,
	number,
	number,
	number?,
	number?
];

export interface EShapeConnectorEdge {
	readonly parent: EShapeConnector;
	readonly acceptor: EShapeConnectorEdgeAcceptor;
	readonly local: IPoint;
	readonly localId: number;
	readonly normal: IPoint;
	readonly normalId: number;
	margin: number;

	lock(): void;
	unlock(): void;
	set(
		shape?: EShape | null,
		edge?: string | null,
		margin?: number,
		x?: number,
		y?: number,
		nx?: number,
		ny?: number
	): this;
	copy(source: EShapeConnectorEdge): this;
	fit(forcibly?: boolean): this;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(
		resourceId: number,
		mapping: EShapeUuidMapping,
		manager: EShapeResourceManagerDeserialization
	): void;
	attach(): this;
	detach(): this;
}
