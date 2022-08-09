/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class EShapeConnectorElbowPointsFillter {
	protected _x: number;
	protected _y: number;
	protected _z: number;
	protected _values: number[];
	index: number;
	protected _threshold = 0.000001;

	constructor(x: number, y: number, values: number[]) {
		this._x = x;
		this._y = y;
		this._z = 0;
		this._values = values;
		values[0] = x;
		values[1] = y;
		this.index = 0;
	}

	get x(): number {
		return this._x;
	}

	set x(x: number) {
		if (this._z === 0 || this._threshold < Math.abs(this._x - x)) {
			this._x = x;
			const index = this.index;
			const values = this._values;
			if (this._z === 1) {
				values[index + 0] = this._x;
				values[index + 1] = this._y;
			} else {
				values[index + 2] = this._x;
				values[index + 3] = this._y;
				this.index += 2;
				this._z = 1;
			}
		}
	}

	get y(): number {
		return this._y;
	}

	set y(y: number) {
		if (this._z === 0 || this._threshold < Math.abs(this._y - y)) {
			this._y = y;
			const index = this.index;
			const values = this._values;
			if (this._z === 2) {
				values[index + 0] = this._x;
				values[index + 1] = this._y;
			} else {
				values[index + 2] = this._x;
				values[index + 3] = this._y;
				this.index += 2;
				this._z = 2;
			}
		}
	}

	tail(
		x: number,
		y: number,
		nx: number,
		ny: number,
		sxh: number,
		syh: number,
		margin: number
	): void {
		if (Math.abs(nx) < Math.abs(ny)) {
			if (0 < ny) {
				if (y <= this.y + margin) {
					this.y += Math.max(margin, sxh);
					this.x = x;
				} else {
					this.y = y;
				}
			} else {
				if (this.y - margin <= y) {
					this.y -= Math.max(margin, syh);
					this.x = x;
				} else {
					this.y = y;
				}
			}
		} else {
			if (0 < nx) {
				if (x <= this.x + margin) {
					this.x += Math.max(margin, sxh);
					this.y = y;
				} else {
					this.x = x;
				}
			} else {
				if (this.x - margin <= x) {
					this.x -= Math.max(margin, sxh);
					this.y = y;
				} else {
					this.x = x;
				}
			}
		}
	}

	middle(x: number, y: number): void {
		const dx = x - this._x;
		const dy = y - this._y;
		if (Math.abs(dx) < Math.abs(dy)) {
			this.y = y;
		} else {
			this.x = x;
		}
	}

	head(
		x: number,
		y: number,
		nx: number,
		ny: number,
		sxh: number,
		syh: number,
		margin: number
	): void {
		if (Math.abs(nx) < Math.abs(ny)) {
			if (0 < ny) {
				if (this.y <= y + margin) {
					this.y = y + Math.max(margin, syh);
				}
			} else {
				if (y - margin <= this.y) {
					this.y = y - Math.max(margin, syh);
				}
			}
			this.x = x;
			this.y = y;
		} else {
			if (0 < nx) {
				if (this.x <= x + margin) {
					this.x = x + Math.max(margin, sxh);
				}
			} else {
				if (x - margin <= this.x) {
					this.x = x - Math.max(margin, sxh);
				}
			}
			this.y = y;
			this.x = x;
		}
	}

	margin(tail: number, head: number): void {
		const values = this._values;

		// Tail
		let index = this.index;
		if (tail !== 0 && 2 <= index) {
			const x0 = values[0];
			const y0 = values[1];
			const dx = values[2] - x0;
			const dy = values[3] - y0;
			const d = dx * dx + dy * dy;
			const threshold = this._threshold;
			if (threshold < d) {
				const f = tail / Math.sqrt(dx * dx + dy * dy);
				if (threshold < Math.abs(f - 1)) {
					values[0] = x0 + dx * f;
					values[1] = y0 + dy * f;
				} else {
					this.index -= 2;
				}
			}
		}

		// Head
		index = this.index;
		if (head !== 0 && 2 <= index) {
			const x1 = values[index + 0];
			const y1 = values[index + 1];
			const dx = values[index - 2] - x1;
			const dy = values[index - 1] - y1;
			const d = dx * dx + dy * dy;
			const threshold = this._threshold;
			if (threshold < d) {
				const f = head / Math.sqrt(dx * dx + dy * dy);
				if (threshold < Math.abs(f - 1)) {
					values[index + 0] = x1 + dx * f;
					values[index + 1] = y1 + dy * f;
				} else {
					this.index -= 2;
				}
			}
		}

		// Remote the rest
		values.length = this.index + 2;
	}
}
