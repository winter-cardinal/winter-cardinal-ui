/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeCapability } from "./e-shape-capability";
import { EShapeType } from "./e-shape-type";

export class EShapeCapabilities {
	static mappings: { [type: number]: EShapeCapability | undefined } = {};

	static get(type: EShapeType): EShapeCapability {
		const capability = this.mappings[type];
		if (capability != null) {
			return capability;
		}
		return EShapeCapability.PRIMITIVE;
	}

	static contains(shape: EShape | null | undefined, target: EShapeCapability): shape is EShape {
		if (shape != null) {
			const capability = this.get(shape.type);
			if (capability & target) {
				return true;
			}

			if (capability & EShapeCapability.CHILDREN) {
				const children = shape.children;
				for (let i = 0, imax = children.length; i < imax; ++i) {
					if (this.contains(children[i], target)) {
						return true;
					}
				}
			}
		}
		return false;
	}

	static set(type: EShapeType, capability: EShapeCapability): void {
		this.mappings[type] = capability;
	}
}
