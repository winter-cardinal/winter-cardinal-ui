/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DColorGradient, DColorGradientPoint } from "./d-color-gradient";
import { DColorGradientPointObservable } from "./d-color-gradient-point-observable";

const POINT_SORTER = (a: DColorGradientPoint, b: DColorGradientPoint): number => {
	return a.position - b.position;
};

export class DColorGradientObservable extends utils.EventEmitter implements DColorGradient {
	protected _points: DColorGradientPointObservable[];
	protected _direction: number;
	protected _selected: DColorGradientPointObservable | null;

	protected _onChangeBound: (target: DColorGradientPointObservable) => void;
	protected _workColor: number[];

	constructor() {
		super();

		const onChangeBound = (target: DColorGradientPointObservable): void => {
			this.onChange(target);
		};
		this._onChangeBound = onChangeBound;

		const first = new DColorGradientPointObservable(0xffffff, 1, 0, false, onChangeBound);
		const second = new DColorGradientPointObservable(0x808080, 1, 1, true, onChangeBound);
		this._points = [first, second];
		this._direction = -90;
		this._selected = second;
		this._workColor = [0, 0, 0];
	}

	protected onChange(target: DColorGradientPointObservable): void {
		const isSelectionChanged = target.selected && this._selected !== target;
		if (isSelectionChanged) {
			const selected = this._selected;
			if (selected != null) {
				(selected as any)._selected = false;
			}
			this._selected = target;
		}
		this._points.sort(POINT_SORTER);
		if (isSelectionChanged) {
			this.emit("selectionchange", this._selected, this);
		}
		this.emit("change", this);
	}

	get points(): DColorGradientPointObservable[] {
		return this._points;
	}

	get direction(): number {
		return this._direction;
	}

	set direction(direction: number) {
		if (this._direction !== direction) {
			this._direction = direction;
			this.emit("directionchange", direction, this);
			this.emit("change", this);
		}
	}

	get selected(): DColorGradientPointObservable | null {
		return this._selected;
	}

	size(): number {
		return this._points.length;
	}

	get(index: number): DColorGradientPointObservable | null {
		const points = this._points;
		if (0 <= index && index < points.length) {
			return points[index];
		}
		return null;
	}

	addAt(position: number): DColorGradientPointObservable {
		const points = this._points;
		let previous: DColorGradientPointObservable | null = null;
		for (let i = 0, imax = points.length; i < imax; ++i) {
			const point = points[i];
			if (position <= point.position) {
				if (previous != null) {
					const span = point.position - previous.position;
					if (0.001 < span) {
						const rgb0 = utils.hex2rgb(point.color, this._workColor);
						const r0 = rgb0[0];
						const g0 = rgb0[1];
						const b0 = rgb0[2];

						const rgb1 = utils.hex2rgb(previous.color, this._workColor);
						const r1 = rgb1[0];
						const g1 = rgb1[1];
						const b1 = rgb1[2];

						const ratio = (position - previous.position) / span;
						const r = r0 * ratio + r1 * (1 - ratio);
						const g = g0 * ratio + g1 * (1 - ratio);
						const b = b0 * ratio + b1 * (1 - ratio);

						const rgb = this._workColor;
						rgb[0] = r;
						rgb[1] = g;
						rgb[2] = b;

						const color = utils.rgb2hex(rgb);
						const alpha = point.alpha * ratio + previous.alpha * (1 - ratio);
						return this.add(color, alpha, position, true);
					}
				} else {
					return this.add(point.color, point.alpha, position, true);
				}
			}
			previous = point;
		}
		if (previous != null) {
			return this.add(previous.color, previous.alpha, position, true);
		} else {
			return this.add(0xffffff, 1.0, position, true);
		}
	}

	add(
		color: number,
		alpha: number,
		position: number,
		selected: boolean
	): DColorGradientPointObservable {
		const onChangeBound = this._onChangeBound;
		const result = new DColorGradientPointObservable(
			color,
			alpha,
			position,
			selected,
			onChangeBound
		);
		this._points.push(result);
		onChangeBound(result);
		return result;
	}

	remove(point: DColorGradientPointObservable): boolean {
		const points = this._points;
		if (2 < points.length) {
			for (let i = 0, imax = points.length; i < imax; ++i) {
				if (points[i] === point) {
					points.splice(i, 1);
					const isSelectionChanged = this._selected === point;
					if (isSelectionChanged) {
						if (i + 1 < imax) {
							this._selected = points[i];
						} else {
							this._selected = points[i - 1];
						}
					}
					if (isSelectionChanged) {
						this.emit("selectionchange", this._selected, this);
					}
					this.emit("change", this);
					return true;
				}
			}
		}
		return false;
	}

	reset(): this {
		const oldDirection = this._direction;
		this._direction = -90;

		const points = this._points;
		const oldSelected = this._selected;
		const index = oldSelected ? points.indexOf(oldSelected) : -1;
		points.length = 0;
		const onChangeBound = this._onChangeBound;
		points.push(new DColorGradientPointObservable(0xffffff, 0, 0, false, onChangeBound));
		points.push(new DColorGradientPointObservable(0xffffff, 0, 1, false, onChangeBound));

		if (0 <= index && index < points.length) {
			const point = points[index];
			(point as any)._selected = true;
			this._selected = point;
		} else if (0 < points.length) {
			const point = points[points.length - 1];
			(point as any)._selected = true;
			this._selected = point;
		} else {
			this._selected = null;
		}
		if (oldSelected !== this._selected) {
			this.emit("selectionchange", this._selected, this);
		}

		if (oldDirection !== this._direction) {
			this.emit("directionchange", this._direction, this);
		}

		this.emit("change", this);
		return this;
	}

	toObject(): DColorGradient {
		const pointsCopy = [];
		const points = this._points;
		for (let i = 0, imax = points.length; i < imax; ++i) {
			pointsCopy.push(points[i].toObject());
		}
		return {
			points: pointsCopy,
			direction: this._direction
		};
	}

	fromObject(data: DColorGradient): this {
		const oldDirection = this._direction;
		this._direction = data.direction;

		const points = this._points;
		const oldSelected = this._selected;
		const index = oldSelected ? points.indexOf(oldSelected) : -1;
		points.length = 0;
		const onChangeBound = this._onChangeBound;
		for (let i = 0, imax = data.points.length; i < imax; ++i) {
			const pointLike = data.points[i];
			const point = new DColorGradientPointObservable(
				pointLike.color,
				pointLike.alpha,
				pointLike.position,
				false,
				onChangeBound
			);
			points.push(point);
		}
		points.sort(POINT_SORTER);

		if (0 <= index && index < points.length) {
			const point = points[index];
			(point as any)._selected = true;
			this._selected = point;
		} else if (0 < points.length) {
			const point = points[points.length - 1];
			(point as any)._selected = true;
			this._selected = point;
		} else {
			this._selected = null;
		}
		if (oldSelected !== this._selected) {
			this.emit("selectionchange", this._selected, this);
		}

		if (oldDirection !== this._direction) {
			this.emit("directionchange", this._direction, this);
		}

		this.emit("change", this);
		return this;
	}
}
