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

	constructor(parent: EShapeConnectorEdgeAcceptorImplParent) {
		this._parent = parent;
		this._shape = null;
		this._edge = null;
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

	copy(source: EShapeConnectorEdgeAcceptor): this {
		return this.set(source.shape, source.edge);
	}

	set(shape?: EShape | null, edge?: string | null): this {
		let isChanged = false;

		if (shape !== undefined && this._shape !== shape) {
			this._shape = shape;
			isChanged = true;
		}

		if (edge !== undefined && this._edge !== edge) {
			this._edge = edge;
			isChanged = true;
		}

		if (isChanged) {
			this._parent.onAcceptorChange();
		}

		return this;
	}
}
