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

export class EShapeConnectorLine extends EShapeLineBase implements EShapeConnector {
	protected _edge: EShapeConnectorEdgeContainer;
	protected declare _points: EShapeLinePoints;
	protected _tailLocalId: number;
	protected _tailMargin: number;
	protected _headLocalId: number;
	protected _headMargin: number;

	constructor(type = EShapeType.CONNECTOR_LINE) {
		super(type);
		this._tailLocalId = 0;
		this._tailMargin = 0;
		this._headLocalId = 0;
		this._headMargin = 0;
		const sx = EShapeDefaults.SIZE_X;
		const sy = EShapeDefaults.SIZE_Y;
		const hx = sx * 0.5;
		const hy = sy * 0.5;
		this._points = new EShapeLinePoints(this).set(this.toValues(-hx, -hy, +hx, +hy, 0, 0, []));
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

	onAttach(): void {
		super.onAttach();
		this._edge.attach();
	}

	onDetach(): void {
		this._edge.detach();
		super.onDetach();
	}

	protected onEdgeChange(): void {
		const edge = this._edge;
		const tail = edge.tail;
		const tailLocalId = tail.localId;
		const tailMargin = tail.margin;
		const head = edge.head;
		const headLocalId = head.localId;
		const headMargin = head.margin;
		if (
			this._tailLocalId !== tailLocalId ||
			this._tailMargin !== tailMargin ||
			this._headLocalId !== headLocalId ||
			this._headMargin !== headMargin
		) {
			this._tailLocalId = tailLocalId;
			this._tailMargin = tailMargin;
			this._headLocalId = headLocalId;
			this._headMargin = headMargin;

			// Left
			const tailLocal = tail.local;
			const tailLocalX = tailLocal.x;
			const tailLocalY = tailLocal.y;

			// Right
			const headLocal = head.local;
			const headLocalX = headLocal.x;
			const headLocalY = headLocal.y;

			// Values
			const transform = this.transform;
			const transformPosition = transform.position;
			const px = transformPosition.x;
			const py = transformPosition.y;
			const points = this._points;
			const values = points.values;
			this.toValues(
				tailLocalX - px,
				tailLocalY - py,
				headLocalX - px,
				headLocalY - py,
				tailMargin,
				headMargin,
				values
			);

			// Center & size
			let xmax = values[0];
			let xmin = xmax;
			let ymax = values[1];
			let ymin = ymax;
			for (let i = 2, imax = values.length; i < imax; i += 2) {
				const x = values[i];
				const y = values[i + 1];
				xmax = Math.max(x, xmax);
				xmin = Math.min(x, xmin);
				ymax = Math.max(y, ymax);
				ymin = Math.min(y, ymin);
			}
			const dx = (xmax + xmin) * 0.5;
			const dy = (ymax + ymin) * 0.5;
			const sx = xmax - xmin;
			const sy = ymax - ymin;
			const cx = dx + px;
			const cy = dy + py;

			// Adjust values
			for (let i = 0, imax = values.length; i < imax; i += 2) {
				values[i] -= dx;
				values[i + 1] -= dy;
			}

			this.disallowUploadedUpdate();
			transformPosition.set(cx, cy);
			transform.scale.set(1, 1);
			transform.rotation = 0;
			transform.skew.set(0, 0);
			this.size.set(sx, sy);
			points.toFitted();
			points.set(values);
			this.allowUploadedUpdate();
		}
	}

	protected toValues(
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		margin0: number,
		margin1: number,
		result: number[]
	): number[] {
		const threshold = 0.000001;
		const resultLength = result.length;
		if (resultLength <= 4) {
			if (margin0 !== 0 || margin1 !== 0) {
				const dx = x1 - x0;
				const dy = y1 - y0;
				const d = dx * dx + dy * dy;
				if (threshold < d) {
					const f = 1 / Math.sqrt(dx * dx + dy * dy);
					const nx = dx * f;
					const ny = dy * f;
					result[0] = x0 + margin0 * nx;
					result[1] = y0 + margin0 * ny;
					result[2] = x1 - margin1 * nx;
					result[3] = y1 - margin1 * ny;
				} else {
					result[0] = x0;
					result[1] = y0;
					result[2] = x1;
					result[3] = y1;
				}
			} else {
				result[0] = x0;
				result[1] = y0;
				result[2] = x1;
				result[3] = y1;
			}
		} else {
			if (margin0 !== 0) {
				const dx = result[2] - x0;
				const dy = result[3] - y0;
				const d = dx * dx + dy * dy;
				if (threshold < d) {
					const f = 1 / Math.sqrt(dx * dx + dy * dy);
					result[0] = x0 + margin0 * dx * f;
					result[1] = y0 + margin0 * dy * f;
				} else {
					result[0] = x0;
					result[1] = y0;
				}
			} else {
				result[0] = x0;
				result[1] = y0;
			}

			if (margin1 !== 0) {
				const dx = result[resultLength - 4] - x1;
				const dy = result[resultLength - 3] - y1;
				const d = dx * dx + dy * dy;
				if (threshold < d) {
					const f = 1 / Math.sqrt(dx * dx + dy * dy);
					result[resultLength - 2] = x1 + margin1 * dx * f;
					result[resultLength - 1] = y1 + margin1 * dy * f;
				} else {
					result[resultLength - 2] = x1;
					result[resultLength - 1] = y1;
				}
			} else {
				result[resultLength - 2] = x1;
				result[resultLength - 1] = y1;
			}
		}
		return result;
	}

	copy(source: EShape, part: EShapeCopyPart = EShapeCopyPart.ALL): this {
		super.copy(source, part);
		if (source instanceof EShapeConnectorLine) {
			this._edge.copy(source.edge);
		}
		return this;
	}

	clone(): EShapeConnectorLine {
		return new EShapeConnectorLine().copy(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		result[15] = manager.addResource(
			`[${this._edge.serialize(manager)},${this._points.serialize(manager)}]`
		);
		return result;
	}
}
