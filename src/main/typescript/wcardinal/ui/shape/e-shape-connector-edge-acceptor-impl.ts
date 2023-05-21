/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeConnectorEdgeAcceptor } from "./e-shape-connector-edge-acceptor";

export interface EShapeConnectorEdgeAcceptorImplParent {
	onAcceptorChange(): void;
}

export class EShapeConnectorEdgeAcceptorImpl implements EShapeConnectorEdgeAcceptor {
	protected _parent: EShapeConnectorEdgeAcceptorImplParent;
	protected _shape: EShape | null;
	protected _edge: string | null;
	protected _x: number | null;
	protected _y: number | null;

	constructor(parent: EShapeConnectorEdgeAcceptorImplParent) {
		this._parent = parent;
		this._shape = null;
		this._edge = null;
		this._x = null;
		this._y = null;
	}

	get shape(): EShape | null {
		return this._shape;
	}

	set shape(shape: EShape | null) {
		this.set(shape);
	}

	get edge(): string | null {
		return this._edge;
	}

	set edge(edge: string | null) {
		this.set(undefined, edge);
	}

	get x(): number | null {
		return this._x;
	}

	set x(x: number | null) {
		this.set(undefined, undefined, x);
	}

	get y(): number | null {
		return this._y;
	}

	set y(y: number | null) {
		this.set(undefined, undefined, undefined, y);
	}

	copy(source: EShapeConnectorEdgeAcceptor): this {
		return this.set(source.shape, source.edge, source.x, source.y);
	}

	set(shape?: EShape | null, edge?: string | null, x?: number | null, y?: number | null): this {
		let isChanged = false;

		if (shape !== undefined && this._shape !== shape) {
			this._shape = shape;
			isChanged = true;
		}

		if (edge !== undefined && this._edge !== edge) {
			this._edge = edge;
			isChanged = true;
		}

		if (x !== undefined && this._x !== x) {
			this._x = x;
			isChanged = true;
		}

		if (y !== undefined && this._y !== y) {
			this._y = y;
			isChanged = true;
		}

		if (isChanged) {
			this._parent.onAcceptorChange();
		}

		return this;
	}
}
