/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapeConnector } from "../e-shape-connector";
import { EShapeConnectorEdgeContainer } from "../e-shape-connector-edge-container";
import { EShapeConnectorEdgeContainerImpl } from "../e-shape-connector-edge-container-impl";
import { EShapeLineBase } from "./e-shape-line-base";
import { Point } from "pixi.js";
import { EShapeLinePoints } from "./e-shape-line-points";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeCopyPart } from "../e-shape-copy-part";
import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShape } from "../e-shape";
import { EShapeContainer } from "../e-shape-container";

export class EShapeConnectorLine extends EShapeLineBase implements EShapeConnector {
	protected static WORK_EDGE_POINT?: Point;
	protected _edge: EShapeConnectorEdgeContainer;
	protected declare _points: EShapeLinePoints;

	constructor(type = EShapeType.CONNECTOR_LINE) {
		super(type);
		this.fill.enable = false;
		const sx = EShapeDefaults.SIZE_X;
		const sy = EShapeDefaults.SIZE_Y;
		const hx = sx * 0.5;
		const hy = sy * 0.5;
		this._points = new EShapeLinePoints(
			this,
			this.toValues(-hx, -hy, +hx, +hy, sx, sy, []),
			[],
			EShapePointsStyle.NONE
		);
		this._edge = new EShapeConnectorEdgeContainerImpl(this);
	}

	get points(): EShapeLinePoints {
		return this._points;
	}

	get edge(): EShapeConnectorEdgeContainer {
		return this._edge;
	}

	attach(parent: EShapeContainer | EShape, at?: number): this {
		super.attach(parent, at);
		this.fit();
		return this;
	}

	fit(): void {
		const parent = this.parent;
		if (parent == null) {
			return;
		}

		const work = (EShapeConnectorLine.WORK_EDGE_POINT ??= new Point());
		const points = this.points;
		const values = points.values;
		const valuesLength = values.length;
		if (valuesLength < 4) {
			for (let i = valuesLength; i < 4; ++i) {
				values[i] = 0;
			}
		}
		const transform = this.transform;
		const transformPosition = transform.position;
		const x = transformPosition.x;
		const y = transformPosition.y;
		let x0 = x + values[0];
		let y0 = y + values[1];
		let x1 = x + values[6];
		let y1 = y + values[7];

		//
		this.updateTransform();

		// Left
		const edge = this.edge;
		const left = edge.left;
		const leftShape = left.shape;
		if (leftShape != null) {
			const size = leftShape.size;
			work.set(size.x * left.x, size.y * left.y);
			leftShape.toGlobal(work, work);
			parent.toLocal(work, undefined, work, true);
			x0 = work.x;
			y0 = work.y;
		}

		// Right
		const right = edge.right;
		const rightShape = right.shape;
		if (rightShape != null) {
			const size = rightShape.size;
			work.set(size.x * right.x, size.y * right.y);
			rightShape.toGlobal(work, work);
			parent.toLocal(work, undefined, work, true);
			x1 = work.x;
			y1 = work.y;
		}

		this.disallowUploadedUpdate();
		const cx = (x0 + x1) * 0.5;
		const cy = (y0 + y1) * 0.5;
		const dx0 = x0 - cx;
		const dy0 = y0 - cy;
		const dx1 = x1 - cx;
		const dy1 = y1 - cy;
		const sx = Math.max(Math.abs(dx0), Math.abs(dx1));
		const sy = Math.max(Math.abs(dy0), Math.abs(dy1));
		transformPosition.set(cx, cy);
		transform.scale.set(1, 1);
		transform.rotation = 0;
		transform.skew.set(0, 0);
		points.size.set(sx, sy);
		this.size.set(sx, sy);
		points.set(this.toValues(dx0, dy0, dx1, dy1, sx, sy, values));
		this.allowUploadedUpdate();
	}

	protected toValues(
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		sx: number,
		sy: number,
		result: number[]
	): number[] {
		let iv = -1;
		result[++iv] = x0;
		result[++iv] = y0;
		result[++iv] = x1;
		result[++iv] = y1;
		return result;
	}

	copy(source: EShape, part: EShapeCopyPart = EShapeCopyPart.ALL): this {
		super.copy(source, part);
		if (source instanceof EShapeConnectorLine) {
			this.edge.copy(source.edge);
		}
		return this;
	}

	clone(): EShapeConnectorLine {
		return new EShapeConnectorLine().copy(this, EShapeCopyPart.ALL & ~EShapeCopyPart.POINTS);
	}

	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		result[15] = manager.addResource(
			`[${this._edge.serialize(manager)},${this._points.style}]`
		);
		return result;
	}
}
