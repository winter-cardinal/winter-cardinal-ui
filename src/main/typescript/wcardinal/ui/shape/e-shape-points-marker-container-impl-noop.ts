/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsMarker } from "./e-shape-points-marker";
import { EShapePointsMarkerContainer } from "./e-shape-points-marker-container";
import { EShapePointsMarkerNoop } from "./e-shape-points-marker-noop";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export class EShapePointsMarkerContainerImplNoop implements EShapePointsMarkerContainer {
	protected _marker: EShapePointsMarker;

	protected constructor() {
		this._marker = new EShapePointsMarkerNoop();
	}

	lock(): this {
		return this;
	}

	unlock(): this {
		return this;
	}

	get head(): EShapePointsMarker {
		return this._marker;
	}

	get tail(): EShapePointsMarker {
		return this._marker;
	}

	copy(source: EShapePointsMarkerContainer): this {
		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		return -1;
	}

	deserialize(resourceId: number, manager: EShapeResourceManagerDeserialization): void {
		// DO NOTHING
	}

	protected static INSTANCE?: EShapePointsMarkerContainerImplNoop;
	static getInstance(): EShapePointsMarkerContainerImplNoop {
		let result = this.INSTANCE;
		if (result == null) {
			result = new EShapePointsMarkerContainerImplNoop();
			this.INSTANCE = result;
		}
		return result;
	}
}
