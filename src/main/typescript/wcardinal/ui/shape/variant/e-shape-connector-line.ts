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
import { toPointsBoundary } from "../e-shape-points-formatted";
import { EShapeConnectorBody } from "../e-shape-connector-body";
import { EShapeConnectorBodyImpl } from "../e-shape-connector-body-impl";
import { EShapeConnectorEdge } from "../e-shape-connector-edge";
import { EShapeLockPart } from "./e-shape-lock-part";
import { EShapeLock } from "./e-shape-lock";

export class EShapeConnectorLine extends EShapeLineBase implements EShapeConnector {
	protected static WORK_BOUNDARY: [number, number, number, number];
	protected _edge: EShapeConnectorEdgeContainer;
	protected _body: EShapeConnectorBody;
	protected declare _points: EShapeLinePoints;
	protected _tailLocalId: number;
	protected _tailNormalId: number;
	protected _tailMargin: number;
	protected _headLocalId: number;
	protected _headNormalId: number;
	protected _headMargin: number;
	protected _bodyId: number;
	protected _lockConnector: EShapeLock;

	constructor(type: EShapeType = EShapeType.CONNECTOR_LINE) {
		super(type);
		this._tailLocalId = 0;
		this._tailNormalId = 0;
		this._tailMargin = 0;
		this._headLocalId = 0;
		this._headNormalId = 0;
		this._headMargin = 0;
		this._bodyId = 0;
		this._lockConnector = new EShapeLock();
		const sx = EShapeDefaults.SIZE_X;
		const sy = EShapeDefaults.SIZE_Y;
		const hx = sx * 0.5;
		const hy = sy * 0.5;
		this._points = new EShapeLinePoints(this).set([-hx, -hy, +hx, +hy]);
		const onChangeBound = (): void => {
			this.onChange();
		};
		this._edge = new EShapeConnectorEdgeContainerImpl(this, onChangeBound);
		this._body = new EShapeConnectorBodyImpl(this, onChangeBound);
	}

	override lock(part: EShapeLockPart): this {
		if (part & EShapeLockPart.CONNECTOR) {
			this._lockConnector.lock();
		}
		super.lock(part);
		return this;
	}

	override unlock(part: EShapeLockPart, invoke: boolean): this {
		super.unlock(part, invoke);
		if (part & EShapeLockPart.CONNECTOR) {
			if (this._lockConnector.unlock() && invoke) {
				this.onChange();
			}
		}
		return this;
	}

	get points(): EShapeLinePoints {
		return this._points;
	}

	get edge(): EShapeConnectorEdgeContainer {
		return this._edge;
	}

	get body(): EShapeConnectorBody {
		return this._body;
	}

	onAttach(): void {
		super.onAttach();
		this._edge.attach();
	}

	onDetach(exceptions?: Set<EShape>): void {
		this._edge.detach(exceptions);
		super.onDetach(exceptions);
	}

	protected onChange(): void {
		if (this._lockConnector.isLocked()) {
			return;
		}

		const edge = this._edge;
		const tail = edge.tail;
		const tailLocalId = tail.localId;
		const tailNormalId = tail.normalId;
		const tailMargin = tail.margin;
		const head = edge.head;
		const headLocalId = head.localId;
		const headNormalId = head.normalId;
		const headMargin = head.margin;
		const body = this._body;
		const bodyId = body.id;
		if (
			this._tailLocalId !== tailLocalId ||
			this._tailNormalId !== tailNormalId ||
			this._tailMargin !== tailMargin ||
			this._headLocalId !== headLocalId ||
			this._headNormalId !== headNormalId ||
			this._headMargin !== headMargin ||
			this._bodyId !== bodyId
		) {
			this._tailLocalId = tailLocalId;
			this._tailNormalId = tailNormalId;
			this._tailMargin = tailMargin;
			this._headLocalId = headLocalId;
			this._headNormalId = headNormalId;
			this._headMargin = headMargin;
			this._bodyId !== bodyId;

			const transform = this.transform;
			const transformPosition = transform.position;
			const px = transformPosition.x;
			const py = transformPosition.y;
			const points = this._points;
			const values = points.values;

			// Fill points
			this.fillPoints(tail, tailMargin, head, headMargin, body, px, py, values);

			// Center & size
			const boundary = (EShapeConnectorLine.WORK_BOUNDARY ??= [0, 0, 0, 0]);
			toPointsBoundary(values, boundary);
			const cx = (boundary[2] + boundary[0]) * 0.5;
			const cy = (boundary[3] + boundary[1]) * 0.5;
			const sx = boundary[2] - boundary[0];
			const sy = boundary[3] - boundary[1];

			// Adjust values
			for (let i = 0, imax = values.length; i < imax; i += 2) {
				values[i + 0] -= cx;
				values[i + 1] -= cy;
			}

			this.lock(EShapeLockPart.TRANSFORM_AND_UPLOADED);
			transformPosition.set(px + cx, py + cy);
			transform.scale.set(1, 1);
			transform.rotation = 0;
			transform.skew.set(0, 0);
			points.toFitted(sx, sy);
			this.size.set(sx, sy);
			points.set(values);
			this.unlock(EShapeLockPart.TRANSFORM_AND_UPLOADED, true);
		}
	}

	protected fillPoints(
		tail: EShapeConnectorEdge,
		tailMargin: number,
		head: EShapeConnectorEdge,
		headMargin: number,
		body: EShapeConnectorBody,
		px: number,
		py: number,
		values: number[]
	): void {
		// Tail
		const threshold = 0.000001;
		const tailLocal = tail.local;
		const tailLocalX = tailLocal.x;
		const tailLocalY = tailLocal.y;
		const x0 = tailLocalX - px;
		const y0 = tailLocalY - py;

		// Head
		const headLocal = head.local;
		const headLocalX = headLocal.x;
		const headLocalY = headLocal.y;
		const x1 = headLocalX - px;
		const y1 = headLocalY - py;

		// Body
		const bodyValues = body.values;
		const bodyValuesLength = bodyValues.length;

		// Tail points
		values[0] = x0;
		values[1] = y0;

		// Body points
		if (0 < bodyValuesLength) {
			const cx = (x1 + x0) * 0.5;
			const cy = (y1 + y0) * 0.5;
			const dx = x1 - x0;
			const dy = y1 - y0;
			const a = Math.atan2(dy, dx);
			const c = Math.cos(a);
			const s = Math.sin(a);
			const l = Math.sqrt(dx * dx + dy * dy);
			for (let i = 0; i < bodyValuesLength; i += 2) {
				const x = bodyValues[i + 0];
				const y = bodyValues[i + 1];
				values[i + 2] = cx + (c * x - s * y) * l;
				values[i + 3] = cy + (c * y + s * x) * l;
			}
		}

		// Head points
		values[2 + bodyValuesLength] = x1;
		values[3 + bodyValuesLength] = y1;

		// Tail margin
		if (tailMargin !== 0) {
			const dx = values[2] - x0;
			const dy = values[3] - y0;
			const d = dx * dx + dy * dy;
			if (threshold < d) {
				const f = tailMargin / Math.sqrt(dx * dx + dy * dy);
				values[0] = x0 + dx * f;
				values[1] = y0 + dy * f;
			}
		}

		// Head margin
		if (headMargin !== 0) {
			const dx = values[0 + bodyValuesLength] - x1;
			const dy = values[1 + bodyValuesLength] - y1;
			const d = dx * dx + dy * dy;
			if (threshold < d) {
				const f = headMargin / Math.sqrt(dx * dx + dy * dy);
				values[2 + bodyValuesLength] = x1 + dx * f;
				values[3 + bodyValuesLength] = y1 + dy * f;
			}
		}

		// Remove the rest
		values.length = bodyValuesLength + 4;
	}

	copy(source: EShape, part: EShapeCopyPart = EShapeCopyPart.ALL): this {
		this.lock(EShapeLockPart.ALL);
		super.copy(source, part);
		if (source instanceof EShapeConnectorLine) {
			this._edge.copy(source.edge);
			this._body.copy(source.body);
		}
		this.unlock(EShapeLockPart.ALL, true);
		return this;
	}

	clone(): EShapeConnectorLine {
		const constructor = this.constructor as typeof EShapeConnectorLine;
		return new constructor(this.type).copy(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		const edgeId = this._edge.serialize(manager);
		const bodyId = this._body.serialize(manager);
		const pointsId = this._points.serialize(manager);
		result[15] = manager.addResource(`[${edgeId},${pointsId},${bodyId}]`);
		return result;
	}
}
