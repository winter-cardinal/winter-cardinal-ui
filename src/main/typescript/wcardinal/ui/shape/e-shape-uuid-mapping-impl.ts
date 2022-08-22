/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeUuidMapping } from "./e-shape-uuid-mapping";
import { EShapeEmbedded } from "./variant/e-shape-embedded";

export class EShapeUuidMappingImpl implements EShapeUuidMapping {
	protected _shapes: EShape[];
	protected _uuidToShape?: Map<number, EShape>;

	constructor(shapes: EShape[]) {
		this._shapes = shapes;
	}

	find(uuid: number): EShape | undefined {
		return this.getUuidToShape().get(uuid);
	}

	protected getUuidToShape(): Map<number, EShape> {
		let result = this._uuidToShape;
		if (result == null) {
			result = this.newUuidToShape();
			this._uuidToShape = result;
		}
		return result;
	}

	protected newUuidToShape(): Map<number, EShape> {
		const result = new Map<number, EShape>();
		this.fillUuidToShape(this._shapes, result);
		return result;
	}

	protected fillUuidToShape(shapes: EShape[], result: Map<number, EShape>): void {
		for (let i = 0, imax = shapes.length; i < imax; ++i) {
			const shape = shapes[i];
			result.set(shape.uuid, shape);

			if (!(shape instanceof EShapeEmbedded)) {
				const children = shape.children;
				if (0 < children.length) {
					this.fillUuidToShape(children, result);
				}
			}
		}
	}
}
