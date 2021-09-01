/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeAcceptor, EShapeAcceptorEdge } from "./e-shape-acceptor";
import { EShapeAcceptorType } from "./e-shape-acceptor-type";

export class EShapeAcceptorImpl implements EShapeAcceptor {
	protected _edges: Map<string, EShapeAcceptorEdge>;

	constructor() {
		this._edges = new Map<string, EShapeAcceptorEdge>();
	}

	add(id: string, type: EShapeAcceptorType, x: number, y: number): boolean {
		this._edges.set(id, {
			type,
			x,
			y
		});
		return true;
	}

	remove(id: string): EShapeAcceptorEdge | null {
		const edges = this._edges;
		const result = edges.get(id);
		if (result != null) {
			edges.delete(id);
			return result;
		}
		return null;
	}

	size(): number {
		return this._edges.size;
	}

	get(id: string): EShapeAcceptorEdge | null {
		return this._edges.get(id) || null;
	}

	each(iteratee: (edge: EShapeAcceptorEdge, id: string) => void): this {
		this._edges.forEach(iteratee);
		return this;
	}

	contains(id: string): boolean {
		return this._edges.has(id);
	}

	clear(): boolean {
		const edges = this._edges;
		if (0 < edges.size) {
			edges.clear();
			return true;
		}
		return false;
	}
}
