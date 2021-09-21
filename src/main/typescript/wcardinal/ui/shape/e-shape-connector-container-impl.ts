/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeConnectorContainer } from "./e-shape-connector-container";
import { EShapeConnectorEdge } from "./e-shape-connector-edge";

export class EShapeConnectorContainerImpl implements EShapeConnectorContainer {
	protected _parent: EShape;
	protected _edges: Set<EShapeConnectorEdge>;
	protected _onFitBound?: (connector: EShapeConnectorEdge) => void;
	protected _onFitBoundForcibly?: (connector: EShapeConnectorEdge) => void;

	constructor(parent: EShape) {
		this._parent = parent;
		this._edges = new Set<EShapeConnectorEdge>();
	}

	add(target: EShapeConnectorEdge): boolean {
		const edges = this._edges;
		if (!edges.has(target)) {
			edges.add(target);
			return true;
		}
		return false;
	}

	contains(target: EShapeConnectorEdge): boolean {
		return this._edges.has(target);
	}

	size(): number {
		return this._edges.size;
	}

	remove(target: EShapeConnectorEdge): boolean {
		return this._edges.delete(target);
	}

	clear(): boolean {
		const edges = this._edges;
		if (0 < edges.size) {
			this._edges.clear();
			return true;
		}
		return false;
	}

	copy(source: EShapeConnectorContainer): this {
		const edges = this._edges;
		edges.clear();
		source.each((edge): void => {
			edges.add(edge);
		});
		return this;
	}

	each(iteratee: (edge: EShapeConnectorEdge) => void): this {
		this._edges.forEach(iteratee);
		return this;
	}

	fit(forcibly?: boolean): void {
		this._edges.forEach(this.toOnFitBound(forcibly));
	}

	protected toOnFitBound(forcibly?: boolean): (connector: EShapeConnectorEdge) => void {
		if (forcibly) {
			let result = this._onFitBoundForcibly;
			if (result == null) {
				result = this.newOnFitBound(true);
				this._onFitBoundForcibly = result;
			}
			return result;
		} else {
			let result = this._onFitBound;
			if (result == null) {
				result = this.newOnFitBound(false);
				this._onFitBound = result;
			}
			return result;
		}
	}

	protected newOnFitBound(forcibly?: boolean): (edge: EShapeConnectorEdge) => void {
		return (edge: EShapeConnectorEdge): void => {
			this.onFit(edge, forcibly);
		};
	}

	protected onFit(target: EShapeConnectorEdge, forcibly?: boolean): void {
		target.fit(forcibly);
	}

	attach(): this {
		const parent = this._parent;
		this._edges.forEach((edge: EShapeConnectorEdge): void => {
			edge.set(parent);
		});
		return this;
	}

	detach(): this {
		this._edges.forEach((edge: EShapeConnectorEdge): void => {
			edge.set(null);
		});
		return this;
	}
}
