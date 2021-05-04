/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { PolygonImpl } from "./polygon-impl";

export class PolygonTriangleRounded extends PolygonImpl {
	protected _topArcVertices?: number[];
	protected _leftArcVertices?: number[];

	protected getTopArcVertices(): number[] {
		let result = this._topArcVertices;
		if (result == null) {
			result = [];
			const dc = this.getDivisionCount();
			const a0 = +Math.PI / 2 + Math.PI / 3;
			const ad = -(Math.PI * 2) / 3 / dc;
			for (let i = 0; i <= dc; ++i) {
				const a = a0 + ad * i;
				result.push(Math.cos(a), Math.sin(a));
			}
			this._topArcVertices = result;
		}
		return result;
	}

	protected getLeftArcVertices(): number[] {
		let result = this._leftArcVertices;
		if (result == null) {
			result = [];
			const dc = this.getDivisionCount();
			const a0 = -Math.PI / 2;
			const ad = -(Math.PI * 2) / 3 / dc;
			for (let i = 0; i <= dc; ++i) {
				const a = a0 + ad * i;
				result.push(Math.cos(a), Math.sin(a));
			}
			this._leftArcVertices = result;
		}
		return result;
	}

	protected newVertices(): number[] {
		const dc = this.getDivisionCount();
		const result = this.newArray(3 * dc + 3);
		this.updateVertices(1.0, 1.0, 0.5, result);
		return result;
	}

	protected updateVertices(
		sizeX: number,
		sizeY: number,
		radius: number,
		result: number[]
	): number[] {
		const p = sizeX / (sizeX + Math.sqrt(sizeX * sizeX + 4 * sizeY * sizeY)); // Incenter position
		const pr = p * radius;

		const lx = -0.5 * (1 - radius);
		const ly = +0.5 - p * radius;
		const ty = -0.5 + (1 - p) * radius;
		const rx = -lx;

		const tav = this.getTopArcVertices();
		const lav = this.getLeftArcVertices();

		const dc = this.getDivisionCount();
		for (let i = 0; i <= dc; ++i) {
			const it = i << 1;
			const prlavx = pr * lav[it];
			const prlavy = pr * lav[it + 1];
			result[it] = lx + prlavx;
			result[it + 1] = ly - prlavy;

			const il = (i + dc + 1) << 1;
			result[il] = pr * tav[it];
			result[il + 1] = ty - pr * tav[it + 1];

			const ir = (dc + dc + dc + 2 - i) << 1;
			result[ir] = rx - prlavx;
			result[ir + 1] = ly - prlavy;
		}
		return result;
	}

	protected static _instance?: PolygonTriangleRounded;
	static getInstance(): PolygonTriangleRounded {
		let result = this._instance;
		if (result == null) {
			result = new PolygonTriangleRounded();
		}
		return result;
	}
}
