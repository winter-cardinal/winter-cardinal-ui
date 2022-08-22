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

	protected toAxis(dx: number, dy: number, nx: number, ny: number): 0 | 1 | 2 | 3 {
		const anx = Math.abs(nx);
		const any = Math.abs(ny);
		const threshold = this._threshold;
		if (anx < threshold && any < threshold) {
			if (Math.abs(dx) < Math.abs(dy)) {
				if (0 <= dy) {
					return 2;
				} else {
					return 0;
				}
			} else {
				if (0 <= dx) {
					return 1;
				} else {
					return 3;
				}
			}
		}
		const s = 0.2;
		if (0 <= nx) {
			if (0 <= ny) {
				if (s < anx && s < any) {
					if (dx < dy) {
						return 2;
					} else {
						return 1;
					}
				} else if (s < anx) {
					return 1;
				} else {
					return 2;
				}
			} else {
				if (s < anx && s < any) {
					if (dx < -dy) {
						return 0;
					} else {
						return 2;
					}
				} else if (s < anx) {
					return 2;
				} else {
					return 0;
				}
			}
		} else {
			if (0 <= ny) {
				if (s < anx && s < any) {
					if (-dx < dy) {
						return 2;
					} else {
						return 3;
					}
				} else if (s < anx) {
					return 3;
				} else {
					return 2;
				}
			} else {
				if (s < anx && s < any) {
					if (dy < dx) {
						return 0;
					} else {
						return 3;
					}
				} else if (s < anx) {
					return 3;
				} else {
					return 0;
				}
			}
		}
	}

	protected toTailAxis(x: number, y: number, nx: number, ny: number): 0 | 1 | 2 | 3 {
		return this.toAxis(x - this.x, y - this.y, nx, ny);
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
		switch (this.toTailAxis(x, y, nx, ny)) {
			case 0:
				if (this.y - margin <= y) {
					this.y -= Math.max(margin, syh);
					this.x = x;
				} else {
					this.y = y;
				}
				break;
			case 1:
				if (x <= this.x + margin) {
					this.x += Math.max(margin, sxh);
					this.y = y;
				} else {
					this.x = x;
				}
				break;
			case 2:
				if (y <= this.y + margin) {
					this.y += Math.max(margin, sxh);
					this.x = x;
				} else {
					this.y = y;
				}
				break;
			case 3:
				if (this.x - margin <= x) {
					this.x -= Math.max(margin, sxh);
					this.y = y;
				} else {
					this.x = x;
				}
				break;
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

	protected toHeadAxis(x: number, y: number, nx: number, ny: number): 0 | 1 | 2 | 3 {
		return this.toAxis(this.x - x, this.y - y, nx, ny);
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
		switch (this.toHeadAxis(x, y, nx, ny)) {
			case 0:
				if (y - margin <= this.y) {
					this.y = y - Math.max(margin, syh);
				}
				this.x = x;
				this.y = y;
				break;
			case 1:
				if (this.x <= x + margin) {
					this.x = x + Math.max(margin, sxh);
				}
				this.y = y;
				this.x = x;
				break;
			case 2:
				if (this.y <= y + margin) {
					this.y = y + Math.max(margin, syh);
				}
				this.x = x;
				this.y = y;
				break;
			case 3:
				if (x - margin <= this.x) {
					this.x = x - Math.max(margin, sxh);
				}
				this.y = y;
				this.x = x;
				break;
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
