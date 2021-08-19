/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapeConnector } from "../e-shape-connector";
import { EShapeConnectorEdgeContainer } from "../e-shape-connector-edge-container";
import { EShapeConnectorEdgeContainerImpl } from "../e-shape-connector-edge-container-impl";
import { EShapeLineBase } from "./e-shape-line-base";
import { EShapeLinePoints } from "./e-shape-line-points";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeCopyPart } from "../e-shape-copy-part";
import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShape } from "../e-shape";
import { EShapeContainer } from "../e-shape-container";

export class EShapeConnectorLine extends EShapeLineBase implements EShapeConnector {
	protected _edge: EShapeConnectorEdgeContainer;
	protected declare _points: EShapeLinePoints;
	protected _leftLocalId: number;
	protected _rightLocalId: number;

	constructor(type = EShapeType.CONNECTOR_LINE) {
		super(type);
		this._leftLocalId = 0;
		this._rightLocalId = 0;
		this.fill.enable = false;
		const sx = EShapeDefaults.SIZE_X;
		const sy = EShapeDefaults.SIZE_Y;
		const hx = sx * 0.5;
		const hy = sy * 0.5;
		this._points = new EShapeLinePoints(this).set(
			this.toValues(-hx, -hy, +hx, +hy, sx, sy, [])
		);
		this._edge = new EShapeConnectorEdgeContainerImpl(this, (): void => {
			this.onEdgeChange();
		});
	}

	get points(): EShapeLinePoints {
		return this._points;
	}

	get edge(): EShapeConnectorEdgeContainer {
		return this._edge;
	}

	attach(parent: EShapeContainer | EShape, at?: number): this {
		super.attach(parent, at);
		this.edge.fit(true);
		return this;
	}

	protected onEdgeChange(): void {
		const edge = this.edge;
		const left = edge.left;
		const leftLocalId = left.localId;
		const right = edge.right;
		const rightLocalId = right.localId;
		if (this._leftLocalId !== leftLocalId || this._rightLocalId !== rightLocalId) {
			this._leftLocalId = leftLocalId;
			this._rightLocalId = rightLocalId;

			// Left
			const leftLocal = left.local;
			const lx = leftLocal.x;
			const ly = leftLocal.y;

			// Right
			const rightLocal = right.local;
			const rx = rightLocal.x;
			const ry = rightLocal.y;

			this.disallowUploadedUpdate();
			const cx = (lx + rx) * 0.5;
			const cy = (ly + ry) * 0.5;
			const transform = this.transform;
			transform.position.set(cx, cy);
			transform.scale.set(1, 1);
			transform.rotation = 0;
			transform.skew.set(0, 0);
			const sx = Math.abs(lx - rx);
			const sy = Math.abs(ly - ry);
			this.size.set(sx, sy);
			const points = this.points;
			points.set(this.toValues(lx - cx, ly - cy, rx - cx, ry - cy, sx, sy, points.values));
			this.allowUploadedUpdate();
		}
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
		return new EShapeConnectorLine().copy(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		result[15] = manager.addResource(
			`[${this._edge.serialize(manager)},${this._points.style}]`
		);
		return result;
	}
}
