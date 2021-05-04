/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { PolygonImpl } from "./polygon-impl";

export class PolygonRectangleRounded extends PolygonImpl {
	protected _arcVertices0?: number[];
	protected _arcVertices1?: number[];

	protected getArcVertices0(): number[] {
		let result = this._arcVertices0;
		if (result == null) {
			result = [];
			const dc = this.getDivisionCount();
			const ad = (Math.PI * 0.5) / dc;
			for (let i = 0; i <= dc; ++i) {
				const a = ad * i;
				result.push(Math.cos(a), Math.sin(a));
			}
			this._arcVertices0 = result;
		}
		return result;
	}

	protected getArcVertices1(): number[] {
		let result = this._arcVertices1;
		if (result == null) {
			result = [];
			const dc = this.getDivisionCount();
			const ad = (Math.PI * 0.5) / (dc + 1);
			for (let i = 0; i <= dc; ++i) {
				const a = ad * i;
				result.push(Math.cos(a), Math.sin(a));
			}
			this._arcVertices1 = result;
		}
		return result;
	}

	protected newVertices(): number[] {
		const dc = this.getDivisionCount();
		const result = this.newArray(4 * dc + 4);
		this.updateVertices(1.0, 1.0, 0.5, result);
		return result;
	}

	protected updateVertices(
		sizeX: number,
		sizeY: number,
		radius: number,
		result: number[]
	): number[] {
		const ax = Math.abs(sizeX);
		const ay = Math.abs(sizeY);
		const az = radius * Math.min(ax, ay);
		const rx = 0.5 * (az / ax);
		const ry = 0.5 * (az / ay);
		this.updateVertices1(rx, ry, result);
		return result;
	}

	protected updateVertices0(rx: number, ry: number, result: number[]): number[] {
		const x0 = -0.5 + rx;
		const y0 = -0.5 + ry;
		const av = this.getArcVertices0();
		const dc = this.getDivisionCount();
		for (let i = 0; i <= dc; ++i) {
			const i0 = i << 1;
			const x = x0 - rx * av[i0];
			const y = y0 - ry * av[i0 + 1];
			result[i0] = x;
			result[i0 + 1] = y;

			const i1 = (dc + dc + 1 - i) << 1;
			result[i1] = -x;
			result[i1 + 1] = y;

			const i2 = (i + dc + dc + 2) << 1;
			result[i2] = -x;
			result[i2 + 1] = -y;

			const i3 = (dc + dc + dc + dc + 3 - i) << 1;
			result[i3] = x;
			result[i3 + 1] = -y;
		}
		return result;
	}

	protected updateVertices1(rx: number, ry: number, result: number[]): number[] {
		const x0 = -0.5 + rx;
		const y0 = -0.5 + ry;
		const av = this.getArcVertices1();
		const dc = this.getDivisionCount();
		for (let i = 0; i <= dc; ++i) {
			const i0 = i << 1;
			const av0 = av[i0];
			const av1 = av[i0 + 1];
			const x1 = x0 - rx * av0;
			const y1 = y0 - ry * av1;
			result[i0] = x1;
			result[i0 + 1] = y1;

			const x2 = -x0 + rx * av1;
			const y2 = y0 - ry * av0;
			const i1 = (i + dc + 1) << 1;
			result[i1] = x2;
			result[i1 + 1] = y2;

			const i2 = (i + dc + dc + 2) << 1;
			result[i2] = -x1;
			result[i2 + 1] = -y1;

			const i3 = (i + dc + dc + dc + 3) << 1;
			result[i3] = -x2;
			result[i3 + 1] = -y2;
		}
		return result;
	}

	protected static _instance?: PolygonRectangleRounded;
	static getInstance(): PolygonRectangleRounded {
		let result = this._instance;
		if (result == null) {
			result = new PolygonRectangleRounded();
		}
		return result;
	}
}
