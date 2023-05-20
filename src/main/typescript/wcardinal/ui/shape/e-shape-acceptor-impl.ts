/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeAcceptor, EShapeAcceptorEdge, EShapeAcceptorEdgeNormal } from "./e-shape-acceptor";
import { EShapeAcceptorType } from "./e-shape-acceptor-type";

export class EShapeAcceptorImpl implements EShapeAcceptor {
	protected _edges: Map<string, EShapeAcceptorEdge>;

	constructor() {
		this._edges = new Map<string, EShapeAcceptorEdge>();
	}

	add(id: string, type: EShapeAcceptorType, x: number, y: number): boolean;
	add(
		id: string,
		type: EShapeAcceptorType,
		x: number,
		y: number,
		nx: number,
		ny: number
	): boolean;
	add(
		id: string,
		type: EShapeAcceptorType,
		x: number,
		y: number,
		nx: number,
		ny: number,
		sx: number,
		sy: number
	): boolean;
	add(
		id: string,
		type: EShapeAcceptorType,
		x: number,
		y: number,
		nx?: number,
		ny?: number,
		sx?: number,
		sy?: number
	): boolean {
		this._edges.set(id, {
			type,
			x,
			y,
			normal: this.toNormal(x, y, nx, ny),
			size: {
				x: sx ?? 0,
				y: sy ?? 0
			}
		});
		return true;
	}

	protected toNormal(x: number, y: number, nx?: number, ny?: number): EShapeAcceptorEdgeNormal {
		if (nx != null && ny != null) {
			return {
				x: nx,
				y: ny
			};
		} else {
			const d = x * x + y * y;
			if (0.00001 < d) {
				const m = 1 / Math.sqrt(d);
				return {
					x: x * m,
					y: y * m
				};
			} else {
				return {
					x: 0,
					y: 0
				};
			}
		}
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

	get(shape: EShape, id: string): EShapeAcceptorEdge | null {
		return this._edges.get(id) || null;
	}

	each(shape: EShape, iteratee: (edge: EShapeAcceptorEdge, id: string) => void): this {
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
