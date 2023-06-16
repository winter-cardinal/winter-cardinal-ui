/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { isNumber } from "../util/is-number";
import { isString } from "../util/is-string";
import { toEnum } from "../util/to-enum";
import { EShape } from "./e-shape";
import { EShapeAcceptor } from "./e-shape-acceptor";
import { EShapeAcceptorEdge } from "./e-shape-acceptor-edge";
import { EShapeAcceptorEdgeNormal } from "./e-shape-acceptor-edge-normal";
import { EShapeAcceptorEdgeSide } from "./e-shape-acceptor-edge-side";
import { EShapeAcceptorEdgeType } from "./e-shape-acceptor-edge-type";

export class EShapeAcceptorImpl implements EShapeAcceptor {
	protected _edges: Map<string, EShapeAcceptorEdge>;

	constructor() {
		this._edges = new Map<string, EShapeAcceptorEdge>();
	}

	add(
		id: string,
		type: EShapeAcceptorEdgeType | keyof typeof EShapeAcceptorEdgeType,
		x: number,
		y: number
	): boolean;
	add(
		id: string,
		type: EShapeAcceptorEdgeType | keyof typeof EShapeAcceptorEdgeType,
		x: number,
		y: number,
		nx: number,
		ny: number
	): boolean;
	add(
		id: string,
		type: EShapeAcceptorEdgeType | keyof typeof EShapeAcceptorEdgeType,
		x: number,
		y: number,
		nx: number,
		ny: number,
		sx: number,
		sy: number
	): boolean;
	add(
		id: string,
		type: EShapeAcceptorEdgeType | keyof typeof EShapeAcceptorEdgeType,
		x: number,
		y: number,
		nx: number,
		ny: number,
		sx: number,
		sy: number,
		side:
			| EShapeAcceptorEdgeSide
			| keyof typeof EShapeAcceptorEdgeSide
			| Array<keyof typeof EShapeAcceptorEdgeSide>
	): boolean;
	add(
		id: string,
		type: EShapeAcceptorEdgeType | keyof typeof EShapeAcceptorEdgeType,
		x: number,
		y: number,
		nx?: number,
		ny?: number,
		sx?: number,
		sy?: number,
		side?:
			| EShapeAcceptorEdgeSide
			| keyof typeof EShapeAcceptorEdgeSide
			| Array<keyof typeof EShapeAcceptorEdgeSide>
	): boolean {
		this._edges.set(id, {
			type: toEnum(type, EShapeAcceptorEdgeType),
			x,
			y,
			normal: this.toNormal(x, y, nx, ny),
			size: {
				x: sx ?? 0,
				y: sy ?? 0
			},
			side: this.toSide(side)
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

	protected toSide(
		side?:
			| EShapeAcceptorEdgeSide
			| keyof typeof EShapeAcceptorEdgeSide
			| Array<keyof typeof EShapeAcceptorEdgeSide>
	): EShapeAcceptorEdgeSide {
		if (side == null) {
			return EShapeAcceptorEdgeSide.TOP;
		} else if (isNumber(side)) {
			return side;
		} else if (isString(side)) {
			return toEnum(side, EShapeAcceptorEdgeSide);
		} else {
			let result: EShapeAcceptorEdgeSide = EShapeAcceptorEdgeSide.NONE;
			for (let i = 0, imax = side.length; i < imax; ++i) {
				result |= toEnum(side[i], EShapeAcceptorEdgeSide);
			}
			return result;
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
