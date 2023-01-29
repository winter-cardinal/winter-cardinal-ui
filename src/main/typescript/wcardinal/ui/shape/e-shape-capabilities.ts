/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeCapability } from "./e-shape-capability";
import { EShapeType } from "./e-shape-type";

export class EShapeCapabilities {
	static mappings: Record<number, EShapeCapability | undefined> = {};

	static get(type: EShapeType): EShapeCapability {
		const capability = this.mappings[type];
		if (capability != null) {
			return capability;
		}
		return EShapeCapability.PRIMITIVE;
	}

	static contains(shape: EShape | null | undefined, target: EShapeCapability): boolean {
		if (shape != null) {
			let capability = this.get(shape.type);
			const shapeCapability = shape.getCapability();
			if (shapeCapability != null) {
				capability = (capability & ~shapeCapability.removed) | shapeCapability.added;
			}
			return (capability & target) === target;
		}
		return false;
	}

	static set(type: EShapeType, capability: EShapeCapability): void {
		this.mappings[type] = capability;
	}
}
