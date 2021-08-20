/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeConnectorContainer } from "./e-shape-connector-container";
import { EShapeConnectorEdge } from "./e-shape-connector-edge";

export class EShapeConnectorContainerImpl implements EShapeConnectorContainer {
	protected _parent: EShape;
	protected _connectors: Set<EShapeConnectorEdge>;
	protected _onFitBound?: (connector: EShapeConnectorEdge) => void;
	protected _onFitBoundForcibly?: (connector: EShapeConnectorEdge) => void;

	constructor(parent: EShape) {
		this._parent = parent;
		this._connectors = new Set<EShapeConnectorEdge>();
	}

	add(target: EShapeConnectorEdge): boolean {
		const connectors = this._connectors;
		if (!connectors.has(target)) {
			connectors.add(target);
			return true;
		}
		return false;
	}

	contains(target: EShapeConnectorEdge): boolean {
		return this._connectors.has(target);
	}

	size(): number {
		return this._connectors.size;
	}

	remove(target: EShapeConnectorEdge): boolean {
		return this._connectors.delete(target);
	}

	clear(): boolean {
		const connectors = this._connectors;
		if (0 < connectors.size) {
			this._connectors.clear();
			return true;
		}
		return false;
	}

	fit(forcibly?: boolean): void {
		this._connectors.forEach(this.toOnFitBound(forcibly));
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
		this._connectors.forEach((edge: EShapeConnectorEdge): void => {
			edge.shape = parent;
		});
		return this;
	}

	detach(): this {
		this._connectors.forEach((edge: EShapeConnectorEdge): void => {
			edge.shape = null;
		});
		return this;
	}
}
