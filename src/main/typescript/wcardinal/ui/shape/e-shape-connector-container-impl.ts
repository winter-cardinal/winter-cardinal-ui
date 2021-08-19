/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeConnectorContainer } from "./e-shape-connector-container";
import { EShapeConnector } from "./e-shape-connector";

export class EShapeConnectorContainerImpl implements EShapeConnectorContainer {
	protected _parent: unknown;
	protected _connectors: Set<EShapeConnector>;
	protected _onFitBound?: (connector: EShapeConnector) => void;
	protected _onFitBoundForcibly?: (connector: EShapeConnector) => void;

	constructor(parent: unknown) {
		this._parent = parent;
		this._connectors = new Set<EShapeConnector>();
	}

	add(target: EShapeConnector): boolean {
		const connectors = this._connectors;
		if (!connectors.has(target)) {
			connectors.add(target);
			return true;
		}
		return false;
	}

	contains(target: EShapeConnector): boolean {
		return this._connectors.has(target);
	}

	size(): number {
		return this._connectors.size;
	}

	remove(target: EShapeConnector): boolean {
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

	protected toOnFitBound(forcibly?: boolean): (connector: EShapeConnector) => void {
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

	protected newOnFitBound(forcibly?: boolean): (connector: EShapeConnector) => void {
		return (connector: EShapeConnector): void => {
			this.onFit(connector, forcibly);
		};
	}

	protected onFit(target: EShapeConnector, forcibly?: boolean): void {
		const edge = target.edge;
		const left = edge.left;
		const parent = this._parent;
		if (left.shape === parent) {
			left.fit(forcibly);
		} else {
			const right = edge.right;
			if (right.shape === parent) {
				right.fit(forcibly);
			}
		}
	}
}
