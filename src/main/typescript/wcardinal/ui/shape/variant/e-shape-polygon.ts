/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShape } from "../e-shape";
import { EShapeCopyPart } from "../e-shape-copy-part";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeType } from "../e-shape-type";
import { EShapeLinePoints } from "./e-shape-line-points";
import { EShapeLockPart } from "./e-shape-lock-part";
import { EShapePolygonTriangulated } from "./e-shape-polygon-triangulated";
import { EShapePolygonTriangulatedImpl } from "./e-shape-polygon-triangulated-impl";
import { EShapePrimitive } from "./e-shape-primitive";
import { hitTestPolygon } from "./hit-test-polygon";

export type EShapePolygonExtensionSerialized = [number, number];

export class EShapePolygon extends EShapePrimitive {
	protected readonly _points: EShapeLinePoints;
	protected readonly _triangulated: EShapePolygonTriangulated;

	constructor(type: EShapeType = EShapeType.POLYGON) {
		super(type);
		this._points = this.newPoints();
		this._triangulated = this.newTriangulated();
	}

	get points(): EShapeLinePoints {
		return this._points;
	}

	protected newPoints(): EShapeLinePoints {
		return new EShapeLinePoints(this);
	}

	protected newTriangulated(): EShapePolygonTriangulated {
		return new EShapePolygonTriangulatedImpl(this);
	}

	get triangulated(): EShapePolygonTriangulated {
		return this._triangulated;
	}

	/**
	 * EShapePolygon does not support stroke alignment,
	 * so always return 0 for hit test stroke shift.
	 */
	protected override toHitTestStrokeShift(
		strokeWidth: number,
		strokeScale: number,
		strokeAlign: number
	): number {
		return 0;
	}

	clone(): EShapePolygon {
		return new EShapePolygon(this.type).copy(this);
	}

	override copy(source: EShape, part: EShapeCopyPart = EShapeCopyPart.ALL): this {
		this.lock(EShapeLockPart.ALL);
		const result = super.copy(source, part);
		if (part & EShapeCopyPart.POINTS && source instanceof EShapePolygon) {
			this._triangulated.copy(source._triangulated);
		}
		this.unlock(EShapeLockPart.ALL, true);
		return result;
	}

	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		const pointsId = this._points.serialize(manager);
		const triangulatedId = this._triangulated.serialize(manager);
		const serialized: EShapePolygonExtensionSerialized = [pointsId, triangulatedId];
		result[15] = manager.addResource(JSON.stringify(serialized));
		return result;
	}

	deserialize(resourceId: number, manager: EShapeResourceManagerDeserialization): void {
		const resources = manager.resources;
		const resourcesLength = resources.length;
		if (0 <= resourceId && resourceId < resourcesLength) {
			let parsed = manager.getExtension<EShapePolygonExtensionSerialized>(resourceId);
			if (parsed == null) {
				parsed = JSON.parse(resources[resourceId]) as EShapePolygonExtensionSerialized;
				manager.setExtension(resourceId, parsed);
			}
			this.lock(EShapeLockPart.ALL);
			this._points.deserialize(parsed[0], manager);
			this._triangulated.deserialize(parsed[1], manager);
			this.unlock(EShapeLockPart.ALL, true);
		}
	}

	containsAbs(
		x: number,
		y: number,
		ax: number,
		ay: number,
		sw: number,
		ss: number,
		sa: number
	): boolean {
		if (super.containsAbsBBox(x, y, ax, ay)) {
			return hitTestPolygon(this, x, y, ax, ay, sw, ss);
		}
		return false;
	}
}
